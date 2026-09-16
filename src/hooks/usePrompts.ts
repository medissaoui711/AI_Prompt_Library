import { useLocalStorage } from './useLocalStorage';
import { CommandPrompt } from '../types/prompt';
import { ALL_PROMPTS } from '../data/prompts';
import { useCallback, useEffect } from 'react';

const STORAGE_KEY_V3 = 'ai-prompt-lib:prompts:v3';

export function usePrompts() {
  const [prompts, setPrompts] = useLocalStorage<CommandPrompt[]>(STORAGE_KEY_V3, ALL_PROMPTS);

  // Migration: merge existing local storage with new ALL_PROMPTS once on mount
  useEffect(() => {
    setPrompts((prev) => {
      let isChanged = false;
      const prevMap = new Map(prev.map((p) => [p.id, p]));
      const newPrompts = ALL_PROMPTS.map((p) => {
        const existing = prevMap.get(p.id);
        if (existing) {
          if (
            existing.isFavorite !== p.isFavorite ||
            existing.usageCount !== p.usageCount
          ) {
            isChanged = true;
          }
          return {
            ...p,
            isFavorite: existing.isFavorite || false,
            usageCount: existing.usageCount || 0,
          };
        }
        isChanged = true;
        return p;
      });

      // Also keep user-added prompts (those not in ALL_PROMPTS)
      const allPromptsMap = new Map(ALL_PROMPTS.map((p) => [p.id, p]));
      const userPrompts = prev.filter((p) => !allPromptsMap.has(p.id));

      if (prev.length !== newPrompts.length + userPrompts.length) {
        isChanged = true;
      }

      return isChanged ? [...newPrompts, ...userPrompts] : prev;
    });
  }, [setPrompts]);

  const addPrompt = useCallback((promptData: Omit<CommandPrompt, 'id' | 'createdAt' | 'updatedAt' | 'usageCount'>): CommandPrompt => {
    const newPrompt: CommandPrompt = {
      ...promptData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      usageCount: 0,
    };
    setPrompts((prev) => [newPrompt, ...prev]);
    return newPrompt;
  }, [setPrompts]);

  const updatePrompt = useCallback((id: string, patch: Partial<CommandPrompt>) => {
    setPrompts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, ...patch, updatedAt: new Date().toISOString() } : p
      )
    );
  }, [setPrompts]);

  const deletePrompt = useCallback((id: string) => {
    setPrompts((prev) => prev.filter((p) => p.id !== id));
  }, [setPrompts]);

  const toggleFavorite = useCallback((id: string) => {
    setPrompts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, isFavorite: !p.isFavorite, updatedAt: new Date().toISOString() } : p
      )
    );
  }, [setPrompts]);

  const incrementUsage = useCallback((id: string) => {
    setPrompts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, usageCount: (p.usageCount || 0) + 1, updatedAt: new Date().toISOString() } : p
      )
    );
  }, [setPrompts]);

  const resetLibrary = useCallback(() => {
    setPrompts(ALL_PROMPTS);
  }, [setPrompts]);

  const getById = useCallback((id: string) => {
    return prompts.find((p) => p.id === id);
  }, [prompts]);

  return {
    prompts,
    addPrompt,
    updatePrompt,
    deletePrompt,
    toggleFavorite,
    incrementUsage,
    resetLibrary,
    getById
  };
}
