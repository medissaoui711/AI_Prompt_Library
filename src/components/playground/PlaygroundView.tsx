import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { usePrompts } from '../../hooks/usePrompts';
import { useCommandBuilder } from '../../hooks/useCommandBuilder';
import { CommandSelector } from './CommandSelector';
import { CommandSummary } from './CommandSummary';
import { PositionalFields } from './PositionalFields';
import { OptionFields } from './OptionFields';
import { LivePreview } from './LivePreview';
import { PreviewActions } from './PreviewActions';
import { BuilderHistory, HistoryItem } from './BuilderHistory';
import { Wand2 } from 'lucide-react';
import { useView } from '../../context/ViewContext';
import { generatePromptShareUrl } from '../../utils/urlSharing';
import { PromptModal } from '../library/PromptModal';

export function PlaygroundView() {
  const { t, language } = useLanguage();
  const { prompts, toggleFavorite, incrementUsage } = usePrompts();
  const { setView } = useView();

  const [initialCmdId, setInitialCmdId] = useState<string | null>(null);
  const builder = useCommandBuilder(initialCmdId, language);

  // Read URL hash on mount & changes to pre-select command or load from example
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.includes('playground')) {
        const queryString = hash.includes('?') ? hash.split('?')[1] : '';
        const params = new URLSearchParams(queryString);
        const cmdId = params.get('cmd');
        const fromExample = params.get('fromExample') === '1';

        if (cmdId) {
          const cmd = prompts.find(p => p.id === cmdId);
          if (cmd) {
            builder.setCommand(cmd);
            if (fromExample) {
              setTimeout(() => {
                builder.loadFromExample();
              }, 50);
            }
          }
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [prompts, builder.setCommand, builder.loadFromExample]);
  
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  const handleShareLink = () => {
    if (!builder.command) return;
    const url = generatePromptShareUrl({
      commandId: builder.command.id,
      positionalValues: builder.positionalValues,
      optionValues: builder.optionValues,
      includeQualityRules: builder.includeQualityRules,
      includeHeader: builder.includeHeader
    });
    navigator.clipboard.writeText(url);
  };

  // Load history on mount
  useEffect(() => {
    const saved = localStorage.getItem('ai-prompt-lib:builder:history');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  const handleCopy = () => {
    if (builder.command && builder.compileResult?.isValid) {
      incrementUsage(builder.command.id);
      
      const newItem: HistoryItem = {
        id: crypto.randomUUID(),
        commandId: builder.command.id,
        code: builder.command.code,
        compiledText: builder.compileResult.text,
        timestamp: new Date().toISOString()
      };
      
      const newHistory = [newItem, ...history].slice(0, 10);
      setHistory(newHistory);
      localStorage.setItem('ai-prompt-lib:builder:history', JSON.stringify(newHistory));
    }
  };

  const handleDownload = () => {
    if (builder.command && builder.compileResult?.isValid) {
      const blob = new Blob([builder.compileResult.text], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${builder.command.code.replace('/', '')}-${Date.now()}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      handleCopy(); // also save to history
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
    localStorage.removeItem('ai-prompt-lib:builder:history');
  };

  const handleSelectHistoryItem = (item: HistoryItem) => {
    const cmd = prompts.find(p => p.id === item.commandId);
    if (cmd) {
      builder.setCommand(cmd);
    }
  };

  return (
    <div className="animate-in fade-in duration-200 pb-8 flex flex-col h-[calc(100vh-theme(spacing.16))] sm:h-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 shrink-0 mt-4 sm:mt-0 px-4 sm:px-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-1">{t.playgroundTitle}</h1>
          <p className="text-muted-foreground">{t.playgroundSubtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <CommandSelector 
            prompts={prompts} 
            selectedCommand={builder.command} 
            onSelect={(cmd) => {
              builder.setCommand(cmd);
              window.location.hash = `#playground?cmd=${cmd.id}`;
            }} 
          />
          <BuilderHistory 
            history={history} 
            onClear={handleClearHistory} 
            onSelect={handleSelectHistoryItem} 
          />
        </div>
      </div>

      {!builder.command ? (
        <div className="flex-1 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-card/50 p-12 text-center mx-4 sm:mx-0">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
            <Wand2 className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">{t.noCommandSelected}</h3>
          <p className="text-muted-foreground max-w-sm mb-8">{t.noCommandSelectedHint}</p>
          <button
            onClick={() => setView('library')}
            className="bg-primary text-primary-foreground hover:bg-accent-hover px-6 py-2.5 rounded-lg font-medium transition-colors"
          >
            {t.browseLibrary}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-0 overflow-hidden lg:overflow-visible px-4 sm:px-0">
          {/* Left Column - Form */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-6 overflow-y-auto pb-24 lg:pb-0 pr-1 rtl:pl-1">
            <CommandSummary 
              command={builder.command}
              isFavorite={builder.command.isFavorite}
              onToggleFavorite={() => toggleFavorite(builder.command!.id)}
              onViewDetails={() => setDetailsModalOpen(true)}
            />
            
            <PositionalFields 
              command={builder.command}
              values={builder.positionalValues}
              touched={builder.touched}
              onChange={builder.setPositional}
            />

            <OptionFields 
              command={builder.command}
              values={builder.optionValues}
              touched={builder.touched}
              onChange={builder.setOption}
              onReset={builder.resetOption}
            />
          </div>

          {/* Right Column - Preview & Actions */}
          <div className="hidden lg:flex lg:col-span-6 xl:col-span-7 flex-col gap-4 sticky top-6 self-start h-[calc(100vh-140px)]">
            <div className="flex-1 min-h-0">
              <LivePreview result={builder.compileResult} />
            </div>
            <div className="shrink-0">
              <PreviewActions 
                text={builder.compileResult?.text || ''}
                isValid={builder.compileResult?.isValid || false}
                onCopy={handleCopy}
                onDownload={handleDownload}
                onUseExample={builder.loadFromExample}
                onResetAll={builder.resetAll}
                onShareLink={handleShareLink}
                includeQualityRules={builder.includeQualityRules}
                setIncludeQualityRules={builder.setIncludeQualityRules}
                includeHeader={builder.includeHeader}
                setIncludeHeader={builder.setIncludeHeader}
              />
            </div>
          </div>
          
          {/* Mobile Preview Sticky Footer */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 shadow-lg z-30 animate-in slide-in-from-bottom-full duration-300">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-sm">{t.livePreview}</h3>
              {builder.compileResult && !builder.compileResult.isValid && (
                <span className="text-xs text-red-500 font-medium">{t.missingRequired}</span>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                disabled={!builder.compileResult?.isValid}
                className="flex-1 bg-primary text-primary-foreground hover:bg-accent-hover px-4 py-2.5 rounded-lg font-medium text-sm transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {t.copyCommand}
              </button>
              <button
                onClick={builder.loadFromExample}
                className="bg-accent text-foreground hover:bg-accent/80 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors border border-border"
              >
                {t.useExample}
              </button>
            </div>
          </div>
        </div>
      )}

      {builder.command && (
        <PromptModal
          prompt={builder.command}
          isOpen={detailsModalOpen}
          onClose={() => setDetailsModalOpen(false)}
        />
      )}
    </div>
  );
}
