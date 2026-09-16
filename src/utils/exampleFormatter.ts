import { CommandPrompt } from '../types/prompt';

/**
 * Intelligent mapping of contextual realistic values based on prompt category,
 * title, and keywords so that EVERY prompt has a fully modified realistic "Live Example"
 * (e.g. `/teach me اللغة الإنجليزية` instead of `/teach me [الموضوع]`).
 */

const REALISTIC_FILLERS: Record<string, string> = {
  // Edu - Math
  'math': 'حل المعادلة التربيعية: 2x² + 5x - 3 = 0 خطوة بخطوة',
  'calculus': 'إيجاد مشتقة الدالة f(x) = sin(2x) * e^(3x)',
  'algebra': 'تبسيط المقدار الجبري: (3x² - 12) / (x - 2)',
  'geometry': 'حساب مساحة وحجم الهرم الرباعي المنتظم',
  'statistics': 'تحليل التباين الأحادي ANOVA لبيانات أداء الطلاب',
  
  // Edu - Science
  'physics': 'جسم كتلته 2 كجم يتحرك بسرعة 15 م/ث، احسب طاقة حركته وقوة الاحتكاك',
  'chemistry': 'موازنة معادلة احتراق غاز البروبان C3H8 + O2 -> CO2 + H2O',
  'biology': 'مراحل عملية الانقسام المنصف (Meiosis) وأهميتها الوراثية',
  'science': 'دورة الماء في الطبيعة وكيف تتشكل السحب والأمطار',

  // Edu - Languages & Humanities
  'arabic': 'إعراب جملة: "إنّ العلمَ نورٌ يهدي العقولَ إلى الصواب"',
  'english': 'قواعد استخدام زمن المضارع التام Present Perfect مع أمثلة تطبيقية',
  'grammar': 'الفرق بين كان وأخواتها وإنّ وأخواتها مع أمثلة إعرابية',
  'history': 'أسباب ونتائج معركة حطين وتحرير القدس عام 1187م',
  'geography': 'تأثير ظاهرة التغير المناخي على الموارد المائية في الوطن العربي',
  'literature': 'التحليل البلاغي والاستعارات في معلقة امرئ القيس',
  'philosophy': 'نظرية المعرفة بين العقلانيين والتجريبيين عند ديكارت وجون لوك',

  // Edu - Early Childhood & Primary
  'early': 'التعرف على الألوان الأساسية والأشكال الهندسية للأطفال',
  'kindergarten': 'نشاط تفاعلي حركي لتمييز الحروف الهجائية بالصلصال',
  'kids': 'قصة قصيرة مشوقة عن الصدق والتعاون للأطفال في سن 5 سنوات',
  'primary': 'شرح مبسط لجدول الضرب في 6 بطريقة الرسم والأشكال',
  'reading': 'قصة قصيرة بعنوان "مغامرة الأرنب الذكي في الغابة" لتطوير القراءة',
  'spelling': 'قواعد كتابة الهمزة المتوسطة على الواو والنبرة مع 10 كلمات تدريبية',

  // Edu - University & Research
  'university': 'مراجعة أدبيات البحث حول أثر الذكاء الاصطناعي في التعليم الجامعي',
  'thesis': 'مخطط رسالة ماجستير حول الأمن السيبراني في أنظمة الحوسبة السحابية',
  'research': 'أثر استخدام تقنيات الواقع المعزز على التحصيل الدراسي لطلاب الطب',
  'syllabus': 'مخطط تفصيلي لمقرر مبادئ البرمجة بلغة بايثون للعام الدراسي 2026',
  'rubric': 'معايير تقييم العروض التقديمية والمشاريع الجماعية لطلاب الهندسة',
  'exam': '15 سؤال اختيار من متعدد وتفسير حول كيمياء المركبات العضوية',

  // Design
  'logo': 'شركة "تقنية المستقبل" لحلول الذكاء الاصطناعي والأمن الرقمي',
  'branding': 'هوية بصرية متكاملة لمقهى عصري متخصص في القهوة المختصة "رَوْقَة"',
  'poster': 'مؤتمر الابتكار والتحول الرقمي السنوي 2026',
  'ui': 'واجهة تطبيق توصيل وجبات صحية سريعة مع تتبع مباشر للطلب',
  'ux': 'تحسين تجربة سلة الشراء والدفع بضغطة واحدة لتطبيق تجارة إلكترونية',
  'icon': 'مجموعة أيقونات ثلاثية الأبعاد ثلاثية الأبعاد لتطبيق مالي ومحفظة رقمية',
  'color': 'لوحة ألوان مستوحاة من الطبيعة الصحراوية والغروب الذهبي',
  'font': 'تنسيق الخطوط لمجلة ثقافية راقية تجمع بين الكلاسيكية والحداثة',

  // Video
  'script': 'أهم 5 مهارات يحتاجها كل رائد أعمال في عصر الذكاء الاصطناعي',
  'youtube': 'دليل المبتدئين الشامل لتعلم البرمجة من الصفر في 2026',
  'tiktok': '3 حيل ذكية في إكسل ستوفر عليك ساعات من العمل أسبوعياً',
  'reel': 'طريقة تحضير القهوة المقطرة V60 في المنزل كالمحترفين',
  'hook': 'لماذا تفشل 90% من الشركات الناشئة في عامها الأول؟ وكيف تتجنب ذلك؟',
  'storyboard': 'مشهد إعلاني سينمائي لمدة 30 ثانية لإطلاق ساعة ذكية جديدة',

  // CV & Career
  'cv': 'سيرة ذاتية لمطور واجهات أمامية Senior Frontend Developer بخبرة 5 سنوات في React و TypeScript',
  'resume': 'مهندس بيانات Data Engineer حاصل على شهادات سحابية في AWS و GCP',
  'interview': 'التحضير لمقابلة عمل لوظيفة مدير منتج تقني Product Manager في شركة ناشئة',
  'cover': 'رسالة تغطية وظيفية للتقديم على منصب أخصائي تسويق رقمي في شركة عالمية',
  'linkedin': 'نبذة تعريفية احترافية لملف لينكد إن في مجال الاستشارات المالية والاستثمار',
};

