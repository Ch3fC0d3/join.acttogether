import React, { useState } from 'react';
import { 
  Play, 
  Users, 
  Target, 
  Heart, 
  Vote, 
  Megaphone,
  Calendar,
  BarChart3,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  ChevronDown,
  Menu,
  X,
  ArrowLeft,
  BookOpen,
  MessageCircle,
  HelpCircle,
  GraduationCap,
  FileText,
  Download,
  TrendingUp,
  Globe,
  Lock,
  Clock,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('nonprofits');
  const [currentPage, setCurrentPage] = useState('home');

  const stats = [
    { number: '30%', label: 'fewer no-shows' },
    { number: '500+', label: 'organizations served' },
    { number: '1M+', label: 'actions taken' }
  ];

  const features = [
    {
      icon: Calendar,
      title: 'Quick Event Creation',
      description: 'Single, recurring, virtual, calls to legislators'
    },
    {
      icon: Zap,
      title: 'Automated Reminders',
      description: 'Surveys and follow-ups resulting in 30% fewer no-shows'
    },
    {
      icon: Users,
      title: 'Volunteer Host Capabilities',
      description: 'Peer-to-peer events that scale your impact'
    },
    {
      icon: BarChart3,
      title: 'Data & Analytics',
      description: 'Dashboards, CSV export, APIs, SQL options'
    }
  ];

  const solutions = {
    nonprofits: {
      title: 'Nonprofits',
      subtitle: 'Scale your volunteer impact',
      description: 'Promotes volunteer scaling & supporter action with tools designed for mission-driven organizations.',
      benefits: ['Volunteer management', 'Supporter engagement', 'Impact measurement', 'Community building']
    },
    campaigns: {
      title: 'Campaigns & Committees',
      subtitle: 'Win with organized action',
      description: 'Designed to identify new supporters, empower volunteers, and win campaigns through strategic mobilization.',
      benefits: ['Voter outreach', 'Volunteer coordination', 'Event management', 'Data insights']
    },
    unions: {
      title: 'Unions',
      subtitle: 'Strengthen member engagement',
      description: 'Unite your members through coordinated actions, events, and advocacy campaigns.',
      benefits: ['Member mobilization', 'Action coordination', 'Communication tools', 'Solidarity building']
    },
    advocacy: {
      title: 'Advocacy Organizations',
      subtitle: 'Build movements that matter',
      description: 'Tailored messaging on movement-building, mobilization, and creating lasting impact.',
      benefits: ['Movement building', 'Policy advocacy', 'Grassroots organizing', 'Coalition management']
    }
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const renderNavigation = () => (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button onClick={() => navigateToPage('home')} className="flex items-center">
                <img 
                  src="/Together.png" 
                  alt="ACTTogether.us" 
                  className="h-20 w-auto"
                />
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <button onClick={() => navigateToPage('solutions')} className="text-gray-700 hover:text-act-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Solutions
              </button>
              <button onClick={() => navigateToPage('platform')} className="text-gray-700 hover:text-act-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Platform
              </button>
              <button onClick={() => navigateToPage('why')} className="text-gray-700 hover:text-act-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Why ACTTogether.us
              </button>
              <button onClick={() => navigateToPage('volunteer')} className="text-gray-700 hover:text-act-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Volunteer
              </button>
              <button onClick={() => navigateToPage('resources')} className="text-gray-700 hover:text-act-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Resources
              </button>
              <button onClick={() => navigateToPage('login')} className="text-gray-700 hover:text-act-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Login
              </button>
              <button onClick={() => navigateToPage('get-started')} className="bg-act-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-act-teal-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-act-teal-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <button onClick={() => navigateToPage('solutions')} className="text-gray-700 hover:text-act-teal-600 block px-3 py-2 text-base font-medium w-full text-left">
              Solutions
            </button>
            <button onClick={() => navigateToPage('platform')} className="text-gray-700 hover:text-act-teal-600 block px-3 py-2 text-base font-medium w-full text-left">
              Platform
            </button>
            <button onClick={() => navigateToPage('why')} className="text-gray-700 hover:text-act-teal-600 block px-3 py-2 text-base font-medium w-full text-left">
              Why ACTTogether.us
            </button>
            <button onClick={() => navigateToPage('volunteer')} className="text-gray-700 hover:text-act-teal-600 block px-3 py-2 text-base font-medium w-full text-left">
              Volunteer
            </button>
            <button onClick={() => navigateToPage('resources')} className="text-gray-700 hover:text-act-teal-600 block px-3 py-2 text-base font-medium w-full text-left">
              Resources
            </button>
            <button onClick={() => navigateToPage('login')} className="text-gray-700 hover:text-act-teal-600 block px-3 py-2 text-base font-medium w-full text-left">
              Login
            </button>
            <button onClick={() => navigateToPage('get-started')} className="bg-act-teal-600 text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-act-teal-700 transition-colors w-full mt-2">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );

  if (currentPage === 'solutions') {
    return (
      <div className="min-h-screen bg-white">
        {renderNavigation()}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button 
            onClick={() => navigateToPage('home')}
            className="flex items-center text-act-teal-600 hover:text-act-teal-700 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </button>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solutions for Your Organization
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored features and strategies for different types of mission-driven organizations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(solutions).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === key
                    ? 'bg-act-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {solutions[key].title}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-8 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {solutions[activeTab].title}
              </h2>
              <p className="text-xl text-act-teal-600 font-semibold mb-6">
                {solutions[activeTab].subtitle}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {solutions[activeTab].description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {solutions[activeTab].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-act-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigateToPage('get-started')}
                  className="bg-act-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => navigateToPage('platform')}
                  className="border border-act-teal-600 text-act-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  View Platform Features
                </button>
              </div>
            </div>
          </div>

          {/* Additional Solutions Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <Heart className="h-8 w-8 text-act-teal-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Mission-Driven</h3>
              <p className="text-gray-600">Built specifically for organizations focused on creating positive social impact.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <Users className="h-8 w-8 text-act-teal-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Community Focused</h3>
              <p className="text-gray-600">Tools designed to build and strengthen communities around your cause.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <Target className="h-8 w-8 text-act-teal-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Results Oriented</h3>
              <p className="text-gray-600">Proven strategies and tools that deliver measurable outcomes.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'platform') {
    return (
      <div className="min-h-screen bg-white">
        {renderNavigation()}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button 
            onClick={() => navigateToPage('home')}
            className="flex items-center text-act-teal-600 hover:text-act-teal-700 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </button>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Platform Features – How It Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to organize, mobilize, and measure your impact in one powerful platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
                <div className="text-act-teal-600 mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Platform Sections */}
          <div className="space-y-16">
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-act-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Flexible Event Types</h4>
                    <p className="text-gray-600">Create single events, recurring series, virtual meetings, or calls to legislators</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-act-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Smart Scheduling</h4>
                    <p className="text-gray-600">Automated timezone handling and calendar integration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Engagement</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-act-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Peer-to-Peer Events</h4>
                    <p className="text-gray-600">Empower volunteers to host their own events and expand your reach</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-5 w-5 text-act-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Automated Follow-up</h4>
                    <p className="text-gray-600">Reduce no-shows by 30% with smart reminders and surveys</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data & Analytics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <BarChart3 className="h-5 w-5 text-act-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Real-time Dashboards</h4>
                    <p className="text-gray-600">Track engagement and impact metrics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Download className="h-5 w-5 text-act-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Data Export</h4>
                    <p className="text-gray-600">CSV exports and API access</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-act-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Growth Insights</h4>
                    <p className="text-gray-600">Understand what drives supporter action</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button 
              onClick={() => navigateToPage('get-started')}
              className="bg-act-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-act-teal-700 transition-colors"
            >
              Try the Platform
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'why') {
    return (
      <div className="min-h-screen bg-white">
        {renderNavigation()}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button 
            onClick={() => navigateToPage('home')}
            className="flex items-center text-act-teal-600 hover:text-act-teal-700 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </button>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why ACTTogether.us?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built by organizers, for organizers. Trusted by hundreds of mission-driven organizations.
            </p>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-act-teal-600 mb-2">1M+</div>
              <div className="text-gray-600">Actions Organized</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-act-teal-600 mb-2">500+</div>
              <div className="text-gray-600">Organizations Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-act-teal-600 mb-2">30%</div>
              <div className="text-gray-600">Fewer No-Shows</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-act-teal-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-sm border text-center">
              <Award className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Impact</h3>
              <p className="text-gray-600">
                Over 1 million actions organized and 500+ organizations served across the country.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border text-center">
              <Shield className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security with 99.9% uptime. Your data and supporters are protected.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border text-center">
              <Users className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Support</h3>
              <p className="text-gray-600">
                Dedicated support team with organizing experience. We're here to help you succeed.
              </p>
            </div>
          </div>

          {/* Additional Why Choose Us Content */}
          <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              What Sets Us Apart
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Globe className="h-6 w-6 text-act-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Network Access</h4>
                    <p className="text-gray-600">Connect with our supporter network and cross-promote events with like-minded organizations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Lock className="h-6 w-6 text-act-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data Privacy</h4>
                    <p className="text-gray-600">Your supporter data remains yours. We never share or sell personal information.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Zap className="h-6 w-6 text-act-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Easy Integration</h4>
                    <p className="text-gray-600">Seamlessly connect with your existing tools and workflows through our robust API.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Heart className="h-6 w-6 text-act-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Mission Aligned</h4>
                    <p className="text-gray-600">Built specifically for organizations working to create positive social change.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => navigateToPage('get-started')}
              className="bg-act-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-act-teal-700 transition-colors"
            >
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'volunteer') {
    return (
      <div className="min-h-screen bg-white">
        {renderNavigation()}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button 
            onClick={() => navigateToPage('home')}
            className="flex items-center text-act-teal-600 hover:text-act-teal-700 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </button>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Volunteer with ACTTogether.us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our community of passionate volunteers helping organizations create lasting change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How You Can Help</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-act-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Community Support</h4>
                    <p className="text-gray-600">Help new organizations get started and share best practices with our community.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <GraduationCap className="h-6 w-6 text-act-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Training & Education</h4>
                    <p className="text-gray-600">Lead workshops and create educational content for organizers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MessageCircle className="h-6 w-6 text-act-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Peer Mentoring</h4>
                    <p className="text-gray-600">Guide organizations through their first campaigns and events.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Volunteer Application</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-600 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-600 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Interest</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-600 focus:border-transparent">
                    <option>Community Support</option>
                    <option>Training & Education</option>
                    <option>Peer Mentoring</option>
                    <option>Technical Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                  <textarea rows="3" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-600 focus:border-transparent" placeholder="Tell us about your organizing or volunteer experience..."></textarea>
                </div>
                <button type="submit" className="w-full bg-act-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors">
                  Apply to Volunteer
                </button>
              </form>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Volunteer Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Star className="h-8 w-8 text-act-teal-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Recognition</h4>
                <p className="text-gray-600">Get recognized for your contributions to the community</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-act-teal-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Network</h4>
                <p className="text-gray-600">Connect with like-minded organizers and activists</p>
              </div>
              <div className="text-center">
                <GraduationCap className="h-8 w-8 text-act-teal-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Skills</h4>
                <p className="text-gray-600">Develop new organizing and leadership skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'resources') {
    return (
      <div className="min-h-screen bg-white">
        {renderNavigation()}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button 
            onClick={() => navigateToPage('home')}
            className="flex items-center text-act-teal-600 hover:text-act-teal-700 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </button>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Resources & Support
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed with organizing, from guides to community support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <BookOpen className="h-8 w-8 text-act-teal-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Knowledge Base</h3>
              <p className="text-gray-600 mb-4">Comprehensive guides, tutorials, and best practices for organizing.</p>
              <button className="text-act-teal-600 hover:text-act-teal-700 font-medium">
                Browse Articles →
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <MessageCircle className="h-8 w-8 text-act-teal-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Community Forum</h3>
              <p className="text-gray-600 mb-4">Connect with other organizers, ask questions, and share experiences.</p>
              <button className="text-act-teal-600 hover:text-act-teal-700 font-medium">
                Join Discussion →
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <HelpCircle className="h-8 w-8 text-act-teal-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Help Center</h3>
              <p className="text-gray-600 mb-4">Get quick answers to common questions and technical support.</p>
              <button className="text-act-teal-600 hover:text-act-teal-700 font-medium">
                Get Help →
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <GraduationCap className="h-8 w-8 text-act-teal-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Training Programs</h3>
              <p className="text-gray-600 mb-4">Live workshops and courses on organizing, digital strategy, and more.</p>
              <button className="text-act-teal-600 hover:text-act-teal-700 font-medium">
                View Schedule →
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <FileText className="h-8 w-8 text-act-teal-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Templates & Tools</h3>
              <p className="text-gray-600 mb-4">Ready-to-use templates for events, emails, and campaign materials.</p>
              <button className="text-act-teal-600 hover:text-act-teal-700 font-medium">
                Download Tools →
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <Phone className="h-8 w-8 text-act-teal-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">1-on-1 Support</h3>
              <p className="text-gray-600 mb-4">Schedule personalized support sessions with our organizing experts.</p>
              <button className="text-act-teal-600 hover:text-act-teal-700 font-medium">
                Book Session →
              </button>
            </div>
          </div>

          {/* Featured Resources */}
          <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Getting Started Guide</h4>
                <p className="text-gray-600 mb-4">Complete walkthrough for new organizations joining the platform.</p>
                <button className="bg-act-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-act-teal-700 transition-colors">
                  Download PDF
                </button>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Event Planning Toolkit</h4>
                <p className="text-gray-600 mb-4">Templates and checklists for successful event organization.</p>
                <button className="bg-act-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-act-teal-700 transition-colors">
                  Access Toolkit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'login') {
    return (
      <div className="min-h-screen bg-gray-50">
        {renderNavigation()}
        
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <button 
                onClick={() => navigateToPage('home')}
                className="flex items-center text-act-teal-600 hover:text-act-teal-700 mb-8"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </button>
              
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">Sign in to your account</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Or{' '}
                  <button 
                    onClick={() => navigateToPage('get-started')}
                    className="font-medium text-act-teal-600 hover:text-act-teal-500"
                  >
                    start your free account
                  </button>
                </p>
              </div>
            </div>
            
            <div className="bg-white py-8 px-6 shadow rounded-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-act-teal-500 focus:border-act-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-act-teal-500 focus:border-act-teal-500"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-act-teal-600 focus:ring-act-teal-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-act-teal-600 hover:text-act-teal-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-act-teal-600 hover:bg-act-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-act-teal-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'get-started') {
    return (
      <div className="min-h-screen bg-white">
        {renderNavigation()}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button 
            onClick={() => navigateToPage('home')}
            className="flex items-center text-act-teal-600 hover:text-act-teal-700 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </button>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to get started?
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your path to building stronger communities and driving meaningful action.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg border">
              <div className="text-act-teal-600 mb-4">
                <Star className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Free Demo</h3>
              <p className="text-gray-600 mb-6 text-center">
                Get a personalized walkthrough of our core features including volunteer conversion, community building, and list growth.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-act-teal-600 mr-2 flex-shrink-0" />
                  30-minute personalized demo
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-act-teal-600 mr-2 flex-shrink-0" />
                  Custom strategy consultation
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-act-teal-600 mr-2 flex-shrink-0" />
                  Q&A with organizing experts
                </li>
              </ul>
              <button className="w-full bg-act-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors">
                Schedule Demo
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border">
              <div className="text-act-teal-600 mb-4">
                <Zap className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Starter Account</h3>
              <p className="text-gray-600 mb-6 text-center">
                Free for teams up to 5 members. Includes 5 events/actions, max 50 signups or 500 petition signatures.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-act-teal-600 mr-2 flex-shrink-0" />
                  Up to 5 team members
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-act-teal-600 mr-2 flex-shrink-0" />
                  5 events or actions
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-act-teal-600 mr-2 flex-shrink-0" />
                  Basic analytics & support
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Start Free
              </button>
            </div>
          </div>

          {/* Additional Get Started Content */}
          <div className="bg-gray-50 rounded-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What happens next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-act-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">1</div>
                <h4 className="font-semibold text-gray-900 mb-2">Setup Your Account</h4>
                <p className="text-gray-600">Quick 5-minute setup process to get your organization profile ready.</p>
              </div>
              <div className="text-center">
                <div className="bg-act-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">2</div>
                <h4 className="font-semibold text-gray-900 mb-2">Create Your First Event</h4>
                <p className="text-gray-600">Use our guided wizard to create your first action or event.</p>
              </div>
              <div className="text-center">
                <div className="bg-act-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">3</div>
                <h4 className="font-semibold text-gray-900 mb-2">Start Mobilizing</h4>
                <p className="text-gray-600">Share your events and watch your community grow and take action.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Home page (default)
  return (
    <div className="min-h-screen bg-white">
      {renderNavigation()}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Unlock the full potential of your
              <span className="bg-gradient-to-r from-act-teal-600 to-blue-600 bg-clip-text text-transparent block">
                supporters
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The platform built for nonprofits, campaigns, unions, and advocacy groups to organize, mobilize, and create lasting impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => navigateToPage('get-started')}
                className="bg-act-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-act-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Get Started Free
              </button>
              <button className="flex items-center space-x-2 text-act-teal-600 hover:text-act-teal-700 px-6 py-4 text-lg font-semibold group">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Target Audiences */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <Heart className="h-8 w-8 text-act-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Nonprofits</h3>
                <p className="text-sm text-gray-600">Scale your mission</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <Vote className="h-8 w-8 text-act-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Campaigns</h3>
                <p className="text-sm text-gray-600">Win elections</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <Users className="h-8 w-8 text-act-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Unions</h3>
                <p className="text-sm text-gray-600">Unite members</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <Megaphone className="h-8 w-8 text-act-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Advocacy</h3>
                <p className="text-sm text-gray-600">Drive change</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-act-teal-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="py-20 bg-act-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose your path to building stronger communities and driving meaningful action.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-act-teal-600 mb-4">
                <Star className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Free Demo</h3>
              <p className="text-gray-600 mb-6">
                Get a personalized walkthrough of our core features including volunteer conversion, community building, and list growth.
              </p>
              <button className="w-full bg-act-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors">
                Schedule Demo
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-act-teal-600 mb-4">
                <Zap className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Starter Account</h3>
              <p className="text-gray-600 mb-6">
                Free for teams up to 5 members. Includes 5 events/actions, max 50 signups or 500 petition signatures.
              </p>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Start Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section id="platform" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platform Features – How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to organize, mobilize, and measure your impact in one powerful platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-act-teal-600 mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Additional Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-act-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Network Access</h4>
                  <p className="text-gray-600">Access to Mobilize supporter network + cross-promotions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-act-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Integrations</h4>
                  <p className="text-gray-600">Connect with your existing tools and workflows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solutions for Your Organization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored features and strategies for different types of mission-driven organizations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(solutions).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === key
                    ? 'bg-act-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {solutions[key].title}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {solutions[activeTab].title}
              </h3>
              <p className="text-xl text-act-teal-600 font-semibold mb-6">
                {solutions[activeTab].subtitle}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {solutions[activeTab].description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {solutions[activeTab].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-act-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button 
                  onClick={() => navigateToPage('solutions')}
                  className="bg-act-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why ACTTogether Section */}
      <section id="why" className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why ACTTogether.us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built by organizers, for organizers. Trusted by hundreds of mission-driven organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <Award className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Impact</h3>
              <p className="text-gray-600">
                Over 1 million actions organized and 500+ organizations served across the country.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <Shield className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security with 99.9% uptime. Your data and supporters are protected.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <Users className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Support</h3>
              <p className="text-gray-600">
                Dedicated support team with organizing experience. We're here to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About ACTTogether.us
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're a mission-driven platform dedicated to empowering nonprofits, unions, campaigns, and grassroots organizations with the tools they need to create lasting change.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Founded by organizers who understood the challenges of mobilizing supporters, we've built a platform that combines ease of use with powerful features, helping organizations of all sizes amplify their impact and build stronger communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigateToPage('volunteer')}
                className="bg-act-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors"
              >
                Join Our Mission
              </button>
              <button className="border border-act-teal-600 text-act-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Learn Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/Together.png" 
                  alt="ACTTogether.us" 
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-400">
                Empowering organizations to create lasting change through coordinated action.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => navigateToPage('platform')} className="hover:text-white transition-colors">Features</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><button onClick={() => navigateToPage('resources')} className="hover:text-white transition-colors">Help Center</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Jobs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ACTTogether.us. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;