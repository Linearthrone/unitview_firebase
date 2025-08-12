import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, query, where, DocumentData } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkfXVHFo7tR9oV0Cd-lVtXhDFDe9_yO_I",
    authDomain: "unitview.firebaseapp.com",
    databaseURL: "https://unitview-default-rtdb.firebaseio.com",
    projectId: "unitview",
    storageBucket: "unitview.firebasestorage.app",
    messagingSenderId: "185648925766",
    appId: "1:185648925766:web:5ae6271dd4977f6e158e47"

};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

// Unit Types
export interface Unit {
  id: string;
  designation: string;
  roomCount: number;
  roomRanges: string[];
  nurseCardCount: number;
  pctCardCount: number;
  hasChargeNurse: boolean;
  hasUnitClerk: boolean;
  createdAt?: number;
  updatedAt?: number;
}

// Patient Types
export interface Patient {
  id: string;
  unitId: string;
  roomNumber: string;
  name: string;
  acuity: number;
  assigned: boolean;
  notes?: string;
  createdAt?: number;
  updatedAt?: number;
}

// Staff Types
export interface Nurse {
  id: string;
  unitId: string;
  name: string;
  spectraNumber: string;
  reliefName: string;
  assignedRooms: string[];
  acuityCapacity: number;
  createdAt?: number;
  updatedAt?: number;
}

export interface PCT {
  id: string;
  unitId: string;
  name: string;
  spectraNumber: string;
  reliefName: string;
  roomRange: string;
  createdAt?: number;
  updatedAt?: number;
}

export interface StaffMember {
  id: string;
  unitId: string;
  name: string;
  spectraNumber: string;
  role: 'chargeNurse' | 'unitClerk';
  createdAt?: number;
  updatedAt?: number;
}

export interface Module {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  updatedAt?: number;
}

// Firebase Collection References
const unitsCollection = collection(db, 'units');
const patientsCollection = collection(db, 'patients');
const nursesCollection = collection(db, 'nurses');
const pctsCollection = collection(db, 'pcts');
const staffCollection = collection(db, 'staff');
const modulesCollection = collection(db, 'modules');

// Unit Functions
export async function createUnit(unitData: Omit<Unit, 'id' | 'createdAt' | 'updatedAt'>): Promise<Unit> {
  const timestamp = Date.now();
  const unitRef = doc(unitsCollection);
  const newUnit: Unit = {
    ...unitData,
    id: unitRef.id,
    createdAt: timestamp,
    updatedAt: timestamp
  };
  
  await setDoc(unitRef, newUnit);
  return newUnit;
}

export async function getUnits(): Promise<Unit[]> {
  const snapshot = await getDocs(unitsCollection);
  return snapshot.docs.map(doc => doc.data() as Unit);
}

export async function getUnit(unitId: string): Promise<Unit | null> {
  const unitRef = doc(unitsCollection, unitId);
  const unitSnap = await getDoc(unitRef);
  
  if (unitSnap.exists()) {
    return unitSnap.data() as Unit;
  }
  
  return null;
}

export async function updateUnit(unitId: string, data: Partial<Unit>): Promise<void> {
  const unitRef = doc(unitsCollection, unitId);
  await updateDoc(unitRef, {
    ...data,
    updatedAt: Date.now()
  });
}

export async function deleteUnit(unitId: string): Promise<void> {
  const unitRef = doc(unitsCollection, unitId);
  await deleteDoc(unitRef);
  
  // Delete related data
  await deleteUnitPatients(unitId);
  await deleteUnitNurses(unitId);
  await deleteUnitPCTs(unitId);
  await deleteUnitStaff(unitId);
}

// Patient Functions
export async function createPatient(patientData: Omit<Patient, 'id' | 'createdAt' | 'updatedAt'>): Promise<Patient> {
  const timestamp = Date.now();
  const patientRef = doc(patientsCollection);
  const newPatient: Patient = {
    ...patientData,
    id: patientRef.id,
    createdAt: timestamp,
    updatedAt: timestamp
  };
  
  await setDoc(patientRef, newPatient);
  return newPatient;
}

