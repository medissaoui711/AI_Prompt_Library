import { CommandPrompt } from '../types/prompt';
import { Workflow } from '../types/workflow';

export type ExportFormat = 'markdown' | 'json' | 'system_prompt';

/**
 * Exports an array of CommandPrompts to a downloadable file or clipboard string
 */
export function exportPromptsToString(
  prompts: CommandPrompt[],
  format: ExportFormat,
  title: string = 'AI Prompts Collection',
  language: 'ar' | 'en' = 'ar'
): string {
  const isArabic = language === 'ar';

  if (format === 'json') {
    return JSON.stringify(
      {
        version: '1.0.0',
        exportedAt: new Date().toISOString(),
        totalCount: prompts.length,
        title,
        prompts: prompts.map(p => ({
          id: p.id,
          code: p.code,
          titleAr: p.titleAr,
          titleEn: p.titleEn,
          descriptionAr: p.descriptionAr,
          descriptionEn: p.descriptionEn,
          group: p.group,
          task: p.task,
          example: p.example,
          qualityRules: p.qualityRules,
          params: p.params.map(pm => ({
            key: pm.key,
            flag: pm.flag,
            isPositional: pm.isPositional,
            type: pm.type,
            required: pm.required,
            labelAr: pm.labelAr,
            labelEn: pm.labelEn,
            hintAr: pm.hintAr,
            hintEn: pm.hintEn,
            defaultValue: pm.defaultValue
          }))
        }))
      },
      null,
      2
    );
  }

  if (format === 'markdown') {
    let md = `# 📚 ${title}\n\n`;
    md += `> **${isArabic ? 'إجمالي الأوامر' : 'Total Prompts'}:** ${prompts.length} | **${isArabic ? 'تاريخ التصدير' : 'Exported At'}:** ${new Date().toLocaleDateString()}\n\n`;
    md += `----\n\n`;

    prompts.forEach((p, idx) => {
      md += `### ${idx + 1}. \`${p.code}\` — ${isArabic ? p.titleAr : p.titleEn}\n\n`;
      md += `**${isArabic ? 'الوصف' : 'Description'}:** ${isArabic ? p.descriptionAr : p.descriptionEn}\n\n`;
      md += `**${isArabic ? 'المثال الجاهز' : 'Ready Example'}:**\n\`\`\`bash\n${p.example}\n\`\`\`\n\n`;

      if (p.params && p.params.length > 0) {
        md += `**${isArabic ? 'المعاملات' : 'Parameters'}:**\n`;
        p.params.forEach(param => {
          const reqStr = param.required ? `(${isArabic ? 'مطلوب' : 'Required'})` : `(${isArabic ? 'اختياري' : 'Optional'})`;
          md += `- \`--${param.flag}\`: ${isArabic ? param.labelAr : param.labelEn} ${reqStr} — ${isArabic ? param.hintAr : param.hintEn}\n`;
        });
        md += `\n`;
      }

      if (p.qualityRules && p.qualityRules.length > 0) {
        md += `**${isArabic ? 'قواعد الجودة' : 'Quality Rules'}:**\n`;
        p.qualityRules.forEach(q => {
          md += `- ${q}\n`;
        });
        md += `\n`;
      }

      md += `----\n\n`;
    });

    return md;
  }

  // System Prompt for ChatGPT / Claude / Gemini
  let sp = `# SYSTEM PROMPT / KNOWLEDGE INSTRUCTIONS\n\n`;
  sp += `You are an expert AI Command Prompt Assistant. You possess knowledge of the following curated command library and should execute or provide templates when the user invokes any of these commands:\n\n`;

  prompts.forEach(p => {
    sp += `### Command: ${p.code}\n`;
    sp += `- Purpose: ${p.titleEn} (${p.titleAr})\n`;
    sp += `- Example Invocation: ${p.example}\n`;
    if (p.qualityRules && p.qualityRules.length > 0) {
      sp += `- Output Quality Constraints: ${p.qualityRules.join('; ')}\n`;
    }
    sp += `\n`;
  });

  return sp;
}

/**
 * Formats a multi-step Workflow into a single Master Prompt Bundle
 */
export function formatWorkflowMasterPrompt(
  workflow: Workflow,
  resolvedSteps: { title: string; code: string; promptText: string }[],
  language: 'ar' | 'en' = 'ar'
): string {
  const isArabic = language === 'ar';

  let out = ``;
  out += `=========================================================\n`;
  out += `🚀 ${isArabic ? 'مسار العمل المتكامل' : 'Master AI Workflow'}: ${isArabic ? workflow.titleAr : workflow.titleEn}\n`;
  out += `=========================================================\n\n`;
  out += `📌 ${isArabic ? 'الهدف والمخرجات المتوقعة' : 'Target Objective & Expected Outputs'}:\n`;
  out += `${isArabic ? workflow.outputSummaryAr : workflow.outputSummaryEn}\n\n`;
  out += `---------------------------------------------------------\n`;
  out += `📋 ${isArabic ? 'خطوات التنفيذ المتسلسلة' : 'Step-by-Step Execution Sequence'}:\n`;
  out += `---------------------------------------------------------\n\n`;

  resolvedSteps.forEach((s, idx) => {
    out += `[ ${isArabic ? 'المرحلة' : 'Phase'} ${idx + 1}: ${s.title} ]\n`;
    out += `Command: ${s.code}\n\n`;
    out += `${s.promptText}\n\n`;
    out += `---------------------------------------------------------\n\n`;
  });

  out += `✅ ${isArabic ? 'تعليمات التنفيذ للذكاء الاصطناعي' : 'Execution Directives for AI'}:\n`;
  out += isArabic
    ? `- يرجى تنفيذ المراحل أعلاه بالترتيب مع استخدام مخرجات كل مرحلة في المرحلة اللاحقة.\n- الالتزام بأعلى معايير الدقة والمهنية والإخراج البصري المنظم.`
    : `- Please execute the above phases in strict sequence, feeding intermediate results forward.\n- Maintain top professional accuracy and clean structured formatting.`;

  return out;
}

/**
 * Triggers a client-side file download
 */
export function downloadFile(content: string, fileName: string, mimeType: string = 'text/plain;charset=utf-8') {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
