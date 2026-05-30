'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 20px',
        background: 'white',
      }}
    >
      {/* Logo */}
      <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        AB
      </div>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: '15px' }}>
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Mobile Button */}
      <button onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: 60,
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '20px',
            background: 'white',
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}