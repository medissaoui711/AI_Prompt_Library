import React from 'react';
import { Inbox } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { usePrompts } from '../../hooks/usePrompts';

interface Props {
  variant: 'no-results' | 'empty-library';
  onClearFilters?: () => void;
}

export function LibraryEmptyState({ variant, onClearFilters }: Props) {
  const { t } = useLanguage();
  const { resetLibrary } = usePrompts();

  return (
    <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-card/50 p-12 text-center min-h-[300px] col-span-full">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
        <Inbox className="h-8 w-8 text-muted-foreground" />
      </div>
      
      {variant === 'no-results' ? (
        <>
          <h3 className="text-lg font-semibold text-foreground mb-2">{t.noResults}</h3>
          <p className="text-sm text-muted-foreground max-w-sm mb-6">{t.noResultsHint}</p>
          {onClearFilters && (
            <button
              onClick={onClearFilters}
              className="inline-flex h-9 items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {t.clearFilters}
            </button>
          )}
        </>
      ) : (
        <>
          <h3 className="text-lg font-semibold text-foreground mb-2">{t.emptyLibrary}</h3>
          <p className="text-sm text-muted-foreground max-w-sm mb-6">{t.emptyLibraryHint}</p>
          <button
            onClick={() => resetLibrary()}
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shadow-sm"
          >
            {t.addPrompt}
          </button>
        </>
      )}
    </div>
  );
}
