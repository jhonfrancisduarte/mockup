import { ArrowRight } from 'lucide-react';
import step1 from '../assets/1.webp';
import step2 from '../assets/2.webp';
import step3 from '../assets/3.webp';
import step4 from '../assets/4.webp';
import step5 from '../assets/5.webp';

const steps = [
  {
    image: step1,
    title: 'Plug In',
    description: 'Connect your vehicle to any available charging station'
  },
  {
    image: step2,
    title: 'Scan QR',
    description: 'Use your app to scan the QR code on the charger'
  },
  {
    image: step3,
    title: 'Set Preferences',
    description: 'Choose your payment method: GCash, credit card, or debit card.'
  },
  {
    image: step4,
    title: 'Pay in App',
    description: 'Complete payment securely through our mobile app'
  },
  {
    image: step5,
    title: 'Charge & Go',
    description: 'Relax while your vehicle charges quickly and efficiently'
  }
];

export default function HowToChargeSection({ sectionsVisible, activeStep, sectionOpacity }) {
  return (
    <section
      id="howToCharge"
      className="bg-[#2A2A2A] py-20 border-t border-gray-800 overflow-hidden transition-opacity duration-700 ease-out"
      style={{ opacity: sectionOpacity }}
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${sectionsVisible.howToCharge ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            How to <span className="text-[#BDFE4E]">Charge</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Simple steps to power up your vehicle in minutes
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const isActive = index <= activeStep;

            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${sectionsVisible.howToCharge ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`bg-[#1a1a1a] rounded-2xl overflow-hidden border transition-all duration-700 h-full flex flex-col relative ${
                  isActive
                    ? 'border-[#BDFE4E]/50 hover:border-[#BDFE4E] shadow-lg shadow-[#BDFE4E]/20'
                    : 'border-gray-800 hover:border-[#BDFE4E]/50'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#BDFE4E]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute -top-8 -left-6 z-20 pointer-events-none">
                    <div className={`font-bold text-[180px] leading-none transition-colors duration-500 ${
                      isActive
                        ? 'text-[#BDFE4E]/20 group-hover:text-[#BDFE4E]/30'
                        : 'text-[#BDFE4E]/10 group-hover:text-[#BDFE4E]/20'
                    }`} style={{ fontFamily: 'Arial Black, sans-serif' }}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <div className="h-64 relative overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#BDFE4E] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col relative z-10">
                    <div className={`text-sm font-semibold mb-3 transition-colors duration-700 ${
                      isActive ? 'text-[#BDFE4E]' : 'text-gray-500'
                    }`}>
                      Step {index + 1}
                    </div>
                    <h3 className={`text-2xl font-bold mb-3 transition-colors duration-700 ${
                      isActive ? 'text-white group-hover:text-[#BDFE4E]' : 'text-gray-600'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors duration-700 ${
                      isActive ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight size={24} className={`transition-colors duration-700 ${
                      isActive ? 'text-[#BDFE4E]' : 'text-gray-700'
                    }`} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
