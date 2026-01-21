
import React from 'react';
import { Target, Award, ShieldCheck, Zap, Globe, Building2, CheckCircle2, Gavel, FileText, Banknote } from 'lucide-react';
import Reveal from '../components/Reveal';
import { CONTACT_INFO } from '../constants';

const About: React.FC = () => {
  const specializedTeams = [
    { title: '跨境法律合規', icon: Gavel, desc: '聯合具備紐約與香港執業資格的律師，處理反洗錢 (AML)、SEC 備案與多國法律架構審查。' },
    { title: '審計與稅務優化', icon: FileText, desc: '專業會計師團隊提供離岸稅務籌劃、併購審計以及跨國財務報告準則 (IFRS) 支持。' },
    { title: '資本對接', icon: Banknote, desc: '為客戶對接全球私人銀行、風投基金與家族辦公室，提供併購顧問與企業融資諮詢。' }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 pt-32 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] lg:text-xs mb-4 block">
              Global Reach • Established 2010
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              萬通智富<br />
              <span className="text-blue-600 text-3xl lg:text-5xl font-black">WISMASS LIMITED</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed mt-8">
              立足香港、服務全球的跨境綜合諮詢公司。由法律、會計及金融專業機構聯合成立，致力於提供全球商務統籌服務。
            </p>
          </Reveal>
        </div>
      </section>

      {/* Deep Expertise Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">十年專注，跨境統籌</h2>
              <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed mt-6">
                <p>
                  萬通智富自 2010 年前後建立起多個專業服務實體。我們的創始合夥人 {CONTACT_INFO.founder} 具備深厚的金融背景與英國教育經歷。
                </p>
                <p className="text-slate-500 text-base">
                  我們曾在多個複雜項目中展現卓越價值：從紐約地產投資項目的財務統籌，到亞太區科技企業的跨境合規重組。萬通智富的角色不僅是「顧問」，更是客戶在複雜全球環境下的「加速器」。
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <p className="text-4xl font-black text-blue-600 mb-2">10+</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">Years of Experience</p>
                </div>
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <p className="text-4xl font-black text-blue-600 mb-2">HK/NY</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">Global Presence</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200} className="relative">
              <div className="relative bg-white p-4 rounded-[4rem] shadow-2xl border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fm=webp&q=80&w=800" 
                  loading="lazy"
                  className="rounded-[3rem] grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
                  alt="Business Team" 
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Specialized Teams Section */}
      <section className="py-24 lg:py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight">跨專業核心服務架構</h2>
            <p className="text-slate-400 font-medium">整合細分領域專家，打破傳統諮詢公司「重建議、輕執行」的局限。</p>
          </Reveal>
          <div className="grid lg:grid-cols-3 gap-10">
            {specializedTeams.map((team, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="p-10 rounded-[2.5rem] bg-slate-800 border border-slate-700 hover:border-blue-500 transition-all group">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <team.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-black mb-4">{team.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">{team.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Highlight */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal className="order-2 lg:order-1">
              <div className="p-12 bg-slate-50 rounded-[3.5rem] border border-slate-100 space-y-8">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-100">
                  <Zap size={32} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 leading-tight">旗艦產品：BITLAB</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-lg mt-6">
                  BITLAB「全鏈路品牌加速器」通過整合專業服務資源，為企業提供標準化的全球擴張模型。我們不僅建立品牌，更通過數據實驗室驗證每一項市場假設。
                </p>
                <div className="grid grid-cols-2 gap-6 mt-6">
                   {['品牌構建', '策略導航', '數據分析', '商務統籌'].map((item, i) => (
                     <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-blue-600" />
                        <span className="font-bold text-slate-800">{item}</span>
                     </div>
                   ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={200} className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">亞太區領先的<br />商務統籌平台</h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed mt-6">
                萬通智富致力於幫助中國及亞太企業解決「出海」過程中的信任缺失與合規痛點。在紐約與香港兩地，我們提供無縫銜接的專業支持，確保您的品牌在全球市場立於不敗之地。
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 lg:py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">全球戰略據點</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 bg-white border border-slate-100 rounded-[2.5rem] hover:border-blue-600 transition-all group shadow-sm">
               <Globe className="mx-auto text-blue-600 mb-8 group-hover:scale-110 transition-transform" size={48} />
               <h3 className="text-2xl font-black text-slate-900 mb-2">香港 (HK)</h3>
               <p className="text-slate-500 font-medium mb-6">亞太區總部與業務執行中心</p>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{CONTACT_INFO.hk_address}</p>
            </div>
            <div className="p-12 bg-white border border-slate-100 rounded-[2.5rem] hover:border-blue-600 transition-all group shadow-sm">
               <Building2 className="mx-auto text-blue-600 mb-8 group-hover:scale-110 transition-transform" size={48} />
               <h3 className="text-2xl font-black text-slate-900 mb-2">紐約 (NY)</h3>
               <p className="text-slate-500 font-medium mb-6">北美市場與資本關係中心</p>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{CONTACT_INFO.us_address}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
