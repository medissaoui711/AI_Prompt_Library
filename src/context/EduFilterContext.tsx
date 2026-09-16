// ================================================
// src/context/EduFilterContext.tsx
// إدارة حالة الفلترة التعليمية متعددة المستويات
// ================================================

import React, { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';
import type { EduStage, EduAudience, EduSubject, EduTaskType } from '../types/eduMetadata';

export interface EduFilterState {
  stage: EduStage | null;
  audience: EduAudience | null;
  subjects: EduSubject[];
  tasks: EduTaskType[];
}

export interface EduFilterContextValue {
  filter: EduFilterState;
  setStage: (s: EduStage | null) => void;
  setAudience: (a: EduAudience | null) => void;
  toggleSubject: (s: EduSubject) => void;
  toggleTask: (t: EduTaskType) => void;
  clearAll: () => void;
  clearSubjects: () => void;
  clearTasks: () => void;
  hasActiveFilter: boolean;
  availableAudiences: EduAudience[];
}

const EMPTY: EduFilterState = {
  stage: null,
  audience: null,
  subjects: [],
  tasks: [],
};

const EMPTY_AUDIENCES: EduAudience[] = [];

// خريطة: المرحلة → الأدوار المتاحة
const STAGE_TO_AUDIENCES: Record<EduStage, EduAudience[]> = {
  early_childhood: ['teacher', 'parent'],
  primary: ['teacher', 'student', 'parent'],
  secondary: ['teacher', 'student', 'parent'],
  university: ['lecturer', 'student'],
};

const EduFilterContext = createContext<EduFilterContextValue | null>(null);

export function EduFilterProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState<EduFilterState>(EMPTY);

  const setStage = useCallback((s: EduStage | null) => {
    setFilter(prev => ({
      ...prev,
      stage: s,
      audience: null, // reset audience على تغيير المرحلة
      subjects: [],
      tasks: [],
    }));
  }, []);

  const setAudience = useCallback((a: EduAudience | null) => {
    setFilter(prev => ({ ...prev, audience: a, subjects: [], tasks: [] }));
  }, []);

  const toggleSubject = useCallback((s: EduSubject) => {
    setFilter(prev => ({
      ...prev,
      subjects: prev.subjects.includes(s)
        ? prev.subjects.filter(x => x !== s)
        : [...prev.subjects, s],
    }));
  }, []);

  const toggleTask = useCallback((t: EduTaskType) => {
    setFilter(prev => ({
      ...prev,
      tasks: prev.tasks.includes(t)
        ? prev.tasks.filter(x => x !== t)
        : [...prev.tasks, t],
    }));
  }, []);

  const clearAll = useCallback(() => setFilter(EMPTY), []);
  const clearSubjects = useCallback(() => setFilter(p => ({ ...p, subjects: [] })), []);
  const clearTasks = useCallback(() => setFilter(p => ({ ...p, tasks: [] })), []);

  const availableAudiences = useMemo(() => {
    return filter.stage ? STAGE_TO_AUDIENCES[filter.stage] : EMPTY_AUDIENCES;
  }, [filter.stage]);

  const hasActiveFilter = useMemo(() => {
    return (
      filter.stage !== null ||
      filter.audience !== null ||
      filter.subjects.length > 0 ||
      filter.tasks.length > 0
    );
  }, [filter]);

  const value = useMemo<EduFilterContextValue>(() => ({
    filter,
    setStage,
    setAudience,
    toggleSubject,
    toggleTask,
    clearAll,
    clearSubjects,
    clearTasks,
    hasActiveFilter,
    availableAudiences,
  }), [
    filter,
    setStage,
    setAudience,
    toggleSubject,
    toggleTask,
    clearAll,
    clearSubjects,
    clearTasks,
    hasActiveFilter,
    availableAudiences,
  ]);

  return (
    <EduFilterContext.Provider value={value}>
      {children}
    </EduFilterContext.Provider>
  );
}

export function useEduFilter() {
  const ctx = useContext(EduFilterContext);
  if (!ctx) throw new Error('useEduFilter must be inside EduFilterProvider');
  return ctx;
}
