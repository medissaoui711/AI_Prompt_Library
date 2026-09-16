import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const DEV_ANDROID_PROMPTS: CommandPrompt[] = [
  {
    id: 'dev-and-021',
    code: '/build android app',
    titleAr: 'تخطيط وبناء تطبيق Android حديث',
    titleEn: 'Modern Android App Architecture & Setup',
    descriptionAr: 'تخطيط وبناء تطبيق Android أصلي (Native) متكامل باستخدام Kotlin و Jetpack Compose.',
    descriptionEn: 'Plan and architect a native modern Android application using Kotlin, Jetpack Compose, and Material 3.',
    group: 'dev',
    devCategory: 'android',
    outputType: 'mixed',
    outputBadges: ['Android'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'string', required: true, labelAr: 'فكرة التطبيق', labelEn: 'App Concept', hintAr: 'مثال: تطبيق متابعة شرب الماء', hintEn: 'e.g. Daily Water Reminder App' },
      { key: 'features', flag: 'features', isPositional: false, type: 'string', required: false, defaultValue: 'reminders,progress,notifications', labelAr: 'الميزات الرئيسية', labelEn: 'Features', hintAr: 'reminders,progress,notifications', hintEn: 'reminders,progress,notifications' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'kotlin', labelAr: 'لغة البرمجة', labelEn: 'Language', hintAr: 'kotlin', hintEn: 'kotlin' }
    ],
    example: '/build android app "تطبيق متابعة شرب الماء" --features=reminders,progress,notifications --language=kotlin',
    qualityRules: [
      'الاعتماد على Jetpack Compose و Material 3 الحديث',
      'تطبيق مبادئ Android Clean Architecture وهيكلة Gradle المعيارية',
      'تغطية دورة حياة التطبيق (Lifecycle management) بشكل آمن'
    ],
    keywords: ['android', 'kotlin', 'jetpack compose', 'build android app', 'mobile app'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 94,
    isFavorite: true
  },
  {
    id: 'dev-and-022',
    code: '/android screen',
    titleAr: 'برمجة شاشة Android (Jetpack Compose)',
    titleEn: 'Android Compose Screen Builder',
    descriptionAr: 'إنشاء شاشة Android كاملة مع واجهة Compose، إدارة حالة State، والتنقل Navigation.',
    descriptionEn: 'Build an idiomatic Jetpack Compose screen with state hoisting, ViewModel integration, and UI event handling.',
    group: 'dev',
    devCategory: 'android',
    outputType: 'text',
    outputBadges: ['Android', 'كود'],
    params: [
      { key: 'screen_name', flag: 'screen_name', isPositional: true, type: 'string', required: true, labelAr: 'اسم ووظيفة الشاشة', labelEn: 'Screen Name', hintAr: 'مثال: شاشة تسجيل دخول', hintEn: 'e.g. Login / Auth Screen' },
      { key: 'framework', flag: 'framework', isPositional: false, type: 'string', required: false, defaultValue: 'jetpack-compose', labelAr: 'إطار الواجهة', labelEn: 'UI Framework', hintAr: 'jetpack-compose, xml-views', hintEn: 'jetpack-compose' },
      { key: 'features', flag: 'features', isPositional: false, type: 'string', required: false, defaultValue: 'email,password,forgot-password', labelAr: 'العناصر والوظائف', labelEn: 'Elements', hintAr: 'email,password,forgot-password', hintEn: 'email,password,forgot-password' }
    ],
    example: '/android screen "شاشة تسجيل دخول" --framework=jetpack-compose --features=email,password,forgot-password',
    qualityRules: [
      'فصل الحالة (State Hoisting) وربطها مع StateFlow داخل ViewModel',
      'تضمين معاينات Compose Preview لمختلف أحجام الشاشات والوضع الليلي',
      'معالجة حالات الإدخال الخاطئ وإظهار الـ Snackbars والرسائل'
    ],
    keywords: ['android screen', 'jetpack compose screen', 'kotlin composable', 'viewmodel compose'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 88,
    isFavorite: false
  },
  {
    id: 'dev-and-023',
    code: '/android architecture',
    titleAr: 'هندسة معمارية تطبيق Android (MVVM / MVI)',
    titleEn: 'Android Clean Architecture (MVVM/MVI)',
    descriptionAr: 'تنظيم طبقات المشروع وفق المعايير الرسمية (UI Layer, Domain Layer, Data Layer) وحقن التبعيات (Hilt).',
    descriptionEn: 'Structure Android project layers according to official Google architecture guide with Hilt/Koin DI.',
    group: 'dev',
    devCategory: 'android',
    outputType: 'plan',
    outputBadges: ['Android', 'خطة'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'string', required: true, labelAr: 'اسم المشروع', labelEn: 'App Name', hintAr: 'مثال: تطبيق متجر إلكتروني', hintEn: 'e.g. E-Commerce Android App' },
      { key: 'pattern', flag: 'pattern', isPositional: false, type: 'enum', required: false, defaultValue: 'mvvm', labelAr: 'النمط المعماري', labelEn: 'Architecture Pattern', hintAr: 'mvvm, mvi', hintEn: 'Pattern', enumValues: [
        { value: 'mvvm', labelAr: 'MVVM (Model-View-ViewModel)', labelEn: 'MVVM' },
        { value: 'mvi', labelAr: 'MVI (Model-View-Intent)', labelEn: 'MVI (Uni-directional)' }
      ]},
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'kotlin', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'kotlin', hintEn: 'kotlin' }
    ],
    example: '/android architecture "تطبيق متجر إلكتروني" --pattern=mvvm --language=kotlin',
    qualityRules: [
      'فصل صارم بين Repository و UseCases و ViewModels',
      'تطبيق نمط تدفق البيانات أحادي الاتجاه (Unidirectional Data Flow)',
      'تحديد استراتيجية إدارة الأخطاء العامة وحالات Offline-First'
    ],
    keywords: ['android architecture', 'mvvm kotlin', 'clean architecture android', 'mvi compose', 'hilt'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 82,
    isFavorite: false
  },
  {
    id: 'dev-and-024',
    code: '/android api',
    titleAr: 'ربط تطبيق Android مع الـ API (Retrofit / Ktor)',
    titleEn: 'Android Networking & API Client Layer',
    descriptionAr: 'بناء طبقة الشبكة لربط التطبيق بـ API مع معالجة التحميل، التخزين المؤقت، وحالات انقطاع الإنترنت.',
    descriptionEn: 'Implement robust network calls using Retrofit/Ktor with Coroutines, Flow, interceptors, and error wrappers.',
    group: 'dev',
    devCategory: 'android',
    outputType: 'text',
    outputBadges: ['Android', 'Backend'],
    params: [
      { key: 'feature', flag: 'feature', isPositional: true, type: 'string', required: true, labelAr: 'الميزة أو المورد المستهدف', labelEn: 'Feature/Resource', hintAr: 'مثال: قائمة المنتجات', hintEn: 'e.g. Products List' },
      { key: 'language', flag: 'language', isPositional: false, type: 'string', required: false, defaultValue: 'kotlin', labelAr: 'اللغة', labelEn: 'Language', hintAr: 'kotlin', hintEn: 'kotlin' },
      { key: 'network', flag: 'network', isPositional: false, type: 'enum', required: false, defaultValue: 'retrofit', labelAr: 'مكتبة الشبكة', labelEn: 'Network Library', hintAr: 'retrofit, ktor', hintEn: 'Library', enumValues: [
        { value: 'retrofit', labelAr: 'Retrofit + OkHttp + Moshi/Kotlinx', labelEn: 'Retrofit' },
        { value: 'ktor', labelAr: 'Ktor Client (Multiplatform ready)', labelEn: 'Ktor' }
      ]},
      { key: 'architecture', flag: 'architecture', isPositional: false, type: 'string', required: false, defaultValue: 'mvvm', labelAr: 'المعمارية', labelEn: 'Architecture', hintAr: 'mvvm', hintEn: 'mvvm' }
    ],
    example: '/android api "قائمة المنتجات" --language=kotlin --network=retrofit --architecture=mvvm',
    qualityRules: [
      'استخدام Kotlin Coroutines و Flow لنقل البيانات غير المتزامن',
      'تضمين Auth Interceptor لإرفاق الـ Bearer Token وتجديده تلقائياً',
      'إرجاع Result sealed class لتمثيل حالات النجاح والخطأ بأمان'
    ],
    keywords: ['android api', 'retrofit kotlin', 'ktor client', 'android networking', 'coroutines flow'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 86,
    isFavorite: false
  },
  {
    id: 'dev-and-025',
    code: '/android database',
    titleAr: 'قاعدة بيانات محلية في Android (Room DB)',
    titleEn: 'Local Storage & Room Database Design',
    descriptionAr: 'تصميم وبناء قاعدة بيانات محلية باستخدام Room مع الـ Entities و DAOs وعمليات الترحيل Migrations.',
    descriptionEn: 'Design offline Room database with entities, type converters, DAOs, flows, and safe schema migrations.',
    group: 'dev',
    devCategory: 'android',
    outputType: 'text',
    outputBadges: ['Android', 'كود'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'string', required: true, labelAr: 'التطبيق', labelEn: 'App Domain', hintAr: 'مثال: تطبيق مهام', hintEn: 'e.g. Task app' },
      { key: 'database', flag: 'database', isPositional: false, type: 'string', required: false, defaultValue: 'room', labelAr: 'محرك التخزين', labelEn: 'Database', hintAr: 'room, datastore', hintEn: 'room, datastore' },
      { key: 'entities', flag: 'entities', isPositional: false, type: 'string', required: false, defaultValue: 'tasks,categories', labelAr: 'الجداول (Entities)', labelEn: 'Entities', hintAr: 'tasks,categories', hintEn: 'tasks,categories' }
    ],
    example: '/android database "تطبيق مهام" --database=room --entities=tasks,categories',
    qualityRules: [
      'كتابة استعلامات DAO غير متزامنة مع دعم Flow للمراقبة اللحظية',
      'تحديد استراتيجيات حل النزاعات (OnConflictStrategy.REPLACE)',
      'توفير خطة ترحيل آمنة عند تحديث إصدارات قاعدة البيانات'
    ],
    keywords: ['android database', 'room database', 'room dao', 'sqlite android', 'offline android'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 77,
    isFavorite: false
  },
  {
    id: 'dev-and-026',
    code: '/android notification',
    titleAr: 'منظومة إشعارات Android (Local & Push)',
    titleEn: 'Android Notifications & FCM Channels',
    descriptionAr: 'إنشاء قنوات إشعارات محلية ومجدولة أو موجهة مع التعامل مع أذونات Android 13+ الصارمة.',
    descriptionEn: 'Implement Android notification channels, pending intents, exact alarms, and Firebase Cloud Messaging (FCM).',
    group: 'dev',
    devCategory: 'android',
    outputType: 'text',
    outputBadges: ['Android', 'كود'],
    params: [
      { key: 'purpose', flag: 'purpose', isPositional: true, type: 'string', required: true, labelAr: 'الغرض من الإشعار', labelEn: 'Notification Purpose', hintAr: 'مثال: تذكير بشرب الماء', hintEn: 'e.g. Water drinking reminder' },
      { key: 'type', flag: 'type', isPositional: false, type: 'enum', required: false, defaultValue: 'local', labelAr: 'نوع الإشعار', labelEn: 'Notification Type', hintAr: 'local, fcm_push', hintEn: 'Type', enumValues: [
        { value: 'local', labelAr: 'إشعار محلي / مجدول (WorkManager/Alarm)', labelEn: 'Local / Scheduled Alarm' },
        { value: 'fcm_push', labelAr: 'إشعار سحابي موجه (FCM Push)', labelEn: 'FCM Push Notification' }
      ]},
      { key: 'schedule', flag: 'schedule', isPositional: false, type: 'string', required: false, defaultValue: 'daily', labelAr: 'الجدولة', labelEn: 'Schedule', hintAr: 'daily, hourly, event', hintEn: 'daily, hourly, event' }
    ],
    example: '/android notification "تذكير بشرب الماء" --type=local --schedule=daily',
    qualityRules: [
      'طلب إذن POST_NOTIFICATIONS بأسلوب مناسب للمستخدم على Android 13+',
      'إنشاء NotificationChannel واضحة مع إمكانية التخصيص والأصوات',
      'استخدام WorkManager أو AlarmManager للتنفيذ الموثوق في الخلفية'
    ],
    keywords: ['android notification', 'fcm android', 'notification channels', 'workmanager notification'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 80,
    isFavorite: false
  },
  {
    id: 'dev-and-027',
    code: '/android publish',
    titleAr: 'قائمة جاهزية نشر التطبيق على Google Play',
    titleEn: 'Google Play Release & Store Readiness Checklist',
    descriptionAr: 'إعداد قائمة تحقق شاملة لمتطلبات متجر Google Play: التوقيع، سياسة الخصوصية، ومتطلبات الأمان.',
    descriptionEn: 'Comprehensive pre-flight checklist for Google Play Console: App Bundle signing, target SDK, and data safety.',
    group: 'dev',
    devCategory: 'android',
    outputType: 'plan',
    outputBadges: ['Android', 'نشر'],
    params: [
      { key: 'app', flag: 'app', isPositional: true, type: 'string', required: true, labelAr: 'اسم التطبيق', labelEn: 'App Name', hintAr: 'مثال: تطبيق حجز مواعيد', hintEn: 'e.g. Booking App' },
      { key: 'check', flag: 'check', isPositional: false, type: 'string', required: false, defaultValue: 'signing,privacy,store-listing,release', labelAr: 'عناصر الفحص', labelEn: 'Checks', hintAr: 'signing,privacy,store-listing,release', hintEn: 'signing,privacy,store-listing,release' }
    ],
    example: '/android publish "تطبيق حجز مواعيد" --check=signing,privacy,store-listing,release',
    qualityRules: [
      'التحقق من إعداد Android App Bundle (.aab) ومفاتيح Play App Signing',
      'استيفاء نموذج أمان البيانات (Data Safety Section) وسياسة الخصوصية',
      'تطبيق قواعد تحسين الأداء والتوافق مع أحدث إصدارات Android SDK'
    ],
    keywords: ['android publish', 'google play console', 'aab release', 'data safety android', 'app signing'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 84,
    isFavorite: false
  },
  {
    id: 'dev-and-028',
    code: '/android security review',
    titleAr: 'مراجعة أمان تطبيق Android (ضمن مشروع مصرح به)',
    titleEn: 'Android Security & Hardening Review (Authorized)',
    descriptionAr: 'مراجعة كود وتكوين تطبيق Android لكشف التخزين غير الآمن، الأذونات الخطرة، والمفاتيح المكشوفة في مشاريع مصرح بها.',
    descriptionEn: 'Audit Android codebase and Manifest for insecure storage, over-privileged permissions, and cleartext traffic in authorized projects.',
    group: 'dev',
    devCategory: 'android',
    outputType: 'analysis',
    outputBadges: ['Android', 'أمن'],
    params: [
      { key: 'code', flag: 'code', isPositional: true, type: 'string', required: true, labelAr: 'ملفات المشروع أو الكود', labelEn: 'Code/Manifest', hintAr: 'الصق الملفات أو الوصف', hintEn: 'Paste code or Manifest description' },
      { key: 'scope', flag: 'scope', isPositional: false, type: 'string', required: false, defaultValue: 'authorized-project', labelAr: 'نطاق الترخيص', labelEn: 'Authorized Scope', hintAr: 'authorized-project', hintEn: 'authorized-project' },
      { key: 'check', flag: 'check', isPositional: false, type: 'string', required: false, defaultValue: 'permissions,secrets,storage,network', labelAr: 'محاور التدقيق', labelEn: 'Audit Checks', hintAr: 'permissions,secrets,storage,network', hintEn: 'permissions,secrets,storage,network' }
    ],
    example: '/android security review "[الصق الملفات أو الوصف]" --scope=authorized-project --check=permissions,secrets,storage,network',
    qualityRules: [
      'تنبيه صارم: يُستخدم فقط على الكود والأنظمة المصرح لك بفحصها دفاعياً',
      'فحص تشفير البيانات في SharedPreferences / DataStore باستخدام EncryptedSharedPreferences',
      'التأكد من تعطيل android:usesCleartextTraffic وتطبيق قواعد ProGuard/R8'
    ],
    keywords: ['android security review', 'android security', 'owasp mobile', 'manifest security', 'keystore security'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 91,
    isFavorite: true
  }
];
