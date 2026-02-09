
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
    <footer className="bg-slate-50 border-t border-slate-200 pt-24 pb-12 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-200 group-hover:rotate-12 transition-transform">
                <Cpu size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase leading-none">Wismass</span>
                <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase mt-1">Consulting</span>
              </div>
            </Link>
            <div className="space-y-4">
              <p className="text-slate-600 leading-relaxed font-medium text-sm max-w-sm">
                {CONTACT_INFO.full_name}<br />
                {CONTACT_INFO.history}，專注於提供跨境一站式專業諮詢，通過旗艦平台 BITLAB 助力品牌加速。
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
                    className="w-11 h-11 bg-white border border-slate-200 text-slate-400 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-10 border-l-4 border-blue-600 pl-4">導航</h4>
            <ul className="space-y-4 pl-5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link to={item.href.replace('#', '')} className="text-slate-500 hover:text-blue-600 font-bold transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Global Presence (HK) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-10 border-l-4 border-blue-600 pl-4">香港 (HK)</h4>
            <div className="space-y-6 pl-5">
              <div className="flex gap-3">
                <MapPin size={18} className="text-blue-600 shrink-0 mt-1" />
                <p className="text-xs font-bold text-slate-800 leading-relaxed">{CONTACT_INFO.hk_address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-600 shrink-0" />
                <a href={`tel:${CONTACT_INFO.whatsapp}`} className="text-sm font-black text-slate-900 hover:text-blue-600 transition-colors">{CONTACT_INFO.whatsapp}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-600 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm font-black text-slate-900 hover:text-blue-600 transition-colors">{CONTACT_INFO.email}</a>
              </div>
            </div>
          </div>

          {/* Column 4: Global Presence (NY) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-10 border-l-4 border-blue-600 pl-4">紐約 (NY)</h4>
            <div className="space-y-6 pl-5">
              <div className="flex gap-3">
                <Globe size={18} className="text-blue-600 shrink-0 mt-1" />
                <p className="text-xs font-bold text-slate-800 leading-relaxed">{CONTACT_INFO.us_address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-600 shrink-0" />
                <a href={`tel:${CONTACT_INFO.us_phone}`} className="text-sm font-black text-slate-900 hover:text-blue-600 transition-colors">{CONTACT_INFO.us_phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-600 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm font-black text-slate-900 hover:text-blue-600 transition-colors">{CONTACT_INFO.email}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
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
