import type { CommandPrompt, ParamDef } from '../types/prompt';

export interface CompileInput {
  command: CommandPrompt;
  positionalValues: Record<string, string>;
  optionValues: Record<string, string>;
  includeQualityRules: boolean;
  includeHeader: boolean;
  language?: 'ar' | 'en';
}

export interface CompileResult {
  text: string;
  missingRequired: string[];
  warnings: string[];
  isValid: boolean;
}

export function compileCommand(input: CompileInput): CompileResult {
  const { command, positionalValues, optionValues, includeQualityRules, includeHeader, language = 'ar' } = input;
  const missingRequired: string[] = [];
  const warnings: string[] = [];
  
  const isArabic = language === 'ar';
  
  let text = '';

  // Header
  if (includeHeader) {
    const title = isArabic ? command.titleAr : command.titleEn;
    const group = isArabic ? 'المجموعة' : 'Group';
    const stages = isArabic ? 'المراحل' : 'Stages';
    const headerPrefix = isArabic ? '# الأمر: ' : '# Command: ';
    
    text += `${headerPrefix}${title}\n`;
    text += `# ${group}: ${command.group} | ${stages}: ${command.stage?.join(', ') || ''}\n\n`;
  }

  // Base command
  let cmdLine = command.code;

  // Positionals
  const positionals = command.params.filter(p => p.isPositional);
  for (const p of positionals) {
    const val = positionalValues[p.flag];
    if (p.required && (!val || !val.trim())) {
      missingRequired.push(p.flag);
    }
    if (val && val.trim()) {
      // quote if spaces
      if (val.includes(' ') && !val.includes('"')) {
        cmdLine += ` "${val}"`;
      } else {
        cmdLine += ` ${val}`;
      }
    }
  }
  text += cmdLine;

  // Options
  const options = command.params.filter(p => !p.isPositional);
  for (const o of options) {
    const val = optionValues[o.flag];
    
    if (o.required && (!val || !val.trim())) {
      missingRequired.push(o.flag);
    }

    if (val !== undefined && val.trim() !== '') {
      // Validate enum
      if (o.type === 'enum' && o.enumValues) {
        const allowed = o.enumValues.map(v => v.value);
        if (!allowed.includes(val)) {
          warnings.push(`Invalid enum value for ${o.flag}: ${val}`);
        }
      }

      // the flag format requires --
      text += `\n--${o.flag}=${val}`;
    }
  }

  // Quality Rules
  if (includeQualityRules && command.qualityRules.length > 0) {
    text += '\n\n';
    text += isArabic ? '# قواعد الجودة\n' : '# Quality Rules\n';
    for (const rule of command.qualityRules) {
      text += `- ${rule}\n`;
    }
  }

  return {
    text,
    missingRequired,
    warnings,
    isValid: missingRequired.length === 0
  };
}

export function buildCommandTemplate(command: CommandPrompt, language: 'ar' | 'en' = 'ar'): string {
  const isArabic = language === 'ar';
  let text = command.code;
  
  const positionals = command.params.filter(p => p.isPositional);
  for (const p of positionals) {
    text += ` [${isArabic ? p.labelAr : p.labelEn}]`;
  }
  
  const options = command.params.filter(p => !p.isPositional);
  for (const o of options) {
    text += `\n${o.flag}=...`;
  }
  
  return text;
}

export function validateInput(command: CommandPrompt, positionalValues: Record<string, string>, optionValues: Record<string, string>) {
  const missingRequired: string[] = [];
  const warnings: string[] = [];

  for (const p of command.params) {
    const val = p.isPositional ? positionalValues[p.flag] : optionValues[p.flag];
    if (p.required && (!val || !val.trim())) {
      missingRequired.push(p.flag);
    }
    if (!p.isPositional && val && p.type === 'enum' && p.enumValues) {
      const allowed = p.enumValues.map(v => v.value);
      if (!allowed.includes(val)) {
        warnings.push(`Invalid enum value for ${p.flag}: ${val}`);
      }
    }
  }

  return { missingRequired, warnings, isValid: missingRequired.length === 0 };
}
