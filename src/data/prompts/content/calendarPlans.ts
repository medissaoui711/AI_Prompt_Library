import { CommandPrompt } from '../../../types/prompt';
import { CONTENT_COMMON_PARAMS, SAFETY_QUALITY_RULES } from './constants';

export const CALENDAR_PLANS_PROMPTS: CommandPrompt[] = [
  {
    id: 'cnt-plan-089',
    code: '/content calendar',
    titleAr: 'تقويم وجدول نشر محتوى أسبوعي أو شهري',
    titleEn: 'Structured Social Media Content Calendar',
    descriptionAr: 'يصمم تقويم نشر منظم ومجدول بالتواريخ والأيام، المنصة، الموضوع، نوع المحتوى (صورة/فيديو/نص)، والهدف.',
    descriptionEn: 'Generates structured weekly or monthly editorial calendars detailing dates, platforms, content formats, and goals.',
    group: 'content',
    contentCategory: 'calendar_plans',
    outputType: 'text',
    outputBadges: ['تقويم نشر', 'خطة أسبوعية'],
    params: [
      { key: 'business', flag: 'business', isPositional: true, type: 'text', required: true, labelAr: 'مجال النشاط التجاري', labelEn: 'Business domain', hintAr: 'صالون تجميل وعناية, متجر إلكتروني لمستلزمات القهوة...', hintEn: 'Beauty salon, coffee ecommerce store...' },
      CONTENT_COMMON_PARAMS.platform,
      { key: 'duration', flag: 'duration', isPositional: false, type: 'string', required: false, defaultValue: '2weeks', labelAr: 'مدة التقويم', labelEn: 'Duration', hintAr: '1week, 2weeks, 1month...', hintEn: '1week, 2weeks, 1month...' },
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/content calendar صالون تجميل وعناية --platform=instagram,tiktok --duration=2weeks --language=ar',
    qualityRules: [
      'التوزيع المتوازن بين المحتوى التعليمي والترفيهي والترويجي والتفاعلي',
      'تحديد أفضل أوقات النشر المقترحة حسب طبيعة الجمهور',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['تقويم محتوى', 'content calendar', 'جدول نشر', 'خطة أسبوعية', 'سوشيال ميديا'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 370,
    isFavorite: true
  },
  {
    id: 'cnt-plan-090',
    code: '/content pillars',
    titleAr: 'تحديد ركائز ومحاور المحتوى الأساسية (Content Pillars)',
    titleEn: 'Brand Content Pillars & Ratio Framework',
    descriptionAr: 'يحدد 4-5 محاور رئيسية للمحتوى (تعليم، إلهام، ثقة، ترويج، تفاعل) مع نسب التوزيع وأمثلة تطبيقية لكل محور.',
    descriptionEn: 'Establishes 4-5 core content pillars with optimal percentage mix and practical post concepts for each pillar.',
    group: 'content',
    contentCategory: 'calendar_plans',
    outputType: 'text',
    outputBadges: ['محاور محتوى', 'استراتيجية'],
    params: [
      { key: 'brand', flag: 'brand', isPositional: true, type: 'text', required: true, labelAr: 'العلامة التجارية ونشاطها', labelEn: 'Brand niche', hintAr: 'تطبيق تنظيم لياقة وتغذية, وكالة عقارية...', hintEn: 'Fitness & nutrition app, real estate agency...' },
      CONTENT_COMMON_PARAMS.audience,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/content pillars تطبيق تنظيم لياقة وتغذية --audience=busy-people --language=ar',
    qualityRules: [
      'ضمان أن تخدم المحاور أهداف العلامة واهتمامات الجمهور في آن واحد',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['content pillars', 'محاور المحتوى', 'ركائز المحتوى', 'استراتيجية نشر'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 290,
    isFavorite: false
  },
  {
    id: 'cnt-plan-091',
    code: '/weekly social plan',
    titleAr: 'خطة نشر أسبوعية تفصيلية وجاهزة للتنفيذ',
    titleEn: 'Ready-to-Post 7-Day Social Action Plan',
    descriptionAr: 'يضع خطة عملية لسبعة أيام تشمل: الفكرة لكل يوم، نص المنشور المقترح، صيغة الصورة أو الفيديو، والدعوة للإجراء.',
    descriptionEn: 'Produces an actionable 7-day posting blueprint with ready-to-use captions, visual direction, and exact CTAs.',
    group: 'content',
    contentCategory: 'calendar_plans',
    outputType: 'text',
    outputBadges: ['خطة 7 أيام', 'تنفيذ فوري'],
    params: [
      { key: 'niche', flag: 'niche', isPositional: true, type: 'text', required: true, labelAr: 'المجال والخدمة', labelEn: 'Niche domain', hintAr: 'مكتب هندسي وتصميم داخلي, متجر عسل طبيعي...', hintEn: 'Architecture studio, raw honey store...' },
      CONTENT_COMMON_PARAMS.platform,
      CONTENT_COMMON_PARAMS.goal,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/weekly social plan مكتب هندسي وتصميم داخلي --platform=instagram --goal=leads --language=ar',
    qualityRules: [...SAFETY_QUALITY_RULES],
    keywords: ['خطة أسبوعية', 'weekly plan', 'جدول أسبوعي', 'منشورات الأسبوع'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 310,
    isFavorite: false
  },
  {
    id: 'cnt-plan-092',
    code: '/monthly content matrix',
    titleAr: 'مصفوفة المحتوى الشهرية الموسعة (30 يومًا)',
    titleEn: '30-Day Comprehensive Content Matrix',
    descriptionAr: 'يبني مصفوفة 30 يومًا متكاملة تعتمد مبدأ التنوع ومسار رحلة العميل (وعي -> اهتمام -> قرار -> ولاء).',
    descriptionEn: 'Builds a full 30-day posting matrix mapped across customer journey stages: Awareness, Consideration, Conversion.',
    group: 'content',
    contentCategory: 'calendar_plans',
    outputType: 'text',
    outputBadges: ['مصفوفة شهرية', '30 يومًا'],
    params: [
      { key: 'business', flag: 'business', isPositional: true, type: 'text', required: true, labelAr: 'النشاط التجاري', labelEn: 'Business type', hintAr: 'متجر ملابس أطفال, عيادة أسنان, منصة دورات...', hintEn: 'Kids clothing store, dental clinic...' },
      CONTENT_COMMON_PARAMS.platform,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/monthly content matrix متجر ملابس أطفال --platform=instagram,tiktok --language=ar',
    qualityRules: [
      'تجنب التكرار الرتيب وتوزيع أشكال المحتوى بمرونة بين الأيام',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['مصفوفة محتوى', 'خطة شهرية', '30 يوما', 'رحلة العميل', 'matrix'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 260,
    isFavorite: false
  },
  {
    id: 'cnt-plan-093',
    code: '/campaign timeline',
    titleAr: 'الجدول الزمني للحملات الإعلانية والموسمية',
    titleEn: 'Integrated Marketing Campaign Timeline',
    descriptionAr: 'يخطط لمراحل الحملة التسويقية (مرحلة التشويق Teaser، مرحلة الإطلاق Launch، مرحلة الزخم والمتابعة Retargeting).',
    descriptionEn: 'Maps full campaign lifecycle phases: Tease/Hype, Launch Blast, Follow-up Momentum, and Last Chance urgency.',
    group: 'content',
    contentCategory: 'calendar_plans',
    outputType: 'text',
    outputBadges: ['جدول زمني', 'حملة تسويقية'],
    params: [
      { key: 'campaign', flag: 'campaign', isPositional: true, type: 'text', required: true, labelAr: 'موضوع الحملة والمناسبة', labelEn: 'Campaign occasion', hintAr: 'حملة العودة للمدارس, عروض نهاية العام, يوم التأسيس...', hintEn: 'Back to school, year-end sale, national day...' },
      { key: 'weeks', flag: 'weeks', isPositional: false, type: 'number', required: false, defaultValue: 3, labelAr: 'عدد أسابيع الحملة', labelEn: 'Weeks duration', hintAr: '2, 3, 4...', hintEn: '2, 3, 4...' },
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/campaign timeline عروض نهاية العام --weeks=3 --language=ar',
    qualityRules: [
      'تنسيق الرسائل التسويقية لكل مرحلة لتفادي حرق العرض مبكرًا',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['جدول زمني', 'حملة تسويقية', 'campaign timeline', 'مراحل الحملة', 'تشويق وإطلاق'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 230,
    isFavorite: false
  },
  {
    id: 'cnt-plan-094',
    code: '/content repurposing plan',
    titleAr: 'إعادة تدوير المحتوى وتوزيعه (Repurposing)',
    titleEn: '1-to-10 Content Repurposing Engine',
    descriptionAr: 'يحول مقالًا واحدًا أو فيديو طويلًا إلى 10 قطع محتوى متنوعة (تغريدات، كاروسيل، ريلز، بوست لينكدإن، بريد).',
    descriptionEn: 'Multiplies 1 core long-form asset into 10 high-impact micro-assets across social, email, and carousel channels.',
    group: 'content',
    contentCategory: 'calendar_plans',
    outputType: 'text',
    outputBadges: ['إعادة تدوير', 'مضاعفة المحتوى'],
    params: [
      { key: 'source_content', flag: 'source_content', isPositional: true, type: 'text', required: true, labelAr: 'المحتوى الأصلي أو المقال', labelEn: 'Source content/article', hintAr: 'مقال عن 7 أسرار في التفاوض التجاري, حلقة بودكاست...', hintEn: 'Article on 7 negotiation secrets, podcast episode...' },
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/content repurposing plan مقال عن 7 أسرار في التفاوض التجاري --language=ar',
    qualityRules: [
      'ملاءمة صياغة كل قطعة للمنصة المستهدفة وليس مجرد نسخ ولصق أعمى',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['إعادة تدوير', 'repurposing', 'تدوير المحتوى', 'مضاعفة النشر', 'توزيع'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 280,
    isFavorite: false
  },
  {
    id: 'cnt-plan-095',
    code: '/seasonal content calendar',
    titleAr: 'تقويم المناسبات والمواسم والأيام العالمية',
    titleEn: 'Seasonal & Cultural Observance Content Calendar',
    descriptionAr: 'يستغل المناسبات الثقافية والأيام العالمية ذات الصلة بنشاطك لتقديم أفكار محتوى هادفة ومرتبطة بمنتجك.',
    descriptionEn: 'Pairs seasonal events and international awareness days with authentic, brand-relevant content hooks.',
    group: 'content',
    contentCategory: 'calendar_plans',
    outputType: 'text',
    outputBadges: ['مواسم ومناسبات', 'تقويم سنوي'],
    params: [
      { key: 'industry', flag: 'industry', isPositional: true, type: 'text', required: true, labelAr: 'مجال العلامة التجارية', labelEn: 'Brand niche', hintAr: 'تغذية وصحة, تقنية وبرمجة, أزياء وتصميم...', hintEn: 'Nutrition, tech, fashion...' },
      { key: 'season', flag: 'season', isPositional: false, type: 'string', required: false, labelAr: 'الموسم أو الشهر', labelEn: 'Season / Month', hintAr: 'رمضان, الصيف, نهاية العام, الشتاء...', hintEn: 'Ramadan, summer, winter, Q4...' },
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/seasonal content calendar تغذية وصحة --season=رمضان --language=ar',
    qualityRules: [
      'الحفاظ على الاحترام الثقافي والمصداقية دون استغلال رخيص للمناسبات',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['مواسم', 'أيام عالمية', 'مناسبات', 'seasonal calendar', 'محتوى موسمي'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 240,
    isFavorite: false
  },
  {
    id: 'cnt-plan-096',
    code: '/evergreen content list',
    titleAr: 'قائمة المحتوى الدائم والصالح لكل وقت (Evergreen)',
    titleEn: 'Evergreen Pillar Content Library',
    descriptionAr: 'يولد قائمة مواضيع محتوى دائم الصلاحية (Evergreen Content) تستمر في جلب الزيارات والتفاعل طوال العام.',
    descriptionEn: 'Generates timeless evergreen topic frameworks that reliably generate search traffic and engagement year-round.',
    group: 'content',
    contentCategory: 'calendar_plans',
    outputType: 'text',
    outputBadges: ['محتوى دائم', 'Evergreen'],
    params: [
      { key: 'topic', flag: 'topic', isPositional: true, type: 'text', required: true, labelAr: 'المجال أو التخصص', labelEn: 'Field / Subject', hintAr: 'التربية الإيجابية للأطفال, إدارة الميزانية الشخصية...', hintEn: 'Positive parenting, personal budgeting...' },
      { key: 'count', flag: 'count', isPositional: false, type: 'number', required: false, defaultValue: 15, labelAr: 'عدد الأفكار', labelEn: 'Idea count', hintAr: '10, 15, 20...', hintEn: '10, 15, 20...' },
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/evergreen content list إدارة الميزانية الشخصية --count=15 --language=ar',
    qualityRules: [
      'التأكد من أن الأفكار تعتمد على مبادئ أساسية راسخة لا تبطل بمرور الشهور',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['evergreen', 'محتوى دائم', 'محتوى مستدام', 'زيارات مستمرة'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 210,
    isFavorite: false
  }
];
