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

// Cache for units data
let unitsCache: Unit[] | null = null;
let unitDataCache: Map<string, {
  unit: Unit | null,
  patients: Patient[],
  nurses: Nurse[],
  pcts: PCT[],
  chargeNurse: StaffMember | null,
  unitClerk: StaffMember | null
}> = new Map();

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
  
  // Update cache
  if (unitsCache) {
    unitsCache.push(newUnit);
  }
  
  return newUnit;
}

export async function getUnits(): Promise<Unit[]> {
  // Return from cache if available
  if (unitsCache) {
    return unitsCache;
  }
  
  const snapshot = await getDocs(unitsCollection);
  const units = snapshot.docs.map(doc => doc.data() as Unit);
  
  // Update cache
  unitsCache = units;
  
  return units;
}

export async function getUnit(unitId: string): Promise<Unit | null> {
  // Check cache first
  const cachedData = unitDataCache.get(unitId);
  if (cachedData?.unit) {
    return cachedData.unit;
  }
  
  const unitRef = doc(unitsCollection, unitId);
  const unitSnap = await getDoc(unitRef);
  
  if (unitSnap.exists()) {
    const unit = unitSnap.data() as Unit;
    
    // Update cache
    if (!unitDataCache.has(unitId)) {
      unitDataCache.set(unitId, {
        unit,
        patients: [],
        nurses: [],
        pcts: [],
        chargeNurse: null,
        unitClerk: null
      });
    } else {
      unitDataCache.get(unitId)!.unit = unit;
    }
    
    return unit;
  }
  
  return null;
}

export async function updateUnit(unitId: string, data: Partial<Unit>): Promise<void> {
  const unitRef = doc(unitsCollection, unitId);
  const updateData = {
    ...data,
    updatedAt: Date.now()
  };
  
  await updateDoc(unitRef, updateData);
  
  // Update cache
  if (unitsCache) {
    const index = unitsCache.findIndex(u => u.id === unitId);
    if (index !== -1) {
      unitsCache[index] = { ...unitsCache[index], ...updateData };
    }
  }
  
  if (unitDataCache.has(unitId) && unitDataCache.get(unitId)!.unit) {
    unitDataCache.get(unitId)!.unit = { 
      ...unitDataCache.get(unitId)!.unit!, 
      ...updateData 
    };
  }
}

export async function deleteUnit(unitId: string): Promise<void> {
  const unitRef = doc(unitsCollection, unitId);
  await deleteDoc(unitRef);
  
  // Delete related data
  await deleteUnitPatients(unitId);
  await deleteUnitNurses(unitId);
  await deleteUnitPCTs(unitId);
  await deleteUnitStaff(unitId);
  
  // Update cache
  if (unitsCache) {
    unitsCache = unitsCache.filter(u => u.id !== unitId);
  }
  
  unitDataCache.delete(unitId);
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
  
  // Update cache
  if (unitDataCache.has(patientData.unitId)) {
    unitDataCache.get(patientData.unitId)!.patients.push(newPatient);
  }
  
  return newPatient;
}

// Batch create patients for better performance
export async function batchCreatePatients(patientsData: Omit<Patient, 'id' | 'createdAt' | 'updatedAt'>[]): Promise<Patient[]> {
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
    
    // Update cache
    if (unitDataCache.has(patientData.unitId)) {
      unitDataCache.get(patientData.unitId)!.patients.push(newPatient);
    }
  }
  
  await batch.commit();
  return newPatients;
}

export async function getPatientsByUnit(unitId: string): Promise<Patient[]> {
  // Check cache first
  const cachedData = unitDataCache.get(unitId);
  if (cachedData?.patients.length > 0) {
    return cachedData.patients;
  }
  
  const q = query(patientsCollection, where('unitId', '==', unitId));
  const snapshot = await getDocs(q);
  const patients = snapshot.docs.map(doc => doc.data() as Patient);
  
  // Update cache
  if (!unitDataCache.has(unitId)) {
    unitDataCache.set(unitId, {
      unit: null,
      patients,
      nurses: [],
      pcts: [],
      chargeNurse: null,
      unitClerk: null
    });
  } else {
    unitDataCache.get(unitId)!.patients = patients;
  }
  
  return patients;
}

export async function updatePatient(patientId: string, data: Partial<Patient>): Promise<void> {
  const patientRef = doc(patientsCollection, patientId);
  const updateData = {
    ...data,
    updatedAt: Date.now()
  };
  
  await updateDoc(patientRef, updateData);
  
  // Update cache
  for (const [unitId, cachedData] of unitDataCache.entries()) {
    const index = cachedData.patients.findIndex(p => p.id === patientId);
    if (index !== -1) {
      cachedData.patients[index] = { ...cachedData.patients[index], ...updateData };
      break;
    }
  }
}

