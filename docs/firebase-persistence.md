# Firebase Data Persistence Implementation

## Overview

This document explains how data persistence is implemented using Firebase Firestore in the UnitView application. The implementation allows for storing and retrieving unit configurations, patient data, staff assignments, and module settings.

## Data Structure

The Firebase Firestore database is organized into the following collections:

### 1. Units Collection
Stores information about hospital units:
```typescript
interface Unit {
  id: string;
  designation: string;         // e.g., "4 West"
  roomCount: number;           // Total number of rooms
  roomRanges: string[];        // e.g., ["401-412"]
  nurseCardCount: number;      // Number of nurse cards
  pctCardCount: number;        // Number of PCT cards
  hasChargeNurse: boolean;     // Whether unit has a charge nurse
  hasUnitClerk: boolean;       // Whether unit has a unit clerk
  createdAt?: number;          // Timestamp of creation
  updatedAt?: number;          // Timestamp of last update
}
```

### 2. Patients Collection
Stores information about patients in each unit:
```typescript
interface Patient {
  id: string;
  unitId: string;              // Reference to parent unit
  roomNumber: string;          // Room number
  name: string;                // Patient name (often empty for privacy)
  acuity: number;              // Patient acuity level (1-5)
  assigned: boolean;           // Whether assigned to a nurse
  notes?: string;              // Optional notes
  createdAt?: number;          // Timestamp of creation
  updatedAt?: number;          // Timestamp of last update
}
```

### 3. Nurses Collection
Stores information about nurses and their assignments:
```typescript
interface Nurse {
  id: string;
  unitId: string;              // Reference to parent unit
  name: string;                // Nurse name
  spectraNumber: string;       // Spectra identification number
  reliefName: string;          // Relief nurse name
  assignedRooms: string[];     // Array of assigned room numbers
  acuityCapacity: number;      // Maximum acuity capacity
  createdAt?: number;          // Timestamp of creation
  updatedAt?: number;          // Timestamp of last update
}
```

### 4. PCTs Collection
Stores information about Patient Care Technicians:
```typescript
interface PCT {
  id: string;
  unitId: string;              // Reference to parent unit
  name: string;                // PCT name
  spectraNumber: string;       // Spectra identification number
  reliefName: string;          // Relief PCT name
  roomRange: string;           // Range of rooms (e.g., "401-412")
  createdAt?: number;          // Timestamp of creation
  updatedAt?: number;          // Timestamp of last update
}
```

### 5. Staff Collection
Stores information about charge nurses and unit clerks:
```typescript
interface StaffMember {
  id: string;
  unitId: string;              // Reference to parent unit
  name: string;                // Staff member name
  spectraNumber: string;       // Spectra identification number
  role: 'chargeNurse' | 'unitClerk';  // Role of the staff member
  createdAt?: number;          // Timestamp of creation
  updatedAt?: number;          // Timestamp of last update
}
```

### 6. Modules Collection
Stores information about system modules and their enabled/disabled status:
```typescript
interface Module {
  id: string;                  // Module identifier
  name: string;                // Display name
  description: string;         // Description of the module
  enabled: boolean;            // Whether the module is enabled
  updatedAt?: number;          // Timestamp of last update
}
```

## Data Operations

The application provides a comprehensive set of functions for CRUD operations on all data types:

### Unit Operations
- `createUnit`: Creates a new unit
- `getUnits`: Retrieves all units
- `getUnit`: Retrieves a specific unit by ID
- `updateUnit`: Updates a unit's properties
- `deleteUnit`: Deletes a unit and all associated data

### Patient Operations
- `createPatient`: Creates a new patient
- `getPatientsByUnit`: Retrieves all patients for a specific unit
- `updatePatient`: Updates a patient's properties
- `deletePatient`: Deletes a patient
- `deleteUnitPatients`: Deletes all patients for a specific unit

### Nurse Operations
- `createNurse`: Creates a new nurse
- `getNursesByUnit`: Retrieves all nurses for a specific unit
- `updateNurse`: Updates a nurse's properties
- `deleteNurse`: Deletes a nurse
- `deleteUnitNurses`: Deletes all nurses for a specific unit

### PCT Operations
- `createPCT`: Creates a new PCT
- `getPCTsByUnit`: Retrieves all PCTs for a specific unit
- `updatePCT`: Updates a PCT's properties
- `deletePCT`: Deletes a PCT
- `deleteUnitPCTs`: Deletes all PCTs for a specific unit

### Staff Operations
- `createStaffMember`: Creates a new staff member
- `getStaffByUnit`: Retrieves all staff members for a specific unit
- `getStaffByUnitAndRole`: Retrieves a specific staff member by unit and role
- `updateStaffMember`: Updates a staff member's properties
- `deleteStaffMember`: Deletes a staff member
- `deleteUnitStaff`: Deletes all staff members for a specific unit

### Module Operations
- `getModules`: Retrieves all modules
- `updateModule`: Updates a module's enabled status
- `initializeModules`: Initializes default modules if they don't exist
- `setupDefaultModules`: Sets up default modules with predefined settings

## Data Flow

### Creating a New Unit
1. User enters unit details in the CreateUnitDialog
2. `createUnit` function is called with the unit data
3. A new document is created in the "units" collection
4. The unit is displayed in the unit list

### Initializing Unit Data
When a unit is first accessed in the PatientGrid component:
1. The system checks if patients and staff exist for the unit
2. If not, it generates mock data:
   - Patients for each room in the room ranges
   - Nurse cards based on the nurseCardCount
   - PCT cards based on the pctCardCount
   - Charge nurse and unit clerk if specified

### Assigning Patients
1. User selects a patient from the unassigned list
2. `handleAssignPatient` function is called
3. The nurse's assignedRooms array is updated
4. The patient's assigned status is set to true
5. Changes are persisted to Firestore

### Updating Staff Information
1. User enters edit mode by clicking "Edit Layout"
2. User updates staff information
3. `handleUpdateNurse`, `handleUpdatePCT`, etc. functions are called
4. Changes are persisted to Firestore
5. User clicks "Save Layout" to exit edit mode

### Toggling Modules
1. User toggles a module switch
2. `handleModuleToggle` function is called
3. The module's enabled status is updated in Firestore
4. UI is updated to reflect the change

## Error Handling

The implementation includes comprehensive error handling:
1. All Firebase operations are wrapped in try/catch blocks
2. Errors are logged to the console
3. User-friendly toast notifications are displayed
4. Loading states are managed to provide feedback during operations

## Security Considerations

For a production environment, additional security measures should be implemented:
1. Firebase Authentication for user login
2. Firestore Security Rules to restrict access based on user roles
3. Data validation on both client and server sides
4. Rate limiting for API calls
5. Regular data backups

## Future Enhancements

Potential enhancements to the data persistence layer:
1. Real-time updates using Firestore listeners
2. Offline support for disconnected operations
3. Batch operations for better performance
4. Pagination for large data sets
5. Advanced querying capabilities
6. Data export/import functionality