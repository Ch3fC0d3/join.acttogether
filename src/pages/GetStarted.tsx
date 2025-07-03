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
  Lock
} from 'lucide-react';
import { StripeCheckout } from '../components/StripeCheckout';
import { useAuth } from '../hooks/useAuth';

function GetStarted() {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [organizationType, setOrganizationType] = useState('');
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutMessage, setCheckoutMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const { user } = useAuth();

  const plans = [
    {
      id: 'starter',
      name: 'Community',
      price: 'Free',
      description: 'Perfect for small organizations getting started',
      features: [
        'Up to 5 team members',
        '5 events/actions per month',
        'Max 50 signups per event',
        'Basic privacy protection',
        'Community support',
        'Federated event sharing'
      ],
      limitations: [
        'Limited to 500 petition signatures',
        'Basic customization options',
        'Standard support response time'
      ],
      cta: 'Join Free',
      popular: false,
      isFree: true
    },
    {
      id: 'professional',
      name: 'Movement',
      price: '$10 per 1000',
      period: '/month',
      description: 'For growing organizations with regular activities',
      features: [
        'Unlimited team members',
        'Unlimited events/actions',
        '1000 signups included',
        'Advanced privacy features',
        'Priority support',
        'Custom instance branding',
        'Advanced federation features',
        'Movement network access',
        'Enhanced security'
      ],
      limitations: [],
      cta: 'Start 14-Day Trial',
      popular: true,
      isFree: false
    },
    {
      id: 'enterprise',
      name: 'Federation',
      price: 'Custom',
      description: 'For large organizations with complex needs',
      features: [
        'Everything in Movement',
        'Custom instance setup',
        'Dedicated federation support',
        'SLA guarantees',
        'Advanced security features',
        'Custom training sessions',
        'White-label options',
        'API access',
        'Custom reporting'
      ],
      limitations: [],
      cta: 'Contact Us',
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

  const handleCheckoutSuccess = () => {
    setCheckoutMessage({ type: 'success', text: 'Redirecting to checkout...' });
  };

  const handleCheckoutError = (error: string) => {
    setCheckoutMessage({ type: 'error', text: error });
  };

  const handlePlanSelection = (plan: any) => {
    if (plan.isFree) {
      // For free plan, redirect to signup
      window.location.href = '/signup';
    } else if (plan.id === 'professional' && user) {
      setShowCheckout(true);
    } else if (!user) {
      // Redirect to signup for non-authenticated users
      window.location.href = '/signup';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our
              <span className="bg-gradient-to-r from-act-teal-600 to-blue-600 bg-clip-text text-transparent block">
                Mobilizon Instance
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start organizing without surveillance. Join our privacy-focused Mobilizon instance designed for social justice movements.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-act-teal-600 mb-2">0%</div>
              <div className="text-gray-600">Corporate tracking</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-act-teal-600 mb-2">100%</div>
              <div className="text-gray-600">Privacy protection</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-act-teal-600 mb-2">24/7</div>
              <div className="text-gray-600">Federation access</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-act-teal-600 mb-2">500+</div>
              <div className="text-gray-600">Organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication Notice */}
      {!user && (
        <section className="py-12 bg-green-50 border-b border-green-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Join Our Mobilizon Instance Today!
            </h2>
            <p className="text-green-700 mb-6">
              Create your account on our privacy-focused instance and start organizing without surveillance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/signup"
                className="bg-act-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors"
              >
                Create Account
              </Link>
              <Link 
                to="/login"
                className="border border-act-teal-600 text-act-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Instance Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Instance?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ACTTogether.us is a Mobilizon instance specifically focused on social justice organizing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <Shield className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy First</h3>
              <p className="text-gray-600">
                No tracking, no ads, no corporate surveillance. Your organizing data stays private.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <Network className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Federated Network</h3>
              <p className="text-gray-600">
                Connect with organizers across the global Mobilizon federation while maintaining autonomy.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <Heart className="h-12 w-12 text-act-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Movement Focused</h3>
              <p className="text-gray-600">
                Designed specifically for nonprofits, campaigns, unions, and advocacy organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Level
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free and scale as you grow. All plans include privacy protection and federation access.
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

                {plan.isFree && (
                  <div className="text-center mb-4">
                    <span className="bg-green-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Free Forever
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
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Complete Your Subscription
                </h2>
                <p className="text-gray-600">
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
      <section className="py-20 bg-white">
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

      {/* What Happens Next */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What happens next?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We'll get you set up on our Mobilizon instance in no time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-act-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Create Account
              </h3>
              <p className="text-gray-600">
                Join our Mobilizon instance with full privacy protection from day one.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-act-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Explore Federation
              </h3>
              <p className="text-gray-600">
                Discover events and groups across the global Mobilizon network.
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
                Create events, build groups, and organize without surveillance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-act-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Questions about our instance?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our community is here to help you get started with privacy-first organizing.
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