import type { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: 'JavaScript', level: 5, category: 'frontend' },
  { name: 'React', level: 5, category: 'frontend' },
  { name: 'Next.js', level: 3, category: 'frontend' },
  { name: 'TypeScript', level: 4, category: 'frontend' },
  { name: 'HTML/CSS', level: 5, category: 'frontend' },
  { name: 'Tailwind CSS', level: 4, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 4, category: 'backend' },
  { name: 'Java', level: 5, category: 'backend' },
  { name: 'Python', level: 4, category: 'backend' },
  { name: 'C++', level: 4, category: 'backend' },
  { name: 'SQL', level: 4, category: 'backend' },
  { name: 'Express', level: 4, category: 'backend' },
  
  // Mobile
  { name: 'Android (Java)', level: 5, category: 'mobile' },
  { name: 'React Native', level: 3, category: 'mobile' },
  
  // Other
  { name: 'Git', level: 4, category: 'other' },
  { name: 'GraphQL', level: 3, category: 'other' },
  { name: 'Docker', level: 3, category: 'other' },
];