'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AnimatedText from '@/components/AnimatedText';

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-light-bg px-5 pt-24 text-light-text dark:bg-black dark:text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(245,243,239,0.95),transparent_36%),linear-gradient(135deg,rgba(239,237,232,0.9),rgba(230,227,222,0.9))] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_30%),linear-gradient(135deg,#000,#090909)]" />

      <motion.div
        className="mx-auto w-full max-w-6xl text-center flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
      >
        <div className="max-w-3xl flex flex-col items-center">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
          >
            <span className="inline-flex rounded-full border border-light-muted/25 bg-light-surface px-4 py-2 text-sm font-medium text-light-muted shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-white/75">
              Welcome to my portfolio
            </span>
          </motion.div>

          <div className="space-y-5 w-full">
            <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Hi, I&apos;m Abhay
            </h1>
            <p className="min-h-16 max-w-2xl mx-auto text-xl leading-8 text-light-muted sm:text-2xl dark:text-white/75">
              <AnimatedText
                text="A passionate developer crafting beautiful and functional web experiences"
                speed={45}
                delay={450}
                loop={true}
              />
            </p>
          </div>

          <motion.p
            className="mt-8 max-w-2xl mx-auto text-base leading-8 text-light-muted sm:text-lg dark:text-white/65"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            I specialize in building modern web applications with Next.js, React, and TypeScript.
            Bringing designs to life with smooth animations and responsive interfaces.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row justify-center w-full"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-light-text px-6 py-3 font-semibold text-light-bg transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-white dark:text-black"
            >
              View My Work
              <ArrowRight size={20} />
            </Link>
            <a
              href="mailto:hello@abhaybarman.com"
              className="inline-flex items-center justify-center rounded-md border border-light-muted/30 bg-light-surface px-6 py-3 font-semibold text-light-text transition hover:-translate-y-0.5 hover:border-light-text/40 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-white/35"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}