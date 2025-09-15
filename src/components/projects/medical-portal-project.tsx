import React from 'react';
import { ArrowLeft, ExternalLink, Github, Shield, MessageCircle, Calendar, Database, Heart, Users, AlertTriangle, Stethoscope, Lock, Clock, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import appointment from '../../images/medical-portal-appointments.png';
import chat from '../../images/medical-portal-chat.png';
import homepage from '../../images/medical-portal-homepage.png';
import profile from '../../images/medical-portal-profile.png';

const MedicalPortalProject = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button 
          onClick={onBack || (() => window.location.href = import.meta.env.VITE_FRONTEND_URL || 'http://localhost:5173')}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-all duration-200 group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Projects</span>
        </button>

        {/* Hero Section Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 border border-gray-100">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Heart size={16} className="mr-2" />
              Healthcare Technology Solution
            </div>
            
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              SecureMed Portal
            </h1>
            <p className="text-xl text-blue-50 mb-8 max-w-3xl">
              A revolutionary healthcare management platform that transforms patient care through secure data management, seamless communication, and intelligent scheduling.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { name: "Healthcare", icon: Heart, color: "bg-red-500" },
                { name: "HIPAA Compliant", icon: Shield, color: "bg-green-500" },
                { name: "Real-time Chat", icon: MessageCircle, color: "bg-purple-500" },
                { name: "Smart Scheduling", icon: Calendar, color: "bg-yellow-500" },
                { name: "Patient Records", icon: Database, color: "bg-blue-500" }
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
                href="https://biotron6.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 font-semibold shadow-lg"
              >
                <ExternalLink size={18} className="mr-2" />
                View Live Demo
              </a>
              <a 
                href="https://github.com/sunil5151/Biotron6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-800/30 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-blue-800/50 transition-all duration-200 font-semibold"
              >
                <Github size={18} className="mr-2" />
                View Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Critical Healthcare Challenges Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-red-500 rounded-full mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-900">Critical Healthcare Challenges</h2>
          </div>
          
          <h3 className="text-2xl font-bold text-red-600 mb-6">Problems We Solve</h3>
          <p className="text-gray-600 mb-8">
            Modern healthcare faces critical challenges that compromise patient care and operational efficiency.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: "Scattered Patient Data",
                description: "Patient information spread across multiple systems, making it difficult for healthcare providers to access complete medical histories and provide optimal care.",
                color: "bg-red-50 border-red-200 hover:border-red-400"
              },
              {
                icon: Shield,
                title: "Security Vulnerabilities", 
                description: "Sensitive medical data at risk of breaches due to inadequate security measures, potentially violating patient privacy and violating HIPAA compliance.",
                color: "bg-orange-50 border-orange-200 hover:border-orange-400"
              },
              {
                icon: Users,
                title: "Poor Communication",
                description: "Limited communication channels between patients and healthcare providers, leading to delayed responses and reduced patient satisfaction.",
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
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Platform Screenshots</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Homepage Screenshot */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-100">
                <ImageWithFallback 
                  src={homepage}
                  alt="Medical Portal Homepage - Patient-friendly interface for appointment booking"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <Stethoscope className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Patient-Friendly Homepage</h3>
                    <p className="text-gray-600 text-sm">Secure Patient Portal Interface</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">Intuitive interface for patient appointment booking with trusted healthcare providers and quick access to medical services.</p>
              </div>
            </div>
            
            {/* Chat System Screenshot */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-100">
                <ImageWithFallback 
                  src={chat}
                  alt="Medical Portal Chat System - Real-time secure communication"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Real-time Chat System</h3>
                    <p className="text-gray-600 text-sm">Secure Communication Hub</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">Encrypted messaging system for seamless doctor-patient communication with real-time notifications.</p>
              </div>
            </div>

            {/* Appointments Screenshot */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-100">
                <ImageWithFallback 
                  src={appointment}
                  alt="Medical Portal Appointments - Smart scheduling system"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <Calendar className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Smart Appointment System</h3>
                    <p className="text-gray-600 text-sm">AI-Powered Scheduling</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">Advanced appointment management with automated scheduling, reminders, and calendar integration for optimal patient care.</p>
              </div>
            </div>

            {/* Profile Screenshot */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-100">
                <ImageWithFallback 
                  src={profile} 
                  alt="Medical Portal Profile - Secure patient records management"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <Database className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Patient Profile & Records</h3>
                    <p className="text-gray-600 text-sm">Unified Medical Records</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">Comprehensive patient profile management with secure access to medical history, prescriptions, and health data.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Revolutionary Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Database,
                title: "Unified Records",
                description: "Centralized patient data with secure access",
                gradient: "from-blue-400 to-blue-600"
              },
              {
                icon: Lock,
                title: "Bank-Level Security",
                description: "End-to-end encryption & HIPAA compliance",
                gradient: "from-green-400 to-green-600"
              },
              {
                icon: MessageCircle,
                title: "Instant Messaging",
                description: "Real-time encrypted communication",
                gradient: "from-purple-400 to-purple-600"
              },
              {
                icon: Clock,
                title: "Smart Scheduling",
                description: "AI-powered appointment optimization",
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
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Transformative Impact</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: "95%", label: "Security Enhancement", icon: Shield },
              { value: "60%", label: "Faster Patient Access", icon: Clock },
              { value: "80%", label: "Better Communication", icon: MessageCircle },
              { value: "45%", label: "Admin Time Saved", icon: Database }
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
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Frontend Excellence
              </h3>
              <div className="space-y-3">
                {["React.js + TypeScript", "Tailwind CSS", "Vite", "Socket.io Client"].map((tech, i) => (
                  <div key={i} className="flex items-center bg-white rounded-lg px-4 py-2">
                    <ChevronRight size={16} className="text-blue-500 mr-2" />
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Backend & Security
              </h3>
              <div className="space-y-3">
                {["Node.js + Express", "MongoDB Atlas", "JWT + RBAC", "AES-256 Encryption"].map((tech, i) => (
                  <div key={i} className="flex items-center bg-white rounded-lg px-4 py-2">
                    <ChevronRight size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalPortalProject;