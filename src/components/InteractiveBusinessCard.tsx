import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  Building, 
  User, 
  MessageSquare,
  Download,
  Award
} from 'lucide-react';

export const InteractiveBusinessCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const businessInfo = {
    name: "Satija",
    title: "Founder & CEO",
    company: "Satija Properties",
    tagline: "Your Trusted Property Investment Partner",
    phone: "+91 9205413041",
    email: "propertiessatija@gmail.com",
    website: "www.satijaproperties.com",
    address: "Sector 81, Gurgaon, Haryana, India",
    experience: "15+ Years Experience",
    specialties: ["Luxury Properties", "Commercial Spaces", "Investment Advisory", "RERA Certified"]
  };

  const handleCall = () => {
    window.open(`tel:${businessInfo.phone}`, '_self');
  };

  const handleEmail = () => {
    window.open(`mailto:${businessInfo.email}`, '_self');
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in learning more about your property services.";
    window.open(`https://wa.me/9205413041?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleDownloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${businessInfo.name}
ORG:${businessInfo.company}
TITLE:${businessInfo.title}
TEL:${businessInfo.phone}
EMAIL:${businessInfo.email}
URL:${businessInfo.website}
ADR:;;${businessInfo.address};;;;
NOTE:${businessInfo.tagline}
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'satija.vcf';
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="perspective-1000 w-full max-w-sm mx-auto">
      <div 
        className={`relative w-full h-96 transform-style-preserve-3d transition-transform duration-700 cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Front Side */}
        <Card className="absolute inset-0 backface-hidden bg-gradient-to-br from-primary to-primary-dark text-primary-foreground shadow-luxury overflow-hidden">
          <div className="relative h-full p-6 flex flex-col justify-between">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white/20 rounded-full" />
              <div className="absolute bottom-4 left-4 w-24 h-24 border-2 border-white/20 rounded-full" />
            </div>
            
            {/* Header */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6" />
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white border-none">
                  RERA Certified
                </Badge>
              </div>
              
              <div className="text-center">
                <h2 className="text-2xl font-playfair font-bold mb-1">
                  {businessInfo.name}
                </h2>
                <p className="text-white/90 text-sm mb-2">{businessInfo.title}</p>
                <p className="text-white/80 text-xs">{businessInfo.company}</p>
              </div>
            </div>

            {/* Center */}
            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-10 h-10" />
              </div>
              <p className="text-white/90 italic text-sm">
                "{businessInfo.tagline}"
              </p>
            </div>

            {/* Footer */}
            <div className="text-center relative z-10">
              <Badge variant="secondary" className="bg-luxury text-luxury-foreground">
                {businessInfo.experience}
              </Badge>
              <p className="text-white/70 text-xs mt-2">
                Hover to see contact details
              </p>
            </div>
          </div>
        </Card>

        {/* Back Side */}
        <Card className="absolute inset-0 backface-hidden rotate-y-180 bg-white shadow-luxury overflow-hidden">
          <div className="h-full p-6 flex flex-col">
            {/* Header */}
            <div className="text-center mb-6">
              <h3 className="font-playfair text-xl font-bold text-foreground mb-1">
                Contact Information
              </h3>
              <p className="text-muted-foreground text-sm">
                Get in touch for property consultation
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-foreground">Phone</p>
                  <p className="text-xs text-muted-foreground truncate">{businessInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-foreground">Email</p>
                  <p className="text-xs text-muted-foreground truncate">{businessInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Globe className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-foreground">Website</p>
                  <p className="text-xs text-muted-foreground truncate">{businessInfo.website}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-foreground">Address</p>
                  <p className="text-xs text-muted-foreground">{businessInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 mt-6">
              <div className="grid grid-cols-2 gap-2">
                <Button onClick={handleCall} size="sm" className="text-xs">
                  <Phone className="w-3 h-3 mr-1" />
                  Call
                </Button>
                <Button onClick={handleWhatsApp} size="sm" variant="outline" className="text-xs text-green-600 border-green-200 hover:bg-green-50">
                  <MessageSquare className="w-3 h-3 mr-1" />
                  WhatsApp
                </Button>
              </div>
              
              <Button onClick={handleDownloadVCard} variant="outline" size="sm" className="w-full text-xs">
                <Download className="w-3 h-3 mr-1" />
                Save Contact
              </Button>
            </div>

            {/* Certification */}
            <div className="mt-4 pt-4 border-t border-border/50 text-center">
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Award className="w-3 h-3" />
                RERA Certified Professional
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};