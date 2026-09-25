import { CommandPrompt } from '../../../types/prompt';

export const CAROUSEL_TRANS_PROMPTS: CommandPrompt[] = [
  {
    id: 'car-car-011',
    code: '/pdf carousel',
    titleAr: 'تحويل ملف PDF إلى كاروسيل سوشيال ميديا',
    titleEn: 'PDF Document to Carousel Conversion',
    descriptionAr: 'يحول مستند PDF إلى كاروسيل منظم مع عناوين مختصرة ونصوص شرائح جذابة وPrompts بصرية لتوليد الصور.',
    descriptionEn: 'Transforms a PDF into an engaging multi-slide social carousel with slide plans, punchy hooks, and image prompts.',
    group: 'carousel',
    carouselCategory: 'pdf_to_carousel',
    outputType: 'plan',
    outputBadges: ['Carousel', 'تحويل PDF', 'سوشيال ميديا'],
    params: [
      { key: 'pdf', flag: 'pdf', isPositional: true, type: 'text', required: true, labelAr: 'محتوى أو مسار ملف PDF', labelEn: 'PDF Content / Path', hintAr: 'الصق نص الـ PDF أو ارفعه...', hintEn: 'Paste PDF text or upload...' },
      { key: 'slides', flag: 'slides', isPositional: false, type: 'number', required: false, defaultValue: 8, labelAr: 'عدد الشرائح', labelEn: 'Number of Slides', hintAr: '6, 8, 10', hintEn: '6, 8, 10' },
      { key: 'ratio', flag: 'ratio', isPositional: false, type: 'string', required: false, defaultValue: '4:5', labelAr: 'نسبة أبعاد الشريحة', labelEn: 'Aspect Ratio', hintAr: '4:5 (Instagram), 1:1', hintEn: '4:5, 1:1' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'luxury-editorial', labelAr: 'نمط التصميم', labelEn: 'Design Style', hintAr: 'luxury-editorial, clean-tech, bold', hintEn: 'luxury-editorial, clean-tech' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en, bilingual', hintEn: 'ar, en' },
      { key: 'output', flag: 'output', isPositional: false, type: 'string', required: false, defaultValue: 'slide-plan,visual-prompts', labelAr: 'المخرجات', labelEn: 'Output', hintAr: 'slide-plan,visual-prompts', hintEn: 'slide-plan,visual-prompts' }
    ],
    example: '/pdf carousel [ارفع PDF] --slides=8 --ratio=4:5 --style=luxury-editorial --output=slide-plan,visual-prompts --language=ar',
    qualityRules: [
      'اختصار النصوص لكل شريحة بحد أقصى 25 كلمة لضمان سهولة القراءة على الجوال',
      'توفير غلاف جاذب يطرح سؤالاً أو معلومة صادمة لرفع نسبة التقليب',
      'إرفاق برومبت توليد بصري مخصص لكل شريحة يتناسق مع الشريحة السابقة'
    ],
    keywords: ['pdf carousel', 'تحويل pdf', 'كاروسيل شرائح', 'إنستغرام كاروسيل'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 210,
    isFavorite: true
  },
  {
    id: 'car-car-012',
    code: '/reference carousel',
    titleAr: 'كاروسيل مستلهم من ستايل مرجعي',
    titleEn: 'Reference-Inspired Social Carousel',
    descriptionAr: 'يحول محتوى أو ملف إلى كاروسيل عربي كامل مقتبس بدقة من الروح البصرية وأسلوب صورة مرجعية محددة.',
    descriptionEn: 'Converts raw content into an Arabic carousel matching the layout geometry, tone, and visual aesthetic of a reference image.',
    group: 'carousel',
    carouselCategory: 'pdf_to_carousel',
    outputType: 'plan',
    outputBadges: ['Carousel', 'محاكاة مرجعية', 'هوية موحدة'],
    params: [
      { key: 'content', flag: 'content', isPositional: true, type: 'text', required: true, labelAr: 'المحتوى أو الموضوع', labelEn: 'Content / Topic', hintAr: 'ارفع PDF أو الصق المحتوى...', hintEn: 'Paste content or upload...' },
      { key: 'reference', flag: 'reference', isPositional: false, type: 'text', required: true, labelAr: 'الصورة المرجعية للستايل', labelEn: 'Style Reference Image', hintAr: 'رابط أو وصف صورة المرجع...', hintEn: 'Reference image URL or desc...' },
      { key: 'slides', flag: 'slides', isPositional: false, type: 'number', required: false, defaultValue: 8, labelAr: 'عدد الشرائح', labelEn: 'Slides Count', hintAr: '8, 10', hintEn: '8, 10' },
      { key: 'ratio', flag: 'ratio', isPositional: false, type: 'string', required: false, defaultValue: '4:5', labelAr: 'النسبة', labelEn: 'Ratio', hintAr: '4:5, 1:1', hintEn: '4:5, 1:1' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' }
    ],
    example: '/reference carousel [الصق المحتوى] --reference=[ارفع صورة الستايل] --slides=8 --ratio=4:5 --language=ar --output=slide-plan,visual-prompts',
    qualityRules: [
      'محاكاة تناسق الهوامش والزوايا والألوان من الصورة المرجعية بدقة',
      'تكييف التيبوغرافي العربي ليلائم الفخامة والتنسيق الموجود في المرجع الأصلي'
    ],
    keywords: ['reference carousel', 'كاروسيل مرجعي', 'اقتباس ستايل', 'شرائح عربية'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 175,
    isFavorite: true
  },
  {
    id: 'car-car-013',
    code: '/report carousel',
    titleAr: 'تحويل تقرير أو دراسة إلى كاروسيل معلوماتي',
    titleEn: 'Report & Whitepaper to Carousel',
    descriptionAr: 'يحول تقريراً تحليلياً أو دراسة أرقام إلى كاروسيل معلوماتي يبرز أهم النتائج والرسوم البيانية المباشرة.',
    descriptionEn: 'Translates reports and whitepapers into snackable data-driven carousels highlighting KPIs and breakthroughs.',
    group: 'carousel',
    carouselCategory: 'pdf_to_carousel',
    outputType: 'plan',
    outputBadges: ['Carousel', 'تقارير وبيانات', 'إنفوجرافيك'],
    params: [
      { key: 'report', flag: 'report', isPositional: true, type: 'text', required: true, labelAr: 'عنوان أو نص التقرير', labelEn: 'Report Subject / Text', hintAr: 'تقرير التوظيف والذكاء الاصطناعي...', hintEn: 'Employment AI Report...' },
      { key: 'slides', flag: 'slides', isPositional: false, type: 'number', required: false, defaultValue: 7, labelAr: 'عدد الشرائح', labelEn: 'Slides', hintAr: '7, 8', hintEn: '7, 8' },
      { key: 'dataFocus', flag: 'data-focus', isPositional: false, type: 'string', required: false, defaultValue: 'key-findings', labelAr: 'محور التركيز', labelEn: 'Data Focus', hintAr: 'key-findings, growth-metrics, risks', hintEn: 'key-findings, stats' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'clean-modern', labelAr: 'الأسلوب', labelEn: 'Visual Style', hintAr: 'clean-modern, corporate, bold', hintEn: 'clean-modern, bold' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' }
    ],
    example: '/report carousel تقرير عن أسلوب العمل الهجين --slides=7 --data-focus=key-findings --format=clean-modern --language=ar',
    qualityRules: [
      'تخصيص كل شريحة لبيان رقمي أو نتيجة رئيسية واحدة لمنع التشتت',
      'إبراز النسب المئوية بخطوط كبيرة وواضحة جداً (Stat Callouts)'
    ],
    keywords: ['report carousel', 'كاروسيل تقرير', 'دراسة أرقام', 'نتائج وإحصائيات'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 168,
    isFavorite: true
  },
  {
    id: 'car-car-014',
    code: '/article carousel',
    titleAr: 'تلخيص مقال مطول في كاروسيل جذاب',
    titleEn: 'Article / Blog to Viral Social Carousel',
    descriptionAr: 'يلخص مقالاً أو فكرة مطولة في كاروسيل من 6 إلى 10 شرائح مع الحفاظ على روح الفكرة وهوك افتتاحي قوي.',
    descriptionEn: 'Condenses long-form articles into punchy, high-retention carousels with compelling curiosity hooks.',
    group: 'carousel',
    carouselCategory: 'pdf_to_carousel',
    outputType: 'plan',
    outputBadges: ['Carousel', 'تلخيص مقالات', 'Viral'],
    params: [
      { key: 'article', flag: 'article', isPositional: true, type: 'text', required: true, labelAr: 'المقال أو فكرته', labelEn: 'Article / Subject', hintAr: 'مقال عن استراتيجيات التسويق الحديثة...', hintEn: 'Article on marketing strategy...' },
      { key: 'slides', flag: 'slides', isPositional: false, type: 'number', required: false, defaultValue: 8, labelAr: 'الشرائح', labelEn: 'Slides', hintAr: '6, 8, 10', hintEn: '6, 8, 10' },
      { key: 'hookStyle', flag: 'hook-style', isPositional: false, type: 'string', required: false, defaultValue: 'bold-question', labelAr: 'أسلوب الهوك', labelEn: 'Hook Style', hintAr: 'bold-question, counter-intuitive, story', hintEn: 'bold-question, story' },
      { key: 'cta', flag: 'cta', isPositional: false, type: 'string', required: false, defaultValue: 'save-and-share', labelAr: 'الدعوة لاتخاذ إجراء', labelEn: 'Call To Action', hintAr: 'save-and-share, comment, follow', hintEn: 'save-and-share, follow' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' }
    ],
    example: '/article carousel مقال عن التسويق بالمحتوى في 2026 --slides=8 --hook-style=bold-question --cta=save-and-share --language=ar',
    qualityRules: [
      'بناء تدفق تدريجي للقصة يجعل القارئ متشوقاً للتقليب للشريحة التالية',
      'إنهاء الكاروسيل بشريحة تلخيصية تشجع الحفظ والمشاركة'
    ],
    keywords: ['article carousel', 'تلخيص مقال', 'كاروسيل توعوي', 'سوشيال ميديا'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 190,
    isFavorite: true
  },
  {
    id: 'car-car-015',
    code: '/book carousel',
    titleAr: 'تحويل ملخص كتاب إلى كاروسيل تعليمي',
    titleEn: 'Book Summary Educational Carousel',
    descriptionAr: 'يحول كتاباً أو فصولاً رئيسية إلى كاروسيل تعليمي مركز يحتوي على أهم 5 إلى 7 دروس قابلة للتطبيق الفوري.',
    descriptionEn: 'Extracts core principles and actionable frameworks from books into visually striking summary carousels.',
    group: 'carousel',
    carouselCategory: 'pdf_to_carousel',
    outputType: 'plan',
    outputBadges: ['Carousel', 'كتب وتطوير', 'تعليمي'],
    params: [
      { key: 'book', flag: 'book', isPositional: true, type: 'text', required: true, labelAr: 'اسم الكتاب أو المؤلف', labelEn: 'Book Title / Author', hintAr: 'العادات الذرية، الأب الغني...', hintEn: 'Atomic Habits, Deep Work...' },
      { key: 'slides', flag: 'slides', isPositional: false, type: 'number', required: false, defaultValue: 10, labelAr: 'عدد الشرائح', labelEn: 'Slides', hintAr: '8, 10', hintEn: '8, 10' },
      { key: 'focus', flag: 'focus', isPositional: false, type: 'string', required: false, defaultValue: 'actionable-habits', labelAr: 'محور التركيز', labelEn: 'Focus Area', hintAr: 'actionable-habits, mindset, quotes', hintEn: 'actionable-habits, mindset' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'minimal-contrast', labelAr: 'النمط البصري', labelEn: 'Visual Style', hintAr: 'minimal-contrast, editorial, warm', hintEn: 'minimal-contrast, editorial' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' }
    ],
    example: '/book carousel العادات الذرية --slides=10 --focus=actionable-habits --style=minimal-contrast --language=ar',
    qualityRules: [
      'تجنب الحشو النظري وتسطير الخطوات العملية الواضحة لكل فكرة',
      'تضمين غلاف الكتاب بشكل أنيق ومقروء في شريحة المقدمة'
    ],
    keywords: ['book carousel', 'ملخص كتاب', 'كاروسيل تعليمي', 'تطوير ذات'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 140,
    isFavorite: false
  },
  {
    id: 'car-car-016',
    code: '/tweet carousel',
    titleAr: 'تحويل ثريد تويتر (X) إلى شرائح بصرية',
    titleEn: 'Twitter / X Thread to Visual Carousel',
    descriptionAr: 'يحول ثريد تويتر أو سلسلة تغريدات قيّمة إلى شرائح كاروسيل مصممة لإنستغرام ولينكدإن بنفس تسلسل الأفكار.',
    descriptionEn: 'Repurposes viral Twitter/X threads into polished multi-slide graphics for LinkedIn & Instagram.',
    group: 'carousel',
    carouselCategory: 'pdf_to_carousel',
    outputType: 'plan',
    outputBadges: ['Carousel', 'إعادة تدوير محتوى', 'Twitter / X'],
    params: [
      { key: 'thread', flag: 'thread', isPositional: true, type: 'text', required: true, labelAr: 'موضوع الثريد أو نصه', labelEn: 'Thread Topic / Text', hintAr: 'ثريد أسرار التفاوض المالي...', hintEn: 'Thread topic or copy...' },
      { key: 'slides', flag: 'slides', isPositional: false, type: 'number', required: false, defaultValue: 7, labelAr: 'الشرائح', labelEn: 'Slides', hintAr: '5, 7, 9', hintEn: '5, 7, 9' },
      { key: 'visualStyle', flag: 'visual-style', isPositional: false, type: 'string', required: false, defaultValue: 'tech-minimal', labelAr: 'الأسلوب البصري', labelEn: 'Visual Style', hintAr: 'tech-minimal, tweet-card, dark-saas', hintEn: 'tech-minimal, dark-saas' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' }
    ],
    example: '/tweet carousel ثريد ريادة الأعمال وبناء المشاريع --slides=7 --visual-style=tech-minimal --language=ar',
    qualityRules: [
      'الحفاظ على وتيرة التغريدات السريعة دون مط أو إطالة',
      'إتاحة خيار إدراج بطاقة الحساب الشخصي (Avatar + Handle) في زوايا الشرائح'
    ],
    keywords: ['tweet carousel', 'تحويل ثريد', 'إعادة تدوير محتوى', 'تويتر لكاروسيل'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 120,
    isFavorite: false
  },
  {
    id: 'car-car-017',
    code: '/product carousel',
    titleAr: 'كاروسيل إعلاني بيعي لمنتج أو خدمة',
    titleEn: 'High-Converting Product Sales Carousel',
    descriptionAr: 'يحول مواصفات منتج إلى كاروسيل إعلاني متسلسل وفق سيكولوجية البيع: المشكلة، الحل، المميزات، الدليل، والعرض.',
    descriptionEn: 'Converts product specs into high-converting sales carousels following hook-pain-solution-proof-offer.',
    group: 'carousel',
    carouselCategory: 'pdf_to_carousel',
    outputType: 'plan',
    outputBadges: ['Carousel', 'تسويق ومبيعات', 'High Conversion'],
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج أو الخدمة', labelEn: 'Product / Service', hintAr: 'سماعات عازلة للصوت، كورس احترافي...', hintEn: 'Noise-cancelling headphones...' },
      { key: 'slides', flag: 'slides', isPositional: false, type: 'number', required: false, defaultValue: 6, labelAr: 'الشرائح', labelEn: 'Slides', hintAr: '5, 6, 7', hintEn: '5, 6, 7' },
      { key: 'structure', flag: 'structure', isPositional: false, type: 'string', required: false, defaultValue: 'hook-pain-solution-proof-cta', labelAr: 'الهيكل البيعي', labelEn: 'Funnel Structure', hintAr: 'hook-pain-solution-proof-cta', hintEn: 'hook-pain-solution-proof-cta' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' }
    ],
    example: '/product carousel سماعات عازلة للصوت للمبرمجين --slides=6 --structure=hook-pain-solution-proof-cta --language=ar',
    qualityRules: [
      'التركيز على الفوائد الملموسة للعميل بدلاً من مجرد سرد الخصائص التقنية الجافة',
      'تخصيص شريحة كاملة لشهادات العملاء أو التقييمات كدليل اجتماعي (Social Proof)'
    ],
    keywords: ['product carousel', 'كاروسيل بيعي', 'إعلان منتج', 'مبيعات سوشيال'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 165,
    isFavorite: true
  },
  {
    id: 'car-car-018',
    code: '/story carousel',
    titleAr: 'كاروسيل سردي وقصة نجاح (Storytelling)',
    titleEn: 'Storytelling & Founder Journey Carousel',
    descriptionAr: 'يحول تجربة شخصية أو قصة نجاح ملهمة أو دراسة حالة (Case Study) إلى كاروسيل مشوق عاطفياً ومحفز.',
    descriptionEn: 'Translates personal journeys, founder stories, and case studies into emotional, high-engagement carousels.',
    group: 'carousel',
    carouselCategory: 'pdf_to_carousel',
    outputType: 'plan',
    outputBadges: ['Carousel', 'قصص وسرد', 'Storytelling'],
    params: [
      { key: 'story', flag: 'story', isPositional: true, type: 'text', required: true, labelAr: 'موضوع القصة أو التجربة', labelEn: 'Story Topic', hintAr: 'قصة إطلاق متجر وتحقيق أول 100 ألف...', hintEn: 'Store launch journey...' },
      { key: 'slides', flag: 'slides', isPositional: false, type: 'number', required: false, defaultValue: 8, labelAr: 'الشرائح', labelEn: 'Slides', hintAr: '7, 8, 10', hintEn: '7, 8, 10' },
      { key: 'tone', flag: 'tone', isPositional: false, type: 'string', required: false, defaultValue: 'storytelling', labelAr: 'النبرة', labelEn: 'Tone', hintAr: 'storytelling, authentic, dramatic', hintEn: 'storytelling, authentic' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' }
    ],
    example: '/story carousel قصة إطلاق متجر إلكتروني من الصفر --slides=8 --tone=storytelling --language=ar',
    qualityRules: [
      'افتتاح القصة بنقطة التحول أو الصدمة لجذب الانتباه فوراً',
      'إبراز الدروس والعِبر المستفادة بوضوح في الخاتمة'
    ],
    keywords: ['story carousel', 'قصة نجاح', 'سرد قصصي', 'دراسة حالة'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 130,
    isFavorite: false
  }
];
