import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const COPYWRITING_PROMPTS: CommandPrompt[] = [
  {
    id: 'ads-copy-011',
    code: '/ad copy',
    titleAr: 'كتابة نص إعلاني جاهز',
    titleEn: 'Ready-to-Use Ad Copy',
    descriptionAr: 'يكتب نصًا إعلانيًا جاهزًا لمنصة أو هدف محدد مع هوية ونبرة واضحة ودعوة لاتخاذ إجراء.',
    descriptionEn: 'Writes conversion-focused ad copy tailored for specific platforms, tones, and CTAs.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'copywriting',
    params: [
      { key: 'service', flag: 'service', isPositional: true, type: 'text', required: true, labelAr: 'الخدمة أو المنتج', labelEn: 'Service / Product', hintAr: 'خدمة قص شعر رجالي, تطبيق توصيل...', hintEn: 'Men grooming, delivery app...' },
      resolveParam('platform'),
      resolveParam('tone'),
      resolveParam('cta'),
      resolveParam('language')
    ],
    example: `/ad copy خدمة قص شعر رجالي --platform=instagram --tone=confident --cta=book-now --language=ar`,
    qualityRules: [
      'بدء الإعلان بجملة افتتاحية قوية تخاطب الجمهور مباشرة',
      'التركيز على القيمة الملموسة والشعور بعد التجربة',
      'دعوة واضحة ومباشرة لاتخاذ الإجراء (CTA)'
    ],
    keywords: ['نص إعلاني', 'copywriting', 'ad copy', 'إعلان', 'نصوص'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 230,
    isFavorite: true
  },
  {
    id: 'ads-copy-012',
    code: '/ad headline',
    titleAr: 'عناوين إعلانية جاذبة',
    titleEn: 'High-Converting Ad Headlines',
    descriptionAr: 'يكتب عناوين إعلانية قوية ومختصرة تجذب الانتباه وتثير الفضول بأساليب متعددة.',
    descriptionEn: 'Generates punchy, high-converting ad headlines tailored to the brand tone.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'copywriting',
    params: [
      { key: 'offer', flag: 'offer', isPositional: true, type: 'text', required: true, labelAr: 'موضوع العرض أو المنتج', labelEn: 'Offer / Product', hintAr: 'عرض خصم على العطور, دورة برمجة...', hintEn: 'Perfume discount, coding course...' },
      { key: 'count', flag: 'count', isPositional: false, type: 'string', required: false, labelAr: 'العدد المطلوب', labelEn: 'Count', hintAr: '10, 5', hintEn: '10, 5' },
      resolveParam('tone'),
      resolveParam('language')
    ],
    example: `/ad headline عرض خصم على العطور --count=10 --tone=luxury --language=ar`,
    qualityRules: [
      'استخدام تقنيات العناوين: التساؤل، إبراز النتيجة، الحصرية، وسرعة الحل'
    ],
    keywords: ['headline', 'عنوان', 'عناوين', 'مانشيت', 'إعلان'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 165,
    isFavorite: false
  },
  {
    id: 'ads-copy-013',
    code: '/ad hook',
    titleAr: 'افتتاحيات إعلانية خاطفة (Hooks)',
    titleEn: 'Attention-Grabbing Ad Hooks',
    descriptionAr: 'ينشئ افتتاحيات سريعة تجذب الانتباه في أول ثانية أو سطر لمنع العميل من التمرير.',
    descriptionEn: 'Creates scroll-stopping hooks that grab attention within the first few seconds.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'copywriting',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج أو الحل', labelEn: 'Product / Solution', hintAr: 'كريم لعلاج جفاف البشرة', hintEn: 'Dry skin hydrating cream' },
      { key: 'count', flag: 'count', isPositional: false, type: 'string', required: false, labelAr: 'العدد المطلوب', labelEn: 'Count', hintAr: '10, 5', hintEn: '10, 5' },
      resolveParam('audience'),
      resolveParam('style')
    ],
    example: `/ad hook كريم لعلاج جفاف البشرة --count=10 --audience=women --style=problem-solution`,
    qualityRules: [
      'كسر التوقع النمطي (Pattern Interrupt) وإثارة التساؤل المباشر'
    ],
    keywords: ['hook', 'افتتاحية', 'خطف الانتباه', 'intro', 'scroll-stopping'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 198,
    isFavorite: true
  },
  {
    id: 'ads-copy-014',
    code: '/ad cta',
    titleAr: 'عبارات الدعوة للإجراء (CTAs)',
    titleEn: 'Call-to-Action Variations',
    descriptionAr: 'يقترح عبارات دعوة إلى الإجراء مقنعة وموجهة حسب الهدف لرفع معدل التحويل.',
    descriptionEn: 'Suggests high-converting call-to-action phrases tailored to the campaign goal.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'copywriting',
    params: [
      { key: 'service', flag: 'service', isPositional: true, type: 'text', required: true, labelAr: 'الخدمة أو المنتج', labelEn: 'Service / Product', hintAr: 'خدمة تصوير مناسبات', hintEn: 'Event photography service' },
      resolveParam('goal'),
      { key: 'count', flag: 'count', isPositional: false, type: 'string', required: false, labelAr: 'العدد', labelEn: 'Count', hintAr: '10, 5', hintEn: '10, 5' },
      resolveParam('language')
    ],
    example: `/ad cta خدمة تصوير مناسبات --goal=booking --count=10 --language=ar`,
    qualityRules: [
      'استخدام أفعال واضحة وقليلة الاحتكاك تقلل تردد العميل'
    ],
    keywords: ['cta', 'call to action', 'دعوة للإجراء', 'تحويل', 'conversion'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 120,
    isFavorite: false
  },
  {
    id: 'ads-copy-015',
    code: '/product copy',
    titleAr: 'وصف إعلاني مقنع للمنتج',
    titleEn: 'Persuasive Product Ad Copy',
    descriptionAr: 'يكتب وصفًا إعلانيًا مقنعًا للمنتج، يركز على الفوائد الملموسة لا المواصفات الجافة فقط.',
    descriptionEn: 'Writes benefit-driven product copy that transforms dry features into emotional value.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'copywriting',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج', labelEn: 'Product', hintAr: 'سماعات لاسلكية عازلة للضوضاء', hintEn: 'Noise cancelling earbuds' },
      resolveParam('audience'),
      resolveParam('tone'),
      resolveParam('length')
    ],
    example: `/product copy سماعات لاسلكية --audience=students --tone=modern --length=short`,
    qualityRules: [
      'ترجمة كل ميزة تقنية إلى فائدة يومية ملموسة يشعر بها العميل'
    ],
    keywords: ['منتج', 'product copy', 'وصف', 'فوائد', 'e-commerce'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 145,
    isFavorite: false
  },
  {
    id: 'ads-copy-016',
    code: '/service copy',
    titleAr: 'نص إعلان للخدمات والأنشطة المحلية',
    titleEn: 'Service & Local Business Copy',
    descriptionAr: 'يكتب إعلانًا لخدمة مهنية أو محلية يعزز الثقة ويسهل عملية الحجز الفوري.',
    descriptionEn: 'Crafts trust-building ad copy for professional and local service providers.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'copywriting',
    params: [
      { key: 'service', flag: 'service', isPositional: true, type: 'text', required: true, labelAr: 'الخدمة', labelEn: 'Service', hintAr: 'خدمة غسيل سيارات متنقلة', hintEn: 'Mobile car wash service' },
      { key: 'city', flag: 'city', isPositional: false, type: 'string', required: false, labelAr: 'المدينة / المنطقة', labelEn: 'City', hintAr: 'riyadh, jeddah', hintEn: 'riyadh, jeddah' },
      resolveParam('goal'),
      resolveParam('tone')
    ],
    example: `/service copy خدمة غسيل سيارات متنقلة --city=riyadh --goal=bookings --tone=direct`,
    qualityRules: [
      'إبراز سرعة الوصول، الاعتمادية، والضمان على جودة الخدمة'
    ],
    keywords: ['خدمة', 'service', 'محلي', 'local', 'حجز', 'صيانة'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 118,
    isFavorite: false
  },
  {
    id: 'ads-copy-017',
    code: '/before after copy',
    titleAr: 'إعلان المقارنة (قبل وبعد)',
    titleEn: 'Before & After Transformation Copy',
    descriptionAr: 'يكتب نص إعلان يعتمد على مقارنة الحالة قبل وبعد استخدام الخدمة أو المنتج لإبراز التحول.',
    descriptionEn: 'Writes transformation-driven ad copy highlighting dramatic before vs after state.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'copywriting',
    params: [
      { key: 'service', flag: 'service', isPositional: true, type: 'text', required: true, labelAr: 'الخدمة أو المنتج', labelEn: 'Service / Product', hintAr: 'خدمة تجديد أثاث, علاج البشرة...', hintEn: 'Furniture renewal, skincare...' },
      resolveParam('audience'),
      resolveParam('platform'),
      resolveParam('cta')
    ],
    example: `/before after copy خدمة تجديد أثاث --audience=homeowners --platform=instagram --cta=request-quote`,
    qualityRules: [
      'توضيح المعاناة السابقة ثم رسم مشهد الراحة والنتيجة المبهرة بعد الحل'
    ],
    keywords: ['قبل وبعد', 'before after', 'تحول', 'transformation', 'نتيجة'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 105,
    isFavorite: false
  },
  {
    id: 'ads-copy-018',
    code: '/testimonial copy',
    titleAr: 'تحويل تجربة عميل إلى إعلان موثوق',
    titleEn: 'Testimonial & Social Proof Copy',
    descriptionAr: 'يحول رأي عميل أو مراجعة إيجابية إلى نص إعلاني موثوق يبني المصداقية.',
    descriptionEn: 'Transforms customer reviews and testimonials into credible social proof ads.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'copywriting',
    params: [
      { key: 'review', flag: 'review', isPositional: true, type: 'text', required: true, labelAr: 'رأي العميل أو ملخص التجربة', labelEn: 'Review Summary', hintAr: 'عميل راضٍ عن خدمة تنظيف سريعة', hintEn: 'Satisfied cleaning service customer' },
      resolveParam('platform'),
      resolveParam('tone'),
      resolveParam('cta')
    ],
    example: `/testimonial copy عميل راضٍ عن خدمة تنظيف --platform=facebook --tone=trustworthy --cta=message-us`,
    qualityRules: [
      'الحفاظ على عفوية وصدق صوت العميل دون تصنع إعلاني مفرط'
    ],
    keywords: ['testimonial', 'تجارب', 'تقييمات', 'مراجعة', 'ثقة'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 89,
    isFavorite: false
  },
  {
    id: 'ads-copy-019',
    code: '/problem solution ad',
    titleAr: 'إعلان المشكلة والحل (PAS Framework)',
    titleEn: 'Problem-Agitation-Solution Ad',
    descriptionAr: 'ينشئ إعلانًا يبدأ بمشكلة العميل ويشرح أثرها ثم يقدّم المنتج كحل مثالي ومريح.',
    descriptionEn: 'Structured problem-solution framework presenting the product as the ultimate relief.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'copywriting',
    params: [
      { key: 'problem', flag: 'problem', isPositional: true, type: 'text', required: true, labelAr: 'المشكلة الأساسية', labelEn: 'Core Problem', hintAr: 'تساقط الشعر, بطء الكمبيوتر...', hintEn: 'Hair loss, slow PC...' },
      { key: 'product', flag: 'product', isPositional: false, type: 'string', required: false, labelAr: 'الحل / المنتج', labelEn: 'Product', hintAr: 'hair-serum, cloud-app', hintEn: 'hair-serum, cloud-app' },
      resolveParam('audience'),
      resolveParam('language')
    ],
    example: `/problem solution ad تساقط الشعر --product=hair-serum --audience=women --language=ar`,
    qualityRules: [
      'تجسيد الألم اليومي ثم تقديم الحل بطريقة منطقية وسلسة'
    ],
    keywords: ['مشكلة وحل', 'problem solution', 'PAS', 'حلول', 'ألم'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 133,
    isFavorite: true
  },
  {
    id: 'ads-copy-020',
    code: '/urgent offer copy',
    titleAr: 'نص عرض عاجل ومحدود',
    titleEn: 'Urgent & Limited-Time Offer Copy',
    descriptionAr: 'يكتب نص عرض محدود المدة بطريقة تثير الاستعجال الحقيقي دون مبالغة أو ضغط مزعج.',
    descriptionEn: 'Writes urgency-driven offer copy creating authentic FOMO without pushiness.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'copywriting',
    params: [
      { key: 'offer', flag: 'offer', isPositional: true, type: 'text', required: true, labelAr: 'العرض والتخفيض', labelEn: 'Offer', hintAr: 'خصم 30% على جلسات الليزر', hintEn: '30% off laser sessions' },
      { key: 'deadline', flag: 'deadline', isPositional: false, type: 'string', required: false, labelAr: 'الموعد النهائي', labelEn: 'Deadline', hintAr: '3days, 48hours, tonight', hintEn: '3days, 48hours, tonight' },
      resolveParam('cta'),
      resolveParam('tone')
    ],
    example: `/urgent offer copy خصم 30% على جلسات الليزر --deadline=3days --cta=book-now --tone=professional`,
    qualityRules: [
      'توضيح سبب المحدودية (الكمية أو التاريخ) لتكون موثوقة ومقنعة'
    ],
    keywords: ['عرض عاجل', 'urgent', 'محدود', 'deadline', 'خصم'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 112,
    isFavorite: false
  }
];
