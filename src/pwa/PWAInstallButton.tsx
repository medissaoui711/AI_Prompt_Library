import React from 'react';
import { Download, Smartphone, Share2, PlusSquare, X, CheckCircle2 } from 'lucide-react';
import { usePWA } from './PWAContext';
import { useLanguage } from '../context/LanguageContext';

interface PWAInstallButtonProps {
  variant?: 'compact' | 'full' | 'subtle';
  className?: string;
}

export function PWAInstallButton({ variant = 'compact', className = '' }: PWAInstallButtonProps) {
  const { isInstalled, isInstallable, isIOS, install, showIOSGuide, setShowIOSGuide } = usePWA();
  const { isArabic } = useLanguage();

  // If already installed and running standalone, do not show install CTA
  if (isInstalled) {
    return null;
  }

  // If neither installable directly nor iOS, hide
  if (!isInstallable && !isIOS) {
    return null;
  }

  const handleClick = async () => {
    if (isInstallable) {
      await install();
    } else if (isIOS) {
      setShowIOSGuide(true);
    }
  };

  const label = isArabic ? 'تثبيت التطبيق' : 'Install App';
  const subtitle = isArabic ? 'إضافة للشاشة الرئيسية' : 'Add to Home Screen';

  return (
    <>
      {variant === 'compact' && (
        <button
          type="button"
          onClick={handleClick}
          className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer ${className}`}
          title={subtitle}
          aria-label={label}
        >
          <Download className="w-3.5 h-3.5 shrink-0 group-hover:animate-bounce" />
          <span className="truncate">{label}</span>
        </button>
      )}

      {variant === 'subtle' && (
        <button
          type="button"
          onClick={handleClick}
          className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg text-xs font-medium text-foreground hover:bg-accent border border-border/80 transition-colors cursor-pointer ${className}`}
          aria-label={label}
        >
          <Smartphone className="w-4 h-4 text-blue-500 shrink-0" />
          <div className="flex flex-col text-start">
            <span className="font-semibold">{label}</span>
            <span className="text-[10px] text-muted-foreground">{subtitle}</span>
          </div>
        </button>
      )}

      {variant === 'full' && (
        <button
          type="button"
          onClick={handleClick}
          className={`flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition active:scale-[0.98] cursor-pointer ${className}`}
        >
          <Smartphone className="w-4 h-4 shrink-0" />
          <span>{label}</span>
        </button>
      )}

      {/* iOS Safari Step-by-Step Installation Modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div 
            className="w-full max-w-sm bg-card border border-border rounded-2xl p-5 shadow-2xl space-y-4 animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ios-install-title"
          >
            <div className="flex items-center justify-between pb-2 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 id="ios-install-title" className="text-sm font-bold text-foreground">
                  {isArabic ? 'تثبيت التطبيق على iPhone / iPad' : 'Install on iPhone / iPad'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition"
                aria-label={isArabic ? 'إغلاق' : 'Close'}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-muted-foreground">
              <p className="text-foreground font-medium">
                {isArabic
                  ? 'اتبع الخطوات البسيطة التالية لإضافة التطبيق إلى شاشتك الرئيسية:'
                  : 'Follow these simple steps in Safari to add to your Home Screen:'}
              </p>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-muted/50 border border-border/50">
                  <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-semibold flex items-center gap-1.5">
                      {isArabic ? 'اضغط على زر المشاركة' : 'Tap the Share button'}
                      <Share2 className="w-3.5 h-3.5 text-blue-500 inline" />
                    </p>
                    <p className="text-[11px] mt-0.5">
                      {isArabic ? 'في شريط أدوات سفاري السفلي' : 'In the bottom Safari toolbar'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-muted/50 border border-border/50">
                  <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-semibold flex items-center gap-1.5">
                      {isArabic ? 'إضافة إلى الشاشة الرئيسية' : 'Add to Home Screen'}
                      <PlusSquare className="w-3.5 h-3.5 text-blue-500 inline" />
                    </p>
                    <p className="text-[11px] mt-0.5">
                      {isArabic ? 'مرر للأسفل واختر "إضافة إلى الشاشة الرئيسية"' : 'Scroll down and tap "Add to Home Screen"'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-muted/50 border border-border/50">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-semibold">
                      {isArabic ? 'اضغط "إضافة" (Add)' : 'Tap "Add" in top right'}
                    </p>
                    <p className="text-[11px] mt-0.5">
                      {isArabic ? 'سيظهر التطبيق كأيقونة مستقلة سريعة في شاشتك' : 'The app will launch in standalone mode like a native app'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowIOSGuide(false)}
              className="w-full py-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground text-xs font-semibold transition cursor-pointer"
            >
              {isArabic ? 'فهمت، حسناً' : 'Got it'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
