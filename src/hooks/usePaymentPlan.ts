import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export type PaymentPlan = {
  id: string;
  property_id: string;
  plan_name: string;
  description: string | null;
  milestones: any;
  total_amount: number;
  booking_amount: number | null;
  down_payment_percentage: number | null;
  loan_percentage: number | null;
  created_at: string;
  updated_at: string;
};

export function usePaymentPlan(propertyId: string) {
  const [paymentPlan, setPaymentPlan] = useState<PaymentPlan | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!propertyId) return;

    const fetchPaymentPlan = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('payment_plans')
          .select('*')
          .eq('property_id', propertyId)
          .single();

        if (error && error.code !== 'PGRST116') throw error;
        setPaymentPlan(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch payment plan');
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentPlan();
  }, [propertyId]);

  return { paymentPlan, loading, error };
}