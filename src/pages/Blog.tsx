import React, { useState } from 'react';
import { Calendar, User, ArrowRight, TrendingUp, Home, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [email, setEmail] = useState('');
  const featuredPost = {
    id: 1,
    title: 'Real Estate Investment Guide 2024: Delhi NCR Market Outlook',
    excerpt: 'Comprehensive analysis of Delhi NCR real estate market trends, investment opportunities, and expert predictions for 2024.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop',
    author: 'Joginder Singh',
    date: '2024-01-15',
    category: 'Investment',
    readTime: '8 min read',
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Top 10 Emerging Locations in Gurgaon for Property Investment',
      excerpt: 'Discover the most promising areas in Gurgaon that offer excellent ROI and growth potential for property investors.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop',
      author: 'Priya Sharma',
      date: '2024-01-12',
      category: 'Investment',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Understanding RERA: Complete Guide for Property Buyers',
      excerpt: 'Everything you need to know about RERA regulations, your rights as a buyer, and how it protects your investment.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop',
      author: 'Rajesh Kumar',
      date: '2024-01-10',
      category: 'Legal',
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'Mumbai vs Goa: Where Should You Buy Your Second Home?',
      excerpt: 'Comprehensive comparison of Mumbai and Goa real estate markets for second home buyers and holiday home investors.',
      image: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=400&h=250&fit=crop',
      author: 'Amit Patel',
      date: '2024-01-08',
      category: 'Market Trends',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Home Loan Interest Rates: Current Trends and Predictions',
      excerpt: 'Latest updates on home loan interest rates from major banks and tips to get the best rates for your property purchase.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
      author: 'Financial Expert',
      date: '2024-01-05',
      category: 'Finance',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Vastu Tips for Your New Home: Creating Positive Energy',
      excerpt: 'Traditional Vastu Shastra principles to consider when buying or designing your new home for prosperity and wellbeing.',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=250&fit=crop',
      author: 'Vastu Consultant',
      date: '2024-01-03',
      category: 'Tips',
      readTime: '8 min read'
    },
    {
      id: 7,
      title: 'Property Documentation Checklist: What to Verify Before Buying',
      excerpt: 'Essential documents to check and verify before finalizing your property purchase to avoid legal complications.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop',
      author: 'Legal Team',
      date: '2024-01-01',
      category: 'Legal',
      readTime: '12 min read'
    }
  ];

  const categories = [
    { name: 'All', count: blogPosts.length + 1, icon: Home },
    { name: 'Investment', count: 3, icon: TrendingUp },
    { name: 'Market Trends', count: 2, icon: DollarSign },
    { name: 'Legal', count: 2, icon: User },
    { name: 'Tips', count: 1, icon: Home },
    { name: 'Finance', count: 1, icon: DollarSign }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const displayedPosts = filteredPosts.slice(0, visiblePosts);

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    try {
      // Here you would typically send the email to your backend
      // For now, we'll just show a success message
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
    }
  };

  const handleBookConsultation = () => {
    const message = 'Hi, I would like to book a real estate consultation. Please contact me.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919818223938?text=${encodedMessage}`, '_blank');
  };

  const handleContactExperts = () => {
    const message = 'Hi, I need expert advice on real estate. Please get in touch.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919818223938?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
 <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-24 sm:py-32 overflow-hidden">
  <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
    {/* Heading */}
    <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-4 relative inline-block">
      Real Estate Blog
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-400 rounded-full mt-2"></span>
    </h1>

    {/* Description */}
    <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed text-white/90">
      Stay updated with the latest market trends, investment tips, and expert insights from the real estate industry. Knowledge is key to smart property decisions.
    </p>

    {/* CTA Button */}
    <a
      href="/blogs"
      className="inline-block px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
    >
      Explore Articles
    </a>

    {/* Decorative floating shapes */}
    <div className="absolute -top-16 -left-16 w-48 h-48 border-2 border-white/20 rounded-full animate-pulse-slow"></div>
    <div className="absolute -bottom-16 -right-16 w-48 h-48 border-2 border-white/20 rounded-full animate-pulse-slow"></div>
    <div className="absolute top-1/3 right-10 w-6 h-6 bg-yellow-400 rounded-full opacity-60 animate-bounce-slow"></div>
    <div className="absolute bottom-1/4 left-12 w-4 h-4 bg-yellow-400 rounded-full opacity-50 animate-bounce-slow"></div>
  </div>
</section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">
              Featured Article
            </h2>
          </div>

          <div className="card-premium max-w-4xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4 bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="bg-luxury/20 text-luxury px-3 py-1 rounded-full font-medium">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                  {featuredPost.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{featuredPost.author}</p>
                      <p className="text-sm text-muted-foreground">Author</p>
                    </div>
                  </div>
                  
                  <Link to={`/blog/${featuredPost.id}`}>
                    <button className="btn-hero px-6 py-3 inline-flex items-center gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Blog Posts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:col-span-1">
              <div className="card-premium sticky top-24">
                <h3 className="font-playfair font-semibold text-xl text-foreground mb-6">
                  Categories
                </h3>
                
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors text-left group ${
                        selectedCategory === category.name 
                          ? 'bg-primary text-primary-foreground' 
                          : 'hover:bg-muted'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <category.icon className={`w-4 h-4 flex-shrink-0 ${
                          selectedCategory === category.name 
                            ? 'text-primary-foreground' 
                            : 'text-primary'
                        }`} />
                        <span className={`${
                          selectedCategory === category.name 
                            ? 'text-primary-foreground' 
                            : 'text-foreground group-hover:text-primary'
                        }`}>
                          {category.name}
                        </span>
                      </div>
                      <span className="text-muted-foreground text-sm">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Newsletter Signup */}
                <div className="mt-8 p-6 bg-gradient-primary rounded-xl text-primary-foreground">
                  <h4 className="font-semibold mb-2">Stay Updated</h4>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Get the latest real estate insights delivered to your inbox.
                  </p>
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2.5 rounded-lg text-foreground bg-background border-0 focus:ring-2 focus:ring-luxury"
                      required
                    />
                    <Button type="submit" className="w-full btn-luxury py-2.5 text-sm">
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Main Content - Blog Posts */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-playfair text-3xl font-bold text-foreground">
                  Latest Articles
                </h2>
                <select className="p-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-background">
                  <option>Sort by Latest</option>
                  <option>Sort by Popular</option>
                  <option>Sort by Category</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {displayedPosts.length > 0 ? (
                  displayedPosts.map((post) => (
                  <article key={post.id} className="card-property group">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-luxury/90 text-luxury-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="font-playfair font-semibold text-xl text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-primary-foreground" />
                          </div>
                          <span className="text-sm text-muted-foreground">{post.author}</span>
                        </div>
                        
                        <Link to={`/blog/${post.id}`}>
                          <button className="text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-1 text-sm font-medium">
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </article>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-8">
                    <p className="text-muted-foreground">No articles found in this category.</p>
                    <button 
                      onClick={() => setSelectedCategory('All')}
                      className="text-primary hover:underline mt-2"
                    >
                      View All Articles
                    </button>
                  </div>
                )}
              </div>

              {/* Load More */}
              {visiblePosts < filteredPosts.length && (
                <div className="text-center mt-12">
                  <Button 
                    onClick={handleLoadMore}
                    className="btn-outline-luxury px-8 py-3"
                  >
                    Load More Articles ({filteredPosts.length - visiblePosts} remaining)
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="card-premium text-center max-w-3xl mx-auto">
            <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">
              Need Expert Property Advice?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our real estate experts are here to help you make informed decisions. 
              Get personalized consultation for your property needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleBookConsultation}
                className="btn-hero px-8 py-4"
              >
                Book Consultation
              </Button>
              <Button 
                onClick={handleContactExperts}
                className="btn-outline-luxury px-8 py-4"
              >
                Contact Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;