import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const DESIGN_BRANDING_PROMPTS: CommandPrompt[] = [
  {
    id: 'des-brand-031',
    code: '/logo concept',
    titleAr: 'توليد تصور شعار مبتكر (Logo Concept)',
    titleEn: 'Minimalist & Modern Logo Concept',
    descriptionAr: 'ينشئ أفكار وتصورات شعارات احترافية (Minimalist, Geometric, Monogram) على خلفيات نظيفة ومحايدة.',
    descriptionEn: 'Generate distinctive, scalable vector logo concepts focusing on clean geometry, symbolism, and brand essence.',
    group: 'design',
    designCategory: 'branding',
    outputType: 'image',
    outputBadges: ['شعار وهوية'],
    params: [
      { key: 'brand_type', flag: 'brand_type', isPositional: true, type: 'string', required: true, labelAr: 'اسم ونشاط العلامة التجارية', labelEn: 'Brand Name & Field', hintAr: 'مثال: شركة تقنية ذكاء اصطناعي سعودية', hintEn: 'e.g. Saudi AI Tech firm named Horizon' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'minimalist-vector', labelAr: 'الأسلوب الفني', labelEn: 'Logo Style', hintAr: 'minimalist-vector, geometric-modern, abstract-monogram, arabic-calligraphy-modern', hintEn: 'minimalist-vector' },
      { key: 'background', flag: 'background', isPositional: false, type: 'string', required: false, defaultValue: 'white', labelAr: 'الخلفية', labelEn: 'Background', hintAr: 'white, dark-slate, neutral-gray', hintEn: 'white' },
      { key: 'colors', flag: 'colors', isPositional: false, type: 'string', required: false, defaultValue: 'teal,navy', labelAr: 'الألوان المقترحة', labelEn: 'Color Scheme', hintAr: 'teal,navy / gold,black / purple,emerald', hintEn: 'teal,navy' }
    ],
    example: '/logo concept "شركة تقنية ذكاء اصطناعي سعودية" --style=minimalist-vector --background=white --colors=teal,navy',
    qualityRules: [
      'تصميم مسطح ونظيف (Flat vector aesthetic) دون تدرجات ثلاثية الأبعاد معقدة تعيق الطباعة',
      'رمزية واضحة وقابلة للتطبيق بمختلف الأحجام والأوزان',
      'توسيط الشعار وعرضه على خلفية بيضاء نقية'
    ],
    keywords: ['logo concept', 'تصميم شعار', 'شعار ذكاء اصطناعي', 'minimalist logo', 'brand mark'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 155,
    isFavorite: true
  },
  {
    id: 'des-brand-032',
    code: '/brand identity',
    titleAr: 'تطوير هوية بصرية كاملة (Brand Identity Suite)',
    titleEn: 'Full Visual Brand Identity Suite',
    descriptionAr: 'ينشئ عرضًا شاملاً للهوية البصرية يشمل الشعار، لوحة الألوان، بطاقات العمل، والقرطاسية في مشهد موحد.',
    descriptionEn: 'Produce complete visual identity stationery mockups with business cards, letterheads, and envelopes.',
    group: 'design',
    designCategory: 'branding',
    outputType: 'image',
    outputBadges: ['شعار وهوية'],
    params: [
      { key: 'brand', flag: 'brand', isPositional: true, type: 'string', required: true, labelAr: 'العلامة ومجال العمل', labelEn: 'Brand Domain', hintAr: 'مثال: شركة استشارات مالية راقية', hintEn: 'e.g. Premium boutique financial advisory firm' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'modern-corporate', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'modern-corporate, luxury-minimalist, creative-studio', hintEn: 'modern-corporate' },
      { key: 'colors', flag: 'colors', isPositional: false, type: 'string', required: false, defaultValue: 'navy,gold', labelAr: 'الألوان الأساسية', labelEn: 'Color Palette', hintAr: 'navy,gold / forest-green,sand / charcoal,orange', hintEn: 'navy,gold' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, isometric', hintEn: 'landscape' }
    ],
    example: '/brand identity "شركة استشارات مالية راقية" --style=modern-corporate --colors=navy,gold --format=landscape',
    qualityRules: [
      'ترتيب متناسق للقرطاسية وبطاقات العمل والمجلدات في مشهد علوي أو منظوري منسق',
      'تطبيق موحد ومتسق لعناصر الشعار والألوان عبر كافة الملحقات',
      'إظهار جودة الورق والملمس الراقي بدقة واقعية'
    ],
    keywords: ['brand identity', 'هوية بصرية', 'تصميم هوية شركة', 'corporate identity', 'stationery mockup'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 139,
    isFavorite: false
  },
  {
    id: 'des-brand-033',
    code: '/logo mockup',
    titleAr: 'تطبيق الشعار على خامات واقعية (Logo Mockup)',
    titleEn: 'Realistic Surface Logo Mockup',
    descriptionAr: 'ينشئ محاكاة واقعية لتطبيق الشعار على جدار زجاجي، لوح خرساني، واجهة متجر، أو جلد فاخر.',
    descriptionEn: 'Render high-end logo mockups on architectural signage, embossed leather, frosted glass, or 3D metallic facades.',
    group: 'design',
    designCategory: 'branding',
    outputType: 'image',
    outputBadges: ['شعار وهوية'],
    params: [
      { key: 'logo_and_surface', flag: 'logo_and_surface', isPositional: true, type: 'string', required: true, labelAr: 'وصف الشعار والخامة المطلوبة', labelEn: 'Logo & Surface Material', hintAr: 'مثال: شعار مطبوع بحفر ذهبي على علبة كرتون سوداء', hintEn: 'e.g. Gold foil debossed logo on matte dark cardstock' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'realistic-emboss', labelAr: 'نوع التطبيق', labelEn: 'Application Type', hintAr: 'realistic-emboss, 3d-acrylic-signage, frosted-glass, engraved-wood', hintEn: 'realistic-emboss' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'studio', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'studio, warm-interior, direct-sunbeam', hintEn: 'studio' }
    ],
    example: '/logo mockup "شعار مطبوع بحفر ذهبي على علبة كرتون سوداء" --style=realistic-emboss --lighting=studio',
    qualityRules: [
      'محاكاة عمق الحفر أو البروز بدقة مع الظلال الدقيقة واللمعان المعدني',
      'زاوية تصوير مائلة أنيقة تبرز ملمس السطح',
      'وضوح تام للخطوط والأشكال الهندسية الخاصة بالشعار'
    ],
    keywords: ['logo mockup', 'موك اب شعار', 'شعار ذهبي بارز', '3d logo render', 'signage mockup'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 130,
    isFavorite: false
  },
  {
    id: 'des-brand-034',
    code: '/brand moodboard',
    titleAr: 'لوحة إلهام العلامة التجارية (Brand Moodboard)',
    titleEn: 'Aesthetic Brand Moodboard & Curation',
    descriptionAr: 'ينشئ لوحة تجميع بصري (Moodboard) غنية بالألوان، الخامات، المشاهد، والخطوط التي تعبر عن روح العلامة.',
    descriptionEn: 'Generate cohesive visual moodboards blending color swatches, photographic textures, architecture, and lifestyle tones.',
    group: 'design',
    designCategory: 'branding',
    outputType: 'image',
    outputBadges: ['شعار وهوية'],
    params: [
      { key: 'brand_essence', flag: 'brand_essence', isPositional: true, type: 'string', required: true, labelAr: 'روح ومفهوم العلامة', labelEn: 'Brand Essence & Vibe', hintAr: 'مثال: علامة عطور شرقية حديثة', hintEn: 'e.g. Modern boutique oriental perfume brand' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'grid-curated', labelAr: 'تنسيق اللوحة', labelEn: 'Grid Layout', hintAr: 'grid-curated, collage-artistic, minimalist-editorial', hintEn: 'grid-curated' },
      { key: 'palette', flag: 'palette', isPositional: false, type: 'string', required: false, defaultValue: 'amber,sand,gold', labelAr: 'الألوان الطاغية', labelEn: 'Palette', hintAr: 'amber,sand,gold / sage,terracotta,cream', hintEn: 'amber,sand,gold' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, square', hintEn: 'landscape' }
    ],
    example: '/brand moodboard "علامة عطور شرقية حديثة" --style=grid-curated --palette=amber,sand,gold --format=landscape',
    qualityRules: [
      'توزيع متوازن بين الصور الفوتوغرافية، عينات الخامات (أقمشة، أحجار)، ومربعات الألوان',
      'انسجام لوني متكامل عبر كافة الصور المضمنة في اللوحة',
      'خطوط فواصل نظيفة بين العناصر تمنح شعوراً بالترتيب الإبداعي'
    ],
    keywords: ['brand moodboard', 'مودبورد', 'لوحة الهام', 'mood board branding', 'لوحة الوان وخامات'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 116,
    isFavorite: false
  },
  {
    id: 'des-brand-035',
    code: '/color palette visual',
    titleAr: 'عرض بصري للوحة الألوان (Color Palette Visual)',
    titleEn: 'Visual Color Palette Swatches & Hex Codes',
    descriptionAr: 'ينشئ عرضًا بصريًا لدرجات الألوان وتناغمها مع أكواد Hex واستخداماتها في التصميم والواجهات.',
    descriptionEn: 'Produce aesthetic color palette displays with coordinated primary, secondary, and accent swatch balances.',
    group: 'design',
    designCategory: 'branding',
    outputType: 'image',
    outputBadges: ['شعار وهوية'],
    params: [
      { key: 'theme', flag: 'theme', isPositional: true, type: 'string', required: true, labelAr: 'موضوع وطابع الألوان', labelEn: 'Palette Theme', hintAr: 'مثال: ألوان هادئة مستوحاة من الصحراء والطبيعة', hintEn: 'e.g. Earthy desert tones: sand, terracotta, sage, dusk-blue' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'minimal-swatches', labelAr: 'شكل العرض', labelEn: 'Presentation Style', hintAr: 'minimal-swatches, circular-palette, gradient-flow', hintEn: 'minimal-swatches' },
      { key: 'count', flag: 'count', isPositional: false, type: 'string', required: false, defaultValue: '5-colors', labelAr: 'عدد الدرجات', labelEn: 'Color Count', hintAr: '5-colors, 4-colors, 6-colors', hintEn: '5-colors' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, square', hintEn: 'landscape' }
    ],
    example: '/color palette visual "ألوان هادئة مستوحاة من الصحراء والطبيعة" --style=minimal-swatches --count=5-colors --format=landscape',
    qualityRules: [
      'توافق درجات التباين والسطوع لضمان سهولة القراءة ومعايير النفاذية (WCAG)',
      'عرض عينات الألوان بنسب مساحات متوازنة تمثل اللون الأساسي والثانوي واللكنات',
      'تسمية ونقاء بصري في تقديم الدرجات اللونية'
    ],
    keywords: ['color palette visual', 'لوحة الوان', 'درجات الوان العلامة', 'color swatches', 'تناسق الوان'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 110,
    isFavorite: false
  },
  {
    id: 'des-brand-036',
    code: '/brand pattern',
    titleAr: 'نمط وزخرفة بصرية متكررة (Brand Seamless Pattern)',
    titleEn: 'Seamless Geometric Brand Pattern',
    descriptionAr: 'ينشئ نقشًا هندسيًا أو تجريديًا متكررًا بسلاسة (Seamless Pattern) للاستخدام في التغليف والخلفيات والمطبوعات.',
    descriptionEn: 'Design seamless geometric and ornamental brand patterns for packaging, interior wallpaper, and digital backdrops.',
    group: 'design',
    designCategory: 'branding',
    outputType: 'image',
    outputBadges: ['شعار وهوية'],
    params: [
      { key: 'pattern_theme', flag: 'pattern_theme', isPositional: true, type: 'string', required: true, labelAr: 'طبيعة النمط والزخرفة', labelEn: 'Pattern Theme & Motif', hintAr: 'مثال: نمط هندسي إسلامي معاصر', hintEn: 'e.g. Contemporary Islamic geometric tessellation' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'seamless-vector', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'seamless-vector, minimalist-line, luxury-foil-texture', hintEn: 'seamless-vector' },
      { key: 'colors', flag: 'colors', isPositional: false, type: 'string', required: false, defaultValue: 'gold,navy', labelAr: 'الألوان', labelEn: 'Colors', hintAr: 'gold,navy / monochrome-black / pastel-terracotta', hintEn: 'gold,navy' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'square', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'square (1:1), wallpaper', hintEn: 'square' }
    ],
    example: '/brand pattern "نمط هندسي إسلامي معاصر" --style=seamless-vector --colors=gold,navy --format=square',
    qualityRules: [
      'تكرار هندسي سلس دون حواف مقطوعة أو عيوب اتصال في الأطراف (Seamless tileability)',
      'توازن دقيق بين الفراغات والخطوط لعدم التسبب في زغللة بصرية',
      'إمكانية الاستخدام كخلفية خفيفة وراقية دون حجب المحتوى المكتوب فوقها'
    ],
    keywords: ['brand pattern', 'نمط متكرر', 'باترن هوية', 'زخرفة اسلامية معاصرة', 'seamless pattern'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 108,
    isFavorite: false
  },
  {
    id: 'des-brand-037',
    code: '/icon set',
    titleAr: 'طقم أيقونات متناسق (Cohesive Icon Set)',
    titleEn: 'Consistent System & UI Icon Set',
    descriptionAr: 'ينشئ مجموعة من الأيقونات الموحدة في سماكة الخطوط، الزوايا، والأسلوب البصري للاستخدام في المواقع والتطبيقات.',
    descriptionEn: 'Produce cohesive sets of 3D or flat vector icons maintaining unified stroke weights, corner radii, and metaphors.',
    group: 'design',
    designCategory: 'branding',
    outputType: 'image',
    outputBadges: ['شعار وهوية'],
    params: [
      { key: 'icons_domain', flag: 'icons_domain', isPositional: true, type: 'string', required: true, labelAr: 'موضوع الأيقونات', labelEn: 'Icons Domain', hintAr: 'مثال: طقم أيقونات للتجارة الإلكترونية والمدفوعات', hintEn: 'e.g. E-commerce and fintech icon set: cart, wallet, lock, delivery, analytics' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: '3d-clay-modern', labelAr: 'أسلوب الأيقونات', labelEn: 'Icon Style', hintAr: '3d-clay-modern, flat-line-art, glassmorphism-clean', hintEn: '3d-clay-modern' },
      { key: 'colors', flag: 'colors', isPositional: false, type: 'string', required: false, defaultValue: 'purple,blue', labelAr: 'الألوان', labelEn: 'Color Theme', hintAr: 'purple,blue / mono-charcoal / vibrant-gradient', hintEn: 'purple,blue' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'grid', labelAr: 'طريقة العرض', labelEn: 'Display Format', hintAr: 'grid (2x3 or 3x3), strip', hintEn: 'grid' }
    ],
    example: '/icon set "طقم أيقونات للتجارة الإلكترونية والمدفوعات" --style=3d-clay-modern --colors=purple,blue --format=grid',
    qualityRules: [
      'توحيد كامل في المنظور وزوايا الإضاءة والظلال عبر كافة الأيقونات المعروضة',
      'دلالات بصرية مفهومة عالمياً وبسيطة في التفسير',
      'فصل واضح بين كل أيقونة والأخرى على شبكة منتظمة'
    ],
    keywords: ['icon set', 'طقم ايقونات', 'ايقونات ثلاثية الابعاد', '3d icons', 'ui icon pack'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 124,
    isFavorite: false
  },
  {
    id: 'des-brand-038',
    code: '/app icon',
    titleAr: 'أيقونة تطبيق جوال احترافية (App Store Icon)',
    titleEn: 'Modern iOS / Android App Icon',
    descriptionAr: 'ينشئ أيقونة تطبيق فريدة ثلاثية الأبعاد أو مسطحة متوافقة مع إرشادات متجر App Store وGoogle Play.',
    descriptionEn: 'Craft iconic mobile app launcher icons featuring modern tactile textures, subtle gradients, and memorable silhouettes.',
    group: 'design',
    designCategory: 'branding',
    outputType: 'image',
    outputBadges: ['شعار وهوية'],
    params: [
      { key: 'app_concept', flag: 'app_concept', isPositional: true, type: 'string', required: true, labelAr: 'فكرة التطبيق والمجال', labelEn: 'App Concept & Category', hintAr: 'مثال: تطبيق لإدارة المهام والإنتاجية', hintEn: 'e.g. Productivity task management app with glowing checkmark' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'modern-3d-glossy', labelAr: 'الأسلوب الفني', labelEn: 'Style', hintAr: 'modern-3d-glossy, minimalist-gradient, neumorphic-soft', hintEn: 'modern-3d-glossy' },
      { key: 'colors', flag: 'colors', isPositional: false, type: 'string', required: false, defaultValue: 'indigo,violet', labelAr: 'الألوان', labelEn: 'Colors', hintAr: 'indigo,violet / emerald,teal / sunset-orange', hintEn: 'indigo,violet' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'square-squircle', labelAr: 'الشكل والمقاس', labelEn: 'Format', hintAr: 'square-squircle (1:1 with rounded corners)', hintEn: 'square-squircle' }
    ],
    example: '/app icon "تطبيق لإدارة المهام والإنتاجية" --style=modern-3d-glossy --colors=indigo,violet --format=square-squircle',
    qualityRules: [
      'رمز محوري واحد فقط واضح ومباشر دون ازدحام أو تفاصيل دقيقة تضيع في الشاشات الصغيرة',
      'إضاءة علوية ناعمة تعطي عمقًا لمسيًا جذابًا للأيقونة',
      'تجنب كتابة نصوص أو كلمات داخل الأيقونة'
    ],
    keywords: ['app icon', 'ايقونة تطبيق', 'تصميم ايقونة اب ستور', 'ios app icon', '3d app icon'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 135,
    isFavorite: false
  },
  {
    id: 'des-brand-039',
    code: '/brand mascot',
    titleAr: 'تميمة وشخصية العلامة التجارية (Brand Mascot)',
    titleEn: 'Charismatic Brand Mascot Character',
    descriptionAr: 'ينشئ شخصية تميمة كرتونية مرحة ومحبوبة تعبر عن قيم العلامة وتزيد من ارتباط الجمهور بها.',
    descriptionEn: 'Generate charismatic 3D or 2D brand mascots embodying corporate values with expressive and friendly appeal.',
    group: 'design',
    designCategory: 'branding',
    outputType: 'image',
    outputBadges: ['شعار وهوية'],
    params: [
      { key: 'mascot_concept', flag: 'mascot_concept', isPositional: true, type: 'string', required: true, labelAr: 'مفهوم التميمة والكائن', labelEn: 'Mascot Concept', hintAr: 'مثال: صقر عربي لطيف بأسلوب كرتوني ثلاثي الأبعاد', hintEn: 'e.g. Friendly cute Arabian falcon in tech startup hoodie' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: '3d-pixar-style', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: '3d-pixar-style, 2d-vector-mascot, kawaii-minimal', hintEn: '3d-pixar-style' },
      { key: 'expression', flag: 'expression', isPositional: false, type: 'string', required: false, defaultValue: 'friendly-welcoming', labelAr: 'التعبير والوقفة', labelEn: 'Expression', hintAr: 'friendly-welcoming, energetic-waving, smart-thinking', hintEn: 'friendly-welcoming' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'transparent-or-white', labelAr: 'الخلفية', labelEn: 'Background', hintAr: 'transparent-or-white, studio-pedestal', hintEn: 'transparent-or-white' }
    ],
    example: '/brand mascot "صقر عربي لطيف بأسلوب كرتوني ثلاثي الأبعاد" --style=3d-pixar-style --expression=friendly-welcoming --format=transparent-or-white',
    qualityRules: [
      'ملامح وجه عاطفية معبرة تجذب المشاهد وتبني صلة فورية',
      'استخدام ألوان العلامة التجارية في ملابس أو ملامح التميمة',
      'وضوح التصميم لسهولة استخدامه في مختلف الوضعيات والوسائط الإعلانية'
    ],
    keywords: ['brand mascot', 'تميمة العلامة', 'شخصية كرتونية', 'mascot logo', '3d mascot'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 115,
    isFavorite: false
  },
  {
    id: 'des-brand-040',
    code: '/visual style guide',
    titleAr: 'دليل النمط البصري (Visual Style Guide Sheet)',
    titleEn: 'Comprehensive Visual Style Guide Sheet',
    descriptionAr: 'ينشئ صفحة مرجعية متكاملة توضح الخطوط، الألوان، الأنماط، ومساحات الأمان للعلامة التجارية.',
    descriptionEn: 'Produce structured one-page visual style guidelines organizing typography hierarchies, palettes, and rules.',
    group: 'design',
    designCategory: 'branding',
    outputType: 'image',
    outputBadges: ['شعار وهوية'],
    params: [
      { key: 'brand_type', flag: 'brand_type', isPositional: true, type: 'string', required: true, labelAr: 'العلامة والمجال', labelEn: 'Brand Domain', hintAr: 'مثال: منصة تعليمية رقمية للأطفال', hintEn: 'e.g. Digital learning platform for young children' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'clean-infographic', labelAr: 'الأسلوب التنسيقي', labelEn: 'Layout Style', hintAr: 'clean-infographic, modern-editorial, corporate-sheet', hintEn: 'clean-infographic' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape (16:9), portrait (A4)', hintEn: 'landscape' }
    ],
    example: '/visual style guide "منصة تعليمية رقمية للأطفال" --style=clean-infographic --format=landscape',
    qualityRules: [
      'تقسيم هندسي منظم يعرض الشعار في الزاوية، لوحة الألوان في قسم مستقل، وعينات الخطوط',
      'توضيح الاستخدامات الصحيحة والقيود البصرية الأساسية',
      'أناقة التصميم العام بما يعكس هوية احترافية جاهزة للعرض على العملاء'
    ],
    keywords: ['visual style guide', 'دليل الهوية البصرية', 'style guide', 'brand guidelines', 'ارشادات التصميم'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 112,
    isFavorite: false
  }
];
