// ================================================
// src/types/eduMetadata.ts
// طبقة Metadata لإثراء كل أمر تعليمي
// ================================================

export type EduStage =
  | 'early_childhood'
  | 'primary'
  | 'secondary'
  | 'university';

export type EduAudience =
  | 'teacher'
  | 'student'
  | 'parent'
  | 'lecturer';

export type EduSubject =
  | 'arabic'
  | 'english'
  | 'math'
  | 'science'
  | 'physics'
  | 'chemistry'
  | 'biology'
  | 'history'
  | 'geography'
  | 'literature'
  | 'research'
  | 'statistics'
  | 'study-skills'
  | 'study_skills'
  | 'general';

export type EduTaskType =
  | 'lesson-plan'
  | 'explain'
  | 'practice'
  | 'quiz'
  | 'review'
  | 'solve'
  | 'project'
  | 'assessment'
  | 'communication'
  | 'research'
  | 'activity'
  | 'homework'
  | 'exam-prep'
  | 'present'
  | 'critical-thinking';

export type EduDifficulty =
  | 'beginner'
  | 'intermediate'
  | 'advanced';

export interface EduMetadata {
  stage: EduStage;
  audience: EduAudience[];
  subjects: EduSubject[];
  taskTypes: EduTaskType[];
  grades?: number[];        // 1-12 للـ K12، [13,14,15,16] للجامعي
  difficulty: EduDifficulty;
}

// ---------- Labels عربية ----------
export const STAGE_LABELS: Record<EduStage, { ar: string; en: string; icon: string }> = {
  early_childhood: { ar: 'الروضة والطفولة المبكرة', en: 'Early Childhood', icon: '🧒' },
  primary:         { ar: 'المرحلة الابتدائية',       en: 'Primary',          icon: '👦' },
  secondary:       { ar: 'المرحلة الثانوية',         en: 'Secondary',        icon: '🧑' },
  university:      { ar: 'التعليم الجامعي',           en: 'University',       icon: '🎓' },
};

export const AUDIENCE_LABELS: Record<EduAudience, { ar: string; en: string; icon: string }> = {
  teacher:  { ar: 'معلم',            en: 'Teacher',  icon: '👨‍🏫' },
  student:  { ar: 'طالب',            en: 'Student',  icon: '🎒' },
  parent:   { ar: 'ولي أمر',         en: 'Parent',   icon: '👨‍👩‍👧' },
  lecturer: { ar: 'أستاذ جامعي',     en: 'Lecturer', icon: '🎓' },
};

export const SUBJECT_LABELS: Record<EduSubject, { ar: string; en: string }> = {
  arabic:         { ar: 'اللغة العربية',      en: 'Arabic' },
  english:        { ar: 'اللغة الإنجليزية',   en: 'English' },
  math:           { ar: 'الرياضيات',          en: 'Math' },
  science:        { ar: 'العلوم',             en: 'Science' },
  physics:        { ar: 'الفيزياء',           en: 'Physics' },
  chemistry:      { ar: 'الكيمياء',           en: 'Chemistry' },
  biology:        { ar: 'الأحياء',            en: 'Biology' },
  history:        { ar: 'التاريخ',            en: 'History' },
  geography:      { ar: 'الجغرافيا',          en: 'Geography' },
  literature:     { ar: 'الأدب',              en: 'Literature' },
  research:       { ar: 'البحث الأكاديمي',    en: 'Research' },
  statistics:     { ar: 'الإحصاء',            en: 'Statistics' },
  'study-skills': { ar: 'مهارات الدراسة',     en: 'Study Skills' },
  'study_skills': { ar: 'مهارات الدراسة',     en: 'Study Skills' },
  general:        { ar: 'عام',                en: 'General' },
};

export const TASK_LABELS: Record<EduTaskType, { ar: string; en: string }> = {
  'lesson-plan':       { ar: 'خطة درس',           en: 'Lesson Plan' },
  explain:             { ar: 'شرح',               en: 'Explain' },
  practice:            { ar: 'تدريب',             en: 'Practice' },
  quiz:                { ar: 'اختبار',            en: 'Quiz' },
  review:              { ar: 'مراجعة',            en: 'Review' },
  solve:               { ar: 'حل مسائل',          en: 'Solve' },
  project:             { ar: 'مشروع',             en: 'Project' },
  assessment:          { ar: 'تقويم',             en: 'Assessment' },
  communication:       { ar: 'تواصل مع الأهل',    en: 'Communication' },
  research:            { ar: 'بحث',               en: 'Research' },
  activity:            { ar: 'نشاط',              en: 'Activity' },
  homework:            { ar: 'واجب',              en: 'Homework' },
  'exam-prep':         { ar: 'استعداد للاختبار',  en: 'Exam Prep' },
  present:             { ar: 'تقديم وعرض',        en: 'Presentation' },
  'critical-thinking': { ar: 'تفكير نقدي',        en: 'Critical Thinking' },
};
