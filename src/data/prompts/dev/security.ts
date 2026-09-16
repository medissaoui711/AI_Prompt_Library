import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const DEV_SECURITY_PROMPTS: CommandPrompt[] = [
  {
    id: 'dev-sec-075',
    code: '/security audit',
    titleAr: 'تدقيق أمني شامل للكود والمشروع (ضمن نطاق مصرح به)',
    titleEn: 'Comprehensive Application Security Audit (Authorized)',
    descriptionAr: 'مراجعة دفاعية شاملة للأمان: الثغرات الشائعة، الصلاحيات، تسريب البيانات، وتكوينات الخادم في مشاريعك المرخصة.',
    descriptionEn: 'Defensive code and configuration security audit identifying vulnerabilities, broken access, and sensitive data exposure.',
    group: 'dev',
    devCategory: 'security',
    outputType: 'analysis',
    outputBadges: ['أمن', 'مراجعة'],
    params: [
      { key: 'target', flag: 'target', isPositional: true, type: 'string', required: true, labelAr: 'الكود أو النظام المستهدف', labelEn: 'Target Code/System', hintAr: 'الصق الكود أو وصف المنظومة', hintEn: 'Paste code or system description' },
      { key: 'scope', flag: 'scope', isPositional: false, type: 'string', required: false, defaultValue: 'authorized-internal-audit', labelAr: 'نطاق الترخيص الأمني', labelEn: 'Authorized Scope', hintAr: 'authorized-internal-audit', hintEn: 'authorized-internal-audit' },
      { key: 'focus', flag: 'focus', isPositional: false, type: 'string', required: false, defaultValue: 'owasp-top-10,auth,data-exposure', labelAr: 'محاور التدقيق', labelEn: 'Focus', hintAr: 'owasp-top-10,auth,data-exposure,config', hintEn: 'owasp-top-10,auth,data-exposure' }
    ],
    example: '/security audit "[الصق الكود]" --scope=authorized-internal-audit --focus=owasp-top-10,auth,data-exposure',
    qualityRules: [
      'تنبيه صارم: مخصص للمراجعة الدفاعية والتحصين على كود وأنظمة تملكها أو مصرح لك خطياً بفحصها',
      'تصنيف المخاطر حسب معيار CVSS (حرج، عالي، متوسط، منخفض)',
      'تقديم خطوات التصحيح البرمجية الدقيقة (Remediation) مع أمثلة كود آمنة'
    ],
    keywords: ['security audit', 'تدقيق أمني', 'vulnerability audit', 'code hardening', 'defensive security'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 98,
    isFavorite: true
  },
  {
    id: 'dev-sec-076',
    code: '/owasp review',
    titleAr: 'مراجعة التوافق مع معايير OWASP 2025 (ضمن مشروع مصرح به)',
    titleEn: 'OWASP Top 10 Security Compliance Review (Authorized)',
    descriptionAr: 'مطابقة التطبيق مع قائمة OWASP: التحكم في الوصول، التشفير، الحقن، وسوء التكوين الأمني في الأنظمة المصرحة.',
    descriptionEn: 'Benchmark codebase and APIs against OWASP Top 10 2025 categories: Broken Access, Cryptographic Failures, and Injections.',
    group: 'dev',
    devCategory: 'security',
    outputType: 'analysis',
    outputBadges: ['أمن', 'تقرير'],
    params: [
      { key: 'code', flag: 'code', isPositional: true, type: 'string', required: true, labelAr: 'كود التطبيق أو مسارات الـ API', labelEn: 'Code / Endpoints', hintAr: 'الصق مسارات الـ API أو كود النظام', hintEn: 'Paste API endpoints or code' },
      { key: 'scope', flag: 'scope', isPositional: false, type: 'string', required: false, defaultValue: 'authorized-scope', labelAr: 'نطاق الترخيص', labelEn: 'Scope', hintAr: 'authorized-scope', hintEn: 'authorized-scope' },
      { key: 'version', flag: 'version', isPositional: false, type: 'enum', required: false, defaultValue: 'owasp-2025', labelAr: 'إصدار المعيار', labelEn: 'OWASP Standard', hintAr: 'owasp-2025, owasp-api-2023', hintEn: 'Standard', enumValues: [
        { value: 'owasp-2025', labelAr: 'OWASP Web Top 10 (2025 Standard)', labelEn: 'OWASP Web Top 10' },
        { value: 'owasp-api-2023', labelAr: 'OWASP API Security Top 10', labelEn: 'OWASP API Top 10' }
      ]}
    ],
    example: '/owasp review "[الصق مسارات الـ API]" --scope=authorized-scope --version=owasp-2025',
    qualityRules: [
      'تغطية فئات OWASP الرئيسية: Broken Access Control, Cryptographic Failures, Injection, Insecure Design',
      'توضيح سيناريو الاستغلال النظري وكيفية إغلاقه برمجياً',
      'تقديم تقرير جاهز للإدارة والمطورين مع مصفوفة التوافق'
    ],
    keywords: ['owasp review', 'owasp 2025', 'owasp top 10', 'معايير owasp', 'api security owasp'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 95,
    isFavorite: true
  },
  {
    id: 'dev-sec-077',
    code: '/auth audit',
    titleAr: 'تدقيق أمان المصادقة والجلسات (Auth & Session Audit)',
    titleEn: 'Authentication & Token Lifecycle Audit (Authorized)',
    descriptionAr: 'فحص دورة حياة الـ Tokens، تخزين الجلسات، التحقق الثنائي (2FA)، وتأمين استعادة كلمة المرور في مشاريعك المصرحة.',
    descriptionEn: 'Audit authentication mechanisms, JWT signature validation, token expiry, session hijacking, and brute-force defenses.',
    group: 'dev',
    devCategory: 'security',
    outputType: 'analysis',
    outputBadges: ['أمن', 'مراجعة'],
    params: [
      { key: 'code', flag: 'code', isPositional: true, type: 'string', required: true, labelAr: 'كود المصادقة أو التوثيق', labelEn: 'Auth Logic Code', hintAr: 'الصق كود الـ Auth أو تكوين الـ JWT', hintEn: 'Paste Auth logic or JWT config' },
      { key: 'scope', flag: 'scope', isPositional: false, type: 'string', required: false, defaultValue: 'authorized-system', labelAr: 'نطاق الترخيص', labelEn: 'Scope', hintAr: 'authorized-system', hintEn: 'authorized-system' },
      { key: 'check', flag: 'check', isPositional: false, type: 'string', required: false, defaultValue: 'jwt,tokens,cookies,2fa,bruteforce', labelAr: 'عناصر الفحص', labelEn: 'Checks', hintAr: 'jwt,tokens,cookies,2fa,bruteforce', hintEn: 'jwt,tokens,cookies,2fa,bruteforce' }
    ],
    example: '/auth audit "[الصق كود المصادقة]" --scope=authorized-system --check=jwt,tokens,cookies,2fa,bruteforce',
    qualityRules: [
      'التحقق من خوارزميات توقيع JWT ومنع هجمات "alg: none"',
      'التأكد من إبطال الـ Refresh Tokens وتدويرها عند كل استخدام',
      'فحص سياسات قفل الحساب ومحددات المحاولات (Rate Limiting on Login)'
    ],
    keywords: ['auth audit', 'jwt security', 'session audit', 'تدقيق تسجيل الدخول', 'brute force protection'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 92,
    isFavorite: false
  },
  {
    id: 'dev-sec-078',
    code: '/sql injection review',
    titleAr: 'فحص وتحصين الكود ضد حقن SQL (SQLi Prevention)',
    titleEn: 'SQL Injection Vulnerability Audit & Defense (Authorized)',
    descriptionAr: 'كشف نقاط دمج النصوص المباشر في الاستعلامات وتحويلها إلى استعلامات مجهزة آمنة (Parameterized Queries).',
    descriptionEn: 'Inspect raw database queries and ORMs to eliminate SQL injection risks and enforce parameterized statements.',
    group: 'dev',
    devCategory: 'security',
    outputType: 'text',
    outputBadges: ['أمن', 'كود'],
    params: [
      { key: 'code', flag: 'code', isPositional: true, type: 'string', required: true, labelAr: 'كود الاستعلامات البرمجية', labelEn: 'Database Code', hintAr: 'الصق كود دوال قواعد البيانات', hintEn: 'Paste database query code' },
      { key: 'scope', flag: 'scope', isPositional: false, type: 'string', required: false, defaultValue: 'authorized-scope', labelAr: 'نطاق الترخيص', labelEn: 'Scope', hintAr: 'authorized-scope', hintEn: 'authorized-scope' },
      { key: 'database', flag: 'database', isPositional: false, type: 'string', required: false, defaultValue: 'postgresql', labelAr: 'قاعدة البيانات', labelEn: 'Database', hintAr: 'postgresql, mysql, sqlite', hintEn: 'postgresql' }
    ],
    example: '/sql injection review "[الصق كود دوال قواعد البيانات]" --scope=authorized-scope --database=postgresql',
    qualityRules: [
      'استبدال أي دمج نصي مباشر (String concatenation / Template literals) بـ Parameters',
      'تأمين استعلامات الترتيب والبحث الديناميكي (ORDER BY / Dynamic Columns) عبر قوائم بيضاء (Whitelisting)',
      'توفير الكود المصحح والآمن بنسبة 100%'
    ],
    keywords: ['sql injection review', 'sqli prevention', 'حقن sql', 'parameterized queries', 'database security'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 90,
    isFavorite: false
  },
  {
    id: 'dev-sec-079',
    code: '/xss review',
    titleAr: 'فحص وتحصين الواجهات ضد ثغرات XSS (Cross-Site Scripting)',
    titleEn: 'Cross-Site Scripting (XSS) Audit & Sanitization (Authorized)',
    descriptionAr: 'اكتشاف وتطهير مدخلات المستخدم غير المعقمة في الواجهات وضبط سياسات Content Security Policy (CSP).',
    descriptionEn: 'Audit frontend rendering logic for Stored/Reflected/DOM XSS, dangerouslySetInnerHTML, and configure strict CSP.',
    group: 'dev',
    devCategory: 'security',
    outputType: 'text',
    outputBadges: ['أمن', 'كود'],
    params: [
      { key: 'code', flag: 'code', isPositional: true, type: 'string', required: true, labelAr: 'كود الواجهة أو المكون', labelEn: 'UI Code', hintAr: 'الصق كود المكون أو الصفحة', hintEn: 'Paste UI component code' },
      { key: 'scope', flag: 'scope', isPositional: false, type: 'string', required: false, defaultValue: 'authorized-project', labelAr: 'نطاق الترخيص', labelEn: 'Scope', hintAr: 'authorized-project', hintEn: 'authorized-project' },
      { key: 'framework', flag: 'framework', isPositional: false, type: 'string', required: false, defaultValue: 'react', labelAr: 'إطار العمل', labelEn: 'Framework', hintAr: 'react, vue, vanillajs', hintEn: 'react, vue' }
    ],
    example: '/xss review "[الصق كود المكون]" --scope=authorized-project --framework=react',
    qualityRules: [
      'فحص استخدام dangerouslySetInnerHTML أو v-html واستبدالها بمكتبات تعقيم موثوقة (DOMPurify)',
      'توليد ترويسة Content-Security-Policy (CSP) صارمة تحد من تنفيذ السكربتات الخارجية غير الموثوقة',
      'تطهير الروابط لمنع هجمات javascript: pseudo-protocol'
    ],
    keywords: ['xss review', 'dompurify', 'content security policy', 'ثغرات xss', 'xss sanitization'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 88,
    isFavorite: false
  },
  {
    id: 'dev-sec-080',
    code: '/csrf cors review',
    titleAr: 'ضبط وتأمين إعدادات CORS و CSRF',
    titleEn: 'CORS Configuration & CSRF Protection Setup',
    descriptionAr: 'مراجعة وتأمين سياسات تبادل الموارد عبر الأصول (CORS) وحماية الطلبات الحساسة من التزوير عبر المواقع (CSRF).',
    descriptionEn: 'Audit and tighten CORS origin policies and implement robust CSRF defenses using SameSite cookies or tokens.',
    group: 'dev',
    devCategory: 'security',
    outputType: 'text',
    outputBadges: ['أمن', 'كود'],
    params: [
      { key: 'config', flag: 'config', isPositional: true, type: 'string', required: true, labelAr: 'كود إعدادات الخادم أو CORS', labelEn: 'Server/CORS Config', hintAr: 'الصق كود إعدادات الخادم أو الـ Middleware', hintEn: 'Paste server middleware config' },
      { key: 'scope', flag: 'scope', isPositional: false, type: 'string', required: false, defaultValue: 'authorized-system', labelAr: 'نطاق الترخيص', labelEn: 'Scope', hintAr: 'authorized-system', hintEn: 'authorized-system' },
      { key: 'framework', flag: 'framework', isPositional: false, type: 'string', required: false, defaultValue: 'express', labelAr: 'إطار العمل', labelEn: 'Framework', hintAr: 'express, fastify, django, nestjs', hintEn: 'express, fastify' }
    ],
    example: '/csrf cors review "[الصق كود الخادم]" --scope=authorized-system --framework=express',
    qualityRules: [
      'إلغاء إعداد Access-Control-Allow-Origin: * عند استخدام بيانات المصادقة (Credentials)',
      'تطبيق إعداد SameSite=Strict أو SameSite=Lax للكوكيز مع flag Secure',
      'تطبيق نمط Double Submit Cookie أو CSRF Tokens للعمليات التي تعدل البيانات (POST, PUT, DELETE)'
    ],
    keywords: ['csrf cors review', 'cors configuration', 'csrf protection', 'samesite cookies', 'origin headers'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 85,
    isFavorite: false
  },
  {
    id: 'dev-sec-081',
    code: '/rate limit',
    titleAr: 'تطبيق محددات الطلبات لمنع الإغراق (Rate Limiting)',
    titleEn: 'API Rate Limiting & DoS Protection Layer',
    descriptionAr: 'برمجة طبقة تحديد معدل الطلبات (Rate Limiter) باستخدام Redis أو الذاكرة لحماية الـ Endpoints من هجمات DoS والقوة الغاشمة.',
    descriptionEn: 'Implement sliding window rate limiting and IP/User throttling using Redis to prevent DoS and brute-force abuse.',
    group: 'dev',
    devCategory: 'security',
    outputType: 'text',
    outputBadges: ['Backend', 'أمن'],
    params: [
      { key: 'target', flag: 'target', isPositional: true, type: 'string', required: true, labelAr: 'المسار أو الخدمة المستهدفة', labelEn: 'Target Endpoint', hintAr: 'مثال: API تسجيل الدخول وإرسال الرسائل', hintEn: 'e.g. Login & OTP SMS Endpoints' },
      { key: 'limit', flag: 'limit', isPositional: false, type: 'string', required: false, defaultValue: '5-per-minute', labelAr: 'حد الطلبات المسموح', labelEn: 'Rate Limit', hintAr: '5-per-minute, 100-per-hour', hintEn: '5-per-minute' },
      { key: 'store', flag: 'store', isPositional: false, type: 'enum', required: false, defaultValue: 'redis', labelAr: 'مستودع التخزين', labelEn: 'Storage Store', hintAr: 'redis, memory', hintEn: 'Store', enumValues: [
        { value: 'redis', labelAr: 'Redis (موزع ودقيق)', labelEn: 'Redis (Distributed)' },
        { value: 'memory', labelAr: 'In-Memory (محلي وخفيف)', labelEn: 'In-Memory Store' }
      ]}
    ],
    example: '/rate limit "API تسجيل الدخول وإرسال الرسائل" --limit=5-per-minute --store=redis',
    qualityRules: [
      'استخدام خوارزمية Sliding Window Counter لتفادي ثغرات الحواف الزمنية',
      'إرجاع ترويسات الاستجابة المعيارية (Retry-After, X-RateLimit-Limit, X-RateLimit-Remaining)',
      'إرجاع رمز الحالة HTTP 429 Too Many Requests مع رسالة واضحة'
    ],
    keywords: ['rate limit', 'dos protection', 'redis rate limiter', 'throttling', 'محدد الطلبات'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 89,
    isFavorite: false
  },
  {
    id: 'dev-sec-082',
    code: '/secrets audit',
    titleAr: 'فحص واكتشاف الأسرار والمفاتيح المكشوفة (Secrets Audit)',
    titleEn: 'Hardcoded Secrets & API Key Leak Detection (Authorized)',
    descriptionAr: 'مسح الكود وملفات التكوين لاكتشاف مفاتيح API، كلمات المرور، وشهادات التشفير المكشوفة واستبدالها بـ Vault.',
    descriptionEn: 'Scan repositories and commit histories for leaked private keys, credentials, and implement Secrets Manager.',
    group: 'dev',
    devCategory: 'security',
    outputType: 'analysis',
    outputBadges: ['أمن', 'مراجعة'],
    params: [
      { key: 'source', flag: 'source', isPositional: true, type: 'string', required: true, labelAr: 'الملفات أو مقتطفات الكود', labelEn: 'Code / Config Files', hintAr: 'الصق ملفات الإعداد أو الكود للمراجعة', hintEn: 'Paste config/code files' },
      { key: 'scope', flag: 'scope', isPositional: false, type: 'string', required: false, defaultValue: 'authorized-repository', labelAr: 'نطاق الترخيص', labelEn: 'Scope', hintAr: 'authorized-repository', hintEn: 'authorized-repository' },
      { key: 'output', flag: 'output', isPositional: false, type: 'string', required: false, defaultValue: 'remediation-steps', labelAr: 'المخرج', labelEn: 'Output', hintAr: 'remediation-steps', hintEn: 'remediation-steps' }
    ],
    example: '/secrets audit "[الصق ملفات الإعداد]" --scope=authorized-repository --output=remediation-steps',
    qualityRules: [
      'تحديد السطور التي تحتوي على مفاتيح مشكوك فيها وتعتيمها في التقرير',
      'تقديم خطوات التدوير الفوري (Key Rotation) للمفاتيح المسربة وإبطالها',
      'إعداد ملف .gitignore وقوالب .env.example الآمنة وأدوات منع الرفع (pre-commit hooks)'
    ],
    keywords: ['secrets audit', 'leaked keys', 'api key security', 'فحص الأسرار', 'env secrets'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 91,
    isFavorite: false
  },
  {
    id: 'dev-sec-083',
    code: '/penetration checklist',
    titleAr: 'قائمة التحقق لاختبار الاختراق الدفاعي (ضمن نطاق مصرح به)',
    titleEn: 'Defensive Penetration Testing Checklist (Authorized)',
    descriptionAr: 'قائمة إرشادية شاملة لفرق التطوير والأمن الداخلي للتحقق من جاهزية النظام الأمني قبل التدقيق الخارجي.',
    descriptionEn: 'Structured pre-assessment checklist covering attack surface enumeration, authorization flaws, and cryptographic posture.',
    group: 'dev',
    devCategory: 'security',
    outputType: 'plan',
    outputBadges: ['أمن', 'خطة'],
    params: [
      { key: 'target', flag: 'target', isPositional: true, type: 'string', required: true, labelAr: 'النظام الداخلي المصرح بفحصه', labelEn: 'Authorized Target', hintAr: 'مثال: منصة مدفوعات داخلية تملكها الشركة', hintEn: 'e.g. Internal company payment service' },
      { key: 'scope', flag: 'scope', isPositional: false, type: 'string', required: false, defaultValue: 'authorized-internal-scope', labelAr: 'وثيقة التفويض الخطي', labelEn: 'Authorization Scope', hintAr: 'authorized-internal-scope', hintEn: 'authorized-internal-scope' },
      { key: 'standard', flag: 'standard', isPositional: false, type: 'string', required: false, defaultValue: 'owasp-asvs', labelAr: 'المعيار المرجعي', labelEn: 'Standard', hintAr: 'owasp-asvs, nist-800-115', hintEn: 'owasp-asvs' }
    ],
    example: '/penetration checklist "منصة مدفوعات داخلية" --scope=authorized-internal-scope --standard=owasp-asvs',
    qualityRules: [
      'تنبيه صارم: مخصص فقط للأنظمة والبيئات التي تملكها أو تمتلك إذناً رسمياً خطياً باختبارها',
      'تنظيم القائمة وفق معيار OWASP Application Security Verification Standard (ASVS)',
      'تغطية مستويات: الهوية، التحكم بالوصول، سلامة البيانات، ومعالجة الاستثناءات'
    ],
    keywords: ['penetration checklist', 'owasp asvs', 'قائمة اختبار الاختراق', 'defensive pentest', 'security verification'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 88,
    isFavorite: false
  },
  {
    id: 'dev-sec-084',
    code: '/incident response',
    titleAr: 'خطة الاستجابة للحوادث الأمنية والتعافي (Incident Response Plan)',
    titleEn: 'Security Incident Response & Disaster Recovery Plan',
    descriptionAr: 'إعداد خطة استجابة سريعة عند وقوع اختراق أو تسريب: الاحتواء، التحقيق، سد الثغرة، وإبلاغ الأطراف المعنية.',
    descriptionEn: 'Formulate a rapid incident response playbook: triage, containment, forensic preservation, patch, and communication.',
    group: 'dev',
    devCategory: 'security',
    outputType: 'plan',
    outputBadges: ['أمن', 'خطة'],
    params: [
      { key: 'scenario', flag: 'scenario', isPositional: true, type: 'string', required: true, labelAr: 'نوع الحادثة الأمنية', labelEn: 'Incident Scenario', hintAr: 'مثال: تسريب قاعدة بيانات مستخدمين', hintEn: 'e.g. Leaked database credentials or token leak' },
      { key: 'organization', flag: 'organization', isPositional: false, type: 'string', required: false, defaultValue: 'fintech-startup', labelAr: 'طبيعة المنشأة / التطبيق', labelEn: 'Organization Type', hintAr: 'fintech-startup, saas, ecommerce', hintEn: 'saas, ecommerce' },
      resolveParam('language')
    ],
    example: '/incident response "تسريب قاعدة بيانات مستخدمين" --organization=fintech-startup --language=ar',
    qualityRules: [
      'مراحل استجابة منظمة وفق معيار NIST SP 800-61 (Preparation, Detection, Containment, Eradication, Recovery)',
      'خطوات عزل الخوادم المصابة فوراً دون إتلاف الأدلة الرقمية (Digital Forensics)',
      'قوالب رسائل تواصل شفافة لإشعار العملاء والجهات التنظيمية وفق الأنظمة'
    ],
    keywords: ['incident response', 'استجابة للحوادث', 'nist incident response', 'data breach plan', 'security playbook'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 86,
    isFavorite: false
  }
];
