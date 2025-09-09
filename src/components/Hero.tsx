import { useProperties } from '@/hooks/useProperties';
import { usePropertyImages } from '@/hooks/useProeprtiesImages';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const PropertyImage = ({ property }: { property: any }) => {
  const { images } = usePropertyImages(property.id);
  
  const getPropertyImage = () => {
    if (images.length > 0) {
      return images[0].image_url;
    }
    return property.main_image_url || '/placeholder.svg';
  };

  return (
    <img 
      src={getPropertyImage()} 
      alt={property.title}
      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
    />
  );
};

export const Hero = () => {
  const { getFeaturedProperties, loading } = useProperties();
  const featuredProperties = getFeaturedProperties();

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)}Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(0)}L`;
    }
    return `₹${price.toLocaleString()}`;
  };

  const formatLocation = (location: string) => {
    return location.charAt(0).toUpperCase() + location.slice(1);
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Luxury Properties" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              RERA Certified Property Consultants
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-primary-foreground mb-6 leading-tight">
              From Land to Luxury
              <span className="block text-luxury mt-2">Your Trusted Property Partner</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover premium properties across Delhi NCR, Mumbai, and Goa with transparent dealings and expert guidance
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/properties">
                <Button className="btn-hero group">
                  Explore Properties
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="btn-outline-luxury">
                  Book Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <Badge variant="outline" className="mb-4">Featured Properties</Badge>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Premium <span className="text-gradient">Properties</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked luxury properties that define excellence in real estate
            </p>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="card-premium animate-pulse">
                  <div className="h-64 bg-muted rounded-lg mb-4" />
                  <div className="h-4 bg-muted rounded mb-2" />
                  <div className="h-4 bg-muted rounded w-3/4" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.slice(0, 6).map((property, index) => (
                <div 
                  key={property.id} 
                  className="card-premium animate-scale-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <PropertyImage property={property} />
                    <Badge className="absolute top-4 left-4 bg-luxury text-luxury-foreground">
                      {formatLocation(property.location)}
                    </Badge>
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {property.property_type.replace('_', ' ')}
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {property.title}
                    </h3>
                    
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{property.address}</span>
                    </div>

                    {property.bedrooms && property.bathrooms && property.area_sqft && (
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Bed className="h-4 w-4 mr-1" />
                          <span>{property.bedrooms} BHK</span>
                        </div>
                        <div className="flex items-center">
                          <Bath className="h-4 w-4 mr-1" />
                          <span>{property.bathrooms}</span>
                        </div>
                        <div className="flex items-center">
                          <Square className="h-4 w-4 mr-1" />
                          <span>{property.area_sqft} sq.ft</span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-luxury">
                        {formatPrice(property.price)}
                      </div>
                      <Link to={`/property/${property.id}`}>
                        <Button variant="outline" size="sm" className="group">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link to="/properties">
              <Button className="btn-luxury">
                View All Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};