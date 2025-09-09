import { Shield, Award, Users, MapPin, Clock, Target, Eye, Heart, Trophy, Handshake, Building, BarChart3, Star, CheckCircle, UserCheck, Globe, Briefcase, FileText, Phone } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2014', title: 'Company Founded', description: 'Started with a vision to transform real estate in Delhi NCR' },
    { year: '2016', title: 'First 100 Properties', description: 'Successfully helped 100 families find their dream homes' },
    { year: '2018', title: 'Mumbai Expansion', description: 'Extended services to Mumbai and surrounding areas' },
    { year: '2020', title: 'Digital Transformation', description: 'Launched online platform for virtual property tours' },
    { year: '2022', title: 'Goa Operations', description: 'Opened luxury property division in Goa' },
    { year: '2024', title: '1000+ Happy Families', description: 'Milestone achievement of serving over 1000 satisfied clients' },
  ];

  const team = [
    {
      name: 'Joginder Yadav',
      role: 'Founder & CEO',
      experience: '15+ Years',
      image: '../../public/Joginder-Profile.jpg?w=300&h=300&fit=crop&crop=face',
      description: 'Visionary leader with extensive experience in Delhi NCR real estate market.'
    },
    {
      name: 'Sachin Yadav',
      role: 'Maerketing Head',
      experience: '3+ Years',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
      description: 'Expert in luxury properties and client relationship management.'
    },
    {
      name: 'Vishal Mohanata',
      role: 'Legal Advisor',
      experience: '10+ Years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Ensures all transactions are legally compliant and transparent.'
    },
   
  ];

  const values = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Complete honesty in all our dealings with zero hidden charges or surprises.'
    },
    {
      icon: Heart,
      title: 'Trust',
      description: 'Building lasting relationships based on trust and mutual respect.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Delivering exceptional service that exceeds client expectations.'
    },
  ];

  const awards = [
    {
      icon: Trophy,
      title: 'Best Real Estate Consultancy',
      year: '2023',
      authority: 'Delhi Real Estate Awards'
    },
    {
      icon: Star,
      title: 'Customer Excellence Award',
      year: '2022',
      authority: 'Property Excellence India'
    },
    {
      icon: Award,
      title: 'RERA Compliant Partner',
      year: '2021',
      authority: 'Real Estate Authority'
    },
    {
      icon: Users,
      title: '1000+ Satisfied Clients',
      year: '2024',
      authority: 'Client Achievement Milestone'
    }
  ];

  const partners = [
    {
      icon: Building,
      name: 'HDFC Bank',
      type: 'Banking Partner'
    },
    {
      icon: FileText,
      name: 'Legal Associates',
      type: 'Legal Partners'
    },
    {
      icon: Handshake,
      name: 'Builders Alliance',
      type: 'Developer Network'
    },
    {
      icon: CheckCircle,
      name: 'Insurance Partners',
      type: 'Insurance Coverage'
    }
  ];

  const offices = [
    {
      city: 'Delhi (HQ)',
      address: 'Connaught Place, Central Delhi',
      phone: '+91 98765 43210',
      email: 'delhi@joginderproperties.com'
    },
    {
      city: 'Mumbai',
      address: 'Andheri West, Mumbai',
      phone: '+91 98765 43211',
      email: 'mumbai@joginderproperties.com'
    },
    {
      city: 'Goa',
      address: 'Panaji, North Goa',
      phone: '+91 98765 43212',
      email: 'goa@joginderproperties.com'
    }
  ];

  const technologies = [
    {
      icon: Globe,
      title: 'Virtual Tours',
      description: '360° property viewing technology'
    },
    {
      icon: BarChart3,
      title: 'Market Analytics',
      description: 'Real-time market data and trends'
    },
    {
      icon: UserCheck,
      title: 'Client Portal',
      description: 'Digital property management system'
    },
    {
      icon: Phone,
      title: 'Mobile App',
      description: 'Property search on-the-go'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            About Joginder Properties
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            For over a decade, we've been the trusted bridge between dreams and reality, 
            helping families across Delhi NCR, Mumbai, and Goa find their perfect homes.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2014 by Joginder Singh, our company started with a simple yet powerful vision: 
                to make property buying transparent, trustworthy, and accessible to every family.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                What began as a small real estate consultancy in Delhi has grown into a trusted name 
                across multiple cities, serving over 1000+ happy families and handling properties 
                worth over ₹500 crores.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we're not just a real estate company – we're your partners in creating 
                the foundation for your family's future.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="Our Office"
                className="rounded-2xl shadow-luxury w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-primary text-primary-foreground rounded-2xl p-6 shadow-hover">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
              Our Mission, Vision & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="card-premium text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-playfair font-semibold text-2xl text-foreground mb-4">
                Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide transparent, ethical, and professional real estate services that help 
                families achieve their property dreams with complete confidence and trust.
              </p>
            </div>

            <div className="card-premium text-center">
              <div className="w-16 h-16 bg-gradient-luxury rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-luxury-foreground" />
              </div>
              <h3 className="font-playfair font-semibold text-2xl text-foreground mb-4">
                Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted real estate brand in India, known for our integrity, 
                innovation, and unwavering commitment to client satisfaction.
              </p>
            </div>

            <div className="card-premium text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-playfair font-semibold text-2xl text-foreground mb-4">
                Values
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Transparency, Trust, Excellence, and Customer-centricity form the foundation 
                of everything we do at Joginder Properties.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-premium text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-lg text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted name in real estate
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card-premium">
                      <div className="text-luxury font-bold text-xl mb-2">{milestone.year}</div>
                      <h3 className="font-playfair font-semibold text-xl text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-8 h-8 bg-gradient-primary rounded-full border-4 border-background shadow-lg z-10" />
                  
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to helping you find your perfect property
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-premium text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto shadow-card group-hover:shadow-hover transition-all duration-300"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-luxury text-luxury-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {member.experience}
                  </div>
                </div>
                <h3 className="font-playfair font-semibold text-xl text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry recognition for our excellence and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="card-premium text-center group hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-luxury rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <award.icon className="w-8 h-8 text-luxury-foreground" />
                </div>
                <h3 className="font-playfair font-semibold text-lg text-foreground mb-2">
                  {award.title}
                </h3>
                <p className="text-luxury font-medium mb-1">{award.year}</p>
                <p className="text-sm text-muted-foreground">{award.authority}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
              Technology & Innovation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leveraging cutting-edge technology to enhance your property experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="card-premium text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  {tech.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Network Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
              Our Partner Network
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted partnerships that ensure seamless property transactions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="card-premium text-center group hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <partner.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {partner.type}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
              Our Office Locations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visit us at our convenient locations across major cities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="card-premium">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-lg text-foreground">
                      {office.city}
                    </h3>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {office.address}
                  </p>
                  <p className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    {office.phone}
                  </p>
                  <p className="flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    {office.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
                Community Impact
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe in giving back to the community that has supported our growth. 
                Through our CSR initiatives, we've contributed to education, housing for the 
                underprivileged, and environmental conservation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-luxury mr-3" />
                  <span className="text-foreground">50+ Families supported with affordable housing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-luxury mr-3" />
                  <span className="text-foreground">Educational scholarships for 100+ students</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-luxury mr-3" />
                  <span className="text-foreground">Green building initiatives in all projects</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop"
                alt="Community Impact"
                className="rounded-2xl shadow-luxury w-full"
              />
              <div className="absolute -top-6 -right-6 bg-gradient-luxury text-luxury-foreground rounded-2xl p-6 shadow-hover">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">CSR Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RERA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="card-premium text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">
              RERA Certified & Compliant
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are proud to be RERA (Real Estate Regulatory Authority) certified, ensuring 
              complete transparency, legal compliance, and protection for all our clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-luxury mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Legal Compliance</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-luxury mb-2">0</div>
                <div className="text-sm text-muted-foreground">Hidden Charges</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-luxury mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;