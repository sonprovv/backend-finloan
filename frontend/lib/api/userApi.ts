import { apiClient } from './apiClient'
import { User } from '../types'

const AUTH_API = process.env.NEXT_PUBLIC_AUTH_API || "http://localhost:8001"

export async function getUserProfile(token: string) {
  return apiClient<User>(`${AUTH_API}/users/profile`, { headers: { Authorization: `Bearer ${token}` } })
}
