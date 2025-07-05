import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useParallax } from '@/hooks/useParallax';
import heroImage from "@/assets/church-hero.jpg";

const Hero = () => {
  const scrollY = useParallax();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating elements
    const createFloatingElement = (delay: number) => {
      const element = document.createElement('div');
      element.className = `absolute w-2 h-2 bg-white/20 rounded-full ${delay === 0 ? 'float' : 'float-delayed'}`;
      element.style.left = Math.random() * 100 + '%';
      element.style.top = Math.random() * 100 + '%';
      element.style.animationDelay = delay + 's';
      return element;
    };

    if (heroRef.current) {
      for (let i = 0; i < 8; i++) {
        heroRef.current.appendChild(createFloatingElement(i * 0.5));
      }
    }
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden parallax-container">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0 parallax-layer"
        style={{
          transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
        }}
      >
        <img 
          src={heroImage} 
          alt="Church Interior" 
          className="w-full h-full object-cover parallax-bg"
        />
      </div>

      {/* Gradient Overlay with Parallax */}
      <div 
        className="absolute inset-0 z-1 parallax-gradient"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      ></div>

      {/* Decorative Elements */}
      <div 
        className="absolute inset-0 z-2 church-pattern opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      ></div>

      {/* Content */}
      <div 
        className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        style={{
          transform: `translateY(${scrollY * -0.1}px)`,
        }}
      >
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          Welcome to Grace Community Church
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up [animation-delay:0.2s]">
          A place where faith, fellowship, and service unite to create a vibrant community
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:0.4s]">
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-3 floating-shadow hover:scale-105 transition-all duration-300">
            <Link to="/about">Learn More</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg px-8 py-3 bg-white/10 text-white border-white/30 hover:bg-white/20 floating-shadow hover:scale-105 transition-all duration-300">
            <Link to="/events">Join Us Sunday</Link>
          </Button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{
          transform: `translateX(-50%) translateY(${scrollY * -0.2}px)`,
        }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>

      {/* Floating Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse [animation-delay:1s]"></div>
    </section>
  );
};

export default Hero;