// Batch update patients for better performance
export async function batchUpdatePatients(updates: { id: string, data: Partial<Patient> }[]): Promise<void> {
  const batch = writeBatch(db);
  const timestamp = Date.now();
  
  for (const { id, data } of updates) {
    const patientRef = doc(patientsCollection, id);
    batch.update(patientRef, { ...data, updatedAt: timestamp });
    
    // Update cache
    for (const [unitId, cachedData] of unitDataCache.entries()) {
      const index = cachedData.patients.findIndex(p => p.id === id);
      if (index !== -1) {
        cachedData.patients[index] = { 
          ...cachedData.patients[index], 
          ...data,
          updatedAt: timestamp
        };
        break;
      }
    }
  }
  
  await batch.commit();
}

export async function deletePatient(patientId: string): Promise<void> {
  const patientRef = doc(patientsCollection, patientId);
  await deleteDoc(patientRef);
  
  // Update cache
  for (const [unitId, cachedData] of unitDataCache.entries()) {
    cachedData.patients = cachedData.patients.filter(p => p.id !== patientId);
  }
}

export async function deleteUnitPatients(unitId: string): Promise<void> {
  const q = query(patientsCollection, where('unitId', '==', unitId));
  const snapshot = await getDocs(q);
  
  const batch = writeBatch(db);
  snapshot.docs.forEach(doc => {
    batch.delete(doc.ref);
  });
  
  await batch.commit();
  
  // Update cache
  if (unitDataCache.has(unitId)) {
    unitDataCache.get(unitId)!.patients = [];
  }
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
  
  // Update cache
  if (unitDataCache.has(nurseData.unitId)) {
    unitDataCache.get(nurseData.unitId)!.nurses.push(newNurse);
  }
  
  return newNurse;
}

// Batch create nurses for better performance
export async function batchCreateNurses(nursesData: Omit<Nurse, 'id' | 'createdAt' | 'updatedAt'>[]): Promise<Nurse[]> {
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
    
    // Update cache
    if (unitDataCache.has(nurseData.unitId)) {
      unitDataCache.get(nurseData.unitId)!.nurses.push(newNurse);
    }
  }
  
  await batch.commit();
  return newNurses;
}

export async function getNursesByUnit(unitId: string): Promise<Nurse[]> {
  // Check cache first
  const cachedData = unitDataCache.get(unitId);
  if (cachedData?.nurses.length > 0) {
    return cachedData.nurses;
  }
  
  const q = query(nursesCollection, where('unitId', '==', unitId));
  const snapshot = await getDocs(q);
  const nurses = snapshot.docs.map(doc => doc.data() as Nurse);
  
  // Update cache
  if (!unitDataCache.has(unitId)) {
    unitDataCache.set(unitId, {
      unit: null,
      patients: [],
      nurses,
      pcts: [],
      chargeNurse: null,
      unitClerk: null
    });
  } else {
    unitDataCache.get(unitId)!.nurses = nurses;
  }
  
  return nurses;
}

export async function updateNurse(nurseId: string, data: Partial<Nurse>): Promise<void> {
  const nurseRef = doc(nursesCollection, nurseId);
  const updateData = {
    ...data,
    updatedAt: Date.now()
  };
  
  await updateDoc(nurseRef, updateData);
  
  // Update cache
  for (const [unitId, cachedData] of unitDataCache.entries()) {
    const index = cachedData.nurses.findIndex(n => n.id === nurseId);
    if (index !== -1) {
      cachedData.nurses[index] = { ...cachedData.nurses[index], ...updateData };
      break;
    }
  }
}

export async function deleteNurse(nurseId: string): Promise<void> {
  const nurseRef = doc(nursesCollection, nurseId);
  await deleteDoc(nurseRef);
  
  // Update cache
  for (const [unitId, cachedData] of unitDataCache.entries()) {
    cachedData.nurses = cachedData.nurses.filter(n => n.id !== nurseId);
  }
}

