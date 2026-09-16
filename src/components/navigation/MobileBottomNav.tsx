import React from 'react';
import { LayoutDashboard, Library, Compass, FlaskConical, Menu } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useView, ViewType } from '../../context/ViewContext';
import { useNavigation } from './NavigationContext';

interface TabItem {
  id: ViewType | 'more';
  icon: React.ComponentType<{ className?: string }>;
  labelKey: keyof typeof import('../../i18n/translations').translations.ar;
}

const mobileTabs: TabItem[] = [
  { id: 'dashboard', icon: LayoutDashboard, labelKey: 'dashboard' },
  { id: 'library', icon: Library, labelKey: 'library' },
  { id: 'flows', icon: Compass, labelKey: 'flows' },
  { id: 'playground', icon: FlaskConical, labelKey: 'playground' },
  { id: 'more', icon: Menu, labelKey: 'menu' },
];

export function MobileBottomNav() {
  const { view, setView } = useView();
  const { toggleMobileDrawer } = useNavigation();
  const { t } = useLanguage();

  const handleTabClick = (tabId: ViewType | 'more') => {
    if (tabId === 'more') {
      toggleMobileDrawer();
    } else {
      setView(tabId);
    }
  };

  return (
    <nav
      aria-label={t.menu}
      className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-card/95 backdrop-blur-lg border-t border-border/80 shadow-lg pb-[env(safe-area-inset-bottom,0px)]"
    >
      <div className="flex items-center justify-around h-14 max-w-lg mx-auto px-2">
        {mobileTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === 'more' ? false : view === tab.id;
          const label = t[tab.labelKey];

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
                <Icon className="w-5 h-5" />
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
