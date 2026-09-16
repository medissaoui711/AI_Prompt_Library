// ==========================================================
// src/seo/jsonLdSchemas.ts
// Standards-Compliant Schema.org JSON-LD Structured Data Builders
// ==========================================================

import type { BreadcrumbItem, FAQItem } from './types';

/**
 * Generates SoftwareApplication / WebApplication Schema
 */
export function generateWebApplicationSchema(baseUrl: string, lang: 'ar' | 'en') {
  const isAr = lang === 'ar';
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${baseUrl}/#webapp`,
    name: isAr
      ? 'مختبر أوامر الذكاء الاصطناعي التفاعلي'
      : 'Interactive AI Prompt Studio & Educational Lab',
    alternateName: isAr ? 'أوامر AI' : 'AI Prompt Studio',
    url: baseUrl,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'All (Web, Android, iOS, Windows, macOS, Linux)',
    browserRequirements: 'Requires modern browser with JavaScript enabled (Chrome, Safari, Firefox, Edge)',
    softwareVersion: '2.5.0',
    inLanguage: [
      { '@type': 'Language', name: 'Arabic', alternateName: 'ar' },
      { '@type': 'Language', name: 'English', alternateName: 'en' },
    ],
    description: isAr
      ? 'منصة متخصصة في هندسة وتوليد أوامر الذكاء الاصطناعي، وتصميم الجرائد والإنفوجرافيك التعليمي، وسير العمل الأكاديمي والمهني.'
      : 'Comprehensive platform for AI prompt engineering, printable educational newspapers, infographics, and automated academic workflows.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    featureList: [
      isAr ? 'توليد الجريدة التعليمية والإنفوجرافيك التفاعلي القابل للطباعة' : 'Printable educational newspaper & infographic generator',
      isAr ? 'مكتبة أوامر متقدمة ومصنفة للتعليم والأعمال' : 'Classified advanced prompt library for education and industry',
      isAr ? 'مختبر اختبار الأوامر المباشر والمتغيرات' : 'Live interactive prompt testing lab with dynamic variables',
      isAr ? 'سير عمل متعدد الخطوات للدروس والبحث' : 'Multi-step guided workflows for lessons and research',
      isAr ? 'دعم كامل للعمل دون اتصال بالإنترنت كـ PWA' : 'Offline-capable Progressive Web App with local caching',
    ],
    screenshot: `${baseUrl}/pwa-512x512.png`,
    author: {
      '@type': 'Organization',
      name: isAr ? 'مختبر أوامر AI' : 'AI Prompt Studio Team',
      url: baseUrl,
    },
  };
}

/**
 * Generates WebSite Schema with SearchAction
 */
export function generateWebSiteSchema(baseUrl: string, lang: 'ar' | 'en') {
  const isAr = lang === 'ar';
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: isAr ? 'مختبر أوامر الذكاء الاصطناعي' : 'Interactive AI Prompt Studio',
    description: isAr
      ? 'المكتبة الشاملة لهندسة الأوامر وتوليد المحتوى التعليمي التفاعلي بالذكاء الاصطناعي'
      : 'The comprehensive platform for prompt engineering and interactive educational workflows',
    inLanguage: isAr ? 'ar' : 'en',
    publisher: {
      '@type': 'Organization',
      name: isAr ? 'مختبر أوامر الذكاء الاصطناعي' : 'Interactive AI Prompt Studio',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/pwa-512x512.png`,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/#library?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generates Organization Schema
 */
export function generateOrganizationSchema(baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Interactive AI Prompt Studio',
    url: baseUrl,
    logo: `${baseUrl}/pwa-512x512.png`,
    sameAs: [],
  };
}

/**
 * Generates BreadcrumbList Schema
 */
export function generateBreadcrumbSchema(baseUrl: string, items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb) => ({
      '@type': 'ListItem',
      position: crumb.position,
      name: crumb.name,
      item: crumb.item.startsWith('http') ? crumb.item : `${baseUrl}${crumb.item}`,
    })),
  };
}

/**
 * Generates FAQPage Schema
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
