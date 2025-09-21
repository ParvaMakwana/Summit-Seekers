import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getEquipmentImage, getHeroImage } from '../utils/imageUtils';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${getHeroImage('mountain')}')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl font-bold mb-6">MNTN</h1>
          <p className="text-2xl mb-8 max-w-2xl mx-auto">
            Premium outdoor equipment for your next adventure
          </p>
          <div className="space-x-4">
            <Link
              to="/equipment"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Shop Equipment
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose MNTN?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Premium Quality</h3>
              <p className="text-gray-300">Hand-picked equipment from trusted brands for maximum durability and performance.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast Shipping</h3>
              <p className="text-gray-300">Quick delivery to get you on your adventure faster. Free shipping on orders over $100.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
              <p className="text-gray-300">Our team of outdoor enthusiasts is here to help you find the perfect gear.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Equipment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={getEquipmentImage('Footwear', 'Alpine Pro Hiking Boots')}
                alt="Hiking Boots"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg mb-2">Alpine Pro Hiking Boots</h3>
                <p className="text-gray-300 text-sm mb-3">Waterproof boots with superior ankle support</p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-500 font-bold text-lg">$189</span>
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={getEquipmentImage('Backpacks', 'Ultralight 45L Pack')}
                alt="Backpack"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg mb-2">Ultralight 45L Pack</h3>
                <p className="text-gray-300 text-sm mb-3">Minimalist backpack for thru-hiking</p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-500 font-bold text-lg">$199</span>
                  <span className="text-yellow-400 text-sm">★★★★☆</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={getEquipmentImage('Shelter', 'Trail Master Tent')}
                alt="Tent"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg mb-2">Trail Master Tent</h3>
                <p className="text-gray-300 text-sm mb-3">3-season ultralight tent with easy setup</p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-500 font-bold text-lg">$299</span>
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/equipment"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              View All Equipment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;