import { CommandPrompt } from '../../../../types/prompt';
import { resolveParam } from '../../../paramRegistry';
import {
  KIDS_QUALITY_RULES,
  STANDARD_FORMAT_PARAM,
  STANDARD_PRINT_PARAM
} from './constants';

export const KIDS_LANGUAGE_PROMPTS: CommandPrompt[] = [
  {
    id: 'edu-kids-lang-041',
    code: '/phonics sheet',
    titleAr: 'ورقة الأصوات الصوتية (Phonics)',
    titleEn: 'Visual Phonics Practice Sheet',
    descriptionAr: 'ينشئ ورقة عمل للوعي الصوتي والتمييز بين الأصوات والحركات القصيرة والطويلة.',
    descriptionEn: 'Produces a phonological awareness and phonics worksheet identifying letter sounds and short vowels.',
    group: 'edu',
    stage: ['early_childhood', 'primary'],
    subject: ['arabic', 'english'],
    task: ['practice', 'activity'],
    outputType: 'mixed',
    outputBadges: ['وعي صوتي', 'صوتيات', 'تأسيس القراءة'],
    params: [
      {
        key: 'sound',
        flag: 'sound',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'الصوت أو الحرف',
        labelEn: 'Target sound',
        hintAr: 'مثال: حرف السين بالحركات القصيرة، Short vowel A',
        hintEn: 'e.g. Short vowel A'
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
    example: `/phonics sheet حرف السين بالحركات القصيرة --age=5 --language=ar --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'تمييز الحركات (الفتحة، الضمة، الكسرة) برموز بصرية ملونة.',
      'أنشطة استماع واختيار الصورة التي تبدأ أو تنتهي بنفس الصوت.'
    ],
    keywords: ['phonics sheet', 'وعي صوتي', 'الحركات القصيرة', 'صوتيات'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 140,
    isFavorite: true
  },
  {
    id: 'edu-kids-lang-042',
    code: '/rhyme match',
    titleAr: 'نشاط القوافي والكلمات المتناغمة',
    titleEn: 'Rhyme Matching & Word Families',
    descriptionAr: 'ينشئ نشاطًا لمطابقة الكلمات المتناغمة والمتشابهة في الإيقاع الصوتي والوزن.',
    descriptionEn: 'Generates a fun rhyming words and word-family matching activity sheet.',
    group: 'edu',
    stage: ['early_childhood', 'primary'],
    subject: ['arabic', 'english'],
    task: ['activity', 'practice'],
    outputType: 'mixed',
    outputBadges: ['لغة وقوافي', 'إيقاع صوتي', 'مطابقة الكلمات'],
    params: [
      {
        key: 'words',
        flag: 'words',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'مجموعة القوافي',
        labelEn: 'Rhyming group',
        hintAr: 'مثال: باب، كتاب، غراب، سحاب / Cat, Hat, Bat',
        hintEn: 'e.g. Cat, Hat, Bat'
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
        defaultValue: 6,
        default: 6,
        labelAr: 'عدد الأزواج',
        labelEn: 'Pairs count',
        hintAr: '6',
        hintEn: '6'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/rhyme match باب كتاب سحاب --age=5 --pairs=6 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'تلوين المقاطع الصوتية الأخيرة المتطابقة بلون واحد لافت للنظر.',
      'رسوم توضيحية خفيفة لكل كلمة تعزز الفهم والتذكر.'
    ],
    keywords: ['rhyme match', 'قوافي', 'سجع ووزن', 'كلمات متناغمة'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 118,
    isFavorite: false
  },
  {
    id: 'edu-kids-lang-043',
    code: '/letter sound',
    titleAr: 'نشاط الصوت الأول والصورة',
    titleEn: 'Initial Letter Sound Explorer',
    descriptionAr: 'ينشئ نشاطًا للتعرف على الصوت الأول من الكلمة وربطه بالصور المناسبة.',
    descriptionEn: 'Builds an initial letter sound worksheet connecting opening phonemes with corresponding images.',
    group: 'edu',
    stage: ['early_childhood'],
    subject: ['arabic', 'english'],
    task: ['practice', 'activity'],
    outputType: 'mixed',
    outputBadges: ['صوتيات', 'الصوت الأول', 'تأسيس الروضة'],
    params: [
      {
        key: 'sound',
        flag: 'sound',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'الصوت المستهدف',
        labelEn: 'Target sound',
        hintAr: 'مثال: صوت الميم (مـ)، صوت الباء (بـ)',
        hintEn: 'e.g. Sound M'
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
        defaultValue: 8,
        default: 8,
        labelAr: 'عدد الصور',
        labelEn: 'Images count',
        hintAr: '8',
        hintEn: '8'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/letter sound صوت الميم --age=4 --items=8 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'دوائر تحديد حول الصور الصحيحة التي تبدأ بالصوت المطلوب.',
      'تضمين صور دخيلة واضحة لتدريب أذن وعين الطفل على التمييز.'
    ],
    keywords: ['letter sound', 'الصوت الأول', 'صوت الميم', 'تمييز سمعي'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 125,
    isFavorite: false
  },
  {
    id: 'edu-kids-lang-044',
    code: '/sight words',
    titleAr: 'أنشطة الكلمات البصرية الشائعة (Sight Words)',
    titleEn: 'Interactive Sight Words Grid',
    descriptionAr: 'ينشئ أنشطة تفاعلية للكلمات البصرية المتكررة لتسريع طلاقة القراءة.',
    descriptionEn: 'Creates engaging sight word activities including read-color-trace to boost reading fluency.',
    group: 'edu',
    stage: ['early_childhood', 'primary'],
    subject: ['arabic', 'english'],
    task: ['practice', 'activity'],
    outputType: 'mixed',
    outputBadges: ['كلمات بصرية', 'طلاقة القراءة', 'Sight Words'],
    params: [
      {
        key: 'words',
        flag: 'words',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'الكلمات البصرية',
        labelEn: 'Sight words',
        hintAr: 'مثال: هذا، هذه، أنا، في، على / the, is, at, in',
        hintEn: 'e.g. the, and, is'
      },
      resolveParam('grade'),
      resolveParam('language'),
      STANDARD_FORMAT_PARAM
    ],
    example: `/sight words هذا هذه أنا في --grade=1 --language=ar --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'طريقة 3 خطوات: اقرأ الكلمة، لونها، ابحث عنها في جملة مصورة.',
      'حروف مفرغة بتصميم جذاب يسهل تلوينه وتكرار كتابته.'
    ],
    keywords: ['sight words', 'كلمات بصرية', 'قراءة سريعة', 'كلمات شائعة'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 132,
    isFavorite: false
  },
  {
    id: 'edu-kids-lang-045',
    code: '/sentence builder',
    titleAr: 'نشاط بناء وتركيب الجمل',
    titleEn: 'Hands-on Sentence Building Activity',
    descriptionAr: 'ينشئ نشاط ترتيب الكلمات المبعثرة لتكوين جمل مفيدة ومترابطة مع صورة مساندة.',
    descriptionEn: 'Generates a sentence unscrambling and building sheet with picture cues and grammar chips.',
    group: 'edu',
    stage: ['primary'],
    subject: ['arabic', 'english'],
    task: ['practice', 'activity'],
    outputType: 'mixed',
    outputBadges: ['تكوين جمل', 'قواعد مبسطة', 'تركيب الكلمات'],
    params: [
      {
        key: 'topic',
        flag: 'topic',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'موضوع الجمل',
        labelEn: 'Sentences topic',
        hintAr: 'مثال: الحيوانات والصفات، النشاط اليومي',
        hintEn: 'e.g. Daily activities'
      },
      resolveParam('grade'),
      {
        key: 'sentences',
        flag: 'sentences',
        isPositional: false,
        type: 'number',
        required: false,
        defaultValue: 5,
        default: 5,
        labelAr: 'عدد الجمل',
        labelEn: 'Sentences count',
        hintAr: '5',
        hintEn: '5'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/sentence builder الحيوانات والصفات --grade=1 --sentences=5 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'مربعات كلمات ملونة قابلة للقص أو إعادة الكتابة بالأرقام.',
      'سطر مسطر بنظام المسافات الثلاث لكتابة الجملة الكاملة بوضوح.'
    ],
    keywords: ['sentence builder', 'بناء الجمل', 'ترتيب الكلمات', 'لغة عربية'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 110,
    isFavorite: false
  },
  {
    id: 'edu-kids-lang-046',
    code: '/dictation fun',
    titleAr: 'نشاط الإملاء المرح والمصور',
    titleEn: 'Fun Illustrated Dictation Sheet',
    descriptionAr: 'ينشئ ورقة إملاء ممتعة تضم صورًا وتكملة حروف ناقصة بدلاً من الإملاء الصرف المجهد.',
    descriptionEn: 'Designs an anxiety-free fun dictation sheet with illustrations, missing letters, and self-checks.',
    group: 'edu',
    stage: ['primary'],
    subject: ['arabic', 'english'],
    task: ['practice', 'activity'],
    outputType: 'mixed',
    outputBadges: ['إملاء مرح', 'تهجئة', 'بدون توتر'],
    params: [
      {
        key: 'words',
        flag: 'words',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'الكلمات أو المهارة الإملائية',
        labelEn: 'Dictation words / skill',
        hintAr: 'مثال: المد بالألف، التاء المربوطة والمفتوحة',
        hintEn: 'e.g. Long vowels'
      },
      resolveParam('grade'),
      {
        key: 'style',
        flag: 'style',
        isPositional: false,
        type: 'string',
        required: false,
        defaultValue: 'fill-missing,picture-dictation',
        default: 'fill-missing,picture-dictation',
        labelAr: 'أسلوب الإملاء',
        labelEn: 'Style',
        hintAr: 'fill-missing,picture-dictation',
        hintEn: 'fill-missing,picture-dictation'
      },
      STANDARD_FORMAT_PARAM,
      STANDARD_PRINT_PARAM
    ],
    example: `/dictation fun المد بالألف --grade=2 --style=fill-missing,picture-dictation --format=educational-newspaper-infographic --print-ready=yes`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'إدراج وسام نجمة الإملاء الذاتي للتقييم الذاتي في نهاية الورقة.',
      'إكمال الحرف الناقص في الكلمة المصورة ثم إعادة كتابتها كاملة.'
    ],
    keywords: ['dictation fun', 'إملاء مرح', 'المد بالألف', 'تهجئة ممتعة'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 129,
    isFavorite: false
  }
];
