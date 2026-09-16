import { CommandPrompt } from '../../../types/prompt';
import { VIDEO_YOUTUBE_PROMPTS } from './youtube';
import { VIDEO_SHORTS_PROMPTS } from './shorts-reels';
import { VIDEO_POST_PROMPTS } from './post-production';

export const VIDEO_PROMPTS: CommandPrompt[] = [
  ...VIDEO_YOUTUBE_PROMPTS,
  ...VIDEO_SHORTS_PROMPTS,
  ...VIDEO_POST_PROMPTS
];
