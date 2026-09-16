import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const DESIGN_PERSPECTIVES_PROMPTS: CommandPrompt[] = [
  {
    id: 'des-persp-091',
    code: '/top view',
    titleAr: 'مسقط رأسي علوي مباشر (Top-Down / Flat Lay)',
    titleEn: 'Flat Lay & Overhead Top-Down View',
    descriptionAr: 'ينشئ لقطة من الأعلى بزاوية 90 درجة عمودية مباشرة (Flat Lay) لتنسيق المنتجات، الأطباق، أو أدوات العمل.',
    descriptionEn: 'Produce perfect 90-degree orthogonal flat lay photography for food staging, desk setups, and product kits.',
    group: 'design',
    designCategory: 'perspectives',
    outputType: 'image',
    outputBadges: ['مسقط / زاوية'],
    params: [
      { key: 'flatlay_items', flag: 'flatlay_items', isPositional: true, type: 'string', required: true, labelAr: 'العناصر والأدوات المرتبة', labelEn: 'Staged Items & Arrangement', hintAr: 'مثال: أدوات مكتبية، لابتوب، فنجان قهوة، ونظارة مرتبة بنظام', hintEn: 'e.g. Minimalist developer desk flat lay with laptop, coffee cup, notebook, and pen' },
      { key: 'background', flag: 'background', isPositional: false, type: 'string', required: false, defaultValue: 'light-wood-or-concrete', labelAr: 'السطح والخلفية', labelEn: 'Surface Texture', hintAr: 'light-wood-or-concrete, marble-slab, clean-pastel', hintEn: 'light-wood-or-concrete' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'even-soft-daylight', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'even-soft-daylight, soft-side-shadow, studio-diffused', hintEn: 'even-soft-daylight' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'square', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'square (1:1), vertical-4:5', hintEn: 'square' }
    ],
    example: '/top view "أدوات مكتبية، لابتوب، فنجان قهوة، ونظارة مرتبة بنظام" --background=light-wood-or-concrete --lighting=even-soft-daylight --format=square',
    qualityRules: [
      'تعامد عمودي دقيق بزاوية 90 درجة دون تشوه في المنظور المائل',
      'ترتيب فراغي متناسق (Knolling organization) بمسافات وهوامش متساوية بين الأدوات',
      'ظلال خفيفة ناعمة تمنح كل عنصر عمقًا دون طمس التفاصيل'
    ],
    keywords: ['top view', 'مسقط علوي', 'فلات لاي', 'flat lay photo', 'تصوير عمودي من الاعلى'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 134,
    isFavorite: false
  },
  {
    id: 'des-persp-092',
    code: '/side view',
    titleAr: 'لقطة جانبية متوازية (Side Profile View)',
    titleEn: 'Orthographic Side Profile View',
    descriptionAr: 'ينشئ لقطة بروفايل جانبية تبرز انسيابية التصميم، النحافة، وتفاصيل الحواف للمنتجات والسيارات والأشخاص.',
    descriptionEn: 'Generate clean side profile perspectives highlighting silhouette, ergonomic curves, and thickness dimensions.',
    group: 'design',
    designCategory: 'perspectives',
    outputType: 'image',
    outputBadges: ['مسقط / زاوية'],
    params: [
      { key: 'subject', flag: 'subject', isPositional: true, type: 'string', required: true, labelAr: 'العنصر أو المنتج', labelEn: 'Subject Profile', hintAr: 'مثال: سيارة رياضية حديثة من الجانب', hintEn: 'e.g. Luxury sports electric sedan pure side profile in studio' },
      { key: 'background', flag: 'background', isPositional: false, type: 'string', required: false, defaultValue: 'studio-infinity-cove', labelAr: 'الخلفية', labelEn: 'Background', hintAr: 'studio-infinity-cove, pure-dark, architectural-wall', hintEn: 'studio-infinity-cove' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'rim-contour-highlight', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'rim-contour-highlight, soft-strip-box, daylight', hintEn: 'rim-contour-highlight' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'wide', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'wide (16:9), landscape', hintEn: 'wide' }
    ],
    example: '/side view "سيارة رياضية حديثة من الجانب" --background=studio-infinity-cove --lighting=rim-contour-highlight --format=wide',
    qualityRules: [
      'محاذاة أفقية متوازية تمامًا دون ميلان أو تشويه بالعدسة العريضة',
      'إبراز انسيابية الخطوط الجانبية وتفاصيل الجنوط والأبواب بدقة فائقة',
      'إضاءة كونتور تحدد الهيكل الخارجي بسلاسة'
    ],
    keywords: ['side view', 'لقطة جانبية', 'بروفايل منتج', 'side profile shot', 'مسقط جانبي'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 118,
    isFavorite: false
  },
  {
    id: 'des-persp-093',
    code: '/back view',
    titleAr: 'لقطة خلفية أو من وراء الشخص (Rear / Back View)',
    titleEn: 'Atmospheric Rear & Back Angle View',
    descriptionAr: 'ينشئ لقطة من الخلف للشخصيات أو المنتجات أو السيارات تبرز التفاصيل الخلفية أو استكشاف الأفق الواسع.',
    descriptionEn: 'Produce cinematic rear perspectives capturing subjects gazing into vistas or detailing back product features.',
    group: 'design',
    designCategory: 'perspectives',
    outputType: 'image',
    outputBadges: ['مسقط / زاوية'],
    params: [
      { key: 'rear_scene', flag: 'rear_scene', isPositional: true, type: 'string', required: true, labelAr: 'المشهد والشخصية من الخلف', labelEn: 'Rear Scene Description', hintAr: 'مثال: مسافر ينظر إلى أفق الجبال من الخلف عند شروق الشمس', hintEn: 'e.g. Traveler with backpack seen from behind looking out over sunrise mountain vista' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'golden-backlight', labelAr: 'الإضاءة', labelEn: 'Backlighting', hintAr: 'golden-backlight, silhouette-sun, dramatic-haze', hintEn: 'golden-backlight' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, vertical, wide', hintEn: 'landscape' }
    ],
    example: '/back view "مسافر ينظر إلى أفق الجبال من الخلف عند شروق الشمس" --lighting=golden-backlight --format=landscape',
    qualityRules: [
      'توجيه مسار بصر المشاهد من ظهر الشخصية نحو الأفق الممتد',
      'إضاءة خلفية ذهبية ترسم خطوط الجسم وشعره برقة وتفصله عن المشهد',
      'إحساس بالغموض والاستكشاف والرغبة في المعرفة'
    ],
    keywords: ['back view', 'لقطة من الخلف', 'منظور خلفي', 'rear view', 'استكشاف الأفق'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 110,
    isFavorite: false
  },
  {
    id: 'des-persp-094',
    code: '/360 view',
    titleAr: 'مشهد بانورامي محيطي 360 درجة (360 Equirectangular)',
    titleEn: '360° Spherical Equirectangular Panorama',
    descriptionAr: 'ينشئ مشهدًا بانوراميًا كرويًا محيطيًا 360 درجة مخصصًا للواقع الافتراضي VR والجولات التفاعلية ثلاثية الأبعاد.',
    descriptionEn: 'Generate seamless 360-degree equirectangular environment maps for VR, architectural virtual tours, and game HDRI.',
    group: 'design',
    designCategory: 'perspectives',
    outputType: 'image',
    outputBadges: ['مسقط / زاوية'],
    params: [
      { key: 'panorama_environment', flag: 'panorama_environment', isPositional: true, type: 'string', required: true, labelAr: 'البيئة المحيطة 360', labelEn: '360 Environment Scene', hintAr: 'مثال: صالة استقبال فندقية فاخرة بإطلالة 360 درجة كاملة', hintEn: 'e.g. Luxury 5-star hotel grand atrium 360 equirectangular spherical panorama' },
      { key: 'projection', flag: 'projection', isPositional: false, type: 'string', required: false, defaultValue: 'equirectangular-2:1', labelAr: 'نوع الإسقاط البانورامي', labelEn: 'Projection', hintAr: 'equirectangular-2:1 (standard VR HDRI), seamless-horizontal', hintEn: 'equirectangular-2:1' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'ambient-interior-cove', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'ambient-interior-cove, natural-sky-daylight, evening-warm', hintEn: 'ambient-interior-cove' }
    ],
    example: '/360 view "صالة استقبال فندقية فاخرة بإطلالة 360 درجة كاملة" --projection=equirectangular-2:1 --lighting=ambient-interior-cove',
    qualityRules: [
      'توافق سلس 100% بين الحافة اليسرى واليمنى للمشهد لتشكيل حلقة محيطية كاملة',
      'استواء خط الأفق المركزي وتصحيح تشوه النادير والسمت (Zenith & Nadir)',
      'إضاءة متكاملة توفر بيئة واقعية عند تدوير الكاميرا في نظارات VR'
    ],
    keywords: ['360 view', 'بانوراما 360', 'واقع افتراضي', 'equirectangular', 'جولة افتراضية'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 112,
    isFavorite: false
  },
  {
    id: 'des-persp-095',
    code: '/close up',
    titleAr: 'لقطة ماكرو مقربة للتفاصيل الدقيقة (Macro / Close-Up)',
    titleEn: 'Ultra-Detailed Macro & Close-Up Shot',
    descriptionAr: 'ينشئ لقطة ماكرو فائقة التقريب تركز على أدق التفاصيل: قطرات الندى، حياكة القماش، تروس الساعة، أو مسام الجلد.',
    descriptionEn: 'Capture extreme macro close-ups showcasing intricate textures, mechanical gear teeth, or micro fiber weaves.',
    group: 'design',
    designCategory: 'perspectives',
    outputType: 'image',
    outputBadges: ['مسقط / زاوية'],
    params: [
      { key: 'detail_subject', flag: 'detail_subject', isPositional: true, type: 'string', required: true, labelAr: 'العنصر والتفصيلة الدقيقة', labelEn: 'Macro Detail Subject', hintAr: 'مثال: تروس ساعة يد ميكانيكية مذهبة بدقة متناهية', hintEn: 'e.g. Extreme macro of gold tourbillon mechanical watch gears and ruby bearings' },
      { key: 'focus', flag: 'focus', isPositional: false, type: 'string', required: false, defaultValue: 'shallow-depth-of-field', labelAr: 'العمق والتركيز', labelEn: 'Focus & Depth', hintAr: 'shallow-depth-of-field (f/1.4), focus-stacked, ultra-sharp', hintEn: 'shallow-depth-of-field' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'macro-ring-light', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'macro-ring-light, specular-glint, directional-micro', hintEn: 'macro-ring-light' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'square', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'square, vertical, landscape', hintEn: 'square' }
    ],
    example: '/close up "تروس ساعة يد ميكانيكية مذهبة بدقة متناهية" --focus=shallow-depth-of-field --lighting=macro-ring-light --format=square',
    qualityRules: [
      'حدة بالغة في مركز التركيز البصري مع تمويه ناعم وسلس لباقي المناطق (Creamy Bokeh)',
      'إبراز لمعان وانعكاسات الحبيبات والمواد المجهرية بدقة واقعية',
      'تجنب أي ضبابية حركة ناتجة عن الاهتزاز'
    ],
    keywords: ['close up', 'تصوير ماكرو', 'لقطة مقربة', 'macro photography', 'تفاصيل دقيقة'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 130,
    isFavorite: false
  },
  {
    id: 'des-persp-096',
    code: '/wide shot',
    titleAr: 'لقطة عريضة واسعة للمشهد (Wide Angle Shot)',
    titleEn: 'Expansive Panoramic Wide-Angle Shot',
    descriptionAr: 'ينشئ مشهدًا واسعًا بعدسة عريضة يحيط بالمكان كاملًا، ويبرز ضخامة البيئة المعمارية أو الطبيعية المحيطة.',
    descriptionEn: 'Produce expansive wide-angle landscape and architectural establishing shots with controlled distortion.',
    group: 'design',
    designCategory: 'perspectives',
    outputType: 'image',
    outputBadges: ['مسقط / زاوية'],
    params: [
      { key: 'scene_scope', flag: 'scene_scope', isPositional: true, type: 'string', required: true, labelAr: 'المشهد الواسع والمكان', labelEn: 'Wide Scene Scope', hintAr: 'مثال: وادي صخري شاسع في العلا مع مبنى مرايا الزجاجي', hintEn: 'e.g. Grand AlUla desert canyon with Maraya mirrored building in wide panorama' },
      { key: 'lens', flag: 'lens', isPositional: false, type: 'string', required: false, defaultValue: '16mm-wide', labelAr: 'العدسة', labelEn: 'Focal Length', hintAr: '16mm-wide, 24mm-architectural, ultra-wide-rectilinear', hintEn: '16mm-wide' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'golden-hour-expansive', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'golden-hour-expansive, dramatic-clouds, bright-sun', hintEn: 'golden-hour-expansive' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'wide-16:9', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'wide-16:9, panoramic-21:9', hintEn: 'wide-16:9' }
    ],
    example: '/wide shot "وادي صخري شاسع في العلا مع مبنى مرايا الزجاجي" --lens=16mm-wide --lighting=golden-hour-expansive --format=wide-16:9',
    qualityRules: [
      'تصحيح هندسي للخطوط الرأسية لمنع انحناء الأعمدة والمباني (Rectilinear correction)',
      'وضوح التفاصيل في المقدمة القريبة وصولاً إلى أقصى نقطة في الأفق',
      'توزيع العناصر وفق قاعدة التثليث البصري لتأكيد عمق المشهد'
    ],
    keywords: ['wide shot', 'لقطة واسعة', 'عدسة عريضة', 'wide angle photography', 'بانوراما شاملة'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 125,
    isFavorite: false
  },
  {
    id: 'des-persp-097',
    code: '/aerial view',
    titleAr: 'لقطة جوية بواسطة طائرة درون (Drone Aerial View)',
    titleEn: 'Drone Bird\'s-Eye & High-Angle Aerial Shot',
    descriptionAr: 'ينشئ لقطة جوية مذهلة من طائرة درون تستعرض المخططات، السواحل، الجبال، أو مشاريع التطوير العقاري الكبرى.',
    descriptionEn: 'Generate high-altitude drone shots and bird’s-eye masterplan perspectives capturing expansive developments.',
    group: 'design',
    designCategory: 'perspectives',
    outputType: 'image',
    outputBadges: ['مسقط / زاوية'],
    params: [
      { key: 'aerial_subject', flag: 'aerial_subject', isPositional: true, type: 'string', required: true, labelAr: 'المنطقة والمشروع من الجو', labelEn: 'Aerial Subject', hintAr: 'مثال: مشروع جزيرة سياحية حديثة على البحر الأحمر من الجو', hintEn: 'e.g. Aerial drone view of Red Sea resort archipelago with coral reefs and overwater villas' },
      { key: 'angle', flag: 'angle', isPositional: false, type: 'string', required: false, defaultValue: '45-degree-drone-angle', labelAr: 'زاوية الدرون', labelEn: 'Drone Angle', hintAr: '45-degree-drone-angle, birds-eye-straight-down, high-altitude-oblique', hintEn: '45-degree-drone-angle' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'crystal-clear-sunlight', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'crystal-clear-sunlight, sunrise-fog, golden-sunset', hintEn: 'crystal-clear-sunlight' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, wide', hintEn: 'landscape' }
    ],
    example: '/aerial view "مشروع جزيرة سياحية حديثة على البحر الأحمر من الجو" --angle=45-degree-drone-angle --lighting=crystal-clear-sunlight --format=landscape',
    qualityRules: [
      'نقاء بصري يبرز تدرجات المياه الفيروزية والشعاب المرجانية والتفاصيل المعمارية',
      'إبراز المخطط العام وتوزيع الطرق والمرافق بتكامل هندسي',
      'تدرجات لونية واقعية لضوء الشمس وانعكاساته على البحر والأرض'
    ],
    keywords: ['aerial view', 'تصوير درون', 'لقطة جوية', 'drone photography', 'عين الطائر'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 132,
    isFavorite: false
  },
  {
    id: 'des-persp-098',
    code: '/explode view',
    titleAr: 'رسم تفكيكي للأجزاء والمكونات (Exploded Assembly View)',
    titleEn: 'Engineering Exploded Assembly View',
    descriptionAr: 'ينشئ رسمًا تفكيكيًا ثلاثي الأبعاد يُظهر المكونات الداخلية للجهاز أو المنتج وهي طافية بنظام هندسي متقن.',
    descriptionEn: 'Produce precision engineering exploded diagrams showcasing floating internal components, chips, and chassis.',
    group: 'design',
    designCategory: 'perspectives',
    outputType: 'image',
    outputBadges: ['مسقط / زاوية'],
    params: [
      { key: 'mechanism', flag: 'mechanism', isPositional: true, type: 'string', required: true, labelAr: 'المنتج أو الجهاز المراد تفكيكه', labelEn: 'Product Assembly', hintAr: 'مثال: تفكيك أجزاء سماعة رأس لاسلكية حديثة: الهيكل، البطارية، المشغلات الصوتية، والدوائر', hintEn: 'e.g. Exploded 3D view of wireless headphones showing acoustic drivers, PCB, and leather ear cushions' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: '3d-technical-render', labelAr: 'الأسلوب الهندسي', labelEn: 'Technical Style', hintAr: '3d-technical-render, blueprint-schematic, luxury-exploded-hero', hintEn: '3d-technical-render' },
      { key: 'background', flag: 'background', isPositional: false, type: 'string', required: false, defaultValue: 'clean-dark-studio', labelAr: 'الخلفية', labelEn: 'Background', hintAr: 'clean-dark-studio, pure-white, grid-technical', hintEn: 'clean-dark-studio' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, square, vertical', hintEn: 'landscape' }
    ],
    example: '/explode view "تفكيك أجزاء سماعة رأس لاسلكية حديثة: الهيكل، البطارية، المشغلات الصوتية، والدوائر" --style=3d-technical-render --background=clean-dark-studio --format=landscape',
    qualityRules: [
      'ترتيب المكونات على محور مركزي واحد يوضح مسار التجميع الهندسي بدقة (Assembly axis alignment)',
      'إبراز خامات كل جزء مستقلاً (المعادن، البلاستيك، السيليكون، الرقائق الإلكترونية)',
      'إضاءة حواف تفصل كل قطعة عائمة عن جارتها بوضوح'
    ],
    keywords: ['explode view', 'رسم تفكيكي', 'مكونات داخلية', 'exploded view 3d', 'اجزاء المنتج'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 126,
    isFavorite: false
  },
  {
    id: 'des-persp-099',
    code: '/cutaway view',
    titleAr: 'مقطع قطاعي داخلي مكشوف (Cutaway / Cross-Section)',
    titleEn: 'Architectural & Product Cutaway Cross-Section',
    descriptionAr: 'ينشئ مقطعًا قطاعيًا يكشف الطبقات والأنظمة الداخلية للمبنى، المحرك، أو التغليف مع إبقاء الهيكل الخارجي جزئيًا.',
    descriptionEn: 'Generate cross-sectional cutaways revealing complex interior mechanisms or architectural interior layers.',
    group: 'design',
    designCategory: 'perspectives',
    outputType: 'image',
    outputBadges: ['مسقط / زاوية'],
    params: [
      { key: 'cutaway_subject', flag: 'cutaway_subject', isPositional: true, type: 'string', required: true, labelAr: 'الكتلة والمقطع المطلوب', labelEn: 'Cutaway Subject', hintAr: 'مثال: قطاع عرضي لفيلا ذكية يوضح أنظمة العزل والأثاث الداخلي', hintEn: 'e.g. Architectural cutaway of modern smart home showing layered floor heating, insulation, and furnished rooms' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'photorealistic-3d-section', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'photorealistic-3d-section, technical-illustration, hybrid-sketch-render', hintEn: 'photorealistic-3d-section' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'internal-glow-illumination', labelAr: 'الإضاءة الداخلية', labelEn: 'Interior Illumination', hintAr: 'internal-glow-illumination, daylight-cut, studio-even', hintEn: 'internal-glow-illumination' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, wide', hintEn: 'landscape' }
    ],
    example: '/cutaway view "قطاع عرضي لفيلا ذكية يوضح أنظمة العزل والأثاث الداخلي" --style=photorealistic-3d-section --lighting=internal-glow-illumination --format=landscape',
    qualityRules: [
      'خط قطع حاد ونظيف ومحدد بلون أو خامة مميزة توضح موضع الفصل',
      'تفصيل الطبقات المادية المتراكبة بدقة هندسية عالية',
      'إضاءة داخلية تبرز الغرف والآليات المخفية بوضوح'
    ],
    keywords: ['cutaway view', 'مقطع عرضي', 'قطاع داخلي', 'cross section render', 'كت أواي'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 115,
    isFavorite: false
  },
  {
    id: 'des-persp-100',
    code: '/before after',
    titleAr: 'توليد مشهد مقارنة مزدوج (Before / After Comparison)',
    titleEn: 'Dual-State Before & After Transformation',
    descriptionAr: 'ينشئ صورة مدمجة تعرض الحالة السابقة والحالة الجديدة بعد التحسين في إطار واحد متطابق الزوايا.',
    descriptionEn: 'Produce matched dual-panel before and after transformation showcases with unified lighting coordinates.',
    group: 'design',
    designCategory: 'perspectives',
    outputType: 'image',
    outputBadges: ['مسقط / زاوية', 'تصميم إعلاني'],
    params: [
      { key: 'transformation_case', flag: 'transformation_case', isPositional: true, type: 'string', required: true, labelAr: 'حالة التحول والمقارنة', labelEn: 'Transformation Case', hintAr: 'مثال: واجهة متجر قديمة مهترئة تحولت إلى بوتيك عصري فاخر', hintEn: 'e.g. Dilapidated storefront transformed into luxury modern boutique facade' },
      { key: 'split_style', flag: 'split_style', isPositional: false, type: 'string', required: false, defaultValue: 'side-by-side-with-divider', labelAr: 'نوع التقسيم', labelEn: 'Split Presentation', hintAr: 'side-by-side-with-divider, diagonal-slider-cut, dual-panel', hintEn: 'side-by-side-with-divider' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape (16:9), square (1:1)', hintEn: 'landscape' }
    ],
    example: '/before after "واجهة متجر قديمة مهترئة تحولت إلى بوتيك عصري فاخر" --split_style=side-by-side-with-divider --format=landscape',
    qualityRules: [
      'تطابق كامل في زاوية الكاميرا والمنظور والأبعاد بين الصورتين',
      'خط فاصل هندسي واضح مع علامات "قبل" و"بعد" بأناقة بصرية',
      'فارق نوعي ملموس يعكس قيمة التحسين الفعلي'
    ],
    keywords: ['before after', 'قبل وبعد', 'مقارنة تحول', 'before and after image', 'تحول بصري'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 138,
    isFavorite: true
  }
];
