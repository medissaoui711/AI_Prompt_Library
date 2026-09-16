import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const DEV_CROSSPLATFORM_PROMPTS: CommandPrompt[] = [
  {
    id: 'dev-cross-037',
    code: '/build cross platform',
    titleAr: 'تخطيط وبناء منظومة متعددة المنصات (Cross-Platform)',
    titleEn: 'Cross-Platform System Blueprint (Web & Mobile)',
    descriptionAr: 'تخطيط وبناء تطبيق موحد يعمل على الويب وAndroid وiOS بقاعدة كود مشتركة وكفاءة عالية.',
    descriptionEn: 'Architect unified cross-platform solutions targeting Web, iOS, and Android with maximum code reuse.',
    group: 'dev',
    devCategory: 'crossplatform',
    outputType: 'plan',
    outputBadges: ['مزدوج'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'string', required: true, labelAr: 'فكرة التطبيق', labelEn: 'App Concept', hintAr: 'مثال: تطبيق حجز خدمات منزلية', hintEn: 'e.g. Home Services Booking App' },
      { key: 'platform', flag: 'platform', isPositional: false, type: 'string', required: false, defaultValue: 'web,android,ios', labelAr: 'المنصات', labelEn: 'Platforms', hintAr: 'web,android,ios', hintEn: 'web,android,ios' },
      { key: 'framework', flag: 'framework', isPositional: false, type: 'enum', required: false, defaultValue: 'flutter', labelAr: 'إطار العمل المشترك', labelEn: 'Framework', hintAr: 'flutter, react_native, pwa', hintEn: 'Framework', enumValues: [
        { value: 'flutter', labelAr: 'Flutter (Dart)', labelEn: 'Flutter (Dart)' },
        { value: 'react_native', labelAr: 'React Native / Expo', labelEn: 'React Native (Expo)' },
        { value: 'pwa', labelAr: 'PWA + Capacitor/Ionic', labelEn: 'PWA / Capacitor' }
      ]},
      { key: 'features', flag: 'features', isPositional: false, type: 'string', required: false, defaultValue: 'booking,payment,notifications', labelAr: 'الميزات', labelEn: 'Features', hintAr: 'booking,payment,notifications', hintEn: 'booking,payment,notifications' }
    ],
    example: '/build cross platform "تطبيق حجز خدمات منزلية" --platform=web,android,ios --framework=flutter --features=booking,payment,notifications',
    qualityRules: [
      'تحديد نسبة الكود المشترك (Shared Code) وعزل الوحدات المعتمدة على نظام التشغيل',
      'ضمان سلاسة الأداء ومعدل 60fps على الهواتف واستجابة سريعة للويب',
      'إدارة الحالة العامة والتخزين المتزامن بكفاءة'
    ],
    keywords: ['cross platform', 'flutter', 'react native', 'build cross platform', 'multiplatform'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 95,
    isFavorite: true
  },
  {
    id: 'dev-cross-038',
    code: '/flutter app',
    titleAr: 'بناء وتطوير تطبيق Flutter (Android & iOS)',
    titleEn: 'Flutter Multiplatform Application Architecture',
    descriptionAr: 'تخطيط وبرمجة تطبيق Flutter بهيكلة نظيفة وإدارة حالة متقدمة (Riverpod / Bloc) ورسوم متناسقة.',
    descriptionEn: 'Scaffold robust Flutter apps with clean architecture, Riverpod/Bloc state management, and adaptive widgets.',
    group: 'dev',
    devCategory: 'crossplatform',
    outputType: 'mixed',
    outputBadges: ['Android', 'iOS'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'string', required: true, labelAr: 'فكرة التطبيق', labelEn: 'App Idea', hintAr: 'مثال: تطبيق متابعة لياقة', hintEn: 'e.g. Fitness Tracker App' },
      { key: 'features', flag: 'features', isPositional: false, type: 'string', required: false, defaultValue: 'workouts,progress,reminders', labelAr: 'الميزات', labelEn: 'Features', hintAr: 'workouts,progress,reminders', hintEn: 'workouts,progress,reminders' },
      { key: 'state', flag: 'state', isPositional: false, type: 'enum', required: false, defaultValue: 'riverpod', labelAr: 'إدارة الحالة (State)', labelEn: 'State Management', hintAr: 'riverpod, bloc, provider', hintEn: 'State Library', enumValues: [
        { value: 'riverpod', labelAr: 'Riverpod 2.x', labelEn: 'Riverpod 2.x' },
        { value: 'bloc', labelAr: 'BLoC / Cubit', labelEn: 'BLoC pattern' },
        { value: 'provider', labelAr: 'Provider', labelEn: 'Provider' }
      ]}
    ],
    example: '/flutter app "تطبيق متابعة لياقة" --features=workouts,progress,reminders --state=riverpod',
    qualityRules: [
      'فصل طبقات UI و Logic و Data و Services في مجلدات معيارية',
      'تجنب إعادة بناء العناصر غير الضرورية (Rebuilds optimization)',
      'توفير معالجة للأخطاء وتكامل سلس مع خطوط وألوان التصميم'
    ],
    keywords: ['flutter app', 'flutter riverpod', 'dart flutter', 'flutter bloc', 'flutter ui'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 91,
    isFavorite: false
  },
  {
    id: 'dev-cross-039',
    code: '/react native app',
    titleAr: 'بناء وتطوير تطبيق React Native (Expo)',
    titleEn: 'React Native & Expo Architecture',
    descriptionAr: 'تخطيط وبرمجة تطبيق React Native باستخدام Expo Router و TypeScript ومكتبات الواجهات الحديثة.',
    descriptionEn: 'Architect scalable React Native applications with Expo Router, file-based routing, and native modules.',
    group: 'dev',
    devCategory: 'crossplatform',
    outputType: 'mixed',
    outputBadges: ['Android', 'iOS'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'string', required: true, labelAr: 'فكرة التطبيق', labelEn: 'App Concept', hintAr: 'مثال: تطبيق توصيل طلبات', hintEn: 'e.g. Delivery App' },
      { key: 'features', flag: 'features', isPositional: false, type: 'string', required: false, defaultValue: 'orders,tracking,notifications', labelAr: 'الميزات', labelEn: 'Features', hintAr: 'orders,tracking,notifications', hintEn: 'orders,tracking,notifications' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'typescript', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'typescript', hintEn: 'typescript' }
    ],
    example: '/react native app "تطبيق توصيل طلبات" --features=orders,tracking,notifications --language=typescript',
    qualityRules: [
      'الاعتماد على Expo SDK الأحدث والتنقل المبني على الملفات (Expo Router)',
      'استخدام TypeScript الصارم لجميع الـ Props والـ Navigation parameters',
      'تحسين سرعة التمرير واستخدام FlatList / FlashList للقوائم الطويلة'
    ],
    keywords: ['react native app', 'expo router', 'react native typescript', 'mobile react'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 89,
    isFavorite: false
  },
  {
    id: 'dev-cross-040',
    code: '/pwa build',
    titleAr: 'تحويل وبناء تطبيق ويب تقدمي (PWA)',
    titleEn: 'Progressive Web App (PWA) Setup & Service Worker',
    descriptionAr: 'تحويل تطبيق الويب إلى PWA يعمل دون اتصال بالإنترنت، ويدعم التثبيت المباشر والإشعارات.',
    descriptionEn: 'Transform web apps into installable Progressive Web Apps with offline caching, Service Workers, and manifest.',
    group: 'dev',
    devCategory: 'crossplatform',
    outputType: 'mixed',
    outputBadges: ['ويب', 'Android', 'iOS'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'string', required: true, labelAr: 'اسم المنصة / التطبيق', labelEn: 'App Domain', hintAr: 'مثال: منصة تعليمية', hintEn: 'e.g. Learning platform' },
      { key: 'features', flag: 'features', isPositional: false, type: 'string', required: false, defaultValue: 'offline,installable,notifications', labelAr: 'ميزات PWA', labelEn: 'PWA Features', hintAr: 'offline,installable,notifications', hintEn: 'offline,installable,notifications' },
      { key: 'framework', flag: 'framework', isPositional: false, type: 'string', required: false, defaultValue: 'react', labelAr: 'إطار العمل', labelEn: 'Framework', hintAr: 'react, vite, nextjs', hintEn: 'react, vite, nextjs' }
    ],
    example: '/pwa build "منصة تعليمية" --features=offline,installable,notifications --framework=react',
    qualityRules: [
      'توليد ملف manifest.webmanifest كامل مع الأيقونات والألوان والتوجيه',
      'إعداد Service Worker باستخدام Workbox مع استراتيجيات التخزين (Stale-While-Revalidate)',
      'توفير واجهة تفاعلية مخصصة لتشجيع المستخدم على التثبيت (Install Prompt)'
    ],
    keywords: ['pwa build', 'progressive web app', 'service worker', 'offline web', 'installable web'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 87,
    isFavorite: false
  },
  {
    id: 'dev-cross-041',
    code: '/shared backend',
    titleAr: 'تصميم Backend موحد للويب وتطبيقات الجوال',
    titleEn: 'Unified Multi-Client Backend Architecture',
    descriptionAr: 'تصميم خادم خلفي وقاعدة بيانات موحدة تخدم الويب وتطبيقات Android وiOS بكفاءة وأمان.',
    descriptionEn: 'Design centralized API gateway and backend services serving web, iOS, and Android clients uniformly.',
    group: 'dev',
    devCategory: 'crossplatform',
    outputType: 'plan',
    outputBadges: ['مزدوج', 'Backend'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'string', required: true, labelAr: 'المشروع', labelEn: 'Project Domain', hintAr: 'مثال: تطبيق متجر', hintEn: 'e.g. Store app' },
      { key: 'clients', flag: 'clients', isPositional: false, type: 'string', required: false, defaultValue: 'web,android,ios', labelAr: 'العملاء المتصلون', labelEn: 'Clients', hintAr: 'web,android,ios', hintEn: 'web,android,ios' },
      { key: 'api', flag: 'api', isPositional: false, type: 'string', required: false, defaultValue: 'rest', labelAr: 'نوع الـ API', labelEn: 'API Type', hintAr: 'rest, graphql', hintEn: 'rest, graphql' },
      { key: 'database', flag: 'database', isPositional: false, type: 'string', required: false, defaultValue: 'postgresql', labelAr: 'قاعدة البيانات', labelEn: 'Database', hintAr: 'postgresql', hintEn: 'postgresql' }
    ],
    example: '/shared backend "تطبيق متجر" --clients=web,android,ios --api=rest --database=postgresql',
    qualityRules: [
      'توحيد منطق التحقق والصلاحيات (Auth) بين جميع المنصات',
      'توفير استجابات مخصصة ومضغوطة لتقليل استهلاك بيانات الجوال',
      'إدارة إصدارات الـ API (API Versioning) لضمان عدم توقف الإصدارات القديمة من التطبيقات'
    ],
    keywords: ['shared backend', 'multi-client api', 'cross platform backend', 'unified api'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 84,
    isFavorite: false
  },
  {
    id: 'dev-cross-042',
    code: '/cross platform ui',
    titleAr: 'نظام تصميم موحد للويب والجوال (Design System)',
    titleEn: 'Unified Multiplatform Design System',
    descriptionAr: 'بناء نظام رموز وتصميم (Design Tokens) موحد يوفر تجربة متناغمة بين المتصفح وشاشات الهواتف.',
    descriptionEn: 'Establish shared design tokens (colors, typography, spacing) translating cleanly between Web and Native UI.',
    group: 'dev',
    devCategory: 'crossplatform',
    outputType: 'text',
    outputBadges: ['مزدوج', 'كود'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'string', required: true, labelAr: 'المشروع', labelEn: 'App Domain', hintAr: 'مثال: تطبيق بنكي', hintEn: 'e.g. Banking App' },
      { key: 'platform', flag: 'platform', isPositional: false, type: 'string', required: false, defaultValue: 'web,android,ios', labelAr: 'المنصات', labelEn: 'Platforms', hintAr: 'web,android,ios', hintEn: 'web,android,ios' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'design-system', labelAr: 'الأسلوب', labelEn: 'Style Spec', hintAr: 'design-system, tailwind, tokens', hintEn: 'design-system' }
    ],
    example: '/cross platform ui "تطبيق بنكي" --platform=web,android,ios --style=design-system',
    qualityRules: [
      'تعريف Design Tokens مستقلة عن المنصة بصيغة JSON قابلة للتصدير',
      'مراعاة الفروق الطبيعية بين واجهات الهواتف وأنظمة الويب',
      'الالتزام بقواعد التباين وسهولة الوصول على جميع الأجهزة'
    ],
    keywords: ['cross platform ui', 'design system', 'design tokens', 'unified ui', 'multiplatform styling'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 79,
    isFavorite: false
  },
  {
    id: 'dev-cross-043',
    code: '/mobile web sync',
    titleAr: 'مزامنة البيانات بين الويب والجوال (Offline Sync)',
    titleEn: 'Offline-First Data Sync & Conflict Resolution',
    descriptionAr: 'تخطيط وبرمجة آلية مزامنة البيانات بين المتصفح والتطبيق مع حل النزاعات وتخزين التغييرات محلياً.',
    descriptionEn: 'Design offline-first synchronization protocols, delta syncing, and conflict resolution mechanisms.',
    group: 'dev',
    devCategory: 'crossplatform',
    outputType: 'plan',
    outputBadges: ['مزدوج', 'Backend'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'string', required: true, labelAr: 'اسم المنظومة', labelEn: 'Domain', hintAr: 'مثال: تطبيق إدارة مخزون', hintEn: 'e.g. Inventory Management' },
      { key: 'features', flag: 'features', isPositional: false, type: 'string', required: false, defaultValue: 'offline-sync,conflict-resolution', labelAr: 'الميزات', labelEn: 'Features', hintAr: 'offline-sync,conflict-resolution', hintEn: 'offline-sync' },
      { key: 'database', flag: 'database', isPositional: false, type: 'string', required: false, defaultValue: 'postgresql', labelAr: 'قاعدة البيانات المركزية', labelEn: 'Main DB', hintAr: 'postgresql', hintEn: 'postgresql' }
    ],
    example: '/mobile web sync "تطبيق إدارة مخزون" --features=offline-sync,conflict-resolution --database=postgresql',
    qualityRules: [
      'استخدام طوابع زمنية (Timestamps / Vector Clocks) لتتبع التعديلات',
      'تطبيق استراتيجية Last-Write-Wins أو الدمج الذكي لحل تعارض البيانات',
      'طابور محلي (Local Mutation Queue) لحفظ العمليات أثناء انقطاع الإنترنت'
    ],
    keywords: ['mobile web sync', 'offline first', 'data synchronization', 'conflict resolution', 'local queue'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 83,
    isFavorite: false
  },
  {
    id: 'dev-cross-044',
    code: '/cross platform security',
    titleAr: 'قائمة التدقيق الأمني الموحد للمنصات (ضمن مشروع مصرح به)',
    titleEn: 'Unified Multiplatform Security Checklist (Authorized)',
    descriptionAr: 'قائمة مراجعة أمنية شاملة وموحدة للويب وAndroid وiOS ضمن المشاريع المصرح بها تغطي المصادقة والأسرار.',
    descriptionEn: 'Holistic security baseline spanning Web, iOS, and Android covering auth, key storage, and API defenses.',
    group: 'dev',
    devCategory: 'crossplatform',
    outputType: 'analysis',
    outputBadges: ['مزدوج', 'أمن'],
    params: [
      { key: 'platform_name', flag: 'platform_name', isPositional: true, type: 'string', required: true, labelAr: 'المنصة المستهدفة', labelEn: 'System', hintAr: 'مثال: منصة مدفوعات', hintEn: 'e.g. Payment Platform' },
      { key: 'scope', flag: 'scope', isPositional: false, type: 'string', required: false, defaultValue: 'authorized-project', labelAr: 'نطاق الترخيص', labelEn: 'Scope', hintAr: 'authorized-project', hintEn: 'authorized-project' },
      { key: 'check', flag: 'check', isPositional: false, type: 'string', required: false, defaultValue: 'auth,secrets,api,storage,privacy', labelAr: 'محاور التدقيق', labelEn: 'Checks', hintAr: 'auth,secrets,api,storage,privacy', hintEn: 'auth,secrets,api,storage,privacy' }
    ],
    example: '/cross platform security "منصة مدفوعات" --scope=authorized-project --check=auth,secrets,api,storage,privacy',
    qualityRules: [
      'تنبيه صارم: مخصص فقط للمراجعات الدفاعية على تطبيقات وأنظمة مصرح لك بفحصها',
      'توحيد معايير تخزين الأسرار (Keychain في iOS، EncryptedSharedPreferences في Android، HttpOnly Cookies في Web)',
      'فحص شهادات SSL Pinning والتحقق من سلامة البيئة من الجيلبريك والروت'
    ],
    keywords: ['cross platform security', 'mobile web security', 'unified security audit', 'owasp crossplatform'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 90,
    isFavorite: true
  }
];
