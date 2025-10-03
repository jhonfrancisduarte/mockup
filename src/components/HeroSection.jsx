import { useState, useEffect } from 'react';
import { Zap, Car } from 'lucide-react';
import GooglePlay from '../assets/google-play.png';
import AppStore from '../assets/appstore.png';
import Phone1 from '../assets/appphone3.png';
import Phone2 from '../assets/appphone2.png';

export default function HeroSection({ scrollY, sectionOpacity }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const parallaxOffset = scrollY * 0.5;
  const opacityValue = Math.max(0, 1 - scrollY / 600);

  return (
    <section
      id="heroSection"
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] transition-opacity duration-700 ease-out"
      style={{ opacity: sectionOpacity }}
    >
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="9" cy="70" r="5" fill="#BDFE4E" opacity="0.3" />
              <circle cx="90" cy="90" r="2" fill="#BDFE4E" opacity="0.3" />
              <line x1="10" y1="10" x2="50" y2="50" stroke="#BDFE4E" strokeWidth="0.5" opacity="0.2" />
              <line x1="50" y1="50" x2="90" y2="90" stroke="#BDFE4E" strokeWidth="0.5" opacity="0.2" />
              <rect x="48" y="48" width="4" height="4" fill="none" stroke="#BDFE4E" strokeWidth="0.5" opacity="0.3" />
              <rect x="8" y="8" width="4" height="4" fill="none" stroke="#BDFE4E" strokeWidth="0.5" opacity="0.3" />
              <rect x="88" y="88" width="4" height="4" fill="none" stroke="#BDFE4E" strokeWidth="0.5" opacity="0.3" />
              <line x1="30" y1="10" x2="30" y2="30" stroke="#BDFE4E" strokeWidth="0.5" opacity="0.2" />
              <line x1="30" y1="30" x2="50" y2="30" stroke="#BDFE4E" strokeWidth="0.5" opacity="0.2" />
              <line x1="70" y1="50" x2="70" y2="70" stroke="#BDFE4E" strokeWidth="0.5" opacity="0.2" />
              <line x1="50" y1="70" x2="70" y2="70" stroke="#BDFE4E" strokeWidth="0.5" opacity="0.2" />
              <circle cx="30" cy="30" r="1.5" fill="#BDFE4E" opacity="0.4" />
              <circle cx="70" cy="70" r="1.5" fill="#BDFE4E" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#BDFE4E]/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#BDFE4E]/3 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#BDFE4E]/5 rounded-full blur-lg animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20 lg:pt-24 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            style={{
              transform: `translateY(${parallaxOffset * 0.3}px)`,
              opacity: opacityValue
            }}
          >
            <div className="inline-flex items-center gap-2 bg-[#BDFE4E]/10 text-[#BDFE4E] px-4 py-2 rounded-full text-sm font-medium border border-[#BDFE4E]/30">
              <Zap size={16} className="animate-pulse" />
              POWERING THE FUTURE
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Power your drive
              </h1>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className='text-gray-400'>with</span> <span className="text-[#BDFE4E] animate-pulse">xCharge+</span>
              </h1>
            </div>

            <p className="text-xl text-gray-300 max-w-md leading-relaxed">
              Seamless charging anytime, anywhere. Experience the future of electric vehicle charging with our smart, reliable network.
            </p>

            <div className="flex flex-wrap gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#BDFE4E] rounded-full animate-ping"></div>
                <span>Easy to use</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#BDFE4E] rounded-full animate-ping delay-200"></div>
                <span>Reliable Charging</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#BDFE4E] rounded-full animate-ping delay-500"></div>
                <span>Smart App</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="cursor-pointer group flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-700">
                <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                  <img src={GooglePlay} alt="Google Play" className="w-auto h-10 object-contain" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </button>

              <button className="cursor-pointer group flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-700">
                <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                  <img src={AppStore} alt="App Store" className="w-auto h-10 object-contain" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{
              transform: `translateY(${parallaxOffset * 0.5}px)`,
              opacity: opacityValue
            }}
          >
            <div className='relative flex justify-center items-center min-h-[600px]'>
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='absolute w-[400px] h-[400px] bg-[#BDFE4E]/5 rounded-full blur-3xl animate-pulse'></div>
                <div className='absolute w-[300px] h-[300px] bg-[#BDFE4E]/10 rounded-full blur-2xl animate-pulse delay-500'></div>
              </div>

              <svg className='absolute inset-0 w-full h-full' xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="chargeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#BDFE4E" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#BDFE4E" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <g className="animate-pulse">
                  <circle cx="15%" cy="25%" r="3" fill="#BDFE4E" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="85%" cy="35%" r="3" fill="#BDFE4E" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="20%" cy="75%" r="2" fill="#BDFE4E" opacity="0.5">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="80%" cy="80%" r="2" fill="#BDFE4E" opacity="0.5">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" />
                  </circle>
                </g>

                <path d="M 10% 30% Q 30% 45%, 45% 50%" stroke="#BDFE4E" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                </path>
                <path d="M 90% 40% Q 70% 50%, 55% 55%" stroke="#BDFE4E" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.2s" repeatCount="indefinite" />
                </path>
              </svg>

              <div className='absolute top-[15%] left-[5%] animate-float'>
                <div className='relative group'>
                  <div className='absolute inset-0 bg-[#BDFE4E]/20 rounded-2xl blur-xl group-hover:bg-[#BDFE4E]/30 transition-all duration-300'></div>
                  <div className='relative bg-[#1a1a1a] border-2 border-[#BDFE4E]/40 rounded-2xl p-4 backdrop-blur-sm'>
                    <Zap size={32} className="text-[#BDFE4E] animate-pulse" />
                    <div className='absolute -top-1 -right-1 w-3 h-3 bg-[#BDFE4E] rounded-full animate-ping'></div>
                  </div>
                </div>
              </div>

              <div className='absolute top-[20%] right-[8%] animate-float-delayed'>
                <div className='relative group'>
                  <div className='absolute inset-0 bg-[#BDFE4E]/20 rounded-xl blur-lg'></div>
                  <div className='relative bg-[#1a1a1a] border-2 border-[#BDFE4E]/30 rounded-xl p-3'>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L4 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-8-5z" stroke="#BDFE4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 8v8M8 12h8" stroke="#BDFE4E" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className='absolute bottom-[25%] left-[10%] animate-float'>
                <div className='relative group'>
                  <div className='absolute inset-0 bg-[#BDFE4E]/20 rounded-full blur-xl'></div>
                  <div className='relative bg-[#1a1a1a] border-2 border-[#BDFE4E]/40 rounded-full p-3'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="7" y="4" width="10" height="16" rx="2" stroke="#BDFE4E" strokeWidth="2"/>
                      <path d="M9 9h6M9 12h6M9 15h4" stroke="#BDFE4E" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="12" cy="18" r="0.5" fill="#BDFE4E"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className='absolute bottom-[30%] right-[12%] animate-float-delayed'>
                <div className='relative'>
                  <div className='absolute inset-0 bg-[#BDFE4E]/20 rounded-2xl blur-lg'></div>
                  <div className='relative bg-[#1a1a1a] border-2 border-[#BDFE4E]/30 rounded-2xl p-4'>
                    <Car size={28} className="text-[#BDFE4E]" />
                  </div>
                </div>
              </div>

              <div className='absolute top-[60%] left-[15%]'>
                <div className='flex items-center gap-2 bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#BDFE4E]/30 rounded-full px-4 py-2'>
                  <div className='w-2 h-2 bg-[#BDFE4E] rounded-full animate-pulse'></div>
                  <span className='text-[#BDFE4E] text-sm font-semibold'>Charging</span>
                </div>
              </div>

              <div className='absolute top-[45%] right-[5%]'>
                <div className='bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#BDFE4E]/30 rounded-xl px-3 py-2'>
                  <div className='flex items-center gap-2'>
                    <Zap size={16} className="text-[#BDFE4E]" />
                    <span className='text-white text-xs font-bold'>95%</span>
                  </div>
                </div>
              </div>

              <div className='relative z-10 flex flex-row gap-0 items-center justify-center'>
                <div className='relative animate-float-slow'>
                  <div className='absolute inset-0 bg-[#BDFE4E]/10 rounded-[3rem] blur-2xl'></div>
                  <img src={Phone1} className='h-[500px] w-auto relative drop-shadow-2xl' alt="xCharge+ App Interface" />

                  <div className='absolute -top-6 -right-6 w-12 h-12 bg-[#BDFE4E]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#BDFE4E]/40'>
                    <Zap size={24} className="text-[#BDFE4E] animate-pulse" />
                  </div>
                </div>

                <div className='relative animate-float-slow-delayed ml-[-80px] mt-20 z-0'>
                  <div className='absolute inset-0 bg-[#BDFE4E]/5 rounded-[3rem] blur-2xl'></div>
                  <img src={Phone2} className='h-[480px] w-auto relative drop-shadow-2xl opacity-80' alt="xCharge+ Features" />
                </div>
              </div>

              <div className='absolute top-[10%] left-[50%] transform -translate-x-1/2'>
                <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce-slow">
                  <path d="M15 5 L15 35 L10 35 L20 50 L30 35 L25 35 L25 5 Z" fill="#BDFE4E" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path d="M35 15 L35 45 L30 45 L40 60 L50 45 L45 45 L45 15 Z" fill="#BDFE4E" opacity="0.4">
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" begin="0.3s" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            </div>

            <style dangerouslySetInnerHTML={{__html: `
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
              }
              @keyframes float-delayed {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-15px); }
              }
              @keyframes float-slow {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
              }
              @keyframes float-slow-delayed {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
              }
              @keyframes bounce-slow {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
              .animate-float {
                animation: float 3s ease-in-out infinite;
              }
              .animate-float-delayed {
                animation: float-delayed 3.5s ease-in-out infinite;
              }
              .animate-float-slow {
                animation: float-slow 4s ease-in-out infinite;
              }
              .animate-float-slow-delayed {
                animation: float-slow-delayed 4.5s ease-in-out infinite;
              }
              .animate-bounce-slow {
                animation: bounce-slow 2s ease-in-out infinite;
              }
            `}} />
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[#BDFE4E] text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-[#BDFE4E] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#BDFE4E] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
