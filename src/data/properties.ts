export interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  price: string;
  originalPrice?: string;
  size: string;
  bedrooms?: number;
  bathrooms?: number;
  image: string;
  images?: string[];
  badge?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  type: 'apartment' | 'villa' | 'plot' | 'commercial';
  description?: string;
  amenities?: string[];
  pricePerSqft?: string;
}

export const sampleProperties: Property[] = [
  {
    id: '1',
    title: 'Luxury 3BHK Apartment in Gurgaon',
    location: 'Sector 84, Gurgaon',
    city: 'Gurgaon',
    price: '₹1.2 Crore',
    originalPrice: '₹1.5 Crore',
    size: '1,450 sq.ft',
    bedrooms: 3,
    bathrooms: 2,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    type: 'apartment',
    badge: '20% Off',
    isNew: true,
    isFeatured: true,
    description: 'Modern 3BHK apartment with premium amenities and excellent connectivity.',
    amenities: ['Swimming Pool', 'Gym', 'Parking', 'Security', 'Power Backup'],
    pricePerSqft: '₹8,276'
  },
  {
    id: '2',
    title: 'Premium Villa in South Delhi',
    location: 'Greater Kailash, Delhi',
    city: 'Delhi',
    price: '₹5.5 Crore',
    size: '3,200 sq.ft',
    bedrooms: 4,
    bathrooms: 4,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    type: 'villa',
    isFeatured: true,
    description: 'Spacious 4BHK villa with private garden and modern interiors.',
    amenities: ['Private Garden', 'Parking', 'Modular Kitchen', 'Terrace'],
    pricePerSqft: '₹17,188'
  },
  {
    id: '3',
    title: 'Modern 2BHK in Noida Extension',
    location: 'Sector 1, Noida Extension',
    city: 'Noida',
    price: '₹45 Lakh',
    size: '980 sq.ft',
    bedrooms: 2,
    bathrooms: 2,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
    type: 'apartment',
    isNew: true,
    description: 'Affordable 2BHK apartment perfect for young families.',
    amenities: ['Lift', 'Security', 'Power Backup', 'Water Supply'],
    pricePerSqft: '₹4,592'
  },
  {
    id: '4',
    title: 'Commercial Space in Connaught Place',
    location: 'CP, New Delhi',
    city: 'Delhi',
    price: '₹2.8 Crore',
    size: '1,800 sq.ft',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    type: 'commercial',
    badge: 'Prime Location',
    description: 'Premium commercial space in the heart of Delhi.',
    amenities: ['Central AC', 'Parking', 'Elevator', '24/7 Security'],
    pricePerSqft: '₹15,556'
  },
  {
    id: '5',
    title: 'Sea-View Apartment in Mumbai',
    location: 'Bandra West, Mumbai',
    city: 'Mumbai',
    price: '₹3.2 Crore',
    size: '1,100 sq.ft',
    bedrooms: 2,
    bathrooms: 2,
    image: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop',
    type: 'apartment',
    badge: 'Sea View',
    isFeatured: true,
    description: 'Beautiful 2BHK with stunning sea views and modern amenities.',
    amenities: ['Sea View', 'Swimming Pool', 'Gym', 'Parking', 'Security'],
    pricePerSqft: '₹29,091'
  },
  {
    id: '6',
    title: 'Luxury Villa in Goa',
    location: 'Candolim Beach, Goa',
    city: 'Goa',
    price: '₹4.5 Crore',
    size: '2,800 sq.ft',
    bedrooms: 3,
    bathrooms: 3,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
    type: 'villa',
    badge: 'Beach Side',
    isNew: true,
    description: 'Stunning beachside villa with private pool and garden.',
    amenities: ['Private Pool', 'Beach Access', 'Garden', 'Parking', 'Furnished'],
    pricePerSqft: '₹16,071'
  },
  {
    id: '7',
    title: 'Plot in Faridabad',
    location: 'Sector 85, Faridabad',
    city: 'Faridabad',
    price: '₹80 Lakh',
    size: '200 sq.yd',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
    type: 'plot',
    description: 'Well-located residential plot ready for construction.',
    amenities: ['Clear Title', 'Road Facing', 'Water Connection', 'Electricity'],
    pricePerSqft: '₹2,222'
  },
  {
    id: '8',
    title: 'Penthouse in Ghaziabad',
    location: 'Indirapuram, Ghaziabad',
    city: 'Ghaziabad',
    price: '₹1.8 Crore',
    size: '1,800 sq.ft',
    bedrooms: 3,
    bathrooms: 3,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    type: 'apartment',
    badge: 'Penthouse',
    isFeatured: true,
    description: 'Spacious penthouse with terrace and premium finishes.',
    amenities: ['Terrace', 'Lift', 'Parking', 'Security', 'Power Backup'],
    pricePerSqft: '₹10,000'
  }
];

export const featuredProperties = sampleProperties.filter(p => p.isFeatured);
export const newProperties = sampleProperties.filter(p => p.isNew);