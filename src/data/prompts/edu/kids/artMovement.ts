import { CommandPrompt } from '../../../../types/prompt';
import { resolveParam } from '../../../paramRegistry';
import {
  KIDS_QUALITY_RULES,
  STANDARD_FORMAT_PARAM
} from './constants';

export const KIDS_ART_MOVEMENT_PROMPTS: CommandPrompt[] = [
  {
    id: 'edu-kids-art-033',
    code: '/color and learn',
    titleAr: 'تلوين وتعلم معرفي',
    titleEn: 'Color and Learn Illustrated Sheet',
    descriptionAr: 'ينشئ صفحة تلوين مرتبطة بمعلومة أو درس بسيط مع إرشادات فنية ممتعة.',
    descriptionEn: 'Designs an informative coloring sheet where coloring reinforces a core educational lesson.',
    group: 'edu',
    stage: ['primary'],
    subject: ['science', 'general', 'geography'],
    task: ['activity', 'explain'],
    outputType: 'mixed',
    outputBadges: ['تلوين', 'رسم ومعرفة', 'إبداع فني'],
    params: [
      {
        key: 'topic',
        flag: 'topic',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'الموضوع',
        labelEn: 'Topic',
        hintAr: 'مثال: الكواكب، أعماق المحيط، الطيور المهاجرة',
        hintEn: 'e.g. Solar planets'
      },
      resolveParam('grade'),
      resolveParam('subject'),
      STANDARD_FORMAT_PARAM
    ],
    example: `/color and learn الكواكب --grade=1 --subject=science --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'خطوط خارجية عريضة ونظيفة (Outlines) تمنع خروج الألوان.',
      'نصوص تعريفية صغيرة بجانب كل عنصر يتعلمها الطفل أثناء التلوين.'
    ],
    keywords: ['color and learn', 'تلوين وتعلم', 'الكواكب', 'رسم أطفال'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 172,
    isFavorite: true
  },
  {
    id: 'edu-kids-art-034',
    code: '/color by number',
    titleAr: 'التلوين حسب الرقم والعمليات',
    titleEn: 'Color by Number Math Activity',
    descriptionAr: 'ينشئ نشاط تلوين حسب الرقم لتعلم الأعداد أو حل العمليات الحسابية البسيطة لكشف الصورة.',
    descriptionEn: 'Generates a color-by-number or color-by-math worksheet revealing a hidden illustration.',
    group: 'edu',
    stage: ['primary'],
    subject: ['math'],
    task: ['practice', 'activity'],
    outputType: 'mixed',
    outputBadges: ['تلوين', 'رياضيات', 'التلوين بالأرقام'],
    params: [
      {
        key: 'skill',
        flag: 'skill',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'المهارة الحسابية',
        labelEn: 'Math skill',
        hintAr: 'مثال: الجمع حتى 10، جداول الضرب، الأرقام حتى 20',
        hintEn: 'e.g. Addition up to 10'
      },
      resolveParam('grade'),
      STANDARD_FORMAT_PARAM
    ],
    example: `/color by number الجمع حتى 10 --grade=1 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'دليل ألوان واضح في أعلى الصفحة (مثلاً: 5 = أزرق، 8 = أخضر).',
      'توزيع العمليات الحسابية بدقة داخل المساحات المراد تلوينها.'
    ],
    keywords: ['color by number', 'تلوين بالأرقام', 'جمع حتى 10', 'رياضيات مرحة'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 145,
    isFavorite: false
  },
  {
    id: 'edu-kids-art-035',
    code: '/draw and tell',
    titleAr: 'ارسم وعبر بالكلمات',
    titleEn: 'Draw and Tell Expression Sheet',
    descriptionAr: 'ينشئ نشاطًا يطلب من الطفل الرسم في إطار مخصص ثم وصف ما رسمه بكلمات أو جمل بسيطة.',
    descriptionEn: 'Creates a creative prompt asking the child to draw an idea and articulate it with simple sentences.',
    group: 'edu',
    stage: ['early_childhood'],
    subject: ['arabic', 'literature', 'general'],
    task: ['activity', 'communication'],
    outputType: 'mixed',
    outputBadges: ['رسم', 'لغة وتعبير', 'إبداع الطفل'],
    params: [
      {
        key: 'prompt',
        flag: 'prompt',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'فكرة الرسم والتعبير',
        labelEn: 'Drawing prompt',
        hintAr: 'مثال: عائلتي، منزلي المستقبلي، حيواني المفضل',
        hintEn: 'e.g. My Family'
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
      resolveParam('language'),
      STANDARD_FORMAT_PARAM
    ],
    example: `/draw and tell عائلتي --age=5 --language=ar --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'إطار رسم واسع ومفتوح يتيح حرية الخيال للطفل.',
      'أسطر عريضة بنقاط إرشادية لكتابة جملة التعبير أسفل الرسم.'
    ],
    keywords: ['draw and tell', 'ارسم وعبر', 'عائلتي', 'تعبير بالرسم'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 110,
    isFavorite: false
  },
  {
    id: 'edu-kids-art-036',
    code: '/movement game',
    titleAr: 'لعبة حركية تعليمية في الصف',
    titleEn: 'Physical Movement Learning Game',
    descriptionAr: 'ينشئ لعبة حركية صفية مرتبطة بالحروف أو الأرقام أو الألوان أو الاتجاهات لتفريغ الطاقة الهادفة.',
    descriptionEn: 'Builds a kinesthetic classroom learning game combining physical movement with letters, numbers, or shapes.',
    group: 'edu',
    stage: ['early_childhood', 'primary'],
    subject: ['general', 'math', 'arabic'],
    task: ['activity', 'practice'],
    outputType: 'mixed',
    outputBadges: ['لعبة تعليمية', 'نشاط حركي', 'تفاعل صفي'],
    params: [
      {
        key: 'concept',
        flag: 'concept',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'المفهوم الحركي',
        labelEn: 'Concept',
        hintAr: 'مثال: الأشكال الهندسية، حركات الحروف، القفز بالأرقام',
        hintEn: 'e.g. Geometric shapes'
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
        key: 'location',
        flag: 'location',
        isPositional: false,
        type: 'string',
        required: false,
        defaultValue: 'classroom',
        default: 'classroom',
        labelAr: 'المكان',
        labelEn: 'Location',
        hintAr: 'classroom',
        hintEn: 'classroom'
      },
      {
        key: 'duration',
        flag: 'duration',
        isPositional: false,
        type: 'string',
        required: false,
        defaultValue: '10min',
        default: '10min',
        labelAr: 'المدة',
        labelEn: 'Duration',
        hintAr: '10min',
        hintEn: '10min'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/movement game الأشكال الهندسية --age=5 --location=classroom --duration=10min --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'قواعد بسيطة جداً قابلة للشرح في 30 ثانية بدون أدوات معقدة.',
      'بطاقات أرضية قابلة للطباعة وتوزيعها في أركان الغرفة.'
    ],
    keywords: ['movement game', 'لعبة حركية', 'نشاط بدني', 'ألعاب الصف'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 124,
    isFavorite: false
  },
  {
    id: 'edu-kids-art-037',
    code: '/scavenger sheet',
    titleAr: 'ورقة الاستكشاف والبحث المصورة',
    titleEn: 'Visual Scavenger Discovery Sheet',
    descriptionAr: 'ينشئ ورقة بحث مصورة عن أشياء حسية يجدها الطفل في الصف أو أرجاء المنزل.',
    descriptionEn: 'Creates an observational scavenger sheet to search and find sensory objects at home or school.',
    group: 'edu',
    stage: ['early_childhood'],
    subject: ['general', 'science'],
    task: ['activity', 'practice'],
    outputType: 'mixed',
    outputBadges: ['نشاط استكشاف', 'قوة الملاحظة', 'بحث حسي'],
    params: [
      {
        key: 'target',
        flag: 'target',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'العناصر المستهدفة',
        labelEn: 'Target items',
        hintAr: 'مثال: أشياء لونها أحمر، أشياء ناعمة وخشنة',
        hintEn: 'e.g. Red objects'
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
        key: 'location',
        flag: 'location',
        isPositional: false,
        type: 'string',
        required: false,
        defaultValue: 'home',
        default: 'home',
        labelAr: 'الموقع',
        labelEn: 'Location',
        hintAr: 'home أو classroom',
        hintEn: 'home or classroom'
      },
      {
        key: 'items',
        flag: 'items',
        isPositional: false,
        type: 'number',
        required: false,
        defaultValue: 8,
        default: 8,
        labelAr: 'عدد العناصر',
        labelEn: 'Items count',
        hintAr: '8',
        hintEn: '8'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/scavenger sheet أشياء لونها أحمر --age=4 --location=home --items=8 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'أيقونات واضحة مع مساحات لوضع علامة أو رسم ما عثر عليه الطفل.',
      'تشجيع الاستكشاف اللمسي والبصري الآمن.'
    ],
    keywords: ['scavenger sheet', 'بحث مصور', 'أشياء حمراء', 'استكشاف منزلي'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 96,
    isFavorite: false
  },
  {
    id: 'edu-kids-art-038',
    code: '/shape craft',
    titleAr: 'أشغال يدوية بالأشكال الهندسية',
    titleEn: 'Geometric Shape Craft Project',
    descriptionAr: 'ينشئ نشاط قص ولصق وأشغال يدوية لتكوين نماذج مجسمة ومنازل وكائنات باستخدام الأشكال.',
    descriptionEn: 'Generates a craft activity constructing objects and houses by combining cut-out geometric shapes.',
    group: 'edu',
    stage: ['early_childhood'],
    subject: ['math', 'general'],
    task: ['activity', 'project'],
    outputType: 'mixed',
    outputBadges: ['نشاط فني', 'أشكال هندسية', 'مهارات حركية'],
    params: [
      {
        key: 'project',
        flag: 'project',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'المجسم أو المشروع',
        labelEn: 'Craft project',
        hintAr: 'مثال: منزل من الأشكال الهندسية، قطار الأشكال، روبوت',
        hintEn: 'e.g. Shape house'
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
        key: 'materials',
        flag: 'materials',
        isPositional: false,
        type: 'string',
        required: false,
        defaultValue: 'paper,glue,colors',
        default: 'paper,glue,colors',
        labelAr: 'المواد',
        labelEn: 'Materials',
        hintAr: 'paper,glue,colors',
        hintEn: 'paper,glue,colors'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/shape craft منزل من الأشكال الهندسية --age=5 --materials=paper,glue,colors --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'قوالب أشكال هندسية جاهزة للقص (دوائر، مثلثات، مستطيلات، مربعات).',
      'مخطط تجميع توضيحي يبين الشكل النهائي المقترح.'
    ],
    keywords: ['shape craft', 'أشغال يدوية', 'منزل الأشكال', 'قص ولصق أشكال'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 115,
    isFavorite: false
  },
  {
    id: 'edu-kids-art-039',
    code: '/letter craft',
    titleAr: 'أشغال يدوية فنية لتجسيم الحروف',
    titleEn: 'Tactile Alphabet Letter Craft',
    descriptionAr: 'ينشئ نشاطًا فنيًا لتكوين وتزيين حرف باستخدام مواد بسيطة متوفرة.',
    descriptionEn: 'Designs a creative letter craft activity where children decorate and form letters with everyday textures.',
    group: 'edu',
    stage: ['early_childhood'],
    subject: ['arabic', 'english'],
    task: ['activity', 'practice'],
    outputType: 'mixed',
    outputBadges: ['نشاط فني', 'لغة وحروف', 'تعلم حسي'],
    params: [
      {
        key: 'letter',
        flag: 'letter',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'الحرف المستهدف',
        labelEn: 'Target letter',
        hintAr: 'مثال: حرف الميم، حرف الباء',
        hintEn: 'e.g. Letter Meem'
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
        key: 'materials',
        flag: 'materials',
        isPositional: false,
        type: 'string',
        required: false,
        defaultValue: 'paper,buttons,glue',
        default: 'paper,buttons,glue',
        labelAr: 'الخامات المقترحة',
        labelEn: 'Materials',
        hintAr: 'paper,buttons,glue',
        hintEn: 'paper,buttons,glue'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/letter craft حرف الميم --age=4 --materials=paper,buttons,glue --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'رسم مجسم ضخم للحرف مفرغ من الداخل للتعبئة بالأزرار أو القطن أو الورق الملون.',
      'ربط الحرف بكائن يبدأ به بنفس أسلوب التزيين (ميم = مظلة، موز).'
    ],
    keywords: ['letter craft', 'أشغال الحروف', 'حرف الميم', 'تزيين الحرف'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 106,
    isFavorite: false
  },
  {
    id: 'edu-kids-art-040',
    code: '/science craft',
    titleAr: 'أشغال يدوية ونماذج علمية',
    titleEn: 'Hands-on Science Model Craft',
    descriptionAr: 'ينشئ نشاطًا يدويًا بسيطًا وقابلاً للتركيب لتوضيح وتجسيد مفهوم علمي.',
    descriptionEn: 'Builds a hands-on paper science craft representing scientific cycles or animal adaptations.',
    group: 'edu',
    stage: ['primary'],
    subject: ['science'],
    task: ['activity', 'project'],
    outputType: 'mixed',
    outputBadges: ['نشاط فني', 'علوم وتطبيق', 'مجسم ورقي'],
    params: [
      {
        key: 'concept',
        flag: 'concept',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'المفهوم العلمي',
        labelEn: 'Science concept',
        hintAr: 'مثال: دورة حياة الفراشة، أطوار القمر، الرئتان',
        hintEn: 'e.g. Butterfly life cycle'
      },
      resolveParam('grade'),
      {
        key: 'materials',
        flag: 'materials',
        isPositional: false,
        type: 'string',
        required: false,
        defaultValue: 'paper,colors',
        default: 'paper,colors',
        labelAr: 'الأدوات',
        labelEn: 'Materials',
        hintAr: 'paper,colors',
        hintEn: 'paper,colors'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/science craft دورة حياة الفراشة --grade=2 --materials=paper,colors --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'أجزاء تفاعلية قابلة للطي (Foldable) أو التدوير لبيان التغير العلمي.',
      'خطوات واضحة بالرسم خطوة بخطوة للطفل والمعلم.'
    ],
    keywords: ['science craft', 'أشغال علمية', 'دورة الفراشة', 'مجسم علوم'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 122,
    isFavorite: false
  }
];
