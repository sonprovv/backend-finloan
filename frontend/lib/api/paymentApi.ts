import { apiClient } from './apiClient'
import { Payment, PaymentData } from '../types'

const GATEWAY_API = process.env.NEXT_PUBLIC_GATEWAY_API || "http://localhost:8000"

export async function getPayments(token: string) {
  return apiClient<Payment[]>(`${GATEWAY_API}/payments`, { headers: { Authorization: `Bearer ${token}` } })
}

export async function makePayment(paymentData: PaymentData, token: string) {
  return apiClient<Payment>(`${GATEWAY_API}/payments`, {
    method: "POST",
    body: JSON.stringify(paymentData),
    headers: { Authorization: `Bearer ${token}` }
  })
}
