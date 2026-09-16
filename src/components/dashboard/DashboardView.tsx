import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { StatsOverview } from './StatsOverview';
import { QuickActions } from './QuickActions';
import { RecentPrompts } from './RecentPrompts';
import { FeaturedCategories } from './FeaturedCategories';

export function DashboardView() {
  const { t } = useLanguage();
  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Welcome banner */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-1">{t.welcomeBack}</h1>
        <p className="text-muted-foreground">{t.dashboardSubtitle}</p>
      </div>

      <StatsOverview />
      <QuickActions />
      <RecentPrompts />
      <FeaturedCategories />
    </div>
  );
}
