import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";
import { Calculator, PieChart as PieChartIcon, TrendingUp } from "lucide-react";

/* -------------------- EMI Calculation Logic -------------------- */
interface EMIBreakupMonth {
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

function calculateEMI(
  loanAmount: number,
  annualRate: number,
  tenureYears: number
): EMICalculation {
  const monthlyRate = annualRate / 12 / 100;
  const months = tenureYears * 12;

  // EMI formula
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

/* -------------------- EMI Calculator Component -------------------- */
interface EMICalculatorProps {
  defaultLoanAmount?: number;
}

export const EMICalculator: React.FC<EMICalculatorProps> = ({
  defaultLoanAmount = 5000000,
}) => {
  const [loanAmount, setLoanAmount] = useState(defaultLoanAmount);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [calculation, setCalculation] = useState<EMICalculation | null>(null);

  useEffect(() => {
    const result = calculateEMI(loanAmount, interestRate, tenure);
    setCalculation(result);
  }, [loanAmount, interestRate, tenure]);

  if (!calculation) {
    return null;
  }

  const pieData = [
    {
      name: "Principal",
      value: calculation.principalAmount,
      color: "hsl(var(--primary))",
    },
    {
      name: "Interest",
      value: calculation.totalInterest,
      color: "hsl(var(--secondary))",
    },
  ];

  const yearlyBreakup = calculation.breakup.reduce((acc, month) => {
    const year = Math.ceil(month.month / 12);
    const existing = acc.find((item) => item.year === year);

    if (existing) {
      existing.principal += month.principal;
      existing.interest += month.interest;
    } else {
      acc.push({
        year,
        principal: month.principal,
        interest: month.interest,
      });
    }
    return acc;
  }, [] as { year: number; principal: number; interest: number }[]);

  return (
    <Card className="card-premium">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-playfair">
          <Calculator className="w-6 h-6 text-primary" />
          EMI Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Input Controls */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="loanAmount">Loan Amount</Label>
              <Input
                id="loanAmount"
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="text-right"
              />
              <div className="text-sm text-muted-foreground">
                ₹{loanAmount.toLocaleString("en-IN")}
              </div>
            </div>

            <div className="space-y-3">
              <Label>Interest Rate: {interestRate}%</Label>
              <Slider
                value={[interestRate]}
                onValueChange={(value) => setInterestRate(value[0])}
                max={15}
                min={6}
                step={0.25}
                className="slider-primary"
              />
              <div className="text-sm text-muted-foreground">
                Range: 6% - 15%
              </div>
            </div>

            <div className="space-y-3">
              <Label>Tenure: {tenure} years</Label>
              <Slider
                value={[tenure]}
                onValueChange={(value) => setTenure(value[0])}
                max={30}
                min={5}
                step={1}
                className="slider-primary"
              />
              <div className="text-sm text-muted-foreground">
                Range: 5 - 30 years
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="text-center p-4 bg-gradient-primary rounded-lg text-primary-foreground">
              <div className="text-2xl font-bold">
                ₹{calculation.monthlyEMI.toLocaleString("en-IN")}
              </div>
              <div className="text-sm opacity-90">Monthly EMI</div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-background/50 rounded">
                <span>Principal Amount</span>
                <span className="font-semibold">
                  ₹{calculation.principalAmount.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between p-3 bg-background/50 rounded">
                <span>Total Interest</span>
                <span className="font-semibold text-destructive">
                  ₹{calculation.totalInterest.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between p-3 bg-background/50 rounded font-semibold">
                <span>Total Amount</span>
                <span>₹{calculation.totalAmount.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="text-center">
            <h4 className="font-semibold mb-4 flex items-center justify-center gap-2">
              <PieChartIcon className="w-4 h-4" />
              Loan Breakup
            </h4>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => [
                    `₹${value.toLocaleString("en-IN")}`,
                    "",
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-2 text-sm">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                Principal
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                Interest
              </div>
            </div>
          </div>
        </div>

        {/* Yearly Breakup Chart */}
        <div className="mt-8">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Yearly Payment Breakup
          </h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={yearlyBreakup.slice(0, 10)}>
              <XAxis dataKey="year" />
              <YAxis
                tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`}
              />
              <Tooltip
                formatter={(value: number, name) => [
                  `₹${value.toLocaleString("en-IN")}`,
                  name === "principal" ? "Principal" : "Interest",
                ]}
              />
              <Bar dataKey="principal" stackId="a" fill="hsl(var(--primary))" />
              <Bar dataKey="interest" stackId="a" fill="hsl(var(--secondary))" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-4">
          <Button
            className="btn-luxury flex-1"
            onClick={() => {
              const message = `Hi, I'm interested in pre-approved loan for ${calculation.principalAmount.toLocaleString(
                "en-IN"
              )} at ${interestRate}% for ${tenure} years. EMI: ₹${calculation.monthlyEMI.toLocaleString(
                "en-IN"
              )}`;
              const encodedMessage = encodeURIComponent(message);
              window.open(
                `https://wa.me/919205413041?text=${encodedMessage}`,
                "_blank"
              );
            }}
          >
            Get Pre-approved Loan
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => {
              const reportData = `
EMI CALCULATION REPORT
======================
Loan Amount: ₹${calculation.principalAmount.toLocaleString("en-IN")}
Interest Rate: ${interestRate}% per annum
Tenure: ${tenure} years

Monthly EMI: ₹${calculation.monthlyEMI.toLocaleString("en-IN")}
Total Amount: ₹${calculation.totalAmount.toLocaleString("en-IN")}
Total Interest: ₹${calculation.totalInterest.toLocaleString("en-IN")}

Generated on: ${new Date().toLocaleDateString()}
              `;

              const element = document.createElement("a");
              element.setAttribute(
                "href",
                "data:text/plain;charset=utf-8," +
                  encodeURIComponent(reportData)
              );
              element.setAttribute("download", "emi-calculation-report.txt");
              element.style.display = "none";
              document.body.appendChild(element);
              element.click();
              document.body.removeChild(element);
            }}
          >
            Download Report
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
