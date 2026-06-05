'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTheme } from '../hooks/useTheme';
import AnimatedText from '../components/AnimatedText';

export default function About() {
  const { ref, visible } = useScrollReveal();
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <section
      id="about"
      ref={ref}
      className={`py-28 px-6 relative overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-black' : 'bg-light-bg'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <p
                className={`font-mono text-xs tracking-widest mb-4 ${
                  isDark ? 'text-white/30' : 'text-black/30'
                }`}
              >
                01 / ABOUT
              </p>

              <h2
                className={`text-4xl sm:text-5xl font-black tracking-tight mb-6 ${
                  isDark ? 'text-white' : 'text-black'
                }`}
              >
                <AnimatedText text="Crafting Digital" delay={0.1} />
                <br />
                <AnimatedText
                  text="Experiences"
                  className="text-gradient"
                  delay={0.3}
                />
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className={`space-y-4 leading-relaxed ${
                isDark ? 'text-white/50' : 'text-black/50'
              }`}
            >
              <p>
                I'm{' '}
                <strong
                  className={`font-semibold ${
                    isDark ? 'text-white' : 'text-black'
                  }`}
                >
                  Abhay Barman
                </strong>
                , a passionate MERN Stack Developer who loves building
                full-stack web applications.
              </p>

              <p>
                My journey started with curiosity about how the web works and
                evolved into building real-world applications.
              </p>

              <p>
                I focus on writing clean, scalable, and efficient code.
              </p>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
              alt="Coding Animation"
              className="w-full max-w-md rounded-2xl shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}