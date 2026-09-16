import { CommandPrompt } from '../../../../types/prompt';
import { resolveParam } from '../../../paramRegistry';
import {
  KIDS_QUALITY_RULES,
  STANDARD_FORMAT_PARAM
} from './constants';

export const KIDS_STORIES_CARDS_PROMPTS: CommandPrompt[] = [
  {
    id: 'edu-kids-card-027',
    code: '/kids learning story',
    titleAr: 'قصة تعليمية مرئية للأطفال',
    titleEn: 'Visual Children Learning Story',
    descriptionAr: 'ينشئ قصة قصيرة مرئية تشرح مفهومًا أو قيمة أخلاقية مناسبة للروضة وبداية الابتدائي.',
    descriptionEn: 'Generates an illustrated, bite-sized moral or educational children story with character dialogue.',
    group: 'edu',
    stage: ['early_childhood', 'primary'],
    subject: ['literature', 'arabic', 'general'],
    task: ['explain', 'activity'],
    outputType: 'mixed',
    outputBadges: ['قصة', 'قيم وأخلاق', 'قصة مصورة'],
    params: [
      {
        key: 'moral',
        flag: 'moral',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'القيمة أو المفهوم',
        labelEn: 'Value / Concept',
        hintAr: 'مثال: الصدق، الأمانة، مساعدة الجار',
        hintEn: 'e.g. Honesty, Sharing'
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
        key: 'words',
        flag: 'words',
        isPositional: false,
        type: 'number',
        required: false,
        defaultValue: 150,
        default: 150,
        labelAr: 'عدد الكلمات',
        labelEn: 'Word count',
        hintAr: '150',
        hintEn: '150'
      },
      {
        key: 'style',
        flag: 'style',
        isPositional: false,
        type: 'string',
        required: false,
        defaultValue: 'picture-book',
        default: 'picture-book',
        labelAr: 'النمط',
        labelEn: 'Style',
        hintAr: 'picture-book',
        hintEn: 'picture-book'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/kids learning story الصدق --age=5 --words=150 --style=picture-book --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'تقسيم القصة إلى 3-4 مشاهد بصرية متتابعة مع رسوم تعبيرية لكل مشهد.',
      'خاتمة دافئة تعزز السلوك الإيجابي مع سؤال نقاشي للطفل.'
    ],
    keywords: ['kids story', 'قصة أطفال', 'الصدق', 'قصة مصورة'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 135,
    isFavorite: false
  },
  {
    id: 'edu-kids-card-028',
    code: '/story sequence cards',
    titleAr: 'بطاقات تسلسل أحداث القصة',
    titleEn: 'Story Sequence Flashcards',
    descriptionAr: 'ينشئ بطاقات قصة متسلسلة ليعيد الطفل ترتيب الأحداث وفق تسلسلها المنطقي.',
    descriptionEn: 'Produces printable story sequence cards for children to reconstruct the narrative timeline.',
    group: 'edu',
    stage: ['early_childhood', 'primary'],
    subject: ['arabic', 'literature'],
    task: ['activity', 'practice'],
    outputType: 'mixed',
    outputBadges: ['بطاقات', 'تسلسل القصة', 'تفكير نقدي'],
    params: [
      {
        key: 'story',
        flag: 'story',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'عنوان القصة',
        labelEn: 'Story title',
        hintAr: 'مثال: قصة الأرنب والسلحفاة، الراعي الكذاب',
        hintEn: 'e.g. Tortoise and the Hare'
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
        key: 'cards',
        flag: 'cards',
        isPositional: false,
        type: 'number',
        required: false,
        defaultValue: 6,
        default: 6,
        labelAr: 'عدد البطاقات',
        labelEn: 'Cards count',
        hintAr: '6',
        hintEn: '6'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/story sequence cards قصة الأرنب والسلحفاة --age=5 --cards=6 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'كل بطاقة تمثل لحظة حاسمة في القصة مع مربع فارغ للترقيم أو التلوين.',
      'خطوط قص محددة تتيح قص البطاقات واستخدامها في مجموعات.'
    ],
    keywords: ['story sequence', 'تسلسل القصة', 'الأرنب والسلحفاة', 'بطاقات القصة'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 120,
    isFavorite: false
  },
  {
    id: 'edu-kids-card-029',
    code: '/picture flashcards',
    titleAr: 'بطاقات المفردات والمفاهيم المصورة',
    titleEn: 'Visual Vocabulary Picture Flashcards',
    descriptionAr: 'ينشئ بطاقات مصورة لتعليم كلمات أو أرقام أو مفاهيم جديدة مع صورة دالة لكل بطاقة.',
    descriptionEn: 'Generates a set of thematic picture flashcards pairing words with clear graphics for early learners.',
    group: 'edu',
    stage: ['early_childhood'],
    subject: ['general', 'arabic', 'english', 'science'],
    task: ['practice', 'activity'],
    outputType: 'mixed',
    outputBadges: ['بطاقات', 'Flashcards', 'توسيع المفردات'],
    params: [
      {
        key: 'topic',
        flag: 'topic',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'موضوع البطاقات',
        labelEn: 'Flashcard topic',
        hintAr: 'مثال: وسائل المواصلات، أفراد الأسرة، حيوانات المزرعة',
        hintEn: 'e.g. Transportation, Farm animals'
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
        key: 'cards',
        flag: 'cards',
        isPositional: false,
        type: 'number',
        required: false,
        defaultValue: 12,
        default: 12,
        labelAr: 'عدد البطاقات',
        labelEn: 'Cards count',
        hintAr: '12',
        hintEn: '12'
      },
      resolveParam('language'),
      STANDARD_FORMAT_PARAM
    ],
    example: `/picture flashcards وسائل المواصلات --age=4 --cards=12 --language=ar --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'تصميم مقسم إلى شبكة 3x4 بطاقات مع كتابة الاسم بخط عريض مشكول بالحركات.',
      'رسومات واضحة المعالم بألوان محببة تسهل التعرف البصري الفوري.'
    ],
    keywords: ['picture flashcards', 'بطاقات مصورة', 'وسائل المواصلات', 'فلاش كاردز'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 168,
    isFavorite: true
  },
  {
    id: 'edu-kids-card-030',
    code: '/letter flashcards',
    titleAr: 'بطاقات الحروف والكلمات',
    titleEn: 'Letter & Phonics Flashcards',
    descriptionAr: 'ينشئ بطاقات لتعليم الحروف مع كلمة وصورة توضيحية لكل شكل وموضع للحرف.',
    descriptionEn: 'Builds alphabet flashcards showing letter forms, initial sounds, and corresponding illustrations.',
    group: 'edu',
    stage: ['early_childhood'],
    subject: ['arabic', 'english'],
    task: ['practice', 'activity'],
    outputType: 'mixed',
    outputBadges: ['بطاقات', 'حروف وكلمات', 'وعي صوتي'],
    params: [
      {
        key: 'letter',
        flag: 'letter',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'الحرف المستهدف',
        labelEn: 'Target letter',
        hintAr: 'مثال: حرف السين، حرف الميم',
        hintEn: 'e.g. Letter Seen'
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
        key: 'examples',
        flag: 'examples',
        isPositional: false,
        type: 'number',
        required: false,
        defaultValue: 5,
        default: 5,
        labelAr: 'عدد الأمثلة',
        labelEn: 'Examples count',
        hintAr: '5',
        hintEn: '5'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/letter flashcards حرف السين --age=4 --examples=5 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'إبراز الحرف بلون متباين ومميز داخل الكلمة.',
      'توضيح أشكال الحرف (أول، وسط، وآخر الكلمة) بأمثلة مصورة.'
    ],
    keywords: ['letter flashcards', 'بطاقات الحروف', 'حرف السين', 'تهجئة مبكرة'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 142,
    isFavorite: false
  },
  {
    id: 'edu-kids-card-031',
    code: '/emotion cards',
    titleAr: 'بطاقات المشاعر والذكاء العاطفي',
    titleEn: 'Emotional Intelligence Cards',
    descriptionAr: 'ينشئ بطاقات مشاعر لمساعدة الطفل على تسمية المشاعر والتعبير عنها بشكل صحي.',
    descriptionEn: 'Creates emotion cards to help young children recognize, name, and express their feelings constructively.',
    group: 'edu',
    stage: ['early_childhood'],
    subject: ['general'],
    task: ['activity', 'communication'],
    outputType: 'mixed',
    outputBadges: ['بطاقات', 'ذكاء عاطفي', 'تعبير عن النفس'],
    params: [
      {
        key: 'emotions',
        flag: 'emotions',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'المشاعر المطلوبة',
        labelEn: 'Target emotions',
        hintAr: 'مثال: السعادة والحزن والغضب والخوف والحماس',
        hintEn: 'e.g. Happiness, sadness, anger'
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
        key: 'cards',
        flag: 'cards',
        isPositional: false,
        type: 'number',
        required: false,
        defaultValue: 6,
        default: 6,
        labelAr: 'عدد البطاقات',
        labelEn: 'Cards count',
        hintAr: '6',
        hintEn: '6'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/emotion cards السعادة والحزن والغضب --age=4 --cards=6 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'وجوه تعبيرية دقيقة ومعبرة يسهل على الطفل تقليدها وملاحظتها.',
      'عبارة مساعدة مقترحة للطفل عند الشعور بكل عاطفة (مثلاً: عندما أغضب أتنفس بعمق).'
    ],
    keywords: ['emotion cards', 'بطاقات المشاعر', 'ذكاء عاطفي', 'السعادة والحزن'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 115,
    isFavorite: false
  },
  {
    id: 'edu-kids-card-032',
    code: '/daily routine cards',
    titleAr: 'بطاقات الروتين اليومي المصورة',
    titleEn: 'Daily Routine Visual Cards',
    descriptionAr: 'ينشئ بطاقات روتين يومي تساعد الطفل على تنظيم أوقات الصباح والمساء والاعتماد على النفس.',
    descriptionEn: 'Builds daily visual schedule cards guiding children through morning, school, and bedtime routines.',
    group: 'edu',
    stage: ['early_childhood'],
    subject: ['general'],
    task: ['activity', 'lesson-plan'],
    outputType: 'mixed',
    outputBadges: ['بطاقات', 'نشاط منزلي', 'روتين يومي'],
    params: [
      {
        key: 'routine',
        flag: 'routine',
        isPositional: true,
        type: 'text',
        required: true,
        labelAr: 'نوع الروتين',
        labelEn: 'Routine type',
        hintAr: 'مثال: روتين الصباح، روتين النوم، روتين بعد المدرسة',
        hintEn: 'e.g. Morning routine'
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
        key: 'steps',
        flag: 'steps',
        isPositional: false,
        type: 'number',
        required: false,
        defaultValue: 6,
        default: 6,
        labelAr: 'عدد الخطوات',
        labelEn: 'Steps count',
        hintAr: '6',
        hintEn: '6'
      },
      STANDARD_FORMAT_PARAM
    ],
    example: `/daily routine cards روتين الصباح --age=5 --steps=6 --format=educational-newspaper-infographic`,
    qualityRules: [
      ...KIDS_QUALITY_RULES,
      'بطاقات قابلة للتثبيت على لوحة أو ثلاجة مع صندوق فحص الإنجاز.',
      'أيقونات تمثيلية للأفعال (غسل الأسنان، ارتداء الملابس، الإفطار).'
    ],
    keywords: ['daily routine', 'روتين الصباح', 'بطاقات روتين', 'تنظيم الوقت'],
    createdAt: '2026-09-16T00:00:00.000Z',
    updatedAt: '2026-09-16T00:00:00.000Z',
    usageCount: 128,
    isFavorite: false
  }
];
