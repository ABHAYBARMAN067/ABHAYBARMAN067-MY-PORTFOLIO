'use client';

import { Github, Linkedin, Codepen } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: Codepen, href: 'https://codepen.io/yourusername', label: 'CodePen' },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left: Copyright */}
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span suppressHydrationWarning>&copy; {new Date().getFullYear()}</span> Abhay Barman.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              All rights reserved.
            </p>
          </div>

          {/* Center: Built With */}
          <div className="md:text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Built with Next.js, Tailwind CSS & GSAP
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="flex justify-start md:justify-end gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}