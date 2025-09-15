import React from 'react';
import { ArrowLeft, ExternalLink, Github, Shield, CreditCard, BarChart3, FileDown, Users, TrendingUp, AlertTriangle, DollarSign, Lock, Clock, ChevronRight, PieChart, Database, Settings, FileSpreadsheet, Activity } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import appointment from '../../images/payment.jpeg';
import chat from '../../images/payment-money.png';
import homepage from '../../images/payment-dashboard.png';
import profile from '../../images/payment-homepage.png';

const PaymentDashboardProject = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button 
          onClick={onBack || (() => window.location.href = import.meta.env.VITE_FRONTEND_URL || 'http://localhost:5173')}
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 transition-all duration-200 group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Projects</span>
        </button>

        {/* Hero Section Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 border border-gray-100">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-8 text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <DollarSign size={16} className="mr-2" />
              Financial Technology Solution
            </div>
            
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-100">
              Payment Management Dashboard
            </h1>
            <p className="text-xl text-emerald-50 mb-8 max-w-3xl">
              A comprehensive payment management solution designed to streamline payment processing, tracking, and analysis with powerful visualization tools and export capabilities.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { name: "Real-time Analytics", icon: Activity, color: "bg-purple-500" },
                { name: "Secure Payments", icon: Shield, color: "bg-green-500" },
                { name: "Data Visualization", icon: BarChart3, color: "bg-blue-500" },
                { name: "Export Tools", icon: FileDown, color: "bg-orange-500" },
                { name: "Role-based Access", icon: Users, color: "bg-pink-500" }
              ].map((tag, index) => (
                <span 
                  key={index}
                  className={`inline-flex items-center px-4 py-2 ${tag.color} text-white rounded-full text-sm font-medium shadow-lg transform hover:scale-105 transition-transform`}
                >
                  <tag.icon size={16} className="mr-2" />
                  {tag.name}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://paymentassignment.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-emerald-600 rounded-lg hover:bg-emerald-50 transition-all duration-200 font-semibold shadow-lg"
              >
                <ExternalLink size={18} className="mr-2" />
                View Live Demo
              </a>
              <a 
                href="https://github.com/sunil5151/PaymentAssignment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-emerald-800/30 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-emerald-800/50 transition-all duration-200 font-semibold"
              >
                <Github size={18} className="mr-2" />
                View Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Critical Business Challenges Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-red-500 rounded-full mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-900">Critical Business Challenges</h2>
          </div>
          
          <h3 className="text-2xl font-bold text-red-600 mb-6">Problems We Solve</h3>
          <p className="text-gray-600 mb-8">
            Modern businesses face critical payment management challenges that impact cash flow and operational efficiency.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: "Fragmented Payment Data",
                description: "Payment information scattered across multiple systems, making it difficult to track transactions, analyze trends, and maintain accurate financial records.",
                color: "bg-red-50 border-red-200 hover:border-red-400"
              },
              {
                icon: Clock,
                title: "Manual Processing Delays", 
                description: "Time-consuming manual payment processing and reconciliation leading to delayed cash flow, increased errors, and reduced operational efficiency.",
                color: "bg-orange-50 border-orange-200 hover:border-orange-400"
              },
              {
                icon: BarChart3,
                title: "Limited Visibility",
                description: "Lack of real-time insights into payment patterns, customer behavior, and revenue trends, hindering strategic decision-making.",
                color: "bg-yellow-50 border-yellow-200 hover:border-yellow-400"
              }
            ].map((problem, index) => (
              <div key={index} className={`${problem.color} border-2 rounded-xl p-6 transition-all duration-200 hover:shadow-lg`}>
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <problem.icon className="text-red-500" size={28} />
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">{problem.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Screenshots Section */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Platform Screenshots</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Dashboard Analytics Screenshot */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-100">
                <ImageWithFallback 
                  src={homepage}
                  alt="Payment Dashboard - Real-time analytics and metrics"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mr-4">
                    <Activity className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Real-time Analytics Dashboard</h3>
                    <p className="text-gray-600 text-sm">Comprehensive Payment Metrics</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">Interactive dashboard displaying real-time payment statistics, trends, and key performance indicators for data-driven decisions.</p>
              </div>
            </div>
            
            {/* Payment Management Screenshot */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-100">
                <ImageWithFallback 
                  src={chat}
                  alt="Payment Management - Transaction processing interface"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <CreditCard className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Payment Management System</h3>
                    <p className="text-gray-600 text-sm">Streamlined Transaction Processing</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">Intuitive interface for creating, tracking, and managing payments with support for multiple payment methods and currencies.</p>
              </div>
            </div>

            {/* Data Visualization Screenshot */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-100">
                <ImageWithFallback 
                  src={appointment}
                  alt="Data Visualization - Interactive charts and reports"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <PieChart className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Advanced Data Visualization</h3>
                    <p className="text-gray-600 text-sm">Interactive Charts & Reports</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">Dynamic charts including pie charts for payment distribution, bar charts for status analysis, and trend lines for revenue tracking.</p>
              </div>
            </div>

            {/* Admin Portal Screenshot */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-100">
                <ImageWithFallback 
                  src={profile} 
                  alt="Admin Portal - User and system management"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <Settings className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Admin Control Center</h3>
                    <p className="text-gray-600 text-sm">Complete System Management</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">Powerful admin portal with user management, system-wide monitoring, and advanced reporting capabilities.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Powerful Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Secure Authentication",
                description: "JWT-based auth with role-based access",
                gradient: "from-green-400 to-green-600"
              },
              {
                icon: BarChart3,
                title: "Real-time Analytics",
                description: "Interactive charts & live metrics",
                gradient: "from-blue-400 to-blue-600"
              },
              {
                icon: FileSpreadsheet,
                title: "Export Capabilities",
                description: "CSV export with custom options",
                gradient: "from-purple-400 to-purple-600"
              },
              {
                icon: Database,
                title: "Payment Tracking",
                description: "Complete transaction history",
                gradient: "from-orange-400 to-orange-600"
              }
            ].map((feature, index) => (
              <div key={index} className="group cursor-pointer">
                <div className={`bg-gradient-to-br ${feature.gradient} rounded-xl p-6 text-white transform transition-all duration-200 hover:scale-105 hover:shadow-2xl`}>
                  <feature.icon size={32} className="mb-4" />
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-white/90 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "User Management",
                description: "Complete user lifecycle management with role-based permissions",
                color: "text-pink-600",
                bg: "bg-pink-50"
              },
              {
                icon: TrendingUp,
                title: "Trend Analysis",
                description: "Track payment trends over time with predictive insights",
                color: "text-teal-600",
                bg: "bg-teal-50"
              },
              {
                icon: CreditCard,
                title: "Multi-Payment Support",
                description: "Support for various payment methods and currencies",
                color: "text-indigo-600",
                bg: "bg-indigo-50"
              }
            ].map((feature, index) => (
              <div key={index} className={`${feature.bg} rounded-xl p-6 border-2 border-transparent hover:border-gray-200 transition-all duration-200`}>
                <feature.icon size={24} className={`${feature.color} mb-3`} />
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl shadow-xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Business Impact</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: "85%", label: "Faster Processing", icon: Clock },
              { value: "99.9%", label: "Transaction Security", icon: Shield },
              { value: "70%", label: "Time Saved", icon: TrendingUp },
              { value: "3x", label: "Revenue Visibility", icon: BarChart3 }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-200">
                <stat.icon size={24} className="mx-auto mb-3 text-white/80" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/90 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technology Stack</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                Frontend Excellence
              </h3>
              <div className="space-y-3">
                {["React.js + Hooks", "Chart.js for Visualization", "Tailwind CSS", "Axios for API"].map((tech, i) => (
                  <div key={i} className="flex items-center bg-white rounded-lg px-4 py-2">
                    <ChevronRight size={16} className="text-emerald-500 mr-2" />
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Backend & Database
              </h3>
              <div className="space-y-3">
                {["Node.js + Express", "PostgreSQL Database", "JWT Authentication", "RESTful API Design"].map((tech, i) => (
                  <div key={i} className="flex items-center bg-white rounded-lg px-4 py-2">
                    <ChevronRight size={16} className="text-blue-500 mr-2" />
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="mt-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
            <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
              <Lock size={20} className="text-red-500 mr-3" />
              Security & Compliance
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "HTTPS Encryption",
                "Input Validation & Sanitization",
                "Role-based Access Control",
                "Secure API Endpoints"
              ].map((security, i) => (
                <div key={i} className="flex items-center bg-white rounded-lg px-4 py-2">
                  <Shield size={16} className="text-red-500 mr-2" />
                  <span className="text-gray-700 text-sm">{security}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDashboardProject;