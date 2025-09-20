import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EquipmentCard from '../components/equipment/EquipmentCard';
import EquipmentFilter from '../components/equipment/EquipmentFilter';

const EquipmentPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const equipmentData = [
    // Footwear Category
    {
      id: 1,
      name: 'Alpine Pro Hiking Boots',
      category: 'Footwear',
      price: 189,
      originalPrice: 229,
      rating: 5,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Waterproof hiking boots with superior ankle support and grip for challenging terrains.',
      features: ['Waterproof', 'Ankle Support', 'Vibram Sole', 'Breathable'],
      featured: true
    },
    {
      id: 2,
      name: 'Trail Running Shoes',
      category: 'Footwear',
      price: 129,
      rating: 4,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Lightweight trail running shoes with aggressive tread pattern for technical terrain.',
      features: ['Lightweight', 'Aggressive Tread', 'Quick Dry', 'Rock Protection']
    },
    {
      id: 3,
      name: 'Mountaineering Boots',
      category: 'Footwear',
      price: 349,
      rating: 5,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Heavy-duty mountaineering boots designed for extreme cold and technical climbing.',
      features: ['Insulated', 'Crampon Compatible', 'Waterproof', 'High Altitude'],
      featured: true
    },
    {
      id: 4,
      name: 'Approach Shoes',
      category: 'Footwear',
      price: 159,
      rating: 4,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Versatile approach shoes perfect for scrambling and light climbing approaches.',
      features: ['Sticky Rubber', 'Precise Fit', 'Durable', 'Multi-terrain']
    },

    // Backpacks Category
    {
      id: 5,
      name: 'Summit 65L Backpack',
      category: 'Backpacks',
      price: 159,
      rating: 4,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Large capacity backpack with multiple compartments and ergonomic design for long hikes.',
      features: ['65L Capacity', 'Rain Cover', 'Hydration Compatible', 'Adjustable Straps']
    },
    {
      id: 6,
      name: 'Day Pack 30L',
      category: 'Backpacks',
      price: 89,
      rating: 5,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Compact day pack perfect for short hikes and daily adventures.',
      features: ['30L Capacity', 'Laptop Sleeve', 'Side Pockets', 'Lightweight']
    },
    {
      id: 7,
      name: 'Ultralight 45L Pack',
      category: 'Backpacks',
      price: 199,
      rating: 4,
      reviews: 91,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Ultralight backpack for minimalist backpacking and thru-hiking adventures.',
      features: ['Ultralight Design', 'Frameless', 'Roll-top Closure', 'Water Resistant'],
      featured: true
    },
    {
      id: 8,
      name: 'Technical Climbing Pack',
      category: 'Backpacks',
      price: 249,
      rating: 5,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1551524164-6cf2ac531fb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Specialized climbing pack with gear loops and streamlined design.',
      features: ['Gear Loops', 'Helmet Attachment', 'Rope Carry', 'Durable Fabric']
    },

    // Shelter Category
    {
      id: 9,
      name: 'Trail Master Tent',
      category: 'Shelter',
      price: 299,
      rating: 5,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: '3-season ultralight tent with easy setup and excellent weather protection.',
      features: ['Ultralight', '3-Season', 'Easy Setup', 'Weather Resistant'],
      featured: true
    },
    {
      id: 10,
      name: 'Expedition 4-Season Tent',
      category: 'Shelter',
      price: 549,
      rating: 5,
      reviews: 134,
      image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Heavy-duty 4-season tent designed for extreme weather conditions.',
      features: ['4-Season', 'Wind Resistant', 'Snow Load', 'Expedition Grade']
    },
    {
      id: 11,
      name: 'Ultralight Bivy',
      category: 'Shelter',
      price: 179,
      rating: 4,
      reviews: 267,
      image: 'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Minimalist bivy sack for solo adventures and emergency shelter.',
      features: ['Solo Shelter', 'Waterproof', 'Compact', 'Emergency Use']
    },
    {
      id: 12,
      name: 'Tarp Shelter',
      category: 'Shelter',
      price: 89,
      rating: 4,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Versatile tarp shelter for customizable protection in various conditions.',
      features: ['Versatile Setup', 'Lightweight', 'Multiple Configurations', 'Durable']
    },

    // Clothing Category
    {
      id: 13,
      name: 'All Weather Jacket',
      category: 'Clothing',
      price: 249,
      rating: 5,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1520635360693-5d4d454143f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Premium breathable waterproof jacket designed for extreme weather conditions and outdoor adventures.',
      features: ['Waterproof', 'Breathable', 'Wind Resistant', 'Packable'],
      featured: true
    },
    {
      id: 14,
      name: 'Insulated Down Jacket',
      category: 'Clothing',
      price: 199,
      rating: 5,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Lightweight down jacket with excellent warmth-to-weight ratio.',
      features: ['Down Insulation', 'Packable', 'Water Resistant', 'Lightweight']
    },
    {
      id: 15,
      name: 'Hiking Pants',
      category: 'Clothing',
      price: 89,
      rating: 4,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1506629905607-d9f49b8f3b8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Durable hiking pants with stretch fabric and reinforced knees.',
      features: ['Stretch Fabric', 'Reinforced Knees', 'Quick Dry', 'Multiple Pockets']
    },
    {
      id: 16,
      name: 'Base Layer Set',
      category: 'Clothing',
      price: 79,
      rating: 4,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Merino wool base layer set for temperature regulation and comfort.',
      features: ['Merino Wool', 'Temperature Control', 'Odor Resistant', 'Moisture Wicking']
    },

    // Sleep Systems Category
    {
      id: 17,
      name: 'Mountain Sleeping Bag',
      category: 'Sleep Systems',
      price: 179,
      rating: 4,
      reviews: 91,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Down-filled sleeping bag rated for temperatures down to 20°F.',
      features: ['Down Fill', '20°F Rating', 'Compression Sack', 'Mummy Style']
    },
    {
      id: 18,
      name: 'Ultralight Sleeping Pad',
      category: 'Sleep Systems',
      price: 129,
      rating: 5,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Inflatable sleeping pad with high R-value for insulation and comfort.',
      features: ['High R-Value', 'Ultralight', 'Compact', 'Insulated']
    },
    {
      id: 19,
      name: 'Camping Pillow',
      category: 'Sleep Systems',
      price: 35,
      rating: 4,
      reviews: 187,
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Inflatable camping pillow for comfortable sleep in the outdoors.',
      features: ['Inflatable', 'Compact', 'Soft Surface', 'Lightweight']
    },
    {
      id: 20,
      name: 'Sleeping Bag Liner',
      category: 'Sleep Systems',
      price: 45,
      rating: 4,
      reviews: 143,
      image: 'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Silk sleeping bag liner for added warmth and hygiene.',
      features: ['Silk Material', 'Temperature Boost', 'Hygiene Layer', 'Compact']
    },

    // Navigation Category
    {
      id: 21,
      name: 'GPS Navigation Device',
      category: 'Navigation',
      price: 199,
      rating: 4,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Rugged GPS device with preloaded topographic maps and long battery life.',
      features: ['Preloaded Maps', 'Long Battery', 'Waterproof', 'SOS Feature']
    },
    {
      id: 22,
      name: 'Compass and Map Set',
      category: 'Navigation',
      price: 49,
      rating: 5,
      reviews: 267,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Professional orienteering compass with detailed topographic maps for precise navigation.',
      features: ['Professional Grade', 'Declination Adjustment', 'Topographic Maps', 'Durable Construction'],
      featured: true
    },
    {
      id: 23,
      name: 'Altimeter Watch',
      category: 'Navigation',
      price: 299,
      rating: 4,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Multi-function watch with altimeter, barometer, and compass.',
      features: ['Altimeter', 'Barometer', 'Compass', 'Weather Alerts']
    },

    // Water & Hydration Category
    {
      id: 24,
      name: 'Portable Water Filter',
      category: 'Water & Hydration',
      price: 79,
      rating: 5,
      reviews: 134,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Lightweight water filter that removes 99.9% of bacteria and parasites.',
      features: ['99.9% Filtration', 'Lightweight', 'Fast Flow', '1000L Capacity']
    },
    {
      id: 25,
      name: 'Insulated Water Bottle',
      category: 'Water & Hydration',
      price: 35,
      rating: 4,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Double-wall insulated bottle that keeps drinks cold for 24 hours or hot for 12 hours.',
      features: ['Double Insulated', '24hr Cold', '12hr Hot', 'BPA Free']
    },
    {
      id: 26,
      name: 'Hydration Bladder 3L',
      category: 'Water & Hydration',
      price: 59,
      rating: 4,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Large capacity 3-liter hydration bladder with quick-disconnect tube and leak-proof design.',
      features: ['3L Capacity', 'Quick Disconnect', 'Easy Fill', 'Leak Proof'],
      featured: true
    },
    {
      id: 27,
      name: 'Water Purification Tablets',
      category: 'Water & Hydration',
      price: 15,
      rating: 4,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Emergency water purification tablets for safe drinking water anywhere.',
      features: ['Emergency Use', 'Kills Bacteria', 'Lightweight', '50 Tablets']
    },

    // Cooking Category
    {
      id: 28,
      name: 'Portable Camping Stove',
      category: 'Cooking',
      price: 125,
      rating: 4,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Compact gas stove with wind-resistant design and piezo ignition.',
      features: ['Wind Resistant', 'Piezo Ignition', 'Compact', 'Fuel Efficient']
    },
    {
      id: 29,
      name: 'Titanium Cookset',
      category: 'Cooking',
      price: 89,
      rating: 5,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Premium ultralight titanium cookset for minimalist camping and backpacking adventures.',
      features: ['Titanium Construction', 'Ultralight', 'Nesting Design', 'Corrosion Resistant'],
      featured: true
    },
    {
      id: 30,
      name: 'Camping Cookware Set',
      category: 'Cooking',
      price: 65,
      rating: 4,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Complete cookware set with pots, pans, and utensils for camp cooking.',
      features: ['Complete Set', 'Non-stick Coating', 'Stackable', 'Easy Clean']
    },

    // Lighting Category
    {
      id: 31,
      name: 'Headlamp Pro',
      category: 'Lighting',
      price: 69,
      rating: 5,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'High-performance LED headlamp with multiple brightness settings, red light mode, and rechargeable battery.',
      features: ['LED Light', 'Multiple Modes', 'Rechargeable', 'Water Resistant'],
      featured: true
    },
    {
      id: 32,
      name: 'Lantern LED',
      category: 'Lighting',
      price: 45,
      rating: 4,
      reviews: 267,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Bright LED lantern with adjustable brightness for camp lighting.',
      features: ['360° Light', 'Adjustable Brightness', 'Long Battery', 'Compact']
    },

    // Tools Category
    {
      id: 33,
      name: 'Multi-Tool Knife',
      category: 'Tools',
      price: 45,
      rating: 4,
      reviews: 267,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Versatile multi-tool with knife, pliers, scissors, and 12 other essential outdoor functions.',
      features: ['15 Functions', 'Stainless Steel', 'Compact Design', 'Belt Clip'],
      featured: true
    },
    {
      id: 34,
      name: 'Carbon Fiber Trekking Poles',
      category: 'Accessories',
      price: 89,
      originalPrice: 119,
      rating: 4,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1551524164-6cf2ac531fb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Lightweight carbon fiber poles with shock absorption and adjustable height.',
      features: ['Carbon Fiber', 'Shock Absorption', 'Adjustable', 'Lightweight']
    },
    {
      id: 35,
      name: 'Climbing Harness',
      category: 'Accessories',
      price: 79,
      rating: 5,
      reviews: 143,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Comfortable climbing harness with gear loops and belay loop.',
      features: ['Gear Loops', 'Adjustable', 'Comfortable', 'Safety Certified']
    }
  ];

  const categories = ['All', 'Footwear', 'Backpacks', 'Shelter', 'Clothing', 'Sleep Systems', 'Navigation', 'Water & Hydration', 'Cooking', 'Lighting', 'Tools', 'Accessories'];

  const filteredEquipment = equipmentData
    .filter(item => selectedCategory === 'All' || item.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Premium Equipment</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our comprehensive collection of 35+ high-quality outdoor gear items designed for every adventure.
          </p>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-500">{equipmentData.length}</div>
              <div className="text-gray-400 text-sm">Total Items</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-500">{categories.length - 1}</div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-500">{filteredEquipment.length}</div>
              <div className="text-gray-400 text-sm">Filtered Results</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-500">4.6</div>
              <div className="text-gray-400 text-sm">Avg Rating</div>
            </div>
          </div>

          {/* Filter and Sort */}
          <div className="mb-8">
            <EquipmentFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </div>

          {/* Equipment Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEquipment.map(equipment => (
              <EquipmentCard key={equipment.id} equipment={equipment} />
            ))}
          </div>

          {filteredEquipment.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No equipment found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EquipmentPage;