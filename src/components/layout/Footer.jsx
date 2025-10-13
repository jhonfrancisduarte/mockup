import { useState } from 'react';
import { Zap, Share2, Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import Logo from "../../assets/logo.webp"

export default function Footer() {
  const [pinned, setPinned] = useState(false);
  const [hover, setHover] = useState(false);

  const footerLinks = {
    'EV Drivers': [
      'XCharge+ Mobile App',
      'How to Charge',
      'XCharge+ Web Platform',
      'Home Charging Solutions',
      'EV Chargers'
    ],
    'Business Solutions': ['Host a Site', 'Partner with Us', 'Sustainability', 'Newsroom'],
    'Ecosystem': ['XCharge+ Mobile App', 'About us', 'Careers', 'Subheading/Slogan'],
    'Company': ['About us', 'Newsroom', 'Careers', 'Sustainability'],
    'Support': ['FAQ', 'How to Charge', 'Home Charging Solutions']
  };

  const socials = [
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:bg-[#0077B5]' },
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      color: 'hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]'
    },
    { name: 'Facebook', icon: Facebook, url: '#', color: 'hover:bg-[#1877F2]' }
  ];

  const visible = pinned || hover;

  return (
    <>
      <footer className="relative border-t border-gray-200 bg-white text-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(189,254,78,0.06) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-black font-bold text-lg mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-600 hover:text-[#2b7a14] transition-colors duration-300 text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="text-black font-bold text-lg mb-4">Get in touch</h3>

              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-orange-300 mt-1 flex-shrink-0" />
                  <a href="mailto:evoxcharge@tdgworld.com" className="break-words hover:text-[#2b7a14]">
                    evoxcharge@tdgworld.com
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-green-400  mt-1 flex-shrink-0" />
                  <a href="tel:+639399320844" className="hover:text-[#2b7a14]">0939 932 0844</a>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-blue-500 flex-shrink-0" />
                  <address className="not-italic leading-snug text-gray-600">
                    TDG Inhub AFP-RSBS Industrial Park<br />
                    KM12 cor C5, Wester Bicutan,<br />
                    Taguig, Philippines
                  </address>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="rounded-lg flex items-center justify-center">
                <img src={Logo} alt="" className='h-12' />
              </div>
            </div>

            <p className="text-gray-500 text-sm text-center">
              © 2025 EVOxCharge. All rights reserved. Powering the future of electric mobility.
            </p>
          </div>
        </div>
      </footer>

      <div
        className="fixed bottom-8 right-8 z-50"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onTouchStart={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="relative">
          <div
            id="floating-socials"
            className={`absolute bottom-16 right-0 z-10 flex flex-col transition-all duration-300 transform ${
              visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
            aria-hidden={!visible}
          >
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mb-4 group w-14 h-14 bg-[#1a1a1a] border border-gray-800 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                    social.color
                  } hover:border-transparent shadow-lg hover:shadow-2xl`}
                  style={{ transitionDelay: visible ? `${index * 50}ms` : '0ms' }}
                  title={social.name}
                >
                  <Icon size={24} className="text-white" />
                </a>
              );
            })}
          </div>

          {!visible && <div className="absolute inset-0 w-16 h-16 bg-[#BDFE4E] rounded-full animate-ping opacity-20 pointer-events-none" />}

          <button
            onClick={() => setPinned((v) => !v)}
            aria-pressed={pinned}
            aria-expanded={visible}
            aria-controls="floating-socials"
            className={`z-20 w-16 h-16 bg-gradient-to-br from-[#BDFE4E] to-[#a5e63c] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#BDFE4E]/50 transition-all duration-300 transform hover:scale-110 ${
              visible ? 'rotate-45' : 'rotate-0'
            }`}
            aria-label="Toggle Social Media"
          >
            <Share2 size={28} className="text-black" />
          </button>
        </div>
      </div>
    </>
  );
}
