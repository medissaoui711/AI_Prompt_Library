import React from 'react';
import { Workflow } from '../../types/workflow';
import { useLanguage } from '../../context/LanguageContext';
import { Clock, Layers, Sparkles, ArrowRight, ArrowLeft, GraduationCap, Palette, Video, Briefcase, LayoutDashboard } from 'lucide-react';

interface WorkflowCardProps {
  key?: React.Key;
  workflow: Workflow;
  onSelect: (workflow: Workflow) => void;
}

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Palette,
  Video,
  Briefcase,
  LayoutDashboard,
  Sparkles
};

export function WorkflowCard({ workflow, onSelect }: WorkflowCardProps) {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';
  const Icon = iconMap[workflow.icon] || Sparkles;

  const difficultyColors = {
    beginner: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    intermediate: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    advanced: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20'
  };

  const difficultyLabel = {
    beginner: t.levelBeginner,
    intermediate: t.levelIntermediate,
    advanced: t.levelAdvanced
  }[workflow.difficulty];

  return (
    <div className="flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/40 hover:shadow-md group">
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
              <Icon className="h-5 w-5" />
            </div>
            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-secondary text-secondary-foreground border border-border">
              {workflow.badgeAr && isArabic ? workflow.badgeAr : workflow.badgeEn}
            </span>
          </div>

          <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium border ${difficultyColors[workflow.difficulty]}`}>
            {difficultyLabel}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {isArabic ? workflow.titleAr : workflow.titleEn}
        </h3>

        {/* Description */}
        <p className="text-xs text-muted-foreground mt-2 line-clamp-3 leading-relaxed">
          {isArabic ? workflow.descriptionAr : workflow.descriptionEn}
        </p>

        {/* Steps Preview List */}
        <div className="mt-4 pt-3 border-t border-border/70 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground/90">
            <Layers className="h-3.5 w-3.5 text-primary" />
            <span>{isArabic ? `مراحل المسار (${workflow.steps.length}):` : `Pipeline Stages (${workflow.steps.length}):`}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {workflow.steps.map((s, idx) => (
              <span
                key={s.id}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] bg-muted text-muted-foreground border border-border/60"
              >
                <span className="h-3.5 w-3.5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[9px] font-bold">
                  {idx + 1}
                </span>
                <span className="truncate max-w-[140px]">{isArabic ? s.titleAr : s.titleEn}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 pt-3 border-t border-border flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          <span>{workflow.estimatedMinutes} {isArabic ? 'دقيقة' : 'min'}</span>
        </div>

        <button
          onClick={() => onSelect(workflow)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors shadow-sm cursor-pointer"
        >
          <span>{t.startWorkflow}</span>
          {isArabic ? <ArrowLeft className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
        </button>
      </div>
    </div>
  );
}
