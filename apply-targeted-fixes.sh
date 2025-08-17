#!/bin/bash

# Script to apply targeted performance fixes to UnitView

echo "Applying targeted performance fixes to UnitView..."

# 1. Backup original files
echo "Creating backups of original files..."
mkdir -p backups
cp src/lib/firebase.ts backups/firebase.ts.bak
cp src/app/facility-setup/page.tsx backups/facility-setup-page.tsx.bak
cp src/app/unitview/page.tsx backups/unitview-page.tsx.bak
cp src/components/shared/patient-grid.tsx backups/patient-grid.tsx.bak

# 2. Apply targeted fixes
echo "Applying targeted fixes..."

# Replace the original firebase.ts with our enhanced version
cp src/lib/firebase-enhanced.ts src/lib/firebase.ts

# Update facility-setup page to use enhanced Firebase functions
sed -i 's|import { getUnits, createUnit, getModules, updateModule, setupDefaultModules, Unit, Module } from '\''@/lib/firebase'\'';|import { getUnits, createUnit, getModules, updateModule, setupDefaultModules, initializeUnitData, Unit, Module } from '\''@/lib/firebase'\'';|' src/app/facility-setup/page.tsx

# Update unitview page to use enhanced Firebase functions
sed -i 's|import { getUnits, Unit } from '\''@/lib/firebase'\'';|import { getUnits, Unit } from '\''@/lib/firebase'\'';|' src/app/unitview/page.tsx

# Update patient-grid to use enhanced Firebase functions
sed -i 's|import { getUnit, getPatientsByUnit, getNursesByUnit, getPCTsByUnit, getStaffByUnitAndRole, createPatient, createNurse, createPCT, createStaffMember, updatePatient, updateNurse, updatePCT, updateStaffMember, Unit, Patient, Nurse, PCT, StaffMember } from '\''@/lib/firebase'\'';|import { getUnit, getPatientsByUnit, getNursesByUnit, getPCTsByUnit, getStaffByUnitAndRole, createPatient, createNurse, createPCT, createStaffMember, updatePatient, updateNurse, updatePCT, updateStaffMember, initializeUnitData, Unit, Patient, Nurse, PCT, StaffMember } from '\''@/lib/firebase'\'';|' src/components/shared/patient-grid.tsx

echo "Targeted fixes applied successfully!"
echo "To revert changes, run: ./revert-targeted-fixes.sh"

# Create revert script
cat > revert-targeted-fixes.sh << 'EOL'
#!/bin/bash
echo "Reverting targeted fixes..."
cp backups/firebase.ts.bak src/lib/firebase.ts
cp backups/facility-setup-page.tsx.bak src/app/facility-setup/page.tsx
cp backups/unitview-page.tsx.bak src/app/unitview/page.tsx
cp backups/patient-grid.tsx.bak src/components/shared/patient-grid.tsx
echo "Original files restored!"
EOL

chmod +x revert-targeted-fixes.sh