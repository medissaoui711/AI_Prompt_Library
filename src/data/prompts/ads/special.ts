import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const SPECIAL_ADS_PROMPTS: CommandPrompt[] = [
  {
    id: 'ads-spec-091',
    code: '/ad translation',
    titleAr: 'ترجمة وتوطين الإعلانات ثقافيًا (Ad Localization)',
    titleEn: 'Cultural Ad Localization & Translation',
    descriptionAr: 'يترجم الإعلان مع تكييفه وتوطينه ثقافيًا وسياقيًا وليس مجرد ترجمة حرفية جافة.',
    descriptionEn: 'Culturally localizes and translates ad copy adapting tone, metaphors, and market idioms.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'special',
    params: [
      { key: 'ad_text', flag: 'ad_text', isPositional: true, type: 'text', required: true, labelAr: 'نص الإعلان الأصلي', labelEn: 'Original Ad Text', hintAr: 'الصق الإعلان هنا للترجمة والتوطين', hintEn: 'Paste original ad copy here' },
      { key: 'from', flag: 'from', isPositional: false, type: 'string', required: false, labelAr: 'من لغة', labelEn: 'From Language', hintAr: 'ar, en', hintEn: 'ar, en' },
      { key: 'to', flag: 'to', isPositional: false, type: 'string', required: false, labelAr: 'إلى لغة', labelEn: 'To Language', hintAr: 'en, ar', hintEn: 'en, ar' },
      { key: 'market', flag: 'market', isPositional: false, type: 'string', required: false, labelAr: 'السوق المستهدف', labelEn: 'Target Market', hintAr: 'uk, us, gulf', hintEn: 'uk, us, gulf' },
      resolveParam('tone')
    ],
    example: `/ad translation [الصق الإعلان] --from=ar --to=en --market=uk --tone=professional`,
    qualityRules: [
      'استبدال الأمثلة والتعابير الشعبية بما يطابقها في ثقافة السوق الجديد'
    ],
    keywords: ['translation', 'ترجمة إعلان', 'توطين', 'localization', 'ثقافة'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 140,
    isFavorite: false
  },
  {
    id: 'ads-spec-092',
    code: '/arabic ad',
    titleAr: 'صياغة إعلان عربي طبيعي ولهجات محلية',
    titleEn: 'Native Arabic & Regional Dialect Ad',
    descriptionAr: 'يصيغ إعلانًا عربيًا طبيعيًا ومقنعًا باللهجة المحلية المطلوبة (سعودي، مصري، خليجي) أو الفصحى البيضاء.',
    descriptionEn: 'Writes authentic, fluent Arabic ads in specific regional dialects or contemporary modern standard.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'special',
    params: [
      { key: 'service', flag: 'service', isPositional: true, type: 'text', required: true, labelAr: 'الخدمة أو العرض', labelEn: 'Service / Offer', hintAr: 'خدمة صيانة مكيفات, مقهى محلي', hintEn: 'AC repair service, local cafe' },
      { key: 'dialect', flag: 'dialect', isPositional: false, type: 'string', required: false, labelAr: 'اللهجة', labelEn: 'Dialect', hintAr: 'saudi, egyptian, gulf, fusha', hintEn: 'saudi, egyptian, gulf, fusha' },
      resolveParam('platform'),
      resolveParam('cta')
    ],
    example: `/arabic ad خدمة صيانة مكيفات --dialect=saudi --platform=instagram --cta=whatsapp`,
    qualityRules: [
      'استخدام مفردات يومية دارجة تلامس العميل بحميمية دون ركاكة'
    ],
    keywords: ['عربي', 'لهجة سعودية', 'خليجي', 'arabic ad', 'فصحى'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 200,
    isFavorite: true
  },
  {
    id: 'ads-spec-093',
    code: '/bilingual ad',
    titleAr: 'إعلان ثنائي اللغة متناسق (عربي + إنجليزي)',
    titleEn: 'Harmonious Bilingual (AR/EN) Ad',
    descriptionAr: 'ينشئ نسخة عربية وإنجليزية متطابقتين في النبرة والرسالة الإعلانية لمنشور واحد أو حملة متعددة اللغات.',
    descriptionEn: 'Creates paired, culturally aligned Arabic and English copy for cosmopolitan audiences.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'special',
    params: [
      { key: 'topic', flag: 'topic', isPositional: true, type: 'text', required: true, labelAr: 'الموضوع', labelEn: 'Topic', hintAr: 'افتتاح متجر عطور, مؤتمر تقني', hintEn: 'Perfume boutique opening, tech conference' },
      resolveParam('platform'),
      resolveParam('tone'),
      resolveParam('cta')
    ],
    example: `/bilingual ad افتتاح متجر عطور --platform=instagram --tone=luxury --cta=visit-now`,
    qualityRules: [
      'تطابق المعنى والروح بين اللغتين مع مراعاة خصائص كل لغة'
    ],
    keywords: ['bilingual', 'ثنائي اللغة', 'عربي وانجليزي', 'افتتاح', 'english'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 130,
    isFavorite: false
  },
  {
    id: 'ads-spec-094',
    code: '/ad calendar',
    titleAr: 'تقويم وخطة إعلانات شهرية كاملة',
    titleEn: 'Monthly Ad Content & Distribution Calendar',
    descriptionAr: 'ينشئ تقويمًا تفصيليًا لإعلانات شهر كامل حسب العروض والمواسم والمنصات وتوزيع الميزانية.',
    descriptionEn: 'Builds a 30-day ad publishing calendar aligned with weekly promotional themes.',
    group: 'ads',
    outputType: 'plan',
    adsCategory: 'special',
    params: [
      { key: 'business', flag: 'business', isPositional: true, type: 'text', required: true, labelAr: 'النشاط', labelEn: 'Business', hintAr: 'متجر هدايا, علامة ملابس', hintEn: 'Gift store, clothing brand' },
      { key: 'month', flag: 'month', isPositional: false, type: 'string', required: false, labelAr: 'الشهر أو المناسبة', labelEn: 'Month / Season', hintAr: 'ramadan, october', hintEn: 'ramadan, october' },
      resolveParam('platform'),
      { key: 'posts', flag: 'posts', isPositional: false, type: 'string', required: false, labelAr: 'عدد الإعلانات', labelEn: 'Ad Count', hintAr: '12, 16', hintEn: '12, 16' }
    ],
    example: `/ad calendar متجر هدايا --month=ramadan --platform=instagram,snapchat --posts=12`,
    qualityRules: [
      'تنظيم مواعيد الإطلاق ومراحل الحملة من الإحماء إلى ذروة البيع'
    ],
    keywords: ['calendar', 'تقويم إعلانات', 'جدول شهري', 'خطة نشر'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 145,
    isFavorite: true
  },
  {
    id: 'ads-spec-095',
    code: '/retargeting ad',
    titleAr: 'إعلان إعادة الاستهداف وسلات الشراء المتروكة',
    titleEn: 'Retargeting & Abandoned Cart Recovery Ad',
    descriptionAr: 'يكتب إعلانًا مخصصًا لمن زار الموقع أو أضاف منتجًا للسلة ولم يتمم الطلب مع حافز خاص.',
    descriptionEn: 'Recovers lost shoppers and abandoned carts with targeted reminder copy and friction removers.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'special',
    params: [
      { key: 'trigger', flag: 'trigger', isPositional: true, type: 'text', required: true, labelAr: 'حالة الاستهداف', labelEn: 'Trigger Condition', hintAr: 'عربة تسوق متروكة, زيارة صفحة المنتج', hintEn: 'Abandoned cart, visited page' },
      { key: 'product', flag: 'product', isPositional: false, type: 'string', required: false, labelAr: 'المنتج', labelEn: 'Product', hintAr: 'shoes, watch', hintEn: 'shoes, watch' },
      resolveParam('offer'),
      resolveParam('platform')
    ],
    example: `/retargeting ad عربة تسوق متروكة --product=shoes --offer=free-shipping --platform=facebook`,
    qualityRules: [
      'تذكير العميل بالمنتج وتقديم حافز شحن مجاني أو كود خصم خاص'
    ],
    keywords: ['retargeting', 'إعادة استهداف', 'سلات متروكة', 'شحن مجاني'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 170,
    isFavorite: true
  },
  {
    id: 'ads-spec-096',
    code: '/lead magnet ad',
    titleAr: 'إعلان المحتوى المجاني الجاذب (Lead Magnet)',
    titleEn: 'Lead Magnet & Free Value Resource Ad',
    descriptionAr: 'ينشئ إعلانًا يقدم دليلًا أو كتابًا أو أداة مجانية قيّمة مقابل الحصول على بيانات العميل المستهدف.',
    descriptionEn: 'Promotes ebooks, cheat sheets, and webinars to capture high-intent leads.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'special',
    params: [
      { key: 'resource', flag: 'resource', isPositional: true, type: 'text', required: true, labelAr: 'المورد المجاني', labelEn: 'Free Resource', hintAr: 'دليل مجاني للعناية بالبشرة, كتيب استثمار', hintEn: 'Free skincare guide, investment book' },
      resolveParam('goal'),
      resolveParam('platform'),
      resolveParam('cta')
    ],
    example: `/lead magnet ad دليل مجاني للعناية بالبشرة --goal=leads --platform=instagram --cta=download-now`,
    qualityRules: [
      'تأكيد أن التحميل فوري ومجاني 100% لتشجيع العميل على إدخال بريده'
    ],
    keywords: ['lead magnet', 'دليل مجاني', 'تحميل', 'كتاب إلكتروني', 'ليدز'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 125,
    isFavorite: false
  },
  {
    id: 'ads-spec-097',
    code: '/event ad',
    titleAr: 'إعلان الفعاليات والورش والمعارض',
    titleEn: 'Event, Webinar & Workshop Registration Ad',
    descriptionAr: 'يجهز إعلانًا لفعالية، حفل افتتاح، ورشة عمل، أو معرض مع إبراز التاريخ والمقاعد المحدودة.',
    descriptionEn: 'Drives seat reservations and registrations for workshops, exhibitions, and summits.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'special',
    params: [
      { key: 'event_name', flag: 'event_name', isPositional: true, type: 'text', required: true, labelAr: 'اسم الفعالية', labelEn: 'Event Name', hintAr: 'ورشة تصوير للمبتدئين, مؤتمر التسويق', hintEn: 'Beginner photography workshop, marketing summit' },
      { key: 'date', flag: 'date', isPositional: false, type: 'string', required: false, labelAr: 'الموعد', labelEn: 'Date', hintAr: '20-10, this-weekend', hintEn: '20-10, this-weekend' },
      resolveParam('platform'),
      resolveParam('goal')
    ],
    example: `/event ad ورشة تصوير للمبتدئين --date=20-10 --platform=instagram --goal=registrations`,
    qualityRules: [
      'توضيح القيمة المكتسبة من الحضور وأسماء المتحدثين وشهادة الإتمام'
    ],
    keywords: ['event ad', 'فعالية', 'ورشة عمل', 'تسجيل', 'مؤتمر'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 110,
    isFavorite: false
  },
  {
    id: 'ads-spec-098',
    code: '/location ad',
    titleAr: 'إعلان مستهدف بالموقع والحي الجغرافي',
    titleEn: 'Hyper-Local Neighborhood Geo Ad',
    descriptionAr: 'ينشئ إعلانًا محليًا فائق الدقة يركز على المدينة أو الحي لدعوة السكان لزيارة الفرع القريب.',
    descriptionEn: 'Hyper-local ad targeting specific neighborhoods with street-level proximity hooks.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'special',
    params: [
      { key: 'business', flag: 'business', isPositional: true, type: 'text', required: true, labelAr: 'النشاط', labelEn: 'Business', hintAr: 'صالون رجالي, مطعم عائلي', hintEn: 'Men salon, family diner' },
      { key: 'city', flag: 'city', isPositional: false, type: 'string', required: false, labelAr: 'المدينة', labelEn: 'City', hintAr: 'الرياض, جدة', hintEn: 'Riyadh, Jeddah' },
      { key: 'area', flag: 'area', isPositional: false, type: 'string', required: false, labelAr: 'الحي', labelEn: 'Area', hintAr: 'النخيل, الروضة, العليا', hintEn: 'Al-Nakheel, Al-Olaya' },
      resolveParam('goal')
    ],
    example: `/location ad صالون رجالي --city=الرياض --area=النخيل --goal=walk-ins`,
    qualityRules: [
      'مخاطبة أهالي الحي بالاسم مع توضيح توفر مواقف سيارات مجانية'
    ],
    keywords: ['location', 'حي', 'استهداف جغرافي', 'صالون', 'قريب منك'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 135,
    isFavorite: false
  },
  {
    id: 'ads-spec-099',
    code: '/brand awareness ad',
    titleAr: 'إعلان بناء الوعي بالعلامة التجارية',
    titleEn: 'Emotional Brand Awareness & Story Ad',
    descriptionAr: 'ينشئ إعلانًا دافئًا لتعريف الناس بالعلامة وقيمتها ورسالتها الإنسانية دون ضغط بيع مباشر.',
    descriptionEn: 'Builds warm emotional brand affinity and memorable brand awareness without hard sell.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'special',
    params: [
      { key: 'brand', flag: 'brand', isPositional: true, type: 'text', required: true, labelAr: 'العلامة التجارية', labelEn: 'Brand', hintAr: 'قهوة مختصة محلية, ماركة ملابس', hintEn: 'Local specialty roaster, apparel' },
      resolveParam('platform'),
      resolveParam('format'),
      resolveParam('tone')
    ],
    example: `/brand awareness ad قهوة مختصة محلية --platform=instagram --format=reel --tone=warm`,
    qualityRules: [
      'التركيز على المشاعر والارتباط الإنساني وتجربة العميل المميزة'
    ],
    keywords: ['وعي بالعلامة', 'brand awareness', 'قصة براند', 'مشاعر دافئة'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 120,
    isFavorite: false
  },
  {
    id: 'ads-spec-100',
    code: '/ad bundle',
    titleAr: 'حزمة إعلانية كاملة (نص + صورة + فيديو + CTA)',
    titleEn: 'All-in-One Full Ad Production Bundle',
    descriptionAr: 'ينشئ حزمة إعلان متكاملة في مخرج واحد تشمل النص الرئيسي، العناوين، الـCTA، وفكرة الصورة وسكربت الفيديو.',
    descriptionEn: 'Generates an all-in-one commercial ad bundle with copy, headlines, visual prompts, and video script.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'special',
    params: [
      { key: 'service', flag: 'service', isPositional: true, type: 'text', required: true, labelAr: 'الخدمة أو المنتج', labelEn: 'Service / Product', hintAr: 'خدمة قص شعر رجالي, متجر هدايا', hintEn: 'Men grooming, gift boutique' },
      resolveParam('platform'),
      resolveParam('format'),
      resolveParam('goal'),
      resolveParam('tone')
    ],
    example: `/ad bundle خدمة قص شعر رجالي --platform=instagram --format=reel --goal=bookings --tone=confident`,
    qualityRules: [
      'تكامل جميع العناصر لتعمل معًا بانسجام تام لتحقيق أعلى تحويل ممكن'
    ],
    keywords: ['ad bundle', 'حزمة إعلانية', 'إعلان شامل', 'شامل', 'كامل'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 260,
    isFavorite: true
  }
];
