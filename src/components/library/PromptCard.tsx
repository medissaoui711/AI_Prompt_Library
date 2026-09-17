import React from 'react';
import { Copy, Star, Eye } from 'lucide-react';
import { CommandPrompt } from '../../types/prompt';
import { useLanguage } from '../../context/LanguageContext';
import { PROMPT_GROUPS } from '../../data/groups';
import { useToast } from '../../context/ToastContext';
import { usePrompts } from '../../hooks/usePrompts';

interface Props {
  key?: React.Key;
  prompt: CommandPrompt;
  onSelect: (id: string) => void;
  onTry?: (id: string) => void;
  variant?: 'default' | 'compact';
}

export function PromptCard({ prompt, onSelect }: Props) {
  const { t, language, isArabic } = useLanguage();
  const { success, error } = useToast();
  const { toggleFavorite, incrementUsage } = usePrompts();

  const groupInfo = PROMPT_GROUPS.find((g) => g.id === prompt.group);
  const title = isArabic ? prompt.titleAr : prompt.titleEn;

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const textToCopy = prompt.example || '';
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand('copy');
          textArea.remove();
        } catch (err) {
          textArea.remove();
          throw new Error('Copy failed');
        }
      }
      success(t.copied || (isArabic ? 'تم نسخ الأمر بنجاح' : 'Prompt copied'));
      incrementUsage(prompt.id);
    } catch (err) {
      error(t.copyFailed || (isArabic ? 'فشل النسخ' : 'Failed to copy'));
    }
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(prompt.id);
  };

  const handleDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(prompt.id);
  };

  return (
    <div
      onClick={() => onSelect(prompt.id)}
      className="group flex flex-col justify-between rounded-xl border border-border bg-card p-4 sm:p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md cursor-pointer h-full"
    >
      {/* Top Row: Category + Command Code + Favorite Toggle */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap min-w-0">
            {/* Category / Group Badge */}
            {groupInfo && (
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-semibold ${groupInfo.color}`}>
                {t[groupInfo.labelKey as keyof typeof t] || groupInfo.id}
              </span>
            )}

            {/* Command Code Badge */}
            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-muted text-foreground font-mono text-[11px] font-bold border border-border/60">
              {prompt.code}
            </span>
          </div>

          {/* Favorite Toggle Button */}
          <button
            type="button"
            onClick={handleFavorite}
            aria-label={isArabic ? 'إضافة إلى المفضلة' : 'Favorite'}
            className="text-muted-foreground hover:text-amber-500 transition-colors p-1.5 -m-1 rounded-lg hover:bg-accent/80 shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Star className={`h-4.5 w-4.5 transition-transform group-hover:scale-105 ${prompt.isFavorite ? 'fill-amber-500 text-amber-500' : ''}`} />
          </button>
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-base font-bold text-foreground line-clamp-2 mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>

      {/* Action Footer: Copy Button + Details Button */}
      <div className="flex items-center gap-2 pt-3 border-t border-border/70 mt-auto">
        {/* Copy Button */}
        <button
          type="button"
          onClick={handleCopy}
          className="flex-1 flex items-center justify-center gap-1.5 h-9 px-3 rounded-lg text-xs font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors cursor-pointer"
        >
          <Copy className="h-3.5 w-3.5" />
          <span>{isArabic ? 'نسخ' : 'Copy'}</span>
        </button>

        {/* Details Button */}
        <button
          type="button"
          onClick={handleDetails}
          className="flex-1 flex items-center justify-center gap-1.5 h-9 px-3 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors cursor-pointer"
        >
          <Eye className="h-3.5 w-3.5" />
          <span>{isArabic ? 'التفاصيل' : 'Details'}</span>
        </button>
      </div>
    </div>
  );
}
