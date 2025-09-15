import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform Redesign",
      description: "Complete redesign of a fashion e-commerce platform, focusing on improving user experience and conversion rates. Implemented a new design system and mobile-first approach.",
      image: "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NzU4NDUzNXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["UX/UI Design", "E-commerce", "Design System"],
      link: "#",
      github: "#"
    },
    {
      title: "FinTech Mobile App",
      description: "Designed a comprehensive mobile banking app with focus on security, accessibility, and user-friendly financial management features.",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU3NTg1MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Mobile Design", "FinTech", "User Research"],
      link: "#",
      github: "#"
    },
    {
      title: "SaaS Dashboard Design",
      description: "Created an intuitive dashboard for a project management SaaS tool, emphasizing data visualization and workflow optimization.",
      image: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc1NzYyMDUyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Dashboard Design", "SaaS", "Data Visualization"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my design process and problem-solving skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-black hover:text-gray-600 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    View Project
                  </a>
                  <a 
                    href={project.github}
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github size={18} className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;