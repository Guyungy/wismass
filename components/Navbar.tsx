
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
        <div className={`relative flex justify-between items-center px-10 py-4 rounded-3xl transition-all duration-700 ${
          scrolled 
          ? 'bg-slate-900/80 border border-white/5 backdrop-blur-2xl shadow-2xl' 
          : 'bg-transparent'
        }`}>
          
          {/* Logo - Professional Branding */}
          <Link to="/" className="flex items-center gap-4 shrink-0 group">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-500">
              <Cpu size={22} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-white tracking-tight leading-none uppercase">WISMASS</span>
              <span className="text-[9px] font-bold text-slate-400 tracking-[0.3em] uppercase mt-1">Professional Consulting</span>
            </div>
          </Link>

          {/* Spaced out HUD Dock */}
          <div className="hidden lg:flex items-center gap-2 bg-white/5 p-1 rounded-2xl border border-white/5 backdrop-blur-sm relative">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href.replace('#', '')}
                onMouseEnter={() => setHoveredPath(item.href)}
                onMouseLeave={() => setHoveredPath(null)}
                className={`relative px-6 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all duration-500 z-10 whitespace-nowrap ${
                  isActive(item.href) ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {(hoveredPath === item.href || isActive(item.href)) && (
                  <motion.div
                    layoutId="nav-glow"
                    className={`absolute inset-0 rounded-xl z-[-1] ${
                      isActive(item.href) ? 'bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.3)]' : 'bg-white/5'
                    }`}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Corporate Action */}
          <div className="flex items-center gap-6">
             <div className="hidden xl:flex items-center gap-2 border-r border-white/10 pr-6 mr-2">
                <Globe size={14} className="text-blue-500" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Network Status: Optimal</span>
             </div>
             
             <Magnetic strength={0.2}>
               <Link
                to="/contact"
                className="bg-white text-slate-900 px-8 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-2 group"
               >
                 <span>預約諮詢</span>
                 <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </Link>
             </Magnetic>
             
             <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-xl"
             >
               {isOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="lg:hidden fixed inset-0 bg-slate-950 z-[120] flex flex-col p-10"
          >
             <div className="flex justify-between items-center mb-20">
                <span className="text-xl font-bold tracking-tighter text-blue-500 uppercase">WISMASS Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-3 border border-white/10 rounded-full"><X size={24} /></button>
             </div>
             <div className="flex flex-col space-y-8">
                {NAV_ITEMS.map((item, i) => (
                  <Link
                    key={item.href}
                    to={item.href.replace('#', '')}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-extrabold text-white hover:text-blue-500 transition-all flex items-center gap-4"
                  >
                    <span className="text-xs text-slate-700 font-mono">0{i+1}</span>
                    {item.label}
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
