import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const DESIGN_PUBLISHING_PROMPTS: CommandPrompt[] = [
  {
    id: 'des-pub-101',
    code: '/book cover',
    titleAr: 'غلاف كتاب ورقي مطبوع فاخر (Physical Book Cover)',
    titleEn: 'Hardcover & Paperback Bestseller Book Cover',
    descriptionAr: 'ينشئ غلافًا أدبيًا أو فكريًا فاخرًا لكتاب مطبوع يشمل الغلاف الأمامي والخلفي والكعب مع تناغم بصري راقٍ.',
    descriptionEn: 'Design bestseller hardcover book dust jackets with title typography zones, spine artwork, and back blurb areas.',
    group: 'design',
    designCategory: 'publishing',
    outputType: 'image',
    outputBadges: ['تصميم إعلاني', 'مطبوعات'],
    params: [
      { key: 'book_title_and_theme', flag: 'book_title_and_theme', isPositional: true, type: 'string', required: true, labelAr: 'عنوان وموضوع الكتاب', labelEn: 'Book Title & Theme', hintAr: 'مثال: كتاب فلسفي عن السكون في زمن الضجيج', hintEn: 'e.g. Philosophical book on finding deep silence in a noisy world' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'minimalist-bestseller', labelAr: 'الأسلوب الفني للغلاف', labelEn: 'Cover Style', hintAr: 'minimalist-bestseller, dark-gothic-thriller, vintage-classic-emboss, modern-abstract', hintEn: 'minimalist-bestseller' },
      { key: 'mood', flag: 'mood', isPositional: false, type: 'string', required: false, defaultValue: 'thoughtful-serene', labelAr: 'الجو العام', labelEn: 'Mood', hintAr: 'thoughtful-serene, intense-dramatic, vibrant-inspiring', hintEn: 'thoughtful-serene' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'vertical-book-ratio', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'vertical-book-ratio (6x9 in / 1:1.5), jacket-spread', hintEn: 'vertical-book-ratio' }
    ],
    example: '/book cover "كتاب فلسفي عن السكون في زمن الضجيج" --style=minimalist-bestseller --mood=thoughtful-serene --format=vertical-book-ratio',
    qualityRules: [
      'رمزية بصرية ذكية (Visual metaphor) تعبر عن جوهر المحتوى بعيداً عن الصور النمطية المباشرة',
      'تخصيص الثلث العلوي أو الأوسط لعنوان الكتاب واسم المؤلف بخطوط مريحة وفخمة',
      'تناسق الألوان وخامات الورق الملموسة مثل الورق الكتاني أو اللمسات المذهبة (Gold foil embossing)'
    ],
    keywords: ['book cover', 'غلاف كتاب', 'تصميم غلاف', 'كتاب ورقي', 'book cover design'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 142,
    isFavorite: true
  },
  {
    id: 'des-pub-102',
    code: '/ebook cover',
    titleAr: 'غلاف كتاب إلكتروني كيندل (Kindle / E-Book Cover)',
    titleEn: 'Digital E-Book & Kindle Cover Visual',
    descriptionAr: 'ينشئ غلافًا مصممًا خصيصًا للقراءة الرقمية وشاشات Kindle يبرز بوضوح تام حتى في الحجم المصغر (Thumbnail).',
    descriptionEn: 'Produce high-converting Kindle e-book covers optimized for ultra-high contrast and thumbnail visibility.',
    group: 'design',
    designCategory: 'publishing',
    outputType: 'image',
    outputBadges: ['تصميم إعلاني', 'مطبوعات'],
    params: [
      { key: 'ebook_topic', flag: 'ebook_topic', isPositional: true, type: 'string', required: true, labelAr: 'عنوان وفكرة الكتاب الرقمي', labelEn: 'E-Book Title & Topic', hintAr: 'مثال: دليل بناء الثروة من الإنترنت في 2026', hintEn: 'e.g. Masterclass guide to building wealth online in 2026' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'bold-high-contrast', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'bold-high-contrast, tech-business-clean, illustrated-guide', hintEn: 'bold-high-contrast' },
      { key: 'colors', flag: 'colors', isPositional: false, type: 'string', required: false, defaultValue: 'deep-navy-and-gold', labelAr: 'الألوان', labelEn: 'Palette', hintAr: 'deep-navy-and-gold, emerald-and-white, vibrant-orange-black', hintEn: 'deep-navy-and-gold' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'kindle-1:1.6', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'kindle-1:1.6 (1600x2560), standard-ebook', hintEn: 'kindle-1:1.6' }
    ],
    example: '/ebook cover "دليل بناء الثروة من الإنترنت في 2026" --style=bold-high-contrast --colors=deep-navy-and-gold --format=kindle-1:1.6',
    qualityRules: [
      'مقروئية فائقة للعنوان الرئيسي واسم الكاتب عند تصغير الغلاف إلى مقاس 100 بكسل على منصات البيع',
      'تباين قوي بين العناصر والرموز الرئيسية والخلفية',
      'تصميم يوحي بالموثوقية والقيمة المعرفية العالية'
    ],
    keywords: ['ebook cover', 'غلاف كتاب الكتروني', 'كيندل', 'kindle cover', 'كتاب رقمي'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 130,
    isFavorite: false
  },
  {
    id: 'des-pub-103',
    code: '/magazine cover',
    titleAr: 'غلاف مجلة تحريرية عالمية (Editorial Magazine Cover)',
    titleEn: 'Editorial Glossy Magazine Cover',
    descriptionAr: 'ينشئ غلاف مجلة أزياء، اقتصاد، أو تقنية على غرار المجلات العالمية مع شعار المجلة وعناوين المقالات الرئيسية.',
    descriptionEn: 'Generate prestigious fashion, tech, or business magazine covers with masterhead mastheads and teaser callouts.',
    group: 'design',
    designCategory: 'publishing',
    outputType: 'image',
    outputBadges: ['تصميم إعلاني', 'مطبوعات'],
    params: [
      { key: 'issue_theme', flag: 'issue_theme', isPositional: true, type: 'string', required: true, labelAr: 'موضوع العدد والشخصية الرئيسية', labelEn: 'Issue Theme & Cover Star', hintAr: 'مثال: عدد خاص عن قادة الابتكار والذكاء الاصطناعي', hintEn: 'e.g. Special issue on visionary AI leaders and future tech creators' },
      { key: 'magazine_type', flag: 'magazine_type', isPositional: false, type: 'string', required: false, defaultValue: 'business-tech', labelAr: 'نوع المجلة', labelEn: 'Magazine Genre', hintAr: 'business-tech (Forbes style), high-fashion (Vogue style), architecture-design', hintEn: 'business-tech' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'editorial-studio-lighting', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'editorial-studio-lighting, dramatic-key-light, cinematic', hintEn: 'editorial-studio-lighting' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'magazine-A4', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'magazine-A4 (8.5x11 in / 1:1.33)', hintEn: 'magazine-A4' }
    ],
    example: '/magazine cover "عدد خاص عن قادة الابتكار والذكاء الاصطناعي" --magazine_type=business-tech --lighting=editorial-studio-lighting --format=magazine-A4',
    qualityRules: [
      'تفاعل بصري ثلاثي الأبعاد بين صورة الشخصية وشعار ترويسة المجلة (Masthead layering)',
      'توزيع محاذاة العناوين الفرعية والمقالات الجانبية وفق أعمدة شبكية متقنة',
      'لمسة إخراجية فوتوغرافية رفيعة المستوى تعكس جودة المجلات الورقية اللامعة'
    ],
    keywords: ['magazine cover', 'غلاف مجلة', 'مجلة فوربس', 'مجلة ازياء', 'magazine editorial'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 125,
    isFavorite: false
  },
  {
    id: 'des-pub-104',
    code: '/podcast cover',
    titleAr: 'غلاف بودكاست صوتي مربع (Podcast Cover Art)',
    titleEn: 'High-Impact Square Podcast Cover Artwork',
    descriptionAr: 'ينشئ غلافًا مربعًا (3000x3000px) جذابًا لمنصات Apple Podcasts وSpotify يبرز بوضوح ويجذب المستمعين.',
    descriptionEn: 'Produce 1:1 podcast artwork tailored for Apple Podcasts and Spotify with punchy typography and bold motifs.',
    group: 'design',
    designCategory: 'publishing',
    outputType: 'image',
    outputBadges: ['تصميم إعلاني', 'مطبوعات'],
    params: [
      { key: 'podcast_name_and_topic', flag: 'podcast_name_and_topic', isPositional: true, type: 'string', required: true, labelAr: 'اسم وفكرة البودكاست', labelEn: 'Podcast Title & Concept', hintAr: 'مثال: بودكاست "حديث التقنية" - حوارات مع رواد الأعمال', hintEn: 'e.g. Tech Dialogues podcast: in-depth conversations with visionary founders' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'bold-graphic-brand', labelAr: 'الأسلوب الفني', labelEn: 'Style', hintAr: 'bold-graphic-brand, 3d-microphone-render, illustrated-host, dark-neon-studio', hintEn: 'bold-graphic-brand' },
      { key: 'colors', flag: 'colors', isPositional: false, type: 'string', required: false, defaultValue: 'vibrant-contrast', labelAr: 'الألوان', labelEn: 'Colors', hintAr: 'vibrant-contrast, dark-slate-amber, electric-purple', hintEn: 'vibrant-contrast' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'square-1:1', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'square-1:1 (3000x3000)', hintEn: 'square-1:1' }
    ],
    example: '/podcast cover "بودكاست حديث التقنية - حوارات مع رواد الأعمال" --style=bold-graphic-brand --colors=vibrant-contrast --format=square-1:1',
    qualityRules: [
      'وضوح اسم البودكاست عند عرضه بحجم الأيقونة المصغرة على تطبيقات الجوال',
      'تجنب ازدحام التفاصيل أو وضع نصوص فرعية كثيرة غير مقروءة',
      'رمز بصري قوي أو عنصر أيقوني يميز البودكاست بين مئات البرامج الأخرى'
    ],
    keywords: ['podcast cover', 'غلاف بودكاست', 'سبوتيفاي', 'ابل بودكاست', 'podcast artwork'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 135,
    isFavorite: true
  },
  {
    id: 'des-pub-105',
    code: '/album cover',
    titleAr: 'غلاف ألبوم موسيقي فني (Album / Single Cover Art)',
    titleEn: 'Atmospheric Album & Single Cover Artwork',
    descriptionAr: 'ينشئ غلافًا فنيًا شاعريًا ومؤثرًا لألبوم موسيقي أو أغنية فردية يعبر عن الحالة الشعورية والنوع الموسيقي.',
    descriptionEn: 'Create conceptual music album cover artwork capturing musical genre aesthetics from lo-fi to cinematic ambient.',
    group: 'design',
    designCategory: 'publishing',
    outputType: 'image',
    outputBadges: ['تصميم إعلاني', 'رسم توضيحي'],
    params: [
      { key: 'album_mood', flag: 'album_mood', isPositional: true, type: 'string', required: true, labelAr: 'طابع الألبوم والنوع الموسيقي', labelEn: 'Album Mood & Genre', hintAr: 'مثال: ألبوم موسيقى عود معاصرة وأجواء ليلية هادئة', hintEn: 'e.g. Contemporary acoustic oud instrumental album with midnight atmospheric mood' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'cinematic-fine-art', labelAr: 'الأسلوب الفني', labelEn: 'Art Style', hintAr: 'cinematic-fine-art, vintage-vinyl-grain, abstract-surreal, lo-fi-nostalgia', hintEn: 'cinematic-fine-art' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'square-vinyl-1:1', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'square-vinyl-1:1', hintEn: 'square-vinyl-1:1' }
    ],
    example: '/album cover "ألبوم موسيقى عود معاصرة وأجواء ليلية هادئة" --style=cinematic-fine-art --format=square-vinyl-1:1',
    qualityRules: [
      'تجسيد المشاعر النغمية من خلال تناغم الألوان، الضباب، والظلال',
      'ملمس حبيبي خفيف (Film grain / Vinyl texture) يعطي عمقًا شاعريًا للألبوم',
      'تكوين مركزي أو جانبي يتيح وضع اسم الفنان والألبوم بأناقة'
    ],
    keywords: ['album cover', 'غلاف البوم', 'غلاف اغنية', 'album artwork', 'فينيل موسيقى'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 120,
    isFavorite: false
  },
  {
    id: 'des-pub-106',
    code: '/event ticket',
    titleAr: 'تذكرة فعاليات ومؤتمرات فاخرة (VIP Event Ticket)',
    titleEn: 'VIP Event Ticket & Access Pass Visual',
    descriptionAr: 'ينشئ تصميمًا راقيًا لتذكرة حضور حفل، مؤتمر، أو فعالية VIP مع جزء الكوبون القابل للقص ورمز QR.',
    descriptionEn: 'Produce luxury VIP event admission passes with tear-off stubs, holographic foil accents, and QR ticket zones.',
    group: 'design',
    designCategory: 'publishing',
    outputType: 'image',
    outputBadges: ['تصميم إعلاني', 'مطبوعات'],
    params: [
      { key: 'event_name', flag: 'event_name', isPositional: true, type: 'string', required: true, labelAr: 'اسم وطبيعة الفعالية', labelEn: 'Event Name & Theme', hintAr: 'مثال: تذكرة VIP لمؤتمر الذكاء الاصطناعي العالمي في الرياض', hintEn: 'e.g. VIP Pass for Global AI Technology Summit Riyadh' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'luxury-dark-gold', labelAr: 'أسلوب التصميم', labelEn: 'Style', hintAr: 'luxury-dark-gold, futuristic-cyber, clean-minimal-white', hintEn: 'luxury-dark-gold' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'ticket-horizontal', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'ticket-horizontal (3:1 / 2.5:1)', hintEn: 'ticket-horizontal' }
    ],
    example: '/event ticket "تذكرة VIP لمؤتمر الذكاء الاصطناعي العالمي في الرياض" --style=luxury-dark-gold --format=ticket-horizontal',
    qualityRules: [
      'تحديد واضح لخط التثقيب والقص (Perforated tear line) بين جسم التذكرة والكوبون الجانبي',
      'لمسات أمان هولوغرافية وطباعة ذهبية توحي بالخصوصية والفخامة',
      'مساحات منظمة لكتابة التاريخ، المقعد، والتوقيت ورمز الدخول'
    ],
    keywords: ['event ticket', 'تذكرة مؤتمر', 'تذكرة vip', 'ticket design', 'بطاقة دخول'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 114,
    isFavorite: false
  },
  {
    id: 'des-pub-107',
    code: '/certificate visual',
    titleAr: 'شهادة تقدير وإتمام دورة رسمية (Official Certificate)',
    titleEn: 'Official Certificate of Achievement & Diploma',
    descriptionAr: 'ينشئ قالب شهادة شكر وتقدير أو إتمام دورة باحترافية وأناقة، مع إطار كلاسيكي مزخرف وختم ذهبي رسمي.',
    descriptionEn: 'Generate official certificate templates with ornate guilloche borders, golden foil seal, and signature lines.',
    group: 'design',
    designCategory: 'publishing',
    outputType: 'image',
    outputBadges: ['تعليمي', 'مطبوعات'],
    params: [
      { key: 'certificate_title', flag: 'certificate_title', isPositional: true, type: 'string', required: true, labelAr: 'موضوع وعنوان الشهادة', labelEn: 'Certificate Title & Course', hintAr: 'مثال: شهادة إتمام دبلوم الأمن السيبراني المتقدم', hintEn: 'e.g. Executive Certificate of Achievement in Advanced Cybersecurity Leadership' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'royal-navy-and-gold', labelAr: 'الأسلوب والإطار', labelEn: 'Certificate Style', hintAr: 'royal-navy-and-gold, modern-minimalist-academic, classic-vintage-border', hintEn: 'royal-navy-and-gold' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape-A4', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape-A4 (1.41:1)', hintEn: 'landscape-A4' }
    ],
    example: '/certificate visual "شهادة إتمام دبلوم الأمن السيبراني المتقدم" --style=royal-navy-and-gold --format=landscape-A4',
    qualityRules: [
      'إطار زخرفي هندسي دقيق ومتوازن يحيط بالشهادة بأناقة ورسمية',
      'ختم ذهبي مجسم (Embossed golden seal) مع شريط أحمر أو كحلي في الركن السفلي',
      'خطوط توقيعات واضحة للمدير والجهة المانحة مع تناسق في المساحات التحريرية'
    ],
    keywords: ['certificate visual', 'شهادة شكر وتقدير', 'شهادة دورة', 'certificate template', 'شهادة رسمية'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 126,
    isFavorite: false
  },
  {
    id: 'des-pub-108',
    code: '/game card',
    titleAr: 'بطاقة ألعاب بطاقات تفاعلية (TCG / Board Game Card)',
    titleEn: 'Trading Card Game (TCG) & Fantasy Board Card',
    descriptionAr: 'ينشئ بطاقة لعب خيالية أو استراتيجية (TCG) تشمل إطارًا مزخرفًا، رسم البطل، نقاط الهجوم/الدفاع، وشريط القدرات.',
    descriptionEn: 'Produce collectible Trading Card Game (TCG) artwork with fantasy frame borders, stat badges, and holographic effects.',
    group: 'design',
    designCategory: 'publishing',
    outputType: 'image',
    outputBadges: ['رسم توضيحي', 'مطبوعات'],
    params: [
      { key: 'card_character', flag: 'card_character', isPositional: true, type: 'string', required: true, labelAr: 'شخصية البطاقة وقوتها', labelEn: 'Card Character & Ability', hintAr: 'مثال: تنين الصحراء الأسطوري مع درع ناري وقوة خارقة', hintEn: 'e.g. Mythical Desert Fire Dragon with solar flare attack power and obsidian frame' },
      { key: 'rarity', flag: 'rarity', isPositional: false, type: 'string', required: false, defaultValue: 'legendary-holographic', labelAr: 'مستوى الندرة والمؤثرات', labelEn: 'Rarity & Finish', hintAr: 'legendary-holographic, rare-gold-foil, standard-iron', hintEn: 'legendary-holographic' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'trading-card-ratio', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'trading-card-ratio (2.5x3.5 in / 1:1.4)', hintEn: 'trading-card-ratio' }
    ],
    example: '/game card "تنين الصحراء الأسطوري مع درع ناري وقوة خارقة" --rarity=legendary-holographic --format=trading-card-ratio',
    qualityRules: [
      'تكامل بين رسم الشخصية داخل النافذة المركزية والإطار الزخرفي المحيط بها',
      'أيقونات ومربعات أرقام واضحة لنقاط الهجوم، الدفاع، وتكلفة الطاقة',
      'لمسات هولوغرافية مشعة توحي بقوة وندرة البطاقة الاستراتيجية'
    ],
    keywords: ['game card', 'بطاقة العاب', 'كروت العاب', 'tcg card design', 'بطاقة شخصية'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 130,
    isFavorite: false
  }
];
