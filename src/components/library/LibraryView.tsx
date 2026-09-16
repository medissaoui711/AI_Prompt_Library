import React, { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { usePrompts } from '../../hooks/usePrompts';
import { useEduFilter } from '../../context/EduFilterContext';
import { PromptFilters, CommandPrompt } from '../../types/prompt';
import { filterPrompts } from '../../utils/promptFilters';
import { LibraryToolbar } from './LibraryToolbar';
import { PromptCard } from './PromptCard';
import { PromptModal } from './PromptModal';
import { ExportModal } from './ExportModal';
import { LibraryEmptyState } from './LibraryEmptyState';
import { EduFilterFlow } from './EduFilterFlow';
import { AdsFilterFlow } from './AdsFilterFlow';
import { CvFilterFlow } from './CvFilterFlow';
import { DevFilterFlow } from './DevFilterFlow';
import { DesignFilterFlow } from './DesignFilterFlow';
import { PROMPT_GROUPS, TASK_TYPES } from '../../data/groups';
import { GraduationCap, Palette, Video, FileText, Megaphone, Code2, ChevronLeft, ChevronRight, Sparkles, Filter, Compass } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Megaphone,
  Palette,
  Video,
  FileText,
  Code2,
};

const ITEMS_PER_PAGE = 24;

