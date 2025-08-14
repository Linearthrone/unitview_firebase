#!/bin/bash

# Script to deploy performance optimizations to UnitView

echo "Deploying performance optimizations to UnitView..."

# 1. Backup original files
echo "Creating backups of original files..."
mkdir -p backups
cp src/lib/firebase.ts backups/firebase.ts.bak
cp src/components/shared/patient-grid.tsx backups/patient-grid.tsx.bak
cp src/app/unitview/page.tsx backups/page.tsx.bak
cp src/app/facility-setup/page.tsx backups/facility-setup-page.tsx.bak

# 2. Replace with optimized versions
echo "Replacing with optimized versions..."
cp src/lib/firebase-optimized.ts src/lib/firebase.ts
cp src/components/shared/patient-grid-optimized.tsx src/components/shared/patient-grid.tsx
cp src/app/unitview/page-optimized.tsx src/app/unitview/page.tsx
cp src/app/facility-setup/page-optimized.tsx src/app/facility-setup/page.tsx

# 3. Build the application
echo "Building the application..."
npm run build

echo "Optimization deployment complete!"
echo "To revert changes, run: ./revert-optimizations.sh"

# Create revert script
cat > revert-optimizations.sh << 'EOL'
#!/bin/bash
echo "Reverting optimizations..."
cp backups/firebase.ts.bak src/lib/firebase.ts
cp backups/patient-grid.tsx.bak src/components/shared/patient-grid.tsx
cp backups/page.tsx.bak src/app/unitview/page.tsx
cp backups/facility-setup-page.tsx.bak src/app/facility-setup/page.tsx
echo "Original files restored!"
chmod +x revert-optimizations.sh
EOL

chmod +x revert-optimizations.sh