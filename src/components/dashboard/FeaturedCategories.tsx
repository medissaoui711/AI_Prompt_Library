import React from 'react';
import { ArrowLeft, ArrowRight, GraduationCap, Palette, Video, FileText, Megaphone, Code2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useDirection } from '../../context/DirectionContext';
import { useView } from '../../context/ViewContext';
import { PROMPT_GROUPS } from '../../data/groups';
import { usePrompts } from '../../hooks/usePrompts';

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Megaphone,
  Palette,
  Video,
  FileText,
  Code2,
};

export function FeaturedCategories() {
  const { t } = useLanguage();
  const { dir } = useDirection();
  const { setView } = useView();
  const { prompts } = usePrompts();

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-foreground">{t.featuredCategories}</h2>
        <button
          onClick={() => setView('library')}
          className="group flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1"
        >
          {t.viewAll}
          {dir === 'rtl' ? (
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          ) : (
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          )}
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 sm:gap-4">
        {PROMPT_GROUPS.map((group) => {
          const Icon = iconMap[group.icon];
          const count = prompts.filter((p) => p.group === group.id).length;
          return (
            <button
              key={group.id}
              onClick={() => {
                window.location.hash = `#library?group=${group.id}`;
                setView('library');
              }}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-start transition-all hover:border-primary/50 hover:bg-accent hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group cursor-pointer"
            >
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${group.color}`}>
                {Icon && <Icon className="h-5 w-5" />}
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                  {t[group.labelKey as keyof typeof t]}
                </span>
                <span className="text-xs text-muted-foreground truncate">
                  {count} {t.promptsCount}
                </span>
              </div>
            </button>
          );
        })}

        {/* Guided Flows Card */}
        <button
          onClick={() => {
            setView('flows');
          }}
          className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-start transition-all hover:border-primary/50 hover:bg-accent hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group cursor-pointer"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500">
            <span className="text-lg">🧭</span>
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
              {t.flows}
            </span>
            <span className="text-xs text-muted-foreground truncate">
              6 {t.workflowsCount}
            </span>
          </div>
        </button>
      </div>
    </section>
  );
}
