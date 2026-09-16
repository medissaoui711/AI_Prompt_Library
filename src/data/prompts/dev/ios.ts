import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const DEV_IOS_PROMPTS: CommandPrompt[] = [
  {
    id: 'dev-ios-029',
    code: '/build ios app',
    titleAr: 'تخطيط وبناء تطبيق iOS / iPadOS أصلي',
    titleEn: 'Native iOS & iPadOS App Architecture',
    descriptionAr: 'تخطيط وبناء تطبيق iPhone/iPad أصلي باستخدام Swift و SwiftUI مع التوافق مع إرشادات آبل التصميمية HIG.',
    descriptionEn: 'Plan and architect a native Apple platform app using Swift, SwiftUI, and Human Interface Guidelines (HIG).',
    group: 'dev',
    devCategory: 'ios',
    outputType: 'mixed',
    outputBadges: ['iOS'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'string', required: true, labelAr: 'فكرة التطبيق', labelEn: 'App Concept', hintAr: 'مثال: تطبيق تنظيم عادات يومية', hintEn: 'e.g. Daily Habits Tracker App' },
      { key: 'features', flag: 'features', isPositional: false, type: 'string', required: false, defaultValue: 'habits,reminders,statistics', labelAr: 'الميزات الأساسية', labelEn: 'Features', hintAr: 'habits,reminders,statistics', hintEn: 'habits,reminders,statistics' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'swift', labelAr: 'لغة الكود', labelEn: 'Language', hintAr: 'swift', hintEn: 'swift' }
    ],
    example: '/build ios app "تطبيق تنظيم عادات يومية" --features=habits,reminders,statistics --language=swift',
    qualityRules: [
      'الاعتماد على أحدث ميزات Swift Concurrency و Modern SwiftUI',
      'تطبيق إرشادات آبل للتصميم وتجربة المستخدم (Human Interface Guidelines)',
      'دعم أحجام الشاشات المختلفة (iPhone, iPad, Dynamic Island, Widgets)'
    ],
    keywords: ['ios app', 'swift', 'swiftui', 'build ios app', 'apple developer'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 93,
    isFavorite: true
  },
  {
    id: 'dev-ios-030',
    code: '/ios screen',
    titleAr: 'برمجة واجهة شاشة iOS (SwiftUI View)',
    titleEn: 'SwiftUI Declarative View Builder',
    descriptionAr: 'بناء شاشة iOS تفاعلية وسلسة باستخدام SwiftUI مع دعم @Observable وحالات التحميل والعرض.',
    descriptionEn: 'Construct a responsive SwiftUI view with modern Observation framework, previews, and SF Symbols.',
    group: 'dev',
    devCategory: 'ios',
    outputType: 'text',
    outputBadges: ['iOS', 'كود'],
    params: [
      { key: 'screen_name', flag: 'screen_name', isPositional: true, type: 'string', required: true, labelAr: 'اسم الشاشة ووظيفتها', labelEn: 'Screen Name', hintAr: 'مثال: شاشة ملف المستخدم', hintEn: 'e.g. User Profile Screen' },
      { key: 'framework', flag: 'framework', isPositional: false, type: 'string', required: false, defaultValue: 'swiftui', labelAr: 'إطار العمل', labelEn: 'Framework', hintAr: 'swiftui, uikit', hintEn: 'swiftui' },
      { key: 'features', flag: 'features', isPositional: false, type: 'string', required: false, defaultValue: 'avatar,name,settings', labelAr: 'العناصر والخيارات', labelEn: 'Elements', hintAr: 'avatar,name,settings', hintEn: 'avatar,name,settings' }
    ],
    example: '/ios screen "شاشة ملف المستخدم" --framework=swiftui --features=avatar,name,settings',
    qualityRules: [
      'استخدام @Observable أو @StateObject لتحديث الواجهة تلقائياً',
      'تضمين معاينة SwiftUI #Preview تدعم الوضع الداكن والأجهزة المتعددة',
      'دعم التدويل ونظام Dynamic Type لتكبير الخطوط بسلاسة'
    ],
    keywords: ['ios screen', 'swiftui view', 'swift screen', 'ios ui', 'apple swiftui'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 85,
    isFavorite: false
  },
  {
    id: 'dev-ios-031',
    code: '/ios architecture',
    titleAr: 'هيكلة ومعمارية تطبيق iOS (MVVM / TCA)',
    titleEn: 'iOS Architecture (MVVM & Clean Architecture)',
    descriptionAr: 'تنظيم بنية مشروع iOS إلى وحدات منفصلة: Views, ViewModels, Repositories, و Services.',
    descriptionEn: 'Design clean iOS project architecture separating domain logic, data sources, and navigation coordinators.',
    group: 'dev',
    devCategory: 'ios',
    outputType: 'plan',
    outputBadges: ['iOS', 'خطة'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'string', required: true, labelAr: 'المشروع', labelEn: 'App Domain', hintAr: 'مثال: تطبيق متجر', hintEn: 'e.g. Store iOS App' },
      { key: 'pattern', flag: 'pattern', isPositional: false, type: 'enum', required: false, defaultValue: 'mvvm', labelAr: 'النمط المعماري', labelEn: 'Pattern', hintAr: 'mvvm, tca, clean_swift', hintEn: 'Pattern', enumValues: [
        { value: 'mvvm', labelAr: 'MVVM (Model-View-ViewModel)', labelEn: 'MVVM with Observation' },
        { value: 'tca', labelAr: 'The Composable Architecture (TCA)', labelEn: 'TCA' },
        { value: 'clean_swift', labelAr: 'Clean Swift (VIP)', labelEn: 'Clean Swift VIP' }
      ]},
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'swift', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'swift', hintEn: 'swift' }
    ],
    example: '/ios architecture "تطبيق متجر" --pattern=mvvm --language=swift',
    qualityRules: [
      'فصل منطق الأعمال عن العرض وتسهيل كتابة اختبارات الوحدة (Unit Tests)',
      'تطبيق مبادئ Dependency Injection باستخدام Protocols',
      'تحديد استراتيجية التنقل NavigationStack الآمنة'
    ],
    keywords: ['ios architecture', 'mvvm swift', 'tca swiftui', 'ios clean architecture', 'swift concurrency'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 81,
    isFavorite: false
  },
  {
    id: 'dev-ios-032',
    code: '/ios api',
    titleAr: 'ربط تطبيق iOS مع الشبكة (URLSession & Async/Await)',
    titleEn: 'iOS Networking with URLSession & Concurrency',
    descriptionAr: 'بناء عميل شبكة متقدم بلغة Swift يدعم Async/Await والتعامل مع استجابات JSON و JWT Tokens.',
    descriptionEn: 'Implement type-safe networking using URLSession, async/await, Codable decoding, and HTTP interceptors.',
    group: 'dev',
    devCategory: 'ios',
    outputType: 'text',
    outputBadges: ['iOS', 'Backend'],
    params: [
      { key: 'feature', flag: 'feature', isPositional: true, type: 'string', required: true, labelAr: 'المهمة / المورد', labelEn: 'Resource', hintAr: 'مثال: تحميل قائمة دورات', hintEn: 'e.g. Load Courses API' },
      { key: 'framework', flag: 'framework', isPositional: false, type: 'string', required: false, defaultValue: 'swiftui', labelAr: 'إطار العرض', labelEn: 'UI Layer', hintAr: 'swiftui', hintEn: 'swiftui' },
      { key: 'network', flag: 'network', isPositional: false, type: 'string', required: false, defaultValue: 'urlsession', labelAr: 'طريقة الاتصال', labelEn: 'Network Stack', hintAr: 'urlsession, alamofire', hintEn: 'urlsession' }
    ],
    example: '/ios api "تحميل قائمة دورات" --framework=swiftui --network=urlsession',
    qualityRules: [
      'استخدام Swift Concurrency (async/await, Actor) لتجنب تجمد الواجهة الرئيسية (Main Thread)',
      'التعامل الآمن مع فك الترميز عبر Codable مع معالجة الأخطاء عبر Custom Error enum',
      'إدارة حالات انقطاع الاتصال وتخزين الـ URLCache المناسب'
    ],
    keywords: ['ios api', 'urlsession swift', 'async await swift', 'codable ios', 'swift networking'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 83,
    isFavorite: false
  },
  {
    id: 'dev-ios-033',
    code: '/ios storage',
    titleAr: 'التخزين المحلي وإدارة البيانات في iOS (SwiftData / CoreData)',
    titleEn: 'Local Storage with SwiftData & Keychain',
    descriptionAr: 'تصميم وبناء طبقة التخزين المحلي باستخدام SwiftData أو CoreData مع حفظ الأسرار في Keychain.',
    descriptionEn: 'Model and persist local data using SwiftData / CoreData with secure token persistence in Apple Keychain.',
    group: 'dev',
    devCategory: 'ios',
    outputType: 'text',
    outputBadges: ['iOS', 'كود'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'string', required: true, labelAr: 'التطبيق', labelEn: 'App Domain', hintAr: 'مثال: تطبيق ملاحظات', hintEn: 'e.g. Notes app' },
      { key: 'data', flag: 'data', isPositional: false, type: 'string', required: false, defaultValue: 'notes,settings', labelAr: 'البيانات المخزنة', labelEn: 'Entities', hintAr: 'notes,settings', hintEn: 'notes,settings' },
      { key: 'option', flag: 'option', isPositional: false, type: 'enum', required: false, defaultValue: 'swiftdata', labelAr: 'محرك التخزين', labelEn: 'Storage Engine', hintAr: 'swiftdata, coredata, userdefaults', hintEn: 'Engine', enumValues: [
        { value: 'swiftdata', labelAr: 'SwiftData (الحديث والافتراضي)', labelEn: 'SwiftData' },
        { value: 'coredata', labelAr: 'CoreData', labelEn: 'CoreData' },
        { value: 'keychain', labelAr: 'Keychain (للبيانات الحساسة وTokens)', labelEn: 'Keychain Services' }
      ]}
    ],
    example: '/ios storage "تطبيق ملاحظات" --data=notes,settings --option=swiftdata',
    qualityRules: [
      'استخدام نماذج @Model في SwiftData مع العلاقات والفهارس المناسبة',
      'حفظ كلمات المرور والـ Tokens الحساسة داخل Keychain حصراً وعدم وضعها في UserDefaults',
      'دعم المزامنة السحابية عبر CloudKit عند الحاجة'
    ],
    keywords: ['ios storage', 'swiftdata', 'coredata', 'keychain swift', 'ios persistence'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 78,
    isFavorite: false
  },
  {
    id: 'dev-ios-034',
    code: '/ios notification',
    titleAr: 'إشعارات iOS (UserNotifications & APNs)',
    titleEn: 'Apple Push & Local Notifications (APNs)',
    descriptionAr: 'برمجة الإشعارات المحلية التفاعلية وإعداد الاتصال مع Apple Push Notification Service (APNs).',
    descriptionEn: 'Configure Apple UNUserNotificationCenter, badge handling, custom actions, and remote APNs payloads.',
    group: 'dev',
    devCategory: 'ios',
    outputType: 'text',
    outputBadges: ['iOS', 'كود'],
    params: [
      { key: 'purpose', flag: 'purpose', isPositional: true, type: 'string', required: true, labelAr: 'الغرض من الإشعار', labelEn: 'Notification Purpose', hintAr: 'مثال: تذكير بموعد', hintEn: 'e.g. Appointment reminder' },
      { key: 'type', flag: 'type', isPositional: false, type: 'enum', required: false, defaultValue: 'local', labelAr: 'النوع', labelEn: 'Type', hintAr: 'local, apns_remote', hintEn: 'Type', enumValues: [
        { value: 'local', labelAr: 'إشعار محلي (UNCalendarNotificationTrigger)', labelEn: 'Local Notification' },
        { value: 'apns_remote', labelAr: 'إشعار موجه عن بعد (APNs Push)', labelEn: 'Remote APNs' }
      ]},
      { key: 'schedule', flag: 'schedule', isPositional: false, type: 'string', required: false, defaultValue: 'custom', labelAr: 'الجدولة والتكرار', labelEn: 'Schedule', hintAr: 'custom, daily, instant', hintEn: 'custom, daily, instant' }
    ],
    example: '/ios notification "تذكير بموعد" --type=local --schedule=custom',
    qualityRules: [
      'طلب إذن الإشعارات في التوقيت السياقي المناسب للمستخدم',
      'معالجة النقر على الإشعار وتوجيه المستخدم للشاشة المحددة (Deep Linking)',
      'تضمين إجراءات سريعة (Notification Action Buttons)'
    ],
    keywords: ['ios notification', 'apns', 'usernotifications swift', 'push notifications ios'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 76,
    isFavorite: false
  },
  {
    id: 'dev-ios-035',
    code: '/ios publish',
    titleAr: 'قائمة جاهزية الرفع لمتجر App Store',
    titleEn: 'App Store Submission & Review Readiness',
    descriptionAr: 'قائمة مراجعة شاملة قبل التقديم لمتجر آبل: التوقيع، شهادات التوزيع، الخصوصية، ومتطلبات App Review.',
    descriptionEn: 'Pre-submission audit for Apple App Store Review Guidelines, privacy manifests, signing, and screenshots.',
    group: 'dev',
    devCategory: 'ios',
    outputType: 'plan',
    outputBadges: ['iOS', 'نشر'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'string', required: true, labelAr: 'اسم التطبيق', labelEn: 'App Name', hintAr: 'مثال: تطبيق إدارة مصروفات', hintEn: 'e.g. Budgeting iOS App' },
      { key: 'check', flag: 'check', isPositional: false, type: 'string', required: false, defaultValue: 'privacy,signing,metadata,screenshots', labelAr: 'عناصر التحقق', labelEn: 'Audit Items', hintAr: 'privacy,signing,metadata,screenshots', hintEn: 'privacy,signing,metadata,screenshots' }
    ],
    example: '/ios publish "تطبيق إدارة مصروفات" --check=privacy,signing,metadata,screenshots',
    qualityRules: [
      'التحقق من ملف Privacy Manifests (PrivacyInfo.xcprivacy) المطلوب من آبل',
      'التأكد من التوافق مع إرشادات مراجعة App Store 2025/2026 لتفادي الرفض',
      'إعداد شهادات التوزيع وProvisioning Profiles وعمليات الأرشفة في Xcode'
    ],
    keywords: ['ios publish', 'app store review', 'app store connect', 'privacy manifests ios', 'xcode archive'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 86,
    isFavorite: false
  },
  {
    id: 'dev-ios-036',
    code: '/ios security review',
    titleAr: 'مراجعة أمان تطبيق iOS (ضمن مشروع مصرح به)',
    titleEn: 'iOS Security & Hardening Review (Authorized)',
    descriptionAr: 'مراجعة كود وتكوين تطبيق iOS بحثاً عن أسرار مكشوفة، اتصالات ATS غير آمنة، وتسريبات الذاكرة في مشاريع مرخصة.',
    descriptionEn: 'Audit iOS code, Info.plist, App Transport Security, Keychain usage, and jailbreak detection for authorized audits.',
    group: 'dev',
    devCategory: 'ios',
    outputType: 'analysis',
    outputBadges: ['iOS', 'أمن'],
    params: [
      { key: 'code', flag: 'code', isPositional: true, type: 'string', required: true, labelAr: 'ملفات المشروع أو الكود', labelEn: 'Code/Plist', hintAr: 'الصق ملفات المشروع أو الكود', hintEn: 'Paste code or Info.plist' },
      { key: 'scope', flag: 'scope', isPositional: false, type: 'string', required: false, defaultValue: 'authorized-project', labelAr: 'نطاق الترخيص', labelEn: 'Authorized Scope', hintAr: 'authorized-project', hintEn: 'authorized-project' },
      { key: 'check', flag: 'check', isPositional: false, type: 'string', required: false, defaultValue: 'keychain,secrets,network,privacy', labelAr: 'محاور الفحص', labelEn: 'Audit Checks', hintAr: 'keychain,secrets,network,privacy', hintEn: 'keychain,secrets,network,privacy' }
    ],
    example: '/ios security review "[الصق ملفات المشروع]" --scope=authorized-project --check=keychain,secrets,network,privacy',
    qualityRules: [
      'تنبيه صارم: مخصص فقط للمراجعات الدفاعية على تطبيقات وأنظمة مصرح لك بفحصها',
      'التحقق من إعدادات App Transport Security (ATS) ومنع الاتصالات غير المشفرة',
      'فحص تخزين البيانات الحساسة والتأكد من استخدام kSecAttrAccessibleAfterFirstUnlock'
    ],
    keywords: ['ios security review', 'ios hardening', 'keychain security', 'app transport security', 'owasp ios'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 89,
    isFavorite: true
  }
];
