import { useState, useEffect } from 'react';
import { MapPin, Zap, Globe, TrendingUp } from 'lucide-react';


export default function OurNetwork() {
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'network-section') {
              setIsVisible(true);
            }
            if (entry.target.id === 'network-stats') {
              setStatsVisible(true);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    setTimeout(() => {
      const section = document.getElementById('network-section');
      const stats = document.getElementById('network-stats');
      if (section) observer.observe(section);
      if (stats) observer.observe(stats);
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#0a0a0a] py-20 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          id="network-section"
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="text-[#BDFE4E]">Network</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Growing nationwide with thousands of charging stations, bringing reliable power to every corner of your journey.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          id="network-stats"
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {/* Stat 1 */}
          <div
            className={`bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 hover:border-[#BDFE4E]/30 transition-all duration-500 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="w-12 h-12 bg-[#BDFE4E]/10 rounded-xl flex items-center justify-center mb-4">
              <MapPin size={24} className="text-[#BDFE4E]" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">30+</div>
            <div className="text-gray-400">Charging Stations</div>
          </div>

          {/* Stat 2 */}
          <div
            className={`bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 hover:border-[#BDFE4E]/30 transition-all duration-500 delay-100 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="w-12 h-12 bg-[#BDFE4E]/10 rounded-xl flex items-center justify-center mb-4">
              <Globe size={24} className="text-[#BDFE4E]" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">20+</div>
            <div className="text-gray-400">Cities Covered</div>
          </div>

          {/* Stat 3 */}
          <div
            className={`bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 hover:border-[#BDFE4E]/30 transition-all duration-500 delay-200 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="w-12 h-12 bg-[#BDFE4E]/10 rounded-xl flex items-center justify-center mb-4">
              <Zap size={24} className="text-[#BDFE4E]" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">1M+</div>
            <div className="text-gray-400">Charging Sessions</div>
          </div>

          {/* Stat 4 */}
          <div
            className={`bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 hover:border-[#BDFE4E]/30 transition-all duration-500 delay-300 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="w-12 h-12 bg-[#BDFE4E]/10 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp size={24} className="text-[#BDFE4E]" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Uptime Rate</div>
          </div>
        </div>

        {/* Map Visualization */}
        <div
          className={`relative bg-[#1a1a1a] rounded-3xl overflow-hidden border border-gray-800 transition-all duration-1000 delay-400 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Map Container */}
          <div className="h-96 relative bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'linear-gradient(rgba(189, 254, 78, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(189, 254, 78, 0.1) 1px, transparent 1px)',
                  backgroundSize: '50px 50px'
                }}
              ></div>
            </div>

            {/* Animated Dots representing stations */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#BDFE4E] rounded-full animate-ping"></div>
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#BDFE4E] rounded-full animate-ping delay-200"></div>
              <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-[#BDFE4E] rounded-full animate-ping delay-500"></div>
              <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-[#BDFE4E] rounded-full animate-ping delay-700"></div>
              <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-[#BDFE4E] rounded-full animate-ping delay-1000"></div>
            </div>

            {/* Center Icon */}
            <div className="relative z-10">
              <div className="w-32 h-32 bg-[#BDFE4E]/10 rounded-full flex items-center justify-center border-2 border-[#BDFE4E]/30">
                <MapPin size={48} className="text-[#BDFE4E]" />
              </div>
              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-full border-2 border-[#BDFE4E]/20 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border-2 border-[#BDFE4E]/10 animate-ping delay-500"></div>
            </div>

            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
              <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="#BDFE4E" strokeWidth="1" className="animate-pulse" />
              <line x1="66%" y1="33%" x2="50%" y2="50%" stroke="#BDFE4E" strokeWidth="1" className="animate-pulse delay-200" />
              <line x1="50%" y1="66%" x2="50%" y2="50%" stroke="#BDFE4E" strokeWidth="1" className="animate-pulse delay-500" />
              <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="#BDFE4E" strokeWidth="1" className="animate-pulse delay-700" />
            </svg>
          </div>

          {/* Bottom Info Bar */}
          <div className="bg-[#0a0a0a] p-6 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-white mb-2">
                  Expanding Every Day
                </h3>
                <p className="text-gray-400">
                  New charging stations added weekly to serve you better
                </p>
              </div>
              <button className="group bg-[#BDFE4E] hover:bg-[#a5e63c] text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <span>Find Nearest Station</span>
                <MapPin size={20} className="transform group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
