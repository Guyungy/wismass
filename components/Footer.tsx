
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Cpu, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';
import { trackEvent } from '../utils/analytics';

const Footer: React.FC = () => {
  const handleSocialClick = (platform: string) => {
    trackEvent('social_click', 'Engagement', platform);
  };

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform">
                <Cpu size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase leading-none">Wismass</span>
                <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase mt-1">Consulting</span>
              </div>
            </Link>
            <div className="space-y-4">
              <p className="text-slate-500 leading-relaxed font-medium text-sm">
                {CONTACT_INFO.full_name}<br />
                {CONTACT_INFO.history}，專注於為企業提供一站式跨境專業諮詢與全鏈路品牌加速。
              </p>
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, name: 'Facebook' },
                  { Icon: Instagram, name: 'Instagram' },
                  { Icon: Linkedin, name: 'Linkedin' }
                ].map(({ Icon, name }) => (
                  <a 
                    key={name} 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handleSocialClick(name); }}
                    className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-8">導航 Navigate</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link to={item.href.replace('#', '')} className="text-slate-500 hover:text-blue-600 font-bold transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Global Presence (HK) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-8">香港辦事處 (HK)</h4>
            <div className="space-y-6">
              <div className="flex gap-3">
                <MapPin size={16} className="text-blue-600 shrink-0 mt-1" />
                <p className="text-xs font-bold text-slate-800 leading-relaxed">{CONTACT_INFO.hk_address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-600 shrink-0" />
                <a href={`tel:${CONTACT_INFO.whatsapp}`} className="text-xs font-black text-slate-900 hover:text-blue-600 transition-colors">{CONTACT_INFO.whatsapp}</a>
              </div>
            </div>
          </div>

          {/* Column 4: Global Presence (NY) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-8">紐約辦事處 (NY)</h4>
            <div className="space-y-6">
              <div className="flex gap-3">
                <Globe size={16} className="text-blue-600 shrink-0 mt-1" />
                <p className="text-xs font-bold text-slate-800 leading-relaxed">{CONTACT_INFO.us_address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-600 shrink-0" />
                <a href={`tel:${CONTACT_INFO.us_phone}`} className="text-xs font-black text-slate-900 hover:text-blue-600 transition-colors">{CONTACT_INFO.us_phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-600 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-xs font-black text-slate-900 hover:text-blue-600 transition-colors">{CONTACT_INFO.email}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            © 2024 {CONTACT_INFO.full_name} | ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <button className="hover:text-blue-600 transition-colors">Privacy Policy</button>
            <button className="hover:text-blue-600 transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
