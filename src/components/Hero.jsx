import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  // Animation on component mount
  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;

    if (title && subtitle && button) {
      // Add animation classes
      title.style.opacity = '0';
      subtitle.style.opacity = '0';
      button.style.opacity = '0';
      
      title.style.transform = 'translateY(20px)';
      subtitle.style.transform = 'translateY(20px)';
      button.style.transform = 'translateY(20px)';
      
      // Trigger animations with delay
      setTimeout(() => {
        title.style.transition = 'all 0.8s ease-out';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, 300);
      
      setTimeout(() => {
        subtitle.style.transition = 'all 0.8s ease-out';
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 600);
      
      setTimeout(() => {
        button.style.transition = 'all 0.8s ease-out';
        button.style.opacity = '1';
        button.style.transform = 'translateY(0)';
      }, 900);
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1613310023042-ad79320c00ff?q=80&w=2070&auto=format&fit=crop')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-[#0b1d26] opacity-40"></div>
      </div>

      {/* Content Container */}
      <div className="z-10 text-center max-w-4xl">
        {/* Tag */}
        <div className="inline-flex items-center mb-8 text-[#e0f0e9]">
          <span className="h-[1px] w-8 bg-[#e0f0e9] mr-4"></span>
          <p className="uppercase tracking-widest text-sm">A Hiking Guide</p>
        </div>
        
        {/* Main Title */}
        <h1 
          ref={titleRef}
          className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white font-[Playfair_Display] leading-tight mb-6"
        >
          Be Prepared For The Mountains And Beyond!
        </h1>
        
        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-[#d1d1d1] mb-10"
        >
          A Hiking Blog for Explorers
        </p>
        
        {/* CTA Button */}
        <button 
          ref={buttonRef}
          className="flex items-center mx-auto space-x-2 px-8 py-3 border border-white text-white hover:bg-[#1a2c35] hover:text-[#e0f0e9] rounded-lg transition-all duration-300"
        >
          <span>Explore Now</span>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Hero;