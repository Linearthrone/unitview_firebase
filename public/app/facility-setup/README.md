# Facility Setup Page

## Overview

The Facility Setup page allows administrators to configure hospital units, manage patient grids, and enable/disable system modules. This page serves as the central configuration hub for the UnitView application.

## Features

### Unit Management

- **Create Units**: Define new hospital units with specific configurations:
  - Unit Designation (e.g., "4 West")
  - Number of patient rooms
  - Room number ranges (e.g., 401-412)
  - Standard number of nurse cards
  - Number of PCT cards
  - Charge nurse and unit clerk options

- **Edit Units**: Modify existing unit configurations
- **View Units**: See a list of all configured units

### Patient Grid Configuration

The patient grid is the central component shared between the Facility Setup, UnitView, and ChargeView pages. It displays:

- **Nurse Cards**: 1x3 cards containing:
  - Nurse name
  - Spectra number
  - Relief nurse name
  - Patient room assignments (up to 6 rooms)
  - Acuity capacity indicator

- **PCT Cards**: 2x2 cards containing:
  - PCT name
  - Spectra number
  - Relief tech name
  - Room assignment range (e.g., 406-417)

- **Charge Nurse Card**: 2x1 card for the unit supervisor
- **Unit Clerk Card**: 2x1 card for administrative support

### Module Configuration

Enable or disable various system modules:
- Mock Patient Data
- Spectra Pool Management
- Acuity Tracking
- Bed Management
- Staff Messaging
- And more...

## Technical Implementation

The Facility Setup page is built using:
- React components with TypeScript
- Next.js App Router
- Tailwind CSS for styling
- Firebase for data persistence (configured but not fully implemented)

## Components

- `CreateUnitDialog`: Modal for creating new units
- `ModuleToggleCard`: Cards for enabling/disabling modules
- `UnitCard`: Display card for unit selection
- `PatientGrid`: Shared component for displaying the unit layout
- `NurseCard`: Component for nurse assignments
- `PCTCard`: Component for patient care technician assignments
- `StaffCard`: Component for charge nurse and unit clerk assignments

## Usage

1. Navigate to the Facility Setup page
2. Click "Create New Unit" to define a new hospital unit
3. Select a unit from the sidebar to view its layout
4. Toggle modules on/off as needed
5. Use the patient grid to configure staff assignments

## Future Enhancements

- Drag-and-drop room assignments
- Import/export unit configurations
- Template library for common unit layouts
- Advanced module configuration options
- Integration with hospital information systems