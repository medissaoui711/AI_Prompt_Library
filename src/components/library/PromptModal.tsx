import React, { useEffect, useRef, useState } from 'react';
import { X, Copy, Star, Play, CheckCircle2, Share2, Check, Zap, FileCode2 } from 'lucide-react';
import { CommandPrompt } from '../../types/prompt';
import { useLanguage } from '../../context/LanguageContext';
import { PROMPT_GROUPS } from '../../data/groups';
import { useToast } from '../../context/ToastContext';
import { usePrompts } from '../../hooks/usePrompts';
import { generatePromptShareUrl } from '../../utils/urlSharing';
import { getPromptExamples } from '../../utils/exampleFormatter';
import { highlightSyntax } from '../../utils/syntaxHighlight';

interface Props {
  prompt: CommandPrompt | null;
  isOpen: boolean;
  onClose: () => void;
  onTry?: (id: string) => void;
}

export function PromptModal({ prompt, isOpen, onClose, onTry }: Props) {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';
  const { success, error } = useToast();
  const { toggleFavorite, incrementUsage } = usePrompts();
  const focusRef = useRef<HTMLButtonElement>(null);
  const [langToggle, setLangToggle] = useState<'ar' | 'en'>(language === 'ar' ? 'ar' : 'en');
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = () => {
    if (!prompt) return;
    const url = generatePromptShareUrl({ commandId: prompt.id });
    navigator.clipboard.writeText(url);
    success(t.shareUrlCopied);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        focusRef.current?.focus();
      }, 50);
      return () => {
        document.body.style.overflow = '';
        clearTimeout(timer);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    setLangToggle(language as 'ar' | 'en');
  }, [language, isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen || !prompt) return null;

  const groupInfo = PROMPT_GROUPS.find((c) => c.id === prompt.group);
  const title = langToggle === 'ar' ? prompt.titleAr : prompt.titleEn;
  const description = langToggle === 'ar' ? prompt.descriptionAr : prompt.descriptionEn;

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(prompt.example);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = prompt.example;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      success(t.copied);
      incrementUsage(prompt.id);
    } catch (err) {
      error(t.copyFailed);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Panel */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-card border border-border rounded-2xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-border bg-muted/20 rounded-t-2xl">
          <div className="flex-1 pe-4">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              {groupInfo && (
                <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold ${groupInfo.color}`}>
                  {t[groupInfo.labelKey as keyof typeof t]}
                </span>
              )}
              <span className="font-mono text-lg font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg">
                {prompt.code}
              </span>
              {prompt.outputBadges && prompt.outputBadges.length > 0 ? (
                prompt.outputBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                  >
                    [{badge}]
                  </span>
                ))
              ) : prompt.outputType ? (
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                  {prompt.outputType === 'text' && (isArabic ? '📄 مخرج: [نص إعلاني]' : '📄 Output: [Ad Copy]')}
                  {prompt.outputType === 'image' && (isArabic ? '🎨 مخرج: [تصميم/صورة]' : '🎨 Output: [Visual/Image]')}
                  {prompt.outputType === 'video' && (isArabic ? '🎬 مخرج: [فيديو إعلاني]' : '🎬 Output: [Video Script]')}
                  {prompt.outputType === 'plan' && (isArabic ? '📐 مخرج: [خطة/استراتيجية]' : '📐 Output: [Strategy/Plan]')}
                  {prompt.outputType === 'analysis' && (isArabic ? '📊 مخرج: [تحليل ومراجعة]' : '📊 Output: [Analysis/Audit]')}
                  {prompt.outputType === 'mixed' && (isArabic ? '⚡ مخرج: [حزمة شاملة]' : '⚡ Output: [Full Suite]')}
                </span>
              ) : null}
              <button
                onClick={() => toggleFavorite(prompt.id)}
                className={`p-1.5 rounded-full transition-colors ${
                  prompt.isFavorite 
                    ? 'text-yellow-500 hover:bg-yellow-500/10' 
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                }`}
                aria-label="Toggle favorite"
              >
                <Star className={`h-5 w-5 ${prompt.isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>
            
            <div className="flex items-center gap-4 mb-2">
              <h2 id="modal-title" className="text-2xl font-bold text-foreground">
                {title}
              </h2>
              <div className="flex items-center bg-accent rounded-md p-0.5">
                <button
                  onClick={() => setLangToggle('ar')}
                  className={`px-2 py-1 text-xs font-medium rounded-sm transition-colors ${langToggle === 'ar' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  AR
                </button>
                <button
                  onClick={() => setLangToggle('en')}
                  className={`px-2 py-1 text-xs font-medium rounded-sm transition-colors ${langToggle === 'en' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  EN
                </button>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
          <button
            ref={focusRef}
            onClick={onClose}
            className="p-2 -mr-2 text-muted-foreground hover:bg-accent hover:text-foreground rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shrink-0"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Examples Section: Live Example vs Template */}
          {(() => {
            const examples = getPromptExamples(prompt);
            return (
              <div className="grid grid-cols-1 gap-4">
                {/* 1. Live Example (أمر معدل) */}
                <div className="rounded-xl border border-primary/40 bg-primary/5 p-4 relative">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xs">
                        <Zap className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-foreground">
                          {isArabic ? 'أمر معدل "مثال حي جاهز للتطبيق":' : 'Modified Command (Live Example):'}
                        </h3>
                        <p className="text-[11px] text-muted-foreground">
                          {isArabic ? 'مكتمل المدخلات بقيم واقعية للتجربة المباشرة' : 'Fully filled with realistic parameters for direct use'}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(examples.liveExample);
                        success(isArabic ? 'تم نسخ المثال الحي بنجاح' : 'Live example copied');
                        incrementUsage(prompt.id);
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors cursor-pointer shadow-xs"
                    >
                      <Copy className="h-3.5 w-3.5" />
                      {isArabic ? 'نسخ المثال الحي' : 'Copy Live Example'}
                    </button>
                  </div>

                  <pre className="p-3 bg-background rounded-lg text-foreground font-mono text-xs whitespace-pre-wrap leading-relaxed overflow-x-auto border border-border/60">
                    {highlightSyntax(examples.liveExample)}
                  </pre>
                </div>

                {/* 2. Raw Template (أمر غير معدل) */}
                <div className="rounded-xl border border-border bg-muted/30 p-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted-foreground/20 text-muted-foreground font-bold text-xs">
                        <FileCode2 className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-foreground">
                          {isArabic ? 'أمر غير معدل "صيغة القالب":' : 'Unmodified Command (Template):'}
                        </h3>
                        <p className="text-[11px] text-muted-foreground">
                          {isArabic ? 'الصيغة العامة مع المتغيرات بين أقواس [ ]' : 'General syntax with [ ] input placeholders'}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(examples.template);
                        success(isArabic ? 'تم نسخ قالب الأمر بنجاح' : 'Template copied');
                        incrementUsage(prompt.id);
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg transition-colors cursor-pointer"
                    >
                      <Copy className="h-3.5 w-3.5" />
                      {isArabic ? 'نسخ القالب' : 'Copy Template'}
                    </button>
                  </div>

                  <pre className="p-3 bg-background rounded-lg text-foreground font-mono text-xs whitespace-pre-wrap leading-relaxed overflow-x-auto border border-border/60">
                    {highlightSyntax(examples.template)}
                  </pre>
                </div>
              </div>
            );
          })()}

          {/* Parameters Table */}
          {prompt.params && prompt.params.length > 0 && (
            <section>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
                Parameters
              </h3>
              <div className="overflow-x-auto border border-border rounded-xl">
                <table className="w-full text-sm text-start">
                  <thead className="bg-muted/50 text-muted-foreground border-b border-border">
                    <tr>
                      <th className="px-4 py-3 font-semibold w-[20%]">{t.paramFlag}</th>
                      <th className="px-4 py-3 font-semibold w-[15%]">{t.paramType}</th>
                      <th className="px-4 py-3 font-semibold w-[15%]">{t.paramRequired}</th>
                      <th className="px-4 py-3 font-semibold w-[15%]">{t.paramDefault}</th>
                      <th className="px-4 py-3 font-semibold w-[35%]">{t.paramHint}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {prompt.params.map((param, idx) => (
                      <tr key={idx} className="hover:bg-muted/20 transition-colors">
                        <td className="px-4 py-3 font-mono font-semibold text-primary">{param.isPositional ? `[${param.flag}]` : `--${param.flag}`}</td>
                        <td className="px-4 py-3 text-muted-foreground">{param.type}</td>
                        <td className="px-4 py-3">
                          {param.required ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-danger/10 text-danger">Yes</span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-secondary text-secondary-foreground">No</span>
                          )}
                        </td>
                        <td className="px-4 py-3 font-mono text-muted-foreground">
                          {param.defaultValue !== undefined ? String(param.defaultValue) : '-'}
                        </td>
                        <td className="px-4 py-3 text-foreground">
                          {langToggle === 'ar' ? param.hintAr : param.hintEn}
                          {param.enumValues && (
                            <div className="mt-1 text-xs text-muted-foreground font-mono">
                              [{param.enumValues.map(e => e.value).join(', ')}]
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Quality Rules */}
          {prompt.qualityRules && prompt.qualityRules.length > 0 && (
            <section>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
                {t.qualityRules}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {prompt.qualityRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-accent/50 rounded-lg p-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border bg-muted/10 rounded-b-2xl">
          <div className="text-xs text-muted-foreground">
            {prompt.usageCount} {t.usageCount.replace('Uses', '').trim()}
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-end">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-foreground bg-secondary hover:bg-secondary/80 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 cursor-pointer"
              title={t.sharePrompt}
            >
              {copiedShare ? <Check className="h-4 w-4 text-emerald-500" /> : <Share2 className="h-4 w-4" />}
              <span>{copiedShare ? (t.copied || 'تم النسخ') : t.sharePrompt}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-foreground bg-secondary hover:bg-secondary/80 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2"
            >
              {isArabic ? 'إغلاق' : 'Close'}
            </button>
            {onTry && (
              <button
                onClick={() => { onClose(); onTry(prompt.id); }}
                className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2"
              >
                <Play className="h-4 w-4" />
                {t.tryInPlayground}
              </button>
            )}
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-6 py-2 text-sm font-medium text-primary-foreground bg-primary hover:bg-accent-hover rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 shadow-sm"
            >
              <Copy className="h-4 w-4" />
              {t.copyExample}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
