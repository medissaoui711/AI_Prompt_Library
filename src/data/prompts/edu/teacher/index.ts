import { CommandPrompt } from '../../../../types/prompt';
import { TEACHER_PLANNING_PROMPTS } from './planning';
import { TEACHER_DAILY_PREP_PROMPTS } from './daily_prep';
import { TEACHER_ASSESSMENT_PROMPTS } from './assessment';
import { TEACHER_WORKSHEETS_PROMPTS } from './worksheets';
import { TEACHER_VISUAL_ACTIVITIES_PROMPTS } from './visual_activities';
import { TEACHER_DIFFERENTIATION_PROMPTS } from './differentiation';
import { TEACHER_CLASSROOM_MGMT_PROMPTS } from './classroom_mgmt';
import { TEACHER_LANGUAGES_PROMPTS } from './languages';
import { TEACHER_STEM_PROMPTS } from './stem';
import { TEACHER_DOCUMENTATION_PROMPTS } from './documentation';
import { TEACHER_REPORTS_PROMPTS } from './reports';

export const TEACHER_COMMAND_PROMPTS: CommandPrompt[] = [
  ...TEACHER_PLANNING_PROMPTS,
  ...TEACHER_DAILY_PREP_PROMPTS,
  ...TEACHER_ASSESSMENT_PROMPTS,
  ...TEACHER_WORKSHEETS_PROMPTS,
  ...TEACHER_VISUAL_ACTIVITIES_PROMPTS,
  ...TEACHER_DIFFERENTIATION_PROMPTS,
  ...TEACHER_CLASSROOM_MGMT_PROMPTS,
  ...TEACHER_LANGUAGES_PROMPTS,
  ...TEACHER_STEM_PROMPTS,
  ...TEACHER_DOCUMENTATION_PROMPTS,
  ...TEACHER_REPORTS_PROMPTS,
];
