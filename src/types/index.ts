export interface Project {
  id: string;
  title: string;
  description: {
    en: string;
    tr: string;
  };
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'mobile' | 'other';
}

export interface NavItem {
  label: {
    en: string;
    tr: string;
  };
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export type Language = 'en' | 'tr';