// ================================================
// src/components/flows/FlowStepCard.tsx
// بطاقة الخطوة داخل المسار الإرشادي
// ================================================

import React from 'react';
import type { FlowStep } from '../../types/guidedFlow';
import type { CommandPrompt } from '../../types/prompt';
import { useLanguage } from '../../context/LanguageContext';
import { Copy, Play, CheckCircle2, ChevronRight } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

interface Props {
  key?: React.Key;
  step: FlowStep;
  prompt?: CommandPrompt;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onTryInPlayground: (promptId: string) => void;
}

export function FlowStepCard({ step, prompt, isCompleted, onToggleComplete, onTryInPlayground }: Props) {
  const { isArabic } = useLanguage();
  const { success } = useToast();

  const title = isArabic ? step.titleAr : step.titleEn;
  const note = isArabic ? step.noteAr : step.noteEn;

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (prompt?.example) {
      navigator.clipboard.writeText(prompt.example);
      success(isArabic ? 'تم نسخ الأمر بنجاح!' : 'Command copied!');
    }
  };

  return (
    <div
      className={`relative flex items-start gap-4 p-4 rounded-xl border transition-all ${
        isCompleted
          ? 'bg-muted/40 border-muted text-muted-foreground'
          : 'bg-card border-border hover:border-primary/40 shadow-sm'
      }`}
    >
      {/* Step Indicator & Toggle */}
      <button
        type="button"
        onClick={onToggleComplete}
        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors cursor-pointer ${
          isCompleted
            ? 'bg-emerald-500 text-white'
            : 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white'
        }`}
        title={isArabic ? 'تحديد كمكتمل' : 'Toggle completed'}
      >
        {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : step.order}
      </button>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <h4 className={`text-sm font-bold ${isCompleted ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
            {title}
          </h4>
          {step.optional && (
            <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-muted text-muted-foreground border border-border">
              {isArabic ? 'اختياري' : 'Optional'}
            </span>
          )}
        </div>

        {note && (
          <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
            {note}
          </p>
        )}

        {prompt && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded-lg bg-muted/60 border border-border/50 font-mono text-xs">
            <div className="truncate text-foreground font-medium">
              {prompt.example}
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1 px-2 py-1 rounded bg-card hover:bg-accent text-foreground text-xs font-sans font-medium border border-border transition-colors cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{isArabic ? 'نسخ' : 'Copy'}</span>
              </button>
              <button
                type="button"
                onClick={() => onTryInPlayground(prompt.id)}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-sans font-medium transition-colors cursor-pointer"
              >
                <Play className="w-3 h-3" />
                <span>{isArabic ? 'تجربة' : 'Try'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
