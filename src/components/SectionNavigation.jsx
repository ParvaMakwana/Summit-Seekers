import { useEffect } from 'react';

const SectionNavigation = ({ activeSection, sectionCount, sectionRefs }) => {
  // Handle section navigation
  const navigateTo = (sectionIndex) => {
    if (sectionRefs[sectionIndex] && sectionRefs[sectionIndex].current) {
      window.scrollTo({
        top: sectionRefs[sectionIndex].current.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  // Animated indicator effect
  useEffect(() => {
    const indicators = document.querySelectorAll('.section-indicator');
    indicators.forEach((indicator, index) => {
      if (index === activeSection) {
        indicator.classList.add('active-indicator');
      } else {
        indicator.classList.remove('active-indicator');
      }
    });
  }, [activeSection]);

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col items-center">
      <div className="h-40 w-[1px] bg-[#8f9ca3] opacity-30 mb-4"></div>
      
      {/* Section Indicators */}
      <div className="flex flex-col space-y-8">
        {Array.from({ length: sectionCount }, (_, i) => (
          <button
            key={i}
            onClick={() => navigateTo(i)}
            className={`section-indicator w-12 h-12 flex items-center justify-center text-sm font-medium
              ${activeSection === i ? 'text-white' : 'text-[#8f9ca3]'}
              transition-all duration-300 hover:text-white`}
          >
            {i === 0 ? (
              <i className="fas fa-mountain text-lg"></i>
            ) : (
              <span className="font-[Playfair_Display]">
                {`0${i}`}
              </span>
            )}
            
            {/* Active indicator line */}
            <span 
              className={`absolute left-full ml-2 w-8 h-[1px] bg-white 
                ${activeSection === i ? 'opacity-100' : 'opacity-0'}
                transition-opacity duration-300`}
            ></span>
          </button>
        ))}
      </div>
      
      <div className="h-40 w-[1px] bg-[#8f9ca3] opacity-30 mt-4"></div>

      <style jsx="true">{`
        .section-indicator {
          position: relative;
          opacity: 0.7;
        }
        .section-indicator.active-indicator {
          opacity: 1;
        }
        .section-indicator:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default SectionNavigation;