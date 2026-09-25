import { CommandPrompt } from '../../../types/prompt';
import { STYLE_AUDIT_PROMPTS } from './styleAudit';
import { CAROUSEL_TRANS_PROMPTS } from './carouselTrans';
import { INFOGRAPHIC_PROMPTS } from './infographics';
import { PROMPTS_GEN_PROMPTS } from './promptsGen';
import { REVIEW_AND_RTL_PROMPTS } from './reviewAndRtl';

export const CAROUSEL_PROMPTS: CommandPrompt[] = [
  ...STYLE_AUDIT_PROMPTS,
  ...CAROUSEL_TRANS_PROMPTS,
  ...INFOGRAPHIC_PROMPTS,
  ...PROMPTS_GEN_PROMPTS,
  ...REVIEW_AND_RTL_PROMPTS
];
