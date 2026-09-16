import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const DEV_DOCUMENTATION_PROMPTS: CommandPrompt[] = [
  {
    id: 'dev-doc-085',
    code: '/readme gen',
    titleAr: 'توليد ملف README احترافي للمشروع',
    titleEn: 'Professional Project README.md Generator',
    descriptionAr: 'إنشاء ملف README جذاب ومتكامل يشمل نظرة عامة، تعليمات التثبيت، التشغيل، البيئة، والأمثلة.',
    descriptionEn: 'Generate an open-source grade README with badges, architecture overview, quickstart instructions, and env guides.',
    group: 'dev',
    devCategory: 'documentation',
    outputType: 'text',
    outputBadges: ['توثيق'],
    params: [
      { key: 'project_name', flag: 'project_name', isPositional: true, type: 'string', required: true, labelAr: 'اسم ووصف المشروع', labelEn: 'Project Domain', hintAr: 'مثال: نظام إدارة طلبات إلكتروني', hintEn: 'e.g. Modern E-commerce API' },
      { key: 'stack', flag: 'stack', isPositional: false, type: 'string', required: false, defaultValue: 'react,nodejs,postgresql', labelAr: 'المكدس التقني', labelEn: 'Stack', hintAr: 'react,nodejs,postgresql', hintEn: 'react,nodejs,postgresql' },
      resolveParam('language')
    ],
    example: '/readme gen "نظام إدارة طلبات إلكتروني" --stack=react,nodejs,postgresql --language=ar',
    qualityRules: [
      'تضمين شارات الحالة (Badges) ولقطات توضيحية وهيكل المجلدات الرئيسي',
      'كتابة خطوات تشغيل دقيقة (git clone, npm install, .env, npm run dev)',
      'توثيق جميع متغيرات البيئة المطلوبة وشرح طريقة المساهمة والرخصة'
    ],
    keywords: ['readme gen', 'ملف readme', 'github readme', 'توثيق المشروع', 'markdown readme'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 94,
    isFavorite: true
  },
  {
    id: 'dev-doc-086',
    code: '/architecture doc',
    titleAr: 'وثيقة التصميم الهندسي للمنظومة (Architecture Design Doc)',
    titleEn: 'System Architecture Design Document (SDD)',
    descriptionAr: 'كتابة وثيقة معمارية هندسية عميقة توضح أهداف النظام، القيود، تدفق البيانات، والقرارات التقنية.',
    descriptionEn: 'Author an in-depth Software Architecture Document detailing system components, data flows, and trade-offs.',
    group: 'dev',
    devCategory: 'documentation',
    outputType: 'plan',
    outputBadges: ['توثيق', 'خطة'],
    params: [
      { key: 'system', flag: 'system', isPositional: true, type: 'string', required: true, labelAr: 'النظام / المنصة', labelEn: 'System Title', hintAr: 'مثال: منصة مدفوعات متعددة التجار', hintEn: 'e.g. Multi-tenant Billing Platform' },
      { key: 'components', flag: 'components', isPositional: false, type: 'string', required: false, defaultValue: 'frontend,api-gateway,services,database,cache', labelAr: 'المكونات الرئيسية', labelEn: 'Components', hintAr: 'frontend,api-gateway,services,database,cache', hintEn: 'Components' },
      resolveParam('language')
    ],
    example: '/architecture doc "منصة مدفوعات متعددة التجار" --components=frontend,api-gateway,services,database,cache --language=ar',
    qualityRules: [
      'تغطية المتطلبات الوظيفية وغير الوظيفية (SLAs, Scalability, Fault Tolerance)',
      'شرح تدفق البيانات عبر مخططات نصية واضحة (Mermaid Sequence Diagrams)',
      'توثيق استراتيجيات التخزين الاحتياطي واستعادة البيانات بعد الكوارث (DR)'
    ],
    keywords: ['architecture doc', 'وثيقة معمارية', 'software design doc', 'sdd document', 'system specification'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 88,
    isFavorite: false
  },
  {
    id: 'dev-doc-087',
    code: '/changelog gen',
    titleAr: 'توليد سجل التغييرات والإصدارات (CHANGELOG.md)',
    titleEn: 'Semantic CHANGELOG & Release Notes Generator',
    descriptionAr: 'تحويل قائمة الـ Commits والتعديلات إلى سجل إصدارات معياري مصنف (Keep a Changelog).',
    descriptionEn: 'Format git commits into semantic versioned changelog entries categorized by Added, Changed, Fixed, and Security.',
    group: 'dev',
    devCategory: 'documentation',
    outputType: 'text',
    outputBadges: ['توثيق'],
    params: [
      { key: 'version', flag: 'version', isPositional: true, type: 'string', required: true, labelAr: 'رقم الإصدار والتعديلات', labelEn: 'Version & Commits', hintAr: 'مثال: v1.4.0 (إضافة دعم الدفع بآبل باي، وإصلاح خطأ التسجيل)', hintEn: 'e.g. v1.4.0 (Added Apple Pay, fixed login bug)' },
      { key: 'format', flag: 'format', isPositional: false, type: 'enum', required: false, defaultValue: 'keepachangelog', labelAr: 'المعيار', labelEn: 'Standard', hintAr: 'keepachangelog, conventional', hintEn: 'Format', enumValues: [
        { value: 'keepachangelog', labelAr: 'Keep a Changelog (المعياري)', labelEn: 'Keep a Changelog' },
        { value: 'conventional', labelAr: 'Conventional Commits Breakdown', labelEn: 'Conventional Commits' }
      ]},
      resolveParam('language')
    ],
    example: '/changelog gen "v1.4.0 (إضافة دعم الدفع بآبل باي، وإصلاح خطأ التسجيل)" --format=keepachangelog --language=ar',
    qualityRules: [
      'تصنيف التغييرات بدقة: Added, Changed, Deprecated, Removed, Fixed, Security',
      'الالتزام بقواعد الترقيم الدلالي (SemVer: Major.Minor.Patch)',
      'توضيح أي تغييرات تكسر التوافقية (Breaking Changes) بشكل بارز'
    ],
    keywords: ['changelog gen', 'سجل الإصدارات', 'keep a changelog', 'release notes', 'semver'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 85,
    isFavorite: false
  },
  {
    id: 'dev-doc-088',
    code: '/contributing guide',
    titleAr: 'دليل المساهمة للمطورين (CONTRIBUTING.md)',
    titleEn: 'Developer Contribution Guidelines (CONTRIBUTING.md)',
    descriptionAr: 'صياغة دليل إرشادي واضح للمطورين والمساهمين يشرح معايير الكود، فتح الـ PRs، وكتابة الـ Commits.',
    descriptionEn: 'Author clear contributor guidelines detailing branching strategies, PR etiquette, commit conventions, and testing.',
    group: 'dev',
    devCategory: 'documentation',
    outputType: 'text',
    outputBadges: ['توثيق'],
    params: [
      { key: 'project', flag: 'project', isPositional: true, type: 'string', required: true, labelAr: 'اسم المشروع أو طبيعته', labelEn: 'Project Type', hintAr: 'مثال: مشروع مفتوح المصدر', hintEn: 'e.g. Open source TypeScript project' },
      { key: 'rules', flag: 'rules', isPositional: false, type: 'string', required: false, defaultValue: 'branches,commits,pr-template,tests', labelAr: 'قواعد المساهمة', labelEn: 'Guidelines', hintAr: 'branches,commits,pr-template,tests', hintEn: 'branches,commits,pr-template,tests' },
      resolveParam('language')
    ],
    example: '/contributing guide "مشروع مفتوح المصدر" --rules=branches,commits,pr-template,tests --language=ar',
    qualityRules: [
      'شرح نمط تسمية الفروع (feature/, bugfix/, hotfix/) والـ Conventional Commits',
      'تحديد متطلبات اجتياز الفحوصات الآلية (Linting, Unit Tests, CI/CD Pipeline)',
      'تضمين نموذج قالب لطلب الدمج (PR Template)'
    ],
    keywords: ['contributing guide', 'دليل المساهمة', 'open source contributing', 'pull request guide'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 81,
    isFavorite: false
  },
  {
    id: 'dev-doc-089',
    code: '/adr record',
    titleAr: 'سجل القرارات المعمارية التقنية (Architecture Decision Record - ADR)',
    titleEn: 'Architecture Decision Record (ADR) Template',
    descriptionAr: 'توثيق قرار تقني أو معماري حساس مع السياق، البدائل المدروسة، والمبررات والآثار المترتبة.',
    descriptionEn: 'Document major architectural choices using MADR/Michael Nygard format capturing context, alternatives, and consequences.',
    group: 'dev',
    devCategory: 'documentation',
    outputType: 'plan',
    outputBadges: ['توثيق', 'خطة'],
    params: [
      { key: 'decision', flag: 'decision', isPositional: true, type: 'string', required: true, labelAr: 'القرار التقني', labelEn: 'Architectural Decision', hintAr: 'مثال: استخدام PostgreSQL بدلاً من MongoDB', hintEn: 'e.g. Adopting PostgreSQL over MongoDB for transactional core' },
      { key: 'context', flag: 'context', isPositional: false, type: 'string', required: false, defaultValue: 'scalability,consistency', labelAr: 'السياق والمحركات', labelEn: 'Context Drivers', hintAr: 'scalability,consistency,cost', hintEn: 'scalability,consistency' },
      resolveParam('language')
    ],
    example: '/adr record "استخدام PostgreSQL بدلاً من MongoDB" --context=scalability,consistency --language=ar',
    qualityRules: [
      'هيكلة نموذجية: Title, Status (Accepted/Proposed), Context, Decision, Consequences, Alternatives',
      'مقارنة موضوعية للبدائل ونقاط القوة والضعف لكل خيار',
      'ذكر التأثيرات السلبية أو الديون التقنية المقبولة (Trade-offs)'
    ],
    keywords: ['adr record', 'سجل القرارات المعمارية', 'architectural decision record', 'madr', 'tech decisions'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 84,
    isFavorite: false
  },
  {
    id: 'dev-doc-090',
    code: '/system diagram',
    titleAr: 'توليد مخططات النظام البرمجية (Mermaid / PlantUML)',
    titleEn: 'Mermaid / PlantUML Architecture Diagram Generator',
    descriptionAr: 'إنشاء مخططات بصرية بصيغة كود نصي (Mermaid / C4 Model) لتدفق العمليات، هيكل النظام، وقواعد البيانات.',
    descriptionEn: 'Generate clean text-based system architecture, sequence diagrams, and ERDs using Mermaid.js or PlantUML.',
    group: 'dev',
    devCategory: 'documentation',
    outputType: 'mixed',
    outputBadges: ['توثيق', 'خطة'],
    params: [
      { key: 'system', flag: 'system', isPositional: true, type: 'string', required: true, labelAr: 'النظام المراد رسمه', labelEn: 'System Description', hintAr: 'مثال: مسار حجز موعد ودفع', hintEn: 'e.g. Booking and checkout sequence' },
      { key: 'type', flag: 'type', isPositional: false, type: 'enum', required: false, defaultValue: 'sequence', labelAr: 'نوع المخطط', labelEn: 'Diagram Type', hintAr: 'sequence, flowchart, er_diagram, c4', hintEn: 'Type', enumValues: [
        { value: 'sequence', labelAr: 'مخطط تتابع زمني (Sequence Diagram)', labelEn: 'Sequence Diagram' },
        { value: 'flowchart', labelAr: 'مخطط انسيابي للعمليات (Flowchart)', labelEn: 'Flowchart' },
        { value: 'er_diagram', labelAr: 'مخطط علاقات الكيانات (ER Diagram)', labelEn: 'Entity Relationship Diagram' },
        { value: 'c4', labelAr: 'نموذج C4 للمنظومات المعمارية', labelEn: 'C4 Architecture Model' }
      ]},
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'mermaid', labelAr: 'الصيغة', labelEn: 'Format', hintAr: 'mermaid, plantuml', hintEn: 'mermaid' }
    ],
    example: '/system diagram "مسار حجز موعد ودفع" --type=sequence --format=mermaid',
    qualityRules: [
      'كتابة كود Mermaid صالح تماماً وخالي من الأخطاء النحوية',
      'تسمية المكونات والرسائل بوضوح ودقة تسلسلية',
      'تضمين شرح نصي موجز يفسر أهم نقاط المخطط'
    ],
    keywords: ['system diagram', 'mermaid js', 'مخطط معماري', 'sequence diagram', 'c4 model diagram'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 92,
    isFavorite: true
  },
  {
    id: 'dev-doc-091',
    code: '/troubleshooting guide',
    titleAr: 'دليل استكشاف وحل الأعطال (Troubleshooting Runbook)',
    titleEn: 'Troubleshooting Runbook & Incident Playbook',
    descriptionAr: 'بناء دليل عملي لحل المشكلات الشائعة والأخطاء التشغيلية وكيفية تشخيص أسبابها وإصلاحها بسرعة.',
    descriptionEn: 'Author production troubleshooting runbooks covering symptom triage, root cause diagnosis, and recovery commands.',
    group: 'dev',
    devCategory: 'documentation',
    outputType: 'text',
    outputBadges: ['توثيق', 'دعم'],
    params: [
      { key: 'system', flag: 'system', isPositional: true, type: 'string', required: true, labelAr: 'النظام أو المشكلة', labelEn: 'System Problem', hintAr: 'مثال: أخطاء فشل الاتصال بقاعدة البيانات وبوابة الدفع', hintEn: 'e.g. Database connection timeouts & payment webhook failures' },
      { key: 'topics', flag: 'topics', isPositional: false, type: 'string', required: false, defaultValue: 'db,api,auth,deploy', labelAr: 'المحاور والمواضيع', labelEn: 'Topics', hintAr: 'db,api,auth,deploy,cache', hintEn: 'db,api,auth,deploy' },
      resolveParam('language')
    ],
    example: '/troubleshooting guide "أخطاء فشل الاتصال بقاعدة البيانات وبوابة الدفع" --topics=db,api,auth,deploy --language=ar',
    qualityRules: [
      'تنظيم كل مشكلة وفق: العَرَض (Symptom)، السبب الجذري (Root Cause)، الحل الفوري (Quick Fix)، الوقاية (Prevention)',
      'تضمين أوامر التشخيص عبر الطرفية وسجلات السيرفر (Logs & CLI commands)',
      'توضيح مستويات التصعيد (Escalation Matrix)'
    ],
    keywords: ['troubleshooting guide', 'دليل حل الأعطال', 'runbook', 'incident runbook', 'debugging guide'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 86,
    isFavorite: false
  },
  {
    id: 'dev-doc-092',
    code: '/developer onboarding',
    titleAr: 'دليل تهيئة المطورين الجدد (Developer Onboarding)',
    titleEn: 'Developer Onboarding & Environment Setup Checklist',
    descriptionAr: 'خطة متكاملة لضم مطور جديد للفريق: تهيئة بيئة التطوير، الصلاحيات، المستودعات، وأول مهمة تشغيلية.',
    descriptionEn: 'Step-by-step onboarding guide helping new engineers configure dev environments, access repos, and ship day-one PRs.',
    group: 'dev',
    devCategory: 'documentation',
    outputType: 'plan',
    outputBadges: ['توثيق', 'خطة'],
    params: [
      { key: 'stack', flag: 'stack', isPositional: true, type: 'string', required: true, labelAr: 'المشروع والمكدس', labelEn: 'Team & Stack', hintAr: 'مثال: فريق الويب (React + Node.js + Docker)', hintEn: 'e.g. Fullstack Team (React, Node.js, Docker)' },
      { key: 'role', flag: 'role', isPositional: false, type: 'string', required: false, defaultValue: 'fullstack-dev', labelAr: 'المسمى الوظيفي', labelEn: 'Role', hintAr: 'frontend-dev, backend-dev, fullstack-dev', hintEn: 'fullstack-dev' },
      resolveParam('language')
    ],
    example: '/developer onboarding "فريق الويب (React + Node.js + Docker)" --role=fullstack-dev --language=ar',
    qualityRules: [
      'خطة زمنية للأسبوع الأول (Day 1, Day 3, Week 1 milestones)',
      'قائمة تحقق بالأدوات والصلاحيات المطلوبة (GitHub, Cloud, Secrets, Slack)',
      'خطوات تشغيل بيئة العمل محلياً عبر Docker في أقل من 15 دقيقة'
    ],
    keywords: ['developer onboarding', 'تهيئة مطورين', 'engineer onboarding', 'dev environment setup'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 83,
    isFavorite: false
  }
];
