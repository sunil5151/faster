import { useState } from 'react';
import { ArrowRight, Eye, ExternalLink, Heart, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const FeaturedWork = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const featuredProjects = [
    {
      id: 1,
      title: "Modern E-commerce App",
      category: "Mobile Design",
      description: "A sleek shopping experience with AR try-on features",
      image: "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NzU4NDUzNXww&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "gradient-primary",
      likes: 234,
      views: 1420
    },
    {
      id: 2,
      title: "FinTech Dashboard",
      category: "Web Application",
      description: "Real-time analytics with beautiful data visualization",
      image: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc1NzYyMDUyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "gradient-secondary",
      likes: 189,
      views: 980
    },
    {
      id: 3,
      title: "Social Media Redesign",
      category: "UX Research",
      description: "Improving user engagement through better UX",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU3NTg1MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "gradient-accent",
      likes: 312,
      views: 1680
    },
    {
      id: 4,
      title: "Healthcare Platform",
      category: "Product Design",
      description: "Telemedicine app connecting patients with doctors",
      image: "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NzU4NDUzNXww&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "gradient-success",
      likes: 156,
      views: 720
    },
    {
      id: 5,
      title: "Food Delivery App",
      category: "Mobile UI",
      description: "Quick ordering with live tracking and gamification",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU3NTg1MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "gradient-warning",
      likes: 278,
      views: 1340
    },
    {
      id: 6,
      title: "Learning Management System",
      category: "Educational Tech",
      description: "Interactive learning platform with progress tracking",
      image: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc1NzYyMDUyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "gradient-primary",
      likes: 203,
      views: 890
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 gradient-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 gradient-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ✨ Featured Work ✨
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Here's a collection of my most exciting projects that showcase creativity, innovation, and problem-solving skills! 🚀
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              <div className={`glass-card rounded-2xl overflow-hidden hover-float hover-glow cursor-pointer transition-all duration-500 ${
                hoveredCard === project.id ? 'scale-105' : ''
              }`}>
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Floating action buttons */}
                  <motion.div 
                    className="absolute top-4 right-4 flex space-x-2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={hoveredCard === project.id ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button 
                      className="glass-button p-2 rounded-full text-white hover:bg-white/30 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Eye size={16} />
                    </motion.button>
                    <motion.button 
                      className="glass-button p-2 rounded-full text-white hover:bg-white/30 transition-all duration-300"
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={16} />
                    </motion.button>
                  </motion.div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`glass-button px-3 py-1 rounded-full text-xs text-white font-medium ${project.gradient}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 text-white">
                  <motion.h3 
                    className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 group-hover:bg-clip-text transition-all duration-300"
                    layout
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-white/80 mb-4 leading-relaxed">
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

                  {/* CTA Button */}
                  <motion.button 
                    className={`w-full glass-button ${project.gradient} text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center space-x-2 group/btn transition-all duration-300`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Project</span>
                    <motion.div
                      animate={hoveredCard === project.id ? { x: 5 } : { x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight size={16} />
                    </motion.div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All Projects Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.button 
            className="glass-card gradient-primary text-white px-8 py-4 rounded-2xl font-medium text-lg hover-glow inline-flex items-center space-x-3"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>🎨 See All Amazing Projects</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork;