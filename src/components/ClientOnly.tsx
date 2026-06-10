'use client';

import type { ReactNode } from 'react';
import { useMounted } from '@/hooks/useMounted';

type ClientOnlyProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const mounted = useMounted();
  
  return children;
}
