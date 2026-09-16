import React, { useState, useMemo, useEffect } from 'react';
import { PREBUILT_WORKFLOWS } from '../../data/workflows';
import { Workflow, WorkflowCategory } from '../../types/workflow';
import { useLanguage } from '../../context/LanguageContext';
import { useView } from '../../context/ViewContext';
import { WorkflowCard } from './WorkflowCard';
import { WorkflowRunnerView } from './WorkflowRunnerView';
import { 
  GitMerge, Search, Filter, Sparkles, GraduationCap, Palette, Video, Briefcase 
} from 'lucide-react';

export function WorkflowsView() {
  const { t, language } = useLanguage();
  const { setView } = useView();
  const isArabic = language === 'ar';

  const [selectedWorkflowId, setSelectedWorkflowId] = useState<string | null>(null);
  const [initialStepIndex, setInitialStepIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<WorkflowCategory>('all');

  // Handle URL hash changes like #workflows?id=cv-career-leap&step=2
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#workflows?')) {
        const query = new URLSearchParams(hash.slice(11));
        const id = query.get('id');
        const step = query.get('step');
        if (id) {
          setSelectedWorkflowId(id);
          if (step) {
            setInitialStepIndex(Math.max(0, parseInt(step, 10) - 1));
          }
        }
      } else if (hash === '#workflows') {
        setSelectedWorkflowId(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const activeWorkflow = useMemo(() => {
    return PREBUILT_WORKFLOWS.find(w => w.id === selectedWorkflowId) || null;
  }, [selectedWorkflowId]);

  const filteredWorkflows = useMemo(() => {
    return PREBUILT_WORKFLOWS.filter(w => {
      const matchCat = selectedCategory === 'all' || w.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch = !q || 
        w.titleAr.toLowerCase().includes(q) ||
        w.titleEn.toLowerCase().includes(q) ||
        w.descriptionAr.toLowerCase().includes(q) ||
        w.tags.some(tag => tag.toLowerCase().includes(q));

      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleSelectWorkflow = (workflow: Workflow) => {
    setSelectedWorkflowId(workflow.id);
    setInitialStepIndex(0);
    window.location.hash = `#workflows?id=${workflow.id}`;
  };

  const handleBackToList = () => {
    setSelectedWorkflowId(null);
    window.location.hash = '#workflows';
  };

  const handleOpenPlayground = (promptId: string) => {
    window.location.hash = `#playground?cmd=${promptId}`;
    setView('playground');
  };

  if (activeWorkflow) {
    return (
      <WorkflowRunnerView
        workflow={activeWorkflow}
        initialStepIndex={initialStepIndex}
        onBack={handleBackToList}
        onOpenPlayground={handleOpenPlayground}
      />
    );
  }

  const categoryButtons: { id: WorkflowCategory; label: string; icon: React.ElementType }[] = [
    { id: 'all', label: isArabic ? 'جميع المسارات' : 'All Workflows', icon: GitMerge },
    { id: 'cv', label: isArabic ? 'السيرة والتوظيف' : 'Career & CV', icon: Briefcase },
    { id: 'video', label: isArabic ? 'صناعة الفيديو' : 'Video Creation', icon: Video },
    { id: 'design', label: isArabic ? 'التصميم والهوية' : 'Design & Branding', icon: Palette },
    { id: 'edu', label: isArabic ? 'التعليم والدراسة' : 'Education & Study', icon: GraduationCap },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              {t.workflowsTitle}
            </h1>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              {PREBUILT_WORKFLOWS.length} {t.workflowsCount}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            {t.workflowsSubtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg border border-border/60">
          <Sparkles className="h-4 w-4 text-primary shrink-0" />
          <span>
            {isArabic ? 'مسارات ذكية لتنفيذ أهداف كاملة بدقة وسرعة' : 'Smart multi-stage pipelines for complete goals'}
          </span>
        </div>
      </div>

      {/* Filter Toolbar & Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
          {categoryButtons.map(cat => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-card text-muted-foreground border border-border hover:bg-accent hover:text-foreground'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isArabic ? 'ابحث في سلاسل الأوامر...' : 'Search workflows...'}
            className="w-full ps-9 pe-3 py-1.5 rounded-lg border border-border bg-card text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Workflows Grid */}
      {filteredWorkflows.length === 0 ? (
        <div className="text-center py-12 rounded-xl border border-dashed border-border bg-card/40 p-8">
          <p className="text-sm font-semibold text-foreground">{t.noResults}</p>
          <p className="text-xs text-muted-foreground mt-1">{t.noResultsHint}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredWorkflows.map(wf => (
            <WorkflowCard
              key={wf.id}
              workflow={wf}
              onSelect={handleSelectWorkflow}
            />
          ))}
        </div>
      )}
    </div>
  );
}
