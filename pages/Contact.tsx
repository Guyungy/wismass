
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { trackEvent } from '../utils/analytics';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    service: '品牌建立與優化',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('form_submission', 'Lead Generation', formData.service);
    console.debug('[Lead] Form Data:', formData);
    setSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pb-24 pt-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-16">
            <div className="space-y-8">
              <div className="inline-flex px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-xs font-black tracking-widest uppercase">
                Contact Us
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight">
                對話，<br />
                <span className="text-blue-600">啟發</span>未來。
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed font-medium">
                無論是初創企業還是成熟品牌，我們的專家團隊都能為您提供客製化的專業諮詢。
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-center gap-8 group cursor-pointer" onClick={() => window.open(`tel:${CONTACT_INFO.whatsapp}`)}>
                <div className="w-16 h-16 bg-white shadow-xl shadow-slate-200/50 text-blue-600 rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">電話/WhatsApp</p>
                  <p className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{CONTACT_INFO.whatsapp}</p>
                </div>
              </div>

              <div className="flex items-center gap-8 group cursor-pointer" onClick={() => window.open(`mailto:${CONTACT_INFO.email}`)}>
                <div className="w-16 h-16 bg-white shadow-xl shadow-slate-200/50 text-blue-600 rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">商務電郵</p>
                  <p className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-white shadow-xl shadow-slate-200/50 text-blue-600 rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">辦事處</p>
                  {/* Fixed: Property 'address' does not exist on CONTACT_INFO. Using 'hk_address' instead. */}
                  <p className="text-2xl font-black text-slate-900 leading-tight">{CONTACT_INFO.hk_address}</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button 
                onClick={() => {
                  trackEvent('contact_whatsapp_cta', 'Lead', 'Contact Page');
                  window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`);
                }}
                className="flex items-center gap-4 px-10 py-5 bg-emerald-500 text-white rounded-[2rem] font-black text-lg hover:bg-emerald-600 shadow-2xl shadow-emerald-200 transition-all hover:-translate-y-1 active:scale-95 duration-300"
              >
                <MessageCircle size={24} /> WhatsApp 即時對話
              </button>
            </div>
          </div>

          <div className="bg-white p-10 lg:p-16 rounded-[3.5rem] shadow-[0_40px_80px_-20px_rgba(15,23,42,0.1)] border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[4rem] -z-0"></div>
            
            {submitted ? (
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center space-y-8 py-16 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center animate-bounce">
                  <CheckCircle2 size={48} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl font-black text-slate-900">感謝您的垂詢！</h3>
                  <p className="text-lg text-slate-500 max-w-sm mx-auto">
                    我們的資深顧問已收到您的訊息，將在 24 小時內親自與您聯繫。
                  </p>
                </div>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg"
                >
                  發送新諮詢
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                <h2 className="text-3xl font-black text-slate-900">啟動您的方案</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">稱呼</label>
                    <input 
                      required 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-5 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all outline-none font-semibold" 
                      placeholder="陳先生 / 曾小姐" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">聯絡電話</label>
                    <input 
                      required 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-5 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all outline-none font-semibold" 
                      placeholder="+852 0000 0000" 
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">企業/組織名稱</label>
                  <input 
                    required 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-6 py-5 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all outline-none font-semibold" 
                    placeholder="您的公司完整名稱" 
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">感興趣的領域</label>
                  <div className="relative">
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-6 py-5 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all outline-none font-semibold appearance-none cursor-pointer"
                    >
                      <option>品牌建立與優化</option>
                      <option>市場戰略規劃</option>
                      <option>全流程顧問服務</option>
                      <option>視覺設計服務</option>
                      <option>社群媒體運營</option>
                      <option>線下活動策劃</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ArrowRight className="rotate-90 text-slate-400" size={18} />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">具體需求說明</label>
                  <textarea 
                    required 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-6 py-5 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all outline-none font-semibold resize-none" 
                    placeholder="請描述您的品牌挑戰或專案目標..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-6 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 shadow-2xl shadow-blue-200 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
                >
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
