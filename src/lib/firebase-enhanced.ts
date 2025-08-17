
import { app, db, storage, auth } from './firebase-config';
import { collection, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, query, where, DocumentData, writeBatch } from 'firebase/firestore';


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
  return snapshot.docs.map(doc => {
    return { id: doc.id, ...doc.data() } as Unit;
  });
}

export async function getUnit(unitId: string): Promise<Unit | null> {
  const unitRef = doc(unitsCollection, unitId);
  const unitSnap = await getDoc(unitRef);
  
  if (unitSnap.exists()) {
    return { id: unitSnap.id, ...unitSnap.data() } as Unit;
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

// Batch create patients for better performance
export async function batchCreatePatients(patientsData: Omit<Patient, 'id' | 'createdAt' | 'updatedAt'>[]): Promise<Patient[]> {
  if (patientsData.length === 0) {
    return [];
  }
  
  const timestamp = Date.now();
  const batch = writeBatch(db);
  const newPatients: Patient[] = [];
  
  for (const patientData of patientsData) {
    const patientRef = doc(patientsCollection);
    const newPatient: Patient = {
      ...patientData,
      id: patientRef.id,
      createdAt: timestamp,
      updatedAt: timestamp
    };
    
    batch.set(patientRef, newPatient);
    newPatients.push(newPatient);
  }
  
  await batch.commit();
  return newPatients;
}

export async function getPatientsByUnit(unitId: string): Promise<Patient[]> {
  const q = query(patientsCollection, where('unitId', '==', unitId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => {
    return { id: doc.id, ...doc.data() } as Patient;
  });
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
  
  if (snapshot.empty) {
    return;
  }
  
  const batch = writeBatch(db);
  snapshot.docs.forEach(doc => {
    batch.delete(doc.ref);
  });
  
  await batch.commit();
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

// Batch create nurses for better performance
export async function batchCreateNurses(nursesData: Omit<Nurse, 'id' | 'createdAt' | 'updatedAt'>[]): Promise<Nurse[]> {
  if (nursesData.length === 0) {
    return [];
  }
  
  const timestamp = Date.now();
  const batch = writeBatch(db);
  const newNurses: Nurse[] = [];
  
  for (const nurseData of nursesData) {
    const nurseRef = doc(nursesCollection);
    const newNurse: Nurse = {
      ...nurseData,
      id: nurseRef.id,
      createdAt: timestamp,
      updatedAt: timestamp
    };
    
    batch.set(nurseRef, newNurse);
    newNurses.push(newNurse);
  }
  
  await batch.commit();
  return newNurses;
}

export async function getNursesByUnit(unitId: string): Promise<Nurse[]> {
  const q = query(nursesCollection, where('unitId', '==', unitId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => {
    return { id: doc.id, ...doc.data() } as Nurse;
  });
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
  
  if (snapshot.empty) {
    return;
  }
  
  const batch = writeBatch(db);
  snapshot.docs.forEach(doc => {
    batch.delete(doc.ref);
  });
  
  await batch.commit();
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

// Batch create PCTs for better performance
export async function batchCreatePCTs(pctsData: Omit<PCT, 'id' | 'createdAt' | 'updatedAt'>[]): Promise<PCT[]> {
  if (pctsData.length === 0) {
    return [];
  }
  
  const timestamp = Date.now();
  const batch = writeBatch(db);
  const newPCTs: PCT[] = [];
  
  for (const pctData of pctsData) {
    const pctRef = doc(pctsCollection);
    const newPCT: PCT = {
      ...pctData,
      id: pctRef.id,
      createdAt: timestamp,
      updatedAt: timestamp
    };
    
    batch.set(pctRef, newPCT);
    newPCTs.push(newPCT);
  }
  
  await batch.commit();
  return newPCTs;
}

export async function getPCTsByUnit(unitId: string): Promise<PCT[]> {
  const q = query(pctsCollection, where('unitId', '==', unitId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => {
    return { id: doc.id, ...doc.data() } as PCT;
  });
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
  
  if (snapshot.empty) {
    return;
  }
  
  const batch = writeBatch(db);
  snapshot.docs.forEach(doc => {
    batch.delete(doc.ref);
  });
  
  await batch.commit();
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

// Batch create staff members for better performance
export async function batchCreateStaffMembers(staffData: Omit<StaffMember, 'id' | 'createdAt' | 'updatedAt'>[]): Promise<StaffMember[]> {
  if (staffData.length === 0) {
    return [];
  }
  
  const timestamp = Date.now();
  const batch = writeBatch(db);
  const newStaffMembers: StaffMember[] = [];
  
  for (const staffMemberData of staffData) {
    const staffRef = doc(staffCollection);
    const newStaff: StaffMember = {
      ...staffMemberData,
      id: staffRef.id,
      createdAt: timestamp,
      updatedAt: timestamp
    };
    
    batch.set(staffRef, newStaff);
    newStaffMembers.push(newStaff);
  }
  
  await batch.commit();
  return newStaffMembers;
}

export async function getStaffByUnit(unitId: string): Promise<StaffMember[]> {
  const q = query(staffCollection, where('unitId', '==', unitId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => {
    return { id: doc.id, ...doc.data() } as StaffMember;
  });
}

export async function getStaffByUnitAndRole(unitId: string, role: 'chargeNurse' | 'unitClerk'): Promise<StaffMember | null> {
  const q = query(staffCollection, where('unitId', '==', unitId), where('role', '==', role));
  const snapshot = await getDocs(q);
  
  if (snapshot.empty) {
    return null;
  }
  
  const staffData = snapshot.docs[0].data();
  return { id: snapshot.docs[0].id, ...staffData } as StaffMember;
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
  
  if (snapshot.empty) {
    return;
  }
  
  const batch = writeBatch(db);
  snapshot.docs.forEach(doc => {
    batch.delete(doc.ref);
  });
  
  await batch.commit();
}

// Module Functions
export async function getModules(): Promise<Module[]> {
  const snapshot = await getDocs(modulesCollection);
  return snapshot.docs.map(doc => {
    return { id: doc.id, ...doc.data() } as Module;
  });
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

// Enhanced unit data initialization with batch operations
export async function initializeUnitData(unit: Unit): Promise<{
  patients: Patient[],
  nurses: Nurse[],
  pcts: PCT[],
  chargeNurse: StaffMember | null,
  unitClerk: StaffMember | null
}> {
  // Generate all the data first
  const patientsData: Omit<Patient, 'id' | 'createdAt' | 'updatedAt'>[] = [];
  const nursesData: Omit<Nurse, 'id' | 'createdAt' | 'updatedAt'>[] = [];
  const pctsData: Omit<PCT, 'id' | 'createdAt' | 'updatedAt'>[] = [];
  const staffData: Omit<StaffMember, 'id' | 'createdAt' | 'updatedAt'>[] = [];
  
  // Generate patient data
  for (const range of unit.roomRanges) {
    const [start, end] = range.split('-').map(num => parseInt(num, 10));
    for (let roomNum = start; roomNum <= end; roomNum++) {
      patientsData.push({
        unitId: unit.id,
        roomNumber: roomNum.toString(),
        name: '',
        acuity: Math.floor(Math.random() * 5) + 1, // Random acuity 1-5
        assigned: false
      });
    }
  }
  
  // Generate nurse data
  for (let i = 0; i < unit.nurseCardCount; i++) {
    nursesData.push({
      unitId: unit.id,
      name: `Nurse ${i + 1}`,
      spectraNumber: `SN${10000 + i}`,
      reliefName: '',
      assignedRooms: [],
      acuityCapacity: 12
    });
  }
  
  // Generate PCT data
  for (let i = 0; i < unit.pctCardCount; i++) {
    // Divide room ranges among PCTs
    const rangeIndex = i % unit.roomRanges.length;
    const [start, end] = unit.roomRanges[rangeIndex].split('-').map(num => parseInt(num, 10));
    const rangeSize = end - start + 1;
    const pctRangeSize = Math.ceil(rangeSize / unit.pctCardCount);
    
    const pctStart = start + (i * pctRangeSize);
    const pctEnd = Math.min(pctStart + pctRangeSize - 1, end);
    
    pctsData.push({
      unitId: unit.id,
      name: `PCT ${i + 1}`,
      spectraNumber: `PCT${10000 + i}`,
      reliefName: '',
      roomRange: `${pctStart}-${pctEnd}`
    });
  }
  
  // Generate staff data
  if (unit.hasChargeNurse) {
    staffData.push({
      unitId: unit.id,
      name: '',
      spectraNumber: '',
      role: 'chargeNurse'
    });
  }
  
  if (unit.hasUnitClerk) {
    staffData.push({
      unitId: unit.id,
      name: '',
      spectraNumber: '',
      role: 'unitClerk'
    });
  }
  
  // Create all data using batch operations for better performance
  const [patients, nurses, pcts, staffMembers] = await Promise.all([
    batchCreatePatients(patientsData),
    batchCreateNurses(nursesData),
    batchCreatePCTs(pctsData),
    batchCreateStaffMembers(staffData)
  ]);
  
  // Process staff members
  let chargeNurse: StaffMember | null = null;
  let unitClerk: StaffMember | null = null;
  
  for (const staff of staffMembers) {
    if (staff.role === 'chargeNurse') {
      chargeNurse = staff;
    } else if (staff.role === 'unitClerk') {
      unitClerk = staff;
    }
  }
  
  return {
    patients,
    nurses,
    pcts,
    chargeNurse,
    unitClerk
  };
}

export { app, db, storage, auth };