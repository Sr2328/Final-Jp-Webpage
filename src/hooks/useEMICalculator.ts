export interface EMIBreakupMonth {
  month: number;
  principal: number;
  interest: number;
}

export interface EMICalculation {
  monthlyEMI: number;
  totalAmount: number;
  totalInterest: number;
  principalAmount: number;
  breakup: EMIBreakupMonth[];
}

export function calculateEMI(
  loanAmount: number,
  annualRate: number,
  tenureYears: number
): EMICalculation {
  const monthlyRate = annualRate / 12 / 100;
  const months = tenureYears * 12;

  // EMI Formula
  const emi =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  let balance = loanAmount;
  const breakup: EMIBreakupMonth[] = [];
  let totalInterest = 0;

  for (let m = 1; m <= months; m++) {
    const interest = balance * monthlyRate;
    const principal = emi - interest;
    balance -= principal;
    totalInterest += interest;

    breakup.push({
      month: m,
      principal,
      interest,
    });
  }

  return {
    monthlyEMI: Math.round(emi),
    totalAmount: Math.round(emi * months),
    totalInterest: Math.round(totalInterest),
    principalAmount: loanAmount,
    breakup,
  };
}
