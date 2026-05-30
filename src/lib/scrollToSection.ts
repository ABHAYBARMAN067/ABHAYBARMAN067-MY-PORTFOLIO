'use client';

export function scrollToSection(sectionId: string) {
  const id = sectionId.replace(/^#/, '');
  const el = document.getElementById(id);

  if (!el) return;

  // If you later add a fixed navbar, adjust this offset.
  const offset = 0;
  const rect = el.getBoundingClientRect();
  const top = window.scrollY + rect.top - offset;

  window.scrollTo({ top, behavior: 'smooth' });
}

