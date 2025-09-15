import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-600">Hello, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-medium text-gray-900">
                Alex Jordan
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-700">
                Product Designer
              </h2>
              <p className="text-lg text-gray-600 max-w-lg">
                I craft digital experiences that are intuitive, engaging, and meaningful. 
                Specializing in UX/UI design, design systems, and user research.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Mail className="mr-2" size={18} />
                Get in touch
              </a>
              <button 
                onClick={scrollToProjects}
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                View work
                <ArrowDown className="ml-2" size={18} />
              </button>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzYyNzgzNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Alex Jordan - Product Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;