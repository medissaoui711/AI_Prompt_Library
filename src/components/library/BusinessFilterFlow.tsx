import React, { useState } from 'react';
import {
  Briefcase,
  Sparkles,
  Zap,
  ChevronDown,
  ChevronUp,
  ShieldCheck,

  Target,
  Layers,
  Search,
  Swords,
  Rocket,
  TrendingUp,
  DollarSign,
  BarChart2,
  FileText,
  PieChart,
  Scale,
  Copy,
  Check,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { BUSINESS_SUBCATEGORIES, BUSINESS_STARTER_SHORTCUTS } from '../../data/groups';

interface Props {
  selectedSubcategory: string;
  onSelectSubcategory: (id: string) => void;
  onSelectShortcut: (code: string) => void;
  totalMatches?: number;
}

const subcatIconMap: Record<string, React.ElementType> = {
  Sparkles,
  Target,
  Layers,
  Search,
  Swords,
  Rocket,
  TrendingUp,
  DollarSign,
  BarChart2,
  FileText,
  PieChart,
  Scale,
};


export function BusinessFilterFlow({
  selectedSubcategory,
  onSelectSubcategory,
  onSelectShortcut,
  totalMatches,
}: Props) {
  const { isArabic } = useLanguage();
  const [showTips, setShowTips] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 1500);
  };

  return (
    <div className="bg-card border border-blue-500/30 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-border/60">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold shadow-xs">
            <Briefcase className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <span>{isArabic ? 'مستكشف البيزنس وريادة الأعمال الشامل' : 'Business & Entrepreneurship Suite'}</span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                116 {isArabic ? 'أمر احترافي' : 'prompts'}
              </span>
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {isArabic
                ? 'دراسات الجدوى، نماذج العمل، أبحاث السوق، المنافسين، الإطلاق، النمو، المالية، تحليل البيانات، والتقارير'
                : 'Feasibility studies, business models, market research, competitor analysis, launches, growth, and finance'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {totalMatches !== undefined && (
            <span className="hidden sm:inline-flex text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              {isArabic ? `${totalMatches} أمر متاح` : `${totalMatches} available`}
            </span>
          )}
          <button
            type="button"
            onClick={() => setShowTips(!showTips)}
            className="flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{isArabic ? 'ضوابط التحليل التجاري والمالي' : 'Business Analysis Standards'}</span>
            {showTips ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* Starter Shortcuts Section */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-blue-500" />
            {isArabic ? 'اختصارات بداية سريعة' : 'Quick Starter Shortcuts'}
          </span>
          <span className="text-[11px] text-muted-foreground">
            {isArabic ? 'انقر للبدء بالأمر مباشرة أو نسخه' : 'Click to filter or copy'}
          </span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
          {BUSINESS_STARTER_SHORTCUTS.map((shortcut) => {
            const isCopied = copiedCode === shortcut.code;
            return (
              <div
                key={shortcut.code}
                onClick={() => onSelectShortcut(shortcut.code)}
                className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-accent/50 hover:bg-accent border border-border/80 hover:border-blue-500/40 text-xs text-foreground cursor-pointer transition-all shrink-0 hover:shadow-xs"
              >
                <span className="font-mono text-blue-600 dark:text-blue-400 font-semibold">{shortcut.code}</span>
                <span className="text-muted-foreground hidden sm:inline">•</span>
                <span className="text-muted-foreground group-hover:text-foreground text-[11px] sm:text-xs">
                  {isArabic ? shortcut.labelAr : shortcut.labelEn}
                </span>
                <button
                  type="button"
                  onClick={(e) => handleCopy(shortcut.code, e)}
                  title={isArabic ? 'نسخ الأمر' : 'Copy command'}
                  className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-background/80 transition-colors"
                >
                  {isCopied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subcategory Pills */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {isArabic ? 'التصنيفات الفرعية' : 'Business Subcategories'}
        </span>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {BUSINESS_SUBCATEGORIES.map((subcat) => {
            const isSelected = selectedSubcategory === subcat.id;
            const IconComponent = subcatIconMap[subcat.icon] || Briefcase;


            return (
              <button
                key={subcat.id}
                type="button"
                onClick={() => onSelectSubcategory(subcat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-xs font-semibold'
                    : 'bg-accent/40 text-muted-foreground hover:text-foreground hover:bg-accent border border-border/60 hover:border-border'
                }`}
              >
                <IconComponent className="w-3.5 h-3.5 shrink-0" />
                <span>{isArabic ? subcat.labelAr : subcat.labelEn}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-background/60 text-muted-foreground'
                  }`}
                >
                  {subcat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quality Rules Collapsible */}
      {showTips && (
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-3.5 text-xs space-y-2 animate-in fade-in duration-200">
          <div className="font-bold text-foreground flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>{isArabic ? 'ضوابط التحليل المالي والبيانات في الأوامر' : 'Business & Data Analytical Standards'}</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground leading-relaxed">
            <li>
              {isArabic
                ? 'فصل الافتراضات التقديرية عن الحقائق السوقية المثبتة بوضوح تام.'
                : 'Clearly distinguish estimated assumptions from verified market facts.'}
            </li>
            <li>
              {isArabic
                ? 'توضيح معادلات الحساب (CAC, LTV, ROAS, Margins) ومصادر الأرقام المقترحة.'
                : 'Provide mathematical formulations (CAC, LTV, Margins) and sources for calculations.'}
            </li>
            <li>
              {isArabic
                ? 'تجنب التفاؤل المفرط وتقديم سيناريوهات واقعية ومتحفظة لحماية رأس المال.'
                : 'Avoid unrealistic optimism and provide conservative sensitivity scenarios.'}
            </li>
            <li>
              {isArabic
                ? 'تحويل التحليلات دائماً إلى خطوات تنفيذية ومسؤوليات واضحة ومجدولة زمنياً.'
                : 'Always translate strategic findings into actionable milestone roadmaps.'}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
