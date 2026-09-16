import React, { useState } from 'react';
import {
  Megaphone,
  Zap,
  ChevronDown,
  ChevronUp,
  Info,
  Sparkles,
  Target,
  ShoppingBag,
  PenTool,
  Share2,
  Palette,
  Film,
  Users,
  BarChart2,
  Copy,
  Check,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ADS_SUBCATEGORIES, ADS_STARTER_SHORTCUTS } from '../../data/groups';

interface Props {
  selectedSubcategory: string;
  onSelectSubcategory: (id: string) => void;
  onSelectShortcut: (code: string) => void;
  totalMatches?: number;
}

const subcatIconMap: Record<string, React.ElementType> = {
  Sparkles,
  Target,
  ShoppingBag,
  PenTool,
  Share2,
  Palette,
  Film,
  Users,
  BarChart2,
};

export function AdsFilterFlow({
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
    <div className="bg-card border border-amber-500/30 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-border/60">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold shadow-xs">
            <Megaphone className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <span>{isArabic ? 'مستكشف الإعلانات التجارية' : 'Commercial Ads Suite'}</span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                80 {isArabic ? 'أمر احترافي' : 'prompts'}
              </span>
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {isArabic
                ? 'قوالب معيارية للحملات، المنتجات، الكوبي رايتنج، المنصات، الفيديو، والاستهداف'
                : 'Standard modular prompts for campaigns, products, copy, platforms, video & targeting'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {totalMatches !== undefined && (
            <span className="hidden sm:inline-flex text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              {isArabic ? `${totalMatches} أمر متاح` : `${totalMatches} available`}
            </span>
          )}
          <button
            onClick={() => setShowTips(!showTips)}
            className="flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 px-2.5 py-1.5 rounded-lg transition-colors"
          >
            <Info className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{isArabic ? 'معادلة الإعلان الناجح' : 'Winning Ad Formula'}</span>
            {showTips ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* Starter Shortcuts Section */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            {isArabic ? 'اختصارات بداية سريعة' : 'Quick Starter Shortcuts'}
          </span>
          <span className="text-[11px] text-muted-foreground">
            {isArabic ? 'انقر للبدء بالأمر مباشرة' : 'Click to filter or copy'}
          </span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
          {ADS_STARTER_SHORTCUTS.map((shortcut) => {
            const isCopied = copiedCode === shortcut.code;
            return (
              <div
                key={shortcut.code}
                className="group shrink-0 flex items-center rounded-lg border border-border bg-muted/40 hover:bg-amber-500/10 hover:border-amber-500/40 text-foreground transition-all text-xs font-medium"
              >
                <button
                  type="button"
                  onClick={() => onSelectShortcut(shortcut.code)}
                  className="flex items-center gap-2 px-3 py-1.5 cursor-pointer text-start"
                  title={shortcut.code}
                >
                  <span>{isArabic ? shortcut.labelAr : shortcut.labelEn}</span>
                  <span className="text-[10px] font-mono text-muted-foreground/80 group-hover:text-amber-500">
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

      {/* 8 Subcategories Filter */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {isArabic ? 'التصنيفات الفرعية المتخصصة' : 'Specialized Subcategories'}
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {ADS_SUBCATEGORIES.map((subcat) => {
            const Icon = subcatIconMap[subcat.icon] || Sparkles;
            const isSelected = selectedSubcategory === subcat.id;
            return (
              <button
                key={subcat.id}
                onClick={() => onSelectSubcategory(subcat.id)}
                className={`flex items-center gap-2 p-2.5 rounded-xl border text-start transition-all cursor-pointer text-xs ${
                  isSelected
                    ? 'border-amber-500 bg-amber-500/10 text-foreground font-semibold shadow-xs ring-1 ring-amber-500/30'
                    : 'border-border/70 bg-card hover:bg-accent hover:border-amber-500/30 text-muted-foreground hover:text-foreground'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-amber-500 text-white' : 'bg-muted text-muted-foreground'
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

      {/* Collapsible Best Practices Formula */}
      {showTips && (
        <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            {isArabic ? 'معادلة الإعلان التجاري الناجح' : 'The Golden Ad Formula'}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {isArabic
              ? 'الفكرة الأساسية في الإعلانات الجيدة هي: هدف واحد واضح، رسالة مرتبطة بالمنتج والجمهور، Hook قوي في أول ثانيتين، فائدة مباشرة، وCTA مناسب. ولإعلانات المنصات الرقمية خصوصًا، اختبر أكثر من نسخة إبداعية وتكييفها مع موضع الظهور (فيديو عمودي للمحتوى القصير، وعناوين متعددة للبحث).'
              : 'The core of high-converting ads is: one clear objective, resonant audience messaging, a scroll-stopping hook, direct benefits, and a compelling CTA. Always test multiple creative variations per placement.'}
          </p>
          <div className="bg-background/80 rounded-lg p-3 border border-border/80 font-mono text-[11px] text-foreground space-y-1 overflow-x-auto">
            <div className="text-amber-600 dark:text-amber-400 font-semibold mb-1">
              {isArabic ? '💡 مثال متكامل الأركان:' : '💡 Complete Example:'}
            </div>
            <div>/luxurycampaign ads عطر رجالي فاخر</div>
            <div className="text-muted-foreground">--audience=رجال_25_45</div>
            <div className="text-muted-foreground">--goal=purchases</div>
            <div className="text-muted-foreground">--platform=instagram</div>
            <div className="text-muted-foreground">--tone=exclusive</div>
            <div className="text-muted-foreground">--offer=شحن_مجاني</div>
            <div className="text-muted-foreground">--cta=اكتشف_العطر</div>
          </div>
        </div>
      )}
    </div>
  );
}
