import React, { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { usePrompts } from '../../hooks/usePrompts';
import { useEduFilter } from '../../context/EduFilterContext';
import { PromptFilters, CommandPrompt } from '../../types/prompt';
import { filterPrompts } from '../../utils/promptFilters';
import { LibraryToolbar } from './LibraryToolbar';
import { PromptCard } from './PromptCard';
import { PromptTable } from './PromptTable';
import { CommandDetailsDrawer } from './CommandDetailsDrawer';
import { ExportModal } from './ExportModal';
import { LibraryEmptyState } from './LibraryEmptyState';
import { EduFilterFlow } from './EduFilterFlow';
import { ContentFilterFlow } from './ContentFilterFlow';
import { AdsFilterFlow } from './AdsFilterFlow';
import { CvFilterFlow } from './CvFilterFlow';
import { DevFilterFlow } from './DevFilterFlow';
import { DesignFilterFlow } from './DesignFilterFlow';
import { PROMPT_GROUPS, TASK_TYPES } from '../../data/groups';
import { GraduationCap, Palette, Video, FileText, Megaphone, Code2, PenTool, Search, ChevronLeft, ChevronRight, Sparkles, Filter, Compass } from 'lucide-react';

interface CategoryItem {
  id: string;
  labelAr: string;
  labelEn: string;
  color: string;
  icon: React.ElementType;
}

// Strict 2-column mobile layout with 4 balanced rows:
// صف 1: صناعة المحتوى | تعليمي
// صف 2: تصميم          | إعلانات تجارية
// صف 3: برمجة وتطوير   | سيرة ذاتية
// صف 4: فيديو          | البحث والتحليل
const ORDERED_CATEGORIES: CategoryItem[] = [
  { id: 'content', labelAr: 'صناعة المحتوى', labelEn: 'Content Creation', color: 'bg-teal-500/10 text-teal-500', icon: PenTool },
  { id: 'edu', labelAr: 'تعليمي', labelEn: 'Education', color: 'bg-blue-500/10 text-blue-500', icon: GraduationCap },
  { id: 'design', labelAr: 'تصميم', labelEn: 'Design', color: 'bg-purple-500/10 text-purple-500', icon: Palette },
  { id: 'ads', labelAr: 'إعلانات تجارية', labelEn: 'Commercial Ads', color: 'bg-amber-500/10 text-amber-500', icon: Megaphone },
  { id: 'dev', labelAr: 'برمجة وتطوير', labelEn: 'Dev & Coding', color: 'bg-cyan-500/10 text-cyan-500', icon: Code2 },
  { id: 'cv', labelAr: 'سيرة ذاتية', labelEn: 'CV & Career', color: 'bg-emerald-500/10 text-emerald-500', icon: FileText },
  { id: 'video', labelAr: 'فيديو', labelEn: 'Video Production', color: 'bg-red-500/10 text-red-500', icon: Video },
  { id: 'research', labelAr: 'البحث والتحليل', labelEn: 'Research & Analysis', color: 'bg-indigo-500/10 text-indigo-500', icon: Search },
];

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
  const [isResearchActive, setIsResearchActive] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Synchronize initial filter from URL hash e.g. #library?group=edu or #library?favorites=true
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#library?')) {
        const queryParams = new URLSearchParams(hash.slice(9));
        const groupParam = queryParams.get('group');
        const searchParam = queryParams.get('q');
        const modalParam = queryParams.get('modal');
        const favoritesParam = queryParams.get('favorites');

        if (favoritesParam === 'true') {
          setFilters((prev) => ({ ...prev, onlyFavorites: true, groups: [] }));
          setIsResearchActive(false);
        } else if (groupParam) {
          if (groupParam === 'research') {
            setIsResearchActive(true);
            setFilters((prev) => ({ ...prev, groups: [], onlyFavorites: false }));
          } else if (groupParam === 'marketing') {
            setIsResearchActive(false);
            setFilters((prev) => ({ ...prev, groups: ['ads', 'content'], onlyFavorites: false }));
          } else if (['content', 'edu', 'design', 'video', 'cv', 'dev', 'ads'].includes(groupParam)) {
            setIsResearchActive(false);
            setFilters((prev) => ({ ...prev, groups: [groupParam as any], onlyFavorites: false }));
            if (groupParam === 'edu') setShowEduExplorer(true);
          }
        }

        if (searchParam) {
          setFilters((prev) => ({ ...prev, query: searchParam }));
        }
        if (modalParam) {
          setSelectedPromptId(modalParam);
        }
      } else if (hash === '#library') {
        // Direct click on Library without filters
        setIsResearchActive(false);
        setFilters((prev) => ({ ...prev, groups: [], onlyFavorites: false }));
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Filter prompts
  const filteredPrompts = useMemo(() => {
    let result = filterPrompts(prompts, filters);

    if (isResearchActive) {
      result = result.filter(
        (p) =>
          p.task?.includes('research') ||
          p.subject?.includes('research') ||
          p.outputType === 'analysis' ||
          p.keywords?.some((k) =>
            k.includes('بحث') || k.includes('تحليل') || k.includes('research') || k.includes('analysis')
          )
      );
    }

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
      contentCategory: 'all',
      adsCategory: 'all',
      cvCategory: 'all',
      devCategory: 'all',
      designCategory: 'all',
      onlyFavorites: false,
      sortBy: 'recent',
    });
    setIsResearchActive(false);
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
    (filters.contentCategory && filters.contentCategory !== 'all') ||
    (filters.adsCategory && filters.adsCategory !== 'all') ||
    (filters.cvCategory && filters.cvCategory !== 'all') ||
    (filters.devCategory && filters.devCategory !== 'all') ||
    (filters.designCategory && filters.designCategory !== 'all') ||
    filters.onlyFavorites ||
    hasEduFilter ||
    isResearchActive
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

  const toggleCategory = (categoryId: string) => {
    if (categoryId === 'research') {
      setIsResearchActive((prev) => !prev);
      return;
    }
    toggleGroup(categoryId);
  };

  const isCategorySelected = (categoryId: string) => {
    if (categoryId === 'research') {
      return isResearchActive;
    }
    return filters.groups.includes(categoryId as any);
  };

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'research') {
      return prompts.filter(
        (p) =>
          p.task?.includes('research') ||
          p.subject?.includes('research') ||
          p.outputType === 'analysis' ||
          p.keywords?.some((k) =>
            k.includes('بحث') || k.includes('تحليل') || k.includes('research') || k.includes('analysis')
          )
      ).length;
    }
    return prompts.filter((p) => p.group === categoryId).length;
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-border pb-4 sm:pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{t.libraryTitle}</h1>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              {new Intl.NumberFormat('en-US').format(prompts.length)} {t.promptsCount}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">{t.librarySubtitle}</p>
        </div>

        {/* Clear Stats Card (الرقم أوضح من الوصف) */}
        <div className="flex items-center gap-3 bg-card border border-border/80 px-4 py-2.5 rounded-xl shadow-xs self-start sm:self-auto">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold text-foreground leading-tight">
              {new Intl.NumberFormat('en-US').format(prompts.length)} {isArabic ? 'أمرًا منظمًا' : 'Prompts'}
            </span>
            <span className="text-[11px] text-muted-foreground font-medium">
              {isArabic ? 'اكتشف، خصص، وانسخ' : 'Discover, customize, and copy'}
            </span>
          </div>
        </div>
      </div>

      {/* Category Cards: Strict 2-column on mobile, 4-column on tablet, 8-column on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-2.5 sm:gap-3">
        {ORDERED_CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isSelected = isCategorySelected(cat.id);
          const count = getCategoryCount(cat.id);
          const label = isArabic ? cat.labelAr : cat.labelEn;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => toggleCategory(cat.id)}
              className={`flex items-center gap-2.5 sm:gap-3 p-3 rounded-xl border text-start transition-all cursor-pointer ${
                isSelected
                  ? 'border-primary bg-primary/10 shadow-xs ring-1 ring-primary'
                  : 'border-border bg-card hover:bg-accent hover:border-primary/40'
              }`}
            >
              <div className={`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg ${cat.color}`}>
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-xs sm:text-sm font-semibold text-foreground truncate">
                  {label}
                </span>
                <span className="text-[11px] text-muted-foreground truncate">
                  {count} {t.promptsCount}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Content & Copywriting Explorer Banner */}
      {filters.groups.includes('content') && (
        <div className="animate-in fade-in slide-in-from-top-3 duration-300">
          <ContentFilterFlow
            selectedSubcategory={filters.contentCategory || 'all'}
            onSelectSubcategory={(subcatId) =>
              setFilters((prev) => ({ ...prev, contentCategory: subcatId }))
            }
            onSelectShortcut={(code) =>
              setFilters((prev) => ({ ...prev, query: code }))
            }
            totalMatches={filteredPrompts.length}
          />
        </div>
      )}

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
        viewMode={viewMode}
        onViewModeChange={setViewMode}
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
          {viewMode === 'grid' ? (
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
          ) : (
            <PromptTable
              prompts={paginatedPrompts}
              onSelect={(id) => setSelectedPromptId(id)}
            />
          )}

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

      {/* Command Details Drawer */}
      <CommandDetailsDrawer
        prompt={selectedPrompt}
        isOpen={selectedPromptId !== null}
        onClose={() => setSelectedPromptId(null)}
        onSelectPrompt={(id) => setSelectedPromptId(id)}
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
