export const PROMPT_GROUPS = [
  { id: 'sales', labelKey: 'groupSales', color: 'bg-emerald-500/10 text-emerald-600', icon: 'TrendingUp' },
  { id: 'business', labelKey: 'groupBusiness', color: 'bg-indigo-500/10 text-indigo-500', icon: 'Briefcase' },
  { id: 'content', labelKey: 'groupContent', color: 'bg-teal-500/10 text-teal-500', icon: 'PenTool' },
  { id: 'edu', labelKey: 'groupEdu', color: 'bg-blue-500/10 text-blue-500', icon: 'GraduationCap' },
  { id: 'design', labelKey: 'groupDesign', color: 'bg-purple-500/10 text-purple-500', icon: 'Palette' },
  { id: 'ads', labelKey: 'groupAds', color: 'bg-amber-500/10 text-amber-500', icon: 'Megaphone' },
  { id: 'dev', labelKey: 'groupDev', color: 'bg-cyan-500/10 text-cyan-500', icon: 'Code2' },
  { id: 'cv', labelKey: 'groupCv', color: 'bg-emerald-500/10 text-emerald-500', icon: 'FileText' },
  { id: 'video', labelKey: 'groupVideo', color: 'bg-red-500/10 text-red-500', icon: 'Video' }
] as const;

export const SALES_SUBCATEGORIES = [
  { id: 'all', labelAr: 'الكل (100 أمر مبيعات وإدارة عملاء)', labelEn: 'All (100 Sales Prompts)', icon: 'Sparkles', count: 100 },
  { id: 'strategy', labelAr: 'استراتيجية وتأهيل العملاء', labelEn: 'Strategy & Qualification', icon: 'Target', count: 10 },
  { id: 'outreach', labelAr: 'الوصول وبدء التواصل', labelEn: 'Cold Outreach & First Touch', icon: 'Send', count: 10 },
  { id: 'calls', labelAr: 'المكالمات والاجتماعات البيعية', labelEn: 'Discovery Calls & Meetings', icon: 'PhoneCall', count: 10 },
  { id: 'proposals', labelAr: 'عروض الأسعار والمقترحات', labelEn: 'Proposals & Pricing', icon: 'FileText', count: 10 },
  { id: 'objections', labelAr: 'معالجة الاعتراضات والمخاوف', labelEn: 'Objection Handling', icon: 'ShieldAlert', count: 10 },
  { id: 'followup', labelAr: 'المتابعة الذكية واستعادة الردود', labelEn: 'Follow-Up & Anti-Ghosting', icon: 'RotateCcw', count: 10 },
  { id: 'closing', labelAr: 'إغلاق الصفقات والتفاوض', labelEn: 'Closing & Negotiation', icon: 'CheckCircle2', count: 10 },
  { id: 'retention', labelAr: 'رعاية وتوسيع الحسابات', labelEn: 'Retention & Expansion', icon: 'Users', count: 10 },
  { id: 'crm', labelAr: 'تقارير وإدارة الـ CRM', labelEn: 'CRM, Pipeline & Metrics', icon: 'LayoutDashboard', count: 10 },
  { id: 'training', labelAr: 'تدريب ومحاكاة المبيعات', labelEn: 'Training & Roleplay', icon: 'GraduationCap', count: 10 },
] as const;

