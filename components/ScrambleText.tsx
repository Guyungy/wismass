
import React, { useState, useEffect, useCallback } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  trigger?: 'hover' | 'auto';
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className = "", trigger = 'auto' }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  
  const scramble = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        text.split("").map((char, index) => {
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  }, [text]);

  useEffect(() => {
    if (trigger === 'auto') scramble();
  }, [scramble, trigger]);

  return (
    <span 
      className={className} 
      onMouseEnter={() => trigger === 'hover' && scramble()}
    >
      {displayText}
    </span>
  );
};

export default ScrambleText;
