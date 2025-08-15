#!/bin/bash

# Script to apply direct fixes to UnitView

echo "Applying direct fixes to UnitView..."

# 1. Backup original files
echo "Creating backups of original files..."
mkdir -p backups
cp src/app/facility-setup/page.tsx backups/facility-setup-page.tsx.bak
cp src/app/unitview/page.tsx backups/unitview-page.tsx.bak

# 2. Apply direct fixes
echo "Applying direct fixes..."
cp src/app/facility-setup/page-direct-fix.tsx src/app/facility-setup/page.tsx
cp src/app/unitview/page-direct-fix.tsx src/app/unitview/page.tsx

echo "Direct fixes applied successfully!"
echo "To revert changes, run: ./revert-direct-fix.sh"

# Create revert script
cat > revert-direct-fix.sh << 'EOL'
#!/bin/bash
echo "Reverting direct fixes..."
cp backups/facility-setup-page.tsx.bak src/app/facility-setup/page.tsx
cp backups/unitview-page.tsx.bak src/app/unitview/page.tsx
echo "Original files restored!"
chmod +x revert-direct-fix.sh
EOL

chmod +x revert-direct-fix.sh