export async function deleteUnitNurses(unitId: string): Promise<void> {
  const q = query(nursesCollection, where('unitId', '==', unitId));
  const snapshot = await getDocs(q);
  
  const batch = writeBatch(db);
  snapshot.docs.forEach(doc => {
    batch.delete(doc.ref);
  });
  
  await batch.commit();
  
  // Update cache
  if (unitDataCache.has(unitId)) {
    unitDataCache.get(unitId)!.nurses = [];
  }
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
  
  // Update cache
  if (unitDataCache.has(pctData.unitId)) {
    unitDataCache.get(pctData.unitId)!.pcts.push(newPCT);
  }
  
  return newPCT;
}

// Batch create PCTs for better performance
export async function batchCreatePCTs(pctsData: Omit<PCT, 'id' | 'createdAt' | 'updatedAt'>[]): Promise<PCT[]> {
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
    
    // Update cache
    if (unitDataCache.has(pctData.unitId)) {
      unitDataCache.get(pctData.unitId)!.pcts.push(newPCT);
    }
  }
  
  await batch.commit();
  return newPCTs;
}

export async function getPCTsByUnit(unitId: string): Promise<PCT[]> {
  // Check cache first
  const cachedData = unitDataCache.get(unitId);
  if (cachedData?.pcts.length > 0) {
    return cachedData.pcts;
  }
  
  const q = query(pctsCollection, where('unitId', '==', unitId));
  const snapshot = await getDocs(q);
  const pcts = snapshot.docs.map(doc => doc.data() as PCT);
  
  // Update cache
  if (!unitDataCache.has(unitId)) {
    unitDataCache.set(unitId, {
      unit: null,
      patients: [],
      nurses: [],
      pcts,
      chargeNurse: null,
      unitClerk: null
    });
  } else {
    unitDataCache.get(unitId)!.pcts = pcts;
  }
  
  return pcts;
}

export async function updatePCT(pctId: string, data: Partial<PCT>): Promise<void> {
  const pctRef = doc(pctsCollection, pctId);
  const updateData = {
    ...data,
    updatedAt: Date.now()
  };
  
  await updateDoc(pctRef, updateData);
  
  // Update cache
  for (const [unitId, cachedData] of unitDataCache.entries()) {
    const index = cachedData.pcts.findIndex(p => p.id === pctId);
    if (index !== -1) {
      cachedData.pcts[index] = { ...cachedData.pcts[index], ...updateData };
      break;
    }
  }
}

export async function deletePCT(pctId: string): Promise<void> {
  const pctRef = doc(pctsCollection, pctId);
  await deleteDoc(pctRef);
  
  // Update cache
  for (const [unitId, cachedData] of unitDataCache.entries()) {
    cachedData.pcts = cachedData.pcts.filter(p => p.id !== pctId);
  }
}

export async function deleteUnitPCTs(unitId: string): Promise<void> {
  const q = query(pctsCollection, where('unitId', '==', unitId));
  const snapshot = await getDocs(q);
  
  const batch = writeBatch(db);
  snapshot.docs.forEach(doc => {
    batch.delete(doc.ref);
  });
  
  await batch.commit();
  
  // Update cache
  if (unitDataCache.has(unitId)) {
    unitDataCache.get(unitId)!.pcts = [];
  }
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
  
  // Update cache
  if (unitDataCache.has(staffData.unitId)) {
    if (staffData.role === 'chargeNurse') {
      unitDataCache.get(staffData.unitId)!.chargeNurse = newStaff;
    } else if (staffData.role === 'unitClerk') {
      unitDataCache.get(staffData.unitId)!.unitClerk = newStaff;
    }
  }
  
  return newStaff;
}

// Batch create staff members for better performance
export async function batchCreateStaffMembers(staffData: Omit<StaffMember, 'id' | 'createdAt' | 'updatedAt'>[]): Promise<StaffMember[]> {
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
    
    // Update cache
    if (unitDataCache.has(staffMemberData.unitId)) {
      if (staffMemberData.role === 'chargeNurse') {
        unitDataCache.get(staffMemberData.unitId)!.chargeNurse = newStaff;
      } else if (staffMemberData.role === 'unitClerk') {
        unitDataCache.get(staffMemberData.unitId)!.unitClerk = newStaff;
      }
    }
  }
  
  await batch.commit();
  return newStaffMembers;
}