export const SALES_STARTER_SHORTCUTS = [
  { labelAr: 'تأهيل العميل المحتمل', labelEn: 'Qualify Lead', code: '/qualify lead', id: 'sal-strat-002' },
  { labelAr: 'رسالة وصول أولى', labelEn: 'Cold Outreach', code: '/cold outreach', id: 'sal-out-011' },
  { labelAr: 'افتتاحية واتساب بيعية', labelEn: 'WhatsApp Opener', code: '/whatsapp opener', id: 'sal-out-013' },
  { labelAr: 'سكربت مكالمة اكتشاف', labelEn: 'Discovery Call', code: '/discovery call script', id: 'sal-call-021' },
  { labelAr: 'عرض سعر مقنع', labelEn: 'Sales Proposal', code: '/sales proposal', id: 'sal-prop-031' },
  { labelAr: 'الرد على السعر مرتفع', labelEn: 'Price Objection', code: '/price objection', id: 'sal-obj-041' },
  { labelAr: 'متابعة بعد عدم الرد', labelEn: 'Anti-Ghosting', code: '/no response follow up', id: 'sal-fol-052' },
  { labelAr: 'أسئلة إغلاق طبيعية', labelEn: 'Closing Questions', code: '/closing question', id: 'sal-close-061' },
  { labelAr: 'الرد على طلب الخصم', labelEn: 'Discount Response', code: '/discount response', id: 'sal-close-065' },
  { labelAr: 'ترقية عميل حالي (Upsell)', labelEn: 'Upsell Client', code: '/upsell client', id: 'sal-ret-075' },
  { labelAr: 'دليل وموسوعة المبيعات', labelEn: 'Sales Playbook', code: '/sales playbook', id: 'sal-crm-090' },
  { labelAr: 'محاكاة مكالمة مبيعات', labelEn: 'Sales Roleplay', code: '/sales roleplay', id: 'sal-trn-091' },
] as const;


export const BUSINESS_SUBCATEGORIES = [
  { id: 'all', labelAr: 'الكل (116 أمر أعمال وبيانات)', labelEn: 'All (116 Business & Data Prompts)', icon: 'Sparkles', count: 116 },
  { id: 'feasibility', labelAr: 'دراسة الجدوى', labelEn: 'Feasibility Study', icon: 'Target', count: 10 },
  { id: 'model', labelAr: 'نموذج العمل التجاري', labelEn: 'Business Model', icon: 'Layers', count: 10 },
  { id: 'market', labelAr: 'أبحاث السوق والعملاء', labelEn: 'Market & Customer Research', icon: 'Users', count: 10 },
  { id: 'competitors', labelAr: 'تحليل المنافسين', labelEn: 'Competitor Analysis', icon: 'Crosshair', count: 10 },
  { id: 'launch', labelAr: 'خطة إطلاق المشروع', labelEn: 'Project Launch Plan', icon: 'Rocket', count: 10 },
  { id: 'growth', labelAr: 'خطة نمو المشروع', labelEn: 'Growth Plan', icon: 'TrendingUp', count: 10 },
  { id: 'financial', labelAr: 'التخطيط المالي وKPI', labelEn: 'Financial Planning & KPIs', icon: 'DollarSign', count: 10 },
  { id: 'data_analysis', labelAr: 'تحليل البيانات وExcel وCSV', labelEn: 'Data Analysis & CSV/Excel', icon: 'Table', count: 16 },
  { id: 'reports', labelAr: 'التقارير ولوحات التحكم', labelEn: 'Reports & Dashboards', icon: 'LayoutDashboard', count: 10 },
  { id: 'visualization', labelAr: 'تحويل البيانات إلى رسوم بيانية', labelEn: 'Data Visualization & Charts', icon: 'BarChart3', count: 12 },
  { id: 'decisions', labelAr: 'اتخاذ القرار والتوصيات', labelEn: 'Decisions & Recommendations', icon: 'CheckCircle2', count: 8 },
] as const;

