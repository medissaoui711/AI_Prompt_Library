import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const CV_COVERLETTERS_PROMPTS: CommandPrompt[] = [
  {
    id: 'cv-cov-061',
    code: '/cover letter',
    titleAr: 'كتابة رسالة تقديم وظيفية مخصصة (Cover Letter)',
    titleEn: 'Tailored High-Impact Cover Letter Writer',
    descriptionAr: 'صياغة خطاب تقديم وظيفي مقنع ومخصص للشركة يشرح سبب كونك المرشح المثالي بأسلوب واثق.',
    descriptionEn: 'Write a persuasive, tailored cover letter aligning your experience directly to company goals.',
    group: 'cv',
    cvCategory: 'coverletters',
    outputType: 'text',
    outputBadges: ['نص'],
    params: [
      { key: 'job_company', flag: 'job_company', isPositional: true, type: 'string', required: true, labelAr: 'المسمى الوظيفي واسم الشركة', labelEn: 'Target Role & Company', hintAr: 'مثال: مهندس حوسبة سحابية في شركة أرامكو السعودية', hintEn: 'e.g. Cloud Engineer at Aramco' },
      { key: 'key_qualifications', flag: 'key_qualifications', isPositional: false, type: 'text', required: true, labelAr: 'أبرز مؤهلاتك المرتبطة بالوظيفة', labelEn: 'Key Qualifications', hintAr: 'ما أهم 2-3 إنجازات تؤهلك لهذه الوظيفة تحديدًا؟', hintEn: 'Your top 2-3 relevant qualifications' },
      resolveParam('tone'),
      resolveParam('language')
    ],
    example: '/cover letter "أخصائي استقطاب مواهب أول في بنك الراجحي" --key_qualifications="خبرة 5 سنوات في استقطاب الكفاءات التقنية وخفض تكلفة التوظيف 20%" --tone=professional --language=ar',
    qualityRules: [
      'هيكل من 3-4 فقرات: مقدمة خطافية، برهان الإنجاز والقيمة، التوافق مع ثقافة الشركة، وخاتمة للدعوة للمقابلة',
      'تجنب تكرار ما في السيرة الذاتية بحذافيره والتركيز على قصة نجاح وحل المشكلات',
      'صياغة مخصصة خالية من العبارات الجاهزة المبتذلة (مثل: يسرني ويشرفني أن أتقدم...)'
    ],
    keywords: ['رسالة تقديم', 'خطاب تقديم', 'cover letter', 'تقديم وظيفة', 'cover letter writer'],
    createdAt: '2026-09-14T11:01:00.000Z',
    updatedAt: '2026-09-14T11:01:00.000Z',
    usageCount: 135,
    isFavorite: true
  },
  {
    id: 'cv-cov-062',
    code: '/application email',
    titleAr: 'كتابة إيميل إرسال السيرة الذاتية (Cold/Direct Email)',
    titleEn: 'Job Application Direct Email Formatter',
    descriptionAr: 'صياغة بريد إلكتروني رسمي ومباشر لإرفاق السيرة عند التقديم المباشر على إيميل التوظيف.',
    descriptionEn: 'Compose a concise, professional job application email when sending your CV directly via email.',
    group: 'cv',
    cvCategory: 'coverletters',
    outputType: 'text',
    outputBadges: ['نص'],
    params: [
      { key: 'recipient_role', flag: 'recipient_role', isPositional: true, type: 'string', required: true, labelAr: 'المسمى الوظيفي والرقم المرجعي', labelEn: 'Role & Job Reference ID', hintAr: 'مثال: محاسب قانوني - كود الوظيفة ACC-2026', hintEn: 'e.g. Senior Accountant - Ref #ACC-2026' },
      { key: 'company_name', flag: 'company_name', isPositional: false, type: 'string', required: false, labelAr: 'اسم الشركة أو جهة التوظيف', labelEn: 'Company Name', hintAr: 'اسم المنظمة المستهدفة', hintEn: 'Target company name' },
      resolveParam('language')
    ],
    example: '/application email "أخصائي علاقات مستثمرين - كود الوظيفة IR-04" --company_name="مجموعة تداول السعودية" --language=ar',
    qualityRules: [
      'عنوان إيميل معياري احترافي (Subject Line) يتضمن الاسم والمسمى والرقم المرجعي',
      'نص إيميل موجز ومركز (3-5 أسطر) يسهل قراءته على مسؤولي التوظيف المزدحمين',
      'إشارة واضحة للملفات المرفقة وتأكيد الجاهزية للمقابلة'
    ],
    keywords: ['إيميل تقديم', 'application email', 'بريد إلكتروني', 'إرسال السيرة', 'cold email'],
    createdAt: '2026-09-14T11:02:00.000Z',
    updatedAt: '2026-09-14T11:02:00.000Z',
    usageCount: 90,
    isFavorite: false
  },
  {
    id: 'cv-cov-063',
    code: '/job inquiry',
    titleAr: 'رسالة استفسار عن وظائف غير معلنة (Unadvertised Roles)',
    titleEn: 'Proactive Career & Value Inquiry Letter',
    descriptionAr: 'كتابة رسالة مبادرة استباقية للتواصل مع مدراء الإدارات لعرض قيمتك ومهاراتك في شركات تطمح للانضمام لها.',
    descriptionEn: 'Proactively reach out to hiring managers expressing interest and articulating strategic value.',
    group: 'cv',
    cvCategory: 'coverletters',
    outputType: 'text',
    outputBadges: ['نص'],
    params: [
      { key: 'target_dept', flag: 'target_dept', isPositional: true, type: 'string', required: true, labelAr: 'القسم والشركة المستهدفة', labelEn: 'Department & Company', hintAr: 'مثال: قسم الأمن السيبراني في بنك رقمي', hintEn: 'e.g. Cybersecurity Dept at a Digital Bank' },
      { key: 'value_you_bring', flag: 'value_you_bring', isPositional: false, type: 'string', required: true, labelAr: 'القيمة أو الفكرة المبتكرة التي تقدمها', labelEn: 'Strategic Value Offer', hintAr: 'كيف يمكنك مساعدة هذا القسم تحديدًا في تحقيق أهدافه؟', hintEn: 'How you can solve specific pains for this team' },
      resolveParam('language')
    ],
    example: '/job inquiry "إدارة النمو والتسويق في شركة تابي Tabby" --value_you_bring="خبرة في خفض تكلفة اكتساب العملاء بنسبة 30% في قطاع الدفع الآجل" --language=ar',
    qualityRules: [
      'البدء بإشادة واعية وحقيقية بإنجاز أو منتج أطلقته الشركة مؤخرًا',
      'طرح حلول وفرص نمو عملية يمكن للمرشح قيادتها في القسم',
      'طلب مكالمة استكشافية قصيرة مدتها 15 دقيقة دون إلحاح أو ضغط'
    ],
    keywords: ['استفسار وظيفي', 'job inquiry', 'تواصل استباقي', 'وظائف غير معلنة', 'cold outreach'],
    createdAt: '2026-09-14T11:03:00.000Z',
    updatedAt: '2026-09-14T11:03:00.000Z',
    usageCount: 55,
    isFavorite: false
  },
  {
    id: 'cv-cov-064',
    code: '/follow up email',
    titleAr: 'إيميل متابعة حالة الطلب والتقديم (Follow-Up Email)',
    titleEn: 'Polite Application Status Follow-Up',
    descriptionAr: 'صياغة رسالة متابعة مهنية ولطيفة بعد مرور أسبوع إلى أسبوعين على التقديم لتجديد الاهتمام.',
    descriptionEn: 'Send a professional follow-up inquiry after submitting your application without sounding pushy.',
    group: 'cv',
    cvCategory: 'coverletters',
    outputType: 'text',
    outputBadges: ['نص'],
    params: [
      { key: 'role_applied', flag: 'role_applied', isPositional: true, type: 'string', required: true, labelAr: 'الوظيفة وتاريخ التقديم', labelEn: 'Role & Date Applied', hintAr: 'مثال: أخصائي ذكاء اصطناعي، تم التقديم قبل 10 أيام', hintEn: 'e.g. AI Specialist, applied 10 days ago' },
      resolveParam('language')
    ],
    example: '/follow up email "مهندس بيانات في شركة عِلم، تقدمت بتاريخ 2 سبتمبر" --language=ar',
    qualityRules: [
      'نبرة محترمة، إيجابية، وواثقة تعبر عن استمرار الحماس للوظيفة والمنظمة',
      'إعادة تذكير بأبرز مؤهل يجعل المرشح مناسبًا للدور في سطر واحد',
      'إتاحة فرصة لتزويد الفريق بأي بيانات أو نماذج أعمال إضافية'
    ],
    keywords: ['متابعة تقديم', 'follow up', 'إيميل متابعة', 'حالة الطلب', 'تذكير بالطلب'],
    createdAt: '2026-09-14T11:04:00.000Z',
    updatedAt: '2026-09-14T11:04:00.000Z',
    usageCount: 78,
    isFavorite: false
  },
  {
    id: 'cv-cov-065',
    code: '/interview thank you',
    titleAr: 'رسالة شكر وتقدير بعد المقابلة الشخصية (Thank-You Note)',
    titleEn: 'Post-Interview Thank You & Value Reinforcement',
    descriptionAr: 'صياغة رسالة شكر ترسل خلال 24 ساعة من المقابلة لتعزيز الانطباع الإيجابي وتأكيد النقاط التي نوقشت.',
    descriptionEn: 'Send a strategic post-interview thank you email reinforcing key discussion points and enthusiasm.',
    group: 'cv',
    cvCategory: 'coverletters',
    outputType: 'text',
    outputBadges: ['نص'],
    params: [
      { key: 'interviewer_role', flag: 'interviewer_role', isPositional: true, type: 'string', required: true, labelAr: 'اسم المقابِل والمسمى والشركة', labelEn: 'Interviewer Name & Role', hintAr: 'مثال: أ. عبد الله، رئيس قطاع التقنية في شركة لوسيد', hintEn: 'e.g. Abdullah, VP of Engineering at Lucid' },
      { key: 'discussion_point', flag: 'discussion_point', isPositional: false, type: 'string', required: false, labelAr: 'نقطة أو تحدي مميز نوقش في المقابلة', labelEn: 'Specific Discussion Highlight', hintAr: 'مثال: النقاش حول تحديات التوسع السحابي وأتمتة الاختبارات', hintEn: 'Specific challenge or topic discussed' },
      resolveParam('language')
    ],
    example: '/interview thank you "أ. سارة، مديرة الموارد البشرية في شركة سال اللوجستية" --discussion_point="حديثنا حول خطط التوسع في المطارات الإقليمية وأتمتة الشحن" --language=ar',
    qualityRules: [
      'الإرسال في غضون 24 ساعة من انتهاء المقابلة',
      'الإشارة المباشرة لموضوع مخصص دار في المقابلة لإظهار الاستماع والاهتمام العميق',
      'تأكيد الثقة في القدرة على إنجاز الأهداف التي طرحها فريق العمل'
    ],
    keywords: ['شكر بعد المقابلة', 'thank you note', 'رسالة شكر', 'post interview', 'انطباع إيجابي'],
    createdAt: '2026-09-14T11:05:00.000Z',
    updatedAt: '2026-09-14T11:05:00.000Z',
    usageCount: 85,
    isFavorite: true
  },
  {
    id: 'cv-cov-066',
    code: '/linkedin outreach',
    titleAr: 'رسالة تواصل مع مسؤولي التوظيف على لينكدإن (InMail / Message)',
    titleEn: 'Direct Recruiter & Hiring Manager LinkedIn Message',
    descriptionAr: 'كتابة رسالة تواصل قصيرة واحترافية (أقل من 300 حرف لدعوة الاتصال أو رسالة InMail) تفتح حوارًا وظيفيًا.',
    descriptionEn: 'Craft short, high-response rate LinkedIn connection notes and InMails to recruiters.',
    group: 'cv',
    cvCategory: 'coverletters',
    outputType: 'text',
    outputBadges: ['نص'],
    params: [
      { key: 'target_role', flag: 'target_role', isPositional: true, type: 'string', required: true, labelAr: 'الوظيفة المعلنة واسم الشركة', labelEn: 'Target Position & Company', hintAr: 'مثال: وظيفة أخصائي تسويق في شركة كريم Careem', hintEn: 'e.g. Marketing Specialist at Careem' },
      { key: 'recruiter_name', flag: 'recruiter_name', isPositional: false, type: 'string', required: false, labelAr: 'اسم مسؤول التوظيف', labelEn: 'Recruiter Name', hintAr: 'اسم الشخص المستهدف', hintEn: 'Target contact name' },
      resolveParam('language')
    ],
    example: '/linkedin outreach "وظيفة مدير حسابات رئيسي في شركة مايكروسوفت" --recruiter_name="أ. خالد" --language=ar',
    qualityRules: [
      'توفير صيغتين: صيغة دعوة اتصال قصيرة (تحت 300 حرف)، وصيغة رسالة InMail مفصلة',
      'الدخول في صلب الموضوع فورًا وتوضيح سبب التواصل والخبرة المتطابقة',
      'طلب سهل وغير معقد (مثال: هل يمكنني مشاركة سيرتي الذاتية للاطلاع؟)'
    ],
    keywords: ['linkedin outreach', 'رسالة تواصل', 'inmail', 'تواصل مع التوظيف', 'recruiter message'],
    createdAt: '2026-09-14T11:06:00.000Z',
    updatedAt: '2026-09-14T11:06:00.000Z',
    usageCount: 110,
    isFavorite: true
  },
  {
    id: 'cv-cov-067',
    code: '/referral request',
    titleAr: 'طلب توصية وظيفية من زميل أو معارف (Referral Request)',
    titleEn: 'Internal Referral Request Message',
    descriptionAr: 'صياغة رسالة مهنية لطلب إحالة داخلية من موظف يعمل في الشركة المستهدفة بأسلوب لبق وغير محرج.',
    descriptionEn: 'Request an internal job referral from professional connections and alumni tactfully.',
    group: 'cv',
    cvCategory: 'coverletters',
    outputType: 'text',
    outputBadges: ['نص'],
    params: [
      { key: 'connection_type', flag: 'connection_type', isPositional: true, type: 'string', required: true, labelAr: 'طبيعة العلاقة (زميل سابق، خريج نفس الجامعة، معرفة مهنية)', labelEn: 'Relationship Type', hintAr: 'مثال: خريج من نفس الجامعة، زميل سابق في شركة سابقة', hintEn: 'e.g. University Alumni, Ex-colleague' },
      { key: 'job_link_role', flag: 'job_link_role', isPositional: false, type: 'string', required: true, labelAr: 'الوظيفة المراد التوصية عليها', labelEn: 'Target Role / Requisition', hintAr: 'المسمى الوظيفي ورقم الوظيفة في شركته', hintEn: 'Target role title or job link' },
      resolveParam('language')
    ],
    example: '/referral request "خريج من نفس الجامعة يعمل حاليًا في شركة PwC" --job_link_role="مستشار أول في التحول الرقمي - كود 9844" --language=ar',
    qualityRules: [
      'تسهيل المهمة على الموظف عبر إرفاق ملخص سريع من سطرين يوضح سبب ملاءمتك للوظيفة',
      'تجهيز فقرة جاهزة يمكن للموظف نسخها وإرسالها لمسؤول التوظيف مباشرة (Forwardable Blurb)',
      'إظهار التقدير والاحترام الكامل لوقته ومجهوده دون أي إحراج'
    ],
    keywords: ['طلب توصية', 'تزكية وظيفية', 'referral request', 'إحالة داخلية', 'networking referral'],
    createdAt: '2026-09-14T11:07:00.000Z',
    updatedAt: '2026-09-14T11:07:00.000Z',
    usageCount: 70,
    isFavorite: false
  },
  {
    id: 'cv-cov-068',
    code: '/salary email',
    titleAr: 'صياغة إيميل التفاوض على الراتب والعرض المالي',
    titleEn: 'Counter-Offer & Salary Negotiation Email',
    descriptionAr: 'كتابة رسالة تفاوض راقية ومدروسة للمطالبة برفع الراتب أو المزايا بعد تلقي العرض الوظيفي.',
    descriptionEn: 'Compose a tactful, data-grounded salary counter-offer email to maximize your compensation package.',
    group: 'cv',
    cvCategory: 'coverletters',
    outputType: 'text',
    outputBadges: ['نص'],
    params: [
      { key: 'offer_details', flag: 'offer_details', isPositional: true, type: 'string', required: true, labelAr: 'تفاصيل العرض الحالي والرقم المستهدف', labelEn: 'Current Offer vs Target', hintAr: 'مثال: العرض الحالي 22 ألف، والهدف 26 ألف بناءً على متوسط السوق', hintEn: 'e.g. Current offer 20k, requesting 24k based on market' },
      { key: 'justification', flag: 'justification', isPositional: false, type: 'string', required: true, labelAr: 'مبررات القيمة والخبرة الإضافية', labelEn: 'Value Justification', hintAr: 'ما المؤهلات الإضافية أو الأثر الفوري الذي يبرر الزيادة؟', hintEn: 'Why you deserve this adjustment' },
      resolveParam('language')
    ],
    example: '/salary email "عرض وظيفي براتب إجمالي 23,000 ريال والهدف 27,000 ريال" --justification="حصولي على شهادة PMP وقيادة مشاريع سابقة رفعت أرباح الشركة السابقة 20%" --language=ar',
    qualityRules: [
      'بدء الرسالة بامتنان وحماس شديد للانضمام للشركة',
      'الاستناد لأرقام السوق ومعايير الصناعة ومبررات القيمة بدلاً من الاحتياجات الشخصية',
      'إبداء المرونة حول المزايا الإضافية (مثل: أيام عمل عن بعد، بونص سنوي، تأمين مميز) إن تعذر تعديل الراتب الأساسي'
    ],
    keywords: ['تفاوض راتب', 'salary negotiation', 'عرض وظيفي', 'counter offer', 'بدلات ومزايا'],
    createdAt: '2026-09-14T11:08:00.000Z',
    updatedAt: '2026-09-14T11:08:00.000Z',
    usageCount: 92,
    isFavorite: true
  },
  {
    id: 'cv-cov-069',
    code: '/job rejection reply',
    titleAr: 'الرد الاحترافي على رسالة الرفض الوظيفي',
    titleEn: 'Graceful Rejection Reply & Future Pipeline',
    descriptionAr: 'صياغة رد راقٍ يبني علاقة طويلة الأمد مع مسؤول التوظيف بعد تلقي الاعتذار عن عدم القبول.',
    descriptionEn: 'Respond professionally to a rejection notice to leave a lasting impression and stay in their candidate pipeline.',
    group: 'cv',
    cvCategory: 'coverletters',
    outputType: 'text',
    outputBadges: ['نص'],
    params: [
      { key: 'interviewer_company', flag: 'interviewer_company', isPositional: true, type: 'string', required: true, labelAr: 'اسم الشركة أو مسؤول التوظيف', labelEn: 'Company & Recruiter', hintAr: 'مثال: فريق استقطاب المواهب في شركة علم', hintEn: 'e.g. Talent Team at Elm' },
      resolveParam('language')
    ],
    example: '/job rejection reply "فريق التوظيف في شركة نادك" --language=ar',
    qualityRules: [
      'شكر الفريق على وقتهم وجهدهم أثناء مسار المقابلات',
      'التعبير عن الإعجاب المستمر بالشركة والترحيب بالتواصل في الفرص والمشاريع المستقبلية',
      'طلب إضافة مسؤولي التوظيف على LinkedIn بلباقة لتعزيز شبكة العلاقات'
    ],
    keywords: ['رد على الرفض', 'rejection reply', 'علاقات مهنية', 'recruiter relationship', 'لباقة'],
    createdAt: '2026-09-14T11:09:00.000Z',
    updatedAt: '2026-09-14T11:09:00.000Z',
    usageCount: 45,
    isFavorite: false
  },
  {
    id: 'cv-cov-070',
    code: '/offer acceptance',
    titleAr: 'رسالة قبول العرض الوظيفي وتأكيد تاريخ البدء',
    titleEn: 'Official Job Offer Acceptance Letter',
    descriptionAr: 'صياغة خطاب رسمي لقبول العرض الوظيفي، وتأكيد شروط العمل المتفق عليها، وتحديد موعد المباشرة.',
    descriptionEn: 'Formally accept an employment offer, confirm start date and agreed-upon package terms.',
    group: 'cv',
    cvCategory: 'coverletters',
    outputType: 'text',
    outputBadges: ['نص'],
    params: [
      { key: 'role_company', flag: 'role_company', isPositional: true, type: 'string', required: true, labelAr: 'المسمى الوظيفي واسم الشركة', labelEn: 'Job Role & Company', hintAr: 'مثال: مدير المبيعات الإقليمي في شركة جاهز', hintEn: 'e.g. Regional Sales Director at Jahez' },
      { key: 'start_date', flag: 'start_date', isPositional: false, type: 'string', required: true, labelAr: 'تاريخ المباشرة المتفق عليه', labelEn: 'Agreed Start Date', hintAr: 'مثال: 1 أكتوبر 2026', hintEn: 'e.g. October 1st, 2026' },
      resolveParam('language')
    ],
    example: '/offer acceptance "مدير قطاع التقنية في شركة لولو المالية" --start_date="1 نوفمبر 2026" --language=ar',
    qualityRules: [
      'تأكيد صريح ومتحمس لقبول العرض الوظيفي والمنصب',
      'توثيق ملخص سريع للشروط الرئيسية (المسمى، تاريخ المباشرة، حزمة المزايا)',
      'الاستفسار عن أي أوراق أو متطلبات لازمة قبل اليوم الأول للمباشرة'
    ],
    keywords: ['قبول العرض', 'offer acceptance', 'مباشرة العمل', 'عقد عمل', 'خطاب قبول'],
    createdAt: '2026-09-14T11:10:00.000Z',
    updatedAt: '2026-09-14T11:10:00.000Z',
    usageCount: 65,
    isFavorite: false
  }
];
