import { CommandPrompt, PromptFilters } from '../types/prompt';

function normalizeArabicText(text: string): string {
  if (!text) return '';
  return text
    .replace(/[أإآا]/g, 'ا')
    .replace(/[ة]/g, 'ه')
    .replace(/[يى]/g, 'ي')
    .replace(/[ًٌٍَُِّْ]/g, '');
}

export function matchesQuery(prompt: CommandPrompt, q: string): boolean {
  if (!q) return true;
  const query = normalizeArabicText(q.trim().toLowerCase());
  if (!query) return true;

  const code = normalizeArabicText(prompt.code.toLowerCase());
  const titleAr = normalizeArabicText(prompt.titleAr.toLowerCase());
  const titleEn = normalizeArabicText(prompt.titleEn.toLowerCase());
  const descAr = normalizeArabicText(prompt.descriptionAr.toLowerCase());
  const descEn = normalizeArabicText(prompt.descriptionEn.toLowerCase());
  const example = normalizeArabicText(prompt.example.toLowerCase());
  const keywords = prompt.keywords.map(k => normalizeArabicText(k.toLowerCase())).join(' ');

  return code.includes(query) ||
         titleAr.includes(query) ||
         titleEn.includes(query) ||
         descAr.includes(query) ||
         descEn.includes(query) ||
         example.includes(query) ||
         keywords.includes(query);
}

export function sortPrompts(list: CommandPrompt[], by: PromptFilters['sortBy']): CommandPrompt[] {
  return [...list].sort((a, b) => {
    if (by === 'recent') {
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    }
    if (by === 'usage') {
      return (b.usageCount || 0) - (a.usageCount || 0);
    }
    if (by === 'code') {
      return a.code.localeCompare(b.code);
    }
    return 0;
  });
}

export function filterPrompts(prompts: CommandPrompt[], filters: PromptFilters): CommandPrompt[] {
  let result = prompts;

  if (filters.onlyFavorites) {
    result = result.filter(p => p.isFavorite);
  }

  if (filters.groups && filters.groups.length > 0) {
    result = result.filter(p => filters.groups.includes(p.group));
  }

  if (filters.stages && filters.stages.length > 0) {
    result = result.filter(p => {
      if (p.stage && p.stage.some(s => filters.stages.includes(s))) return true;
      if (p.education?.stage && filters.stages.includes(p.education.stage as any)) return true;
      return false;
    });
  }

  if (filters.subjects && filters.subjects.length > 0) {
    result = result.filter(p => {
      if (p.subject && p.subject.some(s => filters.subjects.includes(s))) return true;
      if (p.education?.subjects && p.education.subjects.some(s => filters.subjects.includes(s as any))) return true;
      return false;
    });
  }

  if (filters.tasks && filters.tasks.length > 0) {
    result = result.filter(p => {
      if (p.task && p.task.some(t => filters.tasks.includes(t))) return true;
      if (p.education?.taskTypes && p.education.taskTypes.some(t => filters.tasks.includes(t as any))) return true;
      return false;
    });
  }

  if (filters.adsCategory && filters.adsCategory !== 'all') {
    result = result.filter(p => p.adsCategory === filters.adsCategory);
  }

  if (filters.cvCategory && filters.cvCategory !== 'all') {
    result = result.filter(p => p.cvCategory === filters.cvCategory);
  }

  if (filters.devCategory && filters.devCategory !== 'all') {
    result = result.filter(p => p.devCategory === filters.devCategory);
  }

  if (filters.designCategory && filters.designCategory !== 'all') {
    result = result.filter(p => p.designCategory === filters.designCategory);
  }

  if (filters.contentCategory && filters.contentCategory !== 'all') {
    result = result.filter(p => p.contentCategory === filters.contentCategory);
  }

  if (filters.query) {
    result = result.filter(p => matchesQuery(p, filters.query));
  }

  return sortPrompts(result, filters.sortBy);
}
