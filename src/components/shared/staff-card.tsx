'use client';

import { StaffMember } from '@/lib/firebase';

interface StaffCardProps {
  title: string;
  staffMember: StaffMember;
  onUpdate: (data: Partial<StaffMember>) => void;
  editMode: boolean;
  size?: 'small' | 'normal';
}

export function StaffCard({ 
  title, 
  staffMember, 
  onUpdate, 
  editMode,
  size = 'normal'
}: StaffCardProps) {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ name: e.target.value });
  };
  
  const handleSpectraChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ spectraNumber: e.target.value });
  };
  
  return (
    <div className={`border ${
      title === 'Charge Nurse' ? 'border-purple-200' : 'border-yellow-200'
    } rounded-lg p-4 ${
      size === 'small' ? 'col-span-1' : 'col-span-1 md:col-span-2'
    }`}>
      <h4 className="font-medium mb-3">{title}</h4>
      
      <div className="space-y-2">
        <div>
          <label className="block text-xs text-gray-500">Name</label>
          {editMode ? (
            <input
              type="text"
              value={staffMember.name}
              onChange={handleNameChange}
              className="w-full p-1 border rounded text-sm"
            />
          ) : (
            <p className="font-medium">{staffMember.name || 'Unassigned'}</p>
          )}
        </div>
        
        <div>
          <label className="block text-xs text-gray-500">Spectra #</label>
          {editMode ? (
            <input
              type="text"
              value={staffMember.spectraNumber}
              onChange={handleSpectraChange}
              className="w-full p-1 border rounded text-sm"
            />
          ) : (
            <p className="text-sm">{staffMember.spectraNumber || 'N/A'}</p>
          )}
        </div>
      </div>
      
      {staffMember.role === 'chargeNurse' && (
        <div className="mt-3 pt-2 border-t border-purple-100">
          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
            Unit Supervisor
          </span>
        </div>
      )}
    </div>
  );
}