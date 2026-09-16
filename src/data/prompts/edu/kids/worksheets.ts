import { CommandPrompt } from '../../../../types/prompt';
import { resolveParam } from '../../../paramRegistry';
import {
  KIDS_QUALITY_RULES,
  STANDARD_FORMAT_PARAM,
  STANDARD_PRINT_PARAM
} from './constants';

export const KIDS_WORKSHEET_PROMPTS: CommandPrompt[] = [
  {
    id: 'edu-kids-work-009',
    code: '/kindergarten worksheet',
    titleAr: 'ورقة عمل مبسطة للروضة',
    titleEn: 'Kindergarten Visual Worksheet',
    descriptionAr: 'ينشئ ورقة عمل بسيطة للروضة تعتمد على الصور والتوصيل والتلوين والتتبع.',
    descriptionEn: 'Creates a simple kindergarten worksheet focusing on pictures, matching, coloring, and finger tracing.',
    group: 'edu',
    stage: ['early_childhood'],
    subject: ['arabic', 'general', 'math'],
    task: ['practice', 'activity'],
    outputType: 'mixed',
    outputBadges: ['ورقة عمل', 'روضة أطفال', 'تتبع وتلوين'],
    params: [
      {
        key: 'topic',
        flag: 'topic',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'الموضوع أو الحرف',
        labelEn: 'Topic or Letter',
        hintAr: 'مثال: حرف الباء، الأشكال الهندسية',
        hintEn: 'e.g. Letter Baa, Basic shapes'
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
        key: 'activities',
        flag: 'activities',
        isPositional: false,
        type: 'string',
        required: false,
        defaultValue: 'trace,color,match',
        default: 'trace,color,match',
        labelAr: 'الأنشطة',
        labelEn: 'Activities',
        hintAr: 'trace,color,match',
        hintEn: 'trace,color,match'
      },
      STANDARD_FORMAT_PARAM,
      STANDARD_PRINT_PARAM
    ],
    example: `/kindergarten worksheet حرف الباء --age=4 --activities=trace,color,match --format=educational-newspaper-infographic --print-ready=yes`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'مساحات كتابة وتلوين واسعة بأبعاد تناسب تحكم الطفل بالقلم.',
      'تضمين مسار تنقيط واضح لتتبع كتابة الحرف أو الرقم.'
    ],
    keywords: ['kindergarten worksheet', 'ورقة عمل روضة', 'تلوين', 'تتبع الحروف'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 155,
    isFavorite: true
  },
  {
    id: 'edu-kids-work-010',
    code: '/primary worksheet',
    titleAr: 'ورقة عمل متدرجة للابتدائي',
    titleEn: 'Graded Primary Worksheet',
    descriptionAr: 'ينشئ ورقة عمل ابتدائية تضم تدريبات متدرجة مع مساحة كافية للحل وإجابات منفصلة.',
    descriptionEn: 'Generates a progressive primary worksheet with ample answering space and separate answer keys.',
    group: 'edu',
    stage: ['primary'],
    subject: ['math', 'science', 'arabic', 'english'],
    task: ['practice', 'assessment'],
    outputType: 'mixed',
    outputBadges: ['ورقة عمل', 'ابتدائي', 'تدريبات متدرجة'],
    params: [
      {
        key: 'topic',
        flag: 'topic',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'الدرس أو المهارة',
        labelEn: 'Lesson / Skill',
        hintAr: 'مثال: جمع الكسور، كان وأخواتها',
        hintEn: 'e.g. Adding fractions'
      },
      resolveParam('grade'),
      {
        key: 'questions',
        flag: 'questions',
        isPositional: false,
        type: 'number',
        required: false,
        defaultValue: 12,
        default: 12,
        labelAr: 'عدد الأسئلة',
        labelEn: 'Questions count',
        hintAr: '12',
        hintEn: '12'
      },
      {
        key: 'difficulty',
        flag: 'difficulty',
        isPositional: false,
        type: 'string',
        required: false,
        defaultValue: 'medium',
        default: 'medium',
        labelAr: 'الصعوبة',
        labelEn: 'Difficulty',
        hintAr: 'easy, medium, hard',
        hintEn: 'easy, medium, hard'
      },
      STANDARD_FORMAT_PARAM,
      {
        key: 'answers',
        flag: 'answers',
        isPositional: false,
        type: 'string',
        required: false,
        defaultValue: 'separate',
        default: 'separate',
        labelAr: 'الإجابات',
        labelEn: 'Answers',
        hintAr: 'separate',
        hintEn: 'separate'
      }
    ],
    example: `/primary worksheet جمع الكسور --grade=5 --questions=12 --difficulty=medium --format=educational-newspaper-infographic --answers=separate`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'تدرج الأسئلة من المباشر إلى التطبيقي مع إبراز أمثلة محلولة أولاً.',
      'توفير حقول واضحة لإعادة المحاولة والملاحظات.'
    ],
    keywords: ['primary worksheet', 'ورقة عمل ابتدائي', 'تدريبات محلولة', 'تمارين رياضيات'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 148,
    isFavorite: true
  },
  {
    id: 'edu-kids-work-011',
    code: '/picture worksheet',
    titleAr: 'ورقة عمل الصور والرموز البصرية',
    titleEn: 'Visual Picture-Based Worksheet',
    descriptionAr: 'ينشئ نشاطًا يعتمد على الصور بدل النصوص الطويلة، مناسب للمطابقة والتصنيف والتلوين.',
    descriptionEn: 'Builds a picture-heavy worksheet replacing long texts with intuitive graphics for matching and sorting.',
    group: 'edu',
    stage: ['early_childhood', 'primary'],
    subject: ['science', 'general', 'arabic'],
    task: ['activity', 'practice'],
    outputType: 'mixed',
    outputBadges: ['ورقة عمل', 'بصري بالكامل', 'مطابقة صور'],
    params: [
      {
        key: 'topic',
        flag: 'topic',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'موضوع الصور',
        labelEn: 'Pictures Topic',
        hintAr: 'مثال: الحيوانات البرية والبحرية',
        hintEn: 'e.g. Wild and sea animals'
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
        key: 'activities',
        flag: 'activities',
        isPositional: false,
        type: 'string',
        required: false,
        defaultValue: 'match,sort,color',
        default: 'match,sort,color',
        labelAr: 'نوع الأنشطة',
        labelEn: 'Activities',
        hintAr: 'match,sort,color',
        hintEn: 'match,sort,color'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/picture worksheet الحيوانات البرية --age=5 --activities=match,sort,color --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'استبدال النصوص بالرسوم التوضيحية والأشكال التعبيرية السلسة.',
      'تضمين أسهم وتوجيهات بصرية مرسومة.'
    ],
    keywords: ['picture worksheet', 'ورقة صور', 'نشاط بصري', 'مطابقة بالصور'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 112,
    isFavorite: false
  },
  {
    id: 'edu-kids-work-012',
    code: '/cut and paste',
    titleAr: 'نشاط القص واللصق الحركي',
    titleEn: 'Cut and Paste Learning Activity',
    descriptionAr: 'ينشئ ورقة قص ولصق لتصنيف الصور أو ترتيبها أو مطابقتها بأيدي الأطفال.',
    descriptionEn: 'Designs a tactile cut-and-paste activity sheet for hands-on classification, ordering, and assembly.',
    group: 'edu',
    stage: ['early_childhood', 'primary'],
    subject: ['science', 'general', 'math'],
    task: ['activity', 'practice'],
    outputType: 'mixed',
    outputBadges: ['ورقة عمل', 'قص ولصق', 'نشاط يدوي'],
    params: [
      {
        key: 'topic',
        flag: 'topic',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'موضوع القص واللصق',
        labelEn: 'Topic',
        hintAr: 'مثال: مراحل نمو النبات، أجزاء الجسم، تصنيف الطعام الصحي',
        hintEn: 'e.g. Plant life cycle stages'
      },
      resolveParam('grade'),
      resolveParam('subject'),
      STANDARD_FORMAT_PARAM,
      STANDARD_PRINT_PARAM
    ],
    example: `/cut and paste مراحل نمو النبات --grade=1 --subject=science --format=educational-newspaper-infographic --print-ready=yes`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'توفير خطوط تقطيع منقطة بمقص توضيحي بارز.',
      'صناديق استقبال واضحة المعالم ومرقمة للصق العناصر بداخلها.'
    ],
    keywords: ['cut and paste', 'قص ولصق', 'أشغال يدوية', 'ترتيب وتصنيف'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 135,
    isFavorite: false
  },
  {
    id: 'edu-kids-work-013',
    code: '/trace and write',
    titleAr: 'نشاط التتبع والكتابة الأولى',
    titleEn: 'Trace and Write Handwriting Sheet',
    descriptionAr: 'ينشئ نشاط تتبع وكتابة للحروف أو الأرقام أو الكلمات بنقاط إرشادية وأسهم اتجاه.',
    descriptionEn: 'Generates tracing and guided handwriting practice for letters, numbers, and basic words.',
    group: 'edu',
    stage: ['early_childhood'],
    subject: ['arabic', 'math', 'english'],
    task: ['practice', 'activity'],
    outputType: 'mixed',
    outputBadges: ['ورقة عمل', 'تتبع ونقاط', 'تحسين الخط'],
    params: [
      {
        key: 'content',
        flag: 'content',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'العناصر المراد كتابتها',
        labelEn: 'Items to trace',
        hintAr: 'مثال: الأرقام من 1 إلى 10، الحروف الهجائية',
        hintEn: 'e.g. Numbers 1 to 10'
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
      resolveParam('language'),
      STANDARD_FORMAT_PARAM
    ],
    example: `/trace and write الأرقام من 1 إلى 10 --age=4 --language=ar --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'أسهم توجيهية توضح نقطة بداية القلم واتجاه الحركة.',
      'تدرج من التنقيط الكثيف إلى كتابة العنصر بشكل حر.'
    ],
    keywords: ['trace and write', 'تتبع وكتابة', 'تنقيط الحروف', 'كتابة الأرقام'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 118,
    isFavorite: false
  },
  {
    id: 'edu-kids-work-014',
    code: '/match worksheet',
    titleAr: 'نشاط المطابقة والتوصيل',
    titleEn: 'Matching Connections Worksheet',
    descriptionAr: 'ينشئ نشاط مطابقة بين كلمات وصور أو أرقام وكميات أو عناصر وعناوين.',
    descriptionEn: 'Creates a matching and line-connecting activity between words, images, quantities, or functions.',
    group: 'edu',
    stage: ['early_childhood', 'primary'],
    subject: ['science', 'arabic', 'math', 'general'],
    task: ['practice', 'activity'],
    outputType: 'mixed',
    outputBadges: ['ورقة عمل', 'مطابقة وتوصيل', 'ربط المفاهيم'],
    params: [
      {
        key: 'topic',
        flag: 'topic',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'موضوع المطابقة',
        labelEn: 'Matching topic',
        hintAr: 'مثال: الحيوانات وأصواتها، الحرف والصورة',
        hintEn: 'e.g. Animals and their sounds'
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
        key: 'pairs',
        flag: 'pairs',
        isPositional: false,
        type: 'number',
        required: false,
        defaultValue: 8,
        default: 8,
        labelAr: 'عدد الأزواج',
        labelEn: 'Pairs count',
        hintAr: '8',
        hintEn: '8'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/match worksheet الحيوانات وأصواتها --age=5 --pairs=8 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'عمودان متقابلان بمسافات كافية لرسم خطوط التوصيل بسلاسة.',
      'نقاط توصيل ملونة (Connection Dots) تسهل على الطفل توجيه القلم.'
    ],
    keywords: ['match worksheet', 'توصيل', 'مطابقة', 'الحيوانات وأصواتها'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 122,
    isFavorite: false
  },
  {
    id: 'edu-kids-work-015',
    code: '/sort worksheet',
    titleAr: 'نشاط التصنيف والفرز البصري',
    titleEn: 'Visual Sorting & Categorization Sheet',
    descriptionAr: 'ينشئ نشاط تصنيف العناصر حسب اللون أو الحجم أو النوع أو الوظيفة.',
    descriptionEn: 'Generates a sorting worksheet to classify items by color, size, category, or function.',
    group: 'edu',
    stage: ['early_childhood'],
    subject: ['math', 'general', 'science'],
    task: ['practice', 'activity'],
    outputType: 'mixed',
    outputBadges: ['ورقة عمل', 'تصنيف وفرز', 'تفكير منطقي'],
    params: [
      {
        key: 'criteria',
        flag: 'criteria',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'معيار التصنيف',
        labelEn: 'Sorting criteria',
        hintAr: 'مثال: كبير وصغير، حيوانات أليفة وبرية، صلب وسائل',
        hintEn: 'e.g. Big and Small'
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
        key: 'items',
        flag: 'items',
        isPositional: false,
        type: 'number',
        required: false,
        defaultValue: 12,
        default: 12,
        labelAr: 'عدد العناصر',
        labelEn: 'Items count',
        hintAr: '12',
        hintEn: '12'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/sort worksheet كبير وصغير --age=4 --items=12 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'صناديق تصنيف كبيرة ومميزة بألوان أو أيقونات دالة.',
      'تنوع العناصر لتشمل أشكالاً مألوفة من بيئة الطفل.'
    ],
    keywords: ['sort worksheet', 'تصنيف', 'فرز الأشكال', 'كبير وصغير'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 94,
    isFavorite: false
  },
  {
    id: 'edu-kids-work-016',
    code: '/sequence worksheet',
    titleAr: 'نشاط ترتيب الخطوات والتسلسل',
    titleEn: 'Step-by-Step Sequencing Activity',
    descriptionAr: 'ينشئ نشاط ترتيب خطوات قصة أو عملية أو حدث يومي لتنمية التفكير المتسلسل.',
    descriptionEn: 'Builds a sequencing activity sheet to arrange steps of a story, daily routine, or scientific process.',
    group: 'edu',
    stage: ['early_childhood', 'primary'],
    subject: ['science', 'general', 'arabic'],
    task: ['activity', 'practice'],
    outputType: 'mixed',
    outputBadges: ['ورقة عمل', 'تسلسل زمني', 'ترتيب أحداث'],
    params: [
      {
        key: 'process',
        flag: 'process',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'العملية أو القصة',
        labelEn: 'Process / Story',
        hintAr: 'مثال: مراحل غسل اليدين، صنع الشطيرة، دورة المطر',
        hintEn: 'e.g. Handwashing steps'
      },
      resolveParam('grade'),
      {
        key: 'steps',
        flag: 'steps',
        isPositional: false,
        type: 'number',
        required: false,
        defaultValue: 5,
        default: 5,
        labelAr: 'عدد الخطوات',
        labelEn: 'Steps count',
        hintAr: '5',
        hintEn: '5'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/sequence worksheet مراحل غسل اليدين --grade=1 --steps=5 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'دوائر ترقيم واضحة يضع فيها الطفل الرقم (1, 2, 3...) أو يوصلها بخط زمني.',
      'رسوم توضيحية معبرة عن كل خطوة بدقة.'
    ],
    keywords: ['sequence worksheet', 'ترتيب أحداث', 'خطوات متسلسلة', 'غسل اليدين'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 103,
    isFavorite: false
  }
];
