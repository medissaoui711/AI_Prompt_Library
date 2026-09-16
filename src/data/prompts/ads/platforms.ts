import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const PLATFORMS_PROMPTS: CommandPrompt[] = [
  {
    id: 'ads-plat-051',
    code: '/meta ads',
    titleAr: 'إعلانات ميتا (فيسبوك وإنستغرام)',
    titleEn: 'Meta Ads (Facebook & Instagram)',
    descriptionAr: 'يجهز عناصر إعلان متكاملة مناسبة لمنظومة Meta: النص الأساسي، العنوان، والوصف والصورة.',
    descriptionEn: 'Generates comprehensive Meta Ads assets including primary text, headline, description, and visual brief.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'platforms',
    params: [
      { key: 'business', flag: 'business', isPositional: true, type: 'text', required: true, labelAr: 'النشاط أو المتجر', labelEn: 'Business', hintAr: 'متجر عطور, عيادة جلدية', hintEn: 'Perfume store, dermatology clinic' },
      resolveParam('goal'),
      resolveParam('format'),
      resolveParam('audience'),
      resolveParam('language')
    ],
    example: `/meta ads متجر عطور --goal=sales --format=image --audience=women_25_40 --language=ar`,
    qualityRules: [
      'الالتزام بسياسات ميتا الإعلانية وتجنب الادعاءات الطبية غير الموثقة'
    ],
    keywords: ['meta ads', 'فيسبوك', 'إنستغرام', 'ميتا', 'facebook ads'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 240,
    isFavorite: true
  },
  {
    id: 'ads-plat-052',
    code: '/instagram ads',
    titleAr: 'إعلانات إنستغرام المتخصصة',
    titleEn: 'Instagram Native Ads Suite',
    descriptionAr: 'ينشئ إعلانًا متناسقًا بصريًا لمنشور، ستوري، أو ريلز إنستغرام ينسجم مع هوية المنصة.',
    descriptionEn: 'Crafts visually striking Instagram ad concepts optimized for feed, story, and reels.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'platforms',
    params: [
      { key: 'service', flag: 'service', isPositional: true, type: 'text', required: true, labelAr: 'الخدمة أو المنتج', labelEn: 'Service / Product', hintAr: 'خدمة قص شعر رجالي, مقهى عصري', hintEn: 'Men grooming, trendy cafe' },
      resolveParam('format'),
      resolveParam('goal'),
      resolveParam('cta')
    ],
    example: `/instagram ads خدمة قص شعر رجالي --format=reel --goal=bookings --cta=book-now`,
    qualityRules: [
      'الاهتمام بجماليات الصورة والألوان والمقاسات الرأسية 9:16 أو 4:5'
    ],
    keywords: ['instagram', 'إنستغرام', 'reels', 'stories', 'حجز'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 215,
    isFavorite: true
  },
  {
    id: 'ads-plat-053',
    code: '/facebook ads',
    titleAr: 'إعلانات فيسبوك الموجهة للرسائل والمبيعات',
    titleEn: 'Facebook Direct Response Ads',
    descriptionAr: 'ينشئ نسخة إعلان مناسبة لجمهور Facebook وحملات الرسائل أو توليد العملاء المحتملين.',
    descriptionEn: 'Tailors copy and creative for Facebook demographics, community groups, and Messenger ads.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'platforms',
    params: [
      { key: 'company', flag: 'company', isPositional: true, type: 'text', required: true, labelAr: 'الشركة أو الخدمة', labelEn: 'Company', hintAr: 'شركة نقل أثاث, خدمات منزلية', hintEn: 'Furniture moving, home services' },
      resolveParam('goal'),
      resolveParam('audience'),
      resolveParam('format')
    ],
    example: `/facebook ads شركة نقل أثاث --goal=messages --audience=homeowners --format=image`,
    qualityRules: [
      'استخدام نص إعلاني أطول قليلاً يوضح التفاصيل والضمانات ويركز على زر أرسل رسالة'
    ],
    keywords: ['facebook', 'فيسبوك', 'رسائل', 'messages', 'نقل أثاث'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 155,
    isFavorite: false
  },
  {
    id: 'ads-plat-054',
    code: '/tiktok ads',
    titleAr: 'إعلانات تيك توك التفاعلية (TikTok Ads)',
    titleEn: 'Native TikTok Spark & In-Feed Ads',
    descriptionAr: 'يجهز سكربت إعلان سريع وعفوي ومناسب لطبيعة وثقافة منصة TikTok الترفيهية والتفاعلية.',
    descriptionEn: 'Builds TikTok-native in-feed video ads with trend-aligned pacing and authentic hooks.',
    group: 'ads',
    outputType: 'video',
    adsCategory: 'platforms',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج', labelEn: 'Product', hintAr: 'منتج تنظيف أحذية سحري, أداة مطبخ', hintEn: 'Shoe cleaner, gadget' },
      resolveParam('duration'),
      resolveParam('style'),
      resolveParam('goal')
    ],
    example: `/tiktok ads منتج تنظيف أحذية --duration=15sec --style=ugc --goal=sales`,
    qualityRules: [
      'جعل الإعلان يبدو كمقطع تيك توك ممتع وليس كإعلان تقليدي مزعج ("Don’t make ads, make TikToks")'
    ],
    keywords: ['tiktok', 'تيك توك', 'ترند', 'ugc', 'spark ads'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 210,
    isFavorite: true
  },
  {
    id: 'ads-plat-055',
    code: '/snap ads',
    titleAr: 'إعلانات سناب شات العمودية السريعة',
    titleEn: 'Snapchat Fast Direct Action Ads',
    descriptionAr: 'يجهز إعلانًا عموديًا سريعًا وحيويًا لمنصة Snapchat مع نداء سحب الشاشة للأعلى.',
    descriptionEn: 'Vertical, action-oriented Snapchat ads designed to drive instant visits and app installs.',
    group: 'ads',
    outputType: 'video',
    adsCategory: 'platforms',
    params: [
      { key: 'business', flag: 'business', isPositional: true, type: 'text', required: true, labelAr: 'المطعم أو المتجر', labelEn: 'Restaurant / Business', hintAr: 'مطعم برجر, تطبيق توصيل', hintEn: 'Burger restaurant, delivery app' },
      resolveParam('duration'),
      resolveParam('goal'),
      { key: 'city', flag: 'city', isPositional: false, type: 'string', required: false, labelAr: 'المدينة', labelEn: 'City', hintAr: 'riyadh, jeddah', hintEn: 'riyadh, jeddah' }
    ],
    example: `/snap ads مطعم برجر --duration=10sec --goal=visits --city=riyadh`,
    qualityRules: [
      'تصميم مريح للعين مع تجنب حواف الشاشة المخصصة لعناصر تحكم سناب شات'
    ],
    keywords: ['snapchat', 'سناب', 'سناب شات', 'مطاعم', 'swipe up'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 160,
    isFavorite: false
  },
  {
    id: 'ads-plat-056',
    code: '/google search ad',
    titleAr: 'إعلانات شبكة البحث (Google Search Ads)',
    titleEn: 'Google Search Responsive Ad (RSA)',
    descriptionAr: 'ينشئ عناوين رئيسية وأوصافًا دقيقة ومحسنة مع الكلمات المفتاحية لإعلانات بحث Google.',
    descriptionEn: 'Generates keyword-rich responsive search ad headlines (15) and descriptions (4) for Google Ads.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'platforms',
    params: [
      { key: 'service', flag: 'service', isPositional: true, type: 'text', required: true, labelAr: 'الخدمة أو الشركة', labelEn: 'Service', hintAr: 'شركة مكافحة حشرات, محامي عقارات', hintEn: 'Pest control, real estate lawyer' },
      resolveParam('location'),
      resolveParam('goal'),
      { key: 'keywords', flag: 'keywords', isPositional: false, type: 'string', required: false, labelAr: 'الكلمات المفتاحية', labelEn: 'Keywords', hintAr: 'مكافحة حشرات, رش مبيدات', hintEn: 'Pest control, exterminator' }
    ],
    example: `/google search ad شركة مكافحة حشرات --location=جدة --goal=phone-calls --keywords=مكافحة حشرات`,
    qualityRules: [
      'تضمين الكلمة المفتاحية في العنوان مع حد أقصى 30 حرفًا للعنوان و90 حرفًا للوصف'
    ],
    keywords: ['google ads', 'بحث جوجل', 'google search', 'كلمات مفتاحية', 'rsa'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 195,
    isFavorite: true
  },
  {
    id: 'ads-plat-057',
    code: '/google display ad',
    titleAr: 'إعلانات الشبكة الإعلانية (Google Display)',
    titleEn: 'Responsive Google Display Ads',
    descriptionAr: 'يجهز عناصر إعلان Display المتجاوب: عناوين قصيرة وطويلة، أوصاف، وتوجيهات بصرية.',
    descriptionEn: 'Prepares assets for responsive display ads: short/long headlines, descriptions, and imagery.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'platforms',
    params: [
      { key: 'business', flag: 'business', isPositional: true, type: 'text', required: true, labelAr: 'النشاط التجاري', labelEn: 'Business', hintAr: 'متجر أثاث منزلي, منصة حجوزات', hintEn: 'Furniture store, booking platform' },
      resolveParam('goal'),
      resolveParam('format'),
      resolveParam('cta')
    ],
    example: `/google display ad متجر أثاث --goal=website-visits --format=responsive --cta=shop-now`,
    qualityRules: [
      'توفير نسخ متعددة تتناسب تلقائيًا مع كافة أحجام الشاشات والمواقع الشريكة'
    ],
    keywords: ['google display', 'شبكة العرض', 'display ad', 'متجاوب'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 110,
    isFavorite: false
  },
  {
    id: 'ads-plat-058',
    code: '/youtube ads',
    titleAr: 'إعلانات يوتيوب القصيرة وغير القابلة للتخطي',
    titleEn: 'YouTube Bumper & In-Stream Video Ads',
    descriptionAr: 'يكتب سكربت إعلان YouTube قصير مع هوك مبكر قبل زر التخطي (Skip) ودعوة حاسمة للإجراء.',
    descriptionEn: 'Scripts 6s Bumper and 15s In-Stream YouTube ads designed to hook before the skip button.',
    group: 'ads',
    outputType: 'video',
    adsCategory: 'platforms',
    params: [
      { key: 'course', flag: 'course', isPositional: true, type: 'text', required: true, labelAr: 'الدورة أو الخدمة', labelEn: 'Offer', hintAr: 'دورة لغة إنجليزية, برنامج تدريبي', hintEn: 'English course, training program' },
      resolveParam('duration'),
      resolveParam('goal'),
      resolveParam('style')
    ],
    example: `/youtube ads دورة لغة إنجليزية --duration=15sec --goal=registrations --style=direct`,
    qualityRules: [
      'تقديم القيمة والعلامة التجارية في أول 5 ثوانٍ قبل ظهور زر Skip Ad'
    ],
    keywords: ['youtube', 'يوتيوب', 'youtube ads', 'in-stream', 'bumper'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 135,
    isFavorite: false
  },
  {
    id: 'ads-plat-059',
    code: '/linkedin ads',
    titleAr: 'إعلانات لينكد إن المهنية (B2B LinkedIn)',
    titleEn: 'LinkedIn B2B Sponsored Content Ad',
    descriptionAr: 'ينشئ إعلانًا مهنيًا عالي المصداقية مناسبًا لجمهور الأعمال وصناع القرار في الشركات.',
    descriptionEn: 'Writes professional B2B ads targeting executives and decision-makers on LinkedIn.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'platforms',
    params: [
      { key: 'software', flag: 'software', isPositional: true, type: 'text', required: true, labelAr: 'البرنامج أو الخدمة المهنية', labelEn: 'Software / B2B', hintAr: 'برنامج محاسبة للشركات, حلول سحابية', hintEn: 'Accounting software, cloud solutions' },
      resolveParam('audience'),
      resolveParam('goal'),
      resolveParam('tone')
    ],
    example: `/linkedin ads برنامج محاسبة للشركات --audience=finance-managers --goal=demo-bookings --tone=professional`,
    qualityRules: [
      'التركيز على خفض التكاليف، زيادة الكفاءة، وطلب جلسة تجريبية (Book Demo)'
    ],
    keywords: ['linkedin', 'لينكد إن', 'b2b', 'شركات', 'demo'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 145,
    isFavorite: false
  },
  {
    id: 'ads-plat-060',
    code: '/whatsapp ad',
    titleAr: 'إعلان النقر إلى محادثة واتساب (Click to WhatsApp)',
    titleEn: 'Click-to-WhatsApp Direct Chat Ad',
    descriptionAr: 'يكتب رسالة إعلان قصيرة تقود العميل مباشرة إلى فتح محادثة تفاعلية فورية عبر WhatsApp.',
    descriptionEn: 'Generates copy and greeting templates optimized for Click-to-WhatsApp ad campaigns.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'platforms',
    params: [
      { key: 'business', flag: 'business', isPositional: true, type: 'text', required: true, labelAr: 'النشاط', labelEn: 'Business', hintAr: 'صالون نسائي, صيانة أجهزة', hintEn: 'Women salon, device repair' },
      resolveParam('goal'),
      resolveParam('offer'),
      resolveParam('language')
    ],
    example: `/whatsapp ad صالون نسائي --goal=booking --offer=خصم_لأول_زيارة --language=ar`,
    qualityRules: [
      'تجهيز نص رسالة ترحيبية جاهزة يرسلها العميل بضغطة واحدة'
    ],
    keywords: ['whatsapp', 'واتساب', 'محادثة', 'click to whatsapp', 'حجز سريع'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 170,
    isFavorite: true
  }
];
