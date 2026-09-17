export const PROMPT_GROUPS = [
  { id: 'content', labelKey: 'groupContent', color: 'bg-teal-500/10 text-teal-500', icon: 'PenTool' },
  { id: 'edu', labelKey: 'groupEdu', color: 'bg-blue-500/10 text-blue-500', icon: 'GraduationCap' },
  { id: 'design', labelKey: 'groupDesign', color: 'bg-purple-500/10 text-purple-500', icon: 'Palette' },
  { id: 'ads', labelKey: 'groupAds', color: 'bg-amber-500/10 text-amber-500', icon: 'Megaphone' },
  { id: 'dev', labelKey: 'groupDev', color: 'bg-cyan-500/10 text-cyan-500', icon: 'Code2' },
  { id: 'cv', labelKey: 'groupCv', color: 'bg-emerald-500/10 text-emerald-500', icon: 'FileText' },
  { id: 'video', labelKey: 'groupVideo', color: 'bg-red-500/10 text-red-500', icon: 'Video' }
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
