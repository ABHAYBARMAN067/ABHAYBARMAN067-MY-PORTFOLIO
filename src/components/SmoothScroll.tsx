'use client';

import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';
import { registerLenis, unregisterLenis } from '@/lib/scrollToSection';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    registerLenis(lenis);

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      unregisterLenis();
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
