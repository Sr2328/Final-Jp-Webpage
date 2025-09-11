import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProperty } from '@/hooks/useProperties';
import { usePaymentPlan } from '@/hooks/usePaymentPlan';
import { useProjectUpdates } from '@/hooks/useProjectUpdates';
import { EMICalculator } from '@/components/EMICalculator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { usePropertyImages } from '@/hooks/useProeprtiesImages';

import {
  MapPin,
  BedDouble,
  Bath,
  Square,
  Calendar,
  Download,
  Phone,
  MessageSquare,
  Camera,
  Play,
  Shield,
  TrendingUp,
  Clock,
  CheckCircle,
  Building,
  Car
} from 'lucide-react';

export const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { property, loading, error } = useProperty(id!);
  const { paymentPlan } = usePaymentPlan(id!);
  const { updates } = useProjectUpdates(id!);

  // Fetch property images from Supabase
  const { images, loading: imagesLoading } = usePropertyImages(id!);
  const [selectedImage, setSelectedImage] = useState(0);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  if (loading || imagesLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-96 bg-muted rounded-lg"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <div className="h-8 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-32 bg-muted rounded"></div>
              </div>
              <div className="space-y-4">
                <div className="h-48 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Property Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            {error || "The property you're looking for doesn't exist."}
          </p>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
    );
  }

  // ✅ Always return array of objects with url + alt
