'use client';

import { useRef, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({ children, className = '', strength = 0.3 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 15, stiffness: 150, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
