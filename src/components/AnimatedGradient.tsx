'use client';

import { useTheme } from '@/hooks/useTheme';

export default function AnimatedGradient() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 -z-10 animated-gradient opacity-40 ${
        isDark
          ? 'bg-[radial-gradient(ellipse_at_20%_20%,rgba(79,70,229,0.15),transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(6,182,212,0.12),transparent_50%),radial-gradient(ellipse_at_50%_50%,rgba(255,255,255,0.03),transparent_60%)]'
          : 'bg-[radial-gradient(ellipse_at_20%_20%,rgba(79,70,229,0.12),transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(6,182,212,0.1),transparent_50%),radial-gradient(ellipse_at_50%_50%,rgba(0,0,0,0.02),transparent_60%)]'
      }`}
    />
  );
}