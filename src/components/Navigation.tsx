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
      scrolled ? 'glass-card shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              ✨ Sunil Sonu
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-purple-200 px-3 py-2 transition-all duration-300 hover:scale-105">
                🏠 Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-purple-200 px-3 py-2 transition-all duration-300 hover:scale-105">
                👨‍💻 About
              </button>
              <button onClick={() => scrollToSection('featured-work')} className="text-white hover:text-purple-200 px-3 py-2 transition-all duration-300 hover:scale-105">
                ✨ Featured
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-white hover:text-purple-200 px-3 py-2 transition-all duration-300 hover:scale-105">
                🎨 Projects
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-white hover:text-purple-200 px-3 py-2 transition-all duration-300 hover:scale-105">
                🚀 Skills
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-purple-200 px-3 py-2 transition-all duration-300 hover:scale-105">
                📧 Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md glass-button text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-card border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('home')} className="block px-3 py-2 w-full text-left text-white hover:bg-white/20 transition-all duration-300 rounded-lg">
              🏠 Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block px-3 py-2 w-full text-left text-white hover:bg-white/20 transition-all duration-300 rounded-lg">
              👨‍💻 About
            </button>
            <button onClick={() => scrollToSection('featured-work')} className="block px-3 py-2 w-full text-left text-white hover:bg-white/20 transition-all duration-300 rounded-lg">
              ✨ Featured
            </button>
            <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 w-full text-left text-white hover:bg-white/20 transition-all duration-300 rounded-lg">
              🎨 Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="block px-3 py-2 w-full text-left text-white hover:bg-white/20 transition-all duration-300 rounded-lg">
              🚀 Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 w-full text-left text-white hover:bg-white/20 transition-all duration-300 rounded-lg">
              📧 Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;