'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CreateUnitDialog } from '@/components/facility/create-unit-dialog';
import { ModuleToggleCard } from '@/components/facility/module-toggle-card';
import { PatientGrid } from '@/components/shared/patient-grid';
import { UnitCard } from '@/components/facility/unit-card';
import { getUnits, createUnit, getModules, updateModule, setupDefaultModules, Unit, Module } from '@/lib/firebase';
import { toast } from '@/components/ui/use-toast';

export default function FacilitySetupPage() {
  const [units, setUnits] = useState<Unit[]>([]);
  const [modules, setModules] = useState<Module[]>([]);
  const [isCreateUnitOpen, setIsCreateUnitOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [loading, setLoading] = useState(true);

  // Load units and modules on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Initialize default modules if they don't exist
        await setupDefaultModules();
        
        // Load units
        const unitData = await getUnits();
        setUnits(unitData);
        
        // Set selected unit to the first unit if available
        if (unitData.length > 0 && !selectedUnit) {
          setSelectedUnit(unitData[0]);
        }
        
        // Load modules
        const moduleData = await getModules();
        setModules(moduleData);
      } catch (error) {
        console.error('Error loading data:', error);
        toast({
          title: 'Error',
          description: 'Failed to load data. Please try again.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  const handleCreateUnit = async (unitData: Omit<Unit, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const newUnit = await createUnit(unitData);
      setUnits([...units, newUnit]);
      setSelectedUnit(newUnit);
      setIsCreateUnitOpen(false);
      
      toast({
        title: 'Success',
        description: `Unit "${newUnit.designation}" has been created.`,
      });
    } catch (error) {
      console.error('Error creating unit:', error);
      toast({
        title: 'Error',
        description: 'Failed to create unit. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleModuleToggle = async (moduleId: string) => {
    try {
      // Find the module and toggle its state
      const moduleToUpdate = modules.find(m => m.id === moduleId);
      if (!moduleToUpdate) return;
      
      // Update in Firestore
      await updateModule(moduleId, !moduleToUpdate.enabled);
      
      // Update local state
      setModules(modules.map(module => 
        module.id === moduleId 
          ? { ...module, enabled: !module.enabled } 
          : module
      ));
      
      toast({
        title: 'Module Updated',
        description: `${moduleToUpdate.name} has been ${!moduleToUpdate.enabled ? 'enabled' : 'disabled'}.`,
      });
    } catch (error) {
      console.error('Error toggling module:', error);
      toast({
        title: 'Error',
        description: 'Failed to update module. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleSelectUnit = (unit: Unit) => {
    setSelectedUnit(unit);
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6 flex items-center justify-center h-[50vh]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-blue-600 border-blue-200 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Facility Setup</h1>
        <Button onClick={() => setIsCreateUnitOpen(true)}>Create New Unit</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left sidebar - Units list */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Units</h2>
          {units.length > 0 ? (
            units.map(unit => (
              <UnitCard 
                key={unit.id} 
                unit={unit} 
                isSelected={selectedUnit?.id === unit.id}
                onSelect={() => handleSelectUnit(unit)}
              />
            ))
          ) : (
            <div className="bg-gray-50 border rounded-lg p-6 text-center">
              <p className="text-gray-500 mb-4">No units have been created yet.</p>
              <Button variant="outline" onClick={() => setIsCreateUnitOpen(true)}>
                Create Your First Unit
              </Button>
            </div>
          )}
        </div>

        {/* Main content - Patient Grid */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">
            {selectedUnit ? `${selectedUnit.designation} Layout` : 'Select a Unit'}
          </h2>
          {selectedUnit ? (
            <PatientGrid unitId={selectedUnit.id} />
          ) : (
            <div className="bg-gray-50 border rounded-lg p-12 text-center">
              <p className="text-gray-500 mb-2">Select a unit from the sidebar or create a new unit to view the layout.</p>
            </div>
          )}
        </div>
      </div>

      {/* Modules Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Module Configuration</h2>
        {modules.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map(module => (
              <ModuleToggleCard
                key={module.id}
                module={module}
                onToggle={() => handleModuleToggle(module.id)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 border rounded-lg p-6 text-center">
            <p className="text-gray-500">No modules available.</p>
          </div>
        )}
      </div>

      {/* Create Unit Dialog */}
      <CreateUnitDialog
        open={isCreateUnitOpen}
        onClose={() => setIsCreateUnitOpen(false)}
        onCreateUnit={handleCreateUnit}
      />
    </div>
  );
}