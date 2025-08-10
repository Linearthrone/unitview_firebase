# Facility Setup Guide

## Introduction

The Facility Setup page is designed to help hospital administrators configure unit layouts, staff assignments, and system modules. This guide will walk you through the process of setting up and managing your hospital units.

## Accessing Facility Setup

1. Log in to the UnitView application
2. Click on "Facility Setup" in the main navigation menu
3. You will be directed to the Facility Setup dashboard

## Creating a New Unit

1. Click the "Create New Unit" button in the top-right corner
2. Fill in the required information:
   - **Unit Designation**: Enter the name of the unit (e.g., "4 West", "ICU", "Labor & Delivery")
   - **Number of Patient Rooms**: Enter the total number of patient rooms in the unit
   - **Room Number Range(s)**: Enter the range of room numbers (e.g., "401-412" or "401-412, 450-455" for non-contiguous ranges)
   - **Standard Number of Nurse Cards**: Enter how many nurse assignment cards should be created (typically based on staffing ratios)
   - **Number of PCT Cards**: Enter how many Patient Care Tech cards should be created
   - **Charge Nurse Card**: Check if the unit should have a charge nurse
   - **Unit Clerk Card**: Check if the unit should have a unit clerk
3. Click "Create Unit" to save the configuration

## Managing Units

Once units are created, you can:

1. Select a unit from the sidebar to view its layout
2. Edit the unit configuration (coming in a future update)
3. Delete units (coming in a future update)

## Patient Grid Layout

The patient grid displays the following elements:

### Nurse Cards (1x3)
Each nurse card contains:
- Nurse name
- Spectra number
- Relief nurse name
- Up to 6 patient room assignments
- Acuity capacity indicator

Patient rooms are automatically sorted from lowest room number at the top to highest at the bottom.

### PCT Cards (2x2)
Each PCT card contains:
- PCT name
- Spectra number
- Relief tech name
- Room assignment range (e.g., "406-417")

### Charge Nurse Card (2x1)
Contains:
- Charge nurse name
- Spectra number

### Unit Clerk Card (2x1)
Contains:
- Unit clerk name
- Spectra number

## Editing the Layout

1. Click the "Edit Layout" button to enter edit mode
2. Update staff information as needed
3. Click "Save Layout" to save your changes

## Managing Patient Assignments

1. Select a nurse card
2. Click "Assign" to view available patients
3. Select a patient to assign them to the nurse
4. To unassign a patient, click the "×" button next to their room number

## Module Configuration

At the bottom of the Facility Setup page, you can enable or disable various system modules:

1. Toggle the switch next to each module to enable or disable it
2. Enabled modules will be highlighted in blue
3. Disabled modules will be grayed out

Available modules include:
- Mock Patient Data: Generate test patient data for training
- Spectra Pool Management: Manage staff assignments via Spectra
- Acuity Tracking: Monitor and manage patient acuity levels
- Bed Management: Track bed availability and assignments
- Staff Messaging: Enable internal communication features

## Best Practices

1. **Room Numbering**: Use consistent room numbering schemes across units
2. **Staffing Ratios**: Configure nurse cards based on your facility's standard nurse-to-patient ratios
3. **Acuity Management**: Monitor the acuity indicators to ensure balanced workloads
4. **Regular Updates**: Update unit configurations when physical changes are made to the unit

## Troubleshooting

If you encounter issues with the Facility Setup page:

1. Refresh the page to reload all configurations
2. Ensure all required fields are completed when creating a unit
3. Check that room ranges are properly formatted (e.g., "401-412")
4. Contact system administration if persistent issues occur