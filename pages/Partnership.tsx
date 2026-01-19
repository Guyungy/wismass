
import React from 'react';
import { Handshake, Rocket, Globe, BarChart3, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import { CONTACT_INFO } from '../constants';

const Partnership: React.FC = () => {
  const handlePartnerInquiry = (type: string) => {
    trackEvent('partnership_inquiry', 'Collaboration', type);
    const msg = encodeURIComponent(`您好，我們對 Wismass 的「${type}」感興趣，希望能進一步探討合作可能。`);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${msg}`, '_blank');
  };

  const partnerTypes = [
    {
      title: '機構合作夥伴',
      desc: '針對金融、法務及企業服務機構，共同打造一站式服務生態鏈。',
      icon: Globe,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: '品牌顧問加盟',
      desc: '歡迎具有資深市場經驗的顧問加入 Wismass 專家庫，共享高品質專案。',
      icon: Handshake,
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      title: 'BITLAB 加速計劃',
      desc: '專為高成長潛力的初創品牌設計，提供全方位的資源對接。',
      icon: Rocket,
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: '數據與技術合作',
      desc: '誠邀數據分析、AI 技術供應商共同優化全鏈路品牌成長路徑。',
      icon: BarChart3,
      color: 'bg-amber-50 text-amber-600'
    }
  ];

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 space-y-8">
          <div className="inline-flex px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-400 text-xs font-black tracking-widest uppercase">
            Joint Success
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
            與全球領先品牌<br /><span className="text-blue-500">同步成長</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
            Wismass 合作計劃旨在打破行業壁壘。我們尋求志同道合的夥伴，共同利用 BITLAB 平台的場景數據能力，為企業創造可量化的價值。
          </p>
        </div>
      </section>

      {/* Grid Content */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid md:grid-cols-2 gap-8">
          {partnerTypes.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 group hover:-translate-y-2 transition-all duration-500">
                <div className={`w-16 h-16 ${p.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{p.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8 font-medium">
                  {p.desc}
                </p>
                <button 
                  onClick={() => handlePartnerInquiry(p.title)}
                  className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all"
                >
                  探索合作可能 <ArrowRight size={20} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 mt-32 text-center space-y-10">
        <h2 className="text-4xl font-black text-slate-900">成為我們生態鏈的一部分</h2>
        <p className="text-lg text-slate-500 leading-relaxed">
          我們目前在全球範圍內篩選具備專業能力的服務商與顧問。如果您的團隊致力於為客戶提供極致價值，我們期待與您建立長期的戰略合作。
        </p>
        <button 
          onClick={() => handlePartnerInquiry('General Partnership')}
          className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all active:scale-95"
        >
          提交合作申請
        </button>
      </section>
    </div>
  );
};

export default Partnership;
