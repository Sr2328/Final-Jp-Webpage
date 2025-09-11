import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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
  Calendar,
  Award,
  Building
} from 'lucide-react';

interface BusinessCardProps {
  children: React.ReactNode;
}

export const DigitalBusinessCard: React.FC<BusinessCardProps> = ({ children }) => {
  const [showQR, setShowQR] = useState(false);

  const businessInfo = {
    name: "Satija",
    title: "Founder & CEO",
    company: "Satija Properties",
    tagline: "Your Trusted Property Investment Partner",
    phone: "+91 9205413041",
    email: "satijapropertiesncr@gmail.com",
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
    link.download = 'satija-properties.vcf';
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="sr-only">Digital Business Card</DialogTitle>
        </DialogHeader>
        
        <Card className="card-premium border-0 shadow-none">
          <CardContent className="p-6 text-center">
            {/* Profile Section */}
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-gradient-luxury rounded-full mx-auto mb-4 flex items-center justify-center">
                <Building className="w-12 h-12 text-luxury-foreground" />
              </div>
              
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-1">
                {businessInfo.name}
              </h2>
              <p className="text-primary font-medium">{businessInfo.title}</p>
              <p className="text-muted-foreground text-sm">{businessInfo.company}</p>
              
              <Badge className="bg-gradient-primary text-primary-foreground mt-2">
                {businessInfo.experience}
              </Badge>
            </div>

            {/* Tagline */}
            <p className="text-muted-foreground italic mb-6 border-l-2 border-primary pl-4">
              "{businessInfo.tagline}"
            </p>

            {/* Specialties */}
            <div className="mb-6">
              <h4 className="font-semibold text-sm text-foreground mb-3">Specializations</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {businessInfo.specialties.map((specialty, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Contact Actions */}
            <div className="space-y-2 mb-6">
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

            {/* Contact Details */}
            <div className="text-left space-y-3 mb-6 text-sm">
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

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button 
                onClick={handleDownloadVCard}
                variant="outline" 
                className="flex-1"
                size="sm"
              >
                <Download className="w-4 h-4 mr-1" />
                Save Contact
              </Button>
              
              <Button 
                onClick={() => setShowQR(true)}
                variant="outline" 
                className="flex-1"
                size="sm"
              >
                <QrCode className="w-4 h-4 mr-1" />
                QR Code
              </Button>
              
              <Button 
                variant="outline" 
                className="flex-1"
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
                <Share2 className="w-4 h-4 mr-1" />
                Share
              </Button>
            </div>

            {/* Awards/Certifications */}
            <div className="mt-6 pt-4 border-t border-border/50">
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Award className="w-3 h-3" />
                RERA Certified Real Estate Professional
              </div>
            </div>
          </CardContent>
        </Card>

        {/* QR Code Modal */}
        {showQR && (
          <Dialog open={showQR} onOpenChange={setShowQR}>
            <DialogContent className="max-w-xs">
              <DialogHeader>
                <DialogTitle>Scan to Save Contact</DialogTitle>
              </DialogHeader>
              <div className="text-center">
                <div className="w-48 h-48 bg-muted rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <QrCode className="w-16 h-16 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  QR Code functionality will be available soon
                </p>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </DialogContent>
    </Dialog>
  );
};