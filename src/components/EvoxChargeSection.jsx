import { Car, Zap, Smartphone, ArrowRight } from 'lucide-react';
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';

export default function EvoxChargeSection({ sectionsVisible, sectionOpacity }) {
  return (
    <section
      id="evoxchargeSection"
      className="bg-[#2A2A2A] py-20 border-t border-gray-800 transition-opacity duration-700 ease-out"
      style={{ opacity: sectionOpacity }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Evo<span className="text-[#BDFE4E]">xCharge</span> for All
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive electric vehicle charging solutions designed for every need, from individual drivers to enterprise fleets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            id="section1"
            className={`group transition-all duration-1000 ${sectionsVisible.section1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#BDFE4E]/30 transition-all duration-300">
              <div className="h-96 bg-[#2a2a2a] flex items-center justify-center relative overflow-hidden">
                <img src={img1} alt="EV Drivers" className="absolute inset-0 w-full h-full max-w-full max-h-full object-contain" />

                <div className="w-20 h-20 bg-[#BDFE4E] rounded-full flex items-center justify-center">
                  <Car size={40} className="text-black" />
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 border-2 border-[#BDFE4E]/30 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#BDFE4E]/20 rounded-full"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white">EV DRIVERS</h3>
                <p className="text-gray-400 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <button className="group flex items-center gap-2 text-[#BDFE4E] hover:text-white transition-colors duration-300">
                  <span className="font-medium">Find a Charger</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          <div
            id="section2"
            className={`group transition-all duration-1000 delay-200 ${sectionsVisible.section2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#BDFE4E]/30 transition-all duration-300">
              <div className="h-96 bg-[#2a2a2a] flex items-center justify-center relative overflow-hidden">
                <img src={img2} alt="Business Solutions" className="absolute inset-0 w-full h-full max-w-full max-h-full object-contain" />

                <div className="w-20 h-20 bg-[#BDFE4E] rounded-full flex items-center justify-center">
                  <Zap size={40} className="text-black" />
                </div>
                <div className="absolute top-6 left-6 w-16 h-16 border border-[#BDFE4E]/20 rounded-lg"></div>
                <div className="absolute bottom-6 right-6 w-6 h-6 bg-[#BDFE4E]/30 rounded-full"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white">BUSINESS SOLUTIONS</h3>
                <p className="text-gray-400 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <button className="group flex items-center gap-2 text-[#BDFE4E] hover:text-white transition-colors duration-300">
                  <span className="font-medium">Partner with us</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          <div
            id="section3"
            className={`group transition-all duration-1000 delay-400 ${sectionsVisible.section3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#BDFE4E]/30 transition-all duration-300">
              <div className="h-96 bg-[#2a2a2a] flex items-center justify-center relative overflow-hidden">
                <img src={img3} alt="Ecosystem" className="absolute inset-0 w-full h-full max-w-full max-h-full object-contain" />

                <div className="w-20 h-20 bg-[#BDFE4E] rounded-full flex items-center justify-center">
                  <Smartphone size={40} className="text-black" />
                </div>
                <div className="absolute top-4 left-4 w-10 h-10 bg-[#BDFE4E]/10 rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-14 h-14 border-2 border-[#BDFE4E]/20 rounded-full"></div>
                <div className="absolute top-1/2 left-8 w-4 h-4 bg-[#BDFE4E]/40 rounded-full"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white">ECOSYSTEM</h3>
                <p className="text-gray-400 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <button className="group flex items-center gap-2 text-[#BDFE4E] hover:text-white transition-colors duration-300">
                  <span className="font-medium">Learn More</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
