import { CommandPrompt } from '../../../types/prompt';

export const PROMPTS_GEN_PROMPTS: CommandPrompt[] = [
  {
    id: 'car-gen-026',
    code: '/ideogram prompt',
    titleAr: 'توليد برومبت مخصص لـ Ideogram للنصوص الدقيقة',
    titleEn: 'Ideogram-Optimized Text-Integrated Prompt',
    descriptionAr: 'يولد برومبت مخصص لأداة Ideogram 2.0 مع مراعاة النصوص المدمجة بدقة والخطوط وتكوين الحروف والطباعة البصرية.',
    descriptionEn: 'Generates specialized prompts for Ideogram 2.0 with embedded typography, layout tags, and font styling.',
    group: 'carousel',
    carouselCategory: 'ideogram_flux',
    outputType: 'image',
    outputBadges: ['Prompt بصري', 'Ideogram 2.0', 'نصوص مدمجة'],
    params: [
      { key: 'subject', flag: 'subject', isPositional: true, type: 'text', required: true, labelAr: 'موضوع التصميم', labelEn: 'Design Subject', hintAr: 'غلاف كاروسيل فاخر، شريحة إحصائية...', hintEn: 'Luxury carousel cover...' },
      { key: 'text', flag: 'text', isPositional: false, type: 'string', required: false, defaultValue: 'أسرار التسويق', labelAr: 'النص المطلوب كتابته بالصورة', labelEn: 'Embedded Text', hintAr: '"أسرار التسويق", "AI 2026"', hintEn: '"Marketing Secrets"' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'luxury-minimal', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'luxury-minimal, 3d-render, bold-typography', hintEn: 'luxury-minimal, 3d-render' },
      { key: 'ratio', flag: 'ratio', isPositional: false, type: 'string', required: false, defaultValue: '4:5', labelAr: 'نسبة الأبعاد', labelEn: 'Aspect Ratio', hintAr: '4:5, 1:1, 9:16', hintEn: '4:5, 1:1' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'ar', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'ar, en', hintEn: 'ar, en' }
    ],
    example: '/ideogram prompt غلاف كاروسيل فاخر للمديرين --text="أسرار القيادة الحديثة" --style=luxury-minimal --ratio=4:5 --language=ar',
    qualityRules: [
      'وضع العبارات المطلوب ظهورها داخل علامات تنصيص صريحة "" وتحديد موضعها والخط المطلوب',
      'تحديد لوحة الألوان والإضاءة الخلفية لضمان قراءة النص دون تشويش'
    ],
    keywords: ['ideogram prompt', 'نصوص في الصورة', 'برومبت إيديوجرام', 'توليد نصوص'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 220,
    isFavorite: true
  },
  {
    id: 'car-gen-027',
    code: '/flux prompt',
    titleAr: 'توليد برومبت فائق الواقعية لمحرك Flux',
    titleEn: 'Flux 1.1 Pro Photorealistic & Editorial Prompt',
    descriptionAr: 'يولد برومبت واقعي أو فني فائق الجودة لمحرك Flux 1.1 Pro مع ضبط الكاميرا (85mm/35mm) والإضاءة السينمائية والخامات.',
    descriptionEn: 'Generates state-of-the-art prompts for Flux 1.1 Pro with realistic lenses, natural skin tones, and lighting.',
    group: 'carousel',
    carouselCategory: 'ideogram_flux',
    outputType: 'image',
    outputBadges: ['Prompt بصري', 'Flux 1.1 Pro', 'سينمائي واقعي'],
    params: [
      { key: 'subject', flag: 'subject', isPositional: true, type: 'text', required: true, labelAr: 'الموضوع البصري', labelEn: 'Visual Subject', hintAr: 'صورة منتج مكتبي حديث، رائد أعمال في استوديو...', hintEn: 'Modern office desk, founder portrait...' },
      { key: 'camera', flag: 'camera', isPositional: false, type: 'string', required: false, defaultValue: '85mm-portrait', labelAr: 'العدسة والكاميرا', labelEn: 'Camera & Lens', hintAr: '85mm-portrait, 35mm-editorial, macro', hintEn: '85mm-portrait, macro' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'cinematic-soft', labelAr: 'الإضاءة', labelEn: 'Lighting Setup', hintAr: 'cinematic-soft, golden-hour, dramatic-rim', hintEn: 'cinematic-soft, studio' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'editorial-photo', labelAr: 'الأسلوب الفني', labelEn: 'Artistic Style', hintAr: 'editorial-photo, commercial-studio, grainy-film', hintEn: 'editorial-photo, studio' }
    ],
    example: '/flux prompt صورة منتج سماعات ذكية على مكتب رخامي أسود --camera=85mm-portrait --lighting=cinematic-soft --style=editorial-photo',
    qualityRules: [
      'تجنب كلمات الـ hype مثل (hyperrealistic, 8k) واستبدالها بوصف الضوء والظلال وملمس المواد',
      'تحديد عمق الميدان (Depth of Field) لتركيز الانتباه على العنصر البصري المستهدف'
    ],
    keywords: ['flux prompt', 'فلوكس', 'واقعي سينمائي', 'برومبت صور احترافية'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 205,
    isFavorite: true
  },
  {
    id: 'car-gen-028',
    code: '/carousel prompts',
    titleAr: 'توليد حزمة برومبتات بصرية متناسقة لكل الشرائح',
    titleEn: 'Batch Cohesive Slide Visual Prompts',
    descriptionAr: 'يولد حزمة برومبتات بصرية متناسقة لجميع شرائح الكاروسيل لضمان ثبات الهوية والألوان والستايل من الشريحة الأولى للأخيرة.',
    descriptionEn: 'Generates cohesive prompt sets across all carousel slides to maintain visual consistency and identity.',
    group: 'carousel',
    carouselCategory: 'ideogram_flux',
    outputType: 'image',
    outputBadges: ['Prompt بصري', 'حزمة شرائح', 'هوية متسقة'],
    params: [
      { key: 'topic', flag: 'topic', isPositional: true, type: 'text', required: true, labelAr: 'موضوع الكاروسيل', labelEn: 'Carousel Subject', hintAr: 'خطة كاروسيل الذكاء الاصطناعي في الأعمال...', hintEn: 'AI in business carousel plan...' },
      { key: 'slides', flag: 'slides', isPositional: false, type: 'number', required: false, defaultValue: 8, labelAr: 'عدد الشرائح', labelEn: 'Slides Count', hintAr: '6, 8, 10', hintEn: '6, 8, 10' },
      { key: 'visualConsistency', flag: 'visual-consistency', isPositional: false, type: 'string', required: false, defaultValue: 'high', labelAr: 'درجة الاتساق', labelEn: 'Consistency Level', hintAr: 'high, medium', hintEn: 'high, medium' },
      { key: 'palette', flag: 'palette', isPositional: false, type: 'string', required: false, defaultValue: 'dark-neon-cyan', labelAr: 'لوحة الألوان الأساسية', labelEn: 'Primary Palette', hintAr: 'dark-neon-cyan, minimal-warm, beige-gold', hintEn: 'dark-neon-cyan, minimal-warm' },
      { key: 'tool', flag: 'tool', isPositional: false, type: 'enum', required: false, defaultValue: 'ideogram', enumValues: [
        { value: 'ideogram', labelAr: 'Ideogram', labelEn: 'Ideogram' },
        { value: 'flux', labelAr: 'Flux', labelEn: 'Flux' },
        { value: 'midjourney', labelAr: 'Midjourney', labelEn: 'Midjourney' }
      ], labelAr: 'أداة التوليد', labelEn: 'AI Tool', hintAr: 'ideogram, flux, midjourney', hintEn: 'ideogram, flux' }
    ],
    example: '/carousel prompts خطة كاروسيل الذكاء الاصطناعي --slides=8 --visual-consistency=high --palette=dark-neon-cyan --tool=ideogram',
    qualityRules: [
      'تثبيت العناصر المتكررة (Seed style, lighting angle, background gradient) عبر كل أمر',
      'تخصيص عنصر بؤري متجدد لكل شريحة يترجم محتوى النص دون انحراف بصري'
    ],
    keywords: ['carousel prompts', 'برومبتات شرائح', 'اتساق بصري', 'حزمة صور'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 195,
    isFavorite: true
  },
  {
    id: 'car-gen-029',
    code: '/slide prompt',
    titleAr: 'توليد برومبت بصري لشريحة منفردة',
    titleEn: 'Single Carousel Slide Visual Prompt',
    descriptionAr: 'يولد برومبت بصري دقيق لشريحة منفردة داخل الكاروسيل يحدد الخلفية والرمز والعنصر المركزي والتناغم.',
    descriptionEn: 'Generates a focused image prompt for a single slide with specific visual role and aspect ratio.',
    group: 'carousel',
    carouselCategory: 'ideogram_flux',
    outputType: 'image',
    outputBadges: ['Prompt بصري', 'شريحة منفردة', 'مخصص'],
    params: [
      { key: 'slideContent', flag: 'slideContent', isPositional: true, type: 'text', required: true, labelAr: 'محتوى أو دور الشريحة', labelEn: 'Slide Content / Role', hintAr: 'شريحة الإحصائية الرئيسية، شريحة الحل...', hintEn: 'Main statistic slide, solution slide...' },
      { key: 'slideNumber', flag: 'slide-number', isPositional: false, type: 'number', required: false, defaultValue: 3, labelAr: 'رقم الشريحة', labelEn: 'Slide Number', hintAr: '1, 3, 7', hintEn: '1, 3, 7' },
      { key: 'visualType', flag: 'visual-type', isPositional: false, type: 'string', required: false, defaultValue: '3d-data-graphic', labelAr: 'النوع البصري', labelEn: 'Visual Type', hintAr: '3d-data-graphic, minimal-icon, portrait', hintEn: '3d-data-graphic, icon' },
      { key: 'ratio', flag: 'ratio', isPositional: false, type: 'string', required: false, defaultValue: '4:5', labelAr: 'نسبة الشريحة', labelEn: 'Ratio', hintAr: '4:5, 1:1', hintEn: '4:5, 1:1' }
    ],
    example: '/slide prompt شريحة الإحصائية الرئيسية للنمو الرقمي --slide-number=3 --visual-type=3d-data-graphic --ratio=4:5',
    qualityRules: [
      'مراعاة المساحة المتروكة لكتابة العنوان والنص لضمان عدم تغطية العنصر المركزي',
      'تنسيق ألوان العنصر البصري مع لون الخلفية المعتمد في السلسلة'
    ],
    keywords: ['slide prompt', 'برومبت شريحة', 'شريحة كاروسيل', 'تصوير شريحة'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 140,
    isFavorite: false
  },
  {
    id: 'car-gen-030',
    code: '/visual identity preserve',
    titleAr: 'تثبيت وحفظ الهوية البصرية عبر الصور المتتابعة',
    titleEn: 'Visual Identity & Brand Token Preserver',
    descriptionAr: 'يضبط البرومبت ليحافظ على ألوان وشخصية ومزاج الهوية المرجعية عبر جميع الصور المتولدة دون أي تغيير غير مقصود.',
    descriptionEn: 'Locks down brand visual identity tokens, seed cues, and aesthetic consistency across repeated generations.',
    group: 'carousel',
    carouselCategory: 'ideogram_flux',
    outputType: 'image',
    outputBadges: ['Prompt بصري', 'حفظ الهوية', 'Style Lock'],
    params: [
      { key: 'reference', flag: 'reference', isPositional: true, type: 'text', required: true, labelAr: 'المرجع أو كود الهوية', labelEn: 'Identity Reference', hintAr: 'ارفع مرجع الهوية أو الصق مواصفاتها...', hintEn: 'Brand tokens or image...' },
      { key: 'seedTokens', flag: 'seed-tokens', isPositional: false, type: 'string', required: false, defaultValue: 'corporate-navy-gold', labelAr: 'كلمات التثبيت (Tokens)', labelEn: 'Seed Tokens', hintAr: 'corporate-navy-gold, neo-brutalism-purple', hintEn: 'corporate-navy-gold' },
      { key: 'strictness', flag: 'strictness', isPositional: false, type: 'enum', required: false, defaultValue: 'high', enumValues: [
        { value: 'high', labelAr: 'تثبيت صارم 100%', labelEn: 'Strict (100%)' },
        { value: 'medium', labelAr: 'تثبيت متوازن', labelEn: 'Balanced' }
      ], labelAr: 'صرامة التطابق', labelEn: 'Strictness', hintAr: 'high, medium', hintEn: 'high, medium' },
      { key: 'applyTo', flag: 'apply-to', isPositional: false, type: 'string', required: false, defaultValue: 'all-slides', labelAr: 'نطاق التطبيق', labelEn: 'Apply Scope', hintAr: 'all-slides, covers-only', hintEn: 'all-slides' }
    ],
    example: '/visual identity preserve [المرجع البصري] --seed-tokens=corporate-navy-gold --strictness=high --apply-to=all-slides',
    qualityRules: [
      'إلزام المحرك بعبارات Negative Prompts محددة تمنع تبدل الألوان أو النمط الفني',
      'توفير توجيهات محددة حول كيفية الحفاظ على وجه الشخصية أو المنتج ثابتاً'
    ],
    keywords: ['visual identity preserve', 'تثبيت الهوية', 'style lock', 'ثبات الألوان'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 160,
    isFavorite: true
  },
  {
    id: 'car-gen-031',
    code: '/mockup prompt',
    titleAr: 'توليد برومبت موك آب ثلاثي الأبعاد فاخر (Mockup)',
    titleEn: 'Photorealistic 3D Device & Print Mockup Prompt',
    descriptionAr: 'يولد برومبت موك آب ثلاثي الأبعاد واقعي لعرض الكاروسيل أو التقرير على أجهزة (iPad/iPhone) أو أوراق فاخرة.',
    descriptionEn: 'Generates ultra-realistic 3D mockups showcasing carousels, reports, or apps on premium devices and print materials.',
    group: 'carousel',
    carouselCategory: 'ideogram_flux',
    outputType: 'image',
    outputBadges: ['Prompt بصري', 'Mockup 3D', 'عرض المنتجات'],
    params: [
      { key: 'item', flag: 'item', isPositional: true, type: 'text', required: true, labelAr: 'العمل المراد عرضه', labelEn: 'Showcase Item', hintAr: 'عرض غلاف التقرير على آيباد، كروت العمل...', hintEn: 'Report cover on iPad...' },
      { key: 'device', flag: 'device', isPositional: false, type: 'string', required: false, defaultValue: 'ipad-pro', labelAr: 'الجهاز أو القالب', labelEn: 'Device / Mockup', hintAr: 'ipad-pro, iphone-16, luxury-magazine', hintEn: 'ipad-pro, iphone, magazine' },
      { key: 'setting', flag: 'setting', isPositional: false, type: 'string', required: false, defaultValue: 'luxury-marble-desk', labelAr: 'البيئة والخلفية', labelEn: 'Setting / Desk', hintAr: 'luxury-marble-desk, modern-architect-studio', hintEn: 'luxury-marble-desk' },
      { key: 'angle', flag: 'angle', isPositional: false, type: 'string', required: false, defaultValue: 'top-isometric', labelAr: 'زاوية العرض', labelEn: 'Angle', hintAr: 'top-isometric, eye-level, floating-angle', hintEn: 'top-isometric' }
    ],
    example: '/mockup prompt عرض غلاف التقرير على آيباد برو --device=ipad-pro --setting=luxury-marble-desk --angle=top-isometric',
    qualityRules: [
      'توليد زجاج عاكس وظلال ناعمة على الأسطح لإضفاء واقعية مادية ملموسة',
      'تحديد نسبة شاشة مفرغة تماماً لسهولة إدراج التصميم النهائي داخلها'
    ],
    keywords: ['mockup prompt', 'موك آب ثلاثي الأبعاد', 'عرض تقرير', 'آيباد موك آب'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 170,
    isFavorite: false
  },
  {
    id: 'car-gen-032',
    code: '/3d icon prompt',
    titleAr: 'توليد حزمة أيقونات ثلاثية الأبعاد متناسقة (3D Icons)',
    titleEn: 'Consistent 3D Clay & Glass Icons Generator',
    descriptionAr: 'يولد حزمة برومبتات لأيقونات وعناصر ثلاثية الأبعاد متسقة (Clay/Glass) معزولة الخلفية لتزيين شرائح الكاروسيل.',
    descriptionEn: 'Generates consistent 3D isometric icons (claymorphism or frosted glass) on isolated backgrounds for carousel slides.',
    group: 'carousel',
    carouselCategory: 'ideogram_flux',
    outputType: 'image',
    outputBadges: ['Prompt بصري', 'أيقونات 3D', 'عناصر تصميم'],
    params: [
      { key: 'concept', flag: 'concept', isPositional: true, type: 'text', required: true, labelAr: 'موضوع الأيقونات', labelEn: 'Icon Set Concept', hintAr: 'مجموعة أيقونات ريادة الأعمال، أدوات المحتوى...', hintEn: 'Business startup icon set...' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'claymorphism', labelAr: 'الأسلوب الخامي', labelEn: 'Material Style', hintAr: 'claymorphism, glassmorphism, glossy-3d', hintEn: 'claymorphism, glassmorphism' },
      { key: 'background', flag: 'background', isPositional: false, type: 'string', required: false, defaultValue: 'transparent-isolated', labelAr: 'الخلفية', labelEn: 'Background', hintAr: 'transparent-isolated, solid-white', hintEn: 'transparent-isolated' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'studio-soft', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'studio-soft, bright-rim', hintEn: 'studio-soft' }
    ],
    example: '/3d icon prompt مجموعة أيقونات ريادة الأعمال والاستثمار --style=claymorphism --background=transparent-isolated --lighting=studio-soft',
    qualityRules: [
      'الحفاظ على نفس درجة الاستدارة وزوايا الإسقاط لجميع الأيقونات في الحزمة',
      'تأكيد عزل الخلفية لتسهيل القص والتركيب المباشر فوق خلفيات الكاروسيل'
    ],
    keywords: ['3d icon prompt', 'أيقونات ثلاثية الأبعاد', 'عناصر كاروسيل', 'claymorphism'],
    createdAt: '2026-09-25T15:00:00.000Z',
    updatedAt: '2026-09-25T15:00:00.000Z',
    usageCount: 150,
    isFavorite: false
  }
];
