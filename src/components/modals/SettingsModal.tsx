// ==========================================================
// src/components/modals/SettingsModal.tsx
// Application Settings Popup Dialog
// ==========================================================

import React, { useState } from 'react';
import { 
  Settings, 
  Smartphone, 
  CheckCircle2, 
  Wifi, 
  WifiOff, 
  RotateCw, 
  Layers, 
  Globe, 
  Moon, 
  Sun,
  AlignLeft,
  AlignRight,
  ShieldCheck,
  Trash2
} from 'lucide-react';
import { BaseModal } from './BaseModal';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { useDirection } from '../../context/DirectionContext';
import { usePWA } from '../../pwa/PWAContext';
import { PWAInstallButton } from '../../pwa/PWAInstallButton';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const { isArabic, lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { dir, toggleDir } = useDirection();
  const { isInstalled, isOnline, isInstallable } = usePWA();
  const [cacheCleared, setCacheCleared] = useState(false);

  const handleClearCache = async () => {
    if ('caches' in window) {
      try {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
        setCacheCleared(true);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (err) {
        console.error('Error clearing cache:', err);
      }
    }
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={isArabic ? 'إعدادات وتفضيلات التطبيق' : 'App Settings & Preferences'}
      subtitle={isArabic ? 'تخصيص المظهر، اللغة، والتشغيل دون اتصال' : 'Customize appearance, language, and offline mode'}
      icon={Settings}
      iconColor="bg-blue-500/10 text-blue-500"
      maxWidth="2xl"
    >
      <div className="space-y-5">
        {/* Appearance & Interface */}
        <div className="bg-card border border-border/70 rounded-xl p-4 space-y-3">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
            {isArabic ? 'المظهر واللغة' : 'Appearance & Language'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center justify-between p-3 rounded-xl border border-border bg-background hover:bg-accent/60 transition-colors text-start cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                  {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">{isArabic ? 'المظهر' : 'Theme'}</div>
                  <div className="text-[11px] text-muted-foreground">
                    {theme === 'dark' ? (isArabic ? 'الوضع الداكن' : 'Dark Mode') : (isArabic ? 'الوضع الفاتح' : 'Light Mode')}
                  </div>
                </div>
              </div>
            </button>

            {/* Language Toggle */}
            <button
              type="button"
              onClick={toggleLang}
              className="flex items-center justify-between p-3 rounded-xl border border-border bg-background hover:bg-accent/60 transition-colors text-start cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">{isArabic ? 'اللغة' : 'Language'}</div>
                  <div className="text-[11px] text-muted-foreground">
                    {lang === 'ar' ? 'العربية (AR)' : 'English (EN)'}
                  </div>
                </div>
              </div>
            </button>

            {/* Direction Toggle */}
            <button
              type="button"
              onClick={toggleDir}
              className="flex items-center justify-between p-3 rounded-xl border border-border bg-background hover:bg-accent/60 transition-colors text-start cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                  {dir === 'rtl' ? <AlignRight className="w-4 h-4" /> : <AlignLeft className="w-4 h-4" />}
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">{isArabic ? 'الاتجاه' : 'Direction'}</div>
                  <div className="text-[11px] text-muted-foreground">
                    {dir === 'rtl' ? 'RTL (من اليمين)' : 'LTR (من اليسار)'}
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* PWA & Offline Status */}
        <div className="bg-card border border-border/70 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
              {isArabic ? 'حالة تطبيق الويب (PWA & Offline)' : 'PWA & Offline Experience'}
            </h3>
            {isOnline ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-500">
                <Wifi className="w-3.5 h-3.5" />
                {isArabic ? 'متصل بالإنترنت' : 'Online'}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-500">
                <WifiOff className="w-3.5 h-3.5" />
                {isArabic ? 'يعمل دون إنترنت' : 'Offline Mode'}
              </span>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 rounded-xl bg-background border border-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-foreground">
                  {isInstalled 
                    ? (isArabic ? 'التطبيق مثبت بنجاح' : 'App Installed') 
                    : (isArabic ? 'تثبيت على الشاشة الرئيسية' : 'Install on Home Screen')}
                </div>
                <div className="text-[11px] text-muted-foreground">
                  {isInstalled 
                    ? (isArabic ? 'يعمل كتطبيق أصلي ومستقل' : 'Runs standalone with fast caching')
                    : (isArabic ? 'تشغيل سريع ومباشر بلمسة واحدة' : 'Quick launch & offline access')}
                </div>
              </div>
            </div>

            {!isInstalled && (
              <div className="w-full sm:w-auto">
                <PWAInstallButton variant="full" />
              </div>
            )}
          </div>

          {/* Cache Management */}
          <div className="flex items-center justify-between pt-2 border-t border-border/50">
            <div className="text-[11px] text-muted-foreground">
              {isArabic ? 'تحديث وتفريغ التخزين المؤقت للتطبيق' : 'Flush application cache & reload assets'}
            </div>
            <button
              type="button"
              onClick={handleClearCache}
              disabled={cacheCleared}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border bg-background hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30 transition-colors cursor-pointer disabled:opacity-50"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>{cacheCleared ? (isArabic ? 'تم التفريغ ✓' : 'Cleared ✓') : (isArabic ? 'تفريغ الكاش' : 'Clear Cache')}</span>
            </button>
          </div>
        </div>

        {/* Security & Data Integrity */}
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300">
          <ShieldCheck className="w-5 h-5 shrink-0 text-emerald-500" />
          <div className="text-xs">
            {isArabic 
              ? 'تطبيقك محمي ومشفر بالكامل محلياً (Client-Side) دون أي تتبع خارجي غير مصرح به.'
              : 'Your data is secured client-side with zero unauthorized third-party tracking.'}
          </div>
        </div>
      </div>
    </BaseModal>
  );
}
