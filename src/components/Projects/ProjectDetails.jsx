import { X, Github, Figma } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export const ProjectDetails = ({ project }) => {
  const { setActiveProject } = usePortfolio();

  return (
    <div className="space-y-6">
      {/* Header with close button */}
      <div className="flex justify-between items-center">
        <h2 className="font-minecraft text-3xl">{project.title}</h2>
        <button
          onClick={() => setActiveProject(null)}
          className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors"
          aria-label="Close project details"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Subtitle */}
      <h3 className="font-minecraft text-xl text-gray-600 dark:text-gray-400">
        {project.subtitle}
      </h3>

      {/* Project details */}
      <div className="space-y-4">
        <p className="font-nunito">{project.description}</p>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-minecraft text-sm mb-1">Date</h4>
            <p className="font-nunito">{project.date}</p>
          </div>
          <div>
            <h4 className="font-minecraft text-sm mb-1">Role</h4>
            <p className="font-nunito">{project.role}</p>
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="font-minecraft text-sm mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4">
          {project.figmaLink && (
            <a
              href={project.figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-minecraft hover:opacity-80 transition-opacity"
            >
              <Figma className="w-5 h-5" />
              Figma
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-minecraft hover:opacity-80 transition-opacity"
            >
              <Github className="w-5 h-5" />
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
};