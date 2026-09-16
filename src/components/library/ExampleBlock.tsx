import React, { useState } from 'react';
import { Lightbulb, Copy, Sparkles, Maximize2, Check, FileCode2, Zap } from 'lucide-react';
import { highlightSyntax } from '../../utils/syntaxHighlight';
import { useLanguage } from '../../context/LanguageContext';
import { CommandPrompt } from '../../types/prompt';
import { getPromptExamples } from '../../utils/exampleFormatter';

interface ExampleBlockProps {
  example?: string;
  prompt?: CommandPrompt;
  maxLines?: number;
  onCopy?: (text: string) => void;
  onTry?: () => void;
  onExpand?: () => void;
  compact?: boolean;
}

export function ExampleBlock({
  example,
  prompt,
  maxLines = 4,
  onCopy,
  onTry,
  onExpand,
  compact = false,
}: ExampleBlockProps) {
  const { isArabic } = useLanguage();
  const [activeTab, setActiveTab] = useState<'live' | 'template'>('live');
  const [copied, setCopied] = useState(false);

  // Compute template vs live example
  const promptExamples = prompt
    ? getPromptExamples(prompt)
    : {
        template: example || '',
        liveExample: example || '',
        isCustomized: false,
      };

  const currentText = (activeTab === 'live' ? promptExamples.liveExample : promptExamples.template).trim();

  const lines = currentText.split('\n');
  const isTruncated = lines.length > maxLines;
  const displayed = isTruncated
    ? lines.slice(0, maxLines).join('\n') + '\n...'
    : currentText;

  const handleCopyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onCopy) {
      onCopy(currentText);
    } else {
      navigator.clipboard.writeText(currentText);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleTryClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onTry) onTry();
  };

  const handleExpandClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onExpand) onExpand();
  };

  return (
    <div className="rounded-xl border-s-4 border-s-primary bg-muted/40 border border-border/70 p-3.5 my-2.5 transition-all hover:bg-muted/60">
      {/* Header with Mode Switcher (أمر معدل "مثال حي" vs أمر غير معدل "قالب") */}
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div className="flex items-center gap-1 bg-background/80 p-0.5 rounded-lg border border-border/60 shadow-2xs">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab('live');
            }}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
              activeTab === 'live'
                ? 'bg-primary text-primary-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            <Zap className="h-3 w-3 text-amber-300" />
            <span>{isArabic ? 'مثال حي معدّل' : 'Live Example'}</span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab('template');
            }}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
              activeTab === 'template'
                ? 'bg-primary text-primary-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            <FileCode2 className="h-3 w-3" />
            <span>{isArabic ? 'أمر غير معدل (قالب)' : 'Raw Template'}</span>
          </button>
        </div>

        {isTruncated && (
          <span className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded font-mono">
            {lines.length} {isArabic ? 'أسطر' : 'lines'}
          </span>
        )}
      </div>

      {/* Sub-label describing the active mode */}
      <div className="flex items-center gap-1.5 mb-1.5 text-[10.5px] text-muted-foreground font-medium">
        <Lightbulb className="h-3 w-3 text-amber-500 shrink-0" />
        <span>
          {activeTab === 'live'
            ? isArabic
              ? 'مثال واقعي مُعدل ومكتمل المدخلات وجاهز للتطبيق المباشر:'
              : 'Realistic filled command ready to use:'
            : isArabic
              ? 'صيغة الأمر العامة مع المتغيرات بين أقواس [ ] لتخصيصها:'
              : 'Unmodified template syntax with [ ] input placeholders:'}
        </span>
      </div>

      {/* Content */}
      <pre className="font-mono text-xs leading-relaxed whitespace-pre-wrap break-words overflow-x-auto text-foreground/90 bg-background/70 p-2.5 rounded-lg border border-border/50 selection:bg-primary/20 shadow-2xs">
        {highlightSyntax(displayed)}
      </pre>

      {/* Actions */}
      <div className="flex items-center flex-wrap gap-2 mt-3 pt-2 border-t border-border/40 text-xs">
        <button
          type="button"
          onClick={handleCopyClick}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium text-xs bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 cursor-pointer shadow-2xs"
          title={isArabic ? 'نسخ الأمر المعروض' : 'Copy displayed command'}
        >
          {copied ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
          <span>
            {copied
              ? isArabic
                ? 'تم النسخ ✓'
                : 'Copied ✓'
              : isArabic
                ? activeTab === 'live'
                  ? 'نسخ المثال الحي'
                  : 'نسخ القالب'
                : 'Copy'}
          </span>
        </button>

        {onTry && (
          <button
            type="button"
            onClick={handleTryClick}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors focus-visible:outline-none focus-visible:ring-2 cursor-pointer"
            title={isArabic ? 'تجربة في المختبر' : 'Try in Playground'}
          >
            <Sparkles className="h-3 w-3 text-amber-500" />
            <span>{isArabic ? 'تجربة في المختبر' : 'Try'}</span>
          </button>
        )}

        {isTruncated && onExpand && (
          <button
            type="button"
            onClick={handleExpandClick}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none cursor-pointer ms-auto"
            title={isArabic ? 'عرض التفاصيل الكاملة' : 'Show full details'}
          >
            <Maximize2 className="h-3 w-3" />
            <span>{isArabic ? 'الكل' : 'Full'}</span>
          </button>
        )}
      </div>
    </div>
  );
}
