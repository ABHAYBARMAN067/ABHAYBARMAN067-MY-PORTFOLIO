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
    href: '',
  },

  {
    icon: Codepen,
    platform: 'CodePen',
    handle: '@abhaybarman',
    description: 'Frontend UI experiments, small projects, and UI components.',
    // stats: '+ Pens',
    href:'',
  },
];


export default function CodingProfiles() {
  const { ref, visible } = useScrollReveal();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="profiles" ref={ref} className={`py-28 px-6 relative transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-light-bg'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-16">
          <p className={`font-mono text-xs tracking-widest mb-4 ${isDark ? 'text-white/30' : 'text-black/30'}`}>05 / PROFILES</p>
          <h2 className={`text-4xl sm:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>
            <AnimatedText text="Find Me Online" delay={0.1} />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map(({ icon: Icon, platform, handle, description, stats, href }, i) => (
            <MagneticButton key={platform} strength={0.15}>
              <motion.a href={href} target="_blank" rel="noopener noreferrer" className="group relative glass rounded-2xl p-6 overflow-hidden block" initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.15 }} whileHover={{ y: -8, scale: 1.02 }}>
                <motion.div className={`absolute inset-0 bg-linear-to-br to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDark ? 'from-white/4' : 'from-black/3'}`} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <motion.div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${isDark ? 'bg-white/5 group-hover:bg-white/10' : 'bg-black/5 group-hover:bg-black/10'}`} whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }}>
                      <Icon size={22} className={isDark ? 'text-white/70' : 'text-black/60'} />
                    </motion.div>
                    <motion.div animate={visible ? { rotate: [0, 45] } : {}} transition={{ delay: 0.5 + i * 0.15, duration: 0.3 }}>
                      <ArrowUpRight size={16} className={`transition-all duration-300 ${isDark ? 'text-white/20 group-hover:text-white/60' : 'text-black/20 group-hover:text-black/60'} group-hover:-translate-y-0.5 group-hover:translate-x-0.5`} />
                    </motion.div>
                  </div>
                  <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>{platform}</h3>
                  <p className={`text-xs font-mono mb-3 ${isDark ? 'text-white/30' : 'text-black/30'}`}>{handle}</p>
                  <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-white/40' : 'text-black/40'}`}>{description}</p>
                  <motion.span className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-mono transition-all duration-300 ${isDark ? 'border-white/10 text-white/40 group-hover:border-white/20 group-hover:text-white/60' : 'border-black/10 text-black/40 group-hover:border-black/20 group-hover:text-black/60'}`} whileHover={{ scale: 1.05 }}>
                    {stats}
                  </motion.span>
                </div>
              </motion.a>
            </MagneticButton>
          ))}
        </div>
      </div>
    </section>
  );
}
