
'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTheme } from '../hooks/useTheme';
import { Github, Linkedin, Codepen, ArrowUpRight } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import MagneticButton from '../components/MagneticButton';

const profiles = [
  {
    icon: Github,
    platform: 'GitHub',
    handle: '@abhaybarman',
    description: 'Open source projects, MERN stack repositories, and code contributions.',
    stats: '10+ Repos',
    href: 'https://github.com/ABHAYBARMAN067',
  },
  {
    icon: Linkedin,
    platform: 'LinkedIn',
    handle: 'Abhay Barman',
    description: 'Professional network, experience showcase, and industry connections.',
    stats: 'Connect',
    href: 'https://www.linkedin.com/in/abhay-barman-9a0b3a277/',
  },
  {
    icon: Codepen,
    platform: 'CodePen',
    handle: '@abhaybarman',
    description: 'Frontend UI experiments, small projects, and UI components.',
    stats: 'View Pens',
    href: 'https://codepen.io/Abhay-Barman',
  },
];

const platinumStyles = `
  @keyframes platinumShimmer {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes platinumSweep {
    0%        { transform: translateX(-200%); }
    60%, 100% { transform: translateX(200%); }
  }

  .platinum-card {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .platinum-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      #b8b8b8 0%,
      #e8e8e8 15%,
      #a0a0a0 25%,
      #d0d0d0 40%,
      #b8baba 50%,
      #efefef 60%,
      #a8a8a8 70%,
      #dedede 80%,
      #b8b8b8 100%
    );
    background-size: 200% 200%;
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: 0;
    pointer-events: none;
  }

  .platinum-card:hover::before {
    opacity: 1;
    animation: platinumShimmer 3s linear infinite;
  }

  .platinum-card::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      105deg,
      transparent 30%,
      rgba(255, 255, 255, 0.55) 50%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
    z-index: 1;
  }

  .platinum-card:hover::after {
    opacity: 1;
    animation: platinumSweep 1.8s ease-in-out infinite;
  }

  .platinum-card:hover .platinum-text-primary {
    color: #111111 !important;
  }

  .platinum-card:hover .platinum-text-secondary {
    color: rgba(0, 0, 0, 0.5) !important;
  }

  .platinum-card:hover .platinum-icon-box {
    background: rgba(0, 0, 0, 0.08) !important;
  }

  .platinum-card:hover .platinum-icon-box svg {
    color: #1a1a1a !important;
  }

  .platinum-card:hover .platinum-arrow svg {
    color: rgba(0, 0, 0, 0.5) !important;
  }

  .platinum-card:hover .platinum-pill {
    border-color: rgba(0, 0, 0, 0.2) !important;
    color: rgba(0, 0, 0, 0.55) !important;
    background: rgba(255, 255, 255, 0.3) !important;
  }
`;

export default function CodingProfiles() {
  const { ref, visible } = useScrollReveal();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: platinumStyles }} />

      <section
        id="profiles"
        ref={ref}
        className={`py-28 px-6 relative transition-colors duration-500 ${
          isDark ? 'bg-black' : 'bg-light-bg'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className={`font-mono text-xs tracking-widest mb-4 ${isDark ? 'text-white/30' : 'text-black/30'}`}>
              05 / PROFILES
            </p>
            <h2 className={`text-4xl sm:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>
              <AnimatedText text="Find Me Online" delay={0.1} />
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {profiles.map(({ icon: Icon, platform, handle, description, stats, href }, i) => (
              <MagneticButton key={platform} strength={0.15}>
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platinum-card group relative glass rounded-2xl p-6 overflow-hidden block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Original gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      isDark ? 'from-white/[0.04]' : 'from-black/[0.03]'
                    }`}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-5">
                      <motion.div
                        className={`platinum-icon-box w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                          isDark ? 'bg-white/5' : 'bg-black/5'
                        }`}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon
                          size={22}
                          className={`transition-colors duration-300 ${
                            isDark ? 'text-white/70' : 'text-black/60'
                          }`}
                        />
                      </motion.div>

                      <motion.div
                        className="platinum-arrow"
                        animate={visible ? { rotate: [0, 45] } : {}}
                        transition={{ delay: 0.5 + i * 0.15, duration: 0.3 }}
                      >
                        <ArrowUpRight
                          size={16}
                          className={`transition-all duration-300 ${
                            isDark
                              ? 'text-white/20 group-hover:text-white/60'
                              : 'text-black/20 group-hover:text-black/60'
                          } group-hover:-translate-y-0.5 group-hover:translate-x-0.5`}
                        />
                      </motion.div>
                    </div>

                    <h3
                      className={`platinum-text-primary text-lg font-bold mb-1 transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-black'
                      }`}
                    >
                      {platform}
                    </h3>

                    <p
                      className={`platinum-text-secondary text-xs font-mono mb-3 transition-colors duration-300 ${
                        isDark ? 'text-white/30' : 'text-black/30'
                      }`}
                    >
                      {handle}
                    </p>

                    <p
                      className={`platinum-text-secondary text-sm leading-relaxed mb-4 flex-1 transition-colors duration-300 ${
                        isDark ? 'text-white/40' : 'text-black/40'
                      }`}
                    >
                      {description}
                    </p>

                    <motion.span
                      className={`platinum-pill inline-flex items-center px-3 py-1 rounded-full border text-xs font-mono transition-all duration-300 w-fit ${
                        isDark
                          ? 'border-white/10 text-white/40'
                          : 'border-black/10 text-black/40'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {stats}
                    </motion.span>
                  </div>
                </motion.a>
              </MagneticButton>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}