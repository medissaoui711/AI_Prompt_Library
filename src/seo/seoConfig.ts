// ==========================================================
// src/seo/seoConfig.ts
// Centralized SEO & GEO Configuration for all views & routes
// ==========================================================

import type { SEOMetadata, ViewSEOConfig } from './types';
import type { ViewType } from '../context/ViewContext';

export function getBaseUrl(): string {
  if (typeof window !== 'undefined' && window.location.origin) {
    return window.location.origin;
  }
  return 'https://ai-prompt-studio.web.app';
}

export const SITE_NAME_AR = 'مختبر أوامر الذكاء الاصطناعي';
export const SITE_NAME_EN = 'Interactive AI Prompt Studio';
export const DEFAULT_OG_IMAGE = '/pwa-512x512.png';

export const COMMON_FAQS_AR = [
  {
    question: 'ما هو مختبر أوامر الذكاء الاصطناعي (AI Prompt Studio)؟',
    answer: 'منصة احترافية متكاملة تساعد المعلمين، الباحثين، والمطورين على استكشاف، وتوليد، واختبار أوامر الذكاء الاصطناعي بدقة عالية، مع ميزات متقدمة مثل توليد الجرائد التعليمية والإنفوجرافيك القابل للطباعة.',
  },
  {
    question: 'كيف يمكن تحويل الدرس إلى جريدة تعليمية وإنفوجرافيك A4؟',
    answer: 'من خلال باقة "الجريدة المدرسية والإنفوجرافيك التعليمي" في قسم المسارات، حيث يتم توليد جريدة متكاملة تشمل ملخصاً، وحقائق علمية، وشبكة كلمات متقاطعة، ومتاهة معرفية، ولعبة البحث عن الكلمات جاهزة للطباعة.',
  },
  {
    question: 'هل يدعم التطبيق العمل دون اتصال بالإنترنت (Offline)؟',
    answer: 'نعم، التطبيق مبني كـ Progressive Web App (PWA) ويقوم بتخزين غلاف التطبيق ومكتبة الأوامر محلياً للوصول السريع حتى في حال انقطاع الشبكة.',
  },
  {
    question: 'هل استخدام المكتبة ومولد الأوامر مجاني؟',
    answer: 'نعم، المنصة مجانية ومفتوحة لجميع المستخدمين لتعزيز التعليم وتطوير مهارات هندسة الأوامر (Prompt Engineering).',
  },
];

export const COMMON_FAQS_EN = [
  {
    question: 'What is the Interactive AI Prompt Studio?',
    answer: 'A comprehensive platform designed for educators, researchers, and creators to engineer, test, and generate high-precision AI prompts, including printable educational newspapers and infographics.',
  },
  {
    question: 'How do I generate an A4 educational newspaper with games from a lesson?',
    answer: 'Navigate to the Guided Flows section and choose the "Educational Newspaper Suite". It automatically structures lesson content into infographics, crosswords, mazes, and word-searches ready for A4 printing.',
  },
  {
    question: 'Does the application work offline?',
    answer: 'Yes, as a Progressive Web App (PWA), all core templates, layouts, and prompt tools are precached for fast, offline-ready operation.',
  },
];

