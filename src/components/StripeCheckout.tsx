import React, { useState } from 'react';
import { stripeProducts, type StripeProduct } from '../stripe-config';
import { useAuth } from '../hooks/useAuth';

interface StripeCheckoutProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export function StripeCheckout({ onSuccess, onError }: StripeCheckoutProps) {
  const [loading, setLoading] = useState<string | null>(null);
  const { user, session } = useAuth();

  const handleCheckout = async (product: StripeProduct) => {
    if (!user || !session) {
      onError?.('Please log in to continue');
      return;
    }

    setLoading(product.priceId);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          price_id: product.priceId,
          mode: product.mode,
          success_url: `${window.location.origin}/success`,
          cancel_url: `${window.location.origin}/get-started`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        window.location.href = data.url;
        onSuccess?.();
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      onError?.(error instanceof Error ? error.message : 'An error occurred during checkout');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Plans</h3>
      
      {stripeProducts.map((product) => (
        <div key={product.priceId} className="border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="text-lg font-medium text-gray-900">{product.name}</h4>
              <p className="text-gray-600 mt-1">{product.description}</p>
              <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                {product.mode === 'subscription' ? 'Monthly Subscription' : 'One-time Payment'}
              </span>
            </div>
          </div>
          
          <button
            onClick={() => handleCheckout(product)}
            disabled={loading === product.priceId || !user}
            className="w-full bg-act-teal-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-act-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading === product.priceId ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              `Subscribe to ${product.name}`
            )}
          </button>
        </div>
      ))}
      
      {!user && (
        <div className="text-center p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-800">Please log in to purchase a subscription.</p>
        </div>
      )}
    </div>
  );
}