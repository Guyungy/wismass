
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';
import { trackEvent } from '../utils/analytics';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handlePlanClick = (planName: string) => {
    trackEvent('footer_plan_click', 'Conversion', planName);
    // Option 1: Navigate to services
    // navigate('/services');
    
    // Option 2: Open WhatsApp with pre-filled message for higher interactivity
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
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link 
              to="/" 
              onClick={() => trackEvent('footer_logo_click', 'Navigation', 'Footer')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              Wismass
            </Link>
            <p className="text-slate-500 leading-relaxed text-sm">
              Wismass 市場營銷諮詢聯合 BITLAB「全鏈路品牌加速器」，致力於為企業提供從場景到數據的全方位品牌賦能服務。
            </p>
            <div className="flex gap-4">
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
                  className="w-10 h-10 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
                  aria-label={name}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">導航 Navigate</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link 
                    to={item.href.replace('#', '')} 
                    onClick={() => trackEvent('footer_nav_click', 'Navigation', item.label)}
                    className="text-slate-500 hover:text-blue-600 text-sm transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 mr-0 group-hover:mr-2 transition-all"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">相關連結 Links</h4>
            <ul className="space-y-4">
              {relatedLinks.map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => handlePlanClick(link)}
                    className="text-slate-500 hover:text-blue-600 text-sm transition-colors flex items-center gap-2 group text-left w-full"
                  >
                    {link} 
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">聯絡我們 Contact</h4>
            <div className="space-y-4 text-sm text-slate-500">
              <p className="flex items-start gap-3">
                <span className="font-bold text-slate-900 shrink-0">地址:</span>
                <span className="hover:text-blue-600 transition-colors cursor-default">{CONTACT_INFO.address}</span>
              </p>
              <a 
                href={`tel:${CONTACT_INFO.whatsapp}`}
                onClick={() => trackEvent('footer_contact_click', 'Lead', 'Phone')}
                className="flex items-center gap-3 hover:text-blue-600 transition-colors"
              >
                <span className="font-bold text-slate-900 shrink-0">電話:</span>
                {CONTACT_INFO.whatsapp}
              </a>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                onClick={() => trackEvent('footer_contact_click', 'Lead', 'Email')}
                className="flex items-center gap-3 hover:text-blue-600 transition-colors"
              >
                <span className="font-bold text-slate-900 shrink-0">電郵:</span>
                {CONTACT_INFO.email}
              </a>
              <button 
                onClick={() => {
                  trackEvent('footer_contact_click', 'Lead', 'WeChat');
                  alert(`請添加企業微信：${CONTACT_INFO.wechat}`);
                }}
                className="flex items-center gap-3 hover:text-blue-600 transition-colors text-left"
              >
                <span className="font-bold text-slate-900 shrink-0">微信:</span>
                {CONTACT_INFO.wechat}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
          <p>BITLAB © 2024. All rights reserved. | Wismass 市場營銷諮詢 聯合提供</p>
          <div className="flex gap-8">
            <button onClick={() => trackEvent('legal_click', 'Info', 'Privacy')} className="hover:text-blue-600 transition-colors">隱私政策</button>
            <button onClick={() => trackEvent('legal_click', 'Info', 'Terms')} className="hover:text-blue-600 transition-colors">服務條款</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