export const VIEW_SEO_CONFIGS: Record<ViewType, ViewSEOConfig> = {
  dashboard: {
    ar: {
      title: 'مختبر أوامر الذكاء الاصطناعي | المنصة الشاملة لهندسة الأوامر والمحتوى التعليمي',
      description: 'لوحة التحكم المركزية لإدارة واستكشاف أوامر الذكاء الاصطناعي التفاعلية، وتوليد الجرائد والإنفوجرافيك المدرسي، ومتابعة الأداء والإحصائيات.',
      canonical: '/#dashboard',
      keywords: [
        'أوامر الذكاء الاصطناعي',
        'هندسة الأوامر',
        'جريدة مدرسية إنفوجرافيك',
        'مكتبة برومبت',
        'برومبت تعليمي',
        'Prompt Engineering',
        'AI Prompts',
        'ذكاء اصطناعي للتعليم',
      ],
      robots: 'index, follow, max-image-preview:large, max-snippet:-1',
      openGraph: {
        title: 'مختبر أوامر الذكاء الاصطناعي | منصة هندسة الأوامر والإنفوجرافيك التعليمي',
        description: 'استكشف واختبر وولد أفضل أوامر الذكاء الاصطناعي التفاعلية للتعليم والأعمال مع دعم الجريدة المدرسية وسير العمل.',
        siteName: SITE_NAME_AR,
        type: 'website',
        image: DEFAULT_OG_IMAGE,
        imageAlt: 'شعار مختبر أوامر الذكاء الاصطناعي',
        locale: 'ar_AR',
        alternateLocales: ['en_US'],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'مختبر أوامر الذكاء الاصطناعي | المنصة الشاملة للتعليم والإنفوجرافيك',
        description: 'لوحة تحكم تفاعلية لتوليد واختبار أوامر الذكاء الاصطناعي والجرائد التعليمية.',
        image: DEFAULT_OG_IMAGE,
      },
      breadcrumbs: [
        { name: 'الرئيسية', item: '/', position: 1 },
        { name: 'لوحة التحكم', item: '/#dashboard', position: 2 },
      ],
      faqs: COMMON_FAQS_AR,
    },
    en: {
      title: 'AI Prompt Studio | Comprehensive Prompt Engineering & Educational Infographics',
      description: 'Central dashboard for managing interactive AI prompts, creating printable lesson newspapers, running workflows, and evaluating prompts.',
      canonical: '/#dashboard',
      keywords: [
        'AI Prompts',
        'Prompt Engineering',
        'Educational Newspaper Infographic',
        'Lesson Plan AI',
        'Prompt Library',
        'AI Studio',
      ],
      robots: 'index, follow, max-image-preview:large, max-snippet:-1',
      openGraph: {
        title: 'Interactive AI Prompt Studio & Educational Lab',
        description: 'Explore, test, and generate production-ready AI prompts for education and productivity.',
        siteName: SITE_NAME_EN,
        type: 'website',
        image: DEFAULT_OG_IMAGE,
        imageAlt: 'AI Prompt Studio Logo',
        locale: 'en_US',
        alternateLocales: ['ar_AR'],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'AI Prompt Studio | Educational Infographics & Prompt Lab',
        description: 'Interactive dashboard for prompt engineering and printable educational newspapers.',
        image: DEFAULT_OG_IMAGE,
      },
      breadcrumbs: [
        { name: 'Home', item: '/', position: 1 },
        { name: 'Dashboard', item: '/#dashboard', position: 2 },
      ],
      faqs: COMMON_FAQS_EN,
    },
  },

  library: {
    ar: {
      title: 'مكتبة الأوامر المصنفة | أوامر ذكاء اصطناعي احترافية للتعليم والأعمال',
      description: 'تصفح أكبر مكتبة مصنفة لأوامر الذكاء الاصطناعي في التعليم، الكتابة، البرمجة، والبحث الأكاديمي مع فلاتر سريعة وأمثلة عملية.',
      canonical: '/#library',
      keywords: [
        'مكتبة أوامر الذكاء الاصطناعي',
        'أوامر شات جي بي تي',
        'أوامر جيميني',
        'برومبت تعليمي',
        'أوامر التدريس',
        'Prompt Library',
      ],
      robots: 'index, follow, max-image-preview:large',
      openGraph: {
        title: 'مكتبة أوامر الذكاء الاصطناعي المصنفة | تصفح واستخدم فوراً',
        description: 'مئات الأوامر الجاهزة والموثوقة مصنفة حسب المادة الدراسية، والمستوى التعليمي، والهدف العملي.',
        siteName: SITE_NAME_AR,
        type: 'website',
        image: DEFAULT_OG_IMAGE,
        locale: 'ar_AR',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'مكتبة الأوامر المصنفة للذكاء الاصطناعي',
        description: 'تصفح مئات الأوامر المعتمدة للتعليم وتصميم الأنشطة.',
        image: DEFAULT_OG_IMAGE,
      },
      breadcrumbs: [
        { name: 'الرئيسية', item: '/', position: 1 },
        { name: 'مكتبة الأوامر', item: '/#library', position: 2 },
      ],
    },
    en: {
      title: 'Categorized Prompt Library | Curated AI Prompts for Education & Work',
      description: 'Explore our rich library of curated, tested AI prompts for educators, researchers, and engineers with instant copy and customization.',
      canonical: '/#library',
      keywords: ['Prompt Library', 'Curated AI Prompts', 'Teacher Prompts', 'ChatGPT Prompts', 'Gemini Prompts'],
      robots: 'index, follow, max-image-preview:large',
      openGraph: {
        title: 'Categorized AI Prompt Library | Ready to Use',
        description: 'Curated prompts classified by subject, grade level, and workflow outcome.',
        siteName: SITE_NAME_EN,
        type: 'website',
        image: DEFAULT_OG_IMAGE,
        locale: 'en_US',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Categorized AI Prompt Library',
        description: 'Curated prompts classified for education and engineering.',
        image: DEFAULT_OG_IMAGE,
      },
      breadcrumbs: [
        { name: 'Home', item: '/', position: 1 },
        { name: 'Prompt Library', item: '/#library', position: 2 },
      ],
    },
  },

  flows: {
    ar: {
      title: 'المسارات التفاعلية وباقات الجريدة التعليمية A4 | أوامر AI',
      description: 'مسارات إرشادية متكاملة لتحويل الدروس إلى جرائد مدرسية وبوسترات إنفوجرافيك قابلة للطباعة مع ألعاب تعليمية كالمتاهات والكلمات المتقاطعة.',
      canonical: '/#flows',
      keywords: [
        'جريدة مدرسية إنفوجرافيك',
        'مسارات تعليمية ذكاء اصطناعي',
        'كلمات متقاطعة تعليمية',
        'ألعاب تعليمية للطباعة',
        'Educational Newspaper Infographic',
      ],
      robots: 'index, follow, max-image-preview:large',
      openGraph: {
        title: 'باقة الجريدة المدرسية والإنفوجرافيك التعليمي A4',
        description: 'حوّل أي درس إلى جريدة إنفوجرافيك مطبوعة تشمل الملخص، والألعاب، والأنشطة في دقائق.',
        siteName: SITE_NAME_AR,
        type: 'website',
        image: DEFAULT_OG_IMAGE,
        locale: 'ar_AR',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'باقات الجريدة المدرسية والإنفوجرافيك التعليمي',
        description: 'تحويل الدروس إلى جرائد وألعاب مطبوعة بالذكاء الاصطناعي.',
        image: DEFAULT_OG_IMAGE,
      },
      breadcrumbs: [
        { name: 'الرئيسية', item: '/', position: 1 },
        { name: 'المسارات التوجيهية', item: '/#flows', position: 2 },
      ],
      faqs: [
        {
          question: 'ما هي مكونات الجريدة التعليمية التي يولدها الأمر؟',
          answer: 'تتضمن الجريدة: عنواناً جذاباً، شرحاً مبسطاً، ملخصاً، حقائق "هل تعلم؟"، تطبيقات واقعية، كلمات متقاطعة، متاهة تعليمية، ولعبة البحث عن الكلمات مع مساحة منظمة للطباعة بتنسيق A4.',
        },
      ],
    },
    en: {
      title: 'Guided Flows & Educational Newspaper Suites | AI Prompt Studio',
      description: 'Multi-step guided journeys to transform educational lessons into printable A4 newspapers, visual infographics, and interactive puzzle worksheets.',
      canonical: '/#flows',
      keywords: ['Educational Newspaper', 'Lesson Infographic', 'Guided AI Flows', 'Printable Worksheets AI'],
      robots: 'index, follow, max-image-preview:large',
      openGraph: {
        title: 'Printable Educational Newspaper & Infographic Suite',
        description: 'Turn any lesson into an interactive printable newspaper with crosswords, mazes, and infographics.',
        siteName: SITE_NAME_EN,
        type: 'website',
        image: DEFAULT_OG_IMAGE,
        locale: 'en_US',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Printable Educational Newspaper & Infographic Suite',
        description: 'Generate complete educational newspapers and games with AI.',
        image: DEFAULT_OG_IMAGE,
      },
      breadcrumbs: [
        { name: 'Home', item: '/', position: 1 },
        { name: 'Guided Flows', item: '/#flows', position: 2 },
      ],
    },
  },

  playground: {
    ar: {
      title: 'مختبر اختبار الأوامر المباشر | تجربة وتعديل المتغيرات فورياً',
      description: 'مساحة عمل تفاعلية لاختبار أوامر الذكاء الاصطناعي، وضبط المعاملات والمتغيرات، ومعاينة المخرجات في الوقت الحقيقي.',
      canonical: '/#playground',
      keywords: ['مختبر الأوامر', 'تجربة برومبت', 'Prompt Testing Lab', 'AI Playground'],
      robots: 'index, follow',
      openGraph: {
        title: 'مختبر اختبار وتطوير الأوامر التفاعلي',
        description: 'جرّب وعدّل أوامر الذكاء الاصطناعي مباشرة مع دعم المتغيرات والقوالب الديناميكية.',
        siteName: SITE_NAME_AR,
        type: 'website',
        image: DEFAULT_OG_IMAGE,
        locale: 'ar_AR',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'مختبر اختبار الأوامر التفاعلي',
        description: 'بيئة عمل مرنة لاختبار وضبط أوامر الذكاء الاصطناعي.',
        image: DEFAULT_OG_IMAGE,
      },
      breadcrumbs: [
        { name: 'الرئيسية', item: '/', position: 1 },
        { name: 'مختبر التجارب', item: '/#playground', position: 2 },
      ],
    },
    en: {
      title: 'Interactive Prompt Playground | Live Testing & Variable Tuning',
      description: 'Test, tweak, and benchmark AI prompts in real time with dynamic variable injection and output preview.',
      canonical: '/#playground',
      keywords: ['Prompt Playground', 'Test AI Prompts', 'Live Prompt Editor'],
      robots: 'index, follow',
      openGraph: {
        title: 'Interactive AI Prompt Playground',
        description: 'Live testing environment with customizable parameters and variable templating.',
        siteName: SITE_NAME_EN,
        type: 'website',
        image: DEFAULT_OG_IMAGE,
        locale: 'en_US',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Interactive AI Prompt Playground',
        description: 'Test and tune AI prompts with real-time feedback.',
        image: DEFAULT_OG_IMAGE,
      },
      breadcrumbs: [
        { name: 'Home', item: '/', position: 1 },
        { name: 'Playground', item: '/#playground', position: 2 },
      ],
    },
  },

  workflows: {
    ar: {
      title: 'سير العمل المتسلسل | مسارات الذكاء الاصطناعي متعددة الخطوات',
      description: 'أتمتة العمليات التعليمية والبحثية المعقدة عبر سلاسل أوامر مترابطة تنتقل من التخطيط إلى المراجعة والتقييم.',
      canonical: '/#workflows',
      keywords: ['سير عمل الذكاء الاصطناعي', 'سلاسل الأوامر', 'AI Workflows', 'Chained Prompts'],
      robots: 'index, follow',
      openGraph: {
        title: 'سير العمل المتسلسل بالأوامر الذكية',
        description: 'بناء سلاسل مهام تعليمية وأكاديمية متكاملة لرفع جودة المخرجات.',
        siteName: SITE_NAME_AR,
        type: 'website',
        image: DEFAULT_OG_IMAGE,
        locale: 'ar_AR',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'سير العمل المتسلسل للذكاء الاصطناعي',
        description: 'أتمتة المهام المعقدة عبر سلاسل أوامر مترابطة.',
        image: DEFAULT_OG_IMAGE,
      },
      breadcrumbs: [
        { name: 'الرئيسية', item: '/', position: 1 },
        { name: 'سير العمل', item: '/#workflows', position: 2 },
      ],
    },
    en: {
      title: 'Multi-Step AI Workflows | Automated Sequential Pipelines',
      description: 'Execute complex multi-stage research, teaching, and analysis pipelines with chained AI prompts.',
      canonical: '/#workflows',
      keywords: ['AI Workflows', 'Chained Prompts', 'Sequential Pipelines', 'Educational Pipelines'],
      robots: 'index, follow',
      openGraph: {
        title: 'Multi-Step AI Workflows & Pipelines',
        description: 'Automate complex multi-stage tasks with chained prompt structures.',
        siteName: SITE_NAME_EN,
        type: 'website',
        image: DEFAULT_OG_IMAGE,
        locale: 'en_US',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Multi-Step AI Workflows & Pipelines',
        description: 'Sequential AI pipelines for high-precision outcomes.',
        image: DEFAULT_OG_IMAGE,
      },
      breadcrumbs: [
        { name: 'Home', item: '/', position: 1 },
        { name: 'Workflows', item: '/#workflows', position: 2 },
      ],
    },
  },

  generator: {
    ar: {
      title: 'مولد الأوامر الذكي | تصميم أوامر مخصصة بقواعد هندسة البرومبت',
      description: 'أداة ذكية لبناء أوامر احترافية مخصصة خطوة بخطوة وفق أفضل معايير هندسة الأوامر مع تحديد الدور والسياق والمخرجات.',
      canonical: '/#generator',
      keywords: ['مولد الأوامر', 'صانع البرومبت', 'Prompt Generator', 'Prompt Builder AI'],
      robots: 'index, follow',
      openGraph: {
        title: 'مولد وصانع الأوامر الذكي التفاعلي',
        description: 'صمم أوامرك بدقة بالغة وفق منهجية السياق، الدور، التنسيق، والقيود.',
        siteName: SITE_NAME_AR,
        type: 'website',
        image: DEFAULT_OG_IMAGE,
        locale: 'ar_AR',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'مولد الأوامر الذكي المخصص',
        description: 'بناء أوامر احترافية خطوة بخطوة.',
        image: DEFAULT_OG_IMAGE,
      },
      breadcrumbs: [
        { name: 'الرئيسية', item: '/', position: 1 },
        { name: 'مولد الأوامر', item: '/#generator', position: 2 },
      ],
    },
    en: {
      title: 'Smart Prompt Generator | Step-by-Step Prompt Engineering Wizard',
      description: 'Build robust, highly structured AI prompts using proven prompt engineering frameworks (Role, Context, Constraints, Output).',
      canonical: '/#generator',
      keywords: ['Prompt Generator', 'Prompt Builder', 'Prompt Engineering Tool'],
      robots: 'index, follow',
      openGraph: {
        title: 'Smart Prompt Generator Wizard',
        description: 'Construct high-precision AI prompts systematically.',
        siteName: SITE_NAME_EN,
        type: 'website',
        image: DEFAULT_OG_IMAGE,
        locale: 'en_US',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Smart Prompt Generator Wizard',
        description: 'Build structured AI prompts with ease.',
        image: DEFAULT_OG_IMAGE,
      },
      breadcrumbs: [
        { name: 'Home', item: '/', position: 1 },
        { name: 'Prompt Generator', item: '/#generator', position: 2 },
      ],
    },
  },

  settings: {
    ar: {
      title: 'الإعدادات وتفضيلات التطبيق | مختبر أوامر AI',
      description: 'تخصيص المظهر، اللغة، إدارة تطبيق الويب التقدمي (PWA)، والتخزين المؤقت.',
      canonical: '/#settings',
      robots: 'noindex, follow', // Settings is an internal preference view - correct technical SEO directive
      breadcrumbs: [
        { name: 'الرئيسية', item: '/', position: 1 },
        { name: 'الإعدادات', item: '/#settings', position: 2 },
      ],
    },
    en: {
      title: 'Settings & Application Preferences | AI Prompt Studio',
      description: 'Manage interface theme, language, Progressive Web App status, and offline cache settings.',
      canonical: '/#settings',
      robots: 'noindex, follow',
      breadcrumbs: [
        { name: 'Home', item: '/', position: 1 },
        { name: 'Settings', item: '/#settings', position: 2 },
      ],
    },
  },
};
