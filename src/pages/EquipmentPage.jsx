import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EquipmentCard from '../components/equipment/EquipmentCard';
import EquipmentFilter from '../components/equipment/EquipmentFilter';
import { getEquipmentImage, getHeroImage } from '../utils/imageUtils';

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
      image: getEquipmentImage('Footwear', 'Alpine Pro Hiking Boots'),
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
      image: getEquipmentImage('Footwear', 'Trail Running Shoes'),
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
      image: getEquipmentImage('Footwear', 'Mountaineering Boots'),
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
      image: getEquipmentImage('Footwear', 'Approach Shoes'),
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
      image: getEquipmentImage('Backpacks', 'Summit 65L Backpack'),
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
      image: getEquipmentImage('Backpacks', 'Day Pack 30L'),
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
      image: getEquipmentImage('Backpacks', 'Ultralight 45L Pack'),
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
      image: getEquipmentImage('Backpacks', 'Technical Climbing Pack'),
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
      image: getEquipmentImage('Shelter', 'Trail Master Tent'),
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
      image: getEquipmentImage('Shelter', 'Expedition 4-Season Tent'),
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
      image: getEquipmentImage('Shelter', 'Ultralight Bivy'),
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
      image: getEquipmentImage('Shelter', 'Tarp Shelter'),
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
      image: getEquipmentImage('Clothing', 'All Weather Jacket'),
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
      image: getEquipmentImage('Clothing', 'Insulated Down Jacket'),
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
      image: getEquipmentImage('Clothing', 'Hiking Pants'),
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
      image: getEquipmentImage('Clothing', 'Base Layer Set'),
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
      image: getEquipmentImage('Sleep Systems', 'Mountain Sleeping Bag'),
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
      image: getEquipmentImage('Sleep Systems', 'Ultralight Sleeping Pad'),
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
      image: getEquipmentImage('Sleep Systems', 'Camping Pillow'),
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
      image: getEquipmentImage('Sleep Systems', 'Sleeping Bag Liner'),
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
      image: getEquipmentImage('Navigation', 'GPS Navigation Device'),
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
      image: getEquipmentImage('Navigation', 'Compass and Map Set'),
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
      image: getEquipmentImage('Navigation', 'Altimeter Watch'),
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
      image: getEquipmentImage('Water & Hydration', 'Portable Water Filter'),
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
      image: getEquipmentImage('Water & Hydration', 'Insulated Water Bottle'),
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
      image: getEquipmentImage('Water & Hydration', 'Hydration Bladder 3L'),
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
      image: getEquipmentImage('Water & Hydration', 'Water Purification Tablets'),
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
      image: getEquipmentImage('Cooking', 'Portable Camping Stove'),
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
      image: getEquipmentImage('Cooking', 'Titanium Cookset'),
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
      image: getEquipmentImage('Cooking', 'Camping Cookware Set'),
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
      image: getEquipmentImage('Lighting', 'Headlamp Pro'),
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
      image: getEquipmentImage('Lighting', 'Lantern LED'),
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
      image: getEquipmentImage('Tools', 'Multi-Tool Knife'),
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
      image: getEquipmentImage('Accessories', 'Carbon Fiber Trekking Poles'),
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
      image: getEquipmentImage('Accessories', 'Climbing Harness'),
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
            backgroundImage: `url('${getHeroImage('equipment')}')`
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