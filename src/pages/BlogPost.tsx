import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User, ArrowLeft, Clock, Share2, Bookmark } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  
  // Mock blog post data - in a real app this would come from a database
  const blogPost = {
    id: 1,
    title: 'Real Estate Investment Guide 2024: Delhi NCR Market Outlook',
    content: `
      <h2>Understanding the Current Market Landscape</h2>
      <p>The Delhi NCR real estate market in 2024 presents unprecedented opportunities for savvy investors. With infrastructure developments, policy changes, and economic recovery post-pandemic, the market dynamics have shifted significantly.</p>
      
      <h3>Key Market Trends</h3>
      <ul>
        <li><strong>Price Stabilization:</strong> After years of volatility, property prices in prime locations have stabilized, creating excellent entry points for investors.</li>
        <li><strong>Infrastructure Boom:</strong> Major infrastructure projects like the Regional Rapid Transit System (RRTS) are enhancing connectivity and property values.</li>
        <li><strong>Policy Support:</strong> Government initiatives like PM Awas Yojana and reduced GST rates on affordable housing are driving demand.</li>
        <li><strong>Digitization:</strong> The real estate sector's digital transformation has made property transactions more transparent and efficient.</li>
      </ul>

      <h3>Investment Hotspots in Delhi NCR</h3>
      <p>Based on our analysis of market data, infrastructure development, and growth potential, here are the top investment destinations:</p>
      
      <h4>Gurgaon Sectors to Watch</h4>
      <p>Sectors 70-80 on Dwarka Expressway offer excellent growth potential with upcoming metro connectivity and commercial developments. The average price appreciation in these areas has been 8-12% annually.</p>
      
      <h4>Noida Extension</h4>
      <p>With the completion of Aqua Line metro and upcoming Jewar Airport, Noida Extension presents compelling investment opportunities, especially for budget-conscious investors.</p>
      
      <h4>Faridabad New Sectors</h4>
      <p>Emerging sectors in Faridabad offer affordable options with good connectivity to both Delhi and Gurgaon, making them attractive for end-users and investors alike.</p>

      <h3>Investment Strategies for 2024</h3>
      <p>Successful real estate investment in today's market requires a strategic approach:</p>
      
      <ul>
        <li><strong>Location Analysis:</strong> Focus on areas with upcoming infrastructure projects and connectivity improvements.</li>
        <li><strong>Developer Track Record:</strong> Choose projects from reputable developers with RERA compliance and timely delivery history.</li>
        <li><strong>Market Timing:</strong> Current market conditions favor buyers with multiple options and negotiation power.</li>
        <li><strong>Future Growth Potential:</strong> Consider areas with planned commercial developments, educational institutions, and healthcare facilities.</li>
      </ul>

      <h3>Financial Planning and ROI Expectations</h3>
      <p>Real estate investments in Delhi NCR typically offer:</p>
      <ul>
        <li><strong>Capital Appreciation:</strong> 6-10% annually in prime locations</li>
        <li><strong>Rental Yields:</strong> 2-4% in residential, 6-8% in commercial properties</li>
        <li><strong>Tax Benefits:</strong> Deductions under Section 80C and Section 24(b)</li>
      </ul>

      <h3>Risk Mitigation Strategies</h3>
      <p>While real estate is generally considered a safe investment, consider these risk factors:</p>
      <ul>
        <li>Market liquidity challenges during economic downturns</li>
        <li>Regulatory changes affecting property values</li>
        <li>Construction delays and developer reliability</li>
        <li>Interest rate fluctuations affecting EMIs</li>
      </ul>

      <h3>Conclusion</h3>
      <p>The Delhi NCR real estate market in 2024 offers balanced opportunities for both investors and end-users. With careful research, strategic location selection, and financial planning, investors can achieve sustainable returns while contributing to their long-term wealth creation goals.</p>
      
      <p>For personalized investment advice based on your budget and requirements, consult with our RERA-certified real estate experts.</p>
    `,
    excerpt: 'Comprehensive analysis of Delhi NCR real estate market trends, investment opportunities, and expert predictions for 2024.',
    image: 'https://i.postimg.cc/fLTWsrHX/dhirajnew.jpg',
    author: 'Dheeraj Satija',
    authorImage: 'https://i.postimg.cc/fLTWsrHX/dhirajnew.jpg',
    date: '2024-01-15',
    category: 'Investment',
    readTime: '8 min read',
    tags: ['Investment', 'Delhi NCR', 'Market Analysis', 'Real Estate Trends']
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/blog">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-64 md:h-96 mb-8">
        <img 
          src={blogPost.image} 
          alt={blogPost.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container mx-auto">
            <Badge className="bg-gradient-luxury text-luxury-foreground mb-4">
              {blogPost.category}
            </Badge>
            <h1 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
              {blogPost.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b">
            <div className="flex items-center gap-3">
              <img 
                src={blogPost.authorImage} 
                alt={blogPost.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-foreground">{blogPost.author}</p>
                <p className="text-sm text-muted-foreground">Author</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{new Date(blogPost.date).toLocaleDateString()}</span>
            </div>
            
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{blogPost.readTime}</span>
            </div>

            <div className="flex gap-2 ml-auto">
              <Button variant="outline" size="sm">
                <Bookmark className="w-4 h-4 mr-1" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-1" />
                Share
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
              className="blog-content text-foreground"
            />
          </div>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t">
            <h4 className="font-semibold mb-3">Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <Card className="card-premium mt-8">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <img 
                  src={blogPost.authorImage} 
                  alt={blogPost.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">{blogPost.author}</h4>
                  <p className="text-muted-foreground mb-3">
                   Dheeraj Satija is a RERA-certified real estate expert with over 15 years of experience 
                    in the  Gurgaon, Delhi NCR, Mumbai, and Goa markets. He specializes in investment advisory, 
                    luxury properties, and helping families find their dream homes.
                  </p>
                  <Button className="btn-luxury">View All Articles</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Articles CTA */}
          <Card className="card-premium mt-8">
            <CardContent className="p-6 text-center">
              <h3 className="font-playfair text-2xl font-bold mb-4">
                Need Expert Property Advice?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get personalized consultation based on the insights shared in this article. 
                Our experts are ready to help you make informed investment decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact">
                
                <Button variant="outline" className="btn-luxury"
                >Book Free Consultation</Button>

                </Link>
                <Link to="/properties">
                  <Button variant="outline">Explore Properties</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;