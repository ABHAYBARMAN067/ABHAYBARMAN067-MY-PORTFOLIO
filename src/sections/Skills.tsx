'use client';

import { motion } from 'framer-motion';
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGithub,
  SiPostman,
  SiWordpress,
  SiGit,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import type { IconType } from 'react-icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTheme } from '../hooks/useTheme';
import AnimatedText from '../components/AnimatedText';

type Skill = {
  name: string;
  level: number;
  icon: IconType;
  color: string;
};

type SkillGroup = {
  category: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', level: 95, icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', level: 90, icon: SiCss, color: '#1572B6' },
      { name: 'JavaScript', level: 88, icon: SiJavascript, color: '#F7DF1E' },
      { name: 'React.js', level: 85, icon: SiReact, color: '#61DAFB' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 82, icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', level: 80, icon: SiExpress, color: '#ffffff' },
      { name: 'MongoDB', level: 78, icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'GitHub', level: 88, icon: SiGithub, color: '#ffffff' },
      { name: 'VS Code', level: 95, icon: VscVscode, color: '#007ACC' },
      { name: 'Postman', level: 80, icon: SiPostman, color: '#FF6C37' },
    ],
  },
];

const categoryDescriptions: Record<string, string> = {
  Frontend: 'Building responsive, animated and modern user interfaces using React, Next.js and Tailwind CSS.',
  Backend: 'Creating scalable APIs, authentication systems and server-side applications using Node.js and Express.',
  Tools: 'Using modern developer tools for version control, API testing and efficient workflow management.',
};

const mainTechStack = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#ffffff' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
  { name: 'Git', icon: SiGit, color: '#F1502F' },
  { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
];

function iconColor(color: string, isDark: boolean) {
  if (isDark) return color;
  return color === '#ffffff' ? '#000000' : color;
}

