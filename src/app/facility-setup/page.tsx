
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CreateUnitDialog } from '@/components/facility/create-unit-dialog';
import { ModuleToggleCard } from '@/components/facility/module-toggle-card';
import { PatientGrid } from '@/components/shared/patient-grid';
import { UnitCard } from '@/components/facility/unit-card';
import { 
  getUnits, 
  createUnit, 
  getModules, 
  updateModule, 
  setupDefaultModules, 
  Unit, 
  Module,
  Facility,
  getFacilities,
  createFacility
} from '@/lib/firebase';
import { toast } from '@/components/ui/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { PlusCircle, Hospital } from 'lucide-react';
import { LoginDialog } from '@/components/auth/login-dialog';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase-config';

export default function FacilitySetupPage() {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [units, setUnits] = useState<Unit[]>([]);
  const [modules, setModules] = useState<Module[]>([]);
  const [isCreateUnitOpen, setIsCreateUnitOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [facilityToAuth, setFacilityToAuth] = useState<Facility | null>(null);
  const [isCreatingFacility, setIsCreatingFacility] = useState(false);
  const [newFacilityName, setNewFacilityName] = useState('');


  // Load initial data
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setLoading(true);
        await setupDefaultModules();
        const [facilitiesData, modulesData] = await Promise.all([
          getFacilities(),
          getModules()
        ]);
        setFacilities(facilitiesData);
        setModules(modulesData);
      } catch (error) {
        console.error('Error loading initial data:', error);
        toast({
          title: 'Error',
          description: 'Failed to load initial data. Please try again.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };
    loadInitialData();
  }, []);

  // Load units when a facility is selected and authenticated
  useEffect(() => {
    if (selectedFacility && isAuthenticated) {
      const loadUnits = async () => {
        try {
          setLoading(true);
          const unitData = await getUnits(selectedFacility.id);
          setUnits(unitData);
          if (unitData.length > 0) {
            setSelectedUnit(unitData[0]);
          } else {
            setSelectedUnit(null);
          }
        } catch (error) {
          console.error('Error loading units:', error);
          toast({
            title: 'Error',
            description: `Failed to load units for ${selectedFacility.name}.`,
            variant: 'destructive',
          });
        } finally {
          setLoading(false);
        }
      };
      loadUnits();
    }
  }, [selectedFacility, isAuthenticated]);

  const handleFacilitySelect = (facility: Facility) => {
    if (selectedFacility?.id === facility.id && isAuthenticated) {
      // If the same facility is clicked and we are authenticated, do nothing
      return;
    }
    setFacilityToAuth(facility);
    setIsLoginOpen(true);
  };
  
  const handleLogin = async (data: {email:string, password: string}): Promise<boolean> => {
    try {
        await signInWithEmailAndPassword(auth, data.email, data.password);
        toast({ title: "Login Successful", description: `Welcome to ${facilityToAuth?.name}` });
        setSelectedFacility(facilityToAuth);
        setIsAuthenticated(true);
        setIsLoginOpen(false);
        return true;
    } catch(error) {
        console.error("Login failed:", error)
        toast({ title: "Login Failed", description: "Invalid credentials. Please try again.", variant: 'destructive' });
        return false;
    }
  };
  
  const handleCreateFacility = async () => {
    if (!newFacilityName.trim()) {
      toast({ title: 'Error', description: 'Facility name cannot be empty', variant: 'destructive' });
      return;
    }
    try {
      const newFacility = await createFacility({ name: newFacilityName });
      setFacilities(prev => [...prev, newFacility]);
      setNewFacilityName('');
      setIsCreatingFacility(false);
      toast({ title: 'Success', description: `Facility "${newFacility.name}" created.` });
    } catch (error) {
      console.error("Failed to create facility", error);
      toast({ title: "Error", description: "Could not create facility", variant: 'destructive' });
    }
  };

  const handleCreateUnit = async (unitData: Omit<Unit, 'id' | 'createdAt' | 'updatedAt' | 'facilityId'>) => {
    if (!selectedFacility) return;
    try {
      toast({ title: 'Creating Unit', description: 'Please wait...' });
      const newUnit = await createUnit({ ...unitData, facilityId: selectedFacility.id });
      setUnits(prevUnits => [...prevUnits, newUnit]);
      setSelectedUnit(newUnit);
      setIsCreateUnitOpen(false);
      toast({ title: 'Success', description: `Unit "${newUnit.designation}" has been created.` });
    } catch (error) {
      console.error('Error creating unit:', error);
      toast({ title: 'Error', description: 'Failed to create unit.', variant: 'destructive' });
    }
  };

  const handleModuleToggle = async (moduleId: string) => {
    try {
      const moduleToUpdate = modules.find(m => m.id === moduleId);
      if (!moduleToUpdate) return;
      
      const newEnabledState = !moduleToUpdate.enabled;
      setModules(modules.map(module => module.id === moduleId ? { ...module, enabled: newEnabledState } : module));
      await updateModule(moduleId, newEnabledState);
      
      toast({ title: 'Module Updated', description: `${moduleToUpdate.name} has been ${newEnabledState ? 'enabled' : 'disabled'}.` });
    } catch (error) {
      console.error('Error toggling module:', error);
      setModules(modules); // Revert optimistic update
      toast({ title: 'Error', description: 'Failed to update module.', variant: 'destructive' });
    }
  };

  if (loading && facilities.length === 0) {
    return (
      <div className="container mx-auto p-6">
        <Skeleton className="h-10 w-48 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1,2,3,4].map(i => <Skeleton key={i} className="h-32 w-full" />)}
        </div>
      </div>
    );
  }
  
  if (!isAuthenticated || !selectedFacility) {
    return (
       <div className="container mx-auto p-6">
         <h1 className="text-3xl font-bold mb-6">Select a Facility</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {facilities.map(facility => (
             <div key={facility.id} onClick={() => handleFacilitySelect(facility)}
                  className="border rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 hover:shadow-md transition-all">
                <Hospital className="w-12 h-12 mb-4 text-gray-500" />
                <h2 className="text-xl font-semibold">{facility.name}</h2>
             </div>
           ))}
            <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
              {isCreatingFacility ? (
                <div className="w-full">
                  <input
                    type="text"
                    value={newFacilityName}
                    onChange={(e) => setNewFacilityName(e.target.value)}
                    placeholder="New Facility Name"
                    className="w-full p-2 border rounded mb-2"
                    autoFocus
                  />
                  <div className='flex gap-2 justify-center'>
                    <Button onClick={handleCreateFacility} size="sm">Create</Button>
                    <Button variant="ghost" size="sm" onClick={() => setIsCreatingFacility(false)}>Cancel</Button>
                  </div>
                </div>
              ) : (
                <button onClick={() => setIsCreatingFacility(true)} className="w-full h-full flex flex-col items-center justify-center">
                  <PlusCircle className="w-12 h-12 mb-4 text-gray-400" />
                  <h2 className="text-xl font-semibold text-gray-600">Add Facility</h2>
                </button>
              )}
            </div>
         </div>
         <LoginDialog open={isLoginOpen} onOpenChange={setIsLoginOpen} onLogin={handleLogin} />
       </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
            <h1 className="text-3xl font-bold">Facility Setup: {selectedFacility.name}</h1>
            <Button variant="link" className="p-0 h-auto" onClick={() => { setIsAuthenticated(false); setSelectedFacility(null); }}>Switch Facility</Button>
        </div>
        <Button onClick={() => setIsCreateUnitOpen(true)}>Create New Unit</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Units</h2>
          {units.length > 0 ? (
            units.map(unit => (
              <UnitCard 
                key={unit.id} 
                unit={unit} 
                isSelected={selectedUnit?.id === unit.id}
                onSelect={() => setSelectedUnit(unit)}
              />
            ))
          ) : (
            <div className="bg-gray-50 border rounded-lg p-6 text-center">
              <p className="text-gray-500 mb-4">No units created for this facility.</p>
              <Button variant="outline" onClick={() => setIsCreateUnitOpen(true)}>
                Create First Unit
              </Button>
            </div>
          )}
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">
            {selectedUnit ? `${selectedUnit.designation} Layout` : 'Select or Create a Unit'}
          </h2>
          {selectedUnit ? (
            <PatientGrid unitId={selectedUnit.id} />
          ) : (
            <div className="bg-gray-50 border rounded-lg p-12 text-center">
              <p className="text-gray-500">Select a unit or create one to see the layout.</p>
            </div>
          )}
        </div>
      </div>

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

      <CreateUnitDialog
        open={isCreateUnitOpen}
        onClose={() => setIsCreateUnitOpen(false)}
        onCreateUnit={handleCreateUnit}
      />
      <LoginDialog open={isLoginOpen} onOpenChange={setIsLoginOpen} onLogin={handleLogin} />
    </div>
  );
}
