import axios from 'axios';

const API_URL = 'http://localhost:3314/api';

export interface NotificationRequest {
  customer_id: string;
  type: string;
  channel: string;
  title: string;
  content: string;
  metadata?: {
    loan_id?: string;
    amount?: number;
    due_date?: string;
  };
}

export interface NotificationResponse {
  id: string;
  customer_id: string;
  type: string;
  channel: string;
  title: string;
  content: string;
  status: string;
  created_at: string;
}

class NotificationService {
  async sendNotification(data: NotificationRequest): Promise<NotificationResponse> {
    const response = await axios.post(`${API_URL}/notifications`, data);
    return response.data;
  }

  async getCustomerNotifications(customerId: string): Promise<NotificationResponse[]> {
    const response = await axios.get(`${API_URL}/notifications/customer/${customerId}`);
    return response.data;
  }

  async getNotificationStatus(notificationId: string): Promise<NotificationResponse> {
    const response = await axios.get(`${API_URL}/notifications/${notificationId}`);
    return response.data;
  }
}

export const notificationService = new NotificationService();