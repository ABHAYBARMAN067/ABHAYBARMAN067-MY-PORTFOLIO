'use client';

import Tilt from 'react-parallax-tilt';
import { Github, ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  category: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.02}
      transitionSpeed={200}
      className="h-full"
    >
      <div className="glass rounded-2xl overflow-hidden h-full border border-black/10 dark:border-white/10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />

        <div className="p-5">
          <span className="text-xs opacity-60">
            {project.category}
          </span>

          <h3 className="text-xl font-bold mt-2 mb-2">
            {project.title}
          </h3>

          <p className="text-sm opacity-70 mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded border"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <Github size={16} />
              Code
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <ExternalLink size={16} />
              Live
            </a>
          </div>
        </div>
      </div>
    </Tilt>
  );
}