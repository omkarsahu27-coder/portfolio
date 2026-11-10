export function initReveal() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal');

  // Progressive enhancement & Accessibility check
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target); // Only animate once
      }
    });
  }, { 
    threshold: 0.15, 
    rootMargin: '0px 0px -50px 0px' 
  });

  revealElements.forEach(el => observer.observe(el));
}