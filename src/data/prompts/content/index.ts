import { CommandPrompt } from '../../../types/prompt';
import { SOCIAL_PROMPTS } from './social';
import { SHORTFORM_PROMPTS } from './shortform';
import { LINKEDIN_PROMPTS } from './linkedin';
import { HUMAN_ARTICLES_PROMPTS } from './humanArticles';
import { SEO_ARTICLES_PROMPTS } from './seoArticles';
import { PRODUCTS_SERVICES_PROMPTS } from './productsServices';
import { LAUNCH_PROMPTS } from './launch';
import { BRAND_STORIES_PROMPTS } from './brandStories';
import { EMAIL_PROMPTS } from './email';
import { CALENDAR_PLANS_PROMPTS } from './calendarPlans';
import { REVIEW_HUMANIZE_PROMPTS } from './reviewHumanize';

export const CONTENT_PROMPTS: CommandPrompt[] = [
  ...SOCIAL_PROMPTS,
  ...SHORTFORM_PROMPTS,
  ...LINKEDIN_PROMPTS,
  ...HUMAN_ARTICLES_PROMPTS,
  ...SEO_ARTICLES_PROMPTS,
  ...PRODUCTS_SERVICES_PROMPTS,
  ...LAUNCH_PROMPTS,
  ...BRAND_STORIES_PROMPTS,
  ...EMAIL_PROMPTS,
  ...CALENDAR_PLANS_PROMPTS,
  ...REVIEW_HUMANIZE_PROMPTS,
];
