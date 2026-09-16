import React from 'react';
import { CommandPrompt } from '../../types/prompt';
import { useLanguage } from '../../context/LanguageContext';
import { RotateCcw } from 'lucide-react';

interface Props {
  command: CommandPrompt;
  values: Record<string, string>;
  touched: Set<string>;
  onChange: (flag: string, val: string) => void;
  onReset: (flag: string) => void;
}

export function OptionFields({ command, values, touched, onChange, onReset }: Props) {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';
  
  const options = command.params.filter(p => !p.isPositional);
  
  if (options.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-bold text-foreground">{t.optionsSection}</h3>
      <div className="flex flex-col gap-4">
        {options.map(p => {
          const val = values[p.flag] ?? '';
          const isTouched = touched.has(p.flag);
          const hasError = p.required && isTouched && !val.trim();
          const label = isArabic ? p.labelAr : p.labelEn;
          const hint = isArabic ? p.hintAr : p.hintEn;
          const isDirty = val !== (p.defaultValue || '');

          return (
            <div key={p.flag} className="flex flex-col gap-1.5 p-3 rounded-lg border border-border bg-card/50">
              <div className="flex items-center justify-between gap-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded border border-border/50">
                    --{p.flag}
                  </span>
                  <span>{label}</span>
                  {p.required && <span className="text-red-500">*</span>}
                </label>
                {isDirty && (
                  <button
                    onClick={() => onReset(p.flag)}
                    className="text-muted-foreground hover:text-foreground p-1 rounded transition-colors"
                    title={t.resetField}
                  >
                    <RotateCcw className="h-3 w-3" />
                  </button>
                )}
              </div>
              
              {p.type === 'boolean' && (
                <div className="flex items-center gap-3 mt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-sm">
                    <input
                      type="radio"
                      name={p.flag}
                      checked={val === 'yes' || val === 'true'}
                      onChange={() => onChange(p.flag, 'yes')}
                      className="accent-primary"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-sm">
                    <input
                      type="radio"
                      name={p.flag}
                      checked={val === 'no' || val === 'false'}
                      onChange={() => onChange(p.flag, 'no')}
                      className="accent-primary"
                    />
                    <span>No</span>
                  </label>
                </div>
              )}

              {p.type === 'enum' && p.enumValues && (
                p.enumValues.length <= 4 ? (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {p.enumValues.map(ev => {
                      const evLabel = isArabic ? ev.labelAr : ev.labelEn;
                      const isSelected = val === ev.value;
                      return (
                        <button
                          key={ev.value}
                          onClick={() => onChange(p.flag, ev.value)}
                          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors border ${
                            isSelected 
                              ? 'bg-primary text-primary-foreground border-primary' 
                              : 'bg-background text-foreground border-border hover:bg-accent'
                          }`}
                        >
                          {evLabel}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <select
                    value={val}
                    onChange={(e) => onChange(p.flag, e.target.value)}
                    className={`mt-1 block w-full rounded-md border ${hasError ? 'border-red-500' : 'border-input'} bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
                  >
                    {!val && !p.defaultValue && <option value="" disabled>{t.selectCommand}</option>}
                    {p.enumValues.map(ev => (
                      <option key={ev.value} value={ev.value}>
                        {isArabic ? ev.labelAr : ev.labelEn}
                      </option>
                    ))}
                  </select>
                )
              )}

              {(p.type === 'text' || p.type === 'number' || p.type === 'string') && (
                <input
                  type={p.type === 'number' ? 'number' : 'text'}
                  value={val}
                  onChange={(e) => onChange(p.flag, e.target.value)}
                  placeholder={hint || ''}
                  className={`mt-1 flex h-9 w-full rounded-md border bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 ${
                    hasError ? 'border-red-500' : 'border-input'
                  }`}
                />
              )}

              {hasError && (
                <span className="text-xs text-red-500">{t.requiredField}</span>
              )}
              {p.defaultValue && !isDirty && (
                <span className="text-[10px] text-muted-foreground">
                  {t.defaultLabel}: {p.defaultValue}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
