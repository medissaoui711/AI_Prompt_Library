import React, { useState } from 'react';
import {
  TrendingUp,
  Sparkles,
  Zap,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Target,
  Send,
  PhoneCall,
  FileText,
  ShieldAlert,
  RotateCcw,
  CheckCircle2,
  Users,
  LayoutDashboard,
  GraduationCap,
  Copy,
  Check,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SALES_SUBCATEGORIES, SALES_STARTER_SHORTCUTS } from '../../data/groups';

interface Props {
  selectedSubcategory: string;
  onSelectSubcategory: (id: string) => void;
  onSelectShortcut: (code: string) => void;
  totalMatches?: number;
}

const subcatIconMap: Record<string, React.ElementType> = {
  Sparkles,
  Target,
  Send,
  PhoneCall,
  FileText,
  ShieldAlert,
  RotateCcw,
  CheckCircle2,
  Users,
  LayoutDashboard,
  GraduationCap,
};

export function SalesFilterFlow({
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
    <div className="bg-card border border-emerald-500/30 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-border/60">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold shadow-xs">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <span>{isArabic ? 'مستكشف المبيعات وإدارة العملاء المحتملين الشامل' : 'Sales & Lead Management Suite'}</span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                100 {isArabic ? 'أمر احترافي' : 'prompts'}
              </span>
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {isArabic
                ? 'رحلة البيع الكاملة: استراتيجية، وصول، مكالمات، عروض أسعار، اعتراضات، متابعة، إغلاق، احتفاظ، CRM، وتدريب'
                : 'Full sales lifecycle: Strategy, outreach, discovery calls, proposals, objections, follow-ups, closing, retention, CRM, and coaching'}
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
            type="button"
            onClick={() => setShowTips(!showTips)}
            className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{isArabic ? 'فلسفة المبيعات الاستشارية' : 'Sales Philosophy'}</span>
            {showTips ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Quality Rules / Philosophy Dropdown */}
      {showTips && (
        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-3.5 text-xs text-foreground/90 space-y-2 animate-in fade-in duration-200">
          <div className="font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
            <Zap className="w-4 h-4" />
            <span>{isArabic ? 'المبدأ الجوهري لمنظومة المبيعات الحديثة' : 'Core Consultative Sales Principle'}</span>
          </div>
          <p className="leading-relaxed text-muted-foreground">
            {isArabic
              ? 'لا تبدأ الرسالة أو المكالمة بعرض مزاياك فقط؛ ابدأ بمشكلة العميل، اسأل لفهم الاحتياج، ثم اربط الحل بالقيمة والنتائج. وعند وجود اعتراض، لا ترد بسرعة أو تخفّض السعر فوراً؛ استمع، اعترف بالمخاوف، اطرح سؤالاً توضيحياً، ثم قدّم رداً مناسباً واتفق على الخطوة التالية.'
              : 'Never lead with features alone; start with the prospect pain, ask diagnostic questions to unearth needs, then connect your solution to quantifiable value. When facing objections, do not react defensively or drop price immediately: listen, acknowledge, probe with a clarifying question, provide value context, and lock the next step.'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
            <div className="bg-background/80 p-2 rounded-lg border border-border/60">
              <span className="font-bold text-emerald-600 dark:text-emerald-400">1. {isArabic ? 'التشخيص أولاً' : 'Diagnose First'}</span>: {isArabic ? 'الاستماع 70% والحديث 30%' : '70% listening, 30% speaking'}
            </div>
            <div className="bg-background/80 p-2 rounded-lg border border-border/60">
              <span className="font-bold text-emerald-600 dark:text-emerald-400">2. {isArabic ? 'حماية القيمة' : 'Protect Value'}</span>: {isArabic ? 'الخصم مشروط بتقليص النطاق' : 'Discounts require scope trade-offs'}
            </div>
            <div className="bg-background/80 p-2 rounded-lg border border-border/60">
              <span className="font-bold text-emerald-600 dark:text-emerald-400">3. {isArabic ? 'تثبيت الخطوة' : 'Lock Next Step'}</span>: {isArabic ? 'لا تنهِ تواصلاً دون موعد واضح' : 'Every touchpoint ends with a date'}
            </div>
          </div>
        </div>
      )}

      {/* Subcategory Pills */}
      <div>
        <label className="text-xs font-semibold text-muted-foreground block mb-2">
          {isArabic ? 'تصفح حسب مرحلة رحلة البيع:' : 'Browse by Sales Stage:'}
        </label>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {SALES_SUBCATEGORIES.map((subcat) => {
            const isSelected = selectedSubcategory === subcat.id;
            const Icon = subcatIconMap[subcat.icon] || Sparkles;
            const label = isArabic ? subcat.labelAr : subcat.labelEn;

            return (
              <button
                key={subcat.id}
                type="button"
                onClick={() => onSelectSubcategory(subcat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-xs font-semibold'
                    : 'bg-accent/70 hover:bg-accent text-muted-foreground hover:text-foreground border border-border/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-background/80 text-muted-foreground'}`}>
                  {subcat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Starter Shortcuts Grid */}
      <div>
        <label className="text-xs font-semibold text-muted-foreground block mb-2">
          {isArabic ? 'أبرز 12 أمرًا سريعًا للانطلاق الفوري في المبيعات:' : 'Top 12 Sales Launchpad Shortcuts:'}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
          {SALES_STARTER_SHORTCUTS.map((item) => {
            const isCopied = copiedCode === item.code;
            return (
              <div
                key={item.id}
                onClick={() => onSelectShortcut(item.code)}
                className="group flex flex-col justify-between p-2.5 rounded-xl bg-background hover:bg-emerald-500/5 border border-border/70 hover:border-emerald-500/40 transition-all cursor-pointer shadow-2xs"
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-xs font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 truncate">
                    {isArabic ? item.labelAr : item.labelEn}
                  </span>
                  <button
                    type="button"
                    title={isArabic ? 'نسخ الأمر' : 'Copy command'}
                    onClick={(e) => handleCopy(item.code, e)}
                    className="p-1 rounded-md text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {isCopied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
                <code className="text-[11px] font-mono text-emerald-700 dark:text-emerald-300 truncate bg-emerald-500/10 px-1.5 py-0.5 rounded dir-ltr text-left">
                  {item.code}
                </code>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
