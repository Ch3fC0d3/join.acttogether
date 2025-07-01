import React from 'react';
import { Users, Calendar, MessageSquare, BarChart3, Shield, Zap, Search, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle - top right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full opacity-30"></div>
        
        {/* Medium circle - bottom left */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full opacity-25"></div>
        
        {/* Small circle - top left */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-20"></div>
        
        {/* Triangle shape - middle right */}
        <div className="absolute top-1/2 right-16 w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-green-200 opacity-15 transform rotate-12"></div>
        
        {/* Rectangle - bottom right */}
        <div className="absolute bottom-32 right-1/4 w-24 h-40 bg-gradient-to-t from-indigo-200 to-purple-200 rounded-lg opacity-20 transform rotate-45"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">ACT</span>
                  <span className="text-xl font-bold text-purple-600">TOGETHER</span>
                </div>
              </div>

              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Search</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Calendar <span className="text-xs text-gray-500">(beta)</span></a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">My events</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">My groups</a>
              </nav>

              {/* Right side buttons */}
              <div className="flex items-center space-x-4">
                <button className="bg-act-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-act-teal-700 transition-colors">
                  Publish
                </button>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search Section */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Keyword, event title, group name, etc."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-act-teal-500 focus:border-transparent"
                />
              </div>
              <button className="bg-act-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-act-teal-700 transition-colors flex items-center">
                <Search className="h-5 w-5 mr-2" />
                Search
              </button>
            </div>

            {/* Location Filter */}
            <div className="flex items-center bg-act-teal-600 text-white px-4 py-2 rounded-lg w-fit">
              <MapPin className="h-4 w-4 mr-2" />
              <input
                type="text"
                placeholder="e.g. Nantes, Berlin, Cork, ..."
                className="bg-transparent placeholder-white/70 border-none outline-none text-white"
              />
              <button className="ml-2 text-white/70 hover:text-white">×</button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-1 mb-8">
            <button className="bg-act-teal-600 text-white px-6 py-3 rounded-lg font-medium flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Events
            </button>
            <button className="bg-act-teal-500 text-white px-6 py-3 rounded-lg font-medium flex items-center">
              <BarChart3 className="h-4 w-4 mr-2" />
              Activities
            </button>
            <button className="bg-act-teal-500 text-white px-6 py-3 rounded-lg font-medium flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Groups
            </button>
          </div>

          {/* Upcoming Events Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Your upcoming events</h2>
                <p className="text-gray-600">You have one event in 4 days.</p>
              </div>
              <button className="text-act-teal-600 hover:text-act-teal-700 text-sm font-medium">
                View everything &gt;&gt;
              </button>
            </div>

            {/* Event Item */}
            <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">NO</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">NOCO (@noco)</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;