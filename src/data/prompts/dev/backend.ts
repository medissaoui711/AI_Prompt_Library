import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const DEV_BACKEND_PROMPTS: CommandPrompt[] = [
  {
    id: 'dev-back-045',
    code: '/build backend',
    titleAr: 'تخطيط وبناء خادم Backend متكامل',
    titleEn: 'Backend Server Architecture & Foundation',
    descriptionAr: 'تخطيط وهندسة خادم Backend متكامل مع إعدادات الأمان وقاعدة البيانات وهيكلة المجلدات والخدمات.',
    descriptionEn: 'Plan and architect a production-ready backend service with database connectors, middleware, and domain services.',
    group: 'dev',
    devCategory: 'backend',
    outputType: 'mixed',
    outputBadges: ['Backend'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'string', required: true, labelAr: 'نوع المنصة / الخدمة', labelEn: 'Service Domain', hintAr: 'مثال: منصة حجز عيادات', hintEn: 'e.g. Clinic booking system' },
      { key: 'stack', flag: 'stack', isPositional: false, type: 'string', required: false, defaultValue: 'nodejs,postgresql', labelAr: 'المكدس التقني', labelEn: 'Stack', hintAr: 'nodejs,postgresql / nestjs,mongodb', hintEn: 'nodejs,postgresql' },
      { key: 'features', flag: 'features', isPositional: false, type: 'string', required: false, defaultValue: 'auth,booking,payments', labelAr: 'الميزات الأساسية', labelEn: 'Features', hintAr: 'auth,booking,payments', hintEn: 'auth,booking,payments' }
    ],
    example: '/build backend "منصة حجز عيادات" --stack=nodejs,postgresql --features=auth,booking,payments',
    qualityRules: [
      'فصل طبقات Controller و Service و Repository بشكل واضح',
      'تضمين Middleware للأمان (Helmet, CORS, Rate Limiting)',
      'إدارة الإعدادات ومتغيرات البيئة بأمان عبر Schema Validation'
    ],
    keywords: ['build backend', 'backend architecture', 'nodejs backend', 'express server', 'nestjs'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 94,
    isFavorite: true
  },
  {
    id: 'dev-back-046',
    code: '/rest api',
    titleAr: 'بناء وبرمجة REST API مع OpenAPI / Swagger',
    titleEn: 'RESTful API Specification & Endpoints',
    descriptionAr: 'تصميم وبرمجة REST API متكامل مع معايير HTTP، التوثيق، التحقق من البيانات، وأكواد الأخطاء.',
    descriptionEn: 'Generate RESTful API endpoints with request validation, structured JSON responses, and OpenAPI docs.',
    group: 'dev',
    devCategory: 'backend',
    outputType: 'mixed',
    outputBadges: ['Backend', 'API'],
    params: [
      { key: 'system', flag: 'system', isPositional: true, type: 'string', required: true, labelAr: 'النظام المستهدف', labelEn: 'Target System', hintAr: 'مثال: متجر إلكتروني', hintEn: 'e.g. E-commerce system' },
      { key: 'resources', flag: 'resources', isPositional: false, type: 'string', required: false, defaultValue: 'products,carts,orders,payments', labelAr: 'الموارد (Resources)', labelEn: 'Resources', hintAr: 'products,carts,orders,payments', hintEn: 'products,carts,orders,payments' },
      { key: 'format', flag: 'format', isPositional: false, type: 'enum', required: false, defaultValue: 'openapi', labelAr: 'صيغة المخرج', labelEn: 'Format', hintAr: 'openapi أو code', hintEn: 'Format', enumValues: [
        { value: 'openapi', labelAr: 'مواصفة OpenAPI / Swagger', labelEn: 'OpenAPI 3.1 Spec' },
        { value: 'code', labelAr: 'كود Routes & Handlers كامل', labelEn: 'Express/Fastify Routes Code' }
      ]}
    ],
    example: '/rest api "متجر إلكتروني" --resources=products,carts,orders,payments --format=openapi',
    qualityRules: [
      'تطبيق قواعد التسمية القياسية للـ Endpoints والتعامل الصحيح مع رموز الحالة (Status Codes)',
      'التحقق من صحة المدخلات (Input Validation) قبل وصولها لقاعدة البيانات',
      'تضمين آليات ترقيم الصفحات (Cursor/Offset Pagination)'
    ],
    keywords: ['rest api', 'openapi', 'swagger', 'api endpoints', 'backend routing'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 88,
    isFavorite: false
  },
  {
    id: 'dev-back-047',
    code: '/graphql api',
    titleAr: 'تصميم وبناء GraphQL API (Schema & Resolvers)',
    titleEn: 'GraphQL Schema & Resolvers Architecture',
    descriptionAr: 'تصميم مخطط GraphQL كامل مع Types و Queries و Mutations و Subscriptions ومنع استعلامات N+1.',
    descriptionEn: 'Design comprehensive GraphQL schemas, queries, mutations, and DataLoader patterns for N+1 prevention.',
    group: 'dev',
    devCategory: 'backend',
    outputType: 'text',
    outputBadges: ['Backend', 'API'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'string', required: true, labelAr: 'المشروع', labelEn: 'Domain', hintAr: 'مثال: منصة دورات', hintEn: 'e.g. Courses Platform' },
      { key: 'entities', flag: 'entities', isPositional: false, type: 'string', required: false, defaultValue: 'users,courses,lessons,enrollments', labelAr: 'الكينونات والعلاقات', labelEn: 'Entities', hintAr: 'users,courses,lessons,enrollments', hintEn: 'users,courses,lessons,enrollments' }
    ],
    example: '/graphql api "منصة دورات" --entities=users,courses,lessons,enrollments',
    qualityRules: [
      'كتابة GraphQL Schema Definition Language (SDL) واضحة المعالم',
      'تطبيق DataLoader لتفادي مشكلة N+1 في استعلامات قاعدة البيانات',
      'حماية الخادم من استعلامات العمق المفرط (Query Depth Limiting)'
    ],
    keywords: ['graphql api', 'graphql schema', 'resolvers', 'apollo server', 'dataloader'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 79,
    isFavorite: false
  },
  {
    id: 'dev-back-048',
    code: '/auth system',
    titleAr: 'نظام المصادقة وإدارة الجلسات الآمن (Auth System)',
    titleEn: 'Secure Authentication & Session Architecture',
    descriptionAr: 'تخطيط نظام تسجيل ودخول آمن يدعم JWT و Refresh Tokens أو الجلسات المشفرة مع الحماية من الهجمات.',
    descriptionEn: 'Architect secure authentication with hashed passwords, JWT refresh rotation, HttpOnly cookies, and rate limiting.',
    group: 'dev',
    devCategory: 'backend',
    outputType: 'mixed',
    outputBadges: ['Backend', 'أمن'],
    params: [
      { key: 'system', flag: 'system', isPositional: true, type: 'string', required: true, labelAr: 'اسم النظام', labelEn: 'System', hintAr: 'مثال: منصة تعليمية', hintEn: 'e.g. Learning platform' },
      { key: 'roles', flag: 'roles', isPositional: false, type: 'string', required: false, defaultValue: 'student,instructor,admin', labelAr: 'الأدوار', labelEn: 'Roles', hintAr: 'student,instructor,admin', hintEn: 'student,instructor,admin' },
      { key: 'method', flag: 'method', isPositional: false, type: 'enum', required: false, defaultValue: 'jwt-refresh-tokens', labelAr: 'طريقة المصادقة', labelEn: 'Auth Method', hintAr: 'jwt-refresh-tokens, sessions, oauth', hintEn: 'Method', enumValues: [
        { value: 'jwt-refresh-tokens', labelAr: 'JWT + Refresh Token Rotation', labelEn: 'JWT + Refresh Token Rotation' },
        { value: 'session-cookies', labelAr: 'Encrypted HttpOnly Session Cookies', labelEn: 'Session Cookies (Redis)' },
        { value: 'oauth_sso', labelAr: 'OAuth2 / Social SSO (Google, Apple)', labelEn: 'OAuth 2.0 / SSO' }
      ]}
    ],
    example: '/auth system "منصة تعليمية" --roles=student,instructor,admin --method=jwt-refresh-tokens',
    qualityRules: [
      'تشفير كلمات المرور باستخدام Argon2id أو bcrypt مع Salt كافي',
      'تخزين الـ Tokens في HttpOnly, Secure, SameSite cookies حصراً في المتصفح',
      'تطبيق سياسة التدوير التلقائي للـ Refresh Tokens وإبطال الجلسات عند تسجيل الخروج'
    ],
    keywords: ['auth system', 'jwt authentication', 'refresh tokens', 'secure auth', 'password hashing'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 93,
    isFavorite: true
  },
  {
    id: 'dev-back-049',
    code: '/role permissions',
    titleAr: 'مصفوفة التحكم في الوصول والصلاحيات (RBAC Matrix)',
    titleEn: 'Role-Based Access Control (RBAC) Matrix',
    descriptionAr: 'تصميم مصفوفة الصلاحيات للأدوار والمستخدمين لحماية العمليات الحساسة ومنع الوصول غير المصرح به.',
    descriptionEn: 'Design granular Role-Based or Attribute-Based Access Control matrices with middleware enforcement.',
    group: 'dev',
    devCategory: 'backend',
    outputType: 'plan',
    outputBadges: ['Backend', 'أمن'],
    params: [
      { key: 'system', flag: 'system', isPositional: true, type: 'string', required: true, labelAr: 'النظام', labelEn: 'System Domain', hintAr: 'مثال: منصة إدارة عقارات', hintEn: 'e.g. Real Estate Management' },
      { key: 'roles', flag: 'roles', isPositional: false, type: 'string', required: false, defaultValue: 'admin,agent,owner,tenant', labelAr: 'الأدوار المعنية', labelEn: 'Roles', hintAr: 'admin,agent,owner,tenant', hintEn: 'admin,agent,owner,tenant' },
      { key: 'output', flag: 'output', isPositional: false, type: 'enum', required: false, defaultValue: 'matrix', labelAr: 'صيغة المخرج', labelEn: 'Format', hintAr: 'matrix أو middleware_code', hintEn: 'Format', enumValues: [
        { value: 'matrix', labelAr: 'جدول مصفوفة الصلاحيات (RBAC Matrix)', labelEn: 'Detailed Permission Matrix' },
        { value: 'middleware_code', labelAr: 'كود الـ Guard / Middleware البرمجي', labelEn: 'Auth Guard Middleware Code' }
      ]}
    ],
    example: '/role permissions "منصة إدارة عقارات" --roles=admin,agent,owner,tenant --output=matrix',
    qualityRules: [
      'تطبيق مبدأ أقل الصلاحيات الممكنة (Principle of Least Privilege)',
      'التحقق من ملكية المورد (Object-Level Authorization - IDOR prevention)',
      'فصل صلاحيات القراءة، الإنشاء، التعديل، والحذف لكل دور'
    ],
    keywords: ['role permissions', 'rbac', 'access control', 'permissions matrix', 'authorization middleware'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 86,
    isFavorite: false
  },
  {
    id: 'dev-back-050',
    code: '/payment integration',
    titleAr: 'تكامل بوابات الدفع الإلكتروني (Payment Gateways)',
    titleEn: 'Secure Payment Gateway Integration & Webhooks',
    descriptionAr: 'تخطيط وتطبيق دمج بوابات الدفع مع معالجة الـ Webhooks بشكل آمن دون لمس بيانات البطاقات الحساسة.',
    descriptionEn: 'Architect PCI-DSS compliant checkout flows with Stripe/Payfort/Moyasar webhooks and signature verification.',
    group: 'dev',
    devCategory: 'backend',
    outputType: 'mixed',
    outputBadges: ['Backend', 'ويب', 'تطبيق'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'string', required: true, labelAr: 'المشروع', labelEn: 'App Domain', hintAr: 'مثال: متجر إلكتروني', hintEn: 'e.g. E-Commerce' },
      { key: 'platform', flag: 'platform', isPositional: false, type: 'string', required: false, defaultValue: 'web,android,ios', labelAr: 'المنصات', labelEn: 'Platforms', hintAr: 'web,android,ios', hintEn: 'web,android,ios' },
      { key: 'provider', flag: 'provider', isPositional: false, type: 'string', required: false, defaultValue: 'stripe', labelAr: 'بوابة الدفع', labelEn: 'Payment Gateway', hintAr: 'stripe, moyasar, hyperpay, tap', hintEn: 'stripe, moyasar, hyperpay' },
      { key: 'currency', flag: 'currency', isPositional: false, type: 'string', required: false, defaultValue: 'sar', labelAr: 'العملة', labelEn: 'Currency', hintAr: 'sar, usd, aed', hintEn: 'sar, usd' }
    ],
    example: '/payment integration "متجر إلكتروني" --platform=web,android,ios --provider=stripe --currency=sar',
    qualityRules: [
      'التحقق من توقيع الـ Webhooks (Webhook Signature Verification) لمنع التزوير',
      'تطبيق آليات Idempotency لمنع تكرار خصم المبالغ عند إعادة الإرسال',
      'تسجيل حالة الدفع في قاعدة البيانات وفق دورة حياة واضحة (Pending, Succeeded, Failed, Refunded)'
    ],
    keywords: ['payment integration', 'stripe webhook', 'بوابة دفع', 'مدفوعات إلكترونية', 'moyasar'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 92,
    isFavorite: true
  },
  {
    id: 'dev-back-051',
    code: '/file upload',
    titleAr: 'منظومة رفع وتخزين الملفات الآمنة (S3 / Cloud Storage)',
    titleEn: 'Secure File Upload & Direct S3 Presigned URLs',
    descriptionAr: 'بناء نظام رفع ملفات آمن يعتمد على الروابط الموقعة مسبقاً (Presigned URLs) وفحص الأنواع والأحجام.',
    descriptionEn: 'Implement secure file upload architecture using S3 presigned URLs, MIME sniffing, and virus scanning hooks.',
    group: 'dev',
    devCategory: 'backend',
    outputType: 'mixed',
    outputBadges: ['Backend', 'أمن'],
    params: [
      { key: 'system', flag: 'system', isPositional: true, type: 'string', required: true, labelAr: 'النظام', labelEn: 'System', hintAr: 'مثال: منصة وظائف', hintEn: 'e.g. Job board platform' },
      { key: 'files', flag: 'files', isPositional: false, type: 'string', required: false, defaultValue: 'cv,pdf,image', labelAr: 'أنواع الملفات المسموحة', labelEn: 'Allowed Files', hintAr: 'cv,pdf,image', hintEn: 'cv,pdf,image' },
      { key: 'storage', flag: 'storage', isPositional: false, type: 'string', required: false, defaultValue: 's3', labelAr: 'خدمة التخزين', labelEn: 'Storage Service', hintAr: 's3, gcs, cloudflare-r2', hintEn: 's3, gcs' },
      { key: 'limits', flag: 'limits', isPositional: false, type: 'string', required: false, defaultValue: '10mb', labelAr: 'حد الحجم الأقصى', labelEn: 'Size Limit', hintAr: '5mb, 10mb', hintEn: '5mb, 10mb' }
    ],
    example: '/file upload "منصة وظائف" --files=cv,pdf,image --storage=s3 --limits=10mb',
    qualityRules: [
      'توليد أسماء عشوائية فريدة (UUID) للملفات لمنع الكتابة فوق الملفات الموجودة',
      'فحص الـ Magic Bytes للتحقق من نوع الملف الحقيقي وتجنب الاعتماد على الامتداد فقط',
      'استخدام Presigned URLs لرفع الملفات مباشرة للسحابة دون إرهاق خادم التطبيق'
    ],
    keywords: ['file upload', 's3 upload', 'presigned url', 'رفع ملفات آمن', 'cloud storage upload'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 85,
    isFavorite: false
  },
  {
    id: 'dev-back-052',
    code: '/database migration',
    titleAr: 'ترحيل وتعديل قواعد البيانات (Database Migration)',
    titleEn: 'Database Migration & Schema Evolution',
    descriptionAr: 'كتابة نصوص ترحيل لقاعدة البيانات مع خطة التراجع الآمن (Rollback) وعدم انقطاع الخدمة (Zero-Downtime).',
    descriptionEn: 'Draft zero-downtime database migration scripts (Up/Down) with index creation and data backfilling.',
    group: 'dev',
    devCategory: 'backend',
    outputType: 'text',
    outputBadges: ['Backend', 'كود'],
    params: [
      { key: 'change', flag: 'change', isPositional: true, type: 'string', required: true, labelAr: 'التعديل المطلوب', labelEn: 'Migration Purpose', hintAr: 'مثال: إضافة جدول المدفوعات', hintEn: 'e.g. Add Payments Table' },
      { key: 'database', flag: 'database', isPositional: false, type: 'string', required: false, defaultValue: 'postgresql', labelAr: 'قاعدة البيانات', labelEn: 'Database', hintAr: 'postgresql, mysql', hintEn: 'postgresql' },
      { key: 'tool', flag: 'tool', isPositional: false, type: 'string', required: false, defaultValue: 'prisma', labelAr: 'أداة الترحيل', labelEn: 'ORM / Tool', hintAr: 'prisma, drizzle, knex, raw-sql', hintEn: 'prisma, drizzle' }
    ],
    example: '/database migration "إضافة جدول المدفوعات" --database=postgresql --tool=prisma',
    qualityRules: [
      'كتابة نصوص الترقية (Up) والتراجع (Down) بشكل متناظر',
      'تجنب قفل الجداول الكبيرة أثناء إنشاء الفهارس (CREATE INDEX CONCURRENTLY)',
      'التحقق من سلامة البيانات الموجودة مسبقاً (Backfilling)'
    ],
    keywords: ['database migration', 'prisma migration', 'drizzle migration', 'sql migration', 'schema update'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 81,
    isFavorite: false
  },
  {
    id: 'dev-back-053',
    code: '/database query review',
    titleAr: 'مراجعة وتحسين أداء الاستعلامات (SQL Query Review)',
    titleEn: 'SQL Query Optimization & Indexing Audit',
    descriptionAr: 'تحليل استعلام SQL لاكتشاف مشاكل الأداء، الفهارس المفقودة، منع الـ Table Scans، والتأمين ضد الحقن.',
    descriptionEn: 'Analyze SQL execution plans, eliminate sequential scans, recommend optimal composite indexes, and prevent injection.',
    group: 'dev',
    devCategory: 'backend',
    outputType: 'analysis',
    outputBadges: ['Backend', 'مراجعة'],
    params: [
      { key: 'query', flag: 'query', isPositional: true, type: 'string', required: true, labelAr: 'استعلام SQL', labelEn: 'SQL Query', hintAr: 'الصق استعلام SQL', hintEn: 'Paste SQL statement' },
      { key: 'database', flag: 'database', isPositional: false, type: 'string', required: false, defaultValue: 'postgresql', labelAr: 'قاعدة البيانات', labelEn: 'Database', hintAr: 'postgresql, mysql', hintEn: 'postgresql' },
      { key: 'check', flag: 'check', isPositional: false, type: 'string', required: false, defaultValue: 'performance,security,indexes', labelAr: 'محاور الفحص', labelEn: 'Checks', hintAr: 'performance,security,indexes', hintEn: 'performance,security,indexes' }
    ],
    example: '/database query review "[الصق SQL]" --database=postgresql --check=performance,security,indexes',
    qualityRules: [
      'شرح خطة التنفيذ المقدرة (EXPLAIN ANALYZE)',
      'اقتراح الفهارس المركبة المناسبة (Composite Indexes) لتسريع الاستعلام',
      'التأكد من استخدام المعاملات المجهزة (Parameterized Queries) لمنع SQL Injection'
    ],
    keywords: ['database query review', 'sql performance', 'query optimization', 'sql indexing', 'explain analyze'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 87,
    isFavorite: false
  },
  {
    id: 'dev-back-054',
    code: '/api documentation',
    titleAr: 'توليد توثيق الـ API المرجعي للمطورين',
    titleEn: 'Developer API Documentation & Reference Guide',
    descriptionAr: 'إنشاء توثيق برمجي متكامل لنقاط الاتصال مع أمثلة الطلبات، الاستجابات، والترويسات بأسلوب OpenAPI.',
    descriptionEn: 'Generate comprehensive developer documentation covering authentication headers, error codes, and curl examples.',
    group: 'dev',
    devCategory: 'backend',
    outputType: 'text',
    outputBadges: ['Backend', 'تقرير'],
    params: [
      { key: 'system', flag: 'system', isPositional: true, type: 'string', required: true, labelAr: 'النظام / الخدمة', labelEn: 'API Title', hintAr: 'مثال: نظام حجز مواعيد', hintEn: 'e.g. Appointment Booking API' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'openapi', labelAr: 'التنسيق', labelEn: 'Format', hintAr: 'openapi, markdown, postman', hintEn: 'openapi, markdown' },
      resolveParam('language')
    ],
    example: '/api documentation "نظام حجز مواعيد" --format=openapi --language=ar',
    qualityRules: [
      'تضمين أمثلة استدعاء عملية بصيغة cURL و JavaScript/Fetch',
      'توثيق جداول أكواد الأخطاء الشائعة (400, 401, 403, 404, 429, 500)',
      'شرح طريقة تمرير رموز التوثيق وصيغة الـ Headers'
    ],
    keywords: ['api documentation', 'توثيق api', 'openapi docs', 'api reference', 'swagger doc'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 82,
    isFavorite: false
  }
];
