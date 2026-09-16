import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const DESIGN_EDITING_PROMPTS: CommandPrompt[] = [
  {
    id: 'des-edit-081',
    code: '/enhance photo',
    titleAr: 'تحسين ومعالجة جودة الصورة (AI Photo Enhancer)',
    titleEn: 'AI Photo Restoration & Detail Enhancement',
    descriptionAr: 'يرفع دقة ووضوح الصورة، يزيل التشويش والضبابية، ويبرز تفاصيل الملامح والأقمشة والخامات بدقة مذهلة.',
    descriptionEn: 'Upscale and enhance image resolution, remove sensor noise and compression artifacts, and restore textures.',
    group: 'design',
    designCategory: 'editing',
    outputType: 'image',
    outputBadges: ['تحسين'],
    params: [
      { key: 'target_image', flag: 'target_image', isPositional: true, type: 'string', required: true, labelAr: 'الصورة والعناصر المراد تحسينها', labelEn: 'Image to Enhance', hintAr: 'مثال: صورة شخصية قديمة منخفضة الدقة', hintEn: 'e.g. Vintage low-resolution family portrait photo' },
      { key: 'upscale', flag: 'upscale', isPositional: false, type: 'string', required: false, defaultValue: '4k-sharpness', labelAr: 'مستوى المعالجة والحدة', labelEn: 'Resolution Level', hintAr: '4k-sharpness, ultra-hd-restore, clean-denoise', hintEn: '4k-sharpness' },
      { key: 'preserve', flag: 'preserve', isPositional: false, type: 'string', required: false, defaultValue: 'natural-skin-texture', labelAr: 'الحفاظ على الخصائص الطبيعية', labelEn: 'Preserve', hintAr: 'natural-skin-texture, original-colors, authentic-lighting', hintEn: 'natural-skin-texture' }
    ],
    example: '/enhance photo "صورة شخصية قديمة منخفضة الدقة" --upscale=4k-sharpness --preserve=natural-skin-texture',
    qualityRules: [
      'تجنب النعومة المفرطة أو التأثير البلاستيكي المصطنع على البشرة والخامات',
      'الحفاظ التام على ملامح وهوية الشخص الأصلية دون تغيير الهيكل العظمي أو الملامح',
      'معالجة التحبيب الرقمي (Digital noise) مع استعادة التفاصيل الدقيقة'
    ],
    keywords: ['enhance photo', 'تحسين جودة الصورة', 'توضيح الصورة', 'photo upscale', 'معالجة الصور'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 158,
    isFavorite: true
  },
  {
    id: 'des-edit-082',
    code: '/remove background',
    titleAr: 'إزالة وعزل الخلفية بدقة (Remove Background / Cutout)',
    titleEn: 'Precision Subject Background Removal & Alpha Cutout',
    descriptionAr: 'يعزل العنصر أو الشخص بدقة بالغة حول تفاصيل الشعر والأطراف الشفافة مع خلفية بيضاء نقية أو شفافة.',
    descriptionEn: 'Perform precision edge masking and background removal with sub-pixel hair and fur alpha clipping.',
    group: 'design',
    designCategory: 'editing',
    outputType: 'image',
    outputBadges: ['تعديل صورة'],
    params: [
      { key: 'subject_image', flag: 'subject_image', isPositional: true, type: 'string', required: true, labelAr: 'العنصر أو المنتج المراد عزله', labelEn: 'Subject / Product Cutout', hintAr: 'مثال: عزل صورة منتج حذاء رياضي مع ظلال أرضية خفيفة', hintEn: 'e.g. Athletic sneaker isolated on transparent alpha with subtle ground contact shadow' },
      { key: 'output_bg', flag: 'output_bg', isPositional: false, type: 'string', required: false, defaultValue: 'transparent-png', labelAr: 'نوع الخلفية الناتجة', labelEn: 'Output Background', hintAr: 'transparent-png, pure-white, solid-neutral', hintEn: 'transparent-png' },
      { key: 'shadow', flag: 'shadow', isPositional: false, type: 'string', required: false, defaultValue: 'keep-soft-contact-shadow', labelAr: 'معالجة الظل', labelEn: 'Ground Shadow', hintAr: 'keep-soft-contact-shadow, none, studio-reflection', hintEn: 'keep-soft-contact-shadow' }
    ],
    example: '/remove background "عزل صورة منتج حذاء رياضي مع ظلال أرضية خفيفة" --output_bg=transparent-png --shadow=keep-soft-contact-shadow',
    qualityRules: [
      'حواف ناعمة ودقيقة خالية من التعرج أو الحواف الخضراء/البيضاء المتبقية (No fringing or halo)',
      'التقاط خصلات الشعر الفردية أو الملامح الدقيقة للمنتج دون قطع غير مقصود',
      'الإبقاء على ظل تلامس أرضي طبيعي لمنع مظهر الطفو غير الواقعي'
    ],
    keywords: ['remove background', 'ازالة الخلفية', 'تفريغ الصورة', 'قص الصورة', 'background cutout'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 150,
    isFavorite: true
  },
  {
    id: 'des-edit-083',
    code: '/change background',
    titleAr: 'تغيير واستبدال الخلفية ببيئة احترافية (Replace Background)',
    titleEn: 'Contextual Environment & Background Replacement',
    descriptionAr: 'يستبدل خلفية العنصر أو الشخص ببيئة جديدة متكاملة مع مطابقة زاوية الإضاءة وانعكاسات الألوان تلقائيًا.',
    descriptionEn: 'Seamlessly composite subjects into new environments with automatic lighting matching, ambient light wrap, and perspective alignment.',
    group: 'design',
    designCategory: 'editing',
    outputType: 'image',
    outputBadges: ['تعديل صورة'],
    params: [
      { key: 'subject_and_new_bg', flag: 'subject_and_new_bg', isPositional: true, type: 'string', required: true, labelAr: 'العنصر والخلفية الجديدة المطلوبة', labelEn: 'Subject & Target Background', hintAr: 'مثال: وضع زجاجة العطر على منصة رخامية في شاطئ هادئ عند الغروب', hintEn: 'e.g. Place perfume bottle on luxury marble pedestal on sunset beach' },
      { key: 'blend', flag: 'blend', isPositional: false, type: 'string', required: false, defaultValue: 'photorealistic-light-wrap', labelAr: 'أسلوب الدمج', labelEn: 'Blending Mode', hintAr: 'photorealistic-light-wrap, depth-of-field-blur, cinematic-grade', hintEn: 'photorealistic-light-wrap' },
      { key: 'preserve_subject', flag: 'preserve_subject', isPositional: false, type: 'string', required: false, defaultValue: 'keep-100-identity', labelAr: 'تطابق العنصر', labelEn: 'Preserve Subject', hintAr: 'keep-100-identity, adjust-lighting-only', hintEn: 'keep-100-identity' }
    ],
    example: '/change background "وضع زجاجة العطر على منصة رخامية في شاطئ هادئ عند الغروب" --blend=photorealistic-light-wrap --preserve_subject=keep-100-identity',
    qualityRules: [
      'تطبيق انعكاس لوني خفيف من البيئة الجديدة على أطراف العنصر (Light wrap / Color cast harmonization)',
      'تطابق زاوية الشمس ومصادر الضوء بين العنصر والخلفية الجديدة',
      'عزل عمق الميدان (Depth blur) للخلفية للحفاظ على تركيز العين على العنصر الأساسي'
    ],
    keywords: ['change background', 'تغيير الخلفية', 'استبدال خلفية', 'replace background', 'تركيب صورة'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 140,
    isFavorite: false
  },
  {
    id: 'des-edit-084',
    code: '/relight photo',
    titleAr: 'إعادة توزيع وتعديل الإضاءة (AI Relighting)',
    titleEn: 'Directional Scene & Portrait Relighting',
    descriptionAr: 'يعدل مصادر واتجاهات الإضاءة على الصورة (إضاءة شمسية ذهبية، نيون درامي، إضاءة استوديو ناعمة).',
    descriptionEn: 'Recompute directional lighting, highlights, and shadow gradients across complex geometry and faces.',
    group: 'design',
    designCategory: 'editing',
    outputType: 'image',
    outputBadges: ['تحسين', 'تعديل صورة'],
    params: [
      { key: 'scene_photo', flag: 'scene_photo', isPositional: true, type: 'string', required: true, labelAr: 'الصورة والإضاءة المستهدفة', labelEn: 'Image & Target Lighting', hintAr: 'مثال: تحويل إضاءة صورة البورتريه من نهارية باهتة إلى إضاءة غروب ذهبية دافئة', hintEn: 'e.g. Transform dull daylight portrait into warm golden hour rim lighting' },
      { key: 'light_source', flag: 'light_source', isPositional: false, type: 'string', required: false, defaultValue: 'golden-hour-sun-from-side', labelAr: 'مصدر وزاوية الضوء', labelEn: 'Light Direction', hintAr: 'golden-hour-sun-from-side, dramatic-blue-neon, soft-front-fill', hintEn: 'golden-hour-sun-from-side' },
      { key: 'shadow_depth', flag: 'shadow_depth', isPositional: false, type: 'string', required: false, defaultValue: 'soft-natural', labelAr: 'عمق الظلال', labelEn: 'Shadow Depth', hintAr: 'soft-natural, deep-moody, crisp-specular', hintEn: 'soft-natural' }
    ],
    example: '/relight photo "تحويل إضاءة صورة البورتريه من نهارية باهتة إلى إضاءة غروب ذهبية دافئة" --light_source=golden-hour-sun-from-side --shadow_depth=soft-natural',
    qualityRules: [
      'توزيع واقعي للظلال الساقطة على الوجه والأجسام بناءً على مصدر الضوء الجديد',
      'توليد لمعان طبيعي (Specular highlights) على أسطح الجلد والزجاج والمعادن',
      'تجنب تشويه تفاصيل الملامح أو حرق المناطق المضيئة (No blown-out whites)'
    ],
    keywords: ['relight photo', 'تعديل الاضاءة', 'اعادة اضاءة الصورة', 'ai relighting', 'توزيع الضوء'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 125,
    isFavorite: false
  },
  {
    id: 'des-edit-085',
    code: '/color grade photo',
    titleAr: 'تلوين ومعالجة سينمائية للألوان (Color Grading)',
    titleEn: 'Cinematic Color Grading & LUT Emulation',
    descriptionAr: 'يطبق لوحة تلوين احترافية مستوحاة من السينما (Teal & Orange، Vintage Film، Clean Commercial) على الصور.',
    descriptionEn: 'Apply cinematic color grades, tone curves, and film stock emulation while preserving skin tones.',
    group: 'design',
    designCategory: 'editing',
    outputType: 'image',
    outputBadges: ['تحسين'],
    params: [
      { key: 'input_scene', flag: 'input_scene', isPositional: true, type: 'string', required: true, labelAr: 'الصورة وطابع الألوان المرغوب', labelEn: 'Image & Color Aesthetic', hintAr: 'مثال: صورة شوارع مدينة عربية بألوان سينمائية دافئة', hintEn: 'e.g. City street photo graded in warm moody vintage cinematic palette' },
      { key: 'lut_style', flag: 'lut_style', isPositional: false, type: 'string', required: false, defaultValue: 'teal-and-orange', labelAr: 'النمط اللوني', labelEn: 'Grading Preset', hintAr: 'teal-and-orange, kodak-portra-film, moody-black-and-white, clean-commercial', hintEn: 'teal-and-orange' },
      { key: 'contrast', flag: 'contrast', isPositional: false, type: 'string', required: false, defaultValue: 'cinematic-rich', labelAr: 'التباين والتشبع', labelEn: 'Contrast Tone', hintAr: 'cinematic-rich, soft-matte-fade, vibrant-high-contrast', hintEn: 'cinematic-rich' }
    ],
    example: '/color grade photo "صورة شوارع مدينة عربية بألوان سينمائية دافئة" --lut_style=teal-and-orange --contrast=cinematic-rich',
    qualityRules: [
      'حماية درجات لون البشرة الطبيعية (Skin tone preservation) من التشبع اللوني الزائد',
      'تدرج متزن في المناطق المظلمة (Shadow roll-off) دون فقدان التفاصيل في السواد التام',
      'إضفاء مظهر سينمائي متماسك ومريح للعين'
    ],
    keywords: ['color grade photo', 'تلوين سينمائي', 'فلاتر سينمائية', 'color grading', 'معالجة الوان'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 132,
    isFavorite: false
  },
  {
    id: 'des-edit-086',
    code: '/retouch portrait',
    titleAr: 'تعديل وتجميل البورتريه الطبيعي (Portrait Retouch)',
    titleEn: 'Natural High-End Beauty & Skin Retouching',
    descriptionAr: 'ينظف الشوائب، يبيض الأسنان برقة، ويحسن بريق العيون وتناسق البشرة دون المساس بالملمس الطبيعي الحقيقي.',
    descriptionEn: 'Perform high-end frequency-separation skin retouching, blemish removal, and subtle eye brightening.',
    group: 'design',
    designCategory: 'editing',
    outputType: 'image',
    outputBadges: ['تحسين'],
    params: [
      { key: 'portrait_photo', flag: 'portrait_photo', isPositional: true, type: 'string', required: true, labelAr: 'صورة البورتريه المراد تنقيحها', labelEn: 'Portrait Image', hintAr: 'مثال: بورتريه سيدة مع تنقية شوائب البشرة والحفاظ على الملامح', hintEn: 'e.g. Editorial beauty portrait blemish cleanup and gentle skin smoothing' },
      { key: 'intensity', flag: 'intensity', isPositional: false, type: 'string', required: false, defaultValue: 'natural-subtle', labelAr: 'درجة التعديل', labelEn: 'Retouch Intensity', hintAr: 'natural-subtle, high-end-beauty, corporate-clean', hintEn: 'natural-subtle' },
      { key: 'details', flag: 'details', isPositional: false, type: 'string', required: false, defaultValue: 'preserve-skin-pores,brighten-eyes', labelAr: 'التحسينات المحددة', labelEn: 'Specific Fixes', hintAr: 'preserve-skin-pores,brighten-eyes,whiten-teeth', hintEn: 'preserve-skin-pores' }
    ],
    example: '/retouch portrait "بورتريه سيدة مع تنقية شوائب البشرة والحفاظ على الملامح" --intensity=natural-subtle --details=preserve-skin-pores,brighten-eyes',
    qualityRules: [
      'الاحتفاظ الكامل بمسام الجلد الطبيعية والرموش والحواجب (No plastic mannequin effect)',
      'إشراقة خفيفة للعينين مع إزالة الاحمرار دون مبالغة في البياض',
      'تنعيم متوازن للظلال تحت العينين والخطوط الدقيقة'
    ],
    keywords: ['retouch portrait', 'تعديل بشرة', 'تنقية الوجه', 'رتوش بورتريه', 'beauty retouching'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 136,
    isFavorite: false
  },
  {
    id: 'des-edit-087',
    code: '/product cleanup',
    titleAr: 'تنظيف وتلميع صور المنتجات التجارية (Product Cleanup)',
    titleEn: 'Commercial Product Cleanup & Defect Removal',
    descriptionAr: 'يزيل بصمات الأصابع، الغبار، الخدوش، والانعكاسات غير المرغوبة من صور المنتجات لتبدو جديدة وفاخرة.',
    descriptionEn: 'Clean dust, micro-scratches, finger smudges, and stray reflections from commercial product packshots.',
    group: 'design',
    designCategory: 'editing',
    outputType: 'image',
    outputBadges: ['تحسين'],
    params: [
      { key: 'product_photo', flag: 'product_photo', isPositional: true, type: 'string', required: true, labelAr: 'صورة المنتج والتنظيف المطلوب', labelEn: 'Product Photo & Cleanup', hintAr: 'مثال: تنظيف زجاجة عطر من بصمات الأصابع والغبار وجعل الشعار ناصعاً', hintEn: 'e.g. Glass bottle cleanup removing smudges and polishing metal cap reflections' },
      { key: 'finish', flag: 'finish', isPositional: false, type: 'string', required: false, defaultValue: 'commercial-flawless', labelAr: 'مستوى المعالجة', labelEn: 'Finish Level', hintAr: 'commercial-flawless, ultra-clean-specular, studio-grade', hintEn: 'commercial-flawless' }
    ],
    example: '/product cleanup "تنظيف زجاجة عطر من بصمات الأصابع والغبار وجعل الشعار ناصعاً" --finish=commercial-flawless',
    qualityRules: [
      'تلميع الأسطح المعدنية والزجاجية مع الحفاظ على الخطوط والانعكاسات الإرشادية الأصلية',
      'إبراز وضوح ونقاء الشعار والنصوص المطبوعة على المنتج',
      'عدم تشويه حواف المنتج الهندسية'
    ],
    keywords: ['product cleanup', 'تنظيف صورة منتج', 'ازالة الغبار والخدوش', 'product retouching', 'packshot cleanup'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 120,
    isFavorite: false
  },
  {
    id: 'des-edit-088',
    code: '/add object',
    titleAr: 'إضافة عنصر جديد للصورة بواقعية (Generative Inpainting)',
    titleEn: 'Contextual Object Insertion & Seamless Inpainting',
    descriptionAr: 'يضيف عنصرًا جديدًا (نبات، حقيبة، ساعة، إضاءة) إلى صورة موجودة مع مطابقة الظلال والمنظور التام.',
    descriptionEn: 'Insert new contextual elements into existing photos with accurate perspective scaling, lighting, and shadow casting.',
    group: 'design',
    designCategory: 'editing',
    outputType: 'image',
    outputBadges: ['تعديل صورة'],
    params: [
      { key: 'object_and_position', flag: 'object_and_position', isPositional: true, type: 'string', required: true, labelAr: 'العنصر ومكان إضافته في المشهد', labelEn: 'Object & Insertion Location', hintAr: 'مثال: إضافة نبتة مونستيرا خضراء أنيقة في زاوية الغرفة بجانب النافذة', hintEn: 'e.g. Add tall potted monstera plant in sunlit room corner beside window' },
      { key: 'style_match', flag: 'style_match', isPositional: false, type: 'string', required: false, defaultValue: 'seamless-lighting-match', labelAr: 'مطابقة الإضاءة', labelEn: 'Lighting Harmony', hintAr: 'seamless-lighting-match, depth-aware-shadow, photorealistic', hintEn: 'seamless-lighting-match' }
    ],
    example: '/add object "إضافة نبتة مونستيرا خضراء أنيقة في زاوية الغرفة بجانب النافذة" --style_match=seamless-lighting-match',
    qualityRules: [
      'إسقاط ظلال واقعية على الأرضيات والجدران مطابقة لاتجاه الإضاءة في الغرفة',
      'تناسب حجم المقياس الهندسي للعنصر المضاف مع باقي أثاث وأشخاص المشهد',
      'تكامل في مستوى الحدة وحبيبات الصورة (Grain and sharpness matching)'
    ],
    keywords: ['add object', 'اضافة عنصر للصورة', 'تعديل انباينتنج', 'object inpainting', 'دمج عناصر'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 128,
    isFavorite: false
  },
  {
    id: 'des-edit-089',
    code: '/remove object',
    titleAr: 'حذف وإخفاء عنصر أو شخص غير مرغوب (Object Eraser)',
    titleEn: 'Smart Object & Distraction Removal Inpainting',
    descriptionAr: 'يزيل أشخاصًا عابرين، أعمدة إنارة، قمامة، أو عناصر مشتتة ويعيد بناء الخلفية بذكاء تام دون أثر.',
    descriptionEn: 'Erase unwanted people, wires, litter, or blemishes and reconstruct natural background textures seamlessly.',
    group: 'design',
    designCategory: 'editing',
    outputType: 'image',
    outputBadges: ['تعديل صورة'],
    params: [
      { key: 'object_to_remove', flag: 'object_to_remove', isPositional: true, type: 'string', required: true, labelAr: 'العنصر أو الشخص المراد حذفه', labelEn: 'Object / Element to Erase', hintAr: 'مثال: حذف المارة في خلفية صورة الشاطئ الهادئ', hintEn: 'e.g. Remove background pedestrians and trash bins from beach landscape' },
      { key: 'reconstruct_bg', flag: 'reconstruct_bg', isPositional: false, type: 'string', required: false, defaultValue: 'seamless-texture-fill', labelAr: 'إعادة ملء الخلفية', labelEn: 'Background Infill', hintAr: 'seamless-texture-fill, ocean-waves-match, clean-sand', hintEn: 'seamless-texture-fill' }
    ],
    example: '/remove object "حذف المارة في خلفية صورة الشاطئ الهادئ" --reconstruct_bg=seamless-texture-fill',
    qualityRules: [
      'إخفاء تام لأي أثر للتعديل أو التكرار النمطي في الخامات (No cloning artifacts)',
      'استمرارية الخطوط المستقيمة (أمواج البحر، خطوط البلاط، الأفق) دون انكسار',
      'محاذاة الظلال والإضاءة في المساحة التي تم ترميمها'
    ],
    keywords: ['remove object', 'حذف عنصر من الصورة', 'مسح اشخاص', 'object removal', 'clean inpainting'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 135,
    isFavorite: false
  },
  {
    id: 'des-edit-090',
    code: '/text overlay',
    titleAr: 'إدراج ودمج النصوص والتايبوجرافي (Text Overlay Visual)',
    titleEn: 'Harmonious Typography & 3D Text Overlay',
    descriptionAr: 'ينشئ تكوينًا بصريًا يدمج النصوص العربية أو الإنجليزية ثلاثية الأبعاد خلف أو أمام عناصر الصورة بتناغم تام.',
    descriptionEn: 'Compose integrated 3D typography interwoven behind and around foreground subjects with cinematic depth.',
    group: 'design',
    designCategory: 'editing',
    outputType: 'image',
    outputBadges: ['تصميم إعلاني', 'تعديل صورة'],
    params: [
      { key: 'text_and_subject', flag: 'text_and_subject', isPositional: true, type: 'string', required: true, labelAr: 'النص والعنصر المدمج معه', labelEn: 'Headline Text & Subject', hintAr: 'مثال: كتابة كلمة "إلهام" بحروف ثلاثية الأبعاد خلف صورة رائد الأعمال', hintEn: 'e.g. Arabic word "إلهام" in bold 3D metallic typography woven behind entrepreneur portrait' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: '3d-integrated-depth', labelAr: 'أسلوب النص', labelEn: 'Typography Style', hintAr: '3d-integrated-depth, bold-editorial-cutout, neon-glowing-letters', hintEn: '3d-integrated-depth' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'cast-shadows-on-text', labelAr: 'تفاعل الإضاءة والظلال', labelEn: 'Lighting Interaction', hintAr: 'cast-shadows-on-text, soft-backlight, ambient-reflection', hintEn: 'cast-shadows-on-text' }
    ],
    example: '/text overlay "كتابة كلمة إلهام بحروف ثلاثية الأبعاد خلف صورة رائد الأعمال" --style=3d-integrated-depth --lighting=cast-shadows-on-text',
    qualityRules: [
      'طبقات عمق واضحة: يمر النص خلف رأس الشخص أو أمامه بتراكب طبيعي (Layer depth overlay)',
      'إسقاط ظلال خفيفة من الشخصية على الحروف لإبراز الوجود المكاني المشترك',
      'وضوح تام في قراءة الكلمات والحرص على جمالية الخط العربي'
    ],
    keywords: ['text overlay', 'دمج نصوص مع الصور', 'تايبوجرافي 3d', 'typography overlay', 'كتابة على الصور'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 124,
    isFavorite: false
  }
];
