import { ParamDef } from '../../../types/prompt';

export const BUSINESS_COMMON_PARAMS = {
  market: {
    key: 'market',
    flag: 'market',
    isPositional: false,
    type: 'enum' as const,
    required: false,
    defaultValue: 'saudi-arabia',
    enumValues: [
      { value: 'saudi-arabia', labelAr: 'المملكة العربية السعودية', labelEn: 'Saudi Arabia' },
      { value: 'gulf', labelAr: 'دول الخليج العربي (GCC)', labelEn: 'Gulf Region' },
      { value: 'mena', labelAr: 'الشرق الأوسط وشمال أفريقيا', labelEn: 'MENA Region' },
      { value: 'global', labelAr: 'عالمي', labelEn: 'Global' },
    ],
    labelAr: 'السوق المستهدف',
    labelEn: 'Target Market',
    hintAr: 'saudi-arabia, gulf, mena, global...',
    hintEn: 'saudi-arabia, gulf, mena, global...',
  } as ParamDef,

  budget: {
    key: 'budget',
    flag: 'budget',
    isPositional: false,
    type: 'text' as const,
    required: false,
    defaultValue: 'medium',
    enumValues: [
      { value: 'low', labelAr: 'ميزانية محدودة / تمويل ذاتي', labelEn: 'Low / Bootstrapped' },
      { value: 'medium', labelAr: 'متوسطة (100k - 500k ر.س)', labelEn: 'Medium (100k-500k SAR)' },
      { value: 'high', labelAr: 'مرتفعة / تمويل استثماري', labelEn: 'High / VC Funded' },
    ],
    labelAr: 'الميزانية / التمويل',
    labelEn: 'Budget / Capital',
    hintAr: 'low, medium, high أو 150000sar...',
    hintEn: 'low, medium, high or 150000sar...',
  } as ParamDef,

  output: {
    key: 'output',
    flag: 'output',
    isPositional: false,
    type: 'enum' as const,
    required: false,
    defaultValue: 'business-report',
    enumValues: [
      { value: 'business-report', labelAr: 'تقرير أعمال متكامل', labelEn: 'Comprehensive Report' },
      { value: 'executive-summary', labelAr: 'ملخص تنفيذي للمدير والمستثمر', labelEn: 'Executive Summary' },
      { value: 'table', labelAr: 'جدول مقارن ومنظم', labelEn: 'Structured Table' },
      { value: 'decision-summary', labelAr: 'ملخص قرار وتوصيات', labelEn: 'Decision & Recommendations' },
      { value: 'action-plan', labelAr: 'خطة عمل وخطوات تنفيذية', labelEn: 'Action Plan' },
    ],
    labelAr: 'صيغة المخرج المطلوب',
    labelEn: 'Output Format',
    hintAr: 'business-report, executive-summary, table, action-plan...',
    hintEn: 'business-report, executive-summary, table, action-plan...',
  } as ParamDef,

  duration: {
    key: 'duration',
    flag: 'duration',
    isPositional: false,
    type: 'text' as const,
    required: false,
    defaultValue: '90days',
    labelAr: 'المدة الزمنية',
    labelEn: 'Duration / Timeline',
    hintAr: '30days, 90days, 6months, 12months...',
    hintEn: '30days, 90days, 6months, 12months...',
  } as ParamDef,

  currency: {
    key: 'currency',
    flag: 'currency',
    isPositional: false,
    type: 'enum' as const,
    required: false,
    defaultValue: 'sar',
    enumValues: [
      { value: 'sar', labelAr: 'ريال سعودي (SAR)', labelEn: 'Saudi Riyal (SAR)' },
      { value: 'aed', labelAr: 'درهم إماراتي (AED)', labelEn: 'UAE Dirham (AED)' },
      { value: 'kwd', labelAr: 'دينار كويتي (KWD)', labelEn: 'Kuwaiti Dinar (KWD)' },
      { value: 'usd', labelAr: 'دولار أمريكي (USD)', labelEn: 'US Dollar (USD)' },
    ],
    labelAr: 'العملة',
    labelEn: 'Currency',
    hintAr: 'sar, aed, usd...',
    hintEn: 'sar, aed, usd...',
  } as ParamDef,

  language: {
    key: 'language',
    flag: 'language',
    isPositional: false,
    type: 'enum' as const,
    required: false,
    defaultValue: 'ar',
    enumValues: [
      { value: 'ar', labelAr: 'العربية (احترافية ومباشرة)', labelEn: 'Arabic' },
      { value: 'en', labelAr: 'الإنجليزية (Professional Business)', labelEn: 'English' },
    ],
    labelAr: 'لغة التحليل والمخرجات',
    labelEn: 'Output Language',
    hintAr: 'ar, en...',
    hintEn: 'ar, en...',
  } as ParamDef,
};

export const BUSINESS_QUALITY_RULES = [
  'الاعتماد على منهجيات ريادية وأطر عمل مثبتة (Lean Startup, SWOT, TAM-SAM-SOM, BMC).',
  'التمييز الصريح بين الحقائق المؤكدة، التقديرات الإحصائية، والافتراضات التي تتطلب تحققاً ميدانياً.',
  'تقديم أرقام واقعية وجداول مقارنة واضحة تساند اتخاذ القرارات الاستثمارية والتشغيلية.',
  'التركيز على القيمة التنافسية، وحواجز الدخول، ونموذج الإيرادات، وتجنب العبارات العامة.',
];

export const DATA_QUALITY_RULES = [
  'تطبيق مراحل التحليل الأربع: فهم الهيكل، التنظيف، التلخيص، والتصور لصناعة القرار.',
  'الحفاظ على البيانات الأصلية وتوثيق كل خطوة تنظيف أو معالجة للقيم الشاذة والمفقودة.',
  'اختيار الرسوم البيانية حسب السؤال التجاري (خطوط للاتجاه، أعمدة للمقارنة، قمع للتحويل).',
  'تجنب الرسوم ثلاثية الأبعاد والمؤشرات المشتتة والتركيز على مقاييس الأداء الرئيسية (KPIs).',
];
