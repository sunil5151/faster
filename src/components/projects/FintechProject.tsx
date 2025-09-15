import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface FintechProjectProps {
  onBack?: () => void;
}

const FintechProject = ({ onBack }: FintechProjectProps) => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">FinTech Mobile App</h1>
          <p className="text-xl text-gray-600 mb-6">
            Designed a comprehensive mobile banking app with focus on security, accessibility, and user-friendly financial management features.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {["Mobile Design", "FinTech", "User Research"].map((tag, index) => (
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
            src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU3NTg1MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="FinTech Mobile App"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Project Details */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Project Overview</h2>
          <p className="text-gray-600 mb-6">
            This mobile banking application was designed to provide users with a secure, intuitive, and comprehensive financial management experience. The app focuses on making complex financial operations simple and accessible while maintaining the highest security standards.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Biometric authentication and multi-factor security</li>
            <li>Real-time transaction monitoring and alerts</li>
            <li>Budget tracking and financial insights</li>
            <li>Peer-to-peer money transfers</li>
            <li>Investment portfolio management</li>
            <li>Accessibility features for users with disabilities</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Design Process</h2>
          <p className="text-gray-600 mb-6">
            The design process started with extensive user research to understand pain points in existing banking apps. I conducted interviews with users across different age groups and technical proficiency levels. The insights gathered informed the creation of user personas and guided the development of intuitive user flows that prioritize both security and ease of use.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security & Accessibility</h2>
          <p className="text-gray-600 mb-6">
            Security was paramount in this design. I implemented multiple layers of authentication while ensuring the process remained user-friendly. The app also follows WCAG 2.1 guidelines to ensure accessibility for users with visual, auditory, and motor impairments.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Results</h2>
          <p className="text-gray-600 mb-6">
            The app achieved a 4.8-star rating in app stores and saw 60% higher user engagement compared to the previous version. Security incidents decreased by 80% while user satisfaction scores improved by 45%.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FintechProject;
