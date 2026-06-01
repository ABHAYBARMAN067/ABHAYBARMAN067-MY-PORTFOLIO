'use client';

import AnimatedText from '../components/AnimatedText';
import ProjectCard from '../components/ProjectCard';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'TripNest',
    description: 'Airbnb-style booking platform with maps and authentication.',
    image: '/images/tripnest.png',
    tech: ['Next.js', 'TypeScript', 'MongoDB'],
    github: 'https://github.com/ABHAYBARMAN067/TripNext',
    live: '#',
    category: 'Full Stack',
  },
 
  {
    title: 'BazarNow',
    description: 'Modern e-commerce platform built with MERN.',
    image: '/images/BazarNow.png',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: '#',
    live: '#',
    category: 'MERN',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-white text-black dark:bg-black dark:text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">
            <AnimatedText text="Featured Work" />
          </h2>

          <a
            href="https://github.com/ABHAYBARMAN067"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            View GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}