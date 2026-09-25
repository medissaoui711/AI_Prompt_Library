import React, { useRef, useState } from 'react';
import { Menu, X, Moon, Sun, AlignLeft, AlignRight, Sparkles, Settings } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { useDirection } from '../../context/DirectionContext';
import { useView } from '../../context/ViewContext';
import { useNavigation } from '../navigation/NavigationContext';
import { useModals } from '../../context/ModalsContext';
import { SettingsDropdownMenu } from '../navigation/SettingsDropdownMenu';
import { PWAInstallButton } from '../../pwa/PWAInstallButton';

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const { lang, t, toggleLang, isArabic } = useLanguage();
  const { dir, toggleDir } = useDirection();
  const { view } = useView();
  const { isMobileDrawerOpen, toggleMobileDrawer } = useNavigation();
  const { isSettingsMenuOpen, toggleSettingsMenu, closeSettingsMenu } = useModals();
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);
  const headerSettingsBtnRef = useRef<HTMLButtonElement>(null);

  // Determine current page title
  const pageTitle = t[view as keyof typeof t] || t.appName;

  const handleMenuClick = () => {
    if (onMenuClick) {
      onMenuClick();
    } else {
      toggleMobileDrawer();
    }
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between border-b border-border bg-background/85 px-4 backdrop-blur-md sm:px-6">
      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* Mobile Hamburger Toggle Button - Opens and closes drawer in 1 click */}
        <button
          type="button"
          onClick={handleMenuClick}
          aria-label={isMobileDrawerOpen ? (t.closeMenu || 'إغلاق القائمة') : (t.openMenu || 'فتح القائمة')}
          aria-expanded={isMobileDrawerOpen}
          className={`
            md:hidden flex h-10 w-10 items-center justify-center rounded-xl border transition-colors shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
            ${isMobileDrawerOpen 
              ? 'bg-primary text-primary-foreground border-primary' 
              : 'bg-card border-border text-foreground hover:bg-accent hover:border-primary/40'
            }
          `}
        >
          {isMobileDrawerOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Brand Icon */}
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-sm shrink-0">
          <Sparkles className="w-4 h-4" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-foreground md:hidden truncate">{t.appName}</span>
          <span className="hidden md:inline-block text-lg font-semibold text-foreground">{pageTitle}</span>
        </div>
      </div>
      
      {/* System Tools (أدوات النظام) */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* PWA Install Button Header CTA */}
        <PWAInstallButton variant="compact" />

        <button
          onClick={toggleDir}
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
          title={t.toggleDir}
          aria-label={t.toggleDir}
        >
          {dir === 'rtl' ? <AlignLeft className="h-4 w-4" /> : <AlignRight className="h-4 w-4" />}
        </button>

        <button
          onClick={toggleLang}
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
          title={t.toggleLang}
          aria-label={t.toggleLang}
        >
          <span className="text-xs font-bold uppercase">{lang === 'ar' ? 'EN' : 'AR'}</span>
        </button>

        <div className="w-px h-5 bg-border mx-0.5 sm:mx-1" />

        <button
          onClick={toggleTheme}
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
          title={t.toggleTheme}
          aria-label={t.toggleTheme}
        >
          {theme === 'dark' ? (
            <Sun className="h-4 w-4 text-amber-400" />
          ) : (
            <Moon className="h-4 w-4 text-blue-500" />
          )}
        </button>

        {/* Header Settings Quick Menu (Mobile Only - Desktop has Settings in Sidebar) */}
        <div className="relative md:hidden">
          <button
            ref={headerSettingsBtnRef}
            onClick={() => setIsHeaderMenuOpen((prev) => !prev)}
            className={`
              inline-flex h-9 w-9 items-center justify-center rounded-xl transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer
              ${isHeaderMenuOpen 
                ? 'bg-primary text-primary-foreground shadow-sm' 
                : 'text-muted-foreground hover:bg-accent hover:text-foreground'
              }
            `}
            title={t.settings}
            aria-label={t.settings}
            aria-expanded={isHeaderMenuOpen}
          >
            <Settings className="h-4 w-4" />
          </button>

          <SettingsDropdownMenu
            isOpen={isHeaderMenuOpen}
            onClose={() => setIsHeaderMenuOpen(false)}
            anchorRef={headerSettingsBtnRef}
            position="header-dropdown"
          />
        </div>
      </div>
    </header>
  );
}
