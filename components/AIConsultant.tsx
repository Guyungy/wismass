
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Loader2, Sparkles, Command } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { Message } from '../types';
import { SERVICES } from '../constants';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '您好。我是 Wismass 智能顧問。我可以為您提供關於 Brand Strategy、市場洞察或 BITLAB 數據平台的專業解答。' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemPrompt = `你是一位世界級的市場營銷顧問，代表 'Wismass 市場營銷諮詢'。
      我們與 BITLAB '全鏈路品牌加速器' 合作。
      服務內容包括：${SERVICES.map(s => s.title).join(', ')}。
      請以高冷、專業、簡潔、富有邏輯的商務口吻回答。
      不要使用表情符號。重點放在「數據驅動」和「執行力」。`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.3,
        },
      });

      const aiText = response.text || '抱歉，系統暫時無法響應。請通過官方渠道聯絡。';
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: '系統通訊異常。請聯絡真人客服諮詢。' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-10 left-10 flex items-center gap-4 px-8 py-5 bg-slate-950 text-white rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10 hover:bg-blue-600 transition-all z-40 group ${isOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}
      >
        <Command size={22} className="group-hover:rotate-180 transition-transform duration-700" />
        <span className="text-sm font-black uppercase tracking-widest">Wismass AI</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-10 left-10 w-[420px] h-[650px] bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] z-50 flex flex-col overflow-hidden border border-slate-200 animate-in fade-in slide-in-from-bottom-12 duration-500">
          {/* Header */}
          <div className="p-8 bg-slate-950 text-white flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Command size={24} />
              </div>
              <div>
                <h3 className="font-black text-base tracking-tight uppercase">Wismass Intelligence</h3>
                <p className="text-[10px] text-blue-400 font-black uppercase tracking-[0.3em] mt-1">24/7 AI Protocol</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-3 hover:bg-white/10 rounded-xl transition-colors border border-white/5">
              <X size={24} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-8 overflow-y-auto space-y-8 bg-white">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 text-base leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-[2rem] rounded-tr-none font-bold shadow-lg shadow-blue-500/20' 
                    : 'text-slate-800 bg-slate-50 rounded-[2rem] rounded-tl-none border border-slate-200 font-medium'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-50 p-5 rounded-[2rem] rounded-tl-none border border-slate-200">
                  <div className="flex gap-2">
                     <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></span>
                     <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                     <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-8 bg-slate-50 border-t border-slate-200">
            <div className="flex gap-4 bg-white p-3 rounded-2xl border-2 border-slate-200 focus-within:border-blue-500 transition-all shadow-sm">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="輸入您的商務諮詢細節..."
                className="flex-grow px-4 py-2 bg-transparent border-none text-base font-bold text-slate-900 focus:outline-none placeholder:text-slate-300"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="w-12 h-12 bg-slate-950 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all disabled:opacity-20 shadow-lg"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="mt-4 text-[10px] text-center text-slate-400 font-black uppercase tracking-[0.4em]">
              Validated by BITLAB Global Node
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIConsultant;
