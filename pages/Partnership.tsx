
import React from 'react';
import { Handshake, Rocket, Globe, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import { CONTACT_INFO } from '../constants';
import Reveal from '../components/Reveal';

const Partnership: React.FC = () => {
  const handlePartnerInquiry = (type: string) => {
    trackEvent('partnership_inquiry', 'Collaboration', type);
    const msg = encodeURIComponent(`您好，我們對 Wismass 的「${type}」感興趣。`);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${msg}`, '_blank');
  };

  const partnerTypes = [
    { title: '機構合作夥伴', desc: '針對金融、法務及企業服務機構，共建服務生態。', icon: Globe, benefits: ['資源共享', '客戶協同', '品牌背書'] },
    { title: '品牌顧問加盟', desc: '歡迎資深市場顧問加入 Wismass 專家庫。', icon: Handshake, benefits: ['專案配對', '中後臺支持', '靈活模式'] },
    { title: 'BITLAB 加速', desc: '專為高成長初創品牌設計的加速模型。', icon: Rocket, benefits: ['數據開放', '資源傾斜', '資本對接'] },
    { title: '技術合作', desc: '誠邀 AI 技術供應商共同優化營銷路徑。', icon: BarChart3, benefits: ['產品落地', '聯合研發', '流量分發'] }
  ];

  return (
    <div className="bg-white">
      {/* Header - Standardized Padding & Typography */}
      <section className="bg-slate-50 pt-32 pb-24 lg:pt-48 lg:pb-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] lg:text-xs mb-4 block">Join Our Ecosystem</span>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              協同發展，<br /><span className="text-blue-600">共創商業新高度</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed mt-8">
              我們尋找致力於創造價值的夥伴。通過 BITLAB 平台，共建極致專業服務。
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {partnerTypes.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="bg-white p-12 rounded-[2.5rem] border border-slate-200 hover:border-blue-600 transition-all flex flex-col h-full group">
                <div className="w-14 h-14 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <p.icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{p.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow">{p.desc}</p>
                <div className="space-y-3 mb-10">
                  {p.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <CheckCircle2 size={16} className="text-blue-500" />
                      {benefit}
                    </div>
                  ))}
                </div>
                <button onClick={() => handlePartnerInquiry(p.title)} className="w-full py-4 bg-slate-50 text-slate-900 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2">
                  探索合作 <ArrowRight size={18} />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Partnership;
