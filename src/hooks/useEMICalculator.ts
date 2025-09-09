import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export type EMIPreset = {
  id: string;
  property_id: string | null;
  loan_amount_min: number;
  loan_amount_max: number;
  interest_rate_min: number;
  interest_rate_max: number;
  tenure_years_min: number;
  tenure_years_max: number;
  default_interest_rate: number;
  default_tenure_years: number;
  created_at: string;
};

export type EMICalculation = {
  monthlyEMI: number;
  totalAmount: number;
  totalInterest: number;
  principalAmount: number;
  breakup: {
    month: number;
    emi: number;
    principal: number;
    interest: number;
    balance: number;
  }[];
};

export function useEMIPreset(propertyId?: string) {
  const [preset, setPreset] = useState<EMIPreset | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPreset = async () => {
      try {
        setLoading(true);
        let query = supabase.from('emi_calculator_presets').select('*');
        
        if (propertyId) {
          query = query.eq('property_id', propertyId);
        }
        
        const { data, error } = await query.limit(1).single();

        if (error && error.code !== 'PGRST116') throw error;
        setPreset(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch EMI preset');
      } finally {
        setLoading(false);
      }
    };

    fetchPreset();
  }, [propertyId]);

  return { preset, loading, error };
}

export function calculateEMI(
  loanAmount: number,
  annualRate: number,
  tenureYears: number
): EMICalculation {
  const monthlyRate = annualRate / 100 / 12;
  const totalMonths = tenureYears * 12;
  
  const monthlyEMI = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths) / 
                     (Math.pow(1 + monthlyRate, totalMonths) - 1);
  
  const totalAmount = monthlyEMI * totalMonths;
  const totalInterest = totalAmount - loanAmount;
  
  // Calculate month-wise breakup
  const breakup = [];
  let balance = loanAmount;
  
  for (let month = 1; month <= totalMonths; month++) {
    const interestPayment = balance * monthlyRate;
    const principalPayment = monthlyEMI - interestPayment;
    balance -= principalPayment;
    
    breakup.push({
      month,
      emi: monthlyEMI,
      principal: principalPayment,
      interest: interestPayment,
      balance: Math.max(0, balance)
    });
  }
  
  return {
    monthlyEMI: Math.round(monthlyEMI),
    totalAmount: Math.round(totalAmount),
    totalInterest: Math.round(totalInterest),
    principalAmount: loanAmount,
    breakup
  };
}