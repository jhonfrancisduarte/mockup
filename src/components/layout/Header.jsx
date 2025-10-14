import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Download } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/EVOX2.png';
import navItems from '../../config/nav';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (itemName) => {
    setActiveDropdown((prev) => (prev === itemName ? null : itemName));
  };

  const getItemPath = (item) => {
    if (item.path) return item.path;
    if (item.name === 'Business Solutions') return '/business-solutions';
    if (item.name === 'Company') return '/company';
    if (item.name === 'Support') return '/support';
    if (item.name === 'Ecosystem') return '/ecosystem';
    return null;
  };

  const isItemActive = (item) => {
    const path = getItemPath(item);
    if (path) return location.pathname === path;
    if (item.dropdown && Array.isArray(item.dropdown)) {
      return item.dropdown.some((sub) => typeof sub === 'object' && sub.path && location.pathname === sub.path);
    }
    return false;
  };

  const baseNavClasses = 'flex items-center space-x-1 px-4 py-2 font-medium transition-all duration-200 rounded-lg';
  const inactiveText = 'text-gray-300 hover:bg-[#BDFE4E] hover:text-black';
  const activeText = 'bg-[#BDFE4E] text-black';

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto px-4 bg-[#0A0A0A] sm:px-6 lg:px-8 border-b border-gray-800 z-11">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <Link to="/" aria-label="Home">
                <img src={Logo} alt="Logo" className="h-15 w-auto" />
              </Link>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const path = getItemPath(item);
              const hasDropdown = Array.isArray(item.dropdown) && item.dropdown.length > 0;
              const active = isItemActive(item);

              return (
                <div key={item.name} className="relative">

                  {path ? (
                    <>
                      <div className={`${baseNavClasses} ${active ? activeText : inactiveText} flex items-center`}>

                        <Link to={path} className="inline-flex items-center">
                          <span>{item.name}</span>
                        </Link>
                        {hasDropdown && (
                          <button
                            type="button"
                            onClick={() => toggleDropdown(item.name)}
                            aria-expanded={activeDropdown === item.name}
                            className="ml-2 p-1 rounded-sm hover:bg-gray-800 transition-colors"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                            />
                          </button>
                        )}
                      </div>
                      {hasDropdown && (
                        <div
                          className={`absolute top-full left-0 mt-2 w-48 bg-[#1a1a1a] rounded-xl shadow-xl border border-gray-800 overflow-hidden transition-all duration-300 origin-top ${
                            activeDropdown === item.name
                              ? 'opacity-100 scale-100 translate-y-0'
                              : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                          }`}
                        >
                          {item.dropdown.map((subItem, idx) => {
                            if (typeof subItem === 'object' && subItem.path) {
                              const subActive = location.pathname === subItem.path;
                              return (
                                <Link
                                  key={subItem.name + idx}
                                  to={subItem.path}
                                  className={`block px-4 py-3 text-gray-300 hover:text-black hover:bg-[#BDFE4E] transition-colors duration-200 border-b border-gray-800 last:border-b-0 ${subActive ? 'bg-[#BDFE4E] text-black' : ''}`}
                                >
                                  {subItem.name}
                                </Link>
                              );
                            }
                            return (
                              <div
                                key={String(subItem) + idx}
                                className="block px-4 py-3 text-gray-300 hover:text-black hover:bg-[#BDFE4E] transition-colors duration-200 border-b border-gray-800 last:border-b-0"
                              >
                                {subItem}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => hasDropdown && toggleDropdown(item.name)}
                        aria-expanded={activeDropdown === item.name}
                        className={`${baseNavClasses} ${active ? activeText : inactiveText} flex items-center`}
                      >
                        <span>{item.name}</span>
                        {hasDropdown && (
                          <ChevronDown
                            className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        )}
                      </button>

                      {hasDropdown && (
                        <div
                          className={`absolute top-full left-0 mt-2 w-48 bg-[#1a1a1a] rounded-xl shadow-xl border border-gray-800 overflow-hidden transition-all duration-300 origin-top ${
                            activeDropdown === item.name
                              ? 'opacity-100 scale-100 translate-y-0'
                              : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                          }`}
                        >
                          {item.dropdown.map((subItem, idx) => {
                            if (typeof subItem === 'object' && subItem.path) {
                              const subActive = location.pathname === subItem.path;
                              return (
                                <Link
                                  key={subItem.name + idx}
                                  to={subItem.path}
                                  className={`block px-4 py-3 text-gray-300 hover:text-black hover:bg-[#BDFE4E] transition-colors duration-200 border-b border-gray-800 last:border-b-0 ${subActive ? 'bg-[#BDFE4E] text-black' : ''}`}
                                >
                                  {subItem.name}
                                </Link>
                              );
                            }
                            return (
                              <div
                                key={String(subItem) + idx}
                                className="block px-4 py-3 text-gray-300 hover:text-black hover:bg-[#BDFE4E] transition-colors duration-200 border-b border-gray-800 last:border-b-0"
                              >
                                {subItem}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              type="button"
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-2 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Download className="w-5 h-5" />
              <span className="relative z-10">Download App</span>
            </button>

            <Link
              to="/contact"
              className="cursor-pointer relative px-6 py-2 bg-[#BDFE4E] text-black font-semibold rounded-lg hover:bg-[#a8e842] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <span className="relative z-10">Contact Us</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((s) => !s)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-800">
            {navItems.map((item) => {
              const path = getItemPath(item);
              const hasDropdown = Array.isArray(item.dropdown) && item.dropdown.length > 0;
              const active = isItemActive(item);

              return (
                <div key={item.name}>
                  {path ? (
                    <>
                      <div className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200 ${active ? 'bg-[#BDFE4E] text-black' : 'text-gray-300 hover:text-white hover:bg-gray-800'}`}>
                        <Link to={path} onClick={() => setIsMenuOpen(false)} className="font-medium">
                          {item.name}
                        </Link>

                        {hasDropdown && (
                          <button
                            type="button"
                            onClick={() => toggleDropdown(item.name)}
                            className="ml-2 p-1 rounded-sm hover:bg-gray-800"
                            aria-expanded={activeDropdown === item.name}
                          >
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                          </button>
                        )}
                      </div>

                      {hasDropdown && (
                        <div className={`pl-6 space-y-1 transition-all duration-300 overflow-hidden ${activeDropdown === item.name ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                          {item.dropdown.map((subItem, idx) => {
                            if (typeof subItem === 'object' && subItem.path) {
                              const subActive = location.pathname === subItem.path;
                              return (
                                <Link
                                  key={subItem.name + idx}
                                  to={subItem.path}
                                  onClick={() => setIsMenuOpen(false)}
                                  className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${subActive ? 'bg-[#BDFE4E] text-black' : 'text-gray-400 hover:text-[#BDFE4E] hover:bg-gray-800'}`}
                                >
                                  {subItem.name}
                                </Link>
                              );
                            }
                            return (
                              <div
                                key={String(subItem) + idx}
                                className="block px-4 py-2 text-gray-400 hover:text-[#BDFE4E] hover:bg-gray-800 rounded-lg transition-colors duration-200"
                              >
                                {subItem}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    /* No parent path: behave as pure dropdown (same as before) */
                    <>
                      <button
                        type="button"
                        onClick={() => hasDropdown && toggleDropdown(item.name)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200 ${active ? 'bg-[#BDFE4E] text-black' : 'text-gray-300 hover:text-white hover:bg-gray-800'}`}>
                        <span className="font-medium">{item.name}</span>
                        {hasDropdown && (
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                        )}
                      </button>

                      {hasDropdown && (
                        <div className={`pl-6 space-y-1 transition-all duration-300 overflow-hidden ${activeDropdown === item.name ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                          {item.dropdown.map((subItem, idx) => {
                            if (typeof subItem === 'object' && subItem.path) {
                              const subActive = location.pathname === subItem.path;
                              return (
                                <Link
                                  key={subItem.name + idx}
                                  to={subItem.path}
                                  onClick={() => setIsMenuOpen(false)}
                                  className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${subActive ? 'bg-[#BDFE4E] text-black' : 'text-gray-400 hover:text-[#BDFE4E] hover:bg-gray-800'}`}
                                >
                                  {subItem.name}
                                </Link>
                              );
                            }
                            return (
                              <div
                                key={String(subItem) + idx}
                                className="block px-4 py-2 text-gray-400 hover:text-[#BDFE4E] hover:bg-gray-800 rounded-lg transition-colors duration-200"
                              >
                                {subItem}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}

            <div className="pt-4 px-4 space-y-3 border-t border-gray-800">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full block text-center py-3 bg-[#BDFE4E] text-black font-semibold rounded-lg hover:bg-[#a8e842] transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
