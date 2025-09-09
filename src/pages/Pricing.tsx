import { useState } from 'react';
import { MapPin, Home, TrendingUp, Calculator, Filter, ArrowRight, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sampleProperties } from '@/data/properties';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const [filters, setFilters] = useState({
    location: 'all',
    propertyType: 'all',
    bhkSize: 'all'
  });

  const locations = ['all', 'Delhi', 'Gurgaon', 'Mumbai', 'Goa', 'Faridabad', 'Noida', 'Ghaziabad'];
  const propertyTypes = ['all', 'apartment', 'villa', 'plot', 'commercial'];
  const bhkSizes = ['all', '1 BHK', '2 BHK', '3 BHK', '4+ BHK'];

  const marketTrends = [
    {
      location: 'Gurgaon',
      averagePrice: '₹8,500/sq.ft',
      growth: '+12%',
      trend: 'up',
      properties: 45
    },
    {
      location: 'Delhi',
      averagePrice: '₹15,200/sq.ft',
      growth: '+8%',
      trend: 'up',
      properties: 32
    },
    {
      location: 'Mumbai',
      averagePrice: '₹25,800/sq.ft',
      growth: '+15%',
      trend: 'up',
      properties: 28
    },
    {
      location: 'Noida',
      averagePrice: '₹4,800/sq.ft',
      growth: '+18%',
      trend: 'up',
      properties: 52
    },
    {
      location: 'Goa',
      averagePrice: '₹12,000/sq.ft',
      growth: '+10%',
      trend: 'up',
      properties: 15
    },
    {
      location: 'Faridabad',
      averagePrice: '₹3,200/sq.ft',
      growth: '+6%',
      trend: 'up',
      properties: 38
    }
  ];

  const priceRanges = [
    {
      range: 'Under ₹50 Lakh',
      properties: sampleProperties.filter(p => 
        parseInt(p.price.replace(/[^\d]/g, '')) < 5000000
      ).length,
      locations: ['Noida', 'Faridabad', 'Ghaziabad'],
      avgSize: '800-1200 sq.ft',
      description: 'Perfect for first-time buyers and young families'
    },
    {
      range: '₹50L - ₹1 Crore',
      properties: sampleProperties.filter(p => {
        const price = parseInt(p.price.replace(/[^\d]/g, ''));
        return price >= 5000000 && price < 10000000;
      }).length,
      locations: ['Gurgaon', 'Noida', 'Delhi'],
      avgSize: '1000-1500 sq.ft',
      description: 'Well-located properties with modern amenities'
    },
    {
      range: '₹1 - ₹2 Crore',
      properties: sampleProperties.filter(p => {
        const price = parseInt(p.price.replace(/[^\d]/g, ''));
        return price >= 10000000 && price < 20000000;
      }).length,
      locations: ['Delhi', 'Gurgaon', 'Mumbai'],
      avgSize: '1200-1800 sq.ft',
      description: 'Premium apartments and independent houses'
    },
    {
      range: '₹2 - ₹5 Crore',
      properties: sampleProperties.filter(p => {
        const price = parseInt(p.price.replace(/[^\d]/g, ''));
        return price >= 20000000 && price < 50000000;
      }).length,
      locations: ['Mumbai', 'Delhi', 'Goa'],
      avgSize: '1500-2500 sq.ft',
      description: 'Luxury properties in prime locations'
    },
    {
      range: 'Above ₹5 Crore',
      properties: sampleProperties.filter(p => 
        parseInt(p.price.replace(/[^\d]/g, '')) >= 50000000
      ).length,
      locations: ['Mumbai', 'Goa', 'Delhi'],
      avgSize: '2000+ sq.ft',
      description: 'Ultra-luxury villas and penthouses'
    }
  ];

  const filteredProperties = sampleProperties.filter(property => {
    if (filters.location !== 'all' && property.city !== filters.location) return false;
    if (filters.propertyType !== 'all' && property.type !== filters.propertyType) return false;
    if (filters.bhkSize !== 'all') {
      const bhk = filters.bhkSize.split(' ')[0];
      if (bhk === '4+' && (!property.bedrooms || property.bedrooms < 4)) return false;
      if (bhk !== '4+' && property.bedrooms?.toString() !== bhk) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-primary via-primary-dark to-luxury flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-white/20 text-white border-none">
            Transparent Property Pricing
          </Badge>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Find Your Perfect
            <span className="block text-luxury">Property Budget</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover transparent pricing across Delhi NCR, Mumbai, and Goa with real-time market insights 
            and expert guidance to find properties that match your investment goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/properties">
              <Button className="btn-hero group">
                Explore Properties
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="btn-outline-luxury">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Smart Filter Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-5xl mx-auto shadow-luxury border-0 bg-gradient-to-r from-background to-muted/30">
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Filter className="w-6 h-6 text-primary" />
                <CardTitle className="font-playfair text-2xl">Smart Property Filters</CardTitle>
              </div>
              <p className="text-muted-foreground">Narrow down your search with our intelligent filtering system</p>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <label className="text-sm font-medium text-foreground">Location</label>
                  </div>
                  <select
                    value={filters.location}
                    onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                    className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-background transition-all duration-200 hover:border-primary/50"
                  >
                    {locations.map(location => (
                      <option key={location} value={location}>
                        {location === 'all' ? 'All Locations' : location}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-primary" />
                    <label className="text-sm font-medium text-foreground">Property Type</label>
                  </div>
                  <select
                    value={filters.propertyType}
                    onChange={(e) => setFilters(prev => ({ ...prev, propertyType: e.target.value }))}
                    className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-background transition-all duration-200 hover:border-primary/50"
                  >
                    {propertyTypes.map(type => (
                      <option key={type} value={type}>
                        {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">Configuration</label>
                  <select
                    value={filters.bhkSize}
                    onChange={(e) => setFilters(prev => ({ ...prev, bhkSize: e.target.value }))}
                    className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-background transition-all duration-200 hover:border-primary/50"
                  >
                    {bhkSizes.map(size => (
                      <option key={size} value={size}>
                        {size === 'all' ? 'All Configurations' : size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-luxury/10 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary text-lg">{filteredProperties.length}</span>
                  <span className="text-muted-foreground">properties match your criteria</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Updated in real-time with the latest market availability
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Budget Range Cards */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Budget Categories</Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Properties by <span className="text-gradient">Budget Range</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover handpicked properties across different budget segments, each offering 
              exceptional value and strategic location advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {priceRanges.map((range, index) => (
              <Card key={index} className="group hover:shadow-luxury transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/30">
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      Budget Range
                    </Badge>
                    <div className="flex">
                      {Array.from({ length: Math.min(index + 2, 5) }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-luxury fill-luxury" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="font-playfair text-2xl text-center mb-2">
                    {range.range}
                  </CardTitle>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-luxury mb-1">
                      {range.properties}
                    </div>
                    <p className="text-sm text-muted-foreground">Premium Properties Available</p>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4 mb-6">
                    <div className="bg-gradient-to-r from-primary/5 to-luxury/5 rounded-lg p-4">
                      <p className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        Prime Locations
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {range.locations.join(' • ')}
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-luxury/5 to-primary/5 rounded-lg p-4">
                      <p className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <Home className="w-4 h-4 text-luxury" />
                        Average Size
                      </p>
                      <p className="text-sm text-muted-foreground">{range.avgSize}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 italic">
                    "{range.description}"
                  </p>

                  <Link to="/properties">
                    <Button className="w-full group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-300">
                      Explore Properties
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Intelligence */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Market Intelligence</Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Real Estate <span className="text-gradient">Market Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay ahead with data-driven insights and expert analysis of market trends 
              across our prime investment locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketTrends.map((trend, index) => (
              <Card key={index} className="group hover:shadow-luxury transition-all duration-500 border-0 overflow-hidden">
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary/10 via-luxury/5 to-background p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-playfair font-bold text-xl text-foreground">
                            {trend.location}
                          </h3>
                          <p className="text-sm text-muted-foreground">Market Hub</p>
                        </div>
                      </div>
                      <Badge className={`${
                        trend.trend === 'up' ? 'bg-green-500' : 'bg-red-500'
                      } text-white font-bold`}>
                        {trend.growth}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-background/50 rounded-lg p-4 text-center">
                        <p className="text-xs text-muted-foreground mb-1">Avg. Price/sq.ft</p>
                        <p className="text-lg font-bold text-foreground">{trend.averagePrice}</p>
                      </div>
                      <div className="bg-background/50 rounded-lg p-4 text-center">
                        <p className="text-xs text-muted-foreground mb-1">Properties</p>
                        <p className="text-lg font-bold text-primary">{trend.properties}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className={`w-4 h-4 ${
                        trend.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`} />
                      <span className="text-sm font-medium text-foreground">Strong Growth Trajectory</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-6">
                      Consistent appreciation with high investment potential
                    </p>

                    <div className="space-y-2">
                      <Link to="/properties" className="block">
                        <Button className="w-full group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                          View Properties
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link to="/blog" className="block">
                        <Button variant="outline" className="w-full">
                          Market Analysis
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
              EMI Calculator
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Calculate your monthly EMI and plan your property investment wisely
            </p>
          </div>

          <div className="card-premium max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-6 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  Calculate Your EMI
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Loan Amount (₹)
                    </label>
                    <input
                      type="number"
                      placeholder="Enter loan amount"
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-background"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Interest Rate (% per annum)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      placeholder="Enter interest rate"
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-background"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Loan Tenure (Years)
                    </label>
                    <input
                      type="number"
                      placeholder="Enter loan tenure"
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-background"
                    />
                  </div>

                  <button className="w-full btn-hero py-3">
                    Calculate EMI
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-foreground mb-6">
                  EMI Breakdown
                </h3>
                
                <div className="space-y-4">
                  <div className="card-premium bg-muted/30">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Monthly EMI</span>
                      <span className="text-2xl font-bold text-foreground">₹ --</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="card-premium bg-muted/30 text-center">
                      <p className="text-sm text-muted-foreground mb-1">Total Interest</p>
                      <p className="text-lg font-semibold text-foreground">₹ --</p>
                    </div>
                    <div className="card-premium bg-muted/30 text-center">
                      <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
                      <p className="text-lg font-semibold text-foreground">₹ --</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-medium text-foreground mb-4">
                      Pre-approved Banks & Rates
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">HDFC Bank</span>
                        <span className="text-foreground">8.5% - 9.2%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">ICICI Bank</span>
                        <span className="text-foreground">8.7% - 9.4%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">SBI</span>
                        <span className="text-foreground">8.4% - 9.1%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;