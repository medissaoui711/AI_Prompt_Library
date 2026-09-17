import React from 'react';
import { FileText, Star, Layers, GraduationCap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { usePrompts } from '../../hooks/usePrompts';
import { GUIDED_FLOWS } from '../../data/flows/guidedFlows';
import { SIDEBAR_GROUPS } from '../navigation/SidebarNav';

export function StatsOverview() {
  const { t, isArabic } = useLanguage();
  const { prompts } = usePrompts();

  const totalPrompts = prompts.length;
  const favorites = prompts.filter((p) => p.isFavorite).length;
  const totalGroups = SIDEBAR_GROUPS.length;
  const totalFlows = GUIDED_FLOWS.length;

  const statCards = [
    { 
      label: t.totalPrompts || (isArabic ? 'إجمالي الأوامر' : 'Total Prompts'), 
      value: totalPrompts, 
      icon: FileText, 
      color: 'text-blue-500', 
      bgColor: 'bg-blue-500/10' 
    },
    { 
      label: isArabic ? 'المفضلة' : 'Favorites', 
      value: favorites, 
      icon: Star, 
      color: 'text-amber-500', 
      bgColor: 'bg-amber-500/10' 
    },
    { 
      label: isArabic ? 'المجموعات' : 'Groups', 
      value: totalGroups, 
      icon: Layers, 
      color: 'text-purple-500', 
      bgColor: 'bg-purple-500/10' 
    },
    { 
      label: isArabic ? 'الأكاديمية' : 'Academy', 
      value: totalFlows, 
      icon: GraduationCap, 
      color: 'text-emerald-500', 
      bgColor: 'bg-emerald-500/10' 
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {statCards.map((stat, idx) => (
        <div 
          key={idx} 
          className="flex items-center gap-3 sm:gap-4 rounded-xl border border-border bg-card p-4 sm:p-5 shadow-xs transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className={`flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl ${stat.bgColor} ${stat.color}`}>
            <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-2xl sm:text-3xl font-bold text-foreground leading-none mb-1 truncate">
              {new Intl.NumberFormat('en-US').format(stat.value)}
            </span>
            <span className="text-xs sm:text-sm font-medium text-muted-foreground truncate">
              {stat.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
