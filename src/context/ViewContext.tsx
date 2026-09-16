import React, { createContext, useContext, useState } from 'react';

export type ViewType = 'dashboard' | 'library' | 'playground' | 'workflows' | 'flows' | 'generator' | 'settings';

interface ViewContextType {
  view: ViewType;
  setView: (view: ViewType) => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export function ViewProvider({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState<ViewType>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#playground')) return 'playground';
    if (hash.startsWith('#workflows')) return 'workflows';
    if (hash.startsWith('#flows')) return 'flows';
    if (hash.startsWith('#library')) return 'library';
    if (hash.startsWith('#generator')) return 'generator';
    if (hash.startsWith('#settings')) return 'settings';
    return 'dashboard';
  });

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#playground')) setView('playground');
      else if (hash.startsWith('#workflows')) setView('workflows');
      else if (hash.startsWith('#flows')) setView('flows');
      else if (hash.startsWith('#library')) setView('library');
      else if (hash.startsWith('#generator')) setView('generator');
      else if (hash.startsWith('#settings')) setView('settings');
      else setView('dashboard');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSetView = (newView: ViewType) => {
    setView(newView);
    if (!window.location.hash.startsWith(`#${newView}`)) {
      window.location.hash = newView === 'dashboard' ? '' : `#${newView}`;
    }
  };

  return (
    <ViewContext.Provider value={{ view, setView: handleSetView }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error('useView must be used within a ViewProvider');
  }
  return context;
}
