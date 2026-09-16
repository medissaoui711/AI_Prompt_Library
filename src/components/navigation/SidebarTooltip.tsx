import React from 'react';
import { useDirection } from '../../context/DirectionContext';

interface SidebarTooltipProps {
  label: string;
  badge?: string;
  isVisible: boolean;
  children: React.ReactNode;
}

export function SidebarTooltip({ label, badge, isVisible, children }: SidebarTooltipProps) {
  const { dir } = useDirection();
  const isRtl = dir === 'rtl';

  return (
    <div className="relative group/tooltip flex items-center w-full">
      {children}
      {isVisible && (
        <div
          role="tooltip"
          className={`
            pointer-events-none absolute z-50 invisible opacity-0 
            group-hover/tooltip:visible group-hover/tooltip:opacity-100
            transition-all duration-200 ease-out transform
            ${isRtl 
              ? 'end-full me-3 group-hover/tooltip:-translate-x-1' 
              : 'start-full ms-3 group-hover/tooltip:translate-x-1'
            }
            top-1/2 -translate-y-1/2
            px-3 py-1.5 rounded-lg text-xs font-semibold
            bg-slate-900 text-slate-100 dark:bg-slate-800 dark:text-slate-100
            border border-slate-700/80 shadow-xl whitespace-nowrap
            flex items-center gap-1.5
          `}
        >
          <span>{label}</span>
          {badge && (
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-primary/20 text-primary-foreground font-mono">
              {badge}
            </span>
          )}
          {/* Subtle pointer arrow */}
          <div
            className={`
              absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 
              bg-slate-900 dark:bg-slate-800 border-t border-s border-slate-700/80 rotate-45
              ${isRtl ? '-end-1 border-t-0 border-s-0 border-b border-e' : '-start-1'}
            `}
          />
        </div>
      )}
    </div>
  );
}
