import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export type Property = {
  id: string;
  title: string;
  description: string | null;
  price: number;
  location: 'delhi' | 'gurgaon' | 'mumbai' | 'goa' | 'faridabad' | 'noida' | 'ghaziabad';
  property_type: 'residential' | 'commercial' | 'luxury_apartment' | 'villa' | 'farmhouse' | 'plot';
  bedrooms: number | null;
  bathrooms: number | null;
  area_sqft: number | null;
  address: string | null;
  featured: boolean | null;
  status: 'active' | 'sold' | 'pending' | 'draft' | null;
  amenities: string[] | null;
  brochure_url: string | null;
  virtual_tour_url: string | null;
  main_image_url: string | null;
  created_at: string;
  updated_at: string;
  // Enhanced fields
  video_tour_url: string | null;
  latitude: number | null;
  longitude: number | null;
  rera_id: string | null;
  rera_certificate_url: string | null;
  possession_date: string | null;
  price_per_sqft: number | null;
  total_area_acres: number | null;
  total_units: number | null;
  available_units: number | null;
  project_highlights: string[] | null;
  nearby_landmarks: any | null;
  connectivity_details: string[] | null;
};

export type PropertyFilters = {
  location?: 'delhi' | 'gurgaon' | 'mumbai' | 'goa' | 'faridabad' | 'noida' | 'ghaziabad';
  property_type?: 'residential' | 'commercial' | 'luxury_apartment' | 'villa' | 'farmhouse' | 'plot';
  min_price?: number;
  max_price?: number;
  bedrooms?: number;
};

export function useProperties(filters?: PropertyFilters) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProperties();
  }, [filters]);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from('properties')
        .select('*')
        .eq('status', 'active')
        .order('created_at', { ascending: false });

      if (filters?.location) {
        query = query.eq('location', filters.location);
      }
      if (filters?.property_type) {
        query = query.eq('property_type', filters.property_type);
      }
      if (filters?.min_price) {
        query = query.gte('price', filters.min_price);
      }
      if (filters?.max_price) {
        query = query.lte('price', filters.max_price);
      }
      if (filters?.bedrooms) {
        query = query.eq('bedrooms', filters.bedrooms);
      }

      const { data, error } = await query;

      if (error) throw error;
      setProperties(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getFeaturedProperties = () => {
    return properties.filter(property => property.featured);
  };

  return {
    properties,
    loading,
    error,
    refetch: fetchProperties,
    getFeaturedProperties
  };
}

export function useProperty(id: string) {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProperty = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('properties')
          .select('*')
          .eq('id', id)
          .eq('status', 'active')
          .single();

        if (error) throw error;
        setProperty(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Property not found');
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  return { property, loading, error };
}