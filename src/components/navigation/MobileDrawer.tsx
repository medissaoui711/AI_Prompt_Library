import React, { useEffect, useState } from 'react';
import { 
  X, 
  Sparkles, 
  Sun, 
  Moon, 
  Globe, 
  AlignLeft, 
  AlignRight, 
  ChevronDown,
  ChevronUp,
  LayoutDashboard,
  Library,
  GraduationCap,
  Star,
  Layers,
  Settings,
  ShieldCheck,
  FileText,
  HelpCircle,
  Megaphone,
  Palette,
  Video,
  Code2
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { useDirection } from '../../context/DirectionContext';
import { useView } from '../../context/ViewContext';
import { useNavigation } from './NavigationContext';
import { useModals, ModalType } from '../../context/ModalsContext';
import { SIDEBAR_GROUPS } from './SidebarNav';
import { PWAInstallButton } from '../../pwa/PWAInstallButton';

export function MobileDrawer() {
  const { isMobileDrawerOpen, closeMobileDrawer } = useNavigation();
  const { openModal } = useModals();
  const { t, isArabic, lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { dir, toggleDir } = useDirection();
  const { view, setView } = useView();
  const [isMobileSettingsSubmenuOpen, setIsMobileSettingsSubmenuOpen] = useState(false);
  const [isMobileGroupsOpen, setIsMobileGroupsOpen] = useState(true);

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

  const currentHash = typeof window !== 'undefined' ? window.location.hash : '';
  const isDashboardActive = view === 'dashboard';
  const isLibraryActive = view === 'library' && !currentHash.includes('favorites=true') && !currentHash.includes('group=');
  const isAcademyActive = view === 'flows';
  const isFavoritesActive = view === 'library' && currentHash.includes('favorites=true');

  const navigateTo = (targetView: 'dashboard' | 'library' | 'flows', hash?: string) => {
    if (hash !== undefined) {
      window.location.hash = hash;
    }
    setView(targetView);
    closeMobileDrawer();
  };

  const navigateToGroup = (groupId: string) => {
    window.location.hash = `#library?group=${groupId}`;
    setView('library');
    closeMobileDrawer();
  };

  const handleModalClick = (type: ModalType) => {
    openModal(type);
    closeMobileDrawer();
  };

  return (
    <>
      {/* Backdrop with smooth fade-in animation */}
      <div
        role="presentation"
        onClick={closeMobileDrawer}
        aria-hidden={!isMobileDrawerOpen}
        className={`
          fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden transition-all duration-300
          ${isMobileDrawerOpen 
            ? 'opacity-100 visible pointer-events-auto' 
            : 'opacity-0 invisible pointer-events-none'
          }
        `}
      />

      {/* Drawer Panel - Bulletproof RTL/LTR physical positioning & visibility */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t.menu}
        className={`
          fixed inset-y-0 z-50 flex flex-col w-[85vw] max-w-[320px]
          bg-card text-card-foreground shadow-2xl md:hidden
          transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
          pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,0px)]
          ${dir === 'rtl' ? 'right-0 left-auto border-s border-border' : 'left-0 right-auto border-e border-border'}
          ${isMobileDrawerOpen 
            ? 'translate-x-0 opacity-100 visible pointer-events-auto' 
            : dir === 'rtl'
              ? 'translate-x-full opacity-0 invisible pointer-events-none'
              : '-translate-x-full opacity-0 invisible pointer-events-none'
          }
        `}
      >
        {/* Drawer Header */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-border/80 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-sm shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm font-bold text-foreground truncate">
                {t.appName}
              </h2>
              <p className="text-[10px] text-muted-foreground font-mono truncate">
                {t.version}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeMobileDrawer}
            aria-label={t.closeMenu || 'إغلاق القائمة'}
            className="w-10 h-10 rounded-xl flex items-center justify-center bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Navigation List */}
        <nav className="flex-1 overflow-y-auto py-3 px-3 space-y-1 scrollbar-thin" aria-label={t.menu}>
          {/* 1. الرئيسية */}
          <button
            type="button"
            onClick={() => navigateTo('dashboard', '')}
            aria-current={isDashboardActive ? 'page' : undefined}
            className={`
              flex items-center gap-3 w-full h-11 px-3.5 rounded-xl text-sm font-medium transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer
              ${isDashboardActive
                ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                : 'text-muted-foreground hover:bg-muted/70 hover:text-foreground'
              }
            `}
          >
            <LayoutDashboard className="w-5 h-5 shrink-0" />
            <span>{isArabic ? 'الرئيسية' : 'Home'}</span>
          </button>

          {/* 2. مكتبة الأوامر */}
          <button
            type="button"
            onClick={() => navigateTo('library', '#library')}
            aria-current={isLibraryActive ? 'page' : undefined}
            className={`
              flex items-center gap-3 w-full h-11 px-3.5 rounded-xl text-sm font-medium transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer
              ${isLibraryActive
                ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                : 'text-muted-foreground hover:bg-muted/70 hover:text-foreground'
              }
            `}
          >
            <Library className="w-5 h-5 shrink-0" />
            <span>{isArabic ? 'مكتبة الأوامر' : 'Command Library'}</span>
          </button>

          {/* 3. أكاديمية الأوامر */}
          <button
            type="button"
            onClick={() => navigateTo('flows', '#flows')}
            aria-current={isAcademyActive ? 'page' : undefined}
            className={`
              flex items-center gap-3 w-full h-11 px-3.5 rounded-xl text-sm font-medium transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer
              ${isAcademyActive
                ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                : 'text-muted-foreground hover:bg-muted/70 hover:text-foreground'
              }
            `}
          >
            <GraduationCap className="w-5 h-5 shrink-0" />
            <span>{isArabic ? 'أكاديمية الأوامر' : 'Command Academy'}</span>
          </button>

          {/* 4. مكتبتي */}
          <button
            type="button"
            onClick={() => navigateTo('library', '#library?favorites=true')}
            aria-current={isFavoritesActive ? 'page' : undefined}
            className={`
              flex items-center gap-3 w-full h-11 px-3.5 rounded-xl text-sm font-medium transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer
              ${isFavoritesActive
                ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                : 'text-muted-foreground hover:bg-muted/70 hover:text-foreground'
              }
            `}
          >
            <Star className="w-5 h-5 shrink-0" />
            <span>{isArabic ? 'مكتبتي' : 'My Library'}</span>
          </button>

          {/* Divider before Groups */}
          <div className="pt-2 pb-1">
            <div className="h-px bg-border/60 mx-2" />
          </div>

          {/* 5. المجموعات (Collapsible section) */}
          <div>
            <button
              type="button"
              onClick={() => setIsMobileGroupsOpen((prev) => !prev)}
              className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors rounded-lg cursor-pointer select-none"
            >
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span className="tracking-wide uppercase">{isArabic ? 'المجموعات' : 'Groups'}</span>
              </div>
              {isMobileGroupsOpen ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>

            {isMobileGroupsOpen && (
              <div className="space-y-1 mt-1 ps-2">
                {SIDEBAR_GROUPS.map((grp) => {
                  const GroupIcon = grp.icon;
                  const isGroupActive = view === 'library' && currentHash.includes(`group=${grp.id}`);
                  const groupLabel = isArabic ? grp.labelAr : grp.labelEn;

                  return (
                    <button
                      key={grp.id}
                      type="button"
                      onClick={() => navigateToGroup(grp.id)}
                      className={`
                        flex items-center w-full h-10 px-3 gap-3 rounded-lg text-xs font-medium transition-all duration-150
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer
                        ${isGroupActive 
                          ? 'bg-primary/15 text-primary font-semibold' 
                          : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                        }
                      `}
                    >
                      <GroupIcon className="w-4 h-4 shrink-0" />
                      <span className="truncate">{groupLabel}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Divider before Settings & Help */}
          <div className="pt-2 pb-1">
            <div className="h-px bg-border/60 mx-2" />
          </div>

          {/* 6. الإعدادات (Settings) */}
          <div className="space-y-1">
            <button
              type="button"
              onClick={() => setIsMobileSettingsSubmenuOpen((prev) => !prev)}
              aria-expanded={isMobileSettingsSubmenuOpen}
              className={`
                flex items-center justify-between w-full h-11 px-3.5 rounded-xl text-sm font-medium transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer
                ${isMobileSettingsSubmenuOpen
                  ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                  : 'text-muted-foreground hover:bg-muted/70 hover:text-foreground'
                }
              `}
            >
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 shrink-0" />
                <span>{isArabic ? 'الإعدادات' : 'Settings'}</span>
              </div>
              {isMobileSettingsSubmenuOpen ? (
                <ChevronUp className="w-4 h-4 opacity-70" />
              ) : (
                <ChevronDown className="w-4 h-4 opacity-70" />
              )}
            </button>

            {/* Submenu for Settings */}
            {isMobileSettingsSubmenuOpen && (
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
              </div>
            )}
          </div>

          {/* 7. المساعدة (Help) */}
          <button
            type="button"
            onClick={() => handleModalClick('faq')}
            className="flex items-center gap-3 w-full h-11 px-3.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted/70 hover:text-foreground transition-all duration-200 cursor-pointer"
          >
            <HelpCircle className="w-5 h-5 shrink-0" />
            <span>{isArabic ? 'المساعدة' : 'Help'}</span>
          </button>
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
