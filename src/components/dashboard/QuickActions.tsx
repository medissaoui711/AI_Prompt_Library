import React from 'react';
import { PlusCircle, FlaskConical, Sparkles, Library } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useView } from '../../context/ViewContext';

export function QuickActions() {
  const { t } = useLanguage();
  const { setView } = useView();

  const actions = [
    {
      id: 'new',
      label: t.newPrompt,
      icon: PlusCircle,
      view: 'generator' as const,
      primary: true,
    },
    {
      id: 'playground',
      label: t.openPlayground,
      icon: FlaskConical,
      view: 'playground' as const,
      primary: false,
    },
    {
      id: 'generate',
      label: t.generatePrompt,
      icon: Sparkles,
      view: 'generator' as const,
      primary: false,
    },
    {
      id: 'browse',
      label: t.browseLibrary,
      icon: Library,
      view: 'library' as const,
      primary: false,
    },
  ];

  return (
    <section>
      <h2 className="text-lg font-bold text-foreground mb-4">{t.quickActions}</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={() => setView(action.view)}
            className={`flex flex-col items-center justify-center gap-3 rounded-xl border p-6 text-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              action.primary
                ? 'border-transparent bg-primary text-primary-foreground hover:bg-accent-hover shadow-sm hover:shadow-md'
                : 'border-border bg-card text-foreground hover:bg-accent hover:text-accent-foreground shadow-sm hover:shadow-md'
            }`}
          >
            <action.icon className="h-6 w-6" />
            <span className="text-sm font-semibold">{action.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
