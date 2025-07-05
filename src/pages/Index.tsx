import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ParallaxSection from '@/components/ParallaxSection';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Calendar, Users, Church } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* Welcome Section with Parallax */}
      <ParallaxSection className="py-16 px-4" patternOverlay>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 
            className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-primary scroll-animate"
            data-scroll-id="welcome-title"
          >
            Experience God's Love in Community
          </h2>
          <p 
            className="text-lg text-muted-foreground mb-8 leading-relaxed scroll-slide-left"
            data-scroll-id="welcome-text"
          >
            At Grace Community Church, we believe in the power of authentic relationships, meaningful worship, 
            and serving our community. Whether you're seeking spiritual growth, looking for fellowship, or 
            wanting to make a difference, you'll find your place here.
          </p>
        </div>
      </ParallaxSection>

      {/* Quick Links with Enhanced Parallax */}
      <ParallaxSection className="py-16 px-4 bg-secondary/20" overlay speed={0.3}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card 
              className="floating-shadow hover:scale-105 transition-all duration-500 scroll-scale"
              data-scroll-id="card-1"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full church-gradient flex items-center justify-center float">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Sunday Service</h3>
                <p className="text-muted-foreground mb-4">
                  Join us every Sunday at 10:00 AM for worship, fellowship, and inspiring messages.
                </p>
                <Button asChild variant="outline" className="hover:scale-105 transition-transform">
                  <Link to="/events">View Schedule</Link>
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="floating-shadow hover:scale-105 transition-all duration-500 scroll-scale"
              data-scroll-id="card-2"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full church-gradient flex items-center justify-center float-delayed">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Connect Groups</h3>
                <p className="text-muted-foreground mb-4">
                  Build meaningful relationships through our small groups and community ministries.
                </p>
                <Button asChild variant="outline" className="hover:scale-105 transition-transform">
                  <Link to="/ministries">Join A Group</Link>
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="floating-shadow hover:scale-105 transition-all duration-500 scroll-scale"
              data-scroll-id="card-3"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full church-gradient flex items-center justify-center float">
                  <Church className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Get Involved</h3>
                <p className="text-muted-foreground mb-4">
                  Discover ways to serve and make a difference in our church and community.
                </p>
                <Button asChild variant="outline" className="hover:scale-105 transition-transform">
                  <Link to="/ministries">Serve With Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </ParallaxSection>

      {/* Stats Section with Parallax Background */}
      <ParallaxSection 
        className="py-20 px-4" 
        backgroundImage="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&h=1080&fit=crop"
        overlay
        speed={0.2}
      >
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 
            className="font-heading text-3xl md:text-4xl font-semibold mb-12 scroll-animate"
            data-scroll-id="stats-title"
          >
            Our Growing Community
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="scroll-slide-left"
              data-scroll-id="stat-1"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">500+</div>
              <div className="text-lg opacity-90">Active Members</div>
            </div>
            <div 
              className="scroll-scale"
              data-scroll-id="stat-2"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">15+</div>
              <div className="text-lg opacity-90">Ministries</div>
            </div>
            <div 
              className="scroll-slide-right"
              data-scroll-id="stat-3"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">28</div>
              <div className="text-lg opacity-90">Years Serving</div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Call to Action */}
      <ParallaxSection className="py-16 px-4 church-gradient text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 
            className="font-heading text-3xl md:text-4xl font-semibold mb-6 scroll-animate"
            data-scroll-id="cta-title"
          >
            Ready to Join Our Family?
          </h2>
          <p 
            className="text-xl mb-8 opacity-90 scroll-slide-left"
            data-scroll-id="cta-text"
          >
            Come as you are and discover the love, purpose, and community you've been searching for.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center scroll-scale"
            data-scroll-id="cta-buttons"
          >
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-3 floating-shadow hover:scale-105 transition-all duration-300">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-3 bg-white/10 text-white border-white/30 hover:bg-white/20 floating-shadow hover:scale-105 transition-all duration-300">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </ParallaxSection>

      {/* Enhanced Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 church-pattern opacity-5"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h3 className="font-heading text-2xl font-semibold mb-4">Grace Community Church</h3>
          <p className="mb-4">123 Faith Street, Community City, CC 12345</p>
          <p className="mb-6">Sunday Service: 10:00 AM | Phone: (555) 123-4567</p>
          <div className="flex justify-center space-x-6">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <span className="text-sm">FB</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <span className="text-sm">IG</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <span className="text-sm">YT</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
