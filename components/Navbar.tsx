
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
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

  const isActive = (path: string) => {
    const hashPath = path.replace('#', '');
    return location.pathname === hashPath || (location.pathname === '/' && hashPath === '/');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`relative flex justify-between items-center transition-all duration-500 px-6 py-4 rounded-full border border-white/20 shadow-2xl backdrop-blur-2xl ${
          scrolled ? 'bg-white/70 shadow-slate-200/50' : 'bg-transparent border-transparent shadow-none'
        }`}>
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-slate-950 rounded-lg flex items-center justify-center text-white font-black text-xl">W</div>
              <span className="text-xl font-black text-slate-950 tracking-tighter">
                Wismass
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href.replace('#', '')}
                className={`text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive(item.href) ? 'text-blue-600' : 'text-slate-500 hover:text-slate-950'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-slate-950 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 hover:shadow-blue-200 flex items-center gap-2 group"
            >
              Consult Now <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-950 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-[110] flex flex-col p-10 space-y-8 animate-in fade-in duration-500">
           <div className="flex justify-between items-center">
              <span className="text-2xl font-black tracking-tighter">Wismass</span>
              <button onClick={() => setIsOpen(false)}><X size={32} /></button>
           </div>
           <div className="flex flex-col space-y-6 pt-10">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href.replace('#', '')}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black text-slate-950 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
           </div>
           <div className="pt-10">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-slate-950 text-white py-6 rounded-2xl text-xl font-bold"
              >
                獲取報價
              </Link>
           </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
