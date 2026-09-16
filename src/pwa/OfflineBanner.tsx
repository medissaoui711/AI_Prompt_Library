import React from 'react';
import { WifiOff } from 'lucide-react';
import { usePWA } from './PWAContext';
import { useLanguage } from '../context/LanguageContext';

export function OfflineBanner() {
  const { isOnline } = usePWA();
  const { isArabic } = useLanguage();

  if (isOnline) {
    return null;
  }

  return (
    <div className="fixed top-2 inset-x-4 sm:inset-x-auto sm:start-1/2 sm:-translate-x-1/2 z-50 animate-in slide-in-from-top-4 duration-300">
      <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-medium text-xs shadow-lg border border-amber-600/30 backdrop-blur-sm">
        <WifiOff className="w-4 h-4 shrink-0 animate-pulse" />
        <span>
          {isArabic
            ? 'أنت تعمل حالياً دون اتصال بالإنترنت — المحتوى المحفوظ متاح للاستخدام.'
            : 'You are currently offline — Cached prompt tools remain available.'}
        </span>
      </div>
    </div>
  );
}
