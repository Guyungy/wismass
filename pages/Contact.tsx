
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import Reveal from '../components/Reveal';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Standardized Header & Typography */}
      <section className="bg-slate-50 pt-32 pb-24 lg:pt-48 lg:pb-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] lg:text-xs mb-4 block">Get in Touch</span>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              對話，<span className="text-blue-600">啟發未來</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed mt-8">
              無論是初創企業還是成熟品牌，我們的專家團隊都能為您提供客製化的專業諮詢。
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-16">
            <Reveal className="space-y-10">
              <div className="flex items-center gap-8 group cursor-pointer" onClick={() => window.open(`tel:${CONTACT_INFO.whatsapp}`)}>
                <div className="w-16 h-16 bg-white shadow-xl text-blue-600 rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="text-2xl font-black text-slate-900">{CONTACT_INFO.whatsapp}</p>
                </div>
              </div>

              <div className="flex items-center gap-8 group cursor-pointer" onClick={() => window.open(`mailto:${CONTACT_INFO.email}`)}>
                <div className="w-16 h-16 bg-white shadow-xl text-blue-600 rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-2xl font-black text-slate-900">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-white shadow-xl text-blue-600 rounded-3xl flex items-center justify-center shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Office</p>
                  <p className="text-2xl font-black text-slate-900 leading-tight">{CONTACT_INFO.hk_address}</p>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`)}
                  className="flex items-center gap-4 px-10 py-5 bg-emerald-500 text-white rounded-2xl font-black text-lg hover:bg-emerald-600 shadow-xl shadow-emerald-100 transition-all"
                >
                  <MessageCircle size={24} /> 即時對話
                </button>
              </div>
            </Reveal>
          </div>

          <div className="bg-white p-10 lg:p-16 rounded-[3.5rem] shadow-2xl border border-slate-100 relative overflow-hidden">
            {submitted ? (
              <div className="text-center space-y-8 py-16">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={48} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-slate-900">感謝您的垂詢</h3>
                  <p className="text-slate-500 font-medium mt-4">我們將在 24 小時內與您聯繫。</p>
                </div>
                <button onClick={() => setSubmitted(false)} className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold">新諮詢</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <h2 className="text-2xl font-black text-slate-900">提交您的需求</h2>
                <div className="space-y-6">
                  <input required type="text" placeholder="您的姓名" className="w-full px-6 py-5 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-600 outline-none font-bold" />
                  <input required type="tel" placeholder="聯絡電話" className="w-full px-6 py-5 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-600 outline-none font-bold" />
                  <select className="w-full px-6 py-5 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-600 outline-none font-bold appearance-none">
                    <option>品牌建立與優化</option>
                    <option>市場戰略規劃</option>
                    <option>視覺設計服務</option>
                  </select>
                  <textarea rows={4} placeholder="需求說明..." className="w-full px-6 py-5 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-600 outline-none font-bold resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-6 bg-blue-600 text-white rounded-2xl font-black text-xl shadow-lg shadow-blue-200 flex items-center justify-center gap-3">
                  確認發送 <Send size={22} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
