import { CommandPrompt } from '../../../types/prompt';

export const REVIEW_AND_RTL_PROMPTS: CommandPrompt[] = [
  {
    id: 'car-rev-033',
    code: '/carousel review',
    titleAr: 'مراجعة وتدقيق جودة وتدفق الكاروسيل',
    titleEn: 'Comprehensive Carousel Audit & Quality Review',
    descriptionAr: 'يفحص الكاروسيل من حيث: قوة الهوك، سلاسة الانتقال، وضوح الفكرة، التوازن البصري، وقوة الدعوة للإجراء (CTA).',
    descriptionEn: 'Audits carousel copy and visual flow for hook strength, cognitive pacing, readability, and conversion CTA.',
    group: 'carousel',
    carouselCategory: 'review_consistency',
    outputType: 'analysis',
    outputBadges: ['مراجعة', 'تدقيق جودة', 'Audit'],
    params: [
      { key: 'carouselContent', flag: 'carouselContent', isPositional: true, type: 'text', required: true, labelAr: 'محتوى ونصوص الكاروسيل', labelEn: 'Carousel Content', hintAr: 'الصق نصوص الشرائح والأوصاف...', hintEn: 'Paste slides content...' },
      { key: 'criteria', flag: 'criteria', isPositional: false, type: 'string', required: false, defaultValue: 'hook,pacing,readability,cta', labelAr: 'معايير الفحص', labelEn: 'Audit Criteria', hintAr: 'hook,pacing,readability,cta', hintEn: 'hook,pacing,readability,cta' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' },
      { key: 'output', flag: 'output', isPositional: false, type: 'string', required: false, defaultValue: 'audit-report', labelAr: 'نوع المخرج', labelEn: 'Output', hintAr: 'audit-report, actionable-fixes', hintEn: 'audit-report' }
    ],
    example: '/carousel review [الصق محتوى الكاروسيل] --criteria=hook,pacing,readability,cta --language=ar --output=audit-report',
    qualityRules: [
      'تقديم تقييم رقمي من 10 لكل معيار مع ذكر نقاط الضعف بدقة',
      'صياغة بدائل فورية جاهزة للنسخ للشريحة الأضعف في السلسلة'
    ],
    keywords: ['carousel review', 'مراجعة كاروسيل', 'تدقيق شرائح', 'فحص محتوى'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 180,
    isFavorite: true
  },
  {
    id: 'car-rev-034',
    code: '/visual consistency check',
    titleAr: 'تدقيق التناسق البصري والهوية للشرائح',
    titleEn: 'Visual Consistency & Grid Alignment Check',
    descriptionAr: 'يدقق التناسق البصري للشرائح: ثبات الخطوط، تناغم الألوان، حجم الهوامش، وتباين النصوص مع الخلفيات.',
    descriptionEn: 'Inspects visual harmony across all slides, ensuring unified fonts, padding, color contrast, and brand cues.',
    group: 'carousel',
    carouselCategory: 'review_consistency',
    outputType: 'analysis',
    outputBadges: ['مراجعة', 'اتساق بصري', 'Checklist'],
    params: [
      { key: 'slides', flag: 'slides', isPositional: true, type: 'text', required: true, labelAr: 'وصف أو صور الشرائح', labelEn: 'Slides Description / URLs', hintAr: 'ارفع أو صف شرائح الكاروسيل...', hintEn: 'Describe or paste slides...' },
      { key: 'elements', flag: 'elements', isPositional: false, type: 'string', required: false, defaultValue: 'colors,fonts,margins,contrast', labelAr: 'العناصر المدققة', labelEn: 'Elements', hintAr: 'colors,fonts,margins,contrast', hintEn: 'colors,fonts,margins' },
      { key: 'output', flag: 'output', isPositional: false, type: 'string', required: false, defaultValue: 'checklist', labelAr: 'المخرج', labelEn: 'Output', hintAr: 'checklist, score-card', hintEn: 'checklist' }
    ],
    example: '/visual consistency check [شرائح الكاروسيل] --elements=colors,fonts,margins,contrast --output=checklist',
    qualityRules: [
      'التأكد من عدم استخدام أكثر من عائلتي خطوط عبر كامل العمل',
      'فحص المسافات البادئة (Margins) لمنع اقتراب النصوص من حواف الشاشة الخطرة'
    ],
    keywords: ['visual consistency check', 'تناسق بصري', 'فحص الألوان', 'هوامش التصميم'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 135,
    isFavorite: false
  },
  {
    id: 'car-rev-035',
    code: '/slide count audit',
    titleAr: 'تدقيق عدد الشرائح ومكافحة التكدس أو الملل',
    titleEn: 'Slide Count & Pacing Retention Audit',
    descriptionAr: 'يقيم عدد الشرائح وهل هو مثالي للموضوع أم يحتاج دمجاً أو فصلاً لتفادي الملل أو ازدحام الشريحة الواحدة.',
    descriptionEn: 'Analyzes information density per slide and recommends merging or splitting to maintain optimal swipe rates.',
    group: 'carousel',
    carouselCategory: 'review_consistency',
    outputType: 'analysis',
    outputBadges: ['مراجعة', 'عدد الشرائح', 'Retention'],
    params: [
      { key: 'content', flag: 'content', isPositional: true, type: 'text', required: true, labelAr: 'الموضوع والمحتوى المخطط', labelEn: 'Topic & Draft', hintAr: 'المحتوى المقترح وعدد الشرائح...', hintEn: 'Draft content and slides count...' },
      { key: 'platform', flag: 'platform', isPositional: false, type: 'string', required: false, defaultValue: 'instagram', labelAr: 'المنصة', labelEn: 'Platform', hintAr: 'instagram, linkedin, x', hintEn: 'instagram, linkedin' },
      { key: 'recommendedRange', flag: 'recommended-range', isPositional: false, type: 'string', required: false, defaultValue: '7-10', labelAr: 'المعدل المقترح', labelEn: 'Recommended Range', hintAr: '6-8, 7-10', hintEn: '6-8, 7-10' }
    ],
    example: '/slide count audit [الموضوع والمحتوى] --platform=instagram --recommended-range=7-10',
    qualityRules: [
      'التوصية بـ 7 إلى 10 شرائح كحد مثالي لخوارزميات إنستغرام ولينكدإن',
      'رصد أي شريحة تحتوي على أكثر من فكرة رئيسية والتوجيه بفصلها'
    ],
    keywords: ['slide count audit', 'عدد الشرائح', 'توزيع المحتوى', 'تجنب الازدحام'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 105,
    isFavorite: false
  },
  {
    id: 'car-rev-036',
    code: '/readability audit',
    titleAr: 'فحص سهولة القراءة السريعة على شاشات الجوال',
    titleEn: 'Mobile 3-Second Readability & Contrast Audit',
    descriptionAr: 'يختبر سهولة قراءة نصوص الكاروسيل على شاشات الجوال الصغيرة وسرعة استيعاب الشريحة في أول 3 ثوانٍ.',
    descriptionEn: 'Audits glanceability and cognitive load to ensure mobile readers grasp slide value within 3 seconds.',
    group: 'carousel',
    carouselCategory: 'review_consistency',
    outputType: 'analysis',
    outputBadges: ['مراجعة', 'سهولة القراءة', 'شاشات الجوال'],
    params: [
      { key: 'texts', flag: 'texts', isPositional: true, type: 'text', required: true, labelAr: 'نصوص الشرائح', labelEn: 'Slide Copy', hintAr: 'الصق نصوص الشرائح للفحص...', hintEn: 'Paste slide texts...' },
      { key: 'device', flag: 'device', isPositional: false, type: 'string', required: false, defaultValue: 'mobile', labelAr: 'الجهاز المستهدف', labelEn: 'Device', hintAr: 'mobile, tablet', hintEn: 'mobile, tablet' },
      { key: 'wordCountPerSlide', flag: 'word-count-per-slide', isPositional: false, type: 'string', required: false, defaultValue: 'max-25', labelAr: 'الحد الأقصى للكلمات', labelEn: 'Max Words', hintAr: 'max-20, max-25, max-30', hintEn: 'max-20, max-25' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' }
    ],
    example: '/readability audit [نصوص الشرائح] --device=mobile --word-count-per-slide=max-25 --language=ar',
    qualityRules: [
      'التنبيه على الكلمات الطويلة أو الجمل المركبة التي تبطئ التصفح',
      'التوصية بتمييز الكلمات المفتاحية باللون أو الخط الغامق (Bold)'
    ],
    keywords: ['readability audit', 'سهولة القراءة', 'اختبار الجوال', 'قراءة سريعة'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 120,
    isFavorite: false
  },
  {
    id: 'car-rev-037',
    code: '/hook audit',
    titleAr: 'تحليل وتوليد 5 بدائل لهوك الغلاف الافتتاحي',
    titleEn: 'Cover Slide Hook Multiplier & Viral A/B Tests',
    descriptionAr: 'يحلل شريحة الغلاف الأولى ويقترح 5 بدائل أكثر جاذبية بنكهات سيكولوجية متعددة لرفع معدل التقليب (Swipe Rate).',
    descriptionEn: 'Analyzes carousel cover hooks and outputs 5 psychological angle variations (curiosity, contrarian, data, urgency).',
    group: 'carousel',
    carouselCategory: 'review_consistency',
    outputType: 'plan',
    outputBadges: ['مراجعة', 'هوك فيروسي', 'Swipe Rate'],
    params: [
      { key: 'headline', flag: 'headline', isPositional: true, type: 'text', required: true, labelAr: 'عنوان الغلاف الحالي', labelEn: 'Current Cover Headline', hintAr: 'عنوان الكاروسيل الأول...', hintEn: 'First slide headline...' },
      { key: 'variations', flag: 'variations', isPositional: false, type: 'number', required: false, defaultValue: 5, labelAr: 'عدد البدائل', labelEn: 'Variations Count', hintAr: '3, 5, 7', hintEn: '3, 5, 7' },
      { key: 'angles', flag: 'angles', isPositional: false, type: 'string', required: false, defaultValue: 'curiosity,contrarian,urgency,benefit,data', labelAr: 'الزوايا السيكولوجية', labelEn: 'Angles', hintAr: 'curiosity,contrarian,urgency,benefit,data', hintEn: 'curiosity,contrarian,benefit' }
    ],
    example: '/hook audit كيف تنمي تجارتك الإلكترونية بدون إعلانات مدفوعة --variations=5 --angles=curiosity,contrarian,urgency,benefit,data',
    qualityRules: [
      'تجنب العناوين المضللة (Clickbait) الكاذبة وصياغة وعود حقيقية ومثيرة',
      'تضمين صيغة بصرية مقترحة لتخطيط الكلمات فوق الغلاف'
    ],
    keywords: ['hook audit', 'هوك الكاروسيل', 'عناوين جذابة', 'غلاف إنستغرام'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 200,
    isFavorite: true
  },
  {
    id: 'car-rev-038',
    code: '/engagement score',
    titleAr: 'قياس وتوقع معدل التفاعل والحفظ (Engagement Score)',
    titleEn: 'Social Engagement & Saveability Predictor',
    descriptionAr: 'يقيس احتمالية حفظ المنشور (Saves) ومشاركته ويقدم 3 تعديلات دقيقة تضمن تحويل القارئ إلى معلق ومشارك.',
    descriptionEn: 'Forecasts saveability, shareability, and comment rates, offering 3 pinpoint tweaks to maximize reach.',
    group: 'carousel',
    carouselCategory: 'review_consistency',
    outputType: 'analysis',
    outputBadges: ['مراجعة', 'توقع التفاعل', 'Saves & Shares'],
    params: [
      { key: 'draft', flag: 'draft', isPositional: true, type: 'text', required: true, labelAr: 'مسودة الكاروسيل', labelEn: 'Carousel Draft', hintAr: 'الصق ملخص أو نصوص الكاروسيل...', hintEn: 'Paste draft content...' },
      { key: 'platform', flag: 'platform', isPositional: false, type: 'string', required: false, defaultValue: 'linkedin,instagram', labelAr: 'المنصات', labelEn: 'Platforms', hintAr: 'linkedin, instagram', hintEn: 'linkedin, instagram' },
      { key: 'metrics', flag: 'metrics', isPositional: false, type: 'string', required: false, defaultValue: 'saves,shares,comments', labelAr: 'المقاييس المستهدفة', labelEn: 'Target Metrics', hintAr: 'saves,shares,comments', hintEn: 'saves,shares,comments' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' }
    ],
    example: '/engagement score [مسودة الكاروسيل] --platform=linkedin,instagram --metrics=saves,shares,comments --language=ar',
    qualityRules: [
      'التأكد من وجود قيمة مرجعية تجعل المستخدم يضغط "حفظ" للرجوع إليها لاحقاً',
      'صياغة سؤال نقاشي ذكي في شريحة الخاتمة يفتح باب التعليقات'
    ],
    keywords: ['engagement score', 'حفظ ومشاركة', 'تفاعل السوشيال', 'خوارزميات النشر'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 140,
    isFavorite: false
  },
  {
    id: 'car-rtl-039',
    code: '/rtl carousel',
    titleAr: 'ضبط اتجاه العربية وانسيابية القراءة (RTL Flow)',
    titleEn: 'Arabic RTL Layout & Navigation Flow Adapter',
    descriptionAr: 'يضبط اتجاه التصميم ومسار القراءة من اليمين إلى اليسار وتوجيه الأسهم وترقيم الشرائح ليتوافق مع العين العربية.',
    descriptionEn: 'Aligns carousel mechanics for Right-to-Left Arabic readers, optimizing swipe cues, digits, and margin flow.',
    group: 'carousel',
    carouselCategory: 'arabic_rtl',
    outputType: 'plan',
    outputBadges: ['RTL', 'انسيابية عربية', 'توجيه الأسهم'],
    params: [
      { key: 'plan', flag: 'plan', isPositional: true, type: 'text', required: true, labelAr: 'مخطط أو محتوى الكاروسيل', labelEn: 'Carousel Plan', hintAr: 'الصق محتوى أو أفكار الكاروسيل...', hintEn: 'Paste carousel plan...' },
      { key: 'flow', flag: 'flow', isPositional: false, type: 'string', required: false, defaultValue: 'right-to-left', labelAr: 'اتجاه المسار', labelEn: 'Reading Flow', hintAr: 'right-to-left', hintEn: 'right-to-left' },
      { key: 'numbers', flag: 'numbers', isPositional: false, type: 'string', required: false, defaultValue: 'arabic-indic', labelAr: 'الأرقام', labelEn: 'Number Format', hintAr: 'arabic-indic (١، ٢), eastern (1, 2)', hintEn: 'arabic-indic, eastern' },
      { key: 'arrows', flag: 'arrows', isPositional: false, type: 'string', required: false, defaultValue: 'rtl-aligned', labelAr: 'اتجاه مؤشرات التقليب', labelEn: 'Swipe Arrows', hintAr: 'rtl-aligned, left-pointing', hintEn: 'rtl-aligned' }
    ],
    example: '/rtl carousel [مخطط الكاروسيل] --flow=right-to-left --numbers=arabic-indic --arrows=rtl-aligned',
    qualityRules: [
      'توجيه أسهم التقليب باتجاه اليسار (نحو الشريحة القادمة في القراءة العربية)',
      'توفير محاذاة يمنية صريحة للنصوص مع ترك هوامش تنفسية على اليمين واليسار'
    ],
    keywords: ['rtl carousel', 'اتجاه العربية', 'يمين إلى يسار', 'تصميم عربي'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 175,
    isFavorite: true
  },
  {
    id: 'car-rtl-040',
    code: '/arabic typography design',
    titleAr: 'توليفات خطوط عربية متناسقة للعناوين والنصوص',
    titleEn: 'Arabic Typography Pairing & Font Harmony',
    descriptionAr: 'يقترح توليفات خطوط عربية متناسقة للعنوان والنص وتفاصيل الأرقام (مثل: تجوال، مراعي، كايرو، خط كوفي، خط نسخي حديث).',
    descriptionEn: 'Recommends harmonious Arabic font pairings matching modern brand aesthetics (Cairo, Almarai, Tajawal, IBM Plex Arabic).',
    group: 'carousel',
    carouselCategory: 'arabic_rtl',
    outputType: 'plan',
    outputBadges: ['RTL', 'خطوط عربية', 'توليفات خطية'],
    params: [
      { key: 'mood', flag: 'mood', isPositional: false, type: 'string', required: false, defaultValue: 'modern-fintech', labelAr: 'الطابع العام', labelEn: 'Brand Mood', hintAr: 'modern-fintech, luxury-classic, creative-bold', hintEn: 'modern-fintech, luxury' },
      { key: 'pairing', flag: 'pairing', isPositional: false, type: 'string', required: false, defaultValue: 'headline-and-body', labelAr: 'نوع التوليفة', labelEn: 'Pairing Type', hintAr: 'headline-and-body, single-family-weights', hintEn: 'headline-and-body' },
      { key: 'fontFamily', flag: 'font-family', isPositional: false, type: 'string', required: false, defaultValue: 'cairo,almarai', labelAr: 'الخطوط المقترحة', labelEn: 'Suggested Fonts', hintAr: 'cairo,almarai,tajawal,ibm-plex-arabic', hintEn: 'cairo,almarai,tajawal' }
    ],
    example: '/arabic typography design --mood=modern-fintech --pairing=headline-and-body --font-family=cairo,almarai',
    qualityRules: [
      'اختيار خطوط تدعم كامل الحركات والتنوين وعلامات الترقيم العربية',
      'تحديد الأوزان الدقيقة (Black 900 للعنوان، Regular 400 للنص، Medium 500 للأرقام)'
    ],
    keywords: ['arabic typography design', 'خطوط عربية', 'كايرو ومراعي', 'تنسيق خط عربي'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 165,
    isFavorite: true
  },
  {
    id: 'car-rtl-041',
    code: '/arabic slide layout',
    titleAr: 'تخطيط هيكل الشريحة العربية والهوامش التنفسية',
    titleEn: 'Arabic Slide Layout Architecture & Whitespace',
    descriptionAr: 'يصمم هيكل الشريحة ليلائم انسيابية العين العربية مع ضبط الهوامش اليمنى والمسافات البصرية بين الأسطر (Line-height).',
    descriptionEn: 'Designs slide layouts tailored for Arabic eye tracking with generous right padding and calibrated line heights.',
    group: 'carousel',
    carouselCategory: 'arabic_rtl',
    outputType: 'plan',
    outputBadges: ['RTL', 'هيكل الشريحة', 'مسافات بيضاء'],
    params: [
      { key: 'type', flag: 'type', isPositional: false, type: 'string', required: false, defaultValue: 'quote-and-stats', labelAr: 'نوع محتوى الشريحة', labelEn: 'Slide Type', hintAr: 'quote-and-stats, 3-points, full-image-card', hintEn: 'quote-and-stats, 3-points' },
      { key: 'alignment', flag: 'alignment', isPositional: false, type: 'string', required: false, defaultValue: 'right', labelAr: 'المحاذاة', labelEn: 'Alignment', hintAr: 'right, center', hintEn: 'right, center' },
      { key: 'whitespace', flag: 'whitespace', isPositional: false, type: 'string', required: false, defaultValue: 'generous', labelAr: 'المساحة البيضاء', labelEn: 'Whitespace', hintAr: 'generous, compact', hintEn: 'generous, compact' }
    ],
    example: '/arabic slide layout --type=quote-and-stats --alignment=right --whitespace=generous',
    qualityRules: [
      'توفير ارتفاع سطر (line-height) لا يقل عن 1.6 في الخطوط العربية لتفادي تداخل الحروف',
      'فصل الأرقام والكلمات الإنجليزية بطريقة سليمة تمنع ارتباك الاتجاه (Bidirectional Isolation)'
    ],
    keywords: ['arabic slide layout', 'تخطيط عربي', 'انسيابية الشريحة', 'هوامش عربية'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 110,
    isFavorite: false
  },
  {
    id: 'car-rtl-042',
    code: '/bilingual carousel',
    titleAr: 'كاروسيل ثنائي اللغة (عربي / إنجليزي)',
    titleEn: 'Balanced Bilingual (Arabic / English) Carousel',
    descriptionAr: 'ينشئ كاروسيل ثنائي اللغة متوازن بصرياً يراعي ازدواجية الاتجاه دون ازدحام أو إرباك للعين في القراءة.',
    descriptionEn: 'Builds balanced dual-language carousels cleanly segregating Arabic and English copy without layout clashes.',
    group: 'carousel',
    carouselCategory: 'arabic_rtl',
    outputType: 'plan',
    outputBadges: ['RTL', 'ثنائي اللغة', 'عربي وإنجليزي'],
    params: [
      { key: 'topic', flag: 'topic', isPositional: true, type: 'text', required: true, labelAr: 'الموضوع أو الملخص', labelEn: 'Topic / Summary', hintAr: 'ملخص المؤتمر، إطلاق خدمة دولية...', hintEn: 'Conference summary, global launch...' },
      { key: 'primary', flag: 'primary', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة الأساسية', labelEn: 'Primary Language', hintAr: 'ar, en', hintEn: 'ar, en' },
      { key: 'secondary', flag: 'secondary', isPositional: false, type: 'string', required: false, defaultValue: 'en', labelAr: 'اللغة الثانوية', labelEn: 'Secondary Language', hintAr: 'en, fr', hintEn: 'en, fr' },
      { key: 'layout', flag: 'layout', isPositional: false, type: 'string', required: false, defaultValue: 'split-card', labelAr: 'توزيع اللغتين', labelEn: 'Split Layout', hintAr: 'split-card, top-bottom, alternating-slides', hintEn: 'split-card, top-bottom' }
    ],
    example: '/bilingual carousel ملخص مؤتمر الابتكار والذكاء الاصطناعي الدولي --primary=ar --secondary=en --layout=split-card',
    qualityRules: [
      'استخدام خط عربي وخط لاتيني يتطابقان في الارتفاع والوزن البصري (x-height)',
      'وضع فاصل أو بطاقة فرعية واضحة تمنع تداخل الجملتين'
    ],
    keywords: ['bilingual carousel', 'كاروسيل ثنائي اللغة', 'عربي وإنجليزي', 'ترجمة وتصميم'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 155,
    isFavorite: false
  },
  {
    id: 'car-rtl-043',
    code: '/carousel caption',
    titleAr: 'توليد كابشن مرافق للكاروسيل على إنستغرام ولينكدإن',
    titleEn: 'Carousel Caption & Social Companion Post',
    descriptionAr: 'يولد كابشن متقن يرافق الكاروسيل على إنستغرام أو لينكدإن يشمل هوك مشوق، خلاصة سريعة، وسوم مستهدفة، ودعوة للنقاش.',
    descriptionEn: 'Generates companion captions with strong text hooks, executive takeaways, hashtag sets, and discussion prompts.',
    group: 'carousel',
    carouselCategory: 'arabic_rtl',
    outputType: 'text',
    outputBadges: ['Carousel', 'كابشن وسوم', 'لينكدإن وإنستغرام'],
    params: [
      { key: 'carouselTopic', flag: 'carouselTopic', isPositional: true, type: 'text', required: true, labelAr: 'موضوع الكاروسيل', labelEn: 'Carousel Topic', hintAr: 'موضوع أو شرائح الكاروسيل...', hintEn: 'Carousel topic or summary...' },
      { key: 'platform', flag: 'platform', isPositional: false, type: 'string', required: false, defaultValue: 'linkedin,instagram', labelAr: 'المنصة', labelEn: 'Platform', hintAr: 'linkedin,instagram,x', hintEn: 'linkedin,instagram' },
      { key: 'includeCta', flag: 'include-cta', isPositional: false, type: 'string', required: false, defaultValue: 'yes', labelAr: 'تضمين دعوة للتفاعل', labelEn: 'Include CTA', hintAr: 'yes, no', hintEn: 'yes, no' },
      { key: 'hashtags', flag: 'hashtags', isPositional: false, type: 'number', required: false, defaultValue: 5, labelAr: 'عدد الهاشتاقات', labelEn: 'Hashtags Count', hintAr: '3, 5, 8', hintEn: '3, 5, 8' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' }
    ],
    example: '/carousel caption أهم 7 استراتيجيات للتسويق الرقمي بالذكاء الاصطناعي --platform=linkedin,instagram --include-cta=yes --hashtags=5 --language=ar',
    qualityRules: [
      'افتتاح الكابشن بسطر أول صادم يغري المستخدم بالضغط على "عرض المزيد"',
      'توجيه القارئ إلى تصفح الشرائح وعدم حرق المحتوى كاملاً في النص'
    ],
    keywords: ['carousel caption', 'كابشن كاروسيل', 'نص المنشور', 'هاشتاقات'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 190,
    isFavorite: true
  },
  {
    id: 'car-rtl-044',
    code: '/social crop format',
    titleAr: 'تحديد أبعاد وقوالب الاقتصاص الدقيقة للمنصات',
    titleEn: 'Social Crop Dimensions & Platform Export Spec',
    descriptionAr: 'يحدد أبعاد وقوالب الاقتصاص الدقيقة للكاروسيل بحسب المنصة (Instagram 4:5 1080x1350، LinkedIn PDF Document 1:1 أو 4:5، X 16:9).',
    descriptionEn: 'Provides export resolution specs, safe margins, and compression guidelines for Instagram, LinkedIn, and X.',
    group: 'carousel',
    carouselCategory: 'arabic_rtl',
    outputType: 'report',
    outputBadges: ['Carousel', 'أبعاد المنصات', 'دليل التصدير'],
    params: [
      { key: 'platform', flag: 'platform', isPositional: false, type: 'enum', required: false, defaultValue: 'instagram-carousel', enumValues: [
        { value: 'instagram-carousel', labelAr: 'إنستغرام (1080x1350 4:5)', labelEn: 'Instagram (4:5)' },
        { value: 'linkedin-pdf', labelAr: 'لينكدإن PDF Document', labelEn: 'LinkedIn PDF' },
        { value: 'x-twitter', labelAr: 'منصة X (1200x675 16:9)', labelEn: 'X / Twitter' }
      ], labelAr: 'المنصة المستهدفة', labelEn: 'Target Platform', hintAr: 'instagram-carousel, linkedin-pdf, x-twitter', hintEn: 'instagram, linkedin' },
      { key: 'aspectRatio', flag: 'aspect-ratio', isPositional: false, type: 'string', required: false, defaultValue: '4:5', labelAr: 'نسبة العرض للارتفاع', labelEn: 'Aspect Ratio', hintAr: '4:5, 1:1, 16:9', hintEn: '4:5, 1:1' },
      { key: 'exportDimensions', flag: 'export-dimensions', isPositional: false, type: 'string', required: false, defaultValue: '1080x1350', labelAr: 'الأبعاد بالبيكسل', labelEn: 'Pixel Dimensions', hintAr: '1080x1350, 1080x1080', hintEn: '1080x1350' }
    ],
    example: '/social crop format --platform=instagram-carousel --aspect-ratio=4:5 --export-dimensions=1080x1350',
    qualityRules: [
      'تحديد المساحة الآمنة (Safe Zone) في إنستغرام حتى لا تقتطع الأيقونات أو الأزرار التفاعلية',
      'توصية بنوع ملف التصدير (PDF متعدد الصفحات للينكدإن، صور PNG عالية الوضوح لإنستغرام)'
    ],
    keywords: ['social crop format', 'أبعاد إنستغرام', 'تصدير الكاروسيل', 'مقاسات السوشيال'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 125,
    isFavorite: false
  }
];
