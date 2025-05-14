import React from 'react';
import { socialLinks } from '../../data/nav';
import { useLanguage } from '../../context/LanguageContext';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Github':
        return <Github size={20} />;
      case 'Linkedin':
        return <Linkedin size={20} />;
      case 'Twitter':
        return <Twitter size={20} />;
      case 'Mail':
        return <Mail size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-blue-600 dark:text-blue-400">
              YourName
            </a>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-colors"
                aria-label={link.platform}
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
          {t('copyright', 'footer')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;