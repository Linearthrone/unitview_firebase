'use client';

import { Unit } from '@/lib/firebase';

interface UnitCardProps {
  unit: Unit;
  isSelected: boolean;
  onSelect: () => void;
}

export function UnitCard({ unit, isSelected, onSelect }: UnitCardProps) {
  return (
    <div 
      className={`border rounded-lg p-4 cursor-pointer transition-all ${
        isSelected 
          ? 'border-blue-500 bg-blue-50 shadow-md' 
          : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
      }`}
      onClick={onSelect}
    >
      <h3 className="font-medium text-lg">{unit.designation}</h3>
      
      <div className="mt-2 space-y-1 text-sm text-gray-600">
        <p>Rooms: {unit.roomCount}</p>
        <p>Room Range: {unit.roomRanges.join(', ')}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {unit.nurseCardCount} Nurse Cards
          </span>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            {unit.pctCardCount} PCT Cards
          </span>
          {unit.hasChargeNurse && (
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
              Charge Nurse
            </span>
          )}
          {unit.hasUnitClerk && (
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
              Unit Clerk
            </span>
          )}
        </div>
      </div>
      
      {isSelected && (
        <div className="mt-3 text-blue-600 text-sm font-medium">
          Currently Selected
        </div>
      )}
      
      {unit.createdAt && (
        <div className="mt-2 text-xs text-gray-400">
          Created: {new Date(unit.createdAt).toLocaleDateString()}
        </div>
      )}
    </div>
  );
}