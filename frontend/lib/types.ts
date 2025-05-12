// Types
export interface ApiRequestConfig extends RequestInit {
    data?: any
    token?: string
  }
  
  export interface User {
    id: string
    name: string
    email: string
    creditScore?: number
  }
  
  export interface RegisterData {
    username: string
    email: string
    password: string
  }
  
  export interface Loan {
    id: string
    amount: number
    term: number
    interestRate: number
    monthlyPayment: number
    status: "pending" | "approved" | "rejected" | "active" | "completed"
    purpose: string
    disbursementDate?: string
    contractNumber: string
    remainingBalance?: number
    paidAmount?: number
  }
  
  export interface LoanApplicationData {
    amount: number
    term: number
    purpose: string
    personalInfo: {
      fullName: string
      idNumber: string
      dob: string
      gender: string
      phone: string
      email: string
      address: string
    }
    financialInfo: {
      occupation: string
      company: string
      position: string
      income: number
      expense: number
      hasOtherLoans: boolean
      bankAccount: string
      bank: string
    }
    loanDetails: {
      purpose: string
      amount: number
      term: number
      description: string
      hasCollateral: boolean
      collateralDescription?: string
    }
    selectedLoan: {
      type: string
      amount: number
      term: number
      interestRate: number
      monthlyPayment: number
    }
  }
  
  export interface Payment {
    id: string
    loanId: string
    amount: number
    dueDate: string
    status: "pending" | "paid" | "overdue"
    paidDate?: string
    period: number
  }
  
  export interface PaymentData {
    loanId: string
    amount: number
    paymentMethod: string
  }
  
  export interface Document {
    id: string
    loanId: string
    type: "contract" | "schedule" | "receipt"
    title: string
    date: string
    url: string
  }
  