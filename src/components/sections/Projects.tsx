import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { projects } from '../../data/projects';
import type { Project } from '../../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { language, t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-500/80 text-white text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-500/80 text-white text-xs rounded-full">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description[language]}
        </p>
        <div className="flex gap-3">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              <ExternalLink size={16} />
              <span>{t('viewProject', 'projects')}</span>
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Github size={16} />
              <span>{t('viewCode', 'projects')}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const uniqueTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ).sort();

  const filteredProjects = filter
    ? projects.filter((project) => project.tags.includes(filter))
    : projects;

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t('title', 'projects')}
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {!showAll && filteredProjects.length > displayedProjects.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium"
            >
              {t('viewAll', 'projects')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;