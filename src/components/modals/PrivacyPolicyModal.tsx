// ==========================================================
// src/components/modals/PrivacyPolicyModal.tsx
// Privacy Policy Popup Dialog
// ==========================================================

import React from 'react';
import { ShieldCheck, Database, Lock, EyeOff, RefreshCw, Server } from 'lucide-react';
import { BaseModal } from './BaseModal';
import { useLanguage } from '../../context/LanguageContext';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  const { isArabic } = useLanguage();

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={isArabic ? 'سياسة الخصوصية وحماية البيانات' : 'Privacy Policy & Data Protection'}
      subtitle={isArabic ? 'التزامنا الكامل بحماية خصوصيتك وسلامة بياناتك' : 'Our strict commitment to your privacy and security'}
      icon={ShieldCheck}
      iconColor="bg-emerald-500/10 text-emerald-500"
      maxWidth="3xl"
    >
      <div className="space-y-6 text-sm text-foreground/90 leading-relaxed">
        {/* Summary banner */}
        <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-start gap-3">
          <Lock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-foreground/80">
            {isArabic
              ? 'نحن نؤمن بأن خصوصيتك حق أصيل. تم تصميم مختبر أوامر الذكاء الاصطناعي ليعمل محلياً في متصفحك دون تتبع أو جمع أو بيع لأي بيانات شخصية.'
              : 'We believe privacy is a fundamental right. Interactive AI Prompt Studio operates client-side in your browser without collecting, tracking, or selling personal data.'}
          </p>
        </div>

        {/* Section 1: Local Storage */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-foreground font-bold">
            <Database className="w-4 h-4 text-blue-500" />
            <h4>{isArabic ? '1. التخزين المحلي (Local Storage & Cache)' : '1. Local Storage & Client Cache'}</h4>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {isArabic
              ? 'يتم تخزين تفضيلاتك (مثل المظهر الداكن/الفاتح، اللغة المفضلة، حالة القائمة الجانبية، والأوامر المحفوظة في المفضلة) محلياً على جهازك فقط عبر متصفحك (LocalStorage و Cache Storage). لا يتم إرسال هذه البيانات إلى خوادم خارجية.'
              : 'Your application preferences (such as dark/light theme, language selection, sidebar collapse state, and favorite prompts) are stored exclusively on your device using browser LocalStorage and Cache Storage. None of this data is transmitted to external tracking servers.'}
          </p>
        </div>

        {/* Section 2: Prompts and AI Interactions */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-foreground font-bold">
            <EyeOff className="w-4 h-4 text-purple-500" />
            <h4>{isArabic ? '2. التعامل مع الأوامر والمتغيرات' : '2. Prompts & Variable Handling'}</h4>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {isArabic
              ? 'الأوامر، والنصوص، والبيانات التعليمية التي تقوم بإدخالها وتخصيصها في مولد الأوامر والمختبر يتم معالجتها داخل جهازك مباشرة. نحن لا نقوم بتسجيل أو تخزين مدخلاتك النصية الخاصة على أي خادم مركزي.'
              : 'All prompts, parameters, and educational variables entered or customized in our generator and playground are processed locally in your browser sandbox. We never log or store your custom inputs on any central server.'}
          </p>
        </div>

        {/* Section 3: Third-Party & Analytics */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-foreground font-bold">
            <Server className="w-4 h-4 text-amber-500" />
            <h4>{isArabic ? '3. خدمات الطرف الثالث وعدم التتبع' : '3. Zero Third-Party Tracking'}</h4>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {isArabic
              ? 'المنصة خالية تماماً من أدوات التتبع الإعلاني، وملفات تعريف الارتباط الدعائية (Marketing Cookies)، ومكتبات جمع البيانات الموجهة. لا نشارك أي معلومات مع وسطاء البيانات أو الشبكات الإعلانية.'
              : 'The application contains zero advertising trackers, marketing cookies, or invasive telemetry scripts. We never share or monetize user data with data brokers or advertising networks.'}
          </p>
        </div>

        {/* Section 4: Updates */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-foreground font-bold">
            <RefreshCw className="w-4 h-4 text-emerald-500" />
            <h4>{isArabic ? '4. تحديثات سياسة الخصوصية' : '4. Policy Updates'}</h4>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {isArabic
              ? 'قد نقوم بتحديث هذه السياسة من حين لآخر لتعزيز معايير الأمان وتقديم ميزات جديدة مع الحفاظ الدائم على مبدأ الخصوصية أولاً (Privacy by Design). يُتاح تاريخ آخر تحديث دائماً في واجهة التطبيق.'
              : 'We may update this policy periodically to enhance security safeguards and introduce new features while maintaining our core Privacy-by-Design principle. The latest version is always accessible in the application interface.'}
          </p>
        </div>

        {/* Timestamp */}
        <div className="pt-2 text-[11px] text-muted-foreground text-end border-t border-border/50 font-mono">
          {isArabic ? 'آخر تحديث: سبتمبر 2026' : 'Last Updated: September 2026'}
        </div>
      </div>
    </BaseModal>
  );
}
