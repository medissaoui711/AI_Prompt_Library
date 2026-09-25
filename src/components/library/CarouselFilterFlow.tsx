import React, { useState } from 'react';
import {
  Layers,
  Sparkles,
  Eye,
  Camera,
  BarChart3,
  CheckSquare,
  Globe,
  Copy,
  Check,
  Zap,
  Info,
  ChevronDown,
  ChevronUp,
  FileText,
  Sliders,
  Image as ImageIcon
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { CAROUSEL_SUBCATEGORIES, CAROUSEL_STARTER_SHORTCUTS } from '../../data/groups';

interface Props {
  selectedSubcategory: string;
  onSelectSubcategory: (id: string) => void;
  onSelectShortcut: (code: string) => void;
  totalMatches?: number;
}

const subcatIconMap: Record<string, React.ElementType> = {
  Sparkles,
  Eye,
  Camera,
  Layers,
  BarChart3,
  CheckSquare,
  Globe,
};

export function CarouselFilterFlow({
  selectedSubcategory,
  onSelectSubcategory,
  onSelectShortcut,
  totalMatches,
}: Props) {
  const { isArabic } = useLanguage();
  const [showFormulaNotice, setShowFormulaNotice] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 1500);
  };

  return (
    <div className="bg-card border border-rose-500/30 dark:border-rose-500/20 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-border/60">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold shadow-xs">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <span>
                {isArabic
                  ? 'تحليل المراجع البصرية وتحويل الملفات إلى كاروسيل'
                  : 'Visual Reference Analysis & File to Carousel Suite'}
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                44 {isArabic ? 'أمراً معيارياً' : 'commands'}
              </span>
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {isArabic
                ? 'تحليل الستايل، هندسة الصور العكسية، تحويل PDF وتقارير إلى شرائح وإنفوجرافيك، برومبتات Ideogram/Flux، وتدقيق العربية وRTL'
                : 'Style audits, image reverse engineering, PDF/report to carousels, Ideogram & Flux prompts, and Arabic RTL typesetting'}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowFormulaNotice(!showFormulaNotice)}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground bg-muted/60 hover:bg-muted px-2.5 py-1.5 rounded-lg border border-border/60 transition-colors cursor-pointer"
        >
          <Info className="w-3.5 h-3.5 text-rose-500" />
          <span className="hidden sm:inline">
            {isArabic ? 'الصيغة الموحدة والمعاملات' : 'Standard Flags & Syntax'}
          </span>
          {showFormulaNotice ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Expandable Standard Syntax Guide */}
      {showFormulaNotice && (
        <div className="bg-muted/40 rounded-xl p-3.5 border border-border/80 text-xs text-muted-foreground space-y-2.5 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 font-semibold text-foreground">
            <Zap className="w-3.5 h-3.5 text-rose-500" />
            <span>
              {isArabic
                ? 'نظام الأوامر المعياري: Slash Command + Flag-based Prompting'
                : 'Standard Command Format: Slash Command + Flags'}
            </span>
          </div>
          <div className="p-2.5 bg-background rounded-lg font-mono text-[11px] text-foreground border border-border space-y-1">
            <div className="text-rose-600 dark:text-rose-400 font-bold">
              /root-command [الموضوع أو المرجع البصري]
            </div>
            <div className="text-muted-foreground">
              --slides=[6-10] --ratio=[4:5|1:1] --style=[luxury|minimal|tech] --language=[ar|en] --tool=[ideogram|flux]
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600">
                [تحليل مرجعي]
              </span>
              <span>{isArabic ? 'الستايل والألوان والخطوط' : 'Design system & tokens'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600">
                [Prompt بصري]
              </span>
              <span>{isArabic ? 'أمر توليد لـ Ideogram وFlux' : 'Image generation prompt'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-600">
                [Carousel]
              </span>
              <span>{isArabic ? 'شرائح متتابعة ونصوص وهوك' : 'Multi-slide sequence'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-600">
                [Infographic]
              </span>
              <span>{isArabic ? 'هندسة البيانات والمخططات' : 'Charts & data models'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600">
                [مراجعة]
              </span>
              <span>{isArabic ? 'فحص الهوك والاتساق' : 'Pacing & hook review'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-600">
                [RTL]
              </span>
              <span>{isArabic ? 'انسيابية العربية وتوليف الخطوط' : 'Arabic flow & fonts'}</span>
            </div>
          </div>
        </div>
      )}

      {/* Subcategory Pills */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-muted-foreground">
            {isArabic ? 'الأقسام التخصصية الـ 7' : 'The 7 Specialized Suites'}
          </span>
          {totalMatches !== undefined && (
            <span className="text-[11px] text-muted-foreground">
              {totalMatches} {isArabic ? 'أمر مطابق' : 'matches'}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {CAROUSEL_SUBCATEGORIES.map((subcat) => {
            const Icon = subcatIconMap[subcat.icon] || Layers;
            const isSelected = selectedSubcategory === subcat.id;
            const label = isArabic ? subcat.labelAr : subcat.labelEn;

            return (
              <button
                key={subcat.id}
                type="button"
                onClick={() => onSelectSubcategory(subcat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-rose-500 text-white border-rose-500 shadow-xs'
                    : 'bg-background hover:bg-accent border-border text-foreground hover:border-rose-500/40'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-rose-500'}`} />
                <span>{label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {subcat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Starter Shortcuts Grid */}
      <div className="pt-2 border-t border-border/60">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>
              {isArabic
                ? 'اختصارات سريعة للأوامر الأكثر طلباً (انقر للفلترة أو انسخ فوراً):'
                : 'Fast Starter Shortcuts (click to filter or copy):'}
            </span>
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1.5">
          {CAROUSEL_STARTER_SHORTCUTS.map((sc) => {
            const isCopied = copiedCode === sc.code;
            return (
              <div
                key={sc.id}
                onClick={() => onSelectShortcut(sc.code)}
                className="group flex items-center justify-between gap-1 p-2 rounded-lg bg-background hover:bg-rose-500/5 border border-border hover:border-rose-500/40 text-start transition-all cursor-pointer"
              >
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-bold text-foreground group-hover:text-rose-600 dark:group-hover:text-rose-400 truncate">
                    {isArabic ? sc.labelAr : sc.labelEn}
                  </div>
                  <div className="text-[10px] font-mono text-muted-foreground truncate">
                    {sc.code}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={(e) => handleCopy(sc.code, e)}
                  className="opacity-60 group-hover:opacity-100 p-1 hover:bg-rose-500/10 rounded transition-all shrink-0 cursor-pointer"
                  title={isArabic ? 'نسخ كود الأمر' : 'Copy command'}
                >
                  {isCopied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-muted-foreground hover:text-rose-500" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
