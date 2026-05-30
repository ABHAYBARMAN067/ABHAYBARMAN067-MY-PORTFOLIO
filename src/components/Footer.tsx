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
    <footer>
      <div>
        <p>
          &copy; {new Date().getFullYear()} Abhay Barman. All rights reserved.
        </p>

        <div>
          {socials.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          ))}
        </div>

        <p>Built with Next.js</p>
      </div>
    </footer>
  );
}