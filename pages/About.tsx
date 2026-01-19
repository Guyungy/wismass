
import React from 'react';
import { Target, Award, ShieldCheck, Zap, Globe, Building2, CheckCircle2 } from 'lucide-react';
import Reveal from '../components/Reveal';
import { CONTACT_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header - Standardized Padding & Typography */}
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

      {/* History Section */}
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
                  作為多家知名企業的策略顧問，我們曾參與多項美國 SEC 備案項目的品牌統籌。核心使命是幫助企業實現從本地到全球的全鏈路加速。
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
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" className="rounded-[3rem] grayscale-[20%] hover:grayscale-0 transition-all duration-700" alt="Business Team" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Platform Highlight */}
      <section className="py-24 lg:py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal className="order-2 lg:order-1">
              <div className="p-12 bg-white rounded-[3.5rem] shadow-xl border border-slate-100 space-y-8">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-100">
                  <Zap size={32} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 leading-tight">旗艦產品：BITLAB</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-lg mt-6">
                  BITLAB「全鏈路品牌加速器」通過整合專業服務資源，為企業提供標準化的全球擴張模型。
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
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">一站式跨境專業服務平台</h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed mt-6">
                我們致力於將傳統的法律、會計服務與現代的品牌營銷數據化深度結合。在紐約與香港兩地，提供無時差專家支持。
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal className="mb-16">
            <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-[1.1] tracking-tight">全球戰略據點</h3>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 bg-white border border-slate-100 rounded-[2.5rem] hover:border-blue-600 transition-all group">
               <Globe className="mx-auto text-blue-600 mb-8 group-hover:scale-110 transition-transform" size={48} />
               <h4 className="text-2xl font-black text-slate-900 mb-2">香港 (HK)</h4>
               <p className="text-slate-500 font-medium mb-6">亞太區總部與業務執行中心</p>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{CONTACT_INFO.hk_address}</p>
            </div>
            <div className="p-12 bg-white border border-slate-100 rounded-[2.5rem] hover:border-blue-600 transition-all group">
               <Building2 className="mx-auto text-blue-600 mb-8 group-hover:scale-110 transition-transform" size={48} />
               <h4 className="text-2xl font-black text-slate-900 mb-2">紐約 (NY)</h4>
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
