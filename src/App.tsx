import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Platform from './pages/Platform';
import WhyACTTogether from './pages/WhyACTTogether';
import Pricing from './pages/Volunteer'; // Renamed from Volunteer to Pricing
import Resources from './pages/Resources';
import Login from './pages/Login';
import Signup from './pages/Signup';
import GetStarted from './pages/GetStarted';
import Success from './pages/Success';
import HelpCenter from './pages/HelpCenter';
import Account from './pages/Account';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/why" element={<WhyACTTogether />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/volunteer" element={<Pricing />} /> {/* Keep old route for compatibility */}
        <Route path="/resources" element={<Resources />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/success" element={<Success />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Layout>
  );
}

export default App;