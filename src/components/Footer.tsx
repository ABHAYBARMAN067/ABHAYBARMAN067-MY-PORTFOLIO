'use client';

const socials = [
  {
    href: 'https://github.com/ABHAYBARMAN067',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/abhay-barman-9a0b3a277/',
    label: 'LinkedIn',
  },
  {
    href: 'https://codepen.io/Abhay-Barman',
    label: 'CodePen',
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 px-6 py-8 text-center">
        
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Abhay Barman. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {socials.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400"
            >
              {label}
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-500">
          Built with Next.js
        </p>

      </div>
    </footer>
  );
}