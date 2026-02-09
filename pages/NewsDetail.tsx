import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { NEWS_ITEMS } from '../constants';
import Reveal from '../components/Reveal';

const NewsDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const newsItem = NEWS_ITEMS.find(item => String(item.id) === id);

    useEffect(() => {
        if (newsItem) {
            document.title = `${newsItem.title} | WISMASS`;
            window.scrollTo(0, 0);
        }
    }, [newsItem]);

    if (!newsItem) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6">
                <h1 className="text-3xl font-black text-slate-900 mb-4">文章未找到</h1>
                <p className="text-slate-500 mb-8">您訪問的頁面不存在或已被移除。</p>
                <button
                    onClick={() => navigate('/news')}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
                >
                    <ArrowLeft size={18} /> 返回動態列表
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            {/* 詳情頁頂圖 */}
            <div className="h-[40vh] md:h-[50vh] relative">
                <img
                    src={newsItem.img}
                    alt={newsItem.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-7xl mx-auto">
                    <Reveal>
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span className="px-4 py-1.5 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-600/20">
                                {newsItem.category}
                            </span>
                            <span className="flex items-center gap-2 text-white/90 text-xs font-bold bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                                <Calendar size={14} /> {newsItem.date}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-lg max-w-5xl">
                            {newsItem.title}
                        </h1>
                    </Reveal>
                </div>
            </div>

            {/* Markdown 內容渲染區 */}
            <div className="px-6 md:px-0 py-16 md:py-24">
                <div className="max-w-3xl mx-auto">
                    <Reveal delay={200}>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                h1: ({ node, ...props }) => <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 mt-12 first:mt-0 leading-tight border-b border-slate-100 pb-4" {...props} />,
                                h2: ({ node, ...props }) => <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-6" {...props} />,
                                h3: ({ node, ...props }) => <h3 className="text-xl font-black text-slate-900 mt-10 mb-4" {...props} />,
                                p: ({ node, ...props }) => <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium" {...props} />,
                                ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-8 space-y-4" {...props} />,
                                ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-8 space-y-4" {...props} />,
                                li: ({ node, ...props }) => <li className="text-slate-600 font-medium text-lg pl-2" {...props} />,
                                blockquote: ({ node, ...props }) => (
                                    <blockquote className="border-l-4 border-blue-600 bg-blue-50/50 p-8 rounded-r-3xl italic text-slate-700 text-xl font-medium mb-10 my-10" {...props} />
                                ),
                                strong: ({ node, ...props }) => <strong className="font-black text-slate-900" {...props} />,
                                em: ({ node, ...props }) => <em className="text-blue-600 not-italic font-bold" {...props} />,
                                a: ({ node, ...props }) => <a className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4 transition-colors font-bold" {...props} />
                            }}
                        >
                            {newsItem.content}
                        </ReactMarkdown>

                        {/* 底部操作 */}
                        <div className="mt-24 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
                            <Link
                                to="/news"
                                className="flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-[0.2em] hover:text-blue-600 transition-colors group"
                            >
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 返回動態列表
                            </Link>
                            <div className="text-slate-300 text-[10px] font-black uppercase tracking-[0.3em] text-center">
                                Official Publication by Wismass Consulting
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
