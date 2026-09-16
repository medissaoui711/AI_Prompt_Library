import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const PRODUCTS_OFFERS_PROMPTS: CommandPrompt[] = [
  {
    id: 'ads-off-041',
    code: '/sale ad',
    titleAr: 'إعلان عروض وتخفيضات تجارية',
    titleEn: 'Promotional Sale & Discount Ad',
    descriptionAr: 'ينشئ إعلان عرض أو تخفيض تجاري قوي ومناسب للنص أو الصورة مع إبراز القيمة العالية.',
    descriptionEn: 'Generates promotional discount and seasonal sale ad concepts with urgency hooks.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'products_offers',
    params: [
      { key: 'offer', flag: 'offer', isPositional: true, type: 'text', required: true, labelAr: 'العرض ونسبة الخصم', labelEn: 'Sale Offer', hintAr: 'خصم 40% على الأحذية الرياضية', hintEn: '40% off athletic shoes' },
      resolveParam('platform'),
      resolveParam('format'),
      { key: 'deadline', flag: 'deadline', isPositional: false, type: 'string', required: false, labelAr: 'المدة الزمنية', labelEn: 'Deadline', hintAr: '48hours, 3days', hintEn: '48hours, 3days' }
    ],
    example: `/sale ad خصم 40% على الأحذية --platform=instagram --format=image --deadline=48hours`,
    qualityRules: [
      'توضيح السعر قبل وبعد الخصم وتأكيد نفاد الكمية لخلق الحافز الفوري'
    ],
    keywords: ['sale', 'تخفيضات', 'خصم', 'عروض', 'توفير', 'sale ad'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 180,
    isFavorite: true
  },
  {
    id: 'ads-off-042',
    code: '/new product ad',
    titleAr: 'إعلان وصول أو إطلاق منتج جديد',
    titleEn: 'New Product Arrival & Launch Ad',
    descriptionAr: 'ينشئ إعلان إطلاق منتج جديد يبرز مميزاته الحصرية وتجربته الفريدة.',
    descriptionEn: 'Showcases newly arrived products with exclusivity hooks and feature highlights.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'products_offers',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج الجديد', labelEn: 'New Product', hintAr: 'مجموعة عطور صيفية, جهاز جديد', hintEn: 'Summer perfume line, new gadget' },
      resolveParam('platform'),
      resolveParam('format'),
      resolveParam('goal')
    ],
    example: `/new product ad مجموعة عطور صيفية --platform=instagram --format=reel --goal=awareness`,
    qualityRules: [
      'التركيز على حداثة الابتكار وحصرية التوفر لأول المشترين'
    ],
    keywords: ['جديد', 'new product', 'وصل حديثا', 'إطلاق منتج'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 135,
    isFavorite: false
  },
  {
    id: 'ads-off-043',
    code: '/limited edition ad',
    titleAr: 'إعلان إصدار محدود (Limited Edition)',
    titleEn: 'Limited Edition & Exclusive Release Ad',
    descriptionAr: 'يكتب أو يخطط لإعلان إصدار خاص أو كمية محدودة لتعزيز الشعور بالندرة والتميز.',
    descriptionEn: 'Crafts scarcity-driven campaigns for limited-batch and exclusive collector items.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'products_offers',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج الخاص', labelEn: 'Exclusive Item', hintAr: 'ساعة إصدار محدود 100 قطعة فقط', hintEn: 'Limited watch 100 pieces only' },
      resolveParam('platform'),
      resolveParam('format'),
      resolveParam('tone')
    ],
    example: `/limited edition ad ساعة إصدار محدود --platform=instagram --format=image --tone=exclusive`,
    qualityRules: [
      'ذكر رقم الإصدار أو عدد القطع المتوفرة بدقة'
    ],
    keywords: ['limited edition', 'إصدار محدود', 'حصري', 'ندرة', 'فاخر'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 110,
    isFavorite: false
  },
  {
    id: 'ads-off-044',
    code: '/bundle ad',
    titleAr: 'إعلان باقة مجمعة (Bundle Offer)',
    titleEn: 'Product Bundle & Value Pack Ad',
    descriptionAr: 'ينشئ إعلانًا لباقة تضم أكثر من منتج أو خدمة مع إبراز التوفير الكلي والقيمة المضاعفة.',
    descriptionEn: 'Promotes bundled products emphasizing total savings and complementary benefits.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'products_offers',
    params: [
      { key: 'bundle', flag: 'bundle', isPositional: true, type: 'text', required: true, labelAr: 'اسم الباقة ومحتواها', labelEn: 'Bundle Name', hintAr: 'باقة عناية بالبشرة متكاملة', hintEn: 'Complete skincare bundle' },
      { key: 'products', flag: 'products', isPositional: false, type: 'string', required: false, labelAr: 'محتويات الباقة', labelEn: 'Items', hintAr: 'cleanser,serum,moisturizer', hintEn: 'cleanser,serum,moisturizer' },
      resolveParam('platform'),
      resolveParam('goal')
    ],
    example: `/bundle ad باقة عناية بالبشرة --products=cleanser,serum,moisturizer --platform=facebook --goal=sales`,
    qualityRules: [
      'مقارنة سعر الشراء الفردي بسعر الباقة لإظهار حجم التوفير بوضوح'
    ],
    keywords: ['bundle', 'باقة', 'بكج', 'توفير', 'مجموعة'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 125,
    isFavorite: false
  },
  {
    id: 'ads-off-045',
    code: '/free trial ad',
    titleAr: 'إعلان تجربة مجانية بدون مخاطرة',
    titleEn: 'Risk-Free Free Trial Ad',
    descriptionAr: 'يكتب إعلان تجربة مجانية لتطبيق أو خدمة اشتراك يزيل كل تردد ويسهل التسجيل الفوري.',
    descriptionEn: 'Writes zero-friction free trial ads with risk reversal and immediate access.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'products_offers',
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'text', required: true, labelAr: 'التطبيق أو الخدمة', labelEn: 'App / Service', hintAr: 'تطبيق إدارة مصروفات, منصة تعليمية', hintEn: 'Expense manager, learning platform' },
      { key: 'trial', flag: 'trial', isPositional: false, type: 'string', required: false, labelAr: 'فترة التجربة', labelEn: 'Trial Window', hintAr: '7days, 14days, 30days', hintEn: '7days, 14days, 30days' },
      resolveParam('platform'),
      resolveParam('cta')
    ],
    example: `/free trial ad تطبيق إدارة مصروفات --trial=7days --platform=instagram --cta=start-free`,
    qualityRules: [
      'التأكيد على عدم الحاجة لبطاقة بنكية أو سهولة الإلغاء بضغطة زر'
    ],
    keywords: ['تجربة مجانية', 'free trial', 'تطبيق', 'اشتراك', 'بدون بطاقة'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 95,
    isFavorite: false
  },
  {
    id: 'ads-off-046',
    code: '/seasonal ad',
    titleAr: 'إعلان المواسم والمناسبات (رمضان، الأعياد)',
    titleEn: 'Seasonal & Holiday Occasion Ad',
    descriptionAr: 'ينشئ إعلانًا مرتبطًا بموسم أو مناسبة دينية/وطنية مع مشاعر دافئة ولمسة احتفالية.',
    descriptionEn: 'Connects products with festive seasons, holidays, and cultural celebrations.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'products_offers',
    params: [
      { key: 'topic', flag: 'topic', isPositional: true, type: 'text', required: true, labelAr: 'الموضوع والعرض', labelEn: 'Topic', hintAr: 'هدايا رمضان, عروض العيد, اليوم الوطني', hintEn: 'Ramadan gifts, Eid offers' },
      { key: 'occasion', flag: 'occasion', isPositional: false, type: 'string', required: false, labelAr: 'نوع المناسبة', labelEn: 'Occasion', hintAr: 'ramadan, eid, national-day', hintEn: 'ramadan, eid, national-day' },
      resolveParam('platform'),
      resolveParam('format')
    ],
    example: `/seasonal ad هدايا رمضان --occasion=ramadan --platform=instagram --format=carousel`,
    qualityRules: [
      'احترام الطابع الثقافي وتوجيه رسائل التهنئة ومشاركة اللحظات السعيدة'
    ],
    keywords: ['رمضان', 'عيدي', 'موسم', 'seasonal ad', 'هدايا', 'مناسبات'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 140,
    isFavorite: true
  },
  {
    id: 'ads-off-047',
    code: '/flash sale ad',
    titleAr: 'إعلان البيع الخاطف السريع (Flash Sale)',
    titleEn: 'Flash Sale (24-Hour) Blitz Ad',
    descriptionAr: 'ينشئ إعلان بيع سريع بوقت قصير جدًا ورسالة حاسمة ومباشرة تدفع للشراء اللحظي.',
    descriptionEn: 'Creates high-energy flash sale announcements with tight countdown clocks.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'products_offers',
    params: [
      { key: 'offer', flag: 'offer', isPositional: true, type: 'text', required: true, labelAr: 'العرض السريع', labelEn: 'Flash Offer', hintAr: 'خصم 50% على الحقائب لمدة 24 ساعة', hintEn: '50% off bags for 24 hours' },
      { key: 'duration', flag: 'duration', isPositional: false, type: 'string', required: false, labelAr: 'المدة المتبقية', labelEn: 'Time Remaining', hintAr: '24hours, 12hours, tonight', hintEn: '24hours, 12hours, tonight' },
      resolveParam('platform'),
      resolveParam('format')
    ],
    example: `/flash sale ad خصم 50% على الحقائب --duration=24hours --platform=instagram-story --format=video`,
    qualityRules: [
      'استخدام عناصر بصرية للعد التنازلي وكلمات تحفيزية واضحة'
    ],
    keywords: ['flash sale', 'بيع خاطف', '24 ساعة', 'تخفيض سريع'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 130,
    isFavorite: false
  },
  {
    id: 'ads-off-048',
    code: '/gift ad',
    titleAr: 'إعلان فكرة الهدايا والمفاجآت',
    titleEn: 'Gift Idea & Anniversary Special Ad',
    descriptionAr: 'يجهز إعلانًا يربط المنتج بفكرة الهدية المثالية التي تُعبر عن المشاعر والاهتمام.',
    descriptionEn: 'Frames products as heartfelt, thoughtful gifts for loved ones and milestones.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'products_offers',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج', labelEn: 'Product', hintAr: 'عطر فاخر, طقم إكسسوارات', hintEn: 'Luxury perfume, accessories set' },
      { key: 'occasion', flag: 'occasion', isPositional: false, type: 'string', required: false, labelAr: 'المناسبة', labelEn: 'Occasion', hintAr: 'anniversary, birthday, graduation', hintEn: 'anniversary, birthday, graduation' },
      resolveParam('audience'),
      resolveParam('platform')
    ],
    example: `/gift ad عطر فاخر --occasion=anniversary --audience=men-buying-for-women --platform=instagram`,
    qualityRules: [
      'التأكيد على خدمة التغليف المجاني الفاخر وبطاقات الإهداء المخصصة'
    ],
    keywords: ['هدية', 'gifts', 'تغليف', 'مناسبة', 'ذكرى سنوية'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 105,
    isFavorite: false
  },
  {
    id: 'ads-off-049',
    code: '/subscription ad',
    titleAr: 'إعلان الاشتراكات الدورية والنوادي',
    titleEn: 'Recurring Subscription & Membership Ad',
    descriptionAr: 'يكتب إعلان اشتراك شهري أو سنوي لخدمة أو نادي رياضي يبرز الاستمرارية والراحة.',
    descriptionEn: 'Writes subscription and membership ads focusing on consistency and recurring perks.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'products_offers',
    params: [
      { key: 'service', flag: 'service', isPositional: true, type: 'text', required: true, labelAr: 'الاشتراك أو النادي', labelEn: 'Subscription / Club', hintAr: 'نادي رياضي نسائي, اشتراك قهوة أسبوعي', hintEn: 'Women fitness gym, coffee sub' },
      resolveParam('offer'),
      resolveParam('platform'),
      resolveParam('goal')
    ],
    example: `/subscription ad نادي رياضي نسائي --offer=first-month-free --platform=facebook --goal=signups`,
    qualityRules: [
      'توضيح القيمة الشهرية مقابل الفوائد المتجددة وسهولة الإدارة'
    ],
    keywords: ['اشتراك', 'membership', 'نادي', 'subscription', 'دوري'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 88,
    isFavorite: false
  },
  {
    id: 'ads-off-050',
    code: '/local business ad',
    titleAr: 'إعلان نشاط محلي جغرافي (Local Geo Ad)',
    titleEn: 'Geo-Targeted Local Store Ad',
    descriptionAr: 'ينشئ إعلانًا لنشاط تجاري محلي يعتمد على الموقع والمدينة لتشجيع الزيارة المباشرة أو الحجز.',
    descriptionEn: 'Generates neighborhood and city-specific ads tailored for foot traffic and local bookings.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'products_offers',
    params: [
      { key: 'business', flag: 'business', isPositional: true, type: 'text', required: true, labelAr: 'النشاط المحلي', labelEn: 'Local Business', hintAr: 'مغسلة سيارات, صالون حلاقة, كافيه', hintEn: 'Car wash, barber, local cafe' },
      resolveParam('location'),
      resolveParam('goal'),
      resolveParam('platform')
    ],
    example: `/local business ad مغسلة سيارات --location=جدة --goal=bookings --platform=instagram`,
    qualityRules: [
      'ذكر اسم الحي أو المعلم الشهير القريب وساعات العمل مع رابط الموقع في خرائط Google'
    ],
    keywords: ['محلي', 'local business', 'مدينة', 'حي', 'زيارة', 'حجز'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 150,
    isFavorite: true
  }
];
