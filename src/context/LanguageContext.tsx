import { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';
import type { Language } from '../types';
import { content } from '../data/content';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, section: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  function t(key: string, section: string): string {
    try {
      // Split the section path (e.g., 'contact.form' -> ['contact', 'form'])
      const sectionPath = section.split('.');
      
      // Navigate through the content object using the section path
      let currentSection: any = content;
      for (const pathPart of sectionPath) {
        if (currentSection[pathPart]) {
          currentSection = currentSection[pathPart];
        } else {
          return key;
        }
      }

      // Split the key path (e.g., 'name.label' -> ['name', 'label'])
      const keyPath = key.split('.');
      
      // Navigate through the section using the key path
      let currentValue: any = currentSection;
      for (const pathPart of keyPath) {
        if (currentValue[pathPart]) {
          currentValue = currentValue[pathPart];
        } else {
          return key;
        }
      }

      // Return the translation if it exists, otherwise fallback to English or the key
      if (currentValue[language]) {
        return currentValue[language];
      } else if (currentValue.en) {
        return currentValue.en;
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