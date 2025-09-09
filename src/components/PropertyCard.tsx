import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { type Property } from '@/hooks/useProperties';
import { usePropertyImages } from '@/hooks/useProeprtiesImages';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const { images } = usePropertyImages(property.id);
  
  const getPropertyImage = () => {
    if (images.length > 0) {
      return images[0].image_url;
    }
    return property.main_image_url || '/placeholder.svg';
  };

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

  const formatPropertyType = (type: string) => {
    return type.replace('_', ' ').split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <Card className="card-property overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={getPropertyImage()}
          alt={property.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-luxury text-luxury-foreground mb-2">
            {formatLocation(property.location)}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge className="bg-primary text-primary-foreground">
            {formatPropertyType(property.property_type)}
          </Badge>
        </div>
        
        {property.featured && (
          <div className="absolute bottom-4 left-4">
            <Badge variant="secondary" className="bg-luxury-light text-luxury-foreground">
              Featured
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {property.title}
            </h3>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
              <span className="text-sm line-clamp-1">{property.address}</span>
            </div>
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

          {property.amenities && property.amenities.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {property.amenities.slice(0, 3).map((amenity, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {amenity}
                </Badge>
              ))}
              {property.amenities.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{property.amenities.length - 3} more
                </Badge>
              )}
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="text-2xl font-bold text-luxury">
              {formatPrice(property.price)}
            </div>
            <Link to={`/property/${property.id}`}>
              <Button variant="outline" size="sm" className="group/btn">
                View Details
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};