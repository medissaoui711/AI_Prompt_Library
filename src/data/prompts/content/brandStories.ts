import { CommandPrompt } from '../../../types/prompt';
import { CONTENT_COMMON_PARAMS, SAFETY_QUALITY_RULES } from './constants';

export const BRAND_STORIES_PROMPTS: CommandPrompt[] = [
  {
    id: 'cnt-brnd-071',
    code: '/brand story',
    titleAr: 'قصة العلامة التجارية الملهمة (Brand Story)',
    titleEn: 'Emotional & Authentic Brand Story',
    descriptionAr: 'يكتب قصة العلامة التجارية بأسلوب سردي بشري ملهم يوضح الشرارة الأولى للشغف والرحلة والقيم الأساسية.',
    descriptionEn: 'Writes an emotionally resonant brand narrative tracing the origin spark, founding struggle, and enduring purpose.',
    group: 'content',
    contentCategory: 'brand_stories',
    outputType: 'text',
    outputBadges: ['قصة العلامة', 'سرد ملهم'],
    params: [
      { key: 'brand', flag: 'brand', isPositional: true, type: 'text', required: true, labelAr: 'اسم العلامة والمجال ونقطة البداية', labelEn: 'Brand background', hintAr: 'علامة أزياء صديقة للبيئة, محمصة قهوة متخصصة بدأت من المنزل...', hintEn: 'Eco fashion brand, home-grown specialty coffee...' },
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.length,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/brand story محمصة قهوة متخصصة بدأت من المنزل --tone=warm --length=medium --language=ar',
    qualityRules: [
      'التركيز على الدافع الإنساني والقيم الحقيقية وراء النشاط',
      'تجنب الأساطير الخيالية والتزام الواقعية',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['قصة العلامة', 'brand story', 'سرد قصصي', 'عاطفي', 'هوية العلامة'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 320,
    isFavorite: true
  },
  {
    id: 'cnt-brnd-072',
    code: '/mission statement',
    titleAr: 'صياغة الرؤية والرسالة والوعد (Vision & Mission)',
    titleEn: 'Vision, Mission & Brand Promise',
    descriptionAr: 'يصيغ رؤية ورسالة واضحة وملهمة للشركة تعبر عن الغاية العميقة والوعد الصريح للعملاء والمجتمع.',
    descriptionEn: 'Defines succinct, powerful vision and mission statements paired with an uncompromising customer promise.',
    group: 'content',
    contentCategory: 'brand_stories',
    outputType: 'text',
    outputBadges: ['الرؤية والرسالة', 'هوية المؤسسة'],
    params: [
      { key: 'company', flag: 'company', isPositional: true, type: 'text', required: true, labelAr: 'الشركة ومجال عملها', labelEn: 'Company domain', hintAr: 'منصة تعليمية للأطفال, عيادات طبية متخصصة...', hintEn: 'Children education platform, dental clinics...' },
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/mission statement منصة تعليمية للأطفال --tone=inspiring --language=ar',
    qualityRules: [
      'استخدام لغة دقيقة خالية من الشعارات الرنانة الجوفاء',
      'تحديد الأثر الواقعي الذي تسعى الشركة لإحداثه في حياة المستفيدين',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['رؤية ورسالة', 'mission statement', 'vision', 'وعد العلامة', 'قيم الشركة'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 260,
    isFavorite: false
  },
  {
    id: 'cnt-brnd-073',
    code: '/about us page',
    titleAr: 'محتوى صفحة من نحن بالموقع (About Us)',
    titleEn: 'Human-Centered About Us Page Copy',
    descriptionAr: 'يكتب محتوى صفحة "من نحن" الكامل متضمنًا: من أنتم، المشكلة التي تواجهونها معًا، كيف تخدمون العميل، وفريق العمل.',
    descriptionEn: 'Structures a complete, engaging About Us webpage showcasing company heritage, team culture, and values.',
    group: 'content',
    contentCategory: 'brand_stories',
    outputType: 'text',
    outputBadges: ['من نحن', 'محتوى موقع'],
    params: [
      { key: 'business', flag: 'business', isPositional: true, type: 'text', required: true, labelAr: 'اسم ونشاط الشركة', labelEn: 'Business activity', hintAr: 'شركة تصميم داخلي ومعماري, متجر عطور طبيعية...', hintEn: 'Interior design studio, natural perfume brand...' },
      CONTENT_COMMON_PARAMS.audience,
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/about us page شركة تصميم داخلي ومعماري --audience=homeowners --tone=friendly --language=ar',
    qualityRules: [
      'جعل العميل هو البطل الحقيقي في القصة وكيف تخدمه الشركة',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['من نحن', 'about us', 'صفحة الموقع', 'قصتنا', 'تعريف بالشركة'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 280,
    isFavorite: false
  },
  {
    id: 'cnt-brnd-074',
    code: '/behind the scenes',
    titleAr: 'محتوى كواليس العمل وصناعة المنتجات (BTS)',
    titleEn: 'Behind The Scenes & Craftsmanship Post',
    descriptionAr: 'يكتب منشور كواليس ممتعًا يستعرض الدقة في التحضير، اختيار المكونات، أو تفاني فريق العمل اليومي.',
    descriptionEn: 'Writes candid behind-the-scenes posts revealing meticulous craftsmanship, quality control, and care.',
    group: 'content',
    contentCategory: 'brand_stories',
    outputType: 'text',
    outputBadges: ['كواليس', 'سوشيال ميديا'],
    params: [
      { key: 'activity', flag: 'activity', isPositional: true, type: 'text', required: true, labelAr: 'النشاط أو الكواليس المصورة', labelEn: 'Behind the scenes activity', hintAr: 'تجهيز وتغليف طلبات اليوم, اختيار حبوب القهوة من المزرعة...', hintEn: 'Packing today orders, sourcing coffee beans...' },
      CONTENT_COMMON_PARAMS.platform,
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/behind the scenes تجهيز وتغليف طلبات اليوم --platform=instagram --tone=warm --language=ar',
    qualityRules: [
      'التأكيد على اللمسة الإنسانية والاهتمام بأدق التفاصيل لإرضاء العميل',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['كواليس', 'behind the scenes', 'bts', 'صناعة المنتج', 'شفافية'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 240,
    isFavorite: false
  },
  {
    id: 'cnt-brnd-075',
    code: '/customer transformation story',
    titleAr: 'قصة تحول حقيقية وتجربة عميل (Transformation Story)',
    titleEn: 'Real Customer Transformation Narrative',
    descriptionAr: 'يسرد تجربة عميل حقيقية باحترام ومصداقية: كيف كان وضعه قبل التعامل معكم، التجربة، والتحسن الملموس.',
    descriptionEn: 'Narrates genuine customer transformational experiences ethically, spotlighting practical improvements.',
    group: 'content',
    contentCategory: 'brand_stories',
    outputType: 'text',
    outputBadges: ['قصة عميل', 'إثبات اجتماعي'],
    params: [
      { key: 'scenario', flag: 'scenario', isPositional: true, type: 'text', required: true, labelAr: 'التجربة والتحسن الحقيقي', labelEn: 'Customer experience', hintAr: 'عميل نظم مصاريفه بعد فوضى 6 أشهر, تجربة تأثيث منزل...', hintEn: 'Customer organized finances after 6mo chaos, home decor...' },
      CONTENT_COMMON_PARAMS.platform,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/customer transformation story عميل نظم مصاريفه بعد فوضى 6 أشهر --platform=linkedin,instagram --language=ar',
    qualityRules: [
      'لا تختلق شهادات عملاء أو نتائج خيالية أو أرقامًا غير موثقة',
      'الحفاظ على خصوصية العميل وذكر التفاصيل الحقيقية فقط',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['قصة تحول', 'تجربة عميل', 'customer story', 'مصداقية', 'شهادة عميل'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 270,
    isFavorite: false
  },
  {
    id: 'cnt-brnd-076',
    code: '/brand values copy',
    titleAr: 'شرح قيم العلامة التجارية وممارساتها',
    titleEn: 'Brand Core Values in Action',
    descriptionAr: 'يشرح قيم العلامة (الأمانة، الجودة، الشفافية، الابتكار) ليس كمجرد كلمات بل من خلال سلوك ومواقف يومية ملموسة.',
    descriptionEn: 'Illustrates brand core values through real operational decisions and daily customer interactions.',
    group: 'content',
    contentCategory: 'brand_stories',
    outputType: 'text',
    outputBadges: ['قيم العلامة', 'مبادئ'],
    params: [
      { key: 'values', flag: 'values', isPositional: true, type: 'text', required: true, labelAr: 'القيم المراد تسليط الضوء عليها', labelEn: 'Core values', hintAr: 'الشفافية في الأسعار والمكونات, الجودة قبل السرعة...', hintEn: 'Pricing transparency, quality over speed...' },
      CONTENT_COMMON_PARAMS.platform,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/brand values copy الشفافية في الأسعار والمكونات --platform=linkedin --language=ar',
    qualityRules: [
      'ضرب مثال واقعي على تطبيق القيمة في موقف عملي مع عميل',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['قيم العلامة', 'brand values', 'شفافية', 'مبادئ العمل', 'ثقافة مؤسسية'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 190,
    isFavorite: false
  },
  {
    id: 'cnt-brnd-077',
    code: '/team introduction',
    titleAr: 'التعريف بأبطال الفريق والخبراء (Meet the Team)',
    titleEn: 'Meet the Team Member Spotlight',
    descriptionAr: 'يكتب منشور تعريف لطيف ومحترم بأحد أعضاء الفريق، دوره، شغفه، وقصة طريفة أو نصيحة يوجهها للعملاء.',
    descriptionEn: 'Highlights team members, celebrating their craft, dedication, and personal advice for clients.',
    group: 'content',
    contentCategory: 'brand_stories',
    outputType: 'text',
    outputBadges: ['فريق العمل', 'سوشيال ميديا'],
    params: [
      { key: 'member', flag: 'member', isPositional: true, type: 'text', required: true, labelAr: 'اسم ودور عضو الفريق', labelEn: 'Team member role', hintAr: 'سارة - مهندسة تجربة المستخدم, أحمد - خبير تحميص القهوة...', hintEn: 'Sarah UX designer, Ahmed head roaster...' },
      CONTENT_COMMON_PARAMS.platform,
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/team introduction سارة - مهندسة تجربة المستخدم --platform=linkedin,instagram --tone=warm --language=ar',
    qualityRules: [
      'إظهار التقدير الحقيقي لجهود الزملاء وإبراز مهاراتهم',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['فريق العمل', 'meet the team', 'أعضاء الفريق', 'ثقافة العمل', 'أبطالنا'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 200,
    isFavorite: false
  },
  {
    id: 'cnt-brnd-078',
    code: '/csr community post',
    titleAr: 'مبادرات المسؤولية الاجتماعية والمجتمعية (CSR)',
    titleEn: 'Community Impact & CSR Initiative',
    descriptionAr: 'يكتب منشورًا رصينًا عن مبادرة مجتمعية أو بيعية خيرية أو رعاية لفعالية محلية مع تركيز على الأثر لا التباهي.',
    descriptionEn: 'Communicates corporate social responsibility and community initiatives with humble sincerity and impact.',
    group: 'content',
    contentCategory: 'brand_stories',
    outputType: 'text',
    outputBadges: ['مسؤولية مجتمعية', 'أثر مجتمعي'],
    params: [
      { key: 'initiative', flag: 'initiative', isPositional: true, type: 'text', required: true, labelAr: 'المبادرة أو الفعالية', labelEn: 'Initiative details', hintAr: 'مبادرة زراعة 1000 شجرة, دعم طلاب البرمجة الموهوبين...', hintEn: '1000 tree planting, coding student sponsorship...' },
      CONTENT_COMMON_PARAMS.platform,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/csr community post مبادرة زراعة 1000 شجرة --platform=all --language=ar',
    qualityRules: [
      'الابتعاد التام عن نبرة التباهي الكاذب والتركيز على شركاء المبادرة والمستفيدين',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['مسؤولية اجتماعية', 'csr', 'مبادرة خيرية', 'أثر بيئي', 'تطوع'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 175,
    isFavorite: false
  },
  {
    id: 'cnt-brnd-079',
    code: '/brand manifesto',
    titleAr: 'مانيفستو وبيان إيمان العلامة (Brand Manifesto)',
    titleEn: 'Brand Manifesto & Creed',
    descriptionAr: 'يكتب بيانًا أدبيًا وحماسيًا قويًا يجسد فلسفة العلامة وما تقف لأجله وما ترفضه في السوق والعالم.',
    descriptionEn: 'Drafts an evocative brand manifesto declaring the core philosophy, convictions, and cultural stand.',
    group: 'content',
    contentCategory: 'brand_stories',
    outputType: 'text',
    outputBadges: ['مانيفستو', 'فلسفة العلامة'],
    params: [
      { key: 'philosophy', flag: 'philosophy', isPositional: true, type: 'text', required: true, labelAr: 'فلسفة العلامة وموقفها', labelEn: 'Brand philosophy', hintAr: 'العودة للمنتجات الطبيعية البسيطة, تمكين المبدعين المستقلين...', hintEn: 'Back to simple natural goods, empowering indie creators...' },
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/brand manifesto تمكين المبدعين المستقلين --tone=passionate --language=ar',
    qualityRules: [
      'استخدام إيقاع لغوي قوي وصادق يحرك مشاعر الفريق والعملاء',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['مانيفستو', 'brand manifesto', 'بيان العلامة', 'فلسفة', 'مبادئ'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 185,
    isFavorite: false
  },
  {
    id: 'cnt-brnd-080',
    code: '/apology statement',
    titleAr: 'بيان اعتذار وتوضيح صادق عند الأعطال والتأخير',
    titleEn: 'Sincere Apology & Service Interruption Statement',
    descriptionAr: 'يكتب بيان اعتذار مسؤولًا وشفافًا عند حدوث خلل تقني أو تأخير شحن، مع توضيح الإجراء التصحيحي والتعويض.',
    descriptionEn: 'Writes empathetic, transparent service disruption apologies detailing root causes, fixes, and reparations.',
    group: 'content',
    contentCategory: 'brand_stories',
    outputType: 'text',
    outputBadges: ['بيان اعتذار', 'شفافية'],
    params: [
      { key: 'incident', flag: 'incident', isPositional: true, type: 'text', required: true, labelAr: 'المشكلة التي حدثت والتعويض', labelEn: 'Incident details & compensation', hintAr: 'تأخير في توصيل طلبات يوم التخفيضات مع قسيمة شحن مجاني...', hintEn: 'Sale deliveries delay with free shipping voucher...' },
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/apology statement تأخير في توصيل طلبات يوم التخفيضات --tone=sincere --language=ar',
    qualityRules: [
      'تحمل المسؤولية بشجاعة ودون إلقاء اللوم على أطراف أخرى بشكل مبتذل',
      'تحديد الخطوات العملية الملموسة لتفادي تكرار الخطأ والتعويض العادل',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['اعتذار', 'بيان اعتذار', 'عطل تقني', 'تأخير', 'شفافية', 'إدارة أزمات'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 220,
    isFavorite: false
  }
];