export async function getPatientsByUnit(unitId: string): Promise<Patient[]> {
  const q = query(patientsCollection, where('unitId', '==', unitId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => doc.data() as Patient);
}

export async function updatePatient(patientId: string, data: Partial<Patient>): Promise<void> {
  const patientRef = doc(patientsCollection, patientId);
  await updateDoc(patientRef, {
    ...data,
    updatedAt: Date.now()
  });
}

export async function deletePatient(patientId: string): Promise<void> {
  const patientRef = doc(patientsCollection, patientId);
  await deleteDoc(patientRef);
}

export async function deleteUnitPatients(unitId: string): Promise<void> {
  const q = query(patientsCollection, where('unitId', '==', unitId));
  const snapshot = await getDocs(q);
  
  const deletePromises = snapshot.docs.map(doc => deleteDoc(doc.ref));
  await Promise.all(deletePromises);
}

// Nurse Functions
export async function createNurse(nurseData: Omit<Nurse, 'id' | 'createdAt' | 'updatedAt'>): Promise<Nurse> {
  const timestamp = Date.now();
  const nurseRef = doc(nursesCollection);
  const newNurse: Nurse = {
    ...nurseData,
    id: nurseRef.id,
    createdAt: timestamp,
    updatedAt: timestamp
  };
  
  await setDoc(nurseRef, newNurse);
  return newNurse;
}

export async function getNursesByUnit(unitId: string): Promise<Nurse[]> {
  const q = query(nursesCollection, where('unitId', '==', unitId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => doc.data() as Nurse);
}

export async function updateNurse(nurseId: string, data: Partial<Nurse>): Promise<void> {
  const nurseRef = doc(nursesCollection, nurseId);
  await updateDoc(nurseRef, {
    ...data,
    updatedAt: Date.now()
  });
}

export async function deleteNurse(nurseId: string): Promise<void> {
  const nurseRef = doc(nursesCollection, nurseId);
  await deleteDoc(nurseRef);
}

export async function deleteUnitNurses(unitId: string): Promise<void> {
  const q = query(nursesCollection, where('unitId', '==', unitId));
  const snapshot = await getDocs(q);
  
  const deletePromises = snapshot.docs.map(doc => deleteDoc(doc.ref));
  await Promise.all(deletePromises);
}

// PCT Functions
export async function createPCT(pctData: Omit<PCT, 'id' | 'createdAt' | 'updatedAt'>): Promise<PCT> {
  const timestamp = Date.now();
  const pctRef = doc(pctsCollection);
  const newPCT: PCT = {
    ...pctData,
    id: pctRef.id,
    createdAt: timestamp,
    updatedAt: timestamp
  };
  
  await setDoc(pctRef, newPCT);
  return newPCT;
}

export async function getPCTsByUnit(unitId: string): Promise<PCT[]> {
  const q = query(pctsCollection, where('unitId', '==', unitId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => doc.data() as PCT);
}

export async function updatePCT(pctId: string, data: Partial<PCT>): Promise<void> {
  const pctRef = doc(pctsCollection, pctId);
  await updateDoc(pctRef, {
    ...data,
    updatedAt: Date.now()
  });
}

export async function deletePCT(pctId: string): Promise<void> {
  const pctRef = doc(pctsCollection, pctId);
  await deleteDoc(pctRef);
}

export async function deleteUnitPCTs(unitId: string): Promise<void> {
  const q = query(pctsCollection, where('unitId', '==', unitId));
  const snapshot = await getDocs(q);
  
  const deletePromises = snapshot.docs.map(doc => deleteDoc(doc.ref));
  await Promise.all(deletePromises);
}

// Staff Functions
export async function createStaffMember(staffData: Omit<StaffMember, 'id' | 'createdAt' | 'updatedAt'>): Promise<StaffMember> {
  const timestamp = Date.now();
  const staffRef = doc(staffCollection);
  const newStaff: StaffMember = {
    ...staffData,
    id: staffRef.id,
    createdAt: timestamp,
    updatedAt: timestamp
  };
  
  await setDoc(staffRef, newStaff);
  return newStaff;
}

export async function getStaffByUnit(unitId: string): Promise<StaffMember[]> {
  const q = query(staffCollection, where('unitId', '==', unitId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => doc.data() as StaffMember);
}

export async function getStaffByUnitAndRole(unitId: string, role: 'chargeNurse' | 'unitClerk'): Promise<StaffMember | null> {
  const q = query(staffCollection, where('unitId', '==', unitId), where('role', '==', role));
  const snapshot = await getDocs(q);
  
  if (snapshot.empty) {
    return null;
  }
  
  return snapshot.docs[0].data() as StaffMember;
}

export async function updateStaffMember(staffId: string, data: Partial<StaffMember>): Promise<void> {
  const staffRef = doc(staffCollection, staffId);
  await updateDoc(staffRef, {
    ...data,
    updatedAt: Date.now()
  });
}

export async function deleteStaffMember(staffId: string): Promise<void> {
  const staffRef = doc(staffCollection, staffId);
  await deleteDoc(staffRef);
}

export async function deleteUnitStaff(unitId: string): Promise<void> {
  const q = query(staffCollection, where('unitId', '==', unitId));
  const snapshot = await getDocs(q);
  
  const deletePromises = snapshot.docs.map(doc => deleteDoc(doc.ref));
  await Promise.all(deletePromises);
}

// Module Functions
export async function getModules(): Promise<Module[]> {
  const snapshot = await getDocs(modulesCollection);
  return snapshot.docs.map(doc => doc.data() as Module);
}

export async function updateModule(moduleId: string, enabled: boolean): Promise<void> {
  const moduleRef = doc(modulesCollection, moduleId);
  await updateDoc(moduleRef, {
    enabled,
    updatedAt: Date.now()
  });
}

export async function initializeModules(modules: Omit<Module, 'updatedAt'>[]): Promise<void> {
  const timestamp = Date.now();
  
  const initPromises = modules.map(async (module) => {
    const moduleRef = doc(modulesCollection, module.id);
    const moduleSnap = await getDoc(moduleRef);
    
    if (!moduleSnap.exists()) {
      await setDoc(moduleRef, {
        ...module,
        updatedAt: timestamp
      });
    }
  });
  
  await Promise.all(initPromises);
}

// Initialize default modules if they don't exist
export async function setupDefaultModules(): Promise<void> {
  const defaultModules: Omit<Module, 'updatedAt'>[] = [
    { id: 'mock-patient', name: 'Mock Patient Data', description: 'Generate mock patient data for testing', enabled: true },
    { id: 'spectra-pool', name: 'Spectra Pool Management', description: 'Manage spectra pool assignments', enabled: false },
    { id: 'acuity-tracking', name: 'Acuity Tracking', description: 'Track and manage patient acuity levels', enabled: true },
    { id: 'bed-management', name: 'Bed Management', description: 'Track bed availability and assignments', enabled: true },
    { id: 'staff-messaging', name: 'Staff Messaging', description: 'Internal messaging system for staff', enabled: false }
  ];
  
  await initializeModules(defaultModules);
}

export { app, db, storage, auth };