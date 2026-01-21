
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Sparkles, Zap } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Message } from '../types';
import { SERVICES, CONTACT_INFO } from '../constants';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '您好。我是 Wismass **極速 AI 顧問**。我已加載 Wismass 核心數據，可以為您提供：\n\n1. **跨境合規**諮詢\n2. **BITLAB** 品牌加速方案\n3. **紐約/香港** 市場對接建議' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);
    setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const knowledgeBase = `
        # WISMASS (萬通智富) 核心數據
        - 創始人：${CONTACT_INFO.founder}。
        - 核心服務：${SERVICES.map(s => s.title).join(', ')}。
        - 旗艦平台：BITLAB。
        - 準則：使用 Markdown 格式（標題、列表、加粗）回答，內容要專業且層次分明。
      `;

      const result = await ai.models.generateContentStream({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `Identity: Wismass Professional Strategy AI. \n\n ${knowledgeBase}`,
          temperature: 0.6,
          thinkingConfig: { thinkingBudget: 0 },
        },
      });

      let fullResponse = '';
      for await (const chunk of result) {
        const chunkText = chunk.text;
        fullResponse += chunkText;
        
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { 
            role: 'assistant', 
            content: fullResponse 
          };
          return newMessages;
        });
      }
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = { 
          role: 'assistant', 
          content: '抱歉，系統暫時斷開。請嘗試重試或直接撥打我們的電話。' 
        };
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-10 left-10 flex items-center gap-4 px-6 py-4 bg-slate-900 text-white rounded-full shadow-2xl hover:scale-110 hover:bg-blue-600 transition-all z-40 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <Zap size={20} className="text-yellow-400 fill-yellow-400" />
        <span className="text-xs font-black uppercase tracking-[0.2em]">Strategy AI</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-10 left-10 w-[420px] h-[600px] bg-white border border-slate-200 rounded-[2.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.15)] z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                <Sparkles size={20} className="text-white" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 block">AI Consultant</span>
                <span className="text-sm font-bold text-slate-900">Wismass 戰略系統</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors">
              <X size={18} className="text-slate-500" />
            </button>
          </div>

          {/* Messages Container */}
          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-5 scroll-smooth bg-white">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[88%] p-4 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-2xl rounded-tr-none font-bold shadow-md' 
                    : 'text-slate-700 bg-slate-50 rounded-2xl rounded-tl-none border border-slate-100'
                }`}>
                  {msg.role === 'assistant' ? (
                    <div className="markdown-content prose prose-sm max-w-none prose-slate">
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={{
                          h1: ({node, ...props}) => <h1 className="text-lg font-black mb-2 text-slate-900" {...props} />,
                          h2: ({node, ...props}) => <h2 className="text-base font-black mb-2 mt-4 text-slate-900" {...props} />,
                          h3: ({node, ...props}) => <h3 className="text-sm font-black mb-1 mt-3 text-slate-800" {...props} />,
                          p: ({node, ...props}) => <p className="mb-3 last:mb-0" {...props} />,
                          ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-3 space-y-1" {...props} />,
                          ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-3 space-y-1" {...props} />,
                          li: ({node, ...props}) => <li className="marker:text-blue-500" {...props} />,
                          strong: ({node, ...props}) => <strong className="font-black text-blue-700" {...props} />,
                          code: ({node, ...props}) => <code className="bg-slate-200 px-1 rounded text-xs" {...props} />,
                        }}
                      >
                        {msg.content || (idx === messages.length - 1 && isLoading ? '...' : '')}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    <div className="whitespace-pre-wrap">{msg.content}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-slate-100">
            <div className="flex gap-2 bg-slate-100 p-2 rounded-2xl border border-slate-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-50 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="詢問跨境合規或品牌加速..."
                className="flex-grow px-4 bg-transparent border-none text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center disabled:opacity-50 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIConsultant;
