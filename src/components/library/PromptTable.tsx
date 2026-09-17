import React from 'react';
import { Star, Copy, Eye, Sparkles } from 'lucide-react';
import { CommandPrompt } from '../../types/prompt';
import { useLanguage } from '../../context/LanguageContext';
import { PROMPT_GROUPS } from '../../data/groups';
import { useToast } from '../../context/ToastContext';
import { usePrompts } from '../../hooks/usePrompts';

interface PromptTableProps {
  prompts: CommandPrompt[];
  onSelect: (id: string) => void;
}

export function PromptTable({ prompts, onSelect }: PromptTableProps) {
  const { t, language, isArabic } = useLanguage();
  const { success, error } = useToast();
  const { toggleFavorite, incrementUsage } = usePrompts();

  const handleCopy = async (e: React.MouseEvent, prompt: CommandPrompt) => {
    e.stopPropagation();
    try {
      const textToCopy = prompt.example || `/${prompt.code}`;
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
        document.execCommand('copy');
        textArea.remove();
      }
      success(t.copied || (isArabic ? 'تم نسخ الأمر بنجاح' : 'Prompt copied'));
      incrementUsage(prompt.id);
    } catch (err) {
      error(t.copyFailed || (isArabic ? 'فشل النسخ' : 'Failed to copy'));
    }
  };

  const handleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    toggleFavorite(id);
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-xs">
      <table className="w-full text-start text-sm border-collapse">
        <thead className="bg-muted/50 text-muted-foreground border-b border-border text-xs uppercase tracking-wider font-semibold">
          <tr>
            <th scope="col" className="px-4 py-3.5 text-start w-[14%]">
              {isArabic ? 'رمز الأمر' : 'Command Code'}
            </th>
            <th scope="col" className="px-4 py-3.5 text-start w-[40%]">
              {isArabic ? 'اسم الأمر والتصنيف' : 'Command & Category'}
            </th>
            <th scope="col" className="px-4 py-3.5 text-start w-[18%] hidden md:table-cell">
              {isArabic ? 'نوع الناتج' : 'Output Type'}
            </th>
            <th scope="col" className="px-4 py-3.5 text-center w-[10%] hidden sm:table-cell">
              {isArabic ? 'المفضلة' : 'Favorite'}
            </th>
            <th scope="col" className="px-4 py-3.5 text-end w-[18%]">
              {isArabic ? 'الإجراءات' : 'Actions'}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/60">
          {prompts.map((prompt) => {
            const groupInfo = PROMPT_GROUPS.find((g) => g.id === prompt.group);
            const title = isArabic ? prompt.titleAr : prompt.titleEn;
            const desc = isArabic ? prompt.descriptionAr : prompt.descriptionEn;

            return (
              <tr
                key={prompt.id}
                tabIndex={0}
                onClick={() => onSelect(prompt.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelect(prompt.id);
                  }
                }}
                className="group hover:bg-muted/30 transition-colors cursor-pointer focus-visible:outline-none focus-visible:bg-muted/40 focus-visible:ring-1 focus-visible:ring-primary"
              >
                {/* 1. Code Badge */}
                <td className="px-4 py-3.5 align-middle font-mono">
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-muted text-primary text-xs font-bold border border-border/80 group-hover:border-primary/50 transition-colors">
                    {prompt.code}
                  </span>
                </td>

                {/* 2. Title & Category */}
                <td className="px-4 py-3.5 align-middle">
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-foreground group-hover:text-primary transition-colors text-sm line-clamp-1">
                        {title}
                      </span>
                      {groupInfo && (
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold ${groupInfo.color}`}>
                          {t[groupInfo.labelKey as keyof typeof t] || groupInfo.id}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {desc}
                    </p>
                  </div>
                </td>

                {/* 3. Output Type */}
                <td className="px-4 py-3.5 align-middle hidden md:table-cell">
                  {prompt.outputBadges && prompt.outputBadges.length > 0 ? (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {prompt.outputBadges[0]}
                    </span>
                  ) : prompt.outputType ? (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-muted text-foreground border border-border/60">
                      {prompt.outputType === 'text' && (isArabic ? 'نص إعلاني' : 'Text')}
                      {prompt.outputType === 'image' && (isArabic ? 'تصميم/صورة' : 'Visual')}
                      {prompt.outputType === 'video' && (isArabic ? 'فيديو' : 'Video')}
                      {prompt.outputType === 'plan' && (isArabic ? 'خطة عمل' : 'Plan')}
                      {prompt.outputType === 'analysis' && (isArabic ? 'تحليل ومراجعة' : 'Audit')}
                      {prompt.outputType === 'mixed' && (isArabic ? 'حزمة شاملة' : 'Suite')}
                    </span>
                  ) : (
                    <span className="text-xs text-muted-foreground">-</span>
                  )}
                </td>

                {/* 4. Favorite Toggle */}
                <td className="px-4 py-3.5 align-middle text-center hidden sm:table-cell">
                  <button
                    type="button"
                    onClick={(e) => handleFavorite(e, prompt.id)}
                    aria-label={prompt.isFavorite ? 'Remove favorite' : 'Add favorite'}
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-amber-500 hover:bg-accent/80 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  >
                    <Star
                      className={`h-4 w-4 ${
                        prompt.isFavorite ? 'fill-amber-500 text-amber-500' : ''
                      }`}
                    />
                  </button>
                </td>

                {/* 5. Actions: Copy & Details */}
                <td className="px-4 py-3.5 align-middle text-end">
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      type="button"
                      onClick={(e) => handleCopy(e, prompt)}
                      className="inline-flex items-center gap-1 h-8 px-2.5 rounded-md text-xs font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                      title={isArabic ? 'نسخ الأمر' : 'Copy'}
                    >
                      <Copy className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">{isArabic ? 'نسخ' : 'Copy'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelect(prompt.id);
                      }}
                      className="inline-flex items-center gap-1 h-8 px-2.5 rounded-md text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary shadow-xs"
                      title={isArabic ? 'فتح التفاصيل' : 'Details'}
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>{isArabic ? 'التفاصيل' : 'Details'}</span>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
