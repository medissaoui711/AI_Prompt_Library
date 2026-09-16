// ================================================
// src/components/flows/FlowViewerModal.tsx
// نافذة عرض ومتابعة المسار الإرشادي بالكامل
// ================================================

import React, { useState } from 'react';
import type { GuidedFlow } from '../../types/guidedFlow';
import { useLanguage } from '../../context/LanguageContext';
import { usePrompts } from '../../hooks/usePrompts';
import { FlowStepCard } from './FlowStepCard';
import { X, CheckCircle2, RotateCcw, Share2, Sparkles } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

interface Props {
  flow: GuidedFlow | null;
  onClose: () => void;
  onTryInPlayground: (promptId: string) => void;
}

export function FlowViewerModal({ flow, onClose, onTryInPlayground }: Props) {
  const { isArabic } = useLanguage();
  const { prompts } = usePrompts();
  const { success } = useToast();

  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  if (!flow) return null;

  const title = isArabic ? flow.titleAr : flow.titleEn;
  const description = isArabic ? flow.descriptionAr : flow.descriptionEn;

  const toggleStep = (order: number) => {
    setCompletedSteps((prev) =>
      prev.includes(order) ? prev.filter((o) => o !== order) : [...prev, order]
    );
  };

  const progressPercent = Math.round(
    (completedSteps.length / flow.steps.length) * 100
  );

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      success(isArabic ? 'تم نسخ رابط المسار بنجاح!' : 'Flow link copied!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 border-b border-border flex items-start justify-between gap-3 bg-muted/30">
          <div className="flex items-start gap-3">
            <span className="text-3xl p-2.5 rounded-2xl bg-primary/10 border border-primary/20 shrink-0">
              {flow.icon}
            </span>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                  {isArabic ? 'مسار تعليمي متكامل' : 'Guided Flow'}
                </span>
                {flow.estimatedTimeAr && (
                  <span className="text-[11px] text-muted-foreground">
                    ⏱ {isArabic ? flow.estimatedTimeAr : flow.estimatedTimeEn}
                  </span>
                )}
              </div>
              <h2 className="text-lg font-bold text-foreground">{title}</h2>
              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-5 py-3 border-b border-border bg-card flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-semibold text-foreground">
                {isArabic ? 'نسبة الإنجاز في المسار' : 'Journey Progress'}
              </span>
              <span className="font-mono font-bold text-primary">
                {completedSteps.length} / {flow.steps.length} ({progressPercent}%)
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            {completedSteps.length > 0 && (
              <button
                type="button"
                onClick={() => setCompletedSteps([])}
                className="p-2 rounded-lg text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                title={isArabic ? 'إعادة ضبط' : 'Reset progress'}
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={handleShare}
              className="p-2 rounded-lg text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
              title={isArabic ? 'مشاركة' : 'Share'}
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Steps List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {flow.steps.map((step) => {
            const prompt = prompts.find(
              (p) => p.id === step.commandId || p.code.replace(/^\//, '').trim() === step.commandId
            );
            const isCompleted = completedSteps.includes(step.order);

            return (
              <FlowStepCard
                key={step.order}
                step={step}
                prompt={prompt}
                isCompleted={isCompleted}
                onToggleComplete={() => toggleStep(step.order)}
                onTryInPlayground={onTryInPlayground}
              />
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border bg-muted/20 flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>
              {isArabic
                ? 'يمكنك تجربة كل خطوة مباشرة في مختبر الأوامر'
                : 'You can test any step directly in the command playground'}
            </span>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
          >
            {isArabic ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
