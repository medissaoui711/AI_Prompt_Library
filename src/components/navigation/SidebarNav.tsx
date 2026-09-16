import React from 'react';
import { 
  LayoutDashboard, 
  Library, 
  FlaskConical, 
  GitMerge, 
  Compass, 
  PenTool, 
  Settings,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useView, ViewType } from '../../context/ViewContext';
import { useNavigation } from './NavigationContext';
import { useModals } from '../../context/ModalsContext';
import { SidebarCollapseButton } from './SidebarCollapseButton';
import { SidebarTooltip } from './SidebarTooltip';
import { SettingsDropdownMenu } from './SettingsDropdownMenu';
import { PWAInstallButton } from '../../pwa/PWAInstallButton';

export interface NavItemConfig {
  id: ViewType;
  icon: React.ComponentType<{ className?: string }>;
  labelKey: keyof typeof import('../../i18n/translations').translations.ar;
  badge?: string;
}

export const navItems: NavItemConfig[] = [
  { id: 'dashboard', icon: LayoutDashboard, labelKey: 'dashboard' },
  { id: 'library', icon: Library, labelKey: 'library' },
  { id: 'flows', icon: Compass, labelKey: 'flows' },
  { id: 'playground', icon: FlaskConical, labelKey: 'playground' },
  { id: 'workflows', icon: GitMerge, labelKey: 'workflows' },
  { id: 'generator', icon: PenTool, labelKey: 'generator' },
  { id: 'settings', icon: Settings, labelKey: 'settings' },
];

export function SidebarNav() {
  const { isCollapsed } = useNavigation();
  const { isSettingsMenuOpen, toggleSettingsMenu, closeSettingsMenu } = useModals();
  const { t, isArabic } = useLanguage();
  const { view, setView } = useView();
  const settingsButtonRef = React.useRef<HTMLButtonElement>(null);

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
          {/* Brand Icon Logo */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shrink-0 shadow-sm">
            <Sparkles className="w-5 h-5" />
          </div>

          {/* App Title & Version (Animated with smooth fade/width transition) */}
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
      <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1.5 scrollbar-thin relative" aria-label={t.navMain || 'Main Navigation'}>
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isSettingsItem = item.id === 'settings';
            const isActive = isSettingsItem ? isSettingsMenuOpen || view === 'settings' : view === item.id;
            const label = t[item.labelKey];

            const handleClick = () => {
              if (isSettingsItem) {
                toggleSettingsMenu();
              } else {
                closeSettingsMenu();
                setView(item.id);
              }
            };

            const navItemContent = (
              <button
                ref={isSettingsItem ? settingsButtonRef : undefined}
                type="button"
                onClick={handleClick}
                aria-current={isActive ? 'page' : undefined}
                aria-haspopup={isSettingsItem ? 'menu' : undefined}
                aria-expanded={isSettingsItem ? isSettingsMenuOpen : undefined}
                className={`
                  relative group/item flex items-center w-full rounded-xl transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer
                  ${isCollapsed ? 'h-11 justify-center' : 'h-11 px-3 gap-3 justify-start'}
                  ${isActive 
                    ? 'bg-primary text-primary-foreground font-semibold shadow-sm' 
                    : 'text-muted-foreground hover:bg-accent/80 hover:text-foreground'
                  }
                `}
              >
                {/* Active leading accent indicator for high contrast visual anchor */}
                {isActive && (
                  <span 
                    className={`
                      absolute top-2 bottom-2 w-1 rounded-full bg-white dark:bg-slate-900
                      ${isArabic ? 'end-1' : 'start-1'}
                    `} 
                  />
                )}

                {/* Fixed-size, perfectly centered Icon container */}
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <Icon className={`w-5 h-5 transition-transform duration-200 group-hover/item:scale-105 ${isActive ? 'text-primary-foreground' : ''}`} />
                </div>

                {/* Text Label with smooth width + opacity collapse */}
                <span
                  className={`
                    text-sm truncate transition-all duration-300 ease-out whitespace-nowrap
                    ${isCollapsed ? 'opacity-0 w-0 overflow-hidden pointer-events-none' : 'opacity-100 flex-1 text-start'}
                  `}
                >
                  {label}
                </span>

                {/* Badge if present */}
                {item.badge && !isCollapsed && (
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-primary-foreground/20 text-primary-foreground">
                    {item.badge}
                  </span>
                )}
              </button>
            );

            return (
              <li key={item.id} className="relative">
                {isCollapsed ? (
                  <SidebarTooltip label={label} badge={item.badge} isVisible={isCollapsed && !isSettingsMenuOpen}>
                    {navItemContent}
                  </SidebarTooltip>
                ) : (
                  navItemContent
                )}

                {/* Sliding Dropdown Menu for Settings */}
                {isSettingsItem && (
                  <SettingsDropdownMenu
                    isOpen={isSettingsMenuOpen}
                    onClose={closeSettingsMenu}
                    anchorRef={settingsButtonRef}
                    position={isCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}
                  />
                )}
              </li>
            );
          })}
        </ul>
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
