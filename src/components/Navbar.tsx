'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import ThemeToggle from './ThemeToggle';
import { scrollToSection } from '@/lib/scrollToSection';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href.replace('#', ''));
  };

  const scrolledBg = isDark
    ? 'py-3 bg-black/80 backdrop-blur-xl border-b border-white/5'
    : 'py-3 bg-white/80 backdrop-blur-xl border-b border-black/5';

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? scrolledBg : 'py-5'}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`font-mono text-sm font-semibold tracking-widest transition-colors ${isDark ? 'text-white/90 hover:text-white' : 'text-black/80 hover:text-black'}`}
            whileHover={{ scale: 1.02 }}
          >
            AB
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                  activeSection === link.href.replace('#', '')
                    ? isDark ? 'text-white' : 'text-black'
                    : isDark ? 'text-white/50 hover:text-white' : 'text-black/40 hover:text-black'
                }`}
              >
                {link.label}
                {activeSection === link.href.replace('#', '') && (
                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full ${isDark ? 'bg-white' : 'bg-black'}`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-full ${isDark ? 'bg-white/70' : 'bg-black/70'}`}
                />
              </button>
            ))}
            <ThemeToggle />
            {/* <button
              onClick={() => handleNavClick('#contact')}
              className={`px-4 py-2 text-sm font-medium rounded transition-all duration-300 ${
                isDark
                  ? 'border border-white/20 text-white hover:bg-white hover:text-black'
                  : 'border border-black/20 text-black hover:bg-black hover:text-white'
              }`}
            >
              Hire Me
            </button> */}
          </div>

          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className={`transition-colors ${isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'}`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={`fixed inset-0 z-30 backdrop-blur-xl flex flex-col items-center justify-center gap-8 ${isDark ? 'bg-black/95' : 'bg-white/95'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-3xl font-bold tracking-tight transition-colors ${isDark ? 'text-white/60 hover:text-white' : 'text-black/40 hover:text-black'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.06 }}
              >
                {link.label}
              </motion.button>
            ))}
            {/* <motion.button
              onClick={() => handleNavClick('#contact')}
              className={`mt-4 px-8 py-3 rounded transition-all duration-300 ${
                isDark ? 'border border-white/30 text-white hover:bg-white hover:text-black' : 'border border-black/30 text-black hover:bg-black hover:text-white'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: navLinks.length * 0.06 }}
            >
              Hire Me
            </motion.button> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}