import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount)
}

export function formatDate(date: Date | string): string {
  if (typeof date === "string") {
    date = new Date(date)
  }
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date)
}

export function calculateMonthlyPayment(principal: number, rate: number, term: number): number {
  // Convert annual rate to monthly rate and term to months
  const monthlyRate = rate / 100 / 12
  const termInMonths = term

  // Calculate monthly payment using the formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const payment =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, termInMonths)) / (Math.pow(1 + monthlyRate, termInMonths) - 1)

  return Math.round(payment)
}

export function generateLoanSchedule(principal: number, rate: number, term: number) {
  const monthlyRate = rate / 100 / 12
  const monthlyPayment = calculateMonthlyPayment(principal, rate, term)
  const schedule = []

  let balance = principal
  let totalInterest = 0
  let totalPrincipal = 0

  for (let i = 1; i <= term; i++) {
    const interest = balance * monthlyRate
    const principalPaid = monthlyPayment - interest
    balance -= principalPaid

    totalInterest += interest
    totalPrincipal += principalPaid

    schedule.push({
      period: i,
      payment: monthlyPayment,
      principal: principalPaid,
      interest: interest,
      totalInterest: totalInterest,
      balance: Math.max(0, balance),
    })
  }

  return schedule
}
