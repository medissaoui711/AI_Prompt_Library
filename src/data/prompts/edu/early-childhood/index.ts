import type { CommandPrompt } from '../../../../types/prompt';
import { EDU_EARLY_TEACHER } from './teacher';
import { EDU_EARLY_PARENT } from './parent';

export const EDU_EARLY_CHILDHOOD_PROMPTS: CommandPrompt[] = [
  ...EDU_EARLY_TEACHER,
  ...EDU_EARLY_PARENT,
];
