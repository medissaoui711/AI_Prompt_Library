import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const CV_TAILORING_PROMPTS: CommandPrompt[] = [
  {
    id: 'cv-tailor-031',
    code: '/tailor cv',
    titleAr: 'تخصيص السيرة الذاتية لوظيفة معلنة',
    titleEn: 'Job-Specific CV Customization & Alignment',
    descriptionAr: 'إعادة مواءمة وتخصيص سيرتك الذاتية الحالية لتتطابق مع متطلبات وكلمات إعلان وظيفي محدد.',
    descriptionEn: 'Tailor your existing resume specifically to mirror the keywords, skills, and expectations of a target job posting.',
    group: 'cv',
    cvCategory: 'tailoring',
    outputType: 'mixed',
    outputBadges: ['CV', 'ATS', 'تحليل'],
    params: [
      { key: 'current_cv', flag: 'current_cv', isPositional: true, type: 'text', required: true, labelAr: 'نص سيرتك الذاتية الحالية', labelEn: 'Current CV Content', hintAr: 'انسخ نص سيرتك الذاتية الحالية هنا', hintEn: 'Paste current resume text' },
      { key: 'job_ad', flag: 'job_ad', isPositional: false, type: 'text', required: true, labelAr: 'نص الإعلان الوظيفي المطلوب', labelEn: 'Job Posting Text', hintAr: 'انسخ نص الإعلان ومتطلبات الوظيفة المعلنة', hintEn: 'Paste job description and requirements' },
      resolveParam('language')
    ],
    example: '/tailor cv [نص سيرتي الحالية] --job_ad=[نص إعلان وظيفة مدير تسويق في شركة نون] --language=ar',
    qualityRules: [
      'استخراج الكلمات المفتاحية الصريحة والضمنية من الإعلان ودمجها بذكاء وطبيعية',
      'إعادة ترتيب نقاط الخبرة لتقديم الإنجازات الأقرب لوصف الوظيفة أولاً',
      'تعديل الملخص المهني ليعكس المسمى المطلوب والقيمة التي يحتاجها صاحب العمل فورًا'
    ],
    keywords: ['تخصيص سيرة', 'tailor cv', 'مواءمة وظيفية', 'job matching', 'ats alignment'],
    createdAt: '2026-09-14T10:31:00.000Z',
    updatedAt: '2026-09-14T10:31:00.000Z',
    usageCount: 145,
    isFavorite: true
  },
  {
    id: 'cv-tailor-032',
    code: '/job match cv',
    titleAr: 'تحليل نسبة التطابق الوظيفي للسيرة',
    titleEn: 'Resume vs. Job Description Match Rate Audit',
    descriptionAr: 'فحص تحليلي دقيق يقيس نسبة التوافق بين سيرتك الذاتية ومتطلبات الوظيفة مع تحديد الفجوات.',
    descriptionEn: 'Compute a match percentage and identify missing core skills, qualification gaps, and keywords.',
    group: 'cv',
    cvCategory: 'tailoring',
    outputType: 'analysis',
    outputBadges: ['تحليل', 'ATS'],
    params: [
      { key: 'cv_text', flag: 'cv_text', isPositional: true, type: 'text', required: true, labelAr: 'نص سيرتك الذاتية', labelEn: 'Your CV Text', hintAr: 'انسخ نص سيرتك الذاتية', hintEn: 'Paste your CV text' },
      { key: 'job_posting', flag: 'job_posting', isPositional: false, type: 'text', required: true, labelAr: 'نص الوظيفة المطلوبة', labelEn: 'Job Posting Text', hintAr: 'انسخ نص الإعلان أو متطلبات الوظيفة', hintEn: 'Paste job posting requirements' },
      resolveParam('language')
    ],
    example: '/job match cv [نص السيرة] --job_posting=[نص إعلان مهندس حلول أمنية] --language=ar',
    qualityRules: [
      'تقديم نسبة توافق تقديرية واقعية موزعة على: المهارات الصلبة، الخبرات، والمؤهلات',
      'جدول مقارنة يوضح: متطلبات الإعلان | ما هو موجود بسيرتك | ما هو مفقود وكيف تعالجه',
      'نصائح سريعة لرفع نسبة التطابق دون إضافة معلومات غير حقيقية'
    ],
    keywords: ['نسبة التطابق', 'job match', 'تحليل التوافق', 'gap analysis', 'ats fit'],
    createdAt: '2026-09-14T10:32:00.000Z',
    updatedAt: '2026-09-14T10:32:00.000Z',
    usageCount: 105,
    isFavorite: true
  },
  {
    id: 'cv-tailor-033',
    code: '/keyword match',
    titleAr: 'استخراج ومطابقة الكلمات المفتاحية للـ ATS',
    titleEn: 'ATS Keyword Extraction & Semantic Matcher',
    descriptionAr: 'استخراج أهم 15-20 كلمة مفتاحية حاسمة من الإعلان واقتراح مواضع دمجها في السيرة.',
    descriptionEn: 'Extract critical hard and soft keywords from a job post and suggest natural resume integration spots.',
    group: 'cv',
    cvCategory: 'tailoring',
    outputType: 'analysis',
    outputBadges: ['ATS', 'تحليل'],
    params: [
      { key: 'job_description', flag: 'job_description', isPositional: true, type: 'text', required: true, labelAr: 'نص الإعلان الوظيفي', labelEn: 'Job Description', hintAr: 'انسخ نص الإعلان الوظيفي هنا', hintEn: 'Paste job description here' },
      resolveParam('language')
    ],
    example: '/keyword match [نص إعلان وظيفة أخصائي استقطاب مواهب Talent Acquisition] --language=ar',
    qualityRules: [
      'تصنيف الكلمات إلى: مهارات تقنية إلزامية (Must-Have)، مؤهلات مرغوبة، وأدوات برمجية',
      'تقديم الجمل والفقرات المقترحة لدمج الكلمات بسلاسة دون حشو مصطنع (Keyword Stuffing)',
      'توضيح المترادفات والمصطلحات البديلة الشائعة في الأنظمة'
    ],
    keywords: ['كلمات مفتاحية', 'keyword match', 'ats keywords', 'استخراج المهارات'],
    createdAt: '2026-09-14T10:33:00.000Z',
    updatedAt: '2026-09-14T10:33:00.000Z',
    usageCount: 92,
    isFavorite: false
  },
  {
    id: 'cv-tailor-034',
    code: '/job title alignment',
    titleAr: 'محاذاة المسمى الوظيفي مع السوق وبوابات التوظيف',
    titleEn: 'Job Title Normalization & Market Alignment',
    descriptionAr: 'ضبط المسميات الوظيفية الداخلية غير الشائعة لتتوافق مع المسميات المعيارية في سوق العمل.',
    descriptionEn: 'Align proprietary or internal company job titles with standard industry titles for better recruiter searchability.',
    group: 'cv',
    cvCategory: 'tailoring',
    outputType: 'analysis',
    outputBadges: ['ATS', 'تحليل'],
    params: [
      { key: 'internal_title', flag: 'internal_title', isPositional: true, type: 'string', required: true, labelAr: 'المسمى الوظيفي الحالي / الداخلي', labelEn: 'Current / Internal Title', hintAr: 'مثال: أخصائي نينجا برمجيات، تنفيذي عمليات سحابية', hintEn: 'e.g. Lead Ninja, Cloud Associate III' },
      { key: 'target_industry', flag: 'target_industry', isPositional: false, type: 'string', required: false, labelAr: 'المجال أو السوق المستهدف', labelEn: 'Target Industry / Market', hintAr: 'مثال: شركات التقنية المالية، السوق السعودي', hintEn: 'e.g. Fintech, GCC Market' },
      resolveParam('language')
    ],
    example: '/job title alignment "أخصائي أول لتعزيز تجربة المستفيدين" --target_industry="القطاع البنكي" --language=ar',
    qualityRules: [
      'اقتراح 3 مسميات معيارية متداولة يبحث عنها مسؤولو التوظيف وخوارزميات LinkedIn وATS',
      'الحفاظ على الصدق المهني وتوضيح كيفية كتابة المسمى (مثال: مسمى السوق المعياري / المسمى الداخلي)',
      'تعديل الملخص المهني ليعزز وضوح المسمى الجديد فورًا'
    ],
    keywords: ['مسمى وظيفي', 'job title', 'محاذاة المسمى', 'معايير التوظيف', 'linkedin search'],
    createdAt: '2026-09-14T10:34:00.000Z',
    updatedAt: '2026-09-14T10:34:00.000Z',
    usageCount: 54,
    isFavorite: false
  },
  {
    id: 'cv-tailor-035',
    code: '/industry cv',
    titleAr: 'تكييف السيرة الذاتية حسب القطاع والمجال',
    titleEn: 'Industry-Specific CV Customizer',
    descriptionAr: 'تعديل نبرة ومصطلحات وهيكل السيرة لتناسب ثقافة قطاع محدد (حكومي، بنكي، ناشئ، استشاري).',
    descriptionEn: 'Adapt resume tone, focus areas, and terminology to fit specific industry cultures (Gov, Banking, Startup, Consulting).',
    group: 'cv',
    cvCategory: 'tailoring',
    outputType: 'text',
    outputBadges: ['CV', 'قالب'],
    params: [
      { key: 'role', flag: 'role', isPositional: true, type: 'string', required: true, labelAr: 'المسمى الوظيفي', labelEn: 'Role', hintAr: 'مثال: مستشار استراتيجية، مدير مشاريع', hintEn: 'e.g. Strategy Consultant, PM' },
      { key: 'target_sector', flag: 'target_sector', isPositional: false, type: 'enum', required: true, labelAr: 'القطاع المستهدف', labelEn: 'Target Sector', hintAr: 'اختر القطاع المستهدف', hintEn: 'Select target industry sector', enumValues: [
        { value: 'fintech_banking', labelAr: 'القطاع المالي والمصرفي (Banking/Fintech)', labelEn: 'Banking & Fintech' },
        { value: 'government_semi', labelAr: 'القطاع الحكومي وشبه الحكومي (رؤية 2030)', labelEn: 'Government & Semi-Gov' },
        { value: 'startups_tech', labelAr: 'الشركات الناشئة والتقنية (Startups)', labelEn: 'Startups & Scaleups' },
        { value: 'management_consulting', labelAr: 'الشركات الاستشارية (Consulting)', labelEn: 'Top-Tier Consulting' }
      ]},
      resolveParam('language')
    ],
    example: '/industry cv "مدير مشاريع" --target_sector=government_semi --language=ar',
    qualityRules: [
      'استخدام مصطلحات ومعايير ومؤشرات أداء مألوفة ومتداولة في ذلك القطاع بعينه',
      'ضبط النبرة: رسمية ومؤسسية للقطاع الحكومي والمالي، وديناميكية قائمة على النمو للشركات الناشئة',
      'إبراز أطر العمل المعتمدة مثل PMP / TOGAF / Scrum وفق حاجة القطاع'
    ],
    keywords: ['قطاع حكومي', 'شركات ناشئة', 'بنوك', 'industry cv', 'استشارات', 'تكييف قطاعي'],
    createdAt: '2026-09-14T10:35:00.000Z',
    updatedAt: '2026-09-14T10:35:00.000Z',
    usageCount: 76,
    isFavorite: false
  },
  {
    id: 'cv-tailor-036',
    code: '/tech cv',
    titleAr: 'سيرة ذاتية متخصصة للوظائف التقنية والبرمجة',
    titleEn: 'Software Engineering & Tech Resume Builder',
    descriptionAr: 'هيكلة وصياغة سيرة ذاتية للمطورين ومهندسي البيانات تركز على المشاريع، الأطر، وروابط GitHub.',
    descriptionEn: 'Specialized tech resume format highlighting architectural scale, tech stacks, open-source, and repo links.',
    group: 'cv',
    cvCategory: 'tailoring',
    outputType: 'text',
    outputBadges: ['CV', 'ATS', 'DOCX'],
    params: [
      { key: 'tech_role', flag: 'tech_role', isPositional: true, type: 'string', required: true, labelAr: 'المسمى التقني', labelEn: 'Tech Role', hintAr: 'مثال: Full Stack Developer, Data Engineer', hintEn: 'e.g. Senior Backend Engineer' },
      { key: 'stack', flag: 'stack', isPositional: false, type: 'string', required: true, labelAr: 'حزمة التقنيات الأساسية', labelEn: 'Core Stack', hintAr: 'مثال: TypeScript, React, Go, PostgreSQL, AWS', hintEn: 'e.g. Python, Django, AWS, Redis' },
      resolveParam('experience'),
      resolveParam('language')
    ],
    example: '/tech cv "مهندس نظم برمجية أول (Senior Backend Engineer)" --stack="Go, Kafka, Kubernetes, PostgreSQL, AWS" --experience=senior --language=en',
    qualityRules: [
      'تضمين تفاصيل البنية التحتية ومقاييس الأداء (Latency, RPS, Uptime, Microservices)',
      'وضع التقنيات المستخدمة بجوار كل وظيفة ومهمة بشكل صريح',
      'تضمين روابط GitHub وLeetCode والمنصات الحية'
    ],
    keywords: ['tech cv', 'سيرة برمجية', 'مطور برمجيات', 'software engineer', 'backend', 'frontend'],
    createdAt: '2026-09-14T10:36:00.000Z',
    updatedAt: '2026-09-14T10:36:00.000Z',
    usageCount: 110,
    isFavorite: true
  },
  {
    id: 'cv-tailor-037',
    code: '/engineering cv',
    titleAr: 'سيرة ذاتية هندسية وصناعية',
    titleEn: 'Engineering & Industrial Operations CV',
    descriptionAr: 'صياغة سيرة للمهندسين (مدني، ميكانيكي، صناعي، كهربائي) تركز على المشاريع، السلامة، والتراخيص.',
    descriptionEn: 'Engineering CV emphasizing field execution, technical compliance, standards (OSHA/ISO), and SCE license.',
    group: 'cv',
    cvCategory: 'tailoring',
    outputType: 'text',
    outputBadges: ['CV', 'ATS', 'PDF'],
    params: [
      { key: 'discipline', flag: 'discipline', isPositional: true, type: 'string', required: true, labelAr: 'التخصص الهندسي', labelEn: 'Engineering Discipline', hintAr: 'مثال: مهندس مدني / إدارة مشاريع إنشائية', hintEn: 'e.g. Civil Engineer, Quality Engineer' },
      { key: 'accreditation', flag: 'accreditation', isPositional: false, type: 'string', required: false, labelAr: 'الاعتماد المهني (الهيئة السعودية للمهندسين)', labelEn: 'Engineering License', hintAr: 'مثال: مهندس محترف من الهيئة السعودية للمهندسين SCE', hintEn: 'e.g. Professional Engineer (SCE)' },
      resolveParam('experience'),
      resolveParam('language')
    ],
    example: '/engineering cv "مهندس ميكانيكي - أنظمة تكييف ومكافحة حريق HVAC" --accreditation="عضوية الهيئة السعودية للمهندسين" --experience=mid --language=ar',
    qualityRules: [
      'ذكر كبرى المشاريع وحجم ميزانياتها ومعايير الجودة المطبقة (ISO, ASTM, ASHRAE)',
      'إبراز البرمجيات الهندسية التخصصية (AutoCAD, Revit, Primavera P6, SolidWorks)',
      'التركيز على السلامة المهنية ومطابقة المواصفات والمقاييس'
    ],
    keywords: ['هندسة', 'مهندس مدني', 'مهندس ميكانيكي', 'engineering cv', 'هيئة المهندسين', 'سلامة'],
    createdAt: '2026-09-14T10:37:00.000Z',
    updatedAt: '2026-09-14T10:37:00.000Z',
    usageCount: 82,
    isFavorite: false
  },
  {
    id: 'cv-tailor-038',
    code: '/marketing cv',
    titleAr: 'سيرة ذاتية متخصصة للتسويق والنمو',
    titleEn: 'Marketing, Growth & Performance Resume',
    descriptionAr: 'صياغة سيرة ذاتية للمسوقين تركز على مقاييس الأداء (ROAS, CAC, LTV) ونمو الإيرادات وإدارة الميزانيات.',
    descriptionEn: 'Results-heavy marketing resume featuring campaign performance, acquisition metrics, and revenue growth.',
    group: 'cv',
    cvCategory: 'tailoring',
    outputType: 'text',
    outputBadges: ['CV', 'ATS', 'PDF'],
    params: [
      { key: 'specialty', flag: 'specialty', isPositional: true, type: 'string', required: true, labelAr: 'تخصص التسويق', labelEn: 'Marketing Specialty', hintAr: 'مثال: تسويق أداء (Performance)، تسويق محتوى، مدير علامة', hintEn: 'e.g. Growth Lead, Brand Manager' },
      { key: 'budget_scale', flag: 'budget_scale', isPositional: false, type: 'string', required: false, labelAr: 'حجم الميزانيات أو الإيرادات المدارة', labelEn: 'Budget / Spend Scale', hintAr: 'مثال: إدارة ميزانية إعلانية شهرية 200 ألف ريال', hintEn: 'e.g. $50k monthly ad spend' },
      resolveParam('language')
    ],
    example: '/marketing cv "مدير تسويق أداء واكتساب عملاء Growth Marketing" --budget_scale="إدارة 500 ألف ريال ميزانية حملات ربع سنوية" --language=ar',
    qualityRules: [
      'تضمين المقاييس الأساسية: ROAS, CPA, CVR, Organic Traffic Growth, Retention Rate',
      'ذكر منصات الإعلانات وأدوات التحليلات (Google Analytics 4, Meta Ads, TikTok, Mixpanel)',
      'توضيح استراتيجيات إدارة القنوات والحملات متعددة القنوات (Omnichannel)'
    ],
    keywords: ['تسويق', 'marketing cv', 'نمو', 'growth marketing', 'حملات إعلانية', 'roas'],
    createdAt: '2026-09-14T10:38:00.000Z',
    updatedAt: '2026-09-14T10:38:00.000Z',
    usageCount: 95,
    isFavorite: false
  },
  {
    id: 'cv-tailor-039',
    code: '/healthcare cv',
    titleAr: 'سيرة ذاتية للرعاية الصحية والقطاع الطبي',
    titleEn: 'Healthcare, Nursing & Medical Resume',
    descriptionAr: 'سيرة ذاتية متخصصة للأطباء والممارسين الصحيين والممرضين تركز على التراخيص والتخصصات السريرية.',
    descriptionEn: 'Medical resume structuring clinical competencies, hospital rotations, SCFHS license, and patient care.',
    group: 'cv',
    cvCategory: 'tailoring',
    outputType: 'text',
    outputBadges: ['CV', 'قالب'],
    params: [
      { key: 'medical_role', flag: 'medical_role', isPositional: true, type: 'string', required: true, labelAr: 'المسمى الصحي', labelEn: 'Medical Role', hintAr: 'مثال: أخصائي تمريض عناية مركزة، طبيب مقيم باطنة', hintEn: 'e.g. ICU Nurse, Resident Physician' },
      { key: 'license', flag: 'license', isPositional: false, type: 'string', required: false, labelAr: 'رخصة الهيئة السعودية للتخصصات الصحية', labelEn: 'SCFHS Classification', hintAr: 'مثال: مصنف أخصائي أول من SCFHS، شهادة BLS/ACLS', hintEn: 'e.g. SCFHS Classified, BLS certified' },
      resolveParam('language')
    ],
    example: '/healthcare cv "أخصائي علاج تنفسي" --license="تصنيف الهيئة للتخصصات الصحية، شهادة ACLS سارية" --language=ar',
    qualityRules: [
      'إبراز التصنيف المهني والتراخيص الطبية وسريانها في مقدمة السيرة',
      'توثيق الأقسام السريرية وساعات التدريب الميداني والبروتوكولات الطبية المطبقة',
      'إدراج دورات الإنعاش ودعم الحياة المتقدمة والتعليم الطبي المستمر (CME)'
    ],
    keywords: ['طبي', 'تمريض', 'صحي', 'healthcare cv', 'هيئة التخصصات الصحية', 'مستشفى'],
    createdAt: '2026-09-14T10:39:00.000Z',
    updatedAt: '2026-09-14T10:39:00.000Z',
    usageCount: 60,
    isFavorite: false
  },
  {
    id: 'cv-tailor-040',
    code: '/teacher cv',
    titleAr: 'سيرة ذاتية للمعلمين والتربويين',
    titleEn: 'Educator, Teacher & Academic Instructor CV',
    descriptionAr: 'صياغة سيرة ذاتية للتربويين والمعلمين تركز على أساليب التدريس، تقنيات التعليم، ومخرجات الطلاب.',
    descriptionEn: 'Teacher resume focusing on pedagogical strategies, classroom management, edtech tools, and student growth.',
    group: 'cv',
    cvCategory: 'tailoring',
    outputType: 'text',
    outputBadges: ['CV', 'PDF'],
    params: [
      { key: 'subject_grade', flag: 'subject_grade', isPositional: true, type: 'string', required: true, labelAr: 'المادة والمرحلة الدراسية', labelEn: 'Subject & Grade Level', hintAr: 'مثال: معلم رياضيات للمرحلة الثانوية، معلم لغة إنجليزية', hintEn: 'e.g. High School Math Teacher, IB Educator' },
      { key: 'curriculum', flag: 'curriculum', isPositional: false, type: 'string', required: false, labelAr: 'المنهج أو النظام التعليمي', labelEn: 'Curriculum System', hintAr: 'مثال: المنهج الوزاري السعودي، المنهج البريطاني IGCSE، البكالوريا الدولية IB', hintEn: 'e.g. IB Curriculum, Cambridge IGCSE' },
      resolveParam('language')
    ],
    example: '/teacher cv "معلم فيزياء للمرحلة الثانوية" --curriculum="المنهج الوطني والأنشطة الإثرائية لـ موهبة" --language=ar',
    qualityRules: [
      'إبراز دمج تقنيات التعليم الحديثة (EdTech) ومنصات الفصول التفاعلية',
      'توثيق نسب تحسن درجات الطلاب ومشاركاتهم في المسابقات والمنافسات العلمية',
      'ذكر الرخص المهنية التعليمية (مثل رخصة هيئة تقويم التعليم والتدريب في السعودية)'
    ],
    keywords: ['معلم', 'تربوي', 'تدريس', 'teacher cv', 'مدرسة', 'تعليم', 'رخصة مهنية'],
    createdAt: '2026-09-14T10:40:00.000Z',
    updatedAt: '2026-09-14T10:40:00.000Z',
    usageCount: 72,
    isFavorite: false
  }
];
