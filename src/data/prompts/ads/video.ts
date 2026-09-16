import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const VIDEO_PROMPTS: CommandPrompt[] = [
  {
    id: 'ads-vid-031',
    code: '/video ad',
    titleAr: 'سكربت إعلان فيديو قصير',
    titleEn: 'Short Video Ad Script',
    descriptionAr: 'يكتب فكرة وسكربت إعلان فيديو قصير مقسم إلى Hook، Body، وCTA محفز للتحويل.',
    descriptionEn: 'Writes high-converting short video ad scripts with hook, body, and action-driven CTA.',
    group: 'ads',
    outputType: 'video',
    adsCategory: 'video',
    params: [
      { key: 'service', flag: 'service', isPositional: true, type: 'text', required: true, labelAr: 'الخدمة أو المنتج', labelEn: 'Service / Product', hintAr: 'خدمة توصيل ورد, تطبيق تدريب...', hintEn: 'Flower delivery, fitness app...' },
      resolveParam('duration'),
      resolveParam('platform'),
      resolveParam('goal')
    ],
    example: `/video ad خدمة توصيل ورد --duration=15sec --platform=instagram-reels --goal=orders`,
    qualityRules: [
      'جذب المشاهد في أول 3 ثوانٍ وتوضيح القيمة بسرعة بدون مقدمات مجهدة'
    ],
    keywords: ['فيديو', 'video ad', 'سكربت', 'reels', 'tiktok', 'إعلان فيديو'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 220,
    isFavorite: true
  },
  {
    id: 'ads-vid-032',
    code: '/reel ad script',
    titleAr: 'سكربت إعلان ريلز وسنابتيك',
    titleEn: 'Fast-Paced Reel Ad Script',
    descriptionAr: 'ينشئ سكربت ريلز سريعًا يتضمن Hook ومشاهد متتابعة وصوتيات وCTA متقن.',
    descriptionEn: 'Builds fast-paced vertical Reels/TikTok ad scripts with visual cues and sound effects.',
    group: 'ads',
    outputType: 'video',
    adsCategory: 'video',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج أو الفكرة', labelEn: 'Product / Concept', hintAr: 'عطر نسائي صيفي, وجبة صحية', hintEn: 'Summer women perfume, healthy meal' },
      resolveParam('duration'),
      resolveParam('style'),
      resolveParam('platform')
    ],
    example: `/reel ad script عطر نسائي --duration=20sec --style=luxury --platform=instagram`,
    qualityRules: [
      'تحديد نوع الانتقالات البصرية وسرعة الإيقاع وتوجيهات الصوت'
    ],
    keywords: ['reels', 'ريلز', 'تيك توك', 'سناب', 'reel script'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 175,
    isFavorite: true
  },
  {
    id: 'ads-vid-033',
    code: '/ugc ad',
    titleAr: 'إعلان أسلوب صناع المحتوى (UGC)',
    titleEn: 'Authentic UGC Creator Ad',
    descriptionAr: 'يكتب سيناريو إعلان بأسلوب تجربة عميل حقيقية أو صانع محتوى يبدو طبيعيًا وغير مصطنع.',
    descriptionEn: 'Writes authentic, native UGC-style scripts filmed with a smartphone aesthetic.',
    group: 'ads',
    outputType: 'video',
    adsCategory: 'video',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج', labelEn: 'Product', hintAr: 'واقي شمس شفاف, تطبيق تنظيم مهام', hintEn: 'Sunscreen, task planner' },
      resolveParam('audience'),
      resolveParam('duration'),
      resolveParam('tone')
    ],
    example: `/ugc ad واقي شمس --audience=women --duration=30sec --tone=authentic`,
    qualityRules: [
      'تجنب النبرة الإعلانية الرسمية واستخدام لغة الحديث اليومية العفوية'
    ],
    keywords: ['ugc', 'صناع محتوى', 'تجارب واقعية', 'عفوي', 'tiktok ugc'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 190,
    isFavorite: true
  },
  {
    id: 'ads-vid-034',
    code: '/product demo ad',
    titleAr: 'فيديو تجربة وشرح عملي للمنتج',
    titleEn: 'Live Product Demo & Action Ad',
    descriptionAr: 'يجهز فيديو يشرح المنتج عمليًا أثناء استخدامه ويوضح سهولته ونتائجه المباشرة.',
    descriptionEn: 'Creates step-by-step in-action product demonstration video scripts.',
    group: 'ads',
    outputType: 'video',
    adsCategory: 'video',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج', labelEn: 'Product', hintAr: 'ماكينة قهوة ذكية, أداة مطبخ', hintEn: 'Smart coffee machine, kitchen tool' },
      resolveParam('duration'),
      resolveParam('platform'),
      resolveParam('cta')
    ],
    example: `/product demo ad ماكينة قهوة --duration=30sec --platform=tiktok --cta=shop-now`,
    qualityRules: [
      'إبراز سهولة الاستخدام والنتيجة الفورية بجودة صوت واضحة'
    ],
    keywords: ['demo', 'شرح عملي', 'تجربة منتج', 'استخدام', 'product demo'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 130,
    isFavorite: false
  },
  {
    id: 'ads-vid-035',
    code: '/testimonial video ad',
    titleAr: 'سيناريو فيديو شهادة عميل موثقة',
    titleEn: 'Customer Video Testimonial Story',
    descriptionAr: 'يكتب سيناريو شهادة عميل حقيقية تتناول التجربة من المشكلة إلى الرضا الكامل.',
    descriptionEn: 'Structures customer interview & video testimonial flows that build immense trust.',
    group: 'ads',
    outputType: 'video',
    adsCategory: 'video',
    params: [
      { key: 'service', flag: 'service', isPositional: true, type: 'text', required: true, labelAr: 'الخدمة أو العيادة', labelEn: 'Service / Center', hintAr: 'مركز تجميل وأسنان, برنامج تدريبي', hintEn: 'Beauty center, training program' },
      resolveParam('duration'),
      resolveParam('tone'),
      resolveParam('platform')
    ],
    example: `/testimonial video ad مركز تجميل --duration=30sec --tone=trustworthy --platform=instagram`,
    qualityRules: [
      'سرد المشكلة التي كان يعاني منها العميل ثم كيف غيرت الخدمة حياته'
    ],
    keywords: ['شهادة عميل', 'فيديو تقييم', 'testimonial video', 'مصداقية'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 98,
    isFavorite: false
  },
  {
    id: 'ads-vid-036',
    code: '/motion ad',
    titleAr: 'فكرة وسيناريو موشن جرافيك',
    titleEn: 'Motion Graphics Explainer Ad',
    descriptionAr: 'يجهز فكرة موشن جرافيك لشرح خدمة تقنية أو تطبيق أو عرض بطريقة مرئية أنيقة.',
    descriptionEn: 'Writes concise voiceover and visual choreography for animated motion graphics ads.',
    group: 'ads',
    outputType: 'video',
    adsCategory: 'video',
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'text', required: true, labelAr: 'التطبيق أو الخدمة', labelEn: 'App / Service', hintAr: 'تطبيق توصيل طلبات, منصة فواتير', hintEn: 'Delivery app, billing platform' },
      resolveParam('duration'),
      resolveParam('style'),
      resolveParam('platform')
    ],
    example: `/motion ad تطبيق توصيل --duration=20sec --style=clean --platform=instagram-story`,
    qualityRules: [
      'تزامن النص الصوتي مع الحركات البصرية والشاشات التوضيحية'
    ],
    keywords: ['motion', 'موشن جرافيك', 'رسوم متحركة', 'انيميشن', 'app demo'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 110,
    isFavorite: false
  },
  {
    id: 'ads-vid-037',
    code: '/story ad',
    titleAr: 'إعلان ستوري عمودي سريع (10 ثوانٍ)',
    titleEn: 'Vertical Story / Snap Ad',
    descriptionAr: 'ينشئ إعلانًا عموديًا سريعًا ومباشرًا لقصص إنستغرام أو سناب شات مع زر Swipe Up.',
    descriptionEn: 'Crafts ultra-fast 10-15s vertical ads tailored for Stories and Snapchat.',
    group: 'ads',
    outputType: 'video',
    adsCategory: 'video',
    params: [
      { key: 'offer', flag: 'offer', isPositional: true, type: 'text', required: true, labelAr: 'العرض أو الحدث', labelEn: 'Offer / Event', hintAr: 'عرض نهاية الأسبوع في مطعم', hintEn: 'Weekend restaurant offer' },
      resolveParam('duration'),
      resolveParam('platform'),
      resolveParam('cta')
    ],
    example: `/story ad عرض نهاية الأسبوع في مطعم --duration=10sec --platform=instagram-story --cta=visit-now`,
    qualityRules: [
      'رسالة واحدة مباشرة تظهر في الثانية الأولى مع CTA سهمي واضح'
    ],
    keywords: ['story ad', 'ستوري', 'سناب', 'snapchat', 'swipe up'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 140,
    isFavorite: false
  },
  {
    id: 'ads-vid-038',
    code: '/video hook',
    titleAr: 'افتتاحيات الفيديو الإعلاني الخاطفة',
    titleEn: 'Video Ad Opening Hooks (First 3s)',
    descriptionAr: 'يقترح افتتاحيات بصرية ونصية قوية لأول 3 ثوانٍ لكسر التمرير ورفع وقت المشاهدة.',
    descriptionEn: 'Generates scroll-stopping 3-second visual and verbal video hooks.',
    group: 'ads',
    outputType: 'video',
    adsCategory: 'video',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج', labelEn: 'Product', hintAr: 'جهاز تنظيف منزلي ذكي', hintEn: 'Smart home cleaner' },
      { key: 'count', flag: 'count', isPositional: false, type: 'string', required: false, labelAr: 'العدد', labelEn: 'Count', hintAr: '10, 5', hintEn: '10, 5' },
      resolveParam('audience'),
      resolveParam('style')
    ],
    example: `/video hook جهاز تنظيف منزلي --count=10 --audience=busy-moms --style=pattern-interrupt`,
    qualityRules: [
      'تنويع أنواع الهوك: صدمة بصرية، تساؤل غير مألوف، ونتيجة قبل السبب'
    ],
    keywords: ['video hook', 'هوك فيديو', '3 ثواني', 'تيك توك هوك', 'reels hook'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 165,
    isFavorite: true
  },
  {
    id: 'ads-vid-039',
    code: '/unboxing ad',
    titleAr: 'سيناريو فيديو فتح الصندوق (Unboxing)',
    titleEn: 'Product Unboxing Experience Ad',
    descriptionAr: 'ينشئ سيناريو فيديو فتح علبة المنتج مع إبراز الانطباع الأول والتغليف الفاخر.',
    descriptionEn: 'Creates unboxing reaction scripts emphasizing packaging quality and first impressions.',
    group: 'ads',
    outputType: 'video',
    adsCategory: 'video',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج', labelEn: 'Product', hintAr: 'هاتف جديد, علبة عطور وهدايا', hintEn: 'New phone, gift perfume box' },
      resolveParam('duration'),
      resolveParam('platform'),
      resolveParam('tone')
    ],
    example: `/unboxing ad هاتف جديد --duration=30sec --platform=tiktok --tone=excited`,
    qualityRules: [
      'التركيز على أصوات فتح الصندوق (ASMR) وشعور الحماس'
    ],
    keywords: ['unboxing', 'فتح الصندوق', 'تغليف', 'asmr', 'منتجات'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 115,
    isFavorite: false
  },
  {
    id: 'ads-vid-040',
    code: '/video ad storyboard',
    titleAr: 'لوحة قصة المشاهد (Storyboard)',
    titleEn: 'Complete Video Ad Storyboard',
    descriptionAr: 'يقسم الإعلان إلى مشاهد زمنية مفصلة مع النص، حركة الكاميرا، الصوت، والزمن بالثواني.',
    descriptionEn: 'Full scene-by-scene storyboard breakdown detailing visuals, audio, text, and timing.',
    group: 'ads',
    outputType: 'video',
    adsCategory: 'video',
    params: [
      { key: 'service', flag: 'service', isPositional: true, type: 'text', required: true, labelAr: 'الخدمة أو المنتج', labelEn: 'Service / Product', hintAr: 'خدمة تنظيف سيارات متنقلة', hintEn: 'Mobile car detailing' },
      resolveParam('duration'),
      { key: 'scenes', flag: 'scenes', isPositional: false, type: 'string', required: false, labelAr: 'عدد المشاهد', labelEn: 'Number of Scenes', hintAr: '5, 6, 8', hintEn: '5, 6, 8' },
      resolveParam('platform')
    ],
    example: `/video ad storyboard خدمة تنظيف سيارات --duration=30sec --scenes=5 --platform=instagram-reels`,
    qualityRules: [
      'تحديد المشهد البصري والصوت المصاحب وزمن كل لقطة بالثانية'
    ],
    keywords: ['storyboard', 'ستوري بورد', 'مشاهد', 'إخراج إعلاني', 'سيناريو'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 145,
    isFavorite: true
  }
];
