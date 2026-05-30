'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-transparent dark:from-blue-950/20 dark:to-transparent pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
              ✨ Welcome to my portfolio
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              Hi, I&apos;m Abhay
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400">
              A passionate developer crafting beautiful & functional web experiences
            </p>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            I specialize in building modern web applications with Next.js, React, and TypeScript. 
            Bringing designs to life with smooth animations and responsive interfaces.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="#projects" className="group inline-flex items-center justify-center px-8 py-3 rounded-lg bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold hover:shadow-lg hover:shadow-blue-600/50 transition-all duration-300 transform hover:scale-105">
              View My Work
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="mailto:hello@abhaybarman.com" className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-300">
              Get In Touch
            </a>
          </div>

        

          {/* Scroll Indicator */}
          
        </div>
      </div>
    </section>
  );
}
