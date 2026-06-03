'use client';

import { useTheme } from '../hooks/useTheme';
import AnimatedText from '../components/AnimatedText';

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="about"
      className={`py-28 px-6 transition-colors duration-500 ${
        isDark ? 'bg-black' : 'bg-light-bg'
      }`}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
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
            <AnimatedText text="Crafting Digital" />
            <br />
            <span className="text-gradient">
              <AnimatedText text="Experiences" />
            </span>
          </h2>

          <div
            className={`space-y-4 leading-relaxed ${
              isDark ? 'text-white/60' : 'text-black/60'
            }`}
          >
            <p>
              I&apos;m <strong>Abhay Barman</strong>, a MERN Stack Developer who
              loves building full-stack web applications.
            </p>

            <p>
              My journey started with curiosity about how the web works and
              evolved into building real-world projects.
            </p>

            <p>
              I focus on writing clean, scalable, and efficient code.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
            alt="Coding Animation"
            className="w-full max-w-md rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}