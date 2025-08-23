import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Users, User, FileText, DollarSign, Heart, Megaphone, Music, BookOpen, Shield, Calendar, Monitor, MessageCircle, UserCheck } from 'lucide-react';

const Leadership = () => {
  const patrons = [
    {
      name: "[Patron/Chaplain Name]",
      role: "Patron/Chaplain",
      statement: "Supporting our vibrant student ministry with pastoral guidance and care.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      note: "[Photo To-provide]"
    }
  ];

  const executives = [
    {
      name: "[Name]",
      role: "President",
      portfolio: "Provides overall leadership; chairs meetings; represents PENSA-UMaT",
      term: "2024/25",
      icon: Users,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "[Name]",
      role: "Vice President", 
      portfolio: "Assists President; coordinates departments",
      term: "2024/25",
      icon: User,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "[Name]",
      role: "General Secretary",
      portfolio: "Documentation, correspondence, minutes",
      term: "2024/25", 
      icon: FileText,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "[Name]",
      role: "Assistant Secretary",
      portfolio: "Supports secretariat operations",
      term: "2024/25",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "[Name]",
      role: "Financial Secretary",
      portfolio: "Finance planning and reporting",
      term: "2024/25",
      icon: DollarSign,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "[Name]",
      role: "Treasurer",
      portfolio: "Receipts, disbursements, records",
      term: "2024/25",
      icon: DollarSign,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "[Name]",
      role: "Prayer Secretary",
      portfolio: "Leads prayer strategy and intercession teams",
      term: "2024/25",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "[Name]",
      role: "Evangelism Director",
      portfolio: "Outreaches, missions, follow-up",
      term: "2024/25",
      icon: Megaphone,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "[Name]",
      role: "Music Director",
      portfolio: "Choir, worship, rehearsals",
      term: "2024/25",
      icon: Music,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "[Name]",
      role: "Bible Study Coordinator",
      portfolio: "Small groups, study outlines, discipleship",
      term: "2024/25",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "[Name]",
      role: "Welfare Coordinator",
      portfolio: "Member care, visitation",
      term: "2024/25",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "[Name]",
      role: "Organizing Secretary",
      portfolio: "Logistics, events setup",
      term: "2024/25",
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "[Name]",
      role: "Media & IT Director",
      portfolio: "AV, livestream, graphics, website",
      term: "2024/25",
      icon: Monitor,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "[Name]",
      role: "PRO/Communications",
      portfolio: "Announcements, press, social media",
      term: "2024/25",
      icon: MessageCircle,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "[Name]",
      role: "Protocol/Ushering Head",
      portfolio: "Hospitality, order, seating",
      term: "2024/25",
      icon: UserCheck,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const departmentHeads = [
    { dept: "Prayer Department", head: "[Name]", responsibility: "Spiritual intercession and prayer coordination" },
    { dept: "Evangelism & Missions", head: "[Name]", responsibility: "Campus outreach and evangelistic activities" },
    { dept: "Music & Choir", head: "[Name]", responsibility: "Worship leadership and musical excellence" },
    { dept: "Bible Study & Discipleship", head: "[Name]", responsibility: "Small group coordination and discipleship" },
    { dept: "Welfare & Visitation", head: "[Name]", responsibility: "Member care and community support" },
    { dept: "Media & IT", head: "[Name]", responsibility: "Technical support and digital presence" },
    { dept: "Organizing & Logistics", head: "[Name]", responsibility: "Event planning and coordination" },
    { dept: "Protocol & Ushering", head: "[Name]", responsibility: "Service order and hospitality" }
  ];

  return (
    <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-16 px-4 parallax-gradient text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              PENSA-UMaT Leadership
            </h1>
            <p className="text-xl opacity-90 animate-fade-in [animation-delay:0.2s]">
              Meet the PENSA-UMaT leadership for the [Academic Year] [To-provide]
            </p>
          </div>
        </section>

        {/* Organogram */}
        <section className="py-16 px-4 bg-secondary/10">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-heading text-3xl font-semibold text-center mb-12 text-primary animate-fade-in">
              Leadership Structure
            </h2>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center text-muted-foreground">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <p className="text-lg font-medium">Leadership Organogram</p>
                <p className="text-sm">[Organizational chart to be designed]</p>
              </div>
            </div>
          </div>
        </section>

        {/* Patrons/Chaplain */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl font-semibold text-center mb-12 text-primary animate-fade-in">
              Patrons/Chaplain
            </h2>
            <div className="grid gap-8">
              {patrons.map((patron, index) => (
                <Card key={patron.name} className={`warm-shadow animate-fade-in [animation-delay:${0.1 * index}s]`}>
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="relative">
                        <img 
                          src={patron.image} 
                          alt={patron.name}
                          className="w-32 h-32 rounded-full object-cover shadow-lg"
                        />
                        {patron.note && (
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-accent text-white text-xs px-2 py-1 rounded">
                            {patron.note}
                          </div>
                        )}
                      </div>
                      <div className="text-center md:text-left flex-1">
                        <h3 className="font-heading text-2xl font-semibold mb-2 text-primary">
                          {patron.name}
                        </h3>
                        <p className="text-secondary font-semibold mb-4">{patron.role}</p>
                        <p className="text-muted-foreground leading-relaxed">{patron.statement}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Executive Council */}
        <section className="py-16 px-4 bg-secondary/10">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-heading text-3xl font-semibold text-center mb-12 text-primary animate-fade-in">
              Executive Council
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {executives.map((exec, index) => {
                const IconComponent = exec.icon;
                return (
                  <Card key={exec.role} className={`warm-shadow hover:scale-105 transition-transform duration-300 animate-fade-in [animation-delay:${0.1 * index}s]`}>
                    <CardContent className="p-6 text-center">
                      <div className="mb-4">
                        <img 
                          src={exec.image} 
                          alt={exec.name}
                          className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg mb-4"
                        />
                        <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h3 className="font-heading text-lg font-semibold mb-1 text-primary">
                        {exec.name}
                      </h3>
                      <p className="text-secondary font-medium text-sm mb-2">
                        {exec.role}
                      </p>
                      <p className="text-xs text-accent mb-3">Term: {exec.term}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        <strong>Portfolio:</strong> {exec.portfolio}
                      </p>
                      <div className="flex justify-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                          <Mail className="h-4 w-4 text-primary" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                          <Phone className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Departmental Heads */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-heading text-3xl font-semibold text-center mb-12 text-primary animate-fade-in">
              Departmental Heads
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {departmentHeads.map((dept, index) => (
                <Card key={dept.dept} className={`warm-shadow animate-fade-in [animation-delay:${0.1 * index}s]`}>
                  <CardHeader>
                    <CardTitle className="font-heading text-lg text-primary">{dept.dept}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">Head:</span>
                        <span className="text-muted-foreground text-sm">{dept.head}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {dept.responsibility}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client To-Provide List */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <Card className="warm-shadow">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-center text-primary">
                  Client To-Provide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Leadership Information</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• [Academic Year]</li>
                      <li>• [Leaders' names & photos]</li>
                      <li>• [Patrons/Chaplain names & photos]</li>
                      <li>• [Contact information for leaders]</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Organizational</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• [Leadership organogram design]</li>
                      <li>• [Social media links for leaders]</li>
                      <li>• [Department head details]</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
  );
};

export default Leadership;