export const BUSINESS_STARTER_SHORTCUTS = [
  { labelAr: 'دراسة جدوى شاملة', labelEn: 'Feasibility Study', code: '/feasibility study', id: 'biz-feas-001' },
  { labelAr: 'مخطط نموذج العمل', labelEn: 'Business Model Canvas', code: '/business model canvas', id: 'biz-mod-012' },
  { labelAr: 'خطة أبحاث السوق', labelEn: 'Market Research', code: '/market research', id: 'biz-mkt-021' },
  { labelAr: 'تحليل المنافسين', labelEn: 'Competitor Analysis', code: '/competitor analysis', id: 'biz-comp-031' },
  { labelAr: 'خطة إطلاق المشروع', labelEn: 'Launch Plan', code: '/launch plan', id: 'biz-lnch-041' },
  { labelAr: 'خطة نمو متسارعة', labelEn: 'Growth Plan', code: '/growth plan', id: 'biz-gro-051' },
  { labelAr: 'النموذج المالي الأولي', labelEn: 'Financial Model', code: '/financial model', id: 'biz-fin-061' },
  { labelAr: 'تحليل ملف البيانات', labelEn: 'Data Analysis', code: '/data analysis', id: 'biz-dat-071' },
  { labelAr: 'تحليل ملف Excel', labelEn: 'Excel Analysis', code: '/excel analysis', id: 'biz-dat-072' },
  { labelAr: 'تنظيف ومعالجة البيانات', labelEn: 'Data Cleaning', code: '/data cleaning', id: 'biz-dat-075' },
  { labelAr: 'تحليل الاتجاه والموسمية', labelEn: 'Trend Analysis', code: '/trend analysis', id: 'biz-dat-082' },
  { labelAr: 'تقرير تنفيذي للأعمال', labelEn: 'Data Report', code: '/data report', id: 'biz-rep-087' },
  { labelAr: 'تصميم لوحة التحكم', labelEn: 'Dashboard Design', code: '/dashboard design', id: 'biz-rep-093' },
  { labelAr: 'توصية الرسوم البيانية', labelEn: 'Chart Recommendation', code: '/chart recommendation', id: 'biz-vis-097' },
  { labelAr: 'اتخاذ قرار استثماري', labelEn: 'Business Decision', code: '/business decision', id: 'biz-dec-109' },
] as const;

export const CONTENT_SUBCATEGORIES = [
  { id: 'all', labelAr: 'الكل (100 أمر محتوى ونصوص)', labelEn: 'All (100 Content Prompts)', icon: 'Sparkles', count: 100 },
  { id: 'social', labelAr: 'منشورات وسائل التواصل', labelEn: 'Social Media Posts', icon: 'Share2', count: 10 },
  { id: 'shortform', labelAr: 'محتوى Reels وTikTok والقصير', labelEn: 'Short-Form & Reels', icon: 'Video', count: 10 },
  { id: 'linkedin', labelAr: 'محتوى LinkedIn المهني', labelEn: 'Professional & LinkedIn', icon: 'Briefcase', count: 10 },
  { id: 'human_articles', labelAr: 'مقالات بشرية ومحتوى مواقع', labelEn: 'Human Articles & Web', icon: 'BookOpen', count: 10 },
  { id: 'seo_articles', labelAr: 'مقالات تسويقية وSEO', labelEn: 'Marketing Articles & SEO', icon: 'Search', count: 10 },
  { id: 'products_services', labelAr: 'تعريف المنتجات والخدمات', labelEn: 'Products & Services Intro', icon: 'ShoppingBag', count: 10 },
  { id: 'launch', labelAr: 'إطلاق تطبيق أو منصة جديدة', labelEn: 'App & Platform Launch', icon: 'Rocket', count: 10 },
  { id: 'brand_stories', labelAr: 'قصص العلامة التجارية والثقة', labelEn: 'Brand Stories & Trust', icon: 'Heart', count: 10 },
  { id: 'email', labelAr: 'البريد والنشرات الإخبارية', labelEn: 'Email & Newsletters', icon: 'Mail', count: 8 },
  { id: 'calendar_plans', labelAr: 'خطط المحتوى والتقويم', labelEn: 'Content Plans & Calendar', icon: 'Calendar', count: 8 },
  { id: 'review_humanize', labelAr: 'مراجعة وتحسين النصوص', labelEn: 'Review & Humanize', icon: 'CheckCircle2', count: 4 },
] as const;

