'use client';

const navLinks = [
  { label: 'About', href: '#' },
  { label: 'Skills', href: '#' },
  { label: 'Projects', href: '#' },
  { label: 'Experience', href: '#' },
  { label: 'Contact', href: '#' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-light-muted/20 bg-light-bg/90 backdrop-blur-md dark:border-white/10 dark:bg-black/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-light-text text-sm font-bold text-light-bg transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-black"
        >
          AB
        </a>

        <div className="flex items-center gap-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className="rounded-full px-4 py-2 text-sm font-medium text-light-muted transition-all hover:bg-light-surface hover:text-light-text dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}