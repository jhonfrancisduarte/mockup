import { ArrowRight, Calendar, User } from 'lucide-react';
import news1 from '../assets/news1.png';
import news2 from '../assets/news2.png';
import news3 from '../assets/news3.png';

export default function NewsSection({ sectionsVisible, sectionOpacity }) {
  return (
    <section
      id="newsSection"
      className="bg-[#0a0a0a] py-20 border-t border-gray-800 transition-opacity duration-700 ease-out"
      style={{ opacity: sectionOpacity }}
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${sectionsVisible.newsSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Latest <span className="text-[#BDFE4E]">News</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay updated with the latest from xCharge+
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            className={`group relative transition-all duration-1000 ${sectionsVisible.newsSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#BDFE4E]/50 transition-all duration-500 h-full flex flex-col relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#BDFE4E]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="h-64 relative overflow-hidden">
                <img
                  src={news1}
                  alt="EVOxCharge further expands network"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute top-4 right-4 bg-[#BDFE4E] text-black px-3 py-1 rounded-full text-xs font-semibold">
                  NEW
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#BDFE4E] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col relative z-10">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-[#BDFE4E]" />
                    <span>EVOxCharge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#BDFE4E]" />
                    <span>2025</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#BDFE4E] transition-colors duration-300 leading-tight">
                  EVOxCharge further expands network, promotes office-based EV charging
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6 flex-1 text-sm">
                  EVOxCharge, the country's first fully-automated electric vehicle (EV) charging service provider, inaugurated its latest EV charging station at the Reach Building within the SM MOA Complex in Pasay City.
                </p>

                <button className="cursor-pointer group/btn flex items-center gap-2 text-[#BDFE4E] hover:text-white transition-colors duration-300 font-semibold">
                  <span>Read More</span>
                  <ArrowRight size={16} className="transform group-hover/btn:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          <div
            className={`group relative transition-all duration-1000 delay-200 ${sectionsVisible.newsSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#BDFE4E]/50 transition-all duration-500 h-full flex flex-col relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#BDFE4E]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="h-64 relative overflow-hidden">
                <img
                  src={news2}
                  alt="EVOxCharge launches 5 new stations"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute top-4 right-4 w-16 h-16 border-2 border-[#BDFE4E]/20 rounded-full group-hover:rotate-180 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#BDFE4E] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col relative z-10">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-[#BDFE4E]" />
                    <span>EVOxCharge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#BDFE4E]" />
                    <span>2025</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#BDFE4E] transition-colors duration-300 leading-tight">
                  EVOxCharge launches 5 new EV charging stations
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6 flex-1 text-sm">
                  With their latest expansion, EVOxCharge now has a total of 28 EV charging stations! The charging station will offer a seamless experience for EV users through the EVOxCharge mobile application.
                </p>

                <button className="cursor-pointer group/btn flex items-center gap-2 text-[#BDFE4E] hover:text-white transition-colors duration-300 font-semibold">
                  <span>Read More</span>
                  <ArrowRight size={16} className="transform group-hover/btn:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          <div
            className={`group relative transition-all duration-1000 delay-400 ${sectionsVisible.newsSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#BDFE4E]/50 transition-all duration-500 h-full flex flex-col relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#BDFE4E]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="h-64 relative overflow-hidden">
                <img
                  src={news3}
                  alt="EVOxCharge adds new stations"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#BDFE4E]/5 rounded-full animate-pulse"></div>
                <div className="absolute top-8 right-8 w-8 h-8 bg-[#BDFE4E]/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#BDFE4E] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col relative z-10">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-[#BDFE4E]" />
                    <span>EVOxCharge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#BDFE4E]" />
                    <span>2025</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#BDFE4E] transition-colors duration-300 leading-tight">
                  EVOxCharge adds new stations. EVOxTerra bags 4 awards from Hongqi
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6 flex-1 text-sm">
                  EVOxCharge adds new stations with seamless charging experience through the mobile application, making EV charging more accessible across the country.
                </p>

                <button className="cursor-pointer group/btn flex items-center gap-2 text-[#BDFE4E] hover:text-white transition-colors duration-300 font-semibold">
                  <span>Read More</span>
                  <ArrowRight size={16} className="transform group-hover/btn:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
