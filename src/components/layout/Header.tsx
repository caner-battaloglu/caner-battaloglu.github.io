import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../../data/nav';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../common/LanguageSwitcher';
import ThemeToggle from '../common/ThemeToggle';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-gray-900 shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl font-bold text-blue-600 dark:text-blue-400">
            YourName
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.label[language]}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col py-2 px-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label[language]}
            </a>
          ))}
          <div className="flex items-center justify-between py-3">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;