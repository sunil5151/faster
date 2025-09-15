import { Figma, Palette, Code, Users, BarChart, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Design Tools",
      icon: Figma,
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe Creative Suite", level: 90 },
        { name: "Sketch", level: 85 },
        { name: "Principle", level: 80 }
      ]
    },
    {
      title: "Design Systems",
      icon: Layers,
      skills: [
        { name: "Component Libraries", level: 92 },
        { name: "Design Tokens", level: 88 },
        { name: "Style Guides", level: 90 },
        { name: "Documentation", level: 85 }
      ]
    },
    {
      title: "UX Research",
      icon: BarChart,
      skills: [
        { name: "User Interviews", level: 90 },
        { name: "Usability Testing", level: 88 },
        { name: "Data Analysis", level: 82 },
        { name: "A/B Testing", level: 78 }
      ]
    },
    {
      title: "Prototyping",
      icon: Palette,
      skills: [
        { name: "Interactive Prototypes", level: 93 },
        { name: "Wireframing", level: 95 },
        { name: "User Flows", level: 90 },
        { name: "Information Architecture", level: 87 }
      ]
    },
    {
      title: "Collaboration",
      icon: Users,
      skills: [
        { name: "Cross-functional Teams", level: 92 },
        { name: "Stakeholder Management", level: 88 },
        { name: "Design Reviews", level: 90 },
        { name: "Mentoring", level: 85 }
      ]
    },
    {
      title: "Technical Skills",
      icon: Code,
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript Basics", level: 70 },
        { name: "React Components", level: 75 },
        { name: "Version Control", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I bring a comprehensive skill set to every project, combining design expertise with technical knowledge and collaborative abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-black text-white rounded-lg mr-3">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-black h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">My Design Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-medium">1</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Research</h4>
                <p className="text-sm text-gray-600">Understanding users, business goals, and constraints</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-medium">2</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Ideate</h4>
                <p className="text-sm text-gray-600">Brainstorming solutions and exploring concepts</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-medium">3</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Design</h4>
                <p className="text-sm text-gray-600">Creating wireframes, prototypes, and visual designs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-medium">4</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Test</h4>
                <p className="text-sm text-gray-600">Validating designs with users and iterating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;