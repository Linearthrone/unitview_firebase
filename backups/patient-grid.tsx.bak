'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { NurseCard } from '@/components/shared/nurse-card';
import { PCTCard } from '@/components/shared/pct-card';
import { StaffCard } from '@/components/shared/staff-card';
import { 
  getUnit, 
  getPatientsByUnit, 
  getNursesByUnit, 
  getPCTsByUnit, 
  getStaffByUnitAndRole,
  createPatient,
  createNurse,
  createPCT,
  createStaffMember,
  updatePatient,
  updateNurse,
  updatePCT,
  updateStaffMember,
  Unit,
  Patient,
  Nurse,
  PCT,
  StaffMember
} from '@/lib/firebase';
import { toast } from '@/components/ui/use-toast';

// Generate mock patients based on room ranges
const generateMockPatients = async (unit: Unit): Promise<Patient[]> => {
  const patients: Patient[] = [];
  
  for (const range of unit.roomRanges) {
    const [start, end] = range.split('-').map(num => parseInt(num, 10));
    for (let roomNum = start; roomNum <= end; roomNum++) {
      const patientData = {
        unitId: unit.id,
        roomNumber: roomNum.toString(),
        name: '',
        acuity: Math.floor(Math.random() * 5) + 1, // Random acuity 1-5
        assigned: false
      };
      
      try {
        const newPatient = await createPatient(patientData);
        patients.push(newPatient);
      } catch (error) {
        console.error('Error creating patient:', error);
      }
    }
  }
  
  return patients;
};

// Generate mock nurses
const generateMockNurses = async (unit: Unit): Promise<Nurse[]> => {
  const nurses: Nurse[] = [];
  
  for (let i = 0; i < unit.nurseCardCount; i++) {
    const nurseData = {
      unitId: unit.id,
      name: `Nurse ${i + 1}`,
      spectraNumber: `SN${10000 + i}`,
      reliefName: '',
      assignedRooms: [],
      acuityCapacity: 12
    };
    
    try {
      const newNurse = await createNurse(nurseData);
      nurses.push(newNurse);
    } catch (error) {
      console.error('Error creating nurse:', error);
    }
  }
  
  return nurses;
};

// Generate mock PCTs
const generateMockPCTs = async (unit: Unit): Promise<PCT[]> => {
  const pcts: PCT[] = [];
  
  for (let i = 0; i < unit.pctCardCount; i++) {
    // Divide room ranges among PCTs
    const rangeIndex = i % unit.roomRanges.length;
    const [start, end] = unit.roomRanges[rangeIndex].split('-').map(num => parseInt(num, 10));
    const rangeSize = end - start + 1;
    const pctRangeSize = Math.ceil(rangeSize / unit.pctCardCount);
    
    const pctStart = start + (i * pctRangeSize);
    const pctEnd = Math.min(pctStart + pctRangeSize - 1, end);
    
    const pctData = {
      unitId: unit.id,
      name: `PCT ${i + 1}`,
      spectraNumber: `PCT${10000 + i}`,
      reliefName: '',
      roomRange: `${pctStart}-${pctEnd}`
    };
    
    try {
      const newPCT = await createPCT(pctData);
      pcts.push(newPCT);
    } catch (error) {
      console.error('Error creating PCT:', error);
    }
  }
  
  return pcts;
};

