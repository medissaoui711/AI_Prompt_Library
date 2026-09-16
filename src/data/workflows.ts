import { Workflow } from '../types/workflow';

export const PREBUILT_WORKFLOWS: Workflow[] = [
  {
    id: 'cv-career-leap',
    titleAr: 'مسار اقتناص وظيفة الأحلام والنجاح بالمقابلة',
    titleEn: 'Dream Job Application & Interview Mastery',
    descriptionAr: 'مسار متكامل من 4 مراحل يبدأ بمراجعة السيرة الذاتية وتحسينها لأنظمة ATS، مروراً بصياغة خطاب تقديم مخصص، وتدريب احترافي على أسئلة المقابلات بتقنية STAR.',
    descriptionEn: 'End-to-end 4-stage pipeline: audit and ATS-optimize resume, generate tailored cover letter, and master behavioral interview answers with STAR technique.',
    category: 'cv',
    icon: 'Briefcase',
    estimatedMinutes: 25,
    difficulty: 'intermediate',
    badgeAr: 'الأكثر طلباً',
    badgeEn: 'Most Popular',
    tags: ['cv', 'resume', 'ats', 'interview', 'career', 'star'],
    outputSummaryAr: 'سيرة ذاتية متوافقة مع ATS + خطاب تقديم مقنع + بنك إجابات أسئلة المقابلة جاهزة.',
    outputSummaryEn: 'ATS-compliant resume + tailored cover letter + curated STAR interview answer bank.',
    steps: [
      {
        id: 'step-cv-1',
        stepNumber: 1,
        promptId: 'cv-resume-001',
        titleAr: 'تحليل ومراجعة السيرة الذاتية',
        titleEn: 'Resume Audit & Gap Analysis',
        descriptionAr: 'تقييم شامل للنقاط القوية والضعف وصياغة الإنجازات القابلة للقياس.',
        descriptionEn: 'Comprehensive evaluation of strengths, weaknesses, and measurable metrics.',
        defaultInputs: {
          cv_content: 'مهندس برمجيات بخبرة 4 سنوات في تطوير تطبيقات الويب وإدارة قواعد البيانات.',
          role: 'Senior Frontend Engineer',
          experience: 'mid',
          language: 'ar',
          tone: 'professional'
        },
        tipsAr: ['احرص على ذكر أرقام ونسب مئوية لإنجازاتك السابقة', 'حدد المسمى الوظيفي المستهدف بدقة'],
        tipsEn: ['Include measurable achievements and percentages', 'Target specific job title']
      },
      {
        id: 'step-cv-2',
        stepNumber: 2,
        promptId: 'cv-resume-002',
        titleAr: 'تحسين الكلمات المفتاحية لـ ATS',
        titleEn: 'ATS Keyword & Format Optimization',
        descriptionAr: 'إعادة صياغة السيرة لتجاوز فلاتر التوظيف الآلية بنسبة تطابق تتجاوز 90%.',
        descriptionEn: 'Format & keyword overhaul to pass Automated Tracking Systems seamlessly.',
        defaultInputs: {
          resume_text: 'مهندس برمجيات React و TypeScript وتطوير REST APIs.',
          role: 'Senior Frontend Engineer',
          industry: 'tech',
          focus: 'keywords',
          language: 'ar',
          tone: 'confident'
        },
        tipsAr: ['استخدم مصطلحات التوصيف الوظيفي المستهدف', 'ركز على المهارات الصلبة والتقنيات الحديثة'],
        tipsEn: ['Use keywords directly from target job description', 'Highlight hard technical skills']
      },
      {
        id: 'step-cv-3',
        stepNumber: 3,
        promptId: 'cv-cover-001',
        titleAr: 'صياغة خطاب تقديم وظيفي مخصص',
        titleEn: 'Tailored Job Cover Letter',
        descriptionAr: 'خطاب مقنع يعكس شغفك وقيمتك المضافة للشركة المستهدفة في صفحة واحدة.',
        descriptionEn: 'Compelling one-page cover letter demonstrating your unique value proposition.',
        defaultInputs: {
          job_application: 'التقديم على وظيفة مهندس واجهات أول لدى شركة تقنية رائدة.',
          role: 'Senior Frontend Engineer',
          language: 'ar',
          tone: 'confident'
        },
        tipsAr: ['اذكر سبب اختيارك لهذه الشركة بالتحديد', 'اربط خبرتك بحل تحديات الشركة الحالية'],
        tipsEn: ['Explain why you chose this specific company', 'Connect your experience to solving their challenges']
      },
      {
        id: 'step-cv-4',
        stepNumber: 4,
        promptId: 'cv-interview-002',
        titleAr: 'إجابات المقابلة بتقنية STAR',
        titleEn: 'Behavioral STAR Interview Prep',
        descriptionAr: 'صياغة إجابات احترافية للمواقف القيادية والتقنية الصعبة بأسلوب STAR المقنع.',
        descriptionEn: 'Craft structured Situation-Task-Action-Result answers for tricky behavioral questions.',
        defaultInputs: {
          situation_story: 'موقف إدارة ضغط موعد تسليم مشروع مع تقليل الأخطاء بنسبة 40%.',
          format: 'star-framework',
          tone: 'structured',
          language: 'ar'
        },
        tipsAr: ['ركّز 70% من الإجابة على الـ Action والـ Result', 'استخدم صياغة واثقة ومباشرة'],
        tipsEn: ['Dedicate 70% of answer to Action & Result', 'Speak with confidence and clarity']
      }
    ]
  },
  {
    id: 'video-youtube-pipeline',
    titleAr: 'مسار إنتاج فيديو يوتيوب متكامل من الفكرة للنشر',
    titleEn: 'Full YouTube Production & Launch Pipeline',
    descriptionAr: 'سلسلة متقنة لإنتاج فيديو يوتيوب ناجح: استخراج زاوية الطرح والـ Hook، كتابة السيناريو مع الـ B-Roll، وصياغة عناوين وصور مصغرة عالية النقر (CTR).',
    descriptionEn: 'A high-impact 4-stage pipeline for creators: ideation & hook angle, script with B-roll visual cues, high-CTR titles and SEO description.',
    category: 'video',
    icon: 'Video',
    estimatedMinutes: 20,
    difficulty: 'beginner',
    badgeAr: 'لصناع المحتوى',
    badgeEn: 'Creator Ready',
    tags: ['video', 'youtube', 'script', 'broll', 'ctr', 'seo'],
    outputSummaryAr: 'سكريبت يوتيوب كامل + قائمة لقطات B-Roll + عناوين وصورة مصغرة وSEO جاهز للنشر.',
    outputSummaryEn: 'Complete script + B-roll shotlist + high CTR title options & SEO metadata.',
    steps: [
      {
        id: 'step-yt-1',
        stepNumber: 1,
        promptId: 'video-youtube-002',
        titleAr: 'مخطط وهيكل الفيديو وزاوية الجذب',
        titleEn: 'Hook Angle & Video Outline',
        descriptionAr: 'بناء هيكل مشوق يحافظ على المشاهد منذ الثواني الأولى.',
        descriptionEn: 'Draft an addictive structure maintaining viewer retention from second zero.',
        defaultInputs: {
          title_idea: 'كيف تبني عادة يومية تستمر مدى الحياة دون فقدان الحماس؟',
          ratio: '16:9',
          tone: 'engaging',
          language: 'ar'
        },
        tipsAr: ['ركز على مشكلة حقيقية يواجهها المشاهد', 'اجعل الوعد واضحاً في المقدمة'],
        tipsEn: ['Address a real viewer pain point', 'Deliver a clear upfront promise']
      },
      {
        id: 'step-yt-2',
        stepNumber: 2,
        promptId: 'video-youtube-001',
        titleAr: 'كتابة السيناريو الكامل مع التوجيهات',
        titleEn: 'Full Scriptwriting with Visual Cues',
        descriptionAr: 'سيناريو تفصيلي مع مؤشرات النبرة، لقطات الـ B-Roll، وفواصل الانتقال.',
        descriptionEn: 'Word-for-word script with voice modulation and transition markers.',
        defaultInputs: {
          topic: 'علم بناء العادات اليومية استناداً لكتاب العادات الذرية وعلم النفس السلوكي.',
          duration: '10min',
          sections: '4',
          style: 'storytelling',
          tone: 'engaging',
          language: 'ar'
        },
        tipsAr: ['غيّر زاوية الكاميرا أو المشهد كل 15-20 ثانية لمنع الملل'],
        tipsEn: ['Change camera pacing or visuals every 15-20s']
      },
      {
        id: 'step-yt-3',
        stepNumber: 3,
        promptId: 'video-post-001',
        titleAr: 'قائمة لقطات وتأثيرات المونتاج (B-Roll)',
        titleEn: 'B-Roll & Edit Visual Shotlist',
        descriptionAr: 'توجيهات مونتاج دقيقة وتأثيرات بصرية وصوتية تدعم الرسالة.',
        descriptionEn: 'Precise visual shotlist, sound effects and animations timing.',
        defaultInputs: {
          script_segment: 'شرح مفهوم تراكم العادات اليومية وتأثيرها على المدى الطويل.',
          duration: '10min',
          style: 'cinematic',
          tone: 'modern',
          language: 'ar'
        },
        tipsAr: ['نسّق المؤثرات الصوتية SFX مع حركة النصوص'],
        tipsEn: ['Match sound effects with text animations']
      },
      {
        id: 'step-yt-4',
        stepNumber: 4,
        promptId: 'video-youtube-003',
        titleAr: 'عناوين عالية النقر (CTR) وبيانات الـ SEO',
        titleEn: 'High CTR Titles, Thumbnail Concept & SEO',
        descriptionAr: 'توليد 10 عناوين مغناطيسية، فكرة الصورة المصغرة، ووصف الفيديو مع الكلمات المفتاحية.',
        descriptionEn: 'Magnetic title options, thumbnail visual hierarchy, and SEO description tags.',
        defaultInputs: {
          video_summary: 'فيديو عن بناء العادات اليومية بطريقة علمية وبسيطة تضمن الاستمرارية.',
          target: 'youtube-search',
          language: 'ar',
          tone: 'magnetic'
        },
        tipsAr: ['اختر عنواناً يثير الفضول دون مبالغة مضللة', 'الصورة المصغرة يجب ألا تكرر نص العنوان بل تكمله'],
        tipsEn: ['Spark curiosity without misleading clickbait', 'Thumbnail should complement, not repeat title']
      }
    ]
  },
  {
    id: 'design-brand-launch',
    titleAr: 'مسار بناء وتصميم الهوية البصرية للعلامة التجارية',
    titleEn: 'Complete Brand Identity & Visual Design Sprint',
    descriptionAr: 'دليل إرشادي من 3 خطوات لاستخراج جوهر العلامة التجارية، ابتكار مفاهيم الشعار، وتحديد الألوان والخطوط مع معايير الاستخدام.',
    descriptionEn: '3-stage identity sprint: core brand strategy, creative logo concept generation, and cohesive color palette with design guidelines.',
    category: 'design',
    icon: 'Palette',
    estimatedMinutes: 20,
    difficulty: 'intermediate',
    badgeAr: 'للمصممين ورواد الأعمال',
    badgeEn: 'Designers & Startups',
    tags: ['design', 'branding', 'logo', 'palette', 'identity', 'ui'],
    outputSummaryAr: 'استراتيجية العلامة + 5 مفاهيم شعار مبتكرة + لوحة ألوان وتوجيهات الخطوط.',
    outputSummaryEn: 'Brand strategy brief + 5 innovative logo concepts + cohesive palette & typography rulebook.',
    steps: [
      {
        id: 'step-brand-1',
        stepNumber: 1,
        promptId: 'design-branding-001',
        titleAr: 'استراتيجية وجوهر العلامة التجارية',
        titleEn: 'Brand Identity & Strategy Brief',
        descriptionAr: 'تحديد الرؤية، الفئة المستهدفة، الشخصية البصرية، والميزة التنافسية.',
        descriptionEn: 'Define vision, target audience persona, brand voice, and competitive edge.',
        defaultInputs: {
          business: 'تطبيق ذكي لإدارة الوقت والمهام موجه لرواد الأعمال والمستقلين.',
          style: 'modern',
          industry: 'tech',
          target: 'b2b',
          tone: 'confident',
          language: 'ar'
        },
        tipsAr: ['حدد 3 كلمات تصف شعور العميل عند التفاعل مع العلامة', 'ركز على بساطة الرسالة'],
        tipsEn: ['Select 3 emotions your brand evokes', 'Keep core message ultra-simple']
      },
      {
        id: 'step-brand-2',
        stepNumber: 2,
        promptId: 'design-branding-002',
        titleAr: 'توليد أفكار ومفاهيم الشعار (Logo Concepts)',
        titleEn: 'Logo Conceptualization & Geometry',
        descriptionAr: 'استكشاف مفاهيم بصرية للشعار مع دلالات الرموز والنسب الهندسية.',
        descriptionEn: 'Explore visual logo archetypes, geometric ratios, and symbolic depth.',
        defaultInputs: {
          brand: 'تطبيق وقتك (Waqtak) - منصة تنظيم المهام والإنتاجية الذكية.',
          style: 'minimalist',
          colors: 'modern-teal',
          ratio: '1:1',
          tone: 'creative',
          language: 'ar'
        },
        tipsAr: ['تأكد أن الشعار واضح ومقروء بحجم صغير مثل أيقونة التطبيق'],
        tipsEn: ['Ensure icon scalability at 16px favicon size']
      },
      {
        id: 'step-brand-3',
        stepNumber: 3,
        promptId: 'design-branding-005',
        titleAr: 'نظام الألوان والخطوط ودليل الاستخدام',
        titleEn: 'Color Palette & Brand Styleguide',
        descriptionAr: 'تحديد درجات الألوان الأولية والثانوية مع نسب التباين ومعايير الخطوط.',
        descriptionEn: 'Finalize primary/secondary color hex codes, accessibility ratios, and font hierarchy.',
        defaultInputs: {
          palette_theme: 'هوية رقمية حديثة تبعث على التركيز والإنتاجية العالية.',
          style: 'tech-clean',
          tone: 'balanced',
          language: 'ar'
        },
        tipsAr: ['تأكد من توافق تباين الألوان مع معايير WCAG للوصول السلس'],
        tipsEn: ['Verify WCAG AA 4.5:1 contrast ratios for legibility']
      }
    ]
  },
  {
    id: 'edu-exam-mastery',
    titleAr: 'مسار الاستعداد للاختبارات والمراجعة الفعالة',
    titleEn: 'Comprehensive Exam Prep & Study Mastery',
    descriptionAr: 'خطة دراسية ذكية من 4 مراحل: تلخيص المحاضرات والمفاهيم الصعبة، توليد بنك أسئلة وتدريب، محاكاة اختبار تجريبي، وخطة تصحيح النقاط الضعيفة.',
    descriptionEn: 'Smart 4-step study pipeline: summarize complex topics, generate question banks, run timed mock exam, and execute target gap review.',
    category: 'edu',
    icon: 'GraduationCap',
    estimatedMinutes: 25,
    difficulty: 'beginner',
    badgeAr: 'للطلاب والمعلمين',
    badgeEn: 'Academic Essential',
    tags: ['edu', 'exam', 'quiz', 'summary', 'study', 'revision'],
    outputSummaryAr: 'ملخص مركّز للدرس + بنك أسئلة تدريبية + اختبار تجريبي مع نموذج الإجابة.',
    outputSummaryEn: 'Concise concept summary + practice problem set + full mock exam with solutions.',
    steps: [
      {
        id: 'step-exam-1',
        stepNumber: 1,
        promptId: 'edu-university-001',
        titleAr: 'تلخيص واستخلاص المفاهيم الأساسية',
        titleEn: 'Lecture & Topic Core Summary',
        descriptionAr: 'استخراج الأفكار الرئيسية، القوانين، والتعريفات بصيغة بصرية منظمة.',
        descriptionEn: 'Extract core principles, equations, and definitions in a structured format.',
        defaultInputs: {
          notes: 'مفاهيم حساب التفاضل والتكامل، النهايات، وقواعد الاشتقاق الأساسية وتطبيقاتها.',
          level: 'secondary',
          format: 'summary',
          tone: 'academic',
          language: 'ar'
        },
        tipsAr: ['قسّم الموضوعات المعقدة إلى نقاط قصيرة مترابطة'],
        tipsEn: ['Chunk complicated theorems into connected bullet points']
      },
      {
        id: 'step-exam-2',
        stepNumber: 2,
        promptId: 'edu-secondary-001',
        titleAr: 'حل وتفكيك المسائل النموذجية خطوة بخطوة',
        titleEn: 'Step-by-Step Model Problem Solving',
        descriptionAr: 'شرح طريقة حل التمارين المتكررة مع توضيح سبب كل خطوة وتجنب الأخطاء الشائعة.',
        descriptionEn: 'Deconstruct standard exam questions with rationale for every intermediate step.',
        defaultInputs: {
          problem: 'تطبيقات على إيجاد القيم العظمى والصغرى المحلية باستخدام المشتقة الأولى والثانية.',
          level: 'secondary',
          steps: 'yes',
          tone: 'structured',
          language: 'ar'
        },
        tipsAr: ['تدرب على كتابة خطوات الحل بيدك وليس القراءة فقط'],
        tipsEn: ['Actively write out steps instead of passive reading']
      },
      {
        id: 'step-exam-3',
        stepNumber: 3,
        promptId: 'edu-primary-005',
        titleAr: 'توليد اختبار تجريبي مع سلم التصحيح',
        titleEn: 'Mock Exam & Answer Key Generation',
        descriptionAr: 'امتحان تجريبي يحاكي أسئلة الاختبار النهائي بمستويات صعوبة متدرجة.',
        descriptionEn: 'Full mock exam matching actual exam format with difficulty weighting.',
        defaultInputs: {
          quiz_subject: 'اختبار شامل في وحدة التفاضل والتكامل (اختيار من متعدد + مسائل مقالية).',
          level: 'secondary',
          tone: 'evaluative',
          language: 'ar'
        },
        tipsAr: ['اضبط مؤقتاً لمحاكاة بيئة الامتحان الحقيقي بدقة'],
        tipsEn: ['Set a strict countdown timer to simulate real exam pressure']
      }
    ]
  },
  {
    id: 'video-viral-shorts',
    titleAr: 'مسار إنتاج ريلز وشورتس وتيك توك سريعة الانتشار',
    titleEn: 'Viral Shorts, Reels & TikTok Production Engine',
    descriptionAr: 'مسار سريع لصناعة مقاطع فيديو قصيرة فيروسية: خطاف أول 3 ثوانٍ، نص سريع الإيقاع، توجيهات النصوص المتحركة، وتوقيت الإطلاق.',
    descriptionEn: 'Rapid short-form content factory: 3-second hypnotic hooks, fast-paced retention script, kinetic typography cues, and hashtag strategy.',
    category: 'video',
    icon: 'Sparkles',
    estimatedMinutes: 15,
    difficulty: 'beginner',
    badgeAr: 'سريع وفيروسي',
    badgeEn: 'Fast & Viral',
    tags: ['video', 'shorts', 'reels', 'tiktok', 'viral', 'hook'],
    outputSummaryAr: '5 أفكار خطاف قوية + سيناريو 45 ثانية + تعليمات الكابشن والموسيقى.',
    outputSummaryEn: '5 viral hook variations + 45s high retention script + captions and sound sync notes.',
    steps: [
      {
        id: 'step-shorts-1',
        stepNumber: 1,
        promptId: 'video-shorts-001',
        titleAr: 'ابتكار خطاف الجذب في أول 3 ثواني (Hook)',
        titleEn: '3-Second Retention Hook Generation',
        descriptionAr: '5 صيغ مختلفة لجذب انتباه المشاهد فوراً وإيقاف التمرير (Stop the scroll).',
        descriptionEn: '5 psychological hook angles engineered to stop mindless scrolling immediately.',
        defaultInputs: {
          concept: '3 أدوات ذكاء اصطناعي سرية ستوفر عليك 10 ساعات عمل أسبوعياً.',
          ratio: '9:16',
          tone: 'punchy',
          language: 'ar'
        },
        tipsAr: ['ابدأ بحركة بصرية مفاجئة أو سؤال صادم غير متوقع'],
        tipsEn: ['Open with unexpected motion or provocative question']
      },
      {
        id: 'step-shorts-2',
        stepNumber: 2,
        promptId: 'video-shorts-002',
        titleAr: 'كتابة سيناريو الشورتس (30-60 ثانية)',
        titleEn: 'High-Pacing Short-Form Script',
        descriptionAr: 'نص مكثف خالٍ من الحشو مع دعوة واضحة لاتخاذ إجراء (CTA) في النهاية.',
        descriptionEn: 'Zero-fluff script formatted for rapid pacing and high completion rate.',
        defaultInputs: {
          main_hook: 'هذه الأداة غيرت طريقة عملي للأبد ولن تصدق أنها مجانية تماماً!',
          duration: '45s',
          style: 'fast-paced',
          tone: 'energetic',
          language: 'ar'
        },
        tipsAr: ['احذف أي كلمة زائدة لا تضيف معلومة فورية'],
        tipsEn: ['Cut all filler words and pauses strictly']
      }
    ]
  },
  {
    id: 'design-uiux-sprint',
    titleAr: 'مسار تصميم تجربة وواجهة المستخدم (UI/UX Sprint)',
    titleEn: 'Full UI/UX Product Design Sprint',
    descriptionAr: 'مسار مهني لتصميم المنتجات الرقمية: استكشاف سيناريوهات المستخدم، تخطيط الهيكل الشبكي (Wireframes)، وتصميم نظام الواجهات المتناسق.',
    descriptionEn: 'Professional UI/UX framework: user journeys, responsive wireframing specifications, and component design system tokens.',
    category: 'design',
    icon: 'LayoutDashboard',
    estimatedMinutes: 25,
    difficulty: 'advanced',
    badgeAr: 'لمصممي المنتجات',
    badgeEn: 'Product Teams',
    tags: ['design', 'ui', 'ux', 'wireframe', 'figma', 'prototype'],
    outputSummaryAr: 'تدفق المستخدم + مواصفات الهيكل السلكي + رموز وتصاميم الواجهة.',
    outputSummaryEn: 'User flow specification + low-fi wireframe layout + responsive design tokens.',
    steps: [
      {
        id: 'step-ui-1',
        stepNumber: 1,
        promptId: 'design-ui-001',
        titleAr: 'بناء تدفق المستخدم والهيكل السلكي (Wireframe)',
        titleEn: 'User Flow Architecture & Wireframing',
        descriptionAr: 'تخطيط منطقي لشاشات التطبيق وترتيب العناصر حسب الأولوية البصرية.',
        descriptionEn: 'Architectural screen layouts and visual hierarchy mapping for key user journeys.',
        defaultInputs: {
          feature_spec: 'شاشة الدفع وإتمام الطلب لتطبيق متجر إلكتروني للملابس.',
          style: 'clean-modern',
          platform: 'mobile',
          tone: 'structured',
          language: 'ar'
        },
        tipsAr: ['قلل عدد النقرات المطلوبة للوصول إلى الهدف الأساسي'],
        tipsEn: ['Minimize taps required to complete the primary conversion goal']
      },
      {
        id: 'step-ui-2',
        stepNumber: 2,
        promptId: 'design-ui-002',
        titleAr: 'تصميم مكونات الواجهة وتجربة التفاعل',
        titleEn: 'UI Component States & Micro-interactions',
        descriptionAr: 'تحديد حالات الأزرار، حقول الإدخال، التنبيهات، وحركات الانتقال الدقيقة.',
        descriptionEn: 'Define button states, input validation UX, and subtle feedback micro-interactions.',
        defaultInputs: {
          component_system: 'مكون بطاقة المنتج التفاعلية مع زر الشراء السريع والمفضلة.',
          theme: 'light-minimal',
          tone: 'detailed',
          language: 'ar'
        },
        tipsAr: ['احرص على وضوح حالات الخطأ والنجاح والتحميل'],
        tipsEn: ['Design explicit empty, loading, error, and success states']
      }
    ]
  }
];
