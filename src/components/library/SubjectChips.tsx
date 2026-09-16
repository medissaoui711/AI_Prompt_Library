// ================================================
// src/components/library/SubjectChips.tsx
// اختيار المواد التعليمية (Multi-select Chips)
// ================================================

import React from 'react';
import type { EduSubject } from '../../types/eduMetadata';
import { SUBJECT_LABELS } from '../../types/eduMetadata';
import { useLanguage } from '../../context/LanguageContext';

interface Props {
  selectedSubjects: EduSubject[];
  onToggleSubject: (subject: EduSubject) => void;
  onClearSubjects: () => void;
}

const COMMON_SUBJECTS: EduSubject[] = [
  'arabic',
  'english',
  'math',
  'science',
  'physics',
  'chemistry',
  'biology',
  'history',
  'research',
  'study-skills',
  'general',
];

export function SubjectChips({ selectedSubjects, onToggleSubject, onClearSubjects }: Props) {
  const { isArabic } = useLanguage();

  return (
    <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {isArabic ? 'المادة الدراسية' : 'Subject'}
        </label>
        {selectedSubjects.length > 0 && (
          <button
            type="button"
            onClick={onClearSubjects}
            className="text-xs text-primary hover:underline cursor-pointer"
          >
            {isArabic ? 'إلغاء التحديد' : 'Clear'}
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {COMMON_SUBJECTS.map((subj) => {
          const info = SUBJECT_LABELS[subj];
          if (!info) return null;
          const isSelected = selectedSubjects.includes(subj);

          return (
            <button
              key={subj}
              type="button"
              onClick={() => onToggleSubject(subj)}
              className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                isSelected
                  ? 'bg-primary/15 text-primary border-primary font-semibold ring-1 ring-primary'
                  : 'bg-card text-muted-foreground border-border hover:text-foreground hover:bg-muted/70'
              }`}
            >
              {isArabic ? info.ar : info.en}
            </button>
          );
        })}
      </div>
    </div>
  );
}
