
'use client';

import { useState } from 'react';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Unit } from '@/lib/firebase';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';

interface CreateUnitDialogProps {
  open: boolean;
  onClose: () => void;
  onCreateUnit: (unitData: Omit<Unit, 'id' | 'createdAt' | 'updatedAt' | 'facilityId'>) => void;
}

export function CreateUnitDialog({ open, onClose, onCreateUnit }: CreateUnitDialogProps) {
  const [formData, setFormData] = useState<Omit<Unit, 'id' | 'createdAt' | 'updatedAt' | 'facilityId'>>({
    designation: '',
    roomCount: 0,
    roomRanges: [''],
    nurseCardCount: 2,
    pctCardCount: 1,
    hasChargeNurse: true,
    hasUnitClerk: true
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.designation.trim()) {
      newErrors.designation = 'Unit designation is required';
    }
    
    if (formData.roomCount <= 0) {
      newErrors.roomCount = 'Number of rooms must be greater than 0';
    }
    
    if (formData.roomRanges.length === 0 || !formData.roomRanges[0]) {
      newErrors.roomRanges = 'At least one room range is required';
    } else {
      // Validate room range format (e.g., 401-412)
      const invalidRanges = formData.roomRanges.filter(range => {
        if (!range) return true;
        const parts = range.split('-');
        if (parts.length !== 2) return true;
        const [start, end] = parts.map(p => parseInt(p.trim(), 10));
        return isNaN(start) || isNaN(end) || start >= end;
      });
      
      if (invalidRanges.length > 0) {
        newErrors.roomRanges = 'Room ranges must be in format "start-end" (e.g., 401-412)';
      }
    }
    
    if (formData.nurseCardCount <= 0) {
      newErrors.nurseCardCount = 'Number of nurse cards must be greater than 0';
    }
    
    if (formData.pctCardCount < 0) {
      newErrors.pctCardCount = 'Number of PCT cards cannot be negative';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: checked });
    } else if (name === 'roomRanges') {
      // Handle room ranges as comma-separated values
      setFormData({ ...formData, roomRanges: value.split(',').map(range => range.trim()).filter(Boolean) });
    } else if (name === 'roomCount' || name === 'nurseCardCount' || name === 'pctCardCount') {
      // Convert string to number for numeric fields
      setFormData({ ...formData, [name]: parseInt(value, 10) || 0 });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onCreateUnit(formData);
      // Reset form
      setFormData({
        designation: '',
        roomCount: 0,
        roomRanges: [''],
        nurseCardCount: 2,
        pctCardCount: 1,
        hasChargeNurse: true,
        hasUnitClerk: true
      });
      setErrors({});
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
            <DialogHeader>
                <DialogTitle>Create New Unit</DialogTitle>
                <DialogDescription>Fill in the details for the new unit.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 py-4">
                {/* Unit Designation */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Unit Designation
                  </label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded ${errors.designation ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="e.g., 4 West"
                  />
                  {errors.designation && (
                    <p className="text-red-500 text-xs mt-1">{errors.designation}</p>
                  )}
                </div>
                
                {/* Number of Patient Rooms */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Number of Patient Rooms
                  </label>
                  <input
                    type="number"
                    name="roomCount"
                    value={formData.roomCount}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded ${errors.roomCount ? 'border-red-500' : 'border-gray-300'}`}
                    min="1"
                  />
                  {errors.roomCount && (
                    <p className="text-red-500 text-xs mt-1">{errors.roomCount}</p>
                  )}
                </div>
                
                {/* Room Number Ranges */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Room Number Range(s)
                  </label>
                  <input
                    type="text"
                    name="roomRanges"
                    value={formData.roomRanges.join(', ')}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded ${errors.roomRanges ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="e.g., 401-412, 450-455"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Enter ranges separated by commas (e.g., 401-412, 450-455)
                  </p>
                  {errors.roomRanges && (
                    <p className="text-red-500 text-xs mt-1">{errors.roomRanges}</p>
                  )}
                </div>
                
                {/* Nurse Cards */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Standard Number of Nurse Cards
                  </label>
                  <input
                    type="number"
                    name="nurseCardCount"
                    value={formData.nurseCardCount}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded ${errors.nurseCardCount ? 'border-red-500' : 'border-gray-300'}`}
                    min="1"
                  />
                  {errors.nurseCardCount && (
                    <p className="text-red-500 text-xs mt-1">{errors.nurseCardCount}</p>
                  )}
                </div>
                
                {/* PCT Cards */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Number of PCT Cards
                  </label>
                  <input
                    type="number"
                    name="pctCardCount"
                    value={formData.pctCardCount}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded ${errors.pctCardCount ? 'border-red-500' : 'border-gray-300'}`}
                    min="0"
                  />
                  {errors.pctCardCount && (
                    <p className="text-red-500 text-xs mt-1">{errors.pctCardCount}</p>
                  )}
                </div>
                
                {/* Charge Nurse */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="hasChargeNurse"
                    checked={formData.hasChargeNurse}
                    onChange={handleChange}
                    className="mr-2"
                    id="hasChargeNurse"
                  />
                  <label className="text-sm font-medium" htmlFor="hasChargeNurse">
                    Include Charge Nurse Card
                  </label>
                </div>
                
                {/* Unit Clerk */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="hasUnitClerk"
                    checked={formData.hasUnitClerk}
                    onChange={handleChange}
                    className="mr-2"
                    id="hasUnitClerk"
                  />
                  <label className="text-sm font-medium" htmlFor="hasUnitClerk">
                    Include Unit Clerk Card
                  </label>
                </div>
              </div>
              
              <DialogFooter className="pt-4">
                <Button variant="outline" type="button" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit">
                  Create Unit
                </Button>
              </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
  );
}
