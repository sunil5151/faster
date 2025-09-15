import { Award, Users, Coffee, Target } from 'lucide-react';
import { motion } from 'motion/react';

const About = () => {
  const stats = [
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Coffee, value: '200+', label: 'Projects Completed' },
    { icon: Target, value: '99%', label: 'Success Rate' }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 gradient-primary rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 left-20 w-64 h-64 gradient-secondary rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.h2 
                className="text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                👨‍💻 About Me
              </motion.h2>
              <motion.p 
                className="text-lg text-white/90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                I'm a passionate product designer with over 5 years of experience creating 
                digital products that solve real problems and delight users! ✨
              </motion.p>
            </div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p className="text-white/80 leading-relaxed">
                🎨 My journey began in graphic design, but I quickly fell in love with the 
                intersection of design and technology. I believe great design is not just 
                about making things look beautiful—it's about making them work beautifully!
              </p>
              
              <p className="text-white/80 leading-relaxed">
                💡 I specialize in user experience design, interface design, and design systems. 
                My approach is always user-centered, data-driven, and collaborative. I work 
                closely with developers, product managers, and stakeholders to ensure designs 
                are not only visually appealing but also technically feasible and business-viable.
              </p>
              
              <p className="text-white/80 leading-relaxed">
                ☕ When I'm not designing, you can find me exploring new design trends, 
                contributing to design communities, or enjoying a good coffee while 
                sketching new ideas! 🚀
              </p>
            </motion.div>
            
            <motion.a 
              href="/resume.pdf" 
              className="inline-flex items-center px-8 py-4 glass-card gradient-accent text-white rounded-2xl hover-glow font-medium"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              📄 Download Resume
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const gradients = ['gradient-primary', 'gradient-secondary', 'gradient-accent', 'gradient-success'];
              return (
                <motion.div 
                  key={index} 
                  className="text-center p-6 glass-card rounded-2xl hover-float hover-glow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 ${gradients[index]} text-white rounded-2xl mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent size={28} />
                  </motion.div>
                  <motion.h3 
                    className="text-4xl font-bold text-white mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-white/80 font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;