export const CONTENT_STARTER_SHORTCUTS = [
  { labelAr: 'منشور تواصل اجتماعي', labelEn: 'Social Post', code: '/social post', id: 'cnt-soc-001' },
  { labelAr: 'منشور إنستغرام جذاب', labelEn: 'Instagram Post', code: '/instagram post', id: 'cnt-soc-002' },
  { labelAr: 'كابشن ريلز وفيديو', labelEn: 'Reel Caption', code: '/reel caption', id: 'cnt-shrt-011' },
  { labelAr: 'منشور لينكدإن مهني', labelEn: 'LinkedIn Post', code: '/linkedin post', id: 'cnt-soc-005' },
  { labelAr: 'مقال بشري متعمق', labelEn: 'Human Article', code: '/human article', id: 'cnt-art-031' },
  { labelAr: 'مقال تسويقي متوافق SEO', labelEn: 'SEO Article', code: '/seo article', id: 'cnt-seo-041' },
  { labelAr: 'منشور إطلاق منتج', labelEn: 'Product Launch', code: '/product launch post', id: 'cnt-prod-051' },
  { labelAr: 'إطلاق تطبيق جديد', labelEn: 'App Launch', code: '/app launch', id: 'cnt-lnch-061' },
  { labelAr: 'إطلاق منصة جديدة', labelEn: 'Platform Launch', code: '/platform launch', id: 'cnt-lnch-062' },
  { labelAr: 'قصة العلامة التجارية', labelEn: 'Brand Story', code: '/brand story', id: 'cnt-brnd-071' },
  { labelAr: 'تقويم وخطة محتوى', labelEn: 'Content Calendar', code: '/content calendar', id: 'cnt-plan-089' },
  { labelAr: 'مراجعة وتدقيق محتوى', labelEn: 'Content Review', code: '/content review', id: 'cnt-rev-099' },
] as const;

export const DESIGN_SUBCATEGORIES = [
  { id: 'all', labelAr: 'الكل (108 أمر بصري)', labelEn: 'All (108 Visual Prompts)', icon: 'Sparkles', count: 108 },
  { id: 'general', labelAr: 'صور عامة وواقعية', labelEn: 'General & Realistic', icon: 'Image', count: 10 },
  { id: 'portraits', labelAr: 'صور الأشخاص والبورتريه', labelEn: 'People & Portraits', icon: 'User', count: 10 },
  { id: 'products', labelAr: 'صور المنتجات والإعلانات', labelEn: 'Products & Commercial', icon: 'ShoppingBag', count: 10 },
  { id: 'branding', labelAr: 'الهوية والشعارات', labelEn: 'Brand & Logos', icon: 'Crown', count: 10 },
  { id: 'social', labelAr: 'المحتوى الاجتماعي', labelEn: 'Social Media Visuals', icon: 'Share2', count: 10 },
  { id: 'art', labelAr: 'الفن والرسوم التوضيحية', labelEn: 'Art & Illustrations', icon: 'PenTool', count: 10 },
  { id: 'architecture', labelAr: 'التصميم المعماري والداخلي', labelEn: 'Architecture & Interior', icon: 'Building', count: 10 },
  { id: 'infographics', labelAr: 'الصور التعليمية والإنفوجرافيك', labelEn: 'Educational & Infographics', icon: 'BarChart2', count: 10 },
  { id: 'editing', labelAr: 'تعديل وتحسين الصور', labelEn: 'Editing & Enhancement', icon: 'Wand2', count: 10 },
  { id: 'perspectives', labelAr: 'زوايا ومساقط وإعادة تصور', labelEn: 'Angles & Perspectives', icon: 'Box', count: 10 },
  { id: 'publishing', labelAr: 'إخراج وتجهيز الصورة للنشر', labelEn: 'Publishing & Formats', icon: 'Maximize2', count: 8 },
] as const;

export const DESIGN_STARTER_SHORTCUTS = [
  { labelAr: 'توليد صورة عامة', labelEn: 'Generate Image', code: '/generate image', id: 'des-gen-001' },
  { labelAr: 'صورة واقعية', labelEn: 'Realistic Photo', code: '/realistic photo', id: 'des-gen-002' },
  { labelAr: 'بورتريه احترافي', labelEn: 'Portrait', code: '/portrait', id: 'des-port-011' },
  { labelAr: 'صورة منتج تجارية', labelEn: 'Product Photo', code: '/product photo', id: 'des-prod-021' },
  { labelAr: 'إعلان بصري للمنتج', labelEn: 'Product Ad', code: '/product ad visual', id: 'des-prod-028' },
  { labelAr: 'تصور شعار مبتكر', labelEn: 'Logo Concept', code: '/logo concept', id: 'des-brand-031' },
  { labelAr: 'منشور إنستغرام', labelEn: 'Instagram Post', code: '/instagram post visual', id: 'des-soc-041' },
  { labelAr: 'إنفوجرافيك تعليمي', labelEn: 'Infographic', code: '/infographic', id: 'des-info-071' },
  { labelAr: 'تصميم معماري داخلي', labelEn: 'Interior Render', code: '/interior render', id: 'des-arch-062' },
  { labelAr: 'تحسين ومعالجة صورة', labelEn: 'Enhance Photo', code: '/enhance photo', id: 'des-edit-081' },
  { labelAr: 'إزالة خلفية المنتج', labelEn: 'Remove Background', code: '/remove background', id: 'des-edit-082' },
  { labelAr: 'مقارنة قبل وبعد', labelEn: 'Before & After', code: '/before after', id: 'des-persp-100' },
] as const;

