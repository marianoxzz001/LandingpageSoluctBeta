import { useEffect } from 'react';

export default function ScrollEffects() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const hero = document.querySelector('#hero');
    const layers = [
      { node: document.querySelector('#solucoes'), speed: 0.10 },
      { node: document.querySelector('#sobre'), speed: 0.23 },
      { node: document.querySelector('#contato'), speed: 0.15 },
    ];
    const targets = layers.flatMap(({ node }) => [...node.querySelectorAll('h2, h2 + p, .effect-card, .team-profile')]);
    const properties = ['--content-drift', '--card-drift', '--parallax'];
    let frame = 0;
    const clamp = (value, limit) => Math.max(-limit, Math.min(limit, value));
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    const clear = () => {
      hero.style.removeProperty('--hero-drift');
      hero.style.removeProperty('--art-drift');
      layers.forEach(({ node }) => {
        node.firstElementChild.classList.remove('scroll-content');
        properties.forEach(property => node.style.removeProperty(property));
      });
    };
    const update = () => {
      frame = 0;
      if (media.matches) return;
      const compact = innerWidth < 761;
      const intensity = compact ? 0.45 : 1;
      const heroRect = hero.getBoundingClientRect();
      if (heroRect.bottom > -100 && heroRect.top < innerHeight) {
        const progress = Math.max(0, -heroRect.top);
        hero.style.setProperty('--hero-drift', `${Math.min(90, progress * 0.14) * intensity}px`);
        hero.style.setProperty('--art-drift', `${Math.min(180, progress * 0.30) * intensity}px`);
      }
      for (const { node, speed } of layers) {
        const rect = node.getBoundingClientRect();
        if (rect.bottom > -150 && rect.top < innerHeight + 150) {
          const offset = innerHeight / 2 - rect.top - rect.height / 2;
          node.style.setProperty('--content-drift', `${clamp(offset * speed, 85) * intensity}px`);
          node.style.setProperty('--card-drift', `${clamp(offset * -0.075, 24) * intensity}px`);
          node.style.setProperty('--parallax', `${clamp(offset * 0.38, 190) * intensity}px`);
        }
      }
    };
    const scroll = () => { if (!frame && !media.matches) frame = requestAnimationFrame(update); };
    const configure = () => {
      observer.disconnect(); cancelAnimationFrame(frame); frame = 0;
      clear();
      targets.forEach((element, index) => {
        if (media.matches) element.classList.remove('reveal', 'revealed');
        else {
          element.classList.add('reveal');
          element.style.setProperty('--reveal-delay', `${index % 3 * 65}ms`);
          observer.observe(element);
        }
      });
      if (!media.matches) {
        layers.forEach(({ node }) => node.firstElementChild.classList.add('scroll-content'));
        update();
      }
    };
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('resize', scroll);
    media.addEventListener('change', configure);
    configure();
    return () => {
      observer.disconnect(); cancelAnimationFrame(frame); clear();
      window.removeEventListener('scroll', scroll); window.removeEventListener('resize', scroll);
      media.removeEventListener('change', configure);
      targets.forEach(element => element.classList.remove('reveal', 'revealed'));
    };
  }, []);
  return null;
}
