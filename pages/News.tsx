
import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import Reveal from '../components/Reveal';

const News: React.FC = () => {
  const newsItems = [
    { id: 1, title: 'Wismass 聯合 BITLAB 發佈 2024 白皮書', date: '2024.05.20', category: '市場趨勢', img: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: '成功案例：某零售品牌轉化率提升 45%', date: '2024.05.15', category: '品牌案例', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: '榮獲「年度最佳全鏈路加速機構」', date: '2024.05.02', category: '公司動態', img: 'https://images.unsplash.com/photo-1531050171669-7df9b208f477?auto=format&fit=crop&q=80&w=800' }
  ];

  return (
    <div className="bg-white">
      {/* Header - Standardized Padding & Typography */}
      <section className="bg-slate-50 pt-32 pb-24 lg:pt-48 lg:pb-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] lg:text-xs mb-4 block">Latest Insights</span>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">最新消息</h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium mt-8 leading-relaxed">
              獲取 Wismass、BITLAB 及全球市場營銷趨勢的最新洞察。
            </p>
          </Reveal>
        </div>
      </section>

      {/* News List */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {newsItems.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 100}>
              <article className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all">
                <div className="relative h-60 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur rounded-lg text-[10px] font-black text-blue-600 uppercase">
                    {item.category}
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase">
                    <Calendar size={12} /> {item.date}
                  </div>
                  <h2 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">{item.title}</h2>
                  <button className="pt-4 text-xs font-black text-slate-900 flex items-center gap-1 group/btn uppercase tracking-widest">
                    Read More <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;
