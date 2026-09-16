import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const CV_LINKEDIN_PROMPTS: CommandPrompt[] = [
  {
    id: 'cv-link-051',
    code: '/linkedin headline',
    titleAr: 'صياغة عنوان الحساب على لينكدإن (Headline)',
    titleEn: 'High-Converting LinkedIn Headline Generator',
    descriptionAr: 'كتابة عنوان حساب احترافي وجذاب (220 حرف) يجمع بين المسمى، التخصص، الكلمات المفتاحية، والقيمة المضافة.',
    descriptionEn: 'Create magnetic LinkedIn headlines combining role, keywords, UVP, and industry authority.',
    group: 'cv',
    cvCategory: 'linkedin',
    outputType: 'text',
    outputBadges: ['نص'],
    params: [
      { key: 'role', flag: 'role', isPositional: true, type: 'string', required: true, labelAr: 'المسمى الوظيفي والتخصص', labelEn: 'Role & Specialization', hintAr: 'مثال: مهندس ذكاء اصطناعي، خبير نمو تسويقي', hintEn: 'e.g. AI Engineer, Growth Marketer' },
      { key: 'value_prop', flag: 'value_prop', isPositional: false, type: 'string', required: false, labelAr: 'القيمة أو النتائج التي تقدمها', labelEn: 'Value Proposition', hintAr: 'مثال: مساعدة الشركات على أتمتة العمليات وخفض التكاليف 30%', hintEn: 'e.g. Helping fintechs scale to 1M users' },
      resolveParam('language')
    ],
    example: '/linkedin headline "مدير منتجات رقمية FinTech" --value_prop="بناء تجارب دفع سلسة تزيد تحويلات المستخدمين" --language=ar',
    qualityRules: [
      'توليد 5 صيغ متنوعة: صيغة قائمة على الكلمات المفتاحية، صيغة القيمة المضافة (UVP)، صيغة تنفيذية، صيغة الخبير المتخصص، وصيغة الخريج الطموح',
      'استخدام الفواصل العمودية | أو النقاط • لتحسين القراءة والمظهر',
      'الالتزام بالحد الأقصى 220 حرفًا مع مراعاة الظهور في نتائج بحث مسؤولي التوظيف (LinkedIn SEO)'
    ],
    keywords: ['linkedin headline', 'عنوان لينكدإن', 'لينكد إن', 'بروفايل', 'recruiter search'],
    createdAt: '2026-09-14T10:51:00.000Z',
    updatedAt: '2026-09-14T10:51:00.000Z',
    usageCount: 140,
    isFavorite: true
  },
  {
    id: 'cv-link-052',
    code: '/linkedin about',
    titleAr: 'كتابة نبذة الحساب على لينكدإن (About Section)',
    titleEn: 'Storytelling LinkedIn About / Summary Section',
    descriptionAr: 'صياغة نبذة شخصية مؤثرة بأسلوب السرد القصصي المهني تجمع بين الشغف، الإنجازات، ودعوة للتواصل.',
    descriptionEn: 'Write an engaging narrative summary capturing your career journey, expertise, achievements, and call to action.',
    group: 'cv',
    cvCategory: 'linkedin',
    outputType: 'text',
    outputBadges: ['نص'],
    params: [
      { key: 'career_story', flag: 'career_story', isPositional: true, type: 'text', required: true, labelAr: 'ملخص مسارك وشغفك', labelEn: 'Career Background', hintAr: 'اكتب باختصار كيف بدأت وأين أنت الآن وما الذي يحفزك', hintEn: 'Brief summary of your trajectory and passions' },
      { key: 'top_skills', flag: 'top_skills', isPositional: false, type: 'string', required: false, labelAr: 'أبرز المهارات والاهتمامات', labelEn: 'Top Competencies', hintAr: 'مثال: التحول الرقمي، قيادة الفرق الرشيقة، البيانات الضخمة', hintEn: 'e.g. Agile Leadership, Cloud, FinTech' },
      resolveParam('language')
    ],
    example: '/linkedin about "خبير موارد بشرية واستقطاب كفاءات لأكثر من 8 سنوات في كبرى الشركات السعودية" --top_skills="بناء استراتيجيات التوطين، إدارة المواهب، ثقافة المنظمات" --language=ar',
    qualityRules: [
      'افتتاحية خطافية (Hook) في أول سطرين قبل زر "...see more"',
      'تنظيم المحتوى في فقرات قصيرة ونقاط نقطية مريحة للقراءة على الهواتف',
      'خاتمة واضحة تحدد مجالات التعاون مع البريد الإلكتروني للتواصل المهني'
    ],
    keywords: ['linkedin about', 'نبذة لينكدإن', 'قصة مهنية', 'summary', 'networking'],
    createdAt: '2026-09-14T10:52:00.000Z',
    updatedAt: '2026-09-14T10:52:00.000Z',
    usageCount: 125,
    isFavorite: true
  },
  {
    id: 'cv-link-053',
    code: '/linkedin experience',
    titleAr: 'تنسيق قسم الخبرات على منصة لينكدإن',
    titleEn: 'LinkedIn Experience Section Formatter',
    descriptionAr: 'تكييف نقاط الخبرة لتناسب أسلوب القراءة الرقمي على لينكدإن مع دمج الروابط والمشاريع.',
    descriptionEn: 'Format role descriptions with readable bullet points and rich media recommendations for LinkedIn.',
    group: 'cv',
    cvCategory: 'linkedin',
    outputType: 'text',
    outputBadges: ['نص'],
    params: [
      { key: 'role_company', flag: 'role_company', isPositional: true, type: 'string', required: true, labelAr: 'المسمى والشركة', labelEn: 'Role & Company', hintAr: 'المسمى الوظيفي واسم المنظمة', hintEn: 'Job title and organization' },
      { key: 'achievements', flag: 'achievements', isPositional: false, type: 'text', required: true, labelAr: 'المهام والإنجازات', labelEn: 'Duties & Achievements', hintAr: 'انسخ إنجازاتك في هذا المنصب', hintEn: 'Paste achievements for this role' },
      resolveParam('language')
    ],
    example: '/linkedin experience "أخصائي أمن سيبراني أول في هيئة حكومية" --achievements="تأمين البنية التحتية ضد أكثر من 1000 هجمة، وتطبيق معايير NCA" --language=ar',
    qualityRules: [
      'هيكلة تبدأ بسطر يلخص نطاق الدور (Role Scope)، يليه 3-5 نقاط إنجاز نقطية',
      'قسم فرعي في نهاية الدور يوضح المهارات المستخدمة (Skills Used) لدعم خوارزمية لينكدإن',
      'اقتراح وسائط وروابط رقمية يمكن إرفاقها (Media attachments)'
    ],
    keywords: ['linkedin experience', 'خبرات لينكدإن', 'تنسيق بروفايل', 'مهام وظيفية'],
    createdAt: '2026-09-14T10:53:00.000Z',
    updatedAt: '2026-09-14T10:53:00.000Z',
    usageCount: 75,
    isFavorite: false
  },
  {
    id: 'cv-link-054',
    code: '/linkedin keyword',
    titleAr: 'تحسين الكلمات المفتاحية لملف لينكدإن (LinkedIn SEO)',
    titleEn: 'LinkedIn Profile SEO & Keyword Optimization',
    descriptionAr: 'استراتيجية توزيع الكلمات المفتاحية في العنوان، النبذة، والخبرات للظهور في مقدمة بحث التوظيف.',
    descriptionEn: 'Optimize your LinkedIn profile structure for recruiter Boolean searches and algorithm ranking.',
    group: 'cv',
    cvCategory: 'linkedin',
    outputType: 'mixed',
    outputBadges: ['تحليل', 'نص'],
    params: [
      { key: 'target_job', flag: 'target_job', isPositional: true, type: 'string', required: true, labelAr: 'الوظيفة التي تريد أن يعثر عليك مسؤولو التوظيف من أجلها', labelEn: 'Target Search Role', hintAr: 'مثال: رئيس قسم تجربة العميل Head of CX', hintEn: 'e.g. Lead Cloud Architect, Head of CX' },
      resolveParam('language')
    ],
    example: '/linkedin keyword "رئيس قسم تجربة العميل Head of CX" --language=ar',
    qualityRules: [
      'قائمة بأهم 20 كلمة مفتاحية يبحث بها موظفو الاستقطاب (Recruiter Search Filters)',
      'خريطة توزيع الكلمات: أين توضع في العنوان، الملخص، أسماء المهارات، وعناوين المناصب',
      'نصائح لرفع تقييم قوة الملف إلى "All-Star Profile"'
    ],
    keywords: ['linkedin seo', 'بحث لينكدإن', 'استقطاب', 'recruiter search', 'all star profile'],
    createdAt: '2026-09-14T10:54:00.000Z',
    updatedAt: '2026-09-14T10:54:00.000Z',
    usageCount: 82,
    isFavorite: false
  },
  {
    id: 'cv-link-055',
    code: '/portfolio outline',
    titleAr: 'تخطيط وهيكلة بورتفوليو معرض الأعمال',
    titleEn: 'Portfolio Structure & Information Architecture',
    descriptionAr: 'تخطيط وتوزيع أقسام معرض الأعمال للمصممين والمطورين والكتاب لإبراز أفضل المشاريع.',
    descriptionEn: 'Blueprint a high-converting digital portfolio structure showcasing your best work effectively.',
    group: 'cv',
    cvCategory: 'linkedin',
    outputType: 'text',
    outputBadges: ['قالب'],
    params: [
      { key: 'profession', flag: 'profession', isPositional: true, type: 'string', required: true, labelAr: 'المهنة أو التخصص الإبداعي', labelEn: 'Creative Profession', hintAr: 'مثال: مصمم واجهات وتجربة مستخدم UI/UX، مخرج إبداعي', hintEn: 'e.g. UI/UX Designer, Creative Director' },
      { key: 'platform', flag: 'platform', isPositional: false, type: 'enum', required: false, defaultValue: 'web', labelAr: 'المنصة المستهدفة', labelEn: 'Portfolio Platform', hintAr: 'منصة العرض', hintEn: 'Platform', enumValues: [
        { value: 'web', labelAr: 'موقع ويب شخصي (Personal Website)', labelEn: 'Personal Website' },
        { value: 'behance_dribbble', labelAr: 'Behance / Dribbble', labelEn: 'Behance / Dribbble' },
        { value: 'pdf_deck', labelAr: 'ملف عرض PDF تفاعلي', labelEn: 'Interactive PDF Deck' }
      ]},
      resolveParam('language')
    ],
    example: '/portfolio outline "مصمم واجهات وتجربة مستخدم UI/UX" --platform=web --language=ar',
    qualityRules: [
      'هيكلة تركز على 3-4 دراسات حالة معمقة بدلاً من عشرات المشاريع السطحية',
      'تحديد تسلسل التصفح: البطل، دراسات الحالة، نبذة وخلفية، توصيات العملاء، نموذج التواصل',
      'تضمين إرشادات لتسليط الضوء على دورك في حل المشكلة وليس النتيجة الجمالية فقط'
    ],
    keywords: ['بورتفوليو', 'معرض أعمال', 'portfolio outline', 'ui ux portfolio', 'behance'],
    createdAt: '2026-09-14T10:55:00.000Z',
    updatedAt: '2026-09-14T10:55:00.000Z',
    usageCount: 68,
    isFavorite: false
  },
  {
    id: 'cv-link-056',
    code: '/portfolio case study',
    titleAr: 'كتابة دراسة حالة لمشروع في البورتفوليو',
    titleEn: 'In-Depth Portfolio Project Case Study Writer',
    descriptionAr: 'صياغة دراسة حالة مفصلة لمشروع وفق منهجية: المشكلة، البحث، الحل، التصميم، والنتائج والأثر.',
    descriptionEn: 'Write an end-to-end case study following: Problem, Discovery, Solution, Iteration, and Business Impact.',
    group: 'cv',
    cvCategory: 'linkedin',
    outputType: 'text',
    outputBadges: ['نص', 'قالب'],
    params: [
      { key: 'project_title', flag: 'project_title', isPositional: true, type: 'string', required: true, labelAr: 'عنوان المشروع وطبيعته', labelEn: 'Project Title & Scope', hintAr: 'مثال: إعادة تصميم تطبيق توصيل طلبات لتقليص زمن إتمام الطلب', hintEn: 'e.g. Redesigning grocery checkout flow' },
      { key: 'challenge_outcome', flag: 'challenge_outcome', isPositional: false, type: 'text', required: true, labelAr: 'التحدي والحل والنتيجة', labelEn: 'Challenge & Outcome', hintAr: 'ما التحدي الأكبر؟ وماذا كانت النتيجة المقاسة؟', hintEn: 'Core problem and quantified results' },
      resolveParam('language')
    ],
    example: '/portfolio case study "تطبيق حجز وتأجير سيارات فارهة" --challenge_outcome="انخفاض معدل التحويل بسبب صعوبة التحقق من الهوية، قمنا بتبسيط العملية وحققنا ارتفاع 35% في الحجوزات" --language=ar',
    qualityRules: [
      'تقسيم الدراسة إلى أقسام كلاسيكية معيارية تلائم مدراء التوظيف',
      'إبراز اتخاذ القرارات المبنية على البيانات وردود أفعال المستخدمين',
      'إرفاق عناوين للرسومات والمخططات التوضيحية المقترحة'
    ],
    keywords: ['دراسة حالة', 'case study', 'بورتفوليو', 'ux case study', 'مشروع تصميم'],
    createdAt: '2026-09-14T10:56:00.000Z',
    updatedAt: '2026-09-14T10:56:00.000Z',
    usageCount: 72,
    isFavorite: false
  },
  {
    id: 'cv-link-057',
    code: '/github profile',
    titleAr: 'صياغة الملف التعريفي على GitHub (README)',
    titleEn: 'Developer GitHub Profile README Generator',
    descriptionAr: 'إنشاء ملف README جذاب لمطوري البرمجيات يبرز المشاريع، التقنيات، الإحصائيات، والخبرات.',
    descriptionEn: 'Generate an engaging GitHub profile README with badges, tech stack icons, pinned projects, and stats.',
    group: 'cv',
    cvCategory: 'linkedin',
    outputType: 'text',
    outputBadges: ['نص'],
    params: [
      { key: 'dev_role', flag: 'dev_role', isPositional: true, type: 'string', required: true, labelAr: 'تخصصك البرمجي', labelEn: 'Developer Specialty', hintAr: 'مثال: Full-Stack Developer | Open Source Contributor', hintEn: 'e.g. Cloud Engineer, React & Rust Dev' },
      { key: 'featured_repos', flag: 'featured_repos', isPositional: false, type: 'string', required: false, labelAr: 'أبرز المشاريع أو المستودعات', labelEn: 'Top Repositories', hintAr: 'مثال: مكتبة مفتوحة المصدر، أداة سطر أوامر', hintEn: 'e.g. Open source CLI tool, SaaS app' },
      resolveParam('language')
    ],
    example: '/github profile "مهندس حلول برمجية ومطور Full Stack" --featured_repos="مكتبة لإدارة المدفوعات، محرك بحث مصغر" --language=en',
    qualityRules: [
      'توليد نص بتنسيق Markdown متكامل وجاهز للنسخ في profile README.md',
      'تضمين وسوم الشارات (Badges) للأدوات ولغات البرمجة',
      'تنظيم قسم المشاريع المميزة مع روابط حية وشرح سطر واحد لكل مشروع'
    ],
    keywords: ['github readme', 'بروفايل جيت هاب', 'developer profile', 'open source', 'portfolio'],
    createdAt: '2026-09-14T10:57:00.000Z',
    updatedAt: '2026-09-14T10:57:00.000Z',
    usageCount: 64,
    isFavorite: false
  },
  {
    id: 'cv-link-058',
    code: '/professional bio',
    titleAr: 'كتابة النبذة المهنية للمؤتمرات والمنصات (Short Bio)',
    titleEn: 'Short Professional Bio (Speaker, Author, Executive)',
    descriptionAr: 'صياغة نبذة مهنية مكثفة بثلاثة أطوال (قصيرة جدًا، متوسطة، ومفصلة) للمؤتمرات والمواقع والمقالات.',
    descriptionEn: 'Write multi-length professional biographies tailored for conferences, company websites, and press.',
    group: 'cv',
    cvCategory: 'linkedin',
    outputType: 'text',
    outputBadges: ['نص'],
    params: [
      { key: 'name_title', flag: 'name_title', isPositional: true, type: 'string', required: true, labelAr: 'الاسم والمسمى والمنظمة', labelEn: 'Name, Title & Affiliation', hintAr: 'مثال: سارة الشمري، خبيرة استراتيجيات التسويق الرقمي', hintEn: 'e.g. Sarah Al-Otaibi, Head of AI Strategy' },
      { key: 'key_milestones', flag: 'key_milestones', isPositional: false, type: 'string', required: true, labelAr: 'أبرز الإنجازات والاعتمادات', labelEn: 'Key Milestones & Background', hintAr: 'مثال: متحدثة في مؤتمرات تقنية، إدارة ميزانيات تفوق 20 مليون', hintEn: 'e.g. Keynote speaker, led 50+ transformations' },
      resolveParam('language')
    ],
    example: '/professional bio "د. فيصل القحطاني، مستشار التحول الرقمي والذكاء الاصطناعي" --key_milestones="مستشار لعدة جهات حكومية، كاتب ومؤلف في قيادة الابتكار" --language=ar',
    qualityRules: [
      'توفير 3 صيغ: صيغة قصيرة (50 كلمة)، صيغة متوسطة (100 كلمة)، وصيغة كاملة (200 كلمة)',
      'استخدام ضمير الغائب بصياغة رصينة ومحترفة تناسب منصات المؤتمرات والمجلات',
      'تسليط الضوء على الأثر القيادي والمؤهلات الأكاديمية والمهنية الأبرز'
    ],
    keywords: ['نبذة مهنية', 'professional bio', 'speaker bio', 'تعريف شخصي', 'سيرة ذاتية قصيرة'],
    createdAt: '2026-09-14T10:58:00.000Z',
    updatedAt: '2026-09-14T10:58:00.000Z',
    usageCount: 56,
    isFavorite: false
  },
  {
    id: 'cv-link-059',
    code: '/personal website copy',
    titleAr: 'كتابة محتوى ونصوص الموقع الشخصي المهني',
    titleEn: 'Personal Portfolio Website Copywriting',
    descriptionAr: 'صياغة نصوص ترويجية راقية لكافة صفحات موقعك الشخصي (الصفحة الرئيسية، عني، الخدمات، الاتصال).',
    descriptionEn: 'Generate compelling copy for all sections of your personal professional landing page.',
    group: 'cv',
    cvCategory: 'linkedin',
    outputType: 'text',
    outputBadges: ['نص'],
    params: [
      { key: 'role_identity', flag: 'role_identity', isPositional: true, type: 'string', required: true, labelAr: 'الهوية المهنية والتخصص', labelEn: 'Professional Identity', hintAr: 'مثال: مستشار نمو أعمال ومطور برمجيات مستقل', hintEn: 'e.g. Independent Brand Strategist & Consultant' },
      resolveParam('language')
    ],
    example: '/personal website copy "مستشار استراتيجيات العلامات التجارية وبناء الهوية" --language=ar',
    qualityRules: [
      'عناوين افتتاحية ذات حضور واثق تحفز الزائر على استكشاف الأعمال والتواصل',
      'صياغة قسم الخدمات بطريقة تركز على الحلول والمكاسب التي يجنيها العميل',
      'دعوات واضحة لاتخاذ إجراء (Call to Action) لحجز استشارة أو بدء مشروع'
    ],
    keywords: ['موقع شخصي', 'personal website', 'نصوص موقع', 'branding', 'portfolio copy'],
    createdAt: '2026-09-14T10:59:00.000Z',
    updatedAt: '2026-09-14T10:59:00.000Z',
    usageCount: 42,
    isFavorite: false
  },
  {
    id: 'cv-link-060',
    code: '/portfolio review',
    titleAr: 'مراجعة وتدقيق جودة معرض الأعمال',
    titleEn: 'Portfolio UX, Visual & Content Critique',
    descriptionAr: 'تقييم شامل لبورتفوليو أعمالك من زاوية مدراء التوظيف والعملاء لتحديد نقاط التحسين.',
    descriptionEn: 'Critique portfolio storytelling, project curation, visual proof, and navigation clarity.',
    group: 'cv',
    cvCategory: 'linkedin',
    outputType: 'analysis',
    outputBadges: ['تحليل'],
    params: [
      { key: 'portfolio_details', flag: 'portfolio_details', isPositional: true, type: 'text', required: true, labelAr: 'رابط أو وصف وتفاصيل مشاريع البورتفوليو', labelEn: 'Portfolio Details / URL', hintAr: 'انسخ تفاصيل ونصوص وروابط معرض أعمالك', hintEn: 'Paste portfolio outline, descriptions, or URLs' },
      resolveParam('language')
    ],
    example: '/portfolio review [تفاصيل بورتفوليو مصمم تجربة مستخدم يحتوي على 4 مشاريع] --language=ar',
    qualityRules: [
      'تقييم المعرض وفق 4 معايير: عمق السرد، وضوح دور المرشح، سهولة التصفح، وإثبات النتائج',
      'تقديم نصائح لتنسيق الصور والشاشات وعرض النماذج الأولية بطريقة مقنعة',
      'تحديد المشاريع الضعيفة التي يفضل إزالتها لحماية الانطباع العام'
    ],
    keywords: ['مراجعة بورتفوليو', 'portfolio review', 'تقييم معرض الأعمال', 'ux audit'],
    createdAt: '2026-09-14T11:00:00.000Z',
    updatedAt: '2026-09-14T11:00:00.000Z',
    usageCount: 48,
    isFavorite: false
  }
];
