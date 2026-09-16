import { CommandPrompt } from '../../../../types/prompt';
import { resolveParam } from '../../../paramRegistry';
import {
  KIDS_QUALITY_RULES,
  STANDARD_FORMAT_PARAM
} from './constants';

export const KIDS_SCIENCE_PROMPTS: CommandPrompt[] = [
  {
    id: 'edu-kids-sci-053',
    code: '/life cycle',
    titleAr: 'دورة الحياة البصرية والمتحركة',
    titleEn: 'Visual Organism Life Cycle Sheet',
    descriptionAr: 'ينشئ مخطط دورة حياة كائن حي (فراشة، ضفدع، نبتة) مع مراحل مرقمة للتلوين والترتيب.',
    descriptionEn: 'Generates a circular life cycle diagram for plants or animals with cut-and-paste or coloring stages.',
    group: 'edu',
    stage: ['primary'],
    subject: ['science'],
    task: ['explain', 'activity'],
    outputType: 'mixed',
    outputBadges: ['علوم', 'دورة الحياة', 'إنفوجرافيك علمي'],
    params: [
      {
        key: 'organism',
        flag: 'organism',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'الكائن الحي',
        labelEn: 'Organism',
        hintAr: 'مثال: الفراشة، الضفدع، نبات الفول، الدجاجة',
        hintEn: 'e.g. Butterfly, Frog'
      },
      resolveParam('grade'),
      {
        key: 'stages',
        flag: 'stages',
        isPositional: false,
        type: 'number',
        required: false,
        defaultValue: 4,
        default: 4,
        labelAr: 'عدد المراحل',
        labelEn: 'Stages count',
        hintAr: '4',
        hintEn: '4'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/life cycle الفراشة --grade=2 --stages=4 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'مخطط دائري بأسهم اتجاهية توضح الاستمرارية والتحول.',
      'مربع تسمية علمية مبسطة أسفل كل مرحلة (بيضة، يرقة، عذراء، فراشة).'
    ],
    keywords: ['life cycle', 'دورة حياة', 'دورة الفراشة', 'علوم الابتدائي'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 164,
    isFavorite: true
  },
  {
    id: 'edu-kids-sci-054',
    code: '/animal habitat',
    titleAr: 'مواطن الحيوانات وبيئاتها',
    titleEn: 'Animal Habitats Matching & Sorting',
    descriptionAr: 'ينشئ نشاط تصنيف الحيوانات حسب موطنها الطبيعي (غابة، صحراء، محيط، قطب).',
    descriptionEn: 'Builds a habitat sorting infographic categorizing animals into ocean, desert, forest, and polar regions.',
    group: 'edu',
    stage: ['early_childhood', 'primary'],
    subject: ['science'],
    task: ['practice', 'activity'],
    outputType: 'mixed',
    outputBadges: ['علوم', 'بيئات الحيوانات', 'تصنيف بيئي'],
    params: [
      {
        key: 'habitats',
        flag: 'habitats',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'المواطن البيئية',
        labelEn: 'Habitats',
        hintAr: 'مثال: الغابة، الصحراء، البحر، القطب المتجمد',
        hintEn: 'e.g. Forest, Desert, Ocean'
      },
      resolveParam('grade'),
      STANDARD_FORMAT_PARAM
    ],
    example: `/animal habitat الغابة والصحراء والبحر --grade=1 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'خلفيات بيئية مميزة برسم كرتوني يمثل التضاريس والمناخ.',
      'حيوانات موزعة بدقة مع خطوط توصيل أو مربعات لصق.'
    ],
    keywords: ['animal habitat', 'مواطن الحيوانات', 'الغابة والصحراء', 'علوم طبيعية'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 130,
    isFavorite: false
  },
  {
    id: 'edu-kids-sci-055',
    code: '/five senses',
    titleAr: 'الحواس الخمس والاستكشاف',
    titleEn: 'Five Senses Discovery Worksheet',
    descriptionAr: 'ينشئ نشاط استكشاف الحواس الخمس وربط كل حاسة بالأشياء التي نختبرها بها.',
    descriptionEn: 'Designs an interactive five senses worksheet linking sight, sound, touch, taste, and smell to daily life.',
    group: 'edu',
    stage: ['early_childhood'],
    subject: ['science'],
    task: ['activity', 'practice'],
    outputType: 'mixed',
    outputBadges: ['علوم', 'الحواس الخمس', 'استكشاف حسي'],
    params: [
      {
        key: 'sense',
        flag: 'sense',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'الحواس المطلوبة',
        labelEn: 'Senses',
        hintAr: 'مثال: الحواس الخمس كاملة، حاسة اللمس والتذوق',
        hintEn: 'e.g. All five senses'
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
    example: `/five senses الحواس الخمس كاملة --age=4 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'أيقونات واضحة لأعضاء الحس (العين، الأذن، الأنف، اللسان، اليد).',
      'توصيل كل عضو بالخبرات الحسية المناسبة (مثلاً: اللسان مع الآيسكريم).'
    ],
    keywords: ['five senses', 'الحواس الخمس', 'اللمس والرؤية', 'علوم الروضة'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 145,
    isFavorite: true
  },
  {
    id: 'edu-kids-sci-056',
    code: '/weather chart',
    titleAr: 'مخطط الطقس اليومي والأسبوعي',
    titleEn: 'Daily Weather Tracker Chart',
    descriptionAr: 'ينشئ لوحة تتبع يومية للطقس والفصول والملابس المناسبة لكل حالة جوية.',
    descriptionEn: 'Creates a printable weather tracker and seasons chart for kids to record daily conditions.',
    group: 'edu',
    stage: ['early_childhood'],
    subject: ['science', 'general'],
    task: ['activity', 'practice'],
    outputType: 'mixed',
    outputBadges: ['علوم', 'مخطط الطقس', 'ملاحظة يومية'],
    params: [
      {
        key: 'period',
        flag: 'period',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'المدة الزمنية',
        labelEn: 'Period',
        hintAr: 'مثال: أسبوع، شهر، فصول السنة الأربعة',
        hintEn: 'e.g. Weekly tracker'
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
    example: `/weather chart أسبوع --age=4 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'رموز حالة الجو (مشمس، ممطر، غائم، عاصف، مثلج) للتلوين أو وضع علامة صح.',
      'مساحة لتدوين يوم الأسبوع واختيار الملابس المناسبة.'
    ],
    keywords: ['weather chart', 'مخطط الطقس', 'حالة الجو', 'فصول السنة'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 122,
    isFavorite: false
  },
  {
    id: 'edu-kids-sci-057',
    code: '/plant parts',
    titleAr: 'أجزاء النبتة ووظائفها',
    titleEn: 'Plant Anatomy & Functions Diagram',
    descriptionAr: 'ينشئ ملصقًا أو ورقة نشاط لأجزاء النبات (جذور، ساق، أوراق، زهرة) ووظيفة كل جزء.',
    descriptionEn: 'Generates an infographic worksheet on plant anatomy (roots, stem, leaves, flower) and their roles.',
    group: 'edu',
    stage: ['primary'],
    subject: ['science'],
    task: ['explain', 'activity'],
    outputType: 'mixed',
    outputBadges: ['علوم', 'أجزاء النبتة', 'رسم تشريحي مبسط'],
    params: [
      {
        key: 'focus',
        flag: 'focus',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'التركيز التعليمي',
        labelEn: 'Focus',
        hintAr: 'مثال: الأجزاء والوظائف، ماذا تحتاج النبتة لتنمو',
        hintEn: 'e.g. Parts and functions'
      },
      resolveParam('grade'),
      STANDARD_FORMAT_PARAM
    ],
    example: `/plant parts الأجزاء والوظائف --grade=2 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'رسم مركزي واضح لنبتة كاملة من الجذور في التربة وحتى الزهرة.',
      'صناديق تأشير وكتابة التسميات والوظيفة الحيوية لكل جزء.'
    ],
    keywords: ['plant parts', 'أجزاء النبتة', 'جذور وساق وأوراق', 'علوم النبات'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 149,
    isFavorite: false
  },
  {
    id: 'edu-kids-sci-058',
    code: '/simple experiment',
    titleAr: 'تجربة علمية منزلية/صفية مصورة',
    titleEn: 'Illustrated Hands-on Science Experiment',
    descriptionAr: 'ينشئ بطاقة تجربة علمية آمنة بأدوات المطبخ أو الصف مع خطوات مصورة وتوقع وتفسير.',
    descriptionEn: 'Designs a safe, illustrated science experiment card with materials, steps, predictions, and explanations.',
    group: 'edu',
    stage: ['primary'],
    subject: ['science'],
    task: ['practice', 'activity'],
    outputType: 'mixed',
    outputBadges: ['علوم', 'تجربة علمية', 'أدوات منزلية'],
    params: [
      {
        key: 'experiment',
        flag: 'experiment',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'اسم أو موضوع التجربة',
        labelEn: 'Experiment',
        hintAr: 'مثال: الطفو والانغمار، صنع بركان الخل، انتقال الماء الملون',
        hintEn: 'e.g. Sink or Float'
      },
      resolveParam('grade'),
      STANDARD_FORMAT_PARAM
    ],
    example: `/simple experiment الطفو والانغمار --grade=3 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'صندوق "ماذا تتوقع أن يحدث؟" لتشجيع التفكير العلمي الافتراضي.',
      'خطوات تسلسلية مرقمة ومصورة وتفسير علمي في جملتين لا أكثر.'
    ],
    keywords: ['simple experiment', 'تجربة علمية', 'الطفو والانغمار', 'تجارب للأطفال'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 158,
    isFavorite: true
  }
];
