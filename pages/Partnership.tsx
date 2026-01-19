
import React from 'react';
import { Handshake, Rocket, Globe, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import { CONTACT_INFO } from '../constants';
import Reveal from '../components/Reveal';

const Partnership: React.FC = () => {
  const handlePartnerInquiry = (type: string) => {
    trackEvent('partnership_inquiry', 'Collaboration', type);
    const msg = encodeURIComponent(`您好，我們對 Wismass 的「${type}」感興趣，希望能進一步探討合作可能。`);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${msg}`, '_blank');
  };

  const partnerTypes = [
    {
      title: '機構合作夥伴',
      desc: '針對金融、法務及企業服務機構，共同打造一站式服務生態鏈，實現資源互補。',
      icon: Globe,
      benefits: ['專業資源共享', '客戶協同開發', '品牌聯合背書']
    },
    {
      title: '品牌顧問加盟',
      desc: '歡迎具有資深市場經驗的個人顧問或工作室加入 Wismass 專家庫，共享專案。',
      icon: Handshake,
      benefits: ['豐富專案配對', '專業中後臺支持', '靈活合作模式']
    },
    {
      title: 'BITLAB 加速計劃',
      desc: '專為高成長潛力的初創品牌設計。我們提供種子期的營銷賦能與場景對接。',
      icon: Rocket,
      benefits: ['場景數據開放', '傳播資源傾斜', '資本市場對接']
    },
    {
      title: '技術與內容合作',
      desc: '誠邀數據分析、AI 技術供應商、高質量內容創作者共同優化品牌成長路徑。',
      icon: BarChart3,
      benefits: ['產品應用落地', '聯合研發機會', '流量分發支持']
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-32 lg:py-48 relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 space-y-6">
          <Reveal>
            <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-xs">Join Our Ecosystem</span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mt-4">
              協同發展，<br /><span className="text-blue-600">共創商業新高度</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium mt-6">
              我們在尋找那些致力於「為品牌創造真實價值」的夥伴。通過 BITLAB 的全鏈路加速平台，我們共同為客戶提供無縫、極致的專業服務體驗。
            </p>
          </Reveal>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {partnerTypes.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="bg-white p-12 rounded-[2.5rem] border border-slate-200 hover:border-blue-500 transition-all duration-500 flex flex-col h-full group">
                <div className="w-14 h-14 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <p.icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{p.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow">
                  {p.desc}
                </p>
                <div className="space-y-3 mb-10">
                  {p.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <CheckCircle2 size={16} className="text-blue-500" />
                      {benefit}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => handlePartnerInquiry(p.title)}
                  className="w-full py-4 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  探索合作可能 <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <Reveal>
            <h2 className="text-4xl font-black text-slate-900">成為我們生態鏈的一份子</h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              我們相信「1+1 &gt; 2」的協作力量。如果您在營銷、技術、設計或商務領域具備卓越能力，我們期待與您建立長期的戰略夥伴關係。
            </p>
            <button 
              onClick={() => handlePartnerInquiry('General Partnership')}
              className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all active:scale-95 mt-6"
            >
              提交合作申請
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Partnership;