export function LibraryView() {
  const { t, language } = useLanguage();
  const { prompts } = usePrompts();
  const { filter: eduFilter, hasActiveFilter: hasEduFilter, clearAll: clearEduFilter } = useEduFilter();
  const isArabic = language === 'ar';

  const [filters, setFilters] = useState<PromptFilters>({
    query: '',
    groups: [],
    stages: [],
    subjects: [],
    tasks: [],
    onlyFavorites: false,
    sortBy: 'recent',
  });

  const [showEduExplorer, setShowEduExplorer] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPromptId, setSelectedPromptId] = useState<string | null>(null);
  const [isExportOpen, setIsExportOpen] = useState(false);

  // Synchronize initial filter from URL hash e.g. #library?group=edu
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#library?')) {
        const queryParams = new URLSearchParams(hash.slice(9));
        const groupParam = queryParams.get('group');
        const searchParam = queryParams.get('q');
        const modalParam = queryParams.get('modal');

        if (groupParam && ['edu', 'design', 'video', 'cv', 'dev'].includes(groupParam)) {
          setFilters((prev) => ({ ...prev, groups: [groupParam as any] }));
          if (groupParam === 'edu') setShowEduExplorer(true);
        }
        if (searchParam) {
          setFilters((prev) => ({ ...prev, query: searchParam }));
        }
        if (modalParam) {
          setSelectedPromptId(modalParam);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Filter prompts
  const filteredPrompts = useMemo(() => {
    let result = filterPrompts(prompts, filters);

    if (hasEduFilter) {
      if (eduFilter.stage) {
        result = result.filter(
          (p) =>
            p.education?.stage === eduFilter.stage ||
            p.stage?.includes(eduFilter.stage as any)
        );
      }
      if (eduFilter.audience) {
        result = result.filter((p) =>
          p.education?.audience?.includes(eduFilter.audience!)
        );
      }
      if (eduFilter.subjects.length > 0) {
        result = result.filter(
          (p) =>
            p.education?.subjects?.some((s) => eduFilter.subjects.includes(s)) ||
            p.subject?.some((s) => eduFilter.subjects.includes(s as any))
        );
      }
      if (eduFilter.tasks.length > 0) {
        result = result.filter(
          (p) =>
            p.education?.taskTypes?.some((t) => eduFilter.tasks.includes(t)) ||
            p.task?.some((t) => eduFilter.tasks.includes(t as any))
        );
      }
    }

    return result;
  }, [prompts, filters, eduFilter, hasEduFilter]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, eduFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredPrompts.length / ITEMS_PER_PAGE));
  const paginatedPrompts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPrompts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPrompts, currentPage]);

  const selectedPrompt = useMemo(() => {
    return prompts.find((p) => p.id === selectedPromptId) || null;
  }, [prompts, selectedPromptId]);

  const handleClearFilters = () => {
    setFilters({
      query: '',
      groups: [],
      stages: [],
      subjects: [],
      tasks: [],
      adsCategory: 'all',
      cvCategory: 'all',
      devCategory: 'all',
      designCategory: 'all',
      onlyFavorites: false,
      sortBy: 'recent',
    });
    clearEduFilter();
    if (window.location.hash.startsWith('#library?')) {
      window.location.hash = '#library';
    }
  };

  const hasActiveFilters = Boolean(
    filters.query ||
    filters.groups.length > 0 ||
    filters.stages.length > 0 ||
    filters.subjects.length > 0 ||
    filters.tasks.length > 0 ||
    (filters.adsCategory && filters.adsCategory !== 'all') ||
    (filters.cvCategory && filters.cvCategory !== 'all') ||
    (filters.devCategory && filters.devCategory !== 'all') ||
    (filters.designCategory && filters.designCategory !== 'all') ||
    filters.onlyFavorites ||
    hasEduFilter
  );

  const toggleGroup = (groupId: string) => {
    setFilters((prev) => {
      const isSelected = prev.groups.includes(groupId as any);
      if (isSelected) {
        return { ...prev, groups: prev.groups.filter((g) => g !== groupId) };
      }
      if (groupId === 'edu') setShowEduExplorer(true);
      return { ...prev, groups: [groupId as any] };
    });
  };

  const toggleTask = (taskId: string) => {
    setFilters((prev) => {
      const isSelected = prev.tasks.includes(taskId as any);
      if (isSelected) {
        return { ...prev, tasks: prev.tasks.filter((t) => t !== taskId) };
      }
      return { ...prev, tasks: [...prev.tasks, taskId as any] };
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{t.libraryTitle}</h1>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              {prompts.length} {t.promptsCount}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{t.librarySubtitle}</p>
        </div>

        {/* Total stats breakdown badge */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg border border-border/60">
          <Sparkles className="h-4 w-4 text-primary shrink-0" />
          <span>
            {isArabic
              ? `${prompts.length} أمر ذكاء اصطناعي تفاعلي موثق ومقسّم حسب التخصص`
              : `${prompts.length} Verified Interactive AI Prompts across categories`}
          </span>
        </div>
      </div>

      {/* Category Cards Quick Selection */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {PROMPT_GROUPS.map((group) => {
          const Icon = iconMap[group.icon];
          const isSelected = filters.groups.includes(group.id as any);
          const count = prompts.filter((p) => p.group === group.id).length;

          return (
            <button
              key={group.id}
              onClick={() => toggleGroup(group.id)}
              className={`flex items-center gap-3 p-3.5 rounded-xl border text-start transition-all cursor-pointer ${
                isSelected
                  ? 'border-primary bg-primary/10 shadow-sm ring-1 ring-primary'
                  : 'border-border bg-card hover:bg-accent hover:border-primary/40'
              }`}
            >
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${group.color}`}>
                {Icon && <Icon className="h-5 w-5" />}
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-sm font-semibold text-foreground truncate">
                  {t[group.labelKey as keyof typeof t]}
                </span>
                <span className="text-xs text-muted-foreground">
                  {count} {t.promptsCount}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Edu Explorer Banner & Collapse */}
      {(filters.groups.includes('edu') || showEduExplorer) && (
        <div className="animate-in fade-in slide-in-from-top-3 duration-300">
          <EduFilterFlow
            totalMatches={filteredPrompts.length}
            onSelectShortcut={(query) =>
              setFilters((prev) => ({ ...prev, query }))
            }
          />
        </div>
      )}

      {/* Ads Explorer Banner */}
      {filters.groups.includes('ads') && (
        <div className="animate-in fade-in slide-in-from-top-3 duration-300">
          <AdsFilterFlow
            selectedSubcategory={filters.adsCategory || 'all'}
            onSelectSubcategory={(subcatId) =>
              setFilters((prev) => ({ ...prev, adsCategory: subcatId }))
            }
            onSelectShortcut={(code) =>
              setFilters((prev) => ({ ...prev, query: code }))
            }
            totalMatches={filteredPrompts.length}
          />
        </div>
      )}

      {/* CV Explorer Banner */}
      {filters.groups.includes('cv') && (
        <div className="animate-in fade-in slide-in-from-top-3 duration-300">
          <CvFilterFlow
            selectedSubcategory={filters.cvCategory || 'all'}
            onSelectSubcategory={(subcatId) =>
              setFilters((prev) => ({ ...prev, cvCategory: subcatId }))
            }
            onSelectShortcut={(code) =>
              setFilters((prev) => ({ ...prev, query: code }))
            }
            totalMatches={filteredPrompts.length}
          />
        </div>
      )}

      {/* Dev & Engineering Explorer Banner */}
      {filters.groups.includes('dev') && (
        <div className="animate-in fade-in slide-in-from-top-3 duration-300">
          <DevFilterFlow
            selectedSubcategory={filters.devCategory || 'all'}
            onSelectSubcategory={(subcatId) =>
              setFilters((prev) => ({ ...prev, devCategory: subcatId }))
            }
            onSelectShortcut={(code) =>
              setFilters((prev) => ({ ...prev, query: code }))
            }
            totalMatches={filteredPrompts.length}
          />
        </div>
      )}

      {/* Design & Visual Imagery Explorer Banner */}
      {filters.groups.includes('design') && (
        <div className="animate-in fade-in slide-in-from-top-3 duration-300">
          <DesignFilterFlow
            selectedSubcategory={filters.designCategory || 'all'}
            onSelectSubcategory={(subcatId) =>
              setFilters((prev) => ({ ...prev, designCategory: subcatId }))
            }
            onSelectShortcut={(code) =>
              setFilters((prev) => ({ ...prev, query: code }))
            }
            totalMatches={filteredPrompts.length}
          />
        </div>
      )}

      {/* Toolbar & Filters */}
      <LibraryToolbar
        filters={filters}
        setFilters={setFilters}
        onClear={handleClearFilters}
        onOpenExport={() => setIsExportOpen(true)}
        hasActiveFilters={hasActiveFilters}
        totalResults={filteredPrompts.length}
        totalPrompts={prompts.length}
      />

      {/* Secondary Task Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs scrollbar-hide">
        <span className="inline-flex items-center gap-1 font-medium text-muted-foreground shrink-0 pe-1">
          <Filter className="h-3.5 w-3.5" />
          {isArabic ? 'نوع المهمة:' : 'Task:'}
        </span>
        {TASK_TYPES.map((task) => {
          const isSelected = filters.tasks.includes(task.id as any);
          return (
            <button
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className={`shrink-0 px-2.5 py-1 rounded-md border transition-colors ${
                isSelected
                  ? 'bg-secondary text-secondary-foreground font-medium border-primary/30'
                  : 'bg-card text-muted-foreground border-border hover:bg-accent hover:text-foreground'
              }`}
            >
              {t[task.labelKey as keyof typeof t]}
            </button>
          );
        })}
      </div>

      {/* Prompts Grid */}
      {filteredPrompts.length === 0 ? (
        <LibraryEmptyState
          variant={prompts.length === 0 ? 'empty-library' : 'no-results'}
          onClearFilters={hasActiveFilters ? handleClearFilters : undefined}
        />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {paginatedPrompts.map((prompt) => (
              <PromptCard
                key={prompt.id}
                prompt={prompt}
                onSelect={(id) => setSelectedPromptId(id)}
                onTry={(id) => {
                  window.location.hash = `#playground?cmd=${id}`;
                }}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground">
                {isArabic
                  ? `عرض الصفحة ${currentPage} من أصل ${totalPages} (${filteredPrompts.length} نتيجة)`
                  : `Page ${currentPage} of ${totalPages} (${filteredPrompts.length} results)`}
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-md border border-border bg-card text-xs font-medium text-foreground hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="h-4 w-4 rtl:rotate-0 ltr:rotate-180" />
                  <span>{isArabic ? 'السابق' : 'Previous'}</span>
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNumber = i + 1;
                    if (totalPages > 5 && currentPage > 3) {
                      pageNumber = currentPage - 3 + i;
                      if (pageNumber > totalPages) {
                        pageNumber = totalPages - (4 - i);
                      }
                    }
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        className={`h-8 w-8 rounded-md text-xs font-semibold transition-colors ${
                          currentPage === pageNumber
                            ? 'bg-primary text-primary-foreground'
                            : 'border border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-md border border-border bg-card text-xs font-medium text-foreground hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <span>{isArabic ? 'التالي' : 'Next'}</span>
                  <ChevronLeft className="h-4 w-4 rtl:rotate-0 ltr:rotate-180" />
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Prompt Details Modal */}
      <PromptModal
        prompt={selectedPrompt}
        isOpen={selectedPromptId !== null}
        onClose={() => setSelectedPromptId(null)}
        onTry={(id) => {
          setSelectedPromptId(null);
          window.location.hash = `#playground?cmd=${id}`;
        }}
      />

      {/* Export & Collections Modal */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        prompts={filteredPrompts}
      />
    </div>
  );
}