function SkillBars({
  category,
  skills,
  groupIndex,
  visible,
  isDark,
  compact = false,
  preserveOriginalIconColor = false,
}: {
  category: string;
  skills: Skill[];
  groupIndex: number;
  visible: boolean;
  isDark: boolean;
  compact?: boolean;
  preserveOriginalIconColor?: boolean;
}) {
  return (
    <>
      <h3
        className={`font-mono tracking-widest uppercase ${
          compact ? 'text-[10px] mb-3' : 'text-xs mb-6'
        } ${isDark ? 'text-white/30' : 'text-black/30'}`}
      >
        {category}
      </h3>

      <div className={compact ? 'space-y-3' : 'space-y-5'}>
        {skills.map(({ name, level, icon: Icon, color }, i) => (
          <div key={name} className="relative">
            <div className="flex items-center justify-between mb-1.5">
              <div className={`flex items-center ${compact ? 'gap-2' : 'gap-3'}`}>
                <div
                  className={`rounded-lg transition-colors ${
                    compact ? 'p-1' : 'p-1.5'
                  } ${isDark ? 'bg-white/5' : 'bg-black/5'}`}
                >
                  <Icon
                    className={compact ? 'text-sm' : 'text-base'}
                    style={{ color: preserveOriginalIconColor ? color : iconColor(color, isDark) }}
                  />
                </div>
                <span
                  className={`font-medium ${
                    compact ? 'text-xs' : 'text-sm'
                  } ${isDark ? 'text-white/80' : 'text-black/70'}`}
                >
                  {name}
                </span>
              </div>
              <span
                className={`font-mono ${compact ? 'text-[10px]' : 'text-xs'} ${
                  isDark ? 'text-white/30' : 'text-black/30'
                }`}
              >
                {level}%
              </span>
            </div>

            <div
              className={`rounded-full overflow-hidden ${
                compact ? 'h-1' : 'h-1.5'
              } ${isDark ? 'bg-white/5' : 'bg-black/5'}`}
            >
              <motion.div
                className={`h-full rounded-full ${
                  isDark
                    ? 'bg-gradient-to-r from-white/60 to-white/20'
                    : 'bg-gradient-to-r from-black/60 to-black/20'
                }`}
                initial={{ width: 0 }}
                animate={visible ? { width: `${level}%` } : { width: 0 }}
                transition={{
                  duration: 1.2,
                  delay: groupIndex * 0.15 + i * 0.1 + 0.3,
                  ease: 'easeOut',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function Skills() {
  const { ref, visible } = useScrollReveal();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-14 sm:py-20 lg:py-28 px-4 sm:px-6 relative transition-colors duration-500 overflow-hidden ${
        isDark ? 'bg-black' : 'bg-light-bg'
      }`}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-8 sm:mb-14"
        >
          <p
            className={`font-mono text-xs tracking-widest mb-3 sm:mb-4 ${
              isDark ? 'text-white/30' : 'text-black/30'
            }`}
          >
            02 / SKILLS
          </p>
          <h2
            className={`text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            <AnimatedText text="Technical Arsenal" delay={0.1} />
          </h2>
        </motion.div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-20 lg:mb-32 lg:perspective-[1200px]">
          {skillGroups.map(({ category, skills }, gi) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
            >
              {/* Mobile & tablet: compact cards, skill bars only (no flip) */}
              <div
                className={`lg:hidden rounded-xl p-3.5 sm:p-5 border ${
                  isDark
                    ? 'bg-white/[0.04] border-white/10'
                    : 'bg-black/[0.03] border-black/10'
                }`}
              >
                <SkillBars
                  category={category}
                  skills={skills}
                  groupIndex={gi}
                  visible={visible}
                  isDark={isDark}
                  compact
                  preserveOriginalIconColor
                />
              </div>

              {/* Desktop: flip on hover */}
              <div className="hidden lg:block group h-[480px]">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front */}
                  <div
                    className={`absolute inset-0 rounded-2xl p-8 backface-hidden z-10 flex flex-col justify-center items-center text-center border ${
                      isDark
                        ? 'bg-white/[0.04] border-white/10'
                        : 'bg-black/[0.03] border-black/10'
                    }`}
                  >
                    <h2
                      className={`text-4xl font-black mb-6 ${
                        isDark ? 'text-white' : 'text-black'
                      }`}
                    >
                      {category}
                    </h2>
                    <p
                      className={`text-sm leading-relaxed max-w-xs ${
                        isDark ? 'text-white/60' : 'text-black/60'
                      }`}
                    >
                      {categoryDescriptions[category]}
                    </p>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 glass rounded-2xl p-8 rotate-y-180 backface-hidden">
                    <SkillBars
                      category={category}
                      skills={skills}
                      groupIndex={gi}
                      visible={visible}
                      isDark={isDark}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scrolling tech strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mt-6 sm:mt-10 lg:mt-14 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
        >
          <style>{`
            @keyframes slideLeft {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .slide-track {
              animation: slideLeft 25s linear infinite;
            }
            @media (max-width: 640px) {
              .slide-track {
                animation-duration: 18s;
              }
            }
          `}</style>

          {/* Decorative background text */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-[0.12] pointer-events-none select-none hidden md:block">
            <h3 className="text-7xl lg:text-9xl font-black uppercase tracking-tighter whitespace-nowrap">
              Technologies
            </h3>
          </div>

          {/* Fade edges */}
          <div className="relative z-10 overflow-hidden w-full">
            <div
              className={`absolute left-0 top-0 h-full w-12 sm:w-32 z-20 pointer-events-none ${
                isDark
                  ? 'bg-gradient-to-r from-black via-black/80 to-transparent'
                  : 'bg-gradient-to-r from-light-bg via-light-bg/80 to-transparent'
              }`}
            />
            <div
              className={`absolute right-0 top-0 h-full w-12 sm:w-32 z-20 pointer-events-none ${
                isDark
                  ? 'bg-gradient-to-l from-black via-black/80 to-transparent'
                  : 'bg-gradient-to-l from-light-bg via-light-bg/80 to-transparent'
              }`}
            />

            <div className="py-8 sm:py-12">
              <div className="slide-track group/track flex gap-8 sm:gap-14 md:gap-20 w-fit unique-padded-track pl-4 sm:pl-8">
                {[...mainTechStack, ...mainTechStack].map((tech, index) => (
                  <motion.div
                    key={`${tech.name}-${index}`}
                    className="group flex flex-col items-center gap-2 sm:gap-4 flex-shrink-0"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4 + (index % 5) * 0.8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.1,
                    }}
                  >
                    <div className="relative">
                      <div
                        className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full"
                        style={{ backgroundColor: tech.color }}
                      />
                      {/* Responsive Icons */}
                      <tech.icon
                        className="relative z-10 sm:hidden transition-all duration-500 group-hover:scale-110"
                        size={40}
                        style={{ color: tech.color }}
                      />
                      <tech.icon
                        className="relative z-10 hidden sm:block md:hidden transition-all duration-500 grayscale opacity-40 group-hover/track:grayscale-0 group-hover/track:opacity-100 group-hover:scale-110"
                        size={56}
                        style={{ color: iconColor(tech.color, isDark) }}
                      />
                      <tech.icon
                        className="relative z-10 hidden md:block transition-all duration-500 grayscale opacity-40 group-hover/track:grayscale-0 group-hover/track:opacity-100 group-hover:scale-110"
                        size={80}
                        style={{ color: iconColor(tech.color, isDark) }}
                      />
                    </div>
                    <span
                      className={`text-[9px] sm:text-[10px] font-mono tracking-[0.2em] uppercase opacity-50 sm:opacity-0 sm:group-hover:opacity-50 transition-all duration-300 ${
                        isDark ? 'text-white' : 'text-black'
                      }`}
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
