import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold text-luxury-foreground">
              Joginder Properties
            </h3>
            <p className="text-background/80 leading-relaxed">
              Your trusted partner in real estate investment. We specialize in premium properties 
              across Delhi NCR, Mumbai, and Goa with over 15 years of excellence.
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="hover:bg-background/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-background/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-background/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-background/10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-luxury-foreground">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-luxury-foreground transition-colors">Property Investment</a></li>
              <li><a href="#" className="hover:text-luxury-foreground transition-colors">Home Loans</a></li>
              <li><a href="#" className="hover:text-luxury-foreground transition-colors">Property Management</a></li>
              <li><a href="#" className="hover:text-luxury-foreground transition-colors">Legal Documentation</a></li>
              <li><a href="#" className="hover:text-luxury-foreground transition-colors">Site Visit Assistance</a></li>
              <li><a href="#" className="hover:text-luxury-foreground transition-colors">Investment Advisory</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-luxury-foreground">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="/" className="hover:text-luxury-foreground transition-colors">Home</a></li>
              <li><a href="/properties" className="hover:text-luxury-foreground transition-colors">Properties</a></li>
              <li><a href="/about" className="hover:text-luxury-foreground transition-colors">About Us</a></li>
              <li><a href="/blog" className="hover:text-luxury-foreground transition-colors">Market Insights</a></li>
              <li><a href="/contact" className="hover:text-luxury-foreground transition-colors">Contact</a></li>
              <li><a href="/pricing" className="hover:text-luxury-foreground transition-colors">Investment Plans</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-luxury-foreground">Contact Info</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 text-luxury-foreground flex-shrink-0" />
                <div>
                  <p> Sector 81</p>
                  <p>Gurgaon, Haryana 122001</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-luxury-foreground" />
                <a href="tel:+919876543210" className="hover:text-luxury-foreground transition-colors">
                  +91 9818223938 || 9711197200
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-luxury-foreground" />
                <a href="mailto:info@joginderproperties.com" className="hover:text-luxury-foreground transition-colors">
                 joginderpropertiesncr@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-luxury-foreground" />
                <span>Mon-Sun: 9AM-7PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* RERA Section */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg text-luxury-foreground mb-3">RERA Registration</h4>
              <p className="text-background/80 text-sm leading-relaxed">
                We are registered under the Real Estate (Regulation and Development) Act, 2016. 
                All our projects comply with RERA guidelines. Registration numbers available on individual project pages.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="bg-transparent border-background/30 text-background hover:bg-background/10">
                RERA Certificate
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent border-background/30 text-background hover:bg-background/10">
                Complaint Status
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent border-background/30 text-background hover:bg-background/10">
                Project Details
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-background/60 text-sm">
            © {currentYear} Joginder Properties. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-background/60">
            <a href="#" className="hover:text-luxury-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-luxury-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-luxury-foreground transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};