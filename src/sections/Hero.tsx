'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Github, Linkedin, Codepen } from 'lucide-react';
import gsap from 'gsap';

// Component imports
import MagneticButton from '../components/MagneticButton';
import ResumeButton from '../components/ResumeButton';
import GetTouchButton from '../components/GetTouchButton';

// Utility and Hook imports
import { scrollToSection } from '@/lib/scrollToSection';
import { useTheme } from '../hooks/useTheme';
import useTypingEffect from '../hooks/useTypingEffect';

const phrases = [
  'MERN Stack Developer',
  // 'Full Stack Engineer',
  'React.js Enthusiast',
  'Freelancer',
  // 'Node.js Builder',
];

const socials = [
  { icon: Github, href: 'https://github.com/ABHAYBARMAN067', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/abhay-barman-9a0b3a277/', label: 'LinkedIn' },
  { icon: Codepen, href: 'https://codepen.io/Abhay-Barman', label: 'CodePen' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

function MagneticName({
  text,
  className,
  hoverColor = false,
  isDark = true,
}: {
  text: string;
  className?: string;
  hoverColor?: boolean;
  isDark?: boolean;
}) {
  const baseColor = isDark ? '#ffffff' : '#3d3a36';
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chars = containerRef.current?.querySelectorAll<HTMLSpanElement>('.char');
    if (!chars || chars.length === 0) return;

    const mouse = { x: 0, y: 0 };

    const handleMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMove);

    const ticker = () => {
      chars.forEach((char) => {
        const rect = char.getBoundingClientRect();
        const charX = rect.left + rect.width / 2;
        const charY = rect.top + rect.height / 2;
        const dist = Math.hypot(mouse.x - charX, mouse.y - charY);
        const radius = 120;

        if (dist < radius) {
          const force = (radius - dist) / radius;
          const pushX = -(mouse.x - charX) * 0.35 * force;
          const pushY = -(mouse.y - charY) * 0.35 * force;
          const rotateY = (mouse.x - charX) * 0.08 * force;
          const rotateX = -(mouse.y - charY) * 0.08 * force;
          const scale = 1 + force * 0.25;

          const hasGradient = className?.includes('text-gradient');
          const letterColor =
            hoverColor && !hasGradient
              ? `hsl(${185 + force * 75}, 95%, ${68 + force * 22}%)`
              : hasGradient
                ? undefined
                : baseColor;

          gsap.to(char, {
            x: pushX,
            y: pushY,
            rotateX,
            rotateY,
            scale,
            z: force * 40,
            color: letterColor,
            duration: 0.25,
            ease: 'power2.out',
            transformPerspective: 800,
          });
        } else {
          gsap.to(char, {
            x: 0, y: 0, rotateX: 0, rotateY: 0, scale: 1, z: 0, color: '', textShadow: 'none',
            duration: 1, ease: 'elastic.out(1, 0.4)', transformPerspective: 800,
          });
        }
      });
    };

    gsap.ticker.add(ticker);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      gsap.ticker.remove(ticker);
    };
  }, [className, hoverColor, isDark, baseColor]);

  return (
    <div ref={containerRef} className={`inline-block cursor-default transform-3d ${className ?? ''}`}>
      {text.split('').map((char, i) => (
        <span key={i} className="char inline-block transform-3d select-none">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [phraseIndex, setPhraseIndex] = useState(0);
  const currentPhrase = phrases[phraseIndex] ?? '';
  const typed = useTypingEffect(currentPhrase, { speed: 80, delay: 250 });

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setPhraseIndex((index) => (index + 1) % phrases.length);
    }, currentPhrase.length * 80 + 1800);

    return () => window.clearTimeout(timeoutId);
  }, [currentPhrase]);

  const scrollToContact = () => scrollToSection('contact');

  const nameClass = `text-6xl sm:text-7xl md:text-8xl font-black tracking-tight ${isDark ? 'text-white' : 'text-black'}`;

  return (
    <section
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 transition-colors duration-500 perspective-distant ${
        isDark ? 'bg-black text-white' : 'bg-light-bg text-light-text'
      }`}
    >
      <motion.div 
        className="relative z-10 text-center max-w-5xl" 
        variants={container} 
        initial="hidden" 
        animate="show"
      >
        {/* Name Header Section */}
        <motion.h1 variants={item} className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[0.92] mb-6 transform-3d">
          <MagneticName text="Abhay" hoverColor isDark={isDark} className={nameClass} />
          <br />
          <MagneticName text="Barman" hoverColor isDark={isDark} className={`${nameClass} transform-3d`} />
        </motion.h1>

        {/* Typing Effect Section */}
        <motion.div variants={item} className="h-10 mb-6 flex items-center justify-center">
          <span className={`font-mono text-xl sm:text-2xl tracking-wide ${isDark ? 'text-white/70' : 'text-black/70'}`}>
            {typed}
            <span className={`inline-block w-0.5 h-6 ml-0.5 animate-blink ${isDark ? 'bg-white/70' : 'bg-black/70'}`} />
          </span>
        </motion.div>

        {/* Description Section */}
        <motion.p
          variants={item}
          className={`text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10 ${isDark ? 'text-white/40' : 'text-black/40'}`}
        >
          Crafting performant, scalable web applications with the MERN stack. Turning complex problems into elegant digital experiences.
        </motion.p>

        {/* CTA Buttons Section */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mb-12 perspective-distant">
          <div className="h-12 flex items-center justify-center">
            <MagneticButton>
              <GetTouchButton onClick={scrollToContact} />
            </MagneticButton>
          </div>

          <div className="h-12 flex items-center justify-center">
            <MagneticButton>
              <ResumeButton />
            </MagneticButton>
          </div>
        </motion.div>

        {/* Social Icons Section */}
        <motion.div variants={item} className="flex items-center justify-center gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`w-10 h-10 flex items-center justify-center border rounded transition-all duration-300 ${
                isDark
                  ? 'border-white/10 text-white/40 hover:text-white hover:border-white/30'
                  : 'border-black/10 text-black/40 hover:text-black hover:border-black/30'
              }`}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={17} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
