import { Github, Linkedin } from 'lucide-react';
import { Navbar } from './Navbar';
import { ProjectDetails } from '../Projects/ProjectDetails';
import { usePortfolio } from '@/context/PortfolioContext';

export const LeftPanel = () => {
  const { activeProject } = usePortfolio();

  return (
    <div className="w-full lg:w-1/2 space-y-8">
      <Navbar />
      
      {activeProject ? (
        <ProjectDetails project={activeProject} />
      ) : (
        <>
          <div className="space-y-6">
            <h1 className="font-minecraft text-4xl lg:text-6xl">
              KANAR ABDELGHANI
            </h1>
            <p className="font-nunito text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla vitae elit libero, a pharetra augue.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-minecraft hover:opacity-80 transition-opacity"
            >
              <Github className="w-5 h-5" />
              Github
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-minecraft hover:opacity-80 transition-opacity"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </>
      )}
    </div>
  );
};