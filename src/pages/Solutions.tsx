import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Vote, 
  Users, 
  Megaphone,
  CheckCircle,
  ArrowRight,
  Target,
  BarChart3,
  Calendar,
  Zap,
  Shield,
  Globe,
  MessageSquare,
  UserPlus,
  TrendingUp
} from 'lucide-react';

function Solutions() {
  const [activeTab, setActiveTab] = useState('nonprofits');

  const solutions = {
    nonprofits: {
      title: 'Nonprofits',
      subtitle: 'Scale your volunteer impact',
      description: 'Empower your mission with tools designed specifically for nonprofit organizations. From volunteer management to donor engagement, we help you maximize your impact.',
      hero: 'Transform how you engage volunteers and supporters',
      features: [
        {
          icon: Users,
          title: 'Volunteer Management',
          description: 'Streamline volunteer recruitment, scheduling, and communication with automated workflows.'
        },
        {
          icon: Heart,
          title: 'Supporter Engagement',
          description: 'Build deeper relationships with supporters through personalized communication and targeted campaigns.'
        },
        {
          icon: BarChart3,
          title: 'Impact Measurement',
          description: 'Track and report on your organization\'s impact with comprehensive analytics and reporting tools.'
        },
        {
          icon: Globe,
          title: 'Community Building',
          description: 'Foster stronger communities around your cause with peer-to-peer organizing capabilities.'
        }
      ],
      benefits: [
        '30% increase in volunteer retention',
        'Automated follow-up sequences',
        'Integrated donation processing',
        'Grant reporting tools',
        'Volunteer skill matching',
        'Multi-channel communication'
      ],
      caseStudy: {
        organization: 'Local Food Bank Network',
        result: 'Increased volunteer participation by 45% and reduced no-shows by 30%',
        quote: 'ACTTogether.us transformed how we coordinate our volunteers. The automated reminders alone saved us 10 hours per week.'
      }
    },
    campaigns: {
      title: 'Campaigns & Committees',
      subtitle: 'Win with organized action',
      description: 'Built for political campaigns and committees that need to identify supporters, mobilize voters, and win elections through strategic organizing.',
      hero: 'Organize, mobilize, and win elections',
      features: [
        {
          icon: Vote,
          title: 'Voter Outreach',
          description: 'Reach voters through targeted canvassing, phone banking, and digital organizing campaigns.'
        },
        {
          icon: Users,
          title: 'Volunteer Coordination',
          description: 'Recruit, train, and deploy volunteers efficiently across multiple campaign activities.'
        },
        {
          icon: Calendar,
          title: 'Event Management',
          description: 'Organize rallies, town halls, and fundraising events with integrated RSVP and check-in systems.'
        },
        {
          icon: BarChart3,
          title: 'Data & Analytics',
          description: 'Track voter contact, volunteer performance, and campaign metrics in real-time dashboards.'
        }
      ],
      benefits: [
        'Voter ID and persuasion tracking',
        'Fundraising integration',
        'Field organizing tools',
        'Volunteer leaderboards',
        'Multi-language support',
        'GOTV automation'
      ],
      caseStudy: {
        organization: 'City Council Campaign',
        result: 'Contacted 15,000 voters with 200 volunteers, winning by 8 points',
        quote: 'The platform made it easy to coordinate our field operation. We knew exactly who was contacted and when.'
      }
    },
    unions: {
      title: 'Unions',
      subtitle: 'Strengthen member engagement',
      description: 'Unite your members through coordinated actions, contract campaigns, and solidarity building with tools designed for labor organizing.',
      hero: 'Build solidarity and member power',
      features: [
        {
          icon: Users,
          title: 'Member Mobilization',
          description: 'Quickly organize members for actions, meetings, and solidarity events with targeted messaging.'
        },
        {
          icon: Shield,
          title: 'Action Coordination',
          description: 'Coordinate strikes, pickets, and workplace actions with secure communication tools.'
        },
        {
          icon: MessageSquare,
          title: 'Communication Tools',
          description: 'Keep members informed with multi-channel communication including SMS, email, and push notifications.'
        },
        {
          icon: TrendingUp,
          title: 'Solidarity Building',
          description: 'Build stronger unions through peer-to-peer organizing and member-to-member recruitment.'
        }
      ],
      benefits: [
        'Secure member communications',
        'Strike coordination tools',
        'Grievance tracking',
        'Contract campaign management',
        'Member engagement scoring',
        'Solidarity action alerts'
      ],
      caseStudy: {
        organization: 'Teachers Union Local 123',
        result: 'Mobilized 95% of members for contract action, securing 12% raise',
        quote: 'ACTTogether.us helped us coordinate the most successful contract campaign in our union\'s history.'
      }
    },
    advocacy: {
      title: 'Advocacy Organizations',
      subtitle: 'Build movements that matter',
      description: 'Create lasting policy change through grassroots organizing, coalition building, and strategic advocacy campaigns.',
      hero: 'Turn advocacy into action and policy change',
      features: [
        {
          icon: Megaphone,
          title: 'Movement Building',
          description: 'Grow your movement with tools for supporter recruitment, engagement, and leadership development.'
        },
        {
          icon: Target,
          title: 'Policy Advocacy',
          description: 'Coordinate legislative campaigns with targeted outreach to elected officials and key stakeholders.'
        },
        {
          icon: Users,
          title: 'Grassroots Organizing',
          description: 'Empower supporters to take action in their communities with peer-to-peer organizing tools.'
        },
        {
          icon: Globe,
          title: 'Coalition Management',
          description: 'Coordinate with partner organizations and manage complex multi-stakeholder campaigns.'
        }
      ],
      benefits: [
        'Legislative tracking integration',
        'Petition and letter campaigns',
        'Coalition coordination tools',
        'Media campaign support',
        'Supporter journey mapping',
        'Policy impact measurement'
      ],
      caseStudy: {
        organization: 'Climate Action Coalition',
        result: 'Passed state climate legislation with 50,000 supporter actions',
        quote: 'The platform enabled us to coordinate a complex coalition campaign that resulted in landmark climate policy.'
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Solutions for Every
              <span className="bg-gradient-to-r from-act-teal-600 to-blue-600 bg-clip-text text-transparent block">
                Mission-Driven Organization
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a nonprofit, campaign, union, or advocacy group, we have the tools and expertise to help you achieve your goals.
            </p>
          </div>

          {/* Solution Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(solutions).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === key
                    ? 'bg-act-teal-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                }`}
              >
                {solutions[key].title}
              </button>
            ))}
          </div>

          {/* Active Solution Content */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {solutions[activeTab].hero}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {solutions[activeTab].description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {solutions[activeTab].features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-act-teal-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-act-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Key Benefits for {solutions[activeTab].title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {solutions[activeTab].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-act-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-act-teal-50 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Success Story</h3>
              <div className="mb-4">
                <h4 className="font-semibold text-act-teal-600 mb-2">
                  {solutions[activeTab].caseStudy.organization}
                </h4>
                <p className="text-lg font-medium text-gray-900 mb-3">
                  {solutions[activeTab].caseStudy.result}
                </p>
                <blockquote className="text-gray-700 italic">
                  "{solutions[activeTab].caseStudy.quote}"
                </blockquote>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link 
                to="/get-started"
                className="bg-act-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors inline-flex items-center space-x-2 mr-4"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                to="/platform"
                className="border border-act-teal-600 text-act-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center space-x-2"
              >
                <span>View Platform Features</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Organizations Choose ACTTogether.us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we compare to other platforms and why mission-driven organizations trust us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <UserPlus className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Built for Organizers</h3>
              <p className="text-gray-600">
                Created by experienced organizers who understand the unique challenges of mission-driven work.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <Zap className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600">
                30% fewer no-shows, 500+ organizations served, and over 1 million actions organized.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <Shield className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mission-Aligned</h3>
              <p className="text-gray-600">
                We're committed to supporting progressive causes and social justice organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-act-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to amplify your impact?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations using ACTTogether.us to create lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/get-started"
              className="bg-white text-act-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link 
              to="/platform"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-act-teal-600 transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solutions;