// Generate charge nurse and unit clerk if needed
const generateStaffMembers = async (unit: Unit): Promise<{chargeNurse: StaffMember | null, unitClerk: StaffMember | null}> => {
  let chargeNurse = null;
  let unitClerk = null;
  
  if (unit.hasChargeNurse) {
    try {
      chargeNurse = await createStaffMember({
        unitId: unit.id,
        name: '',
        spectraNumber: '',
        role: 'chargeNurse'
      });
    } catch (error) {
      console.error('Error creating charge nurse:', error);
    }
  }
  
  if (unit.hasUnitClerk) {
    try {
      unitClerk = await createStaffMember({
        unitId: unit.id,
        name: '',
        spectraNumber: '',
        role: 'unitClerk'
      });
    } catch (error) {
      console.error('Error creating unit clerk:', error);
    }
  }
  
  return { chargeNurse, unitClerk };
};

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
  
  // Load unit data and associated staff/patients
  useEffect(() => {
    const loadUnitData = async () => {
      if (!unitId) return;
      
      try {
        setLoading(true);
        
        // Get unit details
        const unitData = await getUnit(unitId);
        if (!unitData) {
          toast({
            title: 'Error',
            description: 'Unit not found',
            variant: 'destructive',
          });
          return;
        }
        
        setUnit(unitData);
        
        // Get patients for this unit
        const patientData = await getPatientsByUnit(unitId);
        setPatients(patientData);
        
        // Get nurses for this unit
        const nurseData = await getNursesByUnit(unitId);
        setNurses(nurseData);
        
        // Get PCTs for this unit
        const pctData = await getPCTsByUnit(unitId);
        setPCTs(pctData);
        
        // Get charge nurse and unit clerk
        const chargeNurseData = await getStaffByUnitAndRole(unitId, 'chargeNurse');
        setChargeNurse(chargeNurseData);
        
        const unitClerkData = await getStaffByUnitAndRole(unitId, 'unitClerk');
        setUnitClerk(unitClerkData);
        
        // If no data exists yet, we need to initialize the unit
        if (patientData.length === 0 && nurseData.length === 0) {
          setInitializing(true);
          await initializeUnitData(unitData);
          setInitializing(false);
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
    
    loadUnitData();
  }, [unitId]);
  
  // Initialize unit data with mock data
  const initializeUnitData = async (unitData: Unit) => {
    try {
      // Create patients
      const newPatients = await generateMockPatients(unitData);
      setPatients(newPatients);
      
      // Create nurses
      const newNurses = await generateMockNurses(unitData);
      setNurses(newNurses);
      
      // Create PCTs
      const newPCTs = await generateMockPCTs(unitData);
      setPCTs(newPCTs);
      
      // Create charge nurse and unit clerk if needed
      const { chargeNurse: newChargeNurse, unitClerk: newUnitClerk } = await generateStaffMembers(unitData);
      setChargeNurse(newChargeNurse);
      setUnitClerk(newUnitClerk);
      
      toast({
        title: 'Unit Initialized',
        description: 'Unit data has been created successfully',
      });
    } catch (error) {
      console.error('Error initializing unit data:', error);
      toast({
        title: 'Error',
        description: 'Failed to initialize unit data',
        variant: 'destructive',
      });
    }
  };
  
  const handleAssignPatient = async (nurseId: string, patientId: string) => {
    try {
      // Find the nurse and patient
      const nurse = nurses.find(n => n.id === nurseId);
      const patient = patients.find(p => p.id === patientId);
      
      if (!nurse || !patient) return;
      
      // Update nurse assignments
      const updatedAssignedRooms = [...nurse.assignedRooms];
      if (!updatedAssignedRooms.includes(patient.roomNumber)) {
        updatedAssignedRooms.push(patient.roomNumber);
        updatedAssignedRooms.sort((a, b) => parseInt(a) - parseInt(b));
      }
      
      await updateNurse(nurseId, { assignedRooms: updatedAssignedRooms });
      
      // Mark patient as assigned
      await updatePatient(patientId, { assigned: true });
      
      // Update local state
      setNurses(nurses.map(n => 
        n.id === nurseId ? { ...n, assignedRooms: updatedAssignedRooms } : n
      ));
      
      setPatients(patients.map(p => 
        p.id === patientId ? { ...p, assigned: true } : p
      ));
    } catch (error) {
      console.error('Error assigning patient:', error);
      toast({
        title: 'Error',
        description: 'Failed to assign patient',
        variant: 'destructive',
      });
    }
  };
  
  const handleUnassignPatient = async (nurseId: string, roomNumber: string) => {
    try {
      // Find the nurse and patient
      const nurse = nurses.find(n => n.id === nurseId);
      const patient = patients.find(p => p.roomNumber === roomNumber);
      
      if (!nurse || !patient) return;
      
      // Update nurse assignments
      const updatedAssignedRooms = nurse.assignedRooms.filter(room => room !== roomNumber);
      
      await updateNurse(nurseId, { assignedRooms: updatedAssignedRooms });
      
      // Mark patient as unassigned
      await updatePatient(patient.id, { assigned: false });
      
      // Update local state
      setNurses(nurses.map(n => 
        n.id === nurseId ? { ...n, assignedRooms: updatedAssignedRooms } : n
      ));
      
      setPatients(patients.map(p => 
        p.roomNumber === roomNumber ? { ...p, assigned: false } : p
      ));
    } catch (error) {
      console.error('Error unassigning patient:', error);
      toast({
        title: 'Error',
        description: 'Failed to unassign patient',
        variant: 'destructive',
      });
    }
  };
  
  const handleUpdateNurse = async (nurseId: string, data: Partial<Nurse>) => {
    try {
      await updateNurse(nurseId, data);
      
      // Update local state
      setNurses(nurses.map(nurse => 
        nurse.id === nurseId ? { ...nurse, ...data } : nurse
      ));
      
      toast({
        title: 'Nurse Updated',
        description: 'Nurse information has been updated',
      });
    } catch (error) {
      console.error('Error updating nurse:', error);
      toast({
        title: 'Error',
        description: 'Failed to update nurse information',
        variant: 'destructive',
      });
    }
  };
  
  const handleUpdatePCT = async (pctId: string, data: Partial<PCT>) => {
    try {
      await updatePCT(pctId, data);
      
      // Update local state
      setPCTs(pcts.map(pct => 
        pct.id === pctId ? { ...pct, ...data } : pct
      ));
      
      toast({
        title: 'PCT Updated',
        description: 'PCT information has been updated',
      });
    } catch (error) {
      console.error('Error updating PCT:', error);
      toast({
        title: 'Error',
        description: 'Failed to update PCT information',
        variant: 'destructive',
      });
    }
  };
  
  const handleUpdateChargeNurse = async (data: Partial<StaffMember>) => {
    try {
      if (!chargeNurse) return;
      
      await updateStaffMember(chargeNurse.id, data);
      
      // Update local state
      setChargeNurse({ ...chargeNurse, ...data });
      
      toast({
        title: 'Charge Nurse Updated',
        description: 'Charge nurse information has been updated',
      });
    } catch (error) {
      console.error('Error updating charge nurse:', error);
      toast({
        title: 'Error',
        description: 'Failed to update charge nurse information',
        variant: 'destructive',
      });
    }
  };
  
  const handleUpdateUnitClerk = async (data: Partial<StaffMember>) => {
    try {
      if (!unitClerk) return;
      
      await updateStaffMember(unitClerk.id, data);
      
      // Update local state
      setUnitClerk({ ...unitClerk, ...data });
      
      toast({
        title: 'Unit Clerk Updated',
        description: 'Unit clerk information has been updated',
      });
    } catch (error) {
      console.error('Error updating unit clerk:', error);
      toast({
        title: 'Error',
        description: 'Failed to update unit clerk information',
        variant: 'destructive',
      });
    }
  };
  
  const handleSaveLayout = () => {
    setEditMode(false);
    toast({
      title: 'Layout Saved',
      description: 'Unit layout has been saved successfully',
    });
  };
  
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
        <Button 
          variant={editMode ? "default" : "outline"} 
          onClick={() => editMode ? handleSaveLayout() : setEditMode(true)}
        >
          {editMode ? "Save Layout" : "Edit Layout"}
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Unassigned Patients */}
        <div className="border rounded-lg p-4">
          <h4 className="font-medium mb-3">Unassigned Patients</h4>
          <div className="space-y-2">
            {patients.filter(p => !p.assigned).map(patient => (
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
            {patients.filter(p => !p.assigned).length === 0 && (
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