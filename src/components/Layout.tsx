import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut, Settings } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { SubscriptionStatus } from './SubscriptionStatus';
import { ThemeToggle } from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const { user, loading, signOut } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    await signOut();
    setIsUserMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Decorative Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large circle - top right */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-blue-200 dark:from-purple-900/20 dark:to-blue-900/20 rounded-full opacity-30"></div>
        
        {/* Medium circle - middle left */}
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-gradient-to-br from-teal-200 to-green-200 dark:from-teal-900/20 dark:to-green-900/20 rounded-full opacity-25"></div>
        
        {/* Small circle - bottom right */}
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-full opacity-20"></div>
        
        {/* Triangle shape - top left */}
        <div className="absolute top-20 left-20 w-0 h-0 border-l-[60px] border-r-[60px] border-b-[100px] border-l-transparent border-r-transparent border-b-purple-200 dark:border-b-purple-900/20 opacity-20 rotate-12"></div>
        
        {/* Rectangle - middle right */}
        <div className="absolute top-1/3 right-10 w-24 h-40 bg-gradient-to-b from-blue-200 to-teal-200 dark:from-blue-900/20 dark:to-teal-900/20 rounded-lg opacity-15 rotate-45"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center space-x-3">
                  <img 
                    src="/Together copy copy.png" 
                    alt="ACTTogether.us" 
                    className="h-40 w-auto"
                  />
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link 
                  to="/solutions" 
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/solutions') 
                      ? 'text-act-teal-600 border-b-2 border-act-teal-600' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-act-teal-600 dark:hover:text-act-teal-400'
                  }`}
                >
                  Solutions
                </Link>
                <Link 
                  to="/platform" 
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/platform') 
                      ? 'text-act-teal-600 border-b-2 border-act-teal-600' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-act-teal-600 dark:hover:text-act-teal-400'
                  }`}
                >
                  Platform
                </Link>
                <Link 
                  to="/why" 
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/why') 
                      ? 'text-act-teal-600 border-b-2 border-act-teal-600' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-act-teal-600 dark:hover:text-act-teal-400'
                  }`}
                >
                  Why ACTTogether.us
                </Link>
                <Link 
                  to="/pricing" 
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/pricing') || isActive('/volunteer')
                      ? 'text-act-teal-600 border-b-2 border-act-teal-600' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-act-teal-600 dark:hover:text-act-teal-400'
                  }`}
                >
                  Pricing
                </Link>
                <Link 
                  to="/resources" 
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/resources') 
                      ? 'text-act-teal-600 border-b-2 border-act-teal-600' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-act-teal-600 dark:hover:text-act-teal-400'
                  }`}
                >
                  Resources
                </Link>
                
                {/* Theme Toggle */}
                <ThemeToggle />
                
                {!loading && (
                  <>
                    {user ? (
                      <div className="relative">
                        <button
                          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                          className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-act-teal-600 dark:hover:text-act-teal-400 transition-colors"
                        >
                          <User className="h-4 w-4" />
                          <span>{user.email}</span>
                        </button>
                        
                        {isUserMenuOpen && (
                          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
                            <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                              {user.email}
                            </div>
                            <Link
                              to="/account"
                              onClick={() => setIsUserMenuOpen(false)}
                              className="flex items-center space-x-2 w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <Settings className="h-4 w-4" />
                              <span>Account Settings</span>
                            </Link>
                            <button
                              onClick={handleSignOut}
                              className="flex items-center space-x-2 w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <LogOut className="h-4 w-4" />
                              <span>Sign Out</span>
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <>
                        <Link 
                          to="/login" 
                          className={`px-3 py-2 text-sm font-medium transition-colors ${
                            isActive('/login') 
                              ? 'text-act-teal-600 border-b-2 border-act-teal-600' 
                              : 'text-gray-700 dark:text-gray-300 hover:text-act-teal-600 dark:hover:text-act-teal-400'
                          }`}
                        >
                          Login
                        </Link>
                        <Link 
                          to="/get-started" 
                          className="bg-act-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-act-teal-700 transition-colors"
                        >
                          Get Started
                        </Link>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-act-teal-600 dark:hover:text-act-teal-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <Link 
                to="/solutions" 
                className={`block px-3 py-2 text-base font-medium ${
                  isActive('/solutions') 
                    ? 'text-act-teal-600 bg-act-teal-50 dark:bg-act-teal-900/20' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-act-teal-600 dark:hover:text-act-teal-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                to="/platform" 
                className={`block px-3 py-2 text-base font-medium ${
                  isActive('/platform') 
                    ? 'text-act-teal-600 bg-act-teal-50 dark:bg-act-teal-900/20' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-act-teal-600 dark:hover:text-act-teal-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Platform
              </Link>
              <Link 
                to="/why" 
                className={`block px-3 py-2 text-base font-medium ${
                  isActive('/why') 
                    ? 'text-act-teal-600 bg-act-teal-50 dark:bg-act-teal-900/20' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-act-teal-600 dark:hover:text-act-teal-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Why ACTTogether.us
              </Link>
              <Link 
                to="/pricing" 
                className={`block px-3 py-2 text-base font-medium ${
                  isActive('/pricing') || isActive('/volunteer')
                    ? 'text-act-teal-600 bg-act-teal-50 dark:bg-act-teal-900/20' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-act-teal-600 dark:hover:text-act-teal-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/resources" 
                className={`block px-3 py-2 text-base font-medium ${
                  isActive('/resources') 
                    ? 'text-act-teal-600 bg-act-teal-50 dark:bg-act-teal-900/20' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-act-teal-600 dark:hover:text-act-teal-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              
              {!loading && (
                <>
                  {user ? (
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <div className="px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300">
                        {user.email}
                      </div>
                      <Link
                        to="/account"
                        className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-act-teal-600 dark:hover:text-act-teal-400"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Account Settings
                      </Link>
                      <button
                        onClick={() => {
                          handleSignOut();
                          setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-act-teal-600 dark:hover:text-act-teal-400"
                      >
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <>
                      <Link 
                        to="/login" 
                        className={`block px-3 py-2 text-base font-medium ${
                          isActive('/login') 
                            ? 'text-act-teal-600 bg-act-teal-50 dark:bg-act-teal-900/20' 
                            : 'text-gray-700 dark:text-gray-300 hover:text-act-teal-600 dark:hover:text-act-teal-400'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Login
                      </Link>
                      <Link 
                        to="/get-started" 
                        className="bg-act-teal-600 text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-act-teal-700 transition-colors w-full mt-2 block text-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Get Started
                      </Link>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Subscription Status for authenticated users */}
      {user && (
        <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <SubscriptionStatus />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16 relative transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/Together copy copy.png" 
                  alt="ACTTogether.us" 
                  className="h-32 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-400">
                Empowering organizations to create lasting change through coordinated action.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/platform" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/resources" className="hover:text-white transition-colors">Integrations</Link></li>
                <li><Link to="/resources" className="hover:text-white transition-colors">API</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/resources" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/resources" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/resources" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Jobs</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/resources" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/resources" className="hover:text-white transition-colors">Training</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Community</Link></li>
                <li><Link to="/resources" className="hover:text-white transition-colors">Status</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ACTTogether.us. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;