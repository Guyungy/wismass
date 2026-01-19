
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isPointer, setIsPointer] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer');
      
      setIsPointer(!!isClickable);
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* 外圈 - 現在跟隨 cursorX/Y，不再使用 Spring 延遲 */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: isPointer ? 1.5 : 1,
            borderColor: '#2563eb',
            backgroundColor: isPointer ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
          }}
          transition={{ duration: 0.2 }}
          className="w-full h-full rounded-full border-2 border-blue-600/50"
        />
      </motion.div>

      {/* 內點 */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 pointer-events-none z-[9998] bg-blue-600 rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};

export default CustomCursor;
