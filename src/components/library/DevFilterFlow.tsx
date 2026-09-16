import React, { useState } from 'react';
import {
  Code2,
  Zap,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Target,
  Layout,
  Smartphone,
  Server,
  Layers,
  CheckCircle2,
  TestTube2,
  ShieldAlert,
  FileCode2,
  Rocket,
  Copy,
  Check,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { DEV_SUBCATEGORIES, DEV_STARTER_SHORTCUTS } from '../../data/groups';

interface Props {
  selectedSubcategory: string;
  onSelectSubcategory: (id: string) => void;
  onSelectShortcut: (code: string) => void;
  totalMatches?: number;
}

const subcatIconMap: Record<string, React.ElementType> = {
  Sparkles,
  Target,
  Layout,
  Smartphone,
  Server,
  Layers,
  CheckCircle2,
  TestTube2,
  ShieldAlert,
  FileCode2,
  Rocket,
};

export function DevFilterFlow({
  selectedSubcategory,
  onSelectSubcategory,
  onSelectShortcut,
  totalMatches,
}: Props) {
  const { isArabic } = useLanguage();
  const [showSecurityNotice, setShowSecurityNotice] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 1500);
  };

  return (
    <div className="bg-card border border-sky-500/30 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-border/60">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold shadow-xs">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <span>{isArabic ? 'مستكشف البرمجة وهندسة البرمجيات' : 'Developer & Software Engineering Suite'}</span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                100 {isArabic ? 'أمر احترافي' : 'prompts'}
              </span>
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {isArabic
                ? 'تخطيط المنصات، تطبيقات Web/Android/iOS، قواعد البيانات، مراجعة الكود، الاختبارات، والأمن المعياري'
                : 'Platform architecture, Web/Android/iOS apps, backend APIs, code review, QA tests & security audits'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {totalMatches !== undefined && (
            <span className="hidden sm:inline-flex text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
              {isArabic ? `${totalMatches} أمر متاح` : `${totalMatches} available`}
            </span>
          )}
          <button
            onClick={() => setShowSecurityNotice(!showSecurityNotice)}
            className="flex items-center gap-1 text-xs font-medium text-sky-600 dark:text-sky-400 hover:bg-sky-500/10 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{isArabic ? 'ميثاق الأمان وOWASP' : 'Security & OWASP Notice'}</span>
            {showSecurityNotice ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* Starter Shortcuts Section */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-sky-500" />
            {isArabic ? 'اختصارات بداية المطورين السريعة' : 'Developer Quick Starter Shortcuts'}
          </span>
          <span className="text-[11px] text-muted-foreground">
            {isArabic ? 'انقر للبدء بالأمر مباشرة أو نسخه' : 'Click to filter or copy'}
          </span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
          {DEV_STARTER_SHORTCUTS.map((shortcut) => {
            const isCopied = copiedCode === shortcut.code;
            return (
              <div
                key={shortcut.code}
                className="group shrink-0 flex items-center rounded-lg border border-border bg-muted/40 hover:bg-sky-500/10 hover:border-sky-500/40 text-foreground transition-all text-xs font-medium"
              >
                <button
                  type="button"
                  onClick={() => onSelectShortcut(shortcut.code)}
                  className="flex items-center gap-2 px-3 py-1.5 cursor-pointer text-start"
                  title={shortcut.code}
                >
                  <span>{isArabic ? shortcut.labelAr : shortcut.labelEn}</span>
                  <span className="text-[10px] font-mono text-muted-foreground/80 group-hover:text-sky-500">
                    {shortcut.code}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={(e) => handleCopy(shortcut.code, e)}
                  className="opacity-0 group-hover:opacity-100 p-1 me-1 rounded hover:bg-background/80 transition-opacity cursor-pointer text-muted-foreground hover:text-foreground"
                  title={isArabic ? 'نسخ الأمر' : 'Copy command'}
                  aria-label={isArabic ? 'نسخ الأمر' : 'Copy command'}
                >
                  {isCopied ? (
                    <Check className="w-3 h-3 text-sky-500" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* 11 Subcategories Filter */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {isArabic ? 'التصنيفات البرمجية المتخصصة' : 'Software Engineering Domains'}
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {DEV_SUBCATEGORIES.map((subcat) => {
            const Icon = subcatIconMap[subcat.icon] || Sparkles;
            const isSelected = selectedSubcategory === subcat.id;
            return (
              <button
                key={subcat.id}
                onClick={() => onSelectSubcategory(subcat.id)}
                className={`flex items-center gap-2 p-2.5 rounded-xl border text-start transition-all cursor-pointer text-xs ${
                  isSelected
                    ? 'border-sky-500 bg-sky-500/10 text-foreground font-semibold shadow-xs ring-1 ring-sky-500/30'
                    : 'border-border/70 bg-card hover:bg-accent hover:border-sky-500/30 text-muted-foreground hover:text-foreground'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-sky-500 text-white' : 'bg-muted text-muted-foreground'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 min-w-0 truncate">
                  <div className="truncate">{isArabic ? subcat.labelAr : subcat.labelEn}</div>
                </div>
                {'count' in subcat && (
                  <span className="text-[10px] opacity-70 font-mono">({subcat.count})</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Collapsible Security & Ethical Use Notice */}
      {showSecurityNotice && (
        <div className="p-4 rounded-xl bg-sky-500/5 border border-sky-500/20 text-xs space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="font-semibold text-sky-700 dark:text-sky-400 flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-amber-500" />
            {isArabic ? 'ميثاق أمان الكود والتوافق مع معايير OWASP' : 'Security Compliance & Authorized Scope Disclaimer'}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {isArabic
              ? 'مهم وأساسي: أوامر الأمن والثغرات هنا مخصصة فقط لمراجعة كود تملكه أو لديك تصريح صريح لاختباره دفاعياً. لا ينبغي أن تُستخدم لفحص مواقع أو تطبيقات خارج نطاق التفويض. تغطي الأوامر معايير OWASP 2025 الرئيسية: التحكم في الصلاحيات (Broken Access Control)، سوء الإعداد الأمني، مخاطر سلسلة التوريد البرمجية، فشل التشفير، وحقن البيانات في تطبيقات الويب وواجهات الـ API.'
              : 'Critical security notice: Security and vulnerability review commands are strictly intended for defensive audits on codebases and infrastructure you own or have explicit written authorization to test. Do not target unauthorized third-party systems. Built against OWASP Top 10 standards covering access control, misconfigurations, supply chain integrity, cryptographic posture, and injection defenses.'}
          </p>
          <div className="bg-background/80 rounded-lg p-3 border border-border/80 font-mono text-[11px] text-foreground space-y-1 overflow-x-auto">
            <div className="text-sky-600 dark:text-sky-400 font-semibold mb-1">
              {isArabic ? '💡 صيغة مقترحة لأمر تدقيق أمني دفاعي:' : '💡 Recommended Defensive Security Prompt Format:'}
            </div>
            <div>/security audit &quot;[الصق كود الـ API ومسارات المصادقة]&quot;</div>
            <div className="text-muted-foreground">--scope=authorized-internal-audit</div>
            <div className="text-muted-foreground">--focus=owasp-top-10,auth,data-exposure</div>
          </div>
        </div>
      )}
    </div>
  );
}
