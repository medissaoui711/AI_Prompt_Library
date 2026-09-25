import { CommandPrompt } from '../../../types/prompt';

export const STYLE_AUDIT_PROMPTS: CommandPrompt[] = [
  {
    id: 'car-aud-001',
    code: '/style audit',
    titleAr: 'تحليل الستايل ونظام التصميم',
    titleEn: 'Style & Design System Audit',
    descriptionAr: 'يحلل صورة مرجعية ويستخرج منها نظام التصميم: الألوان، التخطيط، الخطوط، الصور، الأيقونات، والمسافات.',
    descriptionEn: 'Analyzes a visual reference image and extracts design system tokens: layout, palette, typography, imagery, and spacing.',
    group: 'carousel',
    carouselCategory: 'style_audit',
    outputType: 'analysis',
    outputBadges: ['تحليل مرجعي', 'Style Guide', 'Design Tokens'],
    params: [
      { key: 'reference', flag: 'reference', isPositional: true, type: 'text', required: true, labelAr: 'الصورة أو رابط المرجع', labelEn: 'Reference Image / URL', hintAr: 'ارفع صورة المرجع أو الصق الوصف...', hintEn: 'Upload reference image or paste link...' },
      { key: 'analyze', flag: 'analyze', isPositional: false, type: 'string', required: false, defaultValue: 'layout,color-palette,typography,image-style,icons,spacing', labelAr: 'عناصر التحليل', labelEn: 'Analyze Elements', hintAr: 'layout,color-palette,typography...', hintEn: 'layout,color-palette...' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' },
      { key: 'output', flag: 'output', isPositional: false, type: 'string', required: false, defaultValue: 'style-guide', labelAr: 'نوع المخرج', labelEn: 'Output Type', hintAr: 'style-guide, tokens, visual-spec', hintEn: 'style-guide, tokens' }
    ],
    example: '/style audit [ارفع صورة المرجع] --analyze=layout,color-palette,typography,image-style,icons,spacing --language=ar --output=style-guide',
    qualityRules: [
      'استخراج رموز الألوان الدقيقة HEX مع تسمية أدوارها (خلفية، نصوص، تفاعل، لهجة)',
      'تحديد نوع الخط الهندسي أو النسخي ودرجات التباين والوزن البصري',
      'صياغة موجز واضح يمكن للمصمم أو أداة الذكاء الاصطناعي تقليده بدقة'
    ],
    keywords: ['style audit', 'تحليل ستايل', 'design tokens', 'style guide', 'مرجع بصري'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 160,
    isFavorite: true
  },
  {
    id: 'car-aud-002',
    code: '/visual prompt',
    titleAr: 'تحويل مرجع بصري إلى Prompt دقيق',
    titleEn: 'Visual Reference to Generative Prompt',
    descriptionAr: 'يحول صورة مرجعية إلى Prompt بصري منظم يمكن استخدامه في أدوات توليد الصور (Midjourney, Ideogram, Flux).',
    descriptionEn: 'Translates a visual reference image into a structured generative prompt for Midjourney, Flux, or Ideogram.',
    group: 'carousel',
    carouselCategory: 'style_audit',
    outputType: 'image',
    outputBadges: ['Prompt بصري', 'محاكاة الأسلوب', 'AI Art'],
    params: [
      { key: 'reference', flag: 'reference', isPositional: true, type: 'text', required: true, labelAr: 'المرجع البصري', labelEn: 'Visual Reference', hintAr: 'صورة بوستر، غلاف، لقطة...', hintEn: 'Poster image, cover, still...' },
      { key: 'target', flag: 'target', isPositional: false, type: 'enum', required: false, defaultValue: 'ideogram', enumValues: [
        { value: 'ideogram', labelAr: 'Ideogram', labelEn: 'Ideogram' },
        { value: 'flux', labelAr: 'Flux', labelEn: 'Flux' },
        { value: 'midjourney', labelAr: 'Midjourney', labelEn: 'Midjourney' }
      ], labelAr: 'الأداة المستهدفة', labelEn: 'Target Tool', hintAr: 'ideogram, flux, midjourney', hintEn: 'ideogram, flux, midjourney' },
      { key: 'analyze', flag: 'analyze', isPositional: false, type: 'string', required: false, defaultValue: 'subject,layout,colors,lighting,style', labelAr: 'محاور التحليل', labelEn: 'Analysis Axes', hintAr: 'subject,lighting...', hintEn: 'subject,lighting...' },
      { key: 'output', flag: 'output', isPositional: false, type: 'string', required: false, defaultValue: 'visual-prompt', labelAr: 'نوع المخرج', labelEn: 'Output', hintAr: 'visual-prompt', hintEn: 'visual-prompt' }
    ],
    example: '/visual prompt [ارفع صورة مرجعية] --target=ideogram --analyze=subject,layout,colors,lighting,style --output=visual-prompt',
    qualityRules: [
      'تضمين وصف العدسة، زاوية الكاميرا، مصادر الإضاءة، ونوع الخامات',
      'تجنب الكلمات الغامضة والتركيز على مفردات التصميم المحددة تقنياً'
    ],
    keywords: ['visual prompt', 'برومبت بصري', 'ideogram', 'flux', 'محاكاة صورة'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 145,
    isFavorite: true
  },
  {
    id: 'car-aud-003',
    code: '/design tokens',
    titleAr: 'استخراج Design Tokens من مرجع',
    titleEn: 'Extract Design Tokens',
    descriptionAr: 'يستخرج نظام الألوان والخطوط والمسافات والحدود والزوايا والظلال من مرجع بصري بدقة هندسية.',
    descriptionEn: 'Extracts exact colors, fonts, spacing units, border radii, and drop shadows from any visual reference.',
    group: 'carousel',
    carouselCategory: 'style_audit',
    outputType: 'analysis',
    outputBadges: ['تحليل مرجعي', 'Design System', 'Tokens'],
    params: [
      { key: 'design', flag: 'design', isPositional: true, type: 'text', required: true, labelAr: 'صورة التصميم', labelEn: 'Design Image', hintAr: 'ارفع صورة شاشة أو شريحة...', hintEn: 'Upload screen or slide...' },
      { key: 'extract', flag: 'extract', isPositional: false, type: 'string', required: false, defaultValue: 'colors,fonts,spacing,radius,borders,shadows', labelAr: 'العناصر المطلوبة', labelEn: 'Elements to Extract', hintAr: 'colors,fonts,spacing...', hintEn: 'colors,fonts,spacing...' },
      { key: 'output', flag: 'output', isPositional: false, type: 'string', required: false, defaultValue: 'design-system', labelAr: 'شكل الإخراج', labelEn: 'Output Format', hintAr: 'design-system, json-tokens', hintEn: 'design-system, json-tokens' }
    ],
    example: '/design tokens [ارفع صورة التصميم] --extract=colors,fonts,spacing,radius,borders,shadows --output=design-system',
    qualityRules: [
      'تقديم القيم في صورة مقاييس واضحة (rem / px أو نسب مئوية متناغمة)',
      'تحديد تباين النص مع الخلفية لضمان الامتثال لقواعد إمكانية الوصول WCAG'
    ],
    keywords: ['design tokens', 'توكنز', 'نظام تصميم', 'ألوان وخطوط', 'مسافات'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 110,
    isFavorite: false
  },
  {
    id: 'car-aud-004',
    code: '/color palette audit',
    titleAr: 'تدقيق وتوليد لوحة الألوان المرجعية',
    titleEn: 'Color Palette Audit & Roles',
    descriptionAr: 'يستخرج لوحة الألوان الكاملة من صورة مرجعية ويقترح أكواد HEX وأدوار كل لون ونسب التوزيع 60-30-10.',
    descriptionEn: 'Extracts full color palettes with HEX codes, semantic roles, and the 60-30-10 proportion rule.',
    group: 'carousel',
    carouselCategory: 'style_audit',
    outputType: 'analysis',
    outputBadges: ['تحليل مرجعي', 'HEX Codes', 'لوحة ألوان'],
    params: [
      { key: 'image', flag: 'image', isPositional: true, type: 'text', required: true, labelAr: 'الصورة المرجعية', labelEn: 'Reference Image', hintAr: 'ارفع الصورة لتحليل ألوانها...', hintEn: 'Upload image...' },
      { key: 'output', flag: 'output', isPositional: false, type: 'string', required: false, defaultValue: 'hex-codes,color-roles', labelAr: 'المخرجات', labelEn: 'Output', hintAr: 'hex-codes,color-roles', hintEn: 'hex-codes,color-roles' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' }
    ],
    example: '/color palette audit [ارفع الصورة] --output=hex-codes,color-roles --language=ar',
    qualityRules: [
      'توزيع الألوان بحسب الدور: لون مهيمن 60%، ثانوي 30%، لهجة بصرية 10%',
      'تضمين أكواد HEX مع أسماء لونية بصرية معبرة'
    ],
    keywords: ['color palette', 'لوحة ألوان', 'hex codes', 'تناغم الألوان'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 130,
    isFavorite: false
  },
  {
    id: 'car-aud-005',
    code: '/typography audit',
    titleAr: 'تحليل وتدقيق التيبوغرافي والخطوط',
    titleEn: 'Typography Hierarchy Audit',
    descriptionAr: 'يحلل أسلوب الخطوط والعناوين والنصوص داخل تصميم مرجعي ويقترح تدرجاً نصياً وبدائل خطية عربية ولاتينية.',
    descriptionEn: 'Audits font pairings, visual weight, line heights, and hierarchy in reference artwork, proposing Arabic font pairings.',
    group: 'carousel',
    carouselCategory: 'style_audit',
    outputType: 'analysis',
    outputBadges: ['تحليل مرجعي', 'تيبوغرافي', 'خطوط عربية'],
    params: [
      { key: 'design', flag: 'design', isPositional: true, type: 'text', required: true, labelAr: 'التصميم المرجعي', labelEn: 'Reference Design', hintAr: 'ارفع صورة التصميم...', hintEn: 'Upload design image...' },
      { key: 'analyze', flag: 'analyze', isPositional: false, type: 'string', required: false, defaultValue: 'headlines,body,text-hierarchy,alignment', labelAr: 'عناصر التحليل', labelEn: 'Analyze', hintAr: 'headlines,body,text-hierarchy...', hintEn: 'headlines,body...' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' }
    ],
    example: '/typography audit [ارفع التصميم] --analyze=headlines,body,text-hierarchy,alignment --language=ar',
    qualityRules: [
      'اقتراح خطوط ويب مجانية ومتاحة على Google Fonts',
      'تحديد نسب تدرج الأحجام (H1: 40px, H2: 28px, Body: 18px)'
    ],
    keywords: ['typography audit', 'خطوط', 'تدرج نصي', 'عناوين'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 98,
    isFavorite: false
  },
  {
    id: 'car-aud-006',
    code: '/layout audit',
    titleAr: 'تحليل الشبكة وتوزيع العناصر (Layout)',
    titleEn: 'Layout & Composition Grid Audit',
    descriptionAr: 'يحلل شبكة المحاذاة والمسافات البصرية والتسلسل الهرمي للعين (Z-Pattern / F-Pattern) داخل التصميم.',
    descriptionEn: 'Analyzes composition grids, focal points, margin padding, and reading path flow across visual references.',
    group: 'carousel',
    carouselCategory: 'style_audit',
    outputType: 'analysis',
    outputBadges: ['تحليل مرجعي', 'شبكة التصميم', 'Layout'],
    params: [
      { key: 'design', flag: 'design', isPositional: true, type: 'text', required: true, labelAr: 'التصميم المرجعي', labelEn: 'Design Reference', hintAr: 'ارفع صورة التصميم...', hintEn: 'Upload reference...' },
      { key: 'analyze', flag: 'analyze', isPositional: false, type: 'string', required: false, defaultValue: 'grid,alignment,spacing,visual-hierarchy', labelAr: 'محاور التدقيق', labelEn: 'Audit Axes', hintAr: 'grid,alignment,spacing...', hintEn: 'grid,alignment...' },
      { key: 'output', flag: 'output', isPositional: false, type: 'string', required: false, defaultValue: 'layout-guide', labelAr: 'المخرج', labelEn: 'Output', hintAr: 'layout-guide', hintEn: 'layout-guide' }
    ],
    example: '/layout audit [ارفع التصميم] --analyze=grid,alignment,spacing,visual-hierarchy --output=layout-guide',
    qualityRules: [
      'تحديد مواضع النقطة البؤرية المركزية والهوامش الآمنة',
      'كشف الازدحام واقتراح مساحات بيضاء تنفسية (Negative Space)'
    ],
    keywords: ['layout audit', 'شبكة التصميم', 'تكوين بصري', 'محاذاة'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 88,
    isFavorite: false
  },
  {
    id: 'car-aud-007',
    code: '/reference style guide',
    titleAr: 'بناء دليل ستايل شامل من مرجع',
    titleEn: 'Full Campaign Style Guide from Reference',
    descriptionAr: 'ينشئ دليل هوية وأسلوب بصري متكامل من صورة واحدة لاستخدامه في حملة إعلانية أو كاروسيل سوشيال ميديا.',
    descriptionEn: 'Builds a complete brand campaign style guide from a single inspiration image, covering colors, fonts, and assets.',
    group: 'carousel',
    carouselCategory: 'style_audit',
    outputType: 'report',
    outputBadges: ['تحليل مرجعي', 'Style Guide', 'هوية بصرية'],
    params: [
      { key: 'styleImage', flag: 'styleImage', isPositional: true, type: 'text', required: true, labelAr: 'صورة الستايل المرجعي', labelEn: 'Style Reference', hintAr: 'ارفع صورة المرجع...', hintEn: 'Upload style image...' },
      { key: 'brand', flag: 'brand', isPositional: false, type: 'string', required: false, defaultValue: 'علامة عطور فاخرة', labelAr: 'اسم أو مجال العلامة', labelEn: 'Brand / Industry', hintAr: 'عطور، تقنية، ملابس...', hintEn: 'Perfume, tech, apparel...' },
      { key: 'output', flag: 'output', isPositional: false, type: 'string', required: false, defaultValue: 'colors,typography,imagery,layout,icons', labelAr: 'الأقسام المطلوبة', labelEn: 'Sections', hintAr: 'colors,typography,imagery...', hintEn: 'colors,typography...' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' }
    ],
    example: '/reference style guide [ارفع صورة الستايل] --brand=علامة عطور فاخرة --output=colors,typography,imagery,layout,icons --language=ar',
    qualityRules: [
      'توفير توجيهات حاسمة ومحددة للمصممين ومحرري المحتوى',
      'توثيق الأنماط المتوافقة وتلك المحظورة للحفاظ على نقاء الأسلوب'
    ],
    keywords: ['style guide', 'دليل أسلوب', 'مرجع بصري', 'هوية حملة'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 155,
    isFavorite: true
  },
  {
    id: 'car-img-008',
    code: '/image to prompt',
    titleAr: 'الهندسة العكسية للصورة إلى برومبت',
    titleEn: 'Image Reverse Prompt Engineering',
    descriptionAr: 'يحلل الصورة بدقة متناهية ويكتب برومبت توليد مطابق يصف الموضوع والتكوين والإضاءة والملمس والعدسة.',
    descriptionEn: 'Reverse-engineers an image into an actionable text prompt specifying camera angle, lighting, textures, and medium.',
    group: 'carousel',
    carouselCategory: 'image_to_prompt',
    outputType: 'image',
    outputBadges: ['Prompt بصري', 'هندسة عكسية', 'Reverse Prompt'],
    params: [
      { key: 'image', flag: 'image', isPositional: true, type: 'text', required: true, labelAr: 'الصورة المراد تحليلها', labelEn: 'Target Image', hintAr: 'ارفع الصورة...', hintEn: 'Upload image...' },
      { key: 'engine', flag: 'engine', isPositional: false, type: 'enum', required: false, defaultValue: 'flux', enumValues: [
        { value: 'flux', labelAr: 'Flux 1.1 Pro', labelEn: 'Flux 1.1 Pro' },
        { value: 'ideogram', labelAr: 'Ideogram 2.0', labelEn: 'Ideogram 2.0' },
        { value: 'midjourney', labelAr: 'Midjourney v6', labelEn: 'Midjourney v6' }
      ], labelAr: 'محرك التوليد', labelEn: 'Generation Engine', hintAr: 'flux, ideogram, midjourney', hintEn: 'flux, ideogram, midjourney' },
      { key: 'detail', flag: 'detail', isPositional: false, type: 'string', required: false, defaultValue: 'cinematic', labelAr: 'مستوى التفاصيل', labelEn: 'Detail Level', hintAr: 'cinematic, photorealistic, minimal', hintEn: 'cinematic, photorealistic' }
    ],
    example: '/image to prompt [ارفع الصورة] --engine=flux --detail=cinematic --lighting=soft-studio',
    qualityRules: [
      'تحديد نوع الميديم الفني (تصوير فوتوغرافي، رسم ثلاثي الأبعاد، توضيح متجهي)',
      'صياغة البرومبت بالإنجليزية المتقنة لدقة محركات الذكاء الاصطناعي مع شرح عربي'
    ],
    keywords: ['image to prompt', 'عكس برومبت', 'محاكاة الصورة', 'flux prompt'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 135,
    isFavorite: true
  },
  {
    id: 'car-img-009',
    code: '/visual breakdown',
    titleAr: 'تفكيك طبقات الصورة البصرية',
    titleEn: 'Visual Layer & Component Breakdown',
    descriptionAr: 'يفكك عناصر الصورة إلى طبقات منفصلة: الخلفية، العنصر الرئيسي، الإضاءة، والمؤثرات، مع اقتراح تعديلات.',
    descriptionEn: 'Deconstructs a visual into layers (background, foreground focal subject, lighting keys, post-processing).',
    group: 'carousel',
    carouselCategory: 'image_to_prompt',
    outputType: 'analysis',
    outputBadges: ['تحليل مرجعي', 'تفكيك بصري', 'Layers'],
    params: [
      { key: 'image', flag: 'image', isPositional: true, type: 'text', required: true, labelAr: 'صورة التحليل', labelEn: 'Image', hintAr: 'ارفع الصورة للتفكيك...', hintEn: 'Upload image...' },
      { key: 'components', flag: 'components', isPositional: false, type: 'string', required: false, defaultValue: 'foreground,background,focal-point,lighting', labelAr: 'المكونات المستهدفة', labelEn: 'Components', hintAr: 'foreground,background,lighting...', hintEn: 'foreground,background...' },
      { key: 'output', flag: 'output', isPositional: false, type: 'string', required: false, defaultValue: 'breakdown-table', labelAr: 'صيغة المخرج', labelEn: 'Output Format', hintAr: 'breakdown-table', hintEn: 'breakdown-table' }
    ],
    example: '/visual breakdown [ارفع الصورة أو التصميم] --components=foreground,background,focal-point,lighting --output=breakdown-table',
    qualityRules: [
      'تقديم جدول تفكيك منظم يسهل تطبيقه في برامج التصميم كـ Photoshop أو Figma',
      'تبيان درجة تأثير كل طبقة على المشاعر والانطباع العام للمشاهد'
    ],
    keywords: ['visual breakdown', 'تفكيك بصري', 'طبقات الصورة', 'تحليل تكوين'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 75,
    isFavorite: false
  },
  {
    id: 'car-img-010',
    code: '/moodboard prompt',
    titleAr: 'توليد حزمة برومبتات لمودبورد متناغم',
    titleEn: 'Harmonious Moodboard Generator Prompts',
    descriptionAr: 'يولد حزمة من 9 برومبتات متناسقة الأسلوب لبناء لوحة إلهام ومودبورد لمشروع أو علامة تجارية.',
    descriptionEn: 'Generates a 9-item cohesive prompt set to build a full moodboard capturing specific textures, lighting, and palette.',
    group: 'carousel',
    carouselCategory: 'image_to_prompt',
    outputType: 'image',
    outputBadges: ['Prompt بصري', 'Moodboard', 'لوحة إلهام'],
    params: [
      { key: 'concept', flag: 'concept', isPositional: true, type: 'text', required: true, labelAr: 'فكرة أو موضوع اللوحة', labelEn: 'Moodboard Concept', hintAr: 'مقهى عضوي فاخر، تطبيق استثمار...', hintEn: 'Organic coffee shop, fintech...' },
      { key: 'aesthetic', flag: 'aesthetic', isPositional: false, type: 'string', required: false, defaultValue: 'warm-editorial', labelAr: 'الأسلوب الجمالي', labelEn: 'Aesthetic Style', hintAr: 'warm-editorial, minimal-tech...', hintEn: 'warm-editorial, minimal-tech...' },
      { key: 'grid', flag: 'grid', isPositional: false, type: 'string', required: false, defaultValue: '3x3', labelAr: 'شبكة اللوحة', labelEn: 'Grid Dimensions', hintAr: '3x3, 4x2', hintEn: '3x3, 4x2' }
    ],
    example: '/moodboard prompt مقهى ياباني تقليدي حديث --aesthetic=warm-editorial --grid=3x3 --output=image-prompts',
    qualityRules: [
      'الحفاظ على اتساق لوحة الألوان والحرارة الضوئية عبر جميع البرومبتات',
      'التنويع بين اللقطات المقربة للمواد (Textures) واللقطات المكانية الشاملة'
    ],
    keywords: ['moodboard prompt', 'لوحة إلهام', 'مودبورد', 'تناسق بصري'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 112,
    isFavorite: false
  }
];
