
import React from 'react';
import { Target, Award, ShieldCheck, Zap, BarChart, CheckCircle2, Building2, Briefcase, Users, History, Globe } from 'lucide-react';
import Reveal from '../components/Reveal';
import { CORE_VALUES, CONTACT_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white pb-0">
      {/* Header - Light Gradient */}
      <section className="bg-gradient-to-b from-blue-50/50 to-white py-32 lg:py-48 relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 space-y-8">
          <Reveal>
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs">GLOBAL REACH • Est. 2010</span>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mt-4 leading-tight">
              萬通智富<br />
              <span className="text-blue-600 text-3xl lg:text-5xl">WISMASS LIMITED</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-4xl mx-auto font-medium leading-relaxed mt-8">
              我們是一家立足香港、服務全球的跨境綜合諮詢公司。{CONTACT_INFO.history}，由法律、會計及金融專業機構聯合成立。
            </p>
          </Reveal>
        </div>
      </section>

      {/* History & Founder Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-black text-slate-900 tracking-tight">十年專注，跨境統籌</h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  萬通智富自 2010 年前後建立起多個專業服務實體（包括 WISMASS INTERNATIONAL HOLDINGS 等）。我們的創始合夥人 {CONTACT_INFO.founder} 具備深厚的金融背景與英國教育經歷，擅長解決複雜的跨境商務難題。
                </p>
                <p className="text-slate-500 leading-relaxed">
                  作為多家知名企業的策略顧問與股東，我們曾參與多項美國 SEC 備案項目的品牌統籌。我們的核心使命是幫助企業實現從本地到全球的全鏈路加速。
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <p className="text-4xl font-black text-blue-600 mb-2">10+</p>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest leading-tight">Years of Experience</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <p className="text-4xl font-black text-blue-600 mb-2">HK/NY</p>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest leading-tight">Global Offices</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-50 rounded-[4rem] -rotate-2" />
                <div className="relative bg-white p-4 rounded-[4rem] shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" className="rounded-[3rem]" alt="Business Team" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Flagship Platform & Product */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal className="order-2 lg:order-1">
              <div className="p-12 bg-white rounded-[3.5rem] shadow-xl border border-slate-100 space-y-6">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-100">
                  <Zap size={32} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 leading-tight">旗艦產品：BITLAB</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  BITLAB「全鏈路品牌加速器」是 Wismass 旗下的核心平台。它通過整合律師事務所、會計事務所及數據分析機構的資源，為企業提供標準化的全球擴張與品牌升級模型。
                </p>
                <div className="space-y-4 pt-2">
                   {['品牌構建', '策略導航', '數據分析', '全方位統籌'].map((item, i) => (
                     <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-blue-600" />
                        <span className="font-bold text-slate-700">{item}</span>
                     </div>
                   ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={200} className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl font-black text-slate-900 leading-tight">一站式跨境專業服務平台</h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                我們致力於將傳統的律師、會計服務與現代的品牌營銷數據化深度結合。在紐約 552 W 48th Street 與香港兩地，我們的專家團隊無時差支持企業全球夢想。
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Global Locations Map Placeholder (Minimal) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-slate-900">全球戰略據點</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-xl transition-all group text-center">
               <Globe className="mx-auto text-blue-600 mb-6 group-hover:scale-110 transition-transform" size={40} />
               <h4 className="text-2xl font-black text-slate-900 mb-2">香港 (HK)</h4>
               <p className="text-slate-500 font-medium mb-4">亞太區總部與業務執行中心</p>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{CONTACT_INFO.hk_address}</p>
            </div>
            <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-xl transition-all group text-center">
               <Building2 className="mx-auto text-blue-600 mb-6 group-hover:scale-110 transition-transform" size={40} />
               <h4 className="text-2xl font-black text-slate-900 mb-2">紐約 (NY)</h4>
               <p className="text-slate-500 font-medium mb-4">北美市場中心與資本關係中心</p>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{CONTACT_INFO.us_address}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
