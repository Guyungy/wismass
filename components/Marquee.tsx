
import React from 'react';

interface MarqueeProps {
  text: string;
  reverse?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ text, reverse = false }) => {
  return (
    <div className="py-20 overflow-hidden border-y border-white/10 bg-white/[0.03] backdrop-blur-md">
      <div className={`animate-marquee flex whitespace-nowrap ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
        {[...Array(8)].map((_, i) => (
          <span key={i} className="text-[10rem] font-black uppercase tracking-tighter px-16 text-transparent stroke-text opacity-40 hover:opacity-100 hover:text-blue-600 transition-all duration-1000 cursor-default select-none">
            {text}
          </span>
        ))}
      </div>
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.4);
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
