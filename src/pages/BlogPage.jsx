// src/pages/BlogPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/blog/BlogCard';

const BlogPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Blog post data - in a real app, this would come from an API
  const blogPosts = [
    {
      id: 1,
      title: "Essential Tips for High Altitude Hiking",
      excerpt: "Discover proven strategies to acclimatize properly and stay safe when hiking at elevations above 8,000 feet.",
      category: "hiking",
      author: "Alex Mountaineer",
      date: "May 15, 2023",
      imageUrl: "/assets/images/blog/hiking1.jpg",
      featured: true
    },
    {
      id: 2,
      title: "The 10 Most Scenic Alpine Trails in Europe",
      excerpt: "From the Dolomites to the Swiss Alps, explore Europe's most breathtaking mountain trails with stunning panoramic views.",
      category: "destinations",
      author: "Maria Trekker",
      date: "June 3, 2023",
      imageUrl: "/assets/images/blog/alpine.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Wildlife Photography on Mountain Expeditions",
      excerpt: "Tips and techniques for capturing amazing wildlife photographs during your mountain adventures.",
      category: "photography",
      author: "Sam Walker",
      date: "April 22, 2023",
      imageUrl: "/assets/images/blog/hiking2.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Winter Camping: Essential Gear and Safety Tips",
      excerpt: "A comprehensive guide to staying warm, safe, and comfortable when camping in snowy mountain conditions.",
      category: "gear",
      author: "Chris Winters",
      date: "January 10, 2023",
      imageUrl: "/assets/images/blog/winter.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Mountain Nutrition: Fueling Your Body for the Summit",
      excerpt: "Learn about the best foods and nutrition strategies to maintain energy levels during challenging climbs.",
      category: "health",
      author: "Lisa Nutrient",
      date: "March 8, 2023",
      imageUrl: "/assets/images/blog/hiking3.jpg",
      featured: false
    }
  ];

  // Categories for filtering
  const categories = ['all', 'hiking', 'destinations', 'photography', 'gear', 'health'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Filter blog posts based on category and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get featured post
  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-[#0b1d26] font-[Inter] text-[#d1d1d1]">
      <Navbar isScrolled={isScrolled} active="Blog" />
      
      <div className="pt-24 pb-16">
        {/* Featured Post */}
        {featuredPost && (
          <div className="relative mb-16">
            <div className="bg-gradient-to-b from-[#0c2029] to-[#0b1d26] pb-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <span className="text-yellow-500 uppercase tracking-wider text-sm font-medium mb-2 inline-block">Featured Post</span>
                <Link to={`/blog/${featuredPost.id}`}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <h1 className="text-3xl md:text-4xl font-bold mb-4 font-[Playfair_Display] text-white">{featuredPost.title}</h1>
                      <p className="text-lg mb-6">{featuredPost.excerpt}</p>
                      <div className="flex items-center space-x-2 mb-6">
                        <span className="text-sm opacity-75">{featuredPost.date}</span>
                        <span className="text-sm opacity-75">•</span>
                        <span className="text-sm opacity-75">By {featuredPost.author}</span>
                      </div>
                      <button className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md transition-colors duration-300">
                        Read Article
                      </button>
                    </div>
                    <div className="order-1 md:order-2 h-60 md:h-80 relative bg-[#1a2c35] rounded-xl overflow-hidden">
                      <img 
                        src={featuredPost.imageUrl} 
                        alt={featuredPost.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/assets/images/blog/hiking1.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d26] to-transparent"></div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Category Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold font-[Playfair_Display] text-white">Adventure Journal</h2>
              <div className="relative w-full md:w-72">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-2 bg-[#1a2c35] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i className="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-1 rounded-full text-sm ${activeCategory === category ? 'bg-yellow-600 text-white' : 'bg-[#1a2c35] text-gray-300 hover:bg-[#273d47]'} transition-colors`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Empty state */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p>Try adjusting your search or category filters.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;