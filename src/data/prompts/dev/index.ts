import { CommandPrompt } from '../../../types/prompt';
import { DEV_PLANNING_PROMPTS } from './planning';
import { DEV_WEB_PROMPTS } from './web';
import { DEV_ANDROID_PROMPTS } from './android';
import { DEV_IOS_PROMPTS } from './ios';
import { DEV_CROSSPLATFORM_PROMPTS } from './crossplatform';
import { DEV_BACKEND_PROMPTS } from './backend';
import { DEV_QUALITY_PROMPTS } from './quality';
import { DEV_TESTING_PROMPTS } from './testing';
import { DEV_SECURITY_PROMPTS } from './security';
import { DEV_DOCUMENTATION_PROMPTS } from './documentation';
import { DEV_DEPLOYMENT_PROMPTS } from './deployment';

export const DEV_PROMPTS: CommandPrompt[] = [
  ...DEV_PLANNING_PROMPTS,
  ...DEV_WEB_PROMPTS,
  ...DEV_ANDROID_PROMPTS,
  ...DEV_IOS_PROMPTS,
  ...DEV_CROSSPLATFORM_PROMPTS,
  ...DEV_BACKEND_PROMPTS,
  ...DEV_QUALITY_PROMPTS,
  ...DEV_TESTING_PROMPTS,
  ...DEV_SECURITY_PROMPTS,
  ...DEV_DOCUMENTATION_PROMPTS,
  ...DEV_DEPLOYMENT_PROMPTS,
];
