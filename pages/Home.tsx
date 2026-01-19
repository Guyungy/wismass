
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Cpu, BrainCircuit, Network, Microscope, ArrowRight, BarChart3, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../constants';
import Reveal from '../components/Reveal';
import Marquee from '../components/Marquee';
import Magnetic from '../components/Magnetic';
import ScrambleText from '../components/ScrambleText';

const Home: React.FC = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 10, y: y * -10 });
  };

  const aiFeatures = [
    { icon: BarChart3, title: "Precision Analytics", desc: "基於多維市場數據的深度洞察，為傳統品牌尋找數位突破口。" },
    { icon: ShieldCheck, title: "Strategic Security", desc: "全方位的品牌資產保護與輿情監控，確保企業在擴張中的穩定性。" },
    { icon: Microscope, title: "Future Modeling", desc: "利用 AI 模擬市場演變趨勢，將不確定性轉化為可預測的增長路徑。" }
  ];

  return (
    <div className="bg-[#0f172a]">
      {/* Hero: Elegant Executive Look */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent)] pointer-events-none"></div>
        
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-[1400px] mx-auto w-full relative z-10">
          <Reveal className="space-y-12">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm">
               <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(37,99,235,1)]"></div>
               <span className="text-[11px] font-bold tracking-[0.3em] text-blue-400 uppercase">Wismass Enterprise Intelligence</span>
            </div>
            
            <h1 className="text-[10vw] font-extrabold leading-[0.8] tracking-tighter uppercase text-gradient">
               <ScrambleText text="Strategic" className="block" />
               <ScrambleText text="Acceleration" className="block italic opacity-40 font-light" />
            </h1>

            <div className="flex flex-col lg:flex-row justify-between items-end gap-16 border-t border-white/5 pt-16">
               <div className="max-w-2xl space-y-10">
                  <p className="text-2xl text-slate-400 font-light leading-relaxed">
                    Wismass 聯合 BITLAB，為傳統企業注入數位基因。我們以<span className="text-white font-medium">場景數據</span>為核心，重塑品牌增長的底層邏輯。
                  </p>
                  <div className="flex gap-12">
                     <div>
                        <p className="text-4xl font-extrabold text-white">2.4B</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">Data Points</p>
                     </div>
                     <div>
                        <p className="text-4xl font-extrabold text-white">94%</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">Accuracy</p>
                     </div>
                  </div>
               </div>
               
               <Magnetic strength={0.3}>
                 <Link to="/contact" className="w-56 h-56 rounded-full border border-white/10 flex flex-col items-center justify-center group hover:bg-white hover:border-transparent transition-all duration-700">
                    <div className="relative mb-3">
                       <Cpu className="text-blue-500 group-hover:scale-110 transition-transform" size={32} />
                    </div>
                    <p className="text-[10px] font-black tracking-[0.4em] uppercase text-white group-hover:text-slate-900">啟動諮詢</p>
                 </Link>
               </Magnetic>
            </div>
          </Reveal>
        </motion.div>
      </section>

      {/* AI Engine: Clean & Professional Integration */}
      <section className="py-40 bg-slate-900/50 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <Reveal className="space-y-16">
                 <div className="space-y-6">
                    <h2 className="text-xs font-bold tracking-[0.6em] text-blue-500 uppercase">Core Methodology</h2>
                    <h3 className="text-7xl font-extrabold uppercase tracking-tighter leading-none text-gradient">Wismass <br />Protocol</h3>
                 </div>
                 <div className="space-y-10">
                    {aiFeatures.map((f, i) => (
                      <div key={i} className="flex gap-8 group">
                         <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                            <f.icon size={24} />
                         </div>
                         <div className="flex-1 space-y-3 pt-1">
                            <h4 className="text-xl font-bold tracking-tight group-hover:text-blue-500 transition-colors uppercase">{f.title}</h4>
                            <p className="text-slate-400 text-lg font-light leading-relaxed">{f.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </Reveal>

              <Reveal delay={200} className="relative">
                 <div 
                   className="w-full aspect-square bg-slate-800/30 rounded-[3rem] border border-white/5 p-16 flex flex-col justify-between tilt-card shadow-2xl relative overflow-hidden"
                   onMouseMove={handleTilt}
                   onMouseLeave={() => setTilt({ x: 0, y: 0 })}
                   style={{ transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` }}
                 >
                    <div className="flex justify-between items-center relative z-10">
                       <span className="text-[10px] font-mono text-blue-500/80 tracking-widest">SYSTEM_STATUS: SECURE</span>
                       <div className="px-3 py-1 rounded bg-white/5 text-[9px] font-mono text-slate-500 border border-white/5">NODE_v4.2</div>
                    </div>
                    
                    <div className="flex-grow flex items-center justify-center relative z-10">
                       <div className="w-48 h-48 border border-blue-500/20 rounded-full flex items-center justify-center">
                          <BrainCircuit size={80} className="text-blue-500 opacity-40 group-hover:opacity-100 transition-opacity" />
                       </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 relative z-10">
                       <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">Real-time Optimization</p>
                       <div className="flex gap-1 h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: '70%' }} className="bg-blue-600 h-full" />
                       </div>
                    </div>
                 </div>
              </Reveal>
           </div>
        </div>
      </section>

      <Marquee text="Corporate Strategy • Data Driven • Executive Consulting • " />

      {/* Services: Blending Professionalism with Interaction */}
      <section className="py-40 bg-white text-slate-900 rounded-t-[5rem] relative z-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-10">
            <Reveal className="space-y-6">
               <h2 className="text-xs font-bold tracking-[0.6em] text-blue-600 uppercase">Global Solutions</h2>
               <h3 className="text-7xl font-extrabold uppercase tracking-tighter leading-none">Market <br />Excellence</h3>
            </Reveal>
            <Reveal delay={200}>
               <Link to="/services" className="group flex items-center gap-4 px-10 py-4 bg-slate-900 text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-blue-600 transition-all duration-500 shadow-xl">
                  探索全部方案 <ArrowRight size={18} />
               </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 100} className="group p-12 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-slate-900 hover:text-white transition-all duration-500 hover:-translate-y-3">
                <div className="h-full flex flex-col justify-between space-y-16">
                  <div className="flex justify-between items-start">
                     <span className="text-[10px] font-mono text-slate-300 group-hover:text-blue-500/50">PROTOCOL_MOD_0{i+1}</span>
                     <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent transition-all shadow-sm">
                        <ArrowUpRight size={24} />
                     </div>
                  </div>
                  <div className="space-y-5">
                     <h4 className="text-3xl font-extrabold uppercase tracking-tighter group-hover:text-blue-500 transition-colors">
                        <ScrambleText text={s.title} trigger="hover" />
                     </h4>
                     <p className="text-slate-500 group-hover:text-slate-400 font-medium leading-relaxed">{s.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-8 border-t border-slate-200 group-hover:border-white/10">
                     {s.details.slice(0, 3).map((d, j) => (
                       <span key={j} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 bg-white border border-slate-200 rounded-lg group-hover:bg-white/5 group-hover:border-white/10">{d}</span>
                     ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate CTA: Trust & Action */}
      <section className="py-60 bg-slate-950 text-white relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-16">
            <Reveal>
               <h2 className="text-[8vw] font-extrabold uppercase tracking-tighter leading-[0.9] mb-12">
                  重塑您的 <br /><span className="text-blue-600 italic">商業未來</span>
               </h2>
               <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                  加入 Wismass 專家網絡。我們不僅提供諮詢，更為您構建可量化的增長引擎。
               </p>
            </Reveal>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Magnetic strength={0.2}>
                 <Link to="/contact" className="px-16 py-6 bg-blue-600 text-white rounded-xl text-xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-blue-500/20">
                    立即對話
                 </Link>
               </Magnetic>
               <Magnetic strength={0.2}>
                 <button className="px-16 py-6 border border-white/10 rounded-xl text-xl font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">
                    了解更多
                 </button>
               </Magnetic>
            </div>
         </div>
      </section>

      <style>{`
        .text-outline { color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.2); }
        .tilt-card { transform-style: preserve-3d; perspective: 1000px; }
      `}</style>
    </div>
  );
};

export default Home;
