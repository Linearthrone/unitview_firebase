'use client';

import { Switch } from '@/components/ui/switch';
import { Module } from '@/lib/firebase';

interface ModuleToggleCardProps {
  module: Module;
  onToggle: () => void;
}

export function ModuleToggleCard({ module, onToggle }: ModuleToggleCardProps) {
  return (
    <div className={`border rounded-lg p-4 ${module.enabled ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium text-lg">{module.name}</h3>
        <Switch 
          checked={module.enabled} 
          onCheckedChange={onToggle}
          className="data-[state=checked]:bg-blue-600"
        />
      </div>
      <p className="text-sm text-gray-600">{module.description}</p>
      <div className="mt-3">
        <span className={`text-xs px-2 py-1 rounded-full ${
          module.enabled ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
        }`}>
          {module.enabled ? 'Enabled' : 'Disabled'}
        </span>
      </div>
    </div>
  );
}