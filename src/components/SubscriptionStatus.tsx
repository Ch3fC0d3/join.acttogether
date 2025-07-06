import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { getProductByPriceId } from '../stripe-config';
import { CheckCircle, Star, ArrowRight, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SubscriptionData {
  subscription_status: string;
  price_id: string | null;
  current_period_end: number | null;
  cancel_at_period_end: boolean;
}

export function SubscriptionStatus() {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCreatingFreeAccount, setIsCreatingFreeAccount] = useState(false);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    fetchSubscription();
  }, [user]);

  const createFreeAccountForExistingUser = async () => {
    if (!user) return;

    setIsCreatingFreeAccount(true);
    try {
      // Check if customer record exists
      const { data: existingCustomer } = await supabase
        .from('stripe_customers')
        .select('customer_id')
        .eq('user_id', user.id)
        .is('deleted_at', null)
        .maybeSingle();

      if (!existingCustomer) {
        // Create customer record
        const { error: customerError } = await supabase
          .from('stripe_customers')
          .insert({
            user_id: user.id,
            customer_id: `free_${user.id}`,
          });

        if (customerError) {
          throw customerError;
        }
      }

      // Create or update subscription record
      const { error: subscriptionError } = await supabase
        .from('stripe_subscriptions')
        .upsert({
          customer_id: existingCustomer?.customer_id || `free_${user.id}`,
          subscription_id: null,
          price_id: 'free_plan',
          status: 'active',
          current_period_start: Math.floor(Date.now() / 1000),
          current_period_end: null,
          cancel_at_period_end: false,
        }, {
          onConflict: 'customer_id'
        });

      if (subscriptionError) {
        throw subscriptionError;
      }

      // Refresh subscription data
      await fetchSubscription();
    } catch (err) {
      console.error('Error creating free account:', err);
      setError('Failed to activate free account. Please try again.');
    } finally {
      setIsCreatingFreeAccount(false);
    }
  };

  const fetchSubscription = async () => {
    if (!user) return;
    
    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('stripe_user_subscriptions')
        .select('subscription_status, price_id, current_period_end, cancel_at_period_end')
        .maybeSingle();

      if (fetchError) {
        throw fetchError;
      }

      setSubscription(data);
    } catch (err) {
      console.error('Error fetching subscription:', err);
      setError(err instanceof Error ? err.message : 'Failed to load subscription');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return null;
  }

  if (loading) {
    return (
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-red-800 text-sm font-medium">Error loading subscription</p>
            <p className="text-red-700 text-sm mt-1">{error}</p>
            <button 
              onClick={fetchSubscription}
              className="mt-2 text-red-600 hover:text-red-700 text-sm underline"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Check if user has a free account
  const isFreeAccount = subscription?.price_id === 'free_plan';
  const isActiveSubscription = subscription?.subscription_status === 'active';

  // If no subscription data exists, offer to create free account
  if (!subscription) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-yellow-800 mb-1">Account Setup Required</h3>
                <p className="text-yellow-700 text-sm mb-3">
                  Welcome back! Let's activate your free account to get you started.
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={createFreeAccountForExistingUser}
            disabled={isCreatingFreeAccount}
            className="bg-act-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-act-teal-700 transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCreatingFreeAccount ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Setting up...</span>
              </>
            ) : (
              <>
                <span>Activate Free Account</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </div>
    );
  }

  if (subscription.subscription_status === 'not_started') {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-blue-800 mb-1">Welcome to ACTTogether.us!</h3>
            <p className="text-blue-700 text-sm mb-3">
              You're ready to start organizing. Choose a plan to unlock all features.
            </p>
          </div>
          <Link 
            to="/get-started"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <span>Get Started</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  if (isFreeAccount && isActiveSubscription) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <h3 className="font-medium text-green-800">Free Account Active</h3>
            </div>
            <p className="text-green-700 text-sm mb-2">
              You're on our free plan with access to core organizing features.
            </p>
            <ul className="text-green-600 text-xs space-y-1">
              <li>• Up to 5 team members</li>
              <li>• 5 events/actions per month</li>
              <li>• Max 50 signups per event</li>
              <li>• Basic analytics</li>
            </ul>
          </div>
          <Link 
            to="/get-started"
            className="bg-act-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-act-teal-700 transition-colors flex items-center space-x-2"
          >
            <Star className="h-4 w-4" />
            <span>Upgrade</span>
          </Link>
        </div>
      </div>
    );
  }

  const product = subscription.price_id ? getProductByPriceId(subscription.price_id) : null;
  const isPastDue = subscription.subscription_status === 'past_due';
  const isCanceled = subscription.subscription_status === 'canceled';

  const getStatusColor = () => {
    if (isActiveSubscription) return 'green';
    if (isPastDue) return 'yellow';
    if (isCanceled) return 'red';
    return 'gray';
  };

  const getStatusText = () => {
    switch (subscription.subscription_status) {
      case 'active':
        return subscription.cancel_at_period_end ? 'Active (Canceling)' : 'Active';
      case 'past_due':
        return 'Past Due';
      case 'canceled':
        return 'Canceled';
      case 'trialing':
        return 'Trial';
      case 'incomplete':
        return 'Incomplete';
      default:
        return subscription.subscription_status;
    }
  };

  const statusColor = getStatusColor();

  return (
    <div className={`bg-${statusColor}-50 border border-${statusColor}-200 rounded-lg p-4`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className={`font-medium text-${statusColor}-800 mb-1`}>
            {product?.name || 'Subscription'}
          </h3>
          <p className={`text-${statusColor}-700 text-sm mb-2`}>
            Status: {getStatusText()}
          </p>
          {subscription.current_period_end && (
            <p className={`text-${statusColor}-600 text-xs`}>
              {subscription.cancel_at_period_end ? 'Ends' : 'Renews'} on{' '}
              {new Date(subscription.current_period_end * 1000).toLocaleDateString()}
            </p>
          )}
        </div>
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${statusColor}-100 text-${statusColor}-800`}>
          {getStatusText()}
        </span>
      </div>
    </div>
  );
}