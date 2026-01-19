
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Zap, BarChart3, Users2, Globe2, Building, Scale, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, PROCESS_STEPS, CORE_VALUES, CONTACT_INFO } from '../constants';
import Reveal from '../components/Reveal';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Light & Modern */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="space-y-8 text-left">
                <div className="flex flex-wrap gap-3">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest">
                    Est. 2010
                  </span>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest border border-blue-100">
                    Wismass x BITLAB
                  </span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                  跨境一站式<br />
                  <span className="text-blue-600">專業諮詢平台</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
                  萬通智富 (WISMASS LIMITED) 是一家註冊於香港的跨境綜合諮詢公司。我們聯合律師、會計師及金融機構，提供全鏈路品牌加速與跨境業務統籌服務。
                </p>
                <div className="flex flex-col sm:flex-row gap-5 pt-4">
                  <Link to="/contact" className="px-10 py-5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group">
                    立即諮詢專業方案 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/about" className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
                    了解品牌背景
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200} className="hidden lg:block relative">
              <div className="relative">
                <div className="absolute -inset-10 bg-blue-100/40 rounded-full blur-[100px]" />
                <div className="relative bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1000" 
                    alt="Corporate Meeting" 
                    className="rounded-[2.5rem] w-full h-[500px] object-cover"
                  />
                  <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-[2rem] shadow-2xl space-y-2">
                    <p className="text-3xl font-black tracking-tighter">HK • NY</p>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-80">Global Network</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Alliance Section */}
      <section className="py-24 bg-white border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Reveal>
              <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.4em]">Expert Alliance</h2>
              <h3 className="text-4xl font-black text-slate-900">跨專業領域精英聯合成立</h3>
              <p className="text-lg text-slate-500 font-medium">我們整合律師事務所、會計事務所、金融機構與行銷專家，確保服務的深度與廣度。</p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '合規顧問', icon: Scale, desc: '法律與跨境合規審查' },
              { title: '審計財稅', icon: PieChart, desc: '全球稅務與財務統籌' },
              { title: '金融諮詢', icon: Building, desc: '資本對接與併購顧問' },
              { title: '行銷加速', icon: Zap, desc: 'BITLAB 品牌全鏈路增長' }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="p-10 text-center space-y-4 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all group">
                  <div className="w-16 h-16 bg-white rounded-2xl mx-auto flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <item.icon size={32} />
                  </div>
                  <h4 className="text-lg font-black text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BITLAB Spotlight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="space-y-8">
                <span className="text-blue-600 font-black tracking-widest text-xs uppercase">Flagship Platform</span>
                <h3 className="text-5xl font-black text-slate-900 leading-tight">BITLAB<br />全鏈路品牌加速器</h3>
                <p className="text-xl text-slate-600 font-medium leading-relaxed">
                  定位為全鏈路品牌加速平台，提供從品牌構建到數據分析的一體化服務。我們強調場景數據驅動品牌戰略落地，重塑競爭壁壘。
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center"><CheckCircle2 size={14} /></div>
                    <span className="font-bold text-slate-700">場景數據驅動</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center"><CheckCircle2 size={14} /></div>
                    <span className="font-bold text-slate-700">執行驗證閉環</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center"><CheckCircle2 size={14} /></div>
                    <span className="font-bold text-slate-700">空間資產激活</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center"><CheckCircle2 size={14} /></div>
                    <span className="font-bold text-slate-700">量化成長路徑</span>
                  </div>
                </div>
                <Link to="/services" className="inline-flex items-center gap-2 px-10 py-4 bg-slate-900 text-white rounded-xl font-black hover:bg-blue-600 transition-all">
                  查看 BITLAB 詳情 <ArrowRight size={18} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="bg-slate-50 p-4 rounded-[3.5rem] border border-slate-100">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" className="rounded-[3rem] shadow-2xl" alt="Data Analytics" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Simplified Services Grid to avoid extra bottom padding */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-slate-900 mb-4">核心服務範圍</h3>
            <p className="text-slate-500 font-medium">從跨境諮詢到品牌落地，我們覆蓋全流程商務需求。</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 100}>
                <div className="p-10 bg-white rounded-[2.5rem] border border-slate-200 hover:shadow-xl transition-all flex flex-col h-full">
                   <h4 className="text-2xl font-black text-slate-900 mb-4">{s.title}</h4>
                   <p className="text-slate-600 font-medium leading-relaxed flex-grow">{s.description}</p>
                   <Link to="/services" className="mt-8 text-blue-600 font-black text-sm uppercase tracking-widest flex items-center gap-2">了解更多 <ArrowRight size={16}/></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Fixed padding to align with footer */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <Reveal>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">啟動您的品牌全球化旅程</h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              與萬通智富資深顧問聯繫，為您的企業量身定制跨境發展與品牌加速方案。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
                className="px-12 py-6 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
              >
                WhatsApp 即時諮詢
              </a>
              <Link to="/contact" className="px-12 py-6 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all">
                獲取在線預約
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
