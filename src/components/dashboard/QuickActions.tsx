import React from 'react';
import { Compass, PenTool, Library } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useView } from '../../context/ViewContext';

export function QuickActions() {
  const { t, isArabic } = useLanguage();
  const { setView } = useView();

  const actions = [
    {
      id: 'explore',
      label: isArabic ? 'استكشف الأوامر' : 'Explore Prompts',
      description: isArabic ? 'تصفح كافة الأوامر والتصنيفات الجاهزة' : 'Browse full prompt repository and groups',
      icon: Library,
      view: 'library' as const,
      hash: '#library',
      highlight: 'from-blue-600 to-indigo-600',
    },
    {
      id: 'build',
      label: isArabic ? 'ركّب أمرًا' : 'Build a Prompt',
      description: isArabic ? 'صمم أمرك الاحترافي المخصص بسهولة' : 'Assemble tailored prompts with variables',
      icon: PenTool,
      view: 'generator' as const,
      hash: '',
      highlight: 'from-purple-600 to-indigo-600',
    },
    {
      id: 'learn',
      label: isArabic ? 'تابع التعلم' : 'Continue Learning',
      description: isArabic ? 'مسارات تدريبية وخطوات هندسة الأوامر' : 'Guided prompt engineering masterclasses',
      icon: Compass,
      view: 'flows' as const,
      hash: '#flows',
      highlight: 'from-emerald-600 to-teal-600',
    },
  ];

  const handleAction = (action: typeof actions[0]) => {
    if (action.hash) {
      window.location.hash = action.hash;
    }
    setView(action.view);
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-3.5">
        <h2 className="text-base sm:text-lg font-bold text-foreground">
          {t.quickActions || (isArabic ? 'الإجراءات السريعة' : 'Quick Actions')}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {actions.map((action) => (
          <button
            key={action.id}
            type="button"
            onClick={() => handleAction(action)}
            className="group relative flex items-center gap-4 rounded-xl border border-border bg-card p-4 sm:p-5 text-start transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
          >
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${action.highlight} text-white shadow-sm transition-transform duration-200 group-hover:scale-105`}>
              <action.icon className="h-6 w-6" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors truncate">
                {action.label}
              </span>
              <span className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                {action.description}
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
