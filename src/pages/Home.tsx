import React, { useState, useEffect } from 'react';
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
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const heroMessages = [
    {
      title: "Organize. Mobilize. Act Together.",
      subtitle: "Because change doesn't happen by itself."
    },
    {
      title: "Your Movement Has a Platform.",
      subtitle: "ACTTogether gives you the tech to take on power."
    },
    {
      title: "Powerful Action Starts With Us.",
      subtitle: "Resources. Training. Strategy. Community."
    },
    {
      title: "Build a Better World. We've Got the Toolkit.",
      subtitle: "Petitions, events, data—everything you need to organize."
    }
  ];

  // Rotate messages every 8 seconds (slowed down from 4 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % heroMessages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [heroMessages.length]);

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
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 py-20 relative overflow-hidden transition-colors duration-200">
        {/* Decorative Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large organic shape - top right */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-amber-200/40 to-orange-300/40 dark:from-amber-900/20 dark:to-orange-900/20 rounded-full transform rotate-12 opacity-60"></div>
          
          {/* Medium organic blob - middle left */}
          <div className="absolute top-1/3 -left-24 w-80 h-72 bg-gradient-to-br from-teal-200/50 to-emerald-300/50 dark:from-teal-900/25 dark:to-emerald-900/25 rounded-full transform -rotate-45 opacity-50"></div>
          
          {/* Small circular shape - bottom right */}
          <div className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-br from-purple-200/40 to-pink-300/40 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full opacity-40"></div>
          
          {/* Elongated oval - top left */}
          <div className="absolute top-16 left-8 w-64 h-32 bg-gradient-to-r from-blue-200/30 to-indigo-300/30 dark:from-blue-900/15 dark:to-indigo-900/15 rounded-full transform rotate-45 opacity-35"></div>
          
          {/* Medium blob - center right */}
          <div className="absolute top-1/2 right-8 w-56 h-40 bg-gradient-to-bl from-yellow-200/35 to-amber-300/35 dark:from-yellow-900/18 dark:to-amber-900/18 rounded-full transform -rotate-12 opacity-45"></div>
          
          {/* Small accent shape - bottom left */}
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-tr from-rose-200/40 to-red-300/40 dark:from-rose-900/20 dark:to-red-900/20 rounded-full opacity-30"></div>
          
          {/* Organic shape - middle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-48 bg-gradient-to-br from-cyan-200/25 to-sky-300/25 dark:from-cyan-900/12 dark:to-sky-900/12 rounded-full transform rotate-75 opacity-25"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="min-h-[200px] flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-all duration-500 ease-in-out">
                <span className="block animate-fade-in">
                  {heroMessages[currentMessageIndex].title}
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-500 ease-in-out animate-slide-up">
                {heroMessages[currentMessageIndex].subtitle}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                to="/get-started"
                className="bg-act-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-act-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Join Us
              </Link>
              <button className="flex items-center space-x-2 text-act-teal-600 dark:text-act-teal-400 hover:text-act-teal-700 dark:hover:text-act-teal-300 px-6 py-4 text-lg font-semibold group transition-colors duration-200">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>See How It Works</span>
              </button>
            </div>

            {/* Message Indicators */}
            <div className="flex justify-center space-x-2 mb-12">
              {heroMessages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMessageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentMessageIndex 
                      ? 'bg-act-teal-600 scale-125' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Show message ${index + 1}`}
                />
              ))}
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
                <Shield className="h-8 w-8 text-act-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Privacy First</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200">No tracking, no ads, no surveillance</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
                <Network className="h-8 w-8 text-act-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Decentralized</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200">Connect across the decentralized network</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
                <Users className="h-8 w-8 text-act-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Community Owned</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200">Built by organizers, for organizers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900 relative transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-act-teal-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 transition-colors duration-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Mobilizon Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 relative transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              What is ActTogether?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
              An alternative to Facebook Events and corporate event platforms. ACTTogether.us is focused on social justice organizing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="text-act-teal-600 mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm transition-colors duration-200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-200">Why Choose Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-act-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white transition-colors duration-200">No Corporate Control</h4>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Your organizing isn't subject to corporate algorithms or censorship</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-act-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white transition-colors duration-200">Data Sovereignty</h4>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Your community's data stays with your community</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-act-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white transition-colors duration-200">Network Effects</h4>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Connect with other instances while maintaining autonomy</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-act-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white transition-colors duration-200">Movement Infrastructure</h4>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Technology built by and for social movements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white dark:bg-gray-900 relative transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              Organizing for Every Movement
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
              Privacy-focused tools for different types of mission-driven organizations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(solutions).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === key
                    ? 'bg-act-teal-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {solutions[key].title}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 md:p-12 transition-colors duration-200">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                {solutions[activeTab].title}
              </h3>
              <p className="text-xl text-act-teal-600 font-semibold mb-6">
                {solutions[activeTab].subtitle}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-200">
                {solutions[activeTab].description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {solutions[activeTab].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-act-teal-600 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 transition-colors duration-200">{benefit}</span>
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
      <section id="why" className="py-20 bg-gradient-to-br from-blue-50 to-gray-50 dark:from-blue-900/20 dark:to-gray-800 relative transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              Why ACTTogether.us?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
              Our group is specifically focused on social justice organizing and movement building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm text-center transition-colors duration-200">
              <Heart className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Movement Focused</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                Specifically designed for nonprofits, campaigns, unions, and advocacy organizations.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm text-center transition-colors duration-200">
              <Shield className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Privacy Committed</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                No tracking, no ads, no corporate surveillance. Your organizing data stays private.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm text-center transition-colors duration-200">
              <Users className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Organizer Run</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
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
      <section className="py-20 bg-white dark:bg-gray-900 relative transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
              About Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-200">
              ACTTogether.us is a Mobilizon instance dedicated to empowering social justice organizations with privacy-respecting, community-controlled organizing tools.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-200">
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
                className="border border-act-teal-600 text-act-teal-600 dark:text-act-teal-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
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