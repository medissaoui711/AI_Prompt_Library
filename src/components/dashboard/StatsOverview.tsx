import React from 'react';
import { FileText, Star, FolderOpen, FlaskConical, Route } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PROMPT_GROUPS } from '../../data/groups';
import { usePrompts } from '../../hooks/usePrompts';
import { GUIDED_FLOWS } from '../../data/flows/guidedFlows';

export function StatsOverview() {
  const { t } = useLanguage();
  const { prompts } = usePrompts();

  const totalPrompts = prompts.length;
  const favorites = prompts.filter((p) => p.isFavorite).length;
  const recentTests = prompts.reduce((sum, p) => sum + (p.usageCount || 0), 0);

  const statCards = [
    { 
      label: t.totalPrompts, 
      value: totalPrompts, 
      icon: FileText, 
      color: 'text-blue-500', 
      bgColor: 'bg-blue-500/10' 
    },
    { 
      label: t.flows, 
      value: GUIDED_FLOWS.length, 
      icon: Route, 
      color: 'text-indigo-500', 
      bgColor: 'bg-indigo-500/10' 
    },
    { 
      label: t.favorites, 
      value: favorites, 
      icon: Star, 
      color: 'text-yellow-500', 
      bgColor: 'bg-yellow-500/10' 
    },
    { 
      label: t.categories, 
      value: PROMPT_GROUPS.length, 
      icon: FolderOpen, 
      color: 'text-purple-500', 
      bgColor: 'bg-purple-500/10' 
    },
    { 
      label: t.recentTests, 
      value: recentTests, 
      icon: FlaskConical, 
      color: 'text-green-500', 
      bgColor: 'bg-green-500/10' 
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
      {statCards.map((stat, idx) => (
        <div 
          key={idx} 
          className="flex items-center gap-3 sm:gap-4 rounded-xl border border-border bg-card p-4 sm:p-5 shadow-xs transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className={`flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl ${stat.bgColor} ${stat.color}`}>
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
