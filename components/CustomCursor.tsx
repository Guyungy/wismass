
import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer');
      
      setIsPointer(!!isClickable);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] transition-transform duration-100 ease-out flex items-center justify-center`}
      style={{
        transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0) scale(${isPointer ? 2.5 : 1})`,
      }}
    >
      <div className={`w-full h-full rounded-full border border-blue-500 transition-all duration-300 ${isPointer ? 'bg-blue-500/10 scale-110' : 'bg-transparent'} ${isClicking ? 'scale-75' : ''}`} />
      <div className={`absolute w-1 h-1 bg-white rounded-full transition-opacity duration-300 ${isPointer ? 'opacity-0' : 'opacity-100'}`} />
    </div>
  );
};

export default CustomCursor;
