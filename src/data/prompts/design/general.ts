import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const DESIGN_GENERAL_PROMPTS: CommandPrompt[] = [
  {
    id: 'des-gen-001',
    code: '/generate image',
    titleAr: 'توليد صورة عامة وتفصيلية',
    titleEn: 'General Image Generator',
    descriptionAr: 'ينشئ صورة عامة من وصف واضح يحدد العنصر والمكان والأسلوب والتكوين البصري.',
    descriptionEn: 'Generate high-fidelity general scenes specifying subject, environment, lighting, and composition.',
    group: 'design',
    designCategory: 'general',
    outputType: 'image',
    outputBadges: ['صورة جديدة'],
    params: [
      { key: 'prompt', flag: 'prompt', isPositional: true, type: 'string', required: true, labelAr: 'وصف المشهد أو الموضوع', labelEn: 'Scene Description', hintAr: 'مثال: مقهى عصري في الرياض', hintEn: 'e.g. Modern cozy coffee shop in Riyadh' },
      { key: 'style', flag: 'style', isPositional: false, type: 'enum', required: false, defaultValue: 'photorealistic', labelAr: 'الأسلوب الفني', labelEn: 'Style', hintAr: 'photorealistic, cinematic, minimal', hintEn: 'Style', enumValues: [
        { value: 'photorealistic', labelAr: 'واقعي فوتوغرافي (Photorealistic)', labelEn: 'Photorealistic' },
        { value: 'cinematic', labelAr: 'سينمائي درامي (Cinematic)', labelEn: 'Cinematic' },
        { value: 'artistic', labelAr: 'فني تشكيلي (Artistic)', labelEn: 'Artistic' }
      ]},
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'golden-hour', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'golden-hour, studio, natural, dramatic', hintEn: 'golden-hour, studio, natural' },
      { key: 'format', flag: 'format', isPositional: false, type: 'enum', required: false, defaultValue: 'landscape', labelAr: 'نسبة الأبعاد / المقاس', labelEn: 'Format', hintAr: 'landscape, portrait, square', hintEn: 'Format', enumValues: [
        { value: 'landscape', labelAr: 'أفقي واسع (16:9 Landscape)', labelEn: 'Landscape 16:9' },
        { value: 'portrait', labelAr: 'عمودي (4:5 / 9:16 Portrait)', labelEn: 'Portrait' },
        { value: 'square', labelAr: 'مربع (1:1 Square)', labelEn: 'Square 1:1' }
      ]}
    ],
    example: '/generate image "مقهى عصري في الرياض" --style=photorealistic --lighting=golden-hour --format=landscape',
    qualityRules: [
      'تحديد الموضوع الأساسي، البيئة المحيطة، ونوع الإضاءة بدقة',
      'تجنب الأوصاف الفضفاضة مثل "صورة جميلة" لصالح تفاصيل التكوين والخامات',
      'مراعاة نسب التباين وتوازن الألوان الطبيعية في المشهد'
    ],
    keywords: ['generate image', 'توليد صورة', 'انشاء صورة', 'ai image generation', 'صورة بالذكاء الاصطناعي'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 152,
    isFavorite: true
  },
  {
    id: 'des-gen-002',
    code: '/realistic photo',
    titleAr: 'صورة واقعية بجودة التصوير الفوتوغرافي',
    titleEn: 'Photorealistic Studio Shot',
    descriptionAr: 'ينشئ صورة واقعية تشبه التصوير الفوتوغرافي الاحترافي مع تفاصيل الكاميرا والعدسة والضوء الطبيعي.',
    descriptionEn: 'Produce authentic, professional-grade photographic images with natural lens depth and realistic textures.',
    group: 'design',
    designCategory: 'general',
    outputType: 'image',
    outputBadges: ['صورة جديدة'],
    params: [
      { key: 'subject', flag: 'subject', isPositional: true, type: 'string', required: true, labelAr: 'الموضوع والأشخاص', labelEn: 'Subject', hintAr: 'مثال: شاب عربي يعمل على لابتوب في مكتب حديث', hintEn: 'e.g. Young Arab man working on laptop in modern office' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'natural-window-light', labelAr: 'نوع الإضاءة', labelEn: 'Lighting', hintAr: 'natural-window-light, studio-soft, warm-ambient', hintEn: 'natural-window-light' },
      { key: 'camera', flag: 'camera', isPositional: false, type: 'string', required: false, defaultValue: '50mm', labelAr: 'العدسة والعمق', labelEn: 'Lens & Depth', hintAr: '50mm-f1.8, 85mm-portrait, 35mm-street', hintEn: '50mm f/1.8' },
      { key: 'format', flag: 'format', isPositional: false, type: 'enum', required: false, defaultValue: 'vertical', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'vertical, square, landscape', hintEn: 'vertical', enumValues: [
        { value: 'vertical', labelAr: 'عمودي (Vertical 4:5)', labelEn: 'Vertical' },
        { value: 'landscape', labelAr: 'أفقي (Landscape 16:9)', labelEn: 'Landscape' },
        { value: 'square', labelAr: 'مربع (Square 1:1)', labelEn: 'Square' }
      ]}
    ],
    example: '/realistic photo "شاب عربي يعمل على لابتوب في مكتب حديث" --lighting=natural-window-light --camera=50mm --format=vertical',
    qualityRules: [
      'محاكاة ملامح البشرة والخامات الحقيقية دون مظهر بلاستيكي مفرط النعومة',
      'استخدام إضاءة طبيعية غير متكلفة وتأطير عمق الميدان (Bokeh) الناعم',
      'تحديد زاوية الكاميرا ونوع اللقطة بدقة'
    ],
    keywords: ['realistic photo', 'صورة واقعية', 'تصوير احترافي', 'photo realistic', 'dslr camera shot'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 145,
    isFavorite: true
  },
  {
    id: 'des-gen-003',
    code: '/cinematic scene',
    titleAr: 'مشهد سينمائي درامي معقد',
    titleEn: 'Cinematic Movie Still Frame',
    descriptionAr: 'ينشئ مشهدًا سينمائيًا بدراما وإضاءة سينمائية وتكوين بصري مشبع بالحكاية والمشاعر.',
    descriptionEn: 'Generate cinematic movie stills with dramatic volumetric lighting, cinematic color grading, and anamorphic depth.',
    group: 'design',
    designCategory: 'general',
    outputType: 'image',
    outputBadges: ['صورة جديدة'],
    params: [
      { key: 'scene', flag: 'scene', isPositional: true, type: 'string', required: true, labelAr: 'وصف المشهد السينمائي', labelEn: 'Cinematic Scene', hintAr: 'مثال: سيارة تسير في شارع ممطر ليلاً', hintEn: 'e.g. Vintage car cruising through rain-slicked city at night' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'neon-reflections', labelAr: 'الإضاءة والظلال', labelEn: 'Lighting', hintAr: 'neon-reflections, moody-chiaroscuro, rim-light', hintEn: 'neon-reflections' },
      { key: 'mood', flag: 'mood', isPositional: false, type: 'string', required: false, defaultValue: 'dramatic', labelAr: 'الحالة والمزاج', labelEn: 'Mood', hintAr: 'dramatic, suspenseful, nostalgic, epic', hintEn: 'dramatic' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'wide', labelAr: 'نسبة الشاشة', labelEn: 'Aspect Ratio', hintAr: 'wide (21:9 / 16:9)', hintEn: 'wide (2.39:1 / 16:9)' }
    ],
    example: '/cinematic scene "سيارة تسير في شارع ممطر ليلاً" --lighting=neon-reflections --mood=dramatic --format=wide',
    qualityRules: [
      'تطبيق تدرجات الألوان السينمائية (Teal and Orange أو Moody Tones)',
      'إبراز الانعكاسات على الأسطح المبللة أو الضباب الجوي (Volumetric Fog)',
      'التركيز على التكوين الهندسي المتقن بنظام الثلث (Rule of Thirds)'
    ],
    keywords: ['cinematic scene', 'مشهد سينمائي', 'لقطة فيلم', 'cinematic lighting', 'movie still'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 130,
    isFavorite: false
  },
  {
    id: 'des-gen-004',
    code: '/lifestyle photo',
    titleAr: 'صورة نمط وأسلوب حياة طبيعية (Lifestyle)',
    titleEn: 'Natural Lifestyle & Editorial Photography',
    descriptionAr: 'ينشئ صورة أسلوب حياة طبيعية وعفوية تستخدم في الإعلانات والمحتوى التسويقي والتحريري.',
    descriptionEn: 'Create authentic editorial lifestyle photography showcasing real moments, genuine warmth, and relatable settings.',
    group: 'design',
    designCategory: 'general',
    outputType: 'image',
    outputBadges: ['صورة جديدة'],
    params: [
      { key: 'concept', flag: 'concept', isPositional: true, type: 'string', required: true, labelAr: 'المشهد اليومي أو العائلي', labelEn: 'Lifestyle Concept', hintAr: 'مثال: عائلة عربية تتناول الإفطار في المنزل', hintEn: 'e.g. Arab family enjoying morning breakfast at home' },
      { key: 'mood', flag: 'mood', isPositional: false, type: 'string', required: false, defaultValue: 'warm', labelAr: 'المزاج العام', labelEn: 'Mood', hintAr: 'warm, vibrant, cozy, relaxed', hintEn: 'warm' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'editorial', labelAr: 'الأسلوب الإخراجي', labelEn: 'Style', hintAr: 'editorial, candid, authentic', hintEn: 'editorial' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, portrait, square', hintEn: 'landscape' }
    ],
    example: '/lifestyle photo "عائلة عربية تتناول الإفطار في المنزل" --mood=warm --style=editorial --format=landscape',
    qualityRules: [
      'تجنب الابتسامات المصطنعة لصالح التفاعل الإنساني العفوي (Candid interaction)',
      'بيئة منزلية أو عملية حقيقية ذات إضاءة دافئة وناعمة',
      'تأكيد الدقة الثقافية والملابس المناسبة للسياق المطلوب'
    ],
    keywords: ['lifestyle photo', 'أسلوب حياة', 'تصوير عائلي', 'editorial lifestyle', 'candid photo'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 118,
    isFavorite: false
  },
  {
    id: 'des-gen-005',
    code: '/travel scene',
    titleAr: 'مشهد سفر وسياحة جذاب (Travel Scene)',
    titleEn: 'Wanderlust Travel & Tourism Scene',
    descriptionAr: 'ينشئ مشهد سفر أو وجهة سياحية طبيعية أو حضرية بطريقة ملهمة تبرز جمالية المكان.',
    descriptionEn: 'Generate breathtaking travel and destination visuals highlighting landscape geometry, atmospheric depth, and local culture.',
    group: 'design',
    designCategory: 'general',
    outputType: 'image',
    outputBadges: ['صورة جديدة'],
    params: [
      { key: 'destination', flag: 'destination', isPositional: true, type: 'string', required: true, labelAr: 'الوجهة السياحية والتفاصيل', labelEn: 'Destination & Scene', hintAr: 'مثال: جبال خضراء وضباب صباحي في عسير', hintEn: 'e.g. Green misty peaks of Asir during sunrise' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'photorealistic', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'photorealistic, national-geographic, drone-shot', hintEn: 'photorealistic' },
      { key: 'camera', flag: 'camera', isPositional: false, type: 'string', required: false, defaultValue: 'aerial', labelAr: 'زاوية التصوير', labelEn: 'Camera Perspective', hintAr: 'aerial, wide-angle, eye-level', hintEn: 'aerial' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, portrait', hintEn: 'landscape' }
    ],
    example: '/travel scene "جبال خضراء وضباب صباحي في عسير" --style=photorealistic --camera=aerial --format=landscape',
    qualityRules: [
      'إبراز الغنى الطوبوغرافي وتدرجات السحب والإضاءة الطبيعية',
      'تجسيد الهوية الجغرافية الحقيقية للمنطقة بدقة فائقة',
      'عمق ميداني واسع يُظهر التفاصيل في المقدمة والأفق'
    ],
    keywords: ['travel scene', 'مشهد سفر', 'سياحة', 'مناظر طبيعية سياحية', 'travel photography'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 112,
    isFavorite: false
  },
  {
    id: 'des-gen-006',
    code: '/nature scene',
    titleAr: 'مشهد طبيعي خلاب (Nature Scene)',
    titleEn: 'Pure Nature & Serene Landscape',
    descriptionAr: 'ينشئ مشهدًا طبيعيًا غنيًا بالتفاصيل والإضاءة الساحرة والألوان البكر مع هدوء بصري متوازن.',
    descriptionEn: 'Capture serene natural landscapes with organic textures, realistic foliage, water reflections, and natural sun glow.',
    group: 'design',
    designCategory: 'general',
    outputType: 'image',
    outputBadges: ['صورة جديدة'],
    params: [
      { key: 'landscape', flag: 'landscape', isPositional: true, type: 'string', required: true, labelAr: 'المشهد الطبيعي', labelEn: 'Nature Landscape', hintAr: 'مثال: شاطئ هادئ وقت الغروب', hintEn: 'e.g. Serene beach at sunset with calm waves' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'golden-hour', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'golden-hour, overcast-soft, dawn-mist', hintEn: 'golden-hour' },
      { key: 'mood', flag: 'mood', isPositional: false, type: 'string', required: false, defaultValue: 'peaceful', labelAr: 'المزاج والسكينة', labelEn: 'Mood', hintAr: 'peaceful, majestic, wild, serene', hintEn: 'peaceful' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'wide', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'wide, landscape, portrait', hintEn: 'wide' }
    ],
    example: '/nature scene "شاطئ هادئ وقت الغروب" --lighting=golden-hour --mood=peaceful --format=wide',
    qualityRules: [
      'توزيع الإضاءة الذهبية على سطح الماء وتفاصيل الرمال أو الصخور',
      'تجنب التكرار النمطي لعناصر النباتات والأشجار لتحقيق مظهر عضوي حقيقي',
      'ضبط تدرج ألوان السماء والغيوم بانسجام بصري متقن'
    ],
    keywords: ['nature scene', 'مشهد طبيعي', 'شاطئ غروب', 'landscape photo', 'طبيعة ساحرة'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 108,
    isFavorite: false
  },
  {
    id: 'des-gen-007',
    code: '/city scene',
    titleAr: 'مشهد حضري لمدينة حديثة (Cityscape)',
    titleEn: 'Urban Cityscape & Modern Architecture',
    descriptionAr: 'ينشئ مشهدًا حضريًا لمدينة أو شارع أو منطقة عصرية تضج بالحيوية والإنارة المعمارية.',
    descriptionEn: 'Produce dynamic urban cityscapes, skyline panoramas, and night street photography with vibrant illumination.',
    group: 'design',
    designCategory: 'general',
    outputType: 'image',
    outputBadges: ['صورة جديدة'],
    params: [
      { key: 'cityscape', flag: 'cityscape', isPositional: true, type: 'string', required: true, labelAr: 'وصف المدينة أو الشارع', labelEn: 'City & Street Description', hintAr: 'مثال: شارع حديث في مدينة عربية ليلاً', hintEn: 'e.g. Modern boulevard in an Arab metropolis at night' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'cinematic', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'cinematic, architectural-photo, cyberpunk', hintEn: 'cinematic' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'neon', labelAr: 'الإضاءة الليلية', labelEn: 'Lighting', hintAr: 'neon, streetlights, twilight, blue-hour', hintEn: 'neon' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, wide, vertical', hintEn: 'landscape' }
    ],
    example: '/city scene "شارع حديث في مدينة عربية ليلاً" --style=cinematic --lighting=neon --format=landscape',
    qualityRules: [
      'تفاصيل دقيقة في واجهات الأبراج الزجاجية وانعكاسات الأضواء الحضرية',
      'حركة ضوئية سلسة للسيارات (Long exposure light trails) عند الحاجة',
      'منظور عميق متوازن يتلاشى في نقطة تلاشي واضحة'
    ],
    keywords: ['city scene', 'مشهد مدينة', 'cityscape', 'شارع حديث ليلا', 'urban photography'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 104,
    isFavorite: false
  },
  {
    id: 'des-gen-008',
    code: '/fantasy world',
    titleAr: 'عالم خيالي وفن مفاهيمي (Fantasy World)',
    titleEn: 'Fantasy Realm & Concept Art World',
    descriptionAr: 'ينشئ عالمًا خياليًا أسطوريًا مناسبًا للألعاب والقصص الإبداعية والفن المفاهيمي السينمائي.',
    descriptionEn: 'Envision imaginative fantasy realms, mythical floating islands, and ethereal castles for games and worldbuilding.',
    group: 'design',
    designCategory: 'general',
    outputType: 'image',
    outputBadges: ['صورة جديدة'],
    params: [
      { key: 'world', flag: 'world', isPositional: true, type: 'string', required: true, labelAr: 'وصف العالم الخيالي', labelEn: 'Fantasy World', hintAr: 'مثال: مدينة عائمة فوق السحاب', hintEn: 'e.g. Mystical floating citadel above clouds with crystal waterfalls' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'concept-art', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'concept-art, digital-painting, hyper-fantasy', hintEn: 'concept-art' },
      { key: 'mood', flag: 'mood', isPositional: false, type: 'string', required: false, defaultValue: 'epic', labelAr: 'الجو العام', labelEn: 'Mood', hintAr: 'epic, ethereal, dark-fantasy, wondrous', hintEn: 'epic' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'wide', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'wide, landscape', hintEn: 'wide' }
    ],
    example: '/fantasy world "مدينة عائمة فوق السحاب" --style=concept-art --mood=epic --format=wide',
    qualityRules: [
      'إبراز مقياس الضخامة والاتساع (Sense of epic scale and wonder)',
      'إضاءة أثيرية سحرية وتدرجات ضباب وسحب متقنة',
      'تكامل العناصر المعمارية الخيالية مع التكوين الطبيعي'
    ],
    keywords: ['fantasy world', 'عالم خيالي', 'concept art', 'مدينة عائمة', 'fantasy landscape'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 99,
    isFavorite: false
  },
  {
    id: 'des-gen-009',
    code: '/future scene',
    titleAr: 'مشهد مستقبلي ومدن ذكية (Sci-Fi / Future)',
    titleEn: 'Futuristic Smart City & Sci-Fi Scene',
    descriptionAr: 'ينشئ تصورًا مستقبليًا متطورًا لمدينة أو تقنية أو أسلوب حياة ذكي في المستقبل القريب والبعيد.',
    descriptionEn: 'Design futuristic visions of smart cities, sustainable high-tech infrastructure, and next-gen transportation.',
    group: 'design',
    designCategory: 'general',
    outputType: 'image',
    outputBadges: ['صورة جديدة'],
    params: [
      { key: 'vision', flag: 'vision', isPositional: true, type: 'string', required: true, labelAr: 'الرؤية المستقبلية', labelEn: 'Futuristic Vision', hintAr: 'مثال: مدينة عربية ذكية في عام 2050', hintEn: 'e.g. Eco-smart Arab metropolis in the year 2050' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'photorealistic', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'photorealistic, solar-punk, cyberpunk, clean-scifi', hintEn: 'photorealistic' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'sunset', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'sunset, golden-hour, holographic-blue', hintEn: 'sunset' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'wide', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'wide, landscape', hintEn: 'wide' }
    ],
    example: '/future scene "مدينة عربية ذكية في عام 2050" --style=photorealistic --lighting=sunset --format=wide',
    qualityRules: [
      'دمج الاستدامة الخضراء مع التقنيات المعمارية المستقبلية الانسيابية',
      'تضمين مسارات نقل جوي أو طاقة شمسية مدمجة بتناغم بصري',
      'الحفاظ على الواقعية الإنشائية والهوية الثقافية دون مبالغات غير منطقية'
    ],
    keywords: ['future scene', 'مشهد مستقبلي', 'مدينة ذكية 2050', 'sci fi architecture', 'future city'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 106,
    isFavorite: false
  },
  {
    id: 'des-gen-010',
    code: '/historical scene',
    titleAr: 'مشهد تاريخي وتراثي عريق (Historical Scene)',
    titleEn: 'Historical Heritage & Period Scene',
    descriptionAr: 'ينشئ مشهدًا تاريخيًا غنيًا مع مراعاة الأزياء التراثية، المعمار، والأجواء الزمنية الأصيلة بدقة.',
    descriptionEn: 'Reconstruct historical eras and heritage environments with accurate period clothing, architecture, and lighting.',
    group: 'design',
    designCategory: 'general',
    outputType: 'image',
    outputBadges: ['صورة جديدة'],
    params: [
      { key: 'era', flag: 'era', isPositional: true, type: 'string', required: true, labelAr: 'الحقبة التاريخية والمكان', labelEn: 'Era & Setting', hintAr: 'مثال: سوق عربي قديم في العصر العباسي', hintEn: 'e.g. Bustling ancient marketplace in the Abbasid era' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'historical-painting', labelAr: 'الأسلوب الفني', labelEn: 'Artistic Style', hintAr: 'historical-painting, photorealistic-heritage, classic-orientalist', hintEn: 'historical-painting' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, portrait', hintEn: 'landscape' }
    ],
    example: '/historical scene "سوق عربي قديم في العصر العباسي" --style=historical-painting --format=landscape',
    qualityRules: [
      'مراعاة التفاصيل الدقيقة للأقمشة والمنسوجات والأواني التقليدية',
      'تجسيد المعمار التراثي والأقواس والزخارف المطابقة للحقبة الزمنية',
      'إضاءة دافئة وطبيعية تحاكي ضوء الشمس والفوانيس الزيتية القديمة'
    ],
    keywords: ['historical scene', 'مشهد تاريخي', 'تراث عربي', 'العصر العباسي', 'period painting'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 95,
    isFavorite: false
  }
];
