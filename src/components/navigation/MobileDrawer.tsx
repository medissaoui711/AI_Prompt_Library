import React, { useEffect, useState } from 'react';
import { 
  X, 
  Sparkles, 
  Sun, 
  Moon, 
  Globe, 
  AlignLeft, 
  AlignRight, 
  ChevronLeft, 
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Settings,
  ShieldCheck,
  FileText,
  HelpCircle
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { useDirection } from '../../context/DirectionContext';
import { useView, ViewType } from '../../context/ViewContext';
import { useNavigation } from './NavigationContext';
import { useModals, ModalType } from '../../context/ModalsContext';
import { navItems } from './SidebarNav';
import { PWAInstallButton } from '../../pwa/PWAInstallButton';

export function MobileDrawer() {
  const { isMobileDrawerOpen, closeMobileDrawer } = useNavigation();
  const { openModal } = useModals();
  const { t, isArabic, lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { dir, toggleDir } = useDirection();
  const { view, setView } = useView();
  const [isMobileSettingsSubmenuOpen, setIsMobileSettingsSubmenuOpen] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileDrawerOpen) {
        closeMobileDrawer();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileDrawerOpen, closeMobileDrawer]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsMobileSettingsSubmenuOpen(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileDrawerOpen]);

  const handleItemClick = (id: ViewType) => {
    if (id === 'settings') {
      setIsMobileSettingsSubmenuOpen((prev) => !prev);
      return;
    }
    setView(id);
    closeMobileDrawer();
  };

  const handleModalClick = (type: ModalType) => {
    openModal(type);
    closeMobileDrawer();
  };

  return (
    <>
      {/* Backdrop with fade-in animation */}
      {isMobileDrawerOpen && (
        <div
          role="presentation"
          onClick={closeMobileDrawer}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden animate-in fade-in duration-300"
          aria-hidden="true"
        />
      )}

      {/* Drawer Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t.menu}
        className={`
          fixed inset-y-0 start-0 z-50 flex flex-col w-[85vw] max-w-[320px]
          bg-card text-card-foreground border-e border-border shadow-2xl md:hidden
          transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
          pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,0px)]
          ${isMobileDrawerOpen 
            ? 'translate-x-0' 
            : isArabic ? 'translate-x-full' : '-translate-x-full'
          }
        `}
      >
        {/* Drawer Header */}
        <div className="flex h-16 items-center justify-between px-5 border-b border-border/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-foreground truncate">
                {t.appName}
              </h2>
              <p className="text-[10px] text-muted-foreground font-mono">
                {t.version}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeMobileDrawer}
            aria-label={t.closeMenu || 'Close menu'}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Navigation List */}
        <nav className="flex-1 overflow-y-auto py-3 px-3 space-y-1.5 scrollbar-thin" aria-label={t.menu}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isSettingsItem = item.id === 'settings';
            const isActive = isSettingsItem ? isMobileSettingsSubmenuOpen : view === item.id;
            const label = t[item.labelKey];

            return (
              <div key={item.id} className="space-y-1">
                <button
                  type="button"
                  onClick={() => handleItemClick(item.id)}
                  aria-current={isActive && !isSettingsItem ? 'page' : undefined}
                  aria-expanded={isSettingsItem ? isMobileSettingsSubmenuOpen : undefined}
                  className={`
                    flex items-center justify-between w-full h-12 px-3.5 rounded-xl text-sm font-medium transition-all duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer
                    ${isActive
                      ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                      : 'text-muted-foreground hover:bg-muted/70 hover:text-foreground'
                    }
                  `}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-6 h-6 flex items-center justify-center ${isActive ? 'text-primary-foreground' : 'text-foreground/70'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span>{label}</span>
                  </div>

                  {isSettingsItem ? (
                    isMobileSettingsSubmenuOpen ? (
                      <ChevronUp className="w-4 h-4 opacity-70" />
                    ) : (
                      <ChevronDown className="w-4 h-4 opacity-70" />
                    )
                  ) : isArabic ? (
                    <ChevronLeft className="w-4 h-4 opacity-40" />
                  ) : (
                    <ChevronRight className="w-4 h-4 opacity-40" />
                  )}
                </button>

                {/* Submenu for Settings */}
                {isSettingsItem && isMobileSettingsSubmenuOpen && (
                  <div className="ps-4 pe-1 py-1 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                    <button
                      type="button"
                      onClick={() => handleModalClick('settings')}
                      className="w-full flex items-center gap-3 p-2.5 rounded-xl text-xs font-semibold text-foreground/80 hover:text-foreground hover:bg-accent/70 transition-colors text-start cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                        <Settings className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 truncate">
                        <div className="truncate">{t.settingsOptionSettings}</div>
                        <div className="text-[10px] text-muted-foreground font-normal truncate">{t.settingsOptionSettingsDesc}</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleModalClick('privacy')}
                      className="w-full flex items-center gap-3 p-2.5 rounded-xl text-xs font-semibold text-foreground/80 hover:text-foreground hover:bg-accent/70 transition-colors text-start cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 truncate">
                        <div className="truncate">{t.settingsOptionPrivacy}</div>
                        <div className="text-[10px] text-muted-foreground font-normal truncate">{t.settingsOptionPrivacyDesc}</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleModalClick('terms')}
                      className="w-full flex items-center gap-3 p-2.5 rounded-xl text-xs font-semibold text-foreground/80 hover:text-foreground hover:bg-accent/70 transition-colors text-start cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                        <FileText className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 truncate">
                        <div className="truncate">{t.settingsOptionTerms}</div>
                        <div className="text-[10px] text-muted-foreground font-normal truncate">{t.settingsOptionTermsDesc}</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleModalClick('faq')}
                      className="w-full flex items-center gap-3 p-2.5 rounded-xl text-xs font-semibold text-foreground/80 hover:text-foreground hover:bg-accent/70 transition-colors text-start cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                        <HelpCircle className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 truncate">
                        <div className="truncate">{t.settingsOptionFAQ}</div>
                        <div className="text-[10px] text-muted-foreground font-normal truncate">{t.settingsOptionFAQDesc}</div>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Quick Settings & Utility Controls in Mobile Drawer */}
        <div className="p-3 border-t border-border/80 space-y-3 bg-muted/20">
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex flex-col items-center justify-center gap-1.5 h-14 rounded-xl border border-border/60 bg-card hover:bg-accent text-xs font-medium text-foreground transition cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-500" />}
              <span className="text-[11px]">{theme === 'dark' ? (isArabic ? 'نهاري' : 'Light') : (isArabic ? 'ليلي' : 'Dark')}</span>
            </button>

            <button
              type="button"
              onClick={toggleLang}
              className="flex flex-col items-center justify-center gap-1.5 h-14 rounded-xl border border-border/60 bg-card hover:bg-accent text-xs font-medium text-foreground transition cursor-pointer"
            >
              <Globe className="w-4 h-4 text-indigo-500" />
              <span className="text-[11px] uppercase">{lang === 'ar' ? 'English' : 'عربي'}</span>
            </button>

            <button
              type="button"
              onClick={toggleDir}
              className="flex flex-col items-center justify-center gap-1.5 h-14 rounded-xl border border-border/60 bg-card hover:bg-accent text-xs font-medium text-foreground transition cursor-pointer"
            >
              {dir === 'rtl' ? <AlignLeft className="w-4 h-4 text-emerald-500" /> : <AlignRight className="w-4 h-4 text-emerald-500" />}
              <span className="text-[11px] uppercase">{dir === 'rtl' ? 'LTR' : 'RTL'}</span>
            </button>
          </div>

          <div className="pt-1">
            <PWAInstallButton variant="full" />
          </div>
        </div>
      </div>
    </>
  );
}
