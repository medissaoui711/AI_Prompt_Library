import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const LUXURY_PROMPTS: CommandPrompt[] = [
  {
    id: 'ads-lux-061',
    code: '/luxurycampaign ads',
    titleAr: 'حملة إعلانية فاخرة متكاملة',
    titleEn: 'Integrated Luxury Campaign Suite',
    descriptionAr: 'ينشئ حملة إعلانية فاخرة متكاملة لعلامة أو منتج راقٍ يعكس المكانة الاجتماعية والتفرد.',
    descriptionEn: 'End-to-end luxury campaign concepts emphasizing prestige, artisanal craft, and heritage.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'luxury',
    params: [
      { key: 'item', flag: 'item', isPositional: true, type: 'text', required: true, labelAr: 'المنتج الراقي', labelEn: 'Luxury Product', hintAr: 'مجوهرات ذهبية, يخت خاص', hintEn: 'Gold jewelry, private yacht' },
      resolveParam('audience'),
      resolveParam('platform'),
      resolveParam('format'),
      resolveParam('tone')
    ],
    example: `/luxurycampaign ads مجوهرات ذهبية --audience=high-income-women --platform=instagram --format=image,reel --tone=exclusive`,
    qualityRules: [
      'تجنب مفردات التخفيضات والتركيز على مفردات الحرفية والتفرد'
    ],
    keywords: ['luxury', 'فاخر', 'مجوهرات', 'exclusive', 'حملة راقية'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 165,
    isFavorite: true
  },
  {
    id: 'ads-lux-062',
    code: '/luxury ad copy',
    titleAr: 'نصوص إعلانية فاخرة وراقية',
    titleEn: 'Haute Luxury Ad Copywriting',
    descriptionAr: 'يكتب نصًا راقيًا ومختصرًا يركز على الحصرية والحرفية والقيمة الجوهرية بدون ابتذال.',
    descriptionEn: 'Writes poetic, understated, and sophisticated ad copy for luxury brands.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'luxury',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج الفاخر', labelEn: 'Product', hintAr: 'عطر نيش نادر, ساعة كلاسيكية', hintEn: 'Rare niche perfume, classic watch' },
      resolveParam('tone'),
      resolveParam('platform'),
      resolveParam('length')
    ],
    example: `/luxury ad copy عطر نيش --tone=elegant --platform=instagram --length=short`,
    qualityRules: [
      'الاعتماد على بلاغة الإيجاز والكلمات ذات الثقل الإيحائي'
    ],
    keywords: ['نص فاخر', 'luxury copy', 'أناقة', 'حصرية', 'عطور نيش'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 125,
    isFavorite: false
  },
  {
    id: 'ads-lux-063',
    code: '/premium product ad',
    titleAr: 'إعلان منتجات الفئة الأولى (Premium Product)',
    titleEn: 'Premium Tier Product Ad',
    descriptionAr: 'يجهز إعلانًا لمنتج Premium مع رسالة قيمة عميقة ودليل جودة ملموس يبرر السعر المرتفع.',
    descriptionEn: 'Highlights craftsmanship, premium materials, and long-term value justification.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'luxury',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج', labelEn: 'Product', hintAr: 'حقيبة جلد طبيعي يدوي الصنع', hintEn: 'Handmade leather bag' },
      resolveParam('audience'),
      resolveParam('platform'),
      resolveParam('format')
    ],
    example: `/premium product ad حقيبة جلد طبيعي --audience=professionals --platform=instagram --format=carousel`,
    qualityRules: [
      'إبراز أصل الخامات وضمان الجودة الممتد'
    ],
    keywords: ['premium', 'جودة عالية', 'جلد طبيعي', 'حرفية'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 95,
    isFavorite: false
  },
  {
    id: 'ads-lux-064',
    code: '/exclusive launch',
    titleAr: 'إعلان إطلاق حصري بالدعوات والقائمة الخاصة',
    titleEn: 'Invitation-Only Private Launch Ad',
    descriptionAr: 'يخطط إعلان إطلاق حصري بالدعوات الخاصة أو قائمة الانتظار لكبار الشخصيات (VIP).',
    descriptionEn: 'Builds anticipation for invite-only VIP openings and private guestlists.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'luxury',
    params: [
      { key: 'event', flag: 'event', isPositional: true, type: 'text', required: true, labelAr: 'الحدث أو الفعالية', labelEn: 'Event / Release', hintAr: 'عشاء خاص في مطعم فاخر, افتتاح صالة عرض', hintEn: 'Private fine dining, gallery opening' },
      resolveParam('audience'),
      resolveParam('platform'),
      resolveParam('cta')
    ],
    example: `/exclusive launch عشاء خاص في مطعم فاخر --audience=vip --platform=instagram --cta=reserve-now`,
    qualityRules: [
      'التأكيد على المقاعد المحدودة جدًا وشروط الدخول الحصرية'
    ],
    keywords: ['vip', 'دعوة خاصة', 'حفل افتتاح', 'exclusive launch', 'مطعم فاخر'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 110,
    isFavorite: false
  },
  {
    id: 'ads-lux-065',
    code: '/high end visual',
    titleAr: 'تصور بصري سينمائي (High-End Visual)',
    titleEn: 'Cinematic High-End Visual Concept',
    descriptionAr: 'يجهز تصورًا بصريًا مينيمال ودراميًا لمنتج عالي القيمة مع تباين وظلال مدروسة.',
    descriptionEn: 'Visual prompt and lighting layout for dramatic, high-contrast dark luxury aesthetics.',
    group: 'ads',
    outputType: 'image',
    adsCategory: 'luxury',
    params: [
      { key: 'item', flag: 'item', isPositional: true, type: 'text', required: true, labelAr: 'القطعة الفاخرة', labelEn: 'Luxury Item', hintAr: 'ساعة ميكانيكية سويسرية', hintEn: 'Swiss mechanical watch' },
      { key: 'background', flag: 'background', isPositional: false, type: 'string', required: false, labelAr: 'الخلفية', labelEn: 'Background', hintAr: 'black, brushed-titanium', hintEn: 'black, brushed-titanium' },
      { key: 'lighting', flag: 'lighting', isPositional: false, type: 'string', required: false, labelAr: 'الإضاءة', labelEn: 'Lighting', hintAr: 'dramatic, moody-edge', hintEn: 'dramatic, moody-edge' },
      { key: 'text', flag: 'text', isPositional: false, type: 'string', required: false, labelAr: 'كثافة النص', labelEn: 'Text Presence', hintAr: 'minimal, none', hintEn: 'minimal, none' }
    ],
    example: `/high end visual ساعة ميكانيكية --background=black --lighting=dramatic --text=minimal`,
    qualityRules: [
      'إظهار أدق تفاصيل العقارب والتروس واللمعان المعدني'
    ],
    keywords: ['high end', 'تصوير سينمائي', 'ساعة ميكانيكية', 'إضاءة درامية'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 88,
    isFavorite: false
  },
  {
    id: 'ads-lux-066',
    code: '/brand prestige ad',
    titleAr: 'إعلان مكانة وهيبة العلامة التجارية (Prestige)',
    titleEn: 'Brand Prestige & Heritage Ad',
    descriptionAr: 'ينشئ إعلانًا يرفع صورة العلامة ومكانتها في أذهان الجمهور بدل التركيز على العروض السعرية.',
    descriptionEn: 'Builds enduring brand prestige, legacy reputation, and aspirational desire.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'luxury',
    params: [
      { key: 'brand', flag: 'brand', isPositional: true, type: 'text', required: true, labelAr: 'العلامة أو الفندق', labelEn: 'Brand / Hotel', hintAr: 'فندق خمس نجوم, منتجع صحي', hintEn: 'Five star hotel, wellness resort' },
      resolveParam('goal'),
      resolveParam('platform'),
      resolveParam('tone')
    ],
    example: `/brand prestige ad فندق خمس نجوم --goal=brand-awareness --platform=instagram --tone=elegant`,
    qualityRules: [
      'سرد قصة التجربة الإنسانية والراحة الملكية المطلقة'
    ],
    keywords: ['prestige', 'هيبة العلامة', 'فندق خمس نجوم', 'مكانة'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 95,
    isFavorite: false
  },
  {
    id: 'ads-lux-067',
    code: '/heritage ad',
    titleAr: 'إعلان الأصالة والتراث والقصة الحية',
    titleEn: 'Heritage & Legacy Storytelling Ad',
    descriptionAr: 'يجهز إعلانًا يعتمد على القصة، التراث، وأصالة المكونات التراثية وطريقة الصنع العريقة.',
    descriptionEn: 'Tells authentic heritage stories linking modern products to cultural roots.',
    group: 'ads',
    outputType: 'mixed',
    adsCategory: 'luxury',
    params: [
      { key: 'topic', flag: 'topic', isPositional: true, type: 'text', required: true, labelAr: 'المنتج التراثي', labelEn: 'Heritage Item', hintAr: 'قهوة عربية مختصة, دهن عود أصيل', hintEn: 'Specialty Arabic coffee, pure Oud' },
      resolveParam('platform'),
      resolveParam('format'),
      resolveParam('tone')
    ],
    example: `/heritage ad قهوة عربية مختصة --platform=instagram --format=video --tone=authentic`,
    qualityRules: [
      'إبراز أصول المزارع وحصاد المحصول وروح الضيافة الأصيلة'
    ],
    keywords: ['تراث', 'heritage', 'قهوة عربية', 'أصالة', 'عود'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 118,
    isFavorite: false
  },
  {
    id: 'ads-lux-068',
    code: '/minimal luxury ad',
    titleAr: 'إعلان مينيمال فاخر (جملة واحدة وصورة نقية)',
    titleEn: 'Minimalist Ultra-Luxury One-Liner Ad',
    descriptionAr: 'ينشئ تصورًا لإعلان فاخر شديد البساطة مع منتج واحد في المنتصف ورسالة من سطر واحد فقط.',
    descriptionEn: 'Pure minimalist ad composition with a single hero product and one iconic sentence.',
    group: 'ads',
    outputType: 'image',
    adsCategory: 'luxury',
    params: [
      { key: 'product', flag: 'product', isPositional: true, type: 'text', required: true, labelAr: 'المنتج', labelEn: 'Product', hintAr: 'قلم فاخر مصنوع يدويًا', hintEn: 'Handcrafted luxury pen' },
      resolveParam('format'),
      { key: 'background', flag: 'background', isPositional: false, type: 'string', required: false, labelAr: 'الخلفية', labelEn: 'Background', hintAr: 'dark-marble, slate-gray', hintEn: 'dark-marble, slate-gray' },
      { key: 'message', flag: 'message', isPositional: false, type: 'string', required: false, labelAr: 'طول العبارة', labelEn: 'Message Length', hintAr: 'one-line', hintEn: 'one-line' }
    ],
    example: `/minimal luxury ad قلم فاخر --format=square --background=dark-marble --message=one-line`,
    qualityRules: [
      'ترك مساحة فارغة واسعة لإعطاء انطباع بالثقة والهدوء التام'
    ],
    keywords: ['minimal', 'مينيمال', 'بساطة', 'قلم فاخر', 'one line'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 104,
    isFavorite: false
  },
  {
    id: 'ads-lux-069',
    code: '/vip offer ad',
    titleAr: 'عرض خاص ومغلق لكبار العملاء (VIP Offer)',
    titleEn: 'Exclusive VIP Private Member Offer',
    descriptionAr: 'يكتب عرضًا راقيًا ومخصصًا للعملاء الدائمين والمميزين دون المساس بصورة وبريستيج العلامة.',
    descriptionEn: 'Private rewards and exclusive upgrades for high-value VIP client retention.',
    group: 'ads',
    outputType: 'text',
    adsCategory: 'luxury',
    params: [
      { key: 'offer', flag: 'offer', isPositional: true, type: 'text', required: true, labelAr: 'الخدمة المميزة', labelEn: 'Service', hintAr: 'جلسة سبا خاصة مع ترقية مجانية', hintEn: 'Private spa with complimentary upgrade' },
      resolveParam('audience'),
      { key: 'benefit', flag: 'benefit', isPositional: false, type: 'string', required: false, labelAr: 'الميزة الحصرية', labelEn: 'Exclusive Benefit', hintAr: 'private-upgrade, concierge-access', hintEn: 'private-upgrade, concierge-access' },
      resolveParam('tone')
    ],
    example: `/vip offer ad جلسة سبا خاصة --audience=existing-vip --benefit=private-upgrade --tone=exclusive`,
    qualityRules: [
      'استخدام لغة التقدير والامتنان والاعتزاز بولاء العميل'
    ],
    keywords: ['vip offer', 'كبار الشخصيات', 'سبا', 'عرض حصري', 'ولاء'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 82,
    isFavorite: false
  },
  {
    id: 'ads-lux-070',
    code: '/luxury reel',
    titleAr: 'ريلز سينمائي هادئ للحرفية والفخامة',
    titleEn: 'Cinematic Slow-Paced Luxury Reel',
    descriptionAr: 'يكتب Reel راقيًا بإيقاع هادئ وتصوير سينمائي مقرب (Macro) يركز على أدق تفاصيل الحرفية اليدوية.',
    descriptionEn: 'Slow-burn cinematic macro reel scripts celebrating artisanal craftsmanship.',
    group: 'ads',
    outputType: 'video',
    adsCategory: 'luxury',
    params: [
      { key: 'craft', flag: 'craft', isPositional: true, type: 'text', required: true, labelAr: 'موضوع الحرفية', labelEn: 'Craft Subject', hintAr: 'صناعة عطر يدوي, حياكة بشت فاخر', hintEn: 'Handmade perfume, artisanal tailoring' },
      resolveParam('duration'),
      resolveParam('platform'),
      resolveParam('style')
    ],
    example: `/luxury reel صناعة عطر يدوي --duration=20sec --platform=instagram --style=cinematic`,
    qualityRules: [
      'لقطات مقربة بطيئة (Slow-Mo) مع موسيقى كلاسيكية هادئة وأصوات حرفية طبيعية'
    ],
    keywords: ['luxury reel', 'سينمائي', 'ريلز فاخر', 'صناعة يدوية', 'slow mo'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 130,
    isFavorite: true
  }
];
