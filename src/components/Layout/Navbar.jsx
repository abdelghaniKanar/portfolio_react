import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { usePortfolio, sections } from '@/context/PortfolioContext';

export const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { activeSection, setActiveSection } = usePortfolio();

  return (
    <nav className="flex justify-between items-center mb-8">
      <div className="flex gap-6">
        {Object.values(sections).map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`font-minecraft uppercase transition-colors
              ${activeSection === section
                ? 'text-black dark:text-portfolio-light'
                : 'text-gray-600 dark:text-gray-400'
              }`}
          >
            {section}
          </button>
        ))}
      </div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5 text-portfolio-light" />
        ) : (
          <Moon className="w-5 h-5 text-portfolio-dark" />
        )}
      </button>
    </nav>
  );
};