import { useState } from 'react';
import { Phone, Mail, MessageCircle, QrCode } from 'lucide-react';
import Qr from "../../assets/qr.png"


function SocialSidebar() {
  const [isHovered, setIsHovered] = useState(false);

  const socialLinks = [
    {
      icon: <Phone size={20} />,
      value: '+86-15060765919',
      href: 'tel:+8615060765919',
      type: 'contact',
    },
    {
      icon: <Mail size={20} />,
      value: 'bryanlomeriopogi@gmail.com',
      href: 'mailto:bryanlomeriopogi@gmail.com',
      type: 'contact',
    },
    {
      icon: <MessageCircle size={20} />,
      value: '+639947946338',
      href: 'https://wa.me/8615060765919',
      type: 'contact',
    },
    {
      icon: <QrCode size={20} />,
      label: 'Scan to Download App',
      value: 'PlayStore QR Code',
      qrCode: Qr,
      type: 'qr',
    },
  ];

  return (
    <div
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="bg-[#0a0a0a] border-l border-t border-b border-[#BDFE4E]/20 rounded-l-xl transition-all duration-1000 overflow-hidden shadow-2xl"
        style={{
          width: isHovered ? '280px' : '50px',
        }}
      >
        <div className="flex flex-col">
          {socialLinks.map((link, index) => (
            <div
              key={index}
              className="group relative border-b border-[#BDFE4E]/10 last:border-b-0"
            >
              {link.type === 'contact' ? (
                <a
                  href={link.href}
                  target={link.href && link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href && link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center transition-all duration-300 hover:bg-[#BDFE4E]/5"
                  style={{
                    minHeight: '50px',
                  }}
                >
                  <div className="w-[50px] h-[50px] flex items-center justify-center flex-shrink-0 text-[#BDFE4E]">
                    {link.icon}
                  </div>

                  <div
                    className={`pr-4 transition-all duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <span className="text-sm font-light text-white">{link.value}</span>
                  </div>
                </a>
              ) : (
                <div
                  className="flex items-center transition-all duration-300 hover:bg-[#BDFE4E]/5 overflow-hidden"
                  style={{
                    height: isHovered ? 'auto' : '50px',
                  }}
                >
                  <div className="w-[50px] h-[50px] flex items-center justify-center flex-shrink-0 text-[#BDFE4E]">
                    {link.icon}
                  </div>

                  <div
                    className={`py-3 pr-3 transition-all duration-700 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <p className="text-xs font-light mb-2 text-gray-300">{link.label}</p>
                    {link.qrCode && (
                      <div className="bg-white p-1 inline-block rounded">
                        <img
                          src={link.qrCode}
                          alt={link.value}
                          className="w-20 h-20"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (


      <SocialSidebar />

  );
}

export default App;
