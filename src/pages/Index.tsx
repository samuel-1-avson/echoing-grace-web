import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
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

      {/* Welcome Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-primary animate-fade-in">
            Experience God's Love in Community
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in [animation-delay:0.2s]">
            At Grace Community Church, we believe in the power of authentic relationships, meaningful worship, 
            and serving our community. Whether you're seeking spiritual growth, looking for fellowship, or 
            wanting to make a difference, you'll find your place here.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="warm-shadow hover:scale-105 transition-transform duration-300 animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full church-gradient flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Sunday Service</h3>
                <p className="text-muted-foreground mb-4">
                  Join us every Sunday at 10:00 AM for worship, fellowship, and inspiring messages.
                </p>
                <Button asChild variant="outline">
                  <Link to="/events">View Schedule</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="warm-shadow hover:scale-105 transition-transform duration-300 animate-fade-in [animation-delay:0.2s]">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full church-gradient flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Connect Groups</h3>
                <p className="text-muted-foreground mb-4">
                  Build meaningful relationships through our small groups and community ministries.
                </p>
                <Button asChild variant="outline">
                  <Link to="/ministries">Join A Group</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="warm-shadow hover:scale-105 transition-transform duration-300 animate-fade-in [animation-delay:0.4s]">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full church-gradient flex items-center justify-center">
                  <Church className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Get Involved</h3>
                <p className="text-muted-foreground mb-4">
                  Discover ways to serve and make a difference in our church and community.
                </p>
                <Button asChild variant="outline">
                  <Link to="/ministries">Serve With Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="font-heading text-2xl font-semibold mb-4">Grace Community Church</h3>
          <p className="mb-4">123 Faith Street, Community City, CC 12345</p>
          <p>Sunday Service: 10:00 AM | Phone: (555) 123-4567</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
