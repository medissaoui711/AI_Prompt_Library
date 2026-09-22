import { CommandPrompt } from '../../../types/prompt';
import { SALES_STRATEGY_PROMPTS } from './strategy';
import { SALES_OUTREACH_PROMPTS } from './outreach';
import { SALES_CALLS_PROMPTS } from './calls';
import { SALES_PROPOSALS_PROMPTS } from './proposals';
import { SALES_OBJECTIONS_PROMPTS } from './objections';
import { SALES_FOLLOWUP_PROMPTS } from './followup';
import { SALES_CLOSING_PROMPTS } from './closing';
import { SALES_RETENTION_PROMPTS } from './retention';
import { SALES_CRM_PROMPTS } from './crm';
import { SALES_TRAINING_PROMPTS } from './training';

export const SALES_PROMPTS: CommandPrompt[] = [
  ...SALES_STRATEGY_PROMPTS,
  ...SALES_OUTREACH_PROMPTS,
  ...SALES_CALLS_PROMPTS,
  ...SALES_PROPOSALS_PROMPTS,
  ...SALES_OBJECTIONS_PROMPTS,
  ...SALES_FOLLOWUP_PROMPTS,
  ...SALES_CLOSING_PROMPTS,
  ...SALES_RETENTION_PROMPTS,
  ...SALES_CRM_PROMPTS,
  ...SALES_TRAINING_PROMPTS,
];
