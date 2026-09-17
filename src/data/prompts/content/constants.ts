import { ParamDef } from '../../../types/prompt';

export const HUMAN_CONTENT_RULES = [
  'اكتب بأسلوب طبيعي ومباشر يخدم القارئ أولًا',
  'تجنب تكرار الكلمات المفتاحية والحشو والجمل الآلية النمطية',
  'استخدم أمثلة عملية وصياغة بشرية متنوعة تناسب واقع الجمهور المستهدف',
  'اكتب حقائق قابلة للتحقق فقط، ولا تختلق مصادر أو أرقامًا غير مؤكدة'
];

export const SAFETY_QUALITY_RULES = [
  'اكتب حقائق قابلة للتحقق فقط',
  'لا تختلق تقييمات أو شهادات عملاء أو أرقام مبيعات أو نتائج وهمية',
  'لا تقدم ادعاءات صحية أو مالية أو قانونية بلا مصدر موثوق',
  'راجع المحتوى بدقة قبل نشره، خصوصًا أسماء المنتجات والأسعار والعروض والتواريخ'
];

export const SOCIAL_CONTENT_RULES = [
  'بدء المنشور بجملة افتتاحية خاطفة للانتباه ومحفزة للقراءة',
  'التركيز على القيمة الفعلية والفائدة للجمهور المستهدف',
  'استخدام صياغة تناسب المنصة المحددة ونبرة صوت العلامة',
  'تضمين دعوة واضحة ومباشرة للتفاعل أو اتخاذ إجراء (CTA)'
];

export const LAUNCH_CONTENT_RULES = [
  'إبراز المشكلة الحقيقية التي يحلها المنتج أو التطبيق الجديد',
  'التركيز على الميزات الأساسية والقيمة المضافة بوضوح تام',
  'توفير خطوات أو روابط تنزيل أو تجربة مباشرة بلا تعقيد',
  'الالتزام بالمصداقية في ذكر خصائص المنتج دون مبالغات غير واقعية'
];

export const EMAIL_CONTENT_RULES = [
  'صياغة عنوان رسالة جذاب وغير مضلل يرفع نسبة الفتح',
  'كتابة محتوى مختصر، ممتع ومقسم إلى فقرات سهلة القراءة',
  'تضمين زر أو رابط دعوة لإجراء (CTA) وحيد وواضح ومحدد'
];

export const CONTENT_COMMON_PARAMS: Record<string, ParamDef> = {
  platform: {
    key: 'platform',
    flag: 'platform',
    isPositional: false,
    type: 'string',
    required: false,
    labelAr: 'المنصة',
    labelEn: 'Platform',
    hintAr: 'instagram, tiktok, linkedin, facebook, x, whatsapp',
    hintEn: 'instagram, tiktok, linkedin, facebook, x, whatsapp'
  },
  tone: {
    key: 'tone',
    flag: 'tone',
    isPositional: false,
    type: 'string',
    required: false,
    defaultValue: 'friendly',
    labelAr: 'نبرة الصوت',
    labelEn: 'Voice tone',
    hintAr: 'friendly, professional, confident, energetic, luxury, warm, conversational',
    hintEn: 'friendly, professional, confident, energetic, luxury, warm, conversational'
  },
  length: {
    key: 'length',
    flag: 'length',
    isPositional: false,
    type: 'string',
    required: false,
    defaultValue: 'medium',
    labelAr: 'طول المحتوى',
    labelEn: 'Content length',
    hintAr: 'short, medium, long, 800words, 1200words...',
    hintEn: 'short, medium, long, 800words, 1200words...'
  },
  cta: {
    key: 'cta',
    flag: 'cta',
    isPositional: false,
    type: 'string',
    required: false,
    labelAr: 'الدعوة لاتخاذ إجراء (CTA)',
    labelEn: 'Call to Action (CTA)',
    hintAr: 'book-now, shop-now, visit-us, sign-up, comment, learn-more',
    hintEn: 'book-now, shop-now, visit-us, sign-up, comment, learn-more'
  },
  audience: {
    key: 'audience',
    flag: 'audience',
    isPositional: false,
    type: 'string',
    required: false,
    labelAr: 'الجمهور المستهدف',
    labelEn: 'Target audience',
    hintAr: 'students, homeowners, business-owners, women, professionals...',
    hintEn: 'students, homeowners, business-owners, women, professionals...'
  },
  goal: {
    key: 'goal',
    flag: 'goal',
    isPositional: false,
    type: 'string',
    required: false,
    labelAr: 'الهدف من المحتوى',
    labelEn: 'Content goal',
    hintAr: 'engagement, sales, awareness, signups, traffic...',
    hintEn: 'engagement, sales, awareness, signups, traffic...'
  },
  language: {
    key: 'language',
    flag: 'language',
    isPositional: false,
    type: 'enum',
    enumValues: [
      { value: 'ar', labelAr: 'العربية', labelEn: 'Arabic' },
      { value: 'en', labelAr: 'الإنجليزية', labelEn: 'English' }
    ],
    required: false,
    defaultValue: 'ar',
    labelAr: 'لغة المخرجات',
    labelEn: 'Output language',
    hintAr: 'اختر لغة كتابة المحتوى',
    hintEn: 'Select content writing language'
  },
  hashtags: {
    key: 'hashtags',
    flag: 'hashtags',
    isPositional: false,
    type: 'enum',
    enumValues: [
      { value: 'yes', labelAr: 'نعم (3-5 وسوم ذكية)', labelEn: 'Yes (3-5 smart hashtags)' },
      { value: 'no', labelAr: 'بدون وسوم', labelEn: 'No hashtags' }
    ],
    required: false,
    defaultValue: 'yes',
    labelAr: 'إضافة وسوم (Hashtags)',
    labelEn: 'Include hashtags',
    hintAr: 'توليد وسوم ذات صلة وعالية الوصول',
    hintEn: 'Generate relevant high-reach hashtags'
  }
};
