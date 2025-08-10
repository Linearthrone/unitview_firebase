'use client';

import { useState, useEffect } from 'react';
import { PatientGrid } from '@/components/shared/patient-grid';
import { Button } from '@/components/ui/button';
import { getUnits, getPatientsByUnit, Unit } from '@/lib/firebase';
import { toast } from '@/components/ui/use-toast';

export default function ChargeViewPage() {
  const [units, setUnits] = useState<Unit[]>([]);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [loading, setLoading] = useState(true);
  const [unitMetrics, setUnitMetrics] = useState({
    totalBeds: 0,
    occupiedBeds: 0,
    availableBeds: 0,
    pendingAdmissions: 0,
    pendingDischarges: 0,
    highAcuityPatients: 0
  });
  
  // Load units on component mount
  useEffect(() => {
    const loadUnits = async () => {
      try {
        setLoading(true);
        const unitData = await getUnits();
        setUnits(unitData);
        
        // Set selected unit to the first unit if available
        if (unitData.length > 0 && !selectedUnit) {
          setSelectedUnit(unitData[0]);
        }
      } catch (error) {
        console.error('Error loading units:', error);
        toast({
          title: 'Error',
          description: 'Failed to load units. Please try again.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };
    
    loadUnits();
  }, []);
  
  // Load unit metrics when selected unit changes
  useEffect(() => {
    const loadUnitMetrics = async () => {
      if (!selectedUnit) return;
      
      try {
        // Get patients for this unit
        const patients = await getPatientsByUnit(selectedUnit.id);
        
        // Calculate metrics
        const totalBeds = selectedUnit.roomCount;
        const occupiedBeds = patients.filter(p => p.assigned).length;
        const availableBeds = totalBeds - occupiedBeds;
        const pendingAdmissions = Math.floor(Math.random() * 3); // Mock data
        const pendingDischarges = Math.floor(Math.random() * 4); // Mock data
        const highAcuityPatients = patients.filter(p => p.acuity >= 4).length;
        
        setUnitMetrics({
          totalBeds,
          occupiedBeds,
          availableBeds,
          pendingAdmissions,
          pendingDischarges,
          highAcuityPatients
        });
      } catch (error) {
        console.error('Error loading unit metrics:', error);
        toast({
          title: 'Error',
          description: 'Failed to load unit metrics',
          variant: 'destructive',
        });
      }
    };
    
    loadUnitMetrics();
  }, [selectedUnit]);
  
  if (loading) {
    return (
      <div className="container mx-auto p-6 flex items-center justify-center h-[50vh]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-blue-600 border-blue-200 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading units...</p>
        </div>
      </div>
    );
  }
  
  if (units.length === 0) {
    return (
      <div className="container mx-auto p-6">
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">ChargeView</h1>
          <p className="text-gray-600 mb-6">
            No units have been created yet. Please go to Facility Setup to create a unit.
          </p>
          <a 
            href="/facility-setup" 
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Go to Facility Setup
          </a>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">ChargeView</h1>
        <p className="text-gray-600">
          Comprehensive view for charge nurses to manage unit operations.
        </p>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Select Unit</label>
        <select 
          className="border rounded-md p-2 w-full max-w-xs"
          value={selectedUnit?.id || ''}
          onChange={(e) => {
            const unit = units.find(u => u.id === e.target.value);
            if (unit) setSelectedUnit(unit);
          }}
        >
          {units.map(unit => (
            <option key={unit.id} value={unit.id}>
              {unit.designation}
            </option>
          ))}
        </select>
      </div>
      
      {selectedUnit && (
        <>
          {/* Unit Metrics */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">{selectedUnit.designation} Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-blue-700">{unitMetrics.totalBeds}</div>
                <div className="text-sm text-gray-600">Total Beds</div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-700">{unitMetrics.occupiedBeds}</div>
                <div className="text-sm text-gray-600">Occupied</div>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-purple-700">{unitMetrics.availableBeds}</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-yellow-700">{unitMetrics.pendingAdmissions}</div>
                <div className="text-sm text-gray-600">Pending Admits</div>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-indigo-700">{unitMetrics.pendingDischarges}</div>
                <div className="text-sm text-gray-600">Pending Discharges</div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-red-700">{unitMetrics.highAcuityPatients}</div>
                <div className="text-sm text-gray-600">High Acuity</div>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <Button>Assign Patients</Button>
            <Button variant="outline">Print Assignments</Button>
            <Button variant="outline">Generate Report</Button>
            <Button variant="outline">Staff Directory</Button>
          </div>
          
          {/* Patient Grid */}
          <div className="bg-white rounded-lg shadow">
            <PatientGrid unitId={selectedUnit.id} />
          </div>
        </>
      )}
    </div>
  );
}