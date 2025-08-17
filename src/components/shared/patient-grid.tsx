'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { NurseCard } from '@/components/shared/nurse-card';
import { PCTCard } from '@/components/shared/pct-card';
import { StaffCard } from '@/components/shared/staff-card';
import { 
  loadUnitData,
  initializeUnitData,
  updatePatient,
  updateNurse,
  updatePCT,
  updateStaffMember,
  batchUpdatePatients,
  Unit,
  Patient,
  Nurse,
  PCT,
  StaffMember
} from '@/lib/firebase-optimized';
import { toast } from '@/components/ui/use-toast';

interface PatientGridProps {
  unitId: string;
}

export function PatientGrid({ unitId }: PatientGridProps) {
  const [unit, setUnit] = useState<Unit | null>(null);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [nurses, setNurses] = useState<Nurse[]>([]);
  const [pcts, setPCTs] = useState<PCT[]>([]);
  const [chargeNurse, setChargeNurse] = useState<StaffMember | null>(null);
  const [unitClerk, setUnitClerk] = useState<StaffMember | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(false);
  const [pendingChanges, setPendingChanges] = useState<{
    patients: { [id: string]: Partial<Patient> },
    nurses: { [id: string]: Partial<Nurse> },
    pcts: { [id: string]: Partial<PCT> },
    staff: { [id: string]: Partial<StaffMember> }
  }>({
    patients: {},
    nurses: {},
    pcts: {},
    staff: {}
  });
  
  // Load unit data and associated staff/patients
  useEffect(() => {
    const loadData = async () => {
      if (!unitId) return;
      
      try {
        setLoading(true);
        
        // Load all unit data at once using the optimized function
        const unitData = await loadUnitData(unitId);
        
        if (!unitData.unit) {
          toast({
            title: 'Error',
            description: 'Unit not found',
            variant: 'destructive',
          });
          return;
        }
        
        setUnit(unitData.unit);
        setPatients(unitData.patients);
        setNurses(unitData.nurses);
        setPCTs(unitData.pcts);
        setChargeNurse(unitData.chargeNurse);
        setUnitClerk(unitData.unitClerk);
        
        // If no data exists yet, we need to initialize the unit
        if (unitData.patients.length === 0 && unitData.nurses.length === 0) {
          setInitializing(true);
          const initializedData = await initializeUnitData(unitData.unit);
          setPatients(initializedData.patients);
          setNurses(initializedData.nurses);
          setPCTs(initializedData.pcts);
          setChargeNurse(initializedData.chargeNurse);
          setUnitClerk(initializedData.unitClerk);
          setInitializing(false);
          
          toast({
            title: 'Unit Initialized',
            description: 'Unit data has been created successfully',
          });
        }
      } catch (error) {
        console.error('Error loading unit data:', error);
        toast({
          title: 'Error',
          description: 'Failed to load unit data',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, [unitId]);
  
  // Memoized list of unassigned patients for better performance
  const unassignedPatients = useMemo(() => {
    return patients.filter(p => !p.assigned);
  }, [patients]);
  
  // Optimistic UI update for patient assignment
  const handleAssignPatient = useCallback(async (nurseId: string, patientId: string) => {
    try {
      // Find the nurse and patient
      const nurse = nurses.find(n => n.id === nurseId);
      const patient = patients.find(p => p.id === patientId);
      
      if (!nurse || !patient) return;
      
      // Update nurse assignments (optimistic update)
      const updatedAssignedRooms = [...nurse.assignedRooms];
      if (!updatedAssignedRooms.includes(patient.roomNumber)) {
        updatedAssignedRooms.push(patient.roomNumber);
        updatedAssignedRooms.sort((a, b) => parseInt(a) - parseInt(b));
      }
      
      // Update local state immediately (optimistic update)
      setNurses(nurses.map(n => 
        n.id === nurseId ? { ...n, assignedRooms: updatedAssignedRooms } : n
      ));
      
      setPatients(patients.map(p => 
        p.id === patientId ? { ...p, assigned: true } : p
      ));
      
      // Add to pending changes
      setPendingChanges(prev => ({
        ...prev,
        nurses: {
          ...prev.nurses,
          [nurseId]: { assignedRooms: updatedAssignedRooms }
        },
        patients: {
          ...prev.patients,
          [patientId]: { assigned: true }
        }
      }));
      
      // Update in database
      await Promise.all([
        updateNurse(nurseId, { assignedRooms: updatedAssignedRooms }),
        updatePatient(patientId, { assigned: true })
      ]);
      
      // Clear from pending changes after successful update
      setPendingChanges(prev => {
        const { [nurseId]: _, ...remainingNurses } = prev.nurses;
        const { [patientId]: __, ...remainingPatients } = prev.patients;
        return {
          ...prev,
          nurses: remainingNurses,
          patients: remainingPatients
        };
      });
    } catch (error) {
      console.error('Error assigning patient:', error);
      toast({
        title: 'Error',
        description: 'Failed to assign patient. Changes will be saved when connection is restored.',
        variant: 'destructive',
      });
    }
  }, [nurses, patients]);
  
  // Optimistic UI update for patient unassignment
  const handleUnassignPatient = useCallback(async (nurseId: string, roomNumber: string) => {
    try {
      // Find the nurse and patient
      const nurse = nurses.find(n => n.id === nurseId);
      const patient = patients.find(p => p.roomNumber === roomNumber);
      
      if (!nurse || !patient) return;
      
      // Update nurse assignments (optimistic update)
      const updatedAssignedRooms = nurse.assignedRooms.filter(room => room !== roomNumber);
      
      // Update local state immediately (optimistic update)
      setNurses(nurses.map(n => 
        n.id === nurseId ? { ...n, assignedRooms: updatedAssignedRooms } : n
      ));
      
      setPatients(patients.map(p => 
        p.roomNumber === roomNumber ? { ...p, assigned: false } : p
      ));
      
      // Add to pending changes
      setPendingChanges(prev => ({
        ...prev,
        nurses: {
          ...prev.nurses,
          [nurseId]: { assignedRooms: updatedAssignedRooms }
        },
        patients: {
          ...prev.patients,
          [patient.id]: { assigned: false }
        }
      }));
      
      // Update in database
      await Promise.all([
        updateNurse(nurseId, { assignedRooms: updatedAssignedRooms }),
        updatePatient(patient.id, { assigned: false })
      ]);
      
      // Clear from pending changes after successful update
      setPendingChanges(prev => {
        const { [nurseId]: _, ...remainingNurses } = prev.nurses;
        const { [patient.id]: __, ...remainingPatients } = prev.patients;
        return {
          ...prev,
          nurses: remainingNurses,
          patients: remainingPatients
        };
      });
    } catch (error) {
      console.error('Error unassigning patient:', error);
      toast({
        title: 'Error',
        description: 'Failed to unassign patient. Changes will be saved when connection is restored.',
        variant: 'destructive',
      });
    }
  }, [nurses, patients]);
  
  // Optimistic UI update for nurse information
  const handleUpdateNurse = useCallback(async (nurseId: string, data: Partial<Nurse>) => {
    try {
      // Update local state immediately (optimistic update)
      setNurses(nurses.map(nurse => 
        nurse.id === nurseId ? { ...nurse, ...data } : nurse
      ));
      
      // Add to pending changes
      setPendingChanges(prev => ({
        ...prev,
        nurses: {
          ...prev.nurses,
          [nurseId]: { ...prev.nurses[nurseId], ...data }
        }
      }));
      
      // Update in database
      await updateNurse(nurseId, data);
      
      // Clear from pending changes after successful update
      setPendingChanges(prev => {
        const { [nurseId]: _, ...remainingNurses } = prev.nurses;
        return {
          ...prev,
          nurses: remainingNurses
        };
      });
      
      toast({
        title: 'Nurse Updated',
        description: 'Nurse information has been updated',
      });
    } catch (error) {
      console.error('Error updating nurse:', error);
      toast({
        title: 'Error',
        description: 'Failed to update nurse information. Changes will be saved when connection is restored.',
        variant: 'destructive',
      });
    }
  }, [nurses]);
  
  // Optimistic UI update for PCT information
  const handleUpdatePCT = useCallback(async (pctId: string, data: Partial<PCT>) => {
    try {
      // Update local state immediately (optimistic update)
      setPCTs(pcts.map(pct => 
        pct.id === pctId ? { ...pct, ...data } : pct
      ));
      
      // Add to pending changes
      setPendingChanges(prev => ({
        ...prev,
        pcts: {
          ...prev.pcts,
          [pctId]: { ...prev.pcts[pctId], ...data }
        }
      }));
      
      // Update in database
      await updatePCT(pctId, data);
      
      // Clear from pending changes after successful update
      setPendingChanges(prev => {
        const { [pctId]: _, ...remainingPCTs } = prev.pcts;
        return {
          ...prev,
          pcts: remainingPCTs
        };
      });
      
      toast({
        title: 'PCT Updated',
        description: 'PCT information has been updated',
      });
    } catch (error) {
      console.error('Error updating PCT:', error);
      toast({
        title: 'Error',
        description: 'Failed to update PCT information. Changes will be saved when connection is restored.',
        variant: 'destructive',
      });
    }
  }, [pcts]);
  
  // Optimistic UI update for charge nurse information
  const handleUpdateChargeNurse = useCallback(async (data: Partial<StaffMember>) => {
    try {
      if (!chargeNurse) return;
      
      // Update local state immediately (optimistic update)
      setChargeNurse({ ...chargeNurse, ...data });
      
      // Add to pending changes
      setPendingChanges(prev => ({
        ...prev,
        staff: {
          ...prev.staff,
          [chargeNurse.id]: { ...prev.staff[chargeNurse.id], ...data }
        }
      }));
      
      // Update in database
      await updateStaffMember(chargeNurse.id, data);
      
      // Clear from pending changes after successful update
      setPendingChanges(prev => {
        const { [chargeNurse.id]: _, ...remainingStaff } = prev.staff;
        return {
          ...prev,
          staff: remainingStaff
        };
      });
      
      toast({
        title: 'Charge Nurse Updated',
        description: 'Charge nurse information has been updated',
      });
    } catch (error) {
      console.error('Error updating charge nurse:', error);
      toast({
        title: 'Error',
        description: 'Failed to update charge nurse information. Changes will be saved when connection is restored.',
        variant: 'destructive',
      });
    }
  }, [chargeNurse]);
  
  // Optimistic UI update for unit clerk information
  const handleUpdateUnitClerk = useCallback(async (data: Partial<StaffMember>) => {
    try {
      if (!unitClerk) return;
      
      // Update local state immediately (optimistic update)
      setUnitClerk({ ...unitClerk, ...data });
      
      // Add to pending changes
      setPendingChanges(prev => ({
        ...prev,
        staff: {
          ...prev.staff,
          [unitClerk.id]: { ...prev.staff[unitClerk.id], ...data }
        }
      }));
      
      // Update in database
      await updateStaffMember(unitClerk.id, data);
      
      // Clear from pending changes after successful update
      setPendingChanges(prev => {
        const { [unitClerk.id]: _, ...remainingStaff } = prev.staff;
        return {
          ...prev,
          staff: remainingStaff
        };
      });
      
      toast({
        title: 'Unit Clerk Updated',
        description: 'Unit clerk information has been updated',
      });
    } catch (error) {
      console.error('Error updating unit clerk:', error);
      toast({
        title: 'Error',
        description: 'Failed to update unit clerk information. Changes will be saved when connection is restored.',
        variant: 'destructive',
      });
    }
  }, [unitClerk]);
  
  // Save all pending changes at once
  const handleSaveLayout = useCallback(async () => {
    try {
      // Prepare batch updates
      const patientUpdates = Object.entries(pendingChanges.patients).map(([id, data]) => ({
        id,
        data
      }));
      
      // Apply all pending changes
      if (patientUpdates.length > 0) {
        await batchUpdatePatients(patientUpdates);
      }
      
      // Apply individual updates for nurses, PCTs, and staff
      await Promise.all([
        ...Object.entries(pendingChanges.nurses).map(([id, data]) => 
          updateNurse(id, data)
        ),
        ...Object.entries(pendingChanges.pcts).map(([id, data]) => 
          updatePCT(id, data)
        ),
        ...Object.entries(pendingChanges.staff).map(([id, data]) => 
          updateStaffMember(id, data)
        )
      ]);
      
      // Clear all pending changes
      setPendingChanges({
        patients: {},
        nurses: {},
        pcts: {},
        staff: {}
      });
      
      setEditMode(false);
      toast({
        title: 'Layout Saved',
        description: 'Unit layout has been saved successfully',
      });
    } catch (error) {
      console.error('Error saving layout:', error);
      toast({
        title: 'Error',
        description: 'Failed to save some changes. Please try again.',
        variant: 'destructive',
      });
    }
  }, [pendingChanges]);
  
  // Check if there are any pending changes
  const hasPendingChanges = useMemo(() => {
    return Object.keys(pendingChanges.patients).length > 0 ||
           Object.keys(pendingChanges.nurses).length > 0 ||
           Object.keys(pendingChanges.pcts).length > 0 ||
           Object.keys(pendingChanges.staff).length > 0;
  }, [pendingChanges]);
  
  if (loading || initializing) {
    return (
      <div className="bg-white rounded-lg border p-4 flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-t-blue-600 border-blue-200 rounded-full animate-spin mx-auto mb-3"></div>
          <p className="text-gray-600">{initializing ? 'Initializing unit data...' : 'Loading...'}</p>
        </div>
      </div>
    );
  }
  
  if (!unit) {
    return (
      <div className="bg-white rounded-lg border p-4">
        <p className="text-center text-gray-500">Unit not found</p>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg border p-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">{unit.designation} Patient Grid</h3>
        <div className="flex gap-2">
          {hasPendingChanges && (
            <div className="text-amber-600 text-sm flex items-center">
              <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mr-1"></span>
              Unsaved changes
            </div>
          )}
          <Button 
            variant={editMode ? "default" : "outline"} 
            onClick={() => editMode ? handleSaveLayout() : setEditMode(true)}
          >
            {editMode ? "Save Layout" : "Edit Layout"}
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Unassigned Patients */}
        <div className="border rounded-lg p-4">
          <h4 className="font-medium mb-3">Unassigned Patients</h4>
          <div className="space-y-2">
            {unassignedPatients.map(patient => (
              <div key={patient.id} className="flex justify-between items-center p-2 border rounded bg-gray-50">
                <div>
                  <span className="font-medium">Room {patient.roomNumber}</span>
                  {patient.name && <span className="ml-2 text-sm">{patient.name}</span>}
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  patient.acuity >= 4 ? 'bg-red-100 text-red-800' :
                  patient.acuity >= 3 ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  Acuity {patient.acuity}
                </span>
              </div>
            ))}
            {unassignedPatients.length === 0 && (
              <p className="text-sm text-gray-500 italic">All patients assigned</p>
            )}
          </div>
        </div>
        
        {/* Nurse Cards */}
        {nurses.map(nurse => (
          <NurseCard
            key={nurse.id}
            nurse={nurse}
            patients={patients}
            onAssign={(patientId) => handleAssignPatient(nurse.id, patientId)}
            onUnassign={(roomNumber) => handleUnassignPatient(nurse.id, roomNumber)}
            onUpdate={(data) => handleUpdateNurse(nurse.id, data)}
            editMode={editMode}
          />
        ))}
        
        {/* PCT Cards */}
        {pcts.map(pct => (
          <PCTCard
            key={pct.id}
            pct={pct}
            onUpdate={(data) => handleUpdatePCT(pct.id, data)}
            editMode={editMode}
          />
        ))}
        
        {/* Charge Nurse Card */}
        {chargeNurse && (
          <StaffCard
            title="Charge Nurse"
            staffMember={chargeNurse}
            onUpdate={handleUpdateChargeNurse}
            editMode={editMode}
            size="small"
          />
        )}
        
        {/* Unit Clerk Card */}
        {unitClerk && (
          <StaffCard
            title="Unit Clerk"
            staffMember={unitClerk}
            onUpdate={handleUpdateUnitClerk}
            editMode={editMode}
            size="small"
          />
        )}
      </div>
    </div>
  );
}