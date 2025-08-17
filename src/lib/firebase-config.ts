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

   import { initializeApp, getApps } from 'firebase/app';
   import { 
     getFirestore,
     enableIndexedDbPersistence,
     CACHE_SIZE_UNLIMITED,
     initializeFirestore,
     persistentLocalCache,
     persistentSingleTabManager
   } from 'firebase/firestore';
   import { getStorage } from 'firebase/storage';
   import { getAuth } from 'firebase/auth';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Firebase configuration const firebaseConfig = { 
apiKey: "AIzaSyARvbAJtv-NBJnJQ3EdZNU3WsMnXThFzhM", 
authDomain: "unitview.firebaseapp.com", 
databaseURL: "https://unitview-default-rtdb.firebaseio.com", 
projectId: "unitview", storageBucket: "unitview.firebasestorage.app", 
messagingSenderId: "185648925766",
appId: "1:185648925766:web:5ae6271dd4977f6e158e47" };

// Initialize Firebase with optimized settings 
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore with optimized cache settings 
const db = initializeFirestore(app, { localCache: persistentLocalCache({ cacheSizeBytes: CACHE_SIZE_UNLIMITED, tabManager: persistentSingleTabManager() }) });

// Enable offline persistence (will use the cache when offline) 
try { enableIndexedDbPersistence(db).catch((err) => { console.error("Firestore persistence error:", err); }); } 
catch (error) { console.warn("Firestore persistence already enabled or not supported"); }

const storage = getStorage(app); const auth = getAuth(app);

export { app, db, storage, auth };
