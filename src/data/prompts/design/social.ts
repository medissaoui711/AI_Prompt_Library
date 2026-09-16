import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const DESIGN_SOCIAL_PROMPTS: CommandPrompt[] = [
  {
    id: 'des-soc-041',
    code: '/instagram post visual',
    titleAr: 'تصميم منشور إنستغرام مربع أو طولي (Instagram Post)',
    titleEn: 'Engaging Instagram Feed Post Visual',
    descriptionAr: 'ينشئ خلفية وتكوينًا بصريًا جذابًا لمنشورات الإنستغرام بمساحة مخصصة للعنوان والرسالة الأساسية.',
    descriptionEn: 'Generate striking Instagram feed visuals with balanced negative space for headlines, tailored in 1:1 or 4:5.',
    group: 'design',
    designCategory: 'social',
    outputType: 'image',
    outputBadges: ['تصميم إعلاني'],
    params: [
      { key: 'topic', flag: 'topic', isPositional: true, type: 'string', required: true, labelAr: 'موضوع المنشور', labelEn: 'Post Topic', hintAr: 'مثال: نصائح لإدارة الوقت والإنتاجية', hintEn: 'e.g. 5 Time management & deep work productivity tips' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'modern-minimalist', labelAr: 'الأسلوب الفني', labelEn: 'Visual Style', hintAr: 'modern-minimalist, 3d-illustration, bold-editorial', hintEn: 'modern-minimalist' },
      { key: 'colors', flag: 'colors', isPositional: false, type: 'string', required: false, defaultValue: 'pastel-warm', labelAr: 'الألوان', labelEn: 'Color Mood', hintAr: 'pastel-warm, neon-dark, clean-earthy', hintEn: 'pastel-warm' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'square', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'square (1:1), portrait (4:5)', hintEn: 'square' }
    ],
    example: '/instagram post visual "نصائح لإدارة الوقت والإنتاجية" --style=modern-minimalist --colors=pastel-warm --format=square',
    qualityRules: [
      'توفير منطقة تركيز واضحة لا تزعج العين عند إضافة النصوص العربية التوضيحية',
      'تناغم الألوان والظلال لمنع التشتت وجذب التمرير السريع (Thumb-stopping visual)',
      'الحفاظ على هوية بصرية مريحة تتناسب مع خلاصة الحساب المتناسقة'
    ],
    keywords: ['instagram post visual', 'بوست انستقرام', 'تصميم انستجرام', 'instagram feed design', 'منشور سوشيال ميديا'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 145,
    isFavorite: true
  },
  {
    id: 'des-soc-042',
    code: '/instagram story visual',
    titleAr: 'تصميم ستوري إنستغرام وسناب شات (Story Visual)',
    titleEn: 'Vertical Story Visual (9:16)',
    descriptionAr: 'ينشئ تصميمًا عموديًا (9:16) غنيًا بالحيوية والتأثير البصري المخصص للقصص القصيرة مع احترام مناطق الأمان.',
    descriptionEn: 'Produce immersive 9:16 vertical story backdrops with safe zones for headers, stickers, and interactive polls.',
    group: 'design',
    designCategory: 'social',
    outputType: 'image',
    outputBadges: ['تصميم إعلاني'],
    params: [
      { key: 'story_topic', flag: 'story_topic', isPositional: true, type: 'string', required: true, labelAr: 'موضوع الستوري', labelEn: 'Story Topic', hintAr: 'مثال: إعلان مسابقة تفاعلية وجوائز', hintEn: 'e.g. Interactive flash quiz contest with prizes' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'vibrant-dynamic', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'vibrant-dynamic, luxury-editorial, tech-glow', hintEn: 'vibrant-dynamic' },
      { key: 'safe_zones', flag: 'safe_zones', isPositional: false, type: 'string', required: false, defaultValue: 'top-and-bottom-clear', labelAr: 'مناطق الأمان', labelEn: 'Safe Zones', hintAr: 'top-and-bottom-clear (for username and reply box)', hintEn: 'top-and-bottom-clear' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'vertical-9:16', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'vertical-9:16 (1080x1920)', hintEn: 'vertical-9:16' }
    ],
    example: '/instagram story visual "إعلان مسابقة تفاعلية وجوائز" --style=vibrant-dynamic --safe_zones=top-and-bottom-clear --format=vertical-9:16',
    qualityRules: [
      'ترك أعلى 15% وأسفل 20% خالية من العناصر الحيوية لتفادي أزرار التطبيق وشريط الردود',
      'توجيه انتباه المستخدم فورًا إلى مركز الشاشة',
      'ألوان مشبعة وإضاءة لافتة تناسب طبيعة العرض السريع للشاشات العمودية'
    ],
    keywords: ['instagram story visual', 'ستوري انستقرام', 'سناب شات', 'story template', 'vertical 9:16'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 138,
    isFavorite: false
  },
  {
    id: 'des-soc-043',
    code: '/social carousel',
    titleAr: 'سلسلة شرائح متصلة لكاروسيل (Carousel Series)',
    titleEn: 'Seamless Social Carousel Slide Backgrounds',
    descriptionAr: 'ينشئ خلفيات شرائح مترابطة بانسيابية عبر الصفحات (Seamless Carousel) للشروحات والمنشورات التعليمية.',
    descriptionEn: 'Design interconnected carousel slides with flowing continuous graphical elements across multiple cards.',
    group: 'design',
    designCategory: 'social',
    outputType: 'image',
    outputBadges: ['تصميم إعلاني'],
    params: [
      { key: 'carousel_topic', flag: 'carousel_topic', isPositional: true, type: 'string', required: true, labelAr: 'موضوع الكاروسيل', labelEn: 'Carousel Subject', hintAr: 'مثال: خطوات إطلاق متجر إلكتروني ناجح', hintEn: 'e.g. 5 steps to launch a successful e-commerce store' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'modern-clean', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'modern-clean, infographic-flow, dark-mode-tech', hintEn: 'modern-clean' },
      { key: 'elements', flag: 'elements', isPositional: false, type: 'string', required: false, defaultValue: 'flowing-lines,numbered-cards', labelAr: 'العناصر الرابطة', labelEn: 'Connecting Elements', hintAr: 'flowing-lines,numbered-cards,arrows', hintEn: 'flowing-lines' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'portrait-4:5', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'portrait-4:5 (1080x1350), square (1:1)', hintEn: 'portrait-4:5' }
    ],
    example: '/social carousel "خطوات إطلاق متجر إلكتروني ناجح" --style=modern-clean --elements=flowing-lines,numbered-cards --format=portrait-4:5',
    qualityRules: [
      'استمرارية الخطوط والرسوم على الحواف الجانبية لربط الشرائح عند التمرير',
      'توزيع متناسق للأرقام والعناوين الفرعية والمساحات التحريرية',
      'توحيد لوحة الألوان والخطوط عبر كامل السلسلة'
    ],
    keywords: ['social carousel', 'كاروسيل انستقرام', 'شرائح تعليمية', 'carousel post', 'انستغرام متعدد الصور'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 130,
    isFavorite: false
  },
  {
    id: 'des-soc-044',
    code: '/social quote',
    titleAr: 'خلفية اقتباسات ورسائل ملهمة (Social Quote)',
    titleEn: 'Inspirational Social Quote Background',
    descriptionAr: 'ينشئ خلفية فنية هادئة وراقية مخصصة للاقتباسات، الأقوال المأثورة، والأبيات الشعرية مع راحة بصرية عالية للقراءة.',
    descriptionEn: 'Generate serene, textured quote backdrops with gentle lighting and perfect contrast for typography.',
    group: 'design',
    designCategory: 'social',
    outputType: 'image',
    outputBadges: ['تصميم إعلاني'],
    params: [
      { key: 'theme', flag: 'theme', isPositional: true, type: 'string', required: true, labelAr: 'طابع وموضوع الاقتباس', labelEn: 'Quote Theme', hintAr: 'مثال: اقتباس تحفيزي عن الإصرار والنجاح', hintEn: 'e.g. Motivational quote on perseverance and leadership' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'minimal-textured', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'minimal-textured, soft-organic-nature, dark-monochrome', hintEn: 'minimal-textured' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'soft-warm', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'soft-warm, ambient-mist, gentle-sunbeam', hintEn: 'soft-warm' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'square', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'square, vertical-4:5', hintEn: 'square' }
    ],
    example: '/social quote "اقتباس تحفيزي عن الإصرار والنجاح" --style=minimal-textured --lighting=soft-warm --format=square',
    qualityRules: [
      'توفير مركز هادئ ومريح بدرجة تباين كافية لظهور النصوص بخطوط عربية جميلة',
      'تجنب العناصر المعقدة أو الحادة في موضع النص',
      'إضفاء لمسة جمالية خفيفة في الأطراف أو الخلفية كظلال أوراق أو ملمس ورق طبيعي'
    ],
    keywords: ['social quote', 'تصميم اقتباس', 'حكم واقوال', 'quote template', 'خلفية نصية'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 112,
    isFavorite: false
  },
  {
    id: 'des-soc-045',
    code: '/reel cover',
    titleAr: 'غلاف مقطع ريلز وتيك توك (Reel / TikTok Cover)',
    titleEn: 'High-Clickthrough Reel Cover Graphic',
    descriptionAr: 'ينشئ غلافًا جذابًا لمقاطع الفيديو القصيرة (Reels / TikTok) متناسقًا مع شبكة البروفايل المربعة وفي وضع ملء الشاشة.',
    descriptionEn: 'Produce eye-catching vertical video covers optimized to look great both in full 9:16 and within the 1:1 profile grid.',
    group: 'design',
    designCategory: 'social',
    outputType: 'image',
    outputBadges: ['تصميم إعلاني'],
    params: [
      { key: 'video_topic', flag: 'video_topic', isPositional: true, type: 'string', required: true, labelAr: 'موضوع الفيديو والخطاف', labelEn: 'Video Topic & Hook', hintAr: 'مثال: أسرار زيادة الإنتاجية في العمل', hintEn: 'e.g. 3 Secrets to double your daily work output' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'bold-creator', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'bold-creator, cinematic-portrait, tech-aesthetic', hintEn: 'bold-creator' },
      { key: 'center_focus', flag: 'center_focus', isPositional: false, type: 'string', required: false, defaultValue: 'grid-safe-1:1', labelAr: 'منطقة الأمان المربعة', labelEn: 'Grid Safe', hintAr: 'grid-safe-1:1 (centered content)', hintEn: 'grid-safe-1:1' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'vertical-9:16', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'vertical-9:16', hintEn: 'vertical-9:16' }
    ],
    example: '/reel cover "أسرار زيادة الإنتاجية في العمل" --style=bold-creator --center_focus=grid-safe-1:1 --format=vertical-9:16',
    qualityRules: [
      'تمركز العنصر والعنوان الرئيسي بدقة داخل المربع المركزي 1:1 لظهوره كاملاً في صفحة الحساب',
      'تعبيرات حيوية وإضاءة قوية تشجع على النقر والمشاهدة',
      'استخدام تباين عالي بين العنصر الأساسي والخلفية'
    ],
    keywords: ['reel cover', 'غلاف ريلز', 'تيك توك', 'reels thumbnail', 'cover photo'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 125,
    isFavorite: false
  },
  {
    id: 'des-soc-046',
    code: '/youtube thumbnail',
    titleAr: 'صورة مصغرة لليوتيوب (YouTube Thumbnail)',
    titleEn: 'High-CTR YouTube Thumbnail Visual',
    descriptionAr: 'ينشئ صورة مصغرة جذابة لليوتيوب بنسبة نقر عالية (High CTR) مع عناصر بارزة وتباين لوني قوي.',
    descriptionEn: 'Generate high-conversion 16:9 YouTube thumbnails featuring dynamic facial reactions, bold focal points, and glow effects.',
    group: 'design',
    designCategory: 'social',
    outputType: 'image',
    outputBadges: ['تصميم إعلاني'],
    params: [
      { key: 'video_title', flag: 'video_title', isPositional: true, type: 'string', required: true, labelAr: 'عنوان وفكرة مقطع اليوتيوب', labelEn: 'Video Title & Hook', hintAr: 'مثال: كيف تبني تطبيقك الأول بدون برمجة؟', hintEn: 'e.g. Build your first no-code SaaS in 24 hours' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'high-contrast-creator', labelAr: 'الأسلوب الإخراجي', labelEn: 'Thumbnail Style', hintAr: 'high-contrast-creator, tech-explainer, dramatic-storytelling', hintEn: 'high-contrast-creator' },
      { key: 'subject_action', flag: 'subject_action', isPositional: false, type: 'string', required: false, defaultValue: 'excited-person-with-laptop', labelAr: 'الشخص والحركة', labelEn: 'Subject Action', hintAr: 'excited-person-with-laptop, shocked-face, pointing-to-graphic', hintEn: 'excited-person-with-laptop' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape-16:9', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape-16:9 (1280x720 / 1920x1080)', hintEn: 'landscape-16:9' }
    ],
    example: '/youtube thumbnail "كيف تبني تطبيقك الأول بدون برمجة؟" --style=high-contrast-creator --subject_action=excited-person-with-laptop --format=landscape-16:9',
    qualityRules: [
      'تجنب وضع تفاصيل هامة في الزاوية السفلية اليمنى المخصصة لعداد وقت الفيديو في يوتيوب',
      'حجم عناصر كبير وواضح يسهل التعرف عليه فورًا على شاشات الجوال المصغرة',
      'ألوان ساطعة وحدود مضيئة (Rim light glow) تعزل الشخصية عن الخلفية'
    ],
    keywords: ['youtube thumbnail', 'صورة مصغرة يوتيوب', 'ثمنيل يوتيوب', 'youtube cover', 'high ctr thumbnail'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 150,
    isFavorite: true
  },
  {
    id: 'des-soc-047',
    code: '/linkedin visual',
    titleAr: 'تصميم احترافي لمنصة لينكدإن (LinkedIn Visual)',
    titleEn: 'Thought Leadership LinkedIn Post Visual',
    descriptionAr: 'ينشئ تصميمًا احترافيًا رصينًا لمنشورات LinkedIn يستعرض إحصائيات، أفكار قيادية، أو تحليلات أعمال.',
    descriptionEn: 'Produce authoritative corporate visuals and data cards customized for LinkedIn professional audiences.',
    group: 'design',
    designCategory: 'social',
    outputType: 'image',
    outputBadges: ['تصميم إعلاني'],
    params: [
      { key: 'topic', flag: 'topic', isPositional: true, type: 'string', required: true, labelAr: 'موضوع المنشور المهني', labelEn: 'Professional Topic', hintAr: 'مثال: تقرير نمو الذكاء الاصطناعي في قطاع الأعمال', hintEn: 'e.g. Enterprise AI adoption growth statistics and trends' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'corporate-editorial', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'corporate-editorial, fintech-data, modern-insight', hintEn: 'corporate-editorial' },
      { key: 'colors', flag: 'colors', isPositional: false, type: 'string', required: false, defaultValue: 'deep-blue,slate', labelAr: 'الألوان', labelEn: 'Palette', hintAr: 'deep-blue,slate / navy,emerald / charcoal,cyan', hintEn: 'deep-blue,slate' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape-1.91:1', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape-1.91:1 (1200x628), square (1:1)', hintEn: 'landscape-1.91:1' }
    ],
    example: '/linkedin visual "تقرير نمو الذكاء الاصطناعي في قطاع الأعمال" --style=corporate-editorial --colors=deep-blue,slate --format=landscape-1.91:1',
    qualityRules: [
      'طابع بصري موثوق ومحترف يعزز مصداقية المحتوى وقيمته المعرفية',
      'تدرجات لونية هادئة مستوحاة من بيئات الأعمال الحديثة',
      'خطوط واضحة وتصميم شبكي منظم (Clean grid layout)'
    ],
    keywords: ['linkedin visual', 'بوست لينكد ان', 'تصميم اعمال احترافي', 'linkedin graphic', 'corporate post'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 122,
    isFavorite: false
  },
  {
    id: 'des-soc-048',
    code: '/tiktok cover',
    titleAr: 'غلاف وقالب لتيك توك (TikTok Cover Visual)',
    titleEn: 'Vibrant TikTok Thumbnail & Cover Graphic',
    descriptionAr: 'ينشئ غلافًا بتصميم سريع الإيقاع ومليء بالطاقة لجذب جيل الشباب على منصة TikTok.',
    descriptionEn: 'Generate vibrant, high-energy vertical cover graphics tailored for TikTok audience trends and culture.',
    group: 'design',
    designCategory: 'social',
    outputType: 'image',
    outputBadges: ['تصميم إعلاني'],
    params: [
      { key: 'topic', flag: 'topic', isPositional: true, type: 'string', required: true, labelAr: 'موضوع الفيديو', labelEn: 'Video Topic', hintAr: 'مثال: تحدي تقني سريع في 60 ثانية', hintEn: 'e.g. 60-second rapid tech challenge' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'neon-pop', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'neon-pop, viral-bold, playful-3d', hintEn: 'neon-pop' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'vertical-9:16', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'vertical-9:16', hintEn: 'vertical-9:16' }
    ],
    example: '/tiktok cover "تحدي تقني سريع في 60 ثانية" --style=neon-pop --format=vertical-9:16',
    qualityRules: [
      'ألوان مشبعة وجريئة تجعل المشاهد يتوقف عن التمرير فوريًا',
      'تمركز العنصر المحوري لتفادي أزرار المشاركة والإعجاب على الجانب الأيمن',
      'عناصر ثلاثية الأبعاد بارزة توحي بالحركة السريعة'
    ],
    keywords: ['tiktok cover', 'غلاف تيك توك', 'تيكتوك', 'tiktok thumbnail', 'viral cover'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 110,
    isFavorite: false
  },
  {
    id: 'des-soc-049',
    code: '/social campaign visual',
    titleAr: 'المشهد البصري الرئيسي للحملة (Campaign Key Visual)',
    titleEn: 'Master Campaign Key Visual (KV)',
    descriptionAr: 'ينشئ الصورة والمشهد الأساسي الموحد لحملة تسويقية كبرى والقابل للتكييف عبر كافة المنصات والمقاسات.',
    descriptionEn: 'Design versatile master Key Visuals capable of adapting seamlessly across banners, billboards, and social channels.',
    group: 'design',
    designCategory: 'social',
    outputType: 'image',
    outputBadges: ['تصميم إعلاني'],
    params: [
      { key: 'campaign_idea', flag: 'campaign_idea', isPositional: true, type: 'string', required: true, labelAr: 'فكرة وشعار الحملة', labelEn: 'Campaign Theme & Slogan', hintAr: 'مثال: حملة صيفية لتطبيق توصيل مع ألوان منعشة', hintEn: 'e.g. Refreshing summer delivery app campaign with tropical vibes' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: '3d-commercial', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: '3d-commercial, cinematic-lifestyle, vibrant-illustration', hintEn: '3d-commercial' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس الأساسي', labelEn: 'Format', hintAr: 'landscape (16:9), square (1:1), vertical', hintEn: 'landscape' }
    ],
    example: '/social campaign visual "حملة صيفية لتطبيق توصيل مع ألوان منعشة" --style=3d-commercial --format=landscape',
    qualityRules: [
      'تكوين مرن يسمح باقتطاع المشهد إلى أحجام مربعة أو عمودية أو أفقية دون فقدان العنصر البطل',
      'إضاءة تجارية نقية وألوان مبهجة تعكس روح الحملة التسويقية',
      'تكامل بين العناصر البشرية والمنتج والرموز التعبيرية في قصة بصرية واحدة'
    ],
    keywords: ['social campaign visual', 'حملة تسويقية', 'كي فيجوال', 'key visual', 'campaign design'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 115,
    isFavorite: false
  },
  {
    id: 'des-soc-050',
    code: '/profile banner',
    titleAr: 'غلاف وبانر الحسابات (Profile Banner / Header)',
    titleEn: 'Social Media Header & Profile Banner',
    descriptionAr: 'ينشئ بانر عريض لغلاف الحساب على X (Twitter) أو LinkedIn أو YouTube بأبعاد دقيقة ومساحة آمنة لصورة البروفايل.',
    descriptionEn: 'Produce panoramic header banners for Twitter, LinkedIn, and YouTube with safe margins for profile avatars.',
    group: 'design',
    designCategory: 'social',
    outputType: 'image',
    outputBadges: ['تصميم إعلاني'],
    params: [
      { key: 'identity', flag: 'identity', isPositional: true, type: 'string', required: true, labelAr: 'هوية الحساب ومجال التخصص', labelEn: 'Profile Identity & Field', hintAr: 'مثال: مهندس برمجيات وكاتب تقني', hintEn: 'e.g. Software architect & tech educator banner' },
      { key: 'platform', flag: 'platform', isPositional: false, type: 'string', required: false, defaultValue: 'linkedin', labelAr: 'المنصة', labelEn: 'Platform', hintAr: 'linkedin (4:1), twitter (3:1), youtube (16:9)', hintEn: 'linkedin' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'minimal-tech', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'minimal-tech, abstract-geometry, modern-typography', hintEn: 'minimal-tech' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'panoramic-banner', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'panoramic-banner (3:1 or 4:1)', hintEn: 'panoramic-banner' }
    ],
    example: '/profile banner "مهندس برمجيات وكاتب تقني" --platform=linkedin --style=minimal-tech --format=panoramic-banner',
    qualityRules: [
      'ترك الجانب الأيسر السفلي خاليًا من المعلومات الهامة لعدم حجبها بصورة الملف الشخصي',
      'توزيع المحتوى في الثلثين الأيمن والأوسط بتناغم بصري مدروس',
      'استخدام تدرجات وخامات تقنية نظيفة تعكس الاحترافية'
    ],
    keywords: ['profile banner', 'بانر لينكد ان', 'غلاف تويتر', 'header banner', 'social media banner'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 128,
    isFavorite: false
  }
];
