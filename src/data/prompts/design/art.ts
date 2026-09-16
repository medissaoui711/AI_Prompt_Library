import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const DESIGN_ART_PROMPTS: CommandPrompt[] = [
  {
    id: 'des-art-051',
    code: '/digital art',
    titleAr: 'فن رقمي تشكيلي معاصر (Digital Art)',
    titleEn: 'Contemporary Digital Painting & Art',
    descriptionAr: 'ينشئ لوحة فنية رقمية معبرة بتفاصيل دقيقة وإضاءة سريالية ولمسات فرشاة فنية إبداعية.',
    descriptionEn: 'Create expressive digital paintings with rich painterly textures, dynamic brushstrokes, and surreal atmospheres.',
    group: 'design',
    designCategory: 'art',
    outputType: 'image',
    outputBadges: ['رسم توضيحي'],
    params: [
      { key: 'art_concept', flag: 'art_concept', isPositional: true, type: 'string', required: true, labelAr: 'موضوع وفكرة اللوحة الفنية', labelEn: 'Artwork Concept', hintAr: 'مثال: فارس عربي يمتطي خيلاً في صحراء ضوئية سريالية', hintEn: 'e.g. Arabian knight on noble stallion in surreal luminous desert' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'oil-digital-hybrid', labelAr: 'الأسلوب الفني', labelEn: 'Style', hintAr: 'oil-digital-hybrid, surrealism, matte-painting, impressionist', hintEn: 'oil-digital-hybrid' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'ethereal-glow', labelAr: 'الإضاءة والجو العام', labelEn: 'Atmosphere & Light', hintAr: 'ethereal-glow, dramatic-chiaroscuro, bioluminescent', hintEn: 'ethereal-glow' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, portrait, wide', hintEn: 'landscape' }
    ],
    example: '/digital art "فارس عربي يمتطي خيلاً في صحراء ضوئية سريالية" --style=oil-digital-hybrid --lighting=ethereal-glow --format=landscape',
    qualityRules: [
      'تجسيد تفاصيل ضربات الفرشاة الرقمية والملمس الفني الأصيل',
      'تدرجات لونية غنية مع إبراز نقاط الضوء والظلال العميقة',
      'تكوين مشهدي ملحمي يترك أثرًا شعوريًا قويًا لدى المتلقي'
    ],
    keywords: ['digital art', 'فن رقمي', 'رسم تشكيلي', 'digital painting', 'لوحة فنية'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 125,
    isFavorite: false
  },
  {
    id: 'des-art-052',
    code: '/illustration',
    titleAr: 'رسم توضيحي فني مخصص (Editorial Illustration)',
    titleEn: 'Editorial & Storytelling Illustration',
    descriptionAr: 'ينشئ رسمًا توضيحيًا إبداعيًا للقصص، المقالات، والمجلات يجمع بين الفكرة العميقة والجمال البصري.',
    descriptionEn: 'Generate conceptual editorial illustrations capturing complex metaphors and narrative themes.',
    group: 'design',
    designCategory: 'art',
    outputType: 'image',
    outputBadges: ['رسم توضيحي'],
    params: [
      { key: 'narrative_concept', flag: 'narrative_concept', isPositional: true, type: 'string', required: true, labelAr: 'الفكرة والمفهوم القصصي', labelEn: 'Narrative Concept', hintAr: 'مثال: التوازن بين العمل والحياة في عصر التكنولوجيا', hintEn: 'e.g. Work-life balance harmony in the digital tech age' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'modern-editorial', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'modern-editorial, linocut, gouache-contemporary, risograph', hintEn: 'modern-editorial' },
      { key: 'colors', flag: 'colors', isPositional: false, type: 'string', required: false, defaultValue: 'earthy-palette', labelAr: 'لوحة الألوان', labelEn: 'Color Palette', hintAr: 'earthy-palette, duo-tone, vibrant-pastel', hintEn: 'earthy-palette' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'vertical', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'vertical, square, landscape', hintEn: 'vertical' }
    ],
    example: '/illustration "التوازن بين العمل والحياة في عصر التكنولوجيا" --style=modern-editorial --colors=earthy-palette --format=vertical',
    qualityRules: [
      'استخدام استعارات بصرية ذكية (Visual metaphors) تعبر عن الفكرة بسلاسة',
      'توازن الأشكال والكتل اللونية لتوجيه عين المشاهد',
      'أسلوب فني راقٍ يتلاءم مع أرقى المجلات والمنصات العالمية'
    ],
    keywords: ['illustration', 'رسم توضيحي', 'رسوم مقالات', 'editorial art', 'رسومات فنية'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 118,
    isFavorite: false
  },
  {
    id: 'des-art-053',
    code: '/flat illustration',
    titleAr: 'رسم توضيحي مسطح للواجهات (Flat Vector Illustration)',
    titleEn: 'Clean Flat Vector UI Illustration',
    descriptionAr: 'ينشئ رسومًا مسطحة عصرية وأنيقة تناسب صفحات الهبوط، التطبيقات، والكتيبات التعريفية للشركات.',
    descriptionEn: 'Produce modern flat vector graphics with clean lines, minimal shading, and tech-friendly aesthetics.',
    group: 'design',
    designCategory: 'art',
    outputType: 'image',
    outputBadges: ['رسم توضيحي'],
    params: [
      { key: 'scene', flag: 'scene', isPositional: true, type: 'string', required: true, labelAr: 'المشهد وعناصر الواجهة', labelEn: 'UI Scene & Topic', hintAr: 'مثال: فريق يحلل بيانات السحاب الرقمي', hintEn: 'e.g. Collaborative team analyzing cloud data analytics' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'flat-vector-minimal', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'flat-vector-minimal, line-art-with-color, tech-isometric', hintEn: 'flat-vector-minimal' },
      { key: 'colors', flag: 'colors', isPositional: false, type: 'string', required: false, defaultValue: 'brand-blue,indigo,coral', labelAr: 'الألوان', labelEn: 'Brand Colors', hintAr: 'brand-blue,indigo,coral / emerald,mint / monochrome-tint', hintEn: 'brand-blue,indigo,coral' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, square', hintEn: 'landscape' }
    ],
    example: '/flat illustration "فريق يحلل بيانات السحاب الرقمي" --style=flat-vector-minimal --colors=brand-blue,indigo,coral --format=landscape',
    qualityRules: [
      'هندسة متناسقة وزوايا ناعمة خالية من التعقيد الزائد',
      'تكامل بصري فوري مع تصاميم واجهات المستخدم الحديثة',
      'خلفية شفافة أو محايدة خفيفة لسهولة الدمج في المواقع'
    ],
    keywords: ['flat illustration', 'رسم مسطح', 'فيكتور ويب', 'ui illustration', 'vector graphic'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 135,
    isFavorite: true
  },
  {
    id: 'des-art-054',
    code: '/3d illustration',
    titleAr: 'رسم ثلاثي الأبعاد عصري للمواقع (3D UI Illustration)',
    titleEn: 'Trendy 3D Clay & Glass UI Illustration',
    descriptionAr: 'ينشئ عناصر ومشاهد ثلاثية الأبعاد لطيفة ذات خامات طينية أو زجاجية لامعة لصفحات الهبوط الحديثة.',
    descriptionEn: 'Design playful and tactile 3D illustrations with matte clay, frosted glass, and soft ambient occlusion shadows.',
    group: 'design',
    designCategory: 'art',
    outputType: 'image',
    outputBadges: ['رسم توضيحي'],
    params: [
      { key: 'scene_objects', flag: 'scene_objects', isPositional: true, type: 'string', required: true, labelAr: 'المجسمات والمشهد', labelEn: 'Objects & Scene', hintAr: 'مثال: صقر رقمي يحمل درع أمان سحابي ثلاثي الأبعاد', hintEn: 'e.g. Floating 3D cloud with golden security lock and data coins' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'clay-and-glass', labelAr: 'خامة الرندر', labelEn: 'Material & Style', hintAr: 'clay-and-glass, soft-plastic-gloss, isometric-3d', hintEn: 'clay-and-glass' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'studio-soft-pastel', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'studio-soft-pastel, neon-accents, daylight-warm', hintEn: 'studio-soft-pastel' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'square', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'square, landscape', hintEn: 'square' }
    ],
    example: '/3d illustration "صقر رقمي يحمل درع أمان سحابي ثلاثي الأبعاد" --style=clay-and-glass --lighting=studio-soft-pastel --format=square',
    qualityRules: [
      'توزيع ظلال ناعمة (Ambient Occlusion) ولمعان خفيف يعطي إحساساً بالملمس الحقيقي',
      'ألوان باستيل أو متدرجة عصرية متناسقة وجذابة بصرياً',
      'عزل العنصر على خلفية نظيفة لسهولة الاستخدام كعنصر رئيسي في الواجهات'
    ],
    keywords: ['3d illustration', 'رسم ثلاثي الابعاد', '3d icon scene', 'clay render', 'عناصر 3d للويب'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 140,
    isFavorite: true
  },
  {
    id: 'des-art-055',
    code: '/isometric scene',
    titleAr: 'مشهد آيزومتري متساوي القياس (Isometric 3D Scene)',
    titleEn: 'Isometric Diorama & Cross-Section Scene',
    descriptionAr: 'ينشئ مشهدًا بزاوية متساوية القياس (Isometric 30°) يعرض غرفة، مدينة مصغرة، أو بيئة عمل ثلاثية الأبعاد مفصلة.',
    descriptionEn: 'Generate intricate isometric dioramas and miniature architectural scenes with accurate 30-degree orthographic projection.',
    group: 'design',
    designCategory: 'art',
    outputType: 'image',
    outputBadges: ['رسم توضيحي'],
    params: [
      { key: 'diorama', flag: 'diorama', isPositional: true, type: 'string', required: true, labelAr: 'وصف البيئة والمجسم المصغر', labelEn: 'Isometric Diorama Theme', hintAr: 'مثال: مكتب برمجة ومقهى عصري داخل مكعب آيزومتري', hintEn: 'e.g. Modern developer workstation room cube with plants and coffee bar' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'low-poly-clean', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'low-poly-clean, detailed-3d-render, pixel-isometric', hintEn: 'low-poly-clean' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'warm-interior', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'warm-interior, neon-glow, sunlight', hintEn: 'warm-interior' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'square', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'square, landscape', hintEn: 'square' }
    ],
    example: '/isometric scene "مكتب برمجة ومقهى عصري داخل مكعب آيزومتري" --style=low-poly-clean --lighting=warm-interior --format=square',
    qualityRules: [
      'انضباط تام لزوايا المنظور الآيزومتري 30 درجة لجميع الخطوط المتوازية',
      'تفاصيل دقيقة ومبهجة في العناصر المصغرة (أثاث، نباتات، إضاءات خفية)',
      'توزيع ألوان متناسق يعطي عمقاً لكل زاوية من زوايا المكعب'
    ],
    keywords: ['isometric scene', 'مشهد ايزومتري', 'isometric 3d', 'غرفة مصغرة', 'ديوراما'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 122,
    isFavorite: false
  },
  {
    id: 'des-art-056',
    code: '/watercolor art',
    titleAr: 'رسم مائي بألوان مائية طبيعية (Watercolor Art)',
    titleEn: 'Fluid Watercolor & Aquarelle Painting',
    descriptionAr: 'ينشئ لوحة بألوان مائية شفافة مع تأثيرات انتشار الماء ونزف الألوان الرقيق على ملمس الورق القطني.',
    descriptionEn: 'Produce delicate watercolor aquarelle paintings with authentic pigment bleeds, edge fringing, and paper grain.',
    group: 'design',
    designCategory: 'art',
    outputType: 'image',
    outputBadges: ['رسم توضيحي'],
    params: [
      { key: 'subject', flag: 'subject', isPositional: true, type: 'string', required: true, labelAr: 'موضوع الرسمة المائية', labelEn: 'Watercolor Subject', hintAr: 'مثال: باقة زهور برية وبيت قديم في قرية جبلية', hintEn: 'e.g. Wildflower bouquet and rustic mountain stone cottage' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'wet-on-wet-fluid', labelAr: 'تقنية التلوين', labelEn: 'Technique', hintAr: 'wet-on-wet-fluid, dry-brush-botanical, loose-expressive', hintEn: 'wet-on-wet-fluid' },
      { key: 'paper', flag: 'paper', isPositional: false, type: 'string', required: false, defaultValue: 'cold-press-texture', labelAr: 'ملمس الورق', labelEn: 'Paper Grain', hintAr: 'cold-press-texture, rough-cotton, clean-white', hintEn: 'cold-press-texture' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, portrait, square', hintEn: 'landscape' }
    ],
    example: '/watercolor art "باقة زهور برية وبيت قديم في قرية جبلية" --style=wet-on-wet-fluid --paper=cold-press-texture --format=landscape',
    qualityRules: [
      'محاكاة شفافة لتدرجات الألوان المائية (Translucent layers and color washes)',
      'ظهور الملمس الحبيبي للورق المائي الطبيعي في المساحات الفاتحة',
      'لمسات فنية عفوية في أطراف الرسمة تعزز أصالة العمل اليدوي'
    ],
    keywords: ['watercolor art', 'الوان مائية', 'رسم مائي', 'aquarelle painting', 'water color botanical'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 106,
    isFavorite: false
  },
  {
    id: 'des-art-057',
    code: '/pixel art',
    titleAr: 'فن البكسل الكلاسيكي للألعاب (Retro Pixel Art)',
    titleEn: '16-Bit / 32-Bit Retro Pixel Art',
    descriptionAr: 'ينشئ رسوم بكسل ارت كلاسيكية مستوحاة من ألعاب الفيديو القديمة (16-bit / 32-bit) بشبكة نقطية متقنة.',
    descriptionEn: 'Generate authentic 16-bit/32-bit pixel art scenes, sprite art, and nostalgic game environments.',
    group: 'design',
    designCategory: 'art',
    outputType: 'image',
    outputBadges: ['رسم توضيحي'],
    params: [
      { key: 'game_scene', flag: 'game_scene', isPositional: true, type: 'string', required: true, labelAr: 'مشهد اللعبة أو الشخصية', labelEn: 'Game Scene / Sprite', hintAr: 'مثال: محطة فضاء ومستكشف بالبكسل مع قمر مضيء', hintEn: 'e.g. Cozy futuristic space station balcony overlooking pixelated moon' },
      { key: 'bit_depth', flag: 'bit_depth', isPositional: false, type: 'string', required: false, defaultValue: '16-bit', labelAr: 'دقة البكسل', labelEn: 'Bit Depth & Scale', hintAr: '16-bit (SNES style), 32-bit (detailed), 8-bit (retro-arcade)', hintEn: '16-bit' },
      { key: 'palette', flag: 'palette', isPositional: false, type: 'string', required: false, defaultValue: 'cyberpunk-neon', labelAr: 'لوحة الألوان المحدودة', labelEn: 'Palette', hintAr: 'cyberpunk-neon, warm-nostalgia, gameboy-tint', hintEn: 'cyberpunk-neon' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, square', hintEn: 'landscape' }
    ],
    example: '/pixel art "محطة فضاء ومستكشف بالبكسل مع قمر مضيء" --bit_depth=16-bit --palette=cyberpunk-neon --format=landscape',
    qualityRules: [
      'انضباط أحجام البكسل دون تشويش أو تنعيم غير مرغوب فيه (Crisp pixel alignment)',
      'تطبيق تقنية التنقيط (Dithering) الذكية لتوليد التدرجات والظلال',
      'إيحاء حركي وأجواء حنين ألعاب التسعينيات الأصيلة'
    ],
    keywords: ['pixel art', 'بكسل ارت', 'العاب كلاسيكية', '16 bit art', 'retro gaming art'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 114,
    isFavorite: false
  },
  {
    id: 'des-art-058',
    code: '/comic panel',
    titleAr: 'إطار ولوحة قصص مصورة (Comic / Manga Panel)',
    titleEn: 'Dynamic Comic & Manga Book Panel',
    descriptionAr: 'ينشئ لوحة قصة مصورة حماسية بخطوط حبر قوية وتأثيرات حركة درامية مستوحاة من الكوميكس والمانجا.',
    descriptionEn: 'Produce dynamic comic and manga book action panels with bold ink hatching, halftones, and dramatic speed lines.',
    group: 'design',
    designCategory: 'art',
    outputType: 'image',
    outputBadges: ['رسم توضيحي'],
    params: [
      { key: 'action_scene', flag: 'action_scene', isPositional: true, type: 'string', required: true, labelAr: 'المشهد الحماسي والحركة', labelEn: 'Action & Narrative', hintAr: 'مثال: مبارزة بطل خيالي بقوى خارقة وسط عاصفة', hintEn: 'e.g. Hero releasing energy shockwave in thunderstorm' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'manga-ink-halftone', labelAr: 'الأسلوب الفني', labelEn: 'Comic Style', hintAr: 'manga-ink-halftone, modern-superhero-color, indie-graphic-novel', hintEn: 'manga-ink-halftone' },
      { key: 'effects', flag: 'effects', isPositional: false, type: 'string', required: false, defaultValue: 'speed-lines,dramatic-angle', labelAr: 'المؤثرات الحركية', labelEn: 'Motion Effects', hintAr: 'speed-lines,dramatic-angle,screentone', hintEn: 'speed-lines' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'vertical', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'vertical, square, landscape', hintEn: 'vertical' }
    ],
    example: '/comic panel "مبارزة بطل خيالي بقوى خارقة وسط عاصفة" --style=manga-ink-halftone --effects=speed-lines,dramatic-angle --format=vertical',
    qualityRules: [
      'خطوط حبر سوداء قوية ومتباينة مع استخدام نقاط التظليل (Halftone screentones)',
      'زاوية تصوير منخفضة أو مائلة تضفي بعداً ملحمياً للحركة (Dutch angle)',
      'تحديد واضح لمسار الحركة وتأثيرات الصدمات الضوئية'
    ],
    keywords: ['comic panel', 'كوميكس', 'مانجا', 'manga panel', 'قصص مصورة'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 110,
    isFavorite: false
  },
  {
    id: 'des-art-059',
    code: '/children book art',
    titleAr: 'رسوم قصص الأطفال الساحرة (Children\'s Book Art)',
    titleEn: 'Whimsical Children\'s Book Illustration',
    descriptionAr: 'ينشئ رسومًا لطيفة، دافئة ومليئة بالخيال والبهجة مخصصة لكتب وقصص الأطفال التفاعلية.',
    descriptionEn: 'Generate heartwarming, whimsical illustrations with soft textures and lovable characters for children’s literature.',
    group: 'design',
    designCategory: 'art',
    outputType: 'image',
    outputBadges: ['رسم توضيحي'],
    params: [
      { key: 'story_scene', flag: 'story_scene', isPositional: true, type: 'string', required: true, labelAr: 'المشهد القصصي والشخصيات', labelEn: 'Story Scene & Characters', hintAr: 'مثال: أرنب صغير يقرأ كتاباً تحت شجرة عملاقة مضيئة بالفراشات', hintEn: 'e.g. Little bunny reading under a magical glowing tree full of friendly fireflies' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'whimsical-gouache', labelAr: 'الأسلوب الفني', labelEn: 'Style', hintAr: 'whimsical-gouache, soft-pastel-crayon, digital-storybook', hintEn: 'whimsical-gouache' },
      { key: 'mood', flag: 'mood', isPositional: false, type: 'string', required: false, defaultValue: 'warm-magical', labelAr: 'الجو العام', labelEn: 'Mood', hintAr: 'warm-magical, playful-adventurous, cozy-bedtime', hintEn: 'warm-magical' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape (spread), portrait', hintEn: 'landscape' }
    ],
    example: '/children book art "أرنب صغير يقرأ كتاباً تحت شجرة عملاقة مضيئة بالفراشات" --style=whimsical-gouache --mood=warm-magical --format=landscape',
    qualityRules: [
      'ملامح شخصيات بريئة ولطيفة تبعث على الطمأنينة والمرح وتجذب انتباه الطفل',
      'لوحة ألوان دافئة ومبهجة غير قاسية على العين',
      'تفاصيل بصرية خيالية صغيرة تشجع الطفل على استكشاف أرجاء الصفحة'
    ],
    keywords: ['children book art', 'قصص اطفال', 'رسوم اطفال', 'storybook illustration', 'رسم كتب اطفال'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 119,
    isFavorite: false
  },
  {
    id: 'des-art-060',
    code: '/concept art',
    titleAr: 'فن مفاهيمي للأفلام والألعاب (Concept Art)',
    titleEn: 'Cinematic Concept Art & Environment Design',
    descriptionAr: 'ينشئ بيئات ومفاهيم بصرية سينمائية متقدمة تستخدم في مراحل الإنتاج والتطوير الأولي للأفلام والألعاب.',
    descriptionEn: 'Produce expansive environment concept art and vehicle/architecture designs for AAA gaming and cinema production.',
    group: 'design',
    designCategory: 'art',
    outputType: 'image',
    outputBadges: ['رسم توضيحي'],
    params: [
      { key: 'environment', flag: 'environment', isPositional: true, type: 'string', required: true, labelAr: 'المشهد والبيئة المفاهيمية', labelEn: 'Environment & Concept', hintAr: 'مثال: وادي مستقبلي به أبراج طاقة شمسية عملاقة وقوافل طائرة', hintEn: 'e.g. Futuristic desert canyon with colossal solar monoliths and hovering cargo skiffs' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'cinematic-matte-painting', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'cinematic-matte-painting, hard-surface-sci-fi, dark-epic-fantasy', hintEn: 'cinematic-matte-painting' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'volumetric-sunlight', labelAr: 'الإضاءة الجوية', labelEn: 'Atmospheric Lighting', hintAr: 'volumetric-sunlight, sandstorm-glow, twilight-haze', hintEn: 'volumetric-sunlight' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'wide', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'wide (21:9 / 16:9)', hintEn: 'wide' }
    ],
    example: '/concept art "وادي مستقبلي به أبراج طاقة شمسية عملاقة وقوافل طائرة" --style=cinematic-matte-painting --lighting=volumetric-sunlight --format=wide',
    qualityRules: [
      'تجسيد عمق الميدان والضباب الجوي (Atmospheric haze) لإظهار المسافات الشاسعة',
      'توازن بين عناصر المقياس الإنساني والهياكل العملاقة في المشهد',
      'تكامل هندسي وإضاءة متسقة بين كافة الكتل المعمارية والتضاريس'
    ],
    keywords: ['concept art', 'فن مفاهيمي', 'تصميم بيئات العاب', 'matte painting', 'cinematic environment'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 128,
    isFavorite: false
  }
];
