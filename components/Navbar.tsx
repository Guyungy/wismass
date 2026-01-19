
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
    <nav className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
      scrolled ? 'py-4 glass-nav shadow-sm' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ rotate: 15, scale: 1.05 }}
            className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200"
          >
            <Cpu size={22} />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tighter uppercase leading-none text-slate-900">Wismass</span>
            <span className="text-[10px] font-bold text-blue-600 tracking-widest uppercase mt-1">Consulting</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href.replace('#', '')}
              className={`text-[13px] font-bold uppercase tracking-widest transition-all relative py-1 group ${
                isActive(item.href) ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {item.label}
              <motion.span 
                initial={false}
                animate={{ width: isActive(item.href) ? '100%' : '0%' }}
                className="absolute bottom-0 left-0 h-[2px] bg-blue-600"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full opacity-30" />
            </Link>
          ))}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link to="/contact" className="px-6 py-2.5 bg-blue-600 text-white text-[13px] font-bold uppercase tracking-widest rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-100 flex items-center">
              預約對話
            </Link>
          </motion.div>
        </div>

        <button onClick={() => setIsOpen(true)} className="lg:hidden text-slate-900 p-2">
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[120] flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-xl font-black text-blue-600 uppercase">WISMASS</span>
              <button onClick={() => setIsOpen(false)} className="text-slate-900 p-3 border border-slate-100 rounded-full hover:bg-slate-50">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {NAV_ITEMS.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  key={item.href}
                >
                  <Link
                    to={item.href.replace('#', '')}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-extrabold text-slate-900 hover:text-blue-600 transition-all uppercase tracking-tighter"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="px-10 py-5 bg-blue-600 text-white rounded-2xl text-center font-bold block w-full shadow-xl shadow-blue-100"
                >
                  立即諮詢
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
