import { ParamDef } from '../../../../types/prompt';

export const FIXED_KIDS_DIRECTIVE = `صمم الناتج كإنفوجرافيك تعليمي بصري قابل للطباعة،
منظم بعناوين وصناديق ورسومات بسيطة ومساحات واضحة للطفل،
وليس كنص أو مقال فقط.`;

export const KIDS_QUALITY_RULES = [
  'تعليمات ثابتة: صمم الناتج كإنفوجرافيك تعليمي بصري قابل للطباعة، منظم بعناوين وصناديق ورسومات بسيطة ومساحات واضحة للطفل، وليس كنص أو مقال فقط.',
  'استخدم جملًا قصيرة وواضحة تناسب العمر.',
  'اعتمد على الصور والرموز أكثر من النصوص الطويلة.',
  'اجعل مساحة الكتابة والتلوين والحل واسعة.',
  'لا تضف أسئلة صعبة أو اختبارات رسمية للروضة.',
  'استخدم اللعب، القصة، الحركة، المطابقة، والتلوين.',
  'راجع النشاط قبل طباعته أو تقديمه للطفل.',
  'لا تضع معلومات شخصية أو صورًا حقيقية للطفل في الأمر.'
];

export const STANDARD_FORMAT_PARAM: ParamDef = {
  key: 'format',
  flag: 'format',
  isPositional: false,
  type: 'string',
  required: false,
  defaultValue: 'educational-newspaper-infographic',
  default: 'educational-newspaper-infographic',
  labelAr: 'صيغة المخرجات',
  labelEn: 'Output format',
  hintAr: 'educational-newspaper-infographic',
  hintEn: 'educational-newspaper-infographic'
};

export const STANDARD_PRINT_PARAM: ParamDef = {
  key: 'print-ready',
  flag: 'print-ready',
  isPositional: false,
  type: 'enum',
  enumValues: [
    { value: 'yes', labelAr: 'نعم (جاهز للطباعة A4)', labelEn: 'Yes (A4 Print Ready)' },
    { value: 'no', labelAr: 'لا (عرض رقمي)', labelEn: 'No (Digital only)' }
  ],
  required: false,
  defaultValue: 'yes',
  default: 'yes',
  labelAr: 'جاهز للطباعة',
  labelEn: 'Print ready',
  hintAr: 'yes',
  hintEn: 'yes'
};

export const STANDARD_SIZE_PARAM: ParamDef = {
  key: 'size',
  flag: 'size',
  isPositional: false,
  type: 'string',
  required: false,
  defaultValue: 'a4',
  default: 'a4',
  labelAr: 'مقاس الورقة',
  labelEn: 'Paper size',
  hintAr: 'a4',
  hintEn: 'a4'
};

export const STANDARD_STYLE_PARAM: ParamDef = {
  key: 'style',
  flag: 'style',
  isPositional: false,
  type: 'string',
  required: false,
  defaultValue: 'kids-friendly',
  default: 'kids-friendly',
  labelAr: 'النمط والتصميم',
  labelEn: 'Design style',
  hintAr: 'kids-friendly',
  hintEn: 'kids-friendly'
};
