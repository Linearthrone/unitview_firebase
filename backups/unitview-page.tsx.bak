'use client';

import { useState, useEffect } from 'react';
import { PatientGrid } from '@/components/shared/patient-grid';
import { getUnits, Unit } from '@/lib/firebase';
import { toast } from '@/components/ui/use-toast';

export default function UnitViewPage() {
  const [units, setUnits] = useState<Unit[]>([]);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [loading, setLoading] = useState(true);
  
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
          <h1 className="text-3xl font-bold mb-4">UnitView</h1>
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
        <h1 className="text-3xl font-bold mb-4">UnitView</h1>
        <p className="text-gray-600">
          View and manage patient assignments for nursing units.
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
      
      <div className="bg-white rounded-lg shadow">
        {selectedUnit ? (
          <PatientGrid unitId={selectedUnit.id} />
        ) : (
          <div className="p-8 text-center">
            <p className="text-gray-500">Please select a unit to view</p>
          </div>
        )}
      </div>
    </div>
  );
}