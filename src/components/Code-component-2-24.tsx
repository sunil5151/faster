import { Award, Users, Coffee, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Coffee, value: '200+', label: 'Projects Completed' },
    { icon: Target, value: '99%', label: 'Success Rate' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-medium text-gray-900">About Me</h2>
              <p className="text-lg text-gray-600">
                I'm a passionate product designer with over 5 years of experience creating 
                digital products that solve real problems and delight users.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                My journey began in graphic design, but I quickly fell in love with the 
                intersection of design and technology. I believe great design is not just 
                about making things look beautiful—it's about making them work beautifully.
              </p>
              
              <p className="text-gray-600">
                I specialize in user experience design, interface design, and design systems. 
                My approach is always user-centered, data-driven, and collaborative. I work 
                closely with developers, product managers, and stakeholders to ensure designs 
                are not only visually appealing but also technically feasible and business-viable.
              </p>
              
              <p className="text-gray-600">
                When I'm not designing, you can find me exploring new design trends, 
                contributing to design communities, or enjoying a good coffee while 
                sketching new ideas.
              </p>
            </div>
            
            <a 
              href="/resume.pdf" 
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Download Resume
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-lg mb-4">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-3xl font-medium text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;