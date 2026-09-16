import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const DESIGN_PRODUCTS_PROMPTS: CommandPrompt[] = [
  {
    id: 'des-prod-021',
    code: '/product photo',
    titleAr: 'تصوير منتج استوديو احترافي (Product Photo)',
    titleEn: 'Commercial Studio Product Photography',
    descriptionAr: 'ينشئ صورة منتج استوديو احترافية بإضاءة تجارية نقية وظلال ناعمة تبرز جودة وخامة المنتج.',
    descriptionEn: 'Produce pristine studio packshots with controlled specular highlights, natural drop shadows, and ultra-sharp textures.',
    group: 'design',
    designCategory: 'products',
    outputType: 'image',
    outputBadges: ['صورة منتج'],
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'string', required: true, labelAr: 'المنتج وتفاصيله', labelEn: 'Product Description', hintAr: 'مثال: زجاجة عطر زجاجية فاخرة', hintEn: 'e.g. Luxury amber glass perfume bottle with gold cap' },
      { key: 'background', flag: 'background', isPositional: false, type: 'string', required: false, defaultValue: 'white', labelAr: 'الخلفية', labelEn: 'Background', hintAr: 'white, marble-pedestal, dark-textured, minimalist-studio', hintEn: 'white' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'studio-soft', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'studio-soft, dramatic-rim, caustic-reflections', hintEn: 'studio-soft' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'square', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'square, vertical, landscape', hintEn: 'square' }
    ],
    example: '/product photo "زجاجة عطر زجاجية فاخرة" --background=white --lighting=studio-soft --format=square',
    qualityRules: [
      'انعكاسات ضوئية نظيفة على الزجاج أو المعدن مع وضوح ملمس الخامات الحقيقية',
      'عزل حواف المنتج بدقة وظلال أرضية ناعمة واقعية غير طافية',
      'توسيط المنتج بنسب بصرية مريحة تتناسب مع العرض في المتاجر الإلكترونية'
    ],
    keywords: ['product photo', 'تصوير منتجات', 'صورة منتج استوديو', 'commercial product shot', 'packshot'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 148,
    isFavorite: true
  },
  {
    id: 'des-prod-022',
    code: '/product hero',
    titleAr: 'لقطة بطلة للمنتج (Hero Shot / Key Visual)',
    titleEn: 'Dynamic Product Hero Shot & Key Visual',
    descriptionAr: 'ينشئ لقطة رئيسية مميزة للمنتج (Hero Shot) مع عناصر تفاعلية مثل تناثر قطرات الماء، المكونات الطائرة، أو الدخان.',
    descriptionEn: 'Generate high-impact key visual hero shots with dynamic levitation, ingredient splashes, and energetic lighting.',
    group: 'design',
    designCategory: 'products',
    outputType: 'image',
    outputBadges: ['صورة منتج'],
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'string', required: true, labelAr: 'المنتج والعناصر المرافقة', labelEn: 'Product & Splashes', hintAr: 'مثال: علبة مشروب طاقة محاطة بقطرات ماء متناثرة', hintEn: 'e.g. Energy drink can with frozen water splashes and ice shards' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'dramatic-rim', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'dramatic-rim, neon-glow, high-speed-flash', hintEn: 'dramatic-rim' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'advertising', labelAr: 'الأسلوب الإعلاني', labelEn: 'Style', hintAr: 'advertising, premium-hero, dynamic-motion', hintEn: 'advertising' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'vertical', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'vertical, landscape, square', hintEn: 'vertical' }
    ],
    example: '/product hero "علبة مشروب طاقة محاطة بقطرات ماء متناثرة" --lighting=dramatic-rim --style=advertising --format=vertical',
    qualityRules: [
      'تجميد حركة السوائل أو الجسيمات بجودة تصوير السرعات العالية (High-speed capture)',
      'تركيز الحدة الفائقة على شعار المنتج وواجهته الأمامية',
      'إضاءة حواف حادة (Rim light) تفصل المنتج بقوة عن الخلفية'
    ],
    keywords: ['product hero', 'لقطة رئيسية للمنتج', 'hero shot', 'اعلانات مشروبات', 'dynamic product'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 132,
    isFavorite: false
  },
  {
    id: 'des-prod-023',
    code: '/luxury product',
    titleAr: 'منتج فاخر بأجواء راقية (Luxury Product)',
    titleEn: 'Luxury & Haute Horlogerie Still Life',
    descriptionAr: 'ينشئ صورة لمنتج فاخر (عطور، ساعات، مجوهرات) بخلفيات رخامية أو مخملية وإضاءة ذهبية غنية.',
    descriptionEn: 'Craft sophisticated luxury still-life visuals with gold accents, obsidian reflections, and velvety moody illumination.',
    group: 'design',
    designCategory: 'products',
    outputType: 'image',
    outputBadges: ['صورة منتج'],
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'string', required: true, labelAr: 'المنتج الفاخر', labelEn: 'Luxury Item', hintAr: 'مثال: ساعة يد رجالية فاخرة', hintEn: 'e.g. Swiss luxury chronograph watch with sapphire glass' },
      { key: 'background', flag: 'background', isPositional: false, type: 'string', required: false, defaultValue: 'dark-marble', labelAr: 'الخلفية والخامات', labelEn: 'Pedestal & Material', hintAr: 'dark-marble, black-velvet, silk-drape, gold-accent', hintEn: 'dark-marble' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'moody-luxury', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'moody-luxury, warm-golden-glow, precision-spotlight', hintEn: 'moody-luxury' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'square', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'square, vertical', hintEn: 'square' }
    ],
    example: '/luxury product "ساعة يد رجالية فاخرة" --background=dark-marble --lighting=moody-luxury --format=square',
    qualityRules: [
      'إبراز لمعان المعادن الثمينة والأحجار الكريمة وانعكاسات الزجاج دون تشويش',
      'تدرجات لونية غنية تعبر عن الفخامة مثل الأسود الملكي، الذهب، والزمرد',
      'تكوين بصري متوازن يمنح المنتج هيبة وتفردًا في المشهد'
    ],
    keywords: ['luxury product', 'منتج فاخر', 'تصوير ساعات', 'تصوير مجوهرات', 'luxury brand photo'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 125,
    isFavorite: false
  },
  {
    id: 'des-prod-024',
    code: '/product mockup',
    titleAr: 'نموذج عرض للمنتج (Product Mockup Scene)',
    titleEn: 'Photorealistic Product Mockup & Staging',
    descriptionAr: 'ينشئ نموذج عرض بصري للمنتج في بيئة ثلاثية الأبعاد حديثة مع منصات هندسية أنيقة.',
    descriptionEn: 'Produce versatile 3D product mockup podiums with geometric pedestals, pastel shadows, and organic botanicals.',
    group: 'design',
    designCategory: 'products',
    outputType: 'image',
    outputBadges: ['صورة منتج'],
    params: [
      { key: 'item', flag: 'item', isPositional: true, type: 'string', required: true, labelAr: 'المنتج والمنصة', labelEn: 'Product & Podium', hintAr: 'مثال: عبوة كريم عناية بالبشرة على قاعدة خرسانية', hintEn: 'e.g. Skincare cosmetic jar on textured concrete cylinder pedestal' },
      { key: 'environment', flag: 'environment', isPositional: false, type: 'string', required: false, defaultValue: 'minimalist-studio', labelAr: 'البيئة المحيطة', labelEn: 'Environment', hintAr: 'minimalist-studio, botanical-shadows, geometric-stage', hintEn: 'minimalist-studio' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'soft-daylight', labelAr: 'الضوء', labelEn: 'Lighting', hintAr: 'soft-daylight, sunlight-through-blinds, studio-even', hintEn: 'soft-daylight' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'vertical', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'vertical, square', hintEn: 'vertical' }
    ],
    example: '/product mockup "عبوة كريم عناية بالبشرة على قاعدة خرسانية" --environment=minimalist-studio --lighting=soft-daylight --format=vertical',
    qualityRules: [
      'توزيع ظلال نباتية ناعمة (Gobo shadows) تضفي واقعية وأناقة على المشهد',
      'مكان مخصص ونظيف لملصق العلامة التجارية (Packaging label surface)',
      'تناسق ألوان الباستيل والمواد الطبيعية كالحجر والخشب'
    ],
    keywords: ['product mockup', 'موك اب منتج', 'mockup 3d', 'تصميم عبوة كريم', 'podium mockup'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 120,
    isFavorite: false
  },
  {
    id: 'des-prod-025',
    code: '/packaging visual',
    titleAr: 'تصميم وتصوير التغليف والعلب (Packaging Visual)',
    titleEn: 'Luxury Packaging & Box Render',
    descriptionAr: 'ينشئ عرضًا بصريًا متكاملاً لتغليف المنتج والعلب الفاخرة والأكياس مع إبراز الملمس والطباعة.',
    descriptionEn: 'Generate realistic packaging visuals, luxury gift boxes, matte paper bags, and holographic foil finishes.',
    group: 'design',
    designCategory: 'products',
    outputType: 'image',
    outputBadges: ['صورة منتج'],
    params: [
      { key: 'packaging', flag: 'packaging', isPositional: true, type: 'string', required: true, labelAr: 'نوع التغليف والمنتج', labelEn: 'Packaging Type', hintAr: 'مثال: علبة شوكولاتة فاخرة مع شريط حريري', hintEn: 'e.g. Premium matte black chocolate box with embossed gold foil ribbon' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'realistic-render', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'realistic-render, studio-packshot, 3d-box', hintEn: 'realistic-render' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'studio', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'studio, warm-ambient, rim-light', hintEn: 'studio' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'square', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'square, vertical', hintEn: 'square' }
    ],
    example: '/packaging visual "علبة شوكولاتة فاخرة مع شريط حريري" --style=realistic-render --lighting=studio --format=square',
    qualityRules: [
      'إبراز تفاصيل الطباعة البارزة (Embossing) أو التطعيم اللامع (Gold foil)',
      'زوايا وزوايا طي العلبة الكرتونية بدقة هندسية واقعية',
      'إظهار ملمس الورق المطفي أو اللامع حسب المواصفات'
    ],
    keywords: ['packaging visual', 'تصميم تغليف', 'علبة شوكولاتة فاخرة', 'box mockup', 'packaging design'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 114,
    isFavorite: false
  },
  {
    id: 'des-prod-026',
    code: '/ecommerce image',
    titleAr: 'صورة متجر إلكتروني نظيفة (E-commerce Shot)',
    titleEn: 'Clean E-Commerce Catalog Product Shot',
    descriptionAr: 'ينشئ صورة منتج نظيفة ومطابقة لمعايير المتاجر الكبرى (Amazon, Shopify, Salla) بخلفية بيضاء نقية.',
    descriptionEn: 'Produce compliant, crisp white-background catalog imagery optimized for Amazon, Salla, and Shopify conversion.',
    group: 'design',
    designCategory: 'products',
    outputType: 'image',
    outputBadges: ['صورة منتج'],
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'string', required: true, labelAr: 'المنتج التجاري', labelEn: 'Commercial Product', hintAr: 'مثال: حذاء رياضي عصري', hintEn: 'e.g. Modern athletic running shoe side profile' },
      { key: 'background', flag: 'background', isPositional: false, type: 'string', required: false, defaultValue: 'pure-white', labelAr: 'الخلفية', labelEn: 'Background', hintAr: 'pure-white (RGB 255,255,255), light-neutral', hintEn: 'pure-white' },
      { key: 'angle', flag: 'angle', isPositional: false, type: 'string', required: false, defaultValue: 'three-quarter', labelAr: 'زاوية العرض', labelEn: 'Angle', hintAr: 'three-quarter, side, front, top', hintEn: 'three-quarter' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'square', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'square (1:1)', hintEn: 'square' }
    ],
    example: '/ecommerce image "حذاء رياضي عصري" --background=pure-white --angle=three-quarter --format=square',
    qualityRules: [
      'خلفية بيضاء نقية مع ظل طبيعي خفيف غير مشوه (Natural ground contact shadow)',
      'إضاءة متساوية تظهر كافة تفاصيل الخياطة والملمس والألوان الحقيقية للمنتج',
      'تعبئة المنتج لحوالي 80-85% من مساحة الإطار لضمان سهولة التصفح'
    ],
    keywords: ['ecommerce image', 'صورة متجر الكتروني', 'تصوير امازون', 'خلفية بيضاء للمنتج', 'shopify product'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 138,
    isFavorite: false
  },
  {
    id: 'des-prod-027',
    code: '/product lifestyle',
    titleAr: 'منتج في سياق الاستخدام الحقيقي (Product Lifestyle)',
    titleEn: 'In-Context Product Lifestyle Photography',
    descriptionAr: 'ينشئ صورة للمنتج أثناء استخدامه الفعلي في بيئة طبيعية تشجع المستهلك على الشراء.',
    descriptionEn: 'Capture products naturally integrated into everyday home, cafe, or outdoor environments in active use.',
    group: 'design',
    designCategory: 'products',
    outputType: 'image',
    outputBadges: ['صورة منتج'],
    params: [
      { key: 'product_context', flag: 'product_context', isPositional: true, type: 'string', required: true, labelAr: 'المنتج وسياق الاستخدام', labelEn: 'Product & Scene Context', hintAr: 'مثال: كوب قهوة سيراميك محمول على طاولة خشبية في مقهى مشمس', hintEn: 'e.g. Ceramic coffee tumbler on sunny wooden cafe table with book' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'sunlight', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'sunlight, morning-glow, ambient-cozy', hintEn: 'sunlight' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'warm-editorial', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'warm-editorial, candid-lifestyle, instagrammable', hintEn: 'warm-editorial' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'vertical', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'vertical, square, landscape', hintEn: 'vertical' }
    ],
    example: '/product lifestyle "كوب قهوة سيراميك محمول على طاولة خشبية في مقهى مشمس" --lighting=sunlight --style=warm-editorial --format=vertical',
    qualityRules: [
      'جعل المنتج هو نقطة الجذب البصري الأساسية مع الحفاظ على عفوية البيئة المحيطة',
      'استخدام إضاءة طبيعية دافئة وتدرجات ضوئية مريحة تعكس تجربة المستخدم',
      'تجنب ازدحام العناصر الثانوية في الكادر لعدم تشتيت الانتباه عن المنتج'
    ],
    keywords: ['product lifestyle', 'منتج في بيئة طبيعية', 'تصوير لايف ستايل', 'lifestyle product shot', 'كوب قهوة'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 126,
    isFavorite: false
  },
  {
    id: 'des-prod-028',
    code: '/product ad visual',
    titleAr: 'تصميم إعلان بصري كامل للمنتج (Product Ad Visual)',
    titleEn: 'High-Conversion Social Ad Creative Visual',
    descriptionAr: 'ينشئ مشهدًا إعلانيًا جاهزًا يحتوي على مساحات مخصصة للنصوص والعناوين مع إبراز المنتج بأسلوب تسويقي قوي.',
    descriptionEn: 'Design conversion-focused advertising visuals with strategic negative copy space and striking focal points.',
    group: 'design',
    designCategory: 'products',
    outputType: 'image',
    outputBadges: ['تصميم إعلاني'],
    params: [
      { key: 'ad_concept', flag: 'ad_concept', isPositional: true, type: 'string', required: true, labelAr: 'فكرة الإعلان والمنتج', labelEn: 'Ad Creative Concept', hintAr: 'مثال: إعلان سماعات لاسلكية حديثة', hintEn: 'e.g. Wireless noise-canceling headphones floating with soundwaves' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'modern-commercial', labelAr: 'الأسلوب الإعلاني', labelEn: 'Style', hintAr: 'modern-commercial, bold-typography-ready, minimal-impact', hintEn: 'modern-commercial' },
      { key: 'space', flag: 'space', isPositional: false, type: 'string', required: false, defaultValue: 'top-empty-for-text', labelAr: 'مساحة النصوص الخالية', labelEn: 'Copy Space', hintAr: 'top-empty-for-text, left-third, right-clean', hintEn: 'top-empty-for-text' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'vertical', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'vertical (9:16 / 4:5), square', hintEn: 'vertical' }
    ],
    example: '/product ad visual "إعلان سماعات لاسلكية حديثة" --style=modern-commercial --space=top-empty-for-text --format=vertical',
    qualityRules: [
      'توفير مساحة سلبية نظيفة (Negative space) في الأعلى أو الجانب لوضع الشعارات والنصوص الإعلانية',
      'توجيه مسار العين (Eye direction) مباشرة نحو المنتج ثم نحو مكان الدعوة لاتخاذ إجراء',
      'ألوان مشبعة وجذابة تبرز فوراً في خلاصات منصات التواصل الاجتماعي'
    ],
    keywords: ['product ad visual', 'تصميم اعلان بصري', 'اعلان سماعات', 'commercial ad visual', 'social ad design'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 142,
    isFavorite: true
  },
  {
    id: 'des-prod-029',
    code: '/sale poster',
    titleAr: 'بوستر عروض وتخفيضات تجارية (Sale Poster Visual)',
    titleEn: 'Commercial Promotional Sale Poster',
    descriptionAr: 'ينشئ بوستر بصري مبهر للحملات الترويجية والخصومات الموسمية (Black Friday، يوم التأسيس، العيد).',
    descriptionEn: 'Generate vibrant promotional sale posters with dynamic 3D typography pedestals, badges, and festive themes.',
    group: 'design',
    designCategory: 'products',
    outputType: 'image',
    outputBadges: ['تصميم إعلاني'],
    params: [
      { key: 'offer_details', flag: 'offer_details', isPositional: true, type: 'string', required: true, labelAr: 'تفاصيل العرض والمناسبة', labelEn: 'Sale & Seasonal Details', hintAr: 'مثال: عروض نهاية العام لمتجر إلكترونيات', hintEn: 'e.g. Year-end mega tech sale with discount balloons and podium' },
      { key: 'colors', flag: 'colors', isPositional: false, type: 'string', required: false, defaultValue: 'red,gold', labelAr: 'ألوان العرض', labelEn: 'Color Palette', hintAr: 'red,gold / neon,black / purple,yellow', hintEn: 'red,gold' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: '3d-sale-poster', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: '3d-sale-poster, bold-graphics, festival-promo', hintEn: '3d-sale-poster' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'vertical', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'vertical, square', hintEn: 'vertical' }
    ],
    example: '/sale poster "عروض نهاية العام لمتجر إلكترونيات" --colors=red,gold --style=3d-sale-poster --format=vertical',
    qualityRules: [
      'طاقة بصرية عالية واستخدام عناصر ثلاثية الأبعاد لعرض نسب الخصومات والوسوم',
      'وضوح بصري يشد الانتباه خلال أول ثانية من المشاهدة',
      'توازن الألوان الصاخبة لمنع الإجهاد البصري مع إبراز الفئات المشمولة بالعرض'
    ],
    keywords: ['sale poster', 'بوستر عروض', 'تخفيضات نهاية العام', 'sale banner', 'promotional poster'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 118,
    isFavorite: false
  },
  {
    id: 'des-prod-030',
    code: '/before after visual',
    titleAr: 'مقارنة بصرية قبل وبعد (Before & After Product)',
    titleEn: 'Split-Screen Before & After Product Visual',
    descriptionAr: 'ينشئ تكوينًا بصريًا مقسومًا يوضح الفارق قبل وبعد استخدام المنتج (منتجات التجميل، التنظيف، الديكور، الصيانة).',
    descriptionEn: 'Produce split-screen comparative transformation visuals demonstrating dramatic product effectiveness.',
    group: 'design',
    designCategory: 'products',
    outputType: 'image',
    outputBadges: ['تصميم إعلاني'],
    params: [
      { key: 'comparison', flag: 'comparison', isPositional: true, type: 'string', required: true, labelAr: 'موضوع المقارنة والتحول', labelEn: 'Transformation Comparison', hintAr: 'مثال: تنظيف سيارة قديمة لتصبح لامعة وجديدة', hintEn: 'e.g. Professional auto-detailing dirty vs mirror finish' },
      { key: 'layout', flag: 'layout', isPositional: false, type: 'string', required: false, defaultValue: 'split-screen', labelAr: 'شكل التقسيم', labelEn: 'Layout Split', hintAr: 'split-screen (vertical line), diagonal-split', hintEn: 'split-screen' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'photorealistic', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'photorealistic, infomercial-clean', hintEn: 'photorealistic' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, square, vertical', hintEn: 'landscape' }
    ],
    example: '/before after visual "تنظيف سيارة قديمة لتصبح لامعة وجديدة" --layout=split-screen --style=photorealistic --format=landscape',
    qualityRules: [
      'تطابق تام في زاوية الكاميرا ونفس الإطار للعنصر في كلا النصفين لتأكيد المصداقية',
      'خط فاصل نظيف وواضح بين جانبي المقارنة',
      'إبراز التفاصيل واللمعان في جانب "بعد" بشكل واقعي وغير مبالغ فيه'
    ],
    keywords: ['before after visual', 'قبل وبعد', 'مقارنة منتج', 'before and after photo', 'split screen comparison'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 111,
    isFavorite: false
  }
];