export const DEV_SUBCATEGORIES = [
  { id: 'all', labelAr: 'الكل (100 أمر برمجي)', labelEn: 'All (100 Dev Prompts)', icon: 'Sparkles', count: 100 },
  { id: 'planning', labelAr: 'التخطيط والتحليل', labelEn: 'Planning & Analysis', icon: 'Target', count: 10 },
  { id: 'web', labelAr: 'المنصات وتطبيقات الويب', labelEn: 'Platforms & Web Apps', icon: 'Globe', count: 10 },
  { id: 'android', labelAr: 'تطبيقات Android', labelEn: 'Android Apps', icon: 'Smartphone', count: 8 },
  { id: 'ios', labelAr: 'تطبيقات iPhone / iPad', labelEn: 'iOS Apps', icon: 'Apple', count: 8 },
  { id: 'crossplatform', labelAr: 'تطبيقات مشتركة Web + Mobile', labelEn: 'Cross-Platform', icon: 'Layers', count: 8 },
  { id: 'backend', labelAr: 'Backend وAPI وقواعد البيانات', labelEn: 'Backend, API & DB', icon: 'Server', count: 10 },
  { id: 'quality', labelAr: 'مراجعة الكود والجودة', labelEn: 'Code Review & Quality', icon: 'CheckCircle2', count: 10 },
  { id: 'testing', labelAr: 'الاختبار وتصحيح الأخطاء', labelEn: 'Testing & Debugging', icon: 'Bug', count: 10 },
  { id: 'security', labelAr: 'الأمن والحماية (OWASP)', labelEn: 'Security & Hardening', icon: 'ShieldAlert', count: 14 },
  { id: 'documentation', labelAr: 'التوثيق والتقارير', labelEn: 'Docs & Architecture', icon: 'FileCode', count: 7 },
  { id: 'deployment', labelAr: 'النشر والصيانة', labelEn: 'Deploy & CI/CD', icon: 'Rocket', count: 5 },
] as const;

export const DEV_STARTER_SHORTCUTS = [
  { labelAr: 'خطة منصة متكاملة', labelEn: 'Platform Plan', code: '/platform plan', id: 'dev-plan-001' },
  { labelAr: 'تطبيق ويب تفاعلي', labelEn: 'Web App', code: '/build web app', id: 'dev-web-012' },
  { labelAr: 'تطبيق Android', labelEn: 'Android App', code: '/build android app', id: 'dev-and-021' },
  { labelAr: 'تطبيق iOS', labelEn: 'iOS App', code: '/build ios app', id: 'dev-ios-029' },
  { labelAr: 'تطبيق متعدد المنصات', labelEn: 'Cross-Platform', code: '/build cross platform', id: 'dev-cross-037' },
  { labelAr: 'مراجعة شاملة للكود', labelEn: 'Code Review', code: '/code review', id: 'dev-qual-055' },
  { labelAr: 'تشخيص وتصحيح خطأ', labelEn: 'Debug Code', code: '/debug code', id: 'dev-test-065' },
  { labelAr: 'حالات اختبار شاملة', labelEn: 'Test Cases', code: '/test cases', id: 'dev-test-067' },
  { labelAr: 'فحص أمني دفاعي', labelEn: 'Security Review', code: '/security review', id: 'dev-sec-075' },
  { labelAr: 'مراجعة أمن API', labelEn: 'API Security', code: '/api security review', id: 'dev-sec-077' },
  { labelAr: 'تقرير كود احترافي', labelEn: 'Code Report', code: '/code report', id: 'dev-doc-089' },
  { labelAr: 'خطة نشر تطبيق ويب', labelEn: 'Deploy Web', code: '/deploy web', id: 'dev-dep-096' },
] as const;

