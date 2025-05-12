import React, { useState } from 'react';
import { notificationService } from '../services/notificationService';
import { Button, Form, Input, message } from 'antd';
import Select from 'antd/lib/select';
import type { Card as CardType } from 'antd';
const { Card } = require('antd');

const NotificationTest: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const typeOptions = [
    { value: 'DISBURSEMENT', label: 'Disbursement' },
    { value: 'PAYMENT_REMINDER', label: 'Payment Reminder' },
    { value: 'LOAN_COMPLETION', label: 'Loan Completion' },
    { value: 'VERIFICATION', label: 'Verification' }
  ];

  const channelOptions = [
    { value: 'EMAIL', label: 'Email' },
    { value: 'SMS', label: 'SMS' },
    { value: 'BOTH', label: 'Both' }
  ];

  const handleSubmit = async (values: any) => {
    try {
      setLoading(true);
      const response = await notificationService.sendNotification({
        customer_id: values.customerId,
        type: values.type,
        channel: values.channel,
        title: values.title,
        content: values.content,
        metadata: {
          loan_id: values.loanId,
          amount: values.amount,
          due_date: values.dueDate
        }
      });

      message.success('Notification sent successfully!');
      form.resetFields();
    } catch (error) {
      message.error('Failed to send notification');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card title="Test Notification Service" style={{ maxWidth: 600, margin: '20px auto' }}>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          customerId: 'CUST001',
          type: 'PAYMENT_REMINDER',
          channel: 'EMAIL',
          title: 'Payment Reminder',
          content: 'Your payment is due in 3 days',
          loanId: 'LOAN001',
          amount: 1000000,
          dueDate: '2024-03-20'
        }}
      >
        <Form.Item
          name="customerId"
          label="Customer ID"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="type"
          label="Notification Type"
          rules={[{ required: true }]}
        >
          <Select options={typeOptions} />
        </Form.Item>

        <Form.Item
          name="channel"
          label="Channel"
          rules={[{ required: true }]}
        >
          <Select options={channelOptions} />
        </Form.Item>

        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="content"
          label="Content"
          rules={[{ required: true }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          name="loanId"
          label="Loan ID"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="amount"
          label="Amount"
          rules={[{ required: true }]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          name="dueDate"
          label="Due Date"
          rules={[{ required: true }]}
        >
          <Input type="date" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Send Test Notification
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default NotificationTest; 