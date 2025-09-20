// src/pages/BlogDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogDetailPage = () => {
  const { id } = useParams();
  const [isScrolled, setIsScrolled] = useState(false);
  
  // In a real app, this would fetch data from an API based on the ID
  // For now, we'll use static content
  
  // Sample blog post data
  const blogPost = {
    id: 1,
    title: "Essential Tips for High Altitude Hiking",
    category: "hiking",
    author: "Alex Mountaineer",
    authorRole: "Senior Mountain Guide",
    date: "May 15, 2023",
    readTime: "8 min read",
    headerImage: "/assets/images/altitude-hiking.jpg",
    content: [
      {
        type: "paragraph",
        text: "Hiking at high altitudes presents unique challenges that even experienced hikers need to prepare for. As elevations increase above 8,000 feet (2,438 meters), the air becomes thinner, with less oxygen available for your body. This can lead to altitude sickness, fatigue, and other complications if you're not properly acclimatized or prepared."
      },
      {
        type: "heading",
        text: "Understanding Altitude Sickness"
      },
      {
        type: "paragraph",
        text: "Altitude sickness, also known as Acute Mountain Sickness (AMS), can affect anyone regardless of age, fitness level, or previous hiking experience. Symptoms typically begin to appear at elevations above 8,000 feet and can include headache, nausea, dizziness, fatigue, loss of appetite, and disturbed sleep."
      },
      {
        type: "paragraph",
        text: "The key to preventing altitude sickness is proper acclimatization—giving your body time to adjust to higher elevations gradually. This process allows your body to produce more red blood cells, which helps compensate for the lower oxygen levels at higher altitudes."
      },
      {
        type: "image",
        url: "/assets/images/altitude-acclimatization.jpg",
        caption: "Hikers taking a rest during acclimatization at 12,000 feet"
      },
      {
        type: "heading",
        text: "Essential Tips for High Altitude Hiking"
      },
      {
        type: "subheading",
        text: "1. Ascend Slowly and Gradually"
      },
      {
        type: "paragraph",
        text: "One of the most important rules for high altitude hiking is to ascend slowly. A general guideline is to climb no more than 1,000 feet (305 meters) per day once you're above 8,000 feet. Plan your itinerary to include rest days, especially after significant increases in elevation."
      },
      {
        type: "subheading",
        text: "2. Stay Properly Hydrated"
      },
      {
        type: "paragraph",
        text: "Dehydration can worsen the symptoms of altitude sickness and reduce your overall hiking performance. At higher elevations, your body loses more water through respiration and increased urination. Aim to drink at least 3-4 liters of water per day, and monitor your urine color to ensure you're staying hydrated."
      },
      {
        type: "subheading",
        text: "3. Nutrition Matters"
      },
      {
        type: "paragraph",
        text: "Your body burns more calories at high altitudes, even at rest. Pack calorie-dense foods that are easy to digest, and eat smaller, more frequent meals throughout the day. Carbohydrates are particularly important as they require less oxygen to metabolize than fats or proteins."
      },
      {
        type: "image",
        url: "/assets/images/altitude-nutrition.jpg",
        caption: "High-calorie, easily digestible foods are essential for high altitude hiking"
      },
      {
        type: "subheading",
        text: "4. Avoid Alcohol and Medications"
      },
      {
        type: "paragraph",
        text: "Alcohol, sleeping pills, and certain medications can depress your respiratory drive and worsen altitude sickness. Avoid alcohol for at least the first 48 hours at altitude, and consult with your doctor about any medications you take regularly."
      },
      {
        type: "subheading",
        text: "5. Consider Preventative Medication"
      },
      {
        type: "paragraph",
        text: "For hikes that will take you to very high altitudes (above 10,000 feet), consider talking to your doctor about preventative medications like Acetazolamide (Diamox). These can help your body acclimatize faster and reduce the risk of altitude sickness."
      },
      {
        type: "heading",
        text: "Know When to Descend"
      },
      {
        type: "paragraph",
        text: "The most important rule of high altitude hiking is knowing when to turn around. If you or someone in your group shows signs of moderate to severe altitude sickness—such as severe headache, vomiting, confusion, or difficulty walking—the only effective treatment is immediate descent to a lower elevation."
      },
      {
        type: "paragraph",
        text: "Remember the mountaineer's motto: The summit is optional, but returning safely is mandatory. No view or achievement is worth risking your health or life."
      },
      {
        type: "conclusion",
        text: "High altitude hiking can be an incredibly rewarding experience, offering breathtaking views and unique landscapes that can't be found at lower elevations. By following these essential tips and listening to your body, you can safely enjoy the majesty of the mountains while minimizing the risks associated with high altitude adventures."
      }
    ],
    relatedPosts: [
      {
        id: 4,
        title: "Winter Camping: Essential Gear and Safety Tips",
        excerpt: "A comprehensive guide to staying warm, safe, and comfortable when camping in snowy mountain conditions.",
        imageUrl: "/assets/images/winter-camping.jpg"
      },
      {
        id: 5,
        title: "Mountain Nutrition: Fueling Your Body for the Summit",
        excerpt: "Learn about the best foods and nutrition strategies to maintain energy levels during challenging climbs.",
        imageUrl: "/assets/images/mountain-nutrition.jpg"
      }
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1d26] font-[Inter] text-[#d1d1d1]">
      <Navbar isScrolled={isScrolled} active="Blog" />
      
      <div className="pt-24 pb-16">
        {/* Article Header */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1d2699] to-[#0b1d26] z-10"></div>
          <div className="h-[40vh] md:h-[60vh] overflow-hidden relative bg-[#1a2c35]">
            <img 
              src="/assets/images/blog/hiking1.jpg" 
              alt={blogPost.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-20 -mt-24">
            <div className="bg-[#1a2c35] p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-yellow-600 text-white text-xs uppercase rounded-full tracking-wider">
                  {blogPost.category}
                </span>
                <span className="text-sm text-gray-400">{blogPost.date}</span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-400">{blogPost.readTime}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6 font-[Playfair_Display] text-white">
                {blogPost.title}
              </h1>
              
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xl font-semibold">
                    {blogPost.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-white">{blogPost.author}</p>
                  <p className="text-sm text-gray-400">{blogPost.authorRole}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-invert prose-lg">
          {blogPost.content.map((block, index) => {
            switch (block.type) {
              case 'paragraph':
                return <p key={index} className="mb-6">{block.text}</p>;
              
              case 'heading':
                return <h2 key={index} className="text-2xl md:text-3xl font-bold mt-10 mb-6 font-[Playfair_Display] text-white">{block.text}</h2>;
              
              case 'subheading':
                return <h3 key={index} className="text-xl font-semibold mt-8 mb-4 text-white">{block.text}</h3>;
              
              case 'image':
                return (
                  <figure key={index} className="my-8">
                    <div className="w-full h-64 relative bg-[#1a2c35] rounded-lg overflow-hidden">
                      <img 
                        src={block.url === "/assets/images/altitude-acclimatization.jpg" ? "/assets/images/blog/hiking2.jpg" : "/assets/images/blog/hiking3.jpg"} 
                        alt={block.caption} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    </div>
                    <figcaption className="text-center text-sm text-gray-400 mt-2">{block.caption}</figcaption>
                  </figure>
                );
              
              case 'conclusion':
                return <p key={index} className="mb-6 p-4 border-l-4 border-yellow-600 bg-[#1a2c35] italic">{block.text}</p>;
              
              default:
                return null;
            }
          })}
        </article>
        
        {/* Related Posts */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-16">
          <h3 className="text-2xl font-bold mb-6 font-[Playfair_Display] text-white">Related Articles</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {blogPost.relatedPosts.map(post => (
              <Link to={`/blog/${post.id}`} key={post.id} className="block group">
                <div className="bg-[#1a2c35] rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="h-48 overflow-hidden relative bg-[#1a2c35]">
                    <img 
                      src={post.id === 4 ? "/assets/images/blog/winter.jpg" : "/assets/images/blog/hiking3.jpg"} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;