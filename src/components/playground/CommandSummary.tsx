import React from 'react';
import { Star } from 'lucide-react';
import { CommandPrompt } from '../../types/prompt';
import { useLanguage } from '../../context/LanguageContext';
import { PROMPT_GROUPS } from '../../data/groups';

interface Props {
  command: CommandPrompt;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onViewDetails: () => void;
}

export function CommandSummary({ command, isFavorite, onToggleFavorite, onViewDetails }: Props) {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';
  const group = PROMPT_GROUPS.find(g => g.id === command.group);

  return (
    <div className="flex flex-col gap-3 p-4 bg-card border border-border rounded-xl">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          {group && (
            <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${group.color}`}>
              {t[group.labelKey as keyof typeof t]}
            </span>
          )}
          <span className="text-xs font-mono bg-muted text-foreground px-2 py-0.5 rounded border border-border/50">
            {command.code}
          </span>
        </div>
        <button
          onClick={onToggleFavorite}
          className={`p-1.5 rounded-full hover:bg-accent transition-colors ${
            isFavorite ? 'text-yellow-500' : 'text-muted-foreground'
          }`}
        >
          <Star className="h-4 w-4" fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      
      <div>
        <h2 className="text-lg font-bold text-foreground mb-1">
          {isArabic ? command.titleAr : command.titleEn}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {isArabic ? command.descriptionAr : command.descriptionEn}
        </p>
      </div>

      <div className="flex justify-end mt-2">
        <button 
          onClick={onViewDetails}
          className="text-xs font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
        >
          {t.viewDetails} &rarr;
        </button>
      </div>
    </div>
  );
}
