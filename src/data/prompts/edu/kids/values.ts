import { CommandPrompt } from '../../../../types/prompt';
import { resolveParam } from '../../../paramRegistry';
import {
  KIDS_QUALITY_RULES,
  STANDARD_FORMAT_PARAM
} from './constants';

export const KIDS_VALUES_PROMPTS: CommandPrompt[] = [
  {
    id: 'edu-kids-val-059',
    code: '/good habits chart',
    titleAr: 'جدول العادات الحسنة والسلوكيات',
    titleEn: 'Good Habits & Manners Tracker',
    descriptionAr: 'ينشئ جدول متابعة أسبوعي للعادات الإيجابية اليومية مع نجوم ومكافآت بصرية للطفل.',
    descriptionEn: 'Produces a weekly habit tracking chart for positive daily routines with star rewards.',
    group: 'edu',
    stage: ['early_childhood', 'primary'],
    subject: ['general'],
    task: ['activity', 'lesson-plan'],
    outputType: 'mixed',
    outputBadges: ['قيم وأخلاق', 'جدول عادات', 'تحفيز إيجابي'],
    params: [
      {
        key: 'habits',
        flag: 'habits',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'العادات المطلوبة',
        labelEn: 'Target habits',
        hintAr: 'مثال: تنظيف الأسنان، الصلاة، الترتيب، قول الصدق',
        hintEn: 'e.g. Brushing teeth, Helping'
      },
      {
        key: 'age',
        flag: 'age',
        isPositional: false,
        type: 'number',
        required: false,
        defaultValue: 5,
        default: 5,
        labelAr: 'العمر',
        labelEn: 'Age',
        hintAr: '5',
        hintEn: '5'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/good habits chart تنظيف الأسنان والترتيب --age=5 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'أيام الأسبوع السبعة ممثلة بنجوم أو قلوب لتلوينها عند الإنجاز.',
      'صندوق مكافأة أسبوعية متفق عليها مع الوالدين أو المعلم.'
    ],
    keywords: ['good habits', 'عادات حسنة', 'جدول متابعة', 'تنظيف الأسنان'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 170,
    isFavorite: true
  },
  {
    id: 'edu-kids-val-060',
    code: '/kindness tree',
    titleAr: 'شجرة اللطف والأعمال الطيبة',
    titleEn: 'Kindness Tree Interactive Poster',
    descriptionAr: 'ينشئ شجرة أوراقها قابلة للتلوين أو اللصق كلما قام الطفل بعمل طيب أو كلمة لطيفة.',
    descriptionEn: 'Designs a printable "Kindness Tree" whose leaves blossom as the child performs good deeds.',
    group: 'edu',
    stage: ['early_childhood', 'primary'],
    subject: ['general'],
    task: ['activity', 'project'],
    outputType: 'mixed',
    outputBadges: ['قيم وأخلاق', 'شجرة اللطف', 'عمل طيب'],
    params: [
      {
        key: 'theme',
        flag: 'theme',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'محور اللطف',
        labelEn: 'Theme',
        hintAr: 'مثال: في الصف، مع الأسرة، مع الأصدقاء',
        hintEn: 'e.g. In Classroom'
      },
      resolveParam('grade'),
      STANDARD_FORMAT_PARAM
    ],
    example: `/kindness tree في الصف --grade=1 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'جذع شجرة كبير بأغصان وأوراق بيضاء فارغة لكتابة السلوك وتلوين الورقة.',
      'أمثلة مقترحة لأعمال اللطف اليومية مطبوعة بجانب الشجرة.'
    ],
    keywords: ['kindness tree', 'شجرة اللطف', 'كلمة طيبة', 'أخلاق حسنة'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 128,
    isFavorite: false
  },
  {
    id: 'edu-kids-val-061',
    code: '/social story',
    titleAr: 'قصة اجتماعية سلوكية مصورة',
    titleEn: 'Visual Social Story for Behavioral Cues',
    descriptionAr: 'ينشئ قصة اجتماعية بصرية قصيرة تعلم الطفل كيفية التصرف السليم في المواقف اليومية.',
    descriptionEn: 'Generates a short visual social story guiding children through everyday social and emotional situations.',
    group: 'edu',
    stage: ['early_childhood'],
    subject: ['general'],
    task: ['explain', 'activity'],
    outputType: 'mixed',
    outputBadges: ['قيم وأخلاق', 'قصة اجتماعية', 'سلوك إيجابي'],
    params: [
      {
        key: 'situation',
        flag: 'situation',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'الموقف الاجتماعي',
        labelEn: 'Social situation',
        hintAr: 'مثال: انتظار الدور، طلب الإذن، الاستئذان، الهدوء في الفصل',
        hintEn: 'e.g. Taking turns'
      },
      {
        key: 'age',
        flag: 'age',
        isPositional: false,
        type: 'number',
        required: false,
        defaultValue: 5,
        default: 5,
        labelAr: 'العمر',
        labelEn: 'Age',
        hintAr: '5',
        hintEn: '5'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/social story انتظار الدور --age=5 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'عبارات واضحة بصيغة المتكلم الإيجابية ("أنا أنتظر دوري بهدوء").',
      'صور معبرة لكل خطوة سلوكية من البداية وحتى التقدير والثناء.'
    ],
    keywords: ['social story', 'قصة اجتماعية', 'انتظار الدور', 'تعديل سلوك'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 119,
    isFavorite: false
  },
  {
    id: 'edu-kids-val-062',
    code: '/manners worksheet',
    titleAr: 'ورقة آداب وسلوكيات (صحيح وخاطئ)',
    titleEn: 'Manners & Etiquette True/False Sheet',
    descriptionAr: 'ينشئ ورقة عمل لتمييز السلوك الصحيح والسلوك الخاطئ في التعاملات والآداب العامة.',
    descriptionEn: 'Builds an etiquette worksheet distinguishing good manners from unacceptable behaviors.',
    group: 'edu',
    stage: ['early_childhood', 'primary'],
    subject: ['general'],
    task: ['practice', 'activity'],
    outputType: 'mixed',
    outputBadges: ['قيم وأخلاق', 'آداب وسلوك', 'صح وخطأ'],
    params: [
      {
        key: 'topic',
        flag: 'topic',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'مجال الآداب',
        labelEn: 'Etiquette topic',
        hintAr: 'مثال: آداب الطعام، آداب الحديث، احترام الكبير',
        hintEn: 'e.g. Table manners'
      },
      {
        key: 'age',
        flag: 'age',
        isPositional: false,
        type: 'number',
        required: false,
        defaultValue: 5,
        default: 5,
        labelAr: 'العمر',
        labelEn: 'Age',
        hintAr: '5',
        hintEn: '5'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/manners worksheet آداب الطعام --age=5 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'أزواج من الصور المتقابلة تظهر التصرف السليم والتصرف غير المرغوب.',
      'وجه مبتسم أخضر للسلوك الصحيح ووجه حزين برتقالي للسلوك الخاطئ للتلوين.'
    ],
    keywords: ['manners worksheet', 'آداب الطعام', 'سلوك صحيح', 'تربية أخلاقية'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 134,
    isFavorite: false
  },
  {
    id: 'edu-kids-val-063',
    code: '/safety rules',
    titleAr: 'قواعد السلامة والأمان المصورة',
    titleEn: 'Visual Safety Rules & Precautions Poster',
    descriptionAr: 'ينشئ لوحة إرشادية مرئية لقواعد السلامة في البيت أو المدرسة أو الشارع للأطفال.',
    descriptionEn: 'Creates an illustrated safety poster covering home safety, street crossing, or school playground rules.',
    group: 'edu',
    stage: ['early_childhood', 'primary'],
    subject: ['general'],
    task: ['explain', 'activity'],
    outputType: 'mixed',
    outputBadges: ['سلامة وأمان', 'قواعد المدرسة', 'حماية الطفل'],
    params: [
      {
        key: 'context',
        flag: 'context',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'بيئة السلامة',
        labelEn: 'Safety context',
        hintAr: 'مثال: في حافلة المدرسة، عند عبور الشارع، في المطبخ',
        hintEn: 'e.g. School bus safety'
      },
      resolveParam('grade'),
      STANDARD_FORMAT_PARAM
    ],
    example: `/safety rules في حافلة المدرسة --grade=1 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'إشارات تحذيرية كرتونية واضحة وسهلة الفهم بألوان تحذيرية محببة (أحمر، أصفر، أخضر).',
      'قاعدة ذهبية سهلة الحفظ في سطر واحد بارز.'
    ],
    keywords: ['safety rules', 'قواعد السلامة', 'حافلة المدرسة', 'أمان الأطفال'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 111,
    isFavorite: false
  },
  {
    id: 'edu-kids-val-064',
    code: '/sharing activity',
    titleAr: 'نشاط المشاركة والتعاون الإيجابي',
    titleEn: 'Sharing & Collaborative Play Activity',
    descriptionAr: 'ينشئ نشاطًا يشجع الطفل على التعاون والمشاركة مع إخوته أو زملائه في الصف.',
    descriptionEn: 'Designs a teamwork and sharing activity sheet reinforcing cooperation over competition.',
    group: 'edu',
    stage: ['early_childhood'],
    subject: ['general'],
    task: ['activity', 'communication'],
    outputType: 'mixed',
    outputBadges: ['قيم وأخلاق', 'المشاركة والتعاون', 'لعب جماعي'],
    params: [
      {
        key: 'concept',
        flag: 'concept',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'مجال المشاركة',
        labelEn: 'Concept',
        hintAr: 'مثال: مشاركة الألعاب، حل لغز مشترك، رسم لوحة جماعية',
        hintEn: 'e.g. Toy sharing'
      },
      {
        key: 'age',
        flag: 'age',
        isPositional: false,
        type: 'number',
        required: false,
        defaultValue: 4,
        default: 4,
        labelAr: 'العمر',
        labelEn: 'Age',
        hintAr: '4',
        hintEn: '4'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/sharing activity مشاركة الألعاب --age=4 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'توزيع دورين متكاملين على الورقة لكل طفل للمشاركة في إنجاز اللوحة معاً.',
      'رسالة تشجيعية تحتفي بروح الفريق والمحبة.'
    ],
    keywords: ['sharing activity', 'مشاركة الألعاب', 'تعاون الأطفال', 'لعب تشاركي'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 105,
    isFavorite: false
  }
];
