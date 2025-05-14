import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { socialLinks } from '../../data/nav';

export default function Footer() {
  const { t } = useLanguage();
  
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Github': return <Github size={20} />;
      case 'Linkedin': return <Linkedin size={20} />;
      case 'Twitter': return <Twitter size={20} />;
      case 'Mail': return <Mail size={20} />;
      default: return null;
    }
  };

  return (
    <footer className="relative py-12 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="mesh-gradient opacity-10" />
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity">
              M. Caner Battaloğlu
            </a>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transform hover:scale-110 transition-all duration-300"
                aria-label={link.platform}
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            {t('copyright', 'footer')}
          </p>
        </div>
      </div>
    </footer>
  );
}