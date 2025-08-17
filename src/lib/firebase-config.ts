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

// Rest of your file remains the same... // ...

// Export the Firebase instances at the end export { app, db, storage, auth };	
