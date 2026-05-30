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
    description:
      'A modern e-commerce platform with product browsing, cart flows, and checkout integration.',
    tags: ['Next.js', 'React', 'Stripe', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task manager with real-time updates, filters, and clean project organization.',
    tags: ['React', 'Firebase', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description:
      'A dashboard for tracking metrics with charts, summary cards, and responsive data views.',
    tags: ['React', 'D3.js', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function Portfolio() {
  return (
    <section id="projects" className="bg-light-surface px-5 py-20 text-light-text dark:bg-black dark:text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl">Featured Projects</h2>
          <p className="text-light-muted dark:text-white/65">
            A showcase of recent work across web development, interfaces, and
            problem-solving.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex min-h-[280px] flex-col gap-4 rounded-lg border border-light-muted/20 bg-light-elevated p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
            >
              <div>
                <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
                <p className="leading-7 text-light-muted dark:text-white/65">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-light-surface px-3 py-1 text-xs font-semibold text-light-muted dark:bg-white/10 dark:text-white/75"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-light-muted/25 px-3 py-2 text-sm font-semibold transition hover:border-light-text/40 dark:border-white/15 dark:hover:border-white/35"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-light-muted/25 px-3 py-2 text-sm font-semibold transition hover:border-light-text/40 dark:border-white/15 dark:hover:border-white/35"
                  >
                    <Code size={16} />
                    Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
