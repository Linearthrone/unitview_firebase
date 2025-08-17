#!/bin/bash
echo "Reverting targeted fixes..."
cp backups/firebase.ts.bak src/lib/firebase.ts
cp backups/facility-setup-page.tsx.bak src/app/facility-setup/page.tsx
cp backups/unitview-page.tsx.bak src/app/unitview/page.tsx
cp backups/patient-grid.tsx.bak src/components/shared/patient-grid.tsx
echo "Original files restored!"
