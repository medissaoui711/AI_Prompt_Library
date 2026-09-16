import { CommandPrompt } from '../../../types/prompt';
import { CV_CREATION_PROMPTS } from './creation';
import { CV_TEMPLATES_PROMPTS } from './templates';
import { CV_SECTIONS_PROMPTS } from './sections';
import { CV_TAILORING_PROMPTS } from './tailoring';
import { CV_REVIEW_PROMPTS } from './review';
import { CV_LINKEDIN_PROMPTS } from './linkedin';
import { CV_COVERLETTERS_PROMPTS } from './coverletters';
import { CV_CAREER_PROMPTS } from './career';
import { CV_SPECIAL_PROMPTS } from './special';
import { CV_ADVANCED_PROMPTS } from './advanced';

export const CV_PROMPTS: CommandPrompt[] = [
  ...CV_CREATION_PROMPTS,
  ...CV_TEMPLATES_PROMPTS,
  ...CV_SECTIONS_PROMPTS,
  ...CV_TAILORING_PROMPTS,
  ...CV_REVIEW_PROMPTS,
  ...CV_LINKEDIN_PROMPTS,
  ...CV_COVERLETTERS_PROMPTS,
  ...CV_CAREER_PROMPTS,
  ...CV_SPECIAL_PROMPTS,
  ...CV_ADVANCED_PROMPTS
];

export {
  CV_CREATION_PROMPTS,
  CV_TEMPLATES_PROMPTS,
  CV_SECTIONS_PROMPTS,
  CV_TAILORING_PROMPTS,
  CV_REVIEW_PROMPTS,
  CV_LINKEDIN_PROMPTS,
  CV_COVERLETTERS_PROMPTS,
  CV_CAREER_PROMPTS,
  CV_SPECIAL_PROMPTS,
  CV_ADVANCED_PROMPTS
};

