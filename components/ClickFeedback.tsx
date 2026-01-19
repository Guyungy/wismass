
import React, { useEffect, useState } from 'react';

interface ClickEffect {
  id: number;
  x: number;
  y: number;
}

const ClickFeedback: React.FC = () => {
  const [effects, setEffects] = useState<ClickEffect[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newEffect = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setEffects((prev) => [...prev, newEffect]);
      
      // Auto-remove after animation duration
      setTimeout(() => {
        setEffects((prev) => prev.filter((eff) => eff.id !== newEffect.id));
      }, 700);
    };

    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {effects.map((eff) => (
        <React.Fragment key={eff.id}>
          {/* Main Ripple */}
          <div
            className="absolute rounded-full border-2 border-blue-500/40 animate-ripple"
            style={{
              left: eff.x,
              top: eff.y,
              width: '20px',
              height: '20px',
              marginLeft: '-10px',
              marginTop: '-10px',
            }}
          />
          {/* Secondary Particle Sparks */}
          {[0, 72, 144, 216, 288].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const tx = Math.cos(rad) * 40;
            const ty = Math.sin(rad) * 40;
            return (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full animate-spark"
                style={{
                  left: eff.x,
                  top: eff.y,
                  '--tw-translate-x': `${tx}px`,
                  '--tw-translate-y': `${ty}px`,
                } as any}
              />
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ClickFeedback;
