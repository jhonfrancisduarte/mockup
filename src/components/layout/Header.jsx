import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Download } from 'lucide-react';
import Logo from '../../assets/logowhite.jpeg';
import navItems from '../../config/nav';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-200 z-11">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <img src={Logo} alt="Logo" className="h-15 w-auto" />
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  type="button"
                  onClick={() => item.dropdown && toggleDropdown(item.name)}
                  className="flex items-center space-x-1 px-4 py-2 text-gray-300 font-medium transition-all duration-200 rounded-lg hover:bg-[#BDFE4E] hover:text-black"
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {item.dropdown && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-48 bg-[#1a1a1a] rounded-xl shadow-xl border border-gray-800 overflow-hidden transition-all duration-300 origin-top ${
                      activeDropdown === item.name
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    {item.dropdown.map((subItem) => (
                      <div
                        key={subItem}
                        className="block px-4 py-3 text-gray-300 hover:text-black hover:bg-[#BDFE4E] transition-colors duration-200 border-b border-gray-800 last:border-b-0"
                      >
                        {subItem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            {/* FIXED: use inline-flex + items-center + gap for proper icon + text alignment and corrected py class */}
            <button
              type="button"
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-2 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Download className="w-5 h-5" />
              <span className="relative z-10">Download App</span>
            </button>

            <button
              type="button"
              className="cursor-pointer relative px-6 py-2 bg-[#BDFE4E] text-black font-semibold rounded-lg hover:bg-[#a8e842] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <span className="relative z-10">Contact Us</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-800">
            {navItems.map((item) => (
              <div key={item.name}>
                <button
                  type="button"
                  onClick={() => item.dropdown && toggleDropdown(item.name)}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  <span className="font-medium">{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {item.dropdown && (
                  <div
                    className={`pl-6 space-y-1 transition-all duration-300 overflow-hidden ${
                      activeDropdown === item.name ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {item.dropdown.map((subItem) => (
                      <div
                        key={subItem}
                        className="block px-4 py-2 text-gray-400 hover:text-[#BDFE4E] hover:bg-gray-800 rounded-lg transition-colors duration-200"
                      >
                        {subItem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 px-4 space-y-3 border-t border-gray-800">
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-3 bg-[#BDFE4E] text-black font-semibold rounded-lg hover:bg-[#a8e842] transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
