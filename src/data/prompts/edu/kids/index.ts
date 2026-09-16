import { CommandPrompt } from '../../../../types/prompt';
import { KIDS_NEWSPAPER_PROMPTS } from './newspapers';
import { KIDS_WORKSHEET_PROMPTS } from './worksheets';
import { KIDS_GAME_PROMPTS } from './games';
import { KIDS_STORIES_CARDS_PROMPTS } from './storiesCards';
import { KIDS_ART_MOVEMENT_PROMPTS } from './artMovement';
import { KIDS_LANGUAGE_PROMPTS } from './language';
import { KIDS_MATH_PROMPTS } from './math';
import { KIDS_SCIENCE_PROMPTS } from './science';
import { KIDS_VALUES_PROMPTS } from './values';
import { KIDS_PARENT_PROMPTS } from './parent';

export {
  FIXED_KIDS_DIRECTIVE,
  KIDS_QUALITY_RULES,
  STANDARD_FORMAT_PARAM,
  STANDARD_PRINT_PARAM,
  STANDARD_SIZE_PARAM,
  STANDARD_STYLE_PARAM
} from './constants';

export const KIDS_VISUAL_ACTIVITIES_PROMPTS: CommandPrompt[] = [
  ...KIDS_NEWSPAPER_PROMPTS,
  ...KIDS_WORKSHEET_PROMPTS,
  ...KIDS_GAME_PROMPTS,
  ...KIDS_STORIES_CARDS_PROMPTS,
  ...KIDS_ART_MOVEMENT_PROMPTS,
  ...KIDS_LANGUAGE_PROMPTS,
  ...KIDS_MATH_PROMPTS,
  ...KIDS_SCIENCE_PROMPTS,
  ...KIDS_VALUES_PROMPTS,
  ...KIDS_PARENT_PROMPTS
];
