import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';

const EquipmentCard = ({ equipment }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleAddToCart = () => {
    addToCart(equipment);
  };

  const fallbackImage = `data:image/svg+xml;base64,${btoa(`
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#374151"/>
      <text x="200" y="150" text-anchor="middle" fill="#9CA3AF" font-size="16" font-family="Arial">
        ${equipment.name}
      </text>
    </svg>
  `)}`;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      {/* Image Container */}
      <div className="relative h-48 bg-gray-700 overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-700 animate-pulse flex items-center justify-center">
            <div className="text-gray-400">Loading...</div>
          </div>
        )}
        
        <img
          src={imageError ? fallbackImage : equipment.image}
          alt={equipment.name}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading="lazy"
        />
        
        {equipment.featured && (
          <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">
            Featured
          </div>
        )}
        
        {equipment.originalPrice && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
            Sale
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <div className="text-orange-400 text-sm font-medium mb-1">
          {equipment.category}
        </div>

        {/* Name */}
        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
          {equipment.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < equipment.rating ? 'fill-current' : 'fill-gray-600'}`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-400 text-sm ml-2">({equipment.reviews})</span>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
          {equipment.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4">
          {equipment.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
            >
              {feature}
            </span>
          ))}
          {equipment.features.length > 3 && (
            <span className="text-gray-400 text-xs px-2 py-1">
              +{equipment.features.length - 3} more
            </span>
          )}
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-white font-bold text-lg">
              ${equipment.price}
            </span>
            {equipment.originalPrice && (
              <span className="text-gray-400 text-sm line-through">
                ${equipment.originalPrice}
              </span>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center space-x-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;