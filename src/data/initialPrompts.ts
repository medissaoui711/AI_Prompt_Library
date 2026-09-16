import { CommandPrompt } from '../types/prompt';
import { resolveParam } from './paramRegistry';

export const INITIAL_PROMPTS: CommandPrompt[] = [
  {
    id: '1',
    code: '/math solve',
    titleAr: 'حل مسألة رياضية',
    titleEn: 'Solve Math Problem',
    descriptionAr: 'يحل مسألة رياضية خطوة بخطوة مع توضيح القوانين المستخدمة.',
    descriptionEn: 'Solves a math problem step by step with explanations.',
    group: 'edu',
    stage: ['secondary', 'university'],
    subject: ['math'],
    task: ['solve'],
    params: [
      { key: 'problem', flag: 'problem', isPositional: true, type: 'text', required: true, labelAr: 'المسألة', labelEn: 'Problem', hintAr: 'اكتب المسألة الرياضية هنا', hintEn: 'Enter the math problem here (multiline)' },
      resolveParam('level'),
      resolveParam('steps'),
      resolveParam('hints')
    ],
    example: '/math solve [المسألة] --level=university --steps=yes --hints=no',
    qualityRules: ['شرح كل خطوة بوضوح', 'ذكر القانون الرياضي المستخدم', 'التحقق من الإجابة النهائية'],
    keywords: ['رياضيات', 'حل', 'مسألة', 'math', 'solve'],
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    usageCount: 15,
    isFavorite: true
  },
  {
    id: '2',
    code: '/design logo',
    titleAr: 'تصميم شعار',
    titleEn: 'Design Logo',
    descriptionAr: 'تصميم شعار احترافي للشركات والمشاريع.',
    descriptionEn: 'Design a professional logo for companies.',
    group: 'design',
    params: [
      { key: 'company', flag: 'company', isPositional: true, type: 'string', required: true, labelAr: 'اسم الشركة', labelEn: 'Company Name', hintAr: 'اسم الشركة لتضمينه في الشعار', hintEn: 'Company name to include in the logo' },
      resolveParam('style'),
      resolveParam('ratio'),
      { key: 'colors', flag: 'colors', isPositional: false, type: 'string', required: false, labelAr: 'الألوان المطلوبة', labelEn: 'Required colors', hintAr: 'الألوان المطلوبة', hintEn: 'Required colors' }
    ],
    example: '/design logo [اسم الشركة] --style=minimalist --colors="blue, white" --ratio=1:1',
    qualityRules: ['الالتزام بنسبة الأبعاد', 'تصميم بسيط وقابل للتصغير', 'استخدام الألوان المحددة'],
    keywords: ['تصميم', 'شعار', 'logo', 'design', 'branding'],
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    usageCount: 42,
    isFavorite: false
  },
  {
    id: '3',
    code: '/video script',
    titleAr: 'كتابة نص فيديو',
    titleEn: 'Write Video Script',
    descriptionAr: 'كتابة نص احترافي لفيديوهات يوتيوب أو تيك توك.',
    descriptionEn: 'Write a professional script for YouTube or TikTok.',
    group: 'video',
    params: [
      { key: 'topic', flag: 'topic', isPositional: true, type: 'string', required: true, labelAr: 'الموضوع', labelEn: 'Topic', hintAr: 'موضوع الفيديو', hintEn: 'Video topic' },
      resolveParam('duration'),
      resolveParam('tone'),
      resolveParam('target')
    ],
    example: '/video script [الموضوع] --duration="60s" --tone=engaging --target=teens',
    qualityRules: ['مقدمة خطافية (Hook) قوية', 'توزيع وقت منطقي', 'دعوة لاتخاذ إجراء (CTA) واضحة'],
    keywords: ['فيديو', 'نص', 'يوتيوب', 'تيك توك', 'script', 'video'],
    createdAt: new Date(Date.now() - 86400000 * 10).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 10).toISOString(),
    usageCount: 8,
    isFavorite: false
  },
  {
    id: '4',
    code: '/cv review',
    titleAr: 'مراجعة سيرة ذاتية',
    titleEn: 'Review CV',
    descriptionAr: 'تحليل السيرة الذاتية وتقديم اقتراحات للتحسين.',
    descriptionEn: 'Analyze CV and provide improvement suggestions.',
    group: 'cv',
    params: [
      { key: 'content', flag: 'content', isPositional: true, type: 'text', required: true, labelAr: 'محتوى السيرة', labelEn: 'CV Content', hintAr: 'انسخ والصق محتوى السيرة هنا (multiline)', hintEn: 'Copy and paste CV content here (multiline)' },
      resolveParam('role'),
      resolveParam('experience'),
      resolveParam('language')
    ],
    example: '/cv review [محتوى السيرة] --role="Software Engineer" --experience=senior --language=en',
    qualityRules: ['التركيز على الإنجازات والأرقام', 'تحسين الكلمات المفتاحية للـ ATS', 'اقتراح أفعال قوية'],
    keywords: ['سيرة ذاتية', 'توظيف', 'مراجعة', 'cv', 'resume', 'review'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    usageCount: 112,
    isFavorite: true
  }
];
