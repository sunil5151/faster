import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface EcommerceProjectProps {
  onBack?: () => void;
}

const EcommerceProject = ({ onBack }: EcommerceProjectProps) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button 
          onClick={onBack || (() => window.history.back())}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Projects
        </button>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">E-commerce Platform Redesign</h1>
          <p className="text-xl text-gray-600 mb-6">
            Complete redesign of a fashion e-commerce platform, focusing on improving user experience and conversion rates.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {["UX/UI Design", "E-commerce", "Design System"].map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex space-x-4">
            <a 
              href="#"
              className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <ExternalLink size={18} className="mr-2" />
              View Live Project
            </a>
            <a 
              href="#"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Github size={18} className="mr-2" />
              View Code
            </a>
          </div>
        </div>

        {/* Project Image */}
        <div className="mb-12">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NzU4NDUzNXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="E-commerce Platform Redesign"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Project Details */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Project Overview</h2>
          <p className="text-gray-600 mb-6">
            This project involved a complete redesign of a fashion e-commerce platform that was struggling with low conversion rates and poor user experience. The goal was to create a modern, mobile-first design that would improve user engagement and drive sales.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Mobile-first responsive design</li>
            <li>Improved product discovery and search functionality</li>
            <li>Streamlined checkout process</li>
            <li>Enhanced product visualization with zoom and 360° views</li>
            <li>Personalized recommendations engine</li>
            <li>Comprehensive design system implementation</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Design Process</h2>
          <p className="text-gray-600 mb-6">
            The design process began with extensive user research and competitor analysis. I conducted user interviews, analyzed existing user behavior data, and identified key pain points in the current user journey. Based on these insights, I created user personas and mapped out improved user flows.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Results</h2>
          <p className="text-gray-600 mb-6">
            The redesigned platform resulted in a 35% increase in conversion rates and a 50% improvement in mobile user engagement. The new design system also reduced development time for future features by 40%.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EcommerceProject;
