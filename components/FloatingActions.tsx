
import React from 'react';
import { WhatsAppIcon, WeChatWorkIcon } from './icons/BrandIcons';
import { CONTACT_CONFIG } from '../config';
import { trackEvent } from '../utils/analytics';

const FloatingActions: React.FC = () => {
  const handleWhatsAppClick = () => {
    trackEvent('contact_whatsapp', 'Lead Generation', 'Floating Button');
  };

  const handleWeChatClick = () => {
    trackEvent('contact_wechat', 'Lead Generation', 'Floating Button');

    // @ts-ignore
    if (CONTACT_CONFIG.wechat_work_link) {
      // @ts-ignore
      window.open(CONTACT_CONFIG.wechat_work_link, '_blank');
      return;
    }

    const msg = `請掃描或搜索企業微信 ID: ${CONTACT_CONFIG.wechat}\n\n如有需要，我們可以直接通過電話聯絡。`;
    alert(msg);
  };

  return (
    <div className="fixed bottom-8 left-8 flex flex-col gap-4 z-[60]">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${CONTACT_CONFIG.whatsapp.replace('+', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="group relative flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-2xl shadow-slate-200/50 hover:bg-slate-50 transition-all transform hover:scale-110 active:scale-95 duration-300"
        aria-label="WhatsApp 客服"
      >
        <WhatsAppIcon size={56} className="w-full h-full" />
        <span className="absolute left-16 bg-white text-slate-800 px-4 py-2 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-xl border border-slate-100 pointer-events-none">
          WhatsApp 諮詢
        </span>
      </a>

      {/* WeChat / Consultation Button */}
      <button
        onClick={handleWeChatClick}
        className="group relative flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-2xl shadow-slate-200/50 hover:bg-slate-50 transition-all transform hover:scale-110 active:scale-95 duration-300"
        aria-label="企業微信客服"
      >
        <WeChatWorkIcon size={56} className="w-full h-full" />
        <span className="absolute left-16 bg-white text-slate-800 px-4 py-2 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-xl border border-slate-100 pointer-events-none">
          企業微信客服
        </span>
      </button>
    </div>
  );
};

export default FloatingActions;
