import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle,
  ArrowRight,
  Users,
  Calendar,
  BarChart3,
  Zap,
  Star,
  Clock,
  Shield,
  Heart,
  Vote,
  Megaphone,
  Mail,
  Phone,
  Globe
} from 'lucide-react';

function GetStarted() {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [organizationType, setOrganizationType] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    phone: '',
    website: '',
    teamSize: '',
    primaryGoal: ''
  });

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for small organizations getting started',
      features: [
        'Up to 5 team members',
        '5 events/actions per month',
        'Max 50 signups per event',
        'Basic analytics',
        'Email support',
        'Core platform features'
      ],
      limitations: [
        'Limited to 500 petition signatures',
        'Basic customization options',
        'Standard support response time'
      ],
      cta: 'Start Free',
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'For growing organizations with regular activities',
      features: [
        'Unlimited team members',
        'Unlimited events/actions',
        'Unlimited signups',
        'Advanced analytics & reporting',
        'Priority support',
        'Custom branding',
        'Automation workflows',
        'Integration access',
        'Advanced segmentation'
      ],
      limitations: [],
      cta: 'Start 14-Day Trial',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with complex needs',
      features: [
        'Everything in Professional',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantees',
        'Advanced security features',
        'Custom training sessions',
        'White-label options',
        'API access',
        'Custom reporting'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const organizationTypes = [
    { id: 'nonprofit', label: 'Nonprofit Organization', icon: Heart },
    { id: 'campaign', label: 'Political Campaign', icon: Vote },
    { id: 'union', label: 'Union', icon: Users },
    { id: 'advocacy', label: 'Advocacy Group', icon: Megaphone }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, organizationType, selectedPlan });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get Started with
              <span className="bg-gradient-to-r from-act-teal-600 to-blue-600 bg-clip-text text-transparent block">
                ACTTogether.us
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your plan and start organizing more effectively today. No setup fees, no long-term contracts.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-act-teal-600 mb-2">5 min</div>
              <div className="text-gray-600">Setup time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-act-teal-600 mb-2">14 days</div>
              <div className="text-gray-600">Free trial</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-act-teal-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-act-teal-600 mb-2">500+</div>
              <div className="text-gray-600">Organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free and scale as you grow. All plans include our core organizing features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-act-teal-600 text-white shadow-2xl scale-105' 
                    : 'bg-white border border-gray-200 shadow-lg'
                } ${selectedPlan === plan.id ? 'ring-4 ring-act-teal-300' : ''} cursor-pointer transition-all duration-200`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-lg ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className={`${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className={`h-5 w-5 ${plan.popular ? 'text-blue-200' : 'text-act-teal-600'} flex-shrink-0`} />
                      <span className={`${plan.popular ? 'text-blue-100' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-white text-act-teal-600 hover:bg-gray-100' 
                      : 'bg-act-teal-600 text-white hover:bg-act-teal-700'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Type Selection */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What type of organization are you?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Help us customize your experience with features tailored to your organization type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {organizationTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setOrganizationType(type.id)}
                className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                  organizationType === type.id
                    ? 'border-act-teal-600 bg-act-teal-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <type.icon className={`h-12 w-12 mx-auto mb-4 ${
                  organizationType === type.id ? 'text-act-teal-600' : 'text-gray-400'
                }`} />
                <h3 className={`font-semibold ${
                  organizationType === type.id ? 'text-act-teal-600' : 'text-gray-900'
                }`}>
                  {type.label}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Create Your Account
            </h2>
            <p className="text-xl text-gray-600">
              Just a few details to get you started with ACTTogether.us.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500 focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                Organization Name *
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                value={formData.organization}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-2">
                  Team Size
                </label>
                <select
                  id="teamSize"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500 focus:border-transparent"
                >
                  <option value="">Select team size</option>
                  <option value="1-5">1-5 people</option>
                  <option value="6-20">6-20 people</option>
                  <option value="21-50">21-50 people</option>
                  <option value="51-100">51-100 people</option>
                  <option value="100+">100+ people</option>
                </select>
              </div>
              <div>
                <label htmlFor="primaryGoal" className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Goal
                </label>
                <select
                  id="primaryGoal"
                  name="primaryGoal"
                  value={formData.primaryGoal}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500 focus:border-transparent"
                >
                  <option value="">Select primary goal</option>
                  <option value="volunteer-management">Volunteer Management</option>
                  <option value="event-organization">Event Organization</option>
                  <option value="supporter-engagement">Supporter Engagement</option>
                  <option value="campaign-coordination">Campaign Coordination</option>
                  <option value="advocacy-campaigns">Advocacy Campaigns</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-act-teal-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Create Account & Start Trial</span>
              <ArrowRight className="h-5 w-5" />
            </button>

            <p className="text-gray-600 text-sm text-center mt-4">
              By creating an account, you agree to our{' '}
              <Link to="/terms" className="text-act-teal-600 hover:text-act-teal-700">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-act-teal-600 hover:text-act-teal-700">
                Privacy Policy
              </Link>
            </p>
          </form>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What happens next?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We'll get you set up and organized in no time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-act-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Account Setup
              </h3>
              <p className="text-gray-600">
                We'll create your account and send you login credentials immediately.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-act-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Onboarding Call
              </h3>
              <p className="text-gray-600">
                Schedule a personalized onboarding session with our team to get started.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-act-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Start Organizing
              </h3>
              <p className="text-gray-600">
                Begin creating events, managing volunteers, and building your movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-act-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need help getting started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team is here to help you succeed. Get in touch with any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/resources"
              className="bg-white text-act-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Resources
            </Link>
            <a 
              href="mailto:support@acttogether.us"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-act-teal-600 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetStarted;