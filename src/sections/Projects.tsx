'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTheme } from '../hooks/useTheme';
import { ArrowUpRight } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import ProjectCard from '../components/ProjectCard';

const projects = [

  




{
  title: 'IIT Bombay Techfest Landing Page',
  description: 'A modern, responsive, and animated landing page for Techfest IIT Bombay built using HTML, CSS, and JavaScript with GSAP animations, scroll effects, and mobile-friendly navigation.',
  tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'ScrollTrigger'],
  github: '',
  live: '#',
  category: 'Frontend'
},


 
];

export default function Projects() {
  const { ref, visible } = useScrollReveal();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="projects" ref={ref} className={`py-28 px-6 relative transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-light-bg'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-16">
          <p className={`font-mono text-xs tracking-widest mb-4 ${isDark ? 'text-white/30' : 'text-black/30'}`}>03 / PROJECTS</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className={`text-4xl sm:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>
              <AnimatedText text="Featured Work" delay={0.1} />
            </h2>
            <motion.a href="https://github.com/abhaybarman" target="_blank" rel="noopener noreferrer" className={`group flex items-center gap-2 text-sm transition-colors font-mono ${isDark ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'}`} whileHover={{ x: 4 }}>
              View all on GitHub
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-5"
          initial="hidden"
          animate={visible ? 'show' : 'hidden'}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} visible={visible} isDark={isDark} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
