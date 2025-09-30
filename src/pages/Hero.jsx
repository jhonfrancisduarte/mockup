import { useState, useEffect } from 'react';
import { Smartphone, Zap, Car, ArrowRight, MapPin, Globe, TrendingUp, Calendar, User } from 'lucide-react';
import GooglePlay from '../assets/google-play.png';
import AppStore from '../assets/appstore.png';
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';
import step1 from '../assets/1.webp';
import step2 from '../assets/2.webp';
import step3 from '../assets/3.webp';
import step4 from '../assets/4.webp';
import step5 from '../assets/5.webp';
import news1 from '../assets/news1.png';
import news2 from '../assets/news2.png';
import news3 from '../assets/news3.png';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [sectionsVisible, setSectionsVisible] = useState({
    section1: false,
    section2: false,
    section3: false,
    networkSection: false,
    networkStats: false,
    howToCharge: false,
    newsSection: false
  });

  const [activeStep, setActiveStep] = useState(-1);

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

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    setTimeout(() => {
      const sections = ['section1', 'section2', 'section3', 'networkSection', 'networkStats', 'howToCharge', 'newsSection'];
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const howToChargeSection = document.getElementById('howToCharge');
      if (!howToChargeSection) return;

      const rect = howToChargeSection.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight * 0.7)));
        const stepIndex = Math.floor(scrollProgress * steps.length);
        setActiveStep(Math.min(stepIndex, steps.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;
  const opacityValue = Math.max(0, 1 - scrollY / 600);

  return (
    <>
      {/* Main Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
        {/* Animated Circuit Pattern Background */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="#BDFE4E" opacity="0.3" />
                <circle cx="90" cy="90" r="2" fill="#BDFE4E" opacity="0.3" />
                <circle cx="50" cy="50" r="2" fill="#BDFE4E" opacity="0.5" />

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
                Mga Pogi ang nasa xcharge
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
                <button className="group flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-700">
                  <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                    <img src={GooglePlay} alt="Google Play" className="w-auto h-10 object-contain" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </button>

                <button className="group flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-700">
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
              <div className="relative mx-auto w-80 h-96">
                <div className="absolute top-10 right-10 z-20 animate-float">
                  <div className="w-48 h-96 bg-[#1a1a1a] rounded-3xl p-2 shadow-2xl border border-gray-800">
                    <div className="w-full h-full bg-black rounded-3xl overflow-hidden relative">
                      <div className="bg-[#0a0a0a] h-full p-6">
                        <div className="text-center space-y-4">
                          <div className="w-12 h-12 bg-[#BDFE4E] rounded-2xl mx-auto flex items-center justify-center">
                            <Zap size={24} className="text-black" />
                          </div>
                          <h3 className="font-bold text-white">xCharge+</h3>
                          <div className="space-y-2">
                            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                              <div className="h-full bg-[#BDFE4E] w-3/4 animate-pulse"></div>
                            </div>
                            <p className="text-sm text-gray-400">Charging: 75%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 z-10 animate-float delay-300">
                  <div className="w-32 h-48 bg-[#1a1a1a] rounded-2xl relative shadow-2xl border border-gray-800">
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-black rounded-full border-4 border-[#BDFE4E]">
                      <div className="absolute inset-2 bg-[#BDFE4E] rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-1 h-24 bg-[#BDFE4E] transform rotate-45 origin-bottom animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 space-y-1">
                      <div className="w-2 h-2 bg-[#BDFE4E] rounded-full animate-ping"></div>
                      <div className="w-2 h-2 bg-[#BDFE4E] rounded-full animate-ping delay-200"></div>
                      <div className="w-2 h-2 bg-[#BDFE4E] rounded-full animate-ping delay-500"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 right-20 z-5 animate-float delay-700">
                  <div className="relative">
                    <Car size={80} className="text-gray-700" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#BDFE4E] rounded-full animate-ping"></div>
                  </div>
                </div>

                <div className="absolute top-0 left-0 animate-float delay-1000">
                  <Smartphone size={24} className="text-[#BDFE4E]/60" />
                </div>

                <div className="absolute top-20 right-0 animate-float delay-1500">
                  <Zap size={20} className="text-[#BDFE4E]/60" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
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

      {/* Evo XCharge for All Section */}
      <section className="bg-[#0a0a0a] py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Evo <span className="text-[#BDFE4E]">XCharge</span> for All
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive electric vehicle charging solutions designed for every need, from individual drivers to enterprise fleets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* EV Drivers */}
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

            {/* Business Solutions */}
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

            {/* Ecosystem */}
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

      {/* Our Network Section */}
      <section className="bg-[#0a0a0a] py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div
            id="networkSection"
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
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Charging Stations</div>
            </div>

            <div
              className={`bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 hover:border-[#BDFE4E]/30 transition-all duration-500 delay-100 ${sectionsVisible.networkStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="w-12 h-12 bg-[#BDFE4E]/10 rounded-xl flex items-center justify-center mb-4">
                <Globe size={24} className="text-[#BDFE4E]" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">30+</div>
              <div className="text-gray-400">Cities Covered</div>
            </div>

            <div
              className={`bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 hover:border-[#BDFE4E]/30 transition-all duration-500 delay-200 ${sectionsVisible.networkStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="w-12 h-12 bg-[#BDFE4E]/10 rounded-xl flex items-center justify-center mb-4">
                <Zap size={24} className="text-[#BDFE4E]" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">1M+</div>
              <div className="text-gray-400">Charging Sessions</div>
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

      {/* How to Charge Section */}
      <section id="howToCharge" className="bg-[#0a0a0a] py-20 border-t border-gray-800 overflow-hidden">
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

      {/* News Section */}
      <section id="newsSection" className="bg-[#0a0a0a] py-20 border-t border-gray-800">
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

    </>
  );
}
