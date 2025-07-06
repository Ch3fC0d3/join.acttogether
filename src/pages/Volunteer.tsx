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
  Globe,
  Network,
  Lock,
  Server,
  CreditCard,
  HelpCircle
} from 'lucide-react';
import { StripeCheckout } from '../components/StripeCheckout';
import { useAuth } from '../hooks/useAuth';

function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [organizationType, setOrganizationType] = useState('');
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutMessage, setCheckoutMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const { user } = useAuth();

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 'Free',
      description: 'Small groups / grassroots organizing',
      features: [
        'Up to 200 contacts',
        '2 admins',
        '3 events per month',
        'Basic privacy protection',
        'Community support',
        'Federated event sharing',
        'Basic analytics',
        'Email support'
      ],
      limitations: [
        'Limited to 200 contacts',
        'Basic customization options',
        'Standard support response time'
      ],
      cta: 'Start Free',
      popular: false,
      isFree: true
    },
    {
      id: 'organize',
      name: 'Organize',
      price: '$19',
      period: '/month',
      description: 'Local chapters, student groups',
      features: [
        '1,000 contacts',
        '5 admins',
        'Unlimited events/actions',
        'Advanced privacy features',
        'Priority support',
        'Custom branding',
        'Advanced federation features',
        'Movement network access',
        'Enhanced security',
        'Automation workflows',
        'Integration access',
        'Advanced segmentation'
      ],
      limitations: [],
      cta: 'Start 14-Day Trial',
      popular: true,
      isFree: false
    },
    {
      id: 'resist',
      name: 'Resist+',
      price: '$39',
      period: '/month',
      description: 'State orgs, growing networks',
      features: [
        '5,000 contacts',
        'Unlimited admins',
        'Text/email alerts',
        'Integrations',
        'Everything in Organize',
        'Advanced security features',
        'Priority support',
        'Advanced automation',
        'Custom reporting'
      ],
      limitations: [],
      cta: 'Start 14-Day Trial',
      popular: false,
      isFree: false
    },
    {
      id: 'uprising',
      name: 'Uprising Pro',
      price: '$69',
      period: '/month',
      description: 'National orgs',
      features: [
        '10,000+ contacts',
        'API access',
        'White-label options',
        'Priority support',
        'Everything in Resist+',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantees',
        'Custom training sessions'
        'Custom integrations',
        'Priority feature development'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
      isFree: false
    }
  ];

  const organizationTypes = [
    { id: 'nonprofit', label: 'Nonprofit Organization', icon: Heart },
    { id: 'campaign', label: 'Political Campaign', icon: Vote },
    { id: 'union', label: 'Union', icon: Users },
    { id: 'advocacy', label: 'Advocacy Group', icon: Megaphone }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Privacy Protection',
      description: 'No tracking, no ads, no corporate surveillance'
    },
    {
      icon: Network,
      title: 'Federation Network',
      description: 'Connect globally while maintaining autonomy'
    },
    {
      icon: Users,
      title: 'Community Organizing',
      description: 'Tools built specifically for movements'
    },
    {
      icon: Lock,
      title: 'Data Sovereignty',
      description: 'Your data stays with your community'
    }
  ];

  const faqs = [
    {
      question: 'What is included in the free Community plan?',
      answer: 'The Community plan includes up to 5 team members, 5 events per month, max 50 signups per event, basic privacy protection, and access to the federated network.'
    },
    {
      question: 'How does the federated network work?',
      answer: 'Our platform connects with other Mobilizon instances worldwide, allowing you to discover and share events across the network while maintaining your community\'s independence.'
    },
    {
      question: 'Can I upgrade or downgrade my plan anytime?',
      answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the end of your current billing cycle.'
    },
    {
      question: 'Do you offer discounts for nonprofits?',
      answer: 'Yes, we offer special pricing for qualified nonprofits and social justice organizations. Contact us to learn more about our nonprofit discount program.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards and debit cards through our secure payment processor. We also offer invoice billing for Enterprise customers.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No, there are no setup fees for any of our plans. You only pay the monthly subscription fee.'
    }
  ];

  const handleCheckoutSuccess = () => {
    setCheckoutMessage({ type: 'success', text: 'Redirecting to checkout...' });
  };

  const handleCheckoutError = (error: string) => {
    setCheckoutMessage({ type: 'error', text: error });
  };

  const handlePlanSelection = (plan: any) => {
    if (plan.isFree) {
      window.location.href = '/signup';
    } else if ((plan.id === 'organize' || plan.id === 'resist') && user) {
      setShowCheckout(true);
    } else if (plan.id === 'uprising') {
      window.location.href = 'mailto:sales@acttogether.us?subject=Enterprise Plan Inquiry';
    } else if (!user) {
      window.location.href = '/signup';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 py-20 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
              Simple, Transparent
              <span className="bg-gradient-to-r from-act-teal-600 to-blue-600 bg-clip-text text-transparent block">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
              Choose the plan that fits your organization. Start free and scale as you grow. No hidden fees, no long-term contracts.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-act-teal-600 mb-2">0%</div>
              <div className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Corporate tracking</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-act-teal-600 mb-2">14 days</div>
              <div className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Free trial</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-act-teal-600 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-act-teal-600 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication Notice */}
      {!user && (
        <section className="py-12 bg-green-50 dark:bg-green-900/20 border-b border-green-200 dark:border-green-800 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-4 transition-colors duration-200">
              Start Free Today!
            </h2>
            <p className="text-green-700 dark:text-green-400 mb-6 transition-colors duration-200">
              Create your free account and start organizing immediately. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/signup"
                className="bg-act-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors"
              >
                Create Free Account
              </Link>
              <Link 
                to="/login"
                className="border border-act-teal-600 text-act-teal-600 dark:text-act-teal-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Plans */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
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
                    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg'
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

                {plan.isFree && (
                  <div className="text-center mb-4">
                    <span className="bg-green-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Free Forever
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'} transition-colors duration-200`}>
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'} transition-colors duration-200`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-lg ${plan.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'} transition-colors duration-200`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className={`${plan.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'} transition-colors duration-200`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className={`h-5 w-5 ${plan.popular ? 'text-blue-200' : 'text-act-teal-600'} flex-shrink-0`} />
                      <span className={`${plan.popular ? 'text-blue-100' : 'text-gray-700 dark:text-gray-300'} transition-colors duration-200`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handlePlanSelection(plan)}
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

      {/* Stripe Checkout Section */}
      {user && showCheckout && (
        <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg transition-colors duration-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
                  Complete Your Subscription
                </h2>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                  Choose your subscription plan and start organizing today.
                </p>
              </div>

              {checkoutMessage && (
                <div className={`mb-6 p-4 rounded-lg ${
                  checkoutMessage.type === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-800' 
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}>
                  {checkoutMessage.text}
                </div>
              )}

              <StripeCheckout 
                onSuccess={handleCheckoutSuccess}
                onError={handleCheckoutError}
              />
            </div>
          </div>
        </section>
      )}

      {/* Organization Type Selection */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              What type of organization are you?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
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
                    ? 'border-act-teal-600 bg-act-teal-50 dark:bg-act-teal-900/20'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <type.icon className={`h-12 w-12 mx-auto mb-4 ${
                  organizationType === type.id ? 'text-act-teal-600' : 'text-gray-400 dark:text-gray-500'
                }`} />
                <h3 className={`font-semibold ${
                  organizationType === type.id ? 'text-act-teal-600' : 'text-gray-900 dark:text-white'
                } transition-colors duration-200`}>
                  {type.label}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              Why Choose ACTTogether.us?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
              Privacy-first organizing tools designed specifically for mission-driven organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm transition-colors duration-200">
                <div className="bg-act-teal-100 dark:bg-act-teal-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
                  <feature.icon className="h-8 w-8 text-act-teal-600" />
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
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              What happens next?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
              We'll get you set up and organized in no time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-act-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-200">
                Account Setup
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                Create your free account and get immediate access to the platform.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-act-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-200">
                Explore Features
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                Try out our organizing tools with your free account or upgrade for more features.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-act-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-200">
                Start Organizing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                Begin creating events, managing volunteers, and building your movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
              Have questions about our pricing? We've got answers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transition-colors duration-200">
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="h-6 w-6 text-act-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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

export default Pricing;