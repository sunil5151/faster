import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import photo2 from '../images/photo2.jpg';
const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 gradient-primary rounded-full mix-blend-multiply filter blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-40 right-10 w-96 h-96 gradient-secondary rounded-full mix-blend-multiply filter blur-xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/2 w-96 h-96 gradient-accent rounded-full mix-blend-multiply filter blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.p 
                className="text-lg text-white/80 flex items-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Sparkles size={20} className="text-yellow-400" />
                <span>Hello, I'm</span>
              </motion.p>
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Sunil Sonu
              </motion.h1>
              <motion.h2 
                className="text-2xl lg:text-4xl gradient-accent bg-clip-text text-transparent font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                🎨 Product Designer ✨
              </motion.h2>
              <motion.p 
                className="text-lg text-white/90 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                I craft digital experiences that are intuitive, engaging, and meaningful! 
                Specializing in UX/UI design, design systems, and user research with a touch of magic! 🚀
              </motion.p>
            </div>
            
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 glass-card gradient-primary text-white rounded-2xl hover-glow font-medium"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="mr-2" size={18} />
                💌 Get in touch
              </motion.a>
              <motion.button 
                onClick={scrollToProjects}
                className="inline-flex items-center px-8 py-4 glass-button text-white rounded-2xl hover:bg-white/20 transition-all duration-300 font-medium"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                🎨 View work
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDown className="ml-2" size={18} />
                </motion.div>
              </motion.button>
            </motion.div>

            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <motion.a 
                href="#" 
                className="glass-button p-3 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
                href="#" 
                className="glass-button p-3 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a 
                href="#" 
                className="glass-button p-3 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              <motion.div 
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src={photo2}
                  alt="Sunil Sonu - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating elements around the image */}
              <motion.div 
                className="absolute -top-4 -right-4 w-12 h-12 gradient-secondary rounded-full flex items-center justify-center text-white text-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                🎨
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-12 h-12 gradient-accent rounded-full flex items-center justify-center text-white text-xl"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -right-8 w-8 h-8 gradient-success rounded-full flex items-center justify-center text-white"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🚀
              </motion.div>
              
              <motion.div 
                className="absolute top-1/4 -left-8 w-8 h-8 gradient-warning rounded-full flex items-center justify-center text-white"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                💡
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;