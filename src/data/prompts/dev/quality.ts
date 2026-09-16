import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const DEV_QUALITY_PROMPTS: CommandPrompt[] = [
  {
    id: 'dev-qual-055',
    code: '/code review',
    titleAr: 'مراجعة شاملة لجودة الكود البرمجي',
    titleEn: 'Comprehensive Peer Code Review',
    descriptionAr: 'مراجعة ملف أو جزء من الكود البرمجي بحثاً عن الأخطاء المنطقية، الوضوح، الأداء، وقابلية الصيانة.',
    descriptionEn: 'Deep code review inspecting logic bugs, readability, edge cases, type safety, and architectural alignment.',
    group: 'dev',
    devCategory: 'quality',
    outputType: 'analysis',
    outputBadges: ['مراجعة'],
    params: [
      { key: 'code', flag: 'code', isPositional: true, type: 'string', required: true, labelAr: 'الكود البرمجي', labelEn: 'Code Snippet', hintAr: 'الصق الكود المطلوب مراجعته', hintEn: 'Paste code snippet' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'typescript', labelAr: 'لغة البرمجة', labelEn: 'Language', hintAr: 'typescript, python, go, java', hintEn: 'typescript, python' },
      { key: 'focus', flag: 'focus', isPositional: false, type: 'string', required: false, defaultValue: 'quality,readability,bugs', labelAr: 'محاور التركيز', labelEn: 'Focus Areas', hintAr: 'quality,readability,bugs,performance', hintEn: 'quality,readability,bugs' }
    ],
    example: '/code review "[الصق الكود]" --language=typescript --focus=quality,readability,bugs',
    qualityRules: [
      'تقديم الملاحظات بأسلوب بناء مرتب حسب درجة التأثير (حرج، متوسط، تحسين طفيف)',
      'تقديم أمثلة كود مصححة ومقارنة (Before / After)',
      'فحص سلامة الأنواع والتعامل مع الحالات الصفرية (Null/Undefined Safety)'
    ],
    keywords: ['code review', 'مراجعة كود', 'peer review', 'code inspection', 'typescript review'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 97,
    isFavorite: true
  },
  {
    id: 'dev-qual-056',
    code: '/code explain',
    titleAr: 'شرح وتبسيط الكود البرمجي المعقد',
    titleEn: 'Code Logic & Functionality Explainer',
    descriptionAr: 'شرح كود معقد سطرًا بسطر وتوضيح الخوارزميات وتدفق البيانات بأسلوب واضح ومفهوم.',
    descriptionEn: 'Break down complex algorithms and unfamiliar codebases step-by-step with clear mental models.',
    group: 'dev',
    devCategory: 'quality',
    outputType: 'text',
    outputBadges: ['كود', 'تعليم'],
    params: [
      { key: 'code', flag: 'code', isPositional: true, type: 'string', required: true, labelAr: 'الكود المطلوب شرحه', labelEn: 'Code Snippet', hintAr: 'الصق الكود', hintEn: 'Paste code' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'python', labelAr: 'لغة الكود', labelEn: 'Language', hintAr: 'python, typescript, rust', hintEn: 'python, typescript' },
      { key: 'level', flag: 'level', isPositional: false, type: 'enum', required: false, defaultValue: 'intermediate', labelAr: 'المستوى', labelEn: 'Audience Level', hintAr: 'beginner, intermediate, advanced', hintEn: 'Level', enumValues: [
        { value: 'beginner', labelAr: 'مبتدئ وبسيط', labelEn: 'Beginner / High Level' },
        { value: 'intermediate', labelAr: 'متوسط ومتوازن', labelEn: 'Intermediate Developer' },
        { value: 'advanced', labelAr: 'متقدم وتفصيلي في الذاكرة والأداء', labelEn: 'Deep Dive / Low Level' }
      ]}
    ],
    example: '/code explain "[الصق الكود]" --language=python --level=beginner',
    qualityRules: [
      'شرح الغرض العام أولاً ثم تفكيك الدوال والحلقات التكرارية',
      'توضيح التعقيد الزمني والمكاني (Time & Space Complexity O(n))',
      'ذكر أي آثار جانبية (Side Effects) أو افتراضات ضمنية'
    ],
    keywords: ['code explain', 'شرح كود', 'explain logic', 'code walkthrough', 'algorithm explanation'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 88,
    isFavorite: false
  },
  {
    id: 'dev-qual-057',
    code: '/refactor code',
    titleAr: 'إعادة هيكلة وتحسين الكود (Refactoring)',
    titleEn: 'Safe Code Refactoring & Modernization',
    descriptionAr: 'إعادة كتابة وتنظيم الكود لجعله أكثر وضوحاً وسهولة في الصيانة مع الحفاظ التام على نفس السلوك الخارجي.',
    descriptionEn: 'Refactor legacy or bloated code into clean, modular, and maintainable patterns without altering runtime behavior.',
    group: 'dev',
    devCategory: 'quality',
    outputType: 'text',
    outputBadges: ['كود', 'مراجعة'],
    params: [
      { key: 'code', flag: 'code', isPositional: true, type: 'string', required: true, labelAr: 'الكود البرمجي', labelEn: 'Source Code', hintAr: 'الصق الكود المراد إعادة هيكلته', hintEn: 'Paste code to refactor' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'typescript', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'typescript, python, java', hintEn: 'typescript, python' },
      { key: 'goal', flag: 'goal', isPositional: false, type: 'enum', required: false, defaultValue: 'readability', labelAr: 'هدف إعادة الهيكلة', labelEn: 'Refactoring Goal', hintAr: 'readability, modularity, performance', hintEn: 'Goal', enumValues: [
        { value: 'readability', labelAr: 'تحسين المقروئية والوضوح', labelEn: 'Readability & Simplicity' },
        { value: 'modularity', labelAr: 'تفكيك الدوال الكبيرة (Modular Design)', labelEn: 'Modularity & Single Responsibility' },
        { value: 'performance', labelAr: 'تسريع الأداء وتقليل استهلاك الذاكرة', labelEn: 'Performance Optimization' }
      ]}
    ],
    example: '/refactor code "[الصق الكود]" --language=typescript --goal=readability',
    qualityRules: [
      'تطبيق مبدأ المسؤولية الواحدة (Single Responsibility Principle)',
      'استخراج الدوال المساعدة وتقليل التداخل العميق (Nested conditionals)',
      'توفير الكود المنقح كاملاً وجاهزاً للنسخ'
    ],
    keywords: ['refactor code', 'إعادة هيكلة', 'code refactor', 'clean refactoring', 'modular code'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 94,
    isFavorite: true
  },
  {
    id: 'dev-qual-058',
    code: '/clean code',
    titleAr: 'تطبيق معايير الكود النظيف (Clean Code Principles)',
    titleEn: 'Clean Code Standards & Idiomatic Refinement',
    descriptionAr: 'تحسين تسمية المتغيرات والدوال، تجنب التكرار (DRY)، وتطبيق مبادئ SOLID للكتابة الاحترافية.',
    descriptionEn: 'Apply Uncle Bob Clean Code principles: meaningful names, small functions, DRY, and SOLID compliance.',
    group: 'dev',
    devCategory: 'quality',
    outputType: 'text',
    outputBadges: ['مراجعة', 'كود'],
    params: [
      { key: 'code', flag: 'code', isPositional: true, type: 'string', required: true, labelAr: 'الملف أو الكود', labelEn: 'Source File', hintAr: 'الصق الملف أو الجزء المطلوب تحسينه', hintEn: 'Paste code file' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'javascript', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'javascript, typescript, python', hintEn: 'javascript, typescript' },
      { key: 'focus', flag: 'focus', isPositional: false, type: 'string', required: false, defaultValue: 'naming,functions,duplication', labelAr: 'محاور التدقيق', labelEn: 'Focus', hintAr: 'naming,functions,duplication,solid', hintEn: 'naming,functions,duplication' }
    ],
    example: '/clean code "[الصق الملف]" --language=javascript --focus=naming,functions,duplication',
    qualityRules: [
      'استبدال الأسماء الغامضة بأسماء ذات دلالة واضحة ومباشرة',
      'تقليص حجم الدوال بحيث تؤدي مهمة واحدة فقط وبشكل ممتاز',
      'التخلص من الكود المكرر والتعليقات الزائدة غير الضرورية'
    ],
    keywords: ['clean code', 'solid principles', 'كود نظيف', 'dry principle', 'code standards'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 91,
    isFavorite: false
  },
  {
    id: 'dev-qual-059',
    code: '/code smell',
    titleAr: 'كشف روائح الكود والعيوب التصميمية (Code Smells)',
    titleEn: 'Code Smell Detection & Anti-Pattern Audit',
    descriptionAr: 'اكتشاف التكرار الخفي، الكائنات المتضخمة (God Objects)، والاقتران الشديد (Tight Coupling).',
    descriptionEn: 'Identify anti-patterns like God Classes, Feature Envy, Long Parameter Lists, and dead code.',
    group: 'dev',
    devCategory: 'quality',
    outputType: 'analysis',
    outputBadges: ['مراجعة'],
    params: [
      { key: 'code', flag: 'code', isPositional: true, type: 'string', required: true, labelAr: 'الكود المراد تحليله', labelEn: 'Code', hintAr: 'الصق الكود', hintEn: 'Paste code' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'java', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'java, csharp, typescript', hintEn: 'java, typescript' },
      { key: 'output', flag: 'output', isPositional: false, type: 'string', required: false, defaultValue: 'priority-list', labelAr: 'شكل المخرج', labelEn: 'Output', hintAr: 'priority-list, report', hintEn: 'priority-list' }
    ],
    example: '/code smell "[الصق الكود]" --language=java --output=priority-list',
    qualityRules: [
      'تسمية نوع الرائحة التصميمية بدقة (مثل Long Method, Large Class, Primitive Obsession)',
      'توضيح الضرر المترتب على المدى البعيد في الصيانة والتوسع',
      'تقديم الحل الأنسب لإزالة الرائحة البرمجية'
    ],
    keywords: ['code smell', 'anti patterns', 'god object', 'روائح الكود', 'technical debt'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 82,
    isFavorite: false
  },
  {
    id: 'dev-qual-060',
    code: '/performance review',
    titleAr: 'تدقيق وتحسين أداء التطبيق وسرعته (Performance)',
    titleEn: 'Performance Bottleneck & Optimization Audit',
    descriptionAr: 'مراجعة الأداء في الواجهات أو الخوادم: تقليل عمليات إعادة التصيير، حجم الحزم، وإبطاء الشبكة.',
    descriptionEn: 'Detect rendering lag, memory leaks, excessive bundle size, and expensive compute cycles.',
    group: 'dev',
    devCategory: 'quality',
    outputType: 'analysis',
    outputBadges: ['مراجعة'],
    params: [
      { key: 'code', flag: 'code', isPositional: true, type: 'string', required: true, labelAr: 'كود الصفحة أو الدالة', labelEn: 'Code/Component', hintAr: 'الصق كود الصفحة أو الدالة', hintEn: 'Paste code' },
      { key: 'framework', flag: 'framework', isPositional: false, type: 'string', required: false, defaultValue: 'react', labelAr: 'إطار العمل', labelEn: 'Framework', hintAr: 'react, nodejs, vue', hintEn: 'react, nodejs' },
      { key: 'check', flag: 'check', isPositional: false, type: 'string', required: false, defaultValue: 'rendering,bundle,network', labelAr: 'محاور الفحص', labelEn: 'Checks', hintAr: 'rendering,bundle,network,memory', hintEn: 'rendering,bundle,network' }
    ],
    example: '/performance review "[الصق كود الصفحة]" --framework=react --check=rendering,bundle,network',
    qualityRules: [
      'فحص استخدام memoization (useMemo, useCallback, React.memo) في الأماكن ذات الجدوى الحقيقية',
      'تطبيق استراتيجيات Lazy Loading والتحميل الكسول للمكونات الكبيرة',
      'تحسين استدعاءات الشبكة وتقليل حمولة الـ Payloads'
    ],
    keywords: ['performance review', 'web vitals', 'أداء الكود', 'react performance', 'bundle optimization'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 89,
    isFavorite: false
  },
  {
    id: 'dev-qual-061',
    code: '/dependency audit',
    titleAr: 'تدقيق حزم ومكتبات المشروع (Dependencies Audit)',
    titleEn: 'Package & Supply Chain Dependency Audit',
    descriptionAr: 'فحص ملفات الحزم لاكتشاف المكتبات المتقادمة، غير الضرورية، أو التي تشكل خطراً على سلسلة التوريد.',
    descriptionEn: 'Audit package.json/lockfiles for bloated, abandoned, vulnerable, and deprecated dependencies.',
    group: 'dev',
    devCategory: 'quality',
    outputType: 'analysis',
    outputBadges: ['مراجعة', 'أمن'],
    params: [
      { key: 'manifest', flag: 'manifest', isPositional: true, type: 'string', required: true, labelAr: 'ملف التبعيات (package.json / pubspec)', labelEn: 'Manifest File', hintAr: 'الصق محتوى package.json', hintEn: 'Paste package.json content' },
      { key: 'ecosystem', flag: 'ecosystem', isPositional: false, type: 'string', required: false, defaultValue: 'npm', labelAr: 'بيئة الحزم', labelEn: 'Ecosystem', hintAr: 'npm, pip, gradle, pub', hintEn: 'npm, pip, gradle' },
      { key: 'check', flag: 'check', isPositional: false, type: 'string', required: false, defaultValue: 'outdated,unused,security', labelAr: 'عناصر الفحص', labelEn: 'Checks', hintAr: 'outdated,unused,security,licenses', hintEn: 'outdated,unused,security' }
    ],
    example: '/dependency audit "[الصق package.json]" --ecosystem=npm --check=outdated,unused,security',
    qualityRules: [
      'تحديد الحزم الضخمة التي يمكن استبدالها ببدائل خفيفة أو كود أصلي (Native)',
      'التحقق من مخاطر ثغرات سلسلة التوريد (Software Supply Chain Security)',
      'تقديم أوامر ترقية آمنة مع تجنب كسر التوافقية (Breaking Changes)'
    ],
    keywords: ['dependency audit', 'npm audit', 'package review', 'supply chain security', 'outdated packages'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 86,
    isFavorite: false
  },
  {
    id: 'dev-qual-062',
    code: '/git review',
    titleAr: 'مراجعة طلبات الدمج والفروقات (PR / Git Diff Review)',
    titleEn: 'Pull Request & Git Diff Peer Review',
    descriptionAr: 'مراجعة الفروقات البرمجية في Git Diff قبل الدمج لاكتشاف الأخطاء، التغييرات غير المقصودة، وضمان الجودة.',
    descriptionEn: 'Perform thorough pull request review highlighting risks, missing tests, and architectural drift in git diffs.',
    group: 'dev',
    devCategory: 'quality',
    outputType: 'analysis',
    outputBadges: ['مراجعة'],
    params: [
      { key: 'diff', flag: 'diff', isPositional: true, type: 'string', required: true, labelAr: 'نص الـ Diff أو وصف الـ PR', labelEn: 'Git Diff / PR', hintAr: 'الصق git diff أو وصف التعديل', hintEn: 'Paste git diff or PR description' },
      { key: 'focus', flag: 'focus', isPositional: false, type: 'string', required: false, defaultValue: 'bugs,security,maintainability', labelAr: 'التركيز', labelEn: 'Focus', hintAr: 'bugs,security,maintainability', hintEn: 'bugs,security,maintainability' }
    ],
    example: '/git review "[الصق diff]" --focus=bugs,security,maintainability',
    qualityRules: [
      'التأكد من عدم تسريب أي أسرار أو ملفات مؤقتة (.env, console.log, debug flags)',
      'التحقق من تغطية التعديلات باختبارات كافية',
      'صياغة تعليقات مراجعة مهنية واضحة مع اقتراحات الحلول'
    ],
    keywords: ['git review', 'pull request review', 'pr review', 'git diff', 'code merge review'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 87,
    isFavorite: false
  },
  {
    id: 'dev-qual-063',
    code: '/architecture review',
    titleAr: 'تدقيق ومراجعة البنية الهندسية للمشروع',
    titleEn: 'System Architecture & Modularity Audit',
    descriptionAr: 'مراجعة بنية المشروع وهيكلة المجلدات، الحدود بين المكونات، وقابلية التوسع واستبدال الخدمات.',
    descriptionEn: 'Evaluate project folder taxonomy, layer separation, cyclic dependencies, and scalability readiness.',
    group: 'dev',
    devCategory: 'quality',
    outputType: 'analysis',
    outputBadges: ['مراجعة', 'تقرير'],
    params: [
      { key: 'tree', flag: 'tree', isPositional: true, type: 'string', required: true, labelAr: 'شجرة المجلدات أو بنية المشروع', labelEn: 'Project Tree', hintAr: 'الصق شجرة المجلدات للمشروع', hintEn: 'Paste directory tree' },
      { key: 'platform', flag: 'platform', isPositional: false, type: 'string', required: false, defaultValue: 'web', labelAr: 'المنصة', labelEn: 'Platform', hintAr: 'web, mobile, backend', hintEn: 'web, mobile' },
      { key: 'framework', flag: 'framework', isPositional: false, type: 'string', required: false, defaultValue: 'react', labelAr: 'إطار العمل', labelEn: 'Framework', hintAr: 'react, nestjs, flutter', hintEn: 'react, nestjs' }
    ],
    example: '/architecture review "[الصق شجرة المشروع]" --platform=web --framework=react',
    qualityRules: [
      'تقييم فصل الاهتمامات وتحديد أي تداخل غير مرغوب بين الطبقات',
      'اكتشاف التبعيات الدائرية (Circular Dependencies)',
      'تقديم مقترح هيكلة مجلدات محسنة ومثالية للنمو'
    ],
    keywords: ['architecture review', 'مراجعة معمارية', 'software architecture', 'folder structure audit'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 83,
    isFavorite: false
  },
  {
    id: 'dev-qual-064',
    code: '/legacy code audit',
    titleAr: 'تدقيق وتحديث الكود القديم (Legacy Code Modernization)',
    titleEn: 'Legacy Codebase Audit & Modernization Roadmap',
    descriptionAr: 'تحليل مشروع برمجي قديم وتحديد المخاطر، الديون التقنية، ووضع خطة ترقية تدريجية آمنة.',
    descriptionEn: 'Audit legacy codebases to quantify technical debt, deprecation risks, and formulate step-by-step modernization.',
    group: 'dev',
    devCategory: 'quality',
    outputType: 'analysis',
    outputBadges: ['مراجعة', 'تقرير'],
    params: [
      { key: 'codebase', flag: 'codebase', isPositional: true, type: 'string', required: true, labelAr: 'وصف أو كود المشروع القديم', labelEn: 'Legacy Code', hintAr: 'الصق بنية المشروع أو الكود القديم', hintEn: 'Paste codebase description or code' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'php', labelAr: 'اللغة الحالية', labelEn: 'Current Language', hintAr: 'php, python2, js-legacy', hintEn: 'php, js-legacy' },
      { key: 'output', flag: 'output', isPositional: false, type: 'string', required: false, defaultValue: 'modernization-plan', labelAr: 'المخرج', labelEn: 'Output', hintAr: 'modernization-plan', hintEn: 'modernization-plan' }
    ],
    example: '/legacy code audit "[الصق بنية المشروع أو الكود]" --language=php --output=modernization-plan',
    qualityRules: [
      'تحديد المكونات الأكثر خطورة والأكثر استخداماً (Strangler Fig Pattern)',
      'خطة ترقية متدرجة دون الحاجة لإعادة كتابة كل شيء دفعة واحدة (Big Bang rewrite)',
      'وضع استراتيجية لاختبار الكود القديم قبل البدء في التعديل'
    ],
    keywords: ['legacy code audit', 'كود قديم', 'technical debt audit', 'code modernization', 'strangler pattern'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 80,
    isFavorite: false
  }
];
