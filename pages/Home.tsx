
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Scale, PieChart, Building, Trophy, BarChart, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, CONTACT_INFO } from '../constants';
import Reveal from '../components/Reveal';

const Home: React.FC = () => {
  const stats = [
    { label: '品牌轉化率提升', value: '45%+', desc: '利用 BITLAB 數據場景優化後的平均表現' },
    { label: '跨境合規項目', value: '200+', desc: '涵蓋 SEC 備案與離岸架構審核' },
    { label: '資產管理規模', value: '10B+', desc: '協助企業對接的資本規模 (HKD)' }
  ];

  const caseBriefs = [
    {
      title: '某知名新零售品牌：赴美擴張戰略',
      tags: ['跨境合規', '品牌重塑'],
      impact: '在 6 個月內完成北美視覺體系升級與法務架構搭建，線上獲客成本降低 30%。',
      img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fm=webp&q=80&w=800'
    },
    {
      title: '科技獨角獸：SEC 備案與財務統籌',
      tags: ['審計財稅', '金融諮詢'],
      impact: '聯合資深會計師團隊，為客戶梳理跨國稅務架構，確保 IPO 階段的財務合規性。',
      img: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fm=webp&q=80&w=800'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
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
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fm=webp&q=80&w=1000" 
                    alt="Corporate Meeting" 
                    loading="eager"
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

      {/* Stats Section */}
      <section className="py-24 bg-white border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {stats.map((stat, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="space-y-4">
                  <p className="text-5xl font-black text-blue-600 tracking-tighter">{stat.value}</p>
                  <h4 className="text-xl font-black text-slate-900">{stat.label}</h4>
                  <p className="text-slate-500 font-medium">{stat.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Alliance Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] lg:text-xs">Expert Alliance</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">跨專業領域精英聯合成立</h2>
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

      {/* Case Studies Spotlight */}
      <section className="py-24 lg:py-32 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
            <Reveal className="lg:w-1/2 space-y-6">
              <span className="text-blue-400 font-bold uppercase tracking-[0.4em] text-[10px] lg:text-xs">Success Stories</span>
              <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight">實戰見證價值</h2>
              <p className="text-xl text-slate-400 font-medium">我們不僅提供建議，更與客戶並肩實踐增長目標。</p>
            </Reveal>
            <Reveal delay={200}>
              <Link to="/news" className="group flex items-center gap-3 text-lg font-bold hover:text-blue-400 transition-colors">
                瀏覽更多案例 <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </Reveal>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            {caseBriefs.map((item, i) => (
              <Reveal key={i} delay={i * 200}>
                <div className="group relative overflow-hidden rounded-[3.5rem] bg-slate-800 border border-slate-700">
                  <div className="h-80 overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000" />
                  </div>
                  <div className="p-10 space-y-6 relative z-10">
                    <div className="flex gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-600/30 text-blue-400 text-[10px] font-black uppercase">{tag}</span>
                      ))}
                    </div>
                    <h4 className="text-2xl font-black group-hover:text-blue-400 transition-colors">{item.title}</h4>
                    <p className="text-slate-400 font-medium leading-relaxed">{item.impact}</p>
                  </div>
                </div>
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
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">BITLAB<br />全鏈路品牌加速器</h2>
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fm=webp&q=80&w=1000" 
                  loading="lazy"
                  className="w-full transition-transform duration-1000 hover:scale-105" 
                  alt="Data Analytics" 
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Standardized CTA */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <Reveal className="space-y-10">
            <h2 className="text-4xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900">啟動您的品牌全球化旅程</h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto mt-6">
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
                <Link to="/contact" className="px-12 py-5 bg-slate-900 text-white rounded-2xl font-black text-xl hover:bg-slate-800 transition-all inline-block w-full">
                  在線預約
                </Link>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
