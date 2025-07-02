import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

interface NewsletterSignupProps {
  source?: string;
  showNames?: boolean;
  className?: string;
  placeholder?: string;
  buttonText?: string;
}

export function NewsletterSignup({ 
  source = 'website',
  showNames = false,
  className = '',
  placeholder = 'Enter your email address',
  buttonText = 'Subscribe'
}: NewsletterSignupProps) {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/newsletter-signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: showNames ? formData.firstName : undefined,
          lastName: showNames ? formData.lastName : undefined,
          source
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setMessage({ 
        type: 'success', 
        text: data.message || 'Successfully subscribed!' 
      });

      // Clear form on success
      setFormData({ email: '', firstName: '', lastName: '' });

    } catch (error) {
      console.error('Newsletter signup error:', error);
      setMessage({ 
        type: 'error', 
        text: error instanceof Error ? error.message : 'Failed to subscribe. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={className}>
      {message && (
        <div className={`mb-4 p-3 rounded-lg flex items-center space-x-2 ${
          message.type === 'success' 
            ? 'bg-green-50 border border-green-200' 
            : 'bg-red-50 border border-red-200'
        }`}>
          {message.type === 'success' ? (
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
          )}
          <p className={`text-sm ${
            message.type === 'success' ? 'text-green-800' : 'text-red-800'
          }`}>
            {message.text}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {showNames && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First name (optional)"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500 focus:border-transparent"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last name (optional)"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500 focus:border-transparent"
            />
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder={placeholder}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            disabled={loading || !formData.email}
            className="bg-act-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-act-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <>
                <span>{buttonText}</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </form>

      <p className="text-gray-600 text-sm mt-4 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}