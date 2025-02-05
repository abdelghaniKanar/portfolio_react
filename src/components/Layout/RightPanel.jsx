import { AboutSection } from '../Sections/AboutSection';
import { ProjectsSection } from '../Sections/ProjectsSection';
import { ContactSection } from '../Sections/ContactSection';
import { usePortfolio, sections } from '@/context/PortfolioContext';

export const RightPanel = () => {
  const { activeSection } = usePortfolio();

  return (
    <div className="w-full lg:w-1/2">
      {activeSection === sections.ABOUT && <AboutSection />}
      {activeSection === sections.PROJECTS && <ProjectsSection />}
      {activeSection === sections.CONTACT && <ContactSection />}
    </div>
  );
};