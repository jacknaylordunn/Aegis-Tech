import React from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { EResus } from './pages/EResus';
import { Aspis } from './pages/Aspis';
import { CPRStat } from './pages/CPRStat';
import { Prescription } from './pages/Prescription';

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <Layout currentPath={location.pathname} onNavigate={handleNavigate}>
      <Routes>
        <Route path="/" element={<Home onNavigate={handleNavigate} />} />
        <Route path="/eresus" element={<EResus />} />
        <Route path="/aspis" element={<Aspis />} />
        <Route path="/cprstat" element={<CPRStat />} />
        <Route path="/prescription" element={<Prescription />} />
      </Routes>
    </Layout>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}