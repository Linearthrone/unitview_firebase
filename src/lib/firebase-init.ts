import { setupDefaultModules } from '@/lib/firebase';

/**
 * Initialize Firebase data and configuration
 * This function should be called when the application starts
 */
export async function initializeFirebase() {
  try {
    console.log('Initializing Firebase data...');
    
    // Set up default modules
    await setupDefaultModules();
    
    console.log('Firebase initialization complete');
    return true;
  } catch (error) {
    console.error('Error initializing Firebase:', error);
    return false;
  }
}