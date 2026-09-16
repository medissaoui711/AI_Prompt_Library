import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ChevronDown, Search, Check } from 'lucide-react';
import { CommandPrompt } from '../../types/prompt';
import { useLanguage } from '../../context/LanguageContext';
import { PROMPT_GROUPS } from '../../data/groups';

interface Props {
  prompts: CommandPrompt[];
  selectedCommand: CommandPrompt | null;
  onSelect: (cmd: CommandPrompt) => void;
}

export function CommandSelector({ prompts, selectedCommand, onSelect }: Props) {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    } else {
      setSearch('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const filteredGroups = useMemo(() => {
    const q = search.toLowerCase();
    const groups = PROMPT_GROUPS.map(g => {
      const groupPrompts = prompts.filter(p => p.group === g.id && 
        (p.code.toLowerCase().includes(q) || 
         p.titleAr.toLowerCase().includes(q) || 
         p.titleEn.toLowerCase().includes(q))
      );
      return { ...g, prompts: groupPrompts };
    }).filter(g => g.prompts.length > 0);
    return groups;
  }, [prompts, search]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-accent transition-colors min-w-[240px] justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <span className="font-medium text-sm truncate">
          {selectedCommand ? (isArabic ? selectedCommand.titleAr : selectedCommand.titleEn) : t.selectCommand}
        </span>
        <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-full sm:w-[400px] max-w-[calc(100vw-2rem)] right-0 sm:right-auto bg-card border border-border rounded-xl shadow-lg z-50 overflow-hidden flex flex-col max-h-[60vh] sm:max-h-[400px] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-2 border-b border-border flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground ml-2" />
            <input
              ref={inputRef}
              type="text"
              className="flex-1 bg-transparent outline-none text-sm"
              placeholder={t.searchCommands}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <kbd className="hidden sm:inline-flex items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
          
          <div className="overflow-y-auto p-2 flex-1">
            {filteredGroups.length === 0 ? (
              <div className="p-4 text-center text-sm text-muted-foreground">
                {t.noResults}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {filteredGroups.map(group => (
                  <div key={group.id} className="flex flex-col gap-1">
                    <div className="px-2 py-1 text-xs font-semibold text-muted-foreground">
                      {t[group.labelKey as keyof typeof t]}
                    </div>
                    {group.prompts.map(prompt => (
                      <button
                        key={prompt.id}
                        onClick={() => {
                          onSelect(prompt);
                          setIsOpen(false);
                        }}
                        className={`flex items-center gap-3 px-2 py-2 rounded-md hover:bg-accent transition-colors text-start ${selectedCommand?.id === prompt.id ? 'bg-accent' : ''}`}
                      >
                        <div className="flex-1 flex flex-col overflow-hidden">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded border border-border/50 text-foreground">
                              {prompt.code}
                            </span>
                            <span className="text-sm font-medium truncate">
                              {isArabic ? prompt.titleAr : prompt.titleEn}
                            </span>
                          </div>
                        </div>
                        {selectedCommand?.id === prompt.id && (
                          <Check className="h-4 w-4 text-primary shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
