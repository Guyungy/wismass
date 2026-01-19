
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, Globe, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import Magnetic from './Magnetic';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    const hashPath = path.replace('#', '');
    return location.pathname === hashPath || (location.pathname === '/' && hashPath === '/');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-700 ${
      scrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className={`relative flex justify-between items-center px-10 py-5 rounded-[2.5rem] transition-all duration-700 ${
          scrolled 
          ? 'bg-slate-900/95 border border-white/15 backdrop-blur-2xl shadow-2xl' 
          : 'bg-transparent'
        }`}>
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 shrink-0 group">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-500">
              <Cpu size={26} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-tight leading-none uppercase">WISMASS</span>
              <span className="text-xs font-bold text-blue-400 tracking-[0.2em] uppercase mt-1.5">Enterprise Consulting</span>
            </div>
          </Link>

          {/* Navigation Links - Increased Font and Contrast */}
          <div className="hidden lg:flex items-center gap-3 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-sm relative">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href.replace('#', '')}
                onMouseEnter={() => setHoveredPath(item.href)}
                onMouseLeave={() => setHoveredPath(null)}
                className={`relative px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-500 z-10 whitespace-nowrap ${
                  isActive(item.href) ? 'text-white' : 'text-slate-200 hover:text-white'
                }`}
              >
                {(hoveredPath === item.href || isActive(item.href)) && (
                  <motion.div
                    layoutId="nav-glow"
                    className={`absolute inset-0 rounded-xl z-[-1] ${
                      isActive(item.href) ? 'bg-blue-600 shadow-[0_10px_30px_rgba(37,99,235,0.4)]' : 'bg-white/10'
                    }`}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-6">
             <div className="hidden xl:flex items-center gap-3 border-r border-white/15 pr-6 mr-2">
                <Globe size={18} className="text-blue-500" />
                <span className="text-sm font-bold text-slate-200 uppercase tracking-widest">Network: Optimal</span>
             </div>
             
             <Magnetic strength={0.2}>
               <Link
                to="/contact"
                className="bg-white text-slate-900 px-10 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-3 group"
               >
                 <span>預約諮詢</span>
                 <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </Link>
             </Magnetic>
             
             <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-3 hover:bg-white/10 rounded-2xl border border-white/10"
             >
               {isOpen ? <X size={28} /> : <Menu size={28} />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="lg:hidden fixed inset-0 bg-slate-950 z-[120] flex flex-col p-10 backdrop-blur-3xl"
          >
             <div className="flex justify-between items-center mb-24">
                <span className="text-2xl font-black tracking-tighter text-blue-500 uppercase">WISMASS SYNC</span>
                <button onClick={() => setIsOpen(false)} className="p-4 border border-white/15 rounded-full bg-white/5"><X size={32} /></button>
             </div>
             <div className="flex flex-col space-y-10">
                {NAV_ITEMS.map((item, i) => (
                  <Link
                    key={item.href}
                    to={item.href.replace('#', '')}
                    onClick={() => setIsOpen(false)}
                    className="group flex flex-col items-start"
                  >
                    <span className="text-sm font-mono text-blue-500 mb-2">0{i+1}</span>
                    <span className="text-6xl font-black text-white hover:text-blue-500 transition-all uppercase tracking-tighter">
                      {item.label}
                    </span>
                  </Link>
                ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
