'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);
  const trailSmoothX = useSpring(trailX, { damping: 40, stiffness: 150, mass: 0.8 });
  const trailSmoothY = useSpring(trailY, { damping: 40, stiffness: 150, mass: 0.8 });

  const trailIdRef = useRef(0);

  const addTrail = useCallback((x: number, y: number) => {
    setTrails((prev) => {
      const newTrails = [...prev, { x, y, id: trailIdRef.current++ }];
      if (newTrails.length > 8) newTrails.shift();
      return newTrails;
    });
  }, []);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
      if (!visible) setVisible(true);
      addTrail(e.clientX, e.clientY);
    };

    const down = () => setClicked(true);
    const up = () => setClicked(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);

    const hoverCheck = () => {
      const els = document.querySelectorAll('a, button, [data-hover]');
      const onEnter = () => setHovered(true);
      const onLeave = () => setHovered(false);
      els.forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
      return () => {
        els.forEach((el) => {
          el.removeEventListener('mouseenter', onEnter);
          el.removeEventListener('mouseleave', onLeave);
        });
      };
    };

    const cleanupHover = hoverCheck();
    const interval = setInterval(hoverCheck, 2000);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
      cleanupHover();
      clearInterval(interval);
    };
  }, [cursorX, cursorY, trailX, trailY, visible, addTrail]);

  // Clean old trails
  useEffect(() => {
    if (trails.length === 0) return;
    const t = setTimeout(() => {
      setTrails((prev) => prev.slice(1));
    }, 80);
    return () => clearTimeout(t);
  }, [trails]);

  return (
    <>
      {/* Trail particles */}
      {trails.map((trail) => (
        <motion.div
          key={trail.id}
          className="fixed top-0 left-0 pointer-events-none z-9998 mix-blend-difference"
          initial={{ opacity: 0.4, scale: 1 }}
          animate={{ opacity: 0, scale: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{
            x: trail.x - 4,
            y: trail.y - 4,
          }}
        >
          <div className="w-2 h-2 rounded-full bg-white" />
        </motion.div>
      ))}

      {/* Outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-9997 mix-blend-difference"
        style={{ x: trailSmoothX, y: trailSmoothY }}
        animate={{
          width: hovered ? 72 : 52,
          height: hovered ? 72 : 52,
          opacity: visible ? (hovered ? 0.15 : 0.08) : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      >
        <div className="w-full h-full rounded-full border border-white/40 -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-9999 mix-blend-difference"
        style={{ x: smoothX, y: smoothY }}
        animate={{
          width: clicked ? 8 : hovered ? 16 : 11,
          height: clicked ? 8 : hovered ? 16 : 11,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        <div className="w-full h-full rounded-full bg-white -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </>
  );
}
