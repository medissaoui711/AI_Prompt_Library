import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const DEV_TESTING_PROMPTS: CommandPrompt[] = [
  {
    id: 'dev-test-065',
    code: '/unit test',
    titleAr: 'توليد اختبارات الوحدة المعزولة (Unit Tests)',
    titleEn: 'Unit Test Suite Generation',
    descriptionAr: 'كتابة اختبارات وحدة شاملة لدالة أو كائن مع تغطية الحالات الحدية والحالات الخاطئة وعزل التبعيات.',
    descriptionEn: 'Generate comprehensive unit tests with edge cases, boundary values, error paths, and mocked dependencies.',
    group: 'dev',
    devCategory: 'testing',
    outputType: 'text',
    outputBadges: ['اختبار'],
    params: [
      { key: 'code', flag: 'code', isPositional: true, type: 'string', required: true, labelAr: 'الدالة أو الكود البرمجي', labelEn: 'Function/Code', hintAr: 'الصق الدالة المطلوب اختبارها', hintEn: 'Paste function code' },
      { key: 'framework', flag: 'framework', isPositional: false, type: 'string', required: false, defaultValue: 'vitest', labelAr: 'إطار الاختبار', labelEn: 'Test Framework', hintAr: 'vitest, jest, pytest, junit', hintEn: 'vitest, jest, pytest' },
      { key: 'cases', flag: 'cases', isPositional: false, type: 'string', required: false, defaultValue: 'happy-path,edge-cases,errors', labelAr: 'الحالات المطلوبة', labelEn: 'Test Cases', hintAr: 'happy-path,edge-cases,errors', hintEn: 'happy-path,edge-cases,errors' }
    ],
    example: '/unit test "[الصق الدالة]" --framework=vitest --cases=happy-path,edge-cases,errors',
    qualityRules: [
      'تطبيق نمط AAA (Arrange, Act, Assert) في كل اختبار',
      'تغطية الحالات الشاذة والقيم الفارغة (Null, Undefined, NaN, Negative numbers, Empty arrays)',
      'عزل التأثيرات الجانبية باستخدام الـ Mocks والـ Spies'
    ],
    keywords: ['unit test', 'vitest', 'jest', 'اختبارات وحدة', 'test driven development'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 96,
    isFavorite: true
  },
  {
    id: 'dev-test-066',
    code: '/integration test',
    titleAr: 'اختبارات التكامل والربط (Integration Tests)',
    titleEn: 'Integration & Service Interaction Tests',
    descriptionAr: 'اختبار تفاعل عدة وحدات معاً (مثل Controller مع Service وقاعدة البيانات) لضمان اتساق العمليات.',
    descriptionEn: 'Write integration tests verifying communication across controllers, database transactions, and cache layers.',
    group: 'dev',
    devCategory: 'testing',
    outputType: 'text',
    outputBadges: ['اختبار'],
    params: [
      { key: 'flow', flag: 'flow', isPositional: true, type: 'string', required: true, labelAr: 'المسار أو العملية', labelEn: 'Integration Flow', hintAr: 'مثال: عملية إنشاء طلب وسحب رصيد', hintEn: 'e.g. Order checkout and inventory deduction' },
      { key: 'stack', flag: 'stack', isPositional: false, type: 'string', required: false, defaultValue: 'nodejs,postgresql', labelAr: 'البيئة والتقنيات', labelEn: 'Stack', hintAr: 'nodejs,postgresql / nestjs,supertest', hintEn: 'nodejs,postgresql' },
      { key: 'framework', flag: 'framework', isPositional: false, type: 'string', required: false, defaultValue: 'supertest', labelAr: 'أداة الاختبار', labelEn: 'Test Tool', hintAr: 'supertest, vitest, pytest', hintEn: 'supertest, vitest' }
    ],
    example: '/integration test "عملية إنشاء طلب وسحب رصيد" --stack=nodejs,postgresql --framework=supertest',
    qualityRules: [
      'تنظيف وتهيئة قاعدة بيانات الاختبار قبل وبعد كل عملية (Setup / Teardown)',
      'التحقق من تراجع المعاملات (Database Rollback) عند حدوث خطأ جزئي',
      'فحص رسائل الخطأ وحالات استجابة HTTP بدقة'
    ],
    keywords: ['integration test', 'supertest', 'اختبارات تكامل', 'database test', 'api integration'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 88,
    isFavorite: false
  },
  {
    id: 'dev-test-067',
    code: '/e2e test',
    titleAr: 'اختبارات النظام الشاملة (E2E Playwright / Cypress)',
    titleEn: 'End-to-End (E2E) Browser Automation Tests',
    descriptionAr: 'محاكاة رحلة المستخدم الحقيقية في المتصفح من تسجيل الدخول حتى إتمام الشراء والتأكد من استقرار الواجهة.',
    descriptionEn: 'Author robust end-to-end browser test automation simulating complete user workflows using Playwright or Cypress.',
    group: 'dev',
    devCategory: 'testing',
    outputType: 'text',
    outputBadges: ['اختبار'],
    params: [
      { key: 'flow', flag: 'flow', isPositional: true, type: 'string', required: true, labelAr: 'رحلة المستخدم المراد أتمتتها', labelEn: 'User Flow', hintAr: 'مثال: تسجيل دخول ثم إضافة منتج للسلة', hintEn: 'e.g. Login, search item, add to cart, and checkout' },
      { key: 'framework', flag: 'framework', isPositional: false, type: 'enum', required: false, defaultValue: 'playwright', labelAr: 'أداة الأتمتة', labelEn: 'E2E Tool', hintAr: 'playwright, cypress', hintEn: 'Tool', enumValues: [
        { value: 'playwright', labelAr: 'Playwright (موصى به وسريع)', labelEn: 'Playwright' },
        { value: 'cypress', labelAr: 'Cypress', labelEn: 'Cypress' }
      ]},
      { key: 'device', flag: 'device', isPositional: false, type: 'string', required: false, defaultValue: 'desktop,mobile', labelAr: 'الأجهزة المستهدفة', labelEn: 'Devices', hintAr: 'desktop,mobile', hintEn: 'desktop,mobile' }
    ],
    example: '/e2e test "تسجيل دخول ثم إضافة منتج للسلة" --framework=playwright --device=desktop,mobile',
    qualityRules: [
      'استخدام محددات سهلة الصيانة تعتمد على معايير الوصولية (getByRole, getByLabel)',
      'تجنب الانتظار العشوائي (No arbitrary sleep) والاعتماد على Auto-waiting',
      'تغطية التقاط صور الشاشة ومقاطع الفيديو عند الفشل للتصحيح السريع'
    ],
    keywords: ['e2e test', 'playwright', 'cypress', 'اختبارات e2e', 'browser automation'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 91,
    isFavorite: false
  },
  {
    id: 'dev-test-068',
    code: '/api test',
    titleAr: 'اختبارات نقاط الـ API والمصادقة (API Test Suite)',
    titleEn: 'Automated API Contract & Endpoint Testing',
    descriptionAr: 'إنشاء حزمة اختبارات لنقاط النهاية (End-points) لفحص الاستجابات، ترويسات الأمان، والمصادقة.',
    descriptionEn: 'Generate API regression test suites validating status codes, response schemas, and unauthorized access.',
    group: 'dev',
    devCategory: 'testing',
    outputType: 'text',
    outputBadges: ['اختبار', 'Backend'],
    params: [
      { key: 'endpoint', flag: 'endpoint', isPositional: true, type: 'string', required: true, labelAr: 'المسار أو نقطة النهاية', labelEn: 'Endpoint', hintAr: 'مثال: POST /api/orders', hintEn: 'e.g. POST /api/v1/orders' },
      { key: 'method', flag: 'method', isPositional: false, type: 'string', required: false, defaultValue: 'POST', labelAr: 'طريقة الطلب', labelEn: 'HTTP Method', hintAr: 'POST, GET, PUT, DELETE', hintEn: 'POST, GET' },
      { key: 'check', flag: 'check', isPositional: false, type: 'string', required: false, defaultValue: 'auth,status,payload,errors', labelAr: 'الفحوصات المطلوبة', labelEn: 'Checks', hintAr: 'auth,status,payload,errors', hintEn: 'auth,status,payload,errors' }
    ],
    example: '/api test "POST /api/orders" --method=POST --check=auth,status,payload,errors',
    qualityRules: [
      'فحص الردود في حالات: غير مسجل دخول (401)، غير مصرح بالعملية (403)، مدخلات خاطئة (422)',
      'التحقق التلقائي من بنية الـ JSON ومطابقتها لمخطط النوع المتوقع',
      'قياس زمن الاستجابة والتنبيه عند التأخير'
    ],
    keywords: ['api test', 'postman test', 'endpoint test', 'اختبار api', 'rest api testing'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 85,
    isFavorite: false
  },
  {
    id: 'dev-test-069',
    code: '/ui test',
    titleAr: 'اختبار مكونات الواجهة (Testing Library)',
    titleEn: 'UI Component Testing (React Testing Library)',
    descriptionAr: 'كتابة اختبارات تفاعلية للمكونات البرمجية تحاكي نقرات المستخدم، إدخال النصوص، وظهور التنبيهات.',
    descriptionEn: 'Write accessible UI component tests simulating user events, state transitions, and asynchronous renders.',
    group: 'dev',
    devCategory: 'testing',
    outputType: 'text',
    outputBadges: ['اختبار', 'ويب', 'تطبيق'],
    params: [
      { key: 'component', flag: 'component', isPositional: true, type: 'string', required: true, labelAr: 'المكون البرمجي', labelEn: 'Component Code', hintAr: 'الصق كود المكون', hintEn: 'Paste component code' },
      { key: 'framework', flag: 'framework', isPositional: false, type: 'string', required: false, defaultValue: 'react-testing-library', labelAr: 'المكتبة', labelEn: 'Library', hintAr: 'react-testing-library, vitest', hintEn: 'react-testing-library' },
      { key: 'cases', flag: 'cases', isPositional: false, type: 'string', required: false, defaultValue: 'render,click,disabled,loading', labelAr: 'الحالات', labelEn: 'Cases', hintAr: 'render,click,disabled,loading', hintEn: 'render,click,disabled,loading' }
    ],
    example: '/ui test "[الصق كود المكون]" --framework=react-testing-library --cases=render,click,disabled,loading',
    qualityRules: [
      'الاستعلام عن العناصر بنفس طريقة المستخدم الحقيقي (screen.getByRole)',
      'استخدام userEvent بدلاً من fireEvent لمحاكاة دقيقة',
      'التحقق من عدم حدوث تحذيرات act() أو تسريبات في الذاكرة'
    ],
    keywords: ['ui test', 'react testing library', 'component test', 'اختبار واجهات', 'user-event'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 84,
    isFavorite: false
  },
  {
    id: 'dev-test-070',
    code: '/mock data',
    titleAr: 'توليد بيانات وهمية واقعية للاختبار (Mock Data)',
    titleEn: 'Realistic Mock Data & Fixture Generator',
    descriptionAr: 'إنشاء هياكل بيانات وهمية واقعية وغنية للاختبارات وتطوير الواجهات بصيغة JSON أو TypeScript.',
    descriptionEn: 'Generate strongly typed realistic mock datasets and database fixtures with Arabic and English localization.',
    group: 'dev',
    devCategory: 'testing',
    outputType: 'text',
    outputBadges: ['بيانات', 'اختبار'],
    params: [
      { key: 'schema', flag: 'schema', isPositional: true, type: 'string', required: true, labelAr: 'نوع الكيان أو المخطط', labelEn: 'Schema / Entity', hintAr: 'مثال: مستخدمون، دورات، تقييمات', hintEn: 'e.g. Users with orders and ratings' },
      { key: 'count', flag: 'count', isPositional: false, type: 'string', required: false, defaultValue: '10', labelAr: 'العدد', labelEn: 'Count', hintAr: '5, 10, 20, 50', hintEn: '10' },
      { key: 'format', flag: 'format', isPositional: false, type: 'enum', required: false, defaultValue: 'json', labelAr: 'الصيغة', labelEn: 'Format', hintAr: 'json, typescript, sql', hintEn: 'Format', enumValues: [
        { value: 'json', labelAr: 'JSON Data', labelEn: 'JSON Data' },
        { value: 'typescript', labelAr: 'TypeScript Array with Types', labelEn: 'TypeScript Fixture' },
        { value: 'sql', labelAr: 'SQL Seed Insert Statements', labelEn: 'SQL Inserts' }
      ]}
    ],
    example: '/mock data "مستخدمون، دورات، تقييمات" --count=10 --format=json',
    qualityRules: [
      'توفير بيانات واقعية تدعم الأسماء والأرقام والعناوين العربية والإنجليزية',
      'الحفاظ على تكامل العلاقات والمفاتيح الأجنبية (Foreign Keys)',
      'تضمين حالات حافة مثل أسماء طويلة جداً أو قيم اختيارية فارغة'
    ],
    keywords: ['mock data', 'بيانات وهمية', 'test fixtures', 'faker data', 'mock json'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 87,
    isFavorite: false
  },
  {
    id: 'dev-test-071',
    code: '/test coverage',
    titleAr: 'تحليل تقارير تغطية الاختبارات (Test Coverage)',
    titleEn: 'Test Coverage Gap Analysis & Action Plan',
    descriptionAr: 'قراءة تقرير تغطية الكود وتحديد الدوال والمسارات غير المغطاة باختبارات ووضع خطة لإغلاق الثغرات.',
    descriptionEn: 'Analyze test coverage reports (lcov, Istanbul) to pinpoint untested branches and critical edge cases.',
    group: 'dev',
    devCategory: 'testing',
    outputType: 'analysis',
    outputBadges: ['اختبار', 'تقرير'],
    params: [
      { key: 'report', flag: 'report', isPositional: true, type: 'string', required: true, labelAr: 'تقرير التغطية أو الكود', labelEn: 'Coverage Data', hintAr: 'الصق ملخص التغطية أو الكود غير المختبر', hintEn: 'Paste coverage summary or code' },
      { key: 'target', flag: 'target', isPositional: false, type: 'string', required: false, defaultValue: '80%', labelAr: 'النسبة المستهدفة', labelEn: 'Target Coverage', hintAr: '80%, 90%', hintEn: '80%' },
      { key: 'output', flag: 'output', isPositional: false, type: 'string', required: false, defaultValue: 'action-plan', labelAr: 'المخرج', labelEn: 'Output', hintAr: 'action-plan', hintEn: 'action-plan' }
    ],
    example: '/test coverage "[الصق ملخص التغطية]" --target=80% --output=action-plan',
    qualityRules: [
      'التركيز على تغطية التفرعات المنطقية الحرجة (Branch Coverage) وليس السطور فقط',
      'تحديد المسارات الحساسة مثل بوابات الدفع والمصادقة كأولوية أولى',
      'توليد قوالب كود الاختبارات للمسارات المفقودة مباشرة'
    ],
    keywords: ['test coverage', 'تغطية الاختبارات', 'lcov', 'code coverage report', 'branch coverage'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 78,
    isFavorite: false
  },
  {
    id: 'dev-test-072',
    code: '/smoke test',
    titleAr: 'اختبارات الدخان والفحص السريع للنشر (Smoke Tests)',
    titleEn: 'Post-Deployment Smoke Test Suite',
    descriptionAr: 'حزمة فحوصات سريعة تعمل بعد النشر المباشر للتحقق من أن الخدمات والصفحات الرئيسية تعمل دون انهيار.',
    descriptionEn: 'Rapid automated sanity checks executed post-deployment to verify live endpoints and database health.',
    group: 'dev',
    devCategory: 'testing',
    outputType: 'plan',
    outputBadges: ['اختبار', 'نشر'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'string', required: true, labelAr: 'المنصة المستهدفة', labelEn: 'App Domain', hintAr: 'مثال: متجر إلكتروني منشور', hintEn: 'e.g. Live E-commerce Platform' },
      { key: 'environment', flag: 'environment', isPositional: false, type: 'string', required: false, defaultValue: 'production', labelAr: 'البيئة', labelEn: 'Environment', hintAr: 'staging, production', hintEn: 'staging, production' },
      { key: 'checks', flag: 'checks', isPositional: false, type: 'string', required: false, defaultValue: 'health,auth,home,cart,payment-gateway', labelAr: 'الفحوصات السريعة', labelEn: 'Checks', hintAr: 'health,auth,home,cart,payment-gateway', hintEn: 'health,auth,home,cart' }
    ],
    example: '/smoke test "متجر إلكتروني منشور" --environment=production --checks=health,auth,home,cart,payment-gateway',
    qualityRules: [
      'تنفيذ الاختبارات في أقل من دقيقة واحدة لتأكيد نجاح النشر',
      'تجنب إنشاء بيانات حقيقية تؤثر على البيئة الإنتاجية (Non-destructive checks)',
      'تفعيل التنبيه المباشر لفريق العمل في حال فشل أي فحص رئيسي'
    ],
    keywords: ['smoke test', 'اختبار الدخان', 'post deployment test', 'sanity checks', 'health check'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 82,
    isFavorite: false
  },
  {
    id: 'dev-test-073',
    code: '/stress test',
    titleAr: 'تخطيط اختبارات الحمل والضغط (Stress & Load Testing)',
    titleEn: 'Load & Stress Testing Architecture (k6 / Artillery)',
    descriptionAr: 'تخطيط وكتابة سيناريوهات اختبار تحمل الخادم للزيارات العالية واكتشاف حدود الانهيار ونقاط الاختناق.',
    descriptionEn: 'Formulate load, stress, and spike testing scenarios using k6 or Artillery to evaluate peak concurrency.',
    group: 'dev',
    devCategory: 'testing',
    outputType: 'mixed',
    outputBadges: ['اختبار', 'أداء'],
    params: [
      { key: 'target', flag: 'target', isPositional: true, type: 'string', required: true, labelAr: 'الخدمة أو النقطة المستهدفة', labelEn: 'Target Service', hintAr: 'مثال: API تسجيل الدخول والدفع', hintEn: 'e.g. Auth & Checkout Endpoints' },
      { key: 'vusers', flag: 'vusers', isPositional: false, type: 'string', required: false, defaultValue: '1000', labelAr: 'عدد المستخدمين المتزامنين', labelEn: 'Virtual Users', hintAr: '500, 1000, 5000', hintEn: '1000' },
      { key: 'tool', flag: 'tool', isPositional: false, type: 'enum', required: false, defaultValue: 'k6', labelAr: 'أداة الاختبار', labelEn: 'Load Tool', hintAr: 'k6, artillery', hintEn: 'Tool', enumValues: [
        { value: 'k6', labelAr: 'Grafana k6 (JavaScript scripts)', labelEn: 'k6' },
        { value: 'artillery', labelAr: 'Artillery.io', labelEn: 'Artillery' }
      ]}
    ],
    example: '/stress test "API تسجيل الدخول والدفع" --vusers=1000 --tool=k6',
    qualityRules: [
      'تحديد سيناريوهات الارتفاع التدريجي (Ramp-up) ثم الثبات (Plateau) ثم الانخفاض (Ramp-down)',
      'مراقبة معدل الخطأ ونسبة استجابة p95 و p99 تحت الضغط',
      'تحديد سقف الفشل المسموح به (Thresholds) لإيقاف الاختبار تلقائياً'
    ],
    keywords: ['stress test', 'k6 load test', 'اختبار الضغط', 'artillery load', 'concurrency testing'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 86,
    isFavorite: false
  },
  {
    id: 'dev-test-074',
    code: '/qa test plan',
    titleAr: 'خطة ومصفوفة اختبارات الجودة (QA Test Plan)',
    titleEn: 'Comprehensive QA Test Plan & Scenarios Matrix',
    descriptionAr: 'إعداد وثيقة خطة جودة متكاملة تشمل حالات الاختبار الوظيفية، غير الوظيفية، والتوافقية مع الأجهزة.',
    descriptionEn: 'Draft comprehensive QA test plans detailing functional test cases, edge scenarios, and pass/fail criteria.',
    group: 'dev',
    devCategory: 'testing',
    outputType: 'plan',
    outputBadges: ['خطة', 'اختبار'],
    params: [
      { key: 'feature', flag: 'feature', isPositional: true, type: 'string', required: true, labelAr: 'الميزة أو النظام المراد اختباره', labelEn: 'Feature Under Test', hintAr: 'مثال: نظام حجز موعد ودفع', hintEn: 'e.g. Appointment booking and checkout' },
      { key: 'scope', flag: 'scope', isPositional: false, type: 'string', required: false, defaultValue: 'functional,edge-cases,cross-browser', labelAr: 'نطاق الخطة', labelEn: 'Plan Scope', hintAr: 'functional,edge-cases,cross-browser', hintEn: 'functional,edge-cases,cross-browser' },
      resolveParam('language')
    ],
    example: '/qa test plan "نظام حجز موعد ودفع" --scope=functional,edge-cases,cross-browser --language=ar',
    qualityRules: [
      'تنظيم الحالات في جدول واضح: معرف الحالة، الخطوات، المدخلات، النتيجة المتوقعة، الأولوية',
      'تغطية السيناريوهات السلبية والإدخالات الخاطئة بنفس كثافة السيناريوهات الإيجابية',
      'تحديد معايير القبول (Acceptance Criteria) وخطة التراجع'
    ],
    keywords: ['qa test plan', 'خطة اختبارات', 'quality assurance', 'test cases matrix', 'qa manual testing'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 89,
    isFavorite: true
  }
];
