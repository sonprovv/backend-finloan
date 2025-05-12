import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface VerificationRequest {
  customer_id: string;
  document_type: string;
  document_number: string;
  // Add other fields as needed
}

export interface VerificationResponse {
  id: string;
  status: string;
  created_at: string;
  updated_at: string;
  // Add other fields as needed
}

export interface VerificationDocument {
  file: File;
  document_type: string;
}

export const verificationService = {
  // Create new verification request
  createVerification: async (data: VerificationRequest): Promise<VerificationResponse> => {
    const response = await axios.post(`${API_BASE_URL}/api/verifications/verifications`, data);
    return response.data;
  },

  // Get list of verification requests
  getVerifications: async (): Promise<VerificationResponse[]> => {
    const response = await axios.get(`${API_BASE_URL}/api/verifications/verifications`);
    return response.data;
  },

  // Get specific verification request details
  getVerificationById: async (id: string): Promise<VerificationResponse> => {
    const response = await axios.get(`${API_BASE_URL}/api/verifications/verifications/${id}`);
    return response.data;
  },

  // Update verification request status
  updateVerificationStatus: async (id: string, status: string): Promise<VerificationResponse> => {
    const response = await axios.put(`${API_BASE_URL}/api/verifications/verifications/${id}`, { status });
    return response.data;
  },

  // Upload verification document
  uploadDocument: async (data: VerificationDocument): Promise<any> => {
    const formData = new FormData();
    formData.append('file', data.file);
    formData.append('document_type', data.document_type);
    
    const response = await axios.post(
      `${API_BASE_URL}/api/verifications/verifications/documents`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  },

  // Verify ID card information
  verifyIdCard: async (customerId: string): Promise<any> => {
    const response = await axios.post(
      `${API_BASE_URL}/api/verifications/verifications/id-card/verify/${customerId}`
    );
    return response.data;
  },

  // Get overall verification status for a customer
  getCustomerVerificationStatus: async (customerId: string): Promise<any> => {
    const response = await axios.get(
      `${API_BASE_URL}/api/verifications/verifications/customers/${customerId}/status`
    );
    return response.data;
  },

  // Get verification history for a customer
  getCustomerVerificationHistory: async (customerId: string): Promise<any> => {
    const response = await axios.get(
      `${API_BASE_URL}/api/verifications/verifications/history/${customerId}`
    );
    return response.data;
  },
}; 