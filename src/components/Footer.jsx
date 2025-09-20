const Footer = () => {
  return (
    <footer className="bg-[#0b1d26] pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <a href="#" className="text-white font-[Playfair_Display] font-bold text-3xl mb-4 block">
            MNTN
          </a>
          <p className="text-[#8f9ca3] text-sm mt-4 mb-6">
            Get out there & discover your next slope, mountain & destination!
          </p>
          <p className="text-[#8f9ca3] text-xs">
            Copyright © 2025 MNTN. <br />
            All rights reserved.
          </p>
        </div>

        {/* More Links - 1 */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <h3 className="text-white font-bold mb-6">More on The Blog</h3>
          <ul className="space-y-4">
            {['About MNTN', 'Contributors & Writers', 'Write For Us', 'Contact Us', 'Privacy Policy'].map((item) => (
              <li key={item}>
                <a href="#" className="text-[#8f9ca3] hover:text-white transition-colors duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* More Links - 2 */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <h3 className="text-white font-bold mb-6">More on MNTN</h3>
          <ul className="space-y-4">
            {['The Team', 'Jobs', 'Press', 'Blog'].map((item) => (
              <li key={item}>
                <a href="#" className="text-[#8f9ca3] hover:text-white transition-colors duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="col-span-1 md:col-span-3 lg:col-span-1">
          <h3 className="text-white font-bold mb-6">Connect</h3>
          <div className="flex space-x-6">
            {[
              { icon: 'fa-twitter', label: 'Twitter' },
              { icon: 'fa-facebook', label: 'Facebook' },
              { icon: 'fa-instagram', label: 'Instagram' },
              { icon: 'fa-youtube', label: 'YouTube' }
            ].map((social) => (
              <a 
                key={social.label} 
                href="#" 
                aria-label={social.label}
                className="text-[#8f9ca3] hover:text-white transition-colors duration-200 text-lg"
              >
                <i className={`fab ${social.icon}`}></i>
              </a>
            ))}
          </div>

          <div className="mt-10 text-[#8f9ca3]">
            <p>Designed with ♥ by <a href="#" className="text-[#fbd784]">MNTN</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;