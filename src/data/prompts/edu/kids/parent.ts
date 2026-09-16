import { CommandPrompt } from '../../../../types/prompt';
import {
  KIDS_QUALITY_RULES,
  STANDARD_FORMAT_PARAM
} from './constants';

export const KIDS_PARENT_PROMPTS: CommandPrompt[] = [
  {
    id: 'edu-kids-par-065',
    code: '/parent child activity',
    titleAr: 'نشاط تفاعلي مشترك بين الطفل والوالدين',
    titleEn: 'Parent-Child Bonding Activity Sheet',
    descriptionAr: 'ينشئ نشاطًا منزليًا مشتركًا يقوي الرابطة بين الوالدين والطفل مع هدف تعلمي وقيمي.',
    descriptionEn: 'Generates a collaborative home activity sheet strengthening parent-child bonding with educational goals.',
    group: 'edu',
    stage: ['early_childhood', 'primary'],
    subject: ['general'],
    task: ['activity', 'communication'],
    outputType: 'mixed',
    outputBadges: ['أنشطة أسرية', 'تواصل وتفاعل', 'تعلم منزلي'],
    params: [
      {
        key: 'topic',
        flag: 'topic',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'موضوع النشاط',
        labelEn: 'Activity topic',
        hintAr: 'مثال: صندوق الذكريات، شجرة العائلة، الحوار المسائي',
        hintEn: 'e.g. Family tree'
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
        key: 'duration',
        flag: 'duration',
        isPositional: false,
        type: 'string',
        required: false,
        defaultValue: '20min',
        default: '20min',
        labelAr: 'المدة المقترحة',
        labelEn: 'Duration',
        hintAr: '20min',
        hintEn: '20min'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/parent child activity صندوق الذكريات --age=5 --duration=20min --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'توفير قسم "نصيحة للأب والأم" يشرح كيفية التوجيه اللطيف دون ضغط.',
      'صندوق توثيق يكتب فيه الطفل انطباعه أو يلصق فيه بصمة إصبعه.'
    ],
    keywords: ['parent child activity', 'أنشطة الوالدين', 'تواصل أسري', 'نشاط منزلي'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 162,
    isFavorite: true
  },
  {
    id: 'edu-kids-par-066',
    code: '/weekend challenge',
    titleAr: 'تحدي عطلة نهاية الأسبوع المرح',
    titleEn: 'Weekend Family Fun Challenge',
    descriptionAr: 'ينشئ ورقة تحديات ممتعة لقضاء نهاية أسبوع مثمرة بعيدًا عن الشاشات الرقمية.',
    descriptionEn: 'Builds a screen-free weekend challenge board with creative tasks and outdoor missions.',
    group: 'edu',
    stage: ['early_childhood', 'primary'],
    subject: ['general'],
    task: ['activity', 'project'],
    outputType: 'mixed',
    outputBadges: ['أنشطة أسرية', 'بدون شاشات', 'عطلة نهاية الأسبوع'],
    params: [
      {
        key: 'theme',
        flag: 'theme',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'طابع التحدي',
        labelEn: 'Challenge theme',
        hintAr: 'مثال: يوم بدون شاشات، مغامرة الحديقة، مخترع المنزل',
        hintEn: 'e.g. Screen-free day'
      },
      {
        key: 'age',
        flag: 'age',
        isPositional: false,
        type: 'number',
        required: false,
        defaultValue: 6,
        default: 6,
        labelAr: 'العمر',
        labelEn: 'Age',
        hintAr: '6',
        hintEn: '6'
      },
      {
        key: 'challenges',
        flag: 'challenges',
        isPositional: false,
        type: 'number',
        required: false,
        defaultValue: 5,
        default: 5,
        labelAr: 'عدد التحديات',
        labelEn: 'Challenges count',
        hintAr: '5',
        hintEn: '5'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/weekend challenge يوم بدون شاشات --age=6 --challenges=5 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'مهمات محددة وقابلة للتنفيذ بسهولة مثل بناء قلعة وسائد أو إعداد مثلجات صحية.',
      'ختم بطل نهاية الأسبوع في أسفل الورقة للتوقيع العائلي.'
    ],
    keywords: ['weekend challenge', 'تحدي نهاية الأسبوع', 'بدون شاشات', 'لعب عائلي'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 147,
    isFavorite: false
  },
  {
    id: 'edu-kids-par-067',
    code: '/bedtime learning',
    titleAr: 'أنشطة ما قبل النوم الهادئة',
    titleEn: 'Gentle Bedtime Reflection & Stories',
    descriptionAr: 'ينشئ بطاقة نشاط هادئ لما قبل النوم تضم قصة امتنان وتأمل استرخائي وتمارين تنفس.',
    descriptionEn: 'Designs soothing bedtime reflection prompts, gratitude rituals, and calming breathing visuals.',
    group: 'edu',
    stage: ['early_childhood'],
    subject: ['general'],
    task: ['activity', 'communication'],
    outputType: 'mixed',
    outputBadges: ['أنشطة أسرية', 'ما قبل النوم', 'امتنان واسترخاء'],
    params: [
      {
        key: 'theme',
        flag: 'theme',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'طابع الجلسة',
        labelEn: 'Session theme',
        hintAr: 'مثال: الامتنان وشكر النعم، حكايات النجوم، الهدوء والسلام',
        hintEn: 'e.g. Gratitude'
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
    example: `/bedtime learning الامتنان وشكر النعم --age=4 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'ألوان ليلية مريحة (نيلي دافئ، رمادي ناعم، أصفر هادئ) لا تثير نشاط الطفل قبل النوم.',
      'تمرين 3 أشياء جميلة حدثت اليوم، مع تنفس بطيء بصري مرسوم كالبالون.'
    ],
    keywords: ['bedtime learning', 'قبل النوم', 'شكر النعم', 'استرخاء الأطفال'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 118,
    isFavorite: false
  },
  {
    id: 'edu-kids-par-068',
    code: '/cooking learning',
    titleAr: 'الطبخ والتعلم الحسابي في المطبخ',
    titleEn: 'Kitchen Math & Science Recipe Sheet',
    descriptionAr: 'ينشئ وصفة طعام بسيطة وآمنة توظف الحساب والقياس والعلوم في مطبخ الأسرة.',
    descriptionEn: 'Produces an illustrated kid-safe recipe card reinforcing fractions, counting, and states of matter.',
    group: 'edu',
    stage: ['early_childhood', 'primary'],
    subject: ['math', 'science', 'general'],
    task: ['activity', 'practice'],
    outputType: 'mixed',
    outputBadges: ['أنشطة أسرية', 'طبخ وحساب', 'علوم المطبخ'],
    params: [
      {
        key: 'recipe',
        flag: 'recipe',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'الوصفة أو الوجبة',
        labelEn: 'Recipe',
        hintAr: 'مثال: سلطة الفواكه، بان كيك الأرقام، كرات التمر',
        hintEn: 'e.g. Fruit salad'
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
    example: `/cooking learning سلطة الفواكه --age=5 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'قائمة مقادير بصرية بأكواب وملاعق وأرقام سهلة العد والقياس.',
      'خطوات سلامة بارزة تؤكد على إشراف الوالدين وعدم لمس الأدوات الحادة أو الساخنة.'
    ],
    keywords: ['cooking learning', 'طبخ للأطفال', 'سلطة الفواكه', 'حساب في المطبخ'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 125,
    isFavorite: false
  },
  {
    id: 'edu-kids-par-069',
    code: '/car ride games',
    titleAr: 'ألعاب الطريق والسيارة المصورة',
    titleEn: 'Road Trip & Car Ride Visual Games',
    descriptionAr: 'ينشئ بطاقة ألعاب ورقية للملاحظة البصرية أثناء السفر والتنقل بالسيارة.',
    descriptionEn: 'Generates a printable road-trip visual scavenger and game sheet for car rides.',
    group: 'edu',
    stage: ['early_childhood', 'primary'],
    subject: ['general'],
    task: ['activity', 'practice'],
    outputType: 'mixed',
    outputBadges: ['أنشطة أسرية', 'ألعاب السيارة', 'قوة الملاحظة'],
    params: [
      {
        key: 'theme',
        flag: 'theme',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'طابع الطريق',
        labelEn: 'Trip theme',
        hintAr: 'مثال: لوحات المرور، ألوان السيارات، جسور ومباني',
        hintEn: 'e.g. Road signs'
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
        defaultValue: 10,
        default: 10,
        labelAr: 'عدد العناصر',
        labelEn: 'Items count',
        hintAr: '10',
        hintEn: '10'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/car ride games لوحات المرور وألوان السيارات --age=5 --items=10 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'شبكة بينجو الطريق السريع (Car Bingo) لشطب الأشياء التي يراها الطفل من النافذة.',
      'ألعاب كلامية خفيفة يتشارك فيها جميع ركاب السيارة.'
    ],
    keywords: ['car ride games', 'ألعاب السيارة', 'سفر وتنقل', 'بينجو الطريق'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 133,
    isFavorite: false
  },
  {
    id: 'edu-kids-par-070',
    code: '/nature walk sheet',
    titleAr: 'ورقة استكشاف الطبيعة والحديقة',
    titleEn: 'Nature Walk & Park Discovery Sheet',
    descriptionAr: 'ينشئ ورقة استكشاف تفاعلية لملاحظة الأشجار، الحشرات، أشكال السحاب، وحبات الحصى.',
    descriptionEn: 'Builds a nature-walk observation sheet for parks and outdoors with sensory prompts and sketches.',
    group: 'edu',
    stage: ['early_childhood', 'primary'],
    subject: ['science', 'general'],
    task: ['activity', 'practice'],
    outputType: 'mixed',
    outputBadges: ['أنشطة أسرية', 'استكشاف الطبيعة', 'ملاحظة علمية'],
    params: [
      {
        key: 'location',
        flag: 'location',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'الموقع الطبيعي',
        labelEn: 'Natural location',
        hintAr: 'مثال: حديقة الحي، شاطئ البحر، المزرعة',
        hintEn: 'e.g. City park'
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
        defaultValue: 8,
        default: 8,
        labelAr: 'عدد الملاحظات',
        labelEn: 'Items count',
        hintAr: '8',
        hintEn: '8'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/nature walk sheet حديقة الحي --age=5 --items=8 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'مساحة لجمع وفرك أوراق الأشجار بالورقة والشمع (Leaf Rubbing).',
      'مربعات مخصصة لرسم نوع حشرة أو صخرة شاهدها الطفل في الطبيعة.'
    ],
    keywords: ['nature walk', 'استكشاف الطبيعة', 'حديقة الحي', 'علوم بيئية للأطفال'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 154,
    isFavorite: true
  }
];
