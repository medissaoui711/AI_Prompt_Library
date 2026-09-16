import React, { useMemo } from 'react';
import { CompileResult } from '../../utils/commandCompiler';
import { useLanguage } from '../../context/LanguageContext';
import { AlertCircle } from 'lucide-react';

interface Props {
  result: CompileResult | null;
}

export function LivePreview({ result }: Props) {
  const { t } = useLanguage();

  const highlightedLines = useMemo(() => {
    if (!result?.text) return null;
    return result.text.split('\n').map((line, idx) => {
      if (line.startsWith('/')) {
        const parts = line.split(' ');
        const cmd = parts[0];
        const rest = parts.slice(1).join(' ');
        return (
          <span key={idx} className="block">
            <span className="text-blue-500 font-semibold">{cmd}</span>
            {rest && <span className="text-foreground"> {rest}</span>}
          </span>
        );
      } else if (line.startsWith('--')) {
        const eqIdx = line.indexOf('=');
        if (eqIdx !== -1) {
          const flag = line.slice(0, eqIdx);
          const val = line.slice(eqIdx + 1);
          return (
            <span key={idx} className="block">
              <span className="text-amber-500">{flag}</span>
              <span className="text-muted-foreground">=</span>
              <span className="text-green-500">{val}</span>
            </span>
          );
        }
        return <span key={idx} className="block text-amber-500">{line}</span>;
      } else if (line.startsWith('#')) {
        return <span key={idx} className="block text-muted-foreground/70 italic">{line}</span>;
      }
      return <span key={idx} className="block text-foreground">{line}</span>;
    });
  }, [result?.text]);

  if (!result) {
    return (
      <div className="flex-1 flex items-center justify-center border-2 border-dashed border-border rounded-xl bg-card/50 p-8 min-h-[300px]">
        <p className="text-muted-foreground text-sm">{t.previewEmpty}</p>
      </div>
    );
  }

  const { text, missingRequired, isValid } = result;

  return (
    <div className="flex flex-col h-full rounded-xl border border-border bg-card overflow-hidden shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
          {t.livePreview}
          {text.length > 0 && (
            <span className="text-[10px] font-normal text-muted-foreground px-1.5 py-0.5 bg-background rounded border border-border/50">
              {t.charsCount.replace('{count}', text.length.toString())}
            </span>
          )}
        </h3>
      </div>
      
      {!isValid && (
        <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center px-4 py-3 bg-red-500/10 border-b border-red-500/20 text-red-600 dark:text-red-400 text-sm">
          <div className="flex items-center gap-2 font-medium">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{t.missingRequired}:</span>
          </div>
          <div className="flex gap-1 flex-wrap">
            {missingRequired.map(req => (
              <span key={req} className="font-mono text-xs bg-red-500/20 px-1.5 py-0.5 rounded border border-red-500/30">
                {req}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex-1 p-4 overflow-auto bg-background/50 font-mono text-sm leading-relaxed whitespace-pre-wrap break-words min-h-[300px] dir-ltr text-left">
        {text ? highlightedLines : <span className="text-muted-foreground/50">{t.compiledPlaceholder || 'Preview appears here...'}</span>}
      </div>
    </div>
  );
}
