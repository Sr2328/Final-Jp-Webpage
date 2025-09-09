import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export type ContactInquiry = {
  name: string;
  email: string;
  phone?: string;
  property_id?: string;
  message: string;
  inquiry_type?: string;
};

export function useContact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitInquiry = async (inquiry: ContactInquiry) => {
    try {
      setLoading(true);
      setError(null);

      const { error } = await supabase
        .from('contact_inquiries')
        .insert([inquiry]);

      if (error) throw error;
      
      return { success: true };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return {
    submitInquiry,
    loading,
    error
  };
}

export function useNewsletter() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subscribe = async (email: string, name?: string) => {
    try {
      setLoading(true);
      setError(null);

      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email, name }]);

      if (error) throw error;
      
      return { success: true };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return {
    subscribe,
    loading,
    error
  };
}