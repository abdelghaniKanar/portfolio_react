import React, { createContext, useContext, useState } from 'react';

const PortfolioContext = createContext();

export const sections = {
  ABOUT: 'about',
  PROJECTS: 'projects',
  CONTACT: 'contact',
};

export const PortfolioProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(sections.ABOUT);
  const [activeProject, setActiveProject] = useState(null);

  return (
    <PortfolioContext.Provider 
      value={{ 
        activeSection, 
        setActiveSection, 
        activeProject, 
        setActiveProject 
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};