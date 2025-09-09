import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export type ProjectUpdate = {
  id: string;
  property_id: string;
  update_type: string;
  title: string;
  description: string;
  update_date: string;
  image_url: string | null;
  is_featured: boolean | null;
  created_at: string;
  updated_at: string;
};

export function useProjectUpdates(propertyId?: string) {
  const [updates, setUpdates] = useState<ProjectUpdate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUpdates();
  }, [propertyId]);

  const fetchUpdates = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from('project_updates')
        .select('*')
        .order('update_date', { ascending: false });

      if (propertyId) {
        query = query.eq('property_id', propertyId);
      }

      const { data, error } = await query;

      if (error) throw error;
      setUpdates(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch project updates');
    } finally {
      setLoading(false);
    }
  };

  const getFeaturedUpdates = () => {
    return updates.filter(update => update.is_featured);
  };

  return {
    updates,
    loading,
    error,
    refetch: fetchUpdates,
    getFeaturedUpdates
  };
}