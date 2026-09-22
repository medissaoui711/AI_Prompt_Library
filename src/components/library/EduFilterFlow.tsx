import React, { useState } from 'react';
import { useEduFilter } from '../../context/EduFilterContext';
import { useLanguage } from '../../context/LanguageContext';
import { StageSelector } from './StageSelector';
import { AudienceSelector } from './AudienceSelector';
import { SubjectChips } from './SubjectChips';
import { TaskChips } from './TaskChips';
import {
  RotateCcw,
  Sparkles,
  Newspaper,
  Grid,
  Puzzle,
  FileSpreadsheet,
  Heart,
  Palette,
  Calculator,
  Smile,
  Users,
  Calendar,
  FileText,
  CheckSquare,
  Globe,
  Briefcase,
  BarChart2,
  BookOpen,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
} from 'lucide-react';
import { EDU_TEACHER_SUBCATEGORIES, EDU_TEACHER_STARTER_SHORTCUTS } from '../../data/groups';

interface Props {
  selectedEduCategory?: string;
  onSelectEduCategory?: (id: string) => void;
  totalMatches?: number;
  onSelectShortcut?: (query: string) => void;
}

const teacherCategoryIcons: Record<string, React.ElementType> = {
  Sparkles,
  Calendar,
  FileText,
  CheckSquare,
  FileSpreadsheet,
  Newspaper,
  Heart,
  Users,
  Globe,
  Calculator,
  Briefcase,
  BarChart2,
};

