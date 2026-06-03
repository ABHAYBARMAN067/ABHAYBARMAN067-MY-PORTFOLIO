'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTheme } from '../hooks/useTheme';
import { Mail, Phone, Github, Linkedin, Code2, Send, Check } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import MagneticButton from '../components/MagneticButton';
import ClientOnly from '../components/ClientOnly';

const contactInfo = [
  { 
    icon: Mail, 
    label: 'Email', 
    value: 'abhaybarman067@gmail.com', 
    href: 'mailto:abhaybarman067@gmail.com' 
  },
  { 
    icon: Phone, 
    label: 'Phone', 
    value: '+91 9713466791', 
    href: 'tel:+919713466791' 
  },
];
const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/ABHAYBARMAN067' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhay-barman-9a0b3a277/' },
  // { icon: Code2, label: 'LeetCode', href: 'https://leetcode.com/abhaybarman' },
];

const contactFallbackMessage = 'Please send mail to my email ID';

export default function Contact() {
  const { ref, visible } = useScrollReveal();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSending(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error(contactFallbackMessage);
      }

      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setError(contactFallbackMessage);
    } finally {
      setSending(false);
    }
  };

  const formSkeleton = (
    <motion.div
      className="glass rounded-2xl p-6 sm:p-8 space-y-5"
      aria-hidden
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <motion.div className={`h-[72px] rounded-lg ${isDark ? 'bg-white/5' : 'bg-black/5'}`} />
        <motion.div className={`h-[72px] rounded-lg ${isDark ? 'bg-white/5' : 'bg-black/5'}`} />
      </div>
      <motion.div className={`h-40 rounded-lg ${isDark ? 'bg-white/5' : 'bg-black/5'}`} />
      <motion.div className={`h-12 rounded-lg ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
    </motion.div>
  );

  const inputCls = `w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-all duration-200 resize-none ${
    isDark
      ? 'bg-white/[0.04] border border-white/8 text-white placeholder-white/20 focus:border-white/30 focus:bg-white/[0.06]'
      : 'bg-black/[0.03] border border-black/8 text-black placeholder-black/20 focus:border-black/30 focus:bg-black/[0.05]'
  }`;

  return (
    <section id="contact" ref={ref} className={`py-28 px-6 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-light-bg'}`}>
      <div className="max-w-7xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-16">
          <p className={`font-mono text-xs tracking-widest mb-4 ${isDark ? 'text-white/30' : 'text-black/30'}`}>06 / CONTACT</p>
          <h2 className={`text-4xl sm:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>
            <AnimatedText text="Let's Connect" delay={0.1} />
          </h2>
          <motion.p className={`mt-4 max-w-lg text-base leading-relaxed ${isDark ? 'text-white/40' : 'text-black/40'}`} initial={{ opacity: 0, y: 10 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}>
            Have a project in mind, want to collaborate, or just want to say hello? My inbox is always open.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div className="lg:col-span-2 space-y-6" initial={{ opacity: 0, x: -30 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <MagneticButton key={label} strength={0.15}>
                <motion.a href={href} className="group flex items-center gap-4 glass rounded-xl p-4 glass-hover" whileHover={{ x: 6 }}>
                  <motion.div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isDark ? 'bg-white/5 group-hover:bg-white/10' : 'bg-black/5 group-hover:bg-black/10'}`} whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.4 }}>
                    <Icon size={18} className={isDark ? 'text-white/60' : 'text-black/60'} />
                  </motion.div>
                  <div>
                    <p className={`text-xs font-mono uppercase tracking-widest ${isDark ? 'text-white/25' : 'text-black/25'}`}>{label}</p>
                    <p className={`text-sm transition-colors ${isDark ? 'text-white/70 group-hover:text-white' : 'text-black/70 group-hover:text-black'}`}>{value}</p>
                  </div>
                </motion.a>
              </MagneticButton>
            ))}

            <div className="pt-2">
              <p className={`text-xs font-mono uppercase tracking-widest mb-3 ${isDark ? 'text-white/25' : 'text-black/25'}`}>Social</p>
              <div className="flex gap-2">
                {socials.map(({ icon: Icon, label, href }) => (
                  <MagneticButton key={label} strength={0.35}>
                    <motion.a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={`w-10 h-10 glass rounded-lg flex items-center justify-center glass-hover ${isDark ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'}`} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                      <Icon size={17} />
                    </motion.a>
                  </MagneticButton>
                ))}
              </div>
            </div>

            {/* <motion.div className="glass rounded-xl p-5" style={{ border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` }} whileHover={{ scale: 1.01, y: -2 }} transition={{ type: 'spring', stiffness: 200 }}>
              <div className="flex items-center gap-2 mb-2">
                <motion.span className="w-2 h-2 rounded-full bg-green-400" animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-black'}`}>Open to Opportunities</span>
              </div>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-white/30' : 'text-black/30'}`}>Open to full-time roles, freelance projects, and exciting collaborations.</p>
            </motion.div> */}
          </motion.div>

          <motion.div className="lg:col-span-3" initial={{ opacity: 0, x: 30 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <ClientOnly fallback={formSkeleton}>
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={`block text-xs font-mono uppercase tracking-widest mb-2 ${isDark ? 'text-white/30' : 'text-black/30'}`}>Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} placeholder="Your name" required className={`${inputCls} ${focused === 'name' ? (isDark ? 'border-white/30' : 'border-black/30') : ''}`} />
                </div>
                <div>
                  <label className={`block text-xs font-mono uppercase tracking-widest mb-2 ${isDark ? 'text-white/30' : 'text-black/30'}`}>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} placeholder="your@email.com" required className={`${inputCls} ${focused === 'email' ? (isDark ? 'border-white/30' : 'border-black/30') : ''}`} />
                </div>
              </div>
              <div>
                <label className={`block text-xs font-mono uppercase tracking-widest mb-2 ${isDark ? 'text-white/30' : 'text-black/30'}`}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} placeholder="Tell me about your project or idea..." required rows={6} className={`${inputCls} ${focused === 'message' ? (isDark ? 'border-white/30' : 'border-black/30') : ''}`} />
              </div>
              {error && (
                <p className="text-sm text-red-400 text-center" role="alert">
                  {error}
                </p>
              )}
              <MagneticButton strength={0.1}>
                <motion.button type="submit" disabled={sending || submitted} className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-semibold text-sm transition-all duration-300 relative overflow-hidden ${submitted ? 'bg-green-500/20 border border-green-500/30 text-green-400' : isDark ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'}`} whileHover={!submitted && !sending ? { scale: 1.01 } : {}} whileTap={!submitted && !sending ? { scale: 0.98 } : {}}>
                  {submitted ? (<><motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300 }}><Check size={16} /></motion.div>Message Sent Successfully</>) : sending ? (<><motion.div className={`w-4 h-4 border-2 rounded-full ${isDark ? 'border-black/30 border-t-black' : 'border-white/30 border-t-white'}`} animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} />Sending...</>) : (<><Send size={16} />Send Message</>)}
                </motion.button>
              </MagneticButton>
              </form>
            </ClientOnly>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
