'use client';

import { motion, type Variants } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

const wordContainer: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.04, delayChildren: delay },
  }),
};

const wordVariant: Variants = {
  hidden: { y: 40, opacity: 0, rotateX: -40 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function AnimatedText({ text, className = '', delay = 0 }: AnimatedTextProps) {
  const words = text.split(' ');

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={wordContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      custom={delay}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block mr-[0.3em] overflow-hidden">
          <motion.span className="inline-block" variants={wordVariant}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
