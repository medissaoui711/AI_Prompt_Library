import React, { useState } from 'react';
import { Copy, Download, Sparkles, RotateCcw, Share2, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useToast } from '../../context/ToastContext';

interface Props {
  text: string;
  isValid: boolean;
  onCopy: () => void;
  onDownload: () => void;
  onUseExample: () => void;
  onResetAll: () => void;
  onShareLink?: () => void;
  includeQualityRules: boolean;
  setIncludeQualityRules: (v: boolean) => void;
  includeHeader: boolean;
  setIncludeHeader: (v: boolean) => void;
}

export function PreviewActions({
  text, isValid, onCopy, onDownload, onUseExample, onResetAll, onShareLink,
  includeQualityRules, setIncludeQualityRules,
  includeHeader, setIncludeHeader
}: Props) {
  const { t } = useLanguage();
  const { success, error } = useToast();
  const [isCopying, setIsCopying] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  const handleCopy = async () => {
    if (!isValid || !text) return;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      success(t.commandCopied);
      onCopy(); // trigger hook updates/history
      setIsCopying(true);
      setTimeout(() => setIsCopying(false), 2000);
    } catch (err) {
      error(t.copyFailed);
    }
  };

  const handleDownload = () => {
    if (!isValid || !text) return;
    onDownload();
  };

  const handleShare = () => {
    if (onShareLink) {
      onShareLink();
      setIsSharing(true);
      setTimeout(() => setIsSharing(false), 2000);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4 bg-card border border-border rounded-xl p-4">
        <label className="flex items-center gap-2 text-sm font-medium cursor-pointer">
          <input 
            type="checkbox" 
            checked={includeQualityRules} 
            onChange={e => setIncludeQualityRules(e.target.checked)}
            className="rounded border-input text-primary focus:ring-primary accent-primary"
          />
          {t.includeQualityRules}
        </label>
        <label className="flex items-center gap-2 text-sm font-medium cursor-pointer">
          <input 
            type="checkbox" 
            checked={includeHeader} 
            onChange={e => setIncludeHeader(e.target.checked)}
            className="rounded border-input text-primary focus:ring-primary accent-primary"
          />
          {t.includeHeader}
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={handleCopy}
          disabled={!isValid || !text}
          className="flex-1 min-w-[120px] flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-accent-hover px-4 py-2.5 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isCopying ? <Sparkles className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {isCopying ? t.copied : t.copyCommand}
        </button>

        {onShareLink && (
          <button
            onClick={handleShare}
            className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2.5 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            title={t.sharePrompt}
          >
            {isSharing ? <Check className="h-4 w-4 text-emerald-500" /> : <Share2 className="h-4 w-4" />}
            <span className="sr-only sm:not-sr-only">{isSharing ? (t.copied || 'تم النسخ') : t.sharePrompt}</span>
          </button>
        )}

        <button
          onClick={handleDownload}
          disabled={!isValid || !text}
          className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2.5 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed"
          title={t.downloadCommand}
        >
          <Download className="h-4 w-4" />
          <span className="sr-only sm:not-sr-only">{t.downloadCommand}</span>
        </button>
        <button
          onClick={onUseExample}
          className="flex items-center justify-center gap-2 bg-accent text-foreground border border-border hover:bg-accent/80 px-4 py-2.5 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          title={t.useExample}
        >
          <Sparkles className="h-4 w-4" />
          <span className="sr-only sm:not-sr-only">{t.useExample}</span>
        </button>
        <button
          onClick={onResetAll}
          className="flex items-center justify-center gap-2 bg-accent text-foreground border border-border hover:bg-accent/80 px-4 py-2.5 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          title={t.resetAll}
        >
          <RotateCcw className="h-4 w-4" />
          <span className="sr-only sm:not-sr-only">{t.resetAll}</span>
        </button>
      </div>
    </div>
  );
}
