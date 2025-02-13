import { ThemeProvider } from './context/ThemeContext';
import { PortfolioProvider } from './context/PortfolioContext';
import { LeftPanel } from './components/Layout/LeftPanel';
import { RightPanel } from './components/Layout/RightPanel';

function App() {
  return (
    <ThemeProvider>
      <PortfolioProvider>
        <div className="min-h-screen bg-portfolio-light dark:bg-portfolio-dark transition-colors duration-300">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <LeftPanel />
              <RightPanel />
      
            </div>
          </div>
        </div>
      </PortfolioProvider>
    </ThemeProvider>
  );
}

export default App;