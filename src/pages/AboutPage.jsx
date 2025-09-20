import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white text-center mb-8">About MNTN</h1>
          
          <div className="bg-gray-800 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Founded by outdoor enthusiasts, MNTN was born from a passion for adventure and a commitment to quality. 
              We understand that the right gear can make the difference between a good trip and an unforgettable experience.
            </p>
            <p className="text-gray-300">
              Our team has spent countless hours in the mountains, on trails, and in the wilderness, testing and 
              evaluating equipment to bring you only the best outdoor gear available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
              <p className="text-gray-300">
                To provide outdoor enthusiasts with premium, reliable equipment that enhances their adventures 
                and helps them explore the world with confidence.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Our Values</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Quality over quantity</li>
                <li>• Sustainable practices</li>
                <li>• Customer satisfaction</li>
                <li>• Adventure accessibility</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🏔️</div>
                <h4 className="text-lg font-semibold text-white mb-2">Tested by Experts</h4>
                <p className="text-gray-300 text-sm">Every product is field-tested by our team of outdoor professionals.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🌱</div>
                <h4 className="text-lg font-semibold text-white mb-2">Eco-Friendly</h4>
                <p className="text-gray-300 text-sm">We prioritize sustainable and environmentally responsible products.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="text-lg font-semibold text-white mb-2">Fast Delivery</h4>
                <p className="text-gray-300 text-sm">Quick shipping to get you on your adventure faster.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;