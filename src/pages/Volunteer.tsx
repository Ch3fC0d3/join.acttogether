import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart,
  Users,
  Code,
  Megaphone,
  Calendar,
  Globe,
  CheckCircle,
  ArrowRight,
  Mail,
  MapPin,
  Clock,
  Award,
  Target,
  Zap
} from 'lucide-react';

function Volunteer() {
  const [selectedRole, setSelectedRole] = useState('');

  const opportunities = [
    {
      id: 'community',
      icon: Users,
      title: 'Community Organizer',
      type: 'Part-time',
      location: 'Remote',
      commitment: '10-15 hours/week',
      description: 'Help build and engage our community of mission-driven organizations.',
      responsibilities: [
        'Facilitate user community events and webinars',
        'Create educational content and best practices guides',
        'Provide organizing strategy support to platform users',
        'Gather feedback and feature requests from the community'
      ],
      qualifications: [
        '3+ years of organizing experience',
        'Strong communication and facilitation skills',
        'Experience with nonprofits, campaigns, or advocacy work',
        'Passion for empowering grassroots organizations'
      ]
    },
    {
      id: 'developer',
      icon: Code,
      title: 'Volunteer Developer',
      type: 'Flexible',
      location: 'Remote',
      commitment: '5-10 hours/week',
      description: 'Contribute to our open-source tools and platform improvements.',
      responsibilities: [
        'Develop new features for the ACTTogether.us platform',
        'Fix bugs and improve platform performance',
        'Create integrations with other organizing tools',
        'Contribute to our open-source organizing toolkit'
      ],
      qualifications: [
        'Experience with React, Node.js, or similar technologies',
        'Understanding of web development best practices',
        'Interest in social impact technology',
        'Collaborative mindset and good communication skills'
      ]
    },
    {
      id: 'content',
      icon: Megaphone,
      title: 'Content Creator',
      type: 'Project-based',
      location: 'Remote',
      commitment: '5-8 hours/week',
      description: 'Create educational content to help organizations maximize their impact.',
      responsibilities: [
        'Write blog posts about organizing best practices',
        'Create video tutorials and platform guides',
        'Develop case studies showcasing successful campaigns',
        'Design infographics and social media content'
      ],
      qualifications: [
        'Strong writing and communication skills',
        'Experience in content creation or marketing',
        'Knowledge of organizing, campaigns, or nonprofit work',
        'Familiarity with content management systems'
      ]
    },
    {
      id: 'support',
      icon: Heart,
      title: 'User Support Specialist',
      type: 'Part-time',
      location: 'Remote',
      commitment: '8-12 hours/week',
      description: 'Provide technical and strategic support to platform users.',
      responsibilities: [
        'Answer user questions via email and chat',
        'Create and maintain help documentation',
        'Conduct user onboarding sessions',
        'Escalate technical issues to the development team'
      ],
      qualifications: [
        'Customer service or support experience',
        'Technical aptitude and problem-solving skills',
        'Understanding of organizing workflows',
        'Patience and empathy for user challenges'
      ]
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Make Real Impact',
      description: 'Your work directly helps organizations create positive change in their communities.'
    },
    {
      icon: Users,
      title: 'Join a Community',
      description: 'Connect with like-minded volunteers and professionals working for social good.'
    },
    {
      icon: Zap,
      title: 'Develop Skills',
      description: 'Gain experience in technology, organizing, and nonprofit management.'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Get recognized for your contributions and build your professional portfolio.'
    }
  ];

  const testimonials = [
    {
      quote: "Volunteering with ACTTogether.us has been incredibly rewarding. I've been able to use my tech skills to help organizations I care about while learning about organizing.",
      author: "Alex Chen",
      role: "Volunteer Developer"
    },
    {
      quote: "The community organizer role has allowed me to share my campaign experience while helping other organizers succeed. It's been a perfect fit.",
      author: "Maria Rodriguez",
      role: "Community Organizer"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Volunteer with
              <span className="bg-gradient-to-r from-act-teal-600 to-blue-600 bg-clip-text text-transparent block">
                ACTTogether.us
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our mission to empower organizations creating positive change. Use your skills to help build tools that amplify grassroots impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <Globe className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Remote Opportunities</h3>
              <p className="text-gray-600">Work from anywhere while making a global impact</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <Clock className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">Contribute on your own time with flexible commitments</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <Heart className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Meaningful Work</h3>
              <p className="text-gray-600">Every contribution helps organizations create lasting change</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Volunteer Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect way to contribute your skills and passion to our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {opportunities.map((opportunity) => (
              <div key={opportunity.id} className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-act-teal-100 rounded-lg p-3">
                    <opportunity.icon className="h-8 w-8 text-act-teal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {opportunity.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-act-teal-100 text-act-teal-700 px-3 py-1 rounded-full text-sm">
                        {opportunity.type}
                      </span>
                      <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {opportunity.location}
                      </span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {opportunity.commitment}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {opportunity.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Responsibilities:</h4>
                    <ul className="space-y-2">
                      {opportunity.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-act-teal-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Qualifications:</h4>
                    <ul className="space-y-2">
                      {opportunity.qualifications.map((qual, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-act-teal-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedRole(opportunity.id)}
                  className="w-full bg-act-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors"
                >
                  Apply for This Role
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Volunteer with Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond the satisfaction of contributing to meaningful work, here's what you'll gain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="bg-act-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-act-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
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
              Volunteer Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from current volunteers about their experience with ACTTogether.us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-act-teal-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to join our volunteer team? Here's how the process works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-act-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply</h3>
              <p className="text-gray-600">Submit your application for the role that interests you most</p>
            </div>
            <div className="text-center">
              <div className="bg-act-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600">Have a casual conversation with our team about your interests and skills</p>
            </div>
            <div className="text-center">
              <div className="bg-act-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Onboard</h3>
              <p className="text-gray-600">Get oriented with our mission, tools, and volunteer community</p>
            </div>
            <div className="text-center">
              <div className="bg-act-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Contribute</h3>
              <p className="text-gray-600">Start making an impact with your first volunteer project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-act-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Questions About Volunteering?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              We'd love to hear from you. Reach out with any questions about volunteer opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8">
              <Mail className="h-8 w-8 text-act-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Send us your questions or application directly via email.
              </p>
              <a 
                href="mailto:volunteers@acttogether.us"
                className="text-act-teal-600 hover:text-act-teal-700 font-semibold"
              >
                volunteers@acttogether.us
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-8">
              <Calendar className="h-8 w-8 text-act-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule a Call</h3>
              <p className="text-gray-600 mb-4">
                Book a 15-minute call to learn more about volunteer opportunities.
              </p>
              <Link 
                to="/get-started"
                className="text-act-teal-600 hover:text-act-teal-700 font-semibold"
              >
                Schedule a call →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/get-started"
              className="bg-white text-act-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Apply to Volunteer</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Volunteer;