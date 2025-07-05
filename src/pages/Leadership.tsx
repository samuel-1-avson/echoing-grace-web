import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from 'lucide-react';

const Leadership = () => {
  const leaders = [
    {
      name: "Pastor Michael Johnson",
      role: "Senior Pastor",
      bio: "Pastor Michael has been leading Grace Community Church since 2010. With over 20 years of ministry experience, he is passionate about biblical teaching and community building.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Sarah Thompson",
      role: "Associate Pastor",
      bio: "Pastor Sarah oversees our youth and family ministries. She brings creativity and energy to everything she does, inspiring the next generation of believers.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Chen",
      role: "Worship Leader",
      bio: "David leads our worship team with a heart for creating meaningful worship experiences. His musical talents help our congregation connect with God through song.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Maria Rodriguez",
      role: "Community Outreach Director",
      bio: "Maria coordinates our community service programs and outreach initiatives. She is passionate about making a positive impact in our local community.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "James Wilson",
      role: "Elder & Financial Steward",
      bio: "James brings decades of business experience to our leadership team. He helps guide our church's financial decisions and strategic planning.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Lisa Park",
      role: "Children's Ministry Director",
      bio: "Lisa has a special gift for working with children and families. She creates engaging programs that help young people grow in their faith.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 church-gradient text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our Leadership Team
          </h1>
          <p className="text-xl opacity-90 animate-fade-in [animation-delay:0.2s]">
            Meet the dedicated individuals who guide and serve our church community
          </p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <Card key={leader.name} className={`warm-shadow hover:scale-105 transition-transform duration-300 animate-fade-in [animation-delay:${0.1 * index}s]`}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover church-shadow"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2 text-primary">
                    {leader.name}
                  </h3>
                  <p className="text-primary/80 font-medium mb-3">
                    {leader.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {leader.bio}
                  </p>
                  <div className="flex justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl font-semibold mb-6 text-primary animate-fade-in">
            Want to Get Involved?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in [animation-delay:0.2s]">
            If you're interested in serving or have questions about our leadership opportunities, 
            we'd love to hear from you.
          </p>
          <div className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg warm-shadow hover:scale-105 transition-transform duration-300">
            <Mail className="h-5 w-5 mr-2" />
            leadership@gracecommunity.org
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;