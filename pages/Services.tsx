
import React from 'react';
import { SERVICES, CONTACT_INFO } from '../constants';
import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header - Standardized Padding & Typography */}
      <section className="bg-slate-50 pt-32 pb-24 lg:pt-48 lg:pb-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] lg:text-xs mb-4 block">Our Solutions</span>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">服務方案體系</h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed mt-8">
              基於 BITLAB 平台的場景賦能能力，提供從戰略診斷、創意設計到實戰執行的全鏈路解決方案。
            </p>
          </Reveal>
        </div>
      </section>

      {/* Detailed List */}
      <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32 space-y-32">
        {SERVICES.map((service, index) => {
          const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Zap;
          return (
            <div key={service.id} className={`flex flex-col lg:items-center gap-20 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              <div className="lg:w-1/2 space-y-8">
                <Reveal>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-[1.5rem] flex items-center justify-center shadow-xl shadow-blue-200">
                      <IconComponent size={32} />
                    </div>
                    <span className="text-5xl font-black text-slate-100">0{index + 1}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6">{service.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10 mt-4">
                    {service.description}
                  </p>
                  
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em]">具體交付成果</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.details.map((d, i) => (
                        <div key={i} className="flex items-start gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                          <LucideIcons.CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={16} />
                          <span className="text-slate-800 font-bold text-xs leading-snug">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-10 flex gap-4">
                    <a 
                      href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
                      className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg"
                    >
                      方案報價
                    </a>
                    <Link to="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 transition-all">
                      與顧問對話
                    </Link>
                  </div>
                </Reveal>
              </div>
              <div className="lg:w-1/2">
                <Reveal delay={200}>
                  <div className="relative bg-slate-100 rounded-[3.5rem] p-4">
                    <img 
                      src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1460925895917-afdab827c52f' : '1432888622747-4eb9a8f2c20e'}?auto=format&fit=crop&q=80&w=1000`} 
                      alt={service.title} 
                      className="rounded-[3rem] shadow-2xl transition-all duration-700"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Services;
