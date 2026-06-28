'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTheme } from '../hooks/useTheme';
import { ArrowUpRight } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import ProjectCard from '../components/ProjectCard';

const projects = [


  
  {
    title: 'The Golden Shutter',
    description: 'A premium photography studio booking platform with an elegant gallery showcase, session scheduling, and client management system. Fully responsive with smooth animations.',
    image: 'images/the-golden-shutter.png',
    tech: [
      'React.js',
      'Node.js',
      'MongoDB',
      'Express.js',
      'Tailwind CSS'
    ],
    github: 'https://github.com/ABHAYBARMAN067/The-Golden-Shutter',
    live: 'https://the-golden-shutter.vercel.app/',
    category: 'Full Stack'
  },
  
  {
    title: 'BazarNow E-Commerce Platform',
    description: 'Advanced E-Commerce Platform with Multi-Role System, Enterprise-level MERN e-commerce system with User, Seller, Admin roles, RBAC, order tracking, and real-time updates.',
    image: '/images/BazarNow.png',
    tech: [
      'React 19',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'bcryptjs',
      'Nodemailer',
      'Tailwind CSS',
      'WebSocket'
    ],
    github: 'https://github.com/ABHAYBARMAN067/BazarNow',
    live: '#',
    category: 'Full Stack',
    featured: true,
    createdAt: '2026'
  },

  {
    title: 'TripNest - Travel Listing Platform',
    description: 'A full-stack Airbnb-inspired travel booking platform built with Next.js and TypeScript. Features secure authentication, property listings, booking management, reviews, interactive maps, wishlist, and host dashboard functionality.',
    image: '/images/tripnest.png',
    tech: [
      'Next.js',
      'TypeScript',
      'MongoDB',
      'NextAuth.js',
      'Tailwind CSS',
      'Cloudinary',
      'Leaflet'
    ],
    github: 'https://github.com/ABHAYBARMAN067/TripNext',
    live: '#',
    category: 'Full Stack'
  },


  {
    title: 'Hotel Reservation Form with Admin Panel',
    description: 'A full-stack web application for hotel and restaurant management. Users can browse menu items, register/login, place food orders (dine-in or delivery), and book hotel rooms with reservations. It also includes a powerful admin panel to manage orders, reservations, and user activities efficiently.',
    image: '/images/apnakitchen.png',
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'bcryptjs',
      'Tailwind CSS',
      'Vite'
    ],
    github: 'https://github.com/ABHAYBARMAN067/hotel-table-booking-system',
    live: 'https://hotel-table-booking-system.vercel.app/',
    category: 'Full Stack'
  },

  {
    title: 'IIT Bombay Techfest Landing Page',
    description: 'A modern, responsive, and animated landing page for Techfest IIT Bombay built using HTML, CSS, and JavaScript with GSAP animations, scroll effects, and mobile-friendly navigation.',
    image: '/images/techfest.png',
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'GSAP',
      'ScrollTrigger'
    ],
    github: 'https://github.com/ABHAYBARMAN067/IIT-BOMBAY-TASK-2',
    live: 'https://iit-bombay-task-2.vercel.app/',
    category: 'Frontend'
  },

  {
    title: 'Coming Soon',
    description: 'An exciting new project is currently under development. Stay tuned for updates and upcoming features.',
    image: '/images/coming-soon.png',
    tech: [],
    github: '#',
    live: '#',
    category: 'Frontend'
  }
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
