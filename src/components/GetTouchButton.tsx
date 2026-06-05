'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useTheme } from '@/hooks/useTheme';

interface GetTouchButtonProps {
  onClick?: () => void;
}

const GetTouchButton: React.FC<GetTouchButtonProps> = ({ onClick }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [status, setStatus] = useState<'idle' | 'hovered'>('idle');
  const frameRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick?.();
    
    // Reset button to idle state after 2 seconds
    setTimeout(() => {
      setStatus('idle');
    }, 2000);
  };

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const width = window.innerWidth;
      const height = window.innerHeight;

      const xNorm = clientX / width - 0.5;
      const yNorm = clientY / height - 0.5;

      const rotateX = -yNorm * 40;
      const rotateY = xNorm * 40;

      gsap.to(frame, {
        duration: 0.5,
        x: xNorm * 40,
        y: yNorm * 40,
        rotateX: rotateX,
        rotateY: rotateY,
        ease: 'power2.out',
        transformPerspective: 1200,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(frame, {
        duration: 1,
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        ease: 'elastic.out(1, 0.6)',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    frame.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      frame.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const isSmallShape = status !== 'idle';

  return (
    <div className="h-[48px] w-[170px] flex items-center justify-center relative [perspective:1200px]">
      <button
        type="button"
        ref={frameRef}
        onClick={handleClick}
        onMouseEnter={() => status === 'idle' && setStatus('hovered')}
        onMouseLeave={() => status === 'hovered' && setStatus('idle')}
        className={`absolute w-full h-full rounded-[100px] [transform-style:preserve-3d] flex justify-center items-center group transition-colors duration-500 ${
          isDark
            ? 'bg-white/[0.01] border border-white/15 shadow-[0_0_30px_rgba(255,255,255,0.02),_inset_0_0_15px_rgba(255,255,255,0.05)] hover:border-white/35'
            : 'bg-black/[0.01] border border-black/15 shadow-[0_0_30px_rgba(0,0,0,0.02),_inset_0_0_15px_rgba(0,0,0,0.05)] hover:border-black/35'
        }`}
      >
        <motion.div
          className={`absolute bg-gradient-to-r border flex flex-row items-center justify-center transition-all duration-400 ${
            isDark ? 'text-white shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]' : 'text-black shadow-[inset_0_0_10px_rgba(0,0,0,0.08)]'
          } ${
            status === 'idle'
              ? isDark
                ? 'from-white/10 to-white/[0.02] border-white/25 group-hover:border-white/50'
                : 'from-black/10 to-black/[0.02] border-black/25 group-hover:border-black/50'
              : ''
          } ${
            status === 'hovered'
              ? isDark
                ? 'from-white/15 to-white/5 border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                : 'from-black/15 to-black/5 border-black/40 shadow-[0_0_15px_rgba(0,0,0,0.08)]'
              : ''
          }`}
          style={{ transform: 'translateZ(25px)' }}
          animate={{
            width: isSmallShape ? '38px' : '90%',
            height: isSmallShape ? '38px' : '80%',
            borderRadius: isSmallShape ? '50%' : '100px',
          }}
          transition={{ type: 'spring', stiffness: 320, damping: 20 }}
        >
          <AnimatePresence mode="wait">
            {status === 'idle' && (
              <motion.div
                key="touch-idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`flex items-center justify-between w-full px-4 font-mono text-xs ${isDark ? 'text-white' : 'text-black'}`}
              >
                <span className="font-black tracking-wider">GET</span>
                <div
                  className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDark ? 'bg-white shadow-[0_0_8px_#fff]' : 'bg-black shadow-[0_0_8px_#000]'}`}
                />
                <span className="flex items-center gap-0.5 font-black tracking-wider">
                  TOUCH <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </motion.div>
            )}

            {status === 'hovered' && (
              <motion.div
                key="touch-hovered"
                initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className={`flex items-center justify-center ${isDark ? 'text-white' : 'text-black'}`}
              >
                <ArrowRight size={15} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </button>
    </div>
  );
};

export default GetTouchButton;
