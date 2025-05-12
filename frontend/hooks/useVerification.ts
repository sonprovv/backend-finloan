import { useState } from 'react';
import { verificationService, VerificationRequest, VerificationDocument } from '../lib/verificationService';

export const useVerification = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createVerification = async (data: VerificationRequest) => {
    try {
      setLoading(true);
      setError(null);
      const response = await verificationService.createVerification(data);
      return response;
    } catch (err: any) {
      setError(err.message || 'Failed to create verification request');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getVerifications = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await verificationService.getVerifications();
      return response;
    } catch (err: any) {
      setError(err.message || 'Failed to fetch verifications');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getVerificationById = async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await verificationService.getVerificationById(id);
      return response;
    } catch (err: any) {
      setError(err.message || 'Failed to fetch verification details');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateVerificationStatus = async (id: string, status: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await verificationService.updateVerificationStatus(id, status);
      return response;
    } catch (err: any) {
      setError(err.message || 'Failed to update verification status');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const uploadDocument = async (data: VerificationDocument) => {
    try {
      setLoading(true);
      setError(null);
      const response = await verificationService.uploadDocument(data);
      return response;
    } catch (err: any) {
      setError(err.message || 'Failed to upload document');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const verifyIdCard = async (customerId: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await verificationService.verifyIdCard(customerId);
      return response;
    } catch (err: any) {
      setError(err.message || 'Failed to verify ID card');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getCustomerVerificationStatus = async (customerId: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await verificationService.getCustomerVerificationStatus(customerId);
      return response;
    } catch (err: any) {
      setError(err.message || 'Failed to fetch customer verification status');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getCustomerVerificationHistory = async (customerId: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await verificationService.getCustomerVerificationHistory(customerId);
      return response;
    } catch (err: any) {
      setError(err.message || 'Failed to fetch verification history');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    createVerification,
    getVerifications,
    getVerificationById,
    updateVerificationStatus,
    uploadDocument,
    verifyIdCard,
    getCustomerVerificationStatus,
    getCustomerVerificationHistory,
  };
}; 