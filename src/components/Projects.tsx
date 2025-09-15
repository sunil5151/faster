import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import EcommerceProject from './projects/EcommerceProject';
import FintechProject from './projects/FintechProject';
import DynamicLeaderboardProject from './projects/leaderboard-project';
import PaymentDashboardProject from './projects/payment-dashboard-project';
import SaasProject from './projects/SaasProject';
import KanbanBoardProject from './projects/kanban-project';
import medical from '../images/medical1.jpeg';
import medical1 from '../images/medical2.jpeg';
import paymentDashboard from '../images/payment-dashboard.png';
import ResuLensProject from './projects/resumelens_project';
//github:'#'
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
{
    id: 'medical-portal',
    title: "SecureMed Portal - Healthcare Management System",
    description: "A comprehensive healthcare management platform revolutionizing patient care through secure data management, real-time communication, and intelligent appointment scheduling. Features HIPAA-compliant security and seamless doctor-patient interactions.",
    image: medical,
    tags: ["Healthcare", "HIPAA Compliant", "Real-time Chat", "Patient Management"],
    link: `${import.meta.env.VITE_BASE_URL}/medical`,
    github: "https://github.com/sunil5151/Biotron6"
  },
  {
    id: 'leaderboard-portal',
    title: "SecureMed Portal - Healthcare Management System",
    description: "Leader Board Management System ",
    image: medical,
    tags: ["Real Time Update ", "Leader Board Management"],
    link: `${import.meta.env.VITE_BASE_URL}/leaderboard`,
    github: "https://github.com/sunil5151/LeaderBoard"
  },
  {
    id: 'Kanban-Board-portal',
    title: "Kanban Board Portal - Kanban Management System",
    description: "A comprehensive Kanban Board management platform ",
    image: medical,
    tags: [ "HIPAA Compliant", "Real-time Update", "Kanban Management"],
    link: `${import.meta.env.VITE_BASE_URL}/kanban`,
    github: "https://github.com/sunil5151/Kanban"
  },
  {
    id: 'resumelens-ai-screening',
    title: "ResuLens - AI-Powered Resume Screening System",
    description: "Revolutionary automated resume screening platform leveraging cutting-edge AI, NLP, and semantic analysis to transform recruitment processes. Features 92%+ matching accuracy, bias reduction, and intelligent candidate ranking with real-time processing.",
    image: medical, // Replace with your actual ResuLens screenshot
    tags: ["AI/ML", "NLP Processing", "Semantic Analysis", "Bias Reduction", "Redis Caching", "FastAPI"],
    link: `${import.meta.env.VITE_BASE_URL}/resumelens`,
    github: "https://github.com/yourusername/resumelens" // Replace with your actual GitHub repo
  },
    // {
    //   id: 'fintech',
    //   title: "FinTech Mobile App",
    //   description: "Designed a comprehensive mobile banking app with focus on security, accessibility, and user-friendly financial management features.",
    //   image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU3NTg1MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    //   tags: ["Mobile Design", "FinTech", "User Research"],
    //   component: FintechProject
    // },
    {
      id: 'saas',
      title: "Payment Dashboard Management System",
      description: "Created an intuitive dashboard for a project management SaaS tool, emphasizing data visualization and workflow optimization.",
      image: medical1,
      tags: ["Dashboard Design", "SaaS", "Data Visualization"],
      link: `${import.meta.env.VITE_BASE_URL}/payment-dashboard`,
      github: "https://github.com/sunil5151/Biotron6"
    }
  ];

  // If a project is selected, render its component
  if (selectedProject) {
    const project = projects.find(p => p.id === selectedProject);
    if (project && project.component) {
      const ProjectComponent = project.component;
      return <ProjectComponent onBack={() => setSelectedProject(null)} />;
    }
  }

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
                  {project.link ? (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-black hover:text-gray-600 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      View Project
                    </a>
                  ) : (
                    <button 
                      onClick={() => setSelectedProject(project.id)}
                      className="inline-flex items-center text-black hover:text-gray-600 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      View Project
                    </button>
                  )}
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github size={18} className="mr-2" />
                      Code
                    </a>
                  )}
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