'use client';

import { Github, Linkedin, Codepen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

const socials = [
  { icon: Github, href: 'https://github.com/ABHAYBARMAN067', label: 'GitHub' },
 
];

export default function Footer() {
  const{ theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`relative border-t py-4 px-6 transition-colors duration-500 ${isDark ? 'border-white/5' : 'border-black/5'}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className={`font-mono text-sm transition-colors ${isDark ? 'text-white/30' : 'text-black/30'}`}>
          <span suppressHydrationWarning>&copy; {new Date().getFullYear()}</span> Abhay Barman. All rights reserved.
        </div>
        <div className="flex items-center gap-1">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={`w-9 h-9 flex items-center justify-center rounded transition-colors ${isDark ? 'text-white/30 hover:text-white' : 'text-black/30 hover:text-black'}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Icon size={16} />
            </motion.a>
          ))}
        </div>
        {/* <p className={`text-xs font-mono transition-colors ${isDark ? 'text-white/20' : 'text-black/20'}`}>
          Built with React & Tailwind CSS
        </p> */}
        {/* RIGHT TEXT */}
<p
  className={`text-xs font-mono text-center md:text-right transition-colors ${
    isDark ? 'text-white/20' : 'text-black/20'
  }`}
>
  Built with Next.js, Tailwind CSS & GSAP
</p>
      </div>
    </footer>
  );
}