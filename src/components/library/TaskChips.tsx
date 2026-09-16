// ================================================
// src/components/library/TaskChips.tsx
// اختيار نوع المهمة التعليمية (Multi-select Chips)
// ================================================

import React from 'react';
import type { EduTaskType } from '../../types/eduMetadata';
import { TASK_LABELS } from '../../types/eduMetadata';
import { useLanguage } from '../../context/LanguageContext';

interface Props {
  selectedTasks: EduTaskType[];
  onToggleTask: (task: EduTaskType) => void;
  onClearTasks: () => void;
}

const COMMON_TASKS: EduTaskType[] = [
  'lesson-plan',
  'explain',
  'practice',
  'quiz',
  'review',
  'solve',
  'project',
  'assessment',
  'communication',
  'research',
  'activity',
  'homework',
  'exam-prep',
  'critical-thinking',
];

export function TaskChips({ selectedTasks, onToggleTask, onClearTasks }: Props) {
  const { isArabic } = useLanguage();

  return (
    <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {isArabic ? 'نوع المهمة التعليمية' : 'Task Type'}
        </label>
        {selectedTasks.length > 0 && (
          <button
            type="button"
            onClick={onClearTasks}
            className="text-xs text-primary hover:underline cursor-pointer"
          >
            {isArabic ? 'إلغاء التحديد' : 'Clear'}
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {COMMON_TASKS.map((task) => {
          const info = TASK_LABELS[task];
          if (!info) return null;
          const isSelected = selectedTasks.includes(task);

          return (
            <button
              key={task}
              type="button"
              onClick={() => onToggleTask(task)}
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
