import React, { useEffect, useRef, useState, useMemo } from 'react';
import {
  X,
  Copy,
  Star,
  Check,
  Share2,
  Sliders,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Zap,
  FileCode2,
  HelpCircle,
  Target,
  Terminal,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';
import { CommandPrompt } from '../../types/prompt';
import { useLanguage } from '../../context/LanguageContext';
import { PROMPT_GROUPS } from '../../data/groups';
import { useToast } from '../../context/ToastContext';
import { usePrompts } from '../../hooks/usePrompts';
import { generatePromptShareUrl } from '../../utils/urlSharing';
import { highlightSyntax } from '../../utils/syntaxHighlight';
import { resolveCommandDetails, buildCustomizedCommand } from '../../utils/commandDetails';

interface CommandDetailsDrawerProps {
  prompt: CommandPrompt | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectPrompt?: (id: string) => void;
}

export function CommandDetailsDrawer({
  prompt,
  isOpen,
  onClose,
  onSelectPrompt,
}: CommandDetailsDrawerProps) {
  const { t, language, isArabic } = useLanguage();
  const { success, error } = useToast();
  const { prompts, toggleFavorite, incrementUsage } = usePrompts();

  // Internal language view toggle (defaults to active platform language)
  const [viewLang, setViewLang] = useState<'ar' | 'en'>(language === 'ar' ? 'ar' : 'en');
  const [copiedShare, setCopiedShare] = useState(false);
  const [copiedMain, setCopiedMain] = useState(false);
  const [activeExampleTab, setActiveExampleTab] = useState<'live' | 'template' | 'custom'>('live');

  // Interactive Variables State
  const [isEditingVariables, setIsEditingVariables] = useState(false);
  const [variableValues, setVariableValues] = useState<Record<string, string>>({});

  // Accessibility and Focus Trap refs
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Sync view language when drawer opens or global language changes
  useEffect(() => {
    setViewLang(language === 'ar' ? 'ar' : 'en');
  }, [language, isOpen]);

  // Focus preservation & Restoration
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      document.body.style.overflow = 'hidden';

      // Reset internal edit states on open
      setIsEditingVariables(false);
      setActiveExampleTab('live');

      // Initialize variable values
      if (prompt) {
        const initialVars: Record<string, string> = {};
        const params = prompt.variables || prompt.params || [];
        params.forEach((param) => {
          if (param.defaultValue !== undefined) {
            initialVars[param.key] = String(param.defaultValue);
          } else if (param.default !== undefined) {
            initialVars[param.key] = String(param.default);
          } else {
            initialVars[param.key] = '';
          }
        });
        setVariableValues(initialVars);
      }

      const focusTimer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      return () => {
        document.body.style.overflow = '';
        clearTimeout(focusTimer);
        if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
          previousFocusRef.current.focus();
        }
      };
    }
  }, [isOpen, prompt]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Resolve extended details with robust fallback support
  const details = useMemo(() => {
    if (!prompt) return null;
    return resolveCommandDetails(prompt, prompts, viewLang);
  }, [prompt, prompts, viewLang]);

  // Build customized command when variables change
  const customizedCommand = useMemo(() => {
    if (!prompt) return '';
    return buildCustomizedCommand(prompt, variableValues);
  }, [prompt, variableValues]);

  if (!isOpen || !prompt || !details) return null;

  const groupInfo = PROMPT_GROUPS.find((g) => g.id === prompt.group);
  const hasVariables = details.variables.length > 0;

  // Active command text to copy
  const getActiveTextToCopy = () => {
    if (activeExampleTab === 'custom') return customizedCommand;
    if (activeExampleTab === 'template') return details.examples.template;
    return details.examples.liveExample;
  };

  const handleCopy = async (customText?: string) => {
    try {
      const textToCopy = customText || getActiveTextToCopy();
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopiedMain(true);
      success(t.copied || (isArabic ? 'تم نسخ الأمر بنجاح' : 'Command copied'));
      incrementUsage(prompt.id);
      setTimeout(() => setCopiedMain(false), 2000);
    } catch {
      error(t.copyFailed || (isArabic ? 'فشل النسخ' : 'Failed to copy'));
    }
  };

  const handleShare = () => {
    const url = generatePromptShareUrl({ commandId: prompt.id });
    navigator.clipboard.writeText(url);
    setCopiedShare(true);
    success(t.shareUrlCopied || (isArabic ? 'تم نسخ رابط الأمر' : 'Share link copied'));
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const handleResetVariables = () => {
    const initialVars: Record<string, string> = {};
    details.variables.forEach((param) => {
      initialVars[param.key] = param.defaultValue !== undefined ? String(param.defaultValue) : '';
    });
    setVariableValues(initialVars);
    success(isArabic ? 'تمت إعادة تعيين القيم الافتراضية' : 'Reset to defaults');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
      aria-describedby="drawer-desc"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-xs transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 end-0 flex max-w-full pointer-events-none">
        <div
          ref={drawerRef}
          className={`
            pointer-events-auto w-screen max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl
            bg-card text-card-foreground border-s border-border shadow-2xl flex flex-col h-full
            transform transition-transform duration-200 ease-out
            motion-reduce:transition-none motion-reduce:transform-none
            translate-x-0
          `}
        >
          {/* Header */}
          <div className="flex flex-col gap-3 p-4 sm:p-6 border-b border-border bg-muted/20 shrink-0">
            {/* Top Toolbar: Close, Actions, Lang Toggle */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                {/* Close Button */}
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={onClose}
                  className="p-2 -ms-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
                  aria-label={isArabic ? 'إغلاق التفاصيل' : 'Close Details'}
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Command Code Badge */}
                <span className="font-mono text-sm font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-lg">
                  /{prompt.code}
                </span>

                {/* Category Badge */}
                {groupInfo && (
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold ${groupInfo.color}`}>
                    {t[groupInfo.labelKey as keyof typeof t] || groupInfo.id}
                  </span>
                )}
              </div>

              {/* Header Right Tools: Favorite, Share, Language */}
              <div className="flex items-center gap-1.5 shrink-0">
                {/* Language Toggle */}
                <div className="flex items-center bg-muted border border-border/60 rounded-lg p-0.5 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setViewLang('ar')}
                    className={`px-2 py-0.5 rounded-md transition-colors ${
                      viewLang === 'ar' ? 'bg-card text-foreground shadow-xs' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    العربية
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewLang('en')}
                    className={`px-2 py-0.5 rounded-md transition-colors ${
                      viewLang === 'en' ? 'bg-card text-foreground shadow-xs' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    EN
                  </button>
                </div>

                {/* Share Button */}
                <button
                  type="button"
                  onClick={handleShare}
                  className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  title={isArabic ? 'مشاركة رابط الأمر' : 'Share link'}
                >
                  {copiedShare ? <Check className="h-4 w-4 text-emerald-500" /> : <Share2 className="h-4 w-4" />}
                </button>

                {/* Favorite Toggle Button */}
                <button
                  type="button"
                  onClick={() => toggleFavorite(prompt.id)}
                  className="p-2 rounded-xl text-muted-foreground hover:text-amber-500 hover:bg-accent transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  title={prompt.isFavorite ? (isArabic ? 'إزالة من المفضلة' : 'Remove favorite') : (isArabic ? 'إضافة إلى المفضلة' : 'Add favorite')}
                >
                  <Star className={`h-4 w-4 ${prompt.isFavorite ? 'fill-amber-500 text-amber-500' : ''}`} />
                </button>
              </div>
            </div>

            {/* Title & Description */}
            <div>
              <h2 id="drawer-title" className="text-xl sm:text-2xl font-bold text-foreground">
                {details.name}
              </h2>
              <p id="drawer-desc" className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                {details.description}
              </p>
            </div>

            {/* Output Type Badge */}
            <div className="flex items-center gap-2 pt-1 flex-wrap">
              <span className="text-xs text-muted-foreground font-medium">
                {isArabic ? 'نوع الناتج المولد:' : 'Output Type:'}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold bg-muted text-foreground border border-border/80">
                {details.outputBadgeText}
              </span>
            </div>
          </div>

          {/* Drawer Body (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            {/* 1. ماذا يفعل؟ (What it does) & الهدف (Goal) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* ماذا يفعل؟ */}
              <div className="rounded-xl border border-border/80 bg-muted/30 p-4">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-1.5">
                  <HelpCircle className="h-4 w-4" />
                  <span>{isArabic ? 'ماذا يفعل هذا الأمر؟' : 'What It Does'}</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                  {details.whatItDoes}
                </p>
              </div>

              {/* الهدف */}
              <div className="rounded-xl border border-border/80 bg-muted/30 p-4">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-1.5">
                  <Target className="h-4 w-4" />
                  <span>{isArabic ? 'الهدف المباشر' : 'Goal & Objective'}</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                  {details.goal}
                </p>
              </div>
            </div>

            {/* 2. صيغة الأمر العامة (Syntax) */}
            <section className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <Terminal className="h-4 w-4 text-primary" />
                  <span>{isArabic ? 'صيغة الأمر (Syntax)' : 'Command Syntax'}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(details.syntax)}
                  className="text-xs text-primary hover:underline flex items-center gap-1 cursor-pointer font-medium"
                >
                  <Copy className="h-3 w-3" />
                  <span>{isArabic ? 'نسخ الصيغة' : 'Copy Syntax'}</span>
                </button>
              </div>
              <pre className="p-3 bg-muted/50 rounded-xl text-foreground font-mono text-xs overflow-x-auto border border-border/80 leading-relaxed">
                {highlightSyntax(details.syntax)}
              </pre>
            </section>

            {/* 3. المتغيرات وتخصيص الأمر (Variables & Interactive Editor) */}
            {hasVariables && (
              <section className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    <Sliders className="h-4 w-4 text-primary" />
                    <span>
                      {isArabic ? 'المتغيرات والمدخلات' : 'Variables & Parameters'} ({details.variables.length})
                    </span>
                  </div>

                  {/* Toggle Interactive Customization Mode */}
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditingVariables((prev) => !prev);
                      if (!isEditingVariables) {
                        setActiveExampleTab('custom');
                      }
                    }}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                      isEditingVariables
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border bg-card hover:bg-accent text-foreground'
                    }`}
                  >
                    <Sliders className="h-3.5 w-3.5" />
                    <span>
                      {isEditingVariables
                        ? (isArabic ? 'إغلاق التخصيص' : 'Close Customizer')
                        : (isArabic ? 'تعديل الأمر وتخصيص القيم' : 'Customize Variables')}
                    </span>
                  </button>
                </div>

                {/* If Editing Mode Active: Interactive Input Fields */}
                {isEditingVariables ? (
                  <div className="rounded-xl border border-primary/40 bg-primary/5 p-4 space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between border-b border-primary/20 pb-2">
                      <span className="text-xs font-bold text-foreground">
                        {isArabic ? 'أدخل قيمك الخاصة لتخصيص الأمر فورياً:' : 'Enter custom values to build your command live:'}
                      </span>
                      <button
                        type="button"
                        onClick={handleResetVariables}
                        className="text-[11px] text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer"
                      >
                        <RotateCcw className="h-3 w-3" />
                        <span>{isArabic ? 'إعادة تعيين' : 'Reset'}</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {details.variables.map((param) => {
                        const hint = viewLang === 'ar' ? param.hintAr : param.hintEn;
                        const label = viewLang === 'ar' ? param.labelAr || param.key : param.labelEn || param.key;
                        const val = variableValues[param.key] ?? '';

                        return (
                          <div key={param.key} className="space-y-1">
                            <label className="text-xs font-semibold text-foreground flex items-center justify-between">
                              <span className="font-mono text-primary">--{param.flag}</span>
                              <span className="text-[10px] text-muted-foreground">
                                {param.required ? (isArabic ? 'مطلوب' : 'Required') : (isArabic ? 'اختياري' : 'Optional')}
                              </span>
                            </label>

                            {param.enumValues && param.enumValues.length > 0 ? (
                              <select
                                value={val}
                                onChange={(e) =>
                                  setVariableValues((prev) => ({ ...prev, [param.key]: e.target.value }))
                                }
                                className="w-full h-8 px-2 text-xs rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                              >
                                <option value="">{isArabic ? '-- اختر القيمة --' : '-- Select --'}</option>
                                {param.enumValues.map((item) => (
                                  <option key={item.value} value={item.value}>
                                    {viewLang === 'ar' ? item.labelAr : item.labelEn}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <input
                                type="text"
                                value={val}
                                placeholder={hint || label}
                                onChange={(e) =>
                                  setVariableValues((prev) => ({ ...prev, [param.key]: e.target.value }))
                                }
                                className="w-full h-8 px-2.5 text-xs rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                              />
                            )}
                            {hint && <p className="text-[10px] text-muted-foreground truncate">{hint}</p>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  /* Standard Parameters Table */
                  <div className="overflow-x-auto rounded-xl border border-border bg-card">
                    <table className="w-full text-start text-xs border-collapse">
                      <thead className="bg-muted/50 text-muted-foreground border-b border-border font-semibold">
                        <tr>
                          <th className="px-3 py-2.5 text-start">{isArabic ? 'المتغير' : 'Flag'}</th>
                          <th className="px-3 py-2.5 text-start">{isArabic ? 'النوع' : 'Type'}</th>
                          <th className="px-3 py-2.5 text-start">{isArabic ? 'الإلزام' : 'Required'}</th>
                          <th className="px-3 py-2.5 text-start">{isArabic ? 'الوصف والتلميح' : 'Hint'}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/60">
                        {details.variables.map((param) => (
                          <tr key={param.key} className="hover:bg-muted/20 transition-colors">
                            <td className="px-3 py-2 font-mono font-bold text-primary whitespace-nowrap">
                              {param.isPositional ? `[${param.flag}]` : `--${param.flag}`}
                            </td>
                            <td className="px-3 py-2 text-muted-foreground whitespace-nowrap">
                              {param.type}
                            </td>
                            <td className="px-3 py-2 whitespace-nowrap">
                              {param.required ? (
                                <span className="inline-flex px-1.5 py-0.5 rounded text-[10px] font-semibold bg-danger/10 text-danger">
                                  {isArabic ? 'نعم' : 'Yes'}
                                </span>
                              ) : (
                                <span className="inline-flex px-1.5 py-0.5 rounded text-[10px] font-semibold bg-secondary text-secondary-foreground">
                                  {isArabic ? 'لا' : 'No'}
                                </span>
                              )}
                            </td>
                            <td className="px-3 py-2 text-foreground">
                              {viewLang === 'ar' ? param.hintAr : param.hintEn}
                              {param.enumValues && (
                                <div className="text-[10px] text-muted-foreground font-mono mt-0.5">
                                  [{param.enumValues.map((e) => e.value).join(', ')}]
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            )}

            {/* 4. مثال عملي (Practical Examples: Live vs Template vs Custom) */}
            <section className="space-y-3">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>{isArabic ? 'أمثلة عملية للتطبيق' : 'Practical Examples'}</span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-muted p-0.5 rounded-lg text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => setActiveExampleTab('live')}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      activeExampleTab === 'live'
                        ? 'bg-card text-foreground shadow-xs font-bold'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {isArabic ? 'مثال حي معدل' : 'Live Example'}
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveExampleTab('template')}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      activeExampleTab === 'template'
                        ? 'bg-card text-foreground shadow-xs font-bold'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {isArabic ? 'صيغة القالب' : 'Template'}
                  </button>

                  {isEditingVariables && (
                    <button
                      type="button"
                      onClick={() => setActiveExampleTab('custom')}
                      className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                        activeExampleTab === 'custom'
                          ? 'bg-card text-primary shadow-xs font-bold'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {isArabic ? 'الأمر المخصص' : 'Customized'}
                    </button>
                  )}
                </div>
              </div>

              {/* Code Box */}
              <div className="rounded-xl border border-border bg-card p-4 relative group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">
                    {activeExampleTab === 'custom'
                      ? (isArabic ? 'النص النهائي المحدث وفق متغيراتك:' : 'Live command with custom variables:')
                      : activeExampleTab === 'live'
                      ? (isArabic ? 'مثال واقعي جاهز للتطبيق الفوري في الذكاء الاصطناعي:' : 'Realistic example ready for immediate AI execution:')
                      : (isArabic ? 'صيغة القالب مع خانات المتغيرات [ ]:' : 'Template placeholders with [ ] syntax:')}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleCopy()}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline cursor-pointer"
                  >
                    <Copy className="h-3.5 w-3.5" />
                    <span>{isArabic ? 'نسخ هذا المثال' : 'Copy This'}</span>
                  </button>
                </div>

                <pre className="p-3 bg-muted/50 rounded-lg text-foreground font-mono text-xs whitespace-pre-wrap leading-relaxed overflow-x-auto border border-border/60">
                  {highlightSyntax(getActiveTextToCopy())}
                </pre>
              </div>
            </section>

            {/* 5. خطوات الاستخدام (Steps) */}
            {details.steps && details.steps.length > 0 && (
              <section className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <Layers className="h-4 w-4 text-primary" />
                  <span>{isArabic ? 'خطوات الاستخدام' : 'Steps To Use'}</span>
                </div>
                <ol className="space-y-2">
                  {details.steps.map((step, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl border border-border/80 bg-muted/20 text-xs sm:text-sm text-foreground"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* 6. نصائح وتوجيهات (Tips) */}
            {details.tips && details.tips.length > 0 && (
              <section className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <Lightbulb className="h-4 w-4 text-amber-500" />
                  <span>{isArabic ? 'نصائح لتعزيز النتائج' : 'Pro Tips'}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {details.tips.map((tip, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl border border-border/80 bg-muted/20 text-xs text-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{tip}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 7. تحذيرات (Warnings if any) */}
            {details.warnings && details.warnings.length > 0 && (
              <section className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-danger">
                  <AlertTriangle className="h-4 w-4" />
                  <span>{isArabic ? 'تنبيهات هامة' : 'Warnings'}</span>
                </div>
                <div className="space-y-2">
                  {details.warnings.map((warning, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-3 rounded-xl border border-danger/20 bg-danger/5 text-xs text-foreground"
                    >
                      <AlertTriangle className="h-4 w-4 text-danger shrink-0 mt-0.5" />
                      <span>{warning}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 8. أوامر مرتبطة عند توفرها (Related Commands) */}
            {details.relatedCommands && details.relatedCommands.length > 0 && (
              <section className="space-y-2.5 pt-2 border-t border-border/80">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>{isArabic ? 'أوامر مرتبطة قد تهمك' : 'Related Commands'}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {details.relatedCommands.map((relPrompt) => {
                    const relTitle = viewLang === 'ar' ? relPrompt.titleAr : relPrompt.titleEn;
                    return (
                      <button
                        key={relPrompt.id}
                        type="button"
                        onClick={() => {
                          if (onSelectPrompt) {
                            onSelectPrompt(relPrompt.id);
                          }
                        }}
                        className="flex flex-col text-start p-3 rounded-xl border border-border bg-card hover:bg-accent hover:border-primary/40 transition-all cursor-pointer group"
                      >
                        <span className="font-mono text-xs font-bold text-primary mb-1">
                          /{relPrompt.code}
                        </span>
                        <span className="text-xs font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                          {relTitle}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Sticky Drawer Footer */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-t border-border bg-muted/20 shrink-0 gap-2 flex-wrap">
            {/* Left: Quick Stats / Favorite status */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => toggleFavorite(prompt.id)}
                className={`flex items-center gap-1.5 h-10 px-3.5 rounded-xl border text-xs font-semibold transition-colors cursor-pointer ${
                  prompt.isFavorite
                    ? 'border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-500'
                    : 'border-border bg-card hover:bg-accent text-foreground'
                }`}
              >
                <Star className={`h-4 w-4 ${prompt.isFavorite ? 'fill-current' : ''}`} />
                <span className="hidden sm:inline">
                  {prompt.isFavorite ? (isArabic ? 'في المفضلة' : 'Favorited') : (isArabic ? 'المفضلة' : 'Favorite')}
                </span>
              </button>

              {/* Edit command / Customize variables button */}
              {hasVariables && (
                <button
                  type="button"
                  onClick={() => {
                    setIsEditingVariables((prev) => !prev);
                    if (!isEditingVariables) {
                      setActiveExampleTab('custom');
                    }
                  }}
                  className={`flex items-center gap-1.5 h-10 px-3.5 rounded-xl border text-xs font-semibold transition-colors cursor-pointer ${
                    isEditingVariables
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-card hover:bg-accent text-foreground'
                  }`}
                >
                  <Sliders className="h-4 w-4" />
                  <span>
                    {isEditingVariables
                      ? (isArabic ? 'إلغاء التعديل' : 'Done')
                      : (isArabic ? 'تعديل الأمر' : 'Edit Command')}
                  </span>
                </button>
              )}
            </div>

            {/* Right: Close and Primary Copy Button */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="h-10 px-4 rounded-xl border border-border bg-card hover:bg-accent text-foreground text-xs font-semibold transition-colors cursor-pointer"
              >
                {isArabic ? 'إغلاق' : 'Close'}
              </button>

              <button
                type="button"
                onClick={() => handleCopy()}
                className="flex items-center gap-2 h-10 px-5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-bold shadow-sm transition-colors cursor-pointer"
              >
                {copiedMain ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span>
                  {copiedMain
                    ? (isArabic ? 'تم النسخ!' : 'Copied!')
                    : activeExampleTab === 'custom'
                    ? (isArabic ? 'نسخ الأمر المخصص' : 'Copy Custom Command')
                    : (isArabic ? 'نسخ الأمر' : 'Copy Command')}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
