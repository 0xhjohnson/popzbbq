import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Success = () => (
  <Layout title="Order Success">
    <SEO title="Order Success" />
    <div className="mt-8 mb-12 max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
      <div className="flex items-center">
        <FiCheckCircle className="w-10 h-10 mt-2 mb-4 text-green-600" />
        <p className="font-medium text-2xl text-gray-900 ml-4">Thank you!</p>
      </div>
      <p className="font-medium text-gray-800 mb-4">
        Your order has been successfully submitted.
      </p>
      <p className="text-gray-800 max-w-lg">
        I look forward to delivering to your family and will personally reach
        out to gather remaining details.
      </p>
    </div>
  </Layout>
);

export default Success;
