// ==========================================================
// src/seo/types.ts
// Production-Ready SEO Architecture Type Definitions
// ==========================================================

export interface OpenGraphMetadata {
  title: string;
  description: string;
  url?: string;
  type?: 'website' | 'article' | 'profile' | 'app';
  siteName?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  locale?: string;
  alternateLocales?: string[];
}

export interface TwitterCardMetadata {
  card: 'summary' | 'summary_large_image' | 'app' | 'player';
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  creator?: string;
  site?: string;
}

export interface BreadcrumbItem {
  name: string;
  item: string; // URL
  position: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string[];
  robots?: string; // e.g. "index, follow", "noindex, nofollow"
  openGraph?: OpenGraphMetadata;
  twitter?: TwitterCardMetadata;
  alternates?: {
    ar?: string;
    en?: string;
    xDefault?: string;
  };
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItem[];
  structuredData?: Record<string, any> | Record<string, any>[];
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export interface ViewSEOConfig {
  ar: SEOMetadata;
  en: SEOMetadata;
}
