
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';
import { trackEvent } from '../utils/analytics';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handlePlanClick = (planName: string) => {
    trackEvent('footer_plan_click', 'Conversion', planName);
    const encodedMsg = encodeURIComponent(`您好，我對 Wismass 的「${planName}」感興趣，想了解更多詳情。`);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${encodedMsg}`, '_blank');
  };

  const handleSocialClick = (platform: string) => {
    trackEvent('social_click', 'Engagement', platform);
  };

  const relatedLinks = [
    'Flexible Plan',
    'Monthly Plan',
    'Training & Mentoring',
    'Handicraftsman/Artist',
    'Event & Venue'
  ];

  return (
    <footer className="bg-white border-t border-slate-200 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="space-y-8">
            <Link 
              to="/" 
              onClick={() => trackEvent('footer_logo_click', 'Navigation', 'Footer')}
              className="text-4xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent uppercase"
            >
              Wismass
            </Link>
            <p className="text-slate-800 leading-relaxed text-lg font-medium">
              Wismass 市場營銷諮詢聯合 BITLAB「全鏈路品牌加速器」，致力於為企業提供從場景到數據的全方位品牌賦能。
            </p>
            <div className="flex gap-5">
              {[
                { Icon: Facebook, name: 'Facebook' },
                { Icon: Instagram, name: 'Instagram' },
                { Icon: Linkedin, name: 'Linkedin' },
                { Icon: Twitter, name: 'Twitter' }
              ].map(({ Icon, name }) => (
                <a 
                  key={name} 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); handleSocialClick(name); }}
                  className="w-12 h-12 bg-slate-100 text-slate-700 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 shadow-md"
                  aria-label={name}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-widest border-b-2 border-blue-600 w-fit pb-2">導航 Navigate</h4>
            <ul className="space-y-5 pt-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link 
                    to={item.href.replace('#', '')} 
                    onClick={() => trackEvent('footer_nav_click', 'Navigation', item.label)}
                    className="text-slate-800 hover:text-blue-600 text-lg font-bold transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-blue-600 mr-0 group-hover:mr-4 transition-all"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-widest border-b-2 border-blue-600 w-fit pb-2">相關連結 Links</h4>
            <ul className="space-y-5 pt-4">
              {relatedLinks.map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => handlePlanClick(link)}
                    className="text-slate-800 hover:text-blue-600 text-lg font-bold transition-colors flex items-center gap-3 group text-left w-full"
                  >
                    {link} 
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-widest border-b-2 border-blue-600 w-fit pb-2">聯絡諮詢 Contact</h4>
            <div className="space-y-8 text-lg text-slate-800 pt-4">
              <p className="flex flex-col gap-2">
                <span className="font-black text-slate-900 uppercase text-xs tracking-[0.2em]">Address</span>
                <span className="font-bold leading-snug">{CONTACT_INFO.address}</span>
              </p>
              <a 
                href={`tel:${CONTACT_INFO.whatsapp}`}
                onClick={() => trackEvent('footer_contact_click', 'Lead', 'Phone')}
                className="flex flex-col gap-2 hover:text-blue-600 transition-colors"
              >
                <span className="font-black text-slate-900 uppercase text-xs tracking-[0.2em]">WhatsApp</span>
                <span className="font-bold text-2xl">{CONTACT_INFO.whatsapp}</span>
              </a>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                onClick={() => trackEvent('footer_contact_click', 'Lead', 'Email')}
                className="flex flex-col gap-2 hover:text-blue-600 transition-colors"
              >
                <span className="font-black text-slate-900 uppercase text-xs tracking-[0.2em]">Email</span>
                <span className="font-bold text-lg underline decoration-blue-200 underline-offset-4">{CONTACT_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-slate-600 font-bold uppercase tracking-wider">
          <p className="text-center md:text-left">BITLAB © 2024. All rights reserved. | Wismass 市場營銷諮詢 聯合提供</p>
          <div className="flex gap-10 text-slate-900">
            <button onClick={() => trackEvent('legal_click', 'Info', 'Privacy')} className="hover:text-blue-600 transition-all underline decoration-blue-100 hover:decoration-blue-600 underline-offset-4">隱私政策</button>
            <button onClick={() => trackEvent('legal_click', 'Info', 'Terms')} className="hover:text-blue-600 transition-all underline decoration-blue-100 hover:decoration-blue-600 underline-offset-4">服務條款</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
