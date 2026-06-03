'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import LoadingScreen from './LoadingScreen';

const Portfolio = dynamic(() => import('@/components/Portfolio'), {
  ssr: false,
});

export default function PortfolioLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={loading} />
      <Portfolio />
    </>
  );
}
