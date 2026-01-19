
import React, { useRef, useState, useEffect } from 'react';

interface MagneticProps {
  children: React.ReactElement;
  strength?: number;
}

const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.5 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const x = (clientX - centerX) * strength;
    const y = (clientY - centerY) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const el = ref.current;
    if (el) {
      el.addEventListener('mousemove', handleMouseMove as any);
      el.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      if (el) {
        el.removeEventListener('mousemove', handleMouseMove as any);
        el.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: 'transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
      }}
      className="inline-block"
    >
      {children}
    </div>
  );
};

export default Magnetic;
