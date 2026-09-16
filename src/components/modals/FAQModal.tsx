// ==========================================================
// src/components/modals/FAQModal.tsx
// Frequently Asked Questions Popup Dialog
// ==========================================================

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, Sparkles, BookOpen, Printer, Wifi } from 'lucide-react';
import { BaseModal } from './BaseModal';
import { useLanguage } from '../../context/LanguageContext';

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FAQItem {
  id: string;
  category: string;
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'what-is-platform',
    category: 'general',
    questionAr: 'ما هو مختبر أوامر الذكاء الاصطناعي (AI Prompt Studio)؟',
    questionEn: 'What is the Interactive AI Prompt Studio?',
    answerAr: 'منصة تفاعلية متقدمة متخصصة في هندسة الأوامر وتوليد المحتوى التعليمي والأكاديمي والمهني بدقة عالية، وتتيح للمستخدمين اختبار الأوامر وتخصيص المتغيرات وإنشاء جرائد تعليمية مطبوعة وسير عمل متسلسل.',
    answerEn: 'A comprehensive platform specialized in prompt engineering, educational content generation, live testing, dynamic variable tuning, and printable lesson newspaper suites.',
    icon: Sparkles,
  },
  {
    id: 'newspaper-a4',
    category: 'education',
    questionAr: 'كيف أقوم بتحويل درس إلى جريدة مدرسية وإنفوجرافيك جاهز للطباعة A4؟',
    questionEn: 'How do I generate an A4 educational newspaper from a lesson?',
    answerAr: 'انتقل إلى قسم "المسارات الإرشادية" (Flows) واختر "باقة الجريدة المدرسية والإنفوجرافيك التعليمي". أدخل اسم الدرس والمرحلة الدراسية، وسيقوم الأمر بتوليد جريدة مهيكلة تحتوي على ملخص، حقائق، كلمات متقاطعة، ومتاهة مجهزة لتنسيق A4 بضغطة زر.',
    answerEn: 'Head to the "Guided Flows" section and select the "Educational Newspaper Suite". Enter your lesson topic and grade level, and the prompt will structure an A4-optimized newspaper complete with summaries, facts, crosswords, and mazes.',
    icon: Printer,
  },
  {
    id: 'offline-pwa',
    category: 'technical',
    questionAr: 'هل يمكن تشغيل واستخدام التطبيق بدون اتصال بالإنترنت؟',
    questionEn: 'Does the application work offline without internet?',
    answerAr: 'نعم! التطبيق مبني كـ Progressive Web App (PWA) ويقوم بتخزين واجهة التطبيق ومكتبة الأوامر والقوالب محلياً في جهازك للوصول السريع حتى في وضع عدم الاتصال.',
    answerEn: 'Yes! The app is an offline-capable Progressive Web App (PWA). All layouts, templates, and prompt libraries are cached locally for instant access anytime.',
    icon: Wifi,
  },
  {
    id: 'how-to-test',
    category: 'prompts',
    questionAr: 'كيف يمكنني اختبار وضبط الأوامر والمتغيرات في المختبر؟',
    questionEn: 'How can I test and customize prompt variables in the Playground?',
    answerAr: 'عند اختيار أي أمر من المكتبة، انقر على زر "تخصيص في المختبر". يمكنك هناك تعديل المتغيرات (مثل الجمهور، النبرة، الطول، والهدف) ومعاينة الأمر النهائي فوراً قبل نسخه أو تطبيقه.',
    answerEn: 'When viewing any prompt in the Library, click "Try in Playground". You can adjust parameters (target audience, tone, constraints, format) and see the live prompt update in real-time.',
    icon: BookOpen,
  },
  {
    id: 'export-formats',
    category: 'general',
    questionAr: 'ما هي صيغ التصدير المدعومة للأوامر وسير العمل؟',
    questionEn: 'What export formats are supported for prompts and workflows?',
    answerAr: 'تدعم المنصة تصدير الأوامر بعدة صيغ تشمل Markdown (.md) للمستندات، JSON (.json) للمطورين، وملفات System Prompts (.txt) لاستخدامها مباشرة في ChatGPT و Claude و Gemini.',
    answerEn: 'We support exporting in Markdown (.md), structured JSON (.json) for developers, and ready-to-use System Prompt (.txt) files for ChatGPT, Claude, and Gemini.',
  },
];

export function FAQModal({ isOpen, onClose }: FAQModalProps) {
  const { isArabic } = useLanguage();
  const [openIds, setOpenIds] = useState<string[]>(['what-is-platform', 'newspaper-a4']);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredItems = FAQ_ITEMS.filter((item) => {
    const q = isArabic ? item.questionAr : item.questionEn;
    const a = isArabic ? item.answerAr : item.answerEn;
    const term = searchTerm.toLowerCase().trim();
    return q.toLowerCase().includes(term) || a.toLowerCase().includes(term);
  });

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={isArabic ? 'الأسئلة الشائعة ودليل المساعدة' : 'Frequently Asked Questions & Help'}
      subtitle={isArabic ? 'إجابات شاملة لأكثر الأسئلة تكراراً حول المنصة والأوامر' : 'Comprehensive answers to common questions'}
      icon={HelpCircle}
      iconColor="bg-amber-500/10 text-amber-500"
      maxWidth="3xl"
    >
      <div className="space-y-4">
        {/* Search input */}
        <div className="relative">
          <Search className={`w-4 h-4 text-muted-foreground absolute top-1/2 -translate-y-1/2 ${isArabic ? 'end-3' : 'start-3'}`} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={isArabic ? 'ابحث في الأسئلة الشائعة...' : 'Search questions...'}
            className={`
              w-full py-2.5 rounded-xl border border-border bg-background text-sm text-foreground
              focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground
              ${isArabic ? 'pe-9 ps-4' : 'ps-9 pe-4'}
            `}
          />
        </div>

        {/* Accordion list */}
        <div className="space-y-2.5 pt-1">
          {filteredItems.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground text-xs sm:text-sm">
              {isArabic ? 'لم يتم العثور على نتائج مطابقة للبحث' : 'No matching questions found'}
            </div>
          ) : (
            filteredItems.map((item) => {
              const isOpen = openIds.includes(item.id);
              const question = isArabic ? item.questionAr : item.questionEn;
              const answer = isArabic ? item.answerAr : item.answerEn;
              const Icon = item.icon || HelpCircle;

              return (
                <div
                  key={item.id}
                  className={`
                    border rounded-xl transition-all duration-200 overflow-hidden
                    ${isOpen ? 'border-primary/40 bg-accent/20 shadow-sm' : 'border-border bg-card hover:border-border/80'}
                  `}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-4 text-start gap-3 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${isOpen ? 'bg-primary/15 text-primary' : 'bg-muted text-muted-foreground'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-foreground">
                        {question}
                      </span>
                    </div>

                    <div className="text-muted-foreground shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 animate-in fade-in duration-150">
                      {answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </BaseModal>
  );
}
