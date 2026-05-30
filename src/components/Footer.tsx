'use client';

import { Github, Linkedin, Codepen } from 'lucide-react';
import { useTheme } from 'next-themes';

const socials = [
  { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: Codepen, href: 'https://codepen.io/yourusername', label: 'CodePen' },
];

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer>
      <div>
        <div>
          <span suppressHydrationWarning>&copy; {new Date().getFullYear()}</span> Abhay Barman. All rights reserved.
        </div>
        
        <div>
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p>
          Built with Next.js, Tailwind CSS & GSAP
        </p>
      </div>
    </footer>
  );
}