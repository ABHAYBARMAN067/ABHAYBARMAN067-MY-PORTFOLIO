'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download, FileText } from 'lucide-react';
import useTheme from '../hooks/useTheme';
import AnimatedText from '../components/AnimatedText';

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleEmail = () => {
    const email = 'abhaybarman@example.com';
    const subject = 'Let\'s Connect';
    const body = 'Hi! I\'d like to get in touch with you.';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Abhay_Barman_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="contact"
      className={`py-28 px-6 transition-colors duration-500 ${
        isDark ? 'bg-black' : 'bg-white'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className={`text-4xl sm:text-5xl font-black mb-6 ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            <AnimatedText text="Ready to work together?" />
          </h2>

          <p
            className={`text-lg mb-12 ${
              isDark ? 'text-white/70' : 'text-black/70'
            }`}
          >
            Let&apos;s create something amazing. Feel free to reach out and let&apos;s discuss your next project!
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Get in Touch Button */}
          <motion.button
            onClick={handleEmail}
            className={`group relative px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
              isDark
                ? 'bg-white text-black hover:shadow-lg hover:shadow-white/20'
                : 'bg-black text-white hover:shadow-lg hover:shadow-black/20'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
            <span>Get in Touch</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.button>

          {/* Download Resume Button */}
          <motion.button
            onClick={handleDownload}
            className={`group relative px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
              isDark
                ? 'border-2 border-white text-white hover:bg-white hover:text-black'
                : 'border-2 border-black text-black hover:bg-black hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText size={20} />
            <span>Download Resume</span>
            <Download
              size={18}
              className="group-hover:translate-y-1 transition-transform"
            />
          </motion.button>
        </motion.div>

        {/* Additional Info */}
        <motion.p
          className={`mt-12 text-sm ${isDark ? 'text-white/40' : 'text-black/40'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Or reach me directly at{' '}
          <a
            href="mailto:abhaybarman@example.com"
            className={`font-semibold ${isDark ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'} transition`}
          >
            abhaybarman@example.com
          </a>
        </motion.p>
      </div>
    </section>
  );
}
