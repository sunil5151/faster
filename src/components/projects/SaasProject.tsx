import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface SaasProjectProps {
  onBack?: () => void;
}

const SaasProject = ({ onBack }: SaasProjectProps) => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">SaaS Dashboard Design</h1>
          <p className="text-xl text-gray-600 mb-6">
            Created an intuitive dashboard for a project management SaaS tool, emphasizing data visualization and workflow optimization.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {["Dashboard Design", "SaaS", "Data Visualization"].map((tag, index) => (
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
            src="https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc1NzYyMDUyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="SaaS Dashboard Design"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Project Details */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Project Overview</h2>
          <p className="text-gray-600 mb-6">
            This project involved designing a comprehensive dashboard for a project management SaaS platform. The goal was to create an interface that would help teams visualize their work, track progress, and make data-driven decisions while maintaining simplicity and ease of use.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Interactive data visualization with charts and graphs</li>
            <li>Customizable dashboard widgets and layouts</li>
            <li>Real-time project progress tracking</li>
            <li>Team collaboration and communication tools</li>
            <li>Advanced filtering and search capabilities</li>
            <li>Mobile-responsive design for on-the-go access</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Design Process</h2>
          <p className="text-gray-600 mb-6">
            The design process began with understanding the complex workflows of project managers and team leads. I conducted user interviews, analyzed existing tools, and identified key pain points in current project management solutions. The insights led to a user-centered design approach that prioritizes information hierarchy and workflow efficiency.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Visualization</h2>
          <p className="text-gray-600 mb-6">
            A key focus was making complex project data easily digestible through thoughtful visualization. I designed interactive charts, progress indicators, and timeline views that allow users to quickly understand project status and identify bottlenecks or opportunities for improvement.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Results</h2>
          <p className="text-gray-600 mb-6">
            The new dashboard design resulted in a 40% increase in user productivity and a 25% reduction in project completion times. User satisfaction scores improved by 55%, and the platform saw a 30% increase in daily active users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SaasProject;
