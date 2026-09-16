import React, { createContext, useContext, ReactNode } from 'react';
import { usePWAInstall } from './usePWAInstall';
import { useOnlineStatus } from './useOnlineStatus';
import { PWAContextValue } from './types';

const PWAContext = createContext<PWAContextValue | null>(null);

export function PWAProvider({ children }: { children: ReactNode }) {
  const pwa = usePWAInstall();
  const isOnline = useOnlineStatus();

  return (
    <PWAContext.Provider
      value={{
        ...pwa,
        isOnline,
      }}
    >
      {children}
    </PWAContext.Provider>
  );
}

export function usePWA(): PWAContextValue {
  const context = useContext(PWAContext);
  if (!context) {
    throw new Error('usePWA must be used within a PWAProvider');
  }
  return context;
}
