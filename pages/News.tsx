
import React from 'react';
import { Calendar, Tag, ChevronRight, Share2 } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const News: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Wismass 聯合 BITLAB 發佈 2024「全鏈路品牌成長」白皮書',
      date: '2024.05.20',
      category: '市場趨勢',
      desc: '通過對 10,000+ 場景數據的深度分析，揭示了未來三年企業增長的關鍵驅動力...',
      img: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      title: '成功案例：某知名零售品牌如何通過空間數據激活轉化率提升 45%',
      date: '2024.05.15',
      category: '品牌案例',
      desc: '從視覺重塑到線下快閃店執行，Wismass 為該品牌量身打造了一套完整的場景營銷方案...',
      img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      title: 'Wismass 市場營銷諮詢榮獲「年度最佳全鏈路加速機構」獎項',
      date: '2024.05.02',
      category: '公司動態',
      desc: '這一榮譽肯定了我們在品牌戰略落地與執行驗證全週期服務中的卓越表現...',
      img: 'https://images.unsplash.com/photo-1531050171669-7df9b208f477?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const handleReadMore = (title: string) => {
    trackEvent('news_read_more', 'Engagement', title);
    alert(`感謝您對《${title}》的感興趣！\n\n完整內容正在由 BITLAB 編輯部整理中，敬請期待。`);
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight">最新消息</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            獲取關於 Wismass、BITLAB 以及全球市場營銷趨勢的最新洞察與動態。
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {newsItems.map((item) => (
            <article key={item.id} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur shadow-sm rounded-xl text-xs font-bold text-blue-600">
                  {item.category}
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {item.date}</span>
                </div>
                <h2 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {item.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
                <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                  <button 
                    onClick={() => handleReadMore(item.title)}
                    className="text-sm font-black text-slate-900 flex items-center gap-1 group/btn"
                  >
                    閱讀全文 <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="text-3xl font-black">訂閱市場週報</h3>
            <p className="text-slate-400 text-lg">每週獲取深度行業分析，不漏掉任何關鍵機遇。</p>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="您的電郵地址" 
              className="px-8 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-80"
            />
            <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black hover:bg-blue-700 transition-all">
              立即訂閱
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
