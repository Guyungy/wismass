
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Partnership from './pages/Partnership';
import News from './pages/News';
import AIConsultant from './components/AIConsultant';
import CustomCursor from './components/CustomCursor';
import { trackPageView, fetchAndTrackIP } from './utils/analytics';

const App: React.FC = () => {
  const location = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    fetchAndTrackIP();

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView(location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen selection:bg-blue-600 selection:text-white">
      <CustomCursor />
      
      {/* Dynamic Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-blue-600 to-indigo-500 z-[100] transition-all duration-150 ease-out pointer-events-none shadow-[0_0_10px_rgba(37,99,235,0.5)]"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
      <AIConsultant />
    </div>
  );
};

export default App;
