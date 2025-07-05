import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 church-gradient text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl opacity-90 animate-fade-in [animation-delay:0.2s]">
            We'd love to hear from you. Reach out with questions, prayer requests, or just to say hello
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="warm-shadow text-center animate-fade-in">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full church-gradient flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-primary">Address</h3>
                <p className="text-sm text-muted-foreground">
                  123 Faith Street<br />
                  Community City, CC 12345
                </p>
              </CardContent>
            </Card>

            <Card className="warm-shadow text-center animate-fade-in [animation-delay:0.1s]">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full church-gradient flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-primary">Phone</h3>
                <p className="text-sm text-muted-foreground">
                  Main: (555) 123-4567<br />
                  Prayer Line: (555) 123-4568
                </p>
              </CardContent>
            </Card>

            <Card className="warm-shadow text-center animate-fade-in [animation-delay:0.2s]">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full church-gradient flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-primary">Email</h3>
                <p className="text-sm text-muted-foreground">
                  info@gracecommunity.org<br />
                  pastor@gracecommunity.org
                </p>
              </CardContent>
            </Card>

            <Card className="warm-shadow text-center animate-fade-in [animation-delay:0.3s]">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full church-gradient flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-primary">Office Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Mon-Fri: 9:00 AM - 5:00 PM<br />
                  Sat-Sun: By Appointment
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Service Times */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="warm-shadow animate-fade-in">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-primary">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="What is this regarding?" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us how we can help you..."
                    rows={5}
                  />
                </div>
                <Button className="w-full" size="lg">
                  <Mail className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Service Times and Additional Info */}
            <div className="space-y-8">
              <Card className="warm-shadow animate-fade-in [animation-delay:0.2s]">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary flex items-center">
                    <Calendar className="h-6 w-6 mr-2" />
                    Service Times
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-medium">Sunday Worship</span>
                    <span className="text-muted-foreground">10:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-medium">Sunday School</span>
                    <span className="text-muted-foreground">9:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-medium">Wednesday Bible Study</span>
                    <span className="text-muted-foreground">7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-medium">Friday Youth Group</span>
                    <span className="text-muted-foreground">7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Saturday Prayer Meeting</span>
                    <span className="text-muted-foreground">8:00 AM</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="warm-shadow animate-fade-in [animation-delay:0.4s]">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-primary">Emergency Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For pastoral emergencies or urgent prayer requests outside of office hours:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-medium">(555) 123-4569</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-medium">emergency@gracecommunity.org</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="warm-shadow animate-fade-in [animation-delay:0.6s]">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-primary">Directions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We're located in the heart of Community City, easily accessible by public transportation or car.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Free parking available on-site</li>
                    <li>• Wheelchair accessible entrance</li>
                    <li>• Children's nursery available during services</li>
                    <li>• Coffee and fellowship area</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl font-semibold mb-8 text-primary animate-fade-in">
            Find Us
          </h2>
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center text-muted-foreground animate-fade-in [animation-delay:0.2s]">
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
              <p className="text-lg font-medium">Interactive Map</p>
              <p className="text-sm">123 Faith Street, Community City, CC 12345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;