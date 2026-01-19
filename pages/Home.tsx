
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Scale, PieChart, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, CONTACT_INFO } from '../constants';
import Reveal from '../components/Reveal';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Standardized Padding & Typography */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="space-y-8 text-left">
                <div className="flex flex-wrap gap-3 mb-2">
                  <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] lg:text-xs">
                    Established 2010
                  </span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                  跨境一站式<br />
                  <span className="text-blue-600">專業諮詢平台</span>
                </h1>
                <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl mt-6">
                  萬通智富 (WISMASS LIMITED) 是一家註冊於香港的跨境綜合諮詢公司。我們聯合律師、會計師及金融機構，提供全鏈路品牌加速。
                </p>
                <div className="flex flex-col sm:flex-row gap-5 pt-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link to="/contact" className="px-10 py-5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group">
                      立即諮詢方案 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link to="/about" className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
                      品牌背景
                    </Link>
                  </motion.div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200} className="hidden lg:block relative">
              <div className="relative bg-white p-6 rounded-[3rem] shadow-2xl border border-slate-100 group">
                <div className="overflow-hidden rounded-[2.5rem]">
                  <img 
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1000" 
                    alt="Corporate Meeting" 
                    className="w-full h-[450px] object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-[2rem] shadow-2xl">
                  <p className="text-3xl font-black tracking-tighter">HK • NY</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Global Network</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Alliance Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] lg:text-xs">Expert Alliance</span>
            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">跨專業領域精英聯合成立</h3>
            <p className="text-lg text-slate-500 font-medium mt-6">整合律師事務所、會計事務所、金融機構與行銷專家，確保服務的深度與廣度。</p>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '合規顧問', icon: Scale, desc: '法律與合規審查' },
              { title: '審計財稅', icon: PieChart, desc: '全球稅務統籌' },
              { title: '金融諮詢', icon: Building, desc: '資本對接顧問' },
              { title: '行銷加速', icon: Zap, desc: 'BITLAB 品牌增長' }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="p-10 text-center space-y-4 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white transition-all group"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl mx-auto flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <item.icon size={32} />
                  </div>
                  <h4 className="text-lg font-black text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BITLAB Spotlight */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal className="space-y-8">
              <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] lg:text-xs">Flagship Platform</span>
              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">BITLAB<br />全鏈路品牌加速器</h3>
              <p className="text-xl text-slate-500 font-medium leading-relaxed mt-6">
                定位為全鏈路品牌加速平台，提供從品牌構建到數據分析的一體化服務。我們強調場景數據驅動品牌戰略落地。
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {['場景數據驅動', '執行驗證閉環', '空間資產激活', '量化成長路徑'].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-blue-600" />
                    <span className="font-bold text-slate-700 text-sm">{text}</span>
                  </div>
                ))}
              </div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Link to="/services" className="inline-flex items-center gap-2 px-10 py-4 bg-slate-900 text-white rounded-xl font-black hover:bg-blue-600 transition-all">
                  查看 BITLAB 詳情 <ArrowRight size={18} />
                </Link>
              </motion.div>
            </Reveal>
            <Reveal delay={200}>
              <div className="overflow-hidden rounded-[3rem] shadow-2xl border border-white">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full transition-transform duration-1000 hover:scale-105" 
                  alt="Data Analytics" 
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">核心服務範圍</h3>
            <p className="text-lg text-slate-500 font-medium mt-6">從跨境諮詢到品牌落地，覆蓋全流程商務需求。</p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 100}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="p-10 bg-white rounded-[2.5rem] border border-slate-200 hover:border-blue-600 transition-all flex flex-col h-full"
                >
                   <h4 className="text-2xl font-black text-slate-900 mb-4">{s.title}</h4>
                   <p className="text-slate-600 font-medium leading-relaxed flex-grow">{s.description}</p>
                   <Link to="/services" className="mt-8 text-blue-600 font-black text-sm uppercase tracking-widest flex items-center gap-2 group">
                     了解更多 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </Link>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Standardized CTA */}
      <section className="py-24 lg:py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <Reveal className="space-y-10">
            <h2 className="text-4xl lg:text-7xl font-black leading-[1.1] tracking-tight">啟動您的品牌全球化旅程</h2>
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto mt-6">
              與萬通智富資深顧問聯繫，為您的企業量身定制跨境發展與品牌加速方案。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
                className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
              >
                WhatsApp 即時諮詢
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link to="/contact" className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black text-xl hover:bg-slate-100 transition-all inline-block w-full">
                  在線預約
                </Link>
              </motion.div>
            </div>
          </Reveal>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
      </section>
    </div>
  );
};

export default Home;
