import { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';
import type { Language } from '../types';
import { content } from '../data/content';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, section: string) => string;
}

interface TranslatedContent {
  en: string;
  tr: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  function t(key: string, section: string): string {
    try {
      const sectionContent = content[section as keyof typeof content];
      if (sectionContent && typeof sectionContent === 'object') {
        const keyContent = sectionContent[key as keyof typeof sectionContent];
        if (keyContent && typeof keyContent === 'object' && 'en' in keyContent) {
          const translatedContent = keyContent as TranslatedContent;
          return translatedContent[language] || translatedContent.en;
        }
      }
      return key;
    } catch (error) {
      console.error('Translation error:', error);
      return key;
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}