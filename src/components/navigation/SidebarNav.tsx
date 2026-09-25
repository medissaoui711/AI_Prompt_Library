import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Library, 
  GraduationCap, 
  Star, 
  Layers, 
  Settings, 
  HelpCircle, 
  Sparkles, 
  ChevronDown, 
  ChevronRight,
  Megaphone,
  Palette,
  Video,
  Code2,
  FileText,
  TrendingUp,
  Briefcase
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useView } from '../../context/ViewContext';
import { useNavigation } from './NavigationContext';
import { useModals } from '../../context/ModalsContext';
import { SidebarCollapseButton } from './SidebarCollapseButton';
import { SidebarTooltip } from './SidebarTooltip';
import { SettingsDropdownMenu } from './SettingsDropdownMenu';
import { PWAInstallButton } from '../../pwa/PWAInstallButton';

export interface GroupItemConfig {
  id: string;
  groupKey: 'sales' | 'business' | 'edu' | 'marketing' | 'design' | 'carousel' | 'video' | 'dev' | 'cv';
  icon: React.ComponentType<{ className?: string }>;
  labelAr: string;
  labelEn: string;
}

export const SIDEBAR_GROUPS: GroupItemConfig[] = [
  { id: 'sales', groupKey: 'sales', icon: TrendingUp, labelAr: 'المبيعات والعملاء', labelEn: 'Sales & Leads' },
  { id: 'business', groupKey: 'business', icon: Briefcase, labelAr: 'الأعمال والبيانات', labelEn: 'Business & Startup' },
  { id: 'edu', groupKey: 'edu', icon: GraduationCap, labelAr: 'التعليم', labelEn: 'Education' },
  { id: 'carousel', groupKey: 'carousel', icon: Layers, labelAr: 'المراجع والكاروسيل', labelEn: 'Visual & Carousel' },
  { id: 'marketing', groupKey: 'marketing', icon: Megaphone, labelAr: 'التسويق', labelEn: 'Marketing' },
  { id: 'design', groupKey: 'design', icon: Palette, labelAr: 'التصميم', labelEn: 'Design' },
  { id: 'video', groupKey: 'video', icon: Video, labelAr: 'الفيديو', labelEn: 'Video' },
  { id: 'dev', groupKey: 'dev', icon: Code2, labelAr: 'البرمجة', labelEn: 'Programming' },
  { id: 'cv', groupKey: 'cv', icon: FileText, labelAr: 'السيرة الذاتية', labelEn: 'CV & Career' },
];

