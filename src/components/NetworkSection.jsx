import { MapPin, Globe, Zap, TrendingUp } from 'lucide-react';

export default function NetworkSection({ sectionsVisible, sectionOpacity }) {
  return (
    <section
      id="networkSection"
      className="bg-[#0a0a0a] py-20 border-t border-gray-800 transition-opacity duration-700 ease-out"
      style={{ opacity: sectionOpacity }}
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${sectionsVisible.networkSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="text-[#BDFE4E]">Network</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Growing nationwide with a vast network of charging stations, bringing reliable power to every corner of your journey.
          </p>
        </div>

        <div
          id="networkStats"
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          <div
            className={`bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 hover:border-[#BDFE4E]/30 transition-all duration-500 ${sectionsVisible.networkStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="w-12 h-12 bg-[#BDFE4E]/10 rounded-xl flex items-center justify-center mb-4">
              <MapPin size={24} className="text-[#BDFE4E]" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">100+</div>
            <div className="text-gray-400">Charging points</div>
          </div>

          <div
            className={`bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 hover:border-[#BDFE4E]/30 transition-all duration-500 delay-100 ${sectionsVisible.networkStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="w-12 h-12 bg-[#BDFE4E]/10 rounded-xl flex items-center justify-center mb-4">
              <Globe size={24} className="text-[#BDFE4E]" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400">Cities Covered</div>
          </div>

          <div
            className={`bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 hover:border-[#BDFE4E]/30 transition-all duration-500 delay-200 ${sectionsVisible.networkStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="w-12 h-12 bg-[#BDFE4E]/10 rounded-xl flex items-center justify-center mb-4">
              <Zap size={24} className="text-[#BDFE4E]" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">1M+</div>
            <div className="text-gray-400">Users</div>
          </div>

          <div
            className={`bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 hover:border-[#BDFE4E]/30 transition-all duration-500 delay-300 ${sectionsVisible.networkStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="w-12 h-12 bg-[#BDFE4E]/10 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp size={24} className="text-[#BDFE4E]" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Uptime Rate</div>
          </div>
        </div>

        <div
          className={`relative bg-[#1a1a1a] rounded-3xl overflow-hidden border border-gray-800 transition-all duration-1000 delay-400 ${sectionsVisible.networkStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="h-96 relative bg-[#1a1a1a]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247253.85993577406!2d120.84860869453125!3d14.599512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca03571ec38b%3A0x69d1d5751069c11f!2sManila%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph&style=feature:all|element:geometry|color:0x1a1a1a&style=feature:all|element:labels.text.fill|color:0xBDFE4E&style=feature:all|element:labels.text.stroke|color:0x0a0a0a&style=feature:water|element:geometry|color:0x2a2a2a&style=feature:road|element:geometry|color:0x2a2a2a&style=feature:road|element:geometry.stroke|color:0x1a1a1a&style=feature:poi|element:geometry|color:0x1a1a1a&style=feature:transit|element:geometry|color:0x2a2a2a"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="xCharge+ Network Locations"
            ></iframe>

            <div className="absolute top-4 left-4 bg-[#1a1a1a]/90 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
              <div className="flex items-center gap-2">
                <Zap size={20} className="text-[#BDFE4E]" />
                <span className="text-white font-semibold">xCharge+ Stations</span>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 flex gap-2">
              <div className="bg-[#1a1a1a]/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-800 flex items-center gap-2">
                <MapPin size={16} className="text-[#BDFE4E]" />
                <span className="text-white text-sm">Manila</span>
              </div>
              <div className="bg-[#1a1a1a]/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-800 flex items-center gap-2">
                <MapPin size={16} className="text-[#BDFE4E]" />
                <span className="text-white text-sm">Quezon City</span>
              </div>
              <div className="bg-[#1a1a1a]/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-800 flex items-center gap-2">
                <MapPin size={16} className="text-[#BDFE4E]" />
                <span className="text-white text-sm">Makati</span>
              </div>
            </div>

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#1a1a1a]/20 via-transparent to-transparent"></div>
          </div>

          <div className="bg-[#0a0a0a] p-6 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-white mb-2">
                  Expanding Every Day
                </h3>
                <p className="text-gray-400">
                  More charging stations coming your way to serve you better.
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
