import { CommandPrompt } from '../../types/prompt';
import { BUSINESS_PROMPTS } from './business';
import { CONTENT_PROMPTS } from './content';
import { EDU_PROMPTS } from './edu';
import { ADS_PROMPTS } from './ads';
import { DESIGN_PROMPTS } from './design';
import { VIDEO_PROMPTS } from './video';
import { CV_PROMPTS } from './cv';
import { DEV_PROMPTS } from './dev';
import { SALES_PROMPTS } from './sales';

export const ALL_PROMPTS: CommandPrompt[] = [
  ...BUSINESS_PROMPTS,
  ...CONTENT_PROMPTS,
  ...EDU_PROMPTS,
  ...ADS_PROMPTS,
  ...DESIGN_PROMPTS,
  ...VIDEO_PROMPTS,
  ...CV_PROMPTS,
  ...DEV_PROMPTS,
  ...SALES_PROMPTS,
];

export { BUSINESS_PROMPTS, CONTENT_PROMPTS, ADS_PROMPTS, CV_PROMPTS, DEV_PROMPTS, SALES_PROMPTS };


