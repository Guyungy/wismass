import React, { useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, ArrowLeft, Tag, Share2, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { NEWS_ITEMS } from '../constants';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';

const NewsDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const newsItem = NEWS_ITEMS.find(item => String(item.id) === id);

    // Related articles logic
    const relatedNews = useMemo(() => {
        if (!newsItem) return [];
        return NEWS_ITEMS
            .filter(item => item.category === newsItem.category && String(item.id) !== String(newsItem.id))
            .slice(0, 2);
    }, [newsItem]);

    useEffect(() => {
        if (newsItem) {
            window.scrollTo(0, 0);
        }
    }, [newsItem, id]);

    if (!newsItem) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6">
                <SEO title="文章未找到" />
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

    const shareUrl = window.location.href;

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: newsItem.title,
                    text: newsItem.summary,
                    url: shareUrl,
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            // Fallback - maybe copy to clipboard
            navigator.clipboard.writeText(shareUrl);
            alert('鏈接已複製到剪貼板');
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title={newsItem.title}
                description={newsItem.summary}
                img={newsItem.img}
                type="article"
                keywords={newsItem.tags}
            />

            {/* 詳情頁頂圖 */}
            <div className="h-[40vh] md:h-[50vh] relative">
                <img
                    src={newsItem.img}
                    alt={newsItem.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
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
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-lg max-w-5xl mb-6">
                            {newsItem.title}
                        </h1>

                        {/* Tags Display */}
                        {newsItem.tags && newsItem.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {newsItem.tags.map(tag => (
                                    <span key={tag} className="flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md text-white/90 text-[10px] font-bold rounded-lg border border-white/10">
                                        <Tag size={10} /> {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </Reveal>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 md:py-24">
                {/* Main Content */}
                <div className="lg:col-span-8">
                    <Reveal delay={200}>
                        <div className="prose prose-slate prose-lg max-w-none">
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
                        </div>

                        {/* Article Footer */}
                        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={handleShare}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 text-slate-600 font-bold text-sm hover:bg-blue-600 hover:text-white transition-all group"
                                >
                                    <Share2 size={16} className="group-hover:scale-110 transition-transform" />
                                    分享文章
                                </button>
                            </div>
                            <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                                WISMASS CONSULTING
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Sidebar / Related Posts */}
                <div className="lg:col-span-4 space-y-12">
                    {/* Related Articles */}
                    {relatedNews.length > 0 && (
                        <div className="sticky top-32">
                            <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-blue-600"></span> 相關閱讀
                            </h3>
                            <div className="space-y-6">
                                {relatedNews.map(item => (
                                    <Link key={item.id} to={`/news/${item.id}`} className="group block">
                                        <div className="aspect-video rounded-2xl overflow-hidden mb-4 relative">
                                            <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                                        </div>
                                        <h4 className="font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors mb-2">
                                            {item.title}
                                        </h4>
                                        <span className="text-xs text-slate-500 font-bold">{item.date}</span>
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-slate-900 rounded-3xl text-white">
                                <h4 className="text-xl font-black mb-4">訂閱週報</h4>
                                <p className="text-slate-400 text-sm mb-6 font-medium">獲取最新的行業洞察與分析。</p>
                                <button className="w-full py-3 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition-colors">
                                    立即訂閱
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Back Button Floating or Fixed at bottom */}
            <div className="fixed bottom-8 left-8 z-50">
                <Link
                    to="/news"
                    className="flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-md text-slate-900 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl hover:bg-blue-600 hover:text-white transition-all border border-slate-200 hover:border-blue-600 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 返回
                </Link>
            </div>
        </div>
    );
};

export default NewsDetail;
