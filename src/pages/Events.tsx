import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "10:00 AM - 11:30 AM",
      location: "Main Sanctuary",
      description: "Join us for inspiring worship, meaningful fellowship, and biblical teaching.",
      type: "Regular Service",
      recurring: true
    },
    {
      title: "Youth Game Night",
      date: "December 15, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Youth Center",
      description: "Fun games, pizza, and fellowship for all teens. Bring your friends!",
      type: "Youth Event",
      recurring: false
    },
    {
      title: "Christmas Eve Service",
      date: "December 24, 2024",
      time: "7:00 PM - 8:30 PM",
      location: "Main Sanctuary",
      description: "A special candlelight service celebrating the birth of our Savior.",
      type: "Special Service",
      recurring: false
    },
    {
      title: "New Year Prayer & Worship",
      date: "December 31, 2024",
      time: "11:00 PM - 12:30 AM",
      location: "Main Sanctuary",
      description: "Ring in the New Year with prayer, worship, and community fellowship.",
      type: "Special Event",
      recurring: false
    },
    {
      title: "Marriage Retreat Weekend",
      date: "January 20-22, 2025",
      time: "Friday 6 PM - Sunday 3 PM",
      location: "Mountain View Resort",
      description: "A weekend retreat designed to strengthen marriages and relationships.",
      type: "Retreat",
      recurring: false
    },
    {
      title: "Community Food Drive",
      date: "January 28, 2025",
      time: "9:00 AM - 2:00 PM",
      location: "Church Parking Lot",
      description: "Help us collect food donations for local families in need.",
      type: "Community Service",
      recurring: false
    }
  ];

  const pastEvents = [
    {
      title: "Fall Harvest Festival",
      date: "October 2024",
      description: "A wonderful community celebration with games, food, and fellowship.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop"
    },
    {
      title: "Youth Mission Trip",
      date: "Summer 2024",
      description: "Our youth team served communities in rural areas, building homes and sharing hope.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=200&fit=crop"
    },
    {
      title: "Easter Sunrise Service",
      date: "March 2024",
      description: "A beautiful outdoor service celebrating the resurrection of Jesus Christ.",
      image: "https://images.unsplash.com/photo-1490549132488-d00bbd8576e9?w=400&h=200&fit=crop"
    },
    {
      title: "Community Christmas Concert",
      date: "December 2023",
      description: "Our choir and worship team presented a heartwarming Christmas program.",
      image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?w=400&h=200&fit=crop"
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Regular Service': return 'bg-primary/10 text-primary';
      case 'Youth Event': return 'bg-blue-100 text-blue-800';
      case 'Special Service': return 'bg-purple-100 text-purple-800';
      case 'Special Event': return 'bg-orange-100 text-orange-800';
      case 'Retreat': return 'bg-green-100 text-green-800';
      case 'Community Service': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 church-gradient text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Events & Programs
          </h1>
          <p className="text-xl opacity-90 animate-fade-in [animation-delay:0.2s]">
            Stay connected with what's happening in our church community
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl font-semibold mb-12 text-primary animate-fade-in">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={`${event.title}-${index}`} className={`warm-shadow hover:scale-105 transition-transform duration-300 animate-fade-in [animation-delay:${0.1 * index}s]`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="font-heading text-lg text-primary pr-2">
                      {event.title}
                    </CardTitle>
                    <Badge className={getEventTypeColor(event.type)}>
                      {event.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                  <Button className="w-full mt-4" variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Join Event
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl font-semibold text-center mb-12 text-primary animate-fade-in">
            Recent Activities & Highlights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={event.title} className={`warm-shadow hover:scale-105 transition-transform duration-300 animate-fade-in [animation-delay:${0.1 * index}s]`}>
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-primary/60 mb-3">{event.date}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Newsletter Signup */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl font-semibold mb-6 text-primary animate-fade-in">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in [animation-delay:0.2s]">
            Never miss an event! Subscribe to our newsletter for the latest updates and announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;