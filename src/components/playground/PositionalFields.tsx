import React from 'react';
import { CommandPrompt } from '../../types/prompt';
import { useLanguage } from '../../context/LanguageContext';

interface Props {
  command: CommandPrompt;
  values: Record<string, string>;
  touched: Set<string>;
  onChange: (flag: string, val: string) => void;
}

export function PositionalFields({ command, values, touched, onChange }: Props) {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';
  
  const positionals = command.params.filter(p => p.isPositional);
  
  if (positionals.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-bold text-foreground">{t.positionalsSection}</h3>
      <div className="flex flex-col gap-4">
        {positionals.map(p => {
          const val = values[p.flag] || '';
          const isTouched = touched.has(p.flag);
          const hasError = p.required && isTouched && !val.trim();
          const label = isArabic ? p.labelAr : p.labelEn;
          const hint = isArabic ? p.hintAr : p.hintEn;
          
          const isMultiline = hint?.toLowerCase().includes('multiline') || p.type === 'text';

          return (
            <div key={p.flag} className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground flex items-center gap-1">
                {label}
                {p.required && <span className="text-red-500">*</span>}
              </label>
              
              {isMultiline ? (
                <textarea
                  value={val}
                  onChange={(e) => onChange(p.flag, e.target.value)}
                  placeholder={hint || label}
                  className={`flex min-h-[100px] w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 resize-y ${
                    hasError ? 'border-red-500' : 'border-input'
                  }`}
                />
              ) : (
                <input
                  type="text"
                  value={val}
                  onChange={(e) => onChange(p.flag, e.target.value)}
                  placeholder={hint || label}
                  className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    hasError ? 'border-red-500' : 'border-input'
                  }`}
                />
              )}
              {hasError && (
                <span className="text-xs text-red-500">{t.requiredField}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
