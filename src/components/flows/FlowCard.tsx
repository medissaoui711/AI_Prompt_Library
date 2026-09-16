// ================================================
// src/components/flows/FlowCard.tsx
// بطاقة المسار الإرشادي في القائمة
// ================================================

import React from 'react';
import type { GuidedFlow } from '../../types/guidedFlow';
import { useLanguage } from '../../context/LanguageContext';
import { Clock, Layers, ArrowRight, ArrowLeft } from 'lucide-react';
import { STAGE_LABELS, AUDIENCE_LABELS } from '../../types/eduMetadata';

interface Props {
  key?: React.Key;
  flow: GuidedFlow;
  onOpen: (flow: GuidedFlow) => void;
}

export function FlowCard({ flow, onOpen }: Props) {
  const { isArabic } = useLanguage();

  const title = isArabic ? flow.titleAr : flow.titleEn;
  const description = isArabic ? flow.descriptionAr : flow.descriptionEn;
  const estimatedTime = isArabic ? flow.estimatedTimeAr : flow.estimatedTimeEn;

  const stageLabel = flow.stage && flow.stage !== 'any' ? STAGE_LABELS[flow.stage] : null;

  return (
    <div
      onClick={() => onOpen(flow)}
      className="group flex flex-col justify-between p-5 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all cursor-pointer h-full"
    >
      <div>
        {/* Top bar */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl p-2 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
              {flow.icon}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                {stageLabel && (
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground">
                    {isArabic ? stageLabel.ar : stageLabel.en}
                  </span>
                )}
                {flow.audience.map((aud) => (
                  <span
                    key={aud}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border"
                  >
                    {isArabic ? AUDIENCE_LABELS[aud]?.ar : AUDIENCE_LABELS[aud]?.en}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Title & Desc */}
        <h3 className="text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-4">
          {description}
        </p>
      </div>

      {/* Footer Meta */}
      <div className="pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground mt-auto">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Layers className="w-3.5 h-3.5" />
            <span>{flow.steps.length} {isArabic ? 'خطوات' : 'steps'}</span>
          </span>
          {estimatedTime && (
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{estimatedTime}</span>
            </span>
          )}
        </div>

        <span className="flex items-center gap-1 font-semibold text-primary group-hover:underline">
          <span>{isArabic ? 'استعراض المسار' : 'View Journey'}</span>
          {isArabic ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
        </span>
      </div>
    </div>
  );
}
