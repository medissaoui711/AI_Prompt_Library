import React, { useState } from 'react';
import { History, Trash2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export interface HistoryItem {
  id: string;
  commandId: string;
  code: string;
  compiledText: string;
  timestamp: string;
}

interface Props {
  history: HistoryItem[];
  onClear: () => void;
  onSelect: (item: HistoryItem) => void;
}

export function BuilderHistory({ history, onClear, onSelect }: Props) {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <History className="h-5 w-5" />
        <span className="hidden sm:inline font-medium text-sm">{t.history}</span>
        {history.length > 0 && (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
            {history.length}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full mt-2 w-[300px] max-w-[calc(100vw-2rem)] right-0 sm:right-auto sm:left-0 lg:right-0 lg:left-auto bg-card border border-border rounded-xl shadow-lg z-50 overflow-hidden flex flex-col max-h-[400px] animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between p-3 border-b border-border bg-muted/30">
              <h3 className="font-semibold text-sm">{t.history}</h3>
              {history.length > 0 && (
                <button
                  onClick={() => {
                    if (window.confirm(isArabic ? 'هل أنت متأكد من مسح السجل؟' : 'Are you sure you want to clear history?')) {
                      onClear();
                    }
                  }}
                  className="text-muted-foreground hover:text-red-500 p-1 rounded transition-colors"
                  title={t.clearHistory}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>
            
            <div className="overflow-y-auto flex-1 p-2">
              {history.length === 0 ? (
                <div className="p-6 text-center text-sm text-muted-foreground">
                  {t.historyEmpty}
                </div>
              ) : (
                <div className="flex flex-col gap-1">
                  {history.map(item => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSelect(item);
                        setIsOpen(false);
                      }}
                      className="flex flex-col items-start text-start p-2 rounded-lg hover:bg-accent transition-colors gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="font-mono text-[10px] bg-muted px-1.5 py-0.5 rounded text-foreground font-bold border border-border/50">
                          {item.code}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          {new Date(item.timestamp).toLocaleTimeString(isArabic ? 'ar-SA' : 'en-US', { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {item.compiledText}
                      </p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
