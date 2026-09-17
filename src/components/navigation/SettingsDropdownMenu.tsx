// ==========================================================
// src/components/navigation/SettingsDropdownMenu.tsx
// Sliding/Flyout Menu Triggered by Settings Gear Icon
// ==========================================================

import React, { useRef, useEffect } from 'react';
import { 
  Settings, 
  ShieldCheck, 
  FileText, 
  HelpCircle, 
  ChevronLeft, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useModals, ModalType } from '../../context/ModalsContext';

interface SettingsDropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  anchorRef?: React.RefObject<HTMLElement | null>;
  position?: 'sidebar-expanded' | 'sidebar-collapsed' | 'mobile-drawer' | 'header-dropdown';
}

interface MenuItem {
  id: ModalType;
  titleKey: 'settingsOptionSettings' | 'settingsOptionPrivacy' | 'settingsOptionTerms' | 'settingsOptionFAQ';
  descKey: 'settingsOptionSettingsDesc' | 'settingsOptionPrivacyDesc' | 'settingsOptionTermsDesc' | 'settingsOptionFAQDesc';
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: 'settings',
    titleKey: 'settingsOptionSettings',
    descKey: 'settingsOptionSettingsDesc',
    icon: Settings,
    iconColor: 'bg-blue-500/10 text-blue-500 group-hover/item:bg-blue-500 group-hover/item:text-white',
  },
  {
    id: 'privacy',
    titleKey: 'settingsOptionPrivacy',
    descKey: 'settingsOptionPrivacyDesc',
    icon: ShieldCheck,
    iconColor: 'bg-emerald-500/10 text-emerald-500 group-hover/item:bg-emerald-500 group-hover/item:text-white',
  },
  {
    id: 'terms',
    titleKey: 'settingsOptionTerms',
    descKey: 'settingsOptionTermsDesc',
    icon: FileText,
    iconColor: 'bg-indigo-500/10 text-indigo-500 group-hover/item:bg-indigo-500 group-hover/item:text-white',
  },
  {
    id: 'faq',
    titleKey: 'settingsOptionFAQ',
    descKey: 'settingsOptionFAQDesc',
    icon: HelpCircle,
    iconColor: 'bg-amber-500/10 text-amber-500 group-hover/item:bg-amber-500 group-hover/item:text-white',
  },
];

export function SettingsDropdownMenu({
  isOpen,
  onClose,
  anchorRef,
  position = 'sidebar-expanded',
}: SettingsDropdownMenuProps) {
  const { t, isArabic } = useLanguage();
  const { openModal } = useModals();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        anchorRef?.current &&
        !anchorRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, anchorRef]);

  if (!isOpen) return null;

  const handleSelect = (id: ModalType) => {
    openModal(id);
    onClose();
  };

  // Position classes depending on context
  let positionClasses = '';
  if (position === 'header-dropdown') {
    positionClasses = `
      absolute top-full mt-2.5 z-50 w-72 sm:w-80 max-w-[calc(100vw-1.5rem)]
      bg-card text-card-foreground border border-border/90 rounded-2xl shadow-2xl p-2
      animate-in fade-in slide-in-from-top-2 zoom-in-95 duration-200
      ${isArabic ? 'left-0' : 'right-0'}
    `;
  } else if (position === 'sidebar-collapsed') {
    positionClasses = `
      absolute bottom-2 z-50 w-72 bg-card text-card-foreground
      border border-border/90 rounded-2xl shadow-2xl p-2
      animate-in fade-in zoom-in-95 duration-200
      ${isArabic ? 'end-[76px]' : 'start-[76px]'}
    `;
  } else if (position === 'sidebar-expanded') {
    positionClasses = `
      absolute bottom-14 inset-x-2 z-50 bg-card text-card-foreground
      border border-border/90 rounded-2xl shadow-2xl p-2
      animate-in fade-in slide-in-from-bottom-2 duration-200
    `;
  } else {
    // mobile drawer
    positionClasses = `
      w-full mt-2 bg-card/95 border border-border/90 rounded-2xl shadow-lg p-2
      animate-in fade-in slide-in-from-top-2 duration-200
    `;
  }

  return (
    <div
      ref={menuRef}
      role="menu"
      aria-label={t.settingsMenuTitle}
      className={positionClasses}
    >
      {/* Menu Header */}
      <div className="px-3 py-2 border-b border-border/60 flex items-center justify-between">
        <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
          {t.settingsMenuTitle}
        </span>
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      </div>

      {/* Menu Items */}
      <div className="py-1 space-y-1">
        {MENU_ITEMS.map((item) => {
          const Icon = item.icon;
          const title = t[item.titleKey];
          const desc = t[item.descKey];

          return (
            <button
              key={item.id}
              type="button"
              role="menuitem"
              onClick={() => handleSelect(item.id)}
              className="
                group/item w-full flex items-center justify-between p-2.5 rounded-xl
                hover:bg-accent/80 transition-all duration-150 text-start cursor-pointer
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
              "
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`
                    w-8 h-8 rounded-xl flex items-center justify-center shrink-0
                    transition-all duration-200 ${item.iconColor}
                  `}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-foreground group-hover/item:text-primary transition-colors truncate">
                    {title}
                  </div>
                  <div className="text-[10px] text-muted-foreground truncate max-w-[190px]">
                    {desc}
                  </div>
                </div>
              </div>

              <div className="text-muted-foreground/50 group-hover/item:text-foreground shrink-0 ms-2 transition-transform duration-200 group-hover/item:scale-110">
                {isArabic ? (
                  <ChevronLeft className="w-3.5 h-3.5" />
                ) : (
                  <ChevronRight className="w-3.5 h-3.5" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
