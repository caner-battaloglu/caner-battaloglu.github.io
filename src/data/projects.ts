import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: {
      en: 'A full-featured e-commerce platform built with React and Next.js. Includes product catalog, shopping cart, user authentication, and payment processing.',
      tr: 'React ve Next.js ile oluşturulmuş tam özellikli bir e-ticaret platformu. Ürün kataloğu, alışveriş sepeti, kullanıcı kimlik doğrulaması ve ödeme işleme içerir.'
    },
    image: 'https://images.pexels.com/photos/934062/pexels-photo-934062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS'],
    demoLink: 'https://example.com/ecommerce',
    githubLink: 'https://github.com/yourusername/ecommerce',
    featured: true
  },
  {
    id: '2',
    title: 'Android Fitness App',
    description: {
      en: 'A mobile fitness application for Android devices. Features workout tracking, nutrition planning, and progress visualization.',
      tr: 'Android cihazlar için mobil fitness uygulaması. Antrenman takibi, beslenme planlaması ve ilerleme görselleştirmesi özellikleri içerir.'
    },
    image: 'https://images.pexels.com/photos/2261482/pexels-photo-2261482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Java', 'Android', 'SQLite', 'Mobile'],
    demoLink: 'https://example.com/fitness-app',
    githubLink: 'https://github.com/yourusername/fitness-app',
    featured: true
  },
  {
    id: '3',
    title: 'Task Management Dashboard',
    description: {
      en: 'A comprehensive task management system with real-time updates, team collaboration features, and detailed analytics.',
      tr: 'Gerçek zamanlı güncellemeler, ekip işbirliği özellikleri ve ayrıntılı analizler içeren kapsamlı bir görev yönetim sistemi.'
    },
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    demoLink: 'https://example.com/task-manager',
    githubLink: 'https://github.com/yourusername/task-manager'
  },
  {
    id: '4',
    title: 'Real Estate Listing Platform',
    description: {
      en: 'A platform for real estate listings with advanced search capabilities, interactive maps, and appointment scheduling.',
      tr: 'Gelişmiş arama özellikleri, etkileşimli haritalar ve randevu planlama ile emlak listeleme platformu.'
    },
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Google Maps API'],
    demoLink: 'https://example.com/real-estate',
    githubLink: 'https://github.com/yourusername/real-estate'
  }
];