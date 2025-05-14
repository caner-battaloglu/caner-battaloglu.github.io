import { useLanguage } from '../../context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
      className="px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
      aria-label={`Switch to ${language === 'en' ? 'Turkish' : 'English'}`}
    >
      {language === 'en' ? 'TR' : 'EN'}
    </button>
  );
}