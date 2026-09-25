import { useState, useEffect, useCallback, useMemo } from 'react';
import { CommandPrompt } from '../types/prompt';
import { ALL_PROMPTS } from '../data/prompts';

const FAVORITES_KEY = 'ai-prompt-lib:favorites:v1';
const USAGE_KEY = 'ai-prompt-lib:usage:v1';
const CUSTOM_PROMPTS_KEY = 'ai-prompt-lib:custom-prompts:v1';
const LEGACY_STORAGE_KEY = 'ai-prompt-lib:prompts:v3';
const LEGACY_STORAGE_KEY_V2 = 'ai-prompt-lib:prompts:v2';

// Global event bus for multi-component sync in the same tab
type PromptsChangeHandler = () => void;
const listeners = new Set<PromptsChangeHandler>();

function notifyAllListeners() {
  listeners.forEach((fn) => fn());
}

function getInitialFavorites(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (raw) {
      return new Set(JSON.parse(raw));
    }

    // Migration from legacy bulky storage
    const legacy = localStorage.getItem(LEGACY_STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY_V2);
    if (legacy) {
      const parsed: CommandPrompt[] = JSON.parse(legacy);
      const migrated = new Set<string>();
      parsed.forEach((p) => {
        if (p.isFavorite) migrated.add(p.id);
      });
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(migrated)));
      return migrated;
    }
  } catch (e) {
    console.warn('Error reading favorites from localStorage:', e);
  }
  return new Set();
}

function getInitialUsage(): Record<string, number> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(USAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }

    // Migration from legacy bulky storage
    const legacy = localStorage.getItem(LEGACY_STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY_V2);
    if (legacy) {
      const parsed: CommandPrompt[] = JSON.parse(legacy);
      const migrated: Record<string, number> = {};
      parsed.forEach((p) => {
        if (p.usageCount && p.usageCount > 0) {
          migrated[p.id] = p.usageCount;
        }
      });
      localStorage.setItem(USAGE_KEY, JSON.stringify(migrated));
      return migrated;
    }
  } catch (e) {
    console.warn('Error reading usage from localStorage:', e);
  }
  return {};
}

function getInitialCustomPrompts(): CommandPrompt[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(CUSTOM_PROMPTS_KEY);
    if (raw) {
      return JSON.parse(raw);
    }

    // Clean up bloated legacy storage keys to free browser quota (5MB limit)
    try {
      localStorage.removeItem(LEGACY_STORAGE_KEY);
      localStorage.removeItem(LEGACY_STORAGE_KEY_V2);
    } catch {
      // ignore
    }
  } catch (e) {
    console.warn('Error reading custom prompts:', e);
  }
  return [];
}

export function usePrompts() {
  const [, setTick] = useState(0);

  // Sync with global events
  useEffect(() => {
    const handleUpdate = () => setTick((t) => t + 1);
    listeners.add(handleUpdate);

    const handleStorage = (e: StorageEvent) => {
      if (
        e.key === FAVORITES_KEY ||
        e.key === USAGE_KEY ||
        e.key === CUSTOM_PROMPTS_KEY
      ) {
        setTick((t) => t + 1);
      }
    };
    window.addEventListener('storage', handleStorage);

    return () => {
      listeners.delete(handleUpdate);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  // Compute merged prompt list directly from fresh ALL_PROMPTS bundle
  const prompts: CommandPrompt[] = useMemo(() => {
    const favorites = getInitialFavorites();
    const usage = getInitialUsage();
    const custom = getInitialCustomPrompts();

    const mergedOfficial = ALL_PROMPTS.map((p) => {
      const isFav = favorites.has(p.id) || !!p.isFavorite;
      const count = usage[p.id] !== undefined ? usage[p.id] : (p.usageCount || 0);
      return {
        ...p,
        isFavorite: isFav,
        usageCount: count,
      };
    });

    return [...mergedOfficial, ...custom];
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    try {
      const favorites = getInitialFavorites();
      if (favorites.has(id)) {
        favorites.delete(id);
      } else {
        favorites.add(id);
      }
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(favorites)));
      notifyAllListeners();
    } catch (e) {
      console.warn('Error toggling favorite:', e);
    }
  }, []);

  const incrementUsage = useCallback((id: string) => {
    try {
      const usage = getInitialUsage();
      usage[id] = (usage[id] || 0) + 1;
      localStorage.setItem(USAGE_KEY, JSON.stringify(usage));
      notifyAllListeners();
    } catch (e) {
      console.warn('Error incrementing usage:', e);
    }
  }, []);

  const addPrompt = useCallback((promptData: Omit<CommandPrompt, 'id' | 'createdAt' | 'updatedAt' | 'usageCount'>): CommandPrompt => {
    const newPrompt: CommandPrompt = {
      ...promptData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      usageCount: 0,
      isFavorite: false,
    };
    try {
      const custom = getInitialCustomPrompts();
      const updated = [newPrompt, ...custom];
      localStorage.setItem(CUSTOM_PROMPTS_KEY, JSON.stringify(updated));
      notifyAllListeners();
    } catch (e) {
      console.warn('Error adding custom prompt:', e);
    }
    return newPrompt;
  }, []);

  const updatePrompt = useCallback((id: string, patch: Partial<CommandPrompt>) => {
    try {
      const custom = getInitialCustomPrompts();
      const updated = custom.map((p) =>
        p.id === id ? { ...p, ...patch, updatedAt: new Date().toISOString() } : p
      );
      localStorage.setItem(CUSTOM_PROMPTS_KEY, JSON.stringify(updated));
      notifyAllListeners();
    } catch (e) {
      console.warn('Error updating custom prompt:', e);
    }
  }, []);

  const deletePrompt = useCallback((id: string) => {
    try {
      const custom = getInitialCustomPrompts();
      const updated = custom.filter((p) => p.id !== id);
      localStorage.setItem(CUSTOM_PROMPTS_KEY, JSON.stringify(updated));
      notifyAllListeners();
    } catch (e) {
      console.warn('Error deleting custom prompt:', e);
    }
  }, []);

  const resetLibrary = useCallback(() => {
    try {
      localStorage.removeItem(FAVORITES_KEY);
      localStorage.removeItem(USAGE_KEY);
      localStorage.removeItem(CUSTOM_PROMPTS_KEY);
      localStorage.removeItem(LEGACY_STORAGE_KEY);
      localStorage.removeItem(LEGACY_STORAGE_KEY_V2);
      notifyAllListeners();
    } catch (e) {
      console.warn('Error resetting library:', e);
    }
  }, []);

  const getById = useCallback(
    (id: string) => {
      return prompts.find((p) => p.id === id);
    },
    [prompts]
  );

  return {
    prompts,
    addPrompt,
    updatePrompt,
    deletePrompt,
    toggleFavorite,
    incrementUsage,
    resetLibrary,
    getById,
  };
}
