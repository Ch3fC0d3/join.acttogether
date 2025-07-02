import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Platform from './pages/Platform';
import WhyACTTogether from './pages/WhyACTTogether';
import Volunteer from './pages/Volunteer';
import Resources from './pages/Resources';
import Login from './pages/Login';
import Signup from './pages/Signup';
import GetStarted from './pages/GetStarted';
import Success from './pages/Success';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/why" element={<WhyACTTogether />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Layout>
  );
}

export default App;