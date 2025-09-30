import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
 import Logo from '../assets/logowhite.jpeg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
   /*  { name: 'Home', href: '#' }, */
    {
      name: 'EV Drivers',
      href: '#',
      dropdown: ['Find Charging', 'Mobile App', 'Pricing Plans']
    },
    {
      name: 'Business Solutions',
      href: '#',
      dropdown: ['Fleet Management', 'Workplace Charging', 'Enterprise']
    },
    {
      name: 'Ecosystem',
      href: '#',
      dropdown: ['Partners', 'Integrations', 'API']
    },
    {
      name: 'Company',
      href: '#',
      dropdown: ['About Us', 'Careers', 'News']
    },
    { name: 'Support', href: '#' },
  ];

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

 <div className="f mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-200 z-11">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">

              {/* Logo */}
            <div className='border-b-amber-50'>
            <img src={Logo} alt="" className='h-10 w-auto'/>
            </div>

              <div className="absolute -inset-1  rounded-xl opacity-0 transition-opacity duration-300 blur"></div>
            </div>
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => item.dropdown && toggleDropdown(item.name)}
                  className="flex items-center space-x-1 px-4 py-2 text-gray-300 hover:text-black font-medium transition-all duration-200 rounded-lg hover:bg-[#BDFE4E] hover:text-black group"
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

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div
                    className={`absolute cursor-pointer top-full left-0 mt-2 w-48 bg-[#1a1a1a] rounded-xl shadow-xl border border-gray-800 overflow-hidden transition-all duration-300 origin-top ${
                      activeDropdown === item.name
                        ? 'opacity-100 scale-100 translate-y-0 cursor-pointer'
                        : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-3 cursor-pointer text-gray-300 hover:text-black hover:bg-[#BDFE4E] transition-colors duration-200 border-b border-gray-800 last:border-b-0"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="relative px-6 py-2 bg-[#BDFE4E] text-nowrap text-black font-semibold rounded-lg hover:bg-[#a8e842] transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <span className="relative z-10">Contact Us</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-800">
            {navItems.map((item) => (
              <div key={item.name}>
                <button
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

                {/* Mobile Dropdown */}
                {item.dropdown && (
                  <div
                    className={`pl-6 space-y-1 transition-all duration-300 overflow-hidden ${
                      activeDropdown === item.name ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-gray-400 hover:text-[#BDFE4E] hover:bg-gray-800 rounded-lg transition-colors duration-200"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="pt-4 px-4 space-y-3 border-t border-gray-800">
              <button className="w-full py-3 bg-[#BDFE4E] text-black font-semibold rounded-lg hover:bg-[#a8e842] transition-all duration-300">
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