export async function getStaffByUnit(unitId: string): Promise<StaffMember[]> {
  const q = query(staffCollection, where('unitId', '==', unitId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => doc.data() as StaffMember);
}

export async function getStaffByUnitAndRole(unitId: string, role: 'chargeNurse' | 'unitClerk'): Promise<StaffMember | null> {
  // Check cache first
  const cachedData = unitDataCache.get(unitId);
  if (role === 'chargeNurse' && cachedData?.chargeNurse) {
    return cachedData.chargeNurse;
  } else if (role === 'unitClerk' && cachedData?.unitClerk) {
    return cachedData.unitClerk;
  }
  
  const q = query(staffCollection, where('unitId', '==', unitId), where('role', '==', role));
  const snapshot = await getDocs(q);
  
  if (snapshot.empty) {
    return null;
  }
  
  const staffMember = snapshot.docs[0].data() as StaffMember;
  
  // Update cache
  if (!unitDataCache.has(unitId)) {
    unitDataCache.set(unitId, {
      unit: null,
      patients: [],
      nurses: [],
      pcts: [],
      chargeNurse: role === 'chargeNurse' ? staffMember : null,
      unitClerk: role === 'unitClerk' ? staffMember : null
    });
  } else {
    if (role === 'chargeNurse') {
      unitDataCache.get(unitId)!.chargeNurse = staffMember;
    } else if (role === 'unitClerk') {
      unitDataCache.get(unitId)!.unitClerk = staffMember;
    }
  }
  
  return staffMember;
}

export async function updateStaffMember(staffId: string, data: Partial<StaffMember>): Promise<void> {
  const staffRef = doc(staffCollection, staffId);
  const updateData = {
    ...data,
    updatedAt: Date.now()
  };
  
  await updateDoc(staffRef, updateData);
  
  // Update cache
  for (const [unitId, cachedData] of unitDataCache.entries()) {
    if (cachedData.chargeNurse?.id === staffId) {
      cachedData.chargeNurse = { ...cachedData.chargeNurse, ...updateData };
    } else if (cachedData.unitClerk?.id === staffId) {
      cachedData.unitClerk = { ...cachedData.unitClerk, ...updateData };
    }
  }
}

export async function deleteStaffMember(staffId: string): Promise<void> {
  const staffRef = doc(staffCollection, staffId);
  await deleteDoc(staffRef);
  
  // Update cache
  for (const [unitId, cachedData] of unitDataCache.entries()) {
    if (cachedData.chargeNurse?.id === staffId) {
      cachedData.chargeNurse = null;
    } else if (cachedData.unitClerk?.id === staffId) {
      cachedData.unitClerk = null;
    }
  }
}

export async function deleteUnitStaff(unitId: string): Promise<void> {
  const q = query(staffCollection, where('unitId', '==', unitId));
  const snapshot = await getDocs(q);
  
  const batch = writeBatch(db);
  snapshot.docs.forEach(doc => {
    batch.delete(doc.ref);
  });
  
  await batch.commit();
  
  // Update cache
  if (unitDataCache.has(unitId)) {
    unitDataCache.get(unitId)!.chargeNurse = null;
    unitDataCache.get(unitId)!.unitClerk = null;
  }
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
  const batch = writeBatch(db);
  
  for (const module of modules) {
    const moduleRef = doc(modulesCollection, module.id);
    const moduleSnap = await getDoc(moduleRef);
    
    if (!moduleSnap.exists()) {
      batch.set(moduleRef, {
        ...module,
        updatedAt: timestamp
      });
    }
  }
  
  await batch.commit();
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

// Optimized function to load all unit data at once
export async function loadUnitData(unitId: string): Promise<{
  unit: Unit | null,
  patients: Patient[],
  nurses: Nurse[],
  pcts: PCT[],
  chargeNurse: StaffMember | null,
  unitClerk: StaffMember | null
}> {
  // Check cache first
  if (unitDataCache.has(unitId)) {
    const cachedData = unitDataCache.get(unitId)!;
    
    // If we have complete data in cache, return it
    if (cachedData.unit && 
        (cachedData.patients.length > 0 || 
         cachedData.nurses.length > 0 || 
         cachedData.pcts.length > 0)) {
      return cachedData;
    }
  }
  
  // Load all data in parallel
  const [unit, patients, nurses, pcts, staffMembers] = await Promise.all([
    getUnit(unitId),
    getPatientsByUnit(unitId),
    getNursesByUnit(unitId),
    getPCTsByUnit(unitId),
    getStaffByUnit(unitId)
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
  
  // Update cache
  const unitData = {
    unit,
    patients,
    nurses,
    pcts,
    chargeNurse,
    unitClerk
  };
  
  unitDataCache.set(unitId, unitData);
  
  return unitData;
}

// Optimized function to initialize unit data with batch operations
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
  
  // Create all data in parallel using batch operations
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

// Clear cache (useful for testing or when user logs out)
export function clearCache(): void {
  unitsCache = null;
  unitDataCache.clear();
}

export { app, db, storage, auth };