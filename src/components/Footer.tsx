'use client';

const socials = [
  { href: 'https://github.com/ABHAYBARMAN067', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/abhay-barman-9a0b3a277/', label: 'LinkedIn' },
  { href: 'https://codepen.io/Abhay-Barman', label: 'CodePen' },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left text */}
        <p className="text-sm text-black/60 dark:text-white/50 text-center md:text-left">
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-black dark:text-white">
            Abhay Barman
          </span>
          . All rights reserved.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-6">
          {socials.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-black/60 dark:text-white/50 hover:text-black dark:hover:text-white transition"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right text */}
        <p className="text-xs text-black/40 dark:text-white/40">
          Built with Next.js ⚡
        </p>

      </div>
    </footer>
  );
}