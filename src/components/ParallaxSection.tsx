import React, { useEffect, useRef } from 'react';
import { useParallax, useScrollAnimation } from '@/hooks/useParallax';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
  speed?: number;
  overlay?: boolean;
  patternOverlay?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = '',
  backgroundImage,
  speed = 0.5,
  overlay = false,
  patternOverlay = false
}) => {
  const scrollY = useParallax();
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollAnimations = useScrollAnimation();

  useEffect(() => {
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('[data-scroll-id]');
      elements.forEach((element, index) => {
        const id = element.getAttribute('data-scroll-id');
        const isVisible = id && scrollAnimations.get(id);
        
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    }
  }, [scrollAnimations]);

  return (
    <section ref={sectionRef} className={`relative overflow-hidden parallax-container ${className}`}>
      {backgroundImage && (
        <div 
          className="absolute inset-0 z-0 parallax-layer"
          style={{
            transform: `translateY(${scrollY * speed}px)`,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
      )}
      
      {overlay && (
        <div 
          className="absolute inset-0 z-1 bg-gradient-to-b from-background/80 to-background/60"
          style={{
            transform: `translateY(${scrollY * (speed * 0.5)}px)`,
          }}
        />
      )}

      {patternOverlay && (
        <div 
          className="absolute inset-0 z-2 church-pattern opacity-5"
          style={{
            transform: `translateY(${scrollY * (speed * 0.3)}px)`,
          }}
        />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;