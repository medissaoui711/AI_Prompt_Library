import React, { useState } from 'react';
import {
  FileText,
  Zap,
  ChevronDown,
  ChevronUp,
  Info,
  Sparkles,
  Target,
  Layout,
  ListChecks,
  CheckSquare,
  Share2,
  Mail,
  Compass,
  Globe,
  Crown,
  Copy,
  Check,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { CV_SUBCATEGORIES, CV_STARTER_SHORTCUTS } from '../../data/groups';

interface Props {
  selectedSubcategory: string;
  onSelectSubcategory: (id: string) => void;
  onSelectShortcut: (code: string) => void;
  totalMatches?: number;
}

const subcatIconMap: Record<string, React.ElementType> = {
  Sparkles,
  FileText,
  Layout,
  ListChecks,
  Target,
  CheckSquare,
  Share2,
  Mail,
  Compass,
  Globe,
  Crown,
};

export function CvFilterFlow({
  selectedSubcategory,
  onSelectSubcategory,
  onSelectShortcut,
  totalMatches,
}: Props) {
  const { isArabic } = useLanguage();
  const [showAtsGuide, setShowAtsGuide] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 1500);
  };

  return (
    <div className="bg-card border border-emerald-500/30 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-border/60">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold shadow-xs">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <span>{isArabic ? 'مستكشف السيرة الذاتية والتوظيف' : 'CV, Resume & Recruitment Suite'}</span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                100 {isArabic ? 'أمر احترافي' : 'prompts'}
              </span>
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {isArabic
                ? 'قوالب متوافقة مع ATS، مواءمة وظيفية، لينكدإن، خطابات تقديم، ومحاكاة مقابلات'
                : 'ATS-optimized templates, job matching, LinkedIn profiles, cover letters & interview coaching'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {totalMatches !== undefined && (
            <span className="hidden sm:inline-flex text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              {isArabic ? `${totalMatches} أمر متاح` : `${totalMatches} available`}
            </span>
          )}
          <button
            onClick={() => setShowAtsGuide(!showAtsGuide)}
            className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{isArabic ? 'دليل توافق الـ ATS' : 'ATS Compliance Guide'}</span>
            {showAtsGuide ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* Starter Shortcuts Section */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-emerald-500" />
            {isArabic ? 'اختصارات بداية سريعة' : 'Quick Starter Shortcuts'}
          </span>
          <span className="text-[11px] text-muted-foreground">
            {isArabic ? 'انقر للبدء بالأمر مباشرة' : 'Click to filter or copy'}
          </span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
          {CV_STARTER_SHORTCUTS.map((shortcut) => {
            const isCopied = copiedCode === shortcut.code;
            return (
              <div
                key={shortcut.code}
                className="group shrink-0 flex items-center rounded-lg border border-border bg-muted/40 hover:bg-emerald-500/10 hover:border-emerald-500/40 text-foreground transition-all text-xs font-medium"
              >
                <button
                  type="button"
                  onClick={() => onSelectShortcut(shortcut.code)}
                  className="flex items-center gap-2 px-3 py-1.5 cursor-pointer text-start"
                  title={shortcut.code}
                >
                  <span>{isArabic ? shortcut.labelAr : shortcut.labelEn}</span>
                  <span className="text-[10px] font-mono text-muted-foreground/80 group-hover:text-emerald-500">
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
                    <Check className="w-3 h-3 text-emerald-500" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* 10 Subcategories Filter */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {isArabic ? 'التصنيفات الفرعية المتخصصة' : 'Specialized Subcategories'}
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {CV_SUBCATEGORIES.map((subcat) => {
            const Icon = subcatIconMap[subcat.icon] || Sparkles;
            const isSelected = selectedSubcategory === subcat.id;
            return (
              <button
                key={subcat.id}
                onClick={() => onSelectSubcategory(subcat.id)}
                className={`flex items-center gap-2 p-2.5 rounded-xl border text-start transition-all cursor-pointer text-xs ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-500/10 text-foreground font-semibold shadow-xs ring-1 ring-emerald-500/30'
                    : 'border-border/70 bg-card hover:bg-accent hover:border-emerald-500/30 text-muted-foreground hover:text-foreground'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-emerald-500 text-white' : 'bg-muted text-muted-foreground'
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

      {/* Collapsible ATS Rules & Best Practices */}
      {showAtsGuide && (
        <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            {isArabic ? 'إرشادات التوافق مع أنظمة التوظيف (ATS Compliance)' : 'ATS Compliance & Best Practices'}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {isArabic
              ? 'تنبيه مهني مهم: لا نعد بأن أي ملف "يضمن" القبول بنسبة 100% في أنظمة الـ ATS، بل نوفر قوالب مهيأة لتوافق أفضل وأعلى قابلية للقراءة. القواعد الذهبية تشمل: تصميم أحادي العمود (Single Column)، عناوين أقسام قياسية، خطوط نظام سهلة القراءة، تجنب الجداول والأيقونات والصور في نقل المعلومات الجوهرية، ومطابقة الكلمات المفتاحية مع نص الإعلان. يُفضَّل ملف DOCX إن لم يحدد الإعلان صيغة أخرى، بينما PDF ينبغي أن يكون نصياً نقياً قابلاً للتحديد والنسخ وليس صورة ممسوحة ضوئياً.'
              : 'Professional notice: No template guarantees 100% ATS passing; our templates are optimized for maximum parser readability. Standard rules: single-column layout, standard section headings, clear legible typography, zero tables or graphics for critical data, and job-specific keyword tailoring. DOCX is often preferred unless PDF is requested, and PDF must be selectable live text, never a flat scanned image.'}
          </p>
          <div className="bg-background/80 rounded-lg p-3 border border-border/80 font-mono text-[11px] text-foreground space-y-1 overflow-x-auto">
            <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
              {isArabic ? '💡 صيغة مقترحة لأمر السيرة المتوافقة:' : '💡 Recommended ATS Prompt Format:'}
            </div>
            <div>/ats cv &quot;مهندس سحابي أول&quot;</div>
            <div className="text-muted-foreground">--experience=senior</div>
            <div className="text-muted-foreground">--output_format=docx_ready</div>
            <div className="text-muted-foreground">--skills=&quot;AWS, Kubernetes, Terraform, CI/CD&quot;</div>
            <div className="text-muted-foreground">--language=ar</div>
          </div>
        </div>
      )}
    </div>
  );
}
