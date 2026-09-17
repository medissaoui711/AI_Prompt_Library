import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Inbox } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useDirection } from '../../context/DirectionContext';
import { useView } from '../../context/ViewContext';
import { usePrompts } from '../../hooks/usePrompts';
import { PromptCard } from '../library/PromptCard';
import { CommandDetailsDrawer } from '../library/CommandDetailsDrawer';
import { CommandPrompt } from '../../types/prompt';

export function RecentPrompts() {
  const { t } = useLanguage();
  const { dir } = useDirection();
  const { setView } = useView();
  const { prompts } = usePrompts();
  const [selectedPromptId, setSelectedPromptId] = useState<string | null>(null);

  const recentPrompts = [...prompts]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3);

  const selectedPrompt = prompts.find(p => p.id === selectedPromptId) || null;

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-foreground">{t.recentPrompts}</h2>
        <button
          onClick={() => setView('library')}
          className="group flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1"
        >
          {t.viewAll}
          {dir === 'rtl' ? (
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          ) : (
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          )}
        </button>
      </div>

      {recentPrompts.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-card/50 p-10 text-center min-h-[250px]">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
            <Inbox className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{t.emptyRecent}</h3>
          <p className="text-sm text-muted-foreground max-w-sm mb-6">
            {t.emptyRecentHint}
          </p>
          <button
            onClick={() => setView('library')}
            className="inline-flex h-9 items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t.browseLibrary}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {recentPrompts.map((prompt) => (
            <PromptCard
              key={prompt.id}
              prompt={prompt}
              onSelect={setSelectedPromptId}
              variant="compact"
            />
          ))}
        </div>
      )}
      <CommandDetailsDrawer
        prompt={selectedPrompt}
        isOpen={selectedPromptId !== null}
        onClose={() => setSelectedPromptId(null)}
        onSelectPrompt={setSelectedPromptId}
      />
    </section>
  );
}
