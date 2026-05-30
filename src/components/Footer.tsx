'use client';

import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa';

const socials = [
  { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: FaCodepen, href: 'https://codepen.io/yourusername', label: 'CodePen' },
];

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          {/* Left: Copyright */}
          <div>
            <p>
              <span suppressHydrationWarning>&copy; {new Date().getFullYear()}</span> Abhay Barman.
            </p>
            <p>
              All rights reserved.
            </p>
          </div>

          {/* Center: Built With */}
          <div>
            <p>
              Built with Next.js & GSAP
            </p>
          </div>

          {/* Right: Social Links */}
          <div>
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
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
