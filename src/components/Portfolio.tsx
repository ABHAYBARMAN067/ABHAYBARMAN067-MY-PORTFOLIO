'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ClientOnly from '@/components/ClientOnly';
import SmoothScroll from '@/components/SmoothScroll';
import AnimatedGradient from '@/components/AnimatedGradient';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Experience from '@/sections/Experience';
import CodingProfiles from '@/sections/CodingProfiles';
import Contact from '@/sections/Contact';
import { useTheme } from '@/hooks/useTheme';

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      <motion.div
        className={`min-h-screen cursor-none transition-colors duration-500 ${
          isDark ? 'bg-black text-white' : 'bg-light-bg text-light-text'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <AnimatedGradient />
        <ClientOnly>
          <CustomCursor />
        </ClientOnly>
        <AnimatePresence>{loading && <LoadingScreen isLoading={loading} />}</AnimatePresence>
        {!loading && (
          <>
            <Navbar />
            <main className="relative z-10">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <CodingProfiles />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </motion.div>
    </SmoothScroll>
  );
}
