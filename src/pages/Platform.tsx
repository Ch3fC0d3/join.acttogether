import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar,
  Users,
  BarChart3,
  Zap,
  MessageSquare,
  Globe,
  Shield,
  Smartphone,
  Mail,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  Settings,
  Target,
  TrendingUp,
  Clock,
  Network,
  Lock,
  Server
} from 'lucide-react';

function Platform() {
  const [activeFeature, setActiveFeature] = useState('events');

  const coreFeatures = [
    {
      id: 'events',
      icon: Calendar,
      title: 'Events',
      description: 'Create events that connect across the decentralized network',
      details: {
        headline: 'Privacy-First Event Organization',
        description: 'Create and manage events without corporate surveillance or algorithmic manipulation.',
        features: [
          'Event discovery',
          'Privacy-protected RSVPs',
          'No tracking or data mining',
          'Community-controlled moderation',
          'Cross-instance connectivity',
          'Democratic governance'
        ],
        benefits: [
          'No corporate surveillance',
          'Community ownership',
          'Censorship resistance'
        ]
      }
    },
    {
      id: 'groups',
      icon: Users,
      title: 'Community Groups',
      description: 'Build and manage organizing groups with privacy protection',
      details: {
        headline: 'Secure Community Building',
        description: 'Create groups for your organization without exposing member data to corporations.',
        features: [
          'Private group communications',
          'Member privacy protection',
          'Democratic group governance',
          'Group discovery',
          'No algorithmic manipulation',
          'Community-controlled policies'
        ],
        benefits: [
          'Member privacy protected',
          'No corporate data mining',
          'Community self-governance'
        ]
      }
    },
    {
      id: 'federation',
      icon: Network,
      title: 'Federation Network',
      description: 'Connect with other instances while maintaining autonomy',
      details: {
        headline: 'Decentralized Organizing Network',
        description: 'Be part of a global network while keeping control of your community\'s data.',
        features: [
          'Cross-instance event sharing',
          'Group discovery',
          'Decentralized infrastructure',
          'No single point of failure',
          'Community-to-community connections',
          'Autonomous instance governance'
        ],
        benefits: [
          'Global reach, local control',
          'Resilient infrastructure',
          'Democratic networking'
        ]
      }
    },
    {
      id: 'privacy',
      icon: Shield,
      title: 'Privacy Protection',
      description: 'Built from the ground up to respect user privacy',
      details: {
        headline: 'Privacy by Design',
        description: 'Every feature is designed to protect organizer and community privacy.',
        features: [
          'No tracking cookies',
          'No data mining',
          'No corporate surveillance',
          'GDPR compliant by design',
          'Minimal data collection',
          'User-controlled privacy settings'
        ],
        benefits: [
          'Complete privacy protection',
          'No corporate exploitation',
          'User data sovereignty'
        ]
      }
    }
  ];

  const additionalFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Privacy',
      description: 'No tracking, no ads, no corporate surveillance of your organizing activities'
    },
    {
      icon: Server,
      title: 'Open Source',
      description: 'Transparent, auditable code that can\'t be bought or controlled by corporations'
    },
    {
      icon: Globe,
      title: 'Community Network',
      description: 'Connect with organizers worldwide while maintaining local community control'
    },
    {
      icon: Users,
      title: 'Community Governance',
      description: 'Democratic decision-making by and for the organizing community'
    },
    {
      icon: MessageSquare,
      title: 'Secure Communications',
      description: 'Private messaging and group discussions without corporate eavesdropping'
    },
    {
      icon: Target,
      title: 'Movement Focused',
      description: 'Features designed specifically for social justice organizing and activism'
    }
  ];

  const mobilizonInstances = [
    'mobilizon.org', 'mobilizon.fr', 'events.social', 'mobilize.berlin', 
    'mobilizon.it', 'events.activism.net', 'mobilizon.cat', 'events.resist.ca'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Organize Without
              <span className="bg-gradient-to-r from-act-teal-600 to-blue-600 bg-clip-text text-transparent block">
                Surveillance
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              ACTTogether.us is a privacy-first platform for organizing events and building communities without corporate surveillance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/get-started"
                className="bg-act-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-act-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Join Us
              </Link>
              <a
                href="https://ActTogether.us"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-act-teal-600 hover:text-act-teal-700 px-6 py-4 text-lg font-semibold group"
              >
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Learn About Us</span>
              </a>
            </div>
          </div>

          {/* Platform Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-act-teal-600 mb-2">500+</div>
              <div className="text-gray-600">Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-act-teal-600 mb-2">1M+</div>
              <div className="text-gray-600">Actions Organized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-act-teal-600 mb-2">0%</div>
              <div className="text-gray-600">Corporate Tracking</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-act-teal-600 mb-2">100%</div>
              <div className="text-gray-600">Community Owned</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mobilizon Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Privacy-first tools designed specifically for movement organizing and community building.
            </p>
          </div>

          {/* Feature Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {coreFeatures.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeFeature === feature.id
                    ? 'bg-act-teal-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <feature.icon className="h-5 w-5" />
                <span>{feature.title}</span>
              </button>
            ))}
          </div>

          {/* Active Feature Details */}
          {coreFeatures.map((feature) => (
            activeFeature === feature.id && (
              <div key={feature.id} className="bg-gray-50 rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {feature.details.headline}
                    </h3>
                    <p className="text-lg text-gray-600 mb-8">
                      {feature.details.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {feature.details.features.map((item, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-act-teal-600 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-act-teal-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {feature.details.benefits.map((benefit, index) => (
                          <li key={index} className="text-act-teal-700 font-medium">
                            • {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="text-center">
                      <feature.icon className="h-16 w-16 text-act-teal-600 mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        Experience {feature.title}
                      </h4>
                      <p className="text-gray-600 mb-6">
                        Join our Mobilizon instance to experience privacy-first organizing.
                      </p>
                      <Link 
                        to="/get-started"
                        className="bg-act-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors inline-flex items-center space-x-2"
                      >
                        <span>Join Instance</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ActTogether?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mobilizon offers everything corporate platforms do, but with privacy, community control, and movement values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
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
        </div>
      </section>

      {/* Federation Network */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Part of the Global Federation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ACTTogether.us connects with other Mobilizon instances worldwide while maintaining community autonomy.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Connected Instances in the Federation
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {mobilizonInstances.map((instance, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-sm font-medium text-gray-700">{instance}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Each instance is independently run but can connect and share events across the network.
              </p>
              <a 
                href="https://mobilizon.org/instances"
                target="_blank"
                rel="noopener noreferrer"
                className="text-act-teal-600 hover:text-act-teal-700 font-semibold"
              >
                Explore all Mobilizon instances →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Corporate Platforms vs. Mobilizon
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See why organizers are choosing ActTogether over corporate alternatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-red-50 rounded-xl p-8 border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-6 text-center">Corporate Platforms</h3>
              <ul className="space-y-3 text-red-700">
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Track and profile your members</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Sell your data to advertisers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Algorithm controls event visibility</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Can censor or ban your content</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Terms of service can change anytime</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Corporate shareholders control decisions</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-8 border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-6 text-center">Mobilizon Federation</h3>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>No tracking or surveillance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Your data stays with your community</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>No algorithmic manipulation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Community-controlled moderation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Democratic governance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Open source and transparent</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-act-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to organize without surveillance?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our Mobilizon instance and experience privacy-first organizing with global federation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/get-started"
              className="bg-white text-act-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Join Our Instance
            </Link>
            <a
              href="https://mobilizon.org"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-act-teal-600 transition-colors"
            >
              Learn About Mobilizon
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Platform;