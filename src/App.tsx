import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Grid3X3, User, ChevronDown, Bell, MessageSquare, X } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('events');
  const [currentPage, setCurrentPage] = useState('home');

  const renderHomePage = () => (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large purple circle - top right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-60"></div>
        
        {/* Medium teal circle - left side */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-gradient-to-br from-act-teal-200 to-act-teal-300 rounded-full opacity-50"></div>
        
        {/* Small yellow circle - top left */}
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-70"></div>
        
        {/* Medium pink circle - bottom right */}
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full opacity-60"></div>
        
        {/* Small green circle - middle right */}
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full opacity-50"></div>
        
        {/* Large light blue oval - bottom left */}
        <div className="absolute -bottom-20 -left-16 w-80 h-60 bg-gradient-to-br from-blue-100 to-cyan-200 rounded-full opacity-40 transform rotate-12"></div>
        
        {/* Medium lavender circle - center */}
        <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-full opacity-30"></div>
        
        {/* Small coral circle - top center */}
        <div className="absolute top-16 left-1/2 w-20 h-20 bg-gradient-to-br from-coral-200 to-pink-200 rounded-full opacity-60"></div>
        
        {/* Elongated shape - right side */}
        <div className="absolute top-1/3 right-1/3 w-16 h-72 bg-gradient-to-b from-violet-200 to-purple-300 rounded-full opacity-40 transform rotate-45"></div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/Together.png" 
                alt="ACT Together" 
                className="h-16 w-auto"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => setCurrentPage('search')}
                className="text-gray-700 hover:text-act-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Search
              </button>
              <button 
                onClick={() => setCurrentPage('calendar')}
                className="text-gray-700 hover:text-act-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Calendar <span className="text-xs text-gray-500">(beta)</span>
              </button>
              <button 
                onClick={() => setCurrentPage('events')}
                className="text-gray-700 hover:text-act-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                My events
              </button>
              <button 
                onClick={() => setCurrentPage('groups')}
                className="text-gray-700 hover:text-act-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                My groups
              </button>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-act-teal-600 transition-colors">
                <Grid3X3 className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-act-teal-600 transition-colors">
                <User className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-2">
                <button className="bg-act-teal-600 text-white px-4 py-2 rounded-lg hover:bg-act-teal-700 transition-colors flex items-center space-x-2">
                  <span>Publish</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Search Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Keyword, event title, group name, etc."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500 focus:border-transparent"
              />
            </div>
            <button className="bg-act-teal-600 text-white px-8 py-3 rounded-lg hover:bg-act-teal-700 transition-colors flex items-center justify-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Search</span>
            </button>
          </div>

          {/* Location Filter */}
          <div className="flex items-center justify-center mb-6">
            <div className="bg-act-teal-600 text-white px-4 py-2 rounded-l-lg flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
            </div>
            <input
              type="text"
              placeholder="e.g. Nantes, Berlin, Cork, ..."
              className="px-4 py-2 border-t border-b border-gray-300 focus:ring-2 focus:ring-act-teal-500 focus:border-transparent flex-1 max-w-xs"
            />
            <button className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-r-lg transition-colors">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
              {[
                { id: 'events', label: 'Events', icon: Calendar },
                { id: 'activities', label: 'Activities', icon: Grid3X3 },
                { id: 'groups', label: 'Groups', icon: Users }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`px-6 py-3 flex items-center space-x-2 transition-colors ${
                    activeTab === id
                      ? 'bg-act-teal-600 text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Your Upcoming Events */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Your upcoming events</h2>
              <p className="text-gray-600">You have one event in 4 days.</p>
            </div>
            <button className="text-act-teal-600 hover:text-act-teal-700 text-sm font-medium">
              View everything &gt;&gt;
            </button>
          </div>

          {/* Sample Event */}
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
              N
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">NOCO (@noco)</h3>
              <p className="text-sm text-gray-600">Community event in 4 days</p>
            </div>
            <button className="bg-act-teal-600 text-white px-4 py-2 rounded-lg hover:bg-act-teal-700 transition-colors">
              View Details
            </button>
          </div>
        </div>

        {/* Additional Content Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Events */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Events</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-l-4 border-act-teal-600 pl-4">
                  <h4 className="font-medium text-gray-900">Community Workshop {i}</h4>
                  <p className="text-sm text-gray-600">Join us for an engaging session</p>
                  <p className="text-xs text-gray-500 mt-1">Dec {15 + i}, 2024</p>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Groups */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Groups</h3>
            <div className="space-y-4">
              {['Climate Action Network', 'Local Volunteers', 'Community Builders'].map((group, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {group[0]}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{group}</h4>
                    <p className="text-xs text-gray-500">{Math.floor(Math.random() * 500) + 100} members</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { action: 'joined', item: 'Climate Action Group', time: '2 hours ago' },
                { action: 'registered for', item: 'Community Workshop', time: '1 day ago' },
                { action: 'created', item: 'Local Meetup Event', time: '3 days ago' }
              ].map((activity, i) => (
                <div key={i} className="text-sm">
                  <p className="text-gray-900">
                    You <span className="font-medium">{activity.action}</span> {activity.item}
                  </p>
                  <p className="text-gray-500 text-xs">{activity.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  const renderSearchPage = () => (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => setCurrentPage('home')}
          className="mb-6 text-act-teal-600 hover:text-act-teal-700 flex items-center space-x-2"
        >
          <span>← Back to Home</span>
        </button>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Advanced Search</h1>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Keywords</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
              <div className="grid grid-cols-2 gap-4">
                <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500" />
                <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500" />
              </div>
            </div>
            <button className="bg-act-teal-600 text-white px-6 py-3 rounded-lg hover:bg-act-teal-700 transition-colors">
              Search Events & Groups
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCalendarPage = () => (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => setCurrentPage('home')}
          className="mb-6 text-act-teal-600 hover:text-act-teal-700 flex items-center space-x-2"
        >
          <span>← Back to Home</span>
        </button>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Event Calendar <span className="text-sm text-gray-500 font-normal">(beta)</span></h1>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Month</button>
              <button className="px-4 py-2 bg-act-teal-600 text-white rounded-lg">Week</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Day</button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-4 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center font-medium text-gray-700 py-2">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-4">
            {Array.from({ length: 35 }, (_, i) => (
              <div key={i} className="aspect-square border border-gray-200 rounded-lg p-2 hover:bg-gray-50">
                <div className="text-sm text-gray-600">{((i % 31) + 1)}</div>
                {i === 15 && (
                  <div className="mt-1 text-xs bg-act-teal-100 text-act-teal-800 px-2 py-1 rounded">
                    NOCO Event
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderEventsPage = () => (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => setCurrentPage('home')}
          className="mb-6 text-act-teal-600 hover:text-act-teal-700 flex items-center space-x-2"
        >
          <span>← Back to Home</span>
        </button>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">My Events</h1>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    N
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">NOCO Community Workshop</h3>
                    <p className="text-gray-600">December 20, 2024 at 2:00 PM</p>
                    <p className="text-sm text-gray-500">Downtown Community Center</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Registered</span>
              </div>
              <div className="mt-4 flex space-x-3">
                <button className="bg-act-teal-600 text-white px-4 py-2 rounded-lg hover:bg-act-teal-700 transition-colors">
                  View Details
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  Cancel Registration
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGroupsPage = () => (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => setCurrentPage('home')}
          className="mb-6 text-act-teal-600 hover:text-act-teal-700 flex items-center space-x-2"
        >
          <span>← Back to Home</span>
        </button>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">My Groups</h1>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Climate Action Network', members: 234, role: 'Member' },
              { name: 'Local Volunteers', members: 156, role: 'Admin' },
              { name: 'Community Builders', members: 89, role: 'Member' }
            ].map((group, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {group.name[0]}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{group.name}</h3>
                    <p className="text-sm text-gray-600">{group.members} members</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{group.role}</span>
                  <button className="text-act-teal-600 hover:text-act-teal-700 font-medium">
                    View Group
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Page routing
  switch (currentPage) {
    case 'search':
      return renderSearchPage();
    case 'calendar':
      return renderCalendarPage();
    case 'events':
      return renderEventsPage();
    case 'groups':
      return renderGroupsPage();
    default:
      return renderHomePage();
  }
}

export default App;