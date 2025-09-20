import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OrderSuccessPage = () => {
  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white mb-4">Order Confirmed!</h1>
          <p className="text-gray-400 text-lg mb-8">
            Thank you for your purchase. Your order has been successfully placed.
          </p>

          {/* Order Details */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Order Details</h2>
            <div className="space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-gray-400">Order Number:</span>
                <span className="text-white font-mono">#{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Order Date:</span>
                <span className="text-white">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Estimated Delivery:</span>
                <span className="text-white">
                  {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">What's Next?</h3>
            <div className="text-left space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <p>We'll send you an email confirmation with your order details</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <p>Your items will be carefully packed and shipped within 1-2 business days</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <p>You'll receive tracking information once your order ships</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/equipment"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold transition-colors"
            >
              Continue Shopping
            </Link>
            <Link
              to="/"
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded font-semibold transition-colors"
            >
              Back to Home
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-12 p-6 bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Need Help?</h3>
            <p className="text-gray-400 mb-4">
              If you have any questions about your order, don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@mntn.com"
                className="text-orange-500 hover:text-orange-400 transition-colors"
              >
                support@mntn.com
              </a>
              <a
                href="tel:+1-555-123-4567"
                className="text-orange-500 hover:text-orange-400 transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderSuccessPage;