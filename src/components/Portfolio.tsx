'use client';

import { Code, ExternalLink } from 'lucide-react';
import type { CSSProperties } from 'react';

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

const sectionStyle = {
  padding: '80px 20px',
  background: '#f6f7f9',
} satisfies CSSProperties;

const containerStyle = {
  maxWidth: '1100px',
  margin: '0 auto',
} satisfies CSSProperties;

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: '24px',
} satisfies CSSProperties;

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '24px',
  border: '1px solid #dde1e7',
  borderRadius: '8px',
  background: '#ffffff',
} satisfies CSSProperties;

const tagWrapStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
} satisfies CSSProperties;

const tagStyle = {
  padding: '5px 10px',
  borderRadius: '999px',
  background: '#e8f1ff',
  color: '#185abc',
  fontSize: '12px',
  fontWeight: 600,
} satisfies CSSProperties;

const actionsStyle = {
  display: 'flex',
  gap: '12px',
  marginTop: 'auto',
} satisfies CSSProperties;

const linkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '10px 12px',
  border: '1px solid #cfd6e0',
  borderRadius: '6px',
  fontWeight: 600,
} satisfies CSSProperties;

export default function Portfolio() {
  return (
    <section id="projects" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '12px' }}>Featured Projects</h2>
          <p>
            A showcase of recent work across web development, interfaces, and
            problem-solving.
          </p>
        </div>

        <div style={gridStyle}>
          {projects.map((project) => (
            <article key={project.id} style={cardStyle}>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div style={tagWrapStyle}>
                {project.tags.map((tag) => (
                  <span key={tag} style={tagStyle}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={actionsStyle}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
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
                    style={linkStyle}
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
