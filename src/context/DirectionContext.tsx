import React, { createContext, useContext, useEffect, useState } from 'react';

type Direction = 'rtl' | 'ltr';

interface DirectionContextType {
  dir: Direction;
  toggleDir: () => void;
  setDir: (dir: Direction) => void;
}

const DirectionContext = createContext<DirectionContextType | undefined>(undefined);

export function DirectionProvider({ children }: { children: React.ReactNode }) {
  const [dir, setDirState] = useState<Direction>(() => {
    const saved = localStorage.getItem('ai-prompt-lib:direction');
    return (saved === 'rtl' || saved === 'ltr') ? saved : 'rtl';
  });

  const setDir = (newDir: Direction) => {
    setDirState(newDir);
    localStorage.setItem('ai-prompt-lib:direction', newDir);
  };

  const toggleDir = () => {
    setDir(dir === 'rtl' ? 'ltr' : 'rtl');
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('dir', dir);
  }, [dir]);

  return (
    <DirectionContext.Provider value={{ dir, toggleDir, setDir }}>
      {children}
    </DirectionContext.Provider>
  );
}

export function useDirection() {
  const context = useContext(DirectionContext);
  if (context === undefined) {
    throw new Error('useDirection must be used within a DirectionProvider');
  }
  return context;
}
