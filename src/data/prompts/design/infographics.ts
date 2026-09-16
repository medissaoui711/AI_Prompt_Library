import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const DESIGN_INFOGRAPHICS_PROMPTS: CommandPrompt[] = [
  {
    id: 'des-info-071',
    code: '/infographic',
    titleAr: 'إنفوجرافيك تعليمي أو تحليلي منظم (Infographic)',
    titleEn: 'Structured Explainer Infographic Visual',
    descriptionAr: 'ينشئ إنفوجرافيك متكامل يوضح معلومات أو خطوات أو بيانات معقدة بطريقة بصرية مبسطة وجذابة.',
    descriptionEn: 'Produce structured explainer infographics with clear visual hierarchy, iconography, and sectioned flow.',
    group: 'design',
    designCategory: 'infographics',
    outputType: 'image',
    outputBadges: ['تصميم إعلاني', 'تعليمي'],
    params: [
      { key: 'topic', flag: 'topic', isPositional: true, type: 'string', required: true, labelAr: 'موضوع الإنفوجرافيك والبيانات', labelEn: 'Infographic Topic', hintAr: 'مثال: خطوات التحول الرقمي في المؤسسات', hintEn: 'e.g. 5 Pillars of enterprise digital transformation' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'clean-vector-modern', labelAr: 'الأسلوب البصري', labelEn: 'Visual Style', hintAr: 'clean-vector-modern, 3d-isometric-infographic, minimalist-editorial', hintEn: 'clean-vector-modern' },
      { key: 'sections_count', flag: 'sections_count', isPositional: false, type: 'string', required: false, defaultValue: '4-sections', labelAr: 'عدد الأقسام', labelEn: 'Sections', hintAr: '4-sections, 5-steps, 3-pillars', hintEn: '4-sections' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'vertical-long', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'vertical-long, square, landscape', hintEn: 'vertical-long' }
    ],
    example: '/infographic "خطوات التحول الرقمي في المؤسسات" --style=clean-vector-modern --sections_count=4-sections --format=vertical-long',
    qualityRules: [
      'تسلسل هرمي واضح يبدأ بعنوان رئيسي جذاب، يتبعه مسار قراءة بصري سلس (Visual reading flow)',
      'تخصيص أيقونات مميزة لكل نقطة أو مرحلة لتسهيل الفهم الفوري',
      'تباين ألوان مريح يمنح وضوحًا فائقًا للنصوص والرسوم البيانية'
    ],
    keywords: ['infographic', 'انفوجرافيك', 'تصميم معلومات', 'infographic design', 'رسم بياني تعليمي'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 142,
    isFavorite: true
  },
  {
    id: 'des-info-072',
    code: '/educational poster',
    titleAr: 'بوستر تعليمي للمدارس والجامعات (Educational Poster)',
    titleEn: 'Academic & Educational Infographic Poster',
    descriptionAr: 'ينشئ بوستر تعليميًا غنيًا بالرسوم التوضيحية العلمية والتاريخية المناسبة للفصول الدراسية والمختبرات.',
    descriptionEn: 'Generate academic science and history classroom posters with labeled anatomy, diagrams, and vibrant callouts.',
    group: 'design',
    designCategory: 'infographics',
    outputType: 'image',
    outputBadges: ['تعليمي'],
    params: [
      { key: 'academic_subject', flag: 'academic_subject', isPositional: true, type: 'string', required: true, labelAr: 'الموضوع العلمي أو الدراسي', labelEn: 'Educational Subject', hintAr: 'مثال: دورة الماء في الطبيعة مع الشروحات', hintEn: 'e.g. The water cycle in nature with precipitation, evaporation, and condensation' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'scientific-illustrated', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'scientific-illustrated, modern-textbook, vintage-botanical-chart', hintEn: 'scientific-illustrated' },
      { key: 'target_audience', flag: 'target_audience', isPositional: false, type: 'string', required: false, defaultValue: 'students', labelAr: 'الفئة المستهدفة', labelEn: 'Target Audience', hintAr: 'students, kids, university-research', hintEn: 'students' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'vertical-poster', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'vertical-poster (A3/A2), landscape', hintEn: 'vertical-poster' }
    ],
    example: '/educational poster "دورة الماء في الطبيعة مع الشروحات" --style=scientific-illustrated --target_audience=students --format=vertical-poster',
    qualityRules: [
      'دقة علمية عالية في رسم الظواهر والمسميات التوضيحية',
      'أسهم ومسارات واضحة تربط بين المراحل المختلفة بطريقة بديهية',
      'ألوان حيوية تشجع على الاستكشاف والتذكر المعرفي'
    ],
    keywords: ['educational poster', 'بوستر تعليمي', 'دورة الماء', 'وسائل تعليمية', 'science poster'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 120,
    isFavorite: false
  },
  {
    id: 'des-info-073',
    code: '/diagram',
    titleAr: 'مخطط بياني تقني أو علمي (Technical Diagram)',
    titleEn: 'Technical & Architectural System Diagram',
    descriptionAr: 'ينشئ رسمًا تخطيطيًا تقنيًا أو علميًا يوضح كيفية عمل نظام أو جهاز أو بنية تحتية برمجية.',
    descriptionEn: 'Produce technical engineering schematics, cloud architecture diagrams, and system topology maps.',
    group: 'design',
    designCategory: 'infographics',
    outputType: 'image',
    outputBadges: ['تعليمي'],
    params: [
      { key: 'system_desc', flag: 'system_desc', isPositional: true, type: 'string', required: true, labelAr: 'وصف النظام أو المكونات', labelEn: 'System Description', hintAr: 'مثال: بنية الحوسبة السحابية وقواعد البيانات وخوادم الويب', hintEn: 'e.g. Microservices cloud architecture with API gateway and distributed database' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'isometric-tech-nodes', labelAr: 'الأسلوب التخطيطي', labelEn: 'Diagram Style', hintAr: 'isometric-tech-nodes, flat-flowchart, blueprint-dark', hintEn: 'isometric-tech-nodes' },
      { key: 'colors', flag: 'colors', isPositional: false, type: 'string', required: false, defaultValue: 'cyan,blue,slate', labelAr: 'الألوان', labelEn: 'Color Code', hintAr: 'cyan,blue,slate / mono-minimal / vibrant-accent', hintEn: 'cyan,blue,slate' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, wide', hintEn: 'landscape' }
    ],
    example: '/diagram "بنية الحوسبة السحابية وقواعد البيانات وخوادم الويب" --style=isometric-tech-nodes --colors=cyan,blue,slate --format=landscape',
    qualityRules: [
      'خطوط ربط وعقد شبكية منظمة (Clean connecting nodes and edges)',
      'تسميات واضحة ومقروءة لكل مكون وخدمة في النظام',
      'تجنب تقاطع الخطوط العشوائي لضمان الفهم التقني السريع'
    ],
    keywords: ['diagram', 'مخطط بياني', 'رسم تقني', 'architecture diagram', 'flowchart'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 128,
    isFavorite: false
  },
  {
    id: 'des-info-074',
    code: '/process visual',
    titleAr: 'مخطط تدفق ومراحل العمليات (Process Flow Visual)',
    titleEn: 'Step-by-Step Business Process Flow Visual',
    descriptionAr: 'ينشئ عرضًا بصريًا متسلسلًا للخطوات والمراحل التنفيذية (Step 1, Step 2, Step 3) للمشاريع وأدلة العمل.',
    descriptionEn: 'Generate streamlined step-by-step workflow visuals with sequential badges and progression paths.',
    group: 'design',
    designCategory: 'infographics',
    outputType: 'image',
    outputBadges: ['تعليمي'],
    params: [
      { key: 'workflow', flag: 'workflow', isPositional: true, type: 'string', required: true, labelAr: 'سير العمل والمراحل', labelEn: 'Workflow Stages', hintAr: 'مثال: مراحل تجربة المستخدم من التسجيل حتى إتمام الشراء', hintEn: 'e.g. 4-Stage customer journey onboarding flow' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'modern-stepper', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'modern-stepper, horizontal-pipeline, circular-cycle', hintEn: 'modern-stepper' },
      { key: 'steps_count', flag: 'steps_count', isPositional: false, type: 'string', required: false, defaultValue: '4-steps', labelAr: 'عدد المراحل', labelEn: 'Steps Count', hintAr: '4-steps, 5-steps, 6-steps', hintEn: '4-steps' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, vertical', hintEn: 'landscape' }
    ],
    example: '/process visual "مراحل تجربة المستخدم من التسجيل حتى إتمام الشراء" --style=modern-stepper --steps_count=4-steps --format=landscape',
    qualityRules: [
      'ترقيم متسلسل واضح وأيقونات موحدة تعبر عن كل خطوة بدقة',
      'تدرج لوني انسيابي يربط بداية المسار بنهايته',
      'مساحات مناسبة لكل مرحلة لكتابة العناوين والشروحات'
    ],
    keywords: ['process visual', 'مراحل العمل', 'مخطط تدفق', 'workflow visual', 'خطوات العمل'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 115,
    isFavorite: false
  },
  {
    id: 'des-info-075',
    code: '/timeline visual',
    titleAr: 'خط زمني وتاريخي مصور (Timeline Visual)',
    titleEn: 'Chronological Roadmap & Historical Timeline',
    descriptionAr: 'ينشئ خطًا زمنيًا أفقيًا أو عموديًا يسرد تطور الأحداث، إنجازات الشركات، أو خارطة طريق المنتجات.',
    descriptionEn: 'Produce chronological milestones and product roadmap timelines with dates, milestones, and icons.',
    group: 'design',
    designCategory: 'infographics',
    outputType: 'image',
    outputBadges: ['تعليمي'],
    params: [
      { key: 'timeline_subject', flag: 'timeline_subject', isPositional: true, type: 'string', required: true, labelAr: 'موضوع الخط الزمني والمحطات', labelEn: 'Timeline Milestones', hintAr: 'مثال: تاريخ تطور الذكاء الاصطناعي من 1950 حتى 2026', hintEn: 'e.g. History of AI milestones from 1950 to 2026' },
      { key: 'orientation', flag: 'orientation', isPositional: false, type: 'string', required: false, defaultValue: 'horizontal', labelAr: 'اتجاه الخط الزمني', labelEn: 'Orientation', hintAr: 'horizontal, vertical-zigzag, serpentine', hintEn: 'horizontal' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'modern-tech-roadmap', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'modern-tech-roadmap, historical-parchment, corporate-minimal', hintEn: 'modern-tech-roadmap' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, wide', hintEn: 'landscape' }
    ],
    example: '/timeline visual "تاريخ تطور الذكاء الاصطناعي من 1950 حتى 2026" --orientation=horizontal --style=modern-tech-roadmap --format=landscape',
    qualityRules: [
      'محطات زمنية متوازنة في المسافات مع نقاط التقاء بارزة',
      'إبراز السنوات والتواريخ الرئيسية بخط عريض وواضح',
      'تناسق في أحجام بطاقات المحتوى المرفقة بكل تاريخ'
    ],
    keywords: ['timeline visual', 'خط زمني', 'تاريخ التطور', 'roadmap graphic', 'محطات تاريخية'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 118,
    isFavorite: false
  },
  {
    id: 'des-info-076',
    code: '/mind map visual',
    titleAr: 'خريطة ذهنية ومفاهيمية بصرية (Visual Mind Map)',
    titleEn: 'Visual Mind Map & Conceptual Hierarchy',
    descriptionAr: 'ينشئ خريطة ذهنية متفرعة تربط الفكرة المركزية بالفروع الفرعية والأفكار المترابطة بشكل بصري جذاب.',
    descriptionEn: 'Generate radiating visual mind maps connecting core ideas with color-coded thematic branches and icons.',
    group: 'design',
    designCategory: 'infographics',
    outputType: 'image',
    outputBadges: ['تعليمي'],
    params: [
      { key: 'central_idea', flag: 'central_idea', isPositional: true, type: 'string', required: true, labelAr: 'الفكرة المركزية والتفريعات', labelEn: 'Core Idea & Branches', hintAr: 'مثال: استراتيجية التسويق بالمحتوى وفروعها', hintEn: 'e.g. Content marketing strategy core mind map with SEO, Social, Video, Email branches' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'organic-color-coded', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'organic-color-coded, modern-geometric, hand-drawn-clean', hintEn: 'organic-color-coded' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, square', hintEn: 'landscape' }
    ],
    example: '/mind map visual "استراتيجية التسويق بالمحتوى وفروعها" --style=organic-color-coded --format=landscape',
    qualityRules: [
      'ترميز لوني مميز لكل فرع رئيسي يمتد لتفريعاته الثانوية',
      'انطلاق متزن للفروع من المركز إلى الأطراف دون تداخل أو فوضى',
      'إدراج أيقونات دلالية مساعدة عند كل عقدة رئيسية'
    ],
    keywords: ['mind map visual', 'خريطة ذهنية', 'خريطة مفاهيم', 'mind map diagram', 'تفريعات الافكار'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 110,
    isFavorite: false
  },
  {
    id: 'des-info-077',
    code: '/comparison visual',
    titleAr: 'جدول ومقارنة بصرية بين خيارين (Comparison Matrix)',
    titleEn: 'Visual Comparison Card (Feature vs Feature)',
    descriptionAr: 'ينشئ مقارنة بصرية جنبًا إلى جنب (Side-by-Side) توضح الفروقات، المزايا، والعيوب بين منتجين أو حلين.',
    descriptionEn: 'Produce high-clarity side-by-side comparison graphics with checkmarks, pros/cons, and distinct feature cards.',
    group: 'design',
    designCategory: 'infographics',
    outputType: 'image',
    outputBadges: ['تعليمي'],
    params: [
      { key: 'comparison_items', flag: 'comparison_items', isPositional: true, type: 'string', required: true, labelAr: 'الطرفان المقارن بينهما', labelEn: 'Compared Items', hintAr: 'مثال: العمل الحر مقابل الوظيفة التقليدية', hintEn: 'e.g. Freelancing vs Full-Time corporate employment pros & cons' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'side-by-side-cards', labelAr: 'شكل المقارنة', labelEn: 'Layout Style', hintAr: 'side-by-side-cards, split-matrix, vs-battle-infographic', hintEn: 'side-by-side-cards' },
      { key: 'colors', flag: 'colors', isPositional: false, type: 'string', required: false, defaultValue: 'blue-vs-amber', labelAr: 'ألوان التمييز', labelEn: 'Contrasting Colors', hintAr: 'blue-vs-amber, emerald-vs-coral, purple-vs-teal', hintEn: 'blue-vs-amber' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, square', hintEn: 'landscape' }
    ],
    example: '/comparison visual "العمل الحر مقابل الوظيفة التقليدية" --style=side-by-side-cards --colors=blue-vs-amber --format=landscape',
    qualityRules: [
      'محاذاة أفقية متطابقة للبنود المقابلة في كلا الجانبين لتسهيل المقارنة السريعة',
      'استخدام علامات صح وخطأ ورموز بصرية واضحة',
      'فصل لوني جذاب بين العمودين يعطي هوية مستقلة لكل خيار'
    ],
    keywords: ['comparison visual', 'مقارنة بصرية', 'مقارنة خيارات', 'versus graphic', 'pros and cons chart'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 114,
    isFavorite: false
  },
  {
    id: 'des-info-078',
    code: '/data visual',
    titleAr: 'تمثيل بصري إبداعي للبيانات والأرقام (Data Visualization)',
    titleEn: 'Creative 3D Data & Statistical Visualization',
    descriptionAr: 'ينشئ تمثيلاً ثلاثي الأبعاد أو متقدمًا للإحصائيات، الرسوم البيانية، ونسب النمو بأسلوب معاصر وباهر.',
    descriptionEn: 'Render creative 3D bar graphs, donut charts, and statistical dashboards with dynamic lighting and clean callouts.',
    group: 'design',
    designCategory: 'infographics',
    outputType: 'image',
    outputBadges: ['تعليمي'],
    params: [
      { key: 'data_topic', flag: 'data_topic', isPositional: true, type: 'string', required: true, labelAr: 'البيانات والمؤشرات الرئيسية', labelEn: 'Data Metric & Topic', hintAr: 'مثال: نمو مبيعات التجارة الإلكترونية بنسبة 45%', hintEn: 'e.g. E-commerce annual sales 45% exponential growth chart' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: '3d-glass-charts', labelAr: 'نوع الرسم البياني', labelEn: 'Chart Style', hintAr: '3d-glass-charts, isometric-bars, sleek-fintech-analytics', hintEn: '3d-glass-charts' },
      { key: 'palette', flag: 'palette', isPositional: false, type: 'string', required: false, defaultValue: 'emerald,cyan,dark-slate', labelAr: 'الألوان', labelEn: 'Palette', hintAr: 'emerald,cyan,dark-slate / purple,violet / gold,navy', hintEn: 'emerald,cyan,dark-slate' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'landscape', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'landscape, wide', hintEn: 'landscape' }
    ],
    example: '/data visual "نمو مبيعات التجارة الإلكترونية بنسبة 45%" --style=3d-glass-charts --palette=emerald,cyan,dark-slate --format=landscape',
    qualityRules: [
      'إبراز الرقم أو النسبة المئوية الرئيسية بوضوح كبطل المشهد',
      'شفافية زجاجية ولمعان يعطي الرسوم البيانية مظهراً تقنياً راقياً',
      'تدرج تصاعدي في الأعمدة أو المنحنيات يعكس معنى النمو الإيجابي'
    ],
    keywords: ['data visual', 'تمثيل بيانات', 'رسوم بيانية', 'data visualization', '3d charts'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 122,
    isFavorite: false
  },
  {
    id: 'des-info-079',
    code: '/worksheet visual',
    titleAr: 'ورقة عمل وأنشطة تعليمية (Educational Worksheet)',
    titleEn: 'Print-Ready Educational Activity Worksheet',
    descriptionAr: 'ينشئ تصميم ورقة عمل تفاعلية للأطفال والطلاب تتضمن تمارين، رسوم للتوصيل أو التلوين، ومربعات إجابة.',
    descriptionEn: 'Design clean, engaging printable educational activity sheets with exercises, matching games, and coloring sections.',
    group: 'design',
    designCategory: 'infographics',
    outputType: 'image',
    outputBadges: ['تعليمي'],
    params: [
      { key: 'worksheet_topic', flag: 'worksheet_topic', isPositional: true, type: 'string', required: true, labelAr: 'موضوع النشاط والصف الدراسي', labelEn: 'Worksheet Topic & Grade', hintAr: 'مثال: نشاط تعلم الحروف العربية للأطفال مع رسوم الحيوانات', hintEn: 'e.g. Arabic alphabet letter tracing and animal matching activity for kindergarten' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'clean-line-art-fill', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'clean-line-art-fill, printable-black-and-white, colorful-primary', hintEn: 'clean-line-art-fill' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'vertical-A4', labelAr: 'المقاس', labelEn: 'Format', hintAr: 'vertical-A4, portrait', hintEn: 'vertical-A4' }
    ],
    example: '/worksheet visual "نشاط تعلم الحروف العربية للأطفال مع رسوم الحيوانات" --style=clean-line-art-fill --format=vertical-A4',
    qualityRules: [
      'خطوط عريضة واضحة ومسافات كافية لكتابة إجابات الأطفال أو التلوين',
      'توزيع مرح ومشجع غير مزدحم للعناصر والرسومات المبهجة',
      'ترويسة علوية مخصصة لكتابة اسم الطالب والتاريخ والدرجة'
    ],
    keywords: ['worksheet visual', 'ورقة عمل', 'انشطة تعليمية', 'printable worksheet', 'تمارين اطفال'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 105,
    isFavorite: false
  },
  {
    id: 'des-info-080',
    code: '/flashcard visual',
    titleAr: 'بطاقة تعليمية مصورة (Educational Flashcard)',
    titleEn: 'Bilingual Vocabulary & Fact Flashcard',
    descriptionAr: 'ينشئ بطاقة تعليمية مصورة (Flashcard) تحتوي على رسم واضح ومميز مع الكلمة باللغتين ومثال توضيحي.',
    descriptionEn: 'Produce bilingual vocabulary flashcards with clean hero illustrations, bold text badges, and phonetics.',
    group: 'design',
    designCategory: 'infographics',
    outputType: 'image',
    outputBadges: ['تعليمي'],
    params: [
      { key: 'word_subject', flag: 'word_subject', isPositional: true, type: 'string', required: true, labelAr: 'الكلمة أو المفهوم التعليمي', labelEn: 'Vocabulary Word & Concept', hintAr: 'مثال: كوكب المشتري - بطاقة علمية للأطفال', hintEn: 'e.g. Planet Jupiter science flashcard with Great Red Spot' },
      { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, defaultValue: 'illustrated-flashcard', labelAr: 'الأسلوب', labelEn: 'Style', hintAr: 'illustrated-flashcard, 3d-cute-object, botanical-vintage', hintEn: 'illustrated-flashcard' },
      { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, defaultValue: 'vertical-card', labelAr: 'المقاس', labelEn: 'Card Aspect Ratio', hintAr: 'vertical-card (2.5:3.5 standard card), square', hintEn: 'vertical-card' }
    ],
    example: '/flashcard visual "كوكب المشتري - بطاقة علمية للأطفال" --style=illustrated-flashcard --format=vertical-card',
    qualityRules: [
      'توسيط العنصر المصور بوضوح فائق لترسيخ الصورة الذهنية في الذاكرة',
      'حواف دائرية أنيقة وإطار محدد للبطاقة',
      'مساحة نظيفة أسفل الصورة مخصصة للكلمة والمعلومة الإضافية'
    ],
    keywords: ['flashcard visual', 'بطاقة تعليمية', 'فلاش كارد', 'educational card', 'بطاقات كلمات'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 108,
    isFavorite: false
  }
];
