
import React from 'react';

interface MarqueeProps {
  text: string;
  reverse?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ text, reverse = false }) => {
  return (
    <div className="py-12 overflow-hidden border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
      <div className={`animate-marquee flex whitespace-nowrap ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-[8rem] font-black uppercase tracking-tighter px-12 text-transparent stroke-text opacity-20 hover:opacity-100 hover:text-blue-600 transition-all duration-700 cursor-default">
            {text}
          </span>
        ))}
      </div>
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
