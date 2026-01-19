
import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { trackEvent } from '../utils/analytics';

const FloatingActions: React.FC = () => {
  const handleWhatsAppClick = () => {
    trackEvent('contact_whatsapp', 'Lead Generation', 'Floating Button');
  };

  const handleWeChatClick = () => {
    trackEvent('contact_wechat', 'Lead Generation', 'Floating Button');
    const msg = `請掃描或搜索企業微信 ID: ${CONTACT_INFO.wechat}\n\n如有需要，我們可以直接通過電話聯絡。`;
    alert(msg);
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[60]">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-200/50 hover:bg-emerald-600 transition-all transform hover:scale-110 active:scale-95 duration-300"
        aria-label="WhatsApp 客服"
      >
        <MessageCircle size={28} />
        <span className="absolute right-16 bg-white text-slate-800 px-4 py-2 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-xl border border-slate-100 pointer-events-none">
          WhatsApp 諮詢
        </span>
      </a>

      {/* WeChat / Consultation Button */}
      <button
        onClick={handleWeChatClick}
        className="group relative flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl shadow-blue-200/50 hover:bg-blue-700 transition-all transform hover:scale-110 active:scale-95 duration-300"
        aria-label="企業微信客服"
      >
        <PhoneCall size={26} />
        <span className="absolute right-16 bg-white text-slate-800 px-4 py-2 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-xl border border-slate-100 pointer-events-none">
          企業微信客服
        </span>
      </button>
    </div>
  );
};

export default FloatingActions;
