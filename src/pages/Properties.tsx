import { useProperties, type PropertyFilters } from '@/hooks/useProperties';
import { PropertyCard } from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, MapPin, Home, IndianRupee } from 'lucide-react';
import { useState } from 'react';

export default function Properties() {
  const [filters, setFilters] = useState<PropertyFilters>({});
  const [searchTerm, setSearchTerm] = useState('');
  const { properties, loading, error } = useProperties(filters);

  const handleFilterChange = (key: keyof PropertyFilters, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value || undefined
    }));
  };

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.address?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Something went wrong</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary-foreground mb-6">
            Premium Properties
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Discover your dream property from our curated collection across Delhi NCR, Mumbai, and Goa
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Search */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Location Filter */}
            <Select onValueChange={(value) => handleFilterChange('location', value)}>
              <SelectTrigger>
                <MapPin className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="gurgaon">Gurgaon</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="goa">Goa</SelectItem>
                <SelectItem value="faridabad">Faridabad</SelectItem>
                <SelectItem value="noida">Noida</SelectItem>
                <SelectItem value="ghaziabad">Ghaziabad</SelectItem>
              </SelectContent>
            </Select>

            {/* Property Type Filter */}
            <Select onValueChange={(value) => handleFilterChange('property_type', value)}>
              <SelectTrigger>
                <Home className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="luxury_apartment">Luxury Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="farmhouse">Farmhouse</SelectItem>
                <SelectItem value="plot">Plot</SelectItem>
              </SelectContent>
            </Select>

            {/* Price Range */}
            <Select onValueChange={(value) => {
              const [min, max] = value.split('-').map(Number);
              handleFilterChange('min_price', min);
              handleFilterChange('max_price', max);
            }}>
              <SelectTrigger>
                <IndianRupee className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Price</SelectItem>
                <SelectItem value="0-5000000">Under ₹50L</SelectItem>
                <SelectItem value="5000000-10000000">₹50L - ₹1Cr</SelectItem>
                <SelectItem value="10000000-25000000">₹1Cr - ₹2.5Cr</SelectItem>
                <SelectItem value="25000000-999999999">Above ₹2.5Cr</SelectItem>
              </SelectContent>
            </Select>

            {/* Bedrooms Filter */}
            <Select onValueChange={(value) => handleFilterChange('bedrooms', Number(value))}>
              <SelectTrigger>
                <SelectValue placeholder="BHK" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any BHK</SelectItem>
                <SelectItem value="1">1 BHK</SelectItem>
                <SelectItem value="2">2 BHK</SelectItem>
                <SelectItem value="3">3 BHK</SelectItem>
                <SelectItem value="4">4 BHK</SelectItem>
                <SelectItem value="5">5+ BHK</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                {filteredProperties.length} Properties Found
              </h2>
              <p className="text-muted-foreground">
                Showing results for your search criteria
              </p>
            </div>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="card-property animate-pulse">
                  <div className="h-64 bg-muted rounded-lg mb-4" />
                  <div className="p-6">
                    <div className="h-4 bg-muted rounded mb-2" />
                    <div className="h-4 bg-muted rounded w-3/4 mb-4" />
                    <div className="h-8 bg-muted rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProperties.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No properties found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search filters or search terms
              </p>
              <Button onClick={() => {
                setFilters({});
                setSearchTerm('');
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}