export function SidebarNav() {
  const { isCollapsed, toggleSidebar } = useNavigation();
  const { isSettingsMenuOpen, toggleSettingsMenu, closeSettingsMenu, openModal, activeModal } = useModals();
  const { t, isArabic } = useLanguage();
  const { view, setView } = useView();
  const [isGroupsOpen, setIsGroupsOpen] = useState(true);
  const settingsButtonRef = React.useRef<HTMLButtonElement>(null);

  const currentHash = typeof window !== 'undefined' ? window.location.hash : '';
  const isFavoritesActive = view === 'library' && currentHash.includes('favorites=true');
  const isLibraryActive = view === 'library' && !currentHash.includes('favorites=true') && !currentHash.includes('group=');
  const isAcademyActive = view === 'flows';
  const isDashboardActive = view === 'dashboard';
  const isFaqActive = activeModal === 'faq';

  const navigateTo = (targetView: 'dashboard' | 'library' | 'flows', hash?: string) => {
    closeSettingsMenu();
    if (hash !== undefined) {
      window.location.hash = hash;
    }
    setView(targetView);
  };

  const navigateToGroup = (groupId: string) => {
    closeSettingsMenu();
    window.location.hash = `#library?group=${groupId}`;
    setView('library');
  };

  return (
    <aside
      aria-label={t.menu}
      className={`
        hidden md:flex flex-col relative shrink-0 z-30
        h-full border-e border-border bg-card text-card-foreground
        transition-[width] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isCollapsed ? 'w-[72px]' : 'w-64'}
      `}
    >
      {/* Edge-mounted circular Collapse / Expand Toggle button */}
      <SidebarCollapseButton />

      {/* Top Brand Header */}
      <div className="flex h-16 items-center px-4 border-b border-border/80 overflow-hidden">
        <div className="flex items-center gap-3 w-full">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shrink-0 shadow-sm">
            <Sparkles className="w-5 h-5" />
          </div>

          <div
            className={`
              flex flex-col overflow-hidden transition-all duration-300 ease-out whitespace-nowrap
              ${isCollapsed ? 'opacity-0 w-0 pointer-events-none' : 'opacity-100 flex-1'}
            `}
          >
            <span className="text-sm font-bold text-foreground truncate">
              {t.appName}
            </span>
            <span className="text-[10px] text-muted-foreground font-mono truncate">
              AI Prompt Studio
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Links Area */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-1 scrollbar-thin relative" aria-label={t.navMain || 'Main Navigation'}>
        {/* 1. الرئيسية (Dashboard) */}
        <div className="relative">
          {isCollapsed ? (
            <SidebarTooltip label={isArabic ? 'الرئيسية' : 'Home'} isVisible={isCollapsed}>
              <button
                type="button"
                onClick={() => navigateTo('dashboard', '')}
                aria-current={isDashboardActive ? 'page' : undefined}
                className={`
                  relative flex items-center justify-center w-full h-11 rounded-xl transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer
                  ${isDashboardActive ? 'bg-primary text-primary-foreground font-semibold shadow-sm' : 'text-muted-foreground hover:bg-accent/80 hover:text-foreground'}
                `}
              >
                <LayoutDashboard className="w-5 h-5" />
              </button>
            </SidebarTooltip>
          ) : (
            <button
              type="button"
              onClick={() => navigateTo('dashboard', '')}
              aria-current={isDashboardActive ? 'page' : undefined}
              className={`
                relative flex items-center w-full h-11 px-3 gap-3 rounded-xl transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer
                ${isDashboardActive ? 'bg-primary text-primary-foreground font-semibold shadow-sm' : 'text-muted-foreground hover:bg-accent/80 hover:text-foreground'}
              `}
            >
              <LayoutDashboard className="w-5 h-5 shrink-0" />
              <span className="text-sm font-medium truncate">{isArabic ? 'الرئيسية' : 'Home'}</span>
            </button>
          )}
        </div>

        {/* 2. مكتبة الأوامر (Command Library) */}
        <div className="relative">
          {isCollapsed ? (
            <SidebarTooltip label={isArabic ? 'مكتبة الأوامر' : 'Command Library'} isVisible={isCollapsed}>
              <button
                type="button"
                onClick={() => navigateTo('library', '#library')}
                aria-current={isLibraryActive ? 'page' : undefined}
                className={`
                  relative flex items-center justify-center w-full h-11 rounded-xl transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer
                  ${isLibraryActive ? 'bg-primary text-primary-foreground font-semibold shadow-sm' : 'text-muted-foreground hover:bg-accent/80 hover:text-foreground'}
                `}
              >
                <Library className="w-5 h-5" />
              </button>
            </SidebarTooltip>
          ) : (
            <button
              type="button"
              onClick={() => navigateTo('library', '#library')}
              aria-current={isLibraryActive ? 'page' : undefined}
              className={`
                relative flex items-center w-full h-11 px-3 gap-3 rounded-xl transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer
                ${isLibraryActive ? 'bg-primary text-primary-foreground font-semibold shadow-sm' : 'text-muted-foreground hover:bg-accent/80 hover:text-foreground'}
              `}
            >
              <Library className="w-5 h-5 shrink-0" />
              <span className="text-sm font-medium truncate">{isArabic ? 'مكتبة الأوامر' : 'Command Library'}</span>
            </button>
          )}
        </div>

        {/* 3. أكاديمية الأوامر (Command Academy) */}
        <div className="relative">
          {isCollapsed ? (
            <SidebarTooltip label={isArabic ? 'أكاديمية الأوامر' : 'Command Academy'} isVisible={isCollapsed}>
              <button
                type="button"
                onClick={() => navigateTo('flows', '#flows')}
                aria-current={isAcademyActive ? 'page' : undefined}
                className={`
                  relative flex items-center justify-center w-full h-11 rounded-xl transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer
                  ${isAcademyActive ? 'bg-primary text-primary-foreground font-semibold shadow-sm' : 'text-muted-foreground hover:bg-accent/80 hover:text-foreground'}
                `}
              >
                <GraduationCap className="w-5 h-5" />
              </button>
            </SidebarTooltip>
          ) : (
            <button
              type="button"
              onClick={() => navigateTo('flows', '#flows')}
              aria-current={isAcademyActive ? 'page' : undefined}
              className={`
                relative flex items-center w-full h-11 px-3 gap-3 rounded-xl transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer
                ${isAcademyActive ? 'bg-primary text-primary-foreground font-semibold shadow-sm' : 'text-muted-foreground hover:bg-accent/80 hover:text-foreground'}
              `}
            >
              <GraduationCap className="w-5 h-5 shrink-0" />
              <span className="text-sm font-medium truncate">{isArabic ? 'أكاديمية الأوامر' : 'Command Academy'}</span>
            </button>
          )}
        </div>

        {/* 4. مكتبتي (My Library / Favorites) */}
        <div className="relative">
          {isCollapsed ? (
            <SidebarTooltip label={isArabic ? 'مكتبتي' : 'My Library'} isVisible={isCollapsed}>
              <button
                type="button"
                onClick={() => navigateTo('library', '#library?favorites=true')}
                aria-current={isFavoritesActive ? 'page' : undefined}
                className={`
                  relative flex items-center justify-center w-full h-11 rounded-xl transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer
                  ${isFavoritesActive ? 'bg-primary text-primary-foreground font-semibold shadow-sm' : 'text-muted-foreground hover:bg-accent/80 hover:text-foreground'}
                `}
              >
                <Star className="w-5 h-5" />
              </button>
            </SidebarTooltip>
          ) : (
            <button
              type="button"
              onClick={() => navigateTo('library', '#library?favorites=true')}
              aria-current={isFavoritesActive ? 'page' : undefined}
              className={`
                relative flex items-center w-full h-11 px-3 gap-3 rounded-xl transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer
                ${isFavoritesActive ? 'bg-primary text-primary-foreground font-semibold shadow-sm' : 'text-muted-foreground hover:bg-accent/80 hover:text-foreground'}
              `}
            >
              <Star className="w-5 h-5 shrink-0" />
              <span className="text-sm font-medium truncate">{isArabic ? 'مكتبتي' : 'My Library'}</span>
            </button>
          )}
        </div>

        {/* Divider before Groups */}
        <div className="pt-2 pb-1">
          <div className="h-px bg-border/60 mx-2" />
        </div>

        {/* 5. المجموعات (Collapsible Groups Section) */}
        <div className="relative space-y-1">
          {isCollapsed ? (
            <SidebarTooltip label={isArabic ? 'المجموعات (توسيع)' : 'Groups (Expand)'} isVisible={isCollapsed}>
              <button
                type="button"
                onClick={toggleSidebar}
                className="relative flex items-center justify-center w-full h-11 rounded-xl text-muted-foreground hover:bg-accent/80 hover:text-foreground transition-all duration-200 cursor-pointer"
              >
                <Layers className="w-5 h-5" />
              </button>
            </SidebarTooltip>
          ) : (
            <div>
              {/* Collapsible Section Trigger */}
              <button
                type="button"
                onClick={() => setIsGroupsOpen((prev) => !prev)}
                className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors rounded-lg cursor-pointer select-none"
              >
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span className="tracking-wide uppercase">{isArabic ? 'المجموعات' : 'Groups'}</span>
                </div>
                {isGroupsOpen ? (
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
                ) : (
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isArabic ? 'rotate-180' : ''}`} />
                )}
              </button>

              {/* Collapsible Groups Items List */}
              {isGroupsOpen && (
                <div className="space-y-0.5 mt-1 ps-2">
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
                          flex items-center w-full h-9 px-3 gap-2.5 rounded-lg text-xs font-medium transition-all duration-150
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer
                          ${isGroupActive 
                            ? 'bg-primary/15 text-primary font-semibold' 
                            : 'text-muted-foreground hover:bg-accent/70 hover:text-foreground'
                          }
                        `}
                      >
                        <GroupIcon className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{groupLabel}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Divider before Settings & Help */}
        <div className="pt-2 pb-1">
          <div className="h-px bg-border/60 mx-2" />
        </div>

        {/* 6. الإعدادات (Settings) */}
        <div className="relative">
          {isCollapsed ? (
            <SidebarTooltip label={isArabic ? 'الإعدادات' : 'Settings'} isVisible={isCollapsed && !isSettingsMenuOpen}>
              <button
                ref={settingsButtonRef}
                type="button"
                onClick={toggleSettingsMenu}
                aria-expanded={isSettingsMenuOpen}
                className={`
                  relative flex items-center justify-center w-full h-11 rounded-xl transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer
                  ${isSettingsMenuOpen ? 'bg-primary text-primary-foreground font-semibold shadow-sm' : 'text-muted-foreground hover:bg-accent/80 hover:text-foreground'}
                `}
              >
                <Settings className="w-5 h-5" />
              </button>
            </SidebarTooltip>
          ) : (
            <button
              ref={settingsButtonRef}
              type="button"
              onClick={toggleSettingsMenu}
              aria-expanded={isSettingsMenuOpen}
              className={`
                relative flex items-center w-full h-11 px-3 gap-3 rounded-xl transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer
                ${isSettingsMenuOpen ? 'bg-primary text-primary-foreground font-semibold shadow-sm' : 'text-muted-foreground hover:bg-accent/80 hover:text-foreground'}
              `}
            >
              <Settings className="w-5 h-5 shrink-0" />
              <span className="text-sm font-medium truncate">{isArabic ? 'الإعدادات' : 'Settings'}</span>
            </button>
          )}

          {/* Sliding Dropdown Menu for Settings */}
          <SettingsDropdownMenu
            isOpen={isSettingsMenuOpen}
            onClose={closeSettingsMenu}
            anchorRef={settingsButtonRef}
            position={isCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}
          />
        </div>

        {/* 7. المساعدة (Help / FAQ Modal) */}
        <div className="relative">
          {isCollapsed ? (
            <SidebarTooltip label={isArabic ? 'المساعدة' : 'Help'} isVisible={isCollapsed}>
              <button
                type="button"
                onClick={() => {
                  closeSettingsMenu();
                  openModal('faq');
                }}
                className={`
                  relative flex items-center justify-center w-full h-11 rounded-xl transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer
                  ${isFaqActive ? 'bg-primary text-primary-foreground font-semibold shadow-sm' : 'text-muted-foreground hover:bg-accent/80 hover:text-foreground'}
                `}
              >
                <HelpCircle className="w-5 h-5" />
              </button>
            </SidebarTooltip>
          ) : (
            <button
              type="button"
              onClick={() => {
                closeSettingsMenu();
                openModal('faq');
              }}
              className={`
                relative flex items-center w-full h-11 px-3 gap-3 rounded-xl transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer
                ${isFaqActive ? 'bg-primary text-primary-foreground font-semibold shadow-sm' : 'text-muted-foreground hover:bg-accent/80 hover:text-foreground'}
              `}
            >
              <HelpCircle className="w-5 h-5 shrink-0" />
              <span className="text-sm font-medium truncate">{isArabic ? 'المساعدة' : 'Help'}</span>
            </button>
          )}
        </div>
      </nav>

      {/* Bottom Footer Section */}
      <div className="border-t border-border/80 p-2.5 space-y-2">
        {/* PWA Quick Install CTA */}
        <div className="overflow-hidden">
          {isCollapsed ? (
            <SidebarTooltip label={isArabic ? 'تثبيت التطبيق' : 'Install App'} isVisible={isCollapsed}>
              <div className="w-full flex justify-center">
                <PWAInstallButton variant="compact" />
              </div>
            </SidebarTooltip>
          ) : (
            <PWAInstallButton variant="subtle" />
          )}
        </div>

        {/* User / Demo Identity Badge */}
        <div 
          className={`
            flex items-center rounded-xl bg-secondary/70 border border-border/50 p-2 transition-all duration-200
            ${isCollapsed ? 'justify-center' : 'gap-3 px-3'}
          `}
        >
          <div className="w-8 h-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center font-bold text-xs shrink-0">
            AI
          </div>

          <div
            className={`
              flex flex-col overflow-hidden transition-all duration-300 ease-out whitespace-nowrap
              ${isCollapsed ? 'opacity-0 w-0 pointer-events-none' : 'opacity-100 flex-1'}
            `}
          >
            <span className="text-xs font-semibold text-foreground truncate">
              {isArabic ? 'المستخدم' : 'Active User'}
            </span>
            <span className="text-[10px] text-muted-foreground font-mono truncate">
              {t.version}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