export const ADS_SUBCATEGORIES = [
  { id: 'all', labelAr: 'الكل (100 أمر)', labelEn: 'All (100 Prompts)', icon: 'Sparkles', count: 100 },
  { id: 'planning', labelAr: 'التخطيط والاستراتيجية', labelEn: 'Planning & Strategy', icon: 'Target', count: 10 },
  { id: 'copywriting', labelAr: 'النصوص الإعلانية', labelEn: 'Ad Copywriting', icon: 'PenTool', count: 10 },
  { id: 'creative', labelAr: 'إعلانات الصور والتصميم', labelEn: 'Creative & Visual Ads', icon: 'Image', count: 10 },
  { id: 'video', labelAr: 'إعلانات الفيديو', labelEn: 'Video Ads', icon: 'Film', count: 10 },
  { id: 'products_offers', labelAr: 'إعلانات المنتجات والعروض', labelEn: 'Products & Offers', icon: 'ShoppingBag', count: 10 },
  { id: 'platforms', labelAr: 'المنصات الإعلانية', labelEn: 'Ad Platforms', icon: 'Share2', count: 10 },
  { id: 'luxury', labelAr: 'الحملات الفاخرة', labelEn: 'Luxury & Prestige', icon: 'Crown', count: 10 },
  { id: 'testing', labelAr: 'اختبار وتحسين الإعلان', labelEn: 'Testing & Optimization', icon: 'CheckSquare', count: 10 },
  { id: 'analytics', labelAr: 'التحليل والتقارير', labelEn: 'Analytics & Reports', icon: 'BarChart2', count: 10 },
  { id: 'special', labelAr: 'أوامر إضافية مهمة', labelEn: 'Special & Localization', icon: 'Globe', count: 10 },
] as const;

export const ADS_STARTER_SHORTCUTS = [
  { labelAr: 'خطة حملة إعلانية', labelEn: 'Ad Campaign', code: '/ad campaign', id: 'ads-plan-001' },
  { labelAr: 'نص إعلاني جاهز', labelEn: 'Ad Copy', code: '/ad copy', id: 'ads-copy-011' },
  { labelAr: 'افتتاحية خاطفة', labelEn: 'Ad Hook', code: '/ad hook', id: 'ads-copy-013' },
  { labelAr: 'إعلان صوري ثابت', labelEn: 'Image Ad', code: '/image ad', id: 'ads-creat-021' },
  { labelAr: 'إعلان فيديو قصير', labelEn: 'Video Ad', code: '/video ad', id: 'ads-vid-031' },
  { labelAr: 'إعلانات ميتا', labelEn: 'Meta Ads', code: '/meta ads', id: 'ads-plat-051' },
  { labelAr: 'حملة فاخرة', labelEn: 'Luxury Campaign', code: '/luxurycampaign ads', id: 'ads-lux-061' },
  { labelAr: 'إعلان عرض وخصم', labelEn: 'Sale Ad', code: '/sale ad', id: 'ads-off-041' },
  { labelAr: 'مراجعة وتدقيق إعلان', labelEn: 'Ad Review', code: '/ad review', id: 'ads-test-071' },
  { labelAr: 'حزمة إعلان كاملة', labelEn: 'Ad Bundle', code: '/ad bundle', id: 'ads-spec-100' },
] as const;

