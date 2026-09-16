import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { translations } from '../i18n/translations';
import { useDirection } from './DirectionContext';

type Language = 'ar' | 'en';
type Translations = typeof translations.ar;

interface LanguageContextType {
  lang: Language;
  language: Language;
  isArabic: boolean;
  t: Translations;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { setDir } = useDirection();
  
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('ai-prompt-lib:language');
    return (saved === 'ar' || saved === 'en') ? saved : 'ar';
  });

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('ai-prompt-lib:language', newLang);
    setDir(newLang === 'ar' ? 'rtl' : 'ltr');
  }, [setDir]);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next = prev === 'ar' ? 'en' : 'ar';
      localStorage.setItem('ai-prompt-lib:language', next);
      setDir(next === 'ar' ? 'rtl' : 'ltr');
      return next;
    });
  }, [setDir]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('lang', lang);
  }, [lang]);

  const value = useMemo<LanguageContextType>(() => ({
    lang,
    language: lang,
    isArabic: lang === 'ar',
    t: translations[lang],
    toggleLang,
    setLang,
  }), [lang, toggleLang, setLang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
