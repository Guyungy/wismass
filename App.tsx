
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Partnership from './pages/Partnership';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import AIConsultant from './components/AIConsultant';
import CustomCursor from './components/CustomCursor';
import InteractiveBackground from './components/InteractiveBackground';
import { trackPageView, fetchAndTrackIP } from './utils/analytics';

const App: React.FC = () => {
  const location = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    fetchAndTrackIP();
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / (totalHeight || 1)) * 100;
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
    <div className="flex flex-col min-h-screen selection:bg-blue-100 selection:text-blue-900 bg-white">
      <CustomCursor />
      <InteractiveBackground />

      <div
        className="fixed top-0 left-0 h-[3px] bg-blue-600 z-[200] transition-all duration-300 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />

      {/* Ensure main takes up remaining space to push footer down correctly */}
      <main className="flex-grow flex flex-col relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-grow"
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/partnership" element={<Partnership />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <FloatingActions />
      {/* <AIConsultant /> */}
    </div>
  );
};

export default App;
