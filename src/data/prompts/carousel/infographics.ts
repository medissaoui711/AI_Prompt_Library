import { CommandPrompt } from '../../../types/prompt';

export const INFOGRAPHIC_PROMPTS: CommandPrompt[] = [
  {
    id: 'car-inf-019',
    code: '/file infographic',
    titleAr: 'تحويل ملف كامل إلى تخطيط إنفوجرافيك',
    titleEn: 'File to Complete Infographic Architecture',
    descriptionAr: 'يحول ملفاً (PDF/Word/تقرير) إلى مخطط إنفوجرافيك كامل يحدد الرسوم البيانية والأيقونات والتسلسل البصري.',
    descriptionEn: 'Converts documents into structured infographic briefs with wireframes, data callouts, and icon assignments.',
    group: 'carousel',
    carouselCategory: 'report_to_infographic',
    outputType: 'plan',
    outputBadges: ['Infographic', 'مخطط بصري', 'تحويل ملفات'],
    params: [
      { key: 'file', flag: 'file', isPositional: true, type: 'text', required: true, labelAr: 'الملف أو موضوعه', labelEn: 'File / Content', hintAr: 'ارفع الملف أو الصق محتواه...', hintEn: 'Upload file or paste text...' },
      { key: 'type', flag: 'type', isPositional: false, type: 'string', required: false, defaultValue: 'timeline,stats,comparison,steps', labelAr: 'نوع المخطط', labelEn: 'Infographic Type', hintAr: 'timeline, stats, comparison, steps', hintEn: 'timeline, stats, comparison' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' },
      { key: 'output', flag: 'output', isPositional: false, type: 'string', required: false, defaultValue: 'layout-brief', labelAr: 'صيغة المخرج', labelEn: 'Output', hintAr: 'layout-brief, wireframe-specs', hintEn: 'layout-brief' }
    ],
    example: '/file infographic [ارفع الملف] --type=timeline,stats,comparison,steps --language=ar --output=layout-brief',
    qualityRules: [
      'هيكلة المعلومات في مسارات قراءة رأسية واضحة ومريحة للعين',
      'تحديد نوع المخطط البياني الأنسب لكل مجموعة بيانات (دائري، عمودي، تدفقي)'
    ],
    keywords: ['file infographic', 'تحويل ملف لإنفوجرافيك', 'مخطط بياني', 'تصميم بيانات'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 185,
    isFavorite: true
  },
  {
    id: 'car-inf-020',
    code: '/report infographic',
    titleAr: 'إنفوجرافيك إحصائي لتقرير رسمي',
    titleEn: 'Annual & KPI Report Infographic',
    descriptionAr: 'يستخرج أهم 5 إحصائيات ونتائج في تقرير ويصوغها في هيكل إنفوجرافيك رأسي أو أفقي أنيق للصحافة والنشر.',
    descriptionEn: 'Extracts top statistics from corporate reports and frames them in high-authority horizontal or vertical layouts.',
    group: 'carousel',
    carouselCategory: 'report_to_infographic',
    outputType: 'plan',
    outputBadges: ['Infographic', 'إحصائيات', 'تقارير رسمية'],
    params: [
      { key: 'report', flag: 'report', isPositional: true, type: 'text', required: true, labelAr: 'التقرير المستهدف', labelEn: 'Target Report', hintAr: 'التقرير السنوي لمبيعات التجارة...', hintEn: 'Annual e-commerce report...' },
      { key: 'orientation', flag: 'orientation', isPositional: false, type: 'enum', required: false, defaultValue: 'vertical', enumValues: [
        { value: 'vertical', labelAr: 'رأسي (Pinterest/Poster)', labelEn: 'Vertical' },
        { value: 'horizontal', labelAr: 'أفقي (Slide/Web)', labelEn: 'Horizontal' }
      ], labelAr: 'الاتجاه', labelEn: 'Orientation', hintAr: 'vertical, horizontal', hintEn: 'vertical, horizontal' },
      { key: 'highlight', flag: 'highlight', isPositional: false, type: 'string', required: false, defaultValue: 'top-5-stats', labelAr: 'أبرز البيانات', labelEn: 'Highlights', hintAr: 'top-5-stats, financial-growth', hintEn: 'top-5-stats' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' }
    ],
    example: '/report infographic التقرير السنوي للتوظيف الرقمي --orientation=vertical --highlight=top-5-stats --language=ar',
    qualityRules: [
      'إبراز الأرقام الضخمة (KPI Callouts) مع توضيح سياق المقارنة الزمنية (+24% مقارنة بالعام السابق)',
      'وضع الهوامش ومصادر البيانات الرسمية في أسفل الإنفوجرافيك لتعزيز المصداقية'
    ],
    keywords: ['report infographic', 'إنفوجرافيك تقرير', 'إحصائيات سنوية', 'أرقام وبيانات'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 150,
    isFavorite: false
  },
  {
    id: 'car-inf-021',
    code: '/timeline infographic',
    titleAr: 'إنفوجرافيك خط زمني وخارطة طريق (Timeline)',
    titleEn: 'Visual Timeline & Roadmap Infographic',
    descriptionAr: 'يحول سردًا زمنيًا أو مراحل مشروع أو تاريخ شركة إلى مخطط خط زمني انسيابي مع مؤشرات بصرية.',
    descriptionEn: 'Maps milestones, project phases, and historical evolutions into sleek linear or serpentine roadmaps.',
    group: 'carousel',
    carouselCategory: 'report_to_infographic',
    outputType: 'plan',
    outputBadges: ['Infographic', 'خط زمني', 'Roadmap'],
    params: [
      { key: 'timeline', flag: 'timeline', isPositional: true, type: 'text', required: true, labelAr: 'الموضوع أو السرد الزمني', labelEn: 'Timeline Subject', hintAr: 'مراحل بناء الشركة من التأسيس للاكتتاب...', hintEn: 'Company milestones from startup to IPO...' },
      { key: 'stages', flag: 'stages', isPositional: false, type: 'number', required: false, defaultValue: 5, labelAr: 'عدد المحطات', labelEn: 'Stages Count', hintAr: '4, 5, 6', hintEn: '4, 5, 6' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'roadmap', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'roadmap, serpentine, minimalist-line', hintEn: 'roadmap, serpentine' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' }
    ],
    example: '/timeline infographic مراحل بناء وتطور الشركة وتوسعها الإقليمي --stages=5 --style=roadmap --language=ar',
    qualityRules: [
      'تخصيص أيقونة وسنة أو تاريخ مميز وعنوان موجز لكل محطة',
      'الحفاظ على المسار الزمني المتصل دون تشويش أو تقاطعات معقدة'
    ],
    keywords: ['timeline infographic', 'خط زمني', 'خارطة طريق', 'مراحل المشروع'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 140,
    isFavorite: false
  },
  {
    id: 'car-inf-022',
    code: '/process infographic',
    titleAr: 'إنفوجرافيك الخطوات الإجرائية (Process Flow)',
    titleEn: 'Step-by-Step Process Flow Infographic',
    descriptionAr: 'يحول خطوات عمل أو منهجية أو إجراءات إدارية إلى مخطط بصري متسلسل يسهل اتباعه وفهمه في دقائق.',
    descriptionEn: 'Translates complex operational workflows into numbered, intuitive visual process charts.',
    group: 'carousel',
    carouselCategory: 'report_to_infographic',
    outputType: 'plan',
    outputBadges: ['Infographic', 'إجراءات ومسارات', 'Workflow'],
    params: [
      { key: 'process', flag: 'process', isPositional: true, type: 'text', required: true, labelAr: 'العملية أو المنهجية', labelEn: 'Process Topic', hintAr: 'خطوات إعداد خطة تسويقية، إجراءات التوظيف...', hintEn: 'Marketing plan steps...' },
      { key: 'steps', flag: 'steps', isPositional: false, type: 'number', required: false, defaultValue: 6, labelAr: 'عدد الخطوات', labelEn: 'Steps Count', hintAr: '4, 5, 6', hintEn: '4, 5, 6' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'numbered-flow', labelAr: 'الشكل التدفقي', labelEn: 'Flow Format', hintAr: 'numbered-flow, chevron-process, circular', hintEn: 'numbered-flow, chevron' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' }
    ],
    example: '/process infographic خطوات إعداد خطة تسويقية متكاملة --steps=6 --format=numbered-flow --language=ar',
    qualityRules: [
      'بدء كل خطوة بفعل أمر واضح وموجز (حلل، ابنِ، اختبر، انشر)',
      'وضع أسهم توجيه بصرية توضح الانتقال السلس من خطوة لأخرى'
    ],
    keywords: ['process infographic', 'مخطط خطوات', 'مسار عمل', 'دورة حياة'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 160,
    isFavorite: true
  },
  {
    id: 'car-inf-023',
    code: '/comparison infographic',
    titleAr: 'إنفوجرافيك مقارنة بصرية (Comparison)',
    titleEn: 'Side-by-Side Visual Comparison Infographic',
    descriptionAr: 'ينشئ جدول مقارنة بصري جذاب بين منتجين أو حلين أو منهجين يوضح المزايا والعيوب والتكلفة والأنسب للمستخدم.',
    descriptionEn: 'Builds side-by-side visual comparison matrix contrasting features, costs, pros, and cons.',
    group: 'carousel',
    carouselCategory: 'report_to_infographic',
    outputType: 'plan',
    outputBadges: ['Infographic', 'مقارنة بصرية', 'Versus'],
    params: [
      { key: 'comparison', flag: 'comparison', isPositional: true, type: 'text', required: true, labelAr: 'طرفا المقارنة', labelEn: 'Compared Entities', hintAr: 'العمل عن بعد مقابل العمل المكتبي...', hintEn: 'Remote work vs Office work...' },
      { key: 'items', flag: 'items', isPositional: false, type: 'number', required: false, defaultValue: 2, labelAr: 'عدد الأطراف', labelEn: 'Items Count', hintAr: '2, 3', hintEn: '2, 3' },
      { key: 'criteria', flag: 'criteria', isPositional: false, type: 'string', required: false, defaultValue: 'cost,productivity,wellbeing', labelAr: 'معايير المقارنة', labelEn: 'Comparison Criteria', hintAr: 'cost,productivity,wellbeing', hintEn: 'cost,speed,value' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' }
    ],
    example: '/comparison infographic العمل عن بعد مقابل العمل المكتبي --items=2 --criteria=cost,productivity,wellbeing --language=ar',
    qualityRules: [
      'استخدام الألوان المتباينة لتمييز الطرفين مع علامات صح وخطأ واضحة',
      'تضمين حكم نهائي وخلاصة (Winner / Verdict) لمساعدة القارئ على اتخاذ قراره'
    ],
    keywords: ['comparison infographic', 'مقارنة بصرية', 'مقارنة منتجات', 'مصفوفة مزايا'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 135,
    isFavorite: false
  },
  {
    id: 'car-inf-024',
    code: '/framework infographic',
    titleAr: 'إنفوجرافيك أطر العمل والنظريات (Framework)',
    titleEn: 'Conceptual Framework & Pyramid Infographic',
    descriptionAr: 'يحول نموذج عمل أو نظرية استراتيجية معقدة إلى شكل هندسي بصري (هرم، مصفوفة 2x2، دوائر متقاطعة Venn).',
    descriptionEn: 'Translates intellectual models into clean geometric diagrams (pyramids, 2x2 matrix, concentric circles).',
    group: 'carousel',
    carouselCategory: 'report_to_infographic',
    outputType: 'plan',
    outputBadges: ['Infographic', 'إطار عمل', 'نماذج هندسية'],
    params: [
      { key: 'framework', flag: 'framework', isPositional: true, type: 'text', required: true, labelAr: 'اسم أو موضوع النموذج', labelEn: 'Framework Topic', hintAr: 'نموذج خدمة العملاء الفائقة، مستويات القيادة...', hintEn: 'Customer service framework...' },
      { key: 'shape', flag: 'shape', isPositional: false, type: 'enum', required: false, defaultValue: 'pyramid', enumValues: [
        { value: 'pyramid', labelAr: 'هرمي (Pyramid)', labelEn: 'Pyramid' },
        { value: 'matrix2x2', labelAr: 'مصفوفة 2x2', labelEn: '2x2 Matrix' },
        { value: 'venn', labelAr: 'دوائر فين (Venn)', labelEn: 'Venn Diagram' },
        { value: 'flywheel', labelAr: 'حلقة ديناميكية (Flywheel)', labelEn: 'Flywheel' }
      ], labelAr: 'الشكل الهندسي', labelEn: 'Diagram Shape', hintAr: 'pyramid, matrix2x2, venn, flywheel', hintEn: 'pyramid, matrix2x2' },
      { key: 'levels', flag: 'levels', isPositional: false, type: 'number', required: false, defaultValue: 4, labelAr: 'المستويات', labelEn: 'Levels', hintAr: '3, 4, 5', hintEn: '3, 4, 5' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' }
    ],
    example: '/framework infographic نموذج خدمة العملاء الفائقة والولاء المؤسسي --shape=pyramid --levels=4 --language=ar',
    qualityRules: [
      'توضيح العلاقة بين المستويات (تصاعدية هرمية أو دائرية تبادلية)',
      'وضع تعريف شديد الإيجاز لكل قطاع داخل الرسم'
    ],
    keywords: ['framework infographic', 'إطار عمل', 'هرم مفاهيمي', 'مصفوفة 2x2'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 125,
    isFavorite: false
  },
  {
    id: 'car-inf-025',
    code: '/cheat sheet infographic',
    titleAr: 'ورقة ملخص واختصارات سريعة (Cheat Sheet)',
    titleEn: 'Visual Cheat Sheet & Reference Card',
    descriptionAr: 'ينشئ ورقة ملخص مكثف (Cheat Sheet) مصفوفة بدقة للأدوات أو الأوامر أو القوانين للطباعة أو الحفظ على الجوال.',
    descriptionEn: 'Designs dense, high-utility cheat sheets packing formulas, keyboard shortcuts, or prompt cheat cards.',
    group: 'carousel',
    carouselCategory: 'report_to_infographic',
    outputType: 'plan',
    outputBadges: ['Infographic', 'Cheat Sheet', 'ملخص سريع'],
    params: [
      { key: 'topic', flag: 'topic', isPositional: true, type: 'text', required: true, labelAr: 'الموضوع أو التخصص', labelEn: 'Topic', hintAr: 'اختصارات أدوات الذكاء الاصطناعي، قواعد النحو...', hintEn: 'AI prompt shortcuts, Excel tips...' },
      { key: 'columns', flag: 'columns', isPositional: false, type: 'number', required: false, defaultValue: 3, labelAr: 'عدد الأعمدة', labelEn: 'Columns', hintAr: '2, 3, 4', hintEn: '2, 3, 4' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'quick-reference', labelAr: 'النمط', labelEn: 'Format', hintAr: 'quick-reference, cards-grid', hintEn: 'quick-reference' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' }
    ],
    example: '/cheat sheet infographic اختصارات أوامر الذكاء الاصطناعي وصناع المحتوى --columns=3 --format=quick-reference --language=ar',
    qualityRules: [
      'تنظيم المحتوى في صناديق مستقلة بصرية (Cards) ذات تلوين مرمز',
      'مراعاة قابلية القراءة المباشرة عند التكبير على شاشات الهواتف الذكية'
    ],
    keywords: ['cheat sheet', 'ورقة ملخص', 'اختصارات سريعة', 'بطاقة مرجعية'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 170,
    isFavorite: true
  }
];
