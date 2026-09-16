import React from 'react';
import { PenTool } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function GeneratorView() {
  const { t } = useLanguage();
  return (
    <div className="flex h-full flex-col items-center justify-center text-center p-8 bg-card rounded-lg border border-border shadow-sm">
      <PenTool className="h-12 w-12 text-muted-foreground mb-4" />
      <h2 className="text-2xl font-bold text-foreground mb-2">{t.generator}</h2>
      <p className="text-muted-foreground">{t.underConstruction.replace('Phase X', 'Phase 4')}</p>
    </div>
  );
}
