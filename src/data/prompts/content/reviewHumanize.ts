import { CommandPrompt } from '../../../types/prompt';
import { CONTENT_COMMON_PARAMS, HUMAN_CONTENT_RULES, SAFETY_QUALITY_RULES } from './constants';

export const REVIEW_HUMANIZE_PROMPTS: CommandPrompt[] = [
  {
    id: 'cnt-rev-097',
    code: '/humanize text',
    titleAr: 'إضفاء الطابع البشري وإزالة الصياغات الآلية',
    titleEn: 'Humanize AI Text & Remove Robotic Clichés',
    descriptionAr: 'يعيد صياغة النصوص الجافة أو المولدة بالذكاء الاصطناعي لتصبح طبيعية، سلسة، دافئة، وسهلة القراءة والفهم.',
    descriptionEn: 'Rewrites robotic, predictable AI drafts into authentic, fluid, and engaging human prose without clichés.',
    group: 'content',
    contentCategory: 'review_humanize',
    outputType: 'text',
    outputBadges: ['صياغة بشرية', 'تحسين نصوص'],
    params: [
      { key: 'text', flag: 'text', isPositional: true, type: 'text', required: true, labelAr: 'النص المراد إضفاء الطابع البشري عليه', labelEn: 'Draft text', hintAr: 'الصق النص الآلي هنا...', hintEn: 'Paste draft text here...' },
      CONTENT_COMMON_PARAMS.tone,
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/humanize text [الصق المسودة هنا] --tone=conversational --language=ar',
    qualityRules: [
      'حذف الكلمات والعبارات النمطية المستهلكة (مثل: في عالمنا المتسارع، لا يخفى على أحد...)',
      'تنويع أطوال الجمل واستخدام تعبيرات طبيعية متداولة',
      ...HUMAN_CONTENT_RULES,
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['humanize', 'أنسنة النصوص', 'صياغة بشرية', 'إزالة الروبوتية', 'تحسين الأسلوب'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 450,
    isFavorite: true
  },
  {
    id: 'cnt-rev-098',
    code: '/proofread copy',
    titleAr: 'التدقيق اللغوي والإملائي الاحترافي',
    titleEn: 'Professional Copywriting Proofreader',
    descriptionAr: 'يدقق النص لغويًا ونحويًا وإملائيًا مع تصحيح علامات الترقيم وتنسيق الفقرات دون المساس بروح وهوية الكاتب.',
    descriptionEn: 'Proofreads grammar, spelling, punctuation, and typographical cadence while preserving writer unique voice.',
    group: 'content',
    contentCategory: 'review_humanize',
    outputType: 'text',
    outputBadges: ['تدقيق لغوي', 'إملاء ونحو'],
    params: [
      { key: 'copy', flag: 'copy', isPositional: true, type: 'text', required: true, labelAr: 'النص المطلوب تدقيقه', labelEn: 'Copy to proofread', hintAr: 'الصق النص للمراجعة اللغوية...', hintEn: 'Paste copy for proofreading...' },
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/proofread copy [الصق النص المطلوب تدقيقه] --language=ar',
    qualityRules: [
      'تصحيح همزات الوصل والقطع، التاء المربوطة والمفتوحة، وعلامات الترقيم الصحيحة',
      'توضيح التعديلات المقترحة في جدول موجز عند الطلب',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['تدقيق لغوي', 'proofread', 'تصحيح إملائي', 'نحو', 'مراجعة النصوص'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 380,
    isFavorite: true
  },
  {
    id: 'cnt-rev-099',
    code: '/content review',
    titleAr: 'المراجعة الشاملة للمحتوى والتحقق من القواعد',
    titleEn: 'Rigorous Content Quality & Fact Audit',
    descriptionAr: 'يفحص المحتوى بالكامل للتحقق من: الحقائق القابلة للتأكيد، دقة أسماء المنتجات والأسعار، وخلوه من الادعاءات المضللة.',
    descriptionEn: 'Audits copy strictly against verifiability standards, pricing precision, and unsupported medical/legal claims.',
    group: 'content',
    contentCategory: 'review_humanize',
    outputType: 'text',
    outputBadges: ['مراجعة شاملة', 'تدقيق جودة'],
    params: [
      { key: 'draft', flag: 'draft', isPositional: true, type: 'text', required: true, labelAr: 'المسودة الكاملة للمراجعة', labelEn: 'Full draft to audit', hintAr: 'الصق المقال أو المنشور لمراجعة الجودة...', hintEn: 'Paste draft for comprehensive audit...' },
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/content review [الصق المسودة الكاملة للمراجعة] --language=ar',
    qualityRules: [
      'اكتب حقائق قابلة للتحقق فقط',
      'لا تختلق تقييمات أو شهادات عملاء أو أرقام مبيعات أو نتائج',
      'لا تقدم ادعاءات صحية أو مالية أو قانونية بلا مصدر موثوق',
      'راجع المحتوى قبل نشره، خصوصًا أسماء المنتجات والأسعار والعروض والتواريخ'
    ],
    keywords: ['content review', 'مراجعة محتوى', 'تدقيق جودة', 'تحقق من الحقائق', 'سلامة المحتوى'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 330,
    isFavorite: true
  },
  {
    id: 'cnt-rev-100',
    code: '/tone adjuster',
    titleAr: 'تعديل نبرة الصوت والمزاج اللغوي (Tone Adjuster)',
    titleEn: 'Dynamic Brand Voice Tone Adjuster',
    descriptionAr: 'يغير نبرة أي نص موجود (من رسمي إلى حواري، أو من تسويقي إلى تعليمي، أو إلى فاخر أو مرح) بذكاء ودقة.',
    descriptionEn: 'Modulates existing copy tone across formal, conversational, empathetic, luxurious, energetic, or authoritative modes.',
    group: 'content',
    contentCategory: 'review_humanize',
    outputType: 'text',
    outputBadges: ['نبرة الصوت', 'تعديل الأسلوب'],
    params: [
      { key: 'text', flag: 'text', isPositional: true, type: 'text', required: true, labelAr: 'النص المراد ضبط نبرته', labelEn: 'Original text', hintAr: 'الصق النص لتغيير نبرته...', hintEn: 'Paste text to alter tone...' },
      { key: 'target_tone', flag: 'target_tone', isPositional: false, type: 'string', required: true, defaultValue: 'friendly', labelAr: 'النبرة المطلوبة', labelEn: 'Target tone', hintAr: 'conversational, formal, luxury, enthusiastic, reassuring...', hintEn: 'conversational, formal, luxury, enthusiastic, reassuring...' },
      CONTENT_COMMON_PARAMS.language
    ],
    example: '/tone adjuster [الصق النص] --target_tone=conversational --language=ar',
    qualityRules: [
      'الحفاظ على المعنى الأساسي والمعلومات الدقيقة مع تغيير الأسلوب اللغوي فقط',
      ...SAFETY_QUALITY_RULES
    ],
    keywords: ['tone adjuster', 'نبرة الصوت', 'تغيير النبرة', 'أسلوب لغوي', 'إعادة صياغة'],
    createdAt: '2026-09-16T12:00:00.000Z',
    updatedAt: '2026-09-16T12:00:00.000Z',
    usageCount: 295,
    isFavorite: false
  }
];
