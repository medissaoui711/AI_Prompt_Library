import { CommandPrompt } from '../../../types/prompt';
import { resolveParam } from '../../paramRegistry';

export const DEV_DEPLOYMENT_PROMPTS: CommandPrompt[] = [
  {
    id: 'dev-dep-093',
    code: '/cicd pipeline',
    titleAr: 'بناء خط أنابيب التكامل والنشر المستمر (CI/CD Pipeline)',
    titleEn: 'GitHub Actions / GitLab CI/CD Pipeline Generator',
    descriptionAr: 'إنشاء ملف أتمتة متكامل (GitHub Actions) للبناء، الاختبارات الآلية، الفحص الأمني، والنشر التلقائي.',
    descriptionEn: 'Generate production-ready CI/CD workflows for linting, automated testing, security scanning, and deployment.',
    group: 'dev',
    devCategory: 'deployment',
    outputType: 'text',
    outputBadges: ['نشر'],
    params: [
      { key: 'stack', flag: 'stack', isPositional: true, type: 'string', required: true, labelAr: 'المكدس والبيئة', labelEn: 'Stack & App Type', hintAr: 'مثال: تطبيق Next.js مع Node.js', hintEn: 'e.g. Next.js App with Node.js & Docker' },
      { key: 'platform', flag: 'platform', isPositional: false, type: 'enum', required: false, defaultValue: 'github-actions', labelAr: 'منصة CI/CD', labelEn: 'CI/CD Platform', hintAr: 'github-actions, gitlab-ci', hintEn: 'Platform', enumValues: [
        { value: 'github-actions', labelAr: 'GitHub Actions (.github/workflows)', labelEn: 'GitHub Actions' },
        { value: 'gitlab-ci', labelAr: 'GitLab CI/CD (.gitlab-ci.yml)', labelEn: 'GitLab CI/CD' }
      ]},
      { key: 'stages', flag: 'stages', isPositional: false, type: 'string', required: false, defaultValue: 'lint,test,build,deploy', labelAr: 'المراحل المطلوبة', labelEn: 'Stages', hintAr: 'lint,test,build,deploy,security-scan', hintEn: 'lint,test,build,deploy' }
    ],
    example: '/cicd pipeline "تطبيق Next.js مع Node.js" --platform=github-actions --stages=lint,test,build,deploy',
    qualityRules: [
      'تفعيل التخزين المؤقت (Dependency Caching) لتسريع زمن التنفيذ',
      'إدارة الأسرار والمتغيرات عبر Secrets الآمنة وعدم كتابتها صراحة',
      'منع النشر للإنتاج في حال فشل أي خطوة فحص أو اختبار'
    ],
    keywords: ['cicd pipeline', 'github actions', 'gitlab ci', 'أتمتة النشر', 'continuous integration'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 96,
    isFavorite: true
  },
  {
    id: 'dev-dep-094',
    code: '/dockerfile gen',
    titleAr: 'توليد ملف Dockerfile محسّن ومتعدد المراحل (Multi-Stage)',
    titleEn: 'Multi-Stage Production Dockerfile Generator',
    descriptionAr: 'إنشاء Dockerfile احترافي خفيف وآمن يعتمد على Multi-stage builds وتشغيل بحساب غير جذري (Non-root user).',
    descriptionEn: 'Generate optimized, secure, multi-stage Dockerfiles minimizing image size and running as unprivileged non-root users.',
    group: 'dev',
    devCategory: 'deployment',
    outputType: 'text',
    outputBadges: ['نشر', 'كود'],
    params: [
      { key: 'stack', flag: 'stack', isPositional: true, type: 'string', required: true, labelAr: 'نوع التطبيق واللغة', labelEn: 'App Runtime', hintAr: 'مثال: تطبيق Node.js Express', hintEn: 'e.g. Node.js Express / Python FastAPI' },
      { key: 'environment', flag: 'environment', isPositional: false, type: 'string', required: false, defaultValue: 'production', labelAr: 'البيئة المستهدفة', labelEn: 'Environment', hintAr: 'production, development', hintEn: 'production' },
      { key: 'optimization', flag: 'optimization', isPositional: false, type: 'string', required: false, defaultValue: 'multi-stage,non-root,alpine', labelAr: 'معايير التحسين', labelEn: 'Optimizations', hintAr: 'multi-stage,non-root,alpine', hintEn: 'multi-stage,non-root,alpine' }
    ],
    example: '/dockerfile gen "تطبيق Node.js Express" --environment=production --optimization=multi-stage,non-root,alpine',
    qualityRules: [
      'استخدام صور أساسية مصغرة (Alpine / Distroless / Slim)',
      'عزل مستخدم التشغيل USER nonroot لمنع هجمات الهروب من الحاويات',
      'ترتيب تعليمات COPY للاستفادة القصوى من الـ Layer Caching'
    ],
    keywords: ['dockerfile gen', 'dockerfile', 'multi stage docker', 'docker container', 'alpine docker'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 93,
    isFavorite: true
  },
  {
    id: 'dev-dep-095',
    code: '/docker compose',
    titleAr: 'توليد ملف Docker Compose للخدمات المتعددة',
    titleEn: 'Multi-Service Docker Compose Setup',
    descriptionAr: 'تكوين بيئة تشغيل متكاملة تجمع خادم التطبيق، قاعدة البيانات (PostgreSQL)، التخزين المؤقت (Redis)، والشبكات.',
    descriptionEn: 'Author complete docker-compose.yml orchestrating app, database, Redis cache, healthchecks, and persistent volumes.',
    group: 'dev',
    devCategory: 'deployment',
    outputType: 'text',
    outputBadges: ['نشر', 'كود'],
    params: [
      { key: 'services', flag: 'services', isPositional: true, type: 'string', required: true, labelAr: 'الخدمات المراد ربطها', labelEn: 'Services Stack', hintAr: 'مثال: app, postgres, redis, pgadmin', hintEn: 'e.g. app, postgres, redis, pgadmin' },
      { key: 'environment', flag: 'environment', isPositional: false, type: 'string', required: false, defaultValue: 'development', labelAr: 'البيئة', labelEn: 'Target Env', hintAr: 'development, staging', hintEn: 'development' }
    ],
    example: '/docker compose "app, postgres, redis, pgadmin" --environment=development',
    qualityRules: [
      'تحديد Volumes دائمة لقواعد البيانات لمنع فقدان البيانات عند إعادة التشغيل',
      'إعداد healthchecks وشروط الاعتمادية (depends_on: condition: service_healthy)',
      'عزل الخدمات في شبكة مخصصة (Custom Bridge Network)'
    ],
    keywords: ['docker compose', 'docker-compose.yml', 'postgres docker', 'redis docker', 'container orchestration'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 90,
    isFavorite: false
  },
  {
    id: 'dev-dep-096',
    code: '/env config',
    titleAr: 'إدارة وتأمين ملفات متغيرات البيئة (.env Management)',
    titleEn: 'Environment Variables Template & Validation Schema',
    descriptionAr: 'توليد ملف .env.example منظم مع سكيما تحقق برمجية (Zod/Joi) لمنع انهيار السيرفر بسبب مفاتيح مفقودة.',
    descriptionEn: 'Generate .env templates alongside runtime validation schemas ensuring all required secrets exist on boot.',
    group: 'dev',
    devCategory: 'deployment',
    outputType: 'mixed',
    outputBadges: ['نشر', 'أمن'],
    params: [
      { key: 'stack', flag: 'stack', isPositional: true, type: 'string', required: true, labelAr: 'المشروع والخدمات المتصلة', labelEn: 'Project Services', hintAr: 'مثال: نظام متجر مع Stripe و PostgreSQL و JWT', hintEn: 'e.g. Store with Stripe, PostgreSQL, Redis, and JWT' },
      { key: 'validation', flag: 'validation', isPositional: false, type: 'enum', required: false, defaultValue: 'zod', labelAr: 'أداة التحقق', labelEn: 'Validator', hintAr: 'zod, envalid, dotenv-safe', hintEn: 'Validator', enumValues: [
        { value: 'zod', labelAr: 'Zod TypeScript Schema (موصى به)', labelEn: 'Zod TypeScript Schema' },
        { value: 'envalid', labelAr: 'Envalid Validator', labelEn: 'Envalid Library' }
      ]}
    ],
    example: '/env config "نظام متجر مع Stripe و PostgreSQL و JWT" --validation=zod',
    qualityRules: [
      'توليد ملف .env.example خالٍ تماماً من القيم السرية الحقيقية مع توضيحات لكل متغير',
      'كتابة دالة فحص فور إقلاع التطبيق (Fail-Fast) تُظهر اسم المتغير المفقود بوضوح',
      'التحقق من صحة أنواع المتغيرات (مثل أرقام المنافذ وروابط الـ URLs)'
    ],
    keywords: ['env config', 'متغيرات البيئة', 'env example', 'zod env validation', 'secrets management'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 88,
    isFavorite: false
  },
  {
    id: 'dev-dep-097',
    code: '/deploy vercel',
    titleAr: 'دليل النشر والربط على منصة Vercel',
    titleEn: 'Vercel Deployment & Edge Config Guide',
    descriptionAr: 'تجهيز المشروع للنشر السلس على Vercel مع ضبط ملف vercel.json، النطاقات المخصصة، وServerless Functions.',
    descriptionEn: 'Configure zero-config Vercel deployments, custom domains, headers, rewrites, and serverless functions.',
    group: 'dev',
    devCategory: 'deployment',
    outputType: 'text',
    outputBadges: ['نشر', 'ويب'],
    params: [
      { key: 'framework', flag: 'framework', isPositional: true, type: 'string', required: true, labelAr: 'إطار العمل', labelEn: 'Framework', hintAr: 'مثال: Next.js أو React SPA', hintEn: 'e.g. Next.js App Router' },
      { key: 'features', flag: 'features', isPositional: false, type: 'string', required: false, defaultValue: 'domain,env,redirects,headers', labelAr: 'المتطلبات', labelEn: 'Features', hintAr: 'domain,env,redirects,headers', hintEn: 'domain,env,redirects,headers' }
    ],
    example: '/deploy vercel "Next.js" --features=domain,env,redirects,headers',
    qualityRules: [
      'توليد ملف vercel.json محكم يتضمن ترويسات الأمان وإعادة التوجيه (Security Headers & Rewrites)',
      'إرشادات ربط مستودع GitHub والنشر الآلي عند كل Push',
      'توجيهات ضبط سجلات DNS وشهادات SSL للنطاق المخصص'
    ],
    keywords: ['deploy vercel', 'نشر vercel', 'vercel.json', 'nextjs vercel deployment', 'custom domain vercel'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 87,
    isFavorite: false
  },
  {
    id: 'dev-dep-098',
    code: '/deploy cloud',
    titleAr: 'تخطيط النشر السحابي (Cloud Run / AWS / VPS)',
    titleEn: 'Production Cloud Deployment Guide (Cloud Run / AWS / VPS)',
    descriptionAr: 'خطة تشغيل ونشر سحابية احترافية لتطبيق وحاوية الخادم مع ضبط المنافذ، التوسع التلقائي، وموازنة الأحمال.',
    descriptionEn: 'Step-by-step deployment blueprint for deploying containerized services on Google Cloud Run, AWS ECS, or Ubuntu VPS.',
    group: 'dev',
    devCategory: 'deployment',
    outputType: 'plan',
    outputBadges: ['نشر', 'Backend'],
    params: [
      { key: 'stack', flag: 'stack', isPositional: true, type: 'string', required: true, labelAr: 'المشروع والمكدس', labelEn: 'Project Domain', hintAr: 'مثال: خادم Node.js مع حاوية Docker', hintEn: 'e.g. Dockerized Node.js backend' },
      { key: 'target', flag: 'target', isPositional: false, type: 'enum', required: false, defaultValue: 'cloud-run', labelAr: 'المنصة السحابية', labelEn: 'Cloud Provider', hintAr: 'cloud-run, aws-ecs, ubuntu-vps', hintEn: 'Target', enumValues: [
        { value: 'cloud-run', labelAr: 'Google Cloud Run (Serverless Container)', labelEn: 'Google Cloud Run' },
        { value: 'ubuntu-vps', labelAr: 'Ubuntu VPS + Nginx + PM2/Docker', labelEn: 'Ubuntu VPS / Droplet' },
        { value: 'aws-ecs', labelAr: 'AWS ECS / App Runner', labelEn: 'AWS ECS / Fargate' }
      ]},
      resolveParam('language')
    ],
    example: '/deploy cloud "خادم Node.js مع حاوية Docker" --target=cloud-run --language=ar',
    qualityRules: [
      'تضمين أوامر الطرفية الكاملة خطوة بخطوة',
      'ضبط إعدادات التوسع التلقائي (Min/Max instances) للتحكم في التكاليف',
      'تأمين خادم VPS بجدار حماية (UFW) وإغلاق المنافذ غير المستخدمة'
    ],
    keywords: ['deploy cloud', 'cloud run deploy', 'نشر سحابي', 'aws ecs', 'ubuntu vps nginx'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 89,
    isFavorite: false
  },
  {
    id: 'dev-dep-099',
    code: '/ssl domain',
    titleAr: 'تأمين النطاقات وشهادات التشفير (SSL / TLS & DNS)',
    titleEn: 'SSL/TLS Certificate Setup & Nginx HTTPS Hardening',
    descriptionAr: 'تثبيت شهادات SSL مجانية (Let\'s Encrypt / Certbot)، تحويل الزيارات إلى HTTPS، وإعداد سجلات DNS.',
    descriptionEn: 'Configure Let\'s Encrypt SSL/TLS via Certbot, automate renewal, harden Nginx ciphers, and enforce HSTS.',
    group: 'dev',
    devCategory: 'deployment',
    outputType: 'text',
    outputBadges: ['نشر', 'أمن'],
    params: [
      { key: 'domain', flag: 'domain', isPositional: true, type: 'string', required: true, labelAr: 'اسم النطاق (Domain)', labelEn: 'Domain Name', hintAr: 'مثال: api.example.com', hintEn: 'e.g. api.example.com' },
      { key: 'server', flag: 'server', isPositional: false, type: 'string', required: false, defaultValue: 'nginx', labelAr: 'خادم الويب', labelEn: 'Web Server', hintAr: 'nginx, caddy, cloudflare', hintEn: 'nginx, caddy' }
    ],
    example: '/ssl domain "api.example.com" --server=nginx',
    qualityRules: [
      'توليد ملف إعداد Nginx آمن يدعم HTTP/2 وTLS 1.3 مع تحويل إجباري من HTTP إلى HTTPS',
      'تفعيل ترويسة Strict-Transport-Security (HSTS)',
      'أتمتة التجديد التلقائي لشهادات Let\'s Encrypt عبر cron / certbot renew'
    ],
    keywords: ['ssl domain', 'certbot ssl', 'letsencrypt', 'تشفير ssl', 'nginx https config'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 84,
    isFavorite: false
  },
  {
    id: 'dev-dep-100',
    code: '/monitoring alert',
    titleAr: 'منظومة المراقبة، التتبع، والتنبيهات (Monitoring & Alerting)',
    titleEn: 'Application Monitoring, Error Tracking & Alerting',
    descriptionAr: 'تخطيط وتفعيل رصد الأخطاء الفورية (Sentry)، تتبع الأداء، وتوجيه التنبيهات إلى Slack / Telegram عند الأعطال.',
    descriptionEn: 'Integrate Sentry error tracking, health check alerts, uptime monitoring, and Slack/Telegram webhook notifications.',
    group: 'dev',
    devCategory: 'deployment',
    outputType: 'mixed',
    outputBadges: ['نشر', 'مراجعة'],
    params: [
      { key: 'system', flag: 'system', isPositional: true, type: 'string', required: true, labelAr: 'المنظومة المستهدفة', labelEn: 'Target System', hintAr: 'مثال: منصة مدفوعات وتطبيق جوال', hintEn: 'e.g. Billing Platform & Mobile App' },
      { key: 'tools', flag: 'tools', isPositional: false, type: 'string', required: false, defaultValue: 'sentry,uptime-kuma,slack', labelAr: 'الأدوات المقترحة', labelEn: 'Monitoring Tools', hintAr: 'sentry,uptime-kuma,slack,datadog', hintEn: 'sentry,uptime-kuma,slack' },
      resolveParam('language')
    ],
    example: '/monitoring alert "منصة مدفوعات وتطبيق جوال" --tools=sentry,uptime-kuma,slack --language=ar',
    qualityRules: [
      'تكوين Sentry لالتقاط الاستثناءات غير المعالجة وتعتيم البيانات الشخصية (PII Scrubbing)',
      'إنشاء Webhook لإرسال تنبيهات لحظية للأخطاء الحرجة فقط لتفادي إرهاق الإشعارات (Alert Fatigue)',
      'تحديد مؤشرات توفر الخدمة (Uptime SLA) ومراقبة صحة قواعد البيانات والخوادم'
    ],
    keywords: ['monitoring alert', 'sentry error tracking', 'مراقبة النظام', 'uptime monitoring', 'slack alert webhook'],
    createdAt: '2026-09-14T10:00:00.000Z',
    updatedAt: '2026-09-14T10:00:00.000Z',
    usageCount: 91,
    isFavorite: true
  }
];
