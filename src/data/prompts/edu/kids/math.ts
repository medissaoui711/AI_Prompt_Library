import { CommandPrompt } from '../../../../types/prompt';
import { resolveParam } from '../../../paramRegistry';
import {
  KIDS_QUALITY_RULES,
  STANDARD_FORMAT_PARAM
} from './constants';

export const KIDS_MATH_PROMPTS: CommandPrompt[] = [
  {
    id: 'edu-kids-math-047',
    code: '/number bonds',
    titleAr: 'روابط الأعداد ومكونات العدد',
    titleEn: 'Visual Number Bonds Worksheet',
    descriptionAr: 'ينشئ نشاط روابط ومكونات الأعداد بصريًا (جزء - جزء - كل) بأشكال ورسومات جذابة.',
    descriptionEn: 'Produces visual number bond diagrams (part-part-whole) with concrete illustrations.',
    group: 'edu',
    stage: ['early_childhood', 'primary'],
    subject: ['math'],
    task: ['practice', 'activity'],
    outputType: 'mixed',
    outputBadges: ['رياضيات', 'مكونات العدد', 'Part-Part-Whole'],
    params: [
      {
        key: 'target',
        flag: 'target',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'العدد المستهدف',
        labelEn: 'Target number',
        hintAr: 'مثال: مكونات العدد 10، مكونات العدد 5',
        hintEn: 'e.g. Number bonds to 10'
      },
      resolveParam('grade'),
      {
        key: 'style',
        flag: 'style',
        isPositional: false,
        type: 'string',
        required: false,
        defaultValue: 'apples,circles,domino',
        default: 'apples,circles,domino',
        labelAr: 'شكل الروابط',
        labelEn: 'Style',
        hintAr: 'apples,circles,domino',
        hintEn: 'apples,circles,domino'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/number bonds مكونات العدد 10 --grade=1 --style=apples,circles,domino --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'مخططات دوائر ثلاثية واضحة متصلة بخطوط (الكل بالأعلى والأجزاء بالأسفل).',
      'تمثيل العناصر بتفاح أو بالونات قابلة للتلوين والمطابقة.'
    ],
    keywords: ['number bonds', 'روابط الأعداد', 'مكونات العدد 10', 'رياضيات الابتدائي'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 150,
    isFavorite: true
  },
  {
    id: 'edu-kids-math-048',
    code: '/ten frames',
    titleAr: 'إطار العشرة البصري (Ten Frames)',
    titleEn: 'Ten Frames Counting & Addition Sheet',
    descriptionAr: 'ينشئ نشاط إطار العشرة لتعلم العد والجمع وتكوين العشرات بنقاط وأيقونات.',
    descriptionEn: 'Generates ten-frame worksheets for early subitizing, counting, and early addition.',
    group: 'edu',
    stage: ['early_childhood'],
    subject: ['math'],
    task: ['practice', 'activity'],
    outputType: 'mixed',
    outputBadges: ['رياضيات', 'إطار العشرة', 'Ten Frames'],
    params: [
      {
        key: 'skill',
        flag: 'skill',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'المهارة المطلوبة',
        labelEn: 'Math skill',
        hintAr: 'مثال: جمع الأعداد حتى 10، تمثيل الأرقام بالنقاط',
        hintEn: 'e.g. Addition to 10'
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
    example: `/ten frames جمع الأعداد حتى 10 --age=5 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'شبكات 2x5 بارزة مع نقاط ممتلئة ونقاط فارغة تسهل العد السريع.',
      'صناديق حسابية تحت كل إطار لكتابة المعادلة (مثال: 6 + 4 = 10).'
    ],
    keywords: ['ten frames', 'إطار العشرة', 'جمع مبكر', 'رياضيات بصرية'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 138,
    isFavorite: false
  },
  {
    id: 'edu-kids-math-049',
    code: '/count and color',
    titleAr: 'عد ولون الكميات',
    titleEn: 'Count and Color Quantities',
    descriptionAr: 'ينشئ نشاط عد العناصر وتلوين العدد المطلوب لتثبيت مفهوم الكميات والرموز العددية.',
    descriptionEn: 'Creates count-and-color sheets linking abstract numerals to concrete object sets.',
    group: 'edu',
    stage: ['early_childhood'],
    subject: ['math'],
    task: ['practice', 'activity'],
    outputType: 'mixed',
    outputBadges: ['رياضيات', 'عد وتلوين', 'مفاهيم الكمية'],
    params: [
      {
        key: 'range',
        flag: 'range',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'نطاق الأعداد',
        labelEn: 'Number range',
        hintAr: 'مثال: من 1 إلى 5، من 1 إلى 10',
        hintEn: 'e.g. 1 to 10'
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
      {
        key: 'theme',
        flag: 'theme',
        isPositional: false,
        type: 'string',
        required: false,
        defaultValue: 'animals,stars,cars',
        default: 'animals,stars,cars',
        labelAr: 'الموضوع',
        labelEn: 'Theme',
        hintAr: 'animals,stars,cars',
        hintEn: 'animals,stars,cars'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/count and color من 1 إلى 5 --age=4 --theme=animals,stars,cars --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'عناصر مبهجة متناثرة بشكل منظم يسهل عدها بالإصبع دون تداخل.',
      'مربع رقم كبير يكتب فيه الطفل العدد النهائي بعد التلوين.'
    ],
    keywords: ['count and color', 'عد ولون', 'أرقام من 1 إلى 5', 'رياضيات روضة'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 162,
    isFavorite: true
  },
  {
    id: 'edu-kids-math-050',
    code: '/pattern worksheet',
    titleAr: 'الأنماط والتتابع المنطقي',
    titleEn: 'Visual Pattern Recognition Worksheet',
    descriptionAr: 'ينشئ نشاط إكمال الأنماط (AB, AAB, ABC) بالأشكال والألوان والرموز.',
    descriptionEn: 'Builds pattern recognition and sequencing exercises (AB, ABB, ABC) using colors and icons.',
    group: 'edu',
    stage: ['early_childhood'],
    subject: ['math'],
    task: ['practice', 'activity'],
    outputType: 'mixed',
    outputBadges: ['رياضيات', 'أنماط منطقية', 'تفكير تحليلي'],
    params: [
      {
        key: 'pattern',
        flag: 'pattern',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'نوع النمط',
        labelEn: 'Pattern type',
        hintAr: 'مثال: AB, AAB, ABC بالأشكال والألوان',
        hintEn: 'e.g. AB patterns'
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
      {
        key: 'items',
        flag: 'items',
        isPositional: false,
        type: 'number',
        required: false,
        defaultValue: 6,
        default: 6,
        labelAr: 'عدد الصفوف',
        labelEn: 'Rows count',
        hintAr: '6',
        hintEn: '6'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/pattern worksheet AB, AAB بالأشكال --age=5 --items=6 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'مساحة مفرغة في نهاية كل سطر مخصصة ليرسم الطفل أو يلصق الشكل التالي.',
      'تدرج النمط من البسيط (لونين) إلى الأكثر تحدياً (شكل ولون).'
    ],
    keywords: ['pattern worksheet', 'أنماط الأشكال', 'تتابع منطقي', 'رياضيات مبكرة'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 114,
    isFavorite: false
  },
  {
    id: 'edu-kids-math-051',
    code: '/measurement fun',
    titleAr: 'القياس والمقارنة المصورة',
    titleEn: 'Visual Measurement & Comparison Sheet',
    descriptionAr: 'ينشئ نشاط مقارنة الأطوال والأوزان والأحجام بوحدات غير معيارية وأشرطة ملونة.',
    descriptionEn: 'Generates non-standard measurement activities comparing length, weight, and capacity.',
    group: 'edu',
    stage: ['primary'],
    subject: ['math'],
    task: ['activity', 'practice'],
    outputType: 'mixed',
    outputBadges: ['رياضيات', 'مفاهيم القياس', 'مقارنة الأحجام'],
    params: [
      {
        key: 'concept',
        flag: 'concept',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'مفهوم القياس',
        labelEn: 'Measurement concept',
        hintAr: 'مثال: أطول وأقصر، أثقل وأخف، القياس بالمشابك',
        hintEn: 'e.g. Longer and Shorter'
      },
      resolveParam('grade'),
      STANDARD_FORMAT_PARAM
    ],
    example: `/measurement fun أطول وأقصر --grade=1 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'رسوم توضيحية واقعية تقارن كائنات من البيئة (شجرة وعشبة، قط وفيّل).',
      'استخدام مكعبات أو مشابك ورق مرسومة كوحدات قياس بديلة.'
    ],
    keywords: ['measurement fun', 'أطول وأقصر', 'مقارنة الأطوال', 'قياس ابتدائي'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 102,
    isFavorite: false
  },
  {
    id: 'edu-kids-math-052',
    code: '/fractions visual',
    titleAr: 'الكسور المصورة (بيتزا، أشكال، أشرطة)',
    titleEn: 'Visual Fractions Infographic Activity',
    descriptionAr: 'ينشئ نشاط شرح وتدريب الكسور باستخدام شرائح البيتزا والأشكال الدائرية والمستطيلة.',
    descriptionEn: 'Creates visual fraction models using pizza slices, chocolate bars, and colored strip diagrams.',
    group: 'edu',
    stage: ['primary'],
    subject: ['math'],
    task: ['practice', 'explain'],
    outputType: 'mixed',
    outputBadges: ['رياضيات', 'كسور بصرية', 'بيتزا الكسور'],
    params: [
      {
        key: 'fractions',
        flag: 'fractions',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'الكسور المستهدفة',
        labelEn: 'Fractions',
        hintAr: 'مثال: النصف والربع والثلث، 1/2, 1/4, 3/4',
        hintEn: 'e.g. Halves and quarters'
      },
      resolveParam('grade'),
      {
        key: 'model',
        flag: 'model',
        isPositional: false,
        type: 'string',
        required: false,
        defaultValue: 'pizza,shapes,bars',
        default: 'pizza,shapes,bars',
        labelAr: 'النموذج البصري',
        labelEn: 'Visual model',
        hintAr: 'pizza,shapes,bars',
        hintEn: 'pizza,shapes,bars'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/fractions visual النصف والربع --grade=3 --model=pizza,shapes,bars --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'تمثيل الكسر بقطاعات دائرية مفرغة للتلوين وأشرطة كسرية للمقارنة.',
      'صناديق كتابة البسط والمقام بوضوح مع خط كسر بارز.'
    ],
    keywords: ['fractions visual', 'كسور بصرية', 'النصف والربع', 'بيتزا الكسور'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 141,
    isFavorite: false
  }
];
