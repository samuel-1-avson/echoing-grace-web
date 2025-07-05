import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import heroImage from "@/assets/church-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Church Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          Welcome to Grace Community Church
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up [animation-delay:0.2s]">
          A place where faith, fellowship, and service unite to create a vibrant community
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:0.4s]">
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-3">
            <Link to="/about">Learn More</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg px-8 py-3 bg-white/10 text-white border-white/30 hover:bg-white/20">
            <Link to="/events">Join Us Sunday</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;