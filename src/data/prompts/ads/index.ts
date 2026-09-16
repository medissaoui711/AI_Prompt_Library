import { CommandPrompt } from '../../../types/prompt';
import { PLANNING_PROMPTS } from './planning';
import { COPYWRITING_PROMPTS } from './copywriting';
import { CREATIVE_PROMPTS } from './creative';
import { VIDEO_PROMPTS } from './video';
import { PRODUCTS_OFFERS_PROMPTS } from './productsOffers';
import { PLATFORMS_PROMPTS } from './platforms';
import { LUXURY_PROMPTS } from './luxury';
import { TESTING_PROMPTS } from './testing';
import { ANALYTICS_PROMPTS } from './analytics';
import { SPECIAL_ADS_PROMPTS } from './special';

export const ADS_PROMPTS: CommandPrompt[] = [
  ...PLANNING_PROMPTS,       // 1 - 10
  ...COPYWRITING_PROMPTS,    // 11 - 20
  ...CREATIVE_PROMPTS,       // 21 - 30
  ...VIDEO_PROMPTS,          // 31 - 40
  ...PRODUCTS_OFFERS_PROMPTS,// 41 - 50
  ...PLATFORMS_PROMPTS,      // 51 - 60
  ...LUXURY_PROMPTS,         // 61 - 70
  ...TESTING_PROMPTS,        // 71 - 80
  ...ANALYTICS_PROMPTS,      // 81 - 90
  ...SPECIAL_ADS_PROMPTS,    // 91 - 100
];

export {
  PLANNING_PROMPTS,
  COPYWRITING_PROMPTS,
  CREATIVE_PROMPTS,
  VIDEO_PROMPTS,
  PRODUCTS_OFFERS_PROMPTS,
  PLATFORMS_PROMPTS,
  LUXURY_PROMPTS,
  TESTING_PROMPTS,
  ANALYTICS_PROMPTS,
  SPECIAL_ADS_PROMPTS,
};
