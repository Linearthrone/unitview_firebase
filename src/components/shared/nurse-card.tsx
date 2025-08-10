'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Nurse, Patient } from '@/lib/firebase';

interface NurseCardProps {
  nurse: Nurse;
  patients: Patient[];
  onAssign: (patientId: string) => void;
  onUnassign: (roomNumber: string) => void;
  onUpdate: (data: Partial<Nurse>) => void;
  editMode: boolean;
}

export function NurseCard({ nurse, patients, onAssign, onUnassign, onUpdate, editMode }: NurseCardProps) {
  const [isAssigning, setIsAssigning] = useState(false);
  
  // Calculate total acuity for this nurse
  const totalAcuity = nurse.assignedRooms.reduce((sum, roomNumber) => {
    const patient = patients.find(p => p.roomNumber === roomNumber);
    return sum + (patient ? patient.acuity : 0);
  }, 0);
  
  // Determine if nurse is overloaded
  const isOverloaded = totalAcuity > nurse.acuityCapacity;
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ name: e.target.value });
  };
  
  const handleSpectraChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ spectraNumber: e.target.value });
  };
  
  const handleReliefChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ reliefName: e.target.value });
  };
  
  const handleAcuityCapacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ acuityCapacity: parseInt(e.target.value, 10) || 0 });
  };
  
  return (
    <div className={`border rounded-lg p-4 ${isOverloaded ? 'border-red-500 bg-red-50' : 'border-blue-200'}`}>
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-medium">Nurse Assignment</h4>
        {isOverloaded && (
          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
            Acuity Alert
          </span>
        )}
      </div>
      
      {/* Nurse Information */}
      <div className="space-y-2 mb-4">
        <div>
          <label className="block text-xs text-gray-500">Name</label>
          {editMode ? (
            <input
              type="text"
              value={nurse.name}
              onChange={handleNameChange}
              className="w-full p-1 border rounded text-sm"
            />
          ) : (
            <p className="font-medium">{nurse.name || 'Unassigned'}</p>
          )}
        </div>
        
        <div>
          <label className="block text-xs text-gray-500">Spectra #</label>
          {editMode ? (
            <input
              type="text"
              value={nurse.spectraNumber}
              onChange={handleSpectraChange}
              className="w-full p-1 border rounded text-sm"
            />
          ) : (
            <p className="text-sm">{nurse.spectraNumber || 'N/A'}</p>
          )}
        </div>
        
        <div>
          <label className="block text-xs text-gray-500">Relief</label>
          {editMode ? (
            <input
              type="text"
              value={nurse.reliefName}
              onChange={handleReliefChange}
              className="w-full p-1 border rounded text-sm"
            />
          ) : (
            <p className="text-sm">{nurse.reliefName || 'None'}</p>
          )}
        </div>
        
        <div>
          <label className="block text-xs text-gray-500">Acuity Capacity</label>
          {editMode ? (
            <input
              type="number"
              value={nurse.acuityCapacity}
              onChange={handleAcuityCapacityChange}
              className="w-full p-1 border rounded text-sm"
              min="1"
            />
          ) : (
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${
                    isOverloaded ? 'bg-red-600' : 'bg-blue-600'
                  }`}
                  style={{ width: `${Math.min(100, (totalAcuity / nurse.acuityCapacity) * 100)}%` }}
                ></div>
              </div>
              <span className="ml-2 text-xs font-medium">
                {totalAcuity}/{nurse.acuityCapacity}
              </span>
            </div>
          )}
        </div>
      </div>
      
      {/* Patient Assignments */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-xs text-gray-500">Patient Assignments</label>
          {!editMode && (
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs py-1 h-auto"
              onClick={() => setIsAssigning(!isAssigning)}
            >
              {isAssigning ? 'Done' : 'Assign'}
            </Button>
          )}
        </div>
        
        {/* Assigned Rooms */}
        <div className="space-y-1 mb-3">
          {nurse.assignedRooms.length > 0 ? (
            nurse.assignedRooms.map(roomNumber => {
              const patient = patients.find(p => p.roomNumber === roomNumber);
              return (
                <div key={roomNumber} className="flex justify-between items-center p-1.5 bg-gray-50 rounded border">
                  <div className="flex items-center">
                    <span className="font-medium text-sm">Room {roomNumber}</span>
                    {patient?.name && <span className="ml-2 text-xs">{patient.name}</span>}
                  </div>
                  <div className="flex items-center">
                    {patient && (
                      <span className={`px-1.5 py-0.5 rounded-full text-xs mr-2 ${
                        patient.acuity >= 4 ? 'bg-red-100 text-red-800' :
                        patient.acuity >= 3 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {patient.acuity}
                      </span>
                    )}
                    {!editMode && (
                      <button
                        onClick={() => onUnassign(roomNumber)}
                        className="text-red-500 text-xs hover:text-red-700"
                        aria-label="Remove patient assignment"
                      >
                        ×
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-sm text-gray-500 italic">No patients assigned</p>
          )}
        </div>
        
        {/* Assignment Selector */}
        {isAssigning && !editMode && (
          <div className="mt-3 border-t pt-2">
            <p className="text-xs font-medium mb-2">Select a patient to assign:</p>
            <div className="grid grid-cols-2 gap-1">
              {patients
                .filter(patient => !patient.assigned)
                .map(patient => (
                  <button
                    key={patient.id}
                    onClick={() => {
                      onAssign(patient.id);
                      if (nurse.assignedRooms.length >= 5) {
                        setIsAssigning(false);
                      }
                    }}
                    className="text-xs p-1 border rounded hover:bg-blue-50 flex justify-between items-center"
                  >
                    <span>Room {patient.roomNumber}</span>
                    <span className={`px-1.5 py-0.5 rounded-full text-xs ${
                      patient.acuity >= 4 ? 'bg-red-100 text-red-800' :
                      patient.acuity >= 3 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {patient.acuity}
                    </span>
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}