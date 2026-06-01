
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
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import type { IconType } from 'react-icons';

import AnimatedText from '../components/AnimatedText';
import useTheme from '../hooks/useTheme';
import { useScrollReveal } from '../hooks/useScrollReveal';

type Skill = {
  name: string;
  level: number;
  icon: IconType;
  color: string;
};

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', level: 90, icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', level: 85, icon: SiCss, color: '#1572B6' },
      { name: 'JavaScript', level: 80, icon: SiJavascript, color: '#F7DF1E' },
      { name: 'React', level: 75, icon: SiReact, color: '#61DAFB' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 75, icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', level: 70, icon: SiExpress, color: '#888888' },
      { name: 'MongoDB', level: 70, icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'GitHub', level: 80, icon: SiGithub, color: '#888888' },
      { name: 'VS Code', level: 90, icon: VscVscode, color: '#007ACC' },
      { name: 'Postman', level: 75, icon: SiPostman, color: '#FF6C37' },
    ],
  },
];

function SkillCard({
  category,
  skills,
  visible,
  isDark,
}: {
  category: string;
  skills: Skill[];
  visible: boolean;
  isDark: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-5 ${
        isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
      }`}
    >
      <h3
        className={`text-lg font-bold mb-5 ${
          isDark ? 'text-white' : 'text-black'
        }`}
      >
        {category}
      </h3>

      <div className="space-y-4">
        {skills.map(({ name, level, icon: Icon, color }, index) => (
          <div key={name}>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <Icon size={18} style={{ color }} />
                <span className={`text-sm ${isDark ? 'text-white' : 'text-black'}`}>
                  {name}
                </span>
              </div>

              <span className={`text-xs ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                {level}%
              </span>
            </div>

            <div
              className={`h-2 rounded-full overflow-hidden ${
                isDark ? 'bg-white/10' : 'bg-black/10'
              }`}
            >
              <motion.div
                className="h-full bg-blue-500"
                initial={{ width: 0 }}
                animate={visible ? { width: `${level}%` } : { width: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, visible } = useScrollReveal();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="skills"
      ref={ref as any}
      className={`py-20 px-6 transition-colors duration-300 ${
        isDark ? 'bg-black' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className={`text-sm mb-2 ${isDark ? 'text-white/50' : 'text-black/50'}`}>
            02 / SKILLS
          </p>

          <h2
            className={`text-3xl md:text-5xl font-bold ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            <AnimatedText text="Technical Skills" />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <SkillCard
              key={group.category}
              category={group.category}
              skills={group.skills}
              visible={visible}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
