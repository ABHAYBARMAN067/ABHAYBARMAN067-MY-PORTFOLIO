'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {

  return (
    <section>
      {/* Background gradient */}
      <div />
      
      <div>
        <div>
          {/* Badge */}
          <div>
            <span>
              ✨ Welcome to my portfolio
            </span>
          </div>

          {/* Main Headline */}
          <div>
            <h1>
              Hi, I&apos;m Abhay
            </h1>
            <p>
              A passionate developer crafting beautiful & functional web experiences
            </p>
          </div>

          {/* Description */}
          <p>
            I specialize in building modern web applications with Next.js, React, and TypeScript. 
            Bringing designs to life with smooth animations and responsive interfaces.
          </p>

          {/* CTA Buttons */}
          <div>
            <Link href="#projects">
              View My Work
              <ArrowRight size={20} />
            </Link>
            <a href="mailto:hello@abhaybarman.com">
              Get In Touch
            </a>
          </div>

        

          {/* Scroll Indicator */}
          
        </div>
      </div>
    </section>
  );
}
