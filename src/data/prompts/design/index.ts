import { CommandPrompt } from '../../../types/prompt';
import { DESIGN_GENERAL_PROMPTS } from './general';
import { DESIGN_PORTRAITS_PROMPTS } from './portraits';
import { DESIGN_PRODUCTS_PROMPTS } from './products';
import { DESIGN_BRANDING_PROMPTS } from './branding';
import { DESIGN_SOCIAL_PROMPTS } from './social';
import { DESIGN_ART_PROMPTS } from './art';
import { DESIGN_ARCHITECTURE_PROMPTS } from './architecture';
import { DESIGN_INFOGRAPHICS_PROMPTS } from './infographics';
import { DESIGN_EDITING_PROMPTS } from './editing';
import { DESIGN_PERSPECTIVES_PROMPTS } from './perspectives';
import { DESIGN_PUBLISHING_PROMPTS } from './publishing';
import { DESIGN_UIUX_PROMPTS } from './ui-ux';
import { DESIGN_GRAPHICS_PROMPTS } from './graphics';

export const DESIGN_PROMPTS: CommandPrompt[] = [
  ...DESIGN_GENERAL_PROMPTS,
  ...DESIGN_PORTRAITS_PROMPTS,
  ...DESIGN_PRODUCTS_PROMPTS,
  ...DESIGN_BRANDING_PROMPTS,
  ...DESIGN_SOCIAL_PROMPTS,
  ...DESIGN_ART_PROMPTS,
  ...DESIGN_ARCHITECTURE_PROMPTS,
  ...DESIGN_INFOGRAPHICS_PROMPTS,
  ...DESIGN_EDITING_PROMPTS,
  ...DESIGN_PERSPECTIVES_PROMPTS,
  ...DESIGN_PUBLISHING_PROMPTS,
  ...DESIGN_UIUX_PROMPTS,
  ...DESIGN_GRAPHICS_PROMPTS
];
