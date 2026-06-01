'use client';

import { Code, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce with cart & checkout.',
    tags: ['Next.js', 'React', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Task Manager',
    description: 'Real-time collaborative task app.',
    tags: ['React', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Data visualization dashboard.',
    tags: ['React', 'D3.js'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function Portfolio() {
  return (
    <section className="px-5 py-20 bg-light-surface dark:bg-black text-light-text dark:text-white">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 border rounded-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm opacity-70 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 border rounded">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {project.liveUrl && (
                <a href={project.liveUrl} className="flex items-center gap-1 text-sm">
                  <ExternalLink size={14} /> Live
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} className="flex items-center gap-1 text-sm">
                  <Code size={14} /> Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}