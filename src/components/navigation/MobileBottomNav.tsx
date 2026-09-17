import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Library, Star, GraduationCap, Menu } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useView } from '../../context/ViewContext';
import { useNavigation } from './NavigationContext';

export type MobileTabId = 'dashboard' | 'library' | 'favorites' | 'academy' | 'more';

interface TabItem {
  id: MobileTabId;
  icon: React.ComponentType<{ className?: string }>;
  labelAr: string;
  labelEn: string;
}

const mobileTabs: TabItem[] = [
  { id: 'dashboard', icon: LayoutDashboard, labelAr: 'لوحة التحكم', labelEn: 'Dashboard' },
  { id: 'library', icon: Library, labelAr: 'المكتبة', labelEn: 'Library' },
  { id: 'favorites', icon: Star, labelAr: 'المفضلة', labelEn: 'Favorites' },
  { id: 'academy', icon: GraduationCap, labelAr: 'الأكاديمية', labelEn: 'Academy' },
  { id: 'more', icon: Menu, labelAr: 'المزيد', labelEn: 'More' },
];

export function MobileBottomNav() {
  const { view, setView } = useView();
  const { toggleMobileDrawer } = useNavigation();
  const { isArabic } = useLanguage();
  const [currentHash, setCurrentHash] = useState(typeof window !== 'undefined' ? window.location.hash : '');

  useEffect(() => {
    const handleHash = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const isTabActive = (tabId: MobileTabId) => {
    if (tabId === 'dashboard') {
      return view === 'dashboard';
    }
    if (tabId === 'library') {
      return view === 'library' && !currentHash.includes('favorites=true');
    }
    if (tabId === 'favorites') {
      return view === 'library' && currentHash.includes('favorites=true');
    }
    if (tabId === 'academy') {
      return view === 'flows';
    }
    return false;
  };

  const handleTabClick = (tabId: MobileTabId) => {
    if (tabId === 'more') {
      toggleMobileDrawer();
    } else if (tabId === 'favorites') {
      window.location.hash = '#library?favorites=true';
      setView('library');
    } else if (tabId === 'library') {
      window.location.hash = '#library';
      setView('library');
    } else if (tabId === 'academy') {
      window.location.hash = '#flows';
      setView('flows');
    } else if (tabId === 'dashboard') {
      window.location.hash = '';
      setView('dashboard');
    }
  };

  return (
    <nav
      aria-label={isArabic ? 'التنقل الرئيسي للهاتف' : 'Mobile Primary Navigation'}
      className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-card/95 backdrop-blur-lg border-t border-border/80 shadow-lg pb-[env(safe-area-inset-bottom,0px)]"
    >
      <div className="flex items-center justify-around h-14 max-w-lg mx-auto px-2">
        {mobileTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = isTabActive(tab.id);
          const label = isArabic ? tab.labelAr : tab.labelEn;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleTabClick(tab.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`
                flex flex-col items-center justify-center flex-1 h-full py-1 gap-0.5
                transition-all duration-150 relative cursor-pointer focus-visible:outline-none
                ${isActive 
                  ? 'text-primary font-bold' 
                  : 'text-muted-foreground hover:text-foreground'
                }
              `}
            >
              {/* Active Pill top indicator */}
              {isActive && (
                <span className="absolute top-0 w-8 h-0.5 rounded-full bg-primary animate-in fade-in zoom-in-50 duration-200" />
              )}

              <div className={`transition-transform duration-150 ${isActive ? 'scale-110' : 'scale-100'}`}>
                <Icon className={`w-5 h-5 ${isActive && tab.id === 'favorites' ? 'fill-current' : ''}`} />
              </div>
              <span className="text-[10px] tracking-tight truncate max-w-[64px]">
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
