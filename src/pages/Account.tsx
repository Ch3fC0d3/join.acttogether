import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User,
  Mail,
  Calendar,
  Shield,
  Trash2,
  AlertTriangle,
  CheckCircle,
  Settings,
  CreditCard,
  Download,
  Eye,
  EyeOff,
  Save,
  X
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';

interface UserProfile {
  id: string;
  email: string;
  created_at: string;
  user_metadata: {
    first_name?: string;
    last_name?: string;
  };
}

interface SubscriptionData {
  subscription_status: string;
  price_id: string | null;
  current_period_end: number | null;
  cancel_at_period_end: boolean;
}

function Account() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    fetchUserData();
  }, [user, navigate]);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      
      // Fetch subscription data
      const { data: subData, error: subError } = await supabase
        .from('stripe_user_subscriptions')
        .select('subscription_status, price_id, current_period_end, cancel_at_period_end')
        .maybeSingle();

      if (subError && subError.code !== 'PGRST116') {
        console.error('Error fetching subscription:', subError);
      } else {
        setSubscription(subData);
      }

      // Set profile data from user metadata
      if (user?.user_metadata) {
        setProfileData(prev => ({
          ...prev,
          firstName: user.user_metadata.first_name || '',
          lastName: user.user_metadata.last_name || ''
        }));
      }

    } catch (error) {
      console.error('Error fetching user data:', error);
      setMessage({ type: 'error', text: 'Failed to load account data' });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const updates: any = {
        data: {
          first_name: profileData.firstName,
          last_name: profileData.lastName
        }
      };

      // If user wants to change password
      if (profileData.newPassword) {
        if (profileData.newPassword !== profileData.confirmPassword) {
          setMessage({ type: 'error', text: 'New passwords do not match' });
          setLoading(false);
          return;
        }

        if (profileData.newPassword.length < 6) {
          setMessage({ type: 'error', text: 'Password must be at least 6 characters long' });
          setLoading(false);
          return;
        }

        updates.password = profileData.newPassword;
      }

      const { error } = await supabase.auth.updateUser(updates);

      if (error) {
        throw error;
      }

      setMessage({ type: 'success', text: 'Profile updated successfully!' });
      setIsEditingProfile(false);
      setProfileData(prev => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      }));

    } catch (error: any) {
      setMessage({ type: 'error', text: error.message || 'Failed to update profile' });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (deleteConfirmText !== 'DELETE') {
      setMessage({ type: 'error', text: 'Please type "DELETE" to confirm account deletion' });
      return;
    }

    setIsDeleting(true);
    setMessage(null);

    try {
      // First, mark user data for deletion in our database
      if (user) {
        // Soft delete customer data
        const { error: customerError } = await supabase
          .from('stripe_customers')
          .update({ deleted_at: new Date().toISOString() })
          .eq('user_id', user.id);

        if (customerError) {
          console.error('Error marking customer for deletion:', customerError);
        }

        // Soft delete subscription data
        const { error: subscriptionError } = await supabase
          .from('stripe_subscriptions')
          .update({ deleted_at: new Date().toISOString() })
          .eq('customer_id', subscription?.price_id || '');

        if (subscriptionError) {
          console.error('Error marking subscription for deletion:', subscriptionError);
        }
      }

      // Delete the auth user (this will cascade to related data)
      const { error } = await supabase.auth.admin.deleteUser(user!.id);

      if (error) {
        throw error;
      }

      // Sign out and redirect
      await signOut();
      navigate('/', { replace: true });

    } catch (error: any) {
      console.error('Error deleting account:', error);
      setMessage({ 
        type: 'error', 
        text: 'Failed to delete account. Please contact support for assistance.' 
      });
    } finally {
      setIsDeleting(false);
    }
  };

  const downloadUserData = async () => {
    try {
      const userData = {
        profile: {
          id: user?.id,
          email: user?.email,
          created_at: user?.created_at,
          first_name: user?.user_metadata?.first_name,
          last_name: user?.user_metadata?.last_name
        },
        subscription: subscription
      };

      const dataStr = JSON.stringify(userData, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `acttogether-user-data-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setMessage({ type: 'success', text: 'User data downloaded successfully' });
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to download user data' });
    }
  };

  if (!user) {
    return null;
  }

  if (loading && !subscription) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-act-teal-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-act-teal-600 px-6 py-8">
            <div className="flex items-center space-x-4">
              <div className="bg-white bg-opacity-20 rounded-full p-3">
                <User className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Account Settings</h1>
                <p className="text-blue-100">Manage your profile and account preferences</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          {message && (
            <div className={`mx-6 mt-6 p-4 rounded-lg flex items-center space-x-3 ${
              message.type === 'success' 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-red-50 border border-red-200'
            }`}>
              {message.type === 'success' ? (
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
              )}
              <p className={`text-sm ${
                message.type === 'success' ? 'text-green-800' : 'text-red-800'
              }`}>
                {message.text}
              </p>
            </div>
          )}

          <div className="p-6 space-y-8">
            {/* Profile Information */}
            <div className="border-b border-gray-200 pb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Profile Information</span>
                </h2>
                {!isEditingProfile && (
                  <button
                    onClick={() => setIsEditingProfile(true)}
                    className="text-act-teal-600 hover:text-act-teal-700 font-medium flex items-center space-x-1"
                  >
                    <Settings className="h-4 w-4" />
                    <span>Edit</span>
                  </button>
                )}
              </div>

              {isEditingProfile ? (
                <form onSubmit={handleUpdateProfile} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={profileData.firstName}
                        onChange={(e) => setProfileData(prev => ({ ...prev, firstName: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={profileData.lastName}
                        onChange={(e) => setProfileData(prev => ({ ...prev, lastName: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          New Password (leave blank to keep current)
                        </label>
                        <div className="relative">
                          <input
                            type={showPasswords.new ? 'text' : 'password'}
                            value={profileData.newPassword}
                            onChange={(e) => setProfileData(prev => ({ ...prev, newPassword: e.target.value }))}
                            className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500 focus:border-transparent"
                            placeholder="Enter new password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPasswords(prev => ({ ...prev, new: !prev.new }))}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          >
                            {showPasswords.new ? (
                              <EyeOff className="h-4 w-4 text-gray-400" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>
                      {profileData.newPassword && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm New Password
                          </label>
                          <div className="relative">
                            <input
                              type={showPasswords.confirm ? 'text' : 'password'}
                              value={profileData.confirmPassword}
                              onChange={(e) => setProfileData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                              className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500 focus:border-transparent"
                              placeholder="Confirm new password"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPasswords(prev => ({ ...prev, confirm: !prev.confirm }))}
                              className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                              {showPasswords.confirm ? (
                                <EyeOff className="h-4 w-4 text-gray-400" />
                              ) : (
                                <Eye className="h-4 w-4 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-act-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-act-teal-700 transition-colors flex items-center space-x-2 disabled:opacity-50"
                    >
                      {loading ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      ) : (
                        <Save className="h-4 w-4" />
                      )}
                      <span>Save Changes</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditingProfile(false);
                        setProfileData(prev => ({
                          ...prev,
                          currentPassword: '',
                          newPassword: '',
                          confirmPassword: ''
                        }));
                      }}
                      className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center space-x-2"
                    >
                      <X className="h-4 w-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Email</label>
                      <div className="flex items-center space-x-2 mt-1">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-900">{user.email}</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Name</label>
                      <div className="flex items-center space-x-2 mt-1">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-900">
                          {user.user_metadata?.first_name || user.user_metadata?.last_name 
                            ? `${user.user_metadata?.first_name || ''} ${user.user_metadata?.last_name || ''}`.trim()
                            : 'Not provided'
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Account Created</label>
                      <div className="flex items-center space-x-2 mt-1">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-900">
                          {new Date(user.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500">User ID</label>
                      <div className="flex items-center space-x-2 mt-1">
                        <Shield className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-900 font-mono text-sm">{user.id}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Subscription Information */}
            {subscription && (
              <div className="border-b border-gray-200 pb-8">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center space-x-2 mb-6">
                  <CreditCard className="h-5 w-5" />
                  <span>Subscription</span>
                </h2>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Status</label>
                      <span className={`inline-block mt-1 px-2 py-1 rounded-full text-xs font-medium ${
                        subscription.subscription_status === 'active' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {subscription.subscription_status}
                      </span>
                    </div>
                    {subscription.current_period_end && (
                      <div>
                        <label className="block text-sm font-medium text-gray-500">
                          {subscription.cancel_at_period_end ? 'Ends' : 'Renews'}
                        </label>
                        <span className="text-gray-900 mt-1 block">
                          {new Date(subscription.current_period_end * 1000).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Data Management */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center space-x-2 mb-6">
                <Download className="h-5 w-5" />
                <span>Data Management</span>
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Download Your Data</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Download a copy of all your personal data stored in our system.
                  </p>
                  <button
                    onClick={downloadUserData}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center space-x-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Data</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div>
              <h2 className="text-xl font-semibold text-red-600 flex items-center space-x-2 mb-6">
                <AlertTriangle className="h-5 w-5" />
                <span>Danger Zone</span>
              </h2>
              <div className="border border-red-200 rounded-lg p-6 bg-red-50">
                <h3 className="font-medium text-red-900 mb-2">Delete Account</h3>
                <p className="text-red-700 text-sm mb-4">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
                
                {!showDeleteConfirm ? (
                  <button
                    onClick={() => setShowDeleteConfirm(true)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center space-x-2"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span>Delete Account</span>
                  </button>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-red-700 mb-2">
                        Type "DELETE" to confirm account deletion:
                      </label>
                      <input
                        type="text"
                        value={deleteConfirmText}
                        onChange={(e) => setDeleteConfirmText(e.target.value)}
                        className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Type DELETE here"
                      />
                    </div>
                    <div className="flex space-x-3">
                      <button
                        onClick={handleDeleteAccount}
                        disabled={isDeleting || deleteConfirmText !== 'DELETE'}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isDeleting ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        ) : (
                          <Trash2 className="h-4 w-4" />
                        )}
                        <span>Confirm Delete</span>
                      </button>
                      <button
                        onClick={() => {
                          setShowDeleteConfirm(false);
                          setDeleteConfirmText('');
                        }}
                        className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;