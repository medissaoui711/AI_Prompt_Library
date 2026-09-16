import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const CV_ADVANCED_PROMPTS: CommandPrompt[] = [
  {
    id: 'cv-adv-091',
    code: '/executive bio',
    titleAr: 'صياغة النبذة التنفيذية لكبار القادة والمدراء (Executive Bio)',
    titleEn: 'C-Suite & VP Executive One-Page Biography',
    descriptionAr: 'كتابة نبذة تنفيذية رفيعة المستوى تسلط الضوء على الحوكمة، قيادة التغيير، الإيرادات المليونية، والتحول المؤسسي.',
    descriptionEn: 'High-level one-page executive biography emphasizing P&L leadership, scale, board advisory, and M&A.',
    group: 'cv',
    cvCategory: 'advanced',
    outputType: 'text',
    outputBadges: ['نص'],
    params: [
      { key: 'executive_name_role', flag: 'executive_name_role', isPositional: true, type: 'string', required: true, labelAr: 'الاسم والمسمى التنفيذي', labelEn: 'Executive Name & Role', hintAr: 'مثال: م. فهد بن عبدالعزيز، الرئيس التنفيذي للعمليات COO', hintEn: 'e.g. Chief Operating Officer (COO)' },
      { key: 'career_highlights', flag: 'career_highlights', isPositional: false, type: 'text', required: true, labelAr: 'أبرز إنجازات الإيرادات والتحول', labelEn: 'Scale & Revenue Highlights', hintAr: 'مثال: قيادة عمليات بقيمة 500 مليون، إدارة 400 موظف، عمليات استحواذ', hintEn: 'e.g. Managed $100M P&L, 300+ headcount, 3 acquisitions' },
      resolveParam('language')
    ],
    example: '/executive bio "م. سلطان التميمي، نائب الرئيس الأول لتقنية المعلومات والرقمنة" --career_highlights="قيادة التحول الرقمي لمصرف وطني، إدارة ميزانية 120 مليون ريال، تأسيس أول بنك رقمي متكامل" --language=ar',
    qualityRules: [
      'أسلوب كتابة تنفيذي فاخر (C-Suite Tone) يعكس الثقل والخبرة والحكمة المؤسسية',
      'التركيز على قيادة الأرباح والخسائر (P&L)، إدارة مجالس الإدارات، وحوكمة الشركات',
      'توفير نسخة بصيغة السرد القصصي القيادي ونسخة بنقاط الإنجاز الاستراتيجي'
    ],
    keywords: ['نبذة تنفيذية', 'executive bio', 'c suite', 'رئيس تنفيذي', 'قيادة عليا', 'ceo bio'],
    createdAt: '2026-09-14T11:31:00.000Z',
    updatedAt: '2026-09-14T11:31:00.000Z',
    usageCount: 78,
    isFavorite: true
  },
  {
    id: 'cv-adv-092',
    code: '/board resume',
    titleAr: 'سيرة ذاتية لعضوية مجالس الإدارة واللجان (Board CV)',
    titleEn: 'Board of Directors & Advisory CV Formatter',
    descriptionAr: 'صياغة سيرة متخصصة للترشح لعضوية مجالس الإدارات ولجان المراجعة والحوكمة والاستثمار.',
    descriptionEn: 'Tailor a board-level CV highlighting corporate governance, regulatory oversight, ESG, and fiduciary duty.',
    group: 'cv',
    cvCategory: 'advanced',
    outputType: 'text',
    outputBadges: ['CV', 'PDF'],
    params: [
      { key: 'board_seat_type', flag: 'board_seat_type', isPositional: true, type: 'string', required: true, labelAr: 'نوع العضوية المستهدفة (مجلس إدارة، لجنة مراجعة، لجنة ترشيحات، مستشار مجلس)', labelEn: 'Board Seat Target', hintAr: 'مثال: عضو مجلس إدارة مستقل، عضو لجنة الاستثمار والمخاطر', hintEn: 'e.g. Independent Board Director, Audit Committee Member' },
      { key: 'expertise_pillars', flag: 'expertise_pillars', isPositional: false, type: 'string', required: true, labelAr: 'أعمدة الخبرة (حوكمة، مالية، أمن سيبراني، تقنية)', labelEn: 'Core Governance Pillars', hintAr: 'مثال: الحوكمة المؤسسية، إدارة المخاطر، الاندماج والاستحواذ', hintEn: 'e.g. Corporate Governance, Risk Management, ESG' },
      resolveParam('language')
    ],
    example: '/board resume "عضو مجلس إدارة مستقل / عضو لجنة المراجعة" --expertise_pillars="الامتثال المالي والمصرفي، المعايير المحاسبية الدولية، التحول الرقمي" --language=ar',
    qualityRules: [
      'إبراز أركان الحوكمة والمسؤولية الائتمانية والخبرة في توجيه وتحدي الإدارة التنفيذية بحكمة',
      'توثيق العضويات واللجان السابقة والحالية والشهادات المعتمدة لأعضاء المجالس (مثل معهد المديرين Mudara)',
      'تنسيق راقٍ من صفحتين بأسلوب وقور ومباشر'
    ],
    keywords: ['مجلس إدارة', 'board cv', 'عضوية مجلس', 'حوكمة شركات', 'لجنة مراجعة', 'مستشار إدارة'],
    createdAt: '2026-09-14T11:32:00.000Z',
    updatedAt: '2026-09-14T11:32:00.000Z',
    usageCount: 45,
    isFavorite: false
  },
  {
    id: 'cv-adv-093',
    code: '/contractor cv',
    titleAr: 'سيرة ذاتية للخبراء المستقلين والمستشارين (Contractor CV)',
    titleEn: 'Independent Consultant & Fractional Executive CV',
    descriptionAr: 'هيكلة سيرة استشارية تركز على المشاريع الاستشارية قصيرة وطويلة الأجل، القيمة اللحظية، والتدخل السريع.',
    descriptionEn: 'Format for fractional leaders and contractors showcasing delivered deliverables and client ROI.',
    group: 'cv',
    cvCategory: 'advanced',
    outputType: 'text',
    outputBadges: ['CV', 'ATS'],
    params: [
      { key: 'consulting_niche', flag: 'consulting_niche', isPositional: true, type: 'string', required: true, labelAr: 'المجال الاستشاري أو التخصص الجزئي', labelEn: 'Consulting Niche / Fractional Role', hintAr: 'مثال: Fractional CMO, مستشار سلاسل إمداد تعاقدي', hintEn: 'e.g. Fractional CTO, Interim HR Director' },
      { key: 'delivered_projects', flag: 'delivered_projects', isPositional: false, type: 'text', required: true, labelAr: 'أبرز المشاريع الاستشارية المنجزة', labelEn: 'Client Engagements & Outcomes', hintAr: 'أهم المنظمات والنتائج التي حققتها كاستشاري مستقل', hintEn: 'Key client outcomes delivered' },
      resolveParam('language')
    ],
    example: '/contractor cv "مدير مالي جزئي Fractional CFO للشركات الناشئة" --delivered_projects="إغلاق جولات استثمارية Series A، وإعادة هيكلة التدفقات النقدية لـ 6 شركات" --language=ar',
    qualityRules: [
      'تنظيم الخبرات بصيغة "المشاريع الاستشارية الرئيسية" بدلاً من التسلسل الوظيفي التقليدي',
      'إبراز العائد على الاستثمار الفوري (Client ROI) والقدرة على التدخل المباشر دون الحاجة لفترة تدريب',
      'ذكر منهجيات العمل الاستشاري المعتمدة ونماذج التعاقد المتاحة'
    ],
    keywords: ['مستشار مستقل', 'contractor cv', 'fractional executive', 'استشارات', 'مشاريع تعاقدية'],
    createdAt: '2026-09-14T11:33:00.000Z',
    updatedAt: '2026-09-14T11:33:00.000Z',
    usageCount: 52,
    isFavorite: false
  },
  {
    id: 'cv-adv-094',
    code: '/academic cv',
    titleAr: 'سيرة ذاتية أكاديمية للجامعات والباحثين (Academic CV)',
    titleEn: 'Academic, Faculty & Scientific Research CV',
    descriptionAr: 'صياغة سيرة أكاديمية شاملة وموسعة تشمل الأبحاث المنشورة، المنح، التدريس، والإشراف العلمي.',
    descriptionEn: 'Comprehensive multi-page academic CV detailing peer-reviewed papers, grants, teaching, and fellowships.',
    group: 'cv',
    cvCategory: 'advanced',
    outputType: 'text',
    outputBadges: ['CV', 'PDF'],
    params: [
      { key: 'academic_rank_field', flag: 'academic_rank_field', isPositional: true, type: 'string', required: true, labelAr: 'الرتبة الأكاديمية والتخصص العلمي', labelEn: 'Academic Rank & Discipline', hintAr: 'مثال: أستاذ مشارك في علوم الحاسب والذكاء الاصطناعي', hintEn: 'e.g. Associate Professor in Mechanical Engineering' },
      { key: 'research_interests', flag: 'research_interests', isPositional: false, type: 'string', required: true, labelAr: 'الاهتمامات البحثية وأبرز المنشورات', labelEn: 'Research & Publications', hintAr: 'أبرز المجلات العلمية المفهرسة (Scopus / ISI / Nature)', hintEn: 'Key indexed publications and grants' },
      resolveParam('language')
    ],
    example: '/academic cv "أستاذ مساعد في الهندسة الطبية الحيوية" --research_interests="معالجة الإشارات الطبية الحيوية، 12 ورقة علمية في Scopus، منحة بحثية من KACST" --language=ar',
    qualityRules: [
      'ترتيب معايير السيرة الأكاديمية: التعليم، الخبرة التدريسية، المنشورات المحكمة، المنح والجوائز، المؤتمرات، خدمة الجامعة والمجتمع',
      'توثيق الأوراق العلمية وفق أسلوب التوثيق المعتمد (APA أو IEEE) بدقة تامة',
      'إدراج مقاييس التأثير العلمي (H-Index, Citations, Scopus Author ID)'
    ],
    keywords: ['سيرة أكاديمية', 'academic cv', 'أستاذ جامعة', 'أبحاث علمية', 'scopus', 'منح بحثية'],
    createdAt: '2026-09-14T11:34:00.000Z',
    updatedAt: '2026-09-14T11:34:00.000Z',
    usageCount: 60,
    isFavorite: false
  },
  {
    id: 'cv-adv-095',
    code: '/freelance to fulltime',
    titleAr: 'تحويل خبرات العمل الحر إلى سيرة ذاتية لوظيفة بدوام كامل',
    titleEn: 'Freelance to Full-Time Corporate Resume Translator',
    descriptionAr: 'إعادة صياغة أعمالك الحرة والمشاريع المستقلة لتظهر ككيان مهني متماسك وخبرة مؤسسية مكتملة الأركان.',
    descriptionEn: 'Translate fragmented freelance gigs into structured, enterprise-ready consulting and leadership experience.',
    group: 'cv',
    cvCategory: 'advanced',
    outputType: 'mixed',
    outputBadges: ['CV', 'تحليل'],
    params: [
      { key: 'freelance_work', flag: 'freelance_work', isPositional: true, type: 'text', required: true, labelAr: 'طبيعة وتفاصيل الأعمال الحرة المنفذة', labelEn: 'Freelance Gigs & Clients', hintAr: 'ما الخدمات التي قدمتها ومن أبرز عملائك وما النتائج؟', hintEn: 'Describe freelance projects and client types' },
      { key: 'target_corporate_role', flag: 'target_corporate_role', isPositional: false, type: 'string', required: true, labelAr: 'الوظيفة المستهدفة بدوام كامل', labelEn: 'Target Full-Time Role', hintAr: 'المسمى الوظيفي المستهدف في الشركات', hintEn: 'Target in-house corporate role' },
      resolveParam('language')
    ],
    example: '/freelance to fulltime [عملت لمدة 3 سنوات كمصمم مستقل لـ 20 متجر إلكتروني وقمت ببرمجة واجهات وإدارة حملات] --target_corporate_role="مدير تجربة مستخدم أول Lead UX Designer" --language=ar',
    qualityRules: [
      'تأطير سنوات العمل الحر تحت مظلة مسمى احترافي موحد (مثل: استشاري مستقل / مؤسس استوديو إبداعي)',
      'إبراز مهارات التواصل مع أصحاب المصلحة، وإدارة الميزانيات، والالتزام الصارم بالمواعيد النهائية',
      'الإجابة الاستباقية على تخوفات مدراء التوظيف بشأن الالتزام ببيئة العمل المؤسسية والفرق المشتركة'
    ],
    keywords: ['عمل حر', 'freelance to fulltime', 'دوام كامل', 'مشاريع مستقلة', 'تحويل الخبرة'],
    createdAt: '2026-09-14T11:35:00.000Z',
    updatedAt: '2026-09-14T11:35:00.000Z',
    usageCount: 68,
    isFavorite: false
  },
  {
    id: 'cv-adv-096',
    code: '/veteran transition cv',
    titleAr: 'تحويل الخبرات العسكرية والأمنية إلى القطاع المدني',
    titleEn: 'Military & Security to Civilian Career Transition CV',
    descriptionAr: 'ترجمة المصطلحات والرتب العسكرية والأمنية إلى لغة قطاع الأعمال (إدارة عمليات، لوجستيات، أمن وسلامة).',
    descriptionEn: 'Translate military rank, defense operations, and tactical command into civilian business leadership language.',
    group: 'cv',
    cvCategory: 'advanced',
    outputType: 'text',
    outputBadges: ['CV', 'ATS'],
    params: [
      { key: 'military_background', flag: 'military_background', isPositional: true, type: 'text', required: true, labelAr: 'الرتبة والمهام العسكرية / الأمنية السابقة', labelEn: 'Military / Security Background', hintAr: 'مثال: قائد سرية إمداد ونقل، إدارة غرف عمليات أمنية', hintEn: 'Describe military responsibilities and logistics' },
      { key: 'target_civilian_role', flag: 'target_civilian_role', isPositional: false, type: 'string', required: true, labelAr: 'الوظيفة المدنية المستهدفة', labelEn: 'Target Civilian Role', hintAr: 'مثال: مدير عمليات لوجستية، مدير الأمن والسلامة والصحة المهنية HSE', hintEn: 'e.g. Operations Director, Head of Corporate Security' },
      resolveParam('language')
    ],
    example: '/veteran transition cv "ضابط سابق في إدارة التموين وسلاسل الإمداد العسكرية" --target_civilian_role="مدير مستودعات وسلاسل إمداد إقليمي" --language=ar',
    qualityRules: [
      'استبدال المصطلحات العسكرية المتخصصة بمصطلحات إدارية وتجارية عالمية مفهومة لمدراء الموارد البشرية',
      'إبراز سمات القيادة الحازمة، إدارة المخاطر تحت الضغط، الانضباط المؤسسي، وحماية الأصول والأرواح',
      'تأكيد الاعتمادات والشهادات المهنية المدنية المقابلة'
    ],
    keywords: ['عسكري لمدني', 'veteran cv', 'انتقال وظيفي', 'أمن وسلامة', 'إدارة عمليات'],
    createdAt: '2026-09-14T11:36:00.000Z',
    updatedAt: '2026-09-14T11:36:00.000Z',
    usageCount: 42,
    isFavorite: false
  },
  {
    id: 'cv-adv-097',
    code: '/salary report',
    titleAr: 'تحليل ونطاق الرواتب للسوق والوظيفة (Salary Benchmark)',
    titleEn: 'Market Compensation & Salary Benchmark Report',
    descriptionAr: 'تقرير تحليلي يقدر متوسط ونطاق الرواتب لمسماك الوظيفي وخبرتك في السوق المستهدف مع تفصيل البدلات.',
    descriptionEn: 'Generate an empirical salary benchmark range by seniority, location, sector, and allowances.',
    group: 'cv',
    cvCategory: 'advanced',
    outputType: 'analysis',
    outputBadges: ['تحليل'],
    params: [
      { key: 'role_location', flag: 'role_location', isPositional: true, type: 'string', required: true, labelAr: 'المسمى الوظيفي والدولة / المدينة', labelEn: 'Role & Location', hintAr: 'مثال: مدير منتج أول في الرياض، السعودية', hintEn: 'e.g. Senior Product Manager in Riyadh, KSA' },
      resolveParam('experience'),
      resolveParam('language')
    ],
    example: '/salary report "مدير هندسة البرمجيات Engineering Manager في الرياض" --experience=senior --language=ar',
    qualityRules: [
      'تقديم النطاق عبر 3 مستويات: الحد الأدنى (25th percentile)، المتوسط (Median 50th)، والحد الأعلى (75th-90th percentile)',
      'تفكيك هيكل الراتب النموذجي (الأساسي، بدل السكن، بدل النقل، البونص السنوي، والتأمين الصحي)',
      'تحديد العوامل المؤثرة التي ترفع القيمة التفاوضية (مثل الشهادات التخصصية وحجم الشركة)'
    ],
    keywords: ['تقرير رواتب', 'salary report', 'متوسط الراتب', 'رواتب السعودية', 'مؤشرات الأجور'],
    createdAt: '2026-09-14T11:37:00.000Z',
    updatedAt: '2026-09-14T11:37:00.000Z',
    usageCount: 130,
    isFavorite: true
  },
  {
    id: 'cv-adv-098',
    code: '/promotion pitch',
    titleAr: 'خطة وعرض طلب الترقية وزيادة الراتب (Internal Promotion Pitch)',
    titleEn: 'Internal Promotion & Pay Raise Business Case Pitch',
    descriptionAr: 'إعداد ملف ووثيقة مقنعة بالأدلة والأرقام تقدمها لمديرك للمطالبة بالترقية للمستوى التالي وزيادة الراتب.',
    descriptionEn: 'Build a bulletproof business case and presentation script to pitch your manager for a promotion.',
    group: 'cv',
    cvCategory: 'advanced',
    outputType: 'mixed',
    outputBadges: ['نص', 'خطة'],
    params: [
      { key: 'current_to_target', flag: 'current_to_target', isPositional: true, type: 'string', required: true, labelAr: 'المسمى الحالي والمسمى المستهدف للترقية', labelEn: 'Current Role to Target Role', hintAr: 'مثال: من مهندس أول إلى قائد فريق برمجيات Lead Engineer', hintEn: 'e.g. From Senior Dev to Lead Engineer' },
      { key: 'accomplishments', flag: 'accomplishments', isPositional: false, type: 'text', required: true, labelAr: 'أبرز إنجازاتك خلال العام الأخير', labelEn: 'Recent Value Add & Achievements', hintAr: 'ما المبادرات الإضافية والنتائج التي حققتها فوق مسؤولياتك الأساسية؟', hintEn: 'Projects delivered above expectations' },
      resolveParam('language')
    ],
    example: '/promotion pitch "من مدير حسابات إلى مدير مبيعات إقليمي" --accomplishments="تجاوز المستهدف البيعي بنسبة 140% وتدريب 4 موظفين جدد وفتح 3 حسابات استراتيجية" --language=ar',
    qualityRules: [
      'هيكلة الوثيقة في 4 أقسام: الأثر المالي والتشغيلي المحقق، المسؤوليات الإضافية الممارسة بالفعل، خطة قيادة المنصب الجديد، ومقارنة الرواتب',
      'سيناريو حواري متكامل للاجتماع بالمدير المباشر بأسلوب إيجابي وشراكة مهنية',
      'خطة بديلة وإجراءات متابعة في حال تأجيل الترقية للمراجعة السنوية القادمة'
    ],
    keywords: ['طلب ترقية', 'promotion pitch', 'زيادة راتب', 'ترقية وظيفية', 'تقييم أداء'],
    createdAt: '2026-09-14T11:38:00.000Z',
    updatedAt: '2026-09-14T11:38:00.000Z',
    usageCount: 85,
    isFavorite: false
  },
  {
    id: 'cv-adv-099',
    code: '/resignation letter',
    titleAr: 'كتابة خطاب الاستقالة الرسمي الراقي (Resignation Letter)',
    titleEn: 'Diplomatic & Professional Resignation Letter',
    descriptionAr: 'صياغة خطاب استقالة رسمي ولبق يحافظ على العلاقة الإيجابية مع الشركة ويوثق فترة الإشعار وتاريخ المغادرة.',
    descriptionEn: 'Compose a graceful, legally sound resignation letter ensuring seamless handovers and goodwill.',
    group: 'cv',
    cvCategory: 'advanced',
    outputType: 'text',
    outputBadges: ['نص'],
    params: [
      { key: 'role_company', flag: 'role_company', isPositional: true, type: 'string', required: true, labelAr: 'المسمى الوظيفي واسم الشركة', labelEn: 'Role & Company', hintAr: 'مثال: أخصائي تسويق في شركة نادك', hintEn: 'e.g. Marketing Lead at Nadec' },
      { key: 'last_day', flag: 'last_day', isPositional: false, type: 'string', required: true, labelAr: 'آخر يوم عمل (فترة الإشعار المتفق عليها)', labelEn: 'Last Working Day', hintAr: 'مثال: 30 نوفمبر 2026 (إشعار مدته شهران)', hintEn: 'e.g. November 30, 2026' },
      resolveParam('language')
    ],
    example: '/resignation letter "مدير مشاريع أول في شركة الاتصالات السعودية STC" --last_day="31 ديسمبر 2026" --language=ar',
    qualityRules: [
      'نبرة راقية ومحترمة تشكر المنظمة على الفرصة والخبرات المكتسبة دون أي عتاب أو انتقاد',
      'تحديد صريح وتام لآخر يوم عمل والالتزام الكامل بتسليم المهام والملفات للموظف البديل بسلاسة',
      'توفير نسختين: نسخة قياسية مباشرة ونسخة دافئة للمدير المباشر'
    ],
    keywords: ['خطاب استقالة', 'resignation letter', 'إنهاء عقد', 'فترة إشعار', 'تسليم مهام'],
    createdAt: '2026-09-14T11:39:00.000Z',
    updatedAt: '2026-09-14T11:39:00.000Z',
    usageCount: 95,
    isFavorite: true
  },
  {
    id: 'cv-adv-100',
    code: '/onboarding 90 day plan',
    titleAr: 'خطة أول 90 يوم في الوظيفة الجديدة (30-60-90 Day Plan)',
    titleEn: 'Executive 30-60-90 Day Success Action Plan',
    descriptionAr: 'خطة استراتيجية محكمة لأول 3 أشهر في عملك الجديد لترك انطباع استثنائي، تحقيق مكاسب سريعة، وبناء الثقة.',
    descriptionEn: 'Blueprint your first 90 days to master the role, score quick wins, build alliances, and establish leadership.',
    group: 'cv',
    cvCategory: 'advanced',
    outputType: 'plan',
    outputBadges: ['خطة'],
    params: [
      { key: 'new_role_company', flag: 'new_role_company', isPositional: true, type: 'string', required: true, labelAr: 'المسمى الوظيفي والشركة الجديدة', labelEn: 'New Role & Company', hintAr: 'مثال: رئيس قسم العمليات في شركة جاهز', hintEn: 'e.g. Head of Operations at Jahez' },
      { key: 'primary_goal', flag: 'primary_goal', isPositional: false, type: 'string', required: true, labelAr: 'الهدف الاستراتيجي الأول المطلوب تحقيقه', labelEn: 'Primary 90-Day Goal', hintAr: 'مثال: رفع كفاءة التوصيل 15% وتحسين رضا المناديب', hintEn: 'e.g. Improve fleet logistics efficiency by 15%' },
      resolveParam('language')
    ],
    example: '/onboarding 90 day plan "مدير هندسة البرمجيات في تطبيق رقمي" --primary_goal="تقليص زمن نشر التحديثات وتسريع أداء الفريق البرمجي" --language=ar',
    qualityRules: [
      'الأيام 1-30 (التعلم والاستيعاب): فهم بيئة العمل، الاجتماع بأصحاب المصلحة، وتحليل التحديات الحالية دون تسرع في فرض التغييرات',
      'الأيام 31-60 (المواءمة والتقييم): تحديد أولويات التحسين، إطلاق مكاسب سريعة (Quick Wins)، وتأسيس المقاييس',
      'الأيام 61-90 (التنفيذ والقيادة): قيادة المشاريع التحويلية الكبرى وتقديم تقرير الإنجاز الأول للإدارة العليا'
    ],
    keywords: ['خطة 90 يوم', '30 60 90 plan', 'مباشرة عمل', 'onboarding plan', 'نجاح وظيفي'],
    createdAt: '2026-09-14T11:40:00.000Z',
    updatedAt: '2026-09-14T11:40:00.000Z',
    usageCount: 120,
    isFavorite: true
  }
];
