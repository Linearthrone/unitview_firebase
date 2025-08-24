
'use client';

import { useState, useEffect, Suspense } from 'react';
import { PatientGrid } from '@/components/shared/patient-grid';
import { getUnits, Unit, Facility, getFacilities } from '@/lib/firebase';
import { toast } from '@/components/ui/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { Hospital } from 'lucide-react';
import { LoginDialog } from '@/components/auth/login-dialog';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase-config';


// Loading skeleton component
function UnitViewSkeleton() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <Skeleton className="h-8 w-48 mb-2" />
        <Skeleton className="h-4 w-96" />
      </div>
      
      <Skeleton className="h-10 w-full max-w-xs mb-6" />
      
      <div className="bg-white rounded-lg shadow p-8">
        <div className="flex items-center justify-center h-[50vh]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-t-blue-600 border-blue-200 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UnitViewPage() {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [units, setUnits] = useState<Unit[]>([]);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [facilityToAuth, setFacilityToAuth] = useState<Facility | null>(null);

  // Load facilities on component mount
  useEffect(() => {
    const loadFacilities = async () => {
      try {
        setLoading(true);
        const facilitiesData = await getFacilities();
        setFacilities(facilitiesData);
      } catch (error) {
        console.error('Error loading facilities:', error);
        toast({
          title: 'Error',
          description: 'Failed to load facilities. Please try again.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };
    loadFacilities();
  }, []);
  
  // Load units when facility is selected and authenticated
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
          console.error(`Error loading units for ${selectedFacility.name}:`, error);
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
    if (selectedFacility?.id === facility.id && isAuthenticated) return;
    setFacilityToAuth(facility);
    setIsLoginOpen(true);
  };
  
  const handleLogin = async (data: {email:string, password: string}): Promise<boolean> => {
    try {
        await signInWithEmailAndPassword(auth, data.email, data.password);
        toast({ title: "Login Successful", description: `Viewing units for ${facilityToAuth?.name}` });
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

  if (loading && facilities.length === 0) {
    return <UnitViewSkeleton />;
  }

  if (!isAuthenticated || !selectedFacility) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Select a Facility to View Units</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.length > 0 ? facilities.map(facility => (
            <div key={facility.id} onClick={() => handleFacilitySelect(facility)}
                 className="border rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 hover:shadow-md transition-all">
               <Hospital className="w-12 h-12 mb-4 text-gray-500" />
               <h2 className="text-xl font-semibold">{facility.name}</h2>
            </div>
          )) : (
            <p className="text-gray-500 col-span-full text-center">No facilities found. Please create one in Facility Setup.</p>
          )}
        </div>
        <LoginDialog open={isLoginOpen} onOpenChange={setIsLoginOpen} onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-1">UnitView: {selectedFacility.name}</h1>
             <Button variant="link" className="p-0 h-auto" onClick={() => { setIsAuthenticated(false); setSelectedFacility(null); setUnits([]); setSelectedUnit(null); }}>Switch Facility</Button>
          </div>
          {units.length > 0 && (
            <div className="w-full max-w-xs">
              <label className="block text-sm font-medium mb-1 sr-only">Select Unit</label>
              <select 
                className="border rounded-md p-2 w-full"
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
          )}
      </div>
      
      <div className="bg-white rounded-lg shadow">
        <Suspense fallback={
          <div className="p-8 flex items-center justify-center h-64">
            <div className="w-12 h-12 border-4 border-t-blue-600 border-blue-200 rounded-full animate-spin"></div>
          </div>
        }>
          {selectedUnit ? (
            <PatientGrid unitId={selectedUnit.id} />
          ) : (
            <div className="p-8 text-center h-64 flex items-center justify-center">
              <p className="text-gray-500">
                {loading ? 'Loading units...' : `No units found for ${selectedFacility.name}. Please create one in Facility Setup.`}
              </p>
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
}
