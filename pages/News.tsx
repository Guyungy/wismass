
import React, { useState, useMemo } from 'react';
import { Calendar, ChevronRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { NEWS_ITEMS, NEWS_CATEGORIES, NewsItem } from '../constants';

const News: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('全部動態');

  // 篩選邏輯
  const filteredNews = useMemo(() => {
    if (activeCategory === '全部動態') return NEWS_ITEMS;
    return NEWS_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-white min-h-screen">
      {/* 頁頭 */}
      <section className="bg-slate-50 pt-32 pb-24 lg:pt-48 lg:pb-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] lg:text-xs mb-4 block">Wismass Newsroom</span>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">最新消息</h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium mt-8 leading-relaxed">
              獲取萬通智富在跨境合規、品牌加速及全球市場趨勢方面的最新研究報告。
            </p>
          </Reveal>
        </div>
      </section>

      {/* 分類篩選欄 */}
      <section className="py-12 border-b border-slate-50 sticky top-[72px] bg-white/80 backdrop-blur-xl z-[100]">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4 justify-center">
          {NEWS_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === cat
                ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 scale-105'
                : 'bg-white text-slate-400 border border-slate-200 hover:border-blue-600 hover:text-blue-600'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 新聞列表 */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6">
        <motion.div layout className="grid lg:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredNews.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <Link
                  to={`/news/${item.id}`}
                  className="group flex flex-col md:flex-row bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:border-blue-100 transition-all cursor-pointer h-full"
                >
                  <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6 px-3 py-1.5 bg-blue-600/90 backdrop-blur-sm rounded-xl text-[9px] font-black text-white uppercase tracking-widest">
                      {item.category}
                    </div>
                  </div>
                  <div className="md:w-3/5 p-10 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <Calendar size={12} className="text-blue-600" /> {item.date}
                      </div>
                      <h2 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {item.title}
                      </h2>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-3">
                        {item.summary}
                      </p>
                    </div>
                    <div className="pt-8 flex items-center justify-between border-t border-slate-50 mt-auto">
                      <span className="text-[10px] font-black text-slate-900 flex items-center gap-2 group/btn uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                        查看全文 <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                      <ExternalLink size={14} className="text-slate-200 group-hover:text-blue-200 transition-colors" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 訂閱區塊 */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
          <Reveal className="lg:w-2/3 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight">訂閱週報</h2>
            <p className="text-xl text-slate-400 font-medium max-w-xl">
              第一時間獲取關於跨境政策、BITLAB 案例及全球品牌趨勢的專家解析。
            </p>
          </Reveal>
          <Reveal delay={200} className="lg:w-1/3 w-full">
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 p-2 bg-slate-800 rounded-2xl border border-slate-700 focus-within:border-blue-500 transition-all">
              <input
                type="email"
                placeholder="您的郵箱地址"
                className="bg-transparent border-none outline-none px-4 py-3 text-white text-sm font-bold flex-grow"
              />
              <button className="px-6 py-3 bg-blue-600 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all">
                訂閱
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </div >
  );
};

export default News;
