import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const CV_CREATION_PROMPTS: CommandPrompt[] = [
  {
    id: 'cv-create-001',
    code: '/create cv',
    titleAr: 'إنشاء سيرة ذاتية كاملة',
    titleEn: 'Build Complete CV / Resume',
    descriptionAr: 'كتابة سيرة ذاتية متكاملة واحترافية من الصفر بناءً على خبراتك ومهاراتك.',
    descriptionEn: 'Generate a comprehensive, ready-to-use professional resume tailored to your target role.',
    group: 'cv',
    cvCategory: 'creation',
    outputType: 'text',
    outputBadges: ['CV', 'قالب'],
    params: [
      { key: 'role', flag: 'role', isPositional: true, type: 'string', required: true, labelAr: 'المسمى الوظيفي المستهدف', labelEn: 'Target Job Role', hintAr: 'مثال: مدير مشاريع، مهندس برمجيات', hintEn: 'e.g. Project Manager, Software Engineer' },
      resolveParam('experience'),
      { key: 'industry', flag: 'industry', isPositional: false, type: 'string', required: false, labelAr: 'مجال العمل', labelEn: 'Industry', hintAr: 'مثال: تقنية المعلومات، الرعاية الصحية', hintEn: 'e.g. Fintech, Healthcare' },
      { key: 'style', flag: 'style', isPositional: false, type: 'enum', required: false, defaultValue: 'ats_ready', labelAr: 'نمط التنسيق', labelEn: 'Layout Style', hintAr: 'نمط القالب المطلوب', hintEn: 'Template layout style', enumValues: [
        { value: 'ats_ready', labelAr: 'متوافق مع ATS (عمود واحد)', labelEn: 'ATS Ready (Single Column)' },
        { value: 'modern', labelAr: 'عصري وحديث', labelEn: 'Modern' },
        { value: 'executive', labelAr: 'تنفيذي وقيادي', labelEn: 'Executive' },
        { value: 'academic', labelAr: 'أكاديمي وبحثي', labelEn: 'Academic' }
      ]},
      resolveParam('language')
    ],
    example: '/create cv "مدير مشاريع" --experience=5_years --industry=fintech --style=ats_ready --language=ar',
    qualityRules: [
      'هيكلة كاملة تشمل: ملخص مهني، خبرات، مهارات، تعليم، وإنجازات بالأرقام',
      'صياغة نقاط الخبرة وفق معادلة الفعل + المهمة + النتيجة القابلة للقياس',
      'تنسيق نصي نظيف مهيأ لنسخه مباشرة في مستند أو قالب'
    ],
    keywords: ['سيرة ذاتية', 'إنشاء cv', 'resume', 'cv builder', 'ats', 'وظيفة', 'career'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 84,
    isFavorite: true
  },
  {
    id: 'cv-create-002',
    code: '/ats cv',
    titleAr: 'سيرة ذاتية مهيأة لأنظمة ATS',
    titleEn: 'ATS-Optimized Resume',
    descriptionAr: 'صياغة سيرة ذاتية عمود واحد بنص نقي متوافق هيكليًا ولغويًا مع أنظمة فحص السير الذاتية ATS.',
    descriptionEn: 'Build a single-column, cleanly formatted resume optimized for applicant tracking systems.',
    group: 'cv',
    cvCategory: 'creation',
    outputType: 'text',
    outputBadges: ['ATS', 'DOCX'],
    params: [
      { key: 'role', flag: 'role', isPositional: true, type: 'string', required: true, labelAr: 'المسمى الوظيفي', labelEn: 'Job Role', hintAr: 'المسمى الوظيفي المستهدف بدقة', hintEn: 'Exact target job title' },
      { key: 'job_desc', flag: 'job_desc', isPositional: false, type: 'text', required: false, labelAr: 'وصف الوظيفة المعلنة', labelEn: 'Job Description Text', hintAr: 'انسخ نص الإعلان لمطابقة الكلمات المفتاحية', hintEn: 'Paste job description to match keywords' },
      resolveParam('experience'),
      { key: 'format', flag: 'format', isPositional: false, type: 'enum', required: false, defaultValue: 'docx_friendly', labelAr: 'تنسيق الملف', labelEn: 'File Format', hintAr: 'هيئة التنسيق', hintEn: 'Target format', enumValues: [
        { value: 'docx_friendly', labelAr: 'متوافق مع Word (DOCX)', labelEn: 'Word Friendly (DOCX)' },
        { value: 'clean_text', labelAr: 'نص خام قياسي', labelEn: 'Clean Standard Text' }
      ]},
      resolveParam('language')
    ],
    example: '/ats cv "محلل بيانات" --experience=3_years --format=docx_friendly --language=ar',
    qualityRules: [
      'تجنب الجداول والأعمدة المتعددة والأيقونات المعقدة التي تربك قارئات ATS',
      'استخدام عناوين معيارية كلاسيكية: Professional Summary, Work Experience, Skills, Education',
      'تضمين الكلمات المفتاحية الأكثر تكرارًا في المجال'
    ],
    keywords: ['ats', 'أنظمة توظيف', 'سيرة ats', 'docx', 'resume', 'keyword matching'],
    createdAt: '2026-09-14T10:01:00.000Z',
    updatedAt: '2026-09-14T10:01:00.000Z',
    usageCount: 120,
    isFavorite: true
  },
  {
    id: 'cv-create-003',
    code: '/modern cv',
    titleAr: 'سيرة ذاتية بتصميم عصري (PDF)',
    titleEn: 'Modern Visual Resume Structure',
    descriptionAr: 'هيكلة وتوزيع سيرة ذاتية عصرية متناسقة بصريًا ومعدة للتصدير بصيغة PDF.',
    descriptionEn: 'Generate content and layout suggestions for a modern, visually balanced PDF resume.',
    group: 'cv',
    cvCategory: 'creation',
    outputType: 'text',
    outputBadges: ['CV', 'PDF'],
    params: [
      { key: 'role', flag: 'role', isPositional: true, type: 'string', required: true, labelAr: 'المسمى أو التخصص', labelEn: 'Target Role', hintAr: 'مثال: مصمم واجهات UI/UX، خبير تسويق', hintEn: 'e.g. UI/UX Designer, Marketing Lead' },
      { key: 'theme', flag: 'theme', isPositional: false, type: 'enum', required: false, defaultValue: 'minimalist', labelAr: 'طابع التصميم', labelEn: 'Design Theme', hintAr: 'الأسلوب البصري', hintEn: 'Visual theme', enumValues: [
        { value: 'minimalist', labelAr: 'تبسيطي أنيق (Minimal)', labelEn: 'Minimalist Clean' },
        { value: 'creative', labelAr: 'إبداعي ملهم', labelEn: 'Creative' },
        { value: 'corporate', labelAr: 'مؤسسي وازن', labelEn: 'Corporate Clean' }
      ]},
      resolveParam('experience'),
      resolveParam('language')
    ],
    example: '/modern cv "مصمم منتجات رقمية" --theme=minimalist --experience=senior --language=en',
    qualityRules: [
      'توزيع ذكي للمساحات البيضاء وتسلسل بصري مريح للعين',
      'إبراز الروابط المهنية كمعرض الأعمال وLinkedIn',
      'الحفاظ على النص قابلاً للتحديد والنسخ عند تصدير الـ PDF'
    ],
    keywords: ['modern cv', 'سيرة عصرية', 'pdf cv', 'تصميم سيرة', 'minimal resume'],
    createdAt: '2026-09-14T10:02:00.000Z',
    updatedAt: '2026-09-14T10:02:00.000Z',
    usageCount: 65,
    isFavorite: false
  },
  {
    id: 'cv-create-004',
    code: '/simple cv',
    titleAr: 'سيرة ذاتية بسيطة ومباشرة',
    titleEn: 'Simple & Clean Resume',
    descriptionAr: 'سيرة ذاتية كلاسيكية ومباشرة خالية من التعقيد والتكلف تناسب التقديم السريع.',
    descriptionEn: 'Generate a straightforward, clean, and distraction-free resume ready for instant submissions.',
    group: 'cv',
    cvCategory: 'creation',
    outputType: 'text',
    outputBadges: ['CV', 'قالب'],
    params: [
      { key: 'field', flag: 'field', isPositional: true, type: 'string', required: true, labelAr: 'مجال العمل أو الوظيفة', labelEn: 'Field or Role', hintAr: 'مثال: خدمة عملاء، مبيعات، محاسبة', hintEn: 'e.g. Customer Support, Sales, Accounting' },
      resolveParam('experience'),
      resolveParam('language')
    ],
    example: '/simple cv "خدمة عملاء" --experience=entry --language=ar',
    qualityRules: [
      'وضوح فائق وتدرج زمني عكسي مباشر للمناصب السابقة',
      'لغة مباشرة وغير متكلفة تركز على المهارات الأساسية',
      'سهولة قراءة فائقة لا تتجاوز صفحة واحدة'
    ],
    keywords: ['سيرة بسيطة', 'simple cv', 'قالب مباشر', 'resume'],
    createdAt: '2026-09-14T10:03:00.000Z',
    updatedAt: '2026-09-14T10:03:00.000Z',
    usageCount: 45,
    isFavorite: false
  },
  {
    id: 'cv-create-005',
    code: '/student cv',
    titleAr: 'سيرة ذاتية للطلاب والمتدربين',
    titleEn: 'Student & Internship Resume',
    descriptionAr: 'بناء سيرة ذاتية للطلاب تركز على التفوق الدراسي، مشاريع التخرج، والأنشطة اللامنهجية.',
    descriptionEn: 'Create a student resume focusing on coursework, academic projects, leadership, and extracurriculars.',
    group: 'cv',
    cvCategory: 'creation',
    outputType: 'text',
    outputBadges: ['CV', 'قالب'],
    params: [
      { key: 'major', flag: 'major', isPositional: true, type: 'string', required: true, labelAr: 'التخصص الدراسي', labelEn: 'Academic Major', hintAr: 'مثال: هندسة صناعية، إدارة أعمال', hintEn: 'e.g. Industrial Engineering, Business Admin' },
      { key: 'target_internship', flag: 'target_internship', isPositional: false, type: 'string', required: false, labelAr: 'فرصة التدريب المستهدفة', labelEn: 'Target Internship', hintAr: 'مثال: تدريب صيفي في بنك', hintEn: 'e.g. Summer Banking Internship' },
      { key: 'activities', flag: 'activities', isPositional: false, type: 'string', required: false, labelAr: 'الأندية أو الأنشطة', labelEn: 'Clubs / Activities', hintAr: 'أبرز الأنشطة والنوادي الطلابية', hintEn: 'Key clubs or volunteering' },
      resolveParam('language')
    ],
    example: '/student cv "إدارة أعمال" --target_internship="تدريب مصرفي صيفي" --activities="رئيس النادي المالي" --language=ar',
    qualityRules: [
      'وضع قسم التعليم والمعدل الأكاديمي في أعلى السيرة',
      'إبراز المقررات الدراسية ذات الصلة والمهارات التقنية',
      'تحويل المشاريع الجامعية إلى خبرات عملية ذات مخرجات ملموسة'
    ],
    keywords: ['طالب', 'تدريب تعاوني', 'تدريب صيفي', 'student cv', 'internship resume', 'جامعة'],
    createdAt: '2026-09-14T10:04:00.000Z',
    updatedAt: '2026-09-14T10:04:00.000Z',
    usageCount: 78,
    isFavorite: false
  },
  {
    id: 'cv-create-006',
    code: '/fresh graduate cv',
    titleAr: 'سيرة ذاتية لحديثي التخرج',
    titleEn: 'Entry-Level / Fresh Graduate CV',
    descriptionAr: 'تصميم سيرة ذاتية مقنعة للخريجين الجدد تبرز مشروع التخرج، المهارات، والتطوع لتعويض قلة الخبرة.',
    descriptionEn: 'Craft a compelling entry-level resume highlighting graduation projects, skills, and certifications.',
    group: 'cv',
    cvCategory: 'creation',
    outputType: 'text',
    outputBadges: ['CV', 'ATS'],
    params: [
      { key: 'degree', flag: 'degree', isPositional: true, type: 'string', required: true, labelAr: 'الشهادة والتخصص', labelEn: 'Degree & Major', hintAr: 'مثال: بكالوريوس علوم حاسب', hintEn: 'e.g. BS in Computer Science' },
      { key: 'target_role', flag: 'target_role', isPositional: false, type: 'string', required: true, labelAr: 'الوظيفة المستهدفة', labelEn: 'Target Entry Role', hintAr: 'مثال: مطور واجهات مبتدئ', hintEn: 'e.g. Junior Front-End Developer' },
      { key: 'projects', flag: 'projects', isPositional: false, type: 'text', required: false, labelAr: 'مشروع التخرج أو مشاريع مهمة', labelEn: 'Key Projects', hintAr: 'وصف مختصر لمشروع التخرج والتقنيات المستخدمة', hintEn: 'Brief summary of graduation project' },
      resolveParam('language')
    ],
    example: '/fresh graduate cv "بكالوريوس علوم حاسب" --target_role="مطور واجهات مبتدئ" --language=ar',
    qualityRules: [
      'صياغة ملخص مهني طموح يربط بين الخلفية الأكاديمية والشغف بالوظيفة',
      'تفصيل مشاريع التخرج وكأنها بيئة عمل حقيقية مع ذكر الأدوات',
      'إبراز الشهادات الاحترافية والدورات التدريبية الحديثة'
    ],
    keywords: ['حديث تخرج', 'خريج جديد', 'fresh graduate', 'entry level', 'junior', 'cv'],
    createdAt: '2026-09-14T10:05:00.000Z',
    updatedAt: '2026-09-14T10:05:00.000Z',
    usageCount: 110,
    isFavorite: true
  },
  {
    id: 'cv-create-007',
    code: '/executive cv',
    titleAr: 'سيرة ذاتية تنفيذية وقيادية',
    titleEn: 'Executive & Leadership C-Level Resume',
    descriptionAr: 'صياغة سيرة ذاتية للمناصب الإدارية العليا تركز على الرؤية الاستراتيجية، قيادة الفرق، وحجم الأثر المالي.',
    descriptionEn: 'Tailor a high-impact executive resume emphasizing leadership, strategic initiatives, P&L, and ROI.',
    group: 'cv',
    cvCategory: 'creation',
    outputType: 'text',
    outputBadges: ['CV', 'PDF'],
    params: [
      { key: 'role', flag: 'role', isPositional: true, type: 'string', required: true, labelAr: 'المنصب القيادي المستهدف', labelEn: 'Executive Role', hintAr: 'مثال: الرئيس التنفيذي للعمليات COO، مدير عام', hintEn: 'e.g. Chief Operating Officer, General Manager' },
      { key: 'scope', flag: 'scope', isPositional: false, type: 'string', required: false, labelAr: 'نطاق القيادة والميزانيات', labelEn: 'Leadership Scope', hintAr: 'مثال: قيادة 120 موظف، ميزانية 50 مليون ريال', hintEn: 'e.g. 150 team members, $20M budget' },
      resolveParam('industry'),
      resolveParam('language')
    ],
    example: '/executive cv "رئيس تنفيذي للعمليات COO" --scope="قيادة 80 موظف، ميزانية 40 مليون" --industry=logistics --language=ar',
    qualityRules: [
      'التركيز على قيادة التحول والنتائج المالية ونمو الإيرادات وإدارة المخاطر',
      'أسلوب كتابة تنفيذي واثق وموجز يعبر عن الحكمة والقيادة',
      'إبراز مجالس الإدارة واللجان والتكريمات الكبرى'
    ],
    keywords: ['executive cv', 'قيادي', 'c-level', 'مدير تنفيذي', 'leadership resume', 'ceo', 'coo'],
    createdAt: '2026-09-14T10:06:00.000Z',
    updatedAt: '2026-09-14T10:06:00.000Z',
    usageCount: 52,
    isFavorite: false
  },
  {
    id: 'cv-create-008',
    code: '/career change cv',
    titleAr: 'سيرة ذاتية لتغيير المسار المهني',
    titleEn: 'Career Change / Transition Resume',
    descriptionAr: 'إعادة هيكلة السيرة لإبراز المهارات القابلة للتحويل والخبرات المشتركة عند الانتقال لمجال جديد.',
    descriptionEn: 'Restructure your resume to spotlight transferable skills when shifting to a new industry or domain.',
    group: 'cv',
    cvCategory: 'creation',
    outputType: 'text',
    outputBadges: ['CV', 'ATS'],
    params: [
      { key: 'current_field', flag: 'current_field', isPositional: true, type: 'string', required: true, labelAr: 'المجال السابق / الحالي', labelEn: 'Current Field', hintAr: 'مثال: تدريس اللغة الإنجليزية', hintEn: 'e.g. High School Teacher' },
      { key: 'target_field', flag: 'target_field', isPositional: false, type: 'string', required: true, labelAr: 'المجال الجديد المستهدف', labelEn: 'Target Field', hintAr: 'مثال: إدارة المنتجات، تجربة المستخدم UX', hintEn: 'e.g. Product Management' },
      { key: 'upskilling', flag: 'upskilling', isPositional: false, type: 'string', required: false, labelAr: 'الدورات والشهادات الجديدة', labelEn: 'Recent Courses / Certs', hintAr: 'مثال: شهادة Google PM، معسكر تدريبي', hintEn: 'e.g. Google PM Cert, Bootcamp' },
      resolveParam('language')
    ],
    example: '/career change cv "تدريس لغة إنجليزية" --target_field="إدارة تجربة العملاء CX" --upskilling="شهادة إدارة تجربة المستفيد" --language=ar',
    qualityRules: [
      'استخدام هيكل هجين (Hybrid) أو وظيفي يبرز المهارات المكتسبة أولاً',
      'صياغة الإنجازات السابقة بمصطلحات تتوافق مع المجال الجديد',
      'توضيح دافع التحول والشغف والجهود الذاتية في التعلم'
    ],
    keywords: ['تغيير مسار', 'تحول مهني', 'career shift', 'transition cv', 'transferable skills'],
    createdAt: '2026-09-14T10:07:00.000Z',
    updatedAt: '2026-09-14T10:07:00.000Z',
    usageCount: 68,
    isFavorite: false
  },
  {
    id: 'cv-create-009',
    code: '/freelancer cv',
    titleAr: 'سيرة ذاتية للمستقلين والمتعاقدين',
    titleEn: 'Freelance & Contract Resume',
    descriptionAr: 'تنظيم وتجميع أعمال ومشاريع العمل الحر في صيغة سيرة ذاتية احترافية مقنعة للعملاء والشركات.',
    descriptionEn: 'Consolidate diverse freelance projects and client engagements into a structured, credible resume.',
    group: 'cv',
    cvCategory: 'creation',
    outputType: 'text',
    outputBadges: ['CV', 'قالب'],
    params: [
      { key: 'specialty', flag: 'specialty', isPositional: true, type: 'string', required: true, labelAr: 'التخصص المستقل', labelEn: 'Freelance Specialty', hintAr: 'مثال: كاتب محتوى تسويقي، مطور Full Stack', hintEn: 'e.g. Copywriter, Full Stack Developer' },
      { key: 'client_types', flag: 'client_types', isPositional: false, type: 'string', required: false, labelAr: 'نوعية العملاء والمشاريع', labelEn: 'Client Types', hintAr: 'مثال: متاجر إلكترونية، شركات ناشئة في الخليج', hintEn: 'e.g. E-commerce stores, GCC Startups' },
      resolveParam('language')
    ],
    example: '/freelancer cv "كاتب إعلاني ومحتوى تسويقي" --client_types="متاجر إلكترونية وعلامات أزياء" --language=ar',
    qualityRules: [
      'تجميع المشاريع الصغيرة تحت مظلة استشارات أو خدمات مستقلة منظمة',
      'ذكر أسماء عملاء بارزين ومقاييس نجاح الحملات أو المشاريع المنفذة',
      'إرفاق روابط حية لأهم الأعمال والبورتفوليو'
    ],
    keywords: ['عمل حر', 'مستقل', 'freelancer', 'contractor resume', 'portfolio cv'],
    createdAt: '2026-09-14T10:08:00.000Z',
    updatedAt: '2026-09-14T10:08:00.000Z',
    usageCount: 40,
    isFavorite: false
  },
  {
    id: 'cv-create-010',
    code: '/academic cv',
    titleAr: 'سيرة ذاتية أكاديمية وبحثية (Curriculum Vitae)',
    titleEn: 'Academic & Research CV (Full Vitae)',
    descriptionAr: 'كتابة سيرة أكاديمية شاملة ومفصلة للأبحاث المنشورة، التدريس، المنح، والمؤتمرات.',
    descriptionEn: 'Build a comprehensive academic CV detailing publications, research grants, teaching, and conference talks.',
    group: 'cv',
    cvCategory: 'creation',
    outputType: 'text',
    outputBadges: ['CV', 'قالب'],
    params: [
      { key: 'field', flag: 'field', isPositional: true, type: 'string', required: true, labelAr: 'المجال الأكاديمي والدرجة', labelEn: 'Academic Discipline', hintAr: 'مثال: أستاذ مساعد في الذكاء الاصطناعي', hintEn: 'e.g. Assistant Professor in AI' },
      { key: 'target_institution', flag: 'target_institution', isPositional: false, type: 'string', required: false, labelAr: 'الجامعة أو مركز الأبحاث', labelEn: 'Target University / Institute', hintAr: 'مثال: التقديم على منحة فولبرايت أو وظيفة تدريس', hintEn: 'e.g. Postdoc application or Faculty role' },
      resolveParam('language')
    ],
    example: '/academic cv "دكتوراه في الذكاء الاصطناعي وعلوم البيانات" --target_institution="جامعة الملك فهد للبترول والمعادن" --language=ar',
    qualityRules: [
      'توثيق الأبحاث والأوراق العلمية وفق أسلوب التوثيق المعتمد (APA/IEEE)',
      'تخصيص أقسام للمنح البحثية، الإشراف الأكاديمي، والمؤتمرات الدولية',
      'عدم التقيد بصفحة واحدة وتغطية المسار الأكاديمي كاملاً'
    ],
    keywords: ['أكاديمي', 'جامعة', 'بحث علمي', 'academic cv', 'curriculum vitae', 'phd', 'research'],
    createdAt: '2026-09-14T10:09:00.000Z',
    updatedAt: '2026-09-14T10:09:00.000Z',
    usageCount: 35,
    isFavorite: false
  }
];
