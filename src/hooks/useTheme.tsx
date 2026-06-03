'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export const ThemeContext = createContext<{
  theme: string;
  setTheme: (theme: string) => void;
} | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Prevent hydration mismatch
    setMounted(true);
    
    // Apply theme to html element
    const htmlElement = document.documentElement;
    htmlElement.classList.remove('light', 'dark');
    htmlElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {mounted ? children : null}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used inside Providers');
  }

  return context;
}