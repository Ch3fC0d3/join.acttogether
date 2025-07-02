import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Award
} from 'lucide-react';

function Home() {
  const [activeTab, setActiveTab] = useState('nonprofits');

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

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 relative">
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
              <Link 
                to="/get-started"
                className="bg-act-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-act-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Get Started Free
              </Link>
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
      <section className="py-16 bg-white relative">
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
      <section id="get-started" className="py-20 bg-act-teal-600 relative">
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
              <Link 
                to="/get-started"
                className="w-full bg-act-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors block text-center"
              >
                Schedule Demo
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-act-teal-600 mb-4">
                <Zap className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Starter Account</h3>
              <p className="text-gray-600 mb-6">
                Free for teams up to 5 members. Includes 5 events/actions, max 50 signups or 500 petition signatures.
              </p>
              <Link 
                to="/get-started"
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors block text-center"
              >
                Start Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section id="platform" className="py-20 bg-gray-50 relative">
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

          <div className="text-center mt-12">
            <Link 
              to="/platform"
              className="bg-act-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Explore All Features</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white relative">
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
                <Link 
                  to="/solutions"
                  className="bg-act-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why ACTTogether Section */}
      <section id="why" className="py-20 bg-gradient-to-br from-blue-50 to-gray-50 relative">
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

          <div className="text-center mt-12">
            <Link 
              to="/why"
              className="bg-act-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white relative">
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
              <Link 
                to="/volunteer"
                className="bg-act-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors"
              >
                Join Our Mission
              </Link>
              <Link 
                to="/why"
                className="border border-act-teal-600 text-act-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Learn Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;