const propertyImages = Array.isArray(images) && images.length > 0
  ? images.map((img, i) => ({
      url: img.image_url,
      alt: img.alt_text || `${property.title} - Image ${i + 1}`,
    }))
  : [
      {
        url: property.main_image_url || "/placeholder.svg",
        alt: property.title,
      },
    ];


  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  const formatLocation = (location: string) =>
    location.charAt(0).toUpperCase() + location.slice(1);

  const formatPropertyType = (type: string) =>
    type
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const milestones = paymentPlan?.milestones
    ? Array.isArray(paymentPlan.milestones)
      ? paymentPlan.milestones
      : []
    : [];

  // CTA Button Handlers
  const handleBookSiteVisit = () => {
    const message = `Hi, I'm interested in booking a site visit for ${property.title}. Please contact me.`;
    window.open(
      `https://wa.me/919205413041?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleEnquire = () => {
    const message = `Hi, I'm interested in ${property.title}. Please send me more details.`;
    window.open(
      `https://wa.me/919205413041?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleDownloadPriceSheet = () => {
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," +
        encodeURIComponent(`
      Property: ${property.title}
      Price: ${formatCurrency(property.price)}
      Per Sq Ft: ₹${property.price_per_sqft}
      Location: ${formatLocation(property.location)}
      Type: ${formatPropertyType(property.property_type)}
      
      For detailed price sheet, please contact us at proeprtiessatija@gmail.com Or call +91 9205413041
    `)
    );
    element.setAttribute("download", `${property.title}-price-sheet.txt`);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleDownloadBrochure = () => {
    if (property.brochure_url) window.open(property.brochure_url, "_blank");
  };

  const handleDownloadRERA = () => {
    if (property.rera_certificate_url)
      window.open(property.rera_certificate_url, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image Gallery */}
      <div className="relative h-96 bg-muted">
        <img
          src={propertyImages[hoveredImage ?? selectedImage].url}
          alt={propertyImages[hoveredImage ?? selectedImage].alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Image Navigation */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          {propertyImages.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)} // permanent select
              onMouseEnter={() => setHoveredImage(index)} // preview on hover
              onMouseLeave={() => setHoveredImage(null)} // revert back
              className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                selectedImage === index
                  ? "border-luxury-foreground"
                  : "border-white/50"
              }`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 z-40">
          {property.video_tour_url && (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm shadow-lg">
                  <Play className="w-4 h-4 mr-2" />
                  Virtual Tour
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl z-50">
                <DialogHeader>
                  <DialogTitle className="font-playfair">
                    Virtual Property Tour
                  </DialogTitle>
                </DialogHeader>
                <div className="aspect-video">
                  <iframe
                    src={property.video_tour_url}
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                    title="Virtual Property Tour"
                  />
                </div>
              </DialogContent>
            </Dialog>
          )}

          {/* ✅ View All Photos */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="secondary"
                size="sm"
                className="absolute bottom-4 right-4"
              >
                View All Photos
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-6xl z-50">
              <DialogHeader>
                <DialogTitle className="font-playfair">
                  Property Gallery
                </DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                {propertyImages.map((img, index) => (
                  <button
                    key={index}
                    className="focus:outline-none"
                    onClick={() => {
                      setSelectedImage(index);
                      // Close dialog
                      const el = document.querySelector(
                        '[data-state="open"] button'
                      ) as HTMLElement | null;
                      el?.click();
                    }}
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      className={`w-full h-32 object-cover rounded-lg transition-transform cursor-pointer hover:scale-105 ${
                        selectedImage === index
                          ? "ring-2 ring-luxury-foreground"
                          : ""
                      }`}
                    />
                  </button>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Property Header */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge className="bg-gradient-luxury text-luxury-foreground">
                  {formatLocation(property.location)}
                </Badge>
                <Badge variant="outline">
                  {formatPropertyType(property.property_type)}
                </Badge>
                {property.featured && (
                  <Badge className="bg-gradient-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>
              
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-2">
                {property.title}
              </h1>
              
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                {property.address || `${formatLocation(property.location)}, India`}
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                {property.bedrooms && (
                  <div className="flex items-center gap-1">
                    <BedDouble className="w-4 h-4" />
                    {property.bedrooms} Bedrooms
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    {property.bathrooms} Bathrooms
                  </div>
                )}
                {property.area_sqft && (
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    {property.area_sqft.toLocaleString()} sq ft
                  </div>
                )}
                {property.possession_date && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Ready by {new Date(property.possession_date).getFullYear()}
                  </div>
                )}
              </div>
            </div>

            {/* Tabbed Content */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
                <TabsTrigger value="payment">Payment</TabsTrigger>
                <TabsTrigger value="updates">Updates</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <Card className="card-premium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      Property Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {property.description}
                    </p>
                    
                    {property.project_highlights && (
                      <div>
                        <h4 className="font-semibold mb-3">Key Highlights</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {property.project_highlights.map((highlight: string, index: number) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                      <div className="text-center p-3 bg-background/50 rounded">
                        <div className="font-bold text-lg">{property.total_units}</div>
                        <div className="text-sm text-muted-foreground">Total Units</div>
                      </div>
                      <div className="text-center p-3 bg-background/50 rounded">
                        <div className="font-bold text-lg">{property.available_units}</div>
                        <div className="text-sm text-muted-foreground">Available</div>
                      </div>
                      <div className="text-center p-3 bg-background/50 rounded">
                        <div className="font-bold text-lg">{property.total_area_acres}A</div>
                        <div className="text-sm text-muted-foreground">Total Area</div>
                      </div>
                      <div className="text-center p-3 bg-background/50 rounded">
                        <div className="font-bold text-lg">₹{property.price_per_sqft}</div>
                        <div className="text-sm text-muted-foreground">Per Sq Ft</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="amenities" className="mt-6">
                <Card className="card-premium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Car className="w-5 h-5" />
                      Amenities & Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {property.amenities && property.amenities.length > 0 ? (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {property.amenities.map((amenity: string, index: number) => (
                          <div key={index} className="flex items-center gap-2 p-2 bg-background/50 rounded">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">Amenity details will be updated soon.</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="location" className="mt-6">
                <Card className="card-premium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Location & Connectivity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Map Placeholder */}
              {/* Map Placeholder */}
<div className="h-64 bg-muted rounded-lg overflow-hidden">
  {property.latitude != null && property.longitude != null ? (
    <iframe
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      // ✅ Build embed map dynamically using lat/lng
      src={`https://maps.google.com/maps?q=${property.latitude},${property.longitude}&z=15&output=embed`}
    />
  ) : (
    <div className="flex items-center justify-center h-full text-center">
      <MapPin className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
      <p className="text-muted-foreground">Location details coming soon</p>
    </div>
  )}
</div>


                    {/* Connectivity */}
                    {Array.isArray(property.connectivity_details) && property.connectivity_details.length > 0 && (
  <div>
    <h4 className="font-semibold mb-3">Connectivity</h4>
    <div className="space-y-2">
      {property.connectivity_details.map((detail, index) => (
        <div key={index} className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-blue-500" />
          <span className="text-sm">{detail}</span>
        </div>
      ))}
    </div>
  </div>
)}

                    {/* Nearby Landmarks */}
                   {property.nearby_landmarks && typeof property.nearby_landmarks === "object" && (
  <div>
    <h4 className="font-semibold mb-3">Nearby Landmarks</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Object.entries(property.nearby_landmarks).map(([category, places]) => (
        <div key={category}>
          <h5 className="font-medium capitalize mb-2">{category}</h5>
          <ul className="space-y-1">
            {Array.isArray(places) &&
              places.map((place, index) => (
                <li
                  key={index}
                  className="text-sm text-muted-foreground flex items-center gap-1"
                >
                  <CheckCircle className="w-3 h-3" />
                  {place}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
)}

                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payment" className="mt-6">
                <div className="space-y-6">
                  {paymentPlan && (
                    <Card className="card-premium">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <TrendingUp className="w-5 h-5" />
                          {paymentPlan.plan_name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{paymentPlan.description}</p>
                        
                        {milestones.length > 0 && (
                          <div className="space-y-3">
                            <h4 className="font-semibold">Payment Schedule</h4>
                            {milestones.map((milestone: any, index: number) => (
                              <div key={index} className="flex justify-between items-center p-3 bg-background/50 rounded">
                                <div>
                                  <span className="font-medium">{milestone.milestone}</span>
                                  <div className="text-sm text-muted-foreground">
                                    {milestone.percentage}% of total amount
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="font-semibold">
                                    {formatCurrency(milestone.amount)}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}

                  {/* EMI Calculator */}
                  <EMICalculator propertyId={property.id} defaultLoanAmount={property.price * 0.8} />
                </div>
              </TabsContent>

              <TabsContent value="updates" className="mt-6">
                <Card className="card-premium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Construction Updates
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {updates.length > 0 ? (
                      <div className="space-y-4">
                        {updates.map((update) => (
                          <div key={update.id} className="border-l-2 border-primary pl-4 pb-4">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold">{update.title}</h4>
                              <Badge variant="outline" className="text-xs">
                                {new Date(update.update_date).toLocaleDateString()}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground text-sm">{update.description}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">No recent updates available.</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price & CTA */}
            <Card className="card-premium sticky top-4">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {formatCurrency(property.price)}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    ₹{property.price_per_sqft}/sq ft
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    className="btn-luxury w-full"
                    onClick={handleBookSiteVisit}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Book Site Visit
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleEnquire}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Enquire Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleDownloadPriceSheet}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Get Price Sheet
                  </Button>
                </div>

                {property.brochure_url && (
                  <Button 
                    variant="ghost" 
                    className="w-full mt-3"
                    onClick={handleDownloadBrochure}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Brochure
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* RERA Information */}
            {property.rera_id && (
              <Card className="card-premium">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4" />
                    RERA Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center p-3 bg-background/50 rounded">
                    <div className="font-mono text-sm">{property.rera_id}</div>
                    <div className="text-xs text-muted-foreground">RERA Registration No.</div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full text-xs"
                    onClick={handleDownloadRERA}
                  >
                    <Download className="w-3 h-3 mr-2" />
                    Download RERA Certificate
                  </Button>
                  
                  <p className="text-xs text-muted-foreground">
                    This project is registered under RERA. For more details, visit the official RERA website.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};