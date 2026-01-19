
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Loader2, Sparkles, Command } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { Message } from '../types';
import { SERVICES } from '../constants';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '您好。我是 Wismass 智能顧問。我可以為您提供關於 brand strategy、市場洞察或 BITLAB 數據平台的專業解答。' }
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
        className={`fixed bottom-8 left-8 flex items-center gap-3 px-6 py-4 bg-slate-950 text-white rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-blue-600 transition-all z-40 group ${isOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}
      >
        <Command size={18} className="group-hover:rotate-180 transition-transform duration-500" />
        <span className="text-xs font-black uppercase tracking-widest">Wismass AI</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-8 left-8 w-[400px] h-[600px] bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] z-50 flex flex-col overflow-hidden border border-slate-100 animate-in fade-in slide-in-from-bottom-12 duration-500">
          {/* Header */}
          <div className="p-6 bg-slate-950 text-white flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <Command size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-tight">Wismass Intelligence</h3>
                <p className="text-[10px] text-blue-400 font-black uppercase tracking-widest">Online Consultant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6 bg-white">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-2xl rounded-tr-none font-medium' 
                    : 'text-slate-700 bg-slate-50 rounded-2xl rounded-tl-none border border-slate-100 font-light'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none border border-slate-100">
                  <div className="flex gap-1">
                     <span className="w-1 h-1 bg-blue-600 rounded-full animate-bounce"></span>
                     <span className="w-1 h-1 bg-blue-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                     <span className="w-1 h-1 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 bg-slate-50 border-t border-slate-100">
            <div className="flex gap-3 bg-white p-2 rounded-2xl border border-slate-200 focus-within:border-blue-500 transition-colors">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="輸入商務諮詢..."
                className="flex-grow px-4 py-2 bg-transparent border-none text-sm focus:outline-none placeholder:text-slate-300"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 bg-slate-950 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors disabled:opacity-20"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="mt-3 text-[9px] text-center text-slate-400 font-bold uppercase tracking-[0.2em]">
              Powered by BITLAB Core Service
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIConsultant;
