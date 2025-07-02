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
  Clock
} from 'lucide-react';

function Platform() {
  const [activeFeature, setActiveFeature] = useState('events');

  const coreFeatures = [
    {
      id: 'events',
      icon: Calendar,
      title: 'Event Management',
      description: 'Create and manage all types of events',
      details: {
        headline: 'Powerful Event Creation & Management',
        description: 'From single events to complex recurring series, manage everything in one place.',
        features: [
          'Single, recurring, and virtual events',
          'Custom registration forms',
          'Automated reminders and follow-ups',
          'Check-in and attendance tracking',
          'Volunteer host capabilities',
          'Integration with calendar systems'
        ],
        benefits: [
          '30% reduction in no-shows',
          'Streamlined event logistics',
          'Better attendee experience'
        ]
      }
    },
    {
      id: 'volunteers',
      icon: Users,
      title: 'Volunteer Management',
      description: 'Recruit, organize, and retain volunteers',
      details: {
        headline: 'Complete Volunteer Lifecycle Management',
        description: 'From recruitment to retention, manage your entire volunteer program efficiently.',
        features: [
          'Volunteer recruitment campaigns',
          'Skill-based matching',
          'Shift scheduling and management',
          'Training and onboarding workflows',
          'Recognition and rewards system',
          'Volunteer communication tools'
        ],
        benefits: [
          'Higher volunteer retention',
          'Better volunteer experience',
          'Reduced administrative overhead'
        ]
      }
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Data & Analytics',
      description: 'Measure impact with comprehensive reporting',
      details: {
        headline: 'Data-Driven Decision Making',
        description: 'Get insights into your organization\'s performance with powerful analytics tools.',
        features: [
          'Real-time dashboards',
          'Custom report builder',
          'CSV export capabilities',
          'API access for integrations',
          'SQL query interface',
          'Grant reporting templates'
        ],
        benefits: [
          'Better strategic decisions',
          'Improved grant applications',
          'Clear impact measurement'
        ]
      }
    },
    {
      id: 'automation',
      icon: Zap,
      title: 'Automation',
      description: 'Automate workflows to save time',
      details: {
        headline: 'Smart Automation That Works',
        description: 'Reduce manual work with intelligent automation that adapts to your needs.',
        features: [
          'Email and SMS sequences',
          'Follow-up automation',
          'Reminder systems',
          'Workflow triggers',
          'Smart segmentation',
          'Behavioral targeting'
        ],
        benefits: [
          'Save 10+ hours per week',
          'Consistent communication',
          'Higher engagement rates'
        ]
      }
    }
  ];

  const additionalFeatures = [
    {
      icon: MessageSquare,
      title: 'Multi-Channel Communication',
      description: 'Reach supporters via email, SMS, push notifications, and social media'
    },
    {
      icon: Globe,
      title: 'Network Access',
      description: 'Access to Mobilize supporter network and cross-promotional opportunities'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with GDPR and data protection compliance'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimization',
      description: 'Fully responsive design that works perfectly on all devices'
    },
    {
      icon: Settings,
      title: 'Integrations',
      description: 'Connect with your existing tools including CRMs, email platforms, and more'
    },
    {
      icon: Target,
      title: 'Targeting & Segmentation',
      description: 'Advanced audience segmentation for personalized outreach'
    }
  ];

  const integrations = [
    'Salesforce', 'MailChimp', 'Constant Contact', 'Action Network', 
    'NationBuilder', 'Zoom', 'Google Workspace', 'Microsoft 365',
    'Slack', 'Zapier', 'Stripe', 'PayPal'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The Complete Platform for
              <span className="bg-gradient-to-r from-act-teal-600 to-blue-600 bg-clip-text text-transparent block">
                Mission-Driven Organizations
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Everything you need to organize, mobilize, and measure your impact in one powerful, easy-to-use platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/get-started"
                className="bg-act-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-act-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Start Free Trial
              </Link>
              <button className="flex items-center space-x-2 text-act-teal-600 hover:text-act-teal-700 px-6 py-4 text-lg font-semibold group">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Watch Platform Demo</span>
              </button>
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
              <div className="text-3xl font-bold text-act-teal-600 mb-2">30%</div>
              <div className="text-gray-600">Fewer No-Shows</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-act-teal-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools designed specifically for mission-driven organizations.
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
                        See {feature.title} in Action
                      </h4>
                      <p className="text-gray-600 mb-6">
                        Get a personalized demo of how {feature.title.toLowerCase()} can transform your organization.
                      </p>
                      <Link 
                        to="/get-started"
                        className="bg-act-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors inline-flex items-center space-x-2"
                      >
                        <span>Additional Features</span>
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
              Additional Platform Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Even more tools to help you succeed in your mission.
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

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integrations & Compatibility
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect ACTTogether.us with your existing tools and workflows.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-sm font-medium text-gray-700">{integration}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Don't see your tool? We offer custom integrations and API access.</p>
              <Link 
                to="/get-started"
                className="text-act-teal-600 hover:text-act-teal-700 font-semibold"
              >
                Contact us about custom integrations →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-act-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Start free and scale as you grow. No hidden fees, no long-term contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
              <div className="text-3xl font-bold text-act-teal-600 mb-4">Free</div>
              <p className="text-gray-600 mb-6">Perfect for small organizations getting started</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-act-teal-600" />
                  <span className="text-gray-700">Up to 5 team members</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-act-teal-600" />
                  <span className="text-gray-700">5 events/actions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-act-teal-600" />
                  <span className="text-gray-700">50 signups max</span>
                </li>
              </ul>
              <Link 
                to="/get-started"
                className="w-full bg-act-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors block text-center"
              >
                Start Free
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-yellow-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional</h3>
              <div className="text-3xl font-bold text-act-teal-600 mb-4">$9.99 per 1000 members<span className="text-lg text-gray-600">/month</span></div>
              <p className="text-gray-600 mb-6">For growing organizations with regular activities</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-act-teal-600" />
                  <span className="text-gray-700">Unlimited team members</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-act-teal-600" />
                  <span className="text-gray-700">Unlimited events</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-act-teal-600" />
                  <span className="text-gray-700">Advanced analytics</span>
                </li>
              </ul>
              <Link 
                to="/get-started"
                className="w-full bg-act-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors block text-center"
              >
                Start Trial
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-act-teal-600 mb-4">Custom</div>
              <p className="text-gray-600 mb-6">For large organizations with complex needs</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-act-teal-600" />
                  <span className="text-gray-700">Custom integrations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-act-teal-600" />
                  <span className="text-gray-700">Dedicated support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-act-teal-600" />
                  <span className="text-gray-700">SLA guarantees</span>
                </li>
              </ul>
              <Link 
                to="/get-started"
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors block text-center"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to see the platform in action?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a personalized demo and see how ACTTogether.us can transform your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/get-started"
              className="bg-act-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors"
            >
              Schedule Demo
            </Link>
            <Link 
              to="/get-started"
              className="border border-act-teal-600 text-act-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Platform;