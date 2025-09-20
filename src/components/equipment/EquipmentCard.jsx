import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';

const EquipmentCard = ({ equipment }) => {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(equipment);
    setTimeout(() => setIsAdding(false), 500);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const fallbackImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzc0MTUxIi8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDE4NVYxMzVIMTc1VjEyNVoiIGZpbGw9IiM2QjczODAiLz4KPHA+dGggZD0iTTE5NSAxMjVIMjI1VjEzNUgxOTVWMTI1WiIgZmlsbD0iIzZCNzM4MCIvPgo8cGF0aCBkPSJNMTc1IDE0NUgxODVWMTU1SDE3NVYxNDVaIiBmaWxsPSIjNkI3MzgwIi8+CjxwYXRoIGQ9Ik0xOTUgMTQ1SDIyNVYxNTVIMTk1VjE0NVoiIGZpbGw9IiM2QjczODAiLz4KPHA+dGggZD0iTTE3NSAxNjVIMTg1VjE3NUgxNzVWMTY1WiIgZmlsbD0iIzZCNzM4MCIvPgo8cGF0aCBkPSJNMTk1IDE2NUgyMjVWMTc1SDE5NVYxNjVaIiBmaWxsPSIjNkI3MzgwIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5Q0E0QUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkVxdWlwbWVudCBJbWFnZTwvdGV4dD4KPC9zdmc+';

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        {!imageError ? (
          <img
            src={equipment.image}
            alt={equipment.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <img
            src={fallbackImage}
            alt={equipment.name}
            className="w-full h-full object-cover"
          />
        )}
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
        <div className="text-orange-500 text-xs font-semibold mb-1">
          {equipment.category}
        </div>

        {/* Name */}
        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
          {equipment.name}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
          {equipment.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-3">
          {equipment.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
            >
              {feature}
            </span>
          ))}
          {equipment.features.length > 3 && (
            <span className="text-gray-500 text-xs">
              +{equipment.features.length - 3} more
            </span>
          )}
        </div>

        {/* Rating and Reviews */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < equipment.rating ? 'text-yellow-400' : 'text-gray-600'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-400 text-sm ml-2">
            ({equipment.reviews} reviews)
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-white font-bold text-lg">
              ${equipment.price}
            </span>
            {equipment.originalPrice && (
              <span className="text-gray-500 line-through text-sm">
                ${equipment.originalPrice}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`px-4 py-2 rounded font-semibold transition-all duration-300 ${
              isAdding
                ? 'bg-green-500 text-white'
                : 'bg-orange-500 hover:bg-orange-600 text-white'
            }`}
          >
            {isAdding ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;