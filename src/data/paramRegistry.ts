import { ParamDef } from '../types/prompt';

export const COMMON_PARAMS: Record<string, ParamDef> = {
  language: { key: 'language', flag: 'language', isPositional: false, type: 'enum', enumValues: [{value: 'ar', labelAr: 'العربية', labelEn: 'Arabic'}, {value: 'en', labelAr: 'الإنجليزية', labelEn: 'English'}], required: false, defaultValue: 'ar', default: 'ar', labelAr: 'لغة المخرجات', labelEn: 'Output language', hintAr: 'لغة المخرجات', hintEn: 'Output language' },
  level: { key: 'level', flag: 'level', isPositional: false, type: 'string', required: false, labelAr: 'مستوى الصعوبة', labelEn: 'Difficulty level', hintAr: 'مستوى الصعوبة', hintEn: 'Difficulty level' },
  tone: { key: 'tone', flag: 'tone', isPositional: false, type: 'string', required: false, labelAr: 'نبرة الصوت', labelEn: 'Voice tone', hintAr: 'نبرة الصوت', hintEn: 'Voice tone' },
  style: { key: 'style', flag: 'style', isPositional: false, type: 'string', required: false, labelAr: 'أسلوب الكتابة', labelEn: 'Writing style', hintAr: 'أسلوب الكتابة', hintEn: 'Writing style' },
  length: { key: 'length', flag: 'length', isPositional: false, type: 'string', required: false, labelAr: 'طول المخرجات', labelEn: 'Output length', hintAr: 'طول المخرجات', hintEn: 'Output length' },
  steps: { key: 'steps', flag: 'steps', isPositional: false, type: 'boolean', required: false, defaultValue: 'yes', default: 'yes', labelAr: 'توضيح الخطوات', labelEn: 'Show steps', hintAr: 'توضيح الخطوات', hintEn: 'Show steps' },
  hints: { key: 'hints', flag: 'hints', isPositional: false, type: 'boolean', required: false, defaultValue: 'no', default: 'no', labelAr: 'إضافة تلميحات', labelEn: 'Add hints', hintAr: 'إضافة تلميحات', hintEn: 'Add hints' },
  format: { key: 'format', flag: 'format', isPositional: false, type: 'string', required: false, labelAr: 'صيغة المخرجات', labelEn: 'Output format', hintAr: 'صيغة المخرجات', hintEn: 'Output format' },
  target: { key: 'target', flag: 'target', isPositional: false, type: 'string', required: false, labelAr: 'الجمهور المستهدف', labelEn: 'Target audience', hintAr: 'الجمهور المستهدف', hintEn: 'Target audience' },
  audience: { key: 'audience', flag: 'audience', isPositional: false, type: 'string', required: false, labelAr: 'الجمهور المستهدف', labelEn: 'Target audience', hintAr: 'الفئة أو الشريحة المستهدفة بالتفصيل', hintEn: 'Target audience segment details' },
  goal: { key: 'goal', flag: 'goal', isPositional: false, type: 'string', required: false, labelAr: 'الهدف الإعلاني / التسويقي', labelEn: 'Campaign / Marketing goal', hintAr: 'الهدف من الحملة (مبيعات، توعية، اشتراكات)', hintEn: 'Campaign objective (sales, awareness, leads)' },
  cta: { key: 'cta', flag: 'cta', isPositional: false, type: 'string', required: false, labelAr: 'الدعوة لاتخاذ إجراء (CTA)', labelEn: 'Call to Action (CTA)', hintAr: 'نص الدعوة لإجراء محدد (اطلب الآن، اشترك اليوم)', hintEn: 'Call to action text (Order now, Subscribe today)' },
  location: { key: 'location', flag: 'location', isPositional: false, type: 'string', required: false, labelAr: 'السوق / النطاق الجغرافي', labelEn: 'Target market / Location', hintAr: 'الدولة أو المدينة أو النطاق الجغرافي', hintEn: 'Country, city, or geographic market' },
  offer: { key: 'offer', flag: 'offer', isPositional: false, type: 'string', required: false, labelAr: 'العرض الخاص أو الميزة', labelEn: 'Special offer / Value proposition', hintAr: 'تفاصيل الخصم أو العرض الترويجي', hintEn: 'Promotional offer or discount details' },
  context: { key: 'context', flag: 'context', isPositional: false, type: 'string', required: false, labelAr: 'السياق الإضافي', labelEn: 'Additional context', hintAr: 'السياق الإضافي', hintEn: 'Additional context' },
  ratio: { key: 'ratio', flag: 'ratio', isPositional: false, type: 'string', required: false, labelAr: 'نسبة الأبعاد', labelEn: 'Aspect ratio', hintAr: 'نسبة الأبعاد', hintEn: 'Aspect ratio' },
  resolution: { key: 'resolution', flag: 'resolution', isPositional: false, type: 'string', required: false, labelAr: 'الدقة', labelEn: 'Resolution', hintAr: 'الدقة', hintEn: 'Resolution' },
  duration: { key: 'duration', flag: 'duration', isPositional: false, type: 'string', required: false, labelAr: 'المدة', labelEn: 'Duration', hintAr: 'المدة', hintEn: 'Duration' },
  role: { key: 'role', flag: 'role', isPositional: false, type: 'string', required: false, labelAr: 'الدور الوظيفي', labelEn: 'Job role', hintAr: 'الدور الوظيفي', hintEn: 'Job role' },
  experience: { key: 'experience', flag: 'experience', isPositional: false, type: 'string', required: false, labelAr: 'مستوى الخبرة', labelEn: 'Experience level', hintAr: 'مستوى الخبرة', hintEn: 'Experience level' },
  sections: { key: 'sections', flag: 'sections', isPositional: false, type: 'string', required: false, labelAr: 'عدد الأقسام', labelEn: 'Number of sections', hintAr: 'عدد الأقسام', hintEn: 'Number of sections' },
  colors: { key: 'colors', flag: 'colors', isPositional: false, type: 'string', required: false, labelAr: 'الألوان المطلوبة', labelEn: 'Required colors', hintAr: 'الألوان المطلوبة', hintEn: 'Required colors' },
  typography: { key: 'typography', flag: 'typography', isPositional: false, type: 'string', required: false, labelAr: 'الخطوط المطلوبة', labelEn: 'Required typography', hintAr: 'الخطوط المطلوبة', hintEn: 'Required typography' },
  platform: { key: 'platform', flag: 'platform', isPositional: false, type: 'string', required: false, labelAr: 'المنصة', labelEn: 'Platform', hintAr: 'المنصة', hintEn: 'Platform' },
  industry: { key: 'industry', flag: 'industry', isPositional: false, type: 'string', required: false, labelAr: 'مجال الصناعة', labelEn: 'Industry', hintAr: 'مجال الصناعة', hintEn: 'Industry' },
  focus: { key: 'focus', flag: 'focus', isPositional: false, type: 'string', required: false, labelAr: 'التركيز الأساسي', labelEn: 'Main focus', hintAr: 'التركيز الأساسي', hintEn: 'Main focus' },
  activities: { key: 'activities', flag: 'activities', isPositional: false, type: 'string', required: false, labelAr: 'نوع الأنشطة', labelEn: 'Activities type', hintAr: 'نوع الأنشطة', hintEn: 'Activities type' },
  games: { key: 'games', flag: 'games', isPositional: false, type: 'string', required: false, defaultValue: 'crossword,maze,word-search', default: 'crossword,maze,word-search', labelAr: 'الألعاب والأنشطة التفاعلية', labelEn: 'Interactive games', hintAr: 'مثل: crossword,maze,word-search', hintEn: 'e.g. crossword,maze,word-search' },
  subject: { key: 'subject', flag: 'subject', isPositional: false, type: 'string', required: false, labelAr: 'المادة الدراسية', labelEn: 'School subject', hintAr: 'المادة التعليمية (العلوم، الرياضيات، اللغة العربية)', hintEn: 'Educational subject (Science, Math, Arabic)' },
  printReady: { key: 'print-ready', flag: 'print-ready', isPositional: false, type: 'enum', enumValues: [{ value: 'yes', labelAr: 'نعم (جاهز للطباعة A4)', labelEn: 'Yes (A4 Print-ready)' }, { value: 'no', labelAr: 'لا (عرض رقمي)', labelEn: 'No (Digital only)' }], required: false, defaultValue: 'yes', default: 'yes', labelAr: 'جاهز للطباعة', labelEn: 'Print ready', hintAr: 'تنسيق الصفحة لتناسب الطباعة المباشرة', hintEn: 'Page layout optimized for direct printing' },
  instruction: { key: 'instruction', flag: 'instruction', isPositional: false, type: 'string', required: false, labelAr: 'تعليمات الإخراج البصري', labelEn: 'Visual output instructions', hintAr: 'توجيه نموذج الذكاء الاصطناعي لهيكلة التصميم كإنفوجرافيك', hintEn: 'Direct AI model to structure output as a visual infographic' },
  curriculum: { key: 'curriculum', flag: 'curriculum', isPositional: false, type: 'string', required: false, labelAr: 'المنهج الدراسي', labelEn: 'Curriculum', hintAr: 'المنهج الدراسي', hintEn: 'Curriculum' },
  grade: { key: 'grade', flag: 'grade', isPositional: false, type: 'string', required: false, labelAr: 'الصف الدراسي', labelEn: 'Grade level', hintAr: 'الصف الدراسي', hintEn: 'Grade level' }
};

export function resolveParam(key: string): ParamDef {
  const param = COMMON_PARAMS[key];
  if (!param) {
    return {
      key,
      flag: key,
      isPositional: false,
      type: 'string',
      required: false,
      labelAr: key,
      labelEn: key,
      hintAr: key,
      hintEn: key
    };
  }
  return param;
}
