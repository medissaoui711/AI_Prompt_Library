import { CommandPrompt } from '../../../types/prompt';
import { CONTENT_COMMON_PARAMS, SOCIAL_CONTENT_RULES, SAFETY_QUALITY_RULES } from './constants';

export const SHORTFORM_PROMPTS: CommandPrompt[] = [
  {
    id: 'cnt-shrt-011',
    code: '/reel caption',
    titleAr: 'كابشن ريلز وفيديوهات قصيرة',
    titleEn: 'Reel & Shorts Caption',
    descriptionAr: 'يكتب كابشن جذابًا لريلز إنستغرام أو تيك توك مع عبارة أولى تمنع التمرير وتوجه للتعليقات أو الرابط.',
    descriptionEn: 'Writes high-retention reel captions with thumb-stopping opening lines and strong call-to-actions.',
    group: 'content',
    contentCategory: 'shortform',
    outputType: 'text',
    outputBadges: ['كابشن', 'ريلز'],
    params: [
      { key: 'video_content', flag: 'video_content', isPositional: true, type: 'text', required: true, labelAr: 'محتوى الفيديو أو الفكرة', labelEn: 'Video idea', hintAr: 'فيديو قبل وبعد لتنظيف سيارة, وصفة حلويات...', hintEn: 'Before-after car detailing, dessert recipe...' },
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.cta,
      CONTENT_COMMON_PARAMS.hashtags,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/reel caption فيديو قبل وبعد لتنظيف سيارة --tone=energetic --cta=book-now --hashtags=yes --language=ar',
    qualityRules: [...SOCIAL_CONTENT_RULES, ...SAFETY_QUALITY_RULES],
    keywords: ['ريلز', 'reel caption', 'تيك توك', 'فيديو قصير', 'كابشن'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 390,
    isFavorite: true
  },
  {
    id: 'cnt-shrt-012',
    code: '/reel hook',
    titleAr: 'افتتاحيات خاطفة لريلز وفيديو (Hooks)',
    titleEn: 'Reel Hooks Generator',
    descriptionAr: 'يولد خيارات متعددة من الافتتاحيات الصوتية أو النصية الخاطفة لأول 3 ثوانٍ في الفيديو القصير.',
    descriptionEn: 'Generates high-curiosity video hooks designed to maximize retention in the first 3 critical seconds.',
    group: 'content',
    contentCategory: 'shortform',
    outputType: 'text',
    outputBadges: ['نص قصير', 'افتتاحية'],
    params: [
      { key: 'topic', flag: 'topic', isPositional: true, type: 'text', required: true, labelAr: 'موضوع الفيديو', labelEn: 'Topic', hintAr: '5 أخطاء في العناية بالبشرة, سر زيادة التركيز...', hintEn: '5 skincare mistakes, focus secret...' },
      { key: 'count', flag: 'count', isPositional: false, type: 'number', required: false, defaultValue: 10, labelAr: 'عدد الافتتاحيات', labelEn: 'Hook count', hintAr: '5, 10, 15...', hintEn: '5, 10, 15...' },
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/reel hook 5 أخطاء في العناية بالبشرة --count=10 --tone=curious --language=ar',
    qualityRules: [
      'التركيز على إثارة الفضول أو كسر التوقعات في أول 3 ثوانٍ',
      'تجنب الافتتاحيات المستهلكة أو الوعود الكاذبة (Clickbait المضلل)',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['hook', 'افتتاحية ريلز', 'أول 3 ثواني', 'خاطفة', 'ريل هوك'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 340,
    isFavorite: true
  },
  {
    id: 'cnt-shrt-013',
    code: '/tiktok caption',
    titleAr: 'كابشن تيك توك التفاعلي',
    titleEn: 'TikTok Video Caption',
    descriptionAr: 'يكتب كابشن عفويًا ومرحًا مناسبًا لخوارزمية وأسلوب جمهور TikTok مع أسئلة تحفز التعليقات.',
    descriptionEn: 'Generates trendy, casual TikTok captions optimized for search queries and audience comment debates.',
    group: 'content',
    contentCategory: 'shortform',
    outputType: 'text',
    outputBadges: ['كابشن', 'تيك توك'],
    params: [
      { key: 'concept', flag: 'concept', isPositional: true, type: 'text', required: true, labelAr: 'موضوع الفيديو والتريند', labelEn: 'Video concept', hintAr: 'طريقة تحضير قهوة باردة, تحدي أسبوع...', hintEn: 'Iced coffee recipe, 7-day challenge...' },
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.cta,
      CONTENT_COMMON_PARAMS.hashtags
    ],
    example: '/tiktok caption طريقة تحضير قهوة باردة --tone=casual --cta=try-it --hashtags=yes',
    qualityRules: [...SOCIAL_CONTENT_RULES, ...SAFETY_QUALITY_RULES],
    keywords: ['تيك توك', 'tiktok', 'كابشن تيك توك', 'فيديو تريند'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 260,
    isFavorite: false
  },
  {
    id: 'cnt-shrt-014',
    code: '/short video script',
    titleAr: 'سيناريو فيديو قصير متكامل (Reels/TikTok)',
    titleEn: 'Short Video Script',
    descriptionAr: 'يكتب سيناريو فيديو قصير مقسم إلى: مشهد بصري، نص صوتي (Voiceover)، ونص على الشاشة (On-screen text).',
    descriptionEn: 'Structures complete short-form video scripts including visual cues, spoken voiceover, and text overlays.',
    group: 'content',
    contentCategory: 'shortform',
    outputType: 'text',
    outputBadges: ['نص فيديو', 'سيناريو'],
    params: [
      { key: 'subject', flag: 'subject', isPositional: true, type: 'text', required: true, labelAr: 'موضوع الفيديو أو المنتج', labelEn: 'Subject', hintAr: 'تطبيق لتتبع المصروفات, مراجعة منتج...', hintEn: 'Expense tracker app, product review...' },
      CONTENT_COMMON_PARAMS.platform,
      { key: 'duration', flag: 'duration', isPositional: false, type: 'string', required: false, defaultValue: '20sec', labelAr: 'مدة الفيديو', labelEn: 'Duration', hintAr: '15sec, 20sec, 30sec, 60sec...', hintEn: '15sec, 20sec, 30sec, 60sec...' },
      CONTENT_COMMON_PARAMS.goal,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/short video script تطبيق لتتبع المصروفات --platform=tiktok --duration=20sec --goal=app-installs --language=ar',
    qualityRules: [
      'توزيع التوقيت بوضوح: افتتاحية (0-3 ثوان)، الفائدة (3-15 ثانية)، الدعوة لاتخاذ إجراء (15-20 ثانية)',
      'التناسق بين ما يظهر على الشاشة وما يقال صوتيًا',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['سيناريو ريلز', 'نص فيديو قصير', 'short video script', 'تيك توك', 'ريلز'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 310,
    isFavorite: true
  },
  {
    id: 'cnt-shrt-015',
    code: '/story text',
    titleAr: 'سلسلة نصوص لقصص إنستغرام (Stories)',
    titleEn: 'Instagram Stories Sequence',
    descriptionAr: 'يكتب نصوصًا متسلسلة للقصص اليومية (Stories) مع ملصقات تفاعلية واستفتاءات وروابط.',
    descriptionEn: 'Writes multi-slide story sequences equipped with interactive sticker ideas, polls, and tap-through links.',
    group: 'content',
    contentCategory: 'shortform',
    outputType: 'text',
    outputBadges: ['منشور قصير', 'ستوري'],
    params: [
      { key: 'campaign', flag: 'campaign', isPositional: true, type: 'text', required: true, labelAr: 'موضوع الستوري أو العرض', labelEn: 'Story topic', hintAr: 'عرض نهاية الأسبوع في مطعم, كواليس العمل...', hintEn: 'Weekend restaurant offer, behind scenes...' },
      { key: 'slides', flag: 'slides', isPositional: false, type: 'number', required: false, defaultValue: 3, labelAr: 'عدد الشرائح', labelEn: 'Slide count', hintAr: '3, 4, 5...', hintEn: '3, 4, 5...' },
      CONTENT_COMMON_PARAMS.cta,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/story text عرض نهاية الأسبوع في مطعم --slides=3 --cta=visit-now --language=ar',
    qualityRules: [...SOCIAL_CONTENT_RULES, ...SAFETY_QUALITY_RULES],
    keywords: ['ستوري', 'قصص إنستغرام', 'story text', 'تفاعل يومي'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 180,
    isFavorite: false
  },
  {
    id: 'cnt-shrt-016',
    code: '/carousel copy',
    titleAr: 'نصوص منشور متعدد الشرائح (Carousel)',
    titleEn: 'Carousel Post Copy',
    descriptionAr: 'يكتب محتوى شرائح إنستغرام أو لينكدإن خطوة بخطوة مع شريحة غلاف جاذبة وخاتمة تدعو للحفظ والمشاركة.',
    descriptionEn: 'Builds educational, highly shareable slide-by-slide carousel copy including hook slide and save/share CTA.',
    group: 'content',
    contentCategory: 'shortform',
    outputType: 'text',
    outputBadges: ['منشور متعدد الشرائح', 'كاروسيل'],
    params: [
      { key: 'topic', flag: 'topic', isPositional: true, type: 'text', required: true, labelAr: 'موضوع الكاروسيل', labelEn: 'Topic', hintAr: '5 نصائح للعناية بالشعر, 7 أدوات لزيادة الإنتاجية...', hintEn: '5 haircare tips, 7 productivity tools...' },
      CONTENT_COMMON_PARAMS.platform,
      { key: 'slides', flag: 'slides', isPositional: false, type: 'number', required: false, defaultValue: 6, labelAr: 'عدد الشرائح', labelEn: 'Slides count', hintAr: '5, 6, 8, 10...', hintEn: '5, 6, 8, 10...' },
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/carousel copy 5 نصائح للعناية بالشعر --platform=instagram --slides=6 --tone=helpful --language=ar',
    qualityRules: [
      'الشريحة الأولى: عنوان خاطف ووعد واضح بالفائدة',
      'الشرائح الوسطى: معلومة واحدة مركزة وواضحة لكل شريحة',
      'الشريحة الأخيرة: دعوة لحفظ المنشور والمشاركة والتفاعل',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['كاروسيل', 'carousel', 'شرائح إنستغرام', 'منشور تعليمي', 'إنفوجرافيك'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 330,
    isFavorite: true
  },
  {
    id: 'cnt-shrt-017',
    code: '/video voiceover',
    titleAr: 'نص تعليق صوتي إعلاني (Voiceover)',
    titleEn: 'Commercial Video Voiceover',
    descriptionAr: 'يكتب نص تعليق صوتي احترافي موزون بالثواني مع إرشادات التلوين الصوتي والوقفات التعبيرية.',
    descriptionEn: 'Writes professionally timed commercial voiceover scripts with tone modulation and pacing indicators.',
    group: 'content',
    contentCategory: 'shortform',
    outputType: 'text',
    outputBadges: ['نص فيديو', 'تعليق صوتي'],
    params: [
      { key: 'topic', flag: 'topic', isPositional: true, type: 'text', required: true, labelAr: 'موضوع الإعلان أو المنتج', labelEn: 'Topic', hintAr: 'فيديو لمنتج عطر جديد, تطبيق توصيل...', hintEn: 'New perfume launch, delivery app...' },
      { key: 'duration', flag: 'duration', isPositional: false, type: 'string', required: false, defaultValue: '30sec', labelAr: 'مدة التعليق', labelEn: 'Duration', hintAr: '15sec, 30sec, 60sec...', hintEn: '15sec, 30sec, 60sec...' },
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/video voiceover فيديو لمنتج عطر جديد --duration=30sec --tone=luxury --language=ar',
    qualityRules: [
      'مراعاة سرعة الإلقاء الطبيعية (حوالي 2 إلى 2.5 كلمة في الثانية)',
      'وضع إشارات الوقفات [وقفة] ونبرة الصوت بوضوح للمعلق الصوتي',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['تعليق صوتي', 'voiceover', 'فويس أوفر', 'إعلان صوتي'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 210,
    isFavorite: false
  },
  {
    id: 'cnt-shrt-018',
    code: '/ugc script',
    titleAr: 'سيناريو فيديو تجربة العميل (UGC)',
    titleEn: 'UGC Creator Video Script',
    descriptionAr: 'يكتب سيناريو فيديو واقعي وعفوي لمنتج على لسان صانع محتوى يبين المشكلة وتجربة الاستخدام والنتيجة.',
    descriptionEn: 'Generates authentic user-generated content (UGC) scripts depicting real problems, testing, and visible results.',
    group: 'content',
    contentCategory: 'shortform',
    outputType: 'text',
    outputBadges: ['نص فيديو تسويقي', 'UGC'],
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج وتجربة الاستخدام', labelEn: 'Product tested', hintAr: 'تجربة استخدام واقي شمس, سماعات لاسلكية...', hintEn: 'Sunscreen testing, wireless earbuds...' },
      CONTENT_COMMON_PARAMS.audience,
      { key: 'duration', flag: 'duration', isPositional: false, type: 'string', required: false, defaultValue: '30sec', labelAr: 'المدة', labelEn: 'Duration', hintAr: '30sec, 45sec, 60sec...', hintEn: '30sec, 45sec, 60sec...' },
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/ugc script تجربة استخدام واقي شمس --audience=women --duration=30sec --tone=authentic --language=ar',
    qualityRules: [
      'الحفاظ على عفوية الحديث دون لغة دعائية متكلفة ومصطنعة',
      'الالتزام بقواعد المصداقية وعدم اختلاق نتائج طبية أو سحرية خارقة',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['ugc', 'محتوى صناع المحتوى', 'تجربة مستخدم', 'ريفيو', 'فيديو عفوي'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 275,
    isFavorite: false
  },
  {
    id: 'cnt-shrt-019',
    code: '/video title',
    titleAr: 'عناوين جاذبة للفيديوهات والريلز',
    titleEn: 'Engaging Video Titles',
    descriptionAr: 'يقترح باقة عناوين قوية للفيديوهات على يوتيوب شورتس، ريلز، وتيك توك تحقق نسب نقر ومشاهدة عالية.',
    descriptionEn: 'Suggests high-CTR, curiosity-driven titles tailored for YouTube Shorts, Reels, and TikTok.',
    group: 'content',
    contentCategory: 'shortform',
    outputType: 'text',
    outputBadges: ['عنوان', 'فيديو'],
    params: [
      { key: 'idea', flag: 'idea', isPositional: true, type: 'text', required: true, labelAr: 'فكرة الفيديو', labelEn: 'Video concept', hintAr: 'طريقة تنظيم المكتب في 5 دقائق, نصائح توفير...', hintEn: '5-minute desk organization, saving tips...' },
      CONTENT_COMMON_PARAMS.platform,
      { key: 'count', flag: 'count', isPositional: false, type: 'number', required: false, defaultValue: 10, labelAr: 'عدد العناوين', labelEn: 'Title count', hintAr: '5, 10, 15...', hintEn: '5, 10, 15...' },
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/video title طريقة تنظيم المكتب في 5 دقائق --platform=youtube-shorts --count=10 --language=ar',
    qualityRules: [
      'توليد زوايا متنوعة: فضول، حل مشكلة، أرقام، أسئلة مباشرة',
      'تجنب العناوين المضللة التي لا تعبر عن المحتوى الحقيقي',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['عنوان فيديو', 'video title', 'يوتيوب شورتس', 'ريلز', 'تيك توك'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 225,
    isFavorite: false
  },
  {
    id: 'cnt-shrt-020',
    code: '/comment reply',
    titleAr: 'ردود احترافية وذكية على التعليقات',
    titleEn: 'Smart Comment Replies',
    descriptionAr: 'يصيغ ردودًا احترافية وودودة على أسئلة واستفسارات واعتراضات العملاء في التعليقات مع توجيه للشراء أو الحجز.',
    descriptionEn: 'Drafts engaging, brand-aligned responses to social media comments, converting queries into bookings.',
    group: 'content',
    contentCategory: 'shortform',
    outputType: 'text',
    outputBadges: ['نص تفاعلي', 'خدمة عملاء'],
    params: [
      { key: 'scenario', flag: 'scenario', isPositional: true, type: 'text', required: true, labelAr: 'سؤال العميل أو الموقف', labelEn: 'Comment scenario', hintAr: 'عميل يسأل عن سعر الخدمة, استفسار عن مواعيد العمل...', hintEn: 'Customer asking for price, hours query...' },
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.goal,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/comment reply عميل يسأل عن سعر الخدمة --tone=friendly --goal=convert-to-booking --language=ar',
    qualityRules: [
      'الإجابة بوضوح واحترام والترحيب بالعميل',
      'توجيه العميل بلباقة للخطوة التالية (رابط الحجز، الرسائل الخاصة)',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['رد على تعليق', 'تعليقات', 'خدمة عملاء', 'comment reply', 'تفاعل'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 195,
    isFavorite: false
  }
];
