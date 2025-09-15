import React from 'react';
import { ArrowLeft, ExternalLink, Github, Trophy, Users, TrendingUp, Zap, Award, Target, Activity, Clock, ChevronRight, Star, Medal, Crown, Sparkles, Gamepad2, BarChart3, RefreshCw, UserPlus, Gift, Flame, Database, Code2, Layers, Globe } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import appointment from '../../images/payment.jpeg';
import chat from '../../images/payment-money.png';
import homepage from '../../images/payment-dashboard.png';
import profile from '../../images/payment-homepage.png';

const DynamicLeaderboardProject = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button 
          onClick={onBack || (() => window.location.href = import.meta.env.VITE_FRONTEND_URL || 'http://localhost:5173')}
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 transition-all duration-200 group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Projects</span>
        </button>

        {/* Hero Section Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 border border-gray-100">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-8 text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Trophy size={16} className="mr-2" />
              Gamification & Competition Platform
            </div>
            
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-100">
              Dynamic Leaderboard System
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              An interactive real-time leaderboard application that brings competitive gaming elements to any platform. Users can earn points, track rankings, and compete for the top position with dynamic updates and engaging animations.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { name: "Real-time Updates", icon: RefreshCw, color: "bg-blue-500" },
                { name: "User Management", icon: UserPlus, color: "bg-green-500" },
                { name: "Point System", icon: Star, color: "bg-yellow-500" },
                { name: "Dynamic Rankings", icon: TrendingUp, color: "bg-purple-500" },
                { name: "Interactive UI", icon: Sparkles, color: "bg-pink-500" }
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
                className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-200 font-semibold shadow-lg"
              >
                <ExternalLink size={18} className="mr-2" />
                View Live Demo
              </a>
              <a 
                href="https://github.com/sunil5151/PaymentAssignment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-purple-800/30 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-purple-800/50 transition-all duration-200 font-semibold"
              >
                <Github size={18} className="mr-2" />
                View Source Code
              </a>
            </div>
          </div>
        </div>

        {/* What I Learned Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-900">Key Learning Outcomes</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: RefreshCw,
                title: "Dynamic Data Updates",
                description: "Mastered handling real-time data updates on web pages, ensuring the leaderboard reflects changes instantly without page refreshes.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Database,
                title: "State Management", 
                description: "Learned to manage user inputs efficiently, store scores persistently, and maintain data integrity across the application.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Layers,
                title: "UI Re-rendering",
                description: "Developed skills in updating and re-rendering UI elements efficiently to maintain smooth performance with dynamic content.",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: Code2,
                title: "DOM Manipulation",
                description: "Gained expertise in DOM manipulation and event handling, or React state management for reactive user interfaces.",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: Sparkles,
                title: "Interactive Design",
                description: "Created an engaging, user-friendly interface with intuitive interactions and visually appealing feedback mechanisms.",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description: "Implemented efficient algorithms for sorting and ranking to ensure smooth performance even with large datasets.",
                gradient: "from-yellow-500 to-amber-500"
              }
            ].map((learning, index) => (
              <div key={index} className="group hover:scale-105 transition-all duration-300">
                <div className={`bg-gradient-to-br ${learning.gradient} rounded-xl p-1`}>
                  <div className="bg-white rounded-lg p-6 h-full">
                    <div className={`w-12 h-12 bg-gradient-to-br ${learning.gradient} rounded-lg flex items-center justify-center mb-4`}>
                      <learning.icon className="text-white" size={24} />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{learning.title}</h4>
                    <p className="text-gray-600 text-sm">{learning.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Screenshots Section */}
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Platform Interface</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Main Leaderboard Screenshot */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-100">
                <ImageWithFallback 
                  src={homepage}
                  alt="Dynamic Leaderboard - Real-time rankings display"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <Trophy className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Live Leaderboard Rankings</h3>
                    <p className="text-gray-600 text-sm">Real-time Competition Tracking</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">Dynamic leaderboard showing live rankings with smooth animations, highlighting position changes and celebrating achievements.</p>
              </div>
            </div>
            
            {/* User Management Screenshot */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-100">
                <ImageWithFallback 
                  src={chat}
                  alt="User Management - Add and manage participants"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                    <UserPlus className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">User & Points Management</h3>
                    <p className="text-gray-600 text-sm">Add Players & Award Points</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">Intuitive interface for adding new users, manually awarding points, or allowing users to claim rewards through interactions.</p>
              </div>
            </div>

            {/* Points Distribution Screenshot */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-100">
                <ImageWithFallback 
                  src={appointment}
                  alt="Points System - Award and track points"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <Gift className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Points Distribution System</h3>
                    <p className="text-gray-600 text-sm">Flexible Reward Mechanisms</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">Multiple ways to earn points including manual awards, achievement unlocks, and interactive challenges with instant updates.</p>
              </div>
            </div>

            {/* Analytics Dashboard Screenshot */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-100">
                <ImageWithFallback 
                  src={profile} 
                  alt="Analytics - Performance tracking and insights"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                    <BarChart3 className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Performance Analytics</h3>
                    <p className="text-gray-600 text-sm">Track Progress & Trends</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">Comprehensive analytics showing user performance trends, point distribution patterns, and competitive insights.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Crown,
                title: "Top Players Display",
                description: "Highlight top 3 with special badges",
                gradient: "from-yellow-400 to-amber-600"
              },
              {
                icon: Flame,
                title: "Streak Tracking",
                description: "Monitor winning streaks & consistency",
                gradient: "from-red-400 to-orange-600"
              },
              {
                icon: Medal,
                title: "Achievement System",
                description: "Unlock badges and rewards",
                gradient: "from-purple-400 to-pink-600"
              },
              {
                icon: Activity,
                title: "Live Updates",
                description: "Real-time ranking changes",
                gradient: "from-blue-400 to-cyan-600"
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
                icon: Gamepad2,
                title: "Gamification Elements",
                description: "Engaging game-like features including levels, XP, and progression systems",
                color: "text-purple-600",
                bg: "bg-purple-50"
              },
              {
                icon: Users,
                title: "Multi-User Support",
                description: "Handle unlimited users with efficient data structures and algorithms",
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                icon: Target,
                title: "Goal Setting",
                description: "Set and track personal targets with visual progress indicators",
                color: "text-green-600",
                bg: "bg-green-50"
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

        {/* Impact & Results Section */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-2xl shadow-xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Project Impact</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: "< 100ms", label: "Update Latency", icon: Zap },
              { value: "1000+", label: "Users Supported", icon: Users },
              { value: "60 FPS", label: "Smooth Animations", icon: Activity },
              { value: "100%", label: "Responsive Design", icon: Globe }
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
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                Frontend Technologies
              </h3>
              <div className="space-y-3">
                {["React.js with Hooks", "State Management", "Dynamic DOM Updates", "CSS Animations"].map((tech, i) => (
                  <div key={i} className="flex items-center bg-white rounded-lg px-4 py-2">
                    <ChevronRight size={16} className="text-purple-500 mr-2" />
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Core Concepts
              </h3>
              <div className="space-y-3">
                {["Event Handling", "Data Structures", "Sorting Algorithms", "Real-time Updates"].map((tech, i) => (
                  <div key={i} className="flex items-center bg-white rounded-lg px-4 py-2">
                    <ChevronRight size={16} className="text-orange-500 mr-2" />
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Features */}
          <div className="mt-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
            <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
              <Sparkles size={20} className="text-blue-500 mr-3" />
              Interactive Elements
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Smooth Transitions & Animations",
                "Drag & Drop Reordering",
                "Click-to-Award Points",
                "Live Position Updates"
              ].map((feature, i) => (
                <div key={i} className="flex items-center bg-white rounded-lg px-4 py-2">
                  <Star size={16} className="text-blue-500 mr-2" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicLeaderboardProject;