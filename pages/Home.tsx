
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
    { icon: BarChart3, title: "Precision Analytics", desc: "基於多維市場數據的深度洞察，為傳統品牌尋找數位突破口，實現可視化轉化。" },
    { icon: ShieldCheck, title: "Strategic Security", desc: "全方位的品牌資產保護與輿情監控，確保企業在快速擴張中的底層穩定性。" },
    { icon: Microscope, title: "Future Modeling", desc: "利用 AI 模擬市場演變趨勢，將環境的不確定性轉化為可預測的增長路徑。" }
  ];

  return (
    <div className="bg-[#0f172a]">
      {/* Hero: Enhanced Contrast and Readability */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent)] pointer-events-none"></div>
        
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-[1400px] mx-auto w-full relative z-10">
          <Reveal className="space-y-12">
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-blue-500/40 bg-blue-500/10 backdrop-blur-md">
               <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(37,99,235,1)]"></div>
               <span className="text-sm font-black tracking-[0.4em] text-white uppercase">Wismass Enterprise Intelligence</span>
            </div>
            
            <h1 className="text-[11vw] font-black leading-[0.8] tracking-tighter uppercase text-gradient filter drop-shadow-2xl">
               <ScrambleText text="Strategic" className="block" />
               <ScrambleText text="Acceleration" className="block italic opacity-60 font-light" />
            </h1>

            <div className="flex flex-col lg:flex-row justify-between items-end gap-16 border-t border-white/15 pt-16">
               <div className="max-w-2xl space-y-12">
                  <p className="text-3xl text-slate-100 font-light leading-relaxed">
                    Wismass 聯合 BITLAB，為傳統企業注入數位基因。我們以<span className="text-blue-500 font-bold underline decoration-blue-500/40 underline-offset-8">場景數據</span>為核心，重構品牌增長的底層代碼。
                  </p>
                  <div className="flex gap-16">
                     <div>
                        <p className="text-5xl font-black text-white tracking-tighter">2.4B+</p>
                        <p className="text-sm font-bold text-slate-300 uppercase tracking-widest mt-3">Active Data Points</p>
                     </div>
                     <div>
                        <p className="text-5xl font-black text-blue-500 tracking-tighter">94.8%</p>
                        <p className="text-sm font-bold text-slate-300 uppercase tracking-widest mt-3">Predictive Accuracy</p>
                     </div>
                  </div>
               </div>
               
               <Magnetic strength={0.3}>
                 <Link to="/contact" className="w-64 h-64 rounded-full border-2 border-white/15 flex flex-col items-center justify-center group hover:bg-white hover:border-transparent transition-all duration-700 shadow-[0_0_80px_rgba(0,0,0,0.3)]">
                    <div className="relative mb-4">
                       <Cpu className="text-blue-500 group-hover:scale-125 transition-transform duration-500" size={48} />
                    </div>
                    <p className="text-sm font-black tracking-[0.6em] uppercase text-white group-hover:text-slate-900 transition-colors">啟動諮詢</p>
                 </Link>
               </Magnetic>
            </div>
          </Reveal>
        </motion.div>
      </section>

      {/* AI Engine Section with Higher Clarity */}
      <section className="py-60 bg-slate-900/70 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-32 items-center">
              <Reveal className="space-y-20">
                 <div className="space-y-6">
                    <h2 className="text-sm font-bold tracking-[1em] text-blue-500 uppercase">Core Methodology</h2>
                    <h3 className="text-8xl font-black uppercase tracking-tighter leading-none text-white">Wismass <br /><span className="text-blue-600">Protocol</span></h3>
                 </div>
                 <div className="space-y-12">
                    {aiFeatures.map((f, i) => (
                      <div key={i} className="flex gap-10 group">
                         <div className="w-16 h-16 rounded-[1.5rem] bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl">
                            <f.icon size={36} />
                         </div>
                         <div className="flex-1 space-y-4 pt-1">
                            <h4 className="text-3xl font-black tracking-tight text-white group-hover:text-blue-500 transition-colors uppercase">{f.title}</h4>
                            <p className="text-slate-200 text-xl font-light leading-relaxed">{f.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </Reveal>

              <Reveal delay={200} className="relative">
                 <div 
                   className="w-full aspect-square bg-slate-800/50 rounded-[4rem] border border-white/15 p-20 flex flex-col justify-between tilt-card shadow-2xl relative overflow-hidden backdrop-blur-2xl"
                   onMouseMove={handleTilt}
                   onMouseLeave={() => setTilt({ x: 0, y: 0 })}
                   style={{ transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` }}
                 >
                    <div className="flex justify-between items-center relative z-10">
                       <div className="flex items-center gap-3">
                         <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.7)]" />
                         <span className="text-sm font-mono text-emerald-500 font-bold tracking-widest uppercase">Encryption_Secure</span>
                       </div>
                       <div className="px-4 py-2 rounded-lg bg-white/10 text-xs font-mono text-slate-200 border border-white/10 uppercase">Node_v4.2.0</div>
                    </div>
                    
                    <div className="flex-grow flex items-center justify-center relative z-10">
                       <div className="w-64 h-64 border-2 border-blue-500/30 rounded-full flex items-center justify-center relative">
                          <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-t-2 border-blue-500 rounded-full"
                          />
                          <BrainCircuit size={110} className="text-blue-500 group-hover:scale-110 transition-transform duration-700" />
                       </div>
                    </div>

                    <div className="pt-10 border-t border-white/15 relative z-10">
                       <div className="flex justify-between items-end mb-4">
                          <p className="text-base text-slate-100 font-bold uppercase tracking-widest">Growth Engine Optimization</p>
                          <span className="text-base font-mono text-blue-500 font-black">78.4%</span>
                       </div>
                       <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: '78.4%' }} className="bg-blue-600 h-full shadow-[0_0_20px_rgba(37,99,235,0.6)]" />
                       </div>
                    </div>
                 </div>
              </Reveal>
           </div>
        </div>
      </section>

      <Marquee text="High-Level Strategy • Data Sovereign • Future-Proof Growth • " />

      {/* Services: Improved Contrast on White Background */}
      <section className="py-60 bg-white text-slate-950 rounded-t-[6rem] relative z-20 shadow-[0_-50px_100px_rgba(0,0,0,0.15)]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-48 gap-12">
            <Reveal className="space-y-8">
               <h2 className="text-sm font-bold tracking-[1em] text-blue-600 uppercase">Global Solutions</h2>
               <h3 className="text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none text-slate-900">Expertise <br />Defined</h3>
            </Reveal>
            <Reveal delay={200}>
               <Link to="/services" className="group flex items-center gap-6 px-12 py-6 bg-slate-950 text-white rounded-[2rem] font-black text-base uppercase tracking-widest hover:bg-blue-600 transition-all duration-500 shadow-2xl">
                  查看所有專業方案 <ArrowRight size={22} />
               </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 100} className="group p-16 bg-slate-50 rounded-[4rem] border border-slate-200 hover:bg-slate-950 hover:text-white transition-all duration-700 hover:-translate-y-6 shadow-md hover:shadow-3xl">
                <div className="h-full flex flex-col justify-between space-y-20">
                  <div className="flex justify-between items-start">
                     <span className="text-sm font-mono font-bold text-slate-500 group-hover:text-blue-500 transition-colors uppercase">MODULE_SYS_0{i+1}</span>
                     <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent transition-all shadow-md">
                        <ArrowUpRight size={36} />
                     </div>
                  </div>
                  <div className="space-y-6">
                     <h4 className="text-4xl font-black uppercase tracking-tighter group-hover:text-blue-500 transition-colors">
                        <ScrambleText text={s.title} trigger="hover" />
                     </h4>
                     <p className="text-slate-800 group-hover:text-slate-200 font-medium text-xl leading-relaxed">{s.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-10 border-t border-slate-200 group-hover:border-white/10">
                     {s.details.slice(0, 3).map((d, j) => (
                       <span key={j} className="text-xs font-black uppercase tracking-wider px-4 py-2 bg-white border border-slate-200 rounded-xl group-hover:bg-white/15 group-hover:border-white/15">{d}</span>
                     ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate CTA: High Visibility */}
      <section className="py-80 bg-slate-950 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563eb_0.15,transparent_0.8)] opacity-25" />
         <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-20">
            <Reveal>
               <h2 className="text-[9vw] font-black uppercase tracking-tighter leading-[0.85] mb-12">
                  Accelerate Your <br /><span className="text-blue-600 italic">Market Future</span>
               </h2>
               <p className="text-3xl text-slate-100 max-w-3xl mx-auto font-light leading-relaxed">
                  加入 Wismass 專家諮詢網絡。我們不僅提供建議，更為您在數位時代構建一套可量化的、具備防禦壁壘的品牌運算邏輯。
               </p>
            </Reveal>
            <div className="flex flex-col sm:flex-row justify-center gap-10">
               <Magnetic strength={0.2}>
                 <Link to="/contact" className="px-20 py-8 bg-blue-600 text-white rounded-[2rem] text-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_30px_70px_rgba(37,99,235,0.45)]">
                    立即預約
                 </Link>
               </Magnetic>
               <Magnetic strength={0.2}>
                 <button className="px-20 py-8 border-2 border-white/20 rounded-[2rem] text-2xl font-black uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all">
                    了解方案
                 </button>
               </Magnetic>
            </div>
         </div>
      </section>

      <style>{`
        .text-outline { color: transparent; -webkit-text-stroke: 2px rgba(255,255,255,0.3); }
        .tilt-card { transform-style: preserve-3d; perspective: 1200px; }
      `}</style>
    </div>
  );
};

export default Home;
