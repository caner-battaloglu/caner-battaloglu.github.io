import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../data/content';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gray-50 dark:bg-gray-950 py-20 px-4"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-0 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-0 w-72 h-72 bg-orange-300 dark:bg-orange-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 text-lg">
            {t('greeting', 'hero')}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            {content.hero.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
            {t('title', 'hero')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {t('subtitle', 'hero')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors w-full sm:w-auto font-medium"
            >
              {t('cta', 'hero')}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors w-full sm:w-auto font-medium"
            >
              {t('contact', 'hero')}
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDown className="text-gray-400 dark:text-gray-600" size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;