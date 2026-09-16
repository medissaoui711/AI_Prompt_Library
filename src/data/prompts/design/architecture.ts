import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const DESIGN_ARCHITECTURE_PROMPTS: CommandPrompt[] = [
  {
    id: 'des-arch-061',
    code: '/exterior render',
    titleAr: 'رندر معماري خارجي فائق الواقعية (Exterior Render)',
    titleEn: 'Photorealistic Architectural Exterior Render',
    descriptionAr: 'ينشئ رندر معماري خارجي لفيلا، برج، أو مجمع سكني مع تفاصيل الخامات، الإضاءة النهارية، والحدائق.',
    descriptionEn: 'Produce architectural exterior visualizations with accurate material shaders, glass reflections, and landscape integration.',
    group: 'design',
    designCategory: 'architecture',
    outputType: 'image',
    outputBadges: ['معماري'],
    params: [
      { key: 'building_desc', flag: 'building_desc', isPositional: true, type: 'string', required: true, labelAr: 'وصف المبنى والطراز المعماري', labelEn: 'Building Description', hintAr: 'مثال: فيلا عصرية في الرياض بواجهات زجاجية وحجر طبيعي', hintEn: 'e.g. Modern luxury villa in Riyadh with travertine stone and floor-to-ceiling glass' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'contemporary-luxury', labelAr: 'الطراز المعماري', labelEn: 'Architectural Style', hintAr: 'contemporary-luxury, salmani-modern, minimal-cubist, neo-classic', hintEn: 'contemporary-luxury' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'golden-hour', labelAr: 'الإضاءة والوقت', labelEn: 'Lighting & Time', hintAr: 'golden-hour, midday-crisp, dusk-illumination', hintEn: 'golden-hour' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'wide', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'wide (16:9), landscape', hintEn: 'wide' }
    ],
    example: '/exterior render "فيلا عصرية في الرياض بواجهات زجاجية وحجر طبيعي" --style=contemporary-luxury --lighting=golden-hour --format=wide',
    qualityRules: [
      'انعكاسات طبيعية في الألواح الزجاجية ومحاكاة ملمس الحجر والخرسانة بدقة',
      'توزيع واقعي للإضاءة الخارجية والمساحات الخضراء وممرات السيارات',
      'نسب هندسية متوازنة تعكس الواقعية الإنشائية'
    ],
    keywords: ['exterior render', 'رندر معماري خارجي', 'تصميم فيلا', 'واجهات معمارية', 'architectural render'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 146,
    isFavorite: true
  },
  {
    id: 'des-arch-062',
    code: '/interior render',
    titleAr: 'تصميم ورندر داخلي فاخر (Interior Render)',
    titleEn: 'Luxury Interior Design & Architectural Render',
    descriptionAr: 'ينشئ تصورًا ثلاثي الأبعاد للديكور والتصميم الداخلي لغرف المعيشة، المجالس، وغرف النوم بلمسات راقية وإضاءة دافئة.',
    descriptionEn: 'Generate interior renders with bespoke furniture layouts, ambient hidden LED strips, and material harmony.',
    group: 'design',
    designCategory: 'architecture',
    outputType: 'image',
    outputBadges: ['معماري'],
    params: [
      { key: 'room_type', flag: 'room_type', isPositional: true, type: 'string', required: true, labelAr: 'نوع المساحة والديكور', labelEn: 'Room & Interior Concept', hintAr: 'مثال: مجلس عربي حديث بألوان ترابية وإضاءة مخفية', hintEn: 'e.g. Contemporary Arab majlis living room with beige tones and ambient lighting' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'modern-warm-luxury', labelAr: 'أسلوب التصميم', labelEn: 'Design Style', hintAr: 'modern-warm-luxury, japandi, minimalist-scandinavian, classic-contemporary', hintEn: 'modern-warm-luxury' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'warm-ambient', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'warm-ambient, afternoon-sunlight, soft-cove-led', hintEn: 'warm-ambient' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, wide', hintEn: 'landscape' }
    ],
    example: '/interior render "مجلس عربي حديث بألوان ترابية وإضاءة مخفية" --style=modern-warm-luxury --lighting=warm-ambient --format=landscape',
    qualityRules: [
      'تناسق ألوان الأقمشة والسجاد والستائر مع الجدران والأرضيات الخشبية أو الرخامية',
      'محاكاة دقيقة للإضاءات المخفية (Cove lighting) والسبوت لايت والمصابيح المعلقة',
      'توزيع مريح ومدروس للأثاث والممرات الداخلية'
    ],
    keywords: ['interior render', 'تصميم داخلي', 'مجلس حديث', 'ديكور مودرن', 'interior design 3d'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 152,
    isFavorite: true
  },
  {
    id: 'des-arch-063',
    code: '/room makeover',
    titleAr: 'تجديد وإعادة تصور الغرفة (Room Makeover Visual)',
    titleEn: 'Room Redesign & Modern Makeover Visualization',
    descriptionAr: 'ينشئ تصورًا لتحويل غرفة قديمة أو مساحة غير مستغلة إلى بيئة عصرية أنيقة مع الحفاظ على الأبعاد الهندسية.',
    descriptionEn: 'Transform outdated rooms into modern, refreshed living environments with improved spatial flow and decor.',
    group: 'design',
    designCategory: 'architecture',
    outputType: 'image',
    outputBadges: ['معماري', 'تعديل صورة'],
    params: [
      { key: 'transformation', flag: 'transformation', isPositional: true, type: 'string', required: true, labelAr: 'المساحة والتحول المطلوب', labelEn: 'Room Transformation', hintAr: 'مثال: تحويل غرفة نوم صغيرة إلى مكتب عمل منزلي أنيق', hintEn: 'e.g. Small unused bedroom transformed into modern cozy home office' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'scandinavian-minimal', labelAr: 'الأسلوب الجديد', labelEn: 'New Style', hintAr: 'scandinavian-minimal, industrial-warm, modern-boho', hintEn: 'scandinavian-minimal' },
      { key: 'palette', flag: 'palette', isPositional: false, type: 'string', required: false, defaultValue: 'sage,oak,white', labelAr: 'الألوان المقترحة', labelEn: 'Color Scheme', hintAr: 'sage,oak,white / walnut,slate,cream', hintEn: 'sage,oak,white' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, square', hintEn: 'landscape' }
    ],
    example: '/room makeover "تحويل غرفة نوم صغيرة إلى مكتب عمل منزلي أنيق" --style=scandinavian-minimal --palette=sage,oak,white --format=landscape',
    qualityRules: [
      'استغلال ذكي لمساحات التخزين والإضاءة الطبيعية من النوافذ',
      'تطبيق حلول ديكور عملية وقابلة للتنفيذ على أرض الواقع',
      'إظهار فارق التجديد في الاتساع والشعور بالراحة والنظام'
    ],
    keywords: ['room makeover', 'تجديد غرفة', 'مكتب منزلي', 'اعادة تصميم داخلي', 'home office redesign'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 116,
    isFavorite: false
  },
  {
    id: 'des-arch-064',
    code: '/floor plan visual',
    titleAr: 'مخطط أرضي ثلاثي الأبعاد (3D Architectural Floor Plan)',
    titleEn: '3D Cutaway Architectural Floor Plan',
    descriptionAr: 'ينشئ مخططًا أرضيًا ثلاثي الأبعاد مجسمًا (3D Floor Plan) يوضح توزيع الغرف والأثاث والجدران بوضوح هندسي فائق.',
    descriptionEn: 'Produce cutaway 3D architectural floor plans illustrating room layout, furniture arrangement, and spatial flow.',
    group: 'design',
    designCategory: 'architecture',
    outputType: 'image',
    outputBadges: ['معماري'],
    params: [
      { key: 'layout_desc', flag: 'layout_desc', isPositional: true, type: 'string', required: true, labelAr: 'تفاصيل الشقة أو الفيلا والغرف', labelEn: 'Floor Plan Layout', hintAr: 'مثال: شقة حديثة 3 غرف وصالة ومطبخ مفتوح', hintEn: 'e.g. 3-bedroom modern apartment with open plan kitchen and living balcony' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: '3d-top-isometric', labelAr: 'طريقة العرض', labelEn: 'Projection Style', hintAr: '3d-top-isometric, top-down-furnished, architectural-cutaway', hintEn: '3d-top-isometric' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'bright-interior', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'bright-interior, soft-shadows, daylight', hintEn: 'bright-interior' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, square', hintEn: 'landscape' }
    ],
    example: '/floor plan visual "شقة حديثة 3 غرف وصالة ومطبخ مفتوح" --style=3d-top-isometric --lighting=bright-interior --format=landscape',
    qualityRules: [
      'وضوح سماكة الجدران والأبواب والنوافذ وتوزيع الأرضيات المختلفة (باركيه، سيراميك)',
      'قطع الجدران بارتفاع منسق يُظهر الأثاث الداخلي دون حجب الرؤية',
      'تناسق المقاييس الحجمية لقطع الأثاث مقارنة بمساحة الغرف'
    ],
    keywords: ['floor plan visual', 'مخطط ثلاثي الابعاد', 'توزيع غرف', '3d floor plan', 'مخطط شقة'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 124,
    isFavorite: false
  },
  {
    id: 'des-arch-065',
    code: '/architectural concept',
    titleAr: 'مفهوم معماري أيقوني (Iconic Architectural Concept)',
    titleEn: 'Iconic Monumental Architectural Concept',
    descriptionAr: 'ينشئ تصميمًا لمبنى أيقوني ذو شكل هندسي مستقبلي ومستدام للمشاريع الكبرى والمتاحف والأبراج.',
    descriptionEn: 'Envision landmark sculptural architecture, parametric museums, and sustainable mega-structures.',
    group: 'design',
    designCategory: 'architecture',
    outputType: 'image',
    outputBadges: ['معماري'],
    params: [
      { key: 'concept', flag: 'concept', isPositional: true, type: 'string', required: true, labelAr: 'الفكرة والوظيفة المعمارية', labelEn: 'Architectural Concept', hintAr: 'مثال: متحف ثقافي مستقبلي في الصحراء بتصميم انسيابي', hintEn: 'e.g. Parametric cultural pavilion museum inspired by wind-sculpted sand dunes' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'parametric-organic', labelAr: 'الأسلوب المعماري', labelEn: 'Style', hintAr: 'parametric-organic, zaha-hadid-inspired, eco-biophilic, brutalist-modern', hintEn: 'parametric-organic' },
      { key: 'environment', flag: 'environment', isPositional: false, type: 'string', required: false, defaultValue: 'desert-oasis', labelAr: 'البيئة المحيطة', labelEn: 'Surrounding Context', hintAr: 'desert-oasis, coastal-waterfront, urban-metropolis', hintEn: 'desert-oasis' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'wide', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'wide (16:9), landscape', hintEn: 'wide' }
    ],
    example: '/architectural concept "متحف ثقافي مستقبلي في الصحراء بتصميم انسيابي" --style=parametric-organic --environment=desert-oasis --format=wide',
    qualityRules: [
      'انسيابية المنحنيات الهندسية وتكامل المبنى مع التضاريس الطبيعية المحيطة',
      'محاكاة دقيقة لانعكاسات الضوء الطبيعي والظلال على الكتل المعمارية المنحوتة',
      'إظهار مقياس الصرح مقارنة بالزوار والأشجار في المقدمة'
    ],
    keywords: ['architectural concept', 'مفهوم معماري', 'متحف مستقبلي', 'تصميم بارامتري', 'landmark architecture'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 120,
    isFavorite: false
  },
  {
    id: 'des-arch-066',
    code: '/facade design',
    titleAr: 'تصميم واجهة مبنى وتفاصيل الكسوة (Facade Detail)',
    titleEn: 'Building Facade & Cladding Design',
    descriptionAr: 'ينشئ تركيزًا على واجهة المبنى وكسواتها الخارجية (Louvers, Mashrabiya, Cladding) مع تلاعب الظلال الشمسية.',
    descriptionEn: 'Design intricate exterior facade cladding, contemporary mashrabiya panels, and kinetic sun-shading systems.',
    group: 'design',
    designCategory: 'architecture',
    outputType: 'image',
    outputBadges: ['معماري'],
    params: [
      { key: 'facade_desc', flag: 'facade_desc', isPositional: true, type: 'string', required: true, labelAr: 'تفاصيل الواجهة والكسوة', labelEn: 'Facade Description', hintAr: 'مثال: واجهة برج مكسوة بمشربيات إسلامية حديثة مظللة', hintEn: 'e.g. High-rise tower facade with contemporary parametric mashrabiya shading louvers' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'contemporary-islamic', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'contemporary-islamic, kinetic-facade, glass-and-terracotta, metallic-mesh', hintEn: 'contemporary-islamic' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'sunlight-shadows', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'sunlight-shadows, night-led-illumination, golden-hour', hintEn: 'sunlight-shadows' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'vertical', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'vertical, landscape', hintEn: 'vertical' }
    ],
    example: '/facade design "واجهة برج مكسوة بمشربيات إسلامية حديثة مظللة" --style=contemporary-islamic --lighting=sunlight-shadows --format=vertical',
    qualityRules: [
      'إبراز تدرجات الظلال الهندسية المعقدة الممتدة على الزجاج والداخل (Dynamic sun shadows)',
      'تفاصيل دقيقة في نقاط تثبيت الكسوات والوصلات المعدنية أو الحجرية',
      'توازن بين الأصالة المعمارية والتصميم المستدام الموفر للطاقة'
    ],
    keywords: ['facade design', 'تصميم واجهات', 'مشربية حديثة', 'كسوات مباني', 'facade architecture'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 112,
    isFavorite: false
  },
  {
    id: 'des-arch-067',
    code: '/landscape design',
    titleAr: 'تصميم حدائق ومساحات خارجية (Landscape Design)',
    titleEn: 'Landscape Architecture & Garden Design',
    descriptionAr: 'ينشئ تصميمًا متكاملاً للحدائق، الجلسات الخارجية، المسابح، والممرات الحجرية مع توزيع نباتي متناسق.',
    descriptionEn: 'Produce luxury outdoor landscape architecture with pools, sunken fire pits, native flora, and ambient path lighting.',
    group: 'design',
    designCategory: 'architecture',
    outputType: 'image',
    outputBadges: ['معماري'],
    params: [
      { key: 'garden_concept', flag: 'garden_concept', isPositional: true, type: 'string', required: true, labelAr: 'المساحة الخارجية والمرافق', labelEn: 'Outdoor Concept', hintAr: 'مثال: حديقة فيلا خاصة مع مسبح مائي وجلسة غاطسة', hintEn: 'e.g. Private modern villa backyard with infinity pool, olive trees, and sunken lounge' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'modern-oasis', labelAr: 'الأسلوب', labelEn: 'Landscape Style', hintAr: 'modern-oasis, zen-minimalist, mediterranean-tropical', hintEn: 'modern-oasis' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'dusk-path-lighting', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'dusk-path-lighting, bright-daylight, warm-underwater-glow', hintEn: 'dusk-path-lighting' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'wide', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'wide, landscape', hintEn: 'wide' }
    ],
    example: '/landscape design "حديقة فيلا خاصة مع مسبح مائي وجلسة غاطسة" --style=modern-oasis --lighting=dusk-path-lighting --format=wide',
    qualityRules: [
      'دمج النباتات المحلية (كالنخيل والزيتون والأعشاب الجافة) بطريقة مستدامة وجمالية',
      'انعكاسات هادئة على سطح الماء في المسبح وملمس واقعي للأحجار والخشب المعالج',
      'إضاءات أرضية خفية توجه الحركة وتبرز الكتل النباتية ليلاً'
    ],
    keywords: ['landscape design', 'تصميم حدائق', 'لاندسكيب', 'مسبح فيلا', 'جلسة خارجية'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 118,
    isFavorite: false
  },
  {
    id: 'des-arch-068',
    code: '/restaurant interior',
    titleAr: 'تصميم داخلي لمطعم ومقهى راقٍ (Restaurant & Cafe Interior)',
    titleEn: 'Hospitality & Fine Dining Restaurant Interior',
    descriptionAr: 'ينشئ تصميمًا داخليًا فاخرًا لمطعم أو مقهى مختص مع بار تقديم أنيق وتوزيع طاولات وإضاءة جذابة للزبائن.',
    descriptionEn: 'Generate immersive restaurant and specialty coffee shop interiors with custom bar counters, booths, and intimate mood.',
    group: 'design',
    designCategory: 'architecture',
    outputType: 'image',
    outputBadges: ['معماري'],
    params: [
      { key: 'dining_concept', flag: 'dining_concept', isPositional: true, type: 'string', required: true, labelAr: 'طبيعة المطعم وطرازه', labelEn: 'Dining Concept', hintAr: 'مثال: مطعم راقٍ بديكورات خشبية ونباتات معلقة وإضاءة دافئة', hintEn: 'e.g. High-end fine dining restaurant with warm wood accents and cascading hanging greenery' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'luxury-hospitality', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'luxury-hospitality, modern-industrial, boutique-cozy, art-deco', hintEn: 'luxury-hospitality' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'dim-warm-intimate', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'dim-warm-intimate, pendant-spotlights, natural-daylight', hintEn: 'dim-warm-intimate' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, wide', hintEn: 'landscape' }
    ],
    example: '/restaurant interior "مطعم راقٍ بديكورات خشبية ونباتات معلقة وإضاءة دافئة" --style=luxury-hospitality --lighting=dim-warm-intimate --format=landscape',
    qualityRules: [
      'توزيع مريح للطاولات والكراسي يحافظ على الخصوصية وحرية حركة الموظفين',
      'تركيز إضاءة ناعمة فوق الطاولات مع خلفية محيطة هادئة تعزز تجربة الضيافة',
      'تفاصيل دقيقة في خامات الطاولات، أطقم الأواني، والبار الرئيسي'
    ],
    keywords: ['restaurant interior', 'تصميم مطعم', 'ديكور كافيه', 'مقهى مختص', 'hospitality design'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 126,
    isFavorite: false
  },
  {
    id: 'des-arch-069',
    code: '/retail interior',
    titleAr: 'تصميم متجر تجاري ومعرض منتجات (Retail Boutique Interior)',
    titleEn: 'Commercial Retail Store & Boutique Interior',
    descriptionAr: 'ينشئ تصميمًا لمعرض أزياء، متجر عطور، أو متجر إلكترونيات مع أرفف عرض مضيئة وتجربة تسوق بصرية متميزة.',
    descriptionEn: 'Design retail fashion boutiques and flagship showrooms with integrated shelf lighting and display islands.',
    group: 'design',
    designCategory: 'architecture',
    outputType: 'image',
    outputBadges: ['معماري'],
    params: [
      { key: 'store_concept', flag: 'store_concept', isPositional: true, type: 'string', required: true, labelAr: 'نوع المتجر والمنتجات', labelEn: 'Retail Store Concept', hintAr: 'مثال: بوتيك عطور فاخر بأرفف رخامية وأعمدة مضيئة', hintEn: 'e.g. High-end luxury perfume boutique with curved marble niches and backlit display arches' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'minimalist-flagship', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'minimalist-flagship, futuristic-tech, boutique-opulence', hintEn: 'minimalist-flagship' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'integrated-led-shelves', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'integrated-led-shelves, dramatic-spotlight, bright-commercial', hintEn: 'integrated-led-shelves' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, wide', hintEn: 'landscape' }
    ],
    example: '/retail interior "بوتيك عطور فاخر بأرفف رخامية وأعمدة مضيئة" --style=minimalist-flagship --lighting=integrated-led-shelves --format=landscape',
    qualityRules: [
      'توجيه مسار العميل عبر التصميم من المدخل إلى منصات العرض المركزية بسلاسة',
      'إضاءات موجهة تبرز تفاصيل المنتجات دون إبهار بصري مزعج',
      'خامات راقية تعزز القيمة المدركة للمنتجات المعروضة'
    ],
    keywords: ['retail interior', 'تصميم متجر', 'بوتيك عطور', 'معرض تجاري', 'store design'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 114,
    isFavorite: false
  },
  {
    id: 'des-arch-070',
    code: '/workspace design',
    titleAr: 'تصميم بيئة ومقر عمل حديث (Modern Corporate Workspace)',
    titleEn: 'Biophilic Modern Corporate Workspace Interior',
    descriptionAr: 'ينشئ تصميمًا لمكاتب ومقرات الشركات المبتكرة يجمع بين الإنتاجية، النباتات الطبيعية، وقاعات الاجتماعات التفاعلية.',
    descriptionEn: 'Generate modern corporate office environments with collaborative pods, acoustic phone booths, and biophilic greenery.',
    group: 'design',
    designCategory: 'architecture',
    outputType: 'image',
    outputBadges: ['معماري'],
    params: [
      { key: 'office_desc', flag: 'office_desc', isPositional: true, type: 'string', required: true, labelAr: 'طبيعة المكتب ومساحات العمل', labelEn: 'Office Workspace Description', hintAr: 'مثال: مقر شركة تقنية بمساحات مفتوحة وجدران نباتية وقاعات زجاجية', hintEn: 'e.g. Modern tech company headquarters with open workstations, living plant walls, and glass meeting cubes' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'biophilic-tech', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'biophilic-tech, minimalist-corporate, creative-startup-hub', hintEn: 'biophilic-tech' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'abundant-daylight', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'abundant-daylight, architectural-linear-led, warm-indirect', hintEn: 'abundant-daylight' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, wide', hintEn: 'landscape' }
    ],
    example: '/workspace design "مقر شركة تقنية بمساحات مفتوحة وجدران نباتية وقاعات زجاجية" --style=biophilic-tech --lighting=abundant-daylight --format=landscape',
    qualityRules: [
      'دمج العناصر الطبيعية (Biophilic elements) لتعزيز رفاهية الموظفين والراحة النفسية',
      'توزيع صوتي وهندسي يفصل المساحات الهادئة عن مناطق الحوار والنقاش',
      'أثاث مكتبي مريح (Ergonomic furniture) وإضاءة صحية واسعة'
    ],
    keywords: ['workspace design', 'تصميم مكاتب', 'مقر شركة', 'بيئة عمل حديثة', 'office interior'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 122,
    isFavorite: false
  }
];
