import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const CV_REVIEW_PROMPTS: CommandPrompt[] = [
  {
    id: 'cv-rev-041',
    code: '/cv review',
    titleAr: 'مراجعة وتدقيق شامل للسيرة الذاتية',
    titleEn: 'Comprehensive Resume & CV Audit',
    descriptionAr: 'فحص احترافي يحلل نقاط القوة، مواطن الضعف، جودة الصياغة، وفرص تحسين السيرة.',
    descriptionEn: 'Deep architectural and linguistic critique of your resume with actionable recommendations.',
    group: 'cv',
    cvCategory: 'review',
    outputType: 'analysis',
    outputBadges: ['تحليل'],
    params: [
      { key: 'cv_text', flag: 'cv_text', isPositional: true, type: 'text', required: true, labelAr: 'نص السيرة الذاتية', labelEn: 'Your CV Content', hintAr: 'انسخ نص السيرة الذاتية هنا', hintEn: 'Paste resume text' },
      { key: 'target_role', flag: 'target_role', isPositional: false, type: 'string', required: false, labelAr: 'الوظيفة المستهدفة إن وجدت', labelEn: 'Target Role', hintAr: 'المسمى الوظيفي المستهدف', hintEn: 'Target job role' },
      resolveParam('language')
    ],
    example: '/cv review [نص السيرة الذاتية الكامل] --target_role="مدير عمليات لوجستية" --language=ar',
    qualityRules: [
      'تقييم صريح وموضوعي عبر 5 محاور: الهيكل، قوة الأفعال، وضوح الإنجازات، الكلمات المفتاحية، وتنسيق الأقسام',
      'تقديم مقترحات تعديل محددة لكل نقطة ضعيفة (Before vs. After)',
      'إرشادات مخصصة لسوق العمل المستهدف لرفع فرص اجتياز الفرز الأولي'
    ],
    keywords: ['مراجعة سيرة', 'cv review', 'تدقيق السيرة', 'تقييم السيرة', 'audit'],
    createdAt: '2026-09-14T10:41:00.000Z',
    updatedAt: '2026-09-14T10:41:00.000Z',
    usageCount: 160,
    isFavorite: true
  },
  {
    id: 'cv-rev-042',
    code: '/ats check',
    titleAr: 'فحص التوافق مع أنظمة التوظيف ATS',
    titleEn: 'ATS Parsing & Compatibility Test',
    descriptionAr: 'اختبار محاكاة لمعرفة مدى قابلية قراءة وتفسير ملفك وسيرتك عبر برمجيات الفحص الآلي ATS.',
    descriptionEn: 'Simulate how automated applicant tracking systems parse your text, extract dates, and read headings.',
    group: 'cv',
    cvCategory: 'review',
    outputType: 'analysis',
    outputBadges: ['ATS', 'تحليل'],
    params: [
      { key: 'resume_text', flag: 'resume_text', isPositional: true, type: 'text', required: true, labelAr: 'نص السيرة الذاتية', labelEn: 'Resume Text', hintAr: 'انسخ نص سيرتك الذاتية هنا', hintEn: 'Paste resume text' },
      resolveParam('language')
    ],
    example: '/ats check [نص السيرة الذاتية] --language=ar',
    qualityRules: [
      'فحص العناوين الرئيسية ومطابقتها للمعايير المفهومة لدى خوارزميات ATS',
      'الكشف عن أي عناصر خطرة كالجداول، الصور، الرموز غير المعيارية، أو التواريخ المعكوسة',
      'التأكيد بوضوح على أن القالب مهيأ لتوافق أفضل ولا نعد بأي ضمانات وهمية'
    ],
    keywords: ['ats check', 'فحص ats', 'توافق ats', 'أنظمة توظيف', 'فحص آلي'],
    createdAt: '2026-09-14T10:42:00.000Z',
    updatedAt: '2026-09-14T10:42:00.000Z',
    usageCount: 128,
    isFavorite: true
  },
  {
    id: 'cv-rev-043',
    code: '/cv score',
    titleAr: 'تقييم السيرة الذاتية ودرجة الجاهزية (Score /100)',
    titleEn: 'Resume Readiness Score & Benchmark',
    descriptionAr: 'إعطاء علامة كمية من 100 مع تفصيل دقيق لكل معيار وإرشادات رفع الدرجة فورًا.',
    descriptionEn: 'Get a comprehensive score out of 100 with actionable steps to upgrade weak sections.',
    group: 'cv',
    cvCategory: 'review',
    outputType: 'analysis',
    outputBadges: ['تحليل'],
    params: [
      { key: 'cv_content', flag: 'cv_content', isPositional: true, type: 'text', required: true, labelAr: 'نص السيرة الذاتية', labelEn: 'CV Content', hintAr: 'انسخ نص سيرتك لتقييمها', hintEn: 'Paste your CV content' },
      resolveParam('language')
    ],
    example: '/cv score [نص السيرة الذاتية] --language=ar',
    qualityRules: [
      'توزيع الدرجات: 25 نقطة للأثر والإنجازات الرقمية، 25 للكلمات المفتاحية، 25 للهيكل، 25 لجودة اللغة',
      'تحديد أكبر 3 ثغرات تسببت في خصم النقاط وكيفية علاجها فورًا',
      'مقارنة مرجعية مع متوسط السير الذاتية التنافسية في نفس المجال'
    ],
    keywords: ['درجة السيرة', 'cv score', 'تقييم كمي', 'علامة السيرة', 'benchmark'],
    createdAt: '2026-09-14T10:43:00.000Z',
    updatedAt: '2026-09-14T10:43:00.000Z',
    usageCount: 88,
    isFavorite: false
  },
  {
    id: 'cv-rev-044',
    code: '/cv rewrite',
    titleAr: 'إعادة صياغة وتحسين نص السيرة بالكامل',
    titleEn: 'End-to-End Executive Resume Rewrite',
    descriptionAr: 'ترقية وتلميع لغة السيرة بأفعال احترافية وصياغة بليغة دون تغيير الحقائق والخبرات الفعلية.',
    descriptionEn: 'Rewrite your complete CV text with polished business vocabulary and punchy action verbs.',
    group: 'cv',
    cvCategory: 'review',
    outputType: 'text',
    outputBadges: ['CV', 'نص'],
    params: [
      { key: 'rough_cv', flag: 'rough_cv', isPositional: true, type: 'text', required: true, labelAr: 'نص السيرة الذاتية الحالي', labelEn: 'Current Rough CV', hintAr: 'انسخ نص السيرة الحالية لإعادة صياغتها', hintEn: 'Paste draft CV text' },
      resolveParam('tone'),
      resolveParam('language')
    ],
    example: '/cv rewrite [نص السيرة الحالية غير المنمقة] --tone=authoritative --language=ar',
    qualityRules: [
      'استبدال الكلمات الركيكة والمكررة بأفعال حركية قوية (Action Verbs)',
      'إعادة صياغة الجمل الطويلة والمربكة لتصبح نقاط إنجاز مكثفة وسهلة القراءة',
      'الحفاظ التام على أمانة المعلومات وتجنب اختلاق معلومات أو أرقام وهمية'
    ],
    keywords: ['إعادة صياغة', 'cv rewrite', 'تحسين النص', 'صياغة احترافية', 'تعديل السيرة'],
    createdAt: '2026-09-14T10:44:00.000Z',
    updatedAt: '2026-09-14T10:44:00.000Z',
    usageCount: 118,
    isFavorite: true
  },
  {
    id: 'cv-rev-045',
    code: '/cv shorten',
    titleAr: 'اختصار واختزال السيرة الذاتية الطويلة',
    titleEn: 'Resume Condensation & Word Count Reduction',
    descriptionAr: 'حذف الحشو والفقرات الثانوية لتقليص السيرة إلى صفحة واحدة أو صفحتين بتركيز شديد.',
    descriptionEn: 'Trim bloated resumes and remove repetitive lines to fit standard 1 or 2-page page constraints.',
    group: 'cv',
    cvCategory: 'review',
    outputType: 'text',
    outputBadges: ['CV', 'PDF'],
    params: [
      { key: 'long_cv', flag: 'long_cv', isPositional: true, type: 'text', required: true, labelAr: 'نص السيرة الطويلة', labelEn: 'Long CV Text', hintAr: 'انسخ نص السيرة الطويلة هنا', hintEn: 'Paste lengthy resume text' },
      { key: 'target_length', flag: 'target_length', isPositional: false, type: 'enum', required: false, defaultValue: '1_page', labelAr: 'الحجم المستهدف', labelEn: 'Target Length', hintAr: 'اختر الطول المطلوب', hintEn: 'Target length', enumValues: [
        { value: '1_page', labelAr: 'صفحة واحدة مكثفة (أقل من 400 كلمة)', labelEn: '1 Tight Page (<400 words)' },
        { value: '2_pages', labelAr: 'صفحتان منظمتان (أقل من 750 كلمة)', labelEn: '2 Pages (<750 words)' }
      ]},
      resolveParam('language')
    ],
    example: '/cv shorten [نص سيرة ذاتية من 4 صفحات] --target_length=1_page --language=ar',
    qualityRules: [
      'دمج المهام المتشابهة وحذف المسؤوليات الروتينية البديهية',
      'حذف الوظائف القديمة جدًا (أكثر من 10-15 سنة) أو دمجها في سطر مختصر',
      'الحفاظ الكامل على أقوى 5-7 إنجازات رئيسية تثبت جدارة المرشح'
    ],
    keywords: ['اختصار السيرة', 'cv shorten', 'تقليص السيرة', 'صفحة واحدة', 'condense resume'],
    createdAt: '2026-09-14T10:45:00.000Z',
    updatedAt: '2026-09-14T10:45:00.000Z',
    usageCount: 65,
    isFavorite: false
  },
  {
    id: 'cv-rev-046',
    code: '/cv gaps',
    titleAr: 'معالجة وتبرير الفجوات الزمنية في السيرة',
    titleEn: 'Employment Gap Strategy & Rephrasing',
    descriptionAr: 'معالجة فترات الانقطاع عن العمل (دراسة، ظروف عائلية، ريادة، بحث) بأسلوب مهني مقنع وصريح.',
    descriptionEn: 'Strategically frame career breaks and unemployment gaps constructively in your timeline.',
    group: 'cv',
    cvCategory: 'review',
    outputType: 'analysis',
    outputBadges: ['تحليل'],
    params: [
      { key: 'gap_reason', flag: 'gap_reason', isPositional: true, type: 'string', required: true, labelAr: 'سبب ومدة الانقطاع', labelEn: 'Gap Period & Reason', hintAr: 'مثال: انقطاع لمدة سنة للتفرغ لرعاية أسرية أو الدراسة أو مشروع ريادي', hintEn: 'e.g. 1-year gap for caregiving, studies, or startup' },
      { key: 'activities', flag: 'activities', isPositional: false, type: 'string', required: false, labelAr: 'أي أنشطة أو دورات أثناء الفجوة', labelEn: 'Activities / Courses During Gap', hintAr: 'مثال: عمل حر، دورات عبر الإنترنت، تطوع', hintEn: 'e.g. Freelancing, online certs, volunteering' },
      resolveParam('language')
    ],
    example: '/cv gaps "انقطاع لمدة سنة ونصف بعد تصفية مشروعي التجاري الخاص" --activities="إتمام شهادة في إدارة سلاسل الإمداد ومشاريع استشارية مصغرة" --language=ar',
    qualityRules: [
      'تحويل الفجوة إلى محطة للتعلم المستمر، بناء المهارات، أو خوض تجارب ريادية قيّمة',
      'اقتراح صياغة مناسبة لوضعها في السيرة ضمن التسلسل الزمني بطريقة طبيعية',
      'إعداد إجابة نموذجية واثقة للمقابلة الشخصية عند السؤال عن سبب الانقطاع'
    ],
    keywords: ['فجوة زمنية', 'انقطاع عن العمل', 'career gaps', 'توقف وظيفي', 'gap explanation'],
    createdAt: '2026-09-14T10:46:00.000Z',
    updatedAt: '2026-09-14T10:46:00.000Z',
    usageCount: 52,
    isFavorite: false
  },
  {
    id: 'cv-rev-047',
    code: '/cv proofread',
    titleAr: 'التدقيق اللغوي والإملائي للسيرة الذاتية',
    titleEn: 'Grammar, Punctuation & Spelling Proofreader',
    descriptionAr: 'فحص لغوي ونحوي وإملائي دقيق يكتشف الأخطاء الشائعة وازدواج المسافات والركاكة.',
    descriptionEn: 'Meticulous proofreading for grammatical consistency, typos, tense alignment, and punctuation.',
    group: 'cv',
    cvCategory: 'review',
    outputType: 'mixed',
    outputBadges: ['تحليل', 'نص'],
    params: [
      { key: 'cv_text', flag: 'cv_text', isPositional: true, type: 'text', required: true, labelAr: 'نص السيرة المراد تدقيقه', labelEn: 'CV Text to Proofread', hintAr: 'انسخ نص السيرة للتدقيق الإملائي والنحوي', hintEn: 'Paste resume text' },
      resolveParam('language')
    ],
    example: '/cv proofread [نص السيرة باللغة العربية أو الإنجليزية] --language=ar',
    qualityRules: [
      'توحيد زمن الأفعال (الماضي للخبرات السابقة، والمضارع للوظيفة الحالية)',
      'تصحيح الهمزات والتنوين وعلامات الترقيم والمسافات الزائدة',
      'إبراز قائمة الأخطاء المصوبة وتوفير النص النهائي المصحح بالكامل'
    ],
    keywords: ['تدقيق لغوي', 'proofread', 'تصحيح إملائي', 'أخطاء لغوية', 'تدقيق نحوي'],
    createdAt: '2026-09-14T10:47:00.000Z',
    updatedAt: '2026-09-14T10:47:00.000Z',
    usageCount: 78,
    isFavorite: false
  },
  {
    id: 'cv-rev-048',
    code: '/cv impact',
    titleAr: 'تعزيز الأثر والأرقام والنتائج في السيرة',
    titleEn: 'Quantifiable Impact & Metrics Booster',
    descriptionAr: 'تحديد العبارات المبهمة في سيرتك واقتراح مقاييس وأرقام ونسب واقعية تدعم قوتها وتبرز قيمتك.',
    descriptionEn: 'Identify weak, passive statements and inject measurable metrics, revenue, cost, and time impact.',
    group: 'cv',
    cvCategory: 'review',
    outputType: 'mixed',
    outputBadges: ['تحليل', 'نص'],
    params: [
      { key: 'cv_bullets', flag: 'cv_bullets', isPositional: true, type: 'text', required: true, labelAr: 'نقاط الخبرة الحالية', labelEn: 'Current Experience Bullets', hintAr: 'انسخ نقاط الخبرة التي تريد تحويلها إلى أرقام وإنجازات', hintEn: 'Paste bullets to quantify' },
      resolveParam('language')
    ],
    example: '/cv impact [نقاط خبرة عامة مثل: قمت بإدارة الفريق، وحسّنت خدمة العملاء، ونظمت المستودع] --language=ar',
    qualityRules: [
      'طرح أسئلة توجيهية لاستخراج الأرقام الحقيقية (كم عدد؟ كم النسبة؟ كم المبلغ الذي وفرته؟)',
      'صياغة بدائل قوية تحتوي على محددات قياس ملموسة (مثل: خفض زمن الانتظار من 15 إلى 4 دقائق)',
      'تقديم نسختين لكل نقطة (نسخة رقمية محددة، ونسخة تقديرية واقعية)'
    ],
    keywords: ['أثر رقمي', 'cv impact', 'أرقام وإحصائيات', 'تعزيز النتائج', 'metrics booster'],
    createdAt: '2026-09-14T10:48:00.000Z',
    updatedAt: '2026-09-14T10:48:00.000Z',
    usageCount: 84,
    isFavorite: false
  },
  {
    id: 'cv-rev-049',
    code: '/cv authenticity check',
    titleAr: 'فحص المصداقية والتناسق المنطقي للسيرة',
    titleEn: 'Resume Authenticity & Credibility Check',
    descriptionAr: 'فحص يدقق في واقعية الادعاءات، التواريخ، التدرج الوظيفي، وتجنب المبالغات المكشوفة.',
    descriptionEn: 'Audit claims, timelines, and promotion rates to ensure bulletproof credibility during background checks.',
    group: 'cv',
    cvCategory: 'review',
    outputType: 'analysis',
    outputBadges: ['تحليل'],
    params: [
      { key: 'cv_text', flag: 'cv_text', isPositional: true, type: 'text', required: true, labelAr: 'نص السيرة الذاتية', labelEn: 'Full CV Text', hintAr: 'انسخ نص السيرة لفحص التناسق والمصداقية', hintEn: 'Paste CV text' },
      resolveParam('language')
    ],
    example: '/cv authenticity check [نص السيرة الذاتية الكامل] --language=ar',
    qualityRules: [
      'فحص التناقضات بين التواريخ والمؤهلات وسنوات الخبرة المدعاة',
      'رصد المبالغات التي قد تثير الشكوك في المقابلة الشخصية وتعديلها لتكون رصينة',
      'التأكد من أن مستوى المهارات المدون يتناسب منطقيًا مع الدور ومستوى الخبرة'
    ],
    keywords: ['مصداقية', 'فحص السيرة', 'authenticity', 'تناسق التواريخ', 'background check'],
    createdAt: '2026-09-14T10:49:00.000Z',
    updatedAt: '2026-09-14T10:49:00.000Z',
    usageCount: 38,
    isFavorite: false
  },
  {
    id: 'cv-rev-050',
    code: '/cv final checklist',
    titleAr: 'قائمة الفحص النهائي قبل إرسال السيرة الذاتية',
    titleEn: 'Pre-Submission 20-Point Quality Checklist',
    descriptionAr: 'قائمة تدقيق شاملة من 20 نقطة تغطي بيانات التواصل، الروابط، التنسيق، وصيغة الملف قبل التقديم.',
    descriptionEn: 'A rigorous 20-item verification checklist covering contact info, clickable links, ATS compatibility, and formatting.',
    group: 'cv',
    cvCategory: 'review',
    outputType: 'mixed',
    outputBadges: ['تحليل', 'قائمة فحص'],
    params: [
      { key: 'role', flag: 'role', isPositional: true, type: 'string', required: true, labelAr: 'الوظيفة المتقدم إليها', labelEn: 'Applied Position', hintAr: 'المسمى الوظيفي والجهة', hintEn: 'Job title and employer' },
      resolveParam('language')
    ],
    example: '/cv final checklist "مدير منتجات أول في شركة Stc pay" --language=ar',
    qualityRules: [
      'فحص صحة البريد الإلكتروني ورقم الجوال والمدينة ورابط LinkedIn الحقيقي',
      'التأكد من تسمية الملف باحترافية: (FullName_CV_TargetRole.pdf)',
      'التأكد من أن الملف نصي نقي قابل للنسخ وخالٍ من الأخطاء التنسيقية'
    ],
    keywords: ['قائمة فحص', 'checklist', 'إرسال السيرة', 'تدقيق نهائي', 'pre-submission'],
    createdAt: '2026-09-14T10:50:00.000Z',
    updatedAt: '2026-09-14T10:50:00.000Z',
    usageCount: 96,
    isFavorite: true
  }
];
