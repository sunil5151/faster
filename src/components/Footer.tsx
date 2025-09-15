import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-medium mb-4">Alex Jordan</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Product Designer crafting digital experiences that are intuitive, 
              engaging, and meaningful. Let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 bg-gray-800 text-gray-400 rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                <Github size={18} />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 bg-gray-800 text-gray-400 rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 bg-gray-800 text-gray-400 rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={scrollToTop} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>UX/UI Design</li>
              <li>Product Design</li>
              <li>Design Systems</li>
              <li>User Research</li>
              <li>Prototyping</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 flex items-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> by Alex Jordan
          </p>
          <p className="text-gray-400 mt-4 md:mt-0">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;