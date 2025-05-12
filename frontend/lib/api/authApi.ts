import { apiClient } from './apiClient'
import { RegisterData, User } from '../types'

const AUTH_API = process.env.NEXT_PUBLIC_AUTH_API || "http://localhost:8000"

export async function loginApi(username: string, password: string) {
  return apiClient<{ token: string; user: User }>(`${AUTH_API}/auth/login`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
  })
}

export async function registerApi(userData: RegisterData) {
  return apiClient<{ token: string; user: User }>(`${AUTH_API}/auth/register`, {
    method: "POST",
    body: JSON.stringify(userData),
  })
}
