'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="inline-flex size-10 items-center justify-center rounded-full border border-light-muted/25 bg-light-elevated text-light-text shadow-sm transition hover:-translate-y-0.5 hover:border-light-text/40 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-white/35"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
