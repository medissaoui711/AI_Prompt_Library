import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useDirection } from '../../context/DirectionContext';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigation } from './NavigationContext';

interface SidebarCollapseButtonProps {
  className?: string;
  variant?: 'floating-edge' | 'inline';
}

export function SidebarCollapseButton({ className = '', variant = 'floating-edge' }: SidebarCollapseButtonProps) {
  const { isCollapsed, toggleCollapsed } = useNavigation();
  const { dir } = useDirection();
  const { t } = useLanguage();
  const isRtl = dir === 'rtl';

  const label = isCollapsed ? t.expandSidebar : t.collapseSidebar;

  // Compute chevron direction based on state & RTL/LTR
  const renderIcon = () => {
    if (isRtl) {
      // In RTL, sidebar is on the right.
      // Expanded: Arrow points right to collapse towards right wall.
      // Collapsed: Arrow points left to expand into content area.
      return isCollapsed ? (
        <ChevronLeft className="w-3.5 h-3.5 transition-transform duration-200" />
      ) : (
        <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200" />
      );
    } else {
      // In LTR, sidebar is on the left.
      // Expanded: Arrow points left to collapse towards left wall.
      // Collapsed: Arrow points right to expand into content area.
      return isCollapsed ? (
        <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200" />
      ) : (
        <ChevronLeft className="w-3.5 h-3.5 transition-transform duration-200" />
      );
    }
  };

  if (variant === 'inline') {
    return (
      <button
        type="button"
        onClick={toggleCollapsed}
        aria-label={label}
        aria-expanded={!isCollapsed}
        title={label}
        className={`
          flex items-center justify-center w-8 h-8 rounded-lg 
          text-muted-foreground hover:text-foreground hover:bg-accent/80 
          transition-colors cursor-pointer focus-visible:outline-none 
          focus-visible:ring-2 focus-visible:ring-ring ${className}
        `}
      >
        {renderIcon()}
      </button>
    );
  }

  // Floating edge circular collapse button positioned on the sidebar border
  return (
    <button
      type="button"
      onClick={toggleCollapsed}
      aria-label={label}
      aria-expanded={!isCollapsed}
      title={label}
      className={`
        group absolute top-5 z-40
        ${isRtl ? '-start-3.5' : '-end-3.5'}
        w-7 h-7 rounded-full 
        bg-card hover:bg-accent text-muted-foreground hover:text-foreground
        border border-border shadow-md
        flex items-center justify-center
        transition-all duration-200 ease-out hover:scale-105 active:scale-95
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
        cursor-pointer ${className}
      `}
    >
      {renderIcon()}
    </button>
  );
}