/**
 * Returns both the template (with placeholders) and the realistic live example (filled).
 */
export function getPromptExamples(prompt: CommandPrompt): {
  template: string;
  liveExample: string;
  isCustomized: boolean;
} {
  const rawExample = prompt.example || `${prompt.code}`;
  
  // If the rawExample does NOT contain brackets, it might already be a live example!
  const hasPlaceholders = /\[[^\]]+\]/.test(rawExample);

  // If it doesn't have brackets and has meaningful parameters, treat as both
  if (!hasPlaceholders) {
    return {
      template: createTemplateFromPrompt(prompt, rawExample),
      liveExample: rawExample,
      isCustomized: true,
    };
  }

  // Find the most relevant filler based on code, title, and keywords
  let filler = findBestFiller(prompt);

  // Replace placeholders inside brackets with realistic values
  const liveExample = rawExample.replace(/\[([^\]]+)\]/g, (match, placeholder) => {
    // Check specific placeholder keywords
    const p = placeholder.toLowerCase().trim();
    if (p.includes('شركة') || p.includes('company')) return 'شركة ألفا للذكاء الاصطناعي';
    if (p.includes('موضوع') || p.includes('topic')) return filler;
    if (p.includes('نص') || p.includes('text') || p.includes('سيرة') || p.includes('cv')) return filler;
    if (p.includes('مسألة') || p.includes('problem')) return filler;
    if (p.includes('عنوان') || p.includes('title')) return filler;
    if (p.includes('مادة') || p.includes('subject')) return 'الرياضيات المتقدمة';
    if (p.includes('كود') || p.includes('code')) return 'const calculateTotal = (items) => items.reduce((a, b) => a + b.price, 0);';
    if (p.includes('كلمة') || p.includes('word')) return 'استيعاب، استنتاج، انضباط';

    return filler;
  });

  return {
    template: rawExample,
    liveExample: liveExample,
    isCustomized: true,
  };
}

function findBestFiller(prompt: CommandPrompt): string {
  const code = (prompt.code || '').toLowerCase();
  const title = (prompt.titleAr || prompt.titleEn || '').toLowerCase();
  const desc = (prompt.descriptionAr || prompt.descriptionEn || '').toLowerCase();
  const keywords = (prompt.keywords || []).map(k => k.toLowerCase()).join(' ');

  const searchTarget = `${code} ${title} ${desc} ${keywords}`;

  for (const [key, value] of Object.entries(REALISTIC_FILLERS)) {
    if (searchTarget.includes(key)) {
      return value;
    }
  }

  // Domain fallbacks
  if (prompt.group === 'edu') return 'دورة حياة النباتات وكيفية صنع الغذاء بالبناء الضوئي';
  if (prompt.group === 'design') return 'تصميم تطبيق جوال عصري لخدمات الصحة واللياقة البدنية';
  if (prompt.group === 'video') return '5 أسرار لزيادة الإنتاجية اليومية وتنظيم الوقت بفعالية';
  if (prompt.group === 'cv') return 'مهندس برمجيات متكامل Full Stack خبرة 4 سنوات في تطوير تطبيقات الويب';

  return 'محتوى تطبيقي واقعي عالي الجودة';
}

function createTemplateFromPrompt(prompt: CommandPrompt, currentExample: string): string {
  // If no positionals found in params, return current
  if (!prompt.params || prompt.params.length === 0) return currentExample;

  const positional = prompt.params.find(p => p.isPositional);
  if (!positional) return currentExample;

  const placeholder = `[${positional.labelAr || positional.flag || 'المدخل'}]`;
  
  // If code starts with /code
  const firstWord = currentExample.split(' ')[0];
  const secondWord = currentExample.split(' ')[1] || '';
  
  // If the command is two words like /primary lesson
  if (prompt.code.includes(' ')) {
    const parts = prompt.code.split(' ');
    const rest = currentExample.substring(prompt.code.length).trim();
    // Keep options
    const optionMatches = rest.match(/--[\w-]+(?:=[^\s]+)?/g) || [];
    const optionsStr = optionMatches.length > 0 ? ` ${optionMatches.join(' ')}` : '';
    return `${prompt.code} ${placeholder}${optionsStr}`;
  }

  return `${prompt.code} ${placeholder}`;
}
