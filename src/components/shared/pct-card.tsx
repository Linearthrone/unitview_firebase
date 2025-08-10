'use client';

import { PCT } from '@/lib/firebase';

interface PCTCardProps {
  pct: PCT;
  onUpdate: (data: Partial<PCT>) => void;
  editMode: boolean;
}

export function PCTCard({ pct, onUpdate, editMode }: PCTCardProps) {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ name: e.target.value });
  };
  
  const handleSpectraChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ spectraNumber: e.target.value });
  };
  
  const handleReliefChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ reliefName: e.target.value });
  };
  
  const handleRoomRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ roomRange: e.target.value });
  };
  
  return (
    <div className="border border-green-200 rounded-lg p-4">
      <h4 className="font-medium mb-3">Patient Care Tech</h4>
      
      {/* PCT Information */}
      <div className="space-y-2 mb-4">
        <div>
          <label className="block text-xs text-gray-500">Name</label>
          {editMode ? (
            <input
              type="text"
              value={pct.name}
              onChange={handleNameChange}
              className="w-full p-1 border rounded text-sm"
            />
          ) : (
            <p className="font-medium">{pct.name || 'Unassigned'}</p>
          )}
        </div>
        
        <div>
          <label className="block text-xs text-gray-500">Spectra #</label>
          {editMode ? (
            <input
              type="text"
              value={pct.spectraNumber}
              onChange={handleSpectraChange}
              className="w-full p-1 border rounded text-sm"
            />
          ) : (
            <p className="text-sm">{pct.spectraNumber || 'N/A'}</p>
          )}
        </div>
        
        <div>
          <label className="block text-xs text-gray-500">Relief</label>
          {editMode ? (
            <input
              type="text"
              value={pct.reliefName}
              onChange={handleReliefChange}
              className="w-full p-1 border rounded text-sm"
            />
          ) : (
            <p className="text-sm">{pct.reliefName || 'None'}</p>
          )}
        </div>
      </div>
      
      {/* Room Range Assignment */}
      <div>
        <label className="block text-xs text-gray-500 mb-1">Room Assignment</label>
        {editMode ? (
          <input
            type="text"
            value={pct.roomRange}
            onChange={handleRoomRangeChange}
            className="w-full p-1 border rounded text-sm"
            placeholder="e.g., 401-412"
          />
        ) : (
          <div className="bg-green-50 border border-green-200 rounded p-2 text-center">
            <span className="font-medium">Rooms {pct.roomRange}</span>
          </div>
        )}
      </div>
    </div>
  );
}