export const CV_SUBCATEGORIES = [
  { id: 'all', labelAr: 'الكل (100 أمر)', labelEn: 'All (100 Prompts)', icon: 'Sparkles', count: 100 },
  { id: 'creation', labelAr: 'إنشاء السيرة الذاتية', labelEn: 'CV & Resume Creation', icon: 'FileText', count: 10 },
  { id: 'templates', labelAr: 'قوالب السيرة وأنظمتها', labelEn: 'Templates & Formats', icon: 'Layout', count: 10 },
  { id: 'sections', labelAr: 'أقسام السيرة الذاتية', labelEn: 'Resume Sections', icon: 'ListChecks', count: 10 },
  { id: 'tailoring', labelAr: 'تخصيص السيرة للوظائف', labelEn: 'Job Tailoring & Matching', icon: 'Target', count: 10 },
  { id: 'review', labelAr: 'مراجعة وتدقيق السيرة', labelEn: 'Audit & Optimization', icon: 'CheckSquare', count: 10 },
  { id: 'linkedin', labelAr: 'لينكدإن ومعارض الأعمال', labelEn: 'LinkedIn & Portfolios', icon: 'Share2', count: 10 },
  { id: 'coverletters', labelAr: 'خطابات التقديم والتواصل', labelEn: 'Cover Letters & Emails', icon: 'Mail', count: 10 },
  { id: 'career', labelAr: 'المقابلات والمسار المهني', labelEn: 'Interviews & Growth', icon: 'Compass', count: 10 },
  { id: 'special', labelAr: 'أوامر خاصة بالتوظيف', labelEn: 'Special & Regional', icon: 'Globe', count: 10 },
  { id: 'advanced', labelAr: 'المستويات التنفيذية والعليا', labelEn: 'Executive & C-Suite', icon: 'Crown', count: 10 },
] as const;

export const CV_STARTER_SHORTCUTS = [
  { labelAr: 'سيرة مهيأة للـ ATS', labelEn: 'ATS Resume', code: '/ats cv', id: 'cv-temp-011' },
  { labelAr: 'بناء سيرة كاملة', labelEn: 'Build CV', code: '/cv build', id: 'cv-cre-001' },
  { labelAr: 'تخصيص لوظيفة', labelEn: 'Tailor CV', code: '/tailor cv', id: 'cv-tailor-031' },
  { labelAr: 'خطاب تقديم وظيفي', labelEn: 'Cover Letter', code: '/cover letter', id: 'cv-cov-061' },
  { labelAr: 'محاكاة مقابلة', labelEn: 'Mock Interview', code: '/mock interview', id: 'cv-car-072' },
  { labelAr: 'عنوان لينكدإن', labelEn: 'LinkedIn Headline', code: '/linkedin headline', id: 'cv-link-051' },
  { labelAr: 'صياغة الإنجازات', labelEn: 'Bullet Points', code: '/bullet points', id: 'cv-sec-024' },
  { labelAr: 'فحص التوافق ATS', labelEn: 'ATS Check', code: '/ats check', id: 'cv-rev-042' },
  { labelAr: 'تفاوض على الراتب', labelEn: 'Salary Negotiation', code: '/salary negotiation', id: 'cv-car-076' },
  { labelAr: 'خطة أول 90 يوم', labelEn: '90-Day Plan', code: '/onboarding 90 day plan', id: 'cv-adv-100' },
] as const;

export const EDU_TEACHER_SUBCATEGORIES = [
  { id: 'all', labelAr: 'الكل (95 أمراً لنظام أوامر المعلم)', labelEn: 'All (95 Teacher Commands)', icon: 'Sparkles', count: 95 },
  { id: 'planning', labelAr: 'التخطيط السنوي والوحدات', labelEn: 'Curriculum & Unit Planning', icon: 'Calendar', count: 12 },
  { id: 'daily_prep', labelAr: 'التحضير اليومي للحصص', labelEn: 'Daily Lesson Prep', icon: 'FileText', count: 12 },
  { id: 'assessment', labelAr: 'التقييم والتشخيص', labelEn: 'Assessment & Diagnostics', icon: 'CheckSquare', count: 11 },
  { id: 'worksheets', labelAr: 'التمارين والكرّاسات', labelEn: 'Worksheets & Workbooks', icon: 'FileSpreadsheet', count: 12 },
  { id: 'visual_activities', labelAr: 'الجرائد والأنشطة المرئية', labelEn: 'Newspapers & Visuals', icon: 'Newspaper', count: 9 },
  { id: 'differentiation', labelAr: 'التفريق والدعم العلاجي', labelEn: 'Differentiation & Support', icon: 'Heart', count: 8 },
  { id: 'classroom_mgmt', labelAr: 'إدارة القسم والتواصل', labelEn: 'Classroom & Parents', icon: 'Users', count: 8 },
  { id: 'languages', labelAr: 'الفرنسية واللغات', labelEn: 'French & Languages', icon: 'Globe', count: 5 },
  { id: 'stem', labelAr: 'العلوم والرياضيات', labelEn: 'STEM: Math & Science', icon: 'Calculator', count: 5 },
  { id: 'documentation', labelAr: 'ملفات المعلم والتوثيق', labelEn: 'Teacher Dossiers', icon: 'Briefcase', count: 7 },
  { id: 'reports', labelAr: 'التقارير والمراجعة', labelEn: 'Reports & Audits', icon: 'BarChart2', count: 6 },
] as const;

