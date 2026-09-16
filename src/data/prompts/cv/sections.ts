import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const CV_SECTIONS_PROMPTS: CommandPrompt[] = [
  {
    id: 'cv-sec-021',
    code: '/professional summary',
    titleAr: 'صياغة الملخص المهني (Professional Summary)',
    titleEn: 'Compelling Professional Summary Generator',
    descriptionAr: 'صياغة فقرة افتتاحية قوية ومكثفة (3-4 أسطر) تلخص قيمتك وخبرتك وأبرز إنجازاتك.',
    descriptionEn: 'Write a magnetic 3-4 sentence professional summary that captures attention instantly.',
    group: 'cv',
    cvCategory: 'sections',
    outputType: 'text',
    outputBadges: ['CV', 'نص'],
    params: [
      { key: 'role', flag: 'role', isPositional: true, type: 'string', required: true, labelAr: 'المسمى وسنوات الخبرة', labelEn: 'Role & Experience', hintAr: 'مثال: مهندس برمجيات أول بخبرة 6 سنوات', hintEn: 'e.g. Senior Software Engineer with 6 years experience' },
      { key: 'highlights', flag: 'highlights', isPositional: false, type: 'string', required: true, labelAr: 'أبرز الإنجازات أو التخصص الدقيق', labelEn: 'Top Achievements / Specialty', hintAr: 'مثال: بناء منصات سحابية عالية التحمل، تقليص التكاليف بنسبة 25%', hintEn: 'e.g. Scaled cloud platforms, cut costs by 25%' },
      resolveParam('language')
    ],
    example: '/professional summary "مهندس حلول سحابية بخبرة 7 سنوات" --highlights="تصميم بنية تحتية لـ 3 ملايين مستخدم في قطاع التقنية المالية" --language=ar',
    qualityRules: [
      'التركيز على القيمة المضافة وما يمكنك تقديمه للشركة بدلاً من طلباتك الشخصية',
      'دمج أرقام ونسب حقيقية وإبراز الكلمات المفتاحية الرئيسية للمسمى الوظيفي',
      'كتابة 3 خيارات بصياغات متنوعة (تنفيذي، مباشر، وقائم على النتائج)'
    ],
    keywords: ['ملخص مهني', 'professional summary', 'executive summary', 'مقدمة السيرة', 'نبذة مهنية'],
    createdAt: '2026-09-14T10:21:00.000Z',
    updatedAt: '2026-09-14T10:21:00.000Z',
    usageCount: 130,
    isFavorite: true
  },
  {
    id: 'cv-sec-022',
    code: '/career objective',
    titleAr: 'صياغة الهدف المهني (Career Objective)',
    titleEn: 'Targeted Career Objective for Entry Level',
    descriptionAr: 'صياغة هدف مهني موجه وذكي لحديثي التخرج ولمن يغيرون مسارهم المهني.',
    descriptionEn: 'Craft a forward-looking, value-centric career objective tailored for juniors and career pivoters.',
    group: 'cv',
    cvCategory: 'sections',
    outputType: 'text',
    outputBadges: ['CV', 'نص'],
    params: [
      { key: 'target_role', flag: 'target_role', isPositional: true, type: 'string', required: true, labelAr: 'الوظيفة المستهدفة', labelEn: 'Target Role', hintAr: 'مثال: منسق فعاليات وتسويق', hintEn: 'e.g. Events & Marketing Coordinator' },
      { key: 'background', flag: 'background', isPositional: false, type: 'string', required: true, labelAr: 'خلفيتك الأكاديمية أو المهنية', labelEn: 'Background / Strengths', hintAr: 'مثال: خريج إعلام بمهارات تواصل وإدارة مشاريع', hintEn: 'e.g. Mass Comm graduate with strong PM skills' },
      resolveParam('language')
    ],
    example: '/career objective "منسق تسويق رقمي" --background="خريج تسويق معتمد من Google في الإعلانات الرقمية وتحليل البيانات" --language=ar',
    qualityRules: [
      'تجنب الأهداف العامة والمبتذلة (مثل "أبحث عن وظيفة لأطور مهاراتي")',
      'ربط مهاراتك الأكاديمية والشغف بتحقيق أهداف المنظمة المستهدفة',
      'صياغة مكثفة لا تتعدى سطرين إلى ثلاثة أسطر'
    ],
    keywords: ['هدف مهني', 'career objective', 'خريج جديد', 'أهداف وظيفية'],
    createdAt: '2026-09-14T10:22:00.000Z',
    updatedAt: '2026-09-14T10:22:00.000Z',
    usageCount: 70,
    isFavorite: false
  },
  {
    id: 'cv-sec-023',
    code: '/work experience',
    titleAr: 'كتابة وتنسيق قسم الخبرات المهنية',
    titleEn: 'Work Experience Section Architect',
    descriptionAr: 'تحويل المهام اليومية الروتينية إلى إنجازات ديناميكية مبهرة داخل قسم الخبرات.',
    descriptionEn: 'Transform routine job duties into high-impact, measurable achievements in your experience section.',
    group: 'cv',
    cvCategory: 'sections',
    outputType: 'text',
    outputBadges: ['CV', 'نص'],
    params: [
      { key: 'job_title', flag: 'job_title', isPositional: true, type: 'string', required: true, labelAr: 'المسمى والشركة', labelEn: 'Job Title & Company', hintAr: 'مثال: مدير مبيعات، شركة حلول لوجستية', hintEn: 'e.g. Sales Manager, Logistics Co.' },
      { key: 'duties', flag: 'duties', isPositional: false, type: 'text', required: true, labelAr: 'المهام التي كنت تقوم بها', labelEn: 'Daily Duties & Tasks', hintAr: 'انسخ ما كنت تفعله باختصار لنحوله إلى نقاط إنجاز', hintEn: 'Describe what you did briefly' },
      resolveParam('language')
    ],
    example: '/work experience "مسؤول مشتريات" --duties="التفاوض مع الموردين، تقليل تكاليف الشراء، إدارة أوامر التوريد" --language=ar',
    qualityRules: [
      'صياغة من 3 إلى 5 نقاط نقطية لكل وظيفة تبدأ بأفعال عمل قوية',
      'تضمين المقاييس الكمية والنتائج (مثل: خفض التكاليف بنسبة 18%، توفير 350 ألف ريال)',
      'ترتيب عكسي زمني مع إبراز أحدث وأهم المهام'
    ],
    keywords: ['خبرات مهنية', 'work experience', 'نقاط الخبرة', 'إنجازات وظيفية', 'مهام العمل'],
    createdAt: '2026-09-14T10:23:00.000Z',
    updatedAt: '2026-09-14T10:23:00.000Z',
    usageCount: 115,
    isFavorite: true
  },
  {
    id: 'cv-sec-024',
    code: '/achievement bullets',
    titleAr: 'صياغة نقاط إنجازات بمعادلة (XYZ Formula)',
    titleEn: 'Google-Standard XYZ Achievement Bullets',
    descriptionAr: 'صياغة نقاط السيرة وفق معادلة جوجل: "حققت [X] مقاسًا بـ [Y] من خلال قيامي بـ [Z]".',
    descriptionEn: 'Craft bullet points using Google\'s formula: Accomplished [X] as measured by [Y] by doing [Z].',
    group: 'cv',
    cvCategory: 'sections',
    outputType: 'text',
    outputBadges: ['CV', 'نص'],
    params: [
      { key: 'task_result', flag: 'task_result', isPositional: true, type: 'string', required: true, labelAr: 'المهمة والنتيجة المحققة', labelEn: 'Task & Result', hintAr: 'مثال: قمت بتسريع موقع الشركة وحسّنت تجربة العملاء', hintEn: 'e.g. Sped up website loading and improved UX' },
      { key: 'metrics', flag: 'metrics', isPositional: false, type: 'string', required: false, labelAr: 'الأرقام أو النسب المتاحة', labelEn: 'Numbers / Metrics', hintAr: 'مثال: تسريع بنسبة 40%، زيادة التحويلات 15%', hintEn: 'e.g. 40% faster, 15% conversion lift' },
      resolveParam('language')
    ],
    example: '/achievement bullets "إعادة تصميم واجهة بوابة الدفع" --metrics="خفض نسبة التخلي عن السلة 22% وزيادة إتمام العمليات" --language=ar',
    qualityRules: [
      'تطبيق صارم لمعادلة: الفعل الحركي القوي + التأثير الرقمي المحسوب + المنهجية أو التقنية',
      'تجنب التعبيرات المبهمة مثل "كنت مسؤولاً عن" أو "ساعدت في"',
      'تقديم 3 خيارات متنوعة في الصياغة لكل إنجاز'
    ],
    keywords: ['xyz formula', 'نقاط إنجاز', 'achievement bullets', 'معادلة جوجل', 'أرقام وإنجازات'],
    createdAt: '2026-09-14T10:24:00.000Z',
    updatedAt: '2026-09-14T10:24:00.000Z',
    usageCount: 98,
    isFavorite: true
  },
  {
    id: 'cv-sec-025',
    code: '/skills section',
    titleAr: 'تصنيف وتنظيم قسم المهارات',
    titleEn: 'Structured Skills Categorization',
    descriptionAr: 'تنظيم المهارات في مجموعات واضحة (تقنية، قيادية، تخصصية، أدوات) لتسهيل القراءة وفحص الـ ATS.',
    descriptionEn: 'Categorize resume skills into distinct, scannable clusters (Core, Tools, Methods, Soft).',
    group: 'cv',
    cvCategory: 'sections',
    outputType: 'text',
    outputBadges: ['CV', 'نص'],
    params: [
      { key: 'role', flag: 'role', isPositional: true, type: 'string', required: true, labelAr: 'المجال أو المسمى الوظيفي', labelEn: 'Role / Domain', hintAr: 'مثال: أخصائي ذكاء الأعمال BI، مدير منتجات', hintEn: 'e.g. BI Specialist, Product Manager' },
      { key: 'raw_skills', flag: 'raw_skills', isPositional: false, type: 'text', required: false, labelAr: 'قائمة مهاراتك الحالية', labelEn: 'Your Raw Skills List', hintAr: 'اكتب مهاراتك بشكل حر لنقوم بفرزها وتنسيقها', hintEn: 'List your skills freely to organize them' },
      resolveParam('language')
    ],
    example: '/skills section "أخصائي ذكاء الأعمال BI" --raw_skills="PowerBI, SQL, Python, ETL, Tableau, Stakeholder Management" --language=ar',
    qualityRules: [
      'تقسيم المهارات إلى عناوين فرعية: مهارات تخصصية، أدوات وبرمجيات، مهارات شخصية ومؤسسية',
      'استبعاد المهارات البديهية القديمة (مثل: تصفح الإنترنت، مايكروسوفت وورد)',
      'ترتيب الكلمات المفتاحية الأكثر طلبًا في بداية كل قسم'
    ],
    keywords: ['مهارات', 'skills section', 'تصنيف المهارات', 'hard skills', 'soft skills'],
    createdAt: '2026-09-14T10:25:00.000Z',
    updatedAt: '2026-09-14T10:25:00.000Z',
    usageCount: 82,
    isFavorite: false
  },
  {
    id: 'cv-sec-026',
    code: '/technical skills',
    titleAr: 'صياغة المهارات التقنية والأدوات لأنظمة ATS',
    titleEn: 'ATS Technical Stack & Tooling Optimizer',
    descriptionAr: 'صياغة حزمة الأدوات والتقنيات (Tech Stack) بالصيغة والمصطلحات المعيارية التي تفحصها بوابات التوظيف.',
    descriptionEn: 'Structure technical toolsets and frameworks with industry-standard terminology for automated parsers.',
    group: 'cv',
    cvCategory: 'sections',
    outputType: 'text',
    outputBadges: ['CV', 'ATS'],
    params: [
      { key: 'tech_role', flag: 'tech_role', isPositional: true, type: 'string', required: true, labelAr: 'التخصص التقني', labelEn: 'Tech Discipline', hintAr: 'مثال: DevOps Engineer، مهندس أمن سيبراني', hintEn: 'e.g. DevOps Engineer, Cybersecurity Analyst' },
      { key: 'tech_stack', flag: 'tech_stack', isPositional: false, type: 'string', required: true, labelAr: 'التقنيات التي تتقنها', labelEn: 'Your Tech Stack', hintAr: 'مثال: Docker, Kubernetes, AWS, Terraform, CI/CD', hintEn: 'e.g. Docker, Kubernetes, AWS, Terraform' },
      resolveParam('language')
    ],
    example: '/technical skills "مهندس حوسبة سحابية وDevOps" --tech_stack="AWS, Terraform, Kubernetes, GitHub Actions, Linux, Ansible" --language=ar',
    qualityRules: [
      'كتابة أسماء الأدوات بصيغتها الإنجليزية الصحيحة وحالة الأحرف القياسية (مثل: JavaScript وليس javascript)',
      'تصنيف التقنيات حسب الوظيفة: البنية التحتية، قواعد البيانات، لغات البرمجة، الأطر',
      'تضمين الاختصارات الشائعة بجانب المسمى الكامل عند الحاجة'
    ],
    keywords: ['مهارات تقنية', 'technical skills', 'tech stack', 'ats keywords', 'أدوات برمجية'],
    createdAt: '2026-09-14T10:26:00.000Z',
    updatedAt: '2026-09-14T10:26:00.000Z',
    usageCount: 90,
    isFavorite: false
  },
  {
    id: 'cv-sec-027',
    code: '/soft skills proof',
    titleAr: 'إثبات المهارات الشخصية عبر أدلة وإنجازات',
    titleEn: 'Evidence-Based Soft Skills Phrasing',
    descriptionAr: 'تحويل الكلمات العامة (كالقيادة وحل المشكلات) إلى أدلة وقصص إنجاز واقعية تبرهن مهارتك دون ادعاء.',
    descriptionEn: 'Translate generic soft skills (leadership, teamwork) into credible, proven context within your bullets.',
    group: 'cv',
    cvCategory: 'sections',
    outputType: 'text',
    outputBadges: ['CV', 'نص'],
    params: [
      { key: 'skill', flag: 'skill', isPositional: true, type: 'string', required: true, labelAr: 'المهارة الشخصية المراد إثباتها', labelEn: 'Soft Skill to Prove', hintAr: 'مثال: إدارة الأزمات، العمل الجماعي، التفاوض', hintEn: 'e.g. Conflict Resolution, Negotiation, Team Leadership' },
      { key: 'context', flag: 'context', isPositional: false, type: 'string', required: true, labelAr: 'موقف أو مشروع حقيقي قمت به', labelEn: 'Real Scenario / Project', hintAr: 'اذكر موقفاً عملياً أظهرت فيه هذه المهارة', hintEn: 'Describe a real situation demonstrating the skill' },
      resolveParam('language')
    ],
    example: '/soft skills proof "القيادة والتوجيه المهني" --context="توجيه 4 مبرمجين مبتدئين وتسليم مشروع المنصة قبل الموعد بأسبوعين" --language=ar',
    qualityRules: [
      'تطبيق مبدأ "أظهر ولا تدّعِ" (Show, Don\'t Tell) في كتابة السيرة الذاتية',
      'دمج المهارة الشخصية بطريقة طبيعية وسلسة داخل سياق الإنجاز العملي',
      'تجنب كتابة قوائم المهارات الشخصية المجردة في قسم منفصل دون برهان'
    ],
    keywords: ['مهارات شخصية', 'soft skills', 'إثبات المهارات', 'قيادة', 'تواصل'],
    createdAt: '2026-09-14T10:27:00.000Z',
    updatedAt: '2026-09-14T10:27:00.000Z',
    usageCount: 62,
    isFavorite: false
  },
  {
    id: 'cv-sec-028',
    code: '/education section',
    titleAr: 'صياغة وتنسيق قسم التعليم والمؤهلات الأكاديمية',
    titleEn: 'Academic Education & Honors Section',
    descriptionAr: 'تنظيم قسم المؤهلات العلمية والمعدلات ومراتب الشرف والأنشطة الأكاديمية بتنسيق نظيف.',
    descriptionEn: 'Format degrees, universities, graduation dates, GPA, academic honors, and relevant coursework.',
    group: 'cv',
    cvCategory: 'sections',
    outputType: 'text',
    outputBadges: ['CV', 'نص'],
    params: [
      { key: 'degree', flag: 'degree', isPositional: true, type: 'string', required: true, labelAr: 'الدرجة والتخصص والجامعة', labelEn: 'Degree, Major & University', hintAr: 'مثال: بكالوريوس هندسة كهربائية، جامعة الملك سعود', hintEn: 'e.g. BS in Electrical Engineering, KSU' },
      { key: 'honors', flag: 'honors', isPositional: false, type: 'string', required: false, labelAr: 'مراتب الشرف أو المعدل أو سنة التخرج', labelEn: 'Honors / GPA / Year', hintAr: 'مثال: مرتبة الشرف الأولى، تخرج 2024', hintEn: 'e.g. First Class Honors, Graduated 2024' },
      resolveParam('language')
    ],
    example: '/education section "بكالوريوس هندسة صناعية، جامعة الملك عبد العزيز" --honors="مرتبة الشرف الثانية، مشروع التخرج المميز في سلاسل الإمداد" --language=ar',
    qualityRules: [
      'ترتيب عكسي يبدأ بأعلى درجة علمية (ماجستير ثم بكالوريوس)',
      'ذكر المعدل فقط إذا كان متميزًا (أعلى من 3.5 من 4 أو 4.5 من 5) أو مطلوبًا بالإعلان',
      'إبراز المقررات الدراسية الدقيقة ذات الصلة بالوظيفة لحديثي التخرج'
    ],
    keywords: ['تعليم', 'مؤهلات', 'education section', 'جامعة', 'شهادة جامعية', 'معدل'],
    createdAt: '2026-09-14T10:28:00.000Z',
    updatedAt: '2026-09-14T10:28:00.000Z',
    usageCount: 48,
    isFavorite: false
  },
  {
    id: 'cv-sec-029',
    code: '/certifications section',
    titleAr: 'صياغة قسم الشهادات المهنية والاحترافية',
    titleEn: 'Professional Certifications & Licenses Section',
    descriptionAr: 'توثيق وتنسيق الشهادات والاعتمادات المهنية العالمية والمحلية بطريقة تبرز قيمتها وقابليتها للتحقق.',
    descriptionEn: 'Present professional credentials, credentials ID, issuing bodies, and completion dates cleanly.',
    group: 'cv',
    cvCategory: 'sections',
    outputType: 'text',
    outputBadges: ['CV', 'نص'],
    params: [
      { key: 'certs_list', flag: 'certs_list', isPositional: true, type: 'text', required: true, labelAr: 'قائمة الشهادات والجهات المانحة', labelEn: 'Certifications & Issuers', hintAr: 'مثال: PMP من PMI، AWS Solutions Architect من Amazon', hintEn: 'e.g. PMP by PMI, AWS Solutions Architect' },
      resolveParam('language')
    ],
    example: '/certifications section "PMP من معهد إدارة المشاريع PMI، CIPD المستوى الخامس في الموارد البشرية" --language=ar',
    qualityRules: [
      'ذكر الاسم الرسمي للشهادة، الجهة المانحة، وتاريخ الحصول عليها بدقة',
      'إدراج رمز التحقق (Credential ID) أو رابط الشهادة الرقمي إن وجد',
      'فرز الشهادات وتقديم الأكثر ارتباطًا بالوظيفة المستهدفة أولاً'
    ],
    keywords: ['شهادات احترافية', 'certifications', 'اعتمادات مهنية', 'pmp', 'دورات'],
    createdAt: '2026-09-14T10:29:00.000Z',
    updatedAt: '2026-09-14T10:29:00.000Z',
    usageCount: 74,
    isFavorite: false
  },
  {
    id: 'cv-sec-030',
    code: '/projects section',
    titleAr: 'صياغة قسم المشاريع التطبيقية',
    titleEn: 'Hands-On Projects & Case Studies Section',
    descriptionAr: 'عرض المشاريع البرمجية أو التصميمية أو الاستشارية في قسم منظم يوضح الدور والأدوات والمخرجات.',
    descriptionEn: 'Structure independent, freelance, or academic projects highlighting role, tools, and results.',
    group: 'cv',
    cvCategory: 'sections',
    outputType: 'text',
    outputBadges: ['CV', 'نص'],
    params: [
      { key: 'project_name', flag: 'project_name', isPositional: true, type: 'string', required: true, labelAr: 'اسم المشروع والهدف منه', labelEn: 'Project Name & Goal', hintAr: 'مثال: منصة حجز طبي فورية عبر الويب', hintEn: 'e.g. Real-time medical booking web app' },
      { key: 'technologies', flag: 'technologies', isPositional: false, type: 'string', required: true, labelAr: 'التقنيات والأدوات المستخدمة', labelEn: 'Tech & Tools Used', hintAr: 'مثال: Next.js, Node.js, PostgreSQL, Stripe API', hintEn: 'e.g. React, Python, FastAPI' },
      { key: 'impact', flag: 'impact', isPositional: false, type: 'string', required: false, labelAr: 'النتائج أو رابط المشروع', labelEn: 'Results / URL', hintAr: 'مثال: استخدمه أكثر من 500 مستخدم نشط، رابط GitHub', hintEn: 'e.g. 1k active users, live demo link' },
      resolveParam('language')
    ],
    example: '/projects section "تطبيق ذكي لإدارة النفقات الشخصية" --technologies="Flutter, Firebase, Charts" --impact="أكثر من 2000 تحميل على متجر التطبيقات" --language=ar',
    qualityRules: [
      'توضيح دورك الفردي بدقة في المشروع وما قمت بتنفيذه تحديدًا',
      'ذكر حزمة الأدوات والتقنيات بجوار اسم المشروع بشكل موجز',
      'تضمين رابط حي أو مستودع GitHub للمشروع لإثبات المصداقية'
    ],
    keywords: ['مشاريع', 'projects section', 'مشاريع تخرج', 'بورتفوليو', 'case studies'],
    createdAt: '2026-09-14T10:30:00.000Z',
    updatedAt: '2026-09-14T10:30:00.000Z',
    usageCount: 86,
    isFavorite: false
  }
];
