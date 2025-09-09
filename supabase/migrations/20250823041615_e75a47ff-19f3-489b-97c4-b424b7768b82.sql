-- Create enum types for property categories and status
CREATE TYPE property_status AS ENUM ('active', 'sold', 'pending', 'draft');
CREATE TYPE property_type AS ENUM ('residential', 'commercial', 'luxury_apartment', 'villa', 'farmhouse', 'plot');
CREATE TYPE location_type AS ENUM ('delhi', 'gurgaon', 'mumbai', 'goa', 'faridabad', 'noida', 'ghaziabad');
CREATE TYPE inquiry_status AS ENUM ('new', 'contacted', 'qualified', 'converted', 'closed');

-- Properties table
CREATE TABLE public.properties (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    price DECIMAL(15,2) NOT NULL,
    location location_type NOT NULL,
    property_type property_type NOT NULL,
    bedrooms INTEGER,
    bathrooms INTEGER,
    area_sqft INTEGER,
    address TEXT,
    featured BOOLEAN DEFAULT false,
    status property_status DEFAULT 'active',
    amenities TEXT[],
    brochure_url TEXT,
    virtual_tour_url TEXT,
    main_image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Property images table for multiple images per property
CREATE TABLE public.property_images (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    property_id UUID NOT NULL REFERENCES public.properties(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    alt_text TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Blog posts table
CREATE TABLE public.blog_posts (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    featured_image_url TEXT,
    category TEXT DEFAULT 'general',
    published BOOLEAN DEFAULT false,
    published_at TIMESTAMP WITH TIME ZONE,
    author_name TEXT DEFAULT 'Joginder Properties',
    meta_title TEXT,
    meta_description TEXT,
    tags TEXT[],
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Contact inquiries table
CREATE TABLE public.contact_inquiries (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    property_id UUID REFERENCES public.properties(id) ON DELETE SET NULL,
    message TEXT NOT NULL,
    inquiry_type TEXT DEFAULT 'general',
    status inquiry_status DEFAULT 'new',
    source TEXT DEFAULT 'website',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Newsletter subscriptions table
CREATE TABLE public.newsletter_subscriptions (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    name TEXT,
    subscribed BOOLEAN DEFAULT true,
    source TEXT DEFAULT 'website',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.property_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for public read access (properties and blogs are public)
CREATE POLICY "Properties are publicly readable" 
ON public.properties 
FOR SELECT 
USING (status = 'active');

CREATE POLICY "Property images are publicly readable" 
ON public.property_images 
FOR SELECT 
USING (true);

CREATE POLICY "Published blog posts are publicly readable" 
ON public.blog_posts 
FOR SELECT 
USING (published = true);

-- RLS Policies for contact inquiries (anyone can insert, no public read)
CREATE POLICY "Anyone can submit contact inquiries" 
ON public.contact_inquiries 
FOR INSERT 
WITH CHECK (true);

-- RLS Policies for newsletter subscriptions (anyone can subscribe)
CREATE POLICY "Anyone can subscribe to newsletter" 
ON public.newsletter_subscriptions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can update their own subscription" 
ON public.newsletter_subscriptions 
FOR UPDATE 
USING (true);

-- Create indexes for better performance
CREATE INDEX idx_properties_location ON public.properties(location);
CREATE INDEX idx_properties_type ON public.properties(property_type);
CREATE INDEX idx_properties_status ON public.properties(status);
CREATE INDEX idx_properties_featured ON public.properties(featured);
CREATE INDEX idx_properties_price ON public.properties(price);
CREATE INDEX idx_property_images_property_id ON public.property_images(property_id);
CREATE INDEX idx_blog_posts_published ON public.blog_posts(published);
CREATE INDEX idx_blog_posts_category ON public.blog_posts(category);
CREATE INDEX idx_contact_inquiries_status ON public.contact_inquiries(status);
CREATE INDEX idx_newsletter_email ON public.newsletter_subscriptions(email);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_properties_updated_at
    BEFORE UPDATE ON public.properties
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON public.blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_contact_inquiries_updated_at
    BEFORE UPDATE ON public.contact_inquiries
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_newsletter_subscriptions_updated_at
    BEFORE UPDATE ON public.newsletter_subscriptions
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data
INSERT INTO public.properties (title, description, price, location, property_type, bedrooms, bathrooms, area_sqft, address, featured, amenities, main_image_url) VALUES
('Luxury Villa in Gurgaon', 'Spacious 4BHK villa with modern amenities in prime location', 12500000.00, 'gurgaon', 'villa', 4, 3, 3500, 'Sector 56, Gurgaon, Haryana', true, ARRAY['Swimming Pool', 'Garden', 'Parking', 'Security'], '/placeholder.svg'),
('Modern Apartment in Delhi', 'Contemporary 3BHK apartment with city views', 8500000.00, 'delhi', 'residential', 3, 2, 1800, 'Vasant Kunj, New Delhi', true, ARRAY['Gym', 'Parking', '24/7 Security', 'Elevator'], '/placeholder.svg'),
('Commercial Space Mumbai', 'Prime commercial property in business district', 25000000.00, 'mumbai', 'commercial', NULL, 2, 2500, 'Bandra Kurla Complex, Mumbai', false, ARRAY['Central AC', 'High Speed Internet', 'Parking', 'Reception'], '/placeholder.svg'),
('Beachfront Villa Goa', 'Stunning villa with ocean views and private beach access', 18500000.00, 'goa', 'villa', 5, 4, 4200, 'Candolim Beach, Goa', true, ARRAY['Private Beach', 'Swimming Pool', 'Garden', 'Balcony'], '/placeholder.svg'),
('Luxury Plot Noida', 'Premium residential plot in developing sector', 5500000.00, 'noida', 'plot', NULL, NULL, 2000, 'Sector 150, Noida, UP', false, ARRAY['Corner Plot', 'Park Facing', 'Wide Road'], '/placeholder.svg'),
('Farmhouse Faridabad', 'Peaceful farmhouse with organic garden', 15000000.00, 'faridabad', 'farmhouse', 6, 5, 5000, 'Surajkund Road, Faridabad', false, ARRAY['Organic Garden', 'Bore Well', 'Parking', 'Guest House'], '/placeholder.svg');

INSERT INTO public.blog_posts (title, content, excerpt, category, published, published_at, featured_image_url) VALUES
('Delhi Real Estate Market Trends 2024', 'The Delhi real estate market continues to show promising growth...', 'Analysis of current market trends in Delhi NCR region', 'market-trends', true, now(), '/placeholder.svg'),
('Investment Tips for First-Time Buyers', 'Buying your first property can be overwhelming...', 'Essential tips for new property investors', 'investment', true, now() - interval '2 days', '/placeholder.svg'),
('Luxury Properties in Gurgaon: A Complete Guide', 'Gurgaon has emerged as a premium destination for luxury real estate...', 'Everything you need to know about luxury properties in Gurgaon', 'luxury', true, now() - interval '1 week', '/placeholder.svg');