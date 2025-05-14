import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t('title', 'about')}
          </h2>

          <div className="prose dark:prose-invert lg:prose-lg mx-auto">
            {t('content', 'about')
              .split('\n\n')
              .map((paragraph, index) => (
                <p 
                  key={index} 
                  className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;