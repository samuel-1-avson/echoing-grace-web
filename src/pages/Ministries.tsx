import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Church, Mail } from 'lucide-react';

const Ministries = () => {
  const ministries = [
    {
      name: "Youth Ministry",
      description: "Empowering young people to grow in faith through fun activities, Bible study, and community service.",
      age: "Ages 13-18",
      schedule: "Fridays 7:00 PM",
      leader: "Pastor Sarah Thompson",
      icon: Users
    },
    {
      name: "Children's Ministry",
      description: "Creative and engaging programs designed to help children discover God's love in age-appropriate ways.",
      age: "Ages 3-12",
      schedule: "Sundays 10:00 AM",
      leader: "Lisa Park",
      icon: Church
    },
    {
      name: "Worship Team",
      description: "Leading our congregation in meaningful worship through music, vocals, and technical excellence.",
      age: "All Ages",
      schedule: "Wednesdays 7:00 PM",
      leader: "David Chen",
      icon: Calendar
    },
    {
      name: "Community Outreach",
      description: "Serving our local community through food drives, homeless assistance, and neighborhood events.",
      age: "All Ages",
      schedule: "Monthly Events",
      leader: "Maria Rodriguez",
      icon: Users
    },
    {
      name: "Prayer Team",
      description: "Interceding for our church, community, and world through organized prayer initiatives.",
      age: "All Ages",
      schedule: "Tuesdays 6:30 AM",
      leader: "Elder Team",
      icon: Church
    },
    {
      name: "Adult Bible Study",
      description: "Deep dive into Scripture with fellow believers in a supportive small group environment.",
      age: "Adults",
      schedule: "Thursdays 7:00 PM",
      leader: "Pastor Michael Johnson",
      icon: Calendar
    }
  ];

  const programs = [
    {
      title: "Marriage Ministry",
      description: "Supporting couples through pre-marital counseling, marriage retreats, and ongoing support groups."
    },
    {
      title: "Senior Saints",
      description: "Fellowship and activities designed specifically for our senior members with weekly gatherings."
    },
    {
      title: "Men's Fellowship",
      description: "Building strong Christian brotherhood through regular meetings, activities, and accountability."
    },
    {
      title: "Women's Circle",
      description: "Encouraging women of all ages through Bible study, fellowship, and mutual support."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 church-gradient text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ministries & Departments
          </h1>
          <p className="text-xl opacity-90 animate-fade-in [animation-delay:0.2s]">
            Find your place to serve, grow, and connect in our vibrant community
          </p>
        </div>
      </section>

      {/* Main Ministries */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl font-semibold text-center mb-12 text-primary animate-fade-in">
            Core Ministries
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => {
              const IconComponent = ministry.icon;
              return (
                <Card key={ministry.name} className={`warm-shadow hover:scale-105 transition-transform duration-300 animate-fade-in [animation-delay:${0.1 * index}s]`}>
                  <CardHeader>
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full church-gradient flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="font-heading text-xl text-center text-primary">
                      {ministry.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {ministry.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium">Age Group:</span>
                        <span className="text-muted-foreground">{ministry.age}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Schedule:</span>
                        <span className="text-muted-foreground">{ministry.schedule}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Leader:</span>
                        <span className="text-muted-foreground">{ministry.leader}</span>
                      </div>
                    </div>
                    <Button className="mt-4 w-full" variant="outline">
                      Get Involved
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl font-semibold text-center mb-12 text-primary animate-fade-in">
            Special Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <Card key={program.title} className={`warm-shadow animate-fade-in [animation-delay:${0.1 * index}s]`}>
                <CardHeader>
                  <CardTitle className="font-heading text-lg text-primary">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl font-semibold mb-6 text-primary animate-fade-in">
            Ready to Get Involved?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in [animation-delay:0.2s]">
            Whether you're looking to serve, learn, or connect with others, there's a place for you in our ministries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Mail className="h-5 w-5 mr-2" />
              Contact Ministry Leader
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              View All Opportunities
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ministries;