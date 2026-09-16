import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const PLANNING_PROMPTS: CommandPrompt[] = [
  {
    id: 'ads-plan-001',
    code: '/ad campaign',
    titleAr: 'خطة حملة إعلانية متكاملة',
    titleEn: 'Comprehensive Ad Campaign',
    descriptionAr: 'ينشئ خطة حملة إعلانية متكاملة لمنتج أو خدمة تحدد الهدف، الجمهور، والرسالة.',
    descriptionEn: 'Generates a full advertising campaign plan for a product or service with goals, audience, and message.',
    group: 'ads',
    outputType: 'plan',
    adsCategory: 'planning',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج أو الخدمة', labelEn: 'Product / Service', hintAr: 'عيادة أسنان, تطبيق جوال...', hintEn: 'Dental clinic, mobile app...' },
      resolveParam('goal'),
      resolveParam('audience'),
      resolveParam('platform'),
      { key: 'duration', flag: 'duration', isPositional: false, type: 'string', required: false, labelAr: 'مدة الحملة', labelEn: 'Campaign Duration', hintAr: '30days, 2weeks', hintEn: '30days, 2weeks' }
    ],
    example: `/ad campaign عيادة أسنان --goal=bookings --audience=adults --duration=30days --platform=instagram,facebook`,
    qualityRules: [
      'تحديد رسالة إعلانية أساسية واحدة واضحة',
      'تحديد عرض القيمة والدليل المقنع (Social Proof)',
      'توزيع الميزانية والأشكال الإعلانية المناسبة لكل منصة'
    ],
    keywords: ['حملة', 'خطة', 'إعلانات', 'campaign', 'strategy', 'ad'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 142,
    isFavorite: true
  },
  {
    id: 'ads-plan-002',
    code: '/luxurycampaign ads',
    titleAr: 'اتجاه حملة فاخرة',
    titleEn: 'Luxury Campaign Direction',
    descriptionAr: 'ينشئ اتجاه حملة فاخرة لمنتج أو خدمة عالية القيمة، مع رسالة وهوية ونبرة إعلانية راقية.',
    descriptionEn: 'Builds a luxury campaign direction for high-ticket items with premium positioning and tone.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'planning',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج الفاخر', labelEn: 'Luxury Item', hintAr: 'ساعات سويسرية, مجوهرات...', hintEn: 'Swiss watches, jewelry...' },
      resolveParam('audience'),
      resolveParam('platform'),
      resolveParam('language'),
      { key: 'output', flag: 'output', isPositional: false, type: 'string', required: false, labelAr: 'نوع المخرج', labelEn: 'Output', hintAr: 'campaign-concept', hintEn: 'campaign-concept' }
    ],
    example: `/luxurycampaign ads ساعات سويسرية --audience=high-income --platform=instagram --output=campaign-concept --language=ar`,
    qualityRules: [
      'الابتعاد عن لغة التخفيضات والتركيز على الحصرية والحرفية والقيمة',
      'بناء هالة من الفخامة والأناقة في الصياغة البصرية والنصية'
    ],
    keywords: ['فاخر', 'luxury', 'campaign', 'high-end', 'ساعات', 'مجوهرات'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 95,
    isFavorite: false
  },
  {
    id: 'ads-plan-003',
    code: '/ad brief',
    titleAr: 'موجز إبداعي (Creative Brief)',
    titleEn: 'Ad Creative Brief',
    descriptionAr: 'ينشئ Creative Brief واضحًا قبل بدء كتابة الإعلان أو تصميمه لتوحيد الرؤية.',
    descriptionEn: 'Creates a clear creative brief prior to copywriting or design production.',
    group: 'ads',
    outputType: 'plan',
    adsCategory: 'planning',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج أو الفكرة', labelEn: 'Product / Concept', hintAr: 'عطر رجالي فاخر', hintEn: 'Luxury men perfume' },
      resolveParam('goal'),
      resolveParam('audience'),
      resolveParam('platform'),
      resolveParam('tone')
    ],
    example: `/ad brief عطر رجالي فاخر --goal=awareness --audience=men_25_40 --platform=instagram --tone=luxury`,
    qualityRules: [
      'وضوح المشكلة التي يعالجها الإعلان',
      'تحديد العرض الفريد للبيع (USP)',
      'تحديد المشاعر المستهدفة والدعوة للإجراء'
    ],
    keywords: ['brief', 'موجز', 'كرييتف', 'creative', 'ad'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 88,
    isFavorite: false
  },
  {
    id: 'ads-plan-004',
    code: '/ad strategy',
    titleAr: 'استراتيجية إعلانية شاملة',
    titleEn: 'Ad Campaign Strategy',
    descriptionAr: 'يبني استراتيجية إعلانية حسب الهدف والجمهور والميزانية والمنصات المناسبة.',
    descriptionEn: 'Develops a full advertising strategy based on budget, goals, channels, and audience.',
    group: 'ads',
    outputType: 'plan',
    adsCategory: 'planning',
    params: [
      { key: 'business', flag: 'business', isPositional: true, type: 'text', required: true, labelAr: 'نوع النشاط', labelEn: 'Business Type', hintAr: 'متجر ملابس نسائية', hintEn: 'Women clothing store' },
      resolveParam('goal'),
      resolveParam('platform'),
      { key: 'budget', flag: 'budget', isPositional: false, type: 'string', required: false, labelAr: 'الميزانية التقريبية', labelEn: 'Budget', hintAr: '5000, 10000', hintEn: '5000, 10000' },
      { key: 'duration', flag: 'duration', isPositional: false, type: 'string', required: false, labelAr: 'المدة الزمنية', labelEn: 'Duration', hintAr: '3months, 30days', hintEn: '3months, 30days' }
    ],
    example: `/ad strategy متجر ملابس نسائية --goal=sales --budget=5000 --platform=meta,tiktok --duration=3months`,
    qualityRules: [
      'توزيع الميزانية بين مراحل الاستكشاف والتحويل وإعادة الاستهداف',
      'مواءمة نوع المحتوى مع طبيعة جمهور كل منصة'
    ],
    keywords: ['استراتيجية', 'strategy', 'خطة', 'ميزانية', 'budget'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 110,
    isFavorite: true
  },
  {
    id: 'ads-plan-005',
    code: '/ad angle',
    titleAr: 'زوايا تسويقية إعلانية',
    titleEn: 'Marketing Ad Angles',
    descriptionAr: 'يقترح زوايا تسويقية ونفسية مختلفة لنفس المنتج أو الخدمة لمخاطبة اهتمامات متعددة.',
    descriptionEn: 'Generates diverse marketing and psychological angles for the same offer.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'planning',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'الخدمة أو المنتج', labelEn: 'Product / Service', hintAr: 'خدمة تنظيف منازل', hintEn: 'Home cleaning service' },
      { key: 'angles', flag: 'angles', isPositional: false, type: 'string', required: false, labelAr: 'أنواع الزوايا', labelEn: 'Angle Types', hintAr: 'problem,comfort,time-saving', hintEn: 'problem,comfort,time-saving' },
      resolveParam('audience')
    ],
    example: `/ad angle خدمة تنظيف منازل --angles=problem,comfort,time-saving --audience=busy-families`,
    qualityRules: [
      'صياغة زاوية توفير الوقت، الراحة، التكلفة، والمكانة الاجتماعية',
      'ربط كل زاوية بألم محدد أو رغبة عميقة لدى العميل'
    ],
    keywords: ['زاوية', 'angles', 'marketing', 'hooks', 'تسويق'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 104,
    isFavorite: false
  },
  {
    id: 'ads-plan-006',
    code: '/target audience',
    titleAr: 'تحديد شخصية العميل المستهدف',
    titleEn: 'Target Audience Persona',
    descriptionAr: 'يساعد على تحديد الجمهور المستهدف واحتياجاته ودوافعه واعتراضاته المحتملة.',
    descriptionEn: 'Identifies target audience personas, core needs, pains, and buying objections.',
    group: 'ads',
    outputType: 'plan',
    adsCategory: 'planning',
    params: [
      { key: 'business', flag: 'business', isPositional: true, type: 'text', required: true, labelAr: 'المشروع أو التطبيق', labelEn: 'App / Business', hintAr: 'تطبيق توصيل طعام', hintEn: 'Food delivery app' },
      resolveParam('goal'),
      { key: 'market', flag: 'market', isPositional: false, type: 'string', required: false, labelAr: 'السوق الجغرافي', labelEn: 'Market', hintAr: 'saudi-arabia, uae', hintEn: 'saudi-arabia, uae' },
      { key: 'output', flag: 'output', isPositional: false, type: 'string', required: false, labelAr: 'الصيغة', labelEn: 'Output Form', hintAr: 'persona, analysis', hintEn: 'persona, analysis' }
    ],
    example: `/target audience تطبيق توصيل طعام --market=saudi-arabia --goal=app-installs --output=persona`,
    qualityRules: [
      'تحديد الدوافع النفسية للشراء ومحفزات الثقة',
      'ذكر الاعتراضات الشائعة وكيفية تفكيكها في الإعلان'
    ],
    keywords: ['جمهور', 'audience', 'persona', 'استهداف', 'عملاء'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 76,
    isFavorite: false
  },
  {
    id: 'ads-plan-007',
    code: '/ad objective',
    titleAr: 'تحديد الهدف الإعلاني المناسب',
    titleEn: 'Ad Campaign Objective',
    descriptionAr: 'يحدد هدف الحملة المناسب: وعي، زيارات، رسائل، عملاء محتملون، أو مبيعات.',
    descriptionEn: 'Selects the right advertising objective: awareness, traffic, leads, or sales.',
    group: 'ads',
    outputType: 'plan',
    adsCategory: 'planning',
    params: [
      { key: 'business', flag: 'business', isPositional: true, type: 'text', required: true, labelAr: 'المشروع', labelEn: 'Business', hintAr: 'متجر إلكتروني جديد', hintEn: 'New ecommerce store' },
      { key: 'stage', flag: 'stage', isPositional: false, type: 'string', required: false, labelAr: 'مرحلة المشروع', labelEn: 'Stage', hintAr: 'launch, scaling, retargeting', hintEn: 'launch, scaling, retargeting' }
    ],
    example: `/ad objective متجر إلكتروني جديد --business=ecommerce --stage=launch`,
    qualityRules: [
      'ربط الهدف بمؤشرات أداء قابلة للقياس بدقة (KPIs)',
      'توجيه الميزانية نحو الهدف ذي الأثر الأعلى'
    ],
    keywords: ['هدف', 'objective', 'sales', 'leads', 'awareness'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 65,
    isFavorite: false
  },
  {
    id: 'ads-plan-008',
    code: '/offer strategy',
    titleAr: 'هندسة العرض الإعلاني (Offer Strategy)',
    titleEn: 'Offer Strategy Architecture',
    descriptionAr: 'يصمم عرضًا تسويقيًا قويًا لا يُقاوم، يتجاوز مجرد تخفيض السعر.',
    descriptionEn: 'Crafts an irresistible high-value offer architecture beyond simple discounts.',
    group: 'ads',
    outputType: 'plan',
    adsCategory: 'planning',
    params: [
      { key: 'offer', flag: 'offer', isPositional: true, type: 'text', required: true, labelAr: 'موضوع العرض', labelEn: 'Offer Subject', hintAr: 'اشتراك نادي رياضي', hintEn: 'Gym membership' },
      resolveParam('goal'),
      resolveParam('audience'),
      { key: 'duration', flag: 'duration', isPositional: false, type: 'string', required: false, labelAr: 'المحدودية', labelEn: 'Scarcity', hintAr: 'limited, 48hours', hintEn: 'limited, 48hours' }
    ],
    example: `/offer strategy اشتراك نادي رياضي --goal=signups --audience=beginners --duration=limited`,
    qualityRules: [
      'إضافة حوافز ومكافآت مجانية (Bonuses) لرفع القيمة المدركة',
      'تقليل المخاطرة عبر الضمانات الصريحة (Risk Reversal)'
    ],
    keywords: ['عرض', 'offer', 'تخفيض', 'قيمة', 'bonuses'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 92,
    isFavorite: false
  },
  {
    id: 'ads-plan-009',
    code: '/ad funnel',
    titleAr: 'قمع الإعلانات (Ad Funnel)',
    titleEn: 'Multi-Stage Ad Funnel',
    descriptionAr: 'يبني إعلانات مناسبة لكل مرحلة من مراحل العميل: بارد، مهتم، وجاهز للشراء.',
    descriptionEn: 'Builds tailored ad flows for cold, warm, and hot traffic stages.',
    group: 'ads',
    outputType: 'plan',
    adsCategory: 'planning',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج أو الخدمة', labelEn: 'Product / Service', hintAr: 'دورة تعليمية أونلاين', hintEn: 'Online course' },
      resolveParam('goal'),
      resolveParam('platform'),
      { key: 'stages', flag: 'stages', isPositional: false, type: 'string', required: false, labelAr: 'المراحل', labelEn: 'Stages', hintAr: 'cold,warm,hot', hintEn: 'cold,warm,hot' }
    ],
    example: `/ad funnel دورة تعليمية أونلاين --goal=enrollments --stages=cold,warm,hot --platform=instagram`,
    qualityRules: [
      'رسائل تثقيفية للجمهور البارد، أدلة للجمهور الدافئ، عروض محددة للجمهور الساخن'
    ],
    keywords: ['funnel', 'قمع', 'retargeting', 'cold', 'warm', 'hot'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 84,
    isFavorite: false
  },
  {
    id: 'ads-plan-010',
    code: '/launch campaign',
    titleAr: 'حملة إطلاق متكاملة',
    titleEn: 'Product Launch Campaign',
    descriptionAr: 'يجهز حملة إطلاق منتج أو خدمة جديدة على مراحل: التشويق، الإطلاق، وإغلاق الفرصة.',
    descriptionEn: 'Prepares a structured launch campaign spanning teaser, live launch, and close phases.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'planning',
    params: [
      { key: 'project', flag: 'project', isPositional: true, type: 'text', required: true, labelAr: 'المشروع الجديد', labelEn: 'New Project', hintAr: 'كافيه جديد, تطبيق مبتكر', hintEn: 'New cafe, innovative app' },
      resolveParam('goal'),
      resolveParam('platform'),
      { key: 'launch-date', flag: 'launch-date', isPositional: false, type: 'string', required: false, labelAr: 'موعد الإطلاق', labelEn: 'Launch Window', hintAr: '15days, next-week', hintEn: '15days, next-week' }
    ],
    example: `/launch campaign كافيه جديد --launch-date=15days --platform=instagram,snapchat --goal=visits`,
    qualityRules: [
      'خلق الترقب والفضول في مرحلة ما قبل الإطلاق (Teaser)',
      'توفير حافز قوي للحضور أو الطلب المبكر في اليوم الأول'
    ],
    keywords: ['إطلاق', 'launch', 'افتتاح', 'opening', 'كافيه'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 99,
    isFavorite: true
  }
];
