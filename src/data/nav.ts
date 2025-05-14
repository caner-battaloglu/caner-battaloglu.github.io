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
    url: 'https://github.com/yourusername',
    icon: 'Github'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'Linkedin'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'Twitter'
  },
  {
    platform: 'Email',
    url: 'mailto:your.email@example.com',
    icon: 'Mail'
  }
];