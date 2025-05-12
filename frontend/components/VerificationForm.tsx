import React, { useState } from 'react';
import { useVerification } from '../hooks/useVerification';

export const VerificationForm: React.FC = () => {
  const {
    loading,
    error,
    createVerification,
    uploadDocument,
    verifyIdCard,
  } = useVerification();

  const [documentFile, setDocumentFile] = useState<File | null>(null);
  const [customerId, setCustomerId] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setDocumentFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    try {
      // First, upload the document
      if (documentFile) {
        await uploadDocument({
          file: documentFile,
          document_type: 'ID_CARD',
        });
      }

      // Then verify the ID card
      if (customerId) {
        const verificationResult = await verifyIdCard(customerId);
        console.log('Verification result:', verificationResult);
      }
    } catch (err) {
      console.error('Verification failed:', err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Verification Form</h2>
      
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Customer ID
          </label>
          <input
            type="text"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            ID Card Document
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*,.pdf"
            className="mt-1 block w-full"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
            ${loading 
              ? 'bg-indigo-400 cursor-not-allowed' 
              : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            }`}
        >
          {loading ? 'Processing...' : 'Submit Verification'}
        </button>
      </form>
    </div>
  );
}; 