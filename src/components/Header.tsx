import React from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  activeSection,
  scrollToSection,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const navItems = ['Home','About', 'Projects', 'Skills', 'Blog', 'Resume'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-md">
              DevOps Engineer
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`group text-lg font-semibold transition-all duration-300 drop-shadow-md ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="flex items-center">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                    {item}
                  </span>
                </button>
              ))}
            </div>
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left text-lg font-semibold group transition-all duration-300 drop-shadow-md ${
                  activeSection === item.toLowerCase()
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-white hover:translate-x-2'
                }`}
              >
                <span className="flex items-center">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                  {item}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
