'use client';

import AnimatedText from '../components/AnimatedText';
import ProjectCard from '../components/ProjectCard';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'TripNest',
    description: 'Airbnb-style booking platform with maps & auth.',
    image: '/images/tripnest.png',
    tech: ['Next.js', 'TypeScript', 'MongoDB'],
    github: 'https://github.com/ABHAYBARMAN067/TripNext',
    live: '#',
  },
  {
    title: 'Techfest IIT Bombay',
    description: 'Animated landing page with GSAP.',
    image: '/images/techfest.png',
    tech: ['HTML', 'CSS', 'GSAP'],
    github: '#',
    live: '#',
  },
  {
    title: 'BazarNow',
    description: 'Full-stack e-commerce platform.',
    image: '/images/BazarNow.png',
    tech: ['MERN', 'WebSocket'],
    github: '#',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 flex justify-between items-end">
          <h2 className="text-4xl font-black">
            <AnimatedText text="Featured Work" />
          </h2>

          <a
            href="https://github.com/ABHAYBARMAN067"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100"
          >
            View GitHub <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}