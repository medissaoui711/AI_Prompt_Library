import { CommandPrompt } from '../../../types/prompt';
import { EDU_PRIMARY_PROMPTS } from './primary';
import { EDU_SECONDARY_PROMPTS } from './secondary';
import { EDU_UNIVERSITY_PROMPTS } from './university';
import { EDU_EARLY_CHILDHOOD_PROMPTS } from './early-childhood';
import { EDU_PRIMARY_PARENT } from './primary/parent';
import { EDU_SECONDARY_PARENT } from './secondary/parent';
import { EDU_UNI_LECTURER } from './university/lecturer';
import { EDU_UNI_STUDENT_EXTRA } from './university/student-extra';
import { EDU_VISUAL_ACTIVITIES_PROMPTS } from './visual-activities';
import { KIDS_VISUAL_ACTIVITIES_PROMPTS } from './kids';
import { TEACHER_COMMAND_PROMPTS } from './teacher';
import { getEduMetadata } from '../../metadata/eduMetadataMap';

const RAW_EDU_PROMPTS: CommandPrompt[] = [
  ...TEACHER_COMMAND_PROMPTS,
  ...KIDS_VISUAL_ACTIVITIES_PROMPTS,
  ...EDU_VISUAL_ACTIVITIES_PROMPTS,
  ...EDU_PRIMARY_PROMPTS,
  ...EDU_SECONDARY_PROMPTS,
  ...EDU_UNIVERSITY_PROMPTS,
  ...EDU_EARLY_CHILDHOOD_PROMPTS,
  ...EDU_PRIMARY_PARENT,
  ...EDU_SECONDARY_PARENT,
  ...EDU_UNI_LECTURER,
  ...EDU_UNI_STUDENT_EXTRA,
];

// Enrich all prompts with their education metadata
export const EDU_PROMPTS: CommandPrompt[] = RAW_EDU_PROMPTS.map(prompt => ({
  ...prompt,
  education: getEduMetadata(prompt),
}));
