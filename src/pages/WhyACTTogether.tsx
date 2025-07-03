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
  MessageSquare,
  Network,
  Lock,
  Server
} from 'lucide-react';

function WhyACTTogether() {
  const stats = [
    { number: '500+', label: 'Organizations Served', description: 'From local nonprofits to national campaigns' },
    { number: '1M+', label: 'Actions Organized', description: 'Events, campaigns, and mobilizations' },
    { number: '0%', label: 'Corporate Tracking', description: 'No surveillance, no data mining' },
    { number: '100%', label: 'Community Owned', description: 'Governed by and for organizers' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Movement-Driven',
      description: 'We exist to amplify the impact of organizations working for social justice. Built by organizers, for organizers.'
    },
    {
      icon: Shield,
      title: 'Privacy by Design',
      description: 'No tracking, no ads, no corporate surveillance. Your organizing data belongs to your community, not corporations.'
    },
    {
      icon: Network,
      title: 'Community',
      description: ' Connect globally while maintaining local autonomy.'
    },
    {
      icon: Users,
      title: 'Community Governed',
      description: 'Democratic decision-making by the organizing community. No corporate board, no shareholders.'
    }
  ];

  const mobilizonBenefits = [
    {
      icon: Globe,
      title: 'Secure Network',
      description: 'Connect with other groups while maintaining your community\'s independence.',
      benefits: ['Cross-instance event discovery', 'Decentralized infrastructure', 'No single point of failure']
    },
    {
      icon: Lock,
      title: 'Privacy Focused',
      description: 'Built from the ground up to respect user privacy and resist surveillance.',
      benefits: ['No tracking cookies', 'No data mining', 'GDPR compliant by design']
    },
    {
      icon: Server,
      title: 'Community Controlled',
      description: 'Open source software that can\'t be bought, sold, or shut down by corporations.',
      benefits: ['Transparent code', 'Democratic governance', 'Community ownership']
    },
    {
      icon: Zap,
      title: 'Movement Infrastructure',
      description: 'Technology designed specifically for social movements and organizing.',
      benefits: ['Organizing-focused features', 'No algorithmic manipulation', 'Movement-friendly policies']
    }
  ];

  const testimonials = [
    {
      quote: "Finally, an organizing platform that doesn't track our members or sell our data to corporations. ACTTogether.us respects our community's privacy.",
      author: "Sarah Chen",
      title: "Volunteer Coordinator",
      organization: "Community Justice Coalition"
    },
    {
      quote: "Being part of the community network means we can connect with other movements while keeping control of our own data and community.",
      author: "Marcus Rodriguez",
      title: "Campaign Manager",
      organization: "Progressive Action Network"
    },
    {
      quote: "This is what movement infrastructure should look like - built by us, for us, not by Silicon Valley for profit.",
      author: "Jennifer Walsh",
      title: "Union Organizer",
      organization: "Workers United Local 123"
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Mobilizon Launched',
      description: 'Framasoft releases Mobilizon as an alternative to Facebook Events.'
    },
    {
      year: '2020',
      title: 'Federation Grows',
      description: 'Multiple instances launch worldwide, creating a decentralized network.'
    },
    {
      year: '2023',
      title: 'Movement Focus',
      description: 'Specialized instances emerge for different communities and causes.'
    },
    {
      year: '2024',
      title: 'ACTTogether.us Launches',
      description: 'Our instance launches with a focus on social justice organizing.'
    },
    {
      year: '2024',
      title: 'Community Growth',
      description: 'Hundreds of organizations join our movement-focused instance.'
    },
    {
      year: '2025',
      title: 'Network Expansion',
      description: 'Connecting with other movement instances across the federation.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Our
              <span className="bg-gradient-to-r from-act-teal-600 to-blue-600 bg-clip-text text-transparent block">
                Mobilizon Instance?
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ACTTogether.us is built specifically for social justice organizing. Privacy-focused, community-controlled, and movement-driven.
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

      {/* What is Mobilizon */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is ActTogether?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ActTogether.us is an alternative to Facebook Events and corporate event platforms.
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

          <div className="mt-16 bg-act-teal-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Why Community Matters
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Corporate Platforms</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Track and profile your members</li>
                  <li>• Sell your data to advertisers</li>
                  <li>• Can censor or ban your content</li>
                  <li>• Algorithm controls who sees your events</li>
                  <li>• Terms of service can change anytime</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Mobilizon Federation</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• No tracking or surveillance</li>
                  <li>• Your data stays with your community</li>
                  <li>• Community-controlled moderation</li>
                  <li>• No algorithmic manipulation</li>
                  <li>• Democratic governance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobilizon Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Our Instance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ACTTogether.us combines all the benefits of Facebook or Google with a focus on social justice organizing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mobilizonBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-act-teal-100 rounded-lg p-3">
                    <benefit.icon className="h-8 w-8 text-act-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {benefit.benefits.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-act-teal-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
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
              What Organizers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from organizations using our Mobilizon instance for their organizing work.
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

      {/* Mobilizon Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Mobilizon Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to global federation - how ActTogether is changing organizing.
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

      {/* Instance Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Instance Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ACTTogether.us is run by and for the organizing community.
            </p>
          </div>

          <div className="bg-act-teal-50 rounded-2xl p-8 md:p-12 text-center">
            <Users className="h-16 w-16 text-act-teal-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Community Governance
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Our instance is governed democratically by the organizing community. Major decisions are made collectively, and our policies are shaped by the needs of social justice movements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Democratic Decision Making</h4>
                <p className="text-gray-600">Community votes on major policy changes</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Transparent Operations</h4>
                <p className="text-gray-600">Open books and regular community reports</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Movement Focused</h4>
                <p className="text-gray-600">Policies designed for organizing needs</p>
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
              Privacy & Security
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built from the ground up to protect organizer and community privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Shield className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">No Tracking</h3>
              <p className="text-gray-600">Zero surveillance or data collection</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Lock className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Encrypted</h3>
              <p className="text-gray-600">End-to-end encryption for sensitive data</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Server className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Open Source</h3>
              <p className="text-gray-600">Transparent, auditable code</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Users className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Community Owned</h3>
              <p className="text-gray-600">No corporate control or influence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-act-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to organize together?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our Mobilizon instance and be part of the movement for democratic, privacy-respecting organizing technology.
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
              Learn Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyACTTogether;