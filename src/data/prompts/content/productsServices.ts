import { CommandPrompt } from '../../../types/prompt';
import { CONTENT_COMMON_PARAMS, LAUNCH_CONTENT_RULES, SAFETY_QUALITY_RULES } from './constants';

export const PRODUCTS_SERVICES_PROMPTS: CommandPrompt[] = [
  {
    id: 'cnt-prod-051',
    code: '/product launch post',
    titleAr: 'منشور إطلاق منتج جديد',
    titleEn: 'New Product Launch Post',
    descriptionAr: 'يكتب منشور إطلاق مميزًا لمنتج جديد يبرز قيمته المضافة وحل المشكلة مع حافز أو رابط للطلب المسبق أو الشراء.',
    descriptionEn: 'Writes a buzz-generating product launch post focusing on unique value, problem solved, and instant order CTA.',
    group: 'content',
    contentCategory: 'products_services',
    outputType: 'text',
    outputBadges: ['إطلاق منتج', 'تسويقي'],
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'اسم ووصف المنتج الجديد', labelEn: 'New product', hintAr: 'عطر شتوي جديد برائحة الفانيليا والعود, جهاز ترطيب...', hintEn: 'New winter oud perfume, ultrasonic humidifier...' },
      CONTENT_COMMON_PARAMS.platform,
      { key: 'offer', flag: 'offer', isPositional: false, type: 'string', required: false, labelAr: 'عرض الإطلاق', labelEn: 'Launch offer', hintAr: 'خصم 15% لأول 100 طلب, شحن مجاني...', hintEn: '15% off first 100 orders, free shipping...' },
      CONTENT_COMMON_PARAMS.cta,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/product launch post عطر شتوي جديد برائحة الفانيليا والعود --platform=instagram --offer=خصم 15% --cta=shop-now --language=ar',
    qualityRules: [...LAUNCH_CONTENT_RULES, ...SAFETY_QUALITY_RULES],
    keywords: ['إطلاق منتج', 'product launch post', 'منتج جديد', 'عروض إطلاق', 'تدشين'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 350,
    isFavorite: true
  },
  {
    id: 'cnt-prod-052',
    code: '/product description',
    titleAr: 'وصف منتج بيعي مقنع وجذاب',
    titleEn: 'Persuasive Product Description',
    descriptionAr: 'يكتب وصفًا تسويقيًا جذابًا لصفحة المنتج يوازن بين المواصفات الفنية والفوائد العاطفية الملموسة للمشتري.',
    descriptionEn: 'Crafts compelling ecommerce product descriptions balancing technical specifications with emotional benefits.',
    group: 'content',
    contentCategory: 'products_services',
    outputType: 'text',
    outputBadges: ['وصف منتج', 'متجر إلكتروني'],
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج ومواصفاته', labelEn: 'Product specs', hintAr: 'ساعة يد كلاسيكية مقاومة للماء, حقيبة ظهر جلدية...', hintEn: 'Classic waterproof watch, leather backpack...' },
      CONTENT_COMMON_PARAMS.audience,
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.length,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/product description ساعة يد كلاسيكية مقاومة للماء --audience=men --tone=luxury --length=medium --language=ar',
    qualityRules: [
      'ذكر الخامات والأبعاد بدقة وفق المعطيات الحقيقية',
      'التركيز على كيفية تحسين المنتج لحياة أو مظهر المستخدم',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['وصف منتج', 'product description', 'متجر إلكتروني', 'وصف بيعي'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 370,
    isFavorite: true
  },
  {
    id: 'cnt-prod-053',
    code: '/service intro',
    titleAr: 'تعريف شامل بخدمة جديدة أو قائمة',
    titleEn: 'Comprehensive Service Introduction',
    descriptionAr: 'يقدم خدمة تجارية أو مهنية بوضوح، موضحًا لمن صممت الخدمة، ماذا تشمل بالتفصيل، وكيف تبدأ التجربة.',
    descriptionEn: 'Introduces a business or professional service outlining target clients, scope of deliverables, and onboarding steps.',
    group: 'content',
    contentCategory: 'products_services',
    outputType: 'text',
    outputBadges: ['تعريف خدمة', 'تسويقي'],
    params: [
      { key: 'service', flag: 'service', isPositional: true, type: 'text', required: true, labelAr: 'اسم ونوع الخدمة', labelEn: 'Service name', hintAr: 'خدمة التدريب الشخصي الرياضي, إدارة الحملات الإعلانية...', hintEn: 'Personal training, ad campaign management...' },
      CONTENT_COMMON_PARAMS.audience,
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.cta,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/service intro خدمة التدريب الشخصي الرياضي --audience=busy-professionals --tone=energetic --cta=book-consultation --language=ar',
    qualityRules: [
      'تحديد المستفيد بدقة والنتائج المتوقعة بواقعية',
      'توضيح خطوات حجز الخدمة وتنفيذها',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['تعريف خدمة', 'service intro', 'خدمات أعمال', 'تسويق خدمات'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 280,
    isFavorite: false
  },
  {
    id: 'cnt-prod-054',
    code: '/feature highlight',
    titleAr: 'تسليط الضوء على ميزة حصرية (Feature Spotlight)',
    titleEn: 'Product Feature Spotlight Copy',
    descriptionAr: 'يركز على ميزة واحدة فريدة في المنتج أو الخدمة ويشرح بعمق كيف توفر وقت العميل أو جهده أو ماله.',
    descriptionEn: 'Spotlights a single killer feature, unpacking exactly how it saves customer time, money, or headache.',
    group: 'content',
    contentCategory: 'products_services',
    outputType: 'text',
    outputBadges: ['ميزة تنافسية', 'تسويقي'],
    params: [
      { key: 'feature', flag: 'feature', isPositional: true, type: 'text', required: true, labelAr: 'الميزة المحددة', labelEn: 'Specific feature', hintAr: 'الشحن السريع خلال 20 دقيقة, ميزة الدفع بعد الاستلام...', hintEn: '20-min fast charging, cash on delivery...' },
      { key: 'product', flag: 'product', isPositional: false, type: 'string', required: false, labelAr: 'اسم المنتج', labelEn: 'Product', hintAr: 'سماعات بلوتوث, متجر ملابس...', hintEn: 'Bluetooth earbuds, apparel store...' },
      CONTENT_COMMON_PARAMS.platform,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/feature highlight الشحن السريع خلال 20 دقيقة --product=سماعات بلوتوث --platform=instagram --language=ar',
    qualityRules: [
      'تحويل الميزة التقنية (Feature) إلى منفعة ملموسة يشعر بها العميل (Benefit)',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['ميزة تنافسية', 'feature highlight', 'مزايا المنتج', 'تسويق الميزات'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 230,
    isFavorite: false
  },
  {
    id: 'cnt-prod-055',
    code: '/offer announcement',
    titleAr: 'إعلان عرض ترويجي أو تخفيض محدود',
    titleEn: 'Limited-Time Promotional Offer',
    descriptionAr: 'يكتب إعلان عرض ترويجي قوي يخلق شعورًا بالفرصة والاستعجال الأخلاقي (Urgency) دون إزعاج أو ابتذال.',
    descriptionEn: 'Writes exciting limited-time offer announcements creating urgency and clear redemption directions.',
    group: 'content',
    contentCategory: 'products_services',
    outputType: 'text',
    outputBadges: ['عرض ترويجي', 'خصومات'],
    params: [
      { key: 'offer', flag: 'offer', isPositional: true, type: 'text', required: true, labelAr: 'تفاصيل العرض الترويجي', labelEn: 'Offer details', hintAr: 'اشترِ واحدة واحصل على الثانية مجانًا, خصم 30%...', hintEn: 'Buy 1 Get 1 Free, 30% weekend off...' },
      { key: 'deadline', flag: 'deadline', isPositional: false, type: 'string', required: false, labelAr: 'موعد انتهاء العرض', labelEn: 'Deadline', hintAr: 'ينتهي منتصف ليل الأحد, حتى نفاد الكمية...', hintEn: 'Ends Sunday midnight, while supplies last...' },
      CONTENT_COMMON_PARAMS.platform,
      CONTENT_COMMON_PARAMS.cta,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/offer announcement اشترِ واحدة واحصل على الثانية مجانًا --deadline=weekend --platform=instagram,whatsapp --cta=order-now --language=ar',
    qualityRules: [
      'ذكر الشروط والأحكام وموعد الانتهاء بوضوح وتجنب الخداع في الأسعار',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['عرض ترويجي', 'offer announcement', 'تخفيضات', 'خصم خاص', 'عروض محدودة'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 310,
    isFavorite: true
  },
  {
    id: 'cnt-prod-056',
    code: '/product benefit copy',
    titleAr: 'صياغة المزايا والفوائد (Features to Benefits)',
    titleEn: 'Features-to-Benefits Value Copy',
    descriptionAr: 'يحول قائمة مواصفات المنتج الجافة إلى نقاط فوائد جذابة تشرح ما الذي سيتغير في يوم العميل ومزاجه.',
    descriptionEn: 'Transforms technical product specs into high-resonance lifestyle benefits that answer "what is in it for me?".',
    group: 'content',
    contentCategory: 'products_services',
    outputType: 'text',
    outputBadges: ['فوائد المنتج', 'إقناع بيعي'],
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'اسم المنتج ومواصفاته', labelEn: 'Product specs', hintAr: 'مرتبة سرير طبية مع طبقة جل مبرد, كرسي مكتب مريح...', hintEn: 'Orthopedic cooling gel mattress, ergonomic chair...' },
      CONTENT_COMMON_PARAMS.audience,
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/product benefit copy مرتبة سرير طبية مع طبقة جل مبرد --audience=back-pain-sufferers --tone=comforting --language=ar',
    qualityRules: [
      'الربط المباشر بين الميزة والأثر الحقيقي على راحة العميل',
      'تجنب الادعاءات العلاجية الطبية الخارقة غير المرخصة',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['فوائد المنتج', 'feature to benefit', 'إقناع', 'نسخة بيعية'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 220,
    isFavorite: false
  },
  {
    id: 'cnt-prod-057',
    code: '/pricing plan copy',
    titleAr: 'نصوص باقات الأسعار والاشتراكات (Pricing Table)',
    titleEn: 'Pricing Plans & Tier Comparison Copy',
    descriptionAr: 'يكتب نصوص جدول باقات الأسعار (أساسي، احترافي، مؤسسي) مع تحديد الفئة المستهدفة وشارة الباقة الأكثر شعبية.',
    descriptionEn: 'Writes clear pricing table copy for tiers with recommended tags, feature bullet points, and plan summaries.',
    group: 'content',
    contentCategory: 'products_services',
    outputType: 'text',
    outputBadges: ['باقات الأسعار', 'جدول أسعار'],
    params: [
      { key: 'service', flag: 'service', isPositional: true, type: 'text', required: true, labelAr: 'الخدمة أو البرمجية', labelEn: 'Service / Software', hintAr: 'منصة تسويق إلكتروني, اشتراكات نادي رياضي...', hintEn: 'Marketing SaaS, gym membership tiers...' },
      { key: 'tiers', flag: 'tiers', isPositional: false, type: 'number', required: false, defaultValue: 3, labelAr: 'عدد الباقات', labelEn: 'Tier count', hintAr: '2, 3, 4...', hintEn: '2, 3, 4...' },
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/pricing plan copy منصة تسويق إلكتروني --tiers=3 --language=ar',
    qualityRules: [
      'توضيح الفارق الجوهري بين الباقات لمساعدة العميل على اتخاذ قرار الشراء',
      'شفافية التكاليف وعدم إخفاء رسوم إضافية',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['أسعار', 'باقات', 'pricing plan', 'اشتراكات', 'جدول أسعار'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 240,
    isFavorite: false
  },
  {
    id: 'cnt-prod-058',
    code: '/guarantee statement',
    titleAr: 'صياغة الضمان وسياسة الإرجاع لكسر التردد',
    titleEn: 'Risk-Reversal & Guarantee Statements',
    descriptionAr: 'يصيغ بنود وضمانات قوية تزيل مخاوف العميل من المخاطرة (ضمان ذهبي، استرجاع خلال 14 يومًا، ضمان استبدال).',
    descriptionEn: 'Formulates risk-reversal guarantee statements that eliminate buyer hesitation and instill immediate trust.',
    group: 'content',
    contentCategory: 'products_services',
    outputType: 'text',
    outputBadges: ['ضمان', 'بناء ثقة'],
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج أو الخدمة', labelEn: 'Product / Service', hintAr: 'أجهزة إلكترونية, دورة تدريبية, برنامج غذائي...', hintEn: 'Consumer electronics, online masterclass...' },
      { key: 'policy', flag: 'policy', isPositional: false, type: 'string', required: false, defaultValue: '14-day-money-back', labelAr: 'نوع الضمان', labelEn: 'Guarantee type', hintAr: '14-day, 30-day, replacement...', hintEn: '14-day, 30-day, replacement...' },
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/guarantee statement أجهزة إلكترونية --policy=30-day-replacement --language=ar',
    qualityRules: [
      'الصياغة الصادقة والقابلة للتطبيق قانونيًا وواقعيًا',
      'تجنب الشروط المبهمة أو التعجيزية المكتوبة بخط خفي',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['ضمان', 'ضمان ذهبي', 'guarantee', 'استرجاع الأموال', 'كسر التردد'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 195,
    isFavorite: false
  },
  {
    id: 'cnt-prod-059',
    code: '/product comparison copy',
    titleAr: 'مقارنة تسويقية تبرز ميزات منتجك',
    titleEn: 'Product Advantage Comparison Copy',
    descriptionAr: 'يصيغ مقارنة تجارية عادلة ومقنعة تبين لماذا يختار العميل منتجك أو خدمتك مقارنة بالخيارات التقليدية الأخرى.',
    descriptionEn: 'Writes tasteful comparative marketing copy showing why customers choose your solution over standard alternatives.',
    group: 'content',
    contentCategory: 'products_services',
    outputType: 'text',
    outputBadges: ['مقارنة تسويقية', 'إقناع'],
    params: [
      { key: 'our_product', flag: 'our_product', isPositional: true, type: 'text', required: true, labelAr: 'منتجك وميزاته', labelEn: 'Our product', hintAr: 'تطبيق تنظيم المواعيد التلقائي مقابل الجدول الورقي...', hintEn: 'Automated booking software vs paper notebook...' },
      CONTENT_COMMON_PARAMS.audience,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/product comparison copy تطبيق تنظيم المواعيد التلقائي مقابل الجدول الورقي --audience=clinic-managers --language=ar',
    qualityRules: [
      'تجنب التشهير بالمنافسين أو ذكر أسماء تجارية ببيانات مغلوطة',
      'التركيز على تفوق الحل في توفير الجهد والوقت وتقليل الأخطاء',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['مقارنة تسويقية', 'product comparison', 'لماذا نحن', 'ميزة تنافسية'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 215,
    isFavorite: false
  },
  {
    id: 'cnt-prod-060',
    code: '/service menu copy',
    titleAr: 'قائمة خدمات وأسعار منسقة (Menu / Catalog)',
    titleEn: 'Structured Service Menu & Catalog Copy',
    descriptionAr: 'ينسق كتالوج أو قائمة خدمات لصالون، مقهى، عيادة، أو ورشة عمل مع وصف مختصر لكل خدمة وسعر استرشادي.',
    descriptionEn: 'Designs clear, formatted service menu descriptions for salons, clinics, cafes, or workshops with guide pricing.',
    group: 'content',
    contentCategory: 'products_services',
    outputType: 'text',
    outputBadges: ['قائمة خدمات', 'منيو'],
    params: [
      { key: 'business', flag: 'business', isPositional: true, type: 'text', required: true, labelAr: 'نوع النشاط والخدمات', labelEn: 'Business type', hintAr: 'صالون عناية بالأظافر, مركز صيانة سيارات...', hintEn: 'Nail salon, auto maintenance center...' },
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/service menu copy صالون عناية بالأظافر --tone=luxury --language=ar',
    qualityRules: [
      'وصف كل خدمة في جملة واحدة مكثفة توضح النتيجة والمدة التقريبية',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['قائمة خدمات', 'منيو', 'service menu', 'كتالوج', 'أسعار الخدمات'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 210,
    isFavorite: false
  }
];
