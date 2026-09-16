import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const DESIGN_PORTRAITS_PROMPTS: CommandPrompt[] = [
  {
    id: 'des-port-011',
    code: '/portrait',
    titleAr: 'بورتريه شخصي احترافي (Portrait)',
    titleEn: 'Professional Studio Portrait',
    descriptionAr: 'ينشئ بورتريه احترافيًا لشخص محدد بأسلوب وإضاءة وخلفية مدروسة بعناية.',
    descriptionEn: 'Generate high-end character and individual studio portraits with nuanced lighting and shallow depth of field.',
    group: 'design',
    designCategory: 'portraits',
    outputType: 'image',
    outputBadges: ['صورة جديدة'],
    params: [
      { key: 'subject', flag: 'subject', isPositional: true, type: 'string', required: true, labelAr: 'وصف الشخص والملامح', labelEn: 'Subject & Demographics', hintAr: 'مثال: رجل أعمال عربي', hintEn: 'e.g. Arab executive in modern suit' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'professional', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'professional, moody, artistic, editorial', hintEn: 'professional' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'studio-soft', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'studio-soft, rembrandt, butterfly, dramatic-rim', hintEn: 'studio-soft' },
      { key: 'background', flag: 'background', isPositional: false, type: 'string', required: false, defaultValue: 'neutral', labelAr: 'الخلفية', labelEn: 'Background', hintAr: 'neutral, blur-office, dark-textured', hintEn: 'neutral' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'vertical', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'vertical, square, portrait', hintEn: 'vertical' }
    ],
    example: '/portrait "رجل أعمال عربي" --style=professional --lighting=studio-soft --background=neutral --format=vertical',
    qualityRules: [
      'توزيع الإضاءة على زوايا الوجه وعينين حيتين بانعكاسات ضوئية واضحة (Catchlights)',
      'تجنب مبالغات التنعيم الرقمي والحفاظ على الملمس الطبيعي للجلد والرموش والشعر',
      'عزل الخلفية بسلاسة دون تشويش على حواف الرأس والأكتاف'
    ],
    keywords: ['portrait', 'بورتريه', 'صورة شخصية', 'studio portrait', 'تصوير أشخاص'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 140,
    isFavorite: true
  },
  {
    id: 'des-port-012',
    code: '/professional headshot',
    titleAr: 'صورة شخصية مهنية (LinkedIn / CV Headshot)',
    titleEn: 'Corporate LinkedIn & Executive Headshot',
    descriptionAr: 'ينشئ صورة شخصية مهنية راقية مناسبة لـ LinkedIn أو السيرة الذاتية أو الموقع الرسمي للشركة.',
    descriptionEn: 'Produce pristine corporate headshots tailored for executive profiles, company directories, and LinkedIn.',
    group: 'design',
    designCategory: 'portraits',
    outputType: 'image',
    outputBadges: ['صورة جديدة'],
    params: [
      { key: 'person', flag: 'person', isPositional: true, type: 'string', required: true, labelAr: 'الشخصية والمجال', labelEn: 'Professional Identity', hintAr: 'مثال: مهندسة معمارية عربية', hintEn: 'e.g. Arab female architect' },
      { key: 'outfit', flag: 'outfit', isPositional: false, type: 'string', required: false, defaultValue: 'business-formal', labelAr: 'الزي المهني', labelEn: 'Outfit', hintAr: 'business-formal, smart-casual, blazer', hintEn: 'business-formal' },
      { key: 'background', flag: 'background', isPositional: false, type: 'string', required: false, defaultValue: 'light-gray', labelAr: 'لون الخلفية', labelEn: 'Background', hintAr: 'light-gray, subtle-office-bokeh, solid-white', hintEn: 'light-gray' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'studio', labelAr: 'إضاءة الاستوديو', labelEn: 'Lighting', hintAr: 'studio, beauty-dish, natural-soft', hintEn: 'studio' }
    ],
    example: '/professional headshot "مهندسة معمارية عربية" --outfit=business-formal --background=light-gray --lighting=studio',
    qualityRules: [
      'تعبير وجه واثق ولطيف ومرحب يعكس الاحترافية والجاهزية المهنية',
      'تأطير اللقطة من الصدر إلى أعلى الرأس مع مساحة مناسبة فوق الرأس',
      'ملابس رسمية أنيقة ومتناسقة مع طبيعة التخصص'
    ],
    keywords: ['professional headshot', 'صورة لينكد ان', 'صورة سيرة ذاتية', 'headshot photo', 'corporate portrait'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 135,
    isFavorite: false
  },
  {
    id: 'des-port-013',
    code: '/character design',
    titleAr: 'تصميم شخصية متكاملة (Character Design)',
    titleEn: 'Creative Character Concept & Design',
    descriptionAr: 'ينشئ شخصية خيالية كاملة المواصفات للألعاب أو الرسوم المتحركة أو القصص المصورة.',
    descriptionEn: 'Craft bespoke character concepts for games, animation, and illustrated storytelling with defined silhouettes.',
    group: 'design',
    designCategory: 'portraits',
    outputType: 'image',
    outputBadges: ['رسم توضيحي'],
    params: [
      { key: 'concept', flag: 'concept', isPositional: true, type: 'string', required: true, labelAr: 'مفهوم ودور الشخصية', labelEn: 'Character Concept', hintAr: 'مثال: بطلة عربية مستكشفة', hintEn: 'e.g. Heroic young Arab female desert explorer' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: '3d-animation', labelAr: 'الأسلوب الفني', labelEn: 'Style', hintAr: '3d-animation, anime-hero, stylized-vector', hintEn: '3d-animation' },
      { key: 'outfit', flag: 'outfit', isPositional: false, type: 'string', required: false, defaultValue: 'adventure', labelAr: 'الملابس والعتاد', labelEn: 'Outfit & Gear', hintAr: 'adventure, high-tech, traditional-modern', hintEn: 'adventure' },
      { key: 'expression', flag: 'expression', isPositional: false, type: 'string', required: false, defaultValue: 'confident', labelAr: 'تعبير الوجه والوقفة', labelEn: 'Expression & Pose', hintAr: 'confident, cheerful, heroic, curious', hintEn: 'confident' }
    ],
    example: '/character design "بطلة عربية مستكشفة" --style=3d-animation --outfit=adventure --expression=confident',
    qualityRules: [
      'هيكل بصري متميز للشخصية يمكن التعرف عليه بسهولة من الظل (Silhouette)',
      'لوحة ألوان متناسقة ومعبرة عن سمات الشخصية وعالمها',
      'تناسق تشريحي مدروس ومطابق للأسلوب الفني المختار'
    ],
    keywords: ['character design', 'تصميم شخصية', 'شخصية العاب', '3d character', 'character concept'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 122,
    isFavorite: false
  },
  {
    id: 'des-port-014',
    code: '/fashion portrait',
    titleAr: 'بورتريه أزياء ومجلات (Fashion Portrait)',
    titleEn: 'High-Fashion Editorial Portrait',
    descriptionAr: 'ينشئ بورتريه أزياء بأسلوب تحريري راقٍ يحاكي جلسات تصوير المجلات العالمية ودور الأزياء.',
    descriptionEn: 'Generate high-fashion magazine covers and lookbook portraits highlighting couture textures and dramatic poses.',
    group: 'design',
    designCategory: 'portraits',
    outputType: 'image',
    outputBadges: ['صورة جديدة'],
    params: [
      { key: 'outfit_description', flag: 'outfit_description', isPositional: true, type: 'string', required: true, labelAr: 'وصف الزي والستايل', labelEn: 'Outfit & Styling', hintAr: 'مثال: امرأة ترتدي عباءة عصرية', hintEn: 'e.g. Elegant woman in modern couture abaya' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'editorial-fashion', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'editorial-fashion, vogue-style, minimalist-lookbook', hintEn: 'editorial-fashion' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'softbox', labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'softbox, harsh-high-fashion, dramatic-side', hintEn: 'softbox' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'vertical', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'vertical, 4:5, 9:16', hintEn: 'vertical' }
    ],
    example: '/fashion portrait "امرأة ترتدي عباءة عصرية" --style=editorial-fashion --lighting=softbox --format=vertical',
    qualityRules: [
      'إبراز خامة الأقمشة وانسدال الثوب وتفاصيل التطريز أو الحياكة بدقة فائقة',
      'وقفة عارضة أزياء متناسقة وزاوية كاميرا ديناميكية تبرز التصميم',
      'تناغم ألوان المكياج والخلفية مع درجات الزي الأساسي'
    ],
    keywords: ['fashion portrait', 'تصوير ازياء', 'موديل عبايات', 'editorial fashion', 'جلسة تصوير ازياء'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 115,
    isFavorite: false
  },
  {
    id: 'des-port-015',
    code: '/business portrait',
    titleAr: 'صورة قطاع الأعمال والشركات (Business Portrait)',
    titleEn: 'Corporate Business Executive Portrait',
    descriptionAr: 'ينشئ صورة احترافية لرجال وسيدات الأعمال، المدراء، ورواد الأعمال في بيئات العمل الحقيقية.',
    descriptionEn: 'Produce authentic corporate portraits in modern office boardrooms, collaborative hubs, and executive suites.',
    group: 'design',
    designCategory: 'portraits',
    outputType: 'image',
    outputBadges: ['صورة جديدة'],
    params: [
      { key: 'role', flag: 'role', isPositional: true, type: 'string', required: true, labelAr: 'الدور والمجال', labelEn: 'Executive Role', hintAr: 'مثال: مدير مشروع في مكتب حديث', hintEn: 'e.g. Senior Project Director in modern tech workspace' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'corporate', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'corporate, modern-entrepreneur, startup-founder', hintEn: 'corporate' },
      { key: 'background', flag: 'background', isPositional: false, type: 'string', required: false, defaultValue: 'office', labelAr: 'البيئة والخلفية', labelEn: 'Environment', hintAr: 'office, glass-boardroom, open-space', hintEn: 'office' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, defaultValue: 'natural', labelAr: 'نوع الضوء', labelEn: 'Lighting', hintAr: 'natural, window-daylight, architectural-ambient', hintEn: 'natural' }
    ],
    example: '/business portrait "مدير مشروع في مكتب حديث" --style=corporate --background=office --lighting=natural',
    qualityRules: [
      'دمج بيئة مكتبية واقعية ذات تفاصيل تقنية ومعمارية نظيفة غير مشتتة',
      'وقفة قيادية مريحة تعكس الثقة والخبرة',
      'إضاءة متوازنة تبرز الشخص مع الحفاظ على عمق المكان الخلفي'
    ],
    keywords: ['business portrait', 'بورتريه اعمال', 'رائد اعمال', 'corporate photo', 'مدير تنفيذي'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 110,
    isFavorite: false
  },
  {
    id: 'des-port-016',
    code: '/team photo',
    titleAr: 'صورة فريق عمل متكامل (Team Photo)',
    titleEn: 'Corporate Collaborative Team Photo',
    descriptionAr: 'ينشئ صورة فريق عمل متجانس ومتنوع في بيئة مهنية واقعية تعزز روح التعاون والإنجاز.',
    descriptionEn: 'Generate authentic multi-person corporate group photos celebrating teamwork, synergy, and modern culture.',
    group: 'design',
    designCategory: 'portraits',
    outputType: 'image',
    outputBadges: ['صورة جديدة'],
    params: [
      { key: 'team', flag: 'team', isPositional: true, type: 'string', required: true, labelAr: 'طبيعة الفريق والبيئة', labelEn: 'Team Domain & Setting', hintAr: 'مثال: فريق تقني عربي في مساحة عمل مشتركة', hintEn: 'e.g. Diverse Arab tech team in modern collaborative hub' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'authentic', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'authentic, editorial, candid-team', hintEn: 'authentic' },
      { key: 'mood', flag: 'mood', isPositional: false, type: 'string', required: false, defaultValue: 'collaborative', labelAr: 'المزاج', labelEn: 'Mood', hintAr: 'collaborative, energetic, innovative', hintEn: 'collaborative' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, wide', hintEn: 'landscape' }
    ],
    example: '/team photo "فريق تقني عربي في مساحة عمل مشتركة" --style=authentic --mood=collaborative --format=landscape',
    qualityRules: [
      'توزيع طبيعي ومتوازن للأشخاص في الكادر دون تراكم أو تداخل غير منطقي',
      'تناسق في الإضاءة عبر جميع الوجوه دون مناطق ظل قاسية على أحدهم',
      'تنوع في التعبيرات والتفاعل الإيجابي مع بيئة العمل والأجهزة'
    ],
    keywords: ['team photo', 'صورة فريق عمل', 'فريق شركات', 'corporate team', 'مساحة عمل مشتركة'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 102,
    isFavorite: false
  },
  {
    id: 'des-port-017',
    code: '/avatar',
    titleAr: 'أفاتار رقمي ثلاثي الأبعاد (3D Avatar)',
    titleEn: '3D Stylized Profile Avatar',
    descriptionAr: 'ينشئ أفاتار رقمي مميز ثلاثي الأبعاد مناسب للملفات الشخصية، الحسابات الرقمية، والتطبيقات.',
    descriptionEn: 'Produce stylish 3D cartoon avatars with clean studio clay/gloss finishes for apps, forums, and profiles.',
    group: 'design',
    designCategory: 'portraits',
    outputType: 'image',
    outputBadges: ['صورة جديدة'],
    params: [
      { key: 'persona', flag: 'persona', isPositional: true, type: 'string', required: true, labelAr: 'وصف الشخصية والمهنة', labelEn: 'Persona & Profession', hintAr: 'مثال: مصمم جرافيك عربي', hintEn: 'e.g. Friendly Arab UI designer with glasses' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: '3d-cartoon', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: '3d-cartoon, claymation, stylized-memoji', hintEn: '3d-cartoon' },
      { key: 'background', flag: 'background', isPositional: false, type: 'string', required: false, defaultValue: 'purple-gradient', labelAr: 'الخلفية', labelEn: 'Background', hintAr: 'purple-gradient, pastel-circle, soft-blue', hintEn: 'purple-gradient' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'square', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'square (1:1)', hintEn: 'square' }
    ],
    example: '/avatar "مصمم جرافيك عربي" --style=3d-cartoon --background=purple-gradient --format=square',
    qualityRules: [
      'لمعان ناعم وإضاءة ثلاثية النقاط متقنة وخامات نظيفة (Clean shader rendering)',
      'تعبير مرح وودود وألوان حيوية متناسقة',
      'توسيط الرأس والأكتاف بدقة داخل إطار مربع مثالي لصور العرض'
    ],
    keywords: ['avatar', 'افاتار ثلاثي الابعاد', '3d avatar', 'صورة بروفايل', 'profile avatar'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 119,
    isFavorite: false
  },
  {
    id: 'des-port-018',
    code: '/profile illustration',
    titleAr: 'رسمة شخصية مسطحة للمواقع (Flat Vector Profile)',
    titleEn: 'Flat Vector Profile Illustration',
    descriptionAr: 'ينشئ رسمة شخصية مبسطة وأنيقة (Vector) للاستخدام في المواقع، المنتجات الرقمية، ولوحات التحكم.',
    descriptionEn: 'Generate crisp flat vector portraits with clean geometry and custom brand color schemes for SaaS websites.',
    group: 'design',
    designCategory: 'portraits',
    outputType: 'image',
    outputBadges: ['رسم توضيحي'],
    params: [
      { key: 'character', flag: 'character', isPositional: true, type: 'string', required: true, labelAr: 'وصف الشخصية', labelEn: 'Character Description', hintAr: 'مثال: طالبة جامعية', hintEn: 'e.g. Modern university student with backpack and tablet' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'flat-vector', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'flat-vector, line-art-fill, duotone-minimal', hintEn: 'flat-vector' },
      { key: 'colors', flag: 'colors', isPositional: false, type: 'string', required: false, defaultValue: 'blue,purple', labelAr: 'لوحة الألوان', labelEn: 'Color Palette', hintAr: 'blue,purple,teal', hintEn: 'blue,purple' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'square', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'square, circle', hintEn: 'square' }
    ],
    example: '/profile illustration "طالبة جامعية" --style=flat-vector --colors=blue,purple --format=square',
    qualityRules: [
      'خطوط هندسية نظيفة ودرجات لونية منسجمة مع واجهات المستخدم الحديثة',
      'تجنب التعقيد الزائد في الظلال لصالح البساطة البصرية الوظيفية',
      'وضوح الملامح والسمات الأساسية حتى عند التصغير الشديد'
    ],
    keywords: ['profile illustration', 'رسمة فيكتور', 'flat illustration', 'رسمة بروفايل', 'vector portrait'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 98,
    isFavorite: false
  },
  {
    id: 'des-port-019',
    code: '/group illustration',
    titleAr: 'رسم توضيحي لمجموعة أشخاص (Group Illustration)',
    titleEn: 'Modular Team & Group Illustration',
    descriptionAr: 'ينشئ رسمة لفريق أو مجموعة أشخاص بأسلوب بصري متناسق وموحد للمنصات والمواقع التعليمية والتسويقية.',
    descriptionEn: 'Produce multi-character flat/semi-flat illustrations showcasing teams, communities, and customer cohorts.',
    group: 'design',
    designCategory: 'portraits',
    outputType: 'image',
    outputBadges: ['رسم توضيحي'],
    params: [
      { key: 'group_concept', flag: 'group_concept', isPositional: true, type: 'string', required: true, labelAr: 'طبيعة المجموعة', labelEn: 'Group Theme', hintAr: 'مثال: فريق تعليمي', hintEn: 'e.g. Diverse educational team collaborating with books and screens' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'modern-flat', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'modern-flat, corporate-memphis, hand-drawn-clean', hintEn: 'modern-flat' },
      { key: 'diversity', flag: 'diversity', isPositional: false, type: 'string', required: false, defaultValue: 'arab', labelAr: 'التنوع والثقافة', labelEn: 'Demographic Context', hintAr: 'arab, global-diverse, youth', hintEn: 'arab' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, wide', hintEn: 'landscape' }
    ],
    example: '/group illustration "فريق تعليمي" --style=modern-flat --diversity=arab --format=landscape',
    qualityRules: [
      'تناسق في مقاييس الأجسام وسماكة الخطوط وأسلوب الرسم بين جميع الشخصيات',
      'توزيع بصري ديناميكي يعبر عن الحيوية والتفاعل دون فراغات ميتة',
      'لوحة ألوان محدودة ومتناسقة مع عناصر الهوية'
    ],
    keywords: ['group illustration', 'رسمة فريق', 'رسوم توضيحية للويب', 'team flat art', 'group vector'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 94,
    isFavorite: false
  },
  {
    id: 'des-port-020',
    code: '/character sheet',
    titleAr: 'لوحة تفاصيل الشخصية (Character Model Sheet)',
    titleEn: '360° Character Model Turnaround Sheet',
    descriptionAr: 'ينشئ لوحة متكاملة للشخصية تشمل الواجهة الأمامية والجانبية والخلفية وتفاصيل الملابس للرسامين والمصممين.',
    descriptionEn: 'Create full turnaround model sheets with front, side, and back orthographic views for 3D modeling and animation.',
    group: 'design',
    designCategory: 'portraits',
    outputType: 'image',
    outputBadges: ['رسم توضيحي'],
    params: [
      { key: 'character', flag: 'character', isPositional: true, type: 'string', required: true, labelAr: 'وصف الشخصية', labelEn: 'Character Concept', hintAr: 'مثال: شخصية روبوت تعليمي للأطفال', hintEn: 'e.g. Cute friendly educational robot character for kids' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: '3d-cartoon', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: '3d-cartoon, 2d-animation, concept-sheet', hintEn: '3d-cartoon' },
      { key: 'views', flag: 'views', isPositional: false, type: 'string', required: false, defaultValue: 'front,side,back', labelAr: 'المساقط المطلوبة', labelEn: 'Orthographic Views', hintAr: 'front,side,back,expressions', hintEn: 'front,side,back' }
    ],
    example: '/character sheet "شخصية روبوت تعليمي للأطفال" --style=3d-cartoon --views=front,side,back',
    qualityRules: [
      'محاذاة أفقية متطابقة للارتفاعات والنسب بين المساقط الثلاثة (Front, Side, Back)',
      'خلفية بيضاء أو رمادية محايدة مع خطوط إرشادية هندسية واضحة',
      'تفصيل الملحقات والعتاد بدقة تسهم في تسهيل النمذجة ثلاثية الأبعاد'
    ],
    keywords: ['character sheet', 'لوحة شخصية', 'مساقط شخصية', 'turnaround sheet', 'model sheet'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 105,
    isFavorite: false
  }
];
