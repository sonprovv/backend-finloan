import React, { useEffect, useState } from 'react';
import { notificationService } from '../services/notificationService';
import { Table, Tag, Space, Typography } from 'antd';
import type { NotificationResponse } from '../services/notificationService';
import type { Card as CardType } from 'antd';
const { Card } = require('antd');

const { Title } = Typography;

const NotificationHistory: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationResponse[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      // Using a test customer ID - replace with actual customer ID in production
      const data = await notificationService.getCustomerNotifications('CUST001');
      setNotifications(data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => (
        <Tag color={
          type === 'DISBURSEMENT' ? 'green' :
          type === 'PAYMENT_REMINDER' ? 'orange' :
          type === 'LOAN_COMPLETION' ? 'blue' :
          'purple'
        }>
          {type}
        </Tag>
      ),
    },
    {
      title: 'Channel',
      dataIndex: 'channel',
      key: 'channel',
      render: (channel: string) => (
        <Tag color={
          channel === 'EMAIL' ? 'blue' :
          channel === 'SMS' ? 'green' :
          'purple'
        }>
          {channel}
        </Tag>
      ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
      ellipsis: true,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={
          status === 'SENT' ? 'success' :
          status === 'PENDING' ? 'processing' :
          'error'
        }>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (date: string) => new Date(date).toLocaleString(),
    },
  ];

  return (
    <Card>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Title level={2}>Notification History</Title>
        <Table
          columns={columns}
          dataSource={notifications}
          loading={loading}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showTotal: (total: number) => `Total ${total} notifications`,
          }}
        />
      </Space>
    </Card>
  );
};

export default NotificationHistory; 