export function EduFilterFlow({
  selectedEduCategory = 'all',
  onSelectEduCategory,
  totalMatches,
  onSelectShortcut,
}: Props) {
  const { isArabic } = useLanguage();
  const [showTeacherRules, setShowTeacherRules] = useState(false);
  const {
    filter,
    setStage,
    setAudience,
    toggleSubject,
    toggleTask,
    clearAll,
    clearSubjects,
    clearTasks,
    hasActiveFilter,
    availableAudiences,
  } = useEduFilter();

  const handleShortcutClick = (code: string) => {
    if (onSelectShortcut) {
      onSelectShortcut(code);
    } else {
      window.location.hash = `#playground?q=${encodeURIComponent(code)}`;
    }
  };

  return (
    <div className="bg-card border border-border/80 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {isArabic ? 'نظام أوامر المعلم والمستكشف التعليمي' : 'Teacher Command System & Educational Explorer'}
            </h3>
            <p className="text-xs text-muted-foreground">
              {isArabic
                ? 'أوامر معيارية بالـ Slash Commands والمعاملات (Flags) تغطي التخطيط، التحضير، التقييم، التمايز، والتقارير'
                : 'Standardized slash & flag-based commands for planning, preparation, assessment, differentiation, and reports'}
            </p>
          </div>
        </div>

        {hasActiveFilter && (
          <div className="flex items-center gap-3">
            {totalMatches !== undefined && (
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {isArabic ? `${totalMatches} أمر متاح` : `${totalMatches} commands`}
              </span>
            )}
            <button
              type="button"
              onClick={clearAll}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground font-medium px-2.5 py-1 rounded-lg border border-border hover:bg-muted transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isArabic ? 'إعادة تعيين' : 'Reset'}</span>
            </button>
          </div>
        )}
      </div>

      {/* Teacher Command System: 11 Subcategories Grid */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-foreground flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            {isArabic ? 'تصنيفات نظام أوامر المعلم (11 مساراً ديداكتيكياً):' : 'Teacher Command Categories (11 Domains):'}
          </span>
          <button
            type="button"
            onClick={() => setShowTeacherRules(!showTeacherRules)}
            className="text-[11px] text-blue-500 hover:text-blue-600 flex items-center gap-1 font-medium transition cursor-pointer"
          >
            <ShieldAlert className="w-3 h-3" />
            <span>{isArabic ? 'ميثاق الجودة والمراجعة الإلزامية' : 'Quality Rules & Privacy'}</span>
            {showTeacherRules ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>

        {/* Quality Rule Box */}
        {showTeacherRules && (
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 text-xs text-amber-700 dark:text-amber-300 space-y-1.5 animate-in fade-in duration-200">
            <div className="font-semibold flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              {isArabic ? 'المبدأ التربوي الأساسي وميثاق سلامة البيانات:' : 'Pedagogical Safety & Privacy Charter:'}
            </div>
            <ul className="list-disc list-inside space-y-1 text-[11px] leading-relaxed text-muted-foreground">
              <li>{isArabic ? 'مراجعة المعلم للمخرجات إلزامية دائمًا، خاصة في الامتحانات والوثائق الرسمية.' : 'Teacher review of outputs is strictly required, especially for assessments.'}</li>
              <li>{isArabic ? 'يُمنع استخدام بيانات الطلاب الشخصية أو السرية في النماذج غير المعتمدة.' : 'Do not input private student data or identifiers into unverified tools.'}</li>
              <li>{isArabic ? 'استخدم المعاملات لتخصيص المستوى والمادة والصيغة بدقة، مثل: --grade=3 --subject=arabic --format=word' : 'Use precise flags like --grade=3 --subject=arabic --format=word'}</li>
            </ul>
          </div>
        )}

        {/* Categories Chips */}
        <div className="flex flex-wrap gap-1.5">
          {EDU_TEACHER_SUBCATEGORIES.map((cat) => {
            const Icon = teacherCategoryIcons[cat.icon] || Sparkles;
            const isSelected = selectedEduCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectEduCategory?.(cat.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{isArabic ? cat.labelAr : cat.labelEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Teacher Quick Starter Shortcuts */}
      <div className="bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-cyan-500/5 border border-blue-500/15 rounded-xl p-3 space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-foreground">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>{isArabic ? 'أوامر المعلم السريعة الأكثر استخداماً:' : 'Top Used Teacher Commands:'}</span>
          </div>
          <span className="text-[11px] text-muted-foreground font-mono">
            /root-command [Topic] --flags
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {EDU_TEACHER_STARTER_SHORTCUTS.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleShortcutClick(item.code)}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-card hover:bg-muted border border-border/80 text-foreground rounded-lg transition-colors cursor-pointer shadow-2xs"
            >
              <code className="text-blue-600 dark:text-blue-400 font-mono text-[11px] font-semibold">{item.code}</code>
              <span className="text-[11px] text-muted-foreground">({isArabic ? item.labelAr : item.labelEn})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Visual Activities & Newspaper Spotlight Row */}
      <div className="bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-3.5 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-semibold text-foreground">
          <div className="flex items-center gap-2">
            <Newspaper className="w-4 h-4 text-purple-500" />
            <span>{isArabic ? 'الأنشطة المرئية والجرائد التعليمية للروضة والابتدائي (70 إنفوجرافيك A4):' : 'Printable Infographics & Kids Visual Activities (70 Prompts):'}</span>
          </div>
          <span className="text-[11px] text-muted-foreground">
            {isArabic ? 'تصميم إنفوجرافيك جاهز للطباعة' : 'A4 Printable Infographic Design'}
          </span>
        </div>

        {/* Primary Shortcuts */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => handleShortcutClick('/lesson newspaper')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-xs cursor-pointer"
          >
            <Newspaper className="w-3.5 h-3.5" />
            <span>{isArabic ? 'جريدة الدرس كاملة' : 'Lesson Newspaper'}</span>
          </button>
          <button
            type="button"
            onClick={() => handleShortcutClick('/kindergarten newspaper')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium bg-card hover:bg-muted border border-border text-foreground rounded-lg transition cursor-pointer"
          >
            <Smile className="w-3.5 h-3.5 text-pink-500" />
            <span>{isArabic ? 'جريدة الروضة' : 'Kindergarten Paper'}</span>
          </button>
          <button
            type="button"
            onClick={() => handleShortcutClick('/kindergarten worksheet')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium bg-card hover:bg-muted border border-border text-foreground rounded-lg transition cursor-pointer"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-cyan-500" />
            <span>{isArabic ? 'ورقة عمل روضة' : 'Kindergarten Worksheet'}</span>
          </button>
          <button
            type="button"
            onClick={() => handleShortcutClick('/color and learn')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium bg-card hover:bg-muted border border-border text-foreground rounded-lg transition cursor-pointer"
          >
            <Palette className="w-3.5 h-3.5 text-amber-500" />
            <span>{isArabic ? 'تلوين وتعلم' : 'Color & Learn'}</span>
          </button>
          <button
            type="button"
            onClick={() => handleShortcutClick('/lesson crossword')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium bg-card hover:bg-muted border border-border text-foreground rounded-lg transition cursor-pointer"
          >
            <Grid className="w-3.5 h-3.5 text-emerald-500" />
            <span>{isArabic ? 'كلمات متقاطعة' : 'Crossword'}</span>
          </button>
          <button
            type="button"
            onClick={() => handleShortcutClick('/learning maze')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium bg-card hover:bg-muted border border-border text-foreground rounded-lg transition cursor-pointer"
          >
            <Puzzle className="w-3.5 h-3.5 text-purple-500" />
            <span>{isArabic ? 'متاهة تعليمية' : 'Maze'}</span>
          </button>
          <button
            type="button"
            onClick={() => handleShortcutClick('/number bonds')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium bg-card hover:bg-muted border border-border text-foreground rounded-lg transition cursor-pointer"
          >
            <Calculator className="w-3.5 h-3.5 text-blue-500" />
            <span>{isArabic ? 'روابط الأعداد' : 'Number Bonds'}</span>
          </button>
          <button
            type="button"
            onClick={() => handleShortcutClick('/good habits chart')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium bg-card hover:bg-muted border border-border text-foreground rounded-lg transition cursor-pointer"
          >
            <Heart className="w-3.5 h-3.5 text-rose-500" />
            <span>{isArabic ? 'جدول العادات' : 'Good Habits'}</span>
          </button>
          <button
            type="button"
            onClick={() => handleShortcutClick('/parent child activity')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium bg-card hover:bg-muted border border-border text-foreground rounded-lg transition cursor-pointer"
          >
            <Users className="w-3.5 h-3.5 text-indigo-500" />
            <span>{isArabic ? 'نشاط طفل ووالدين' : 'Parent & Child'}</span>
          </button>
        </div>
      </div>

      {/* Step 1: Stage */}
      <StageSelector
        selectedStage={filter.stage}
        onSelectStage={setStage}
      />

      {/* Step 2: Audience (shows when stage is selected) */}
      {filter.stage && availableAudiences.length > 0 && (
        <AudienceSelector
          selectedAudience={filter.audience}
          onSelectAudience={setAudience}
          availableAudiences={availableAudiences}
        />
      )}

      {/* Step 3: Subjects & Task Types (available anytime or when stage is selected) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-border/40">
        <SubjectChips
          selectedSubjects={filter.subjects}
          onToggleSubject={toggleSubject}
          onClearSubjects={clearSubjects}
        />
        <TaskChips
          selectedTasks={filter.tasks}
          onToggleTask={toggleTask}
          onClearTasks={clearTasks}
        />
      </div>
    </div>
  );
}
