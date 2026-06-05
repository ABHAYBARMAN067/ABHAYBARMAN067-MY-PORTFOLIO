'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTheme } from '../hooks/useTheme';
import { Code2, BookOpen, Award } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';


const timeline = [

  {
    icon: BookOpen,
    type: 'Education',
    title: 'B.Tech in Computer Science (Final Year)',
    company: 'Shri Ram Institute of Science and Technology',
    period: '2022 - 2026',
    description: 'Currently pursuing B.Tech in Computer Science with focus on full-stack web development and software engineering fundamentals.',
    tags: ['Computer Science', 'Software Engineering', 'Problem Solving']
  },


];


export default function Experience() {
  const { ref, visible } = useScrollReveal();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="experience" ref={ref} className={`py-28 px-6 relative transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-light-bg'}`}>
      <div className="max-w-7xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-16">
          <p className={`font-mono text-xs tracking-widest mb-4 ${isDark ? 'text-white/30' : 'text-black/30'}`}>04 / EXPERIENCE</p>
          <h2 className={`text-4xl sm:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>
            <AnimatedText text="My Journey" delay={0.1} />
          </h2>
        </motion.div>

        <div className="relative max-w-3xl">
          <motion.div className={`absolute left-5 top-0 bottom-0 w-px ${isDark ? 'bg-linear-to-b from-white/20 via-white/10 to-transparent' : 'bg-linear-to-b from-black/20 via-black/10 to-transparent'}`} initial={{ scaleY: 0 }} animate={visible ? { scaleY: 1 } : {}} transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }} style={{ transformOrigin: 'top' }} />
          <motion.div className={`absolute left-4.5 w-2 h-2 rounded-full ${isDark ? 'bg-white/60' : 'bg-black/60'}`} initial={{ top: 0, opacity: 0 }} animate={visible ? { top: '100%', opacity: [0, 1, 1, 0] } : {}} transition={{ duration: 3, delay: 0.5, ease: 'easeInOut' }} />

          <div className="space-y-8">
            {timeline.map(({ icon: Icon, type, title, company, period, description, tags }, i) => (
              <motion.div key={title} className="relative flex gap-6" initial={{ opacity: 0, x: -20 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}>
                <div className="relative z-10 shrink-0">
                  <motion.div className={`w-10 h-10 rounded-full glass border flex items-center justify-center ${isDark ? 'border-white/10' : 'border-black/10'}`} whileHover={{ scale: 1.15 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <Icon size={16} className={isDark ? 'text-white/50' : 'text-black/50'} />
                  </motion.div>
                  <motion.div className={`absolute inset-0 rounded-full border ${isDark ? 'border-white/20' : 'border-black/20'}`} animate={visible ? { scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] } : {}} transition={{ duration: 2, delay: 0.5 + i * 0.3, repeat: Infinity }} />
                </div>

                <motion.div className="glass glass-hover rounded-xl p-5 flex-1 group" whileHover={{ x: 4, scale: 1.01 }} transition={{ type: 'spring', stiffness: 200 }}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <span className={`text-xs font-mono uppercase tracking-widest ${isDark ? 'text-white/25' : 'text-black/25'}`}>{type}</span>
                      <h3 className={`text-base font-bold mt-0.5 ${isDark ? 'text-white' : 'text-black'}`}>{title}</h3>
                      <p className={`text-sm ${isDark ? 'text-white/40' : 'text-black/40'}`}>{company}</p>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full border text-xs font-mono shrink-0 ${isDark ? 'border-white/10 text-white/30' : 'border-black/10 text-black/30'}`}>{period}</span>
                  </div>
                  <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-white/40' : 'text-black/40'}`}>{description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <motion.span key={tag} className={`px-2 py-0.5 rounded border text-xs font-mono ${isDark ? 'border-white/8 bg-white/3 text-white/30' : 'border-black/8 bg-black/3 text-black/30'}`} whileHover={{ scale: 1.08 }}>
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}