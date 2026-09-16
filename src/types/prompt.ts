import type { EduMetadata, EduStage as FullEduStage, EduSubject as FullEduSubject, EduTaskType } from './eduMetadata';

export type PromptGroup = 'edu' | 'design' | 'video' | 'cv' | 'ads' | 'dev';
export type EduStage = 'early_childhood' | 'primary' | 'secondary' | 'university';
export type EduSubject = 'arabic' | 'english' | 'math' | 'science' | 'physics' | 'chemistry' | 'biology' | 'history' | 'geography' | 'literature' | 'research' | 'statistics' | 'study_skills' | 'study-skills' | 'general';
export type TaskType = 'explain' | 'practice' | 'quiz' | 'review' | 'solve' | 'research' | 'write' | 'present' | 'project' | 'lesson-plan' | 'assessment' | 'communication' | 'activity' | 'homework' | 'exam-prep' | 'critical-thinking';
export type ParamType = 'string' | 'number' | 'boolean' | 'enum' | 'array' | 'text';

export interface ParamDef {
  key: string;
  flag: string; // the flag name (same as key mostly)
  isPositional: boolean;
  type: ParamType;
  required: boolean;
  defaultValue?: any;
  default?: any; // kept for compatibility
  enumValues?: { value: string, labelAr: string, labelEn: string }[];
  options?: string[]; // kept for compatibility
  labelAr: string;
  labelEn: string;
  hintAr: string;
  hintEn: string;
}

export type OutputType = 'text' | 'image' | 'video' | 'plan' | 'analysis' | 'mixed';

export interface CommandPrompt {
  id: string;
  code: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  group: PromptGroup;
  stage?: EduStage[];
  subject?: EduSubject[];
  task?: TaskType[];
  education?: EduMetadata;
  outputType?: OutputType;
  outputBadges?: string[];
  adsCategory?: string;
  cvCategory?: string;
  devCategory?: string;
  designCategory?: string;
  params: ParamDef[];
  example: string;
  qualityRules: string[];
  keywords: string[];
  createdAt: string;
  updatedAt: string;
  usageCount: number;
  isFavorite: boolean;
}

export interface PromptFilters {
  query: string;
  groups: PromptGroup[];
  stages: EduStage[];
  subjects: EduSubject[];
  tasks: TaskType[];
  adsCategory?: string;
  cvCategory?: string;
  devCategory?: string;
  designCategory?: string;
  onlyFavorites: boolean;
  sortBy: 'recent' | 'code' | 'usage';
}

export const EMPTY_FILTERS: PromptFilters = {
  query: '',
  groups: [],
  stages: [],
  subjects: [],
  tasks: [],
  adsCategory: 'all',
  cvCategory: 'all',
  devCategory: 'all',
  designCategory: 'all',
  onlyFavorites: false,
  sortBy: 'recent'
};
