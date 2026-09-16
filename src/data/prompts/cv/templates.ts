import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const CV_TEMPLATES_PROMPTS: CommandPrompt[] = [
  {
    id: 'cv-tmpl-011',
    code: '/ats template',
    titleAr: 'قالب سيرة ذاتية متوافق مع أنظمة ATS',
    titleEn: 'Standard ATS-Friendly Layout Template',
    descriptionAr: 'قالب هيكلي عمود واحد بنص نقي متوافق مع معايير الفحص الآلي لأنظمة التوظيف الحديثة.',
    descriptionEn: 'Generate a single-column, cleanly structured text template designed for maximum ATS parse rate.',
    group: 'cv',
    cvCategory: 'templates',
    outputType: 'text',
    outputBadges: ['ATS', 'قالب', 'DOCX'],
    params: [
      { key: 'role', flag: 'role', isPositional: true, type: 'string', required: true, labelAr: 'المسمى المستهدف', labelEn: 'Target Role', hintAr: 'مثال: أخصائي موارد بشرية', hintEn: 'e.g. HR Specialist' },
      { key: 'experience_level', flag: 'experience_level', isPositional: false, type: 'enum', required: false, defaultValue: 'mid', labelAr: 'مستوى الخبرة', labelEn: 'Experience Level', hintAr: 'المستوى الوظيفي', hintEn: 'Career level', enumValues: [
        { value: 'fresh', labelAr: 'مبتدئ / خريج', labelEn: 'Entry / Graduate' },
        { value: 'mid', labelAr: 'متوسط الخبرة (3-6 سنوات)', labelEn: 'Mid Level' },
        { value: 'senior', labelAr: 'خبير / قيادي', labelEn: 'Senior / Lead' }
      ]},
      resolveParam('language')
    ],
    example: '/ats template "أخصائي موارد بشرية" --experience_level=mid --language=ar',
    qualityRules: [
      'تنسيق عمود واحد فقط وتجنب الجداول ومربعات النصوص (Text Boxes)',
      'عناوين أقسام قياسية واضحة مع خطوط آمنة مثل Arial أو Calibri',
      'صياغة نصية جاهزة للنسخ المباشر إلى برنامج Word بصيغة DOCX'
    ],
    keywords: ['ats template', 'قالب ats', 'سيرة بدون جداول', 'docx layout', 'ats compatible'],
    createdAt: '2026-09-14T10:11:00.000Z',
    updatedAt: '2026-09-14T10:11:00.000Z',
    usageCount: 95,
    isFavorite: true
  },
  {
    id: 'cv-tmpl-012',
    code: '/cv pdf layout',
    titleAr: 'هيكلة وتنسيق ملف سيرة ذاتية PDF',
    titleEn: 'Print & PDF-Ready CV Layout',
    descriptionAr: 'تصميم هيكل سيرة ذاتية منسق للتصدير كملف PDF عالي الجودة مع نص قابل للتحديد.',
    descriptionEn: 'Structured layout plan for clean, readable PDF export with selectable text and elegant typography.',
    group: 'cv',
    cvCategory: 'templates',
    outputType: 'text',
    outputBadges: ['PDF', 'قالب'],
    params: [
      { key: 'profession', flag: 'profession', isPositional: true, type: 'string', required: true, labelAr: 'المهنة أو التخصص', labelEn: 'Profession', hintAr: 'مثال: مهندس معماري، محامي', hintEn: 'e.g. Architect, Legal Counsel' },
      { key: 'page_count', flag: 'page_count', isPositional: false, type: 'enum', required: false, defaultValue: '1_page', labelAr: 'عدد الصفحات', labelEn: 'Pages', hintAr: 'عدد صفحات الملف', hintEn: 'Page count', enumValues: [
        { value: '1_page', labelAr: 'صفحة واحدة (موصى بها)', labelEn: '1 Page (Recommended)' },
        { value: '2_pages', labelAr: 'صفحتان', labelEn: '2 Pages' }
      ]},
      resolveParam('language')
    ],
    example: '/cv pdf layout "مستشار قانوني" --page_count=1_page --language=ar',
    qualityRules: [
      'ضمان أن يكون ملف الـ PDF نصيًا حقيقيًا وليس صورة ممسوحة ضوئيًا',
      'هوامش متوازنة (0.7 إلى 1 بوصة) وحجم خط 10-12pt للمحتوى',
      'تضمين روابط قابلة للنقر مثل البريد الإلكتروني ورابط LinkedIn'
    ],
    keywords: ['pdf layout', 'تنسيق pdf', 'سيرة pdf', 'طباعة سيرة', 'cv format'],
    createdAt: '2026-09-14T10:12:00.000Z',
    updatedAt: '2026-09-14T10:12:00.000Z',
    usageCount: 50,
    isFavorite: false
  },
  {
    id: 'cv-tmpl-013',
    code: '/cv docx layout',
    titleAr: 'تنسيق سيرة ذاتية لملفات Word (DOCX)',
    titleEn: 'Microsoft Word (DOCX) Optimized Layout',
    descriptionAr: 'قالب سيرة ذاتية مهيأ خصيصًا للتعديل والحفظ في Microsoft Word بصيغة DOCX المعيارية.',
    descriptionEn: 'Generate a clean document layout optimized for Microsoft Word DOCX styling and parsing.',
    group: 'cv',
    cvCategory: 'templates',
    outputType: 'text',
    outputBadges: ['DOCX', 'قالب'],
    params: [
      { key: 'role', flag: 'role', isPositional: true, type: 'string', required: true, labelAr: 'المسمى الوظيفي', labelEn: 'Job Role', hintAr: 'المسمى الوظيفي المستهدف', hintEn: 'Target job title' },
      resolveParam('experience'),
      resolveParam('language')
    ],
    example: '/cv docx layout "مدير مالي" --experience=senior --language=ar',
    qualityRules: [
      'تجنب مربعات النصوص والحقول المعقدة والرسومات المضمنة داخل Word',
      'استخدام أنماط الفقرات الكلاسيكية والنقاط النقطية (Bullet points) القياسية',
      'صيغة DOCX تمنح توافقًا استثنائيًا مع معظم بوابات الشركات'
    ],
    keywords: ['word cv', 'docx layout', 'قالب وورد', 'تنسيق docx', 'سيرة وورد'],
    createdAt: '2026-09-14T10:13:00.000Z',
    updatedAt: '2026-09-14T10:13:00.000Z',
    usageCount: 60,
    isFavorite: false
  },
  {
    id: 'cv-tmpl-014',
    code: '/one page cv',
    titleAr: 'سيرة ذاتية صفحة واحدة محكمة',
    titleEn: 'High-Impact One-Page Resume',
    descriptionAr: 'تكثيف وضبط السيرة الذاتية بدقة لتتسع لصفحة واحدة دون التضحية بأي إنجاز جوهري.',
    descriptionEn: 'Distill and condense your career history into a concise, powerful one-page resume format.',
    group: 'cv',
    cvCategory: 'templates',
    outputType: 'text',
    outputBadges: ['CV', 'PDF', 'DOCX'],
    params: [
      { key: 'role', flag: 'role', isPositional: true, type: 'string', required: true, labelAr: 'المسمى الوظيفي', labelEn: 'Target Role', hintAr: 'الوظيفة المراد التقديم عليها', hintEn: 'Target position' },
      { key: 'years_exp', flag: 'years_exp', isPositional: false, type: 'number', required: false, defaultValue: 4, labelAr: 'سنوات الخبرة', labelEn: 'Years of Experience', hintAr: 'عدد السنوات الإجمالية', hintEn: 'Total experience' },
      resolveParam('language')
    ],
    example: '/one page cv "مطور تطبيقات جوال" --years_exp=4 --language=ar',
    qualityRules: [
      'حذف الحشو والكلمات الزائدة والتركيز على آخر 2-3 وظائف ذات صلة مباشرة',
      'كل سطر يجب أن يثبت قيمة مضافة واضحة ومقاسة',
      'توزيع محكم ومقروء يملأ الصفحة بتوازن دون تكديس مجهد للعين'
    ],
    keywords: ['صفحة واحدة', 'one page cv', 'سيرة مكثفة', 'single page resume'],
    createdAt: '2026-09-14T10:14:00.000Z',
    updatedAt: '2026-09-14T10:14:00.000Z',
    usageCount: 88,
    isFavorite: true
  },
  {
    id: 'cv-tmpl-015',
    code: '/two page cv',
    titleAr: 'سيرة ذاتية من صفحتين لأصحاب الخبرة',
    titleEn: 'Comprehensive Two-Page Resume',
    descriptionAr: 'توزيع وتنسيق متوازن لسيرة ذاتية من صفحتين مناسبة لذوي الخبرة العريضة (5+ سنوات).',
    descriptionEn: 'Structure a professional two-page resume for experienced professionals with extensive project history.',
    group: 'cv',
    cvCategory: 'templates',
    outputType: 'text',
    outputBadges: ['CV', 'PDF', 'DOCX'],
    params: [
      { key: 'role', flag: 'role', isPositional: true, type: 'string', required: true, labelAr: 'المسمى الوظيفي', labelEn: 'Target Role', hintAr: 'المسمى المستهدف', hintEn: 'Target position' },
      { key: 'seniority', flag: 'seniority', isPositional: false, type: 'enum', required: false, defaultValue: 'senior', labelAr: 'المستوى الوظيفي', labelEn: 'Seniority', hintAr: 'مستوى الخبرة', hintEn: 'Level', enumValues: [
        { value: 'senior', labelAr: 'خبير (Senior)', labelEn: 'Senior' },
        { value: 'manager', labelAr: 'مدير إدارة / قسم', labelEn: 'Manager' },
        { value: 'director', labelAr: 'مدير تنفيذي (Director)', labelEn: 'Director' }
      ]},
      resolveParam('language')
    ],
    example: '/two page cv "مدير تسويق رقمي" --seniority=manager --language=ar',
    qualityRules: [
      'الصفحة الأولى تركز على الملخص وأحدث 2-3 وظائف وأكبر الإنجازات',
      'الصفحة الثانية تغطي الوظائف السابقة، التعليم، الشهادات واللغات',
      'تجنب ترك الصفحة الثانية بنصف سطر فارغ وتوزيع المحتوى بامتلاء متناسق'
    ],
    keywords: ['two page cv', 'صفحتين', 'سيرة مفصلة', 'senior cv', 'resume layout'],
    createdAt: '2026-09-14T10:15:00.000Z',
    updatedAt: '2026-09-14T10:15:00.000Z',
    usageCount: 42,
    isFavorite: false
  },
  {
    id: 'cv-tmpl-016',
    code: '/arabic cv template',
    titleAr: 'قالب سيرة ذاتية عربي معتمد',
    titleEn: 'Native Arabic Professional CV Template',
    descriptionAr: 'قالب ومصطلحات عربية سليمة وموجهة لسوق العمل السعودي والخليجي والعربي.',
    descriptionEn: 'Arabic-first resume template with flawless phrasing tailored for Saudi & GCC job markets.',
    group: 'cv',
    cvCategory: 'templates',
    outputType: 'text',
    outputBadges: ['قالب', 'PDF'],
    params: [
      { key: 'role', flag: 'role', isPositional: true, type: 'string', required: true, labelAr: 'المسمى الوظيفي', labelEn: 'Role', hintAr: 'مثال: أخصائي علاقات عامة، محاسب', hintEn: 'e.g. PR Specialist, Accountant' },
      { key: 'country', flag: 'country', isPositional: false, type: 'string', required: false, defaultValue: 'السعودية', labelAr: 'الدولة المستهدفة', labelEn: 'Target Country', hintAr: 'السوق الوظيفي المستهدف', hintEn: 'Target job market' },
      resolveParam('experience')
    ],
    example: '/arabic cv template "أخصائي علاقات عامة" --country="السعودية" --experience=mid',
    qualityRules: [
      'استخدام لغة عربية مهنية فصيحة وتجنب الترجمة الحرفية الركيكة',
      'عناوين أقسام مألوفة: الملخص المهني، الخبرات الوظيفية، المؤهلات العلمية، المهارات',
      'محاذاة من اليمين لليسار RTL متسقة تمامًا'
    ],
    keywords: ['سيرة عربية', 'قالب عربي', 'arabic cv', 'سيرة سعودية', 'قالب سيرة'],
    createdAt: '2026-09-14T10:16:00.000Z',
    updatedAt: '2026-09-14T10:16:00.000Z',
    usageCount: 92,
    isFavorite: true
  },
  {
    id: 'cv-tmpl-017',
    code: '/english cv template',
    titleAr: 'قالب سيرة ذاتية بالإنجليزية للشركات العالمية',
    titleEn: 'Standard English International CV Template',
    descriptionAr: 'قالب سيرة ذاتية باللغة الإنجليزية متوافق مع معايير الشركات العالمية ومتطلبات الـ ATS.',
    descriptionEn: 'Standard North American / European English resume format tailored for global companies and ATS parsers.',
    group: 'cv',
    cvCategory: 'templates',
    outputType: 'text',
    outputBadges: ['قالب', 'ATS', 'DOCX'],
    params: [
      { key: 'target_title', flag: 'target_title', isPositional: true, type: 'string', required: true, labelAr: 'المسمى بالإنجليزية', labelEn: 'Target English Title', hintAr: 'e.g. Senior Backend Engineer, Financial Analyst', hintEn: 'Target English job title' },
      resolveParam('experience'),
      { key: 'region', flag: 'region', isPositional: false, type: 'enum', required: false, defaultValue: 'international', labelAr: 'المنطقة', labelEn: 'Region Standards', hintAr: 'معيار السوق', hintEn: 'Standard format', enumValues: [
        { value: 'us_canada', labelAr: 'أمريكا وكندا (Resume بدون صورة)', labelEn: 'US/Canada (No photo)' },
        { value: 'uk_europe', labelAr: 'بريطانيا وأوروبا (CV)', labelEn: 'UK / Europe' },
        { value: 'international', labelAr: 'عالمي / شركات متعددة الجنسيات', labelEn: 'Multinational' }
      ]}
    ],
    example: '/english cv template "Senior Backend Engineer" --experience=senior --region=international',
    qualityRules: [
      'استخدام أفعال العمل الإنجليزية القوية في زمن الماضي (Led, Designed, Optimized, Generated)',
      'الالتزام الصارم بعدم وضع الصورة الشخصية أو تاريخ الميلاد لمعايير US/UK',
      'بناء جمل الإنجاز بصيغة: Action Verb + Task + Impact / Metrics'
    ],
    keywords: ['english cv', 'سيرة انجليزية', 'international resume', 'ats template english'],
    createdAt: '2026-09-14T10:17:00.000Z',
    updatedAt: '2026-09-14T10:17:00.000Z',
    usageCount: 75,
    isFavorite: false
  },
  {
    id: 'cv-tmpl-018',
    code: '/bilingual cv',
    titleAr: 'سيرة ذاتية ثنائية اللغة (عربي - إنجليزي)',
    titleEn: 'Bilingual Resume (Arabic & English Versions)',
    descriptionAr: 'توليد نسختين متطابقتين هيكليًا ومترجمتين باحترافية تامة باللغتين العربية والإنجليزية.',
    descriptionEn: 'Generate perfectly mirrored, culturally adapted Arabic and English resume versions.',
    group: 'cv',
    cvCategory: 'templates',
    outputType: 'text',
    outputBadges: ['CV', 'PDF'],
    params: [
      { key: 'role', flag: 'role', isPositional: true, type: 'string', required: true, labelAr: 'المسمى الوظيفي', labelEn: 'Role', hintAr: 'المسمى باللغتين', hintEn: 'Role in both languages' },
      resolveParam('experience')
    ],
    example: '/bilingual cv "أخصائي أمن سيبراني / Cybersecurity Specialist" --experience=mid',
    qualityRules: [
      'تطابق كامل في أقسام وتواريخ وإنجازات النسختين',
      'تجنب الترجمة الآلية الحرفية للمصطلحات التقنية في النسخة العربية',
      'تنسيق كل نسخة وفق اتجاه القراءة الطبيعي لها (RTL / LTR)'
    ],
    keywords: ['ثنائي اللغة', 'bilingual cv', 'سيرة عربي وانجليزي', 'ترجمة سيرة'],
    createdAt: '2026-09-14T10:18:00.000Z',
    updatedAt: '2026-09-14T10:18:00.000Z',
    usageCount: 58,
    isFavorite: false
  },
  {
    id: 'cv-tmpl-019',
    code: '/cv sections',
    titleAr: 'تحديد وترتيب أقسام السيرة المثالية',
    titleEn: 'Optimal CV Section Ordering & Hierarchy',
    descriptionAr: 'اقتراح الترتيب الاستراتيجي لأقسام السيرة بناءً على ملفك وخبرتك للحصول على أعلى انتباه لمسؤولي التوظيف.',
    descriptionEn: 'Determine the most impactful section hierarchy based on your career stage and strengths.',
    group: 'cv',
    cvCategory: 'templates',
    outputType: 'text',
    outputBadges: ['قالب'],
    params: [
      { key: 'profile_type', flag: 'profile_type', isPositional: true, type: 'string', required: true, labelAr: 'نوع ملفك وخبرتك', labelEn: 'Candidate Profile Type', hintAr: 'مثال: خريج جديد، خبير تقني، قيادي، منقطع عن العمل', hintEn: 'e.g. Fresh grad, Senior Tech, Executive' },
      resolveParam('language')
    ],
    example: '/cv sections "خريج جديد حاصل على شهادات احترافية ومشاريع قوية" --language=ar',
    qualityRules: [
      'تقديم نقاط القوة الأبرز في الجزء العلوي الذي يراه مسؤولو التوظيف في أول 6 ثوانٍ',
      'تحديد ترتيب الأقسام: Summary -> Experience/Projects -> Skills -> Education -> Certifications',
      'توضيح الأقسام التي يجب إضافتها أو استبعادها لتجنب التشتيت'
    ],
    keywords: ['أقسام السيرة', 'cv sections', 'ترتيب السيرة', 'structure', 'hierarchy'],
    createdAt: '2026-09-14T10:19:00.000Z',
    updatedAt: '2026-09-14T10:19:00.000Z',
    usageCount: 40,
    isFavorite: false
  },
  {
    id: 'cv-tmpl-020',
    code: '/cv structure',
    titleAr: 'تحليل وهندسة هيكل السيرة الذاتية',
    titleEn: 'Resume Information Architecture & Layout Audit',
    descriptionAr: 'مراجعة وتقييم التوزيع الهيكلي والمساحي والمحاذاة لسيرتك الذاتية لتحقيق أعلى كفاءة قراءة.',
    descriptionEn: 'Evaluate resume layout density, white space balance, typography hierarchy, and scannability.',
    group: 'cv',
    cvCategory: 'templates',
    outputType: 'analysis',
    outputBadges: ['قالب', 'تحليل'],
    params: [
      { key: 'cv_outline', flag: 'cv_outline', isPositional: true, type: 'text', required: true, labelAr: 'مخطط أو نص السيرة', labelEn: 'CV Text / Outline', hintAr: 'انسخ هيكل وأقسام سيرتك الحالية هنا', hintEn: 'Paste current CV sections & outline' },
      resolveParam('language')
    ],
    example: '/cv structure [نص هيكل السيرة الحالية] --language=ar',
    qualityRules: [
      'تقييم نسبة النص للمساحة البيضاء ووضوح التسلسل البصري',
      'فحص قابلية المسح السريع بالعين (F-Pattern Reading)',
      'تقديم توصيات محددة لإعادة ترتيب الفقرات وتقليص الطول الزائد'
    ],
    keywords: ['هندسة السيرة', 'cv structure', 'تحليل الهيكل', 'scannability', 'layout audit'],
    createdAt: '2026-09-14T10:20:00.000Z',
    updatedAt: '2026-09-14T10:20:00.000Z',
    usageCount: 48,
    isFavorite: false
  }
];
