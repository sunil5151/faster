import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-medium">Alex Jordan</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('home')} className="hover:text-gray-600 px-3 py-2 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-gray-600 px-3 py-2 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-gray-600 px-3 py-2 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-gray-600 px-3 py-2 transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-gray-600 px-3 py-2 transition-colors">
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('home')} className="block px-3 py-2 w-full text-left hover:bg-gray-100 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block px-3 py-2 w-full text-left hover:bg-gray-100 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 w-full text-left hover:bg-gray-100 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="block px-3 py-2 w-full text-left hover:bg-gray-100 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 w-full text-left hover:bg-gray-100 transition-colors">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;