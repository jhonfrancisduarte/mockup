import { useState, useEffect } from 'react';
import { Smartphone, Zap, Car, ArrowRight } from 'lucide-react';
import GooglePlay from '../assets/google-play.png';
import AppStore from '../assets/appstore.png';
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [sectionsVisible, setSectionsVisible] = useState({
    section1: false,
    section2: false,
    section3: false
  });

  useEffect(() => {
    setIsVisible(true);

    // Intersection Observer for scroll animations
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

    // Observe sections after component mounts
    setTimeout(() => {
      const sections = ['section1', 'section2', 'section3'];
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Main Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
        {/* Subtle background elements without gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#BDFE4E]/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#BDFE4E]/3 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#BDFE4E]/5 rounded-full blur-lg animate-bounce delay-500"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(189, 254, 78, 0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-20 lg:pt-24 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#BDFE4E]/10 text-[#BDFE4E] px-4 py-2 rounded-full text-sm font-medium border border-[#BDFE4E]/30">
                <Zap size={16} className="animate-pulse" />
                Mga Pogi ang nasa xcharge
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Power your drive
                </h1>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className='text-gray-400'>with</span> <span className="text-[#BDFE4E] animate-pulse">XCharge+</span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-xl text-gray-300 max-w-md leading-relaxed">
                Seamless charging anytime, anywhere. Experience the future of electric vehicle charging with our smart, reliable network.
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-4 text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#BDFE4E] rounded-full animate-ping"></div>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#BDFE4E] rounded-full animate-ping delay-200"></div>
                  <span>Fast Charging</span>
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
                  {/* Replaced the Download icon with the appstore.png asset */}
                  <img src={AppStore} alt="App Store" className="w-auto h-10 object-contain" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </button>
            </div>
          </div>


            {/* Right Visual Elements */}
            <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

              {/* Main device mockup */}
              <div className="relative mx-auto w-80 h-96">

                {/* Phone mockup */}
                <div className="absolute top-10 right-10 z-20 animate-float">
                  <div className="w-48 h-96 bg-[#1a1a1a] rounded-3xl p-2 shadow-2xl border border-gray-800">
                    <div className="w-full h-full bg-black rounded-3xl overflow-hidden relative">
                      {/* Phone screen content */}
                      <div className="bg-[#0a0a0a] h-full p-6">
                        <div className="text-center space-y-4">
                          <div className="w-12 h-12 bg-[#BDFE4E] rounded-2xl mx-auto flex items-center justify-center">
                            <Zap size={24} className="text-black" />
                          </div>
                          <h3 className="font-bold text-white">XCharge+</h3>
                          <div className="space-y-2">
                            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                              <div className="h-full bg-[#BDFE4E] w-3/4 animate-pulse"></div>
                            </div>
                            <p className="text-sm text-gray-400">Charging: 75%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Phone notch */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                </div>

                {/* Charging station */}
                <div className="absolute bottom-0 left-0 z-10 animate-float delay-300">
                  <div className="w-32 h-48 bg-[#1a1a1a] rounded-2xl relative shadow-2xl border border-gray-800">
                    {/* Charging port */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-black rounded-full border-4 border-[#BDFE4E]">
                      <div className="absolute inset-2 bg-[#BDFE4E] rounded-full animate-pulse"></div>
                    </div>
                    {/* Cable */}
                    <div className="absolute bottom-0 right-0 w-1 h-24 bg-[#BDFE4E] transform rotate-45 origin-bottom animate-pulse"></div>
                    {/* Status lights */}
                    <div className="absolute bottom-4 left-4 space-y-1">
                      <div className="w-2 h-2 bg-[#BDFE4E] rounded-full animate-ping"></div>
                      <div className="w-2 h-2 bg-[#BDFE4E] rounded-full animate-ping delay-200"></div>
                      <div className="w-2 h-2 bg-[#BDFE4E] rounded-full animate-ping delay-500"></div>
                    </div>
                  </div>
                </div>

                {/* Car silhouette */}
                <div className="absolute bottom-10 right-20 z-5 animate-float delay-700">
                  <div className="relative">
                    <Car size={80} className="text-gray-700" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#BDFE4E] rounded-full animate-ping"></div>
                  </div>
                </div>

                {/* Floating icons */}
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
      </section>

      {/* Evo XCharge for All Section */}
      <section className="bg-[#0a0a0a] py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Evo <span className="text-[#BDFE4E]">XCharge</span> for All
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive electric vehicle charging solutions designed for every need, from individual drivers to enterprise fleets.
            </p>
          </div>

          {/* Three Column Grid */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* EV Drivers */}
            <div
              id="section1"
              className={`group transition-all duration-1000 ${sectionsVisible.section1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#BDFE4E]/30 transition-all duration-300">
                {/* Image Container */}
                <div className="h-96 bg-[#2a2a2a] flex items-center justify-center relative overflow-hidden">
                  {/* Added image from assets */}
                  <img src={img1} alt="EV Drivers" className="absolute inset-0 w-full h-full max-w-full max-h-full object-contain" />

                  <div className="w-20 h-20 bg-[#BDFE4E] rounded-full flex items-center justify-center">
                    <Car size={40} className="text-black" />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-2 border-[#BDFE4E]/30 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#BDFE4E]/20 rounded-full"></div>
                </div>

                {/* Content */}
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
                {/* Image Container */}
                <div className="h-96 bg-[#2a2a2a] flex items-center justify-center relative overflow-hidden">
                  {/* Added image from assets */}
                  <img src={img2} alt="Business Solutions" className="absolute inset-0 w-full h-full max-w-full max-h-full object-contain" />

                  <div className="w-20 h-20 bg-[#BDFE4E] rounded-full flex items-center justify-center">
                    <Zap size={40} className="text-black" />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-6 left-6 w-16 h-16 border border-[#BDFE4E]/20 rounded-lg"></div>
                  <div className="absolute bottom-6 right-6 w-6 h-6 bg-[#BDFE4E]/30 rounded-full"></div>
                </div>

                {/* Content */}
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
                {/* Image Container */}
                <div className="h-96 bg-[#2a2a2a] flex items-center justify-center relative overflow-hidden">
                  {/* Added image from assets */}
                  <img src={img3} alt="Ecosystem" className="absolute inset-0 w-full h-full max-w-full max-h-full object-contain" />

                  <div className="w-20 h-20 bg-[#BDFE4E] rounded-full flex items-center justify-center">
                    <Smartphone size={40} className="text-black" />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-[#BDFE4E]/10 rounded-full"></div>
                  <div className="absolute bottom-8 right-8 w-14 h-14 border-2 border-[#BDFE4E]/20 rounded-full"></div>
                  <div className="absolute top-1/2 left-8 w-4 h-4 bg-[#BDFE4E]/40 rounded-full"></div>
                </div>

                {/* Content */}
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
    </>
  );
}
