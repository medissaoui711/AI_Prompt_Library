import React from 'react';
import { Copy, Star, Eye, Play } from 'lucide-react';
import { CommandPrompt } from '../../types/prompt';
import { useLanguage } from '../../context/LanguageContext';
import { PROMPT_GROUPS } from '../../data/groups';
import { useToast } from '../../context/ToastContext';
import { usePrompts } from '../../hooks/usePrompts';
import { STAGE_LABELS, AUDIENCE_LABELS } from '../../types/eduMetadata';
import { ExampleBlock } from './ExampleBlock';

interface Props {
  key?: React.Key;
  prompt: CommandPrompt;
  onSelect: (id: string) => void;
  onTry?: (id: string) => void;
  variant?: 'default' | 'compact';
}

export function PromptCard({ prompt, onSelect, onTry, variant = 'default' }: Props) {
  const { t, language } = useLanguage();
  const { success, error } = useToast();
  const { toggleFavorite, incrementUsage } = usePrompts();
  const isArabic = language === 'ar';

  const groupInfo = PROMPT_GROUPS.find((g) => g.id === prompt.group);
  const title = isArabic ? prompt.titleAr : prompt.titleEn;
  const description = isArabic ? prompt.descriptionAr : prompt.descriptionEn;

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(prompt.example);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = prompt.example;
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
      success(t.copied);
      incrementUsage(prompt.id);
    } catch (err) {
      error(t.copyFailed);
    }
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(prompt.id);
  };

  const stageLabel = prompt.education?.stage ? STAGE_LABELS[prompt.education.stage] : null;

  return (
    <div
      onClick={() => onSelect(prompt.id)}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer h-full"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex flex-wrap items-center gap-2">
          {groupInfo && (
            <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-semibold ${groupInfo.color}`}>
              {t[groupInfo.labelKey as keyof typeof t]}
            </span>
          )}
          {stageLabel && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium border border-primary/20">
              <span>{stageLabel.icon}</span>
              <span>{isArabic ? stageLabel.ar : stageLabel.en}</span>
            </span>
          )}
          {prompt.outputBadges && prompt.outputBadges.length > 0 ? (
            prompt.outputBadges.map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
              >
                [{badge}]
              </span>
            ))
          ) : prompt.outputType ? (
            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              {prompt.outputType === 'text' && (isArabic ? '📄 [نص إعلاني]' : '📄 [Ad Copy]')}
              {prompt.outputType === 'image' && (isArabic ? '🎨 [تصميم/صورة]' : '🎨 [Visual/Image]')}
              {prompt.outputType === 'video' && (isArabic ? '🎬 [فيديو إعلاني]' : '🎬 [Video Script]')}
              {prompt.outputType === 'plan' && (isArabic ? '📐 [خطة/استراتيجية]' : '📐 [Strategy/Plan]')}
              {prompt.outputType === 'analysis' && (isArabic ? '📊 [تحليل ومراجعة]' : '📊 [Analysis/Audit]')}
              {prompt.outputType === 'mixed' && (isArabic ? '⚡ [حزمة شاملة]' : '⚡ [Full Suite]')}
            </span>
          ) : null}
          <span className="inline-flex items-center px-2 py-1 rounded-md bg-muted text-foreground font-mono text-xs font-bold border border-border/50">
            {prompt.code}
          </span>
        </div>
        <button
          onClick={handleFavorite}
          className="text-muted-foreground hover:text-yellow-500 transition-colors focus-visible:outline-none p-1 -m-1 rounded-full hover:bg-accent"
          aria-label="Toggle favorite"
        >
          <Star className={`h-5 w-5 ${prompt.isFavorite ? 'fill-yellow-500 text-yellow-500' : ''}`} />
        </button>
      </div>

      {/* Title & Desc */}
      <div className="mb-2 flex-1">
        <h3 className="text-lg font-bold text-foreground line-clamp-2 mb-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        {variant === 'default' && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}
      </div>

      {/* Live Example with syntax highlighting & Live/Template mode toggle */}
      {prompt.example && variant === 'default' && (
        <ExampleBlock
          prompt={prompt}
          example={prompt.example}
          maxLines={4}
          onCopy={(text) => {
            navigator.clipboard.writeText(text);
            success(t.copied);
            incrementUsage(prompt.id);
          }}
          onTry={() => {
            if (onTry) {
              onTry(prompt.id);
            } else {
              window.location.hash = `#playground?cmd=${prompt.id}&fromExample=1`;
            }
          }}
          onExpand={() => onSelect(prompt.id)}
        />
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {prompt.keywords.slice(0, 3).map((tag, idx) => (
          <span key={idx} className="text-xs text-muted-foreground bg-accent px-1.5 py-0.5 rounded">
            #{tag}
          </span>
        ))}
        {prompt.keywords.length > 3 && (
          <span className="text-xs text-muted-foreground bg-accent px-1.5 py-0.5 rounded">
            +{prompt.keywords.length - 3}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
        <span className="text-xs font-medium text-muted-foreground">
          {prompt.usageCount || 0} {t.usageCount.replace('Uses', '').trim()}
        </span>
        <div className="flex items-center gap-2">
          {onTry ? (
            <button
              onClick={(e) => { e.stopPropagation(); onTry(prompt.id); }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors focus-visible:outline-none focus-visible:ring-2"
            >
              <Play className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{t.tryInPlayground}</span>
            </button>
          ) : (
            <button
              onClick={(e) => { 
                e.stopPropagation(); 
                window.location.hash = `#playground?cmd=${prompt.id}`; 
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors focus-visible:outline-none focus-visible:ring-2"
            >
              <Play className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{t.tryInPlayground}</span>
            </button>
          )}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 transition-colors"
          >
            <Copy className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{t.copyExample}</span>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onSelect(prompt.id); }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-primary text-primary-foreground hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 transition-colors"
          >
            <Eye className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{t.viewDetails}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
