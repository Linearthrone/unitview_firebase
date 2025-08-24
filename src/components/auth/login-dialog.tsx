
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLogin: (data: {email: string, password: string}) => Promise<boolean>;
}

export function LoginDialog({ open, onOpenChange, onLogin }: LoginDialogProps) {
  const [email, setEmail] = useState('admin@unitview.com');
  const [password, setPassword] = useState('password');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState('');

  const handleLoginAttempt = async () => {
    setIsLoggingIn(true);
    setError('');
    const success = await onLogin({ email, password });
    setIsLoggingIn(false);
    if (!success) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Authorization Required</DialogTitle>
          <DialogDescription>
            Please log in to access this facility's information.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@unitview.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
           <p className="text-xs text-gray-500">
              For demo purposes, use email: admin@unitview.com and password: password
          </p>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isLoggingIn}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleLoginAttempt} disabled={isLoggingIn}>
            {isLoggingIn ? 'Logging In...' : 'Login'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
