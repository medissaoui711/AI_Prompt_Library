import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const TESTING_PROMPTS: CommandPrompt[] = [
  {
    id: 'ads-test-071',
    code: '/ad review',
    titleAr: 'مراجعة وتدقيق الإعلان الحالي',
    titleEn: 'Comprehensive Ad Copy & Creative Review',
    descriptionAr: 'يراجع إعلانًا موجودًا ويحدد نقاط القوة ونقاط الضعف وفرص التحسين المباشرة لرفع الأداء.',
    descriptionEn: 'Audits existing ad copy and creative, pinpointing weaknesses and conversion opportunities.',
    group: 'ads',
    outputType: 'analysis',
    adsCategory: 'testing',
    params: [
      { key: 'ad_content', flag: 'ad_content', isPositional: true, type: 'text', required: true, labelAr: 'نص أو وصف الإعلان', labelEn: 'Ad Content', hintAr: 'الصق نص الإعلان أو صف التصميم هنا', hintEn: 'Paste ad copy or describe visual' },
      resolveParam('platform'),
      resolveParam('goal'),
      { key: 'output', flag: 'output', isPositional: false, type: 'string', required: false, labelAr: 'نوع التقرير', labelEn: 'Report Type', hintAr: 'improvements, detailed', hintEn: 'improvements, detailed' }
    ],
    example: `/ad review [الصق نص الإعلان أو أرفق التصميم] --platform=instagram --goal=sales --output=improvements`,
    qualityRules: [
      'فحص الهوك، وضوح العرض، إزالة التشتت، وقوة الدعوة للإجراء'
    ],
    keywords: ['review', 'مراجعة إعلان', 'تدقيق', 'تحسين', 'audit'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 210,
    isFavorite: true
  },
  {
    id: 'ads-test-072',
    code: '/ad score',
    titleAr: 'تقييم جودة الإعلان بالأرقام والمعايير (Score)',
    titleEn: 'Ad Quality Scorecard Evaluation',
    descriptionAr: 'يقيم جودة الإعلان وفق معايير دقيقة: الهوك، العرض، CTA، الوضوح، وملاءمة الجمهور من 10.',
    descriptionEn: 'Scores ad effectiveness across hook, offer clarity, friction, and call-to-action out of 10.',
    group: 'ads',
    outputType: 'analysis',
    adsCategory: 'testing',
    params: [
      { key: 'ad_text', flag: 'ad_text', isPositional: true, type: 'text', required: true, labelAr: 'نص الإعلان', labelEn: 'Ad Text', hintAr: 'الصق الإعلان هنا للتقييم', hintEn: 'Paste ad here for scoring' },
      resolveParam('platform'),
      { key: 'criteria', flag: 'criteria', isPositional: false, type: 'string', required: false, labelAr: 'المعايير', labelEn: 'Criteria', hintAr: 'hook,offer,cta,clarity', hintEn: 'hook,offer,cta,clarity' },
      { key: 'scale', flag: 'scale', isPositional: false, type: 'string', required: false, labelAr: 'مقياس الدرجات', labelEn: 'Scale', hintAr: '10, 100', hintEn: '10, 100' }
    ],
    example: `/ad score [الصق الإعلان] --platform=facebook --criteria=hook,offer,cta,clarity --scale=10`,
    qualityRules: [
      'منح درجة مبررة لكل معيار مع توصية تصحيحية فورية لرفع الدرجة'
    ],
    keywords: ['score', 'تقييم', 'درجة الإعلان', 'معايير', 'clarity'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 155,
    isFavorite: false
  },
  {
    id: 'ads-test-073',
    code: '/ad improve',
    titleAr: 'إعادة صياغة وتطوير الإعلان الضعيف',
    titleEn: 'Ad Copy Rewriter & Conversion Booster',
    descriptionAr: 'يعيد صياغة إعلان ضعيف أو غير فعال ليصبح أكثر إشراقًا وإقناعًا وقوة في التحويل.',
    descriptionEn: 'Rewrites and upgrades underperforming ads to maximize click-through and sales.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'testing',
    params: [
      { key: 'ad_text', flag: 'ad_text', isPositional: true, type: 'text', required: true, labelAr: 'الإعلان الحالي', labelEn: 'Current Ad', hintAr: 'الصق نص الإعلان الحالي', hintEn: 'Paste current ad text' },
      resolveParam('goal'),
      resolveParam('tone'),
      resolveParam('language')
    ],
    example: `/ad improve [الصق نص الإعلان] --goal=more-clicks --tone=professional --language=ar`,
    qualityRules: [
      'الحفاظ على جوهر الفكرة مع تقوية العنوان وإزالة الحشو اللغوي'
    ],
    keywords: ['improve', 'تطوير', 'إعادة صياغة', 'تحسين نص'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 180,
    isFavorite: true
  },
  {
    id: 'ads-test-074',
    code: '/ad variations',
    titleAr: 'توليد تنويعات إعلانية متعددة للاختبار',
    titleEn: 'Multi-Angle Ad Variations Generator',
    descriptionAr: 'ينشئ نسخًا متعددة من الإعلان لاختبار زوايا ورسائل نفسية مختلفة لنفس المنتج.',
    descriptionEn: 'Creates multiple copy variants testing price, time-saving, trust, and quality angles.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'testing',
    params: [
      { key: 'service', flag: 'service', isPositional: true, type: 'text', required: true, labelAr: 'الخدمة أو المنتج', labelEn: 'Service / Product', hintAr: 'خدمة تنظيف منازل, اشتراك برنامج', hintEn: 'Cleaning service, software subscription' },
      { key: 'count', flag: 'count', isPositional: false, type: 'string', required: false, labelAr: 'عدد النسخ', labelEn: 'Count', hintAr: '5, 3', hintEn: '5, 3' },
      { key: 'angles', flag: 'angles', isPositional: false, type: 'string', required: false, labelAr: 'الزوايا', labelEn: 'Angles', hintAr: 'price,time-saving,trust,quality,urgency', hintEn: 'price,time-saving,trust,quality,urgency' }
    ],
    example: `/ad variations خدمة تنظيف منازل --count=5 --angles=price,time-saving,trust,quality,urgency`,
    qualityRules: [
      'جعل كل نسخة مختلفة جوهريًا عن الأخرى لاختبار دقيق ومفيد'
    ],
    keywords: ['variations', 'تنويعات', 'نسخ إعلانية', 'angles'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 160,
    isFavorite: false
  },
  {
    id: 'ads-test-075',
    code: '/a b ad test',
    titleAr: 'خطة اختبار العناصر الإعلانية (A/B Test)',
    titleEn: 'Structured A/B Ad Split Testing',
    descriptionAr: 'ينشئ نسختين أو أكثر لاختبار عنصر محدد مثل العنوان، الـCTA، أو الصورة لعزل المتغيرات.',
    descriptionEn: 'Generates structured split-test ad variants isolating single variables like headline or CTA.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'testing',
    params: [
      { key: 'business', flag: 'business', isPositional: true, type: 'text', required: true, labelAr: 'النشاط أو المنتج', labelEn: 'Business', hintAr: 'متجر عطور, تطبيق رياضي', hintEn: 'Perfume store, fitness app' },
      { key: 'test', flag: 'test', isPositional: false, type: 'string', required: false, labelAr: 'عنصر الاختبار', labelEn: 'Variable Tested', hintAr: 'headline, cta, visual, offer', hintEn: 'headline, cta, visual, offer' },
      { key: 'variants', flag: 'variants', isPositional: false, type: 'string', required: false, labelAr: 'عدد البدائل', labelEn: 'Variants Count', hintAr: '2, 3', hintEn: '2, 3' },
      resolveParam('platform')
    ],
    example: `/a b ad test متجر عطور --test=headline --variants=3 --platform=instagram`,
    qualityRules: [
      'تثبيت جميع العناصر وتغيير عنصر واحد فقط لقياس الأثر بدقة علمية'
    ],
    keywords: ['a/b test', 'اختبار a/b', 'سبليت تست', 'مقارنة'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 140,
    isFavorite: true
  },
  {
    id: 'ads-test-076',
    code: '/ad hook test',
    titleAr: 'اختبار 5 أنواع مختلفة من الهوكات',
    titleEn: '5-Style Hook Testing Matrix',
    descriptionAr: 'ينشئ 5 هوكات إعلانية بأنماط مختلفة: سؤال، مشكلة، دليل اجتماعي، وفضول لاختيار الأقوى.',
    descriptionEn: 'Generates 5 distinct hook styles: question, problem, proof, curiosity, and bold claim.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'testing',
    params: [
      { key: 'offer', flag: 'offer', isPositional: true, type: 'text', required: true, labelAr: 'المنتج أو العرض', labelEn: 'Offer', hintAr: 'اشتراك نادي رياضي, دورة تدريبية', hintEn: 'Gym membership, training course' },
      { key: 'count', flag: 'count', isPositional: false, type: 'string', required: false, labelAr: 'العدد', labelEn: 'Count', hintAr: '5', hintEn: '5' },
      { key: 'types', flag: 'types', isPositional: false, type: 'string', required: false, labelAr: 'أنماط الهوك', labelEn: 'Hook Types', hintAr: 'question,problem,proof,curiosity', hintEn: 'question,problem,proof,curiosity' }
    ],
    example: `/ad hook test اشتراك نادي رياضي --count=5 --types=question,problem,proof,curiosity`,
    qualityRules: [
      'صياغة بداية صادمة أو مثيرة للتساؤل لكل نوع'
    ],
    keywords: ['hook test', 'اختبار الهوك', 'افتتاحيات', 'فضول'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 125,
    isFavorite: false
  },
  {
    id: 'ads-test-077',
    code: '/cta test',
    titleAr: 'اختبار وتوليد خيارات متعددة للـCTA',
    titleEn: 'Call-to-Action Friction Test Matrix',
    descriptionAr: 'يقترح دعوات إجراء متنوعة ومتدرجة في مستوى الالتزام لتحديد العبارة الأعلى تحويلاً.',
    descriptionEn: 'Tests low-friction vs high-intent call-to-action variations.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'testing',
    params: [
      { key: 'course', flag: 'course', isPositional: true, type: 'text', required: true, labelAr: 'الخدمة أو الدورة', labelEn: 'Offer', hintAr: 'دورة تصميم جرافيك, استشارة عقارية', hintEn: 'Graphic design course, real estate consult' },
      resolveParam('goal'),
      { key: 'count', flag: 'count', isPositional: false, type: 'string', required: false, labelAr: 'العدد', labelEn: 'Count', hintAr: '10', hintEn: '10' },
      resolveParam('language')
    ],
    example: `/cta test دورة تصميم --goal=registrations --count=10 --language=ar`,
    qualityRules: [
      'التنويع بين عبارات الالتزام الخفيف (استكشف) والالتزام المباشر (احجز مقعدك)'
    ],
    keywords: ['cta test', 'اختبار cta', 'زر التحويل', 'دعوة للإجراء'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 95,
    isFavorite: false
  },
  {
    id: 'ads-test-078',
    code: '/ad compliance',
    titleAr: 'فحص التوافق وسياسات النشر الإعلانية',
    titleEn: 'Ad Policy Compliance & Claims Check',
    descriptionAr: 'يراجع النص بحثًا عن ادعاءات مبالغ فيها، وعود غير واقعية، أو كلمات محظورة لتجنب رفض الإعلان.',
    descriptionEn: 'Screens ad copy for sensationalist claims, policy violations, and required disclaimers.',
    group: 'ads',
    outputType: 'analysis',
    adsCategory: 'testing',
    params: [
      { key: 'ad_text', flag: 'ad_text', isPositional: true, type: 'text', required: true, labelAr: 'نص الإعلان والمنتج', labelEn: 'Ad Copy & Product', hintAr: 'إعلان مكمل غذائي, منتج تخسيس', hintEn: 'Supplements ad, weight loss' },
      { key: 'market', flag: 'market', isPositional: false, type: 'string', required: false, labelAr: 'السوق', labelEn: 'Market', hintAr: 'saudi-arabia, meta-global', hintEn: 'saudi-arabia, meta-global' },
      { key: 'check', flag: 'check', isPositional: false, type: 'string', required: false, labelAr: 'نقاط الفحص', labelEn: 'Checks', hintAr: 'claims,clarity,disclaimer', hintEn: 'claims,clarity,disclaimer' }
    ],
    example: `/ad compliance إعلان مكمل غذائي --market=saudi-arabia --check=claims,clarity,disclaimer`,
    qualityRules: [
      'تنبيه المعلن إلى إخلاء المسؤولية اللازم وتعديل الصياغات الحساسة'
    ],
    keywords: ['compliance', 'سياسات الإعلانات', 'رفض الإعلان', 'حظر', 'تأكد'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 110,
    isFavorite: false
  },
  {
    id: 'ads-test-079',
    code: '/competitor ad analysis',
    titleAr: 'تحليل نمط إعلانات المنافسين',
    titleEn: 'Competitor Ad Strategy & Hook Deconstruction',
    descriptionAr: 'يحلل نمط إعلان منافس لاستخراج الأفكار والزوايا القابلة للتطوير والتميز دون نسخه حرفيًا.',
    descriptionEn: 'Deconstructs competitor ads to extract winning hooks, offers, and positioning gaps.',
    group: 'ads',
    outputType: 'analysis',
    adsCategory: 'testing',
    params: [
      { key: 'ad_desc', flag: 'ad_desc', isPositional: true, type: 'text', required: true, labelAr: 'وصف أو رابط إعلان المنافس', labelEn: 'Competitor Ad', hintAr: 'وصف إعلان المنافس في قطاع التجميل', hintEn: 'Description of beauty competitor ad' },
      resolveParam('industry'),
      { key: 'output', flag: 'output', isPositional: false, type: 'string', required: false, labelAr: 'المخرجات', labelEn: 'Output', hintAr: 'angles,hook,cta', hintEn: 'angles,hook,cta' }
    ],
    example: `/competitor ad analysis [وصف أو رابط الإعلان] --industry=beauty --output=angles,hook,cta`,
    qualityRules: [
      'تحديد الثغرة التي أغفلها المنافس وكيفية استغلالها لتقديم عرض أفضل'
    ],
    keywords: ['competitor', 'تحليل المنافسين', 'مكتبة الإعلانات', 'تجسس إعلاني'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 145,
    isFavorite: true
  },
  {
    id: 'ads-test-080',
    code: '/ad checklist',
    titleAr: 'قائمة التحقق قبل إطلاق الإعلان (Launch Checklist)',
    titleEn: 'Pre-Launch Ad Quality Checklist',
    descriptionAr: 'ينشئ قائمة فحص متكاملة تضمن جاهزية الرابط، البكسل، الصورة، النص، والميزانية قبل النشر.',
    descriptionEn: 'Pre-flight verification checklist covering UTMs, pixels, landing pages, and creative specs.',
    group: 'ads',
    outputType: 'analysis',
    adsCategory: 'testing',
    params: [
      { key: 'campaign', flag: 'campaign', isPositional: true, type: 'text', required: true, labelAr: 'الحملة الإعلانية', labelEn: 'Campaign', hintAr: 'إعلان خدمة نقل أثاث', hintEn: 'Furniture moving service ad' },
      resolveParam('platform'),
      resolveParam('format'),
      resolveParam('goal')
    ],
    example: `/ad checklist إعلان خدمة نقل أثاث --platform=facebook --format=image --goal=messages`,
    qualityRules: [
      'التأكد من مطابقة صفحة الهبوط لوعد الإعلان بدقة تامة'
    ],
    keywords: ['checklist', 'قائمة فحص', 'تأكد', 'قبل الإطلاق', 'بكسل'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 120,
    isFavorite: false
  }
];
