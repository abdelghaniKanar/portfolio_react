import { usePortfolio } from '@/context/PortfolioContext';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    subtitle: 'Web Development',
    description: 'Lorem ipsum dolor sit amet...',
    date: '2024',
    role: 'Frontend Developer',
    technologies: ['React', 'Tailwind', 'Node.js'],
    figmaLink: 'https://figma.com',
    githubLink: 'https://github.com',
    image: '/logo-light.png'
  },
  {
    id: 2,
    title: 'Project 1',
    subtitle: 'Web Development',
    description: 'Lorem ipsum dolor sit amet...',
    date: '2024',
    role: 'Frontend Developer',
    technologies: ['React', 'Tailwind', 'Node.js'],
    figmaLink: 'https://figma.com',
    githubLink: 'https://github.com',
    image: '/logo-light.png'
  },
  {
    id: 3,
    title: 'Project 1',
    subtitle: 'Web Development',
    description: 'Lorem ipsum dolor sit amet...',
    date: '2024',
    role: 'Frontend Developer',
    technologies: ['React', 'Tailwind', 'Node.js'],
    figmaLink: 'https://figma.com',
    githubLink: 'https://github.com',
    image: '/logo-light.png'
  },
  {
    id: 4,
    title: 'Project 1',
    subtitle: 'Web Development',
    description: 'Lorem ipsum dolor sit amet...',
    date: '2024',
    role: 'Frontend Developer',
    technologies: ['React', 'Tailwind', 'Node.js'],
    figmaLink: 'https://figma.com',
    githubLink: 'https://github.com',
    image: '/logo-light.png'
  },
  {
    id: 5,
    title: 'Project 1',
    subtitle: 'Web Development',
    description: 'Lorem ipsum dolor sit amet...',
    date: '2024',
    role: 'Frontend Developer',
    technologies: ['React', 'Tailwind', 'Node.js'],
    figmaLink: 'https://figma.com',
    githubLink: 'https://github.com',
    image: '/logo-light.png'
  },
  {
    id: 6,
    title: 'Project 1',
    subtitle: 'Web Development',
    description: 'Lorem ipsum dolor sit amet...',
    date: '2024',
    role: 'Frontend Developer',
    technologies: ['React', 'Tailwind', 'Node.js'],
    figmaLink: 'https://figma.com',
    githubLink: 'https://github.com',
    image: '/logo-light.png'
  },
  {
    id: 7,
    title: 'Project 1',
    subtitle: 'Web Development',
    description: 'Lorem ipsum dolor sit amet...',
    date: '2024',
    role: 'Frontend Developer',
    technologies: ['React', 'Tailwind', 'Node.js'],
    figmaLink: 'https://figma.com',
    githubLink: 'https://github.com',
    image: '/logo-light.png'
  },
  {
    id: 8,
    title: 'Project 1',
    subtitle: 'Web Development',
    description: 'Lorem ipsum dolor sit amet...',
    date: '2024',
    role: 'Frontend Developer',
    technologies: ['React', 'Tailwind', 'Node.js'],
    figmaLink: 'https://figma.com',
    githubLink: 'https://github.com',
    image: '/logo-light.png'
  },
  {
    id: 9,
    title: 'Project 1',
    subtitle: 'Web Development',
    description: 'Lorem ipsum dolor sit amet...',
    date: '2024',
    role: 'Frontend Developer',
    technologies: ['React', 'Tailwind', 'Node.js'],
    figmaLink: 'https://figma.com',
    githubLink: 'https://github.com',
    image: '/logo-light.png'
  },
];


export const ProjectCard = ({ project, onClick, isActive }) => {
    return (
      <div
        onClick={onClick}
        className={`
          cursor-pointer rounded-lg overflow-hidden shadow-lg
          transition-all duration-300 transform
          ${isActive ? 'scale-105 opacity-100' : 'hover:scale-105 opacity-80'}
        `}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-minecraft text-lg">{project.title}</h3>
          <p className="font-nunito text-sm">{project.subtitle}</p>
        </div>
      </div>
    );
  };
  
  export const ProjectsSection = () => {
    const { activeProject, setActiveProject } = usePortfolio();
  
    return (
      <div className="h-[calc(100vh-4rem)] overflow-hidden">
        <div className="h-full overflow-y-auto custom-scrollbar pr-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setActiveProject(project)}
                isActive={activeProject?.id === project.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };