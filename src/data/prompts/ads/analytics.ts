import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const ANALYTICS_PROMPTS: CommandPrompt[] = [
  {
    id: 'ads-ana-081',
    code: '/campaign report',
    titleAr: 'تقرير نتائج الحملة التنفيذي',
    titleEn: 'Executive Campaign Performance Report',
    descriptionAr: 'يحول أرقام الحملة وإحصاءاتها إلى تقرير واضح مع استنتاجات وتوصيات عملية للإدارة.',
    descriptionEn: 'Translates raw campaign analytics into executive summaries and actionable takeaways.',
    group: 'ads',
    outputType: 'analysis',
    adsCategory: 'analytics',
    params: [
      { key: 'results', flag: 'results', isPositional: true, type: 'text', required: true, labelAr: 'أرقام ونتائج الحملة', labelEn: 'Raw Results', hintAr: 'الصق النتائج: الإنفاق، النقرات، المبيعات', hintEn: 'Paste spend, clicks, leads, sales' },
      { key: 'metrics', flag: 'metrics', isPositional: false, type: 'string', required: false, labelAr: 'المؤشرات', labelEn: 'Metrics', hintAr: 'spend,clicks,leads,sales', hintEn: 'spend,clicks,leads,sales' },
      { key: 'period', flag: 'period', isPositional: false, type: 'string', required: false, labelAr: 'الفترة', labelEn: 'Period', hintAr: '30days, weekly', hintEn: '30days, weekly' }
    ],
    example: `/campaign report [الصق النتائج] --metrics=spend,clicks,leads,sales --period=30days`,
    qualityRules: [
      'توضيح تكلفة الاكتساب (CPA) والعائد ومقارنتها بالأهداف السابقة'
    ],
    keywords: ['report', 'تقرير', 'تحليل حملة', 'نتائج', 'أداء'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 165,
    isFavorite: true
  },
  {
    id: 'ads-ana-082',
    code: '/ad metrics',
    titleAr: 'شرح وتفسير مؤشرات الأداء (CTR, CPC, ROAS)',
    titleEn: 'Ad Metric Glossary & Benchmark Guide',
    descriptionAr: 'يشرح مؤشرات الإعلان وما تعنيه عمليًا وكيف تدل على صحة الإعلان في السوق المحلي.',
    descriptionEn: 'Explains CTR, CPC, CPA, CPM, and ROAS with practical diagnostic benchmarks.',
    group: 'ads',
    outputType: 'analysis',
    adsCategory: 'analytics',
    params: [
      { key: 'metrics_list', flag: 'metrics_list', isPositional: true, type: 'text', required: true, labelAr: 'المؤشرات المطلوبة', labelEn: 'Metrics', hintAr: 'CTR,CPC,CPA,ROAS', hintEn: 'CTR,CPC,CPA,ROAS' },
      resolveParam('level'),
      resolveParam('language')
    ],
    example: `/ad metrics CTR,CPC,CPA,ROAS --level=beginner --language=ar`,
    qualityRules: [
      'تقديم أمثلة عملية لطريقة حساب كل مؤشر وكيفية تحسينه'
    ],
    keywords: ['metrics', 'مؤشرات', 'ctr', 'roas', 'cpc', 'شرح إعلانات'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 120,
    isFavorite: false
  },
  {
    id: 'ads-ana-083',
    code: '/roas analysis',
    titleAr: 'تحليل العائد على الإنفاق الإعلاني (ROAS Analysis)',
    titleEn: 'ROAS & Profitability Margin Analysis',
    descriptionAr: 'يحلل العائد على الإنفاق الإعلاني وهامش الربح الصافي ويقترح حلولاً لرفع الجدوى المالية.',
    descriptionEn: 'Calculates break-even ROAS and identifies levers to scale return on ad spend.',
    group: 'ads',
    outputType: 'analysis',
    adsCategory: 'analytics',
    params: [
      { key: 'data', flag: 'data', isPositional: true, type: 'text', required: true, labelAr: 'الإيرادات والإنفاق', labelEn: 'Financials', hintAr: 'revenue=20000 spend=5000', hintEn: 'revenue=20000 spend=5000' },
      resolveParam('platform'),
      { key: 'period', flag: 'period', isPositional: false, type: 'string', required: false, labelAr: 'الفترة الزمنية', labelEn: 'Period', hintAr: 'month, quarter', hintEn: 'month, quarter' }
    ],
    example: `/roas analysis revenue=20000 spend=5000 --platform=meta --period=month`,
    qualityRules: [
      'حساب نقطة التعادل (Break-even ROAS) وأثر قيمة متوسط السلة (AOV)'
    ],
    keywords: ['roas', 'العائد على الإعلان', 'أرباح', 'عائد الإنفاق', 'جدوى'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 140,
    isFavorite: true
  },
  {
    id: 'ads-ana-084',
    code: '/lead quality',
    titleAr: 'تقييم جودة العملاء المحتملين (Lead Quality)',
    titleEn: 'Lead Quality & Pipeline Conversion Audit',
    descriptionAr: 'يساعد في تقييم جودة العملاء المحتملين والنسبة الجاهزة للشراء وليس مجرد الأعداد الخام.',
    descriptionEn: 'Audits lead quality vs volume to align ad targeting with sales team closing rates.',
    group: 'ads',
    outputType: 'analysis',
    adsCategory: 'analytics',
    params: [
      { key: 'service', flag: 'service', isPositional: true, type: 'text', required: true, labelAr: 'الخدمة والنتائج', labelEn: 'Service & Leads', hintAr: 'خدمة تصميم داخلي', hintEn: 'Interior design service' },
      { key: 'leads', flag: 'leads', isPositional: false, type: 'string', required: false, labelAr: 'إجمالي العملاء', labelEn: 'Total Leads', hintAr: '50, 100', hintEn: '50, 100' },
      { key: 'qualified', flag: 'qualified', isPositional: false, type: 'string', required: false, labelAr: 'المؤهلين منهم', labelEn: 'Qualified', hintAr: '12, 25', hintEn: '12, 25' },
      resolveParam('goal')
    ],
    example: `/lead quality خدمة تصميم داخلي --leads=50 --qualified=12 --goal=consultations`,
    qualityRules: [
      'اقتراح أسئلة تصفية في نموذج الإعلان (Lead Form) لرفع جودة البيانات'
    ],
    keywords: ['leads', 'عملاء محتملين', 'جودة الليدز', 'lead quality', 'تأهيل'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 110,
    isFavorite: false
  },
  {
    id: 'ads-ana-085',
    code: '/ad performance diagnosis',
    titleAr: 'تشخيص أسباب ضعف الإعلان وحل المشكلة',
    titleEn: 'Ad Performance Bottleneck Diagnosis',
    descriptionAr: 'يشخص سبب ضعف الحملة اعتمادًا على المؤشرات: ضعف النقرات، غلاء النقرة، أو بطء التحويل.',
    descriptionEn: 'Troubleshoots low CTR, high CPC, or poor landing page conversion rates.',
    group: 'ads',
    outputType: 'analysis',
    adsCategory: 'analytics',
    params: [
      { key: 'metrics_data', flag: 'metrics_data', isPositional: true, type: 'text', required: true, labelAr: 'أرقام ومؤشرات الحملة', labelEn: 'Metrics', hintAr: 'CTR=0.4 CPC=3.2 conversions=2', hintEn: 'CTR=0.4 CPC=3.2 conversions=2' },
      resolveParam('platform'),
      resolveParam('goal')
    ],
    example: `/ad performance diagnosis CTR=0.4 CPC=3.2 conversions=2 --platform=instagram --goal=sales`,
    qualityRules: [
      'تحديد هل الخلل في الصورة (CTR)، في الاستهداف (CPC)، أو في صفحة الهبوط (CR)'
    ],
    keywords: ['diagnosis', 'تشخيص', 'ضعف الإعلان', 'حل مشاكل الإعلانات'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 175,
    isFavorite: true
  },
  {
    id: 'ads-ana-086',
    code: '/creative fatigue',
    titleAr: 'تشخيص إرهاق الإعلان ووقت التجديد (Fatigue)',
    titleEn: 'Ad Creative Fatigue & Decay Detector',
    descriptionAr: 'يساعد على اكتشاف تكرار الإعلان (Frequency) وهبوط التفاعل لتحديد موعد تبديل الكرييتف.',
    descriptionEn: 'Detects ad burnout based on rising frequency, declining CTR, and ad fatigue metrics.',
    group: 'ads',
    outputType: 'analysis',
    adsCategory: 'analytics',
    params: [
      { key: 'ad_name', flag: 'ad_name', isPositional: true, type: 'text', required: true, labelAr: 'الإعلان', labelEn: 'Ad Name', hintAr: 'إعلان عطر الموسم', hintEn: 'Seasonal perfume ad' },
      { key: 'frequency', flag: 'frequency', isPositional: false, type: 'string', required: false, labelAr: 'معدل التكرار', labelEn: 'Frequency', hintAr: '5, 4.2', hintEn: '5, 4.2' },
      { key: 'ctr-trend', flag: 'ctr-trend', isPositional: false, type: 'string', required: false, labelAr: 'مسار الـCTR', labelEn: 'CTR Trend', hintAr: 'down, flat', hintEn: 'down, flat' },
      resolveParam('platform')
    ],
    example: `/creative fatigue إعلان عطر --frequency=5 --ctr-trend=down --platform=facebook`,
    qualityRules: [
      'تقديم خطة لتجديد الزوايا البصرية وإدخال صيغ جديدة فورًا'
    ],
    keywords: ['fatigue', 'إرهاق الإعلان', 'تكرار', 'frequency', 'تجديد الكرييتف'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 130,
    isFavorite: false
  },
  {
    id: 'ads-ana-087',
    code: '/budget allocation',
    titleAr: 'توزيع الميزانية الإعلانية الذكي',
    titleEn: 'Smart Multi-Platform Budget Allocation',
    descriptionAr: 'يقترح توزيع الميزانية بين المنصات والمراحل (Top, Mid, Bottom) لتعظيم العائد الكلي.',
    descriptionEn: 'Allocates budget across channels (Meta, Google, TikTok) based on funnel stages.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'analytics',
    params: [
      { key: 'budget_data', flag: 'budget_data', isPositional: true, type: 'text', required: true, labelAr: 'الميزانية الكلية', labelEn: 'Total Budget', hintAr: 'budget=10000', hintEn: 'budget=10000' },
      resolveParam('goal'),
      resolveParam('platform'),
      { key: 'duration', flag: 'duration', isPositional: false, type: 'string', required: false, labelAr: 'المدة', labelEn: 'Duration', hintAr: '30days, monthly', hintEn: '30days, monthly' }
    ],
    example: `/budget allocation budget=10000 --goal=online-sales --platform=meta,google,tiktok --duration=30days`,
    qualityRules: [
      'تخصيص 70% للقنوات المجربة و20% للتوسع و10% للاختبار والتجريب'
    ],
    keywords: ['budget', 'توزيع الميزانية', 'ميزانية إعلانية', 'تخطيط مالي'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 120,
    isFavorite: false
  },
  {
    id: 'ads-ana-088',
    code: '/ad optimization plan',
    titleAr: 'خطة تحسين متدرجة للحملة (Optimization)',
    titleEn: '14-Day Step-by-Step Ad Optimization Plan',
    descriptionAr: 'يبني خطة تحسين متدرجة للحملة خطوة بخطوة بدل تغيير كل العناصر دفعة واحدة وإفساد الخوارزمية.',
    descriptionEn: 'Structured 14-day optimization roadmap to scale ads safely without algorithm reset.',
    group: 'ads',
    outputType: 'plan',
    adsCategory: 'analytics',
    params: [
      { key: 'business', flag: 'business', isPositional: true, type: 'text', required: true, labelAr: 'النشاط', labelEn: 'Business', hintAr: 'متجر أحذية, عيادة أسنان', hintEn: 'Shoe store, dental clinic' },
      resolveParam('goal'),
      resolveParam('platform'),
      { key: 'duration', flag: 'duration', isPositional: false, type: 'string', required: false, labelAr: 'مدة الخطة', labelEn: 'Plan Duration', hintAr: '14days, 7days', hintEn: '14days, 7days' }
    ],
    example: `/ad optimization plan متجر أحذية --goal=more-sales --platform=meta --duration=14days`,
    qualityRules: [
      'تحديد أيام محددة لتعديل الميزانية وإيقاف الإعلانات الخاسرة وإطلاق الفائزة'
    ],
    keywords: ['optimization', 'تحسين', 'تعديل الإعلانات', 'خطة تحسين'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 115,
    isFavorite: false
  },
  {
    id: 'ads-ana-089',
    code: '/campaign next steps',
    titleAr: 'خطة الإجراءات القادمة بناءً على النتائج',
    titleEn: 'Post-Campaign Actionable Next Steps',
    descriptionAr: 'يحول نتائج الحملة السابقة إلى قائمة مهام وإجراءات عملية ذات أولوية للأسبوع القادم.',
    descriptionEn: 'Converts campaign findings into prioritized action items for next week.',
    group: 'ads',
    outputType: 'plan',
    adsCategory: 'analytics',
    params: [
      { key: 'summary', flag: 'summary', isPositional: true, type: 'text', required: true, labelAr: 'ملخص النتائج الحالية', labelEn: 'Results Summary', hintAr: 'الصق ملخص النتائج', hintEn: 'Paste results summary' },
      resolveParam('goal'),
      { key: 'output', flag: 'output', isPositional: false, type: 'string', required: false, labelAr: 'المخرجات', labelEn: 'Output', hintAr: 'priority-list, checklist', hintEn: 'priority-list, checklist' }
    ],
    example: `/campaign next steps [الصق ملخص النتائج] --goal=improve-conversions --output=priority-list`,
    qualityRules: [
      'ترتيب المهام حسب الأثر المتوقع وسهولة التنفيذ (Impact vs Effort)'
    ],
    keywords: ['next steps', 'خطوات قادمة', 'توصيات', 'إجراءات'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 90,
    isFavorite: false
  },
  {
    id: 'ads-ana-090',
    code: '/marketing dashboard',
    titleAr: 'هيكلة لوحة متابعة الإعلانات (Dashboard)',
    titleEn: 'Marketing KPI Dashboard Layout Spec',
    descriptionAr: 'يقترح شكل ومؤشرات لوحة متابعة مبسطة للحملات ومؤشراتها الأساسية لتسهيل المراقبة اليومية.',
    descriptionEn: 'Designs executive marketing dashboard layouts specifying key metric widgets and refresh rates.',
    group: 'ads',
    outputType: 'analysis',
    adsCategory: 'analytics',
    params: [
      { key: 'business', flag: 'business', isPositional: true, type: 'text', required: true, labelAr: 'نوع المشروع', labelEn: 'Business Type', hintAr: 'متجر إلكتروني, منصة دورات', hintEn: 'Ecommerce, course platform' },
      { key: 'metrics', flag: 'metrics', isPositional: false, type: 'string', required: false, labelAr: 'أهم المؤشرات', labelEn: 'Key Metrics', hintAr: 'spend,roas,ctr,orders', hintEn: 'spend,roas,ctr,orders' },
      { key: 'period', flag: 'period', isPositional: false, type: 'string', required: false, labelAr: 'دورة المتابعة', labelEn: 'Cadence', hintAr: 'weekly, daily', hintEn: 'weekly, daily' }
    ],
    example: `/marketing dashboard متجر إلكتروني --metrics=spend,roas,ctr,orders --period=weekly`,
    qualityRules: [
      'التركيز على مقاييس الإيرادات والأرباح الصافية بدلاً من المقاييس الشكلية فقط'
    ],
    keywords: ['dashboard', 'لوحة تحكم', 'متابعة', 'kpis', 'إحصاءات'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 110,
    isFavorite: false
  }
];
