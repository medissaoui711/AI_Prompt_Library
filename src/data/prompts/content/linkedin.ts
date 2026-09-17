import { CommandPrompt } from '../../../types/prompt';
import { CONTENT_COMMON_PARAMS, SOCIAL_CONTENT_RULES, SAFETY_QUALITY_RULES } from './constants';

export const LINKEDIN_PROMPTS: CommandPrompt[] = [
  {
    id: 'cnt-lnk-021',
    code: '/professional post',
    titleAr: 'منشور مهني وتجربة وظيفية',
    titleEn: 'Professional Career Post',
    descriptionAr: 'يكتب منشورًا مهنيًا غنيًا بالدروس العملية حول بيئة العمل، إدارة الفرق، أو تحديات النمو المهني.',
    descriptionEn: 'Writes authentic, value-driven professional posts on career development, team dynamics, and workplace wisdom.',
    group: 'content',
    contentCategory: 'linkedin',
    outputType: 'text',
    outputBadges: ['منشور مهني', 'لينكدإن'],
    params: [
      { key: 'experience', flag: 'experience', isPositional: true, type: 'text', required: true, labelAr: 'التجربة أو الفكرة المهنية', labelEn: 'Professional insight', hintAr: 'درس تعلمته من إدارة فريق, تجربة انتقال لمجال جديد...', hintEn: 'Team management lesson, career pivot...' },
      CONTENT_COMMON_PARAMS.platform,
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.length,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/professional post درس تعلمته من إدارة فريق --platform=linkedin --tone=honest --length=medium --language=ar',
    qualityRules: [...SOCIAL_CONTENT_RULES, ...SAFETY_QUALITY_RULES],
    keywords: ['لينكدإن', 'مهني', 'خبرة عملية', 'تطوير مهني', 'professional post'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 290,
    isFavorite: true
  },
  {
    id: 'cnt-lnk-022',
    code: '/career story',
    titleAr: 'قصة مسار وتحدي مهني',
    titleEn: 'Career Journey Story',
    descriptionAr: 'يسرد قصة تحدٍّ أو إخفاق تحوّل إلى نجاح بأسلوب سردي بشري ملهم يلامس طموحات المهنيين.',
    descriptionEn: 'Narrates an authentic workplace challenge or failure turned into a triumph, inspiring fellow professionals.',
    group: 'content',
    contentCategory: 'linkedin',
    outputType: 'text',
    outputBadges: ['قصة مهنية', 'سرد شخصي'],
    params: [
      { key: 'story', flag: 'story', isPositional: true, type: 'text', required: true, labelAr: 'التحدي أو الموقف', labelEn: 'Story premise', hintAr: 'أول مشروع فشلت فيه, تحدي أول وظيفة قيادية...', hintEn: 'First failed project, first leadership role...' },
      CONTENT_COMMON_PARAMS.platform,
      { key: 'lesson', flag: 'lesson', isPositional: false, type: 'string', required: false, labelAr: 'الدرس المستفاد', labelEn: 'Key takeaway', hintAr: 'أهمية التخطيط, التواصل مع أصحاب المصلحة...', hintEn: 'Importance of planning, stakeholder communication...' },
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/career story أول مشروع فشلت فيه --platform=linkedin --lesson=importance-of-planning --language=ar',
    qualityRules: [
      'الصدق والشفافية وتجنب التباهي المصطنع',
      'استخلاص درس محدد وواضح يمكن للقارئ تطبيقه في مساره',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['قصة مهنية', 'career story', 'سرد', 'فشل ونجاح', 'دروس مهنية'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 210,
    isFavorite: false
  },
  {
    id: 'cnt-lnk-023',
    code: '/expert insight',
    titleAr: 'رؤية خبير واتجاهات السوق',
    titleEn: 'Expert Industry Insight',
    descriptionAr: 'يكتب تحليلًا احترافيًا حول اتجاهات قطاع معين، التغيرات التكنولوجية، أو أفضل الممارسات الحديثة.',
    descriptionEn: 'Provides expert analysis and forward-looking commentary on industry trends and modern best practices.',
    group: 'content',
    contentCategory: 'linkedin',
    outputType: 'text',
    outputBadges: ['رؤية خبير', 'تحليل'],
    params: [
      { key: 'topic', flag: 'topic', isPositional: true, type: 'text', required: true, labelAr: 'الموضوع والتحليل', labelEn: 'Topic / Analysis', hintAr: 'مستقبل التسويق بالذكاء الاصطناعي, تحولات التجارة الإلكترونية...', hintEn: 'Future of AI marketing, ecommerce shifts...' },
      { key: 'industry', flag: 'industry', isPositional: false, type: 'string', required: false, labelAr: 'مجال الصناعة', labelEn: 'Industry', hintAr: 'marketing, tech, finance, healthcare...', hintEn: 'marketing, tech, finance, healthcare...' },
      CONTENT_COMMON_PARAMS.platform,
      CONTENT_COMMON_PARAMS.tone
    ],
    example: '/expert insight مستقبل التسويق بالذكاء الاصطناعي --industry=marketing --platform=linkedin --tone=thoughtful',
    qualityRules: [
      'الاعتماد على منطق سليم وحجج مدعومة بالأمثلة الواقعية',
      'عدم ذكر أرقام مبيعات أو دراسات بلا مصدر موثوق وقابل للتحقق',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['رؤية خبير', 'expert insight', 'اتجاهات السوق', 'تحليل قطاع'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 245,
    isFavorite: false
  },
  {
    id: 'cnt-lnk-024',
    code: '/case study post',
    titleAr: 'منشور دراسة حالة وقصة نجاح حقيقية',
    titleEn: 'Case Study & Success Story Post',
    descriptionAr: 'يكتب منشور دراسة حالة منظم وفق هيكل: المشكلة (Problem) -> الحل (Action) -> النتيجة الملموسة (Result).',
    descriptionEn: 'Structures a compelling case study post following the Problem -> Action -> Tangible Result framework.',
    group: 'content',
    contentCategory: 'linkedin',
    outputType: 'text',
    outputBadges: ['منشور مهني', 'دراسة حالة'],
    params: [
      { key: 'result', flag: 'result', isPositional: true, type: 'text', required: true, labelAr: 'الإنجاز أو النتيجة الملموسة', labelEn: 'Core achievement', hintAr: 'زيادة مبيعات متجر بنسبة 25%, خفض تكلفة الحملات...', hintEn: '25% store revenue growth, reduced acquisition cost...' },
      CONTENT_COMMON_PARAMS.platform,
      { key: 'structure', flag: 'structure', isPositional: false, type: 'string', required: false, defaultValue: 'problem,action,result', labelAr: 'هيكل العرض', labelEn: 'Structure', hintAr: 'problem,action,result', hintEn: 'problem,action,result' },
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/case study post زيادة مبيعات متجر بنسبة 25% --platform=linkedin --structure=problem,action,result --language=ar',
    qualityRules: [
      'لا تختلق أرقام مبيعات أو نسب أرباح غير حقيقية أو مضللة',
      'توضيح المنهجية والخطوات العملية التي أدت للنتيجة',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['دراسة حالة', 'case study', 'قصة نجاح', 'نتائج عملية', 'إثبات اجتماعي'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 280,
    isFavorite: true
  },
  {
    id: 'cnt-lnk-025',
    code: '/thought leadership',
    titleAr: 'مقالة رأي قيادي وفكري (Thought Leadership)',
    titleEn: 'Thought Leadership Post',
    descriptionAr: 'يطرح رؤية قيادية متقدمة تتحدى الأفكار التقليدية وتفتح حوارًا نوعيًا بين قادة الأعمال والمختصين.',
    descriptionEn: 'Frames contrarian or visionary leadership perspectives that stimulate high-level debate among executives.',
    group: 'content',
    contentCategory: 'linkedin',
    outputType: 'text',
    outputBadges: ['رأي قيادي', 'فكر استراتيجي'],
    params: [
      { key: 'premise', flag: 'premise', isPositional: true, type: 'text', required: true, labelAr: 'الفكرة القيادية أو الفرضية', labelEn: 'Leadership premise', hintAr: 'لماذا تحتاج الشركات الصغيرة إلى CRM؟, مستقبل العمل الهجين...', hintEn: 'Why small businesses need CRM, hybrid work future...' },
      CONTENT_COMMON_PARAMS.platform,
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.cta
    ],
    example: '/thought leadership لماذا تحتاج الشركات الصغيرة إلى CRM؟ --platform=linkedin --tone=expert --cta=discussion',
    qualityRules: [...SOCIAL_CONTENT_RULES, ...SAFETY_QUALITY_RULES],
    keywords: ['thought leadership', 'رأي قيادي', 'استراتيجية', 'لينكدإن'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 205,
    isFavorite: false
  },
  {
    id: 'cnt-lnk-026',
    code: '/linkedin carousel',
    titleAr: 'كاروسيل لينكدإن التعليمي (Document/PDF)',
    titleEn: 'LinkedIn Carousel Document Copy',
    descriptionAr: 'يكتب محتوى شرائح مستند لينكدإن (PDF Carousel) مقسمة ومكثفة مع تصميم نصوص احترافي.',
    descriptionEn: 'Writes concise, high-value LinkedIn document carousel slides optimized for downloads and reshares.',
    group: 'content',
    contentCategory: 'linkedin',
    outputType: 'text',
    outputBadges: ['كاروسيل', 'لينكدإن'],
    params: [
      { key: 'framework', flag: 'framework', isPositional: true, type: 'text', required: true, labelAr: 'موضوع الشرائح والدليل', labelEn: 'Topic / Framework', hintAr: '7 أخطاء في إدارة المشاريع, دليل كتابة سيرة ذاتية...', hintEn: '7 project management mistakes, resume guide...' },
      { key: 'slides', flag: 'slides', isPositional: false, type: 'number', required: false, defaultValue: 8, labelAr: 'عدد الشرائح', labelEn: 'Slide count', hintAr: '6, 8, 10...', hintEn: '6, 8, 10...' },
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/linkedin carousel 7 أخطاء في إدارة المشاريع --slides=8 --tone=professional --language=ar',
    qualityRules: [
      'عنوان رئيسي واضح وعريض وموجز لكل شريحة',
      'نص مقتضب لا يتجاوز 25-35 كلمة في الشريحة الواحدة لسهولة القراءة السريعة',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['كاروسيل لينكدإن', 'linkedin carousel', 'pdf document', 'شرائح مهنية'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 260,
    isFavorite: false
  },
  {
    id: 'cnt-lnk-027',
    code: '/linkedin poll',
    titleAr: 'استطلاع رأي مهني على لينكدإن (Poll)',
    titleEn: 'LinkedIn Professional Poll',
    descriptionAr: 'يصيغ استطلاع رأي مهني ذكي مع خيارات متوازنة ومقدمة حوارية تحفز المسؤولين على المشاركة وشرح آرائهم.',
    descriptionEn: 'Designs thought-provoking LinkedIn polls with nuanced answer options and engaging context.',
    group: 'content',
    contentCategory: 'linkedin',
    outputType: 'text',
    outputBadges: ['استطلاع', 'تفاعلي'],
    params: [
      { key: 'question', flag: 'question', isPositional: true, type: 'text', required: true, labelAr: 'سؤال الاستطلاع', labelEn: 'Poll question', hintAr: 'ما أصعب مهارة عند إدارة فريق عن بعد؟', hintEn: 'Toughest remote team management skill?' },
      CONTENT_COMMON_PARAMS.audience,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/linkedin poll ما أصعب مهارة عند إدارة فريق عن بعد؟ --audience=managers --language=ar',
    qualityRules: [
      'صياغة خيارات الاستطلاع بحيث تكون محددة وغير متداخلة (Mutual Exclusive)',
      'سؤال المتابعين في نهاية المنشور عن سبب اختيارهم لإثراء التعليقات',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['استطلاع لينكدإن', 'linkedin poll', 'تفاعل مهني', 'سؤال مجتمع'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 190,
    isFavorite: false
  },
  {
    id: 'cnt-lnk-028',
    code: '/company update',
    titleAr: 'تحديثات وإنجازات الشركة (Company Update)',
    titleEn: 'Company Milestones & Updates',
    descriptionAr: 'يكتب منشور تحديث رسمي للشركة حول ميزات جديدة، إغلاق جولة، شراكة استراتيجية، أو نمو الفريق.',
    descriptionEn: 'Drafts corporate update announcements highlighting feature launches, milestones, and strategic growth.',
    group: 'content',
    contentCategory: 'linkedin',
    outputType: 'text',
    outputBadges: ['تحديث شركة', 'إنجاز'],
    params: [
      { key: 'milestone', flag: 'milestone', isPositional: true, type: 'text', required: true, labelAr: 'الإنجاز أو التحديث', labelEn: 'Milestone update', hintAr: 'إطلاق نسخة جديدة من التطبيق, توقيع شراكة...', hintEn: 'New app release, partnership signed...' },
      CONTENT_COMMON_PARAMS.platform,
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.cta
    ],
    example: '/company update إطلاق نسخة جديدة من التطبيق --platform=linkedin --tone=professional --cta=learn-more',
    qualityRules: [
      'التعبير عن الامتنان للعملاء وفريق العمل',
      'ذكر الحقائق المؤكدة فقط دون تضخيم لأرقام العملاء أو الشراكات',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['تحديث شركة', 'company update', 'أخبار الشركة', 'لينكدإن'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 170,
    isFavorite: false
  },
  {
    id: 'cnt-lnk-029',
    code: '/founder post',
    titleAr: 'رسالة ومنشور المؤسس (Founder Note)',
    titleEn: 'Founder Perspective Post',
    descriptionAr: 'يكتب منشورًا بلسان المؤسس حول الرؤية، كواليس التأسيس، والقرارات الجريئة لبناء الثقة مع الجمهور والمستثمرين.',
    descriptionEn: 'Writes candid founder notes revealing the why behind the business, building trust with users and partners.',
    group: 'content',
    contentCategory: 'linkedin',
    outputType: 'text',
    outputBadges: ['رسالة مؤسس', 'سرد شخصي'],
    params: [
      { key: 'mission', flag: 'mission', isPositional: true, type: 'text', required: true, labelAr: 'رؤية التأسيس والسبب', labelEn: 'Founding mission', hintAr: 'لماذا أنشأنا منصة أوامر الذكاء الاصطناعي؟, معاناتنا مع...', hintEn: 'Why we built AI prompt library, our struggle with...' },
      CONTENT_COMMON_PARAMS.platform,
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/founder post لماذا أنشأنا منصة أوامر الذكاء الاصطناعي؟ --platform=linkedin --tone=authentic --language=ar',
    qualityRules: [
      'التركيز على المشكلة الحقيقية التي عانى منها المؤسس وتدفعه لتقديم الحل',
      'صوت إنساني وعفوي يبتعد عن الخطاب الإعلاني الجاف',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['مؤسس', 'رسالة مؤسس', 'founder post', 'ريادة أعمال', 'قصة تأسيس'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 230,
    isFavorite: false
  },
  {
    id: 'cnt-lnk-030',
    code: '/workplace tip',
    titleAr: 'نصيحة عملية لبيئة العمل والإنتاجية',
    titleEn: 'Actionable Workplace Tip',
    descriptionAr: 'يقدم نصيحة سريعة وقابلة للتطبيق فورًا في إدارة الوقت، الاجتماعات، الاتصال الداخلي، أو تنظيم العمل.',
    descriptionEn: 'Delivers a crisp, immediately applicable productivity or communication tip for modern professionals.',
    group: 'content',
    contentCategory: 'linkedin',
    outputType: 'text',
    outputBadges: ['نصيحة عمل', 'إنتاجية'],
    params: [
      { key: 'tactic', flag: 'tactic', isPositional: true, type: 'text', required: true, labelAr: 'النصيحة أو الأسلوب', labelEn: 'Workplace tactic', hintAr: 'طريقة تنظيم اجتماع أسبوعي فعال, حماية التركيز...', hintEn: 'Effective weekly meeting framework, deep focus...' },
      CONTENT_COMMON_PARAMS.platform,
      CONTENT_COMMON_PARAMS.length,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/workplace tip طريقة تنظيم اجتماع أسبوعي فعال --platform=linkedin --length=short --language=ar',
    qualityRules: [...SOCIAL_CONTENT_RULES, ...SAFETY_QUALITY_RULES],
    keywords: ['نصيحة عمل', 'إنتاجية', 'بيئة العمل', 'workplace tip', 'اجتماعات'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 195,
    isFavorite: false
  }
];
