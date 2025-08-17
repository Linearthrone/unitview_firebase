#!/bin/bash
echo "Reverting optimizations..."
cp backups/firebase.ts.bak src/lib/firebase.ts
cp backups/patient-grid.tsx.bak src/components/shared/patient-grid.tsx
cp backups/page.tsx.bak src/app/unitview/page.tsx
cp backups/facility-setup-page.tsx.bak src/app/facility-setup/page.tsx
echo "Original files restored!"
chmod +x revert-optimizations.sh
