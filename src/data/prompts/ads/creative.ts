import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const CREATIVE_PROMPTS: CommandPrompt[] = [
  {
    id: 'ads-creat-021',
    code: '/image ad',
    titleAr: 'فكرة وتصور إعلان صوري ثابت',
    titleEn: 'Static Image Ad Concept & Prompt',
    descriptionAr: 'يجهز فكرة وبرومبت إعلان بصري ثابت لمنتج أو خدمة مع التركيز على نقاء التصميم.',
    descriptionEn: 'Generates visual concept, layout composition, and image prompt for static ads.',
    group: 'ads',
    outputType: 'image',
    adsCategory: 'creative',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج أو الخدمة', labelEn: 'Product / Service', hintAr: 'عطر رجالي فاخر, ساعة يد...', hintEn: 'Luxury men perfume, watch...' },
      resolveParam('platform'),
      resolveParam('format'),
      resolveParam('style'),
      { key: 'text', flag: 'text', isPositional: false, type: 'string', required: false, labelAr: 'مستوى النصوص بالصورة', labelEn: 'Text Density', hintAr: 'minimum, none, bold-headline', hintEn: 'minimum, none, bold-headline' }
    ],
    example: `/image ad عطر رجالي فاخر --platform=instagram --format=square --style=luxury --text=minimum`,
    qualityRules: [
      'تجنب ازدحام الصورة بالكتابة وفق توصيات المنصات الإعلانية',
      'تحديد الإضاءة وزاوية الكاميرا ونقطة الجذب البصري'
    ],
    keywords: ['تصميم', 'صورة إعلان', 'image ad', 'creative', 'visual'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 205,
    isFavorite: true
  },
  {
    id: 'ads-creat-022',
    code: '/product image ad',
    titleAr: 'إعلان تصوير المنتج الاحترافي',
    titleEn: 'Commercial Product Studio Ad',
    descriptionAr: 'يحول صورة المنتج إلى تصور إعلان استوديو احترافي مع خلفية وإضاءة ورسالة بصرية جاذبة.',
    descriptionEn: 'Crafts studio-level product photography setups with commercial lighting and props.',
    group: 'ads',
    outputType: 'image',
    adsCategory: 'creative',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج', labelEn: 'Product', hintAr: 'ساعة ذهبية, نظارة شمسية', hintEn: 'Gold watch, sunglasses' },
      resolveParam('platform'),
      resolveParam('style'),
      { key: 'background', flag: 'background', isPositional: false, type: 'string', required: false, labelAr: 'الخلفية والمحيط', labelEn: 'Background', hintAr: 'dark-marble, wooden, studio-white', hintEn: 'dark-marble, wooden, studio-white' },
      resolveParam('cta')
    ],
    example: `/product image ad ساعة ذهبية --platform=instagram --style=luxury --background=dark-marble --cta=shop-now`,
    qualityRules: [
      'إبراز ملمس وجودة خامات المنتج وتفاصيل الصنع الدقيقة'
    ],
    keywords: ['product photography', 'تصوير منتجات', 'استوديو', 'خلفية', 'ساعة'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 140,
    isFavorite: false
  },
  {
    id: 'ads-creat-023',
    code: '/social ad design',
    titleAr: 'موجز تصميم منشور سوشيال ميديا',
    titleEn: 'Social Media Ad Design Brief',
    descriptionAr: 'ينشئ Brief لتصميم منشور إعلاني لمنصات التواصل بالمقاسات والخطوط والألوان المتناسقة.',
    descriptionEn: 'Design brief for social media ad creatives with exact aspect ratios and branding.',
    group: 'ads',
    outputType: 'image',
    adsCategory: 'creative',
    params: [
      { key: 'topic', flag: 'topic', isPositional: true, type: 'text', required: true, labelAr: 'موضوع المنشور', labelEn: 'Post Topic', hintAr: 'عرض افتتاح مطعم, تخفيضات الموسم', hintEn: 'Restaurant opening, seasonal sale' },
      resolveParam('platform'),
      resolveParam('format'),
      resolveParam('tone')
    ],
    example: `/social ad design عرض افتتاح مطعم --platform=instagram --format=1080x1350 --tone=energetic`,
    qualityRules: [
      'مراعاة منطقة الأمان (Safe Zones) والتدرج الهرمي البصري'
    ],
    keywords: ['social design', 'سوشيال ميديا', 'بوست', 'إنستغرام', 'design brief'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 122,
    isFavorite: false
  },
  {
    id: 'ads-creat-024',
    code: '/banner ad',
    titleAr: 'إعلان بانر للمواقع والشبكات الإعلانية',
    titleEn: 'Display Network Banner Ad',
    descriptionAr: 'يجهز إعلان بانر لموقع إلكتروني أو شبكة Google Display بهدف جذب النقرات العالية.',
    descriptionEn: 'Designs click-optimized display banner layouts for websites and ad networks.',
    group: 'ads',
    outputType: 'image',
    adsCategory: 'creative',
    params: [
      { key: 'business', flag: 'business', isPositional: true, type: 'text', required: true, labelAr: 'النشاط أو المتجر', labelEn: 'Business / Store', hintAr: 'متجر إلكترونيات, تطبيق حجوزات', hintEn: 'Electronics store, booking app' },
      resolveParam('format'),
      resolveParam('goal'),
      resolveParam('cta')
    ],
    example: `/banner ad متجر إلكترونيات --format=landscape --goal=clicks --cta=shop-now`,
    qualityRules: [
      'تباين عالٍ للزر الدعائي (CTA) ورسالة سريعة تُقرأ في ثانيتين'
    ],
    keywords: ['banner', 'بانر', 'display ad', 'google display', 'clicks'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 80,
    isFavorite: false
  },
  {
    id: 'ads-creat-025',
    code: '/carousel ad',
    titleAr: 'إعلان كاروسيل متعدد الشرائح',
    titleEn: 'Multi-Slide Carousel Ad',
    descriptionAr: 'يبني فكرة إعلان كاروسيل مقسم إلى شرائح متسلسلة تشرح خطوات أو فوائد حتى الشراء.',
    descriptionEn: 'Builds a progressive multi-card carousel ad taking viewers from hook to conversion.',
    group: 'ads',
    outputType: 'image',
    adsCategory: 'creative',
    params: [
      { key: 'topic', flag: 'topic', isPositional: true, type: 'text', required: true, labelAr: 'الموضوع أو المنتج', labelEn: 'Topic / Product', hintAr: 'فوائد تنظيف البشرة, باقة دورات', hintEn: 'Skincare benefits, course bundle' },
      { key: 'slides', flag: 'slides', isPositional: false, type: 'string', required: false, labelAr: 'عدد الشرائح', labelEn: 'Number of Slides', hintAr: '5, 7, 10', hintEn: '5, 7, 10' },
      resolveParam('platform'),
      resolveParam('goal')
    ],
    example: `/carousel ad فوائد تنظيف البشرة --slides=5 --platform=instagram --goal=education-to-sale`,
    qualityRules: [
      'شريحة أولى جذابة، وتدفق سلس بين الشرائح، وشريحة ختامية للحسم والدعوة'
    ],
    keywords: ['carousel', 'كاروسيل', 'شرائح', 'slides', 'instagram'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 155,
    isFavorite: true
  },
  {
    id: 'ads-creat-026',
    code: '/offer poster',
    titleAr: 'بوستر بصري لعرض ترويجي',
    titleEn: 'Promotional Offer Poster',
    descriptionAr: 'يجهز فكرة بوستر بصري إعلاني لعرض أو خصم بمظهر عصري وواضح.',
    descriptionEn: 'Designs high-impact promotional posters optimized for sales and discounts.',
    group: 'ads',
    outputType: 'image',
    adsCategory: 'creative',
    params: [
      { key: 'offer', flag: 'offer', isPositional: true, type: 'text', required: true, labelAr: 'العرض والتخفيض', labelEn: 'Sale Offer', hintAr: 'خصم 25% على الملابس الصيفية', hintEn: '25% off summer clothes' },
      resolveParam('platform'),
      resolveParam('format'),
      resolveParam('style')
    ],
    example: `/offer poster خصم 25% على الملابس الصيفية --platform=instagram --format=story --style=modern`,
    qualityRules: [
      'إبراز نسبة الخصم وتاريخ الانتهاء بشكل مقروء وفوري'
    ],
    keywords: ['بوستر', 'poster', 'عرض', 'تخفيض', 'sale poster'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 102,
    isFavorite: false
  },
  {
    id: 'ads-creat-027',
    code: '/before after visual',
    titleAr: 'تصور بصري لمقارنة قبل وبعد',
    titleEn: 'Before & After Visual Concept',
    descriptionAr: 'يجهز تصورًا بصريًا لمقارنة قبل وبعد بطريقة إعلانية مقنعة ومنظمة.',
    descriptionEn: 'Visual direction for split-screen or side-by-side transformation comparisons.',
    group: 'ads',
    outputType: 'image',
    adsCategory: 'creative',
    params: [
      { key: 'transformation', flag: 'transformation', isPositional: true, type: 'text', required: true, labelAr: 'مجال التحول', labelEn: 'Transformation', hintAr: 'تجديد غرفة معيشة, تلميع سيارة', hintEn: 'Living room renovation, car detailing' },
      resolveParam('platform'),
      resolveParam('format'),
      { key: 'labels', flag: 'labels', isPositional: false, type: 'string', required: false, labelAr: 'إضافة ملصقات قبل/بعد', labelEn: 'Add Labels', hintAr: 'yes, no', hintEn: 'yes, no' }
    ],
    example: `/before after visual تجديد غرفة معيشة --platform=instagram --format=vertical --labels=yes`,
    qualityRules: [
      'تطابق زاوية التصوير والإضاءة في الحالتين لإثبات المصداقية'
    ],
    keywords: ['before after visual', 'قبل وبعد بصري', 'مقارنة', 'تحول'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 88,
    isFavorite: false
  },
  {
    id: 'ads-creat-028',
    code: '/luxury product visual',
    titleAr: 'تصور بصري فاخر للمنتجات الراقية',
    titleEn: 'Luxury High-End Product Visual',
    descriptionAr: 'ينشئ تصورًا بصريًا راقيًا ومينيمال للمنتجات الفاخرة مع إضاءة سينمائية وخلفية فخمة.',
    descriptionEn: 'Minimalist, atmospheric luxury visual staging for high-ticket branded goods.',
    group: 'ads',
    outputType: 'image',
    adsCategory: 'creative',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج الفاخر', labelEn: 'Luxury Item', hintAr: 'زجاجة عطر نيش, مجوهرات ألماس', hintEn: 'Niche perfume bottle, diamonds' },
      { key: 'background', flag: 'background', isPositional: false, type: 'string', required: false, labelAr: 'نوع الخلفية', labelEn: 'Background', hintAr: 'black-marble, brushed-gold, velvet', hintEn: 'black-marble, brushed-gold, velvet' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, labelAr: 'نمط الإضاءة', labelEn: 'Lighting', hintAr: 'golden, rim-light, moody', hintEn: 'golden, rim-light, moody' },
      resolveParam('platform')
    ],
    example: `/luxury product visual زجاجة عطر --background=black-marble --lighting=golden --platform=instagram`,
    qualityRules: [
      'الاعتماد على الفراغ السلبي والتباين المدروس للإيحاء بالرقي'
    ],
    keywords: ['فاخر', 'luxury visual', 'عطر', 'إضاءة ذهبية', 'رخام'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 125,
    isFavorite: true
  },
  {
    id: 'ads-creat-029',
    code: '/ad mockup',
    titleAr: 'موك أب واقعي للإعلان والمنتج',
    titleEn: 'Realistic Ad & Product Mockup',
    descriptionAr: 'يعرض المنتج أو الإعلان على موك أب واقعي في بيئة استخدام حية.',
    descriptionEn: 'Places your product or ad creative into realistic lifestyle environment mockups.',
    group: 'ads',
    outputType: 'image',
    adsCategory: 'creative',
    params: [
      { key: 'item', flag: 'item', isPositional: true, type: 'text', required: true, labelAr: 'العنصر والمشهد', labelEn: 'Item & Scene', hintAr: 'كوب قهوة يحمل شعار المقهى, شاشة هاتف', hintEn: 'Coffee cup with logo, mobile screen' },
      { key: 'scene', flag: 'scene', isPositional: false, type: 'string', required: false, labelAr: 'المشهد المحيط', labelEn: 'Scene', hintAr: 'coffee-shop, modern-office, outdoors', hintEn: 'coffee-shop, modern-office, outdoors' },
      resolveParam('style')
    ],
    example: `/ad mockup كوب قهوة يحمل شعار المقهى --scene=coffee-shop --style=realistic`,
    qualityRules: [
      'دمج الظلال والانعكاسات الحقيقية لتعزيز الواقعية'
    ],
    keywords: ['mockup', 'موك اب', 'منتج واقعي', 'نموذج', 'branding'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 94,
    isFavorite: false
  },
  {
    id: 'ads-creat-030',
    code: '/image ad brief',
    titleAr: 'تعليمات تصميم إعلان ثابت للمصمم / AI',
    titleEn: 'Static Ad Design Production Brief',
    descriptionAr: 'يكتب تعليمات واضحة للمصمم أو مولد الصور لإنشاء إعلان ثابت باحترافية وسرعة.',
    descriptionEn: 'Detailed production directives for graphic designers or AI image generators.',
    group: 'ads',
    outputType: 'image',
    adsCategory: 'creative',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج', labelEn: 'Product', hintAr: 'منتج عناية بالبشرة طبيعي', hintEn: 'Natural skincare product' },
      resolveParam('audience'),
      { key: 'message', flag: 'message', isPositional: false, type: 'string', required: false, labelAr: 'الرسالة البصرية', labelEn: 'Visual Message', hintAr: 'natural-glow, fast-recovery', hintEn: 'natural-glow, fast-recovery' },
      resolveParam('format')
    ],
    example: `/image ad brief منتج عناية بالبشرة --audience=women_20_35 --message=natural-glow --format=story`,
    qualityRules: [
      'تحديد لوحة الألوان والعناصر الرئيسية ونصوص التراكب والقياس'
    ],
    keywords: ['brief', 'design brief', 'تعليمات تصميم', 'موجز'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 86,
    isFavorite: false
  }
];
