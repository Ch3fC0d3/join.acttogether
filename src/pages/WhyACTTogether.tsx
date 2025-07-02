import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award,
  Shield,
  Users,
  Heart,
  Target,
  TrendingUp,
  Clock,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  MessageSquare
} from 'lucide-react';

function WhyACTTogether() {
  const stats = [
    { number: '500+', label: 'Organizations Served', description: 'From local nonprofits to national campaigns' },
    { number: '1M+', label: 'Actions Organized', description: 'Volunteer events, advocacy campaigns, and more' },
    { number: '30%', label: 'Fewer No-Shows', description: 'Through automated reminders and engagement' },
    { number: '99.9%', label: 'Platform Uptime', description: 'Reliable infrastructure you can count on' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Mission-Driven',
      description: 'We exist to amplify the impact of organizations working for positive change. Your success is our success.'
    },
    {
      icon: Users,
      title: 'Built by Organizers',
      description: 'Our team includes experienced organizers who understand the real challenges you face every day.'
    },
    {
      icon: Shield,
      title: 'Trustworthy & Secure',
      description: 'Enterprise-grade security and data protection. We take your supporters\' privacy seriously.'
    },
    {
      icon: Target,
      title: 'Results-Focused',
      description: 'Every feature is designed to help you achieve measurable impact and reach your goals.'
    }
  ];

  const differentiators = [
    {
      icon: Zap,
      title: 'Purpose-Built for Mission Work',
      description: 'Unlike generic event platforms, we\'re specifically designed for nonprofits, campaigns, unions, and advocacy groups.',
      benefits: ['Volunteer-specific features', 'Advocacy campaign tools', 'Mission-focused analytics']
    },
    {
      icon: Users,
      title: 'Organizer-Led Development',
      description: 'Our product roadmap is driven by real organizers solving real problems in the field.',
      benefits: ['Regular user feedback sessions', 'Feature requests from practitioners', 'Continuous improvement based on real needs']
    },
    {
      icon: Globe,
      title: 'Network Effect',
      description: 'Access to our supporter network means cross-promotional opportunities and broader reach.',
      benefits: ['Supporter discovery', 'Cross-organization collaboration', 'Amplified impact through partnerships']
    },
    {
      icon: MessageSquare,
      title: 'Expert Support',
      description: 'Our support team includes organizing veterans who can help with strategy, not just technical issues.',
      benefits: ['Strategic guidance', 'Best practice sharing', 'Organizing expertise']
    }
  ];

  const testimonials = [
    {
      quote: "ACTTogether.us transformed how we coordinate our volunteers. The automated reminders alone saved us 10 hours per week.",
      author: "Sarah Chen",
      title: "Volunteer Coordinator",
      organization: "Local Food Bank Network"
    },
    {
      quote: "The platform made it easy to coordinate our field operation. We knew exactly who was contacted and when.",
      author: "Marcus Rodriguez",
      title: "Field Director",
      organization: "City Council Campaign"
    },
    {
      quote: "ACTTogether.us helped us coordinate the most successful contract campaign in our union's history.",
      author: "Jennifer Walsh",
      title: "Organizing Director",
      organization: "Teachers Union Local 123"
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Founded by Organizers',
      description: 'Started by a team of experienced campaign and nonprofit organizers who saw the need for better tools.'
    },
    {
      year: '2020',
      title: 'First 100 Organizations',
      description: 'Reached our first milestone serving nonprofits and campaigns across the country.'
    },
    {
      year: '2021',
      title: 'Platform Expansion',
      description: 'Added advanced features like automation, analytics, and integrations based on user feedback.'
    },
    {
      year: '2022',
      title: 'Union & Advocacy Focus',
      description: 'Expanded to serve unions and advocacy organizations with specialized tools.'
    },
    {
      year: '2023',
      title: '500+ Organizations',
      description: 'Crossed the milestone of serving over 500 mission-driven organizations.'
    },
    {
      year: '2024',
      title: 'Enterprise Features',
      description: 'Launched enterprise-grade features for large organizations and coalitions.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Choose
              <span className="bg-gradient-to-r from-act-teal-600 to-blue-600 bg-clip-text text-transparent block">
                ACTTogether.us?
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than a platform—we're your partner in creating lasting change. Built by organizers, for organizers.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="text-3xl font-bold text-act-teal-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values & Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by our commitment to empowering mission-driven organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-act-teal-100 rounded-lg p-3">
                    <value.icon className="h-8 w-8 text-act-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another software company. Here's what sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {differentiators.map((diff, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-act-teal-100 rounded-lg p-3">
                    <diff.icon className="h-8 w-8 text-act-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {diff.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {diff.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {diff.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-act-teal-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what organizers are saying about ACTTogether.us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                  <div className="text-sm text-act-teal-600">{testimonial.organization}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small team of organizers to serving hundreds of mission-driven organizations.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-act-teal-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="text-2xl font-bold text-act-teal-600 mb-2">{item.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-act-teal-600 rounded-full">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a diverse team of organizers, developers, and mission-driven professionals.
            </p>
          </div>

          <div className="bg-act-teal-50 rounded-2xl p-8 md:p-12 text-center">
            <Users className="h-16 w-16 text-act-teal-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Built by Organizers, for Organizers
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Our team includes campaign managers, nonprofit directors, union organizers, and advocacy professionals who understand the challenges you face because we've been there too.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Campaign Experience</h4>
                <p className="text-gray-600">Federal, state, and local campaigns</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Nonprofit Leadership</h4>
                <p className="text-gray-600">Executive and program management</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Union Organizing</h4>
                <p className="text-gray-600">Labor organizing and member engagement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security & Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your data and your supporters' privacy are our top priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Shield className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level encryption and security protocols</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Award className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">GDPR Compliant</h3>
              <p className="text-gray-600">Full compliance with data protection regulations</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Clock className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">99.9% Uptime</h3>
              <p className="text-gray-600">Reliable infrastructure you can count on</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Users className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Expert support when you need it most</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-act-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to join our mission?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Become part of a community of organizers creating lasting change with the right tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/get-started"
              className="bg-white text-act-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              to="/volunteer"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-act-teal-600 transition-colors"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyACTTogether;