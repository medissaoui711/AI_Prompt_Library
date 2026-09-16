import { PromptGroup } from './prompt';

export type WorkflowDifficulty = 'beginner' | 'intermediate' | 'advanced';
export type WorkflowCategory = PromptGroup | 'productivity' | 'all';

export interface WorkflowStep {
  id: string;
  stepNumber: number;
  promptId: string; // ID of CommandPrompt
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  defaultInputs?: Record<string, string>;
  tipsAr?: string[];
  tipsEn?: string[];
}

export interface Workflow {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  category: PromptGroup;
  icon: string;
  estimatedMinutes: number;
  difficulty: WorkflowDifficulty;
  badgeAr: string;
  badgeEn: string;
  tags: string[];
  steps: WorkflowStep[];
  outputSummaryAr: string;
  outputSummaryEn: string;
}
