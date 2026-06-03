'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { useMounted } from '../hooks/useMounted';

const snap = { type: 'spring' as const, stiffness: 520, damping: 28 };
const quick = { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const };

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  category: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
  visible: boolean;
  isDark: boolean;
};

export default function ProjectCard({ project, index, visible, isDark }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const isMounted = useMounted();

  const cardContent = (
    <motion.article
      className="group relative glass rounded-2xl overflow-hidden glass-hover cursor-pointer h-full isolate"
      animate={{ y: hovered ? -14 : 0, scale: hovered ? 1.01 : 1 }}
      transition={snap}
    >
      <div className="relative h-48 overflow-hidden rounded-t-2xl bg-black">
        <motion.div
          className="absolute inset-[-8%] origin-center will-change-transform"
          animate={{
            scale: hovered ? 1.14 : 1.06,
            opacity: hovered ? 1 : 0.55,
          }}
          transition={quick}
        >
          <Image
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            fill
            priority={index === 0}
          />
        </motion.div>

        <div
          className={`pointer-events-none absolute inset-0 z-1 transition-opacity duration-200 ${hovered ? 'opacity-90' : 'opacity-100'} bg-linear-to-b from-transparent ${isDark ? 'via-black/10 to-black/90' : 'via-white/10 to-white/90'}`}
        />

        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute inset-0 z-2 pointer-events-none overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
            >
              <motion.div
                className={`absolute left-0 right-0 h-0.5 ${isDark ? 'bg-white/40 shadow-[0_0_12px_rgba(255,255,255,0.6)]' : 'bg-black/30'}`}
                initial={{ top: '0%' }}
                animate={{ top: '100%' }}
                transition={{ duration: 0.75, ease: 'linear' }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.span
          className={`absolute top-4 left-4 z-3 px-2.5 py-1 rounded-full border backdrop-blur-sm text-xs font-mono ${isDark ? 'border-white/10 bg-black/40 text-white/60' : 'border-black/10 bg-white/60 text-black/60'}`}
          animate={{ y: hovered ? -6 : 0, scale: hovered ? 1.05 : 1 }}
          transition={snap}
        >
          {project.category}
        </motion.span>

        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute top-4 right-4 z-3 flex gap-2"
              initial={{ opacity: 0, y: -12, scale: 0.6 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.7 }}
              transition={snap}
            >
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 h-8 rounded-full backdrop-blur-sm border flex items-center justify-center ${isDark ? 'bg-black/60 border-white/20 text-white hover:bg-white hover:text-black' : 'bg-white/60 border-black/20 text-black hover:bg-black hover:text-white'}`}
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={14} />
              </motion.a>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 h-8 rounded-full backdrop-blur-sm border flex items-center justify-center ${isDark ? 'bg-black/60 border-white/20 text-white hover:bg-white hover:text-black' : 'bg-white/60 border-black/20 text-black hover:bg-black hover:text-white'}`}
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink size={14} />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-5">
        <h3 className={`text-lg font-bold mb-2 flex items-center gap-2 ${isDark ? 'text-white' : 'text-black'}`}>
          {project.title}
          <ArrowUpRight
            size={16}
            className={`transition-all duration-200 ${hovered ? 'translate-x-1 -translate-y-1 opacity-100 scale-110' : 'opacity-0 scale-75'}`}
          />
        </h3>
        <p className={`text-sm leading-relaxed mb-3 line-clamp-3 transition-colors duration-200 ${isDark ? (hovered ? 'text-white/55' : 'text-white/40') : hovered ? 'text-black/55' : 'text-black/40'}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t, ti) => (
            <motion.span
              key={t}
              className={`px-2 py-0.5 rounded border text-xs font-mono ${isDark ? 'border-white/8 bg-white/4 text-white/40' : 'border-black/8 bg-black/3 text-black/40'}`}
              animate={hovered ? { opacity: 1, y: 0, scale: 1.04 } : { opacity: 0.55, y: 4, scale: 1 }}
              transition={{ ...snap, delay: ti * 0.02 }}
            >
              {t}
            </motion.span>
          ))}
        </div>
        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-xs font-mono ${isDark ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'}`}
            whileHover={{ x: 5 }}
            transition={quick}
          >
            <Github size={13} /> Source Code
          </motion.a>
          <span className={isDark ? 'text-white/10' : 'text-black/10'}>|</span>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-xs font-mono ${isDark ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'}`}
            whileHover={{ x: 5 }}
            transition={quick}
          >
            <ExternalLink size={13} /> Live Demo
          </motion.a>
        </div>
      </div>
    </motion.article>
  );

  return (
    <motion.div
      className="h-full overflow-hidden rounded-2xl"
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {isMounted ? (
        <Tilt
          tiltMaxAngleX={12}
          tiltMaxAngleY={12}
          scale={1.04}
          transitionSpeed={180}
          glareEnable
          glareMaxOpacity={isDark ? 0.18 : 0.12}
          glareColor={isDark ? '#ffffff' : '#000000'}
          glareBorderRadius="1rem"
          className="h-full overflow-hidden rounded-2xl"
          style={{ borderRadius: '1rem', overflow: 'hidden' }}
        >
          {cardContent}
        </Tilt>
      ) : (
        <div className="h-full overflow-hidden rounded-2xl">{cardContent}</div>
      )}
    </motion.div>
  );
}

