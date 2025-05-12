import React, { useEffect, useState } from 'react';
import { useVerification } from '../hooks/useVerification';

interface VerificationHistoryProps {
  customerId: string;
}

export const VerificationHistory: React.FC<VerificationHistoryProps> = ({ customerId }) => {
  const {
    loading,
    error,
    getCustomerVerificationHistory,
    getCustomerVerificationStatus,
  } = useVerification();

  const [history, setHistory] = useState<any[]>([]);
  const [status, setStatus] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [historyData, statusData] = await Promise.all([
          getCustomerVerificationHistory(customerId),
          getCustomerVerificationStatus(customerId),
        ]);
        setHistory(historyData);
        setStatus(statusData);
      } catch (err) {
        console.error('Failed to fetch verification data:', err);
      }
    };

    fetchData();
  }, [customerId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Overall Status */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Overall Verification Status</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Status</p>
            <p className="font-medium">{status?.status || 'N/A'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Last Updated</p>
            <p className="font-medium">
              {status?.updated_at 
                ? new Date(status.updated_at).toLocaleDateString() 
                : 'N/A'}
            </p>
          </div>
        </div>
      </div>

      {/* Verification History */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Verification History</h3>
        <div className="space-y-4">
          {history.map((item, index) => (
            <div 
              key={index}
              className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Type</p>
                  <p className="font-medium">{item.document_type || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <p className="font-medium">{item.status || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Created At</p>
                  <p className="font-medium">
                    {item.created_at 
                      ? new Date(item.created_at).toLocaleDateString() 
                      : 'N/A'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Updated At</p>
                  <p className="font-medium">
                    {item.updated_at 
                      ? new Date(item.updated_at).toLocaleDateString() 
                      : 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 