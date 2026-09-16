import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const DEV_WEB_PROMPTS: CommandPrompt[] = [
  {
    id: 'dev-web-011',
    code: '/build platform',
    titleAr: 'بناء وتشييد منصة متكاملة',
    titleEn: 'End-to-End Platform Blueprint',
    descriptionAr: 'خطة تنفيذية متكاملة لبناء منصة رقمية تشمل الواجهات، منطق الأعمال، إدارة المستخدمين والبيانات.',
    descriptionEn: 'Full execution blueprint to construct a digital platform across frontend, backend, business logic, and security.',
    group: 'dev',
    devCategory: 'web',
    outputType: 'plan',
    outputBadges: ['منصة'],
    params: [
      { key: 'platform_name', flag: 'platform_name', isPositional: true, type: 'string', required: true, labelAr: 'اسم / مجال المنصة', labelEn: 'Platform Domain', hintAr: 'مثال: منصة دورات تدريبية', hintEn: 'e.g. Training Courses Platform' },
      { key: 'roles', flag: 'roles', isPositional: false, type: 'string', required: false, defaultValue: 'student,instructor,admin', labelAr: 'الأدوار', labelEn: 'Roles', hintAr: 'student,instructor,admin', hintEn: 'student,instructor,admin' },
      { key: 'features', flag: 'features', isPositional: false, type: 'string', required: false, defaultValue: 'courses,progress,certificates', labelAr: 'الميزات الأساسية', labelEn: 'Features', hintAr: 'courses,progress,certificates', hintEn: 'courses,progress,certificates' },
      { key: 'stack', flag: 'stack', isPositional: false, type: 'string', required: false, defaultValue: 'react,nodejs,postgresql', labelAr: 'المكدس التقني', labelEn: 'Stack', hintAr: 'react,nodejs,postgresql', hintEn: 'react,nodejs,postgresql' },
      resolveParam('language')
    ],
    example: '/build platform "منصة دورات تدريبية" --roles=student,instructor,admin --features=courses,progress,certificates --stack=react,nodejs,postgresql',
    qualityRules: [
      'توزيع معالم المشروع على مراحل تنفيذ واضحة (Milestones)',
      'فصل الاهتمامات بين طبقة العرض والخدمات وقاعدة البيانات',
      'تحديد بنية التوثيق والأدوار والتحقق الأمني'
    ],
    keywords: ['منصة', 'بناء منصة', 'build platform', 'fullstack architecture', 'web platform'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 92,
    isFavorite: true
  },
  {
    id: 'dev-web-012',
    code: '/build web app',
    titleAr: 'بناء تطبيق ويب تفاعلي حديث',
    titleEn: 'Interactive Web Application Setup',
    descriptionAr: 'إنشاء تصور وبنية تقنية لتطبيق ويب تفاعلي غني بالحالة مع إدارة البيانات والأداء.',
    descriptionEn: 'Generate technical architecture, state management, and page structure for a rich interactive SPA/SSR web app.',
    group: 'dev',
    devCategory: 'web',
    outputType: 'mixed',
    outputBadges: ['ويب'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'string', required: true, labelAr: 'فكرة التطبيق', labelEn: 'App Concept', hintAr: 'مثال: تطبيق إدارة مشاريع', hintEn: 'e.g. Project management web app' },
      { key: 'features', flag: 'features', isPositional: false, type: 'string', required: false, defaultValue: 'tasks,teams,calendar,reports', labelAr: 'الميزات', labelEn: 'Features', hintAr: 'tasks,teams,calendar,reports', hintEn: 'tasks,teams,calendar,reports' },
      { key: 'language', flag: 'language', isPositional: false, type: 'enum', required: false, defaultValue: 'typescript', labelAr: 'لغة البرمجة', labelEn: 'Code Language', hintAr: 'typescript أو javascript', hintEn: 'Language', enumValues: [
        { value: 'typescript', labelAr: 'TypeScript', labelEn: 'TypeScript' },
        { value: 'javascript', labelAr: 'JavaScript', labelEn: 'JavaScript' }
      ]}
    ],
    example: '/build web app "تطبيق إدارة مشاريع" --features=tasks,teams,calendar,reports --language=typescript',
    qualityRules: [
      'هيكلة واضحة للمجلدات والـ Components وإدارة الحالة (State)',
      'تطبيق مبادئ الأداء العالي وفصل استدعاءات البيانات في Hooks مخصصة',
      'تضمين أكواد نموذجية للواجهات الرئيسية'
    ],
    keywords: ['تطبيق ويب', 'build web app', 'react app', 'nextjs', 'spa architecture'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 96,
    isFavorite: true
  },
  {
    id: 'dev-web-013',
    code: '/landing page build',
    titleAr: 'بناء وتصميم صفحة هبوط تحويلية (Landing Page)',
    titleEn: 'High-Converting Landing Page Scaffold',
    descriptionAr: 'بناء هيكل وكود صفحة هبوط تسويقية مع الأقسام المتتابعة والمحتوى والإجراء المباشر (CTA).',
    descriptionEn: 'Scaffold a modern, conversion-focused landing page structure with hero, features, testimonials, and CTA.',
    group: 'dev',
    devCategory: 'web',
    outputType: 'mixed',
    outputBadges: ['ويب'],
    params: [
      { key: 'service', flag: 'service', isPositional: true, type: 'string', required: true, labelAr: 'الخدمة / المنتج', labelEn: 'Product / Service', hintAr: 'مثال: خدمة تنظيف منازل', hintEn: 'e.g. Home cleaning service' },
      { key: 'goal', flag: 'goal', isPositional: false, type: 'string', required: false, defaultValue: 'booking', labelAr: 'الهدف الرئيسي', labelEn: 'Primary Goal', hintAr: 'booking, signup, leads', hintEn: 'booking, signup, leads' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'modern', labelAr: 'الأسلوب البصري', labelEn: 'Design Style', hintAr: 'modern, minimal, bold', hintEn: 'modern, minimal, bold' },
      resolveParam('language')
    ],
    example: '/landing page build "خدمة تنظيف منازل" --goal=booking --language=ar --style=modern',
    qualityRules: [
      'تسلسل أقسام مقنع: Hero, Social Proof, Features, Pricing, FAQs, Footer',
      'تحسين سرعة التحميل وتوافق الهواتف 100%',
      'تضمين كود Tailwind CSS متناسق بصرياً'
    ],
    keywords: ['صفحة هبوط', 'landing page', 'landing page build', 'conversion page', 'hero section'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 84,
    isFavorite: false
  },
  {
    id: 'dev-web-014',
    code: '/dashboard build',
    titleAr: 'تخطيط وبناء لوحة تحكم وإحصائيات (Dashboard)',
    titleEn: 'Analytics Dashboard Layout & Cards',
    descriptionAr: 'تخطيط لوحة تحكم ذكية مع الرسوم البيانية، بطاقات المؤشرات، فلاتر البيانات، وتخصيص الأدوار.',
    descriptionEn: 'Plan and code an analytical dashboard with KPI metrics, chart panels, interactive data filters, and role views.',
    group: 'dev',
    devCategory: 'web',
    outputType: 'mixed',
    outputBadges: ['ويب'],
    params: [
      { key: 'type', flag: 'type', isPositional: true, type: 'string', required: true, labelAr: 'نوع اللوحة', labelEn: 'Dashboard Type', hintAr: 'مثال: لوحة مبيعات', hintEn: 'e.g. Sales dashboard' },
      { key: 'users', flag: 'users', isPositional: false, type: 'string', required: false, defaultValue: 'manager,sales-agent', labelAr: 'المستخدمون', labelEn: 'Target Users', hintAr: 'manager,sales-agent', hintEn: 'manager,sales-agent' },
      { key: 'metrics', flag: 'metrics', isPositional: false, type: 'string', required: false, defaultValue: 'revenue,orders,leads', labelAr: 'المؤشرات الرئيسية (KPIs)', labelEn: 'Metrics', hintAr: 'revenue,orders,leads', hintEn: 'revenue,orders,leads' },
      resolveParam('language')
    ],
    example: '/dashboard build "لوحة مبيعات" --users=manager,sales-agent --metrics=revenue,orders,leads',
    qualityRules: [
      'توزيع بصري مريح ومريح للعين مع تجنب التكدس المعلوماتي',
      'تحديد بنية تدفق البيانات واستجابة الرسوم البيانية للتصفية',
      'دعم الوضعين الفاتح والداكن (Light/Dark mode)'
    ],
    keywords: ['لوحة تحكم', 'dashboard build', 'analytics dashboard', 'kpi cards', 'charts ui'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 93,
    isFavorite: true
  },
  {
    id: 'dev-web-015',
    code: '/admin panel',
    titleAr: 'تصميم لوحة إدارة النظام (Admin Panel)',
    titleEn: 'Backoffice & Admin Portal Architecture',
    descriptionAr: 'تصميم وبناء لوحة تحكم متقدمة للإدارة مع جداول CRUD، مصفوفة الصلاحيات، وسجلات العمليات.',
    descriptionEn: 'Design an enterprise-grade admin backoffice with CRUD tables, role-based access, and audit logs.',
    group: 'dev',
    devCategory: 'web',
    outputType: 'mixed',
    outputBadges: ['ويب', 'منصة'],
    params: [
      { key: 'system', flag: 'system', isPositional: true, type: 'string', required: true, labelAr: 'النظام', labelEn: 'System', hintAr: 'مثال: متجر إلكتروني', hintEn: 'e.g. E-commerce store' },
      { key: 'features', flag: 'features', isPositional: false, type: 'string', required: false, defaultValue: 'products,orders,customers,coupons', labelAr: 'الوظائف الإدارية', labelEn: 'Admin Features', hintAr: 'products,orders,customers,coupons', hintEn: 'Admin modules' },
      { key: 'roles', flag: 'roles', isPositional: false, type: 'string', required: false, defaultValue: 'admin,editor', labelAr: 'الأدوار الإدارية', labelEn: 'Admin Roles', hintAr: 'admin,editor,superadmin', hintEn: 'admin,editor' },
      resolveParam('language')
    ],
    example: '/admin panel "متجر إلكتروني" --features=products,orders,customers,coupons --roles=admin,editor',
    qualityRules: [
      'هيكلة قوية لعمليات الجداول (Pagination, Sorting, Bulk Actions, Search)',
      'عزل صلاحيات المشرفين (RBAC) وحماية المسارات الحساسة',
      'توثيق إجراءات الحذف الآمن وتأكيد العمليات الحرجة'
    ],
    keywords: ['admin panel', 'لوحة إدارة', 'backoffice', 'crud admin', 'rbac dashboard'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 88,
    isFavorite: false
  },
  {
    id: 'dev-web-016',
    code: '/frontend component',
    titleAr: 'بناء مكون واجهة برمجي قابل لإعادة الاستخدام',
    titleEn: 'Reusable Frontend Component Builder',
    descriptionAr: 'إنشاء مكون Frontend نظيف وعالي الجودة يدعم TypeScript وTailwind وحالات التحميل والخطأ والـ Props.',
    descriptionEn: 'Generate a robust, accessible, modular UI component with TypeScript props, loading states, and Tailwind styling.',
    group: 'dev',
    devCategory: 'web',
    outputType: 'text',
    outputBadges: ['ويب', 'كود'],
    params: [
      { key: 'component', flag: 'component', isPositional: true, type: 'string', required: true, labelAr: 'اسم ونوع المكون', labelEn: 'Component Name', hintAr: 'مثال: بطاقة منتج', hintEn: 'e.g. Product Card' },
      { key: 'framework', flag: 'framework', isPositional: false, type: 'enum', required: false, defaultValue: 'react', labelAr: 'إطار العمل', labelEn: 'Framework', hintAr: 'react, vue, svelte', hintEn: 'Framework', enumValues: [
        { value: 'react', labelAr: 'React', labelEn: 'React' },
        { value: 'vue', labelAr: 'Vue 3', labelEn: 'Vue 3' },
        { value: 'svelte', labelAr: 'Svelte', labelEn: 'Svelte' }
      ]},
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'typescript', labelAr: 'لغة الكود', labelEn: 'Language', hintAr: 'typescript', hintEn: 'typescript' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'tailwind', labelAr: 'نظام التنسيق', labelEn: 'Styling', hintAr: 'tailwind, css-modules', hintEn: 'tailwind, css-modules' }
    ],
    example: '/frontend component "بطاقة منتج" --framework=react --language=typescript --style=tailwind',
    qualityRules: [
      'كتابة واجهات Types دقيقة للـ Props مع قيم افتراضية واضحة',
      'تغطية جميع الحالات: Default, Hover, Focused, Disabled, Loading, Error',
      'الالتزام بمعايير الوصولية (WAI-ARIA semantics)'
    ],
    keywords: ['frontend component', 'مكون واجهة', 'react component', 'tailwind ui', 'typescript component'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 95,
    isFavorite: true
  },
  {
    id: 'dev-web-017',
    code: '/responsive ui',
    titleAr: 'تحويل وتحسين الواجهات للتجاوب (Responsive UI)',
    titleEn: 'Responsive UI & Viewport Optimization',
    descriptionAr: 'تكييف واجهة الويب لتعمل بمرونة وسلاسة تامة على الجوال، الأجهزة اللوحية، والشاشات العريضة.',
    descriptionEn: 'Refactor and adapt UI layouts across mobile, tablet, and desktop breakpoints with fluid typography and layout shifts.',
    group: 'dev',
    devCategory: 'web',
    outputType: 'text',
    outputBadges: ['ويب', 'كود'],
    params: [
      { key: 'page', flag: 'page', isPositional: true, type: 'string', required: true, labelAr: 'الصفحة أو الواجهة', labelEn: 'Page/Section', hintAr: 'مثال: صفحة متجر إلكتروني', hintEn: 'e.g. E-commerce store page' },
      { key: 'framework', flag: 'framework', isPositional: false, type: 'string', required: false, defaultValue: 'react', labelAr: 'إطار العمل', labelEn: 'Framework', hintAr: 'react, html, vue', hintEn: 'react, html, vue' },
      { key: 'breakpoints', flag: 'breakpoints', isPositional: false, type: 'string', required: false, defaultValue: 'mobile,tablet,desktop', labelAr: 'نقاط التجاوب', labelEn: 'Breakpoints', hintAr: 'mobile,tablet,desktop', hintEn: 'mobile,tablet,desktop' }
    ],
    example: '/responsive ui "صفحة متجر إلكتروني" --framework=react --breakpoints=mobile,tablet,desktop',
    qualityRules: [
      'تطبيق مبدأ Mobile-First وتجنب التمرير الأفقي غير المقصود',
      'ضبط مساحات اللمس (Touch Targets 44px+) على الهواتف',
      'تحسين ظهور الجداول والقوائم الطويلة في الشاشات الصغيرة'
    ],
    keywords: ['responsive ui', 'تجاوب الشاشات', 'mobile friendly', 'tailwind responsive', 'media queries'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 79,
    isFavorite: false
  },
  {
    id: 'dev-web-018',
    code: '/rtl web',
    titleAr: 'مواءمة واجهات الويب للغة العربية (RTL & BiDi)',
    titleEn: 'Arabic RTL & BiDi Localization Check',
    descriptionAr: 'مراجعة وتعديل واجهات الويب لدعم اتجاه اليمين إلى اليسار (RTL)، محاذاة الأيقونات، والنصوص الثنائية.',
    descriptionEn: 'Audit and adapt web interfaces for full RTL layout alignment, bidirectional text handling, and mirrored UI icons.',
    group: 'dev',
    devCategory: 'web',
    outputType: 'text',
    outputBadges: ['ويب', 'كود'],
    params: [
      { key: 'target', flag: 'target', isPositional: true, type: 'string', required: true, labelAr: 'الواجهة المستهدفة', labelEn: 'Target UI', hintAr: 'مثال: لوحة تحكم عربية', hintEn: 'e.g. Arabic admin dashboard' },
      { key: 'framework', flag: 'framework', isPositional: false, type: 'string', required: false, defaultValue: 'react', labelAr: 'إطار العمل', labelEn: 'Framework', hintAr: 'react, tailwind', hintEn: 'react, tailwind' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar', hintEn: 'ar' },
      { key: 'check', flag: 'check', isPositional: false, type: 'string', required: false, defaultValue: 'bidi,responsive', labelAr: 'محاور الفحص', labelEn: 'Checks', hintAr: 'bidi,responsive,icons', hintEn: 'bidi,responsive' }
    ],
    example: '/rtl web "لوحة تحكم عربية" --framework=react --language=ar --check=bidi,responsive',
    qualityRules: [
      'استخدام الفئات المنطقية (Logical Properties مثل ms, me, ps, pe) في CSS',
      'معالجة النصوص المختلطة (عربي + إنجليزي/أرقام) لمنع تشوه الترتيب',
      'عكس أيقونات الاتجاهات وتثبيت أيقونات الوسائط (Play/Volume)'
    ],
    keywords: ['rtl web', 'تعريب واجهات', 'bidi support', 'arabic ui', 'logical properties'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 86,
    isFavorite: false
  },
  {
    id: 'dev-web-019',
    code: '/web form',
    titleAr: 'بناء النماذج التفاعلية مع التحقق (Web Forms)',
    titleEn: 'Robust Web Form & Client Validation',
    descriptionAr: 'إنشاء نموذج إدخال متطور مع التحقق المباشر من الحقول (Validation)، معالجة الأخطاء، وحالات الإرسال.',
    descriptionEn: 'Construct schema-validated web forms with client-side verification, accessible error messages, and async submit states.',
    group: 'dev',
    devCategory: 'web',
    outputType: 'text',
    outputBadges: ['ويب', 'كود'],
    params: [
      { key: 'form_name', flag: 'form_name', isPositional: true, type: 'string', required: true, labelAr: 'نوع وغرض النموذج', labelEn: 'Form Name', hintAr: 'مثال: نموذج حجز موعد', hintEn: 'e.g. Appointment booking form' },
      { key: 'framework', flag: 'framework', isPositional: false, type: 'string', required: false, defaultValue: 'react', labelAr: 'إطار العمل', labelEn: 'Framework', hintAr: 'react, react-hook-form, zod', hintEn: 'react, react-hook-form' },
      { key: 'fields', flag: 'fields', isPositional: false, type: 'string', required: false, defaultValue: 'name,phone,date,service', labelAr: 'الحقول المطلوبة', labelEn: 'Form Fields', hintAr: 'name,phone,date,service', hintEn: 'name,phone,date,service' },
      { key: 'validation', flag: 'validation', isPositional: false, type: 'string', required: false, defaultValue: 'yes', labelAr: 'تضمين التحقق', labelEn: 'Validation Schema', hintAr: 'yes أو zod', hintEn: 'yes or zod' }
    ],
    example: '/web form "نموذج حجز موعد" --framework=react --fields=name,phone,date,service --validation=yes',
    qualityRules: [
      'ربط النموذج بمخطط تحقق صارم (Zod/Yup schema)',
      'إظهار رسائل خطأ واضحة ومقترنة بحقول الإدخال عبر aria-describedby',
      'تعطيل زر الإرسال أثناء التحميل لمنع التكرار (Double Submit)'
    ],
    keywords: ['web form', 'نموذج ويب', 'react hook form', 'zod validation', 'accessible forms'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 81,
    isFavorite: false
  },
  {
    id: 'dev-web-020',
    code: '/web accessibility',
    titleAr: 'تدقيق وتحسين إمكانية الوصول (WCAG Accessibility)',
    titleEn: 'Web Accessibility Audit (WCAG 2.1 AA)',
    descriptionAr: 'فحص وتحسين الوصولية: التنقل بلوحة المفاتيح، نسب التباين اللوني، دلالات ARIA، وقارئات الشاشة.',
    descriptionEn: 'Audit web components and pages for WCAG 2.1 AA compliance, screen reader support, keyboard traps, and contrast.',
    group: 'dev',
    devCategory: 'web',
    outputType: 'analysis',
    outputBadges: ['ويب', 'مراجعة'],
    params: [
      { key: 'code', flag: 'code', isPositional: true, type: 'string', required: true, labelAr: 'كود الصفحة أو وصفها', labelEn: 'Code / Page HTML', hintAr: 'الصق كود الصفحة أو المكون', hintEn: 'Paste component/HTML code' },
      { key: 'standard', flag: 'standard', isPositional: false, type: 'enum', required: false, defaultValue: 'wcag-aa', labelAr: 'معيار الوصولية', labelEn: 'Standard', hintAr: 'wcag-aa, wcag-aaa', hintEn: 'Standard', enumValues: [
        { value: 'wcag-aa', labelAr: 'معيار WCAG 2.1 AA (القياسي)', labelEn: 'WCAG 2.1 AA' },
        { value: 'wcag-aaa', labelAr: 'معيار WCAG 2.1 AAA (المتقدم)', labelEn: 'WCAG 2.1 AAA' }
      ]},
      { key: 'framework', flag: 'framework', isPositional: false, type: 'string', required: false, defaultValue: 'react', labelAr: 'إطار العمل', labelEn: 'Framework', hintAr: 'react, html', hintEn: 'react, html' }
    ],
    example: '/web accessibility "[الصق كود الصفحة]" --standard=wcag-aa --framework=react',
    qualityRules: [
      'فحص تباين الألوان (Color Contrast 4.5:1 للنصوص)',
      'التحقق من إمكانية الوصول الكامل عبر زر Tab ومؤشرات التركيز (Focus rings)',
      'تصحيح وسوم HTML الدلالية وإضافة نصوص البديل (Alt text) والـ ARIA labels'
    ],
    keywords: ['web accessibility', 'a11y', 'wcag', 'إمكانية الوصول', 'screen reader'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 75,
    isFavorite: false
  }
];
