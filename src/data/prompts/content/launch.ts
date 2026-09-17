import { CommandPrompt } from '../../../types/prompt';
import { CONTENT_COMMON_PARAMS, LAUNCH_CONTENT_RULES, SAFETY_QUALITY_RULES } from './constants';

export const LAUNCH_PROMPTS: CommandPrompt[] = [
  {
    id: 'cnt-lnch-061',
    code: '/app launch',
    titleAr: 'إطلاق تطبيق ذكي جديد (App Launch)',
    titleEn: 'New Mobile App Launch Campaign',
    descriptionAr: 'يكتب إعلان إطلاق لتطبيق جديد يوضح المشكلة التي يحلها، أهم 3 ميزات، ورابط مباشر للتنزيل على المتاجر.',
    descriptionEn: 'Writes exciting mobile app launch copy highlighting core utility, top features, and direct download buttons.',
    group: 'content',
    contentCategory: 'launch',
    outputType: 'text',
    outputBadges: ['إطلاق تطبيق', 'تطبيقات الهاتف'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'text', required: true, labelAr: 'اسم وفكرة التطبيق', labelEn: 'App concept', hintAr: 'تطبيق تنظيم المصروفات العائلية, تطبيق حجز ملاعب...', hintEn: 'Family budget app, court booking app...' },
      CONTENT_COMMON_PARAMS.platform,
      CONTENT_COMMON_PARAMS.audience,
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/app launch تطبيق تنظيم المصروفات العائلية --platform=instagram,x --audience=families --tone=helpful --language=ar',
    qualityRules: [...LAUNCH_CONTENT_RULES, ...SAFETY_QUALITY_RULES],
    keywords: ['إطلاق تطبيق', 'app launch', 'تطبيق جديد', 'تنزيل التطبيق', 'تطبيقات'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 360,
    isFavorite: true
  },
  {
    id: 'cnt-lnch-062',
    code: '/platform launch',
    titleAr: 'إطلاق منصة إلكترونية أو خدمة سحابية',
    titleEn: 'Web Platform & SaaS Launch Announcement',
    descriptionAr: 'يكتب بيان ومنشور إطلاق منصة ويب أو خدمة سحابية (SaaS) موضحًا القيمة المضافة لرواد الأعمال أو المستخدمين.',
    descriptionEn: 'Crafts platform launch announcements showcasing workflow efficiency gains and free trial invitations.',
    group: 'content',
    contentCategory: 'launch',
    outputType: 'text',
    outputBadges: ['إطلاق منصة', 'SaaS'],
    params: [
      { key: 'platform_name', flag: 'platform_name', isPositional: true, type: 'text', required: true, labelAr: 'اسم ووظيفة المنصة', labelEn: 'Platform details', hintAr: 'منصة لإدارة وتوليد أوامر الذكاء الاصطناعي, منصة فوترة...', hintEn: 'AI prompt engineering platform, invoicing SaaS...' },
      CONTENT_COMMON_PARAMS.audience,
      CONTENT_COMMON_PARAMS.cta,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/platform launch منصة لإدارة وتوليد أوامر الذكاء الاصطناعي --audience=creators,developers --cta=free-trial --language=ar',
    qualityRules: [...LAUNCH_CONTENT_RULES, ...SAFETY_QUALITY_RULES],
    keywords: ['إطلاق منصة', 'platform launch', 'منصة ويب', 'saas launch', 'تدشين موقع'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 340,
    isFavorite: true
  },
  {
    id: 'cnt-lnch-063',
    code: '/beta announcement',
    titleAr: 'إعلان النسخة التجريبية الأولى (Beta Testing)',
    titleEn: 'Closed / Public Beta Tester Invitation',
    descriptionAr: 'يدعو المستخدمين والمهتمين لتجربة النسخة التجريبية الأولى وتقديم الملاحظات مع حوافز حصرية للأوائل.',
    descriptionEn: 'Drafts exclusive invitations for beta testers with feedback expectations and early adopter perks.',
    group: 'content',
    contentCategory: 'launch',
    outputType: 'text',
    outputBadges: ['نسخة تجريبية', 'Beta'],
    params: [
      { key: 'project', flag: 'project', isPositional: true, type: 'text', required: true, labelAr: 'اسم المشروع أو التطبيق', labelEn: 'Project name', hintAr: 'أداة تحليل الحسابات, تطبيق تنظيم الوجبات...', hintEn: 'Analytics tool, meal planner app...' },
      { key: 'perks', flag: 'perks', isPositional: false, type: 'string', required: false, labelAr: 'مزايا المشاركين في البيتا', labelEn: 'Beta perks', hintAr: 'اشتراك مجاني لمدة عام, شارة مستخدم مؤسس...', hintEn: '1-year free tier, founding user badge...' },
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/beta announcement أداة تحليل الحسابات --perks=اشتراك مجاني لمدة عام --language=ar',
    qualityRules: [
      'التوضيح الشفاف أن المنتج في مرحلة تجريبية وأن الملاحظات تساهم في تطويره',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['بيتا', 'beta', 'نسخة تجريبية', 'مختبرين', 'early adopters'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 210,
    isFavorite: false
  },
  {
    id: 'cnt-lnch-064',
    code: '/app features post',
    titleAr: 'استعراض ميزات التطبيق على السوشيال ميديا',
    titleEn: 'Social Media App Feature Showcase',
    descriptionAr: 'يكتب سلسلة نقاط مركزة تستعرض مميزات التطبيق وكيف تجعل روتين المستخدم أسهل بضغطة زر.',
    descriptionEn: 'Showcases primary app capabilities in concise bullet points illustrating simplified daily workflows.',
    group: 'content',
    contentCategory: 'launch',
    outputType: 'text',
    outputBadges: ['ميزات التطبيق', 'سوشيال ميديا'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'text', required: true, labelAr: 'اسم التطبيق وأهم ميزاته', labelEn: 'App features', hintAr: 'تطبيق إدارة المهام الذكي, البحث الصوتي, التذكير التلقائي...', hintEn: 'Smart task manager, voice search, automated reminders...' },
      CONTENT_COMMON_PARAMS.platform,
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/app features post تطبيق إدارة المهام الذكي --platform=instagram --tone=fresh --language=ar',
    qualityRules: [...LAUNCH_CONTENT_RULES, ...SAFETY_QUALITY_RULES],
    keywords: ['ميزات التطبيق', 'مميزات', 'تطبيق ذكي', 'شرح ميزات', 'app features'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 220,
    isFavorite: false
  },
  {
    id: 'cnt-lnch-065',
    code: '/store description',
    titleAr: 'وصف التطبيق في متجر التطبيقات (ASO)',
    titleEn: 'App Store & Google Play ASO Description',
    descriptionAr: 'يكتب وصفًا متكاملًا لمتجر App Store و Google Play يشمل سطر الترويج الافتتاحي، قائمة المميزات، وكلمات ASO.',
    descriptionEn: 'Writes App Store and Google Play descriptions optimized for keyword ranking and conversion rates.',
    group: 'content',
    contentCategory: 'launch',
    outputType: 'text',
    outputBadges: ['ASO', 'متجر التطبيقات'],
    params: [
      { key: 'app_name', flag: 'app_name', isPositional: true, type: 'text', required: true, labelAr: 'اسم التطبيق ووظيفته', labelEn: 'App name & utility', hintAr: 'تطبيق تتبع اللياقة والماء, تطبيق حفظ الوصفات...', hintEn: 'Water & fitness tracker, recipe saver...' },
      CONTENT_COMMON_PARAMS.audience,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/store description تطبيق تتبع اللياقة والماء --audience=athletes --language=ar',
    qualityRules: [
      'افتتاحية لا تتجاوز 170 حرفًا تظهر قبل زر "المزيد" في المتاجر',
      'توزيع الكلمات المفتاحية دون حشو واحترام سياسات متجر أبل وجوجل',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['متجر التطبيقات', 'app store description', 'aso', 'جوجل بلاي', 'وصف التطبيق'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 290,
    isFavorite: false
  },
  {
    id: 'cnt-lnch-066',
    code: '/release notes',
    titleAr: 'سجل تحديثات التطبيق (What\'s New / Changelog)',
    titleEn: 'User-Friendly Release Notes & Changelog',
    descriptionAr: 'يكتب سجل تحديثات للتطبيق بأسلوب ممتع وواضح يبتعد عن العبارات الميتة (مثل: "إصلاحات أخطاء وتحسينات عامة").',
    descriptionEn: 'Transforms boring release notes into friendly, exciting updates explaining what is new and improved.',
    group: 'content',
    contentCategory: 'launch',
    outputType: 'text',
    outputBadges: ['تحديثات', 'Release Notes'],
    params: [
      { key: 'version', flag: 'version', isPositional: false, type: 'string', required: false, defaultValue: 'v2.0', labelAr: 'رقم الإصدار', labelEn: 'Version', hintAr: 'v1.2, v2.0...', hintEn: 'v1.2, v2.0...' },
      { key: 'updates', flag: 'updates', isPositional: true, type: 'text', required: true, labelAr: 'التعديلات والميزات الجديدة', labelEn: 'Changes made', hintAr: 'إضافة الوضع الليلي, تسريع تحميل الصفحات 50%...', hintEn: 'Dark mode added, 50% faster page loads...' },
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/release notes إضافة الوضع الليلي وتسريع التحميل --version=v2.0 --tone=fun --language=ar',
    qualityRules: [
      'شرح كيف ينعكس كل تحديث على راحة المستخدم وسرعة استخدامه للتطبيق',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['release notes', 'ما الجديد', 'تحديث التطبيق', 'changelog', 'إصدار جديد'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 180,
    isFavorite: false
  },
  {
    id: 'cnt-lnch-067',
    code: '/early access email',
    titleAr: 'بريد إلكتروني للدعوة المبكرة (Early Access)',
    titleEn: 'Early Access VIP Invitation Email',
    descriptionAr: 'يكتب رسالة بريد إلكتروني ترحيبية للمسجلين في قائمة الانتظار تمنحهم صلاحية الدخول الفوري وتطلب رأيهم.',
    descriptionEn: 'Drafts personalized early access invitation emails to waitlist subscribers offering instant onboarding.',
    group: 'content',
    contentCategory: 'launch',
    outputType: 'text',
    outputBadges: ['بريد إلكتروني', 'وصول مبكر'],
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'اسم المنتج أو المنصة', labelEn: 'Product name', hintAr: 'منصة التدريب الذاتي, تطبيق الحسابات...', hintEn: 'Self-study platform, accounting app...' },
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.cta,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/early access email منصة التدريب الذاتي --tone=exclusive --cta=start-now --language=ar',
    qualityRules: [
      'خلق شعور بالتقدير والخصوصية للمستخدمين الأوائل',
      'توفير رابط مباشر وواضح لتسجيل الدخول والبدء',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['early access', 'وصول مبكر', 'قائمة انتظار', 'waitlist', 'دعوة حصرية'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 205,
    isFavorite: false
  },
  {
    id: 'cnt-lnch-068',
    code: '/product hunt post',
    titleAr: 'محتوى إطلاق المنصات على برودكت هنت (Product Hunt)',
    titleEn: 'Product Hunt Launch Pitch & Maker Comment',
    descriptionAr: 'يكتب سطر التعريف القصير (Tagline) والوصف وتعليق المؤسس الأول (Maker Comment) لإطلاق Product Hunt.',
    descriptionEn: 'Prepares Product Hunt launch pack including punchy tagline, description, and genuine maker first comment.',
    group: 'content',
    contentCategory: 'launch',
    outputType: 'text',
    outputBadges: ['Product Hunt', 'إطلاق عالمي'],
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج والمشكلة والحل', labelEn: 'Product & solution', hintAr: 'أداة ذكاء اصطناعي لكتابة المحتوى العربي...', hintEn: 'AI tool for Arabic copywriting...' },
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/product hunt post أداة ذكاء اصطناعي لكتابة المحتوى العربي --language=en',
    qualityRules: [
      'Tagline لا يتجاوز 60 حرفًا يلخص القيمة الجوهرية بوضوح تام',
      'Maker comment متواضع وصادق يشرح سبب بناء المنتج والدافع وراءه',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['product hunt', 'إطلاق تقني', 'tagline', 'maker comment', 'saas launch'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 190,
    isFavorite: false
  },
  {
    id: 'cnt-lnch-069',
    code: '/launch day sequence',
    titleAr: 'جدول وخطة منشورات يوم الإطلاق (Launch Day)',
    titleEn: 'Launch Day Multi-Platform Posting Sequence',
    descriptionAr: 'يخطط لسلسلة منشورات اليوم الحاسم للإطلاق: التشويق الصباحي، الإعلان الرسمي، كواليس الإطلاق، وحصيلة اليوم.',
    descriptionEn: 'Orchestrates a coordinated full-day social posting plan: morning teaser, main reveal, BTS, and recap.',
    group: 'content',
    contentCategory: 'launch',
    outputType: 'text',
    outputBadges: ['خطة إطلاق', 'يوم الإطلاق'],
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'اسم المنتج أو الخدمة', labelEn: 'Product name', hintAr: 'إطلاق تطبيق توصيل جديد, افتتاح المتجر...', hintEn: 'New delivery app launch, store opening...' },
      CONTENT_COMMON_PARAMS.platform,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/launch day sequence إطلاق تطبيق توصيل جديد --platform=all --language=ar',
    qualityRules: [...LAUNCH_CONTENT_RULES, ...SAFETY_QUALITY_RULES],
    keywords: ['يوم الإطلاق', 'launch day', 'خطة نشر', 'جدول الإطلاق', 'حملة إطلاق'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 230,
    isFavorite: false
  },
  {
    id: 'cnt-lnch-070',
    code: '/user onboarding copy',
    titleAr: 'نصوص جولة تعريف المستخدم الأولية (Onboarding)',
    titleEn: 'First-Time User Onboarding Flow Copy',
    descriptionAr: 'يكتب نصوص شاشات الترحيب الأولى داخل التطبيق أو الموقع (3-4 شاشات) لتوجيه المستخدم نحو نقطة الـ Aha! Moment.',
    descriptionEn: 'Writes motivating, concise 3-4 screen user onboarding walkthrough copy leading straight to the core value.',
    group: 'content',
    contentCategory: 'launch',
    outputType: 'text',
    outputBadges: ['Onboarding', 'تجربة مستخدم'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'text', required: true, labelAr: 'التطبيق والخطوات الرئيسية', labelEn: 'App core actions', hintAr: 'تطبيق تتبع المصاريف: سجل دخلك، حدد ميزانيتك، تتبع يوميًا...', hintEn: 'Budget app: enter income, set budget, track daily...' },
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/user onboarding copy تطبيق تتبع المصاريف --tone=encouraging --language=ar',
    qualityRules: [
      'نصوص مختصرة ومحفزة لا تتجاوز 15 كلمة في الشاشة الواحدة',
      'أزرار إجراء واضحة: التالي، البدء الآن، تخطي',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['onboarding', 'جولة تعريفية', 'شاشات ترحيب', 'تجربة مستخدم', 'تفعيل المستخدم'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 215,
    isFavorite: false
  }
];
