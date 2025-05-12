import { apiClient } from './apiClient'
import { Loan, LoanApplicationData } from '../types'

const GATEWAY_API = process.env.NEXT_PUBLIC_GATEWAY_API || "http://localhost:8000"

export async function getLoans(token: string) {
  return apiClient<Loan[]>(`${GATEWAY_API}/loans`, { headers: { Authorization: `Bearer ${token}` } })
}

export async function getLoanById(id: string, token: string) {
  return apiClient<Loan>(`${GATEWAY_API}/loans/${id}`, { headers: { Authorization: `Bearer ${token}` } })
}

export async function createLoanApplication(loanData: LoanApplicationData, token: string) {
  return apiClient<Loan>(`${GATEWAY_API}/loans/apply`, {
    method: "POST",
    body: JSON.stringify(loanData),
    headers: { Authorization: `Bearer ${token}` }
  })
}
