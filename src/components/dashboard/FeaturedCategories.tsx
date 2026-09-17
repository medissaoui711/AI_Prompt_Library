import React from 'react';
import { ArrowLeft, ArrowRight, GraduationCap, Palette, Video, FileText, Megaphone, Code2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useDirection } from '../../context/DirectionContext';
import { useView } from '../../context/ViewContext';
import { usePrompts } from '../../hooks/usePrompts';

export interface FeaturedCategoryItem {
  id: string;
  labelAr: string;
  labelEn: string;
  icon: React.ElementType;
  color: string;
  bgLight: string;
  groupKeys: string[];
}

const FEATURED_SIX: FeaturedCategoryItem[] = [
  {
    id: 'edu',
    labelAr: 'التعليم',
    labelEn: 'Education',
    icon: GraduationCap,
    color: 'text-blue-500',
    bgLight: 'bg-blue-500/10',
    groupKeys: ['edu'],
  },
  {
    id: 'marketing',
    labelAr: 'التسويق',
    labelEn: 'Marketing',
    icon: Megaphone,
    color: 'text-amber-500',
    bgLight: 'bg-amber-500/10',
    groupKeys: ['ads', 'content'],
  },
  {
    id: 'design',
    labelAr: 'التصميم',
    labelEn: 'Design',
    icon: Palette,
    color: 'text-pink-500',
    bgLight: 'bg-pink-500/10',
    groupKeys: ['design'],
  },
  {
    id: 'video',
    labelAr: 'الفيديو',
    labelEn: 'Video',
    icon: Video,
    color: 'text-red-500',
    bgLight: 'bg-red-500/10',
    groupKeys: ['video'],
  },
  {
    id: 'dev',
    labelAr: 'البرمجة',
    labelEn: 'Programming',
    icon: Code2,
    color: 'text-emerald-500',
    bgLight: 'bg-emerald-500/10',
    groupKeys: ['dev'],
  },
  {
    id: 'cv',
    labelAr: 'السيرة الذاتية',
    labelEn: 'CV & Career',
    icon: FileText,
    color: 'text-purple-500',
    bgLight: 'bg-purple-500/10',
    groupKeys: ['cv'],
  },
];

export function FeaturedCategories() {
  const { t, isArabic } = useLanguage();
  const { dir } = useDirection();
  const { setView } = useView();
  const { prompts } = usePrompts();

  const handleSelectCategory = (cat: FeaturedCategoryItem) => {
    window.location.hash = `#library?group=${cat.id}`;
    setView('library');
  };

  const handleViewAll = () => {
    window.location.hash = '#library';
    setView('library');
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-3.5">
        <h2 className="text-base sm:text-lg font-bold text-foreground">
          {t.featuredCategories || (isArabic ? 'الفئات المميزة' : 'Featured Categories')}
        </h2>
        <button
          type="button"
          onClick={handleViewAll}
          className="group flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg px-2 py-1 cursor-pointer"
        >
          <span>{t.viewAll || (isArabic ? 'عرض الكل' : 'View All')}</span>
          {dir === 'rtl' ? (
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          ) : (
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          )}
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {FEATURED_SIX.map((cat) => {
          const Icon = cat.icon;
          const count = prompts.filter((p) => cat.groupKeys.includes(p.group)).length;
          const label = isArabic ? cat.labelAr : cat.labelEn;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleSelectCategory(cat)}
              className="flex flex-col items-center sm:items-start text-center sm:text-start gap-2.5 rounded-xl border border-border bg-card p-3.5 sm:p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group cursor-pointer"
            >
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${cat.bgLight} ${cat.color} transition-transform duration-200 group-hover:scale-105`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex flex-col w-full min-w-0">
                <span className="text-xs sm:text-sm font-bold text-foreground truncate group-hover:text-primary transition-colors">
                  {label}
                </span>
                <span className="text-[11px] text-muted-foreground truncate mt-0.5">
                  {count} {t.promptsCount || (isArabic ? 'أمر' : 'prompts')}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
