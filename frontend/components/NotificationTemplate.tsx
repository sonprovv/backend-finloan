'use client';

import React, { useState } from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import { notificationService } from '../services/notificationService';

const { TextArea } = Input;

interface TemplateFormData {
  type: string;
  channel: string;
  title: string;
  content: string;
  variables: string[];
}

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

const variableOptions = [
  { value: 'customer_name', label: 'Customer Name' },
  { value: 'amount', label: 'Amount' },
  { value: 'due_date', label: 'Due Date' },
  { value: 'loan_id', label: 'Loan ID' }
];

const NotificationTemplate: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: TemplateFormData) => {
    try {
      setLoading(true);
      const response = await notificationService.sendNotification({
        customer_id: 'CUST001', // Test customer ID
        type: values.type,
        channel: values.channel,
        title: values.title,
        content: values.content,
        metadata: {
          email: 'sonpham2304@gmail.com',
          loan_id: 'LOAN001',
          amount: 1000000,
          due_date: '2024-03-20'
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
    <div style={{ maxWidth: 800, margin: '20px auto', padding: '24px', background: '#fff', borderRadius: '2px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
      <h2 style={{ marginBottom: '24px' }}>Create Notification Template</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          type: 'PAYMENT_REMINDER',
          channel: 'EMAIL',
          title: 'Payment Reminder - {amount} due on {due_date}',
          content: 'Dear {customer_name},\n\nThis is a reminder that your payment of {amount} is due on {due_date}.\n\nBest regards,\nFinLoan Team',
          variables: ['customer_name', 'amount', 'due_date']
        }}
      >
        <Form.Item
          name="type"
          label="Template Type"
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
          label="Title Template"
          rules={[{ required: true }]}
          help="Use {variable_name} for dynamic content"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="content"
          label="Content Template"
          rules={[{ required: true }]}
          help="Use {variable_name} for dynamic content"
        >
          <TextArea rows={6} />
        </Form.Item>

        <Form.Item
          name="variables"
          label="Template Variables"
          rules={[{ required: true }]}
          help="List of variables used in the template"
        >
          <Select mode="tags" placeholder="Add variables" options={variableOptions} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Send Test Notification
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NotificationTemplate; 