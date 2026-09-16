import React, { useState } from 'react';
import { 
  Settings, 
  Smartphone, 
  Download, 
  CheckCircle2, 
  Wifi, 
  WifiOff, 
  RotateCw, 
  Layers, 
  Globe, 
  Moon, 
  Sun,
  ExternalLink,
  ShieldCheck,
  FileText,
  HelpCircle,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { useDirection } from '../../context/DirectionContext';
import { useModals } from '../../context/ModalsContext';
import { usePWA } from '../../pwa/PWAContext';
import { PWAInstallButton } from '../../pwa/PWAInstallButton';

export function SettingsView() {
  const { isArabic, lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { dir, toggleDir } = useDirection();
  const { openModal } = useModals();
  const { isInstalled, isOnline, isInstallable, isIOS, setShowIOSGuide, install } = usePWA();
  const [cacheCleared, setCacheCleared] = useState(false);

  const handleClearCache = async () => {
    if ('caches' in window) {
      try {
        const keys = await caches.keys();
        await Promise.all(keys.map(k => caches.delete(k)));
        setCacheCleared(true);
        setTimeout(() => {
          window.location.reload();
        }, 1200);
      } catch (err) {
        console.error('Error clearing cache:', err);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <Settings className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-foreground">
            {isArabic ? 'الإعدادات وتجربة التطبيق' : 'Settings & Application Experience'}
          </h1>
          <p className="text-xs text-muted-foreground">
            {isArabic ? 'تخصيص المظهر، تفضيلات اللغة، وحالة تطبيق الويب التقدمي (PWA)' : 'Manage appearance, language, and Progressive Web App status'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* PWA & Mobile Installation Card */}
        <div className="bg-card border border-border/80 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Smartphone className="w-4 h-4" />
              </div>
              <h2 className="text-sm font-bold text-foreground">
                {isArabic ? 'تطبيق الويب المستقل (PWA)' : 'Progressive Web App (PWA)'}
              </h2>
            </div>
            {isInstalled ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <CheckCircle2 className="w-3 h-3" />
                {isArabic ? 'مثبّت كـ Standalone' : 'Installed Standalone'}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20">
                <Sparkles className="w-3 h-3" />
                {isArabic ? 'جاهز للتثبيت' : 'Installable'}
              </span>
            )}
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed">
            {isArabic
              ? 'يمكنك تثبيت المنصة مباشرة على شاشة هاتفك الرئيسية كـ Standalone App للوصول الفوري، تجربة ملء الشاشة، والعمل دون اتصال.'
              : 'Install the platform directly to your mobile Home Screen as a Standalone App for instant access and offline capability.'}
          </p>

          <div className="p-3.5 rounded-xl bg-muted/40 border border-border/60 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">{isArabic ? 'وضع التشغيل الحالي:' : 'Current Display Mode:'}</span>
              <span className="font-semibold text-foreground">
                {isInstalled ? (isArabic ? 'تطبيق مستقل (Standalone)' : 'Standalone App') : (isArabic ? 'متصفح ويب (Browser Tab)' : 'Browser Tab')}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">{isArabic ? 'حالة الشبكة:' : 'Network Status:'}</span>
              <span className={`font-semibold flex items-center gap-1 ${isOnline ? 'text-emerald-500' : 'text-amber-500'}`}>
                {isOnline ? <Wifi className="w-3.5 h-3.5" /> : <WifiOff className="w-3.5 h-3.5" />}
                {isOnline ? (isArabic ? 'متصل بالإنترنت' : 'Online') : (isArabic ? 'دون اتصال (Offline)' : 'Offline')}
              </span>
            </div>
          </div>

          {!isInstalled && (
            <div>
              <PWAInstallButton variant="full" />
            </div>
          )}

          {isInstalled && (
            <div className="flex items-center gap-2 text-xs text-emerald-500 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{isArabic ? 'التطبيق يعمل بكفاءة كـ Standalone App مع تمكين الكاش والوصول السريع.' : 'Running in optimized standalone mode with cache enabled.'}</span>
            </div>
          )}
        </div>

        {/* Preferences & Appearance Card */}
        <div className="bg-card border border-border/80 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
              <Layers className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-bold text-foreground">
              {isArabic ? 'المظهر والتفضيلات' : 'Appearance & Preferences'}
            </h2>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-muted/40 border border-border/60">
              <div>
                <span className="text-xs font-semibold text-foreground block">{isArabic ? 'المظهر' : 'Theme'}</span>
                <span className="text-[11px] text-muted-foreground">{theme === 'dark' ? (isArabic ? 'الوضع الليلي' : 'Dark Mode') : (isArabic ? 'الوضع النهاري' : 'Light Mode')}</span>
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card hover:bg-accent border border-border text-xs font-semibold text-foreground transition cursor-pointer"
              >
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-blue-500" />}
                <span>{theme === 'dark' ? (isArabic ? 'نهاري' : 'Light') : (isArabic ? 'ليلي' : 'Dark')}</span>
              </button>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-muted/40 border border-border/60">
              <div>
                <span className="text-xs font-semibold text-foreground block">{isArabic ? 'لغة الواجهة' : 'Interface Language'}</span>
                <span className="text-[11px] text-muted-foreground">{lang === 'ar' ? 'العربية (Arabic)' : 'English'}</span>
              </div>
              <button
                type="button"
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card hover:bg-accent border border-border text-xs font-semibold text-foreground transition cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-indigo-500" />
                <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
              </button>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-muted/40 border border-border/60">
              <div>
                <span className="text-xs font-semibold text-foreground block">{isArabic ? 'اتجاه النص' : 'Text Direction'}</span>
                <span className="text-[11px] text-muted-foreground">{dir.toUpperCase()}</span>
              </div>
              <button
                type="button"
                onClick={toggleDir}
                className="px-3 py-1.5 rounded-lg bg-card hover:bg-accent border border-border text-xs font-semibold text-foreground transition cursor-pointer"
              >
                {dir === 'rtl' ? 'LTR' : 'RTL'}
              </button>
            </div>
          </div>
        </div>

        {/* Performance & Cache Management Card */}
        <div className="bg-card border border-border/80 rounded-2xl p-5 shadow-sm space-y-4 md:col-span-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-foreground">
                  {isArabic ? 'إدارة التخزين المؤقت والتحديثات السحابية' : 'Service Worker & Cache Management'}
                </h2>
                <p className="text-xs text-muted-foreground">
                  {isArabic ? 'يتم حفظ الأوامر والملفات الأساسية في التخزين المؤقت للعمل فائق السرعة ودون اتصال.' : 'Core application shell is precached for offline resilience and fast cold-starts.'}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleClearCache}
              disabled={cacheCleared}
              className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl border border-border hover:bg-destructive/10 hover:border-destructive/30 hover:text-destructive text-xs font-semibold text-muted-foreground transition cursor-pointer disabled:opacity-50"
            >
              <RotateCw className={`w-3.5 h-3.5 ${cacheCleared ? 'animate-spin' : ''}`} />
              <span>{cacheCleared ? (isArabic ? 'تم التحديث!' : 'Updated!') : (isArabic ? 'تحديث الكاش وإعادة التشغيل' : 'Refresh Cache')}</span>
            </button>
          </div>
        </div>

        {/* Quick Popups & Information Guides */}
        <div className="bg-card border border-border/80 rounded-2xl p-5 shadow-sm space-y-4 md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-foreground">
                {isArabic ? 'الشاشات المنبثقة والمعلومات القانونية' : 'Information, Privacy & Guidelines'}
              </h2>
              <p className="text-xs text-muted-foreground">
                {isArabic ? 'الوصول السريع لسياسات الخصوصية، شروط الاستخدام، والأسئلة الشائعة' : 'Quick access to privacy policy, usage terms, and comprehensive FAQs'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Privacy Policy */}
            <button
              type="button"
              onClick={() => openModal('privacy')}
              className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-background hover:bg-accent/60 transition-colors text-start cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-foreground group-hover:text-primary transition-colors truncate">
                    {isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}
                  </div>
                  <div className="text-[10px] text-muted-foreground truncate">
                    {isArabic ? 'حماية البيانات والأمان' : 'Data protection & security'}
                  </div>
                </div>
              </div>
              <div className="text-muted-foreground shrink-0 ms-1">
                {isArabic ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </div>
            </button>

            {/* Terms of Use */}
            <button
              type="button"
              onClick={() => openModal('terms')}
              className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-background hover:bg-accent/60 transition-colors text-start cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-foreground group-hover:text-primary transition-colors truncate">
                    {isArabic ? 'شروط الاستخدام' : 'Terms of Use'}
                  </div>
                  <div className="text-[10px] text-muted-foreground truncate">
                    {isArabic ? 'حقوق وإخلاء المسؤولية' : 'Rights & disclaimers'}
                  </div>
                </div>
              </div>
              <div className="text-muted-foreground shrink-0 ms-1">
                {isArabic ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </div>
            </button>

            {/* FAQ */}
            <button
              type="button"
              onClick={() => openModal('faq')}
              className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-background hover:bg-accent/60 transition-colors text-start cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-foreground group-hover:text-primary transition-colors truncate">
                    {isArabic ? 'الأسئلة الشائعة' : 'FAQs & Guide'}
                  </div>
                  <div className="text-[10px] text-muted-foreground truncate">
                    {isArabic ? 'إجابات ودليل المنصة' : 'Answers & quick tips'}
                  </div>
                </div>
              </div>
              <div className="text-muted-foreground shrink-0 ms-1">
                {isArabic ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
