import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { InteractiveBusinessCard } from '@/components/InteractiveBusinessCard';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle,
  Building,
  User,
  Calendar,
  Home,
  Navigation,
  Award
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    location: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { error } = await supabase.from("contact_inquiries").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          inquiry_type: formData.propertyType || "general",
          message: `Budget: ${formData.budget || "Not specified"}\nLocation: ${
            formData.location || "Not specified"
          }\nProperty Type: ${
            formData.propertyType || "Not specified"
          }\n\nMessage: ${formData.message}`,
          source: "website",
        },
      ]);

      if (error) throw error;

      // ✅ Fire Google Ads Conversion
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "conversion", {
          send_to: "AW-17541032556/wYHfCIqejZgbEOzUm6xB", // <-- Replace with your Conversion ID + Label
          value: 1.0,
          currency: "INR",
        });
      }

      // ✅ Show Thank You popup
      setIsSubmitted(true);

      // ✅ Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyType: "",
        location: "",
        budget: "",
        message: "",
      });

      // Auto-hide after 5s (optional)
      setTimeout(() => setIsSubmitted(false), 5000);

      // 👉 If you want redirect instead of popup:
      // window.location.href = "/thank-you";
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your inquiry. Please try again or call us directly.");
    }
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const offices = [
  {
    city: 'Gurgaon (Head Office - Sec 81)',
    address: 'Sector 81, Gurgaon, Haryana',
    phone: '+919205413041',
    email: 'joginderpropertiesncr@gmail.com',
    hours: 'Mon-Sun: 9:00 AM - 7:00 PM',
    featured: true
  },
  {
    city: 'Gurgaon (Branch - Sec 70)',
    address: 'Sector 70, Gurgaon, Haryana',
    phone: '+91 9205413041',
    email: 'joginderpropertiesncr@gmail.com',
    hours: 'Mon-Sun: 9:00 AM - 7:00 PM',
    featured: false
  },
  {
    city: 'Gurgaon (Branch - Sec 48)',
    address: 'Sector 48, Gurgaon, Haryana',
    phone: '+919205413041',
    email: 'joginderpropertiesncr@gmail.com',
    hours: 'Mon-Sun: 9:00 AM - 7:00 PM',
    featured: false
  }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="card-premium max-w-md w-full mx-4 text-center">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
              Thank You!
            </h2>
            <p className="text-muted-foreground mb-6">
              Your inquiry has been received. Our expert will contact you within 24 hours to discuss your property requirements.
            </p>
            <Button onClick={() => setIsSubmitted(false)} className="btn-luxury">
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-24 sm:py-32">
  <div className="container mx-auto px-6 text-center">
    {/* Badge / Label */}
    <Badge className="bg-white/20 text-white backdrop-blur-md px-4 py-1 mb-6 inline-block text-sm sm:text-base rounded-full shadow-md">
      Get In Touch
    </Badge>

    {/* Heading */}
    <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight sm:leading-snug">
      Contact Our Property Experts
    </h1>

    {/* Subheading / Description */}
    <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
      Ready to find your dream property? Our RERA-certified consultants are here to guide you every step of the way.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="mailto:joginderpropertiesncr@gmail.com"
        className="px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Email Us
      </a>
      <a
        href="tel:+919205413041"
        className="px-6 py-3 border border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-300"
      >
        Call Now
      </a>
    </div>
  </div>
</section>


      <div className="container mx-auto px-4 py-12 mobile-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 contact-grid">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>

                  {/* Property Preferences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Property Type</Label>
                      <Select onValueChange={(value) => handleChange('propertyType', value)}>
                        <SelectTrigger>
                          <Home className="w-4 h-4 mr-2" />
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                          <SelectItem value="luxury_apartment">Luxury Apartment</SelectItem>
                          <SelectItem value="villa">Villa</SelectItem>
                          <SelectItem value="farmhouse">Farmhouse</SelectItem>
                          <SelectItem value="plot">Plot</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Preferred Location</Label>
                      <Select onValueChange={(value) => handleChange('location', value)}>
                        <SelectTrigger>
                          <MapPin className="w-4 h-4 mr-2" />
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="gurgaon">Gurgaon</SelectItem>
                          <SelectItem value="mumbai">Mumbai</SelectItem>
                          <SelectItem value="goa">Goa</SelectItem>
                          <SelectItem value="faridabad">Faridabad</SelectItem>
                          <SelectItem value="noida">Noida</SelectItem>
                          <SelectItem value="ghaziabad">Ghaziabad</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Budget Range</Label>
                    <Select onValueChange={(value) => handleChange('budget', value)}>
                      <SelectTrigger>
                        <Building className="w-4 h-4 mr-2" />
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50l">Under ₹50 Lakhs</SelectItem>
                        <SelectItem value="50l-1cr">₹50 Lakhs - ₹1 Crore</SelectItem>
                        <SelectItem value="1cr-2cr">₹1 - ₹2 Crore</SelectItem>
                        <SelectItem value="2cr-5cr">₹2 - ₹5 Crore</SelectItem>
                        <SelectItem value="above-5cr">Above ₹5 Crore</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your property requirements, preferred amenities, or any specific questions..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="btn-luxury w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Business Card */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="font-playfair text-xl">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold">Call Now</p>
                      <p className="text-sm text-muted-foreground">+91 9205413041</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">Quick Response</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-sm text-muted-foreground">propertiessatija@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <p className="text-sm text-muted-foreground">Mon-Sun: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t space-y-2">
                  <Button className="btn-luxury w-full" onClick={() => window.open('tel:+919205413041')}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('https://wa.me/919205413041?text=Hi! I want to discuss property requirements.')}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Business Card */}
            <Card className="card-premium border-0 bg-gradient-to-br from-background to-muted/30">
              <CardHeader className="text-center pb-4">
                <CardTitle className="font-playfair text-xl">Meet Your Property Expert</CardTitle>
                <p className="text-sm text-muted-foreground">Hover to connect instantly</p>
              </CardHeader>
              <CardContent className="flex justify-center px-2">
                <InteractiveBusinessCard />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Locations */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">
              Visit Our Offices
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet us in person at any of our conveniently located offices across major cities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 office-cards">
            {offices.map((office, index) => (
              <Card key={index} className={`${office.featured ? 'card-premium border-primary/50' : 'card-property'} relative`}>
                {office.featured && (
                  <Badge className="absolute -top-3 left-4 bg-gradient-primary text-primary-foreground">
                    Head Office
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-primary" />
                    {office.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm break-words">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-sm">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-sm">{office.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm">{office.hours}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group">
                    <Navigation className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="mt-16 py-12 bg-gradient-subtle rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
              Why Choose Joginder Properties?
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold mb-2">RERA Certified</h4>
              <p className="text-sm text-muted-foreground">Fully compliant and transparent</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                <Building className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold mb-2">1000+ Properties</h4>
              <p className="text-sm text-muted-foreground">Extensive portfolio across cities</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                <User className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold mb-2">Expert Team</h4>
              <p className="text-sm text-muted-foreground">15+ years of experience</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold mb-2">24/7 Support</h4>
              <p className="text-sm text-muted-foreground">Always available to help</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;