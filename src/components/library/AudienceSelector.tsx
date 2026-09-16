// ================================================
// src/components/library/AudienceSelector.tsx
// اختيار الدور / الجمهور (معلم، طالب، ولي أمر، أستاذ جامعي)
// ================================================

import React from 'react';
import type { EduAudience } from '../../types/eduMetadata';
import { AUDIENCE_LABELS } from '../../types/eduMetadata';
import { useLanguage } from '../../context/LanguageContext';

interface Props {
  selectedAudience: EduAudience | null;
  onSelectAudience: (aud: EduAudience | null) => void;
  availableAudiences: EduAudience[];
}

export function AudienceSelector({ selectedAudience, onSelectAudience, availableAudiences }: Props) {
  const { isArabic } = useLanguage();

  if (availableAudiences.length === 0) return null;

  return (
    <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {isArabic ? 'من أنت؟ (الدور)' : 'Who are you? (Role)'}
        </label>
      </div>

      <div className="flex flex-wrap gap-2">
        {availableAudiences.map((aud) => {
          const info = AUDIENCE_LABELS[aud];
          const isSelected = selectedAudience === aud;

          return (
            <button
              key={aud}
              type="button"
              onClick={() => onSelectAudience(isSelected ? null : aud)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-sm font-medium transition-all cursor-pointer ${
                isSelected
                  ? 'bg-primary text-primary-foreground border-primary shadow-sm ring-2 ring-primary/20'
                  : 'bg-card text-foreground border-border hover:bg-muted/80 hover:border-primary/40'
              }`}
            >
              <span className="text-base shrink-0">{info.icon}</span>
              <span>{isArabic ? info.ar : info.en}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
