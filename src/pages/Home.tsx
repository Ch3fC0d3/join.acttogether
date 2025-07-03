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
  Award,
  Globe,
  Lock,
  Network
} from 'lucide-react';

function Home() {
  const [activeTab, setActiveTab] = useState('nonprofits');

  const stats = [
    { number: '30%', label: 'fewer no-shows' },
    { number: '500+', label: 'organizations served' },
    { number: '1M+', label: 'actions organized' },
    { number: '100%', label: 'privacy-focused' }
  ];

  const features = [
    {
      icon: Calendar,
      title: 'Event Creation',
      description: 'Create events that connect across the decentralized network'
    },
    {
      icon: Shield,
      title: 'Privacy by Design',
      description: 'No tracking, no ads, no data mining - your data stays yours'
    },
    {
      icon: Network,
      title: 'Decentralized Network',
      description: 'Connect with other instances while maintaining autonomy'
    },
    {
      icon: Users,
      title: 'Community Organizing',
      description: 'Build movements without corporate surveillance'
    }
  ];

  const solutions = {
    nonprofits: {
      title: 'Nonprofits',
      subtitle: 'Organize without surveillance',
      description: 'Build your movement on a platform that respects your privacy and puts community before profit.',
      benefits: ['Privacy-first organizing', 'No corporate tracking', 'Community ownership', 'Federated networking']
    },
    campaigns: {
      title: 'Campaigns & Committees',
      subtitle: 'Democratic organizing tools',
      description: 'Organize campaigns on infrastructure you control, free from corporate manipulation and surveillance.',
      benefits: ['Voter privacy protection', 'Decentralized coordination', 'No algorithmic interference', 'Community-controlled data']
    },
    unions: {
      title: 'Unions',
      subtitle: 'Worker-controlled organizing',
      description: 'Unite your members on a platform built by and for the movement, not corporate interests.',
      benefits: ['Secure member communications', 'Worker-owned infrastructure', 'No corporate surveillance', 'Solidarity networking']
    },
    advocacy: {
      title: 'Advocacy Organizations',
      subtitle: 'Movement infrastructure',
      description: 'Build lasting movements on decentralized infrastructure that can\'t be shut down or manipulated.',
      benefits: ['Censorship resistance', 'Community governance', 'Cross-movement solidarity', 'Democratic technology']
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Organize without
              <span className="bg-gradient-to-r from-act-teal-600 to-blue-600 bg-clip-text text-transparent block">
                surveillance
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A privacy-focused platform for nonprofits, campaigns, unions, and advocacy groups. Built by the movement, for the movement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                to="/get-started"
                className="bg-act-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-act-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Join Us
              </Link>
              <button className="flex items-center space-x-2 text-act-teal-600 hover:text-act-teal-700 px-6 py-4 text-lg font-semibold group">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>See How It Works</span>
              </button>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <Shield className="h-8 w-8 text-act-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Privacy First</h3>
                <p className="text-sm text-gray-600">No tracking, no ads, no surveillance</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <Network className="h-8 w-8 text-act-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Decentralized</h3>
                <p className="text-sm text-gray-600">Connect across the decentralized network</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <Users className="h-8 w-8 text-act-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Community Owned</h3>
                <p className="text-sm text-gray-600">Built by organizers, for organizers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-act-teal-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Mobilizon Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is Mobilizon?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An alternative to Facebook Events and corporate event platforms. ACTTogether.us is focused on social justice organizing.
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
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Why Choose Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-act-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">No Corporate Control</h4>
                  <p className="text-gray-600">Your organizing isn't subject to corporate algorithms or censorship</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-act-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Data Sovereignty</h4>
                  <p className="text-gray-600">Your community's data stays with your community</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-act-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Network Effects</h4>
                  <p className="text-gray-600">Connect with other instances while maintaining autonomy</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-act-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Movement Infrastructure</h4>
                  <p className="text-gray-600">Technology built by and for social movements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Organizing for Every Movement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Privacy-focused tools for different types of mission-driven organizations.
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

      {/* Federation Network */}
      <section className="py-20 bg-act-teal-600 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Part of the ActTogether network.
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with organizers across the network while maintaining your community's autonomy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <Globe className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Global Network</h3>
              <p className="text-blue-100 text-sm">
                Connect with groups worldwide while keeping your data local
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <Lock className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Privacy Protected</h3>
              <p className="text-blue-100 text-sm">
                No corporate surveillance or data mining across the federation
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <Users className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Community Governed</h3>
              <p className="text-blue-100 text-sm">
                Democratic governance by and for the organizing community
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link 
              to="/get-started"
              className="bg-white text-act-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Join Us</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why This Instance */}
      <section id="why" className="py-20 bg-gradient-to-br from-blue-50 to-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why ACTTogether.us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our group is specifically focused on social justice organizing and movement building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <Heart className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Movement Focused</h3>
              <p className="text-gray-600">
                Specifically designed for nonprofits, campaigns, unions, and advocacy organizations.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <Shield className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy Committed</h3>
              <p className="text-gray-600">
                No tracking, no ads, no corporate surveillance. Your organizing data stays private.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <Users className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Organizer Run</h3>
              <p className="text-gray-600">
                Managed by experienced organizers who understand the needs of social movements.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/why"
              className="bg-act-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Learn More About Our Instance</span>
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
              About Our Mobilizon Instance
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              ACTTogether.us is a Mobilizon instance dedicated to empowering social justice organizations with privacy-respecting, community-controlled organizing tools.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              As part of the federated Mobilizon network, we provide all the benefits of decentralized organizing while focusing specifically on the needs of nonprofits, campaigns, unions, and advocacy groups working for positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/volunteer"
                className="bg-act-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors"
              >
                Join Our Community
              </Link>
              <Link 
                to="/why"
                className="border border-act-teal-600 text-act-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Learn About Mobilizon
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;