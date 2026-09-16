// ================================================
// src/types/guidedFlow.ts
// الباقات الإرشادية — سلسلة أوامر لمهمة كبيرة
// ================================================

export interface FlowStep {
  order: number;
  commandId: string;          // مرجع لأمر موجود
  titleAr: string;
  titleEn: string;
  noteAr?: string;            // نصيحة قصيرة للمستخدم
  noteEn?: string;
  optional?: boolean;
}

export interface GuidedFlow {
  id: string;                 // 'flow-exam-prep-secondary'
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  icon: string;               // emoji
  accentColor: string;        // tailwind color class
  audience: ('teacher' | 'student' | 'parent' | 'lecturer')[];
  stage: 'early_childhood' | 'primary' | 'secondary' | 'university' | 'any';
  steps: FlowStep[];
  estimatedTimeAr?: string;   // "30 دقيقة"
  estimatedTimeEn?: string;
  tags: string[];
  usageCount: number;
  isFavorite: boolean;
  createdAt: string;
  updatedAt: string;
}
