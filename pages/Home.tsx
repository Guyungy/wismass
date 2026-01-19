
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Zap, Globe2, Layers, Shield, MousePointer2, Plus, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { trackEvent } from '../utils/analytics';
import Reveal from '../components/Reveal';
import Marquee from '../components/Marquee';
import Magnetic from '../components/Magnetic';

const Home: React.FC = () => {
  const horizontalRef = useRef<HTMLDivElement>(null);

  const cases = [
    { title: "Cyber Retail", category: "Spatial Data", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" },
    { title: "Meta Branding", category: "Visual Identity", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200" },
    { title: "AI Strategy", category: "Consulting", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" },
    { title: "Neon Social", category: "Growth Ops", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200" },
  ];

  return (
    <div className="bg-black">
      {/* Hero: Radical Type & Motion */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 blur-[200px] rounded-full"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-600/5 blur-[150px] rounded-full"></div>
        </div>

        <div className="max-w-[1600px] mx-auto w-full relative z-10">
          <Reveal className="space-y-6">
            <div className="flex items-center gap-4">
               <span className="text-[10px] font-bold tracking-[0.5em] text-blue-500 uppercase">Architecture of Growth</span>
               <div className="h-px w-24 bg-blue-500/30"></div>
            </div>
            
            <h1 className="text-[14vw] lg:text-[16vw] font-black leading-[0.75] tracking-tighter uppercase mb-12">
               <span className="block hover:translate-x-4 transition-transform duration-700">Digital</span>
               <span className="block text-outline italic">Accelerate</span>
            </h1>

            <div className="flex flex-col lg:flex-row justify-between items-end gap-12 border-t border-white/10 pt-12">
               <div className="max-w-md space-y-6">
                  <p className="text-xl text-slate-400 font-light leading-relaxed">
                    Wismass x BITLAB：通過場景數據重塑品牌未來。我們不只是諮詢，我們是商業邊界的開拓者。
                  </p>
                  <div className="flex gap-12">
                     <div>
                        <p className="text-3xl font-black">2.4B+</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Data Points</p>
                     </div>
                     <div>
                        <p className="text-3xl font-black">150%</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Avg Growth</p>
                     </div>
                  </div>
               </div>
               
               <Magnetic strength={0.3}>
                 <Link to="/contact" className="w-48 h-48 rounded-full border border-white/20 flex items-center justify-center group hover:bg-white transition-all duration-700">
                    <div className="text-center group-hover:text-black">
                       <p className="text-xs font-black tracking-widest uppercase mb-1">Join Us</p>
                       <ArrowUpRight className="mx-auto" />
                    </div>
                 </Link>
               </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Dynamic Marquee Section */}
      <section className="bg-blue-600 py-4 -rotate-2 scale-105 overflow-hidden z-20">
        <Marquee text="Limitless Vision • Data Mastery • Brand Excellence • " />
      </section>

      {/* Horizontal Cases Showcase */}
      <section className="py-40 bg-[#050505]">
        <div className="px-6 mb-20 flex justify-between items-end max-w-[1600px] mx-auto">
          <Reveal className="space-y-4">
             <h2 className="text-xs font-bold tracking-[0.6em] text-blue-500 uppercase">Portfolio</h2>
             <h3 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter">Case Studies</h3>
          </Reveal>
          <Reveal delay={200}>
             <p className="text-slate-500 max-w-xs text-right text-sm">點擊下方磁吸組件獲取詳細技術方案文件。</p>
          </Reveal>
        </div>

        <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory px-6 gap-8 pb-20">
          {cases.map((c, i) => (
            <Reveal key={i} delay={i * 100} className="snap-center shrink-0 w-[80vw] lg:w-[40vw] group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/5 bg-[#111]">
                 <img src={c.img} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                 <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                    <div className="space-y-2">
                       <p className="text-xs font-bold text-blue-500 uppercase tracking-widest">{c.category}</p>
                       <h4 className="text-4xl font-bold uppercase">{c.title}</h4>
                    </div>
                    <Magnetic>
                       <button className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
                          <Plus />
                       </button>
                    </Magnetic>
                 </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* The Core Engine: Bento 3.0 */}
      <section className="max-w-[1600px] mx-auto px-6 py-40">
        <div className="grid lg:grid-cols-12 gap-6">
          <Reveal className="lg:col-span-8 bg-blue-600 rounded-[3rem] p-16 flex flex-col justify-between min-h-[600px] group relative overflow-hidden">
             <div className="relative z-10 space-y-12">
                <h3 className="text-6xl lg:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase">
                  Scenario<br />Intelligence
                </h3>
                <p className="text-2xl text-blue-50 max-w-lg font-light">
                   BITLAB 全鏈路加速引擎，利用 20 億個場景數據點為您的品牌注入不可撼動的領先地位。
                </p>
             </div>
             <div className="pt-12 relative z-10">
                <Link to="/services" className="inline-flex items-center gap-4 bg-black text-white px-12 py-6 rounded-full font-bold hover:gap-8 transition-all">
                   VIEW SERVICES <ArrowRight />
                </Link>
             </div>
             {/* Liquid Animation Visual */}
             <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full animate-float"></div>
          </Reveal>

          <div className="lg:col-span-4 grid gap-6">
             <Reveal delay={200} className="bg-[#111] border border-white/5 rounded-[3rem] p-12 flex flex-col justify-between group">
                <Globe2 className="text-blue-500 mb-8" size={48} />
                <div className="space-y-4">
                   <h4 className="text-3xl font-bold uppercase">Cross-Border</h4>
                   <p className="text-slate-500 text-sm">幫助品牌跨越地緣限制，實現全球化佈局。</p>
                </div>
             </Reveal>
             <Reveal delay={300} className="bg-white text-black rounded-[3rem] p-12 flex flex-col justify-between">
                <Zap size={48} className="mb-8" />
                <div className="space-y-4">
                   <h4 className="text-3xl font-bold uppercase">Rapid Launch</h4>
                   <p className="text-slate-600 text-sm font-medium">從策略定義到市場反饋，僅需以往 40% 的時間。</p>
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* Expertise: Perspective Cards */}
      <section className="py-40 bg-white text-black">
        <div className="max-w-[1600px] mx-auto px-6">
           <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
              <Reveal className="space-y-4">
                 <h2 className="text-xs font-bold tracking-[0.6em] text-blue-600 uppercase">What we do</h2>
                 <h3 className="text-6xl lg:text-9xl font-black uppercase tracking-tighter leading-none">Powerhouse</h3>
              </Reveal>
              <Reveal delay={200} className="max-w-xs text-right">
                 <p className="text-slate-500 font-medium">整合 6 大核心服務領域，通過技術與創意的雙向加持，定義行業天花板。</p>
              </Reveal>
           </div>

           <div className="grid lg:grid-cols-2 gap-12">
              {SERVICES.map((s, i) => (
                <Reveal key={s.id} delay={i * 100} className="group p-12 border border-slate-100 rounded-[3rem] hover:bg-black hover:text-white transition-all duration-700 reveal-perspective">
                   <div className="flex justify-between items-start mb-12">
                      <span className="text-5xl font-black text-slate-100 group-hover:text-white/10 transition-colors">0{i+1}</span>
                      <Magnetic strength={0.2}>
                         <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <ArrowUpRight />
                         </div>
                      </Magnetic>
                   </div>
                   <h4 className="text-4xl font-bold uppercase mb-4 tracking-tighter">{s.title}</h4>
                   <p className="text-slate-500 group-hover:text-slate-400 font-light mb-8 max-w-md">{s.description}</p>
                   <div className="flex flex-wrap gap-2">
                      {s.details.map((d, j) => (
                        <span key={j} className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 border border-slate-100 rounded-full group-hover:border-white/20">{d}</span>
                      ))}
                   </div>
                </Reveal>
              ))}
           </div>
        </div>
      </section>

      {/* Terminal CTA */}
      <section className="py-60 relative overflow-hidden bg-black text-white">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563eb_0%,transparent_70%)] opacity-20 animate-pulse"></div>
         <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-20">
            <Reveal>
               <h2 className="text-[10vw] font-black uppercase tracking-tighter leading-[0.8]">
                  Evolve <br /><span className="text-blue-500 italic">Today</span>
               </h2>
            </Reveal>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
               <Magnetic>
                 <Link to="/contact" className="px-16 py-8 bg-blue-600 text-white rounded-full text-2xl font-black uppercase hover:scale-105 transition-all">
                    Get Proposal
                 </Link>
               </Magnetic>
               <Magnetic>
                 <button className="px-16 py-8 border border-white/20 rounded-full text-2xl font-black uppercase hover:bg-white hover:text-black transition-all">
                    Learn More
                 </button>
               </Magnetic>
            </div>
         </div>
      </section>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Home;
