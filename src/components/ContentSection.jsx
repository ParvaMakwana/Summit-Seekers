import { useEffect, useRef } from 'react';

const ContentSection = ({ number, title, text, imagePosition, tag }) => {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // Animation on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate in sequence
            setTimeout(() => {
              if (numberRef.current) {
                numberRef.current.style.opacity = "1";
                numberRef.current.style.transform = "translateY(0)";
              }
            }, 100);

            setTimeout(() => {
              if (titleRef.current) {
                titleRef.current.style.opacity = "1";
                titleRef.current.style.transform = "translateY(0)";
              }
            }, 300);

            setTimeout(() => {
              if (textRef.current) {
                textRef.current.style.opacity = "1";
                textRef.current.style.transform = "translateY(0)";
              }
            }, 500);

            setTimeout(() => {
              if (imageRef.current) {
                imageRef.current.style.opacity = "1";
                imageRef.current.style.transform = "scale(1)";
              }
            }, 700);

            // Unobserve after animation
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Get image URL based on section number
  const getImageUrl = (num) => {
    switch (num) {
      case "01":
        return "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop";
      case "02":
        return "/assets/images/hiking-gear.jpg";
      case "03":
        return "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1887&auto=format&fit=crop";
      default:
        return "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop";
    }
  };

  return (
    <div 
      ref={sectionRef} 
      className="min-h-[90vh] flex items-center w-full px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className={`max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center ${imagePosition === 'left' ? 'md:grid-flow-row-dense' : ''}`}>
        {/* Text Content */}
        <div className={`${imagePosition === 'left' ? 'md:col-start-2' : ''}`}>
          {/* Tag */}
          <div className="inline-flex items-center mb-8 text-[#fbd784]">
            <span className="h-[1px] w-8 bg-[#fbd784] mr-4"></span>
            <p className="uppercase tracking-widest text-sm">{tag}</p>
          </div>
          
          {/* Section Number */}
          <div
            ref={numberRef}
            className="text-[10rem] font-bold text-white opacity-10 leading-none font-[Playfair_Display] absolute -z-10 transform translate-y-[-2rem] md:translate-y-[-4rem] opacity-0 transition-all duration-700"
            style={{
              opacity: 0,
              transform: "translateY(40px)",
            }}
          >
            {number}
          </div>
          
          {/* Title */}
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[Playfair_Display] leading-tight mb-8 relative z-10"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all 0.7s ease-out",
            }}
          >
            {title}
          </h2>
          
          {/* Body Text */}
          <p 
            ref={textRef}
            className="text-base md:text-lg text-[#d1d1d1] mb-8 leading-relaxed max-w-lg"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.7s ease-out",
            }}
          >
            {text}
          </p>
          
          {/* Read More Link */}
          <a 
            href="#" 
            className="inline-flex items-center space-x-2 text-[#fbd784] hover:text-white transition-colors duration-300"
          >
            <span className="font-medium">Read more</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        
        {/* Image */}
        <div 
          ref={imageRef}
          className="relative h-[50vh] md:h-[60vh] rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-500"
          style={{
            opacity: 0,
            transform: "scale(0.95)",
            transition: "all 0.7s ease-out",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
          }}
        >
          <img 
            src={getImageUrl(number)} 
            alt={title} 
            className="w-full h-full object-cover object-center rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;