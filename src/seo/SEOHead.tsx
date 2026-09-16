// ==========================================================
// src/seo/SEOHead.tsx
// Production-Ready Dynamic SEO Head & JSON-LD Manager
// ==========================================================

import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useView } from '../context/ViewContext';
import { VIEW_SEO_CONFIGS, getBaseUrl } from './seoConfig';
import {
  generateWebApplicationSchema,
  generateWebSiteSchema,
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from './jsonLdSchemas';
import type { SEOMetadata } from './types';

interface SEOHeadProps {
  customMetadata?: Partial<SEOMetadata>;
}

export function SEOHead({ customMetadata }: SEOHeadProps) {
  const { lang, isArabic } = useLanguage();
  const { view } = useView();

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const baseUrl = getBaseUrl();
    const config = VIEW_SEO_CONFIGS[view] || VIEW_SEO_CONFIGS.dashboard;
    const meta: SEOMetadata = {
      ...(isArabic ? config.ar : config.en),
      ...customMetadata,
    };

    // 1. Set document title
    document.title = meta.title;

    // Helper to safely set or update a meta tag by name or property
    const setMetaTag = (attribute: 'name' | 'property', key: string, content: string | undefined) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to set or update link rel tags
    const setLinkTag = (rel: string, href: string, extraAttrs: Record<string, string> = {}) => {
      let selector = `link[rel="${rel}"]`;
      if (extraAttrs.hreflang) {
        selector += `[hreflang="${extraAttrs.hreflang}"]`;
      }
      let element = document.querySelector(selector) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
      Object.entries(extraAttrs).forEach(([k, v]) => element!.setAttribute(k, v));
    };

    // 2. Core Meta Directives
    setMetaTag('name', 'description', meta.description);
    if (meta.keywords && meta.keywords.length > 0) {
      setMetaTag('name', 'keywords', meta.keywords.join(', '));
    }
    setMetaTag('name', 'robots', meta.robots || 'index, follow');

    // 3. Canonical and Alternates (hreflang)
    const fullCanonical = meta.canonical?.startsWith('http')
      ? meta.canonical
      : `${baseUrl}${meta.canonical || (view === 'dashboard' ? '/' : `/#${view}`)}`;
    setLinkTag('canonical', fullCanonical);

    // Hreflang annotations
    setLinkTag('alternate', `${baseUrl}/`, { hreflang: 'x-default' });
    setLinkTag('alternate', `${baseUrl}/`, { hreflang: 'ar' });
    setLinkTag('alternate', `${baseUrl}/`, { hreflang: 'en' });

    // 4. OpenGraph Metadata
    const og = meta.openGraph || {
      title: meta.title,
      description: meta.description,
      siteName: isArabic ? 'مختبر أوامر الذكاء الاصطناعي' : 'Interactive AI Prompt Studio',
      type: 'website',
      image: `${baseUrl}/pwa-512x512.png`,
    };

    setMetaTag('property', 'og:title', og.title);
    setMetaTag('property', 'og:description', og.description);
    setMetaTag('property', 'og:url', fullCanonical);
    setMetaTag('property', 'og:type', og.type || 'website');
    setMetaTag('property', 'og:site_name', og.siteName || (isArabic ? 'مختبر أوامر الذكاء الاصطناعي' : 'AI Prompt Studio'));
    setMetaTag('property', 'og:image', og.image?.startsWith('http') ? og.image : `${baseUrl}${og.image || '/pwa-512x512.png'}`);
    setMetaTag('property', 'og:image:alt', og.imageAlt || meta.title);
    setMetaTag('property', 'og:locale', isArabic ? 'ar_AR' : 'en_US');
    setMetaTag('property', 'og:locale:alternate', isArabic ? 'en_US' : 'ar_AR');

    // 5. Twitter / X Cards
    const tw = meta.twitter || {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      image: `${baseUrl}/pwa-512x512.png`,
    };

    setMetaTag('name', 'twitter:card', tw.card);
    setMetaTag('name', 'twitter:title', tw.title);
    setMetaTag('name', 'twitter:description', tw.description);
    setMetaTag('name', 'twitter:image', tw.image?.startsWith('http') ? tw.image : `${baseUrl}${tw.image || '/pwa-512x512.png'}`);

    // 6. JSON-LD Structured Data Injection
    const updateJsonLd = (id: string, data: Record<string, any>) => {
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    };

    // Inject core Schemas
    updateJsonLd('seo-schema-webapp', generateWebApplicationSchema(baseUrl, lang));
    updateJsonLd('seo-schema-website', generateWebSiteSchema(baseUrl, lang));
    updateJsonLd('seo-schema-org', generateOrganizationSchema(baseUrl));

    // Breadcrumbs Schema if available
    if (meta.breadcrumbs && meta.breadcrumbs.length > 0) {
      updateJsonLd('seo-schema-breadcrumbs', generateBreadcrumbSchema(baseUrl, meta.breadcrumbs));
    } else {
      const existing = document.getElementById('seo-schema-breadcrumbs');
      if (existing) existing.remove();
    }

    // FAQ Schema if available
    if (meta.faqs && meta.faqs.length > 0) {
      updateJsonLd('seo-schema-faq', generateFAQSchema(meta.faqs));
    } else {
      const existing = document.getElementById('seo-schema-faq');
      if (existing) existing.remove();
    }
  }, [view, lang, isArabic, customMetadata]);

  return null;
}
