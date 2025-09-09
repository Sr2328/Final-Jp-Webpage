-- Add additional columns to properties table for enhanced functionality
ALTER TABLE public.properties 
ADD COLUMN video_tour_url TEXT,
ADD COLUMN latitude DECIMAL(10, 8),
ADD COLUMN longitude DECIMAL(11, 8),
ADD COLUMN rera_id TEXT,
ADD COLUMN rera_certificate_url TEXT,
ADD COLUMN possession_date DATE,
ADD COLUMN price_per_sqft NUMERIC,
ADD COLUMN total_area_acres DECIMAL(10, 4),
ADD COLUMN total_units INTEGER,
ADD COLUMN available_units INTEGER,
ADD COLUMN project_highlights TEXT[],
ADD COLUMN nearby_landmarks JSONB,
ADD COLUMN connectivity_details TEXT[];

-- Create payment_plans table
CREATE TABLE public.payment_plans (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  property_id UUID NOT NULL,
  plan_name TEXT NOT NULL,
  description TEXT,
  milestones JSONB NOT NULL, -- Array of payment milestones with percentages and amounts
  total_amount NUMERIC NOT NULL,
  booking_amount NUMERIC,
  down_payment_percentage DECIMAL(5,2),
  loan_percentage DECIMAL(5,2),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create emi_calculator_presets table
CREATE TABLE public.emi_calculator_presets (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  property_id UUID,
  loan_amount_min NUMERIC NOT NULL,
  loan_amount_max NUMERIC NOT NULL,
  interest_rate_min DECIMAL(5,2) NOT NULL,
  interest_rate_max DECIMAL(5,2) NOT NULL,
  tenure_years_min INTEGER NOT NULL,
  tenure_years_max INTEGER NOT NULL,
  default_interest_rate DECIMAL(5,2) NOT NULL,
  default_tenure_years INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create project_updates table for live project updates
CREATE TABLE public.project_updates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  property_id UUID NOT NULL,
  update_type TEXT NOT NULL, -- 'construction', 'approval', 'launch', 'possession'
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  update_date DATE NOT NULL,
  image_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on new tables
ALTER TABLE public.payment_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.emi_calculator_presets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_updates ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Payment plans are publicly readable" 
ON public.payment_plans 
FOR SELECT 
USING (true);

CREATE POLICY "EMI calculator presets are publicly readable" 
ON public.emi_calculator_presets 
FOR SELECT 
USING (true);

CREATE POLICY "Project updates are publicly readable" 
ON public.project_updates 
FOR SELECT 
USING (true);

-- Add foreign key constraints
ALTER TABLE public.payment_plans 
ADD CONSTRAINT fk_payment_plans_property 
FOREIGN KEY (property_id) REFERENCES public.properties(id) ON DELETE CASCADE;

ALTER TABLE public.project_updates 
ADD CONSTRAINT fk_project_updates_property 
FOREIGN KEY (property_id) REFERENCES public.properties(id) ON DELETE CASCADE;

-- Add triggers for updated_at
CREATE TRIGGER update_payment_plans_updated_at
BEFORE UPDATE ON public.payment_plans
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_project_updates_updated_at
BEFORE UPDATE ON public.project_updates
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data for enhanced properties
UPDATE public.properties 
SET 
  video_tour_url = CASE id
    WHEN (SELECT id FROM public.properties ORDER BY created_at LIMIT 1 OFFSET 0) THEN 'https://www.youtube.com/embed/example1'
    WHEN (SELECT id FROM public.properties ORDER BY created_at LIMIT 1 OFFSET 1) THEN 'https://www.youtube.com/embed/example2'
    ELSE NULL
  END,
  latitude = CASE location
    WHEN 'delhi' THEN 28.6139 + (RANDOM() * 0.1 - 0.05)
    WHEN 'gurgaon' THEN 28.4595 + (RANDOM() * 0.1 - 0.05)
    WHEN 'mumbai' THEN 19.0760 + (RANDOM() * 0.1 - 0.05)
    WHEN 'goa' THEN 15.2993 + (RANDOM() * 0.1 - 0.05)
    WHEN 'faridabad' THEN 28.4089 + (RANDOM() * 0.1 - 0.05)
    WHEN 'noida' THEN 28.5355 + (RANDOM() * 0.1 - 0.05)
    WHEN 'ghaziabad' THEN 28.6692 + (RANDOM() * 0.1 - 0.05)
  END,
  longitude = CASE location
    WHEN 'delhi' THEN 77.2090 + (RANDOM() * 0.1 - 0.05)
    WHEN 'gurgaon' THEN 77.0266 + (RANDOM() * 0.1 - 0.05)
    WHEN 'mumbai' THEN 72.8777 + (RANDOM() * 0.1 - 0.05)
    WHEN 'goa' THEN 74.1240 + (RANDOM() * 0.1 - 0.05)
    WHEN 'faridabad' THEN 77.3178 + (RANDOM() * 0.1 - 0.05)
    WHEN 'noida' THEN 77.3910 + (RANDOM() * 0.1 - 0.05)
    WHEN 'ghaziabad' THEN 77.4538 + (RANDOM() * 0.1 - 0.05)
  END,
  rera_id = 'RERA-' || UPPER(SUBSTR(location::text, 1, 3)) || '-' || EXTRACT(YEAR FROM created_at)::text || '-' || LPAD((ROW_NUMBER() OVER (ORDER BY created_at))::text, 4, '0'),
  rera_certificate_url = '/certificates/rera-' || id::text || '.pdf',
  possession_date = created_at::date + INTERVAL '2 years' + (RANDOM() * INTERVAL '1 year'),
  price_per_sqft = ROUND((price / COALESCE(area_sqft, 1000))::numeric, 0),
  total_area_acres = ROUND((RANDOM() * 10 + 1)::numeric, 2),
  total_units = (RANDOM() * 500 + 50)::integer,
  available_units = (RANDOM() * 200 + 10)::integer,
  project_highlights = ARRAY[
    'Prime Location',
    '24/7 Security',
    'Modern Amenities',
    'Green Spaces'
  ],
  nearby_landmarks = jsonb_build_object(
    'schools', ARRAY['DPS School', 'Ryan International'],
    'hospitals', ARRAY['Max Hospital', 'Apollo Clinic'],
    'malls', ARRAY['DLF Mall', 'Select City Walk'],
    'metro', ARRAY['Metro Station - 500m']
  ),
  connectivity_details = ARRAY[
    'NH-8 Highway - 2 km',
    'IGI Airport - 45 min',
    'Cyber City - 15 min'
  ];

-- Insert sample payment plans
INSERT INTO public.payment_plans (property_id, plan_name, description, milestones, total_amount, booking_amount, down_payment_percentage, loan_percentage)
SELECT 
  id,
  'Standard Payment Plan',
  'Flexible payment options with easy EMI',
  jsonb_build_array(
    jsonb_build_object('milestone', 'Booking', 'percentage', 10, 'amount', price * 0.10),
    jsonb_build_object('milestone', 'Foundation', 'percentage', 20, 'amount', price * 0.20),
    jsonb_build_object('milestone', 'Structure', 'percentage', 30, 'amount', price * 0.30),
    jsonb_build_object('milestone', 'Completion', 'percentage', 40, 'amount', price * 0.40)
  ),
  price,
  price * 0.10,
  30.00,
  70.00
FROM public.properties
LIMIT 5;

-- Insert sample EMI calculator presets
INSERT INTO public.emi_calculator_presets (property_id, loan_amount_min, loan_amount_max, interest_rate_min, interest_rate_max, tenure_years_min, tenure_years_max, default_interest_rate, default_tenure_years)
SELECT 
  id,
  price * 0.50,
  price * 0.90,
  7.50,
  12.00,
  5,
  30,
  8.50,
  20
FROM public.properties
LIMIT 3;

-- Insert sample project updates
INSERT INTO public.project_updates (property_id, update_type, title, description, update_date, is_featured)
SELECT 
  id,
  'construction',
  'Construction Update - ' || title,
  'Latest progress on the construction of ' || title || '. Foundation work completed successfully.',
  CURRENT_DATE - INTERVAL '30 days',
  featured
FROM public.properties
WHERE featured = true
LIMIT 3;