import { initializeApp, getApps } from 'firebase/app';
import {
  getFirestore,
  enableIndexedDbPersistence,
  CACHE_SIZE_UNLIMITED,
  persistentLocalCache,
  persistentSingleTabManager
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARvbAJtv-NBJnJQ3EdZNU3WsMnXThFzhM",
  authDomain: "unitview.firebaseapp.com",
  databaseURL: "https://unitview-default-rtdb.firebaseio.com",
  projectId: "unitview",
  storageBucket: "unitview.firebasestorage.app",
  messagingSenderId: "185648925766",
  appId: "1:185648925766:web:5ae6271dd4977f6e158e47"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore
const db = getFirestore(app);

// Enable offline persistence (will use the cache when offline)
try {
  enableIndexedDbPersistence(db).catch((err) => {
    console.error("Firestore persistence error:", err);
  });
} catch (error) {
  console.warn("Firestore persistence already enabled or not supported");
}

const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, storage, auth };
