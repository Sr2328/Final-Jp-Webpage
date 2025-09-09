import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export type PropertyImage = {
  id: string;
  property_id: string;
  image_url: string;
  alt_text: string | null;
  order_index: number | null;
  created_at: string;
};

export function usePropertyImages(propertyId: string) {
  const [images, setImages] = useState<PropertyImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!propertyId) return;

    const fetchPropertyImages = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('property_images')
          .select('*')
          .eq('property_id', propertyId)
          .order('order_index', { ascending: true });

        if (error) throw error;
        setImages(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch property images');
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyImages();
  }, [propertyId]);

  return { images, loading, error };
}