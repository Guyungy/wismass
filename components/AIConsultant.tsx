
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Command, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { Message } from '../types';
import { SERVICES } from '../constants';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'SYSTEM READY. 諮詢已就緒。您想了解關於哪方面的戰略加速？' }
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
      const systemPrompt = `你是一位極致簡潔、專業、冷靜的市場戰略顧問。代表 'Wismass'。
      你的回答應該像一份執行摘要：結論先行，數據支撐，無廢話。
      服務範疇：${SERVICES.map(s => s.title).join(', ')}。
      語氣：商務、前衛、具有權威感。`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.2,
        },
      });

      const aiText = response.text || '連線中斷。請重新查詢。';
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'ACCESS DENIED. 系統異常。' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-10 left-10 flex items-center gap-4 px-6 py-4 bg-blue-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all z-40 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
      >
        <Sparkles size={20} className="animate-pulse" />
        <span className="text-xs font-black uppercase tracking-[0.2em]">Strategy AI</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-10 left-10 w-[380px] h-[550px] bg-slate-950 border border-white/10 rounded-[2.5rem] shadow-2xl z-50 flex flex-col overflow-hidden backdrop-blur-2xl">
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Command size={18} className="text-white" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-white">Wismass Node 01</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-2xl rounded-tr-none font-bold' 
                    : 'text-slate-300 bg-white/5 rounded-2xl rounded-tl-none border border-white/5'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-black/40">
            <div className="flex gap-2 bg-white/5 p-2 rounded-2xl border border-white/10 focus-within:border-blue-500 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Query strategy..."
                className="flex-grow px-4 bg-transparent border-none text-xs font-bold text-white focus:outline-none"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIConsultant;
