import { useState } from 'react';
import { ArrowRight, Eye, ExternalLink, Heart, Star, Github } from 'lucide-react';

const FeaturedWork = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const featuredProjects = [
    {
      id: 1,
      title: "ResuLens - AI-Powered Resume Screening System",
      description: "Revolutionary automated resume screening platform leveraging cutting-edge AI, NLP, and semantic analysis to transform recruitment processes. Features 92%+ matching accuracy, bias reduction, and intelligent candidate ranking with real-time processing.",
      image: "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NzU4NDUzNXww&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "gradient-primary",
      tags: ["AI/ML", "NLP Processing", "Semantic Analysis", "Bias Reduction", "Redis Caching", "FastAPI"],
      link: `${import.meta.env.VITE_BASE_URL}/resumelens`,
      github: "https://github.com/yourusername/resumelens",
      likes: 234,
      views: 1420
    },
    {
      id: 2,
      title: "Payment Dashboard Management System",
      description: "Real-time analytics with beautiful data visualization",
      image: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc1NzYyMDUyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "gradient-secondary",
      tags: ["Dashboard Design", "SaaS", "Data Visualization"],
      link: `${import.meta.env.VITE_BASE_URL}/payment-dashboard`,
      github: "https://github.com/sunil5151/Biotron6",
      likes: 189,
      views: 980
    },
    {
      id: 3,
      title: "SecureMed Portal - Healthcare Management System",
      description: "Leader Board Management System",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU3NTg1MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "gradient-warning",
      tags: ["Real Time Update", "Leader Board Management"],
      link: `${import.meta.env.VITE_BASE_URL}/leaderboard`,
      github: "https://github.com/sunil5151/LeaderBoard",
      likes: 278,
      views: 1340
    },
    {
      id: 4,
      title: "Kanban Board Portal - Kanban Management System",
      description: "A comprehensive Kanban Board management platform",
      image: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc1NzYyMDUyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "gradient-primary",
      tags: ["Healthcare", "HIPAA Compliant", "Real-time Chat", "Patient Management"],
      link: `${import.meta.env.VITE_BASE_URL}/kanban`,
      github: "https://github.com/sunil5151/Kanban",
      likes: 203,
      views: 890
    }
  ];

  const handleProjectClick = (link) => {
    window.open(link, '_blank');
  };

  const handleGithubClick = (e, github) => {
    e.stopPropagation();
    window.open(github, '_blank');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            ✨ Featured Work ✨
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Here's a collection of my most exciting projects that showcase creativity, innovation, and problem-solving skills! 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative transform transition-all duration-500 hover:scale-105"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${
                    project.gradient === 'gradient-primary' ? 'from-purple-500/20 to-pink-500/20' :
                    project.gradient === 'gradient-secondary' ? 'from-blue-500/20 to-cyan-500/20' :
                    'from-yellow-500/20 to-orange-500/20'
                  } opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Floating action buttons */}
                  <div 
                    className={`absolute top-4 right-4 flex space-x-2 transition-all duration-300 ${
                      hoveredCard === project.id ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2'
                    }`}
                  >
                    <button 
                      onClick={() => handleProjectClick(project.link)}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    >
                      <Eye size={16} />
                    </button>
                    <button 
                      onClick={(e) => handleGithubClick(e, project.github)}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    >
                      <Github size={16} />
                    </button>
                  </div>

                  {/* Tags */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-white/70">
                      <div className="flex items-center space-x-1">
                        <Heart size={14} className="text-red-400" />
                        <span>{project.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye size={14} className="text-blue-400" />
                        <span>{project.views}</span>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={12} 
                          className={`${i < 4 ? 'text-yellow-400 fill-current' : 'text-white/30'}`} 
                        />
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleProjectClick(project.link)}
                      className={`flex-1 bg-gradient-to-r ${
                        project.gradient === 'gradient-primary' ? 'from-purple-500 to-pink-500' :
                        project.gradient === 'gradient-secondary' ? 'from-blue-500 to-cyan-500' :
                        'from-yellow-500 to-orange-500'
                      } text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105`}
                    >
                      <span>View Project</span>
                      <ArrowRight size={16} />
                    </button>
                    <button 
                      onClick={(e) => handleGithubClick(e, project.github)}
                      className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105"
                      title="View on GitHub"
                    >
                      <Github size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Projects Button */}
        <div className="text-center mt-16">
          <button 
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-medium text-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 inline-flex items-center space-x-3 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <span>🎨 See All Amazing Projects</span>
            <ArrowRight size={20} className="animate-pulse" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default FeaturedWork;