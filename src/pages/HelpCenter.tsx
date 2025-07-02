import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search,
  Book,
  MessageSquare,
  Mail,
  Phone,
  Clock,
  Users,
  Settings,
  CreditCard,
  Shield,
  HelpCircle,
  ChevronRight,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

function HelpCenter() {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Learn the basics of using ACTTogether.us',
      articles: [
        'Creating your first event',
        'Setting up your organization profile',
        'Inviting team members',
        'Understanding the dashboard'
      ]
    },
    {
      icon: Users,
      title: 'Volunteer Management',
      description: 'Organize and coordinate your volunteers',
      articles: [
        'Recruiting volunteers',
        'Managing volunteer shifts',
        'Volunteer communication tools',
        'Tracking volunteer hours'
      ]
    },
    {
      icon: Settings,
      title: 'Platform Features',
      description: 'Make the most of our organizing tools',
      articles: [
        'Event management features',
        'Automation and workflows',
        'Analytics and reporting',
        'Integration options'
      ]
    },
    {
      icon: CreditCard,
      title: 'Billing & Subscriptions',
      description: 'Manage your account and payments',
      articles: [
        'Understanding pricing plans',
        'Upgrading your subscription',
        'Payment methods and billing',
        'Canceling your subscription'
      ]
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Keep your data safe and secure',
      articles: [
        'Data protection policies',
        'User permissions and roles',
        'Two-factor authentication',
        'GDPR compliance'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Troubleshooting',
      description: 'Solve common issues quickly',
      articles: [
        'Login and access issues',
        'Event creation problems',
        'Email delivery issues',
        'Browser compatibility'
      ]
    }
  ];

  const popularArticles = [
    'How to create your first event',
    'Setting up automated reminders',
    'Understanding volunteer analytics',
    'Integrating with other tools',
    'Managing team permissions',
    'Customizing your organization profile'
  ];

  const contactOptions = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team',
      availability: 'Mon-Fri, 9am-6pm EST',
      action: 'Start Chat',
      primary: true
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 24 hours',
      action: 'Send Email',
      link: 'mailto:support@acttogether.us'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with our team directly',
      availability: 'Enterprise customers only',
      action: 'Schedule Call'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How can we help you?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to your questions, learn how to use our platform, and get the support you need.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-act-teal-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularArticles.map((article, index) => (
              <button
                key={index}
                className="text-left p-4 border border-gray-200 rounded-lg hover:border-act-teal-300 hover:bg-act-teal-50 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 group-hover:text-act-teal-700">{article}</span>
                  <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-act-teal-600" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find detailed guides and tutorials organized by topic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-act-teal-100 rounded-lg p-3">
                    <category.icon className="h-6 w-6 text-act-teal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <button className="text-act-teal-600 hover:text-act-teal-700 text-sm hover:underline text-left">
                        {article}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <button className="text-act-teal-600 hover:text-act-teal-700 font-medium text-sm flex items-center space-x-1">
                  <span>View all articles</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still need help?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our support team is here to help you succeed with ACTTogether.us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactOptions.map((option, index) => (
              <div key={index} className={`rounded-xl p-6 text-center ${
                option.primary 
                  ? 'bg-act-teal-600 text-white' 
                  : 'bg-gray-50 border border-gray-200'
              }`}>
                <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${
                  option.primary 
                    ? 'bg-white bg-opacity-20' 
                    : 'bg-act-teal-100'
                }`}>
                  <option.icon className={`h-8 w-8 ${
                    option.primary ? 'text-white' : 'text-act-teal-600'
                  }`} />
                </div>
                
                <h3 className={`text-lg font-semibold mb-2 ${
                  option.primary ? 'text-white' : 'text-gray-900'
                }`}>
                  {option.title}
                </h3>
                
                <p className={`text-sm mb-2 ${
                  option.primary ? 'text-blue-100' : 'text-gray-600'
                }`}>
                  {option.description}
                </p>
                
                <p className={`text-xs mb-4 ${
                  option.primary ? 'text-blue-200' : 'text-gray-500'
                }`}>
                  {option.availability}
                </p>
                
                {option.link ? (
                  <a
                    href={option.link}
                    className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      option.primary
                        ? 'bg-white text-act-teal-600 hover:bg-gray-100'
                        : 'bg-act-teal-600 text-white hover:bg-act-teal-700'
                    }`}
                  >
                    <span>{option.action}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <button className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    option.primary
                      ? 'bg-white text-act-teal-600 hover:bg-gray-100'
                      : 'bg-act-teal-600 text-white hover:bg-act-teal-700'
                  }`}>
                    <span>{option.action}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore more ways to learn and connect with the ACTTogether.us community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              to="/resources"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center group"
            >
              <Book className="h-8 w-8 text-act-teal-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-act-teal-600">
                Learning Center
              </h3>
              <p className="text-gray-600 text-sm">
                Guides, tutorials, and best practices
              </p>
            </Link>

            <a 
              href="https://acttogether.us"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center group"
            >
              <Users className="h-8 w-8 text-act-teal-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-act-teal-600">
                Training Sessions
              </h3>
              <p className="text-gray-600 text-sm">
                Live training and workshops
              </p>
            </a>

            <Link 
              to="/volunteer"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center group"
            >
              <MessageSquare className="h-8 w-8 text-act-teal-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-act-teal-600">
                Community Forum
              </h3>
              <p className="text-gray-600 text-sm">
                Connect with other organizers
              </p>
            </Link>

            <Link 
              to="/platform"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center group"
            >
              <HelpCircle className="h-8 w-8 text-act-teal-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-act-teal-600">
                Platform Status
              </h3>
              <p className="text-gray-600 text-sm">
                System status and updates
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HelpCenter;