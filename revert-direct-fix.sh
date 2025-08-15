#!/bin/bash
echo "Reverting direct fixes..."
cp backups/facility-setup-page.tsx.bak src/app/facility-setup/page.tsx
cp backups/unitview-page.tsx.bak src/app/unitview/page.tsx
echo "Original files restored!"
chmod +x revert-direct-fix.sh
