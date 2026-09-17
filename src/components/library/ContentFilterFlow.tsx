import React, { useState } from 'react';
import {
  PenTool,
  Zap,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Sparkles,
  Share2,
  Video,
  Briefcase,
  BookOpen,
  Search,
  ShoppingBag,
  Rocket,
  Heart,
  Mail,
  Calendar,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { CONTENT_SUBCATEGORIES, CONTENT_STARTER_SHORTCUTS } from '../../data/groups';

interface Props {
  selectedSubcategory: string;
  onSelectSubcategory: (id: string) => void;
  onSelectShortcut: (code: string) => void;
  totalMatches?: number;
}

const subcatIconMap: Record<string, React.ElementType> = {
  Sparkles,
  Share2,
  Video,
  Briefcase,
  BookOpen,
  Search,
  ShoppingBag,
  Rocket,
  Heart,
  Mail,
  Calendar,
  CheckCircle2,
};

export function ContentFilterFlow({
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
    <div className="bg-card border border-teal-500/30 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-border/60">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold shadow-xs">
            <PenTool className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <span>{isArabic ? 'مستكشف صناعة المحتوى وتوليد النصوص' : 'Content & Copywriting Suite'}</span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                100 {isArabic ? 'أمر احترافي' : 'prompts'}
              </span>
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {isArabic
                ? 'منشورات سوشيال ميديا، مقالات بشرية، سيو، إطلاق تطبيقات، قصص العلامة، ونشرات بريدية'
                : 'Social posts, human articles, SEO, app launches, brand storytelling, and email newsletters'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {totalMatches !== undefined && (
            <span className="hidden sm:inline-flex text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
              {isArabic ? `${totalMatches} أمر متاح` : `${totalMatches} available`}
            </span>
          )}
          <button
            type="button"
            onClick={() => setShowTips(!showTips)}
            className="flex items-center gap-1 text-xs font-medium text-teal-600 dark:text-teal-400 hover:bg-teal-500/10 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{isArabic ? 'قواعد الجودة والمصداقية' : 'Quality & Safety Rules'}</span>
            {showTips ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* Starter Shortcuts Section */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-teal-500" />
            {isArabic ? 'اختصارات بداية سريعة' : 'Quick Starter Shortcuts'}
          </span>
          <span className="text-[11px] text-muted-foreground">
            {isArabic ? 'انقر للبدء بالأمر مباشرة' : 'Click to filter or copy'}
          </span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
          {CONTENT_STARTER_SHORTCUTS.map((shortcut) => {
            const isCopied = copiedCode === shortcut.code;
            return (
              <div
                key={shortcut.code}
                className="group shrink-0 flex items-center rounded-lg border border-border bg-muted/40 hover:bg-teal-500/10 hover:border-teal-500/40 text-foreground transition-all text-xs font-medium"
              >
                <button
                  type="button"
                  onClick={() => onSelectShortcut(shortcut.code)}
                  className="flex items-center gap-2 px-3 py-1.5 cursor-pointer text-start"
                  title={shortcut.code}
                >
                  <span>{isArabic ? shortcut.labelAr : shortcut.labelEn}</span>
                  <span className="text-[10px] font-mono text-muted-foreground/80 group-hover:text-teal-600 dark:group-hover:text-teal-400">
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

      {/* Subcategory Pills */}
      <div className="space-y-2 pt-1">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-semibold uppercase tracking-wider">
            {isArabic ? 'أقسام ومحاور المحتوى (11 قسمًا)' : 'Content Categories (11 Pillars)'}
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {CONTENT_SUBCATEGORIES.map((subcat) => {
            const isSelected = selectedSubcategory === subcat.id;
            const Icon = subcatIconMap[subcat.icon] || PenTool;
            return (
              <button
                key={subcat.id}
                type="button"
                onClick={() => onSelectSubcategory(subcat.id)}
                className={`flex items-center justify-between gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-all text-start cursor-pointer ${
                  isSelected
                    ? 'bg-teal-500 text-white border-teal-600 shadow-xs'
                    : 'bg-muted/40 hover:bg-muted border-border/80 text-foreground hover:border-teal-500/40'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-teal-600 dark:text-teal-400'}`} />
                  <span className="truncate">{isArabic ? subcat.labelAr : subcat.labelEn}</span>
                </div>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full shrink-0 font-mono ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-background/80 text-muted-foreground'
                  }`}
                >
                  {subcat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Collapsible Quality & Safety Guidelines */}
      {showTips && (
        <div className="bg-muted/50 rounded-xl p-3.5 text-xs space-y-2 border border-border/60 text-muted-foreground animate-in fade-in-50 duration-200">
          <div className="font-semibold text-foreground flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span>
              {isArabic
                ? 'مبادئ الجودة والمصداقية لصناعة محتوى مؤثر وآمن'
                : 'Core Quality & Truthfulness Principles'}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1 text-[11px] leading-relaxed">
            <div className="bg-card/70 p-2.5 rounded-lg border border-border/40 space-y-1">
              <span className="font-semibold text-foreground block">
                {isArabic ? '1. حقائق قابلة للتحقق' : '1. Verifiable Facts'}
              </span>
              <p>
                {isArabic
                  ? 'اكتب فقط ما يمكن إثباته واقعيًا. لا تختلق أرقام مبيعات، دراسات غير موجودة، أو شهادات عملاء وهمية.'
                  : 'Stick to provable realities. Never fabricate sales metrics, non-existent studies, or fake reviews.'}
              </p>
            </div>
            <div className="bg-card/70 p-2.5 rounded-lg border border-border/40 space-y-1">
              <span className="font-semibold text-foreground block">
                {isArabic ? '2. لا ادعاءات صحية أو قانونية غير موثقة' : '2. No Unsubstantiated Claims'}
              </span>
              <p>
                {isArabic
                  ? 'تجنب تقديم وعود طبية أو علاجية خارقة، أو توصيات مالية واستثمارية مؤكدة بلا ترخيص ومصادر موثوقة.'
                  : 'Avoid miracle health cures, guaranteed financial gains, or unlicensed legal guarantees.'}
              </p>
            </div>
            <div className="bg-card/70 p-2.5 rounded-lg border border-border/40 space-y-1">
              <span className="font-semibold text-foreground block">
                {isArabic ? '3. أسلوب بشري وطلاقة طبيعية' : '3. Human-First Tone'}
              </span>
              <p>
                {isArabic
                  ? 'احرص على أسلوب محادثة دافئ وسلس يخاطب احتياج القارئ ويبتعد عن العبارات الآلية النمطية وحشو الكلمات.'
                  : 'Write naturally to audience pain points, avoiding rigid robotic templates and awkward keyword stuffing.'}
              </p>
            </div>
            <div className="bg-card/70 p-2.5 rounded-lg border border-border/40 space-y-1">
              <span className="font-semibold text-foreground block">
                {isArabic ? '4. المراجعة والتدقيق قبل النشر' : '4. Pre-Publish Audit'}
              </span>
              <p>
                {isArabic
                  ? 'دائمًا راجع أسماء المنتجات، أرقام التواصل، تفاصيل الباقات، وتواريخ العروض الترويجية لمنع أي التباس.'
                  : 'Always audit names, prices, contact links, and promotion expiry dates before going live.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
