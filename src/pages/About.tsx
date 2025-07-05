import React from 'react';
import Navigation from '@/components/Navigation';
import ParallaxSection from '@/components/ParallaxSection';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <ParallaxSection 
        className="py-16 px-4 church-gradient text-white"
        backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
        overlay
        speed={0.3}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 scroll-animate" data-scroll-id="about-title">
            About Grace Community Church
          </h1>
          <p className="text-xl opacity-90 scroll-slide-left" data-scroll-id="about-subtitle">
            Discover our story, mission, and the values that guide our community
          </p>
        </div>
      </ParallaxSection>

      {/* Mission & Vision */}
      <ParallaxSection className="py-16 px-4" patternOverlay>
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="floating-shadow scroll-slide-left" data-scroll-id="mission-card">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="leading-relaxed">
                  To create a vibrant community where people can encounter God's love, grow in faith, 
                  and serve others with purpose. We are committed to making disciples who make disciples 
                  through authentic worship, biblical teaching, and compassionate service.
                </p>
              </CardContent>
            </Card>

            <Card className="floating-shadow scroll-slide-right" data-scroll-id="vision-card">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="leading-relaxed">
                  To be a church that transforms lives and communities through the power of God's love. 
                  We envision a place where everyone feels welcomed, valued, and empowered to discover 
                  their God-given purpose and make a meaningful impact in the world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </ParallaxSection>

      {/* Our Story */}
      <ParallaxSection 
        className="py-16 px-4 bg-secondary/20"
        backgroundImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop"
        overlay
        speed={0.4}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl font-semibold text-center mb-12 text-primary scroll-animate" data-scroll-id="story-title">
            Our Story
          </h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <div className="scroll-animate" data-scroll-id="story-p1">
              <p className="mb-6">
                Grace Community Church was founded in 1995 with a simple but powerful vision: to create 
                a place where people could experience God's unconditional love and find their purpose in life. 
                What started as a small gathering of families has grown into a thriving community of believers 
                from all walks of life.
              </p>
            </div>
            <div className="scroll-slide-left" data-scroll-id="story-p2">
              <p className="mb-6">
                Over the years, we've remained committed to our core values of faith, fellowship, and service. 
                We've seen countless lives transformed, families restored, and communities impacted through 
                the work we do together. Our church is more than a building – it's a family united by our 
                shared love for God and each other.
              </p>
            </div>
            <div className="scroll-slide-right" data-scroll-id="story-p3">
              <p>
                Today, we continue to grow and evolve while staying true to our foundational beliefs. 
                We're excited about the future and the opportunities God has in store for our community.
              </p>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Core Beliefs */}
      <ParallaxSection className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl font-semibold text-center mb-12 text-primary scroll-animate" data-scroll-id="beliefs-title">
            Core Beliefs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Scripture",
                description: "We believe the Bible is God's inspired Word and the ultimate authority for faith and life."
              },
              {
                title: "Salvation",
                description: "We believe salvation comes through faith in Jesus Christ alone, by grace through faith."
              },
              {
                title: "Community",
                description: "We believe in the importance of authentic Christian community and fellowship."
              },
              {
                title: "Service",
                description: "We believe in serving others as an expression of God's love and our faith."
              }
            ].map((belief, index) => (
              <Card 
                key={belief.title} 
                className={`floating-shadow hover:scale-105 transition-all duration-500 ${
                  index % 2 === 0 ? 'scroll-slide-left' : 'scroll-slide-right'
                }`}
                data-scroll-id={`belief-${index}`}
              >
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-primary">{belief.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>{belief.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default About;