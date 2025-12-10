
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Register from './pages/Register';
import Login from './pages/Login';
import AiAssistant from './pages/AiAssistant';
import Help from './pages/Help';
import FloatingAiChat from './components/FloatingAiChat';
import Legal from './pages/Legal';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/market" element={<Marketplace />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ai-advisor" element={<AiAssistant />} />
            <Route path="/help" element={<Help />} />
            <Route path="/terms" element={<Legal type="terms" />} />
            <Route path="/privacy" element={<Legal type="privacy" />} />
          </Routes>
        </main>
        <Footer />
        <FloatingAiChat />
      </div>
    </Router>
  );
}

export default App;
