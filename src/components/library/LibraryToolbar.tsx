import React from 'react';
import { Search, Star, X, Download } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PromptFilters } from '../../types/prompt';
import { PROMPT_GROUPS } from '../../data/groups';

interface Props {
  filters: PromptFilters;
  setFilters: React.Dispatch<React.SetStateAction<PromptFilters>>;
  onClear: () => void;
  onOpenExport?: () => void;
  hasActiveFilters: boolean;
  totalResults: number;
  totalPrompts: number;
}

export function LibraryToolbar({ filters, setFilters, onClear, onOpenExport, hasActiveFilters, totalResults, totalPrompts }: Props) {
  const { t } = useLanguage();

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, query: e.target.value }));
  };

  const toggleGroup = (id: string) => {
    setFilters(prev => {
      const isSelected = prev.groups.includes(id as any);
      if (isSelected) {
        return { ...prev, groups: prev.groups.filter(c => c !== id) };
      }
      return { ...prev, groups: [...prev.groups, id as any] };
    });
  };

  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <input
            type="text"
            className="block w-full rounded-md border border-border bg-card py-2 ps-10 pe-10 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary h-10 shadow-sm"
            placeholder={t.searchPlaceholder}
            value={filters.query}
            onChange={handleQueryChange}
            aria-label={t.searchPlaceholder}
          />
          {filters.query && (
            <button
              onClick={() => setFilters(prev => ({ ...prev, query: '' }))}
              className="absolute inset-y-0 end-0 flex items-center pe-3 text-muted-foreground hover:text-foreground focus-visible:outline-none"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Favorites, Export & Sort */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setFilters(prev => ({ ...prev, onlyFavorites: !prev.onlyFavorites }))}
            className={`flex items-center gap-2 h-10 px-3 rounded-md border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              filters.onlyFavorites
                ? 'border-yellow-500 bg-yellow-500/10 text-yellow-600 dark:text-yellow-500'
                : 'border-border bg-card text-foreground hover:bg-accent'
            }`}
            aria-label={t.onlyFavorites}
            title={t.onlyFavorites}
          >
            <Star className={`h-4 w-4 ${filters.onlyFavorites ? 'fill-current' : ''}`} />
            <span className="hidden sm:inline-block">{t.onlyFavorites}</span>
          </button>
          
          {onOpenExport && (
            <button
              onClick={onOpenExport}
              className="flex items-center gap-1.5 h-10 px-3.5 rounded-md border border-border bg-card text-foreground text-sm font-medium hover:bg-accent transition-colors shadow-sm cursor-pointer"
              title={t.exportCollection}
            >
              <Download className="h-4 w-4 text-primary" />
              <span className="hidden sm:inline-block">{t.exportCollection}</span>
            </button>
          )}

          <select
            value={filters.sortBy}
            onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as any }))}
            className="h-10 px-3 rounded-md border border-border bg-card text-sm font-medium focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
            aria-label="Sort"
          >
            <option value="recent">{t.sortRecent || 'Recent'}</option>
            <option value="usage">{t.sortUsage || 'Most Used'}</option>
            <option value="code">Code</option>
          </select>
        </div>
      </div>

      {/* Groups Horizontal Scroll */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide -mb-2">
          <button
            onClick={() => setFilters(prev => ({ ...prev, groups: [] }))}
            className={`shrink-0 h-8 px-3 rounded-full border text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              filters.groups.length === 0
                ? 'border-transparent bg-foreground text-background'
                : 'border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground'
            }`}
          >
            {t.allCategories || 'All'}
          </button>
          {PROMPT_GROUPS.map(group => {
            const isSelected = filters.groups.includes(group.id as any);
            return (
              <button
                key={group.id}
                onClick={() => toggleGroup(group.id)}
                className={`shrink-0 h-8 px-3 rounded-full border text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  isSelected
                    ? 'border-transparent bg-primary text-primary-foreground'
                    : 'border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground'
                }`}
              >
                {t[group.labelKey as keyof typeof t]}
              </button>
            );
          })}
        </div>
        
        <div className="flex items-center gap-3 shrink-0 text-sm text-muted-foreground">
          {hasActiveFilters && (
            <button 
              onClick={onClear}
              className="text-xs hover:text-foreground underline underline-offset-4"
            >
              {t.clearFilters || 'Clear'}
            </button>
          )}
          <span className="hidden md:inline-block border-s border-border ps-3">
            {t.showingResults?.replace('{count}', totalResults.toString()).replace('{total}', totalPrompts.toString()) || `${totalResults} / ${totalPrompts}`}
          </span>
        </div>
      </div>
    </div>
  );
}
