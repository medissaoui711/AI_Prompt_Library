import { CommandPrompt } from '../../../types/prompt';
import { FEASIBILITY_PROMPTS } from './feasibility';
import { MODEL_PROMPTS } from './model';
import { MARKET_PROMPTS } from './market';
import { COMPETITOR_PROMPTS } from './competitors';
import { LAUNCH_PROMPTS } from './launch';
import { GROWTH_PROMPTS } from './growth';
import { FINANCIAL_PROMPTS } from './financial';
import { DATA_ANALYSIS_PROMPTS } from './dataAnalysis';
import { REPORTS_PROMPTS } from './reports';
import { VISUALIZATION_PROMPTS } from './visualization';
import { DECISIONS_PROMPTS } from './decisions';

export const BUSINESS_PROMPTS: CommandPrompt[] = [
  ...FEASIBILITY_PROMPTS,
  ...MODEL_PROMPTS,
  ...MARKET_PROMPTS,
  ...COMPETITOR_PROMPTS,
  ...LAUNCH_PROMPTS,
  ...GROWTH_PROMPTS,
  ...FINANCIAL_PROMPTS,
  ...DATA_ANALYSIS_PROMPTS,
  ...REPORTS_PROMPTS,
  ...VISUALIZATION_PROMPTS,
  ...DECISIONS_PROMPTS,
];
