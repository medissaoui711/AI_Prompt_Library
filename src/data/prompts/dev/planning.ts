import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const DEV_PLANNING_PROMPTS: CommandPrompt[] = [
  {
    id: 'dev-plan-001',
    code: '/platform plan',
    titleAr: 'تخطيط وبناء منصة رقمية متكاملة',
    titleEn: 'Digital Platform Master Plan',
    descriptionAr: 'بناء خطة شاملة لمنصة رقمية تغطي أدوار المستخدمين، صفحات الواجهة، الوظائف، والتقنيات المقترحة.',
    descriptionEn: 'Develop a comprehensive digital platform roadmap covering user roles, page flows, core features, and proposed tech stack.',
    group: 'dev',
    devCategory: 'planning',
    outputType: 'plan',
    outputBadges: ['منصة', 'خطة'],
    params: [
      { key: 'concept', flag: 'concept', isPositional: true, type: 'string', required: true, labelAr: 'فكرة المنصة ونشاطها', labelEn: 'Platform Concept', hintAr: 'مثال: منصة حجز مواعيد للعيادات', hintEn: 'e.g. Clinic Appointment Booking Platform' },
      { key: 'users', flag: 'users', isPositional: false, type: 'string', required: false, defaultValue: 'patients,doctors,admins', labelAr: 'أدوار المستخدمين', labelEn: 'User Roles', hintAr: 'مثال: patients,doctors,admins', hintEn: 'e.g. patients,doctors,admins' },
      { key: 'platform', flag: 'platform', isPositional: false, type: 'enum', required: false, defaultValue: 'web', labelAr: 'المنصة المستهدفة', labelEn: 'Target Platform', hintAr: 'ويب، جوال، أو كلاهما', hintEn: 'web, mobile, or both', enumValues: [
        { value: 'web', labelAr: 'تطبيق ويب (Web)', labelEn: 'Web Application' },
        { value: 'mobile', labelAr: 'تطبيق جوال (Mobile)', labelEn: 'Mobile App' },
        { value: 'cross_platform', labelAr: 'منظومة متعددة (Web + Mobile)', labelEn: 'Cross-Platform System' }
      ]},
      resolveParam('language')
    ],
    example: '/platform plan "منصة حجز مواعيد للعيادات" --users=patients,doctors,admins --platform=web --language=ar',
    qualityRules: [
      'تحديد أدوار المستخدمين وصلاحيات كل دور بدقة',
      'رسم هيكلية الصفحات والمسارات الأساسية (User Journey)',
      'اقتراح المكدس التقني الأنسب مع جدول زمني تقديري'
    ],
    keywords: ['منصة', 'تخطيط', 'platform plan', 'architecture', 'software roadmap', 'system design'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 95,
    isFavorite: true
  },
  {
    id: 'dev-plan-002',
    code: '/app idea',
    titleAr: 'بلورة وتأطير فكرة التطبيق',
    titleEn: 'App Concept & Value Proposition',
    descriptionAr: 'تحويل الفكرة المجردة إلى تصور تقني واضح يحدد المشكلة، الجمهور المستهدف، والوظائف الأساسية.',
    descriptionEn: 'Transform an abstract product idea into a structured tech brief detailing problem statement, audience, and core features.',
    group: 'dev',
    devCategory: 'planning',
    outputType: 'plan',
    outputBadges: ['ويب', 'Android', 'iOS', 'مزدوج'],
    params: [
      { key: 'idea', flag: 'idea', isPositional: true, type: 'string', required: true, labelAr: 'فكرة التطبيق', labelEn: 'App Idea', hintAr: 'مثال: تطبيق لإدارة مصروفات الطلاب', hintEn: 'e.g. Student expense tracking app' },
      { key: 'platform', flag: 'platform', isPositional: false, type: 'string', required: false, defaultValue: 'android,ios', labelAr: 'المنصة', labelEn: 'Platform', hintAr: 'android,ios أو web', hintEn: 'android,ios or web' },
      { key: 'audience', flag: 'audience', isPositional: false, type: 'string', required: false, defaultValue: 'university-students', labelAr: 'الجمهور المستهدف', labelEn: 'Target Audience', hintAr: 'الطلاب، الأسر، المستقلون...', hintEn: 'Target demographic' },
      resolveParam('language')
    ],
    example: '/app idea "تطبيق لإدارة مصروفات الطلاب" --platform=android,ios --audience=university-students',
    qualityRules: [
      'صياغة القيمة الفريدة للمنتج (Value Proposition)',
      'تحديد المشكلات الحقيقية التي يحلها التطبيق وحلولها البديلة',
      'قائمة بأبرز الميزات الأساسية ذات الأولوية'
    ],
    keywords: ['فكرة تطبيق', 'app idea', 'mobile concept', 'product discovery', 'mvp idea'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 78,
    isFavorite: false
  },
  {
    id: 'dev-plan-003',
    code: '/mvp plan',
    titleAr: 'تخطيط المنتج الأولي القابل للإطلاق (MVP)',
    titleEn: 'Minimum Viable Product (MVP) Plan',
    descriptionAr: 'تحديد أقل نسخة وظيفية قابلة للإطلاق الفعلي بسرعة ودون هدر للموارد.',
    descriptionEn: 'Define the leanest viable product scope for rapid release and market validation without feature creep.',
    group: 'dev',
    devCategory: 'planning',
    outputType: 'plan',
    outputBadges: ['منصة', 'خطة'],
    params: [
      { key: 'project', flag: 'project', isPositional: true, type: 'string', required: true, labelAr: 'المشروع', labelEn: 'Project Name/Concept', hintAr: 'مثال: منصة توصيل طعام محلية', hintEn: 'e.g. Local food delivery platform' },
      { key: 'users', flag: 'users', isPositional: false, type: 'string', required: false, defaultValue: 'customer,restaurant,driver', labelAr: 'المستخدمون', labelEn: 'Key Users', hintAr: 'customer,restaurant,driver', hintEn: 'customer,restaurant,driver' },
      { key: 'duration', flag: 'duration', isPositional: false, type: 'string', required: false, defaultValue: '8weeks', labelAr: 'الإطار الزمني للإطلاق', labelEn: 'Launch Window', hintAr: 'مثال: 4weeks, 8weeks, 12weeks', hintEn: 'e.g. 4weeks, 8weeks' },
      resolveParam('language')
    ],
    example: '/mvp plan "منصة توصيل طعام محلية" --users=customer,restaurant,driver --duration=8weeks',
    qualityRules: [
      'فصل صارم بين ما هو حاسم للإطلاق وما يمكن تأجيله',
      'تحديد معايير نجاح الإطلاق (Key Metrics)',
      'خطة إطلاق وتجربة سريعة مع أول 100 مستخدم'
    ],
    keywords: ['mvp', 'منتج أولي', 'mvp plan', 'lean startup', 'agile scope'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 88,
    isFavorite: true
  },
  {
    id: 'dev-plan-004',
    code: '/requirements',
    titleAr: 'وثيقة المتطلبات الوظيفية وغير الوظيفية',
    titleEn: 'Software Requirements Specification (SRS)',
    descriptionAr: 'تحويل فكرة المشروع إلى متطلبات وظيفية وغير وظيفية منظمة مع قيود الأداء والأمان.',
    descriptionEn: 'Draft structured functional and non-functional requirements with technical constraints and performance criteria.',
    group: 'dev',
    devCategory: 'planning',
    outputType: 'plan',
    outputBadges: ['منصة', 'ويب', 'تطبيق'],
    params: [
      { key: 'system', flag: 'system', isPositional: true, type: 'string', required: true, labelAr: 'النظام / المشروع', labelEn: 'System Title', hintAr: 'مثال: متجر إلكتروني للعطور', hintEn: 'e.g. Perfume e-commerce store' },
      { key: 'platform', flag: 'platform', isPositional: false, type: 'string', required: false, defaultValue: 'web', labelAr: 'المنصة', labelEn: 'Platform', hintAr: 'web, mobile, cross', hintEn: 'web, mobile, cross' },
      { key: 'features', flag: 'features', isPositional: false, type: 'string', required: false, defaultValue: 'products,cart,payment,orders', labelAr: 'الميزات الرئيسية', labelEn: 'Core Features', hintAr: 'products,cart,payment,orders', hintEn: 'products,cart,payment,orders' },
      resolveParam('language')
    ],
    example: '/requirements "متجر إلكتروني للعطور" --platform=web --features=products,cart,payment,orders',
    qualityRules: [
      'تقسيم المتطلبات إلى: وظيفية (Functional) وغير وظيفية (Non-Functional)',
      'تحديد متطلبات الأداء، التوفر، والتوافقية بدقة',
      'صياغة المتطلبات بأسلوب لا يقبل اللبس وقابل للاختبار'
    ],
    keywords: ['متطلبات', 'srs', 'requirements', 'functional requirements', 'software specs'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 71,
    isFavorite: false
  },
  {
    id: 'dev-plan-005',
    code: '/user stories',
    titleAr: 'كتابة قصص المستخدمين (User Stories)',
    titleEn: 'Agile User Stories & Acceptance Criteria',
    descriptionAr: 'كتابة قصص مستخدمين تفصيلية وفق منهجية Agile بصيغة (As a / I want / So that) مع معايير القبول.',
    descriptionEn: 'Generate agile user stories categorized by user personas with Gherkin acceptance criteria (Given/When/Then).',
    group: 'dev',
    devCategory: 'planning',
    outputType: 'plan',
    outputBadges: ['منصة', 'خطة'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'string', required: true, labelAr: 'التطبيق / الخدمة', labelEn: 'App / Domain', hintAr: 'مثال: تطبيق حجز ملاعب', hintEn: 'e.g. Sports venue booking app' },
      { key: 'roles', flag: 'roles', isPositional: false, type: 'string', required: false, defaultValue: 'customer,venue-owner,admin', labelAr: 'الأدوار', labelEn: 'User Roles', hintAr: 'customer,venue-owner,admin', hintEn: 'customer,venue-owner,admin' },
      { key: 'format', flag: 'format', isPositional: false, type: 'enum', required: false, defaultValue: 'agile', labelAr: 'التنسيق', labelEn: 'Format Style', hintAr: 'agile أو gherkin', hintEn: 'agile or gherkin', enumValues: [
        { value: 'agile', labelAr: 'صيغة أجايل الكلاسيكية', labelEn: 'Classic Agile' },
        { value: 'gherkin', labelAr: 'معايير جيركين (Given-When-Then)', labelEn: 'Gherkin Acceptance Criteria' }
      ]},
      resolveParam('language')
    ],
    example: '/user stories "تطبيق حجز ملاعب" --roles=customer,venue-owner,admin --format=agile',
    qualityRules: [
      'تغطية كل أدوار المستخدمين (End User, Operator, Admin)',
      'كتابة معايير قبول واضحة (Acceptance Criteria) لكل قصة',
      'تجنب الصياغات التقنية البحتة والتركيز على القيمة للمستخدم'
    ],
    keywords: ['قصص مستخدمين', 'user stories', 'agile', 'scrum', 'acceptance criteria'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 82,
    isFavorite: false
  },
  {
    id: 'dev-plan-006',
    code: '/feature priority',
    titleAr: 'ترتيب أولويات الميزات (MoSCoW Matrix)',
    titleEn: 'Feature Prioritization Matrix',
    descriptionAr: 'فرز وترتيب ميزات المنتج حسب الأهمية الاستراتيجية: ضروري، مهم، مستقبلاً، أو مستبعد.',
    descriptionEn: 'Categorize and prioritize project backlog features using MoSCoW or RICE scoring frameworks.',
    group: 'dev',
    devCategory: 'planning',
    outputType: 'plan',
    outputBadges: ['منصة', 'خطة'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'string', required: true, labelAr: 'المشروع', labelEn: 'Project', hintAr: 'مثال: تطبيق تعليمي', hintEn: 'e.g. Educational app' },
      { key: 'features', flag: 'features', isPositional: false, type: 'string', required: false, defaultValue: 'lessons,quiz,progress,chat,certificates', labelAr: 'الميزات المقترحة', labelEn: 'Feature List', hintAr: 'lessons,quiz,progress,chat,certificates', hintEn: 'Comma-separated features' },
      { key: 'method', flag: 'method', isPositional: false, type: 'enum', required: false, defaultValue: 'moscow', labelAr: 'منهجية التقييم', labelEn: 'Prioritization Method', hintAr: 'moscow, rice, impact_effort', hintEn: 'Framework', enumValues: [
        { value: 'moscow', labelAr: 'MoSCoW (Must, Should, Could, Won\'t)', labelEn: 'MoSCoW Framework' },
        { value: 'rice', labelAr: 'RICE (Reach, Impact, Confidence, Effort)', labelEn: 'RICE Score' },
        { value: 'impact_effort', labelAr: 'مصفوفة التأثير مقابل الجهد', labelEn: 'Impact vs Effort Matrix' }
      ]},
      resolveParam('language')
    ],
    example: '/feature priority "تطبيق تعليمي" --features=lessons,quiz,progress,chat,certificates --method=moscow',
    qualityRules: [
      'تبرير تصنيف كل ميزة بناءً على القيمة مقابل تكلفة التطوير',
      'تحديد المخاطر الناتجة عن تأجيل ميزات معينة',
      'تضمين توصيات سريعة للبدء الفوري (Quick Wins)'
    ],
    keywords: ['أولويات', 'moscow', 'feature priority', 'rice matrix', 'backlog prioritization'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 64,
    isFavorite: false
  },
  {
    id: 'dev-plan-007',
    code: '/tech stack',
    titleAr: 'اقتراح وتبرير المكدس التقني (Tech Stack)',
    titleEn: 'Tech Stack Advisory & Justification',
    descriptionAr: 'اقتراح أفضل لغات وأطر عمل وقواعد بيانات وخدمات سحابية مع تبرير هندسي دقيق لكل اختيار.',
    descriptionEn: 'Recommend and justify optimal languages, frameworks, databases, and cloud services for your system requirements.',
    group: 'dev',
    devCategory: 'planning',
    outputType: 'plan',
    outputBadges: ['منصة', 'ويب', 'Android', 'iOS', 'مزدوج'],
    params: [
      { key: 'project', flag: 'project', isPositional: true, type: 'string', required: true, labelAr: 'المشروع', labelEn: 'Project Title', hintAr: 'مثال: منصة تعليمية تفاعلية', hintEn: 'e.g. Interactive learning platform' },
      { key: 'platform', flag: 'platform', isPositional: false, type: 'string', required: false, defaultValue: 'web,android,ios', labelAr: 'المنصات المستهدفة', labelEn: 'Target Platforms', hintAr: 'web,android,ios', hintEn: 'web,android,ios' },
      { key: 'scale', flag: 'scale', isPositional: false, type: 'enum', required: false, defaultValue: 'medium', labelAr: 'حجم النمو المتوقع', labelEn: 'Scale', hintAr: 'حجم المنظومة', hintEn: 'System scale', enumValues: [
        { value: 'small', labelAr: 'أولي / MVP', labelEn: 'Startup / MVP' },
        { value: 'medium', labelAr: 'متوسط النمو', labelEn: 'Medium Scale' },
        { value: 'enterprise', labelAr: 'مؤسسي / فائق التوسع', labelEn: 'High-Scale Enterprise' }
      ]},
      { key: 'team', flag: 'team', isPositional: false, type: 'string', required: false, defaultValue: 'small', labelAr: 'حجم وخبرة الفريق', labelEn: 'Team Size', hintAr: 'solo, small, enterprise', hintEn: 'solo, small, enterprise' },
      resolveParam('language')
    ],
    example: '/tech stack "منصة تعليمية" --platform=web,android,ios --scale=medium --team=small',
    qualityRules: [
      'تغطية طبقات: Frontend, Backend, Database, Cloud & DevOps',
      'مراعاة تكاليف الاستضافة والصيانة وسرعة التطوير والتوسع',
      'مقارنة الخيارات وتوضيح مبررات استبعاد البدائل الأخرى'
    ],
    keywords: ['tech stack', 'مكدس تقني', 'framework selection', 'database choice', 'backend stack'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 91,
    isFavorite: true
  },
  {
    id: 'dev-plan-008',
    code: '/system architecture',
    titleAr: 'تصميم البنية المعمارية للنظام (Architecture)',
    titleEn: 'System Architecture & Data Flow',
    descriptionAr: 'رسم وتوثيق البنية بين الواجهة، خوادم API، قواعد البيانات، طبقات التخزين المؤقت والخدمات السحابية.',
    descriptionEn: 'Design holistic system architecture mapping interactions between UI, API gateways, databases, queues, and caches.',
    group: 'dev',
    devCategory: 'planning',
    outputType: 'plan',
    outputBadges: ['منصة', 'Backend'],
    params: [
      { key: 'system', flag: 'system', isPositional: true, type: 'string', required: true, labelAr: 'اسم / نوع النظام', labelEn: 'System Description', hintAr: 'مثال: منصة إدارة عقارات', hintEn: 'e.g. Real Estate Management Platform' },
      { key: 'platform', flag: 'platform', isPositional: false, type: 'string', required: false, defaultValue: 'web', labelAr: 'المنصة', labelEn: 'Platform', hintAr: 'web, mobile, distributed', hintEn: 'web, mobile, distributed' },
      { key: 'users', flag: 'users', isPositional: false, type: 'string', required: false, defaultValue: 'agents,owners,admins', labelAr: 'المستخدمون', labelEn: 'Users', hintAr: 'agents,owners,admins', hintEn: 'agents,owners,admins' },
      { key: 'output', flag: 'output', isPositional: false, type: 'enum', required: false, defaultValue: 'diagram', labelAr: 'صيغة المخرج', labelEn: 'Output Format', hintAr: 'مخطط نصي أو mermaid', hintEn: 'Format', enumValues: [
        { value: 'diagram', labelAr: 'مخطط نصي هيكلي + Mermaid', labelEn: 'Mermaid Diagram & Text Breakdown' },
        { value: 'spec', labelAr: 'مواصفات معمارية مفصلة', labelEn: 'Full Architecture Specification' }
      ]},
      resolveParam('language')
    ],
    example: '/system architecture "منصة إدارة عقارات" --platform=web --users=agents,owners,admins --output=diagram',
    qualityRules: [
      'توضيح مسارات تدفق البيانات (Data Flow) بين المكونات',
      'تحديد نقاط التخزين المؤقت (Caching) وأمن الاتصالات',
      'تضمين مخطط Mermaid واضح قابل للنسخ والتوليد الفوري'
    ],
    keywords: ['system architecture', 'معمارية النظام', 'mermaid diagram', 'microservices', 'monolith'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 87,
    isFavorite: true
  },
  {
    id: 'dev-plan-009',
    code: '/database schema',
    titleAr: 'تصميم هيكل ومخطط قاعدة البيانات (Schema)',
    titleEn: 'Relational & NoSQL Schema Design',
    descriptionAr: 'تصميم جداول قاعدة البيانات، الحقول، الأنواع، المفاتيح الأساسية والأجنبية، ومؤشرات الفهرسة.',
    descriptionEn: 'Architect normalized database schemas, primary/foreign keys, indices, and relationships with migration DDL.',
    group: 'dev',
    devCategory: 'planning',
    outputType: 'plan',
    outputBadges: ['Backend'],
    params: [
      { key: 'domain', flag: 'domain', isPositional: true, type: 'string', required: true, labelAr: 'المشروع / النظام', labelEn: 'Domain / App', hintAr: 'مثال: تطبيق حجز صالون', hintEn: 'e.g. Salon Booking App' },
      { key: 'entities', flag: 'entities', isPositional: false, type: 'string', required: false, defaultValue: 'users,services,bookings,payments', labelAr: 'الكينونات الرئيسية', labelEn: 'Key Entities', hintAr: 'users,services,bookings,payments', hintEn: 'Comma-separated entities' },
      { key: 'database', flag: 'database', isPositional: false, type: 'enum', required: false, defaultValue: 'postgresql', labelAr: 'محرك قاعدة البيانات', labelEn: 'Database Engine', hintAr: 'postgresql, mysql, mongodb, sqlite', hintEn: 'DB Type', enumValues: [
        { value: 'postgresql', labelAr: 'PostgreSQL', labelEn: 'PostgreSQL' },
        { value: 'mysql', labelAr: 'MySQL / MariaDB', labelEn: 'MySQL' },
        { value: 'sqlite', labelAr: 'SQLite', labelEn: 'SQLite' },
        { value: 'mongodb', labelAr: 'MongoDB', labelEn: 'MongoDB' }
      ]},
      resolveParam('language')
    ],
    example: '/database schema "تطبيق حجز صالون" --entities=users,services,bookings,payments --database=postgresql',
    qualityRules: [
      'تطبيق قواعد تسوية البيانات (Normalization 3NF) مع الحفاظ على الأداء',
      'تحديد القيود (Constraints) والمفاتيح الأجنبية والفهارس (Indexes)',
      'تضمين كود SQL DDL جاهز للتنفيذ الفوري أو كود Prisma/Drizzle'
    ],
    keywords: ['database schema', 'جداول قاعدة البيانات', 'erd', 'sql schema', 'postgresql schema'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 89,
    isFavorite: true
  },
  {
    id: 'dev-plan-010',
    code: '/api design',
    titleAr: 'تصميم واجهات البرمجة (REST / GraphQL API)',
    titleEn: 'API Contract & Endpoint Design',
    descriptionAr: 'تصميم نقاط الاتصال Endpoints، طرق HTTP، هياكل الطلب والاستجابة، وأكواد الحالة.',
    descriptionEn: 'Design clean, RESTful or GraphQL endpoints with request/response schemas, status codes, and auth headers.',
    group: 'dev',
    devCategory: 'planning',
    outputType: 'plan',
    outputBadges: ['Backend', 'API'],
    params: [
      { key: 'project', flag: 'project', isPositional: true, type: 'string', required: true, labelAr: 'المشروع / النظام', labelEn: 'App / Domain', hintAr: 'مثال: تطبيق إدارة مهام', hintEn: 'e.g. Task management app' },
      { key: 'resources', flag: 'resources', isPositional: false, type: 'string', required: false, defaultValue: 'users,projects,tasks', labelAr: 'الموارد (Resources)', labelEn: 'Resources', hintAr: 'users,projects,tasks', hintEn: 'users,projects,tasks' },
      { key: 'style', flag: 'style', isPositional: false, type: 'enum', required: false, defaultValue: 'rest', labelAr: 'نمط الـ API', labelEn: 'API Style', hintAr: 'rest أو graphql', hintEn: 'API Style', enumValues: [
        { value: 'rest', labelAr: 'RESTful API', labelEn: 'RESTful API' },
        { value: 'graphql', labelAr: 'GraphQL', labelEn: 'GraphQL' },
        { value: 'rpc', labelAr: 'gRPC / tRPC', labelEn: 'tRPC / gRPC' }
      ]},
      resolveParam('language')
    ],
    example: '/api design "تطبيق إدارة مهام" --resources=users,projects,tasks --style=rest',
    qualityRules: [
      'اتباع معايير التسمية القياسية للـ URI وأفعال HTTP المناسبة',
      'تحديد بنية استجابات النجاح والخطأ مع صيغة JSON واضحة',
      'تضمين آليات الترقيم (Pagination) والتصفية (Filtering)'
    ],
    keywords: ['api design', 'rest api', 'endpoints', 'api contract', 'openapi design'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 85,
    isFavorite: false
  }
];
