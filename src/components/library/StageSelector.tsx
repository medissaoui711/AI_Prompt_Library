// ================================================
// src/components/library/StageSelector.tsx
// اختيار المرحلة التعليمية (4 مستويات)
// ================================================

import React from 'react';
import type { EduStage } from '../../types/eduMetadata';
import { STAGE_LABELS } from '../../types/eduMetadata';
import { useLanguage } from '../../context/LanguageContext';

interface Props {
  selectedStage: EduStage | null;
  onSelectStage: (stage: EduStage | null) => void;
}

const STAGES: EduStage[] = [
  'early_childhood',
  'primary',
  'secondary',
  'university'
];

export function StageSelector({ selectedStage, onSelectStage }: Props) {
  const { isArabic } = useLanguage();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {isArabic ? 'المرحلة التعليمية' : 'Educational Stage'}
        </label>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {STAGES.map((stage) => {
          const info = STAGE_LABELS[stage];
          const isSelected = selectedStage === stage;

          return (
            <button
              key={stage}
              type="button"
              onClick={() => onSelectStage(isSelected ? null : stage)}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-medium transition-all text-start cursor-pointer ${
                isSelected
                  ? 'bg-primary text-primary-foreground border-primary shadow-sm ring-2 ring-primary/20'
                  : 'bg-card text-foreground border-border hover:bg-muted/80 hover:border-primary/40'
              }`}
            >
              <span className="text-base shrink-0">{info.icon}</span>
              <span className="truncate leading-tight">
                {isArabic ? info.ar : info.en}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
