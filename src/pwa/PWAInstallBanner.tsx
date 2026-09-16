import React from 'react';
import { Smartphone, Download, X, Sparkles } from 'lucide-react';
import { usePWA } from './PWAContext';
import { useLanguage } from '../context/LanguageContext';

export function PWAInstallBanner() {
  const { isInstalled, isInstallable, isIOS, isBannerDismissed, install, setShowIOSGuide, dismissBanner } = usePWA();
  const { isArabic } = useLanguage();

  // Suppress if already running in standalone mode, already dismissed, or not available
  if (isInstalled || isBannerDismissed || (!isInstallable && !isIOS)) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      await install();
    } else if (isIOS) {
      setShowIOSGuide(true);
    }
  };

  return (
    <div className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:end-4 z-40 max-w-md animate-in slide-in-from-bottom-5 duration-300">
      <div className="relative bg-card/95 backdrop-blur-md border border-blue-500/30 shadow-xl rounded-2xl p-4 flex items-center gap-3.5 text-foreground overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shrink-0 shadow-md">
          <Smartphone className="w-5 h-5" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h4 className="text-xs font-bold text-foreground truncate">
              {isArabic ? 'تثبيت التطبيق على هاتفك' : 'Install on your Phone'}
            </h4>
            <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
          </div>
          <p className="text-[11px] text-muted-foreground line-clamp-1">
            {isArabic ? 'تجربة سريعة تعمل دون اتصال ومن الشاشة الرئيسية' : 'Fast standalone experience with offline access'}
          </p>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={handleInstallClick}
            className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-xl text-xs font-bold shadow-sm transition cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isArabic ? 'تثبيت' : 'Install'}</span>
          </button>

          <button
            type="button"
            onClick={dismissBanner}
            className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded-xl transition cursor-pointer"
            aria-label={isArabic ? 'إغلاق' : 'Dismiss'}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
