import type Lenis from 'lenis';

let lenis: Lenis | null = null;

const NAV_OFFSET = -88;

export function registerLenis(instance: Lenis) {
  lenis = instance;
}

export function unregisterLenis() {
  lenis = null;
}

export function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (!el) return;

  if (lenis) {
    lenis.scrollTo(el, { offset: NAV_OFFSET, programmatic: true });
    return;
  }

  const top = el.getBoundingClientRect().top + window.scrollY + NAV_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}
