import React from 'react';
import { useEduFilter } from '../../context/EduFilterContext';
import { useLanguage } from '../../context/LanguageContext';
import { StageSelector } from './StageSelector';
import { AudienceSelector } from './AudienceSelector';
import { SubjectChips } from './SubjectChips';
import { TaskChips } from './TaskChips';
import { RotateCcw, Sparkles, Newspaper, Grid, Puzzle, FileSpreadsheet, Eye, Heart, Palette, Calculator, Compass, Smile, Users } from 'lucide-react';

interface Props {
  totalMatches?: number;
  onSelectShortcut?: (query: string) => void;
}

export function EduFilterFlow({ totalMatches, onSelectShortcut }: Props) {
  const { isArabic } = useLanguage();
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
          <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {isArabic ? 'المستكشف التعليمي والجريدة المدرسية' : 'Smart Educational Explorer & Lesson Newspaper'}
            </h3>
            <p className="text-xs text-muted-foreground">
              {isArabic
                ? 'فلترة تفاعلية حسب المرحلة، الدور، المادة، أو ابدأ بتوليد جريدة تعليمية وإنفوجرافيك قابل للطباعة'
                : 'Filter by stage, role, subject, or generate educational newspapers & printable infographics'}
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

      {/* Visual Activities & Newspaper Spotlight Row */}
      <div className="bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-3.5 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-semibold text-foreground">
          <div className="flex items-center gap-2">
            <Newspaper className="w-4 h-4 text-blue-500" />
            <span>{isArabic ? 'حزمة الأنشطة المرئية والجرائد التعليمية للروضة والابتدائي (70 أمراً إنفوجرافيك):' : 'Printable Infographics & Kids Visual Activities (70 Prompts):'}</span>
          </div>
          <span className="text-[11px] text-muted-foreground">
            {isArabic ? 'تصميم إنفوجرافيك قابل للطباعة A4' : 'A4 Printable Infographic Design'}
          </span>
        </div>

        {/* Primary Shortcuts */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => handleShortcutClick('/lesson newspaper')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition shadow-sm cursor-pointer"
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

        {/* Categories Quick Filter Tags */}
        <div className="pt-2 border-t border-blue-500/10 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-muted-foreground text-[11px] font-medium me-1">
            {isArabic ? 'تصفح الأقسام العشرة:' : 'Browse 10 Sections:'}
          </span>
          {[
            { labelAr: 'الجرائد (8)', labelEn: 'Newspapers (8)', query: 'newspaper' },
            { labelAr: 'أوراق العمل (8)', labelEn: 'Worksheets (8)', query: 'worksheet' },
            { labelAr: 'الألعاب والمتاهات (10)', labelEn: 'Games & Mazes (10)', query: 'maze' },
            { labelAr: 'البطاقات والقصص (6)', labelEn: 'Cards & Stories (6)', query: 'flashcards' },
            { labelAr: 'الفن والحركة (8)', labelEn: 'Art & Movement (8)', query: 'craft' },
            { labelAr: 'اللغة والأصوات (6)', labelEn: 'Language & Phonics (6)', query: 'phonics' },
            { labelAr: 'الرياضيات (6)', labelEn: 'Math (6)', query: 'math' },
            { labelAr: 'العلوم (6)', labelEn: 'Science (6)', query: 'science' },
            { labelAr: 'القيم والعادات (6)', labelEn: 'Values & Habits (6)', query: 'habits' },
            { labelAr: 'أنشطة الأسرة (6)', labelEn: 'Family (6)', query: 'parent child' },
          ].map((cat, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleShortcutClick(cat.query)}
              className="px-2 py-0.5 rounded-md bg-muted/60 hover:bg-primary/10 hover:text-primary border border-border/50 text-[11px] font-medium transition cursor-pointer"
            >
              {isArabic ? cat.labelAr : cat.labelEn}
            </button>
          ))}
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
