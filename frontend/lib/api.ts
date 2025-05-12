// // API endpoints
// const AUTH_API = process.env.NEXT_PUBLIC_AUTH_API_URL || "http://localhost:8001"
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api"

// // API client for making requests
// async function apiClient<T>(
//   endpoint: string,
//   { data, token, headers, ...customConfig }: ApiRequestConfig = {},
// ): Promise<T> {
//   const config = {
//     method: data ? "POST" : "GET",
//     body: data ? JSON.stringify(data) : undefined,
//     headers: {
//       Authorization: token ? `Bearer ${token}` : "",
//       "Content-Type": "application/json",
//       ...headers,
//     },
//     ...customConfig,
//   }

//   try {
//     const response = await fetch(`${API_BASE_URL}${endpoint}`, config)

//     if (!response.ok) {
//       const errorData = await response.json()
//       return Promise.reject(new Error(errorData.message || "API request failed"))
//     }

//     const result = await response.json()
//     return result
//   } catch (error) {
//     console.error("API request error:", error)
//     return Promise.reject(error)
//   }
// }

// // Auth API
// export async function loginApi(email: string, password: string) {
//   return apiClient<{ token: string; user: User }>("/auth/login", {
//     data: { email, password },
//   })
// }

// export async function registerApi(userData: RegisterData) {
//   return apiClient<{ token: string; user: User }>("/auth/register", {
//     data: userData,
//   })
// }

// export async function getUserProfile(token: string) {
//   return apiClient<User>("/users/profile", { token })
// }

// // Loan API
// export async function getLoans(token: string) {
//   return apiClient<Loan[]>("/loans", { token })
// }

// export async function getLoanById(id: string, token: string) {
//   return apiClient<Loan>(`/loans/${id}`, { token })
// }

// export async function createLoanApplication(loanData: LoanApplicationData, token: string) {
//   return apiClient<Loan>("/loans/apply", {
//     data: loanData,
//     token,
//   })
// }

// // Payment API
// export async function getPayments(token: string) {
//   return apiClient<Payment[]>("/payments", { token })
// }

// export async function makePayment(paymentData: PaymentData, token: string) {
//   return apiClient<Payment>("/payments", {
//     data: paymentData,
//     token,
//     method: "POST",
//   })
// }

// // Document API
// export async function getDocuments(token: string) {
//   return apiClient<Document[]>("/documents", { token })
// }

// export async function getDocumentById(id: string, token: string) {
//   return apiClient<Document>(`/documents/${id}`, { token })
// }

// // Types
// export interface ApiRequestConfig extends RequestInit {
//   data?: any
//   token?: string
// }

// export interface User {
//   id: string
//   name: string
//   email: string
//   phone: string
//   creditScore?: number
// }

// export interface RegisterData {
//   fullName: string
//   email: string
//   phone: string
//   password: string
// }

// export interface Loan {
//   id: string
//   amount: number
//   term: number
//   interestRate: number
//   monthlyPayment: number
//   status: "pending" | "approved" | "rejected" | "active" | "completed"
//   purpose: string
//   disbursementDate?: string
//   contractNumber: string
//   remainingBalance?: number
//   paidAmount?: number
// }

// export interface LoanApplicationData {
//   amount: number
//   term: number
//   purpose: string
//   personalInfo: {
//     fullName: string
//     idNumber: string
//     dob: string
//     gender: string
//     phone: string
//     email: string
//     address: string
//   }
//   financialInfo: {
//     occupation: string
//     company: string
//     position: string
//     income: number
//     expense: number
//     hasOtherLoans: boolean
//     bankAccount: string
//     bank: string
//   }
//   loanDetails: {
//     purpose: string
//     amount: number
//     term: number
//     description: string
//     hasCollateral: boolean
//     collateralDescription?: string
//   }
//   selectedLoan: {
//     type: string
//     amount: number
//     term: number
//     interestRate: number
//     monthlyPayment: number
//   }
// }

// export interface Payment {
//   id: string
//   loanId: string
//   amount: number
//   dueDate: string
//   status: "pending" | "paid" | "overdue"
//   paidDate?: string
//   period: number
// }

// export interface PaymentData {
//   loanId: string
//   amount: number
//   paymentMethod: string
// }

// export interface Document {
//   id: string
//   loanId: string
//   type: "contract" | "schedule" | "receipt"
//   title: string
//   date: string
//   url: string
// }
