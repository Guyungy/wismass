
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    const cleanHref = href.replace('#', '');
    return location.pathname === cleanHref || (location.pathname === '/' && cleanHref === '/');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-500 ${
      scrolled ? 'py-4 glass-nav' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <Cpu size={22} />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-extrabold tracking-tighter uppercase leading-none ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>Wismass</span>
            <span className="text-[10px] font-bold text-blue-600 tracking-widest uppercase mt-1">Consulting</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href.replace('#', '')}
              className={`text-[13px] font-bold uppercase tracking-widest transition-colors relative group ${
                isActive(item.href) ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
          <Link to="/contact" className="px-6 py-2.5 bg-blue-600 text-white text-[13px] font-bold uppercase tracking-widest rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-100">
            預約對話
          </Link>
        </div>

        <button onClick={() => setIsOpen(true)} className="lg:hidden text-slate-900">
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[120] flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-xl font-black text-blue-600 uppercase">WISMASS</span>
              <button onClick={() => setIsOpen(false)} className="text-slate-900 p-2 border border-slate-100 rounded-full">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href.replace('#', '')}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-extrabold text-slate-900 hover:text-blue-600 transition-all uppercase tracking-tighter"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-10 py-5 bg-blue-600 text-white rounded-2xl text-center font-bold"
              >
                立即諮詢
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
