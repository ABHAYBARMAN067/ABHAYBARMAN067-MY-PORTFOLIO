'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/app/providers';

export default function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used inside Providers');
  }

  return context;
}