export const EDU_TEACHER_STARTER_SHORTCUTS = [
  { labelAr: 'خطة الوحدة التعلمية', labelEn: 'Unit Plan', code: '/unit plan', id: 'edu-tch-001' },
  { labelAr: 'تحضير الدرس اليومي', labelEn: 'Daily Lesson', code: '/daily lesson', id: 'edu-tch-013' },
  { labelAr: 'جذاذة درس تفصيلية', labelEn: 'Lesson Card', code: '/lesson card', id: 'edu-tch-014' },
  { labelAr: 'رائز تشخيصي قبلي', labelEn: 'Diagnostic Test', code: '/diagnostic test', id: 'edu-tch-025' },
  { labelAr: 'شبكة ومعايير تقييم (Rubric)', labelEn: 'Assessment Rubric', code: '/assessment rubric', id: 'edu-tch-028' },
  { labelAr: 'ورقة عمل متمايزة (3 مستويات)', labelEn: 'Differentiated Worksheet', code: '/differentiated worksheet', id: 'edu-tch-034' },
  { labelAr: 'جريدة الدرس A4', labelEn: 'Lesson Newspaper', code: '/lesson newspaper', id: 'edu-tch-048' },
  { labelAr: 'خطة دعم واستدراك', labelEn: 'Support Lesson', code: '/support lesson', id: 'edu-tch-057' },
  { labelAr: 'رسالة لأولياء الأمور', labelEn: 'Parent Message', code: '/parent message', id: 'edu-tch-067' },
  { labelAr: 'ورقة تمارين فرنسية', labelEn: 'French Worksheet', code: '/french worksheet', id: 'edu-tch-041' },
  { labelAr: 'مسائل رياضيات واقعية', labelEn: 'Math Problem Set', code: '/math problem set', id: 'edu-tch-078' },
  { labelAr: 'ملف زيارة المفتش', labelEn: 'Visit Prep', code: '/visit prep', id: 'edu-tch-084' },
  { labelAr: 'تقرير الأداء الإحصائي', labelEn: 'Performance Report', code: '/class performance report', id: 'edu-tch-090' },
] as const;

export const EDU_STAGES = [
  { id: 'primary', labelKey: 'stagePrimary' },
  { id: 'secondary', labelKey: 'stageSecondary' },
  { id: 'university', labelKey: 'stageUniversity' }
] as const;

export const EDU_SUBJECTS = [
  { id: 'arabic', labelKey: 'subjArabic' },
  { id: 'english', labelKey: 'subjEnglish' },
  { id: 'math', labelKey: 'subjMath' },
  { id: 'physics', labelKey: 'subjPhysics' },
  { id: 'chemistry', labelKey: 'subjChemistry' },
  { id: 'biology', labelKey: 'subjBiology' },
  { id: 'history', labelKey: 'subjHistory' },
  { id: 'geography', labelKey: 'subjGeography' },
  { id: 'literature', labelKey: 'subjLiterature' },
  { id: 'research', labelKey: 'subjResearch' },
  { id: 'statistics', labelKey: 'subjStatistics' },
  { id: 'study_skills', labelKey: 'subjStudySkills' }
] as const;

export const TASK_TYPES = [
  { id: 'explain', labelKey: 'taskExplain' },
  { id: 'practice', labelKey: 'taskPractice' },
  { id: 'quiz', labelKey: 'taskQuiz' },
  { id: 'review', labelKey: 'taskReview' },
  { id: 'solve', labelKey: 'taskSolve' },
  { id: 'research', labelKey: 'taskResearch' },
  { id: 'write', labelKey: 'taskWrite' },
  { id: 'present', labelKey: 'taskPresent' },
  { id: 'project', labelKey: 'taskProject' }
] as const;
