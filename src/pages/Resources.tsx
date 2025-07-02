import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen,
  Video,
  Download,
  Users,
  MessageSquare,
  Calendar,
  Search,
  Filter,
  ArrowRight,
  ExternalLink,
  FileText,
  Play,
  Headphones,
  Award,
  Target,
  TrendingUp,
  Zap
} from 'lucide-react';

function Resources() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'guides', label: 'Guides & Tutorials' },
    { id: 'webinars', label: 'Webinars' },
    { id: 'templates', label: 'Templates' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'best-practices', label: 'Best Practices' }
  ];

  const resources = [
    {
      id: 1,
      title: 'Complete Guide to Volunteer Recruitment',
      description: 'Learn proven strategies for finding, recruiting, and retaining volunteers for your organization.',
      category: 'guides',
      type: 'Guide',
      duration: '15 min read',
      icon: BookOpen,
      featured: true,
      tags: ['volunteers', 'recruitment', 'nonprofits'],
      downloadUrl: '/ACTTogether_Volunteer_Recruitment_Guide.pdf'
    },
    {
      id: 2,
      title: 'Maximizing Event Attendance: Best Practices',
      description: 'Discover how to reduce no-shows and increase engagement at your events.',
      category: 'guides',
      type: 'Guide',
      duration: '10 min read',
      icon: BookOpen,
      featured: true,
      tags: ['events', 'attendance', 'engagement'],
      downloadUrl: '/Maximize event attendance.pdf'
    },
    {
      id: 3,
      title: 'Campaign Event Planning Template',
      description: 'Ready-to-use template for planning successful campaign events and rallies.',
      category: 'templates',
      type: 'Template',
      duration: 'Download',
      icon: Download,
      featured: false,
      tags: ['campaigns', 'events', 'planning'],
      downloadUrl: '/ACTTogether_Campaign_Event_Planning_Template.pdf'
    },
    {
      id: 4,
      title: 'Union Organizing Success Story: Local 123',
      description: 'How Teachers Union Local 123 used ACTTogether.us to coordinate their most successful contract campaign.',
      category: 'case-studies',
      type: 'Case Study',
      duration: '10 min read',
      icon: FileText,
      featured: true,
      tags: ['unions', 'organizing', 'success']
    },
    {
      id: 5,
      title: 'Digital Organizing Fundamentals',
      description: 'Master the basics of digital organizing and online mobilization.',
      category: 'guides',
      type: 'Guide',
      duration: '20 min read',
      icon: BookOpen,
      featured: false,
      tags: ['digital', 'organizing', 'online'],
      downloadUrl: '/ACTTogether_Digital_Organizing_Guide.pdf'
    },
    {
      id: 6,
      title: 'Nonprofit Fundraising Event Checklist',
      description: 'Comprehensive checklist for planning and executing successful fundraising events.',
      category: 'templates',
      type: 'Template',
      duration: 'Download',
      icon: Download,
      featured: false,
      tags: ['nonprofits', 'fundraising', 'events'],
      downloadUrl: '/ACTTogether_Nonprofit_Fundraising_Event_Checklist.pdf'
    },
    {
      id: 7,
      title: 'Building Effective Coalitions',
      description: 'Learn how to build and manage coalitions for advocacy campaigns.',
      category: 'webinars',
      type: 'Webinar',
      duration: '60 min',
      icon: Video,
      featured: false,
      tags: ['advocacy', 'coalitions', 'campaigns']
    },
    {
      id: 8,
      title: 'Data-Driven Organizing Strategies',
      description: 'Use data and analytics to improve your organizing effectiveness.',
      category: 'best-practices',
      type: 'Best Practice',
      duration: '12 min read',
      icon: TrendingUp,
      featured: false,
      tags: ['data', 'analytics', 'strategy']
    }
  ];

  const featuredResources = resources.filter(resource => resource.featured);
  
  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const supportOptions = [
    {
      icon: MessageSquare,
      title: 'Help Center',
      description: 'Find answers to common questions and browse our knowledge base.',
      action: 'Browse Help Center',
      link: '/help'
    },
    {
      icon: Calendar,
      title: 'Training Sessions',
      description: 'Join live training sessions to learn platform features and best practices.',
      action: 'View Schedule',
      link: 'https://acttogether.us'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other organizers and share experiences in our community.',
      action: 'Join Community',
      link: '/volunteer'
    },
    {
      icon: Headphones,
      title: 'Direct Support',
      description: 'Get personalized help from our expert support team.',
      action: 'Contact Support',
      link: '/help'
    }
  ];

  const handleResourceAccess = (resource: any) => {
    if (resource.downloadUrl) {
      // Open PDF in new tab
      window.open(resource.downloadUrl, '_blank');
    } else {
      // For resources without download URLs, you could implement other actions
      console.log('Accessing resource:', resource.title);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Resources &
              <span className="bg-gradient-to-r from-act-teal-600 to-blue-600 bg-clip-text text-transparent block">
                Learning Center
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to maximize your impact: guides, templates, webinars, and expert support.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${
                        activeCategory === category.id
                          ? 'bg-act-teal-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and impactful resources to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <div key={resource.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-act-teal-100 rounded-lg p-3">
                    <resource.icon className="h-6 w-6 text-act-teal-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-act-teal-600 text-white px-2 py-1 rounded text-xs font-medium">
                        {resource.type}
                      </span>
                      <span className="text-gray-500 text-sm">{resource.duration}</span>
                      {resource.downloadUrl && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                          PDF
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {resource.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => handleResourceAccess(resource)}
                  className="w-full bg-act-teal-600 text-white py-2 rounded-lg font-medium hover:bg-act-teal-700 transition-colors flex items-center justify-center space-x-2"
                >
                  {resource.downloadUrl ? (
                    <>
                      <Download className="h-4 w-4" />
                      <span>Download PDF</span>
                    </>
                  ) : (
                    <>
                      <span>Access Resource</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our complete library of organizing resources and tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-act-teal-100 rounded-lg p-3">
                    <resource.icon className="h-6 w-6 text-act-teal-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        {resource.type}
                      </span>
                      <span className="text-gray-500 text-sm">{resource.duration}</span>
                      {resource.featured && (
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                          Featured
                        </span>
                      )}
                      {resource.downloadUrl && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                          PDF
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {resource.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button 
                      onClick={() => handleResourceAccess(resource)}
                      className="text-act-teal-600 hover:text-act-teal-700 font-medium flex items-center space-x-2"
                    >
                      {resource.downloadUrl ? (
                        <>
                          <Download className="h-4 w-4" />
                          <span>Download PDF</span>
                        </>
                      ) : (
                        <>
                          <span>Access Resource</span>
                          <ExternalLink className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No resources found matching your criteria.</p>
              <button 
                onClick={() => {
                  setActiveCategory('all');
                  setSearchTerm('');
                }}
                className="mt-4 text-act-teal-600 hover:text-act-teal-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Support & Training
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond self-service resources, we offer multiple ways to get the help you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="bg-act-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <option.icon className="h-8 w-8 text-act-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {option.description}
                </p>
                {option.link.startsWith('http') ? (
                  <a 
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-act-teal-600 hover:text-act-teal-700 font-medium"
                  >
                    {option.action} →
                  </a>
                ) : (
                  <Link 
                    to={option.link}
                    className="text-act-teal-600 hover:text-act-teal-700 font-medium"
                  >
                    {option.action} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-act-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Get the latest organizing resources, platform updates, and best practices delivered to your inbox.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500 focus:border-transparent"
                />
                <button className="bg-act-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-600 text-sm mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to put these resources to work?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start using ACTTogether.us today and access all our resources plus the platform tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/get-started"
              className="bg-act-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors"
            >
              Get Started Free
            </Link>
            <Link 
              to="/platform"
              className="border border-act-teal-600 text-act-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Explore Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;