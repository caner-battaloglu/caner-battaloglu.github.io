import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 text-sm rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={`Switch to ${language === 'en' ? 'Turkish' : 'English'}`}
    >
      {language === 'en' ? 'TR' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;