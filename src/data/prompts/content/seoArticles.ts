import { CommandPrompt } from '../../../types/prompt';
import { CONTENT_COMMON_PARAMS, HUMAN_CONTENT_RULES, SAFETY_QUALITY_RULES } from './constants';

export const SEO_ARTICLES_PROMPTS: CommandPrompt[] = [
  {
    id: 'cnt-seo-041',
    code: '/seo article',
    titleAr: 'مقال متوافق مع نية البحث ومحركات البحث (SEO)',
    titleEn: 'Search-Intent Optimized SEO Article',
    descriptionAr: 'يكتب مقالًا متكاملًا يجيب على نية بحث المستخدم (Search Intent) بتوزيع طبيعي للكلمات المفتاحية دون حشو.',
    descriptionEn: 'Writes comprehensive SEO articles fulfilling search intent with natural keyword distribution and rich structured depth.',
    group: 'content',
    contentCategory: 'seo_articles',
    outputType: 'text',
    outputBadges: ['SEO', 'مقال تسويقي'],
    params: [
      { key: 'topic', flag: 'topic', isPositional: true, type: 'text', required: true, labelAr: 'موضوع المقال', labelEn: 'Article topic', hintAr: 'أفضل طرق تنظيف المكيفات في المنزل, دليل اختيار اللابتوب...', hintEn: 'Best AC cleaning methods at home, laptop buying guide...' },
      { key: 'keyword', flag: 'keyword', isPositional: false, type: 'string', required: true, labelAr: 'الكلمة المفتاحية الرئيسية', labelEn: 'Primary keyword', hintAr: 'تنظيف المكيفات, اختيار اللابتوب...', hintEn: 'AC cleaning, choose laptop...' },
      CONTENT_COMMON_PARAMS.audience,
      CONTENT_COMMON_PARAMS.length,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/seo article أفضل طرق تنظيف المكيفات في المنزل --keyword=تنظيف المكيفات --audience=homeowners --length=1500words --language=ar',
    qualityRules: [
      'تغطية نية البحث بوضوح وإجابة تساؤل الباحث في الفقرات الأولى',
      'توزيع الكلمة المفتاحية والمرادفات الطبيعية دون حشو مصطنع (Keyword Stuffing)',
      ...HUMAN_CONTENT_RULES,
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['seo article', 'مقال سيو', 'محركات البحث', 'كلمات مفتاحية', 'نية البحث'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 380,
    isFavorite: true
  },
  {
    id: 'cnt-seo-042',
    code: '/seo outline',
    titleAr: 'مخطط وهيكلية مقال سيو وفق نية البحث',
    titleEn: 'SEO Search-Intent Article Outline',
    descriptionAr: 'يبني هيكل مقال SEO متكامل وفق متصدرات محركات البحث مع تضمين الكلمات الفرعية وأسئلة People Also Ask.',
    descriptionEn: 'Outlines SEO pillar articles based on SERP analysis, LSI keywords, and People Also Ask questions.',
    group: 'content',
    contentCategory: 'seo_articles',
    outputType: 'text',
    outputBadges: ['SEO', 'خطة محتوى'],
    params: [
      { key: 'topic', flag: 'topic', isPositional: true, type: 'text', required: true, labelAr: 'الموضوع الرئيسي', labelEn: 'Topic', hintAr: 'صيانة السيارات قبل السفر, التغذية الصحية للرياضيين...', hintEn: 'Pre-trip car maintenance, athlete nutrition...' },
      { key: 'keyword', flag: 'keyword', isPositional: false, type: 'string', required: true, labelAr: 'الكلمة المفتاحية', labelEn: 'Target keyword', hintAr: 'فحص السيارة قبل السفر...', hintEn: 'pre-trip car inspection...' },
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/seo outline صيانة السيارات قبل السفر --keyword=فحص السيارة قبل السفر --language=ar',
    qualityRules: [...HUMAN_CONTENT_RULES, ...SAFETY_QUALITY_RULES],
    keywords: ['seo outline', 'هيكل سيو', 'خطة سيو', 'people also ask'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 260,
    isFavorite: false
  },
  {
    id: 'cnt-seo-043',
    code: '/product seo page',
    titleAr: 'محتوى صفحة منتج مهيأة للـ SEO والتحويل',
    titleEn: 'E-commerce Product SEO Landing Page',
    descriptionAr: 'يكتب محتوى صفحة منتج لمتجر إلكتروني يجمع بين جاذبية البيع والتهيئة للظهور في نتائج البحث وجوجل للتسوق.',
    descriptionEn: 'Writes high-converting product pages combining persuasive copywriting and search visibility optimization.',
    group: 'content',
    contentCategory: 'seo_articles',
    outputType: 'text',
    outputBadges: ['SEO', 'صفحة منتج'],
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'اسم ووصف المنتج', labelEn: 'Product name / description', hintAr: 'كريم ترطيب طبيعي, ساعة رياضية مقاومة للماء...', hintEn: 'Natural moisturizer cream, waterproof sport watch...' },
      { key: 'keyword', flag: 'keyword', isPositional: false, type: 'string', required: true, labelAr: 'الكلمة المفتاحية المستهدفة', labelEn: 'Primary keyword', hintAr: 'كريم ترطيب للبشرة الجافة...', hintEn: 'moisturizer for dry skin...' },
      CONTENT_COMMON_PARAMS.audience,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/product seo page كريم ترطيب طبيعي --keyword=كريم ترطيب للبشرة الجافة --audience=women --language=ar',
    qualityRules: [
      'ذكر مكونات ومواصفات المنتج الحقيقية فقط دون ادعاءات طبية غير مثبتة',
      'توزيع المزايا والأسئلة الشائعة حول الاستخدام والشحن',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['صفحة منتج', 'product page', 'سيو متجر', 'تجارة إلكترونية', 'product seo'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 290,
    isFavorite: false
  },
  {
    id: 'cnt-seo-044',
    code: '/service seo page',
    titleAr: 'صفحة خدمة تسويقية مهيأة لمحركات البحث',
    titleEn: 'High-Converting Service SEO Landing Page',
    descriptionAr: 'يكتب محتوى صفحة هبوط للخدمات مع صياغة قوية للمشاكل، خطوات التنفيذ، باقات الأسعار، والدعوة للطلب.',
    descriptionEn: 'Drafts comprehensive service landing pages with pain points, execution process, FAQs, and quote request CTAs.',
    group: 'content',
    contentCategory: 'seo_articles',
    outputType: 'text',
    outputBadges: ['SEO', 'صفحة خدمة'],
    params: [
      { key: 'service', flag: 'service', isPositional: true, type: 'text', required: true, labelAr: 'الخدمة المقدمة', labelEn: 'Service offered', hintAr: 'خدمة تنظيف منازل, صيانة مكيفات, استشارات قانونية...', hintEn: 'Home cleaning, AC repair, legal advisory...' },
      { key: 'keyword', flag: 'keyword', isPositional: false, type: 'string', required: true, labelAr: 'الكلمة المفتاحية المستهدفة', labelEn: 'Keyword', hintAr: 'شركة تنظيف منازل في الرياض...', hintEn: 'Home cleaning company in Riyadh...' },
      { key: 'city', flag: 'city', isPositional: false, type: 'string', required: false, labelAr: 'المدينة المستهدفة', labelEn: 'Target city', hintAr: 'الرياض, جدة, الدمام...', hintEn: 'Riyadh, Jeddah, Dammam...' },
      CONTENT_COMMON_PARAMS.cta
    ],
    example: '/service seo page خدمة تنظيف منازل --keyword=شركة تنظيف منازل في الرياض --city=الرياض --cta=request-quote',
    qualityRules: [
      'توضيح مراحل تقديم الخدمة ومزايا الضمان وجودة التنفيذ',
      'تجنب ادعاء أن الشركة "الأفضل عالميًا" دون مسوغات واقعية',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['صفحة خدمة', 'service seo', 'صفحة هبوط', 'خدمات محلية', 'طلب تسعيرة'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 240,
    isFavorite: false
  },
  {
    id: 'cnt-seo-045',
    code: '/local seo content',
    titleAr: 'محتوى سيو محلي للمدن والأحياء (Local SEO)',
    titleEn: 'Local SEO City & Area Landing Content',
    descriptionAr: 'يكتب محتوى مخصص للبحث المحلي مستهدفًا مدينة أو حيًّا معينًا مع تضمين المعالم ونطاق التغطية.',
    descriptionEn: 'Writes hyper-local SEO landing page content targeting specific cities, neighborhoods, and regional terms.',
    group: 'content',
    contentCategory: 'seo_articles',
    outputType: 'text',
    outputBadges: ['SEO محلي', 'مدن ومناطق'],
    params: [
      { key: 'service', flag: 'service', isPositional: true, type: 'text', required: true, labelAr: 'الخدمة المحلية', labelEn: 'Local service', hintAr: 'صيانة مكيفات, غسيل سيارات متنقل, توصيل ورد...', hintEn: 'AC maintenance, mobile car wash, flower delivery...' },
      { key: 'city', flag: 'city', isPositional: false, type: 'string', required: true, labelAr: 'المدينة المستهدفة', labelEn: 'City', hintAr: 'جدة, الرياض, الخبر...', hintEn: 'Jeddah, Riyadh, Khobar...' },
      CONTENT_COMMON_PARAMS.audience,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/local seo content صيانة مكيفات --city=جدة --audience=homeowners --language=ar',
    qualityRules: [
      'مراعاة الطبيعة الجغرافية والمناخية للمدينة في أسلوب التقديم',
      'تجنب حشو أسماء الأحياء بطريقة آلية غير مريحة للقارئ',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['سيو محلي', 'local seo', 'خدمات في الرياض', 'خدمات في جدة', 'بحث محلي'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 210,
    isFavorite: false
  },
  {
    id: 'cnt-seo-046',
    code: '/topic cluster',
    titleAr: 'عناقيد المحتوى المعرفي (Topic Cluster)',
    titleEn: 'Topic Cluster & Pillar Strategy',
    descriptionAr: 'يبني استراتيجية عنقود محتوى متكامل يربط مقال العمود الفقري (Pillar) بالمقالات الفرعية (Clusters) والروابط الداخلية.',
    descriptionEn: 'Constructs authoritative topic clusters mapping core pillar pages to supporting cluster subtopics and internal links.',
    group: 'content',
    contentCategory: 'seo_articles',
    outputType: 'text',
    outputBadges: ['عناقيد محتوى', 'استراتيجية SEO'],
    params: [
      { key: 'theme', flag: 'theme', isPositional: true, type: 'text', required: true, labelAr: 'الموضوع الشامل للموقع', labelEn: 'Broad topic', hintAr: 'العناية بالبشرة, الاستثمار العقاري, القهوة المختصة...', hintEn: 'Skincare, real estate investing, specialty coffee...' },
      { key: 'keyword', flag: 'keyword', isPositional: false, type: 'string', required: true, labelAr: 'الكلمة المركزية', labelEn: 'Core seed keyword', hintAr: 'العناية بالبشرة...', hintEn: 'skincare...' },
      { key: 'articles', flag: 'articles', isPositional: false, type: 'number', required: false, defaultValue: 12, labelAr: 'عدد المقالات العنقودية', labelEn: 'Article count', hintAr: '8, 12, 16...', hintEn: '8, 12, 16...' },
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/topic cluster العناية بالبشرة --keyword=العناية بالبشرة --articles=12 --language=ar',
    qualityRules: [
      'توضيح استراتيجية الروابط الداخلية (Internal Linking) بين المقال الرئيسي والمقالات الفرعية',
      'تجنب التنافس الذاتي بين الكلمات المفتاحية (Keyword Cannibalization)',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['topic cluster', 'عناقيد المحتوى', 'سيو استراتيجي', 'pillar page', 'روابط داخلية'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 230,
    isFavorite: false
  },
  {
    id: 'cnt-seo-047',
    code: '/meta title',
    titleAr: 'عناوين سيو التعريفية (Meta Titles)',
    titleEn: 'Click-Worthy SEO Meta Titles',
    descriptionAr: 'يولد خيارات عناوين ميتا (Meta Titles) جذابة بطول 50-60 حرفًا تشجع على النقر وتحتوي الكلمة المفتاحية في البداية.',
    descriptionEn: 'Generates 50-60 character high-CTR SEO meta title options embedding the primary keyword upfront.',
    group: 'content',
    contentCategory: 'seo_articles',
    outputType: 'text',
    outputBadges: ['SEO', 'عناوين ميتا'],
    params: [
      { key: 'keyword', flag: 'keyword', isPositional: true, type: 'text', required: true, labelAr: 'الكلمة المفتاحية والموضوع', labelEn: 'Keyword / Topic', hintAr: 'تنظيف المكيفات في الرياض, دورة تصميم واجهات...', hintEn: 'AC cleaning Riyadh, UI design course...' },
      { key: 'count', flag: 'count', isPositional: false, type: 'number', required: false, defaultValue: 10, labelAr: 'عدد الخيارات', labelEn: 'Count', hintAr: '5, 10, 15...', hintEn: '5, 10, 15...' },
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/meta title تنظيف المكيفات في الرياض --count=10 --language=ar',
    qualityRules: [
      'الالتزام بطول لا يتجاوز 60 حرفًا لتفادي القطع في صفحة نتائج بحث جوجل',
      'تضمين عناصر الجذب: السنة الحالية، الأرقام، الميزة المجانية أو التنافسية',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['meta title', 'عنوان سيو', 'عنوان ميتا', 'سيو جوجل', 'تحسين النقر'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 290,
    isFavorite: false
  },
  {
    id: 'cnt-seo-048',
    code: '/meta description',
    titleAr: 'أوصاف ميتا محفزة للنقر (Meta Descriptions)',
    titleEn: 'High-CTR SEO Meta Descriptions',
    descriptionAr: 'يكتب أوصاف ميتا مقنعة بطول 140-160 حرفًا تلخص المحتوى وتتضمن الكلمة المفتاحية ودعوة واضحة للنقر.',
    descriptionEn: 'Drafts persuasive 140-160 character meta descriptions summarizing page value and prompting clicks.',
    group: 'content',
    contentCategory: 'seo_articles',
    outputType: 'text',
    outputBadges: ['SEO', 'وصف ميتا'],
    params: [
      { key: 'service', flag: 'service', isPositional: true, type: 'text', required: true, labelAr: 'الخدمة أو موضوع الصفحة', labelEn: 'Service / Topic', hintAr: 'خدمة غسيل سيارات متنقلة, متجر عطور رجالية...', hintEn: 'Mobile car wash, men perfume shop...' },
      { key: 'city', flag: 'city', isPositional: false, type: 'string', required: false, labelAr: 'المدينة إن وجدت', labelEn: 'City if applicable', hintAr: 'جدة, الرياض...', hintEn: 'Jeddah, Riyadh...' },
      { key: 'count', flag: 'count', isPositional: false, type: 'number', required: false, defaultValue: 5, labelAr: 'العدد', labelEn: 'Count', hintAr: '3, 5, 8...', hintEn: '3, 5, 8...' },
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/meta description خدمة غسيل سيارات متنقلة --city=جدة --count=5 --language=ar',
    qualityRules: [
      'الحفاظ على الطول بين 140 و155 حرفًا مع مسافات الأحرف',
      'تضمين دعوة للنقر: اكتشف الآن، احصل على عرض سعر، اقرأ المزيد',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['meta description', 'وصف ميتا', 'وصف سيو', 'نتائج البحث'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 260,
    isFavorite: false
  },
  {
    id: 'cnt-seo-049',
    code: '/faq schema content',
    titleAr: 'محتوى أسئلة وإجابات لبيانات Schema المنظمة',
    titleEn: 'FAQ Schema Markup Content',
    descriptionAr: 'يصيغ أسئلة وإجابات مباشرة ودقيقة مهيأة تقنيًا للظهور في النتيجة الصفرية وRich Snippets وFAQ Schema.',
    descriptionEn: 'Crafts direct, factual Q&A pairs formatted for Google Rich Snippets and FAQPage schema implementation.',
    group: 'content',
    contentCategory: 'seo_articles',
    outputType: 'text',
    outputBadges: ['SEO', 'Schema FAQ'],
    params: [
      { key: 'business', flag: 'business', isPositional: true, type: 'text', required: true, labelAr: 'المجال أو المتجر', labelEn: 'Business type', hintAr: 'متجر عطور, عيادة طبية, منصة سحابية...', hintEn: 'Perfume store, clinic, SaaS platform...' },
      { key: 'topic', flag: 'topic', isPositional: false, type: 'string', required: true, labelAr: 'موضوع الأسئلة', labelEn: 'Topic', hintAr: 'الشحن والاسترجاع, طرق الدفع, سياسة الخصوصية...', hintEn: 'Shipping and returns, payment methods...' },
      { key: 'questions', flag: 'questions', isPositional: false, type: 'number', required: false, defaultValue: 8, labelAr: 'عدد الأسئلة', labelEn: 'Question count', hintAr: '5, 8, 10...', hintEn: '5, 8, 10...' },
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/faq schema content متجر عطور --topic=الشحن والاسترجاع --questions=8 --language=ar',
    qualityRules: [
      'إجابات مباشرة تبدأ بالإجابة دون مقدمات إنشائية طويلة لتناسب مقتطفات جوجل',
      'ذكر السياسات الحقيقية والواضحة للعملاء',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['faq schema', 'بيانات منظمة', 'rich snippet', 'سيو تقني', 'نتيجة صفرية'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 200,
    isFavorite: false
  },
  {
    id: 'cnt-seo-050',
    code: '/content refresh',
    titleAr: 'تحديث وإنعاش مقال قديم للـ SEO والوضوح',
    titleEn: 'SEO Content Refresh & Optimization',
    descriptionAr: 'يراجع مقالًا قديمًا ويحدث أرقامه ومعلوماته، يحذف الحشو، ويضيف أقسامًا جديدة تعيده للمنافسة في محركات البحث.',
    descriptionEn: 'Audits and refreshes outdated articles with modern data, better flow, deleted fluff, and updated SERP subheads.',
    group: 'content',
    contentCategory: 'seo_articles',
    outputType: 'text',
    outputBadges: ['SEO', 'تحليل وتحديث'],
    params: [
      { key: 'text', flag: 'text', isPositional: true, type: 'text', required: true, labelAr: 'النص أو رابط/موضوع المقال القديم', labelEn: 'Old article text', hintAr: 'الصق نص المقال القديم هنا...', hintEn: 'Paste old article text here...' },
      CONTENT_COMMON_PARAMS.goal,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/content refresh [الصق المقال] --goal=clarity,accuracy,seo --language=ar',
    qualityRules: [
      'تحديث المعلومات القديمة والتأكد من صحة التواريخ والمفاهيم التقنية',
      'حذف الجمل المكررة وتبسيط الصياغة لتكون بشرية ومباشرة',
      ...HUMAN_CONTENT_RULES,
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['content refresh', 'تحديث المحتوى', 'إنعاش المقال', 'سيو', 'تحسين المقالات'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 250,
    isFavorite: false
  }
];
