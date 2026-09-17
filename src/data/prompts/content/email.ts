import { CommandPrompt } from '../../../types/prompt';
import { CONTENT_COMMON_PARAMS, EMAIL_CONTENT_RULES, SAFETY_QUALITY_RULES } from './constants';

export const EMAIL_PROMPTS: CommandPrompt[] = [
  {
    id: 'cnt-eml-081',
    code: '/welcome email',
    titleAr: 'رسالة الترحيب بالمشتركين الجدد (Welcome Email)',
    titleEn: 'New Subscriber Welcome Email',
    descriptionAr: 'يكتب رسالة بريد إلكتروني ترحيبية دافئة تحدد ما الذي يمكن للمشترك توقعه وتمنحه هدية أو خصم الانضمام.',
    descriptionEn: 'Writes warm, engaging welcome emails setting newsletter expectations and delivering instant value or discounts.',
    group: 'content',
    contentCategory: 'email',
    outputType: 'text',
    outputBadges: ['بريد إلكتروني', 'ترحيب'],
    params: [
      { key: 'brand', flag: 'brand', isPositional: true, type: 'text', required: true, labelAr: 'اسم العلامة والهدية الترحيبية', labelEn: 'Brand & lead magnet', hintAr: 'متجر عطور طبيعية مع كود خصم 10%...', hintEn: 'Natural perfume store with 10% coupon...' },
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.cta,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/welcome email متجر عطور طبيعية --tone=warm --cta=shop-first-order --language=ar',
    qualityRules: [...EMAIL_CONTENT_RULES, ...SAFETY_QUALITY_RULES],
    keywords: ['welcome email', 'بريد ترحيبي', 'رسالة ترحيب', 'نشرة بريدية'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 290,
    isFavorite: true
  },
  {
    id: 'cnt-eml-082',
    code: '/newsletter issue',
    titleAr: 'عدد نشرة بريدية أسبوعية أو شهرية',
    titleEn: 'Curated Weekly/Monthly Newsletter Issue',
    descriptionAr: 'يكتب عددًا متكاملًا لنشرة بريدية: عنوان خاطف، فكرة الأسبوع المركزية، روابط مختارة، ورسالة ختامية تفاعلية.',
    descriptionEn: 'Crafts structured newsletter issues with a compelling subject line, core insight, curated reads, and closing question.',
    group: 'content',
    contentCategory: 'email',
    outputType: 'text',
    outputBadges: ['نشرة بريدية', 'محتوى دوري'],
    params: [
      { key: 'topic', flag: 'topic', isPositional: true, type: 'text', required: true, labelAr: 'فكرة العدد الرئيسية', labelEn: 'Issue core theme', hintAr: 'أدوات الذكاء الاصطناعي لكتابة المحتوى, أسرار التركيز العميق...', hintEn: 'AI tools for copywriting, deep focus habits...' },
      CONTENT_COMMON_PARAMS.audience,
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/newsletter issue أدوات الذكاء الاصطناعي لكتابة المحتوى --audience=creators --tone=conversational --language=ar',
    qualityRules: [...EMAIL_CONTENT_RULES, ...SAFETY_QUALITY_RULES],
    keywords: ['نشرة بريدية', 'newsletter', 'بريد دوري', 'إيميل أسبوعي'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 310,
    isFavorite: true
  },
  {
    id: 'cnt-eml-083',
    code: '/promo email',
    titleAr: 'بريد تسويقي لعرض خاص أو تخفيضات',
    titleEn: 'High-Converting Promotional Campaign Email',
    descriptionAr: 'يكتب بريدًا تسويقيًا لعرض موسمي أو تخفيضات مع سطور موضوع (Subject Lines) مقترحة وزر دعوة للشراء.',
    descriptionEn: 'Generates promotional sales emails with high-open subject lines, benefit hooks, and clear CTA buttons.',
    group: 'content',
    contentCategory: 'email',
    outputType: 'text',
    outputBadges: ['بريد تسويقي', 'عروض خاصة'],
    params: [
      { key: 'sale', flag: 'sale', isPositional: true, type: 'text', required: true, labelAr: 'تفاصيل العرض والتخفيض', labelEn: 'Sale offer details', hintAr: 'خصم 30% على تشكيلة الشتاء حتى الجمعة...', hintEn: '30% off winter collection until Friday...' },
      CONTENT_COMMON_PARAMS.cta,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/promo email خصم 30% على تشكيلة الشتاء --cta=shop-sale --language=ar',
    qualityRules: [...EMAIL_CONTENT_RULES, ...SAFETY_QUALITY_RULES],
    keywords: ['promo email', 'بريد تسويقي', 'عروض إيميل', 'حملة بريدية'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 270,
    isFavorite: false
  },
  {
    id: 'cnt-eml-084',
    code: '/abandoned cart email',
    titleAr: 'بريد استعادة السلات المتروكة (Abandoned Cart)',
    titleEn: 'Abandoned Cart Recovery Sequence Email',
    descriptionAr: 'يكتب رسالة ودودة وغير ضاغطة لتذكير المشتري بالمنتجات في سلته مع معالجة الاعتراضات وتقديم المساعدة.',
    descriptionEn: 'Crafts empathetic, non-pushy abandoned cart reminders addressing friction points and offering quick support.',
    group: 'content',
    contentCategory: 'email',
    outputType: 'text',
    outputBadges: ['سلات متروكة', 'تجارة إلكترونية'],
    params: [
      { key: 'store_type', flag: 'store_type', isPositional: true, type: 'text', required: true, labelAr: 'نوع المتجر وطبيعة المنتجات', labelEn: 'Store & product category', hintAr: 'متجر أحذية رياضية, متجر إلكترونيات منزلية...', hintEn: 'Sneaker store, home electronics...' },
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/abandoned cart email متجر أحذية رياضية --tone=friendly-helpful --language=ar',
    qualityRules: [
      'التركيز على المساعدة وحل أي استفسار منع العميل من الإتمام',
      ...EMAIL_CONTENT_RULES,
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['abandoned cart', 'سلات متروكة', 'استعادة سلة', 'إيميل تجارة'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 260,
    isFavorite: false
  },
  {
    id: 'cnt-eml-085',
    code: '/re engagement email',
    titleAr: 'بريد إعادة تنشيط العملاء غير النشطين',
    titleEn: 'Inactive Customer Re-Engagement Email',
    descriptionAr: 'يكتب رسالة دافئة للمشتركين الذين لم يفتحوا الرسائل أو يشتروا منذ فترة ("اشتقنا لك") مع حافز للعودة.',
    descriptionEn: 'Writes warm "we miss you" emails to dormant subscribers with a welcoming incentive to reconnect.',
    group: 'content',
    contentCategory: 'email',
    outputType: 'text',
    outputBadges: ['إعادة تنشيط', 'بريد إلكتروني'],
    params: [
      { key: 'brand', flag: 'brand', isPositional: true, type: 'text', required: true, labelAr: 'اسم العلامة ومجالها', labelEn: 'Brand context', hintAr: 'منصة دورات تعليمية, تطبيق تدريب رياضي...', hintEn: 'Online course platform, fitness app...' },
      { key: 'incentive', flag: 'incentive', isPositional: false, type: 'string', required: false, labelAr: 'الحافز أو الهدية', labelEn: 'Re-activation perk', hintAr: 'رصيد مجاني 20 ريال, درس تدريبي هدية...', hintEn: 'Free $5 credit, bonus masterclass...' },
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/re engagement email منصة دورات تعليمية --incentive=درس تدريبي هدية --language=ar',
    qualityRules: [...EMAIL_CONTENT_RULES, ...SAFETY_QUALITY_RULES],
    keywords: ['re engagement', 'إعادة تنشيط', 'اشتقنا لك', 'عملاء خاملين'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 210,
    isFavorite: false
  },
  {
    id: 'cnt-eml-086',
    code: '/product announcement email',
    titleAr: 'بريد الإعلان عن منتج أو خدمة جديدة لقائمتك',
    titleEn: 'New Product VIP Reveal Email',
    descriptionAr: 'يكتب بريد إعلان رسمي وخاص بالمشتركين يكشف عن منتج جديد ويمنحهم أسبقية الشراء أو خصمًا حصريًا.',
    descriptionEn: 'Writes exclusive subscriber product announcements offering VIP early access or preferential pricing.',
    group: 'content',
    contentCategory: 'email',
    outputType: 'text',
    outputBadges: ['إعلان منتج', 'VIP'],
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج الجديد والمزايا', labelEn: 'Product details', hintAr: 'تشكيلة عطور جديدة محدودة الإصدار...', hintEn: 'Limited-edition perfume line...' },
      CONTENT_COMMON_PARAMS.cta,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/product announcement email تشكيلة عطور جديدة محدودة الإصدار --cta=shop-vip-access --language=ar',
    qualityRules: [...EMAIL_CONTENT_RULES, ...SAFETY_QUALITY_RULES],
    keywords: ['إعلان منتج إيميل', 'كشف منتج', 'vip email', 'نشرة خاصة'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 230,
    isFavorite: false
  },
  {
    id: 'cnt-eml-087',
    code: '/event invitation email',
    titleAr: 'بريد الدعوة لحضور فعالية أو ورشة عمل أو ويبينار',
    titleEn: 'Webinar & Event Invitation Email',
    descriptionAr: 'يكتب بريد دعوة جذابًا لويبينار أو ورشة عمل يوضح المحاور الرئيسية، المتحدثين، والمقاعد المتبقية.',
    descriptionEn: 'Drafts persuasive webinar and workshop invite emails detailing learning outcomes, speakers, and seat reservation.',
    group: 'content',
    contentCategory: 'email',
    outputType: 'text',
    outputBadges: ['دعوة فعالية', 'ويبينار'],
    params: [
      { key: 'event_name', flag: 'event_name', isPositional: true, type: 'text', required: true, labelAr: 'اسم وموضوع الفعالية', labelEn: 'Event theme', hintAr: 'ورشة عمل كتابة المحتوى التسويقي, ويبينار الذكاء الاصطناعي...', hintEn: 'Copywriting masterclass, AI webinar...' },
      { key: 'date', flag: 'date', isPositional: false, type: 'string', required: true, labelAr: 'الموعد والتوقيت', labelEn: 'Date & time', hintAr: 'الثلاثاء 8 مساءً بتوقيت مكة...', hintEn: 'Tuesday 8 PM Mecca time...' },
      CONTENT_COMMON_PARAMS.cta,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/event invitation email ورشة عمل كتابة المحتوى التسويقي --date=الثلاثاء 8 مساءً --cta=register-seat --language=ar',
    qualityRules: [...EMAIL_CONTENT_RULES, ...SAFETY_QUALITY_RULES],
    keywords: ['دعوة فعالية', 'ويبينار', 'ورشة عمل', 'تسجيل حضور', 'event invite'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 200,
    isFavorite: false
  },
  {
    id: 'cnt-eml-088',
    code: '/feedback survey email',
    titleAr: 'بريد طلب التقييم ورأي العميل (Customer Feedback)',
    titleEn: 'Customer Feedback & Survey Request Email',
    descriptionAr: 'يكتب بريدًا لطيفًا ومختصرًا يطلب من العميل دقيقة واحدة لمشاركة رأيه الصادق في تجربته مع الخدمة أو المنتج.',
    descriptionEn: 'Drafts brief, respectful post-purchase survey emails encouraging candid feedback in under 2 minutes.',
    group: 'content',
    contentCategory: 'email',
    outputType: 'text',
    outputBadges: ['استطلاع رأي', 'خدمة عملاء'],
    params: [
      { key: 'purchase', flag: 'purchase', isPositional: true, type: 'text', required: true, labelAr: 'الخدمة أو المنتج الذي جربه العميل', labelEn: 'Purchased service/product', hintAr: 'جلسة تدريبية, طلب عطور وصل حديثًا...', hintEn: 'Coaching session, perfume order...' },
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/feedback survey email طلب عطور وصل حديثًا --tone=polite --language=ar',
    qualityRules: [
      'توضيح أن الاستبيان لن يأخذ سوى 60 ثانية من وقته',
      'إظهار أن رأيه يُحدث فرقًا حقيقيًا في تحسين الخدمة',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['تقييم العميل', 'استبيان', 'feedback survey', 'بريد تقييم', 'رأي العميل'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 190,
    isFavorite: false
  }
];
