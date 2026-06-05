'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full flex items-center px-1 transition-colors duration-300"
      style={{
        backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
        border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'}`,
      }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="w-5 h-5 rounded-full flex items-center justify-center"
        animate={{
          x: isDark ? 24 : 0,
          backgroundColor: isDark ? '#1F2124' : '#efede8',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 0 : 180, scale: [1, 0.8, 1] }}
          transition={{ duration: 0.4 }}
        >
          {isDark ? (
            <Moon size={12} className="text-white" />
          ) : (
            <Sun size={12} className="text-yellow-500" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
