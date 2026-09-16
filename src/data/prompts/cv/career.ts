import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const CV_CAREER_PROMPTS: CommandPrompt[] = [
  {
    id: 'cv-car-071',
    code: '/interview prep',
    titleAr: 'دليل وخطة التحضير الشامل للمقابلة الوظيفية',
    titleEn: 'Comprehensive Interview Master Preparation Plan',
    descriptionAr: 'خطة إعداد استراتيجية قبل المقابلة تغطي أبحاث الشركة، الأسئلة المتوقعة، والأسئلة الذكية لطرحها على المقابِل.',
    descriptionEn: 'Build a rigorous prep dossier analyzing company culture, role challenges, and strategic questions to ask.',
    group: 'cv',
    cvCategory: 'career',
    outputType: 'plan',
    outputBadges: ['خطة'],
    params: [
      { key: 'role_company', flag: 'role_company', isPositional: true, type: 'string', required: true, labelAr: 'المسمى الوظيفي واسم الشركة', labelEn: 'Role & Target Company', hintAr: 'مثال: مدير منتج في البنك الأهلي السعودي', hintEn: 'e.g. Senior PM at SNB Bank' },
      { key: 'industry_focus', flag: 'industry_focus', isPositional: false, type: 'string', required: false, labelAr: 'التركيز أو التحدي الرئيسي', labelEn: 'Key Focus / Industry', hintAr: 'مثال: الخدمات المصرفية الرقمية، تجربة المستخدم', hintEn: 'e.g. Digital Banking, Open Banking' },
      resolveParam('language')
    ],
    example: '/interview prep "مدير مشاريع التحول الرقمي في هيئة الحكومة الرقمية DGA" --industry_focus="منصات الخدمات الحكومية الموحدة" --language=ar',
    qualityRules: [
      'تجهيز ملخص لأهم إنجازات وتحديات الشركة المعلنة في الأخبار والتقارير',
      'توقع 10 أسئلة محورية من المحتمل جدًا طرحها في هذه الوظيفة بالتحديد',
      'تجهيز 5 أسئلة ذكية عميقة يطرحها المرشح في نهاية المقابلة لإظهار وعيه الاستراتيجي'
    ],
    keywords: ['تحضير مقابلة', 'interview prep', 'خطة مقابلة', 'أسئلة مقابلة', 'تجهيز وظيفي'],
    createdAt: '2026-09-14T11:11:00.000Z',
    updatedAt: '2026-09-14T11:11:00.000Z',
    usageCount: 140,
    isFavorite: true
  },
  {
    id: 'cv-car-072',
    code: '/mock interview',
    titleAr: 'محاكاة مقابلة وظيفية تفاعلية (Mock Interview)',
    titleEn: 'Interactive AI Mock Interview Simulator',
    descriptionAr: 'محاكاة حية لمقابلة عمل بدور المقابِل الخبير: يطرح سؤالاً واحداً تلو الآخر ويقيّم إجاباتك ويصححها.',
    descriptionEn: 'Interactive round-by-round interview practice with immediate feedback and answer scoring.',
    group: 'cv',
    cvCategory: 'career',
    outputType: 'mixed',
    outputBadges: ['تدريب'],
    params: [
      { key: 'target_role', flag: 'target_role', isPositional: true, type: 'string', required: true, labelAr: 'المسمى الوظيفي والمستوى', labelEn: 'Job Role & Level', hintAr: 'مثال: مهندس برمجيات أول، قائد فريق مبيعات', hintEn: 'e.g. Senior Software Engineer, Sales Lead' },
      { key: 'interview_type', flag: 'interview_type', isPositional: false, type: 'enum', required: false, defaultValue: 'general_behavioral', labelAr: 'نوع جولة المقابلة', labelEn: 'Round Type', hintAr: 'اختر نوع المقابلة', hintEn: 'Round type', enumValues: [
        { value: 'general_behavioral', labelAr: 'مقابلة سلوكية وموارد بشرية (HR / Behavioral)', labelEn: 'HR / Behavioral' },
        { value: 'hiring_manager', labelAr: 'مقابلة المدير المباشر (Hiring Manager Deep Dive)', labelEn: 'Hiring Manager' },
        { value: 'executive_fit', labelAr: 'مقابلة الملاءمة الثقافية والتنفيذية (Culture Fit)', labelEn: 'Leadership / Fit' }
      ]},
      resolveParam('language')
    ],
    example: '/mock interview "أخصائي أمن سيبراني واستجابة للحوادث" --interview_type=hiring_manager --language=ar',
    qualityRules: [
      'بدء الجلسة فورًا بأول سؤال واقعي وانتظار إجابة المستخدم',
      'تقديم تقييم فوري من 3 نقاط لكل إجابة: ما تميزت فيه، ما ينقصك، وكيف تصيغها بطريقة مثالية',
      'التدرج من الأسئلة الاستكشافية إلى الأسئلة العميقة والسيناريوهات الواقعية المعقدة'
    ],
    keywords: ['محاكاة مقابلة', 'mock interview', 'تدريب مقابلات', 'أسئلة وأجوبة', 'interview practice'],
    createdAt: '2026-09-14T11:12:00.000Z',
    updatedAt: '2026-09-14T11:12:00.000Z',
    usageCount: 155,
    isFavorite: true
  },
  {
    id: 'cv-car-073',
    code: '/behavioral interview',
    titleAr: 'إتقان الأسئلة السلوكية بنموذج STAR المعتمد',
    titleEn: 'STAR Method Behavioral Interview Master',
    descriptionAr: 'صياغة إجابات محكمة للأسئلة السلوكية (مثل: حدثني عن موقف خلافي، أو ضغط عمل) وفق نموذج: الموقف، المهمة، الإجراء، والنتيجة.',
    descriptionEn: 'Formulate powerful behavioral interview responses using the STAR method (Situation, Task, Action, Result).',
    group: 'cv',
    cvCategory: 'career',
    outputType: 'text',
    outputBadges: ['تدريب'],
    params: [
      { key: 'question_or_topic', flag: 'question_or_topic', isPositional: true, type: 'string', required: true, labelAr: 'السؤال السلوكي أو الموقف', labelEn: 'Behavioral Question / Topic', hintAr: 'مثال: موقف واجهت فيه عميلاً غاضباً، أو مشروعاً تعطل جدوله', hintEn: 'e.g. Tell me about a time you handled a difficult stakeholder' },
      { key: 'user_experience', flag: 'user_experience', isPositional: false, type: 'text', required: false, labelAr: 'سياق موقف حقيقي مررت به', labelEn: 'Your Raw Story', hintAr: 'اكتب ما حدث معك باختصار لنحوله إلى إجابة نموذجية', hintEn: 'Brief context of what actually happened' },
      resolveParam('language')
    ],
    example: '/behavioral interview "حدثني عن موقف اضطررت فيه لاتخاذ قرار سريع بمعلومات غير مكتملة" --user_experience="انقطاع مفاجئ في بوابة الدفع ليلة إطلاق عرض الجمعة البيضاء" --language=ar',
    qualityRules: [
      'توزيع الإجابة بدقة: 15% للموقف والمهمة، 60% للإجراءات الفردية التي قمت بها، و25% للنتائج والأرقام المحققة',
      'إبراز سمات التفكير النقدي، والهدوء تحت الضغط، والعمل بروح الفريق',
      'توفير نسخة ملخصة سريعة يمكن حفظها واستحضارها في دقيقتين'
    ],
    keywords: ['star method', 'أسئلة سلوكية', 'behavioral interview', 'نموذج star', 'إجابات نموذجية'],
    createdAt: '2026-09-14T11:13:00.000Z',
    updatedAt: '2026-09-14T11:13:00.000Z',
    usageCount: 110,
    isFavorite: false
  },
  {
    id: 'cv-car-074',
    code: '/technical interview',
    titleAr: 'التحضير للمقابلات التقنية والتخصصية',
    titleEn: 'Technical & Domain-Specific Interview Prep',
    descriptionAr: 'بنك أسئلة تقنية وسيناريوهات تصميم وتحديات معمارية متوقعة لتخصصك مع الإجابات النموذجية.',
    descriptionEn: 'Deep technical questioning, architecture design problems, coding logic, and domain scenarios.',
    group: 'cv',
    cvCategory: 'career',
    outputType: 'mixed',
    outputBadges: ['تدريب'],
    params: [
      { key: 'tech_domain', flag: 'tech_domain', isPositional: true, type: 'string', required: true, labelAr: 'التخصص التقني الدقيق', labelEn: 'Technical Specialty', hintAr: 'مثال: هندسة واجهات React/TypeScript، أمن شبكات Cloud Security', hintEn: 'e.g. System Design, React Performance, SQL DBA' },
      resolveParam('language')
    ],
    example: '/technical interview "تصميم الأنظمة الموزعة System Design لمهندس برمجيات أول" --language=ar',
    qualityRules: [
      'تغطية المستويات الثلاثة: الأساسيات النظرية، حل المشكلات العملية (Troubleshooting)، وتصميم الأنظمة الكبرى (Architecture)',
      'تقديم شرح منظم للمفاضلات (Trade-offs) والتكاليف والأداء لكل حل تقني',
      'توضيح كيفية الإجابة بأسلوب حواري يشرك المقابِل في طريقة تفكيرك'
    ],
    keywords: ['مقابلة تقنية', 'technical interview', 'system design', 'أسئلة برمجية', 'تصميم نظم'],
    createdAt: '2026-09-14T11:14:00.000Z',
    updatedAt: '2026-09-14T11:14:00.000Z',
    usageCount: 88,
    isFavorite: false
  },
  {
    id: 'cv-car-075',
    code: '/interview answers',
    titleAr: 'تجهيز إجابات لأصعب أسئلة المقابلات الكلاسيكية',
    titleEn: 'Tough Classic Interview Questions Mastery',
    descriptionAr: 'صياغة إجابات ذكية ومبتكرة للأسئلة المحيرة (تحدث عن نفسك، ما هي نقاط ضعفك، لماذا نختارك، لماذا تركت عملك السابق).',
    descriptionEn: 'Master answers to "Tell me about yourself", "Greatest weakness", "Why should we hire you", and "Why leave your job".',
    group: 'cv',
    cvCategory: 'career',
    outputType: 'text',
    outputBadges: ['نص', 'تدريب'],
    params: [
      { key: 'classic_question', flag: 'classic_question', isPositional: true, type: 'string', required: true, labelAr: 'السؤال المحير', labelEn: 'Tough Question', hintAr: 'مثال: تحدث عن نفسك، ما هي أكبر نقاط ضعفك؟', hintEn: 'e.g. Tell me about yourself, What is your weakness?' },
      { key: 'your_context', flag: 'your_context', isPositional: false, type: 'string', required: false, labelAr: 'سياقك وخبرتك باختصار', labelEn: 'Your Context', hintAr: 'المسمى الوظيفي والخلفية', hintEn: 'Your background' },
      resolveParam('language')
    ],
    example: '/interview answers "ما هي أكبر نقطة ضعف لديك؟" --your_context="مدير مشاريع لدي ميل للتدقيق المفرط في التفاصيل الصغيرة" --language=ar',
    qualityRules: [
      'تجنب الإجابات المبتذلة والمكشوفة (مثل: نقطة ضعفي أنني أعمل بجد أكثر من اللازم)',
      'صياغة إجابة تركز على الوعي الذاتي (Self-Awareness) والخطوات العملية التي تتخذها للتحسن المستمر',
      'تقديم صياغة مريحة وطبيعية تبعدك عن التوتر وتبني الثقة مع المقابِل'
    ],
    keywords: ['أسئلة صعبة', 'تحدث عن نفسك', 'نقاط الضعف', 'interview answers', 'أجوبة ذكية'],
    createdAt: '2026-09-14T11:15:00.000Z',
    updatedAt: '2026-09-14T11:15:00.000Z',
    usageCount: 130,
    isFavorite: true
  },
  {
    id: 'cv-car-076',
    code: '/salary negotiation',
    titleAr: 'استراتيجية وتكتيكات التفاوض على الراتب',
    titleEn: 'Live Salary & Compensation Negotiation Strategy',
    descriptionAr: 'سيناريوهات وجمل تكتيكية للتعامل مع سؤال "ما هو راتبك المتوقع؟" والتفاوض لرفع قيمة العرض الإجمالي.',
    descriptionEn: 'Master salary negotiation scripts, handling "expected salary" questions, and securing top compensation.',
    group: 'cv',
    cvCategory: 'career',
    outputType: 'mixed',
    outputBadges: ['خطة', 'نص'],
    params: [
      { key: 'current_stage', flag: 'current_stage', isPositional: true, type: 'string', required: true, labelAr: 'المرحلة الحالية (أول مكالمة هاتفية، بعد المقابلة، بعد استلام العرض)', labelEn: 'Negotiation Stage', hintAr: 'مثال: تم سؤالي عن الراتب المتوقع في أول اتصال هاتفي', hintEn: 'e.g. First recruiter phone screen, after receiving formal offer' },
      { key: 'market_data', flag: 'market_data', isPositional: false, type: 'string', required: false, labelAr: 'المسمى ومجال السوق والأرقام المستهدفة', labelEn: 'Target Range & Role', hintAr: 'مثال: مدير تسويق، النطاق المستهدف 25-30 ألف ريال', hintEn: 'e.g. Senior PM, 25k-30k SAR target range' },
      resolveParam('language')
    ],
    example: '/salary negotiation "تم سؤالي عن الراتب المتوقع في المقابلة الأولية عبر الهاتف" --market_data="مهندس أمن سيبراني بخبرة 4 سنوات، النطاق 18-22 ألف" --language=ar',
    qualityRules: [
      'توفير نصوص جاهزة لتأجيل التصريح بالرقم حتى فهم كامل مسؤوليات الدور ونطاقه',
      'تكتيكات الرد عند الإصرار على تحديد رقم: إعطاء نطاق واسع مبني على دراسات السوق',
      'قائمة المزايا غير المالية القابلة للتفاوض (العمل المرن، بدل التعليم، أيام الإجازة، حوافز الأداء)'
    ],
    keywords: ['تفاوض على الراتب', 'salary negotiation', 'راتب متوقع', 'مفاوضات وظيفية', 'عروض العمل'],
    createdAt: '2026-09-14T11:16:00.000Z',
    updatedAt: '2026-09-14T11:16:00.000Z',
    usageCount: 115,
    isFavorite: true
  },
  {
    id: 'cv-car-077',
    code: '/career roadmap',
    titleAr: 'رسم خارطة الطريق والنمو المهني (Career Roadmap)',
    titleEn: '3 to 5-Year Career Progression & Growth Plan',
    descriptionAr: 'بناء خطة استراتيجية من 3 إلى 5 سنوات تحدد المهارات والشهادات والمحطات المطلوبة للوصول للمنصب القيادي المنشود.',
    descriptionEn: 'Design a structured multi-year career path with required certifications, milestones, and leadership competencies.',
    group: 'cv',
    cvCategory: 'career',
    outputType: 'plan',
    outputBadges: ['خطة'],
    params: [
      { key: 'current_role', flag: 'current_role', isPositional: true, type: 'string', required: true, labelAr: 'موقعك المهني الحالي', labelEn: 'Current Role', hintAr: 'مثال: محلل مالي مبتدئ', hintEn: 'e.g. Junior Financial Analyst' },
      { key: 'dream_goal', flag: 'dream_goal', isPositional: false, type: 'string', required: true, labelAr: 'المنصب أو الهدف المستقبلي المنشود', labelEn: 'Target Future Goal', hintAr: 'مثال: المدير المالي التنفيذي CFO خلال 7 سنوات', hintEn: 'e.g. Chief Financial Officer (CFO)' },
      resolveParam('language')
    ],
    example: '/career roadmap "مطور برمجيات متوسط Mid-Level" --dream_goal="الرئيس التقني التنفيذي CTO أو Head of Engineering" --language=ar',
    qualityRules: [
      'تقسيم الخطة إلى مراحل زمنية واضحة: السنة الأولى (تعميق التخصص)، السنوات 2-3 (قيادة الفرق)، السنوات 4-5 (الاستراتيجية والإدارة العليا)',
      'تحديد قائمة الشهادات الاحترافية الأكثر تأثيراً في كل مرحلة',
      'تحديد المهارات غير التقنية (إدارة الميزانيات، التفاوض، التفكير الاستراتيجي) اللازمة للترقي'
    ],
    keywords: ['خارطة طريق', 'مسار مهني', 'career roadmap', 'تطوير مهني', 'ترقية وظيفية'],
    createdAt: '2026-09-14T11:17:00.000Z',
    updatedAt: '2026-09-14T11:17:00.000Z',
    usageCount: 85,
    isFavorite: false
  },
  {
    id: 'cv-car-078',
    code: '/career switch plan',
    titleAr: 'خطة التحول والانتقال إلى مجال مهني جديد',
    titleEn: 'Career Pivot & Transition Action Plan',
    descriptionAr: 'خطة عملية تدريجية للانتقال من مجالك الحالي إلى تخصص جديد مع تقليل المخاطر وحفظ الاستقرار المالي.',
    descriptionEn: 'Step-by-step risk-mitigated plan to shift industries without starting over from square one.',
    group: 'cv',
    cvCategory: 'career',
    outputType: 'plan',
    outputBadges: ['خطة'],
    params: [
      { key: 'from_field', flag: 'from_field', isPositional: true, type: 'string', required: true, labelAr: 'المجال الحالي الذي تريد مغادرته', labelEn: 'Current Field', hintAr: 'مثال: المبيعات الميدانية', hintEn: 'e.g. Field Sales' },
      { key: 'to_field', flag: 'to_field', isPositional: false, type: 'string', required: true, labelAr: 'المجال الجديد المرغوب', labelEn: 'New Target Field', hintAr: 'مثال: تحليل البيانات وذكاء الأعمال Data Analytics', hintEn: 'e.g. Data Analytics' },
      resolveParam('language')
    ],
    example: '/career switch plan "التعليم والتدريس الأكاديمي" --to_field="إدارة المنتجات الرقمية وتصميم التعليم EdTech" --language=ar',
    qualityRules: [
      'خريطة المهارات القابلة للتحويل (Transferable Skills Matrix) التي تمتلكها بالفعل',
      'خطة التعلم المكثف: أهم 3 مهارات يجب اكتسابها ومشاريع تطبيقية تثبتها',
      'استراتيجية بناء شبكة معارف وعلاقات جديدة في المجال المستهدف'
    ],
    keywords: ['تغيير مسار', 'career switch', 'تحول وظيفي', 'مهارات منتقلة', 'خطة انتقال'],
    createdAt: '2026-09-14T11:18:00.000Z',
    updatedAt: '2026-09-14T11:18:00.000Z',
    usageCount: 75,
    isFavorite: false
  },
  {
    id: 'cv-car-079',
    code: '/job search plan',
    titleAr: 'خطة واستراتيجية البحث الفعال عن وظيفة (Job Search Plan)',
    titleEn: 'High-Conversion 30-Day Job Search Strategy',
    descriptionAr: 'خطة أسبوعية منظمة للتقديم النشط، بناء العلاقات، التقديم على الوظائف غير المعلنة، ومتابعة الطلبات.',
    descriptionEn: 'A structured 30-day proactive job hunting system combining direct outreach, networking, and platform applications.',
    group: 'cv',
    cvCategory: 'career',
    outputType: 'plan',
    outputBadges: ['خطة'],
    params: [
      { key: 'target_role_geo', flag: 'target_role_geo', isPositional: true, type: 'string', required: true, labelAr: 'المسمى الوظيفي والدولة / المدينة', labelEn: 'Target Role & Location', hintAr: 'مثال: أخصائي تسويق رقمي في الرياض وجدة', hintEn: 'e.g. Digital Marketing Lead in Riyadh' },
      { key: 'urgency', flag: 'urgency', isPositional: false, type: 'enum', required: false, defaultValue: 'active_1_month', labelAr: 'الجدول الزمني المستهدف', labelEn: 'Timeline Target', hintAr: 'الوتيرة والسرعة المطلوبة', hintEn: 'Target urgency', enumValues: [
        { value: 'active_1_month', labelAr: 'بحث مكثف وسريع (شهر واحد)', labelEn: 'Intensive (1 Month)' },
        { value: 'steady_3_months', labelAr: 'بحث متزن واستكشافي (3 أشهر)', labelEn: 'Steady (3 Months)' }
      ]},
      resolveParam('language')
    ],
    example: '/job search plan "مدير مشاريع تقنية في الرياض" --urgency=active_1_month --language=ar',
    qualityRules: [
      'توزيع الجهد الأسبوعي وفق قاعدة: 40% تواصل مباشر وبناء علاقات، 40% تخصيص وتقديم، 20% تطوير مهارات وبورتفوليو',
      'تحديد أفضل المنصات والمواقع المعتمدة للتوظيف في السوق المحدد (LinkedIn, Bayt, بوابات التوظيف الحكومية والخاصة)',
      'نظام متابعة الطلبات (Application Tracker) لقياس معدل الردود والتحسين المستمر'
    ],
    keywords: ['بحث عن عمل', 'job search plan', 'استراتيجية البحث', 'فرص وظيفية', 'تقديم على وظائف'],
    createdAt: '2026-09-14T11:19:00.000Z',
    updatedAt: '2026-09-14T11:19:00.000Z',
    usageCount: 110,
    isFavorite: true
  },
  {
    id: 'cv-car-080',
    code: '/career gap explanation',
    titleAr: 'صياغة تبرير الانقطاع الوظيفي في المقابلة الشخصية',
    titleEn: 'Interview Career Gap Articulation Script',
    descriptionAr: 'تجهيز رد شفهي ذكي وواثق ومقنع لسؤال المقابلة: "لماذا لم تكن تعمل خلال هذه الفترة؟".',
    descriptionEn: 'Craft a confident, authentic 60-second verbal answer explaining employment breaks smoothly.',
    group: 'cv',
    cvCategory: 'career',
    outputType: 'text',
    outputBadges: ['نص'],
    params: [
      { key: 'gap_context', flag: 'gap_context', isPositional: true, type: 'string', required: true, labelAr: 'طبيعة الانقطاع والظرف الواقعي', labelEn: 'Gap Reason Context', hintAr: 'مثال: تفرغ لمشروع عائلي، أو ظرف صحي تم تجاوزه، أو دراسة', hintEn: 'e.g. Caregiving, Health resolved, Upskilling, Startup liquidation' },
      resolveParam('language')
    ],
    example: '/career gap explanation "تفرغت لمدة 10 أشهر لرعاية أحد الوالدين صحياً والآن جاهز تماماً للالتزام الكامل" --language=ar',
    qualityRules: [
      'الإجابة بوضوح وهدوء في أقل من 60 ثانية دون اعتذار دفاعي مبالغ فيه',
      'التأكيد الفوري على أن الظرف قد انتهى بالكامل وأنك بكامل جاهزيتك وطاقتك للمباشرة',
      'إبراز الأنشطة الإيجابية (القراءة، الدورات، المشاريع المصغرة) التي قمت بها خلال تلك الفترة'
    ],
    keywords: ['تبرير الانقطاع', 'فجوة وظيفية', 'career gap', 'أسئلة المقابلة', 'انقطاع عن العمل'],
    createdAt: '2026-09-14T11:20:00.000Z',
    updatedAt: '2026-09-14T11:20:00.000Z',
    usageCount: 65,
    isFavorite: false
  }
];
