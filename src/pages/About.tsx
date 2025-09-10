import { Shield, Award, Users, MapPin, Clock, Target, Eye, Heart, Trophy, Handshake, Building, BarChart3, Star, CheckCircle, UserCheck, Globe, Briefcase, FileText, Phone, Home, Building2 } from 'lucide-react';
import { motion } from "framer-motion";
import imagesbi from '../assets/sbi logo-22.png'
import  imagekotak from '../assets/kotak mahindra logo.png'
import  imagehdfc from '../assets/hdfc banl log.png'
import  imageaxis from '../assets/axis bank logo.png'
import  imageidfc from '../assets/idfc-first-bank.webp'
import  imageyesbank from '../assets/yes bank.png'
import  importm3m from '../assets/images (2).png'
import  importdlf from '../assets/images (1).png'
import  importgodrej from '../assets/1509703549-2822.jpg'
import  importsobha from '../assets/images (4).png'
import  importkrisumi from '../assets/images (3).png'
import  importherohomes from '../assets/unnamed.png'

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
  city: 'Gurugram (Sector 81)',
  address: 'Sector 81, Gurugram, Haryana',
  phone: '+91 9818223938',
  email: 'joginderpropertiesncr@gmail.com'
},
{
  city: 'Gurugram (Sector 70)',
  address: 'Sector 70, Gurugram, Haryana',
  phone: '+91 9711197200',
  email: 'joginderpropertiesncr@gmail.com'
},
{
  city: 'Gurugram (Sector 48)',
  address: 'Sector 48, Gurugram, Haryana',
  phone: '+91 9818223938 / +91 9711197200',
  email: 'joginderpropertiesncr@gmail.com'
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
const bankingPartners = [
  { name: "Axis Bank", logo: imageaxis },
  { name: "HDFC Bank", logo: imagehdfc },
  { name: "SBI", logo: imagesbi },
  { name: "Kotak Mahindra", logo: imagekotak },
  { name: "IDFC First Bank", logo: imageidfc },
  { name: "Yes Bank", logo: imageyesbank },
];




  return (
    <div className="overflow-x-hidden">
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
   
 <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="font-playfair text-4xl md:text-6xl font-bold leading-tight">
            About <span className="text-yellow-400">Joginder Properties</span>
          </h1>
          <p className="text-lg text-white/90 leading-relaxed">
            For over a decade, we've been the trusted bridge between dreams and reality, 
            helping families across <span className="font-semibold">Delhi NCR</span>, 
            <span className="font-semibold"> Gurugram,</span>,
            <span className="font-semibold"> Mumbai</span>, and 
            <span className="font-semibold"> Goa</span> find their perfect homes.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
            <div>
              <div className="flex justify-center lg:justify-start mb-2">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold">1000+</h3>
              <p className="text-sm text-white/80">Happy Families</p>
            </div>
            <div>
              <div className="flex justify-center lg:justify-start mb-2">
                <Building2 className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold">500 Cr+</h3>
              <p className="text-sm text-white/80">Property Value</p>
            </div>
            <div>
              <div className="flex justify-center lg:justify-start mb-2">
                <Home className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold">15+ yrs</h3>
              <p className="text-sm text-white/80">Experience</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/properties"
              className="px-6 py-3 rounded-xl bg-yellow-400 text-blue-900 font-semibold shadow-md"
            >
              View Properties
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/contact"
              className="px-6 py-3 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10"
            >
              Book Consultation
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="../../src/assets/about-hero.png?w=800"
              alt="Luxury Apartments"
              width={600}
              height={400}
              className="rounded-2xl"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-blue-900 px-6 py-4 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold">#1 Choice</h3>
            <p className="text-sm font-medium">in Gurgaon NCR Realty</p>
          </div>
        </motion.div>
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
                src="https://i.postimg.cc/P5DNzFj7/ABOUT.png?w=600&h=400&fit=crop"
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
 
      {/*  Banking Partner Network Section */}
    
   <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
            Our Banking Partner Network
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partnered with India’s leading banks to make your property
            transactions faster, safer, and more seamless.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {bankingPartners.map((partner, index) => (
            <motion.div
              key={index}
              className="w-28 h-28 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-200 cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 max-w-[70%] object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Partners Section */}
     

<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left Content */}
      <div>
        <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
          Our Trusted Partners
        </h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          We proudly collaborate with the most reputed real estate developers 
          across Gurugram and Delhi NCR. These partnerships allow us to bring 
          you premium projects, transparent deals, and world-class experiences.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <CheckCircle className="w-6 h-6 text-luxury mr-3" />
            <span className="text-foreground">DLF, M3M, Godrej, Sobha</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-6 h-6 text-luxury mr-3" />
            <span className="text-foreground">Krisumi, Hero Homes, Max Estates</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-6 h-6 text-luxury mr-3" />
            <span className="text-foreground">Signature, Gokulam & many more</span>
          </div>
        </div>
      </div>

      {/* Right Logos with Animation */}
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } }
        }}
      >
        {[
          { src: "../../src/assets/images (1).png", alt: "DLF" },
          { src: "../../src/assets/images (2).png", alt: "M3M" },
          { src: "../../src/assets/1509703549-2822.jpg", alt: "Godrej" },
          { src: "../../src/assets/images (4).png", alt: "Sobha" },
          { src: "../../src/assets/images (3).png", alt: "Krisumi" },
          { src: "../../src/assets/unnamed.png", alt: "Hero Homes" }
        ].map((partner, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.08, boxShadow: "0px 10px 25px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={partner.src} alt={partner.alt} className="max-h-12 object-contain" />
          </motion.div>
        ))}
      </motion.div>
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

      {/* RERA Details Card */}
      <div className="bg-muted rounded-2xl shadow-lg p-6 mb-10 text-left">
        <h3 className="text-xl font-semibold text-foreground mb-4">RERA Registration Details</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li><span className="font-medium text-foreground">Registration No:</span> RC/HRERA/GGM/2524/1130/2024/237</li>
          <li><span className="font-medium text-foreground">Issued To:</span> Mr. Joginder</li>
          <li><span className="font-medium text-foreground">Role:</span> Real Estate Agent</li>
          <li><span className="font-medium text-foreground">Office Address:</span> Unit No. 211, 1st Floor, Block-B1, Elan Corner Walk, Sector-74, Gurugram, Haryana – 122004</li>
          <li><span className="font-medium text-foreground">Approval Date:</span> 03 April 2024</li>
          <li><span className="font-medium text-foreground">Issued By:</span> HARERA Gurugram</li>
        </ul>
      </div>

      {/* Highlights */}
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
    </div>
  );
};

export default About;