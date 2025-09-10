import React, { useState } from 'react';
import { Hero } from '@/components/Hero';
import { ProjectUpdateModal } from '@/components/ProjectUpdateModal';
import { DigitalBusinessCard } from '@/components/DigitalBusinessCard';
import { FlippableBusinessCard } from '@/components/FlippableBusinessCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useProperties } from '@/hooks/useProperties';
import { useProjectUpdates } from '@/hooks/useProjectUpdates';
import { PropertyCard } from '@/components/PropertyCard';
import { Shield, Award, Users, Clock, ArrowRight, Star, CheckCircle, TrendingUp, Phone, User, Eye, Home, Building, MapPin, Calculator, Briefcase, Target, UserCheck, FileText, Handshake, Trophy, BarChart3, Building2, Car, Trees, Banknote, X, Calendar, Bed, Bath, Square, IndianRupee, Gift, Zap } from 'lucide-react';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { InteractiveBusinessCard } from '@/components/InteractiveBusinessCard';
import { Link } from 'react-router-dom';
import  image26 from '../assets/26.jpg'

const Index = () => {
  const { properties, getFeaturedProperties } = useProperties();
  const { getFeaturedUpdates } = useProjectUpdates();
  const [showBusinessCard, setShowBusinessCard] = useState(false);
  const [showPromoCard, setShowPromoCard] = useState(true);
  
  const featuredProperties = getFeaturedProperties();
  const featuredUpdates = getFeaturedUpdates();

  const promoProperty = {
    title: "Gokulam The Sanctuary",
    location: "Sector 7, Sohna",
    type: "Luxury Apartments",
    launchDate: "Q2 2024",
    startingPrice: "₹1.34 Cr",
    originalPrice: "₹1.50 Cr",
    savings: "₹16 Lakh",
    image: "https://i.postimg.cc/SNSm4LCJ/Gokulam-The-Sanctuary-luxury-Floor-pdf-image-013.jpg",
    features: ["3 BHK", "Premium Amenities", "RERA Approved", "Ready to Move"],
    amenities: ["Swimming Pool", "Gym & Spa", "Kids Play Area", "24/7 Security"],
    highlights: ["Limited Time Offer", "Pre-Launch Price", "Best ROI Guaranteed"]
  };

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'RERA Certified',
      description: 'All our properties are RERA registered ensuring complete transparency and legal compliance.'
    },
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Over a decade of expertise in Delhi NCR, Mumbai, and Goa real estate markets.'
    },
    {
      icon: Users,
      title: '1000+ Happy Families',
      description: 'Successfully helped over 1000 families find their dream homes with complete satisfaction.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your property-related queries and needs.'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Gurgaon',
      rating: 5,
      text: 'Joginder Properties helped us find our dream 3BHK in Gurgaon. Their transparency and support throughout the process was exceptional.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'Excellent service! They showed us properties that perfectly matched our budget and requirements. Highly recommended.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b977?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Amit Patel',
      location: 'Delhi',
      rating: 5,
      text: 'Professional team with deep market knowledge. Made our property investment journey smooth and hassle-free.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const propertyTypes = [
    {
      icon: Home,
      title: 'Residential',
      description:  '3BHK, Apartments',
      count: '50+ Properties'
    },
    {
      icon: Building,
      title: 'Commercial',
      description: 'Offices, Retail Spaces, Shops',
      count: '20+ Properties'
    },
    {
      icon: Building2,
      title: 'Luxury Villas',
      description: 'Independent Houses & Villas',
      count: '10+ Properties'
    },
    {
      icon: Trees,
      title: 'Plots & Land',
      description: 'Residential & Commercial Plots',
      count: '15+ Properties'
    }
  ];

  const locations = [
    { name: 'Delhi', properties: '5+', growth: '+15%' },
    { name: 'Gurgaon', properties: '50+', growth: '+20%' },
    { name: 'Mumbai', properties: '5+', growth: '+12%' },
  { name: 'Goa', properties: '5+', growth: '+25%' },
    { name: 'Noida', properties: '4+', growth: '+18%' },
    { name: 'Faridabad', properties: '3+', growth: '+10%' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Free consultation to understand your requirements and budget'
    },
    {
      step: '02', 
      title: 'Property Search',
      description: 'Curated property selection based on your preferences'
    },
    {
      step: '03',
      title: 'Site Visits',
      description: 'Organized site visits with expert guidance'
    },
    {
      step: '04',
      title: 'Documentation',
      description: 'Complete legal verification and documentation support'
    },
    {
      step: '05',
      title: 'Handover',
      description: 'Smooth property handover with after-sales support'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Happy Families' },
    { number: '₹150Cr+', label: 'Properties Sold' },
    { number: '10+', label: 'Locations Covered' },
    { number: '15+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Promotional Property Card Overlay */}
{showPromoCard && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-500 max-h-[90vh]">
      
      {/* Close Button (always visible on scroll) */}
      <div className="sticky top-0 z-20 flex justify-end p-4 bg-gradient-to-b from-white/80 to-transparent">
        <button
          onClick={() => setShowPromoCard(false)}
          className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image Section */}
        <div className="relative min-h-[250px] md:min-h-full">
          <img
            src={promoProperty.image}
            alt={promoProperty.title}
            className="w-full h-full object-cover"
          />
          
          {/* Floating Badges */}
          <div className="absolute top-4 left-4 space-y-2">
            <Badge className="bg-red-500 text-white px-3 py-1 text-sm font-semibold animate-pulse">
              🔥 HOT DEAL
            </Badge>
            <Badge className="bg-green-500 text-white px-3 py-1 text-sm">
              ✅ RERA Approved
            </Badge>
          </div>

          {/* Savings Badge */}
          <div className="absolute bottom-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-xl font-bold shadow-lg">
            <Gift className="w-4 h-4 inline mr-2" />
            Save {promoProperty.savings}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Badge variant="outline" className="text-xs border-orange-200 text-orange-600">
                LIMITED TIME OFFER
              </Badge>
              <Badge variant="outline" className="text-xs border-blue-200 text-blue-600">
                {promoProperty.launchDate}
              </Badge>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {promoProperty.title}
            </h1>
            
            <div className="flex items-center text-gray-600 mb-4 text-sm md:text-base">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{promoProperty.location}</span>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-xl md:text-2xl font-bold text-green-600">
                  {promoProperty.startingPrice}*
                </span>
                <span className="text-base md:text-lg text-gray-500 line-through">
                  {promoProperty.originalPrice}
                </span>
              </div>
              <p className="text-xs md:text-sm text-gray-600">
                *Starting price for 3BHK 1600 Sq.ft
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3">
            {promoProperty.features.map((feature, index) => (
              <div key={index} className="flex items-center bg-gray-50 rounded-lg p-3">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-xs md:text-sm font-medium text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900 flex items-center">
              <Zap className="w-4 h-4 mr-2 text-yellow-500" />
              Key Highlights
            </h3>
            <div className="space-y-1">
              {promoProperty.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center text-xs md:text-sm text-gray-600">
                  <ArrowRight className="w-3 h-3 mr-2 text-blue-500" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <Link to="/contact" className="block">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold text-sm md:text-lg shadow-lg hover:shadow-xl transition-all duration-200">
                <Calendar className="w-5 h-5 mr-2" />
                Book Site Visit
              </Button>
            </Link>
            
            <Link to="/properties" className="block">
              <Button variant="outline" className="w-full py-3 rounded-xl font-semibold text-sm md:text-lg hover:bg-gray-50">
                <Eye className="w-5 h-5 mr-2" />
                View More Details
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
            <p className="text-xs md:text-sm text-gray-600 mb-2">
              🎯 <strong>Exclusive Launch Offer</strong> - Valid till month end!
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              📞 Call now: <strong className="text-blue-600">+91 9818223938</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

      {/* Hero Section with Featured Properties */}
      <Hero />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Joginder Properties?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in finding the perfect property with complete transparency and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="card-premium text-center animate-fade-in">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Our Success Story in Numbers
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Over 15 years of excellence in real estate, building trust one property at a time
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in group">
                <div className="relative">
                  <AnimatedCounter 
                    end={parseInt(stat.number.replace(/[^\d]/g, '')) || 1000}
                    suffix={stat.number.includes('+') ? '+' : stat.number.includes('Cr') ? 'Cr+' : ''}
                    className="text-4xl md:text-5
                    xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="text-sm md:text-base opacity-90 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Property Types Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Property Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse portfolio of residential and commercial properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {propertyTypes.map((type, index) => (
              <div key={index} className="card-premium text-center group hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-luxury rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <type.icon className="w-8 h-8 text-luxury-foreground" />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-foreground mb-2">
                  {type.title}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {type.description}
                </p>
                <div className="text-sm font-medium text-primary">
                  {type.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations We Serve Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Locations We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strategic presence across major real estate markets in India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <div key={index} className="card-premium group hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-playfair font-semibold text-xl text-foreground mb-2">
                      {location.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {location.properties} Properties
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-luxury font-bold text-lg mb-1">
                      {location.growth}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Market Growth
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures a smooth property buying experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-primary opacity-30" />
                  )}
                </div>
                <h3 className="font-playfair font-semibold text-lg text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Coming Soon</Badge>
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
              Upcoming <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get early access to our upcoming premium developments with exclusive pre-launch offers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "EON 7 Luxury Apartments",
                location: "Sector 62, Gurugram",
                type: "Luxury Apartments",
                launchDate: "Q2 2026",
                startingPrice: "₹3.10 Cr",
                image: "../../src/assets/17.jpg"
              },
              {
                title: "Sobha Aranya",
                location: "Sector 81, Karma Lakelands",
                type: "Premium Villas",
                launchDate: "Q4 2026",
                startingPrice: "₹7.5 Cr",
                image: image26
              },
              {
                title: "Gokulam The Sanctuary",
                location: "Sector 7, Sohna",
                type: "3 BHK luxury Apartments",
                launchDate: "Q4 2026",
                startingPrice: "₹1.34 Cr",
                image: "../../src/assets/Gokulam The Sanctuary luxury Floor.pdf-image-013.jpg"
              }
            ].map((project, index) => (
              <div key={index} className="card-premium group">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-luxury text-luxury-foreground">
                    Coming Soon
                  </Badge>
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {project.type}
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Launch: {project.launchDate}</span>
                    <span className="font-semibold text-primary">Starting {project.startingPrice}</span>
                  </div>

                  <Link to="/contact" className="block">
                    <Button variant="outline" className="w-full group">
                      Register Interest
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/properties">
              <Button className="btn-luxury">
                View All Upcoming Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties with guaranteed ROI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.slice(0, 3).map((property) => (
              <div key={property.id} className="animate-fade-in">
                <PropertyCard property={property} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/properties">
              <Button className="btn-luxury">
                Explore All Properties
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Live Project Updates Section */}
      {featuredUpdates.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-primary text-primary-foreground mb-4">
                Live Updates
              </Badge>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
                Latest Project Progress
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Stay updated with real-time construction progress and project milestones
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredUpdates.slice(0, 3).map((update) => (
                <Card key={update.id} className="card-premium hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {update.update_type.replace('_', ' ').toUpperCase()}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(update.update_date).toLocaleDateString()}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{update.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      {update.description.slice(0, 120)}...
                    </p>
                    {update.image_url && (
                      <img 
                        src={update.image_url} 
                        alt={update.title}
                        className="w-full h-32 object-cover rounded-md"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <ProjectUpdateModal>
                <Button variant="outline" className="group">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View All Live Updates
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </ProjectUpdateModal>
            </div>
          </div>
        </section>
      )}

      {/* Digital Business Card Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Connect with Our Expert
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get personalized guidance from our RERA-certified real estate professional
            </p>
          </div>

          <div className="flex justify-center">
            <InteractiveBusinessCard></InteractiveBusinessCard>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from families who found their dream homes with Joginder Properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-premium animate-scale-in">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-luxury fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Get personalized property recommendations and expert guidance from our experienced team
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="btn-luxury px-8 py-4 inline-flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Book Free Consultation
              </button>
            </Link>
            <Link to="/properties">
              <button className="border-2 border-white text-white bg-transparent px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-primary transition-all duration-300">
                Explore Properties
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access Button - Show Promo Again */}
      {!showPromoCard && (
        <button
          onClick={() => setShowPromoCard(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-40 animate-bounce hover:animate-none group"
          title="View Featured Property"
        >
          <div className="relative">
            <Home className="w-6 h-6" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          </div>
          <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            🔥 Hot Deal - Gokulam Sanctuary
          </span>
        </button>
      )}
    </div>
  );
};

export default Index;