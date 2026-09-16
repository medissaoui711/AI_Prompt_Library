// ==========================================================
// src/seo/useSEO.ts
// Custom hook to read and override SEO metadata dynamically
// ==========================================================

import { useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useView } from '../context/ViewContext';
import { VIEW_SEO_CONFIGS, getBaseUrl } from './seoConfig';
import type { SEOMetadata } from './types';

export function useSEO(override?: Partial<SEOMetadata>): SEOMetadata {
  const { isArabic } = useLanguage();
  const { view } = useView();

  return useMemo(() => {
    const config = VIEW_SEO_CONFIGS[view] || VIEW_SEO_CONFIGS.dashboard;
    const base = isArabic ? config.ar : config.en;
    const baseUrl = getBaseUrl();

    return {
      ...base,
      canonical: base.canonical?.startsWith('http') ? base.canonical : `${baseUrl}${base.canonical || '/'}`,
      ...override,
    };
  }, [view, isArabic, override]);
}
