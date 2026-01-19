
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Zap, BarChart, MousePointer2 } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../constants';
import * as LucideIcons from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import Reveal from '../components/Reveal';

const Home: React.FC = () => {
  const handleCtaClick = (label: string) => {
    trackEvent('hero_cta_click', 'Conversion', label);
  };

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal className="space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-bold tracking-widest uppercase border border-blue-100">
                <Star size={14} className="fill-blue-600" /> 2024 全鏈路品牌加速平台
              </div>
              <h1 className="text-5xl lg:text-8xl font-black text-slate-900 leading-[1.05] tracking-tight">
                引領企業<br />
                <span className="text-blue-600 relative inline-block">
                  專業增長
                  <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="#2563eb" strokeWidth="4" fill="transparent" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
                Wismass 市場營銷諮詢聯合 BITLAB，通過場景數據驅動品牌落地，量化成長路徑，重塑「場景即媒體」的市場競爭壁壘。
              </p>
              <div className="flex flex-wrap gap-5 pt-4">
                <Link 
                  to="/contact" 
                  onClick={() => handleCtaClick('Start Project')}
                  className="bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-200 transition-all flex items-center gap-2 group transform hover:-translate-y-1 active:scale-95 duration-300"
                >
                  立即啟動專案 <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/services" 
                  onClick={() => handleCtaClick('Explore Services')}
                  className="bg-white border-2 border-slate-200 text-slate-900 px-10 py-5 rounded-full text-lg font-bold hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center gap-2 transform hover:-translate-y-1 active:scale-95 duration-300"
                >
                  服務方案 <MousePointer2 size={20} />
                </Link>
              </div>
              
              <div className="flex items-center gap-10 pt-10 border-t border-slate-200/60">
                {[
                  { value: '500+', label: '品牌案例' },
                  { value: '15+', label: '覆蓋行業' },
                  { value: '100%', label: '客戶滿意度' }
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={300} className="relative hidden lg:block">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-slate-100 transform hover:rotate-1 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern Office" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-12 bg-white/95 backdrop-blur-sm p-7 rounded-[2rem] shadow-2xl border border-white max-w-[300px]">
                <div className="flex items-center gap-5 mb-5">
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                    <BarChart size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 leading-tight">數據驅動成長</h4>
                    <p className="text-xs text-blue-600 font-bold">ROI 提升 150%+</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bitlab Section */}
      <section className="bg-slate-900 py-32 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <Reveal className="relative group">
               <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
                  alt="BITLAB Platform" 
                  className="relative rounded-3xl shadow-2xl border border-white/10"
                />
            </Reveal>
            <Reveal delay={200} className="space-y-10">
              <div className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-xl text-xs font-black tracking-widest uppercase border border-blue-500/20">
                BITLAB 「全鏈路品牌加速器」
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                量化品牌成長<br />重新定義競爭力
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                我們通過場景數據分析，精確激活企業的空間數據資產。不僅僅是諮詢，更是與您共同見證從 0 到 1 的蛻變。
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <Reveal className="text-center space-y-5 mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">專業服務範疇</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            由 BITLAB 平台聯合 <span className="text-blue-600 font-bold underline decoration-blue-200 decoration-4 underline-offset-4">Wismass 市場營銷諮詢</span> 全力打造。
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, index) => {
            const IconComponent = (LucideIcons as any)[service.icon] || Zap;
            return (
              <Reveal key={service.id} delay={index * 100}>
                <div className="group relative p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:border-blue-200 hover:shadow-[0_32px_64px_-16px_rgba(37,99,235,0.1)] transition-all duration-500 overflow-hidden h-full">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-8">{service.description}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-sm font-black text-blue-600 group/link">
                    詳細方案 <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <Reveal className="max-w-7xl mx-auto px-4 mb-24">
        <div className="bg-blue-600 rounded-[4rem] p-16 lg:p-32 text-white text-center relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl lg:text-7xl font-black leading-tight tracking-tighter">
              開啟品牌成長的<br />下一個章節
            </h2>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <Link to="/contact" className="bg-white text-blue-600 px-12 py-6 rounded-full text-xl font-bold hover:shadow-white/30 hover:-translate-y-1 transition-all">
                獲取免費諮詢
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Home;
