import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Download, 
  QrCode, 
  Share2, 
  MessageSquare,
  Award,
  Building,
  RotateCcw,
  Star,
  Calendar
} from 'lucide-react';

interface FlippableBusinessCardProps {
  children: React.ReactNode;
}

export const FlippableBusinessCard: React.FC<FlippableBusinessCardProps> = ({ children }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const businessInfo = {
    name: "Joginder Singh",
    title: "Real Estate Consultant", 
    company: "Joginder Properties",
    tagline: "Your Trusted Property Investment Partner",
    phone: "+91 98765 43210",
    email: "joginder@joginderproperties.com",
    website: "www.joginderproperties.com",
    address: "Plot No. 123, Sector 14, Gurgaon, Haryana 122001",
    experience: "15+ Years Experience",
    specialties: ["Luxury Properties", "Commercial Spaces", "Investment Advisory", "RERA Certified"],
    achievements: [
      "1000+ Happy Families",
      "₹500+ Cr Properties Sold", 
      "Awards: Best Consultant 2023",
      "RERA Certified Professional"
    ]
  };

  const handleCall = () => {
    window.open(`tel:${businessInfo.phone}`, '_self');
  };

  const handleEmail = () => {
    window.open(`mailto:${businessInfo.email}`, '_self');
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in learning more about your property services.";
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
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
    link.download = 'joginder-singh.vcf';
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="relative w-80 h-96 mx-auto perspective-1000">
      {/* Trigger Element */}
      <div onClick={() => setIsFlipped(!isFlipped)} className="cursor-pointer">
        {children}
      </div>

      {/* Flippable Card */}
      <div 
        className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <Card className={`absolute inset-0 w-full h-full card-premium backface-hidden ${isFlipped ? 'invisible' : 'visible'}`}>
          <CardContent className="p-6 h-full flex flex-col justify-between">
            {/* Header */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-luxury rounded-full mx-auto mb-4 flex items-center justify-center">
                <Building className="w-10 h-10 text-luxury-foreground" />
              </div>
              
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-1">
                {businessInfo.name}
              </h2>
              <p className="text-primary font-medium">{businessInfo.title}</p>
              <p className="text-muted-foreground text-sm">{businessInfo.company}</p>
              
              <Badge className="bg-gradient-primary text-primary-foreground mt-3">
                {businessInfo.experience}
              </Badge>
            </div>

            {/* Tagline */}
            <div className="text-center my-4">
              <p className="text-muted-foreground italic border-l-2 border-primary pl-4 text-sm">
                "{businessInfo.tagline}"
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <Button onClick={handleCall} className="w-full btn-luxury">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              
              <div className="grid grid-cols-2 gap-2">
                <Button onClick={handleWhatsApp} variant="outline" className="text-green-600 border-green-200 hover:bg-green-50">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  WhatsApp
                </Button>
                <Button onClick={handleEmail} variant="outline">
                  <Mail className="w-4 h-4 mr-1" />
                  Email
                </Button>
              </div>
            </div>

            {/* Flip Indicator */}
            <div className="text-center mt-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <RotateCcw className="w-4 h-4 mr-1" />
                Flip for Details
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Back Side */}
        <Card 
          className={`absolute inset-0 w-full h-full card-premium rotate-y-180 backface-hidden ${!isFlipped ? 'invisible' : 'visible'}`}
          style={{ transform: 'rotateY(180deg)' }}
        >
          <CardContent className="p-6 h-full flex flex-col justify-between">
            {/* Contact Details */}
            <div>
              <h3 className="font-playfair text-xl font-bold mb-4 text-center">Contact Information</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{businessInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-xs">{businessInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-xs">{businessInfo.website}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-xs">{businessInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Specialties */}
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-3">Specializations</h4>
              <div className="flex flex-wrap gap-1 mb-4">
                {businessInfo.specialties.map((specialty, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-3">Achievements</h4>
              <div className="space-y-2 mb-4">
                {businessInfo.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star className="w-3 h-3 text-luxury" />
                    <span className="text-xs text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  onClick={handleDownloadVCard}
                  variant="outline" 
                  size="sm"
                >
                  <Download className="w-3 h-3 mr-1" />
                  Save Contact
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: `${businessInfo.name} - ${businessInfo.company}`,
                        text: businessInfo.tagline,
                        url: window.location.href
                      });
                    }
                  }}
                >
                  <Share2 className="w-3 h-3 mr-1" />
                  Share
                </Button>
              </div>

              {/* Back Button */}
              <Button variant="ghost" size="sm" className="w-full text-muted-foreground">
                <RotateCcw className="w-4 h-4 mr-1" />
                Flip Back
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};