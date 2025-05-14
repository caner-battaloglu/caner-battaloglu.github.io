import type { NavItem, SocialLink } from '../types';

export const navItems: NavItem[] = [
  {
    label: {
      en: 'Home',
      tr: 'Ana Sayfa'
    },
    href: '#home'
  },
  {
    label: {
      en: 'About',
      tr: 'Hakkımda'
    },
    href: '#about'
  },
  {
    label: {
      en: 'Skills',
      tr: 'Yetenekler'
    },
    href: '#skills'
  },
  {
    label: {
      en: 'Projects',
      tr: 'Projeler'
    },
    href: '#projects'
  },
  {
    label: {
      en: 'Contact',
      tr: 'İletişim'
    },
    href: '#contact'
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/caner-battaloglu',
    icon: 'Github'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/caner-battaloglu',
    icon: 'Linkedin'
  },

  {
    platform: 'Email',
    url: 'mailto:battalogluwebservices@gmail.com',
    icon: 'Mail'
  }
];