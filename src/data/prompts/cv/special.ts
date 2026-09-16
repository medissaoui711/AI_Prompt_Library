import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const CV_SPECIAL_PROMPTS: CommandPrompt[] = [
  {
    id: 'cv-spec-081',
    code: '/ai skills cv',
    titleAr: 'دمج وإبراز مهارات الذكاء الاصطناعي التوليدي في السيرة',
    titleEn: 'AI Fluency & Generative AI Skills Integration',
    descriptionAr: 'صياغة مهارات استخدام أدوات الذكاء الاصطناعي (Gemini, ChatGPT, Copilot, Midjourney) كعامل مضاعف للإنتاجية.',
    descriptionEn: 'Showcase AI literacy and generative AI workflows in your resume as a massive productivity multiplier.',
    group: 'cv',
    cvCategory: 'special',
    outputType: 'text',
    outputBadges: ['CV', 'ATS'],
    params: [
      { key: 'role', flag: 'role', isPositional: true, type: 'string', required: true, labelAr: 'مجالك وتخصصك الوظيفي', labelEn: 'Your Field & Role', hintAr: 'مثال: كاتب محتوى، محلل مالي، مهندس برمجيات', hintEn: 'e.g. Content Lead, Financial Analyst, Dev' },
      { key: 'ai_tools_used', flag: 'ai_tools_used', isPositional: false, type: 'string', required: true, labelAr: 'أدوات الذكاء الاصطناعي التي تستخدمها', labelEn: 'AI Tools Applied', hintAr: 'مثال: Gemini, ChatGPT, Claude, GitHub Copilot, Midjourney', hintEn: 'e.g. GitHub Copilot, Gemini API, Claude' },
      resolveParam('language')
    ],
    example: '/ai skills cv "مدير تسويق ومحتوى" --ai_tools_used="Gemini, ChatGPT, Midjourney, Make/Zapier AI automations" --language=ar',
    qualityRules: [
      'تجنب الادعاءات السطحية والتركيز على أثر الذكاء الاصطناعي في تسريع المخرجات ورفع الجودة',
      'صياغة نقاط إنجاز مثل: "أتمتة إنتاج المسودات الأولية باستخدام نماذج الذكاء الاصطناعي مما وفر 12 ساعة أسبوعياً"',
      'إبراز مهارات هندسة الأوامر (Prompt Engineering) والتحقق البشري من دقة المخرجات'
    ],
    keywords: ['ذكاء اصطناعي', 'ai skills', 'أدوات ai', 'إنتاجية', 'prompt engineering', 'gemini'],
    createdAt: '2026-09-14T11:21:00.000Z',
    updatedAt: '2026-09-14T11:21:00.000Z',
    usageCount: 110,
    isFavorite: true
  },
  {
    id: 'cv-spec-082',
    code: '/remote job cv',
    titleAr: 'سيرة ذاتية متخصصة للعمل عن بعد (Remote Work)',
    titleEn: 'Remote-First & Async Work Resume Optimizer',
    descriptionAr: 'تكييف السيرة للتقديم على وظائف العمل عن بعد العالمية بإبراز مهارات التواصل غير المتزامن والإنتاجية الذاتية.',
    descriptionEn: 'Optimize your CV for remote-first global companies emphasizing async communication, timezone overlap, and autonomy.',
    group: 'cv',
    cvCategory: 'special',
    outputType: 'text',
    outputBadges: ['CV', 'ATS'],
    params: [
      { key: 'role', flag: 'role', isPositional: true, type: 'string', required: true, labelAr: 'المسمى الوظيفي المستهدف عن بعد', labelEn: 'Remote Role', hintAr: 'مثال: مصمم منتجات رقمية، مطور برمجيات', hintEn: 'e.g. Senior Frontend Engineer, Product Designer' },
      { key: 'remote_tools', flag: 'remote_tools', isPositional: false, type: 'string', required: false, defaultValue: 'Slack, Notion, Loom, Jira, GitHub', labelAr: 'أدوات إدارة العمل عن بعد', labelEn: 'Remote Stack', hintAr: 'الأدوات التي تتقنها لإدارة العمل', hintEn: 'e.g. Slack, Notion, Loom, Linear' },
      resolveParam('language')
    ],
    example: '/remote job cv "مهندس برمجيات Backend" --remote_tools="Slack, Notion, Jira, Git, Loom" --language=en',
    qualityRules: [
      'إبراز القدرة على العمل المستقل وإدارة الوقت عبر مناطق زمنية مختلفة (Timezones)',
      'توثيق مهارات التوثيق الكتابي الممتاز (Asynchronous Communication)',
      'ذكر أدوات التعاون الرقمي في قسم المهارات التقنية'
    ],
    keywords: ['عمل عن بعد', 'remote cv', 'وظائف عن بعد', 'async work', 'remote work'],
    createdAt: '2026-09-14T11:22:00.000Z',
    updatedAt: '2026-09-14T11:22:00.000Z',
    usageCount: 95,
    isFavorite: false
  },
  {
    id: 'cv-spec-083',
    code: '/international cv',
    titleAr: 'سيرة ذاتية للهجرة والشركات العالمية متعددة الجنسيات',
    titleEn: 'International & Global Relocation Resume Standards',
    descriptionAr: 'مواءمة السيرة مع المعايير الغربية والدولية الصارمة (تجريد المعلومات الحساسة كالصور والحالة الاجتماعية).',
    descriptionEn: 'Format resumes according to strict Western & multinational anti-discrimination employment laws.',
    group: 'cv',
    cvCategory: 'special',
    outputType: 'text',
    outputBadges: ['CV', 'ATS'],
    params: [
      { key: 'target_country', flag: 'target_country', isPositional: true, type: 'string', required: true, labelAr: 'الدولة المستهدفة (أمريكا، بريطانيا، ألمانيا، كندا)', labelEn: 'Target Country / Market', hintAr: 'مثال: الولايات المتحدة الأمريكية، كندا، أوروبا', hintEn: 'e.g. United States, UK, Germany, Canada' },
      { key: 'role', flag: 'role', isPositional: false, type: 'string', required: true, labelAr: 'المسمى الوظيفي', labelEn: 'Job Role', hintAr: 'المسمى باللغة الإنجليزية', hintEn: 'Target English title' },
      resolveParam('language')
    ],
    example: '/international cv "كندا والولايات المتحدة" --role="Senior Cloud Architect" --language=en',
    qualityRules: [
      'حذف تام لأي صورة شخصية، تاريخ ميلاد، جنس، حالة اجتماعية، أو ديانة لتجنب الاستبعاد الفوري قانونيًا',
      'استخدام مصطلحات العملة القياسية والوحدات العالمية عند ذكر الإنجازات',
      'توضيح أهلية العمل أو الرغبة في الانتقال (Work Authorization / Relocation Readiness)'
    ],
    keywords: ['سيرة عالمية', 'international cv', 'هجرة وتوظيف', 'us resume', 'relocation'],
    createdAt: '2026-09-14T11:23:00.000Z',
    updatedAt: '2026-09-14T11:23:00.000Z',
    usageCount: 88,
    isFavorite: false
  },
  {
    id: 'cv-spec-084',
    code: '/gcc cv',
    titleAr: 'سيرة ذاتية لسوق العمل السعودي والخليجي',
    titleEn: 'Saudi & GCC Market Specialized Resume',
    descriptionAr: 'تكييف السيرة لتتوافق مع معايير الشركات والمشاريع الكبرى في الخليج (مبادرات رؤية 2030، نطاقات، الاعتمادات).',
    descriptionEn: 'Tailored for Saudi Vision 2030 giga-projects, GCC multinationals, and regional recruitment standards.',
    group: 'cv',
    cvCategory: 'special',
    outputType: 'text',
    outputBadges: ['CV', 'PDF'],
    params: [
      { key: 'gcc_country', flag: 'gcc_country', isPositional: true, type: 'string', required: true, labelAr: 'الدولة المستهدفة (السعودية، الإمارات، قطر، الكويت...)', labelEn: 'GCC Target Country', hintAr: 'مثال: المملكة العربية السعودية، الإمارات', hintEn: 'e.g. Saudi Arabia, UAE' },
      { key: 'role', flag: 'role', isPositional: false, type: 'string', required: true, labelAr: 'المسمى الوظيفي', labelEn: 'Target Role', hintAr: 'المسمى الوظيفي المستهدف', hintEn: 'Target job title' },
      resolveParam('language')
    ],
    example: '/gcc cv "المملكة العربية السعودية" --role="مدير تخطيط استراتيجي وإدارة مشاريع رؤية 2030" --language=ar',
    qualityRules: [
      'الربط الاستراتيجي بين خبرات المرشح والمشاريع التنموية الكبرى والبرامج الوطنية',
      'إبراز الاعتمادات المهنية الوطنية (الهيئات التخصصية المحلية مثل SCE, SCFHS, SOCPA)',
      'صياغة راقية تجمع بين الرصانة العربية والمصطلحات الإنجليزية المعيارية'
    ],
    keywords: ['سيرة سعودية', 'سوق الخليج', 'gcc cv', 'رؤية 2030', 'وظائف السعودية'],
    createdAt: '2026-09-14T11:24:00.000Z',
    updatedAt: '2026-09-14T11:24:00.000Z',
    usageCount: 120,
    isFavorite: true
  },
  {
    id: 'cv-spec-085',
    code: '/job description decode',
    titleAr: 'تفكيك وتحليل شفرة الإعلان الوظيفي',
    titleEn: 'Job Description Deconstruction & Hidden Needs Decoder',
    descriptionAr: 'تحليل عميق لما بين سطور الإعلان الوظيفي لكشف التحديات الحقيقية للشركة وما يبحث عنه المدير فعلاً.',
    descriptionEn: 'Decode the unwritten requirements, hidden pain points, and core priorities behind any job posting.',
    group: 'cv',
    cvCategory: 'special',
    outputType: 'analysis',
    outputBadges: ['تحليل'],
    params: [
      { key: 'job_ad_text', flag: 'job_ad_text', isPositional: true, type: 'text', required: true, labelAr: 'نص الإعلان الوظيفي', labelEn: 'Job Posting Text', hintAr: 'انسخ نص الإعلان الوظيفي الكامل هنا', hintEn: 'Paste full job ad text' },
      resolveParam('language')
    ],
    example: '/job description decode [نص إعلان وظيفي لمدير عمليات في شركة توصيل سريعة النمو] --language=ar',
    qualityRules: [
      'استخراج المشكلة الجذرية التي توظف الشركة شخصًا لحلها (The Core Problem to Solve)',
      'التمييز الصارم بين الشروط الإلزامية غير القابلة للتفاوض والشروط التكميلية المرغوبة',
      'تجهيز زاوية التموضع المثالية (Positioning Angle) التي يجب أن تتبناها في سيرتك والمقابلة'
    ],
    keywords: ['تحليل إعلان', 'تفكيك الوظيفة', 'job decode', 'فهم متطلبات الوظيفة', 'recruiter insight'],
    createdAt: '2026-09-14T11:25:00.000Z',
    updatedAt: '2026-09-14T11:25:00.000Z',
    usageCount: 82,
    isFavorite: false
  },
  {
    id: 'cv-spec-086',
    code: '/transferable skills',
    titleAr: 'استخراج المهارات القابلة للتحويل بين المهن',
    titleEn: 'Transferable Skills Identifier & Cross-Industry Mapper',
    descriptionAr: 'اكتشاف المهارات المشتركة بين خبرتك السابقة والمجال الجديد وصياغتها بصيغة تلائم الوظيفة الجديدة.',
    descriptionEn: 'Map capabilities from your past roles into compelling assets for your target industry.',
    group: 'cv',
    cvCategory: 'special',
    outputType: 'mixed',
    outputBadges: ['تحليل', 'CV'],
    params: [
      { key: 'past_experience', flag: 'past_experience', isPositional: true, type: 'text', required: true, labelAr: 'خبراتك ووظائفك السابقة', labelEn: 'Past Experience Text', hintAr: 'صف باختصار مجالات عملك وخبراتك السابقة', hintEn: 'Describe past roles and duties' },
      { key: 'desired_role', flag: 'desired_role', isPositional: false, type: 'string', required: true, labelAr: 'الوظيفة الجديدة المستهدفة', labelEn: 'Desired Target Role', hintAr: 'ما الوظيفة التي تريد الانتقال إليها؟', hintEn: 'What role do you want to pivot to?' },
      resolveParam('language')
    ],
    example: '/transferable skills "ضابط عمليات وإمداد سابق بخبرة 7 سنوات" --desired_role="مدير سلاسل إمداد ولوجستيات في القطاع الخاص" --language=ar',
    qualityRules: [
      'مصفوفة مهارات توضح: المهارة السابقة | كيف تترجم في الوظيفة الجديدة | الصيغة المقترحة للسيرة',
      'إبراز مهارات التخطيط، القيادة، إدارة الأزمات، وتحليل البيانات كأصول مشتركة عابرة للتخصصات',
      'إزالة المصطلحات العسكرية أو الداخلية غير المفهومة واستبدالها بمصطلحات قطاع الأعمال'
    ],
    keywords: ['مهارات منتقلة', 'transferable skills', 'تحول وظيفي', 'مصفوفة مهارات', 'إعادة توظيف'],
    createdAt: '2026-09-14T11:26:00.000Z',
    updatedAt: '2026-09-14T11:26:00.000Z',
    usageCount: 70,
    isFavorite: false
  },
  {
    id: 'cv-spec-087',
    code: '/job application tracker',
    titleAr: 'قالب ونظام تتبع طلبات التوظيف (Application Tracker)',
    titleEn: 'Job Application Pipeline & Tracker Template',
    descriptionAr: 'هيكلة جدول ذكي لتتبع طلبات التوظيف وحالة كل طلب والمتابعات والتواريخ وجهات الاتصال.',
    descriptionEn: 'Structured pipeline tracker template to manage job applications, follow-ups, and recruiter contacts.',
    group: 'cv',
    cvCategory: 'special',
    outputType: 'plan',
    outputBadges: ['قالب', 'خطة'],
    params: [
      { key: 'tool_type', flag: 'tool_type', isPositional: true, type: 'string', required: false, defaultValue: 'sheets_notion', labelAr: 'نوع الأداة (Excel / Google Sheets / Notion)', labelEn: 'Tool Type', hintAr: 'المنصة المفضلة للجدول', hintEn: 'Preferred tracking platform' },
      resolveParam('language')
    ],
    example: '/job application tracker "Google Sheets & Notion" --language=ar',
    qualityRules: [
      'أعمدة معيارية: اسم الشركة، المسمى، رابط الإعلان، تاريخ التقديم، نسخة السيرة المستخدمة، حالة الطلب، موعد المتابعة، جهة الاتصال، ملاحظات المقابلة',
      'صيغ حالات واضحة: (Applied, Phone Screen, 1st Interview, Final Round, Offer, Rejected)',
      'إرشادات لتحليل معدل التحويل (Conversion Funnel) من التقديم إلى المقابلة'
    ],
    keywords: ['تتبع التقديم', 'application tracker', 'جدول التوظيف', 'إدارة الطلبات', 'pipeline'],
    createdAt: '2026-09-14T11:27:00.000Z',
    updatedAt: '2026-09-14T11:27:00.000Z',
    usageCount: 65,
    isFavorite: false
  },
  {
    id: 'cv-spec-088',
    code: '/references list',
    titleAr: 'تنسيق وإعداد قائمة المعرّفين والمراجع المهنية',
    titleEn: 'Professional References Sheet & Formatter',
    descriptionAr: 'تنسيق وثيقة المراجع المهنية المستقلة واللباقة المتبعة عند إرسالها لجهات التوظيف عند الطلب.',
    descriptionEn: 'Format a dedicated professional references document with permission guidelines and contact details.',
    group: 'cv',
    cvCategory: 'special',
    outputType: 'text',
    outputBadges: ['قالب'],
    params: [
      { key: 'ref_details', flag: 'ref_details', isPositional: true, type: 'text', required: true, labelAr: 'بيانات المدراء والزملاء المعرّفين', labelEn: 'Reference Contacts', hintAr: 'الأسماء والمسميات والشركات وعلاقة العمل', hintEn: 'Names, roles, companies, working relationship' },
      resolveParam('language')
    ],
    example: '/references list "م. فهد السديري (مديري المباشر السابق في شركة سال)، د. منى العلي (مشرفة أبحاث التخرج)" --language=ar',
    qualityRules: [
      'تنسيق مستقل كصفحة منفصلة وليس ضمن السيرة الذاتية الأساسية',
      'تضمين: الاسم، المسمى، المنظمة، علاقة العمل (Supervisor / Colleague)، البريد الرسمي ورقم الهاتف',
      'إرشادات التواصل المسبق مع المعرّف وإطلاعه على تفاصيل الوظيفة قبل اتخاذ مسؤولي التوظيف أي اتصال'
    ],
    keywords: ['مراجع مهنية', 'معرفين', 'references list', 'تزكية', 'توصيات'],
    createdAt: '2026-09-14T11:28:00.000Z',
    updatedAt: '2026-09-14T11:28:00.000Z',
    usageCount: 45,
    isFavorite: false
  },
  {
    id: 'cv-spec-089',
    code: '/career brand',
    titleAr: 'بناء العلامة الشخصية والسمعة المهنية (Personal Brand)',
    titleEn: 'Executive Personal Branding & Thought Leadership Plan',
    descriptionAr: 'استراتيجية لبناء سمعة مهنية رائدة في مجالك عبر النشر والمقالات والمؤتمرات لجذب عروض العمل إليك.',
    descriptionEn: 'Build an authoritative industry personal brand on LinkedIn and communities to attract inbound job offers.',
    group: 'cv',
    cvCategory: 'special',
    outputType: 'plan',
    outputBadges: ['خطة', 'نص'],
    params: [
      { key: 'field_niche', flag: 'field_niche', isPositional: true, type: 'string', required: true, labelAr: 'المجال التخصصي الدقيق', labelEn: 'Your Core Niche', hintAr: 'مثال: أمن السحابة وحوكمة البيانات في القطاع المصرفي', hintEn: 'e.g. Cloud Security & Compliance' },
      resolveParam('language')
    ],
    example: '/career brand "حوكمة الذكاء الاصطناعي والأمن السيبراني في القطاع المالي" --language=ar',
    qualityRules: [
      'خطة نشر محتوى أسبوعية لـ 3 أشهر على LinkedIn تغطي: دراسات حالة، تحليلات اتجاهات السوق، وحلول لتحديات شائعة',
      'تحديد المؤتمرات والبودكاستات التخصصية المستهدفة للمشاركة فيها',
      'صياغة رسالة هوية مهنية واضحة ومميزة ترسخ اسمك في أذهان قادة الصناعة'
    ],
    keywords: ['علامة شخصية', 'personal brand', 'سمعة مهنية', 'نشر محتوى', 'thought leadership'],
    createdAt: '2026-09-14T11:29:00.000Z',
    updatedAt: '2026-09-14T11:29:00.000Z',
    usageCount: 60,
    isFavorite: false
  },
  {
    id: 'cv-spec-090',
    code: '/job readiness',
    titleAr: 'تقييم الجاهزية الوظيفية وسوق العمل الشامل',
    titleEn: '360° Comprehensive Job Market Readiness Audit',
    descriptionAr: 'تقييم شامل من 360 درجة لملفك الكامل (السيرة، لينكدإن، البورتفوليو، الجاهزية للمقابلات، والشبكة المهنية).',
    descriptionEn: 'Complete evaluation across 5 pillars: Resume, LinkedIn, Portfolio, Interview Preparedness, and Network.',
    group: 'cv',
    cvCategory: 'special',
    outputType: 'analysis',
    outputBadges: ['تحليل', 'قائمة فحص'],
    params: [
      { key: 'career_profile', flag: 'career_profile', isPositional: true, type: 'text', required: true, labelAr: 'ملخص سيرتك وحساباتك المهنية', labelEn: 'Your Career Profile Snapshot', hintAr: 'انسخ ملخص ما تملكه حالياً من سيرة وحسابات وبورتفوليو', hintEn: 'Paste snapshot of your CV & accounts' },
      resolveParam('language')
    ],
    example: '/job readiness [لدي سيرة ذاتية محدثة، حساب لينكدإن عادي بدون منشورات، وبورتفوليو على Behance، وأبحث عن وظيفة مصمم منتج أول] --language=ar',
    qualityRules: [
      'تقييم الأركان الخمسة: السيرة الذاتية، حساب لينكدإن، بورتفوليو الأعمال، مهارات المقابلة، وشبكة العلاقات',
      'إصدار تقرير نقاط القوة ونقاط الضعف الفورية مع مصفوفة أولويات التدخل العاجل',
      'خطة عمل واضحة من 7 أيام لتصبح في أعلى 5% من المرشحين الجاهزين للمنافسة'
    ],
    keywords: ['جاهزية وظيفية', 'job readiness', 'تقييم شامل', '360 audit', 'دخول سوق العمل'],
    createdAt: '2026-09-14T11:30:00.000Z',
    updatedAt: '2026-09-14T11:30:00.000Z',
    usageCount: 105,
    isFavorite: true
  }
];
