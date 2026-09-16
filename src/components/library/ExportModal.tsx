import React, { useState } from 'react';
import { CommandPrompt } from '../../types/prompt';
import { useLanguage } from '../../context/LanguageContext';
import { exportPromptsToString, downloadFile, ExportFormat } from '../../utils/exportPrompts';
import { X, Download, Copy, Check, FileCode, FileText, Bot, Sparkles } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  prompts: CommandPrompt[];
}

export function ExportModal({ isOpen, onClose, prompts }: ExportModalProps) {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  const [format, setFormat] = useState<ExportFormat>('markdown');
  const [copied, setCopied] = useState(false);
  const [exported, setExported] = useState(false);

  if (!isOpen) return null;

  const previewContent = exportPromptsToString(
    prompts.slice(0, 10),
    format,
    'AI Prompts Collection',
    language
  );

  const fullContent = exportPromptsToString(
    prompts,
    format,
    'AI Prompts Collection',
    language
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(fullContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const ext = format === 'json' ? 'json' : format === 'markdown' ? 'md' : 'txt';
    const mime = format === 'json' ? 'application/json' : 'text/plain;charset=utf-8';
    downloadFile(fullContent, `prompt-collection-${prompts.length}-${Date.now()}.${ext}`, mime);
    setExported(true);
    setTimeout(() => setExported(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-xl space-y-5 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
              <Download className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">{t.exportCollection}</h3>
              <p className="text-xs text-muted-foreground">
                {isArabic
                  ? `تصدير ${prompts.length} أمراً بصيغ متوافقة مع أدوات الذكاء الاصطناعي المختلفة`
                  : `Export ${prompts.length} prompts in AI-compatible formats`}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Format Selector */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-foreground">
            {t.exportFormat}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <button
              onClick={() => setFormat('markdown')}
              className={`flex flex-col items-start p-3 rounded-xl border text-start transition-all cursor-pointer ${
                format === 'markdown'
                  ? 'border-primary bg-primary/10 ring-1 ring-primary'
                  : 'border-border bg-card hover:bg-accent'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-xs font-bold text-foreground">Markdown (.md)</span>
              </div>
              <span className="text-[11px] text-muted-foreground">
                {isArabic ? 'ملف وثائقي منسق للعرض والقراءة' : 'Formatted documentation'}
              </span>
            </button>

            <button
              onClick={() => setFormat('json')}
              className={`flex flex-col items-start p-3 rounded-xl border text-start transition-all cursor-pointer ${
                format === 'json'
                  ? 'border-primary bg-primary/10 ring-1 ring-primary'
                  : 'border-border bg-card hover:bg-accent'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <FileCode className="h-4 w-4 text-primary" />
                <span className="text-xs font-bold text-foreground">JSON (.json)</span>
              </div>
              <span className="text-[11px] text-muted-foreground">
                {isArabic ? 'بيانات مهيكلة للبرمجة والأدوات' : 'Structured programmatic schema'}
              </span>
            </button>

            <button
              onClick={() => setFormat('system_prompt')}
              className={`flex flex-col items-start p-3 rounded-xl border text-start transition-all cursor-pointer ${
                format === 'system_prompt'
                  ? 'border-primary bg-primary/10 ring-1 ring-primary'
                  : 'border-border bg-card hover:bg-accent'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Bot className="h-4 w-4 text-primary" />
                <span className="text-xs font-bold text-foreground">System Prompt</span>
              </div>
              <span className="text-[11px] text-muted-foreground">
                {isArabic ? 'لصق مباشر في ChatGPT / Claude' : 'For ChatGPT / Claude Projects'}
              </span>
            </button>
          </div>
        </div>

        {/* Live Preview of export content */}
        <div className="space-y-1 flex-1 min-h-0 flex flex-col">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{isArabic ? 'معاينة محتوى التصدير:' : 'Export Preview:'}</span>
            <span className="font-mono text-[11px]">
              {prompts.length > 10 ? (isArabic ? 'عينة من أول 10 أوامر' : 'Sample of first 10') : ''}
            </span>
          </div>
          <pre className="flex-1 p-3.5 rounded-xl bg-muted/60 text-foreground font-mono text-[11px] overflow-y-auto max-h-[180px] whitespace-pre border border-border">
            {previewContent}
          </pre>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border bg-card text-xs font-semibold text-foreground hover:bg-accent transition-colors cursor-pointer"
          >
            {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
            <span>{copied ? t.copied : t.copyToClipboard}</span>
          </button>

          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-colors shadow-sm cursor-pointer"
          >
            {exported ? <Check className="h-4 w-4" /> : <Download className="h-4 w-4" />}
            <span>{exported ? t.exportSuccess : t.downloadPack}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
