import { apiClient } from './apiClient'

const GATEWAY_API = process.env.NEXT_PUBLIC_GATEWAY_API || "http://localhost:8000"

export async function getDocuments(token: string) {
  return apiClient<Document[]>(`${GATEWAY_API}/documents`, { headers: { Authorization: `Bearer ${token}` } })
}

export async function getDocumentById(id: string, token: string) {
  return apiClient<Document>(`${GATEWAY_API}/documents/${id}`, { headers: { Authorization: `Bearer ${token}` } })
}
