import { CommandPrompt, ParamDef } from '../types/prompt';
import { getPromptExamples } from './exampleFormatter';

export interface ResolvedCommandDetails {
  name: string;
  category: string;
  description: string;
  whatItDoes: string;
  goal: string;
  outputType: string;
  outputBadgeText: string;
  syntax: string;
  variables: ParamDef[];
  examples: {
    liveExample: string;
    template: string;
    customized?: string;
  };
  steps: string[];
  tips: string[];
  warnings: string[];
  relatedCommands: CommandPrompt[];
}

/**
 * Resolves full Command Details with fallback values for older commands.
 */
export function resolveCommandDetails(
  prompt: CommandPrompt,
  allPrompts: CommandPrompt[] = [],
  language: 'ar' | 'en' = 'ar'
): ResolvedCommandDetails {
  const isArabic = language === 'ar';
  const name = isArabic ? prompt.titleAr : prompt.titleEn;
  const description = isArabic ? prompt.descriptionAr : prompt.descriptionEn;

  // 1. What it does? (ماذا يفعل؟)
  const whatItDoes =
    prompt.whatItDoes ||
    (isArabic ? prompt.whatItDoesAr : prompt.whatItDoesEn) ||
    description;

  // 2. Goal (الهدف)
  const defaultGoalAr = 'إنجاز المهمة المطلوبة بأعلى معايير الدقة والاحترافية عبر استثمار قدرات نماذج الذكاء الاصطناعي الحديثة.';
  const defaultGoalEn = 'Execute the target task with peak precision and professional quality leveraging state-of-the-art AI capabilities.';
  const goal =
    prompt.goal ||
    (isArabic ? prompt.goalAr : prompt.goalEn) ||
    (prompt.qualityRules && prompt.qualityRules.length > 0 ? prompt.qualityRules[0] : (isArabic ? defaultGoalAr : defaultGoalEn));

  // 3. Output Type & Badge (نوع الناتج)
  const outputType = prompt.outputType || 'text';
  let outputBadgeText = '';
  if (prompt.outputBadges && prompt.outputBadges.length > 0) {
    outputBadgeText = prompt.outputBadges.join(' • ');
  } else {
    const outputLabels: Record<string, { ar: string; en: string }> = {
      text: { ar: '📄 نص إعلاني وتواصلي', en: '📄 Text / Ad Copy' },
      image: { ar: '🎨 تصميم وصورة بصرية', en: '🎨 Visual / Image' },
      video: { ar: '🎬 سيناريو وفيديو', en: '🎬 Video Script' },
      plan: { ar: '📐 خطة واستراتيجية عمل', en: '📐 Strategy / Plan' },
      analysis: { ar: '📊 مراجعة وتحليل نوعي', en: '📊 Audit & Analysis' },
      mixed: { ar: '⚡ حزمة متكاملة', en: '⚡ Comprehensive Suite' },
    };
    outputBadgeText = isArabic
      ? outputLabels[outputType]?.ar || '📄 نص'
      : outputLabels[outputType]?.en || '📄 Text';
  }

  // 4. Formatted Examples & Syntax (الصيغة والأمثلة)
  const promptExamples = getPromptExamples(prompt);
  const syntax =
    prompt.syntax ||
    (prompt.params && prompt.params.length > 0
      ? `/${prompt.code} ${prompt.params.map(p => p.isPositional ? `[${p.flag}]` : `--${p.flag}=[${p.hintAr || p.key}]`).join(' ')}`
      : promptExamples.template);

  // 5. Variables (المتغيرات)
  const variables: ParamDef[] = prompt.variables || prompt.params || [];

  // 6. Steps to use (خطوات الاستخدام)
  const defaultStepsAr = [
    'خصّص المتغيرات المطلوبة بما يلائم احتياجك وسياق مشروعك.',
    'انسخ الأمر الجاهز أو صيغة القالب بنقرة واحدة.',
    'الصق الأمر في أي نموذج ذكاء اصطناعي (مثل ChatGPT, Claude, Gemini).',
    'راجع مخرجات الذكاء الاصطناعي واطلب تدقيقات إضافية وفق المعايير المستهدفة.'
  ];
  const defaultStepsEn = [
    'Customize the parameters according to your specific project needs.',
    'Copy the prepared command or raw template with a single click.',
    'Paste the command into your preferred AI model (ChatGPT, Claude, Gemini).',
    'Evaluate generated outputs and request refinements based on target criteria.'
  ];
  const steps = prompt.steps && prompt.steps.length > 0
    ? prompt.steps
    : (isArabic ? defaultStepsAr : defaultStepsEn);

  // 7. Tips (نصائح)
  const defaultTipsAr = [
    'أعطِ النموذج سياقاً واقعياً من مجالك لرفع جودة واستجابة المخرجات.',
    'حدد نبرة الخطاب المطلوبة والجمهور المستهدف بدقة للحصول على نتيجة مثالية.',
    'استخدم زر تعديل المتغيرات لمشاهدة نص الأمر يتحدث فورياً قبل نسخه.'
  ];
  const defaultTipsEn = [
    'Provide domain-specific context to dramatically boost response relevance.',
    'Specify your desired tone of voice and target audience clearly.',
    'Use the parameter editor to preview your live updated command before copying.'
  ];
  const tips = prompt.tips && prompt.tips.length > 0
    ? prompt.tips
    : (prompt.qualityRules && prompt.qualityRules.length > 1
        ? prompt.qualityRules.slice(1)
        : (isArabic ? defaultTipsAr : defaultTipsEn));

  // 8. Warnings (تحذيرات)
  const warnings = prompt.warnings || [];

  // 9. Related Commands (أوامر مرتبطة)
  let relatedCommands: CommandPrompt[] = [];
  if (prompt.relatedCommandIds && prompt.relatedCommandIds.length > 0) {
    relatedCommands = allPrompts.filter(p => prompt.relatedCommandIds!.includes(p.id));
  }
  if (relatedCommands.length === 0 && allPrompts.length > 0) {
    // Find up to 3 commands sharing the same group
    relatedCommands = allPrompts
      .filter(p => p.id !== prompt.id && p.group === prompt.group)
      .slice(0, 3);
  }

  return {
    name,
    category: prompt.group,
    description,
    whatItDoes,
    goal,
    outputType,
    outputBadgeText,
    syntax,
    variables,
    examples: {
      liveExample: promptExamples.liveExample,
      template: promptExamples.template,
    },
    steps,
    tips,
    warnings,
    relatedCommands,
  };
}

/**
 * Builds a customized command string given parameter values.
 */
export function buildCustomizedCommand(
  prompt: CommandPrompt,
  values: Record<string, string | number | boolean>
): string {
  const params = prompt.variables || prompt.params || [];
  if (params.length === 0) {
    return prompt.example || `/${prompt.code}`;
  }

  // Base command
  let result = `/${prompt.code}`;

  params.forEach(param => {
    const val = values[param.key] ?? values[param.flag];
    if (val !== undefined && String(val).trim() !== '') {
      if (param.isPositional) {
        result += ` "${val}"`;
      } else {
        result += ` --${param.flag}="${val}"`;
      }
    } else if (param.defaultValue !== undefined) {
      if (param.isPositional) {
        result += ` "${param.defaultValue}"`;
      } else {
        result += ` --${param.flag}="${param.defaultValue}"`;
      }
    }
  });

  return result;
}
