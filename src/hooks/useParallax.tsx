import { useEffect, useState } from 'react';

export const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

export const useScrollAnimation = () => {
  const [elements, setElements] = useState<Map<string, boolean>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-scroll-id');
          if (id) {
            setElements(prev => new Map(prev.set(id, entry.isIntersecting)));
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    const elementsToObserve = document.querySelectorAll('[data-scroll-id]');
    elementsToObserve.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return elements;
};