import { useState, useEffect, useRef } from 'react';
import { Zap, Leaf, Briefcase, ArrowRight, TrendingUp, Users, Globe, Award } from 'lucide-react';
import { IoLocationSharp } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";

export default function Company() {
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    about: false,
    sustainability: false,
    careers: false
  });

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const sustainabilityRef = useRef(null);
  const careersRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.dataset.section;
          setVisibleSections(prev => ({ ...prev, [sectionName]: true }));
        }
      });
    }, observerOptions);

    const refs = [
      { ref: heroRef, name: 'hero' },
      { ref: aboutRef, name: 'about' },
      { ref: sustainabilityRef, name: 'sustainability' },
      { ref: careersRef, name: 'careers' }
    ];

    refs.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const stats = [
    { icon: Zap, label: 'Charging Stations', value: '69+' },
    { icon: FaUserTie, label: 'Happy Customers', value: '50+' },
    { icon: IoLocationSharp, label: 'Locations', value: '69+' },
    { icon: FaAward, label: 'Years Experience', value: '69+' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a]"></div>

        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-[#BDFE4E]/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-[#BDFE4E]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-[#BDFE4E]/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>

        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-radial from-[#BDFE4E]/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNCREZFNEUiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">


      {/*     <g className="circuit-lines" opacity="0.2">
            <path d="M 0 30 L 100 30 M 0 50 L 100 50 M 0 70 L 100 70"
                  stroke="#BDFE4E"
                  strokeWidth="0.5"
                  strokeDasharray="10,5"
                  vectorEffect="non-scaling-stroke">
              <animate attributeName="stroke-dashoffset" values="0;-15;0" dur="8s" repeatCount="indefinite" />
            </path>
            <path d="M 20 0 L 20 100 M 50 0 L 50 100 M 80 0 L 80 100"
                  stroke="#BDFE4E"
                  strokeWidth="0.5"
                  strokeDasharray="10,5"
                  vectorEffect="non-scaling-stroke">
              <animate attributeName="stroke-dashoffset" values="0;15;0" dur="10s" repeatCount="indefinite" />
            </path>
          </g> */}
        </svg>

       {/*  <div className="absolute top-[15%] left-[8%] w-20 h-20 opacity-30">
          <div className="absolute inset-0 border-2 border-[#BDFE4E] rounded-lg transform rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute inset-2 border-2 border-[#BDFE4E]/50 rounded-lg transform -rotate-45"></div>
          <div className="absolute inset-0 bg-[#BDFE4E]/10 rounded-lg transform rotate-45 blur-sm"></div>
        </div>

        <div className="absolute top-[25%] right-[12%] w-16 h-16 opacity-25">
          <div className="absolute inset-0 border-2 border-[#BDFE4E] rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute inset-0 bg-[#BDFE4E]/20 rounded-full blur-md"></div>
        </div>

        <div className="absolute bottom-[30%] left-[20%] w-24 h-24 opacity-20">
          <div className="absolute inset-0 border-2 border-[#BDFE4E] transform rotate-12 animate-pulse"></div>
          <div className="absolute inset-0 bg-[#BDFE4E]/10 transform rotate-12 blur-sm"></div>
        </div>

        <div className="absolute top-[60%] right-[25%] w-14 h-14 opacity-25">
          <div className="w-full h-full border-2 border-[#BDFE4E] rounded-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 bg-[#BDFE4E]/15 rounded-lg blur-sm"></div>
        </div> */}

        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#BDFE4E]/[0.02] via-transparent to-[#BDFE4E]/[0.05]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#BDFE4E]/[0.02] to-transparent"></div> */}
      </div>

      <div className="relative z-10">
        <div
          ref={heroRef}
          data-section="hero"
          className="min-h-screen flex items-center justify-center px-4 md:px-6 relative"
        >
          <div className={`max-w-7xl mx-auto w-full transition-all duration-1000 relative z-10 ${visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className={`inline-flex items-center gap-2 bg-[#BDFE4E]/10 text-[#BDFE4E] px-4 py-2 rounded-full text-sm font-semibold border border-[#BDFE4E]/30 mb-6  ${visibleSections.hero ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  COMPANY
                </div>

                <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight transition-all duration-1000 delay-300 ${visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Driving the <span className="text-[#BDFE4E]">Future of</span> Clean Mobility
                </h1>
                <p className={`text-lg text-gray-400 mb-8 leading-relaxed transition-all duration-1000 delay-500 ${visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Leading provider of comprehensive EV charging solutions, transforming the way the world powers electric vehicles.
                </p>
               <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-700 ${visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="group">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-xl bg-[#BDFE4E]/10 flex items-center justify-center group-hover:bg-[#BDFE4E]/20 transition-colors border border-[#BDFE4E]/20">
                            <Icon size={20} className="text-[#BDFE4E]" />
                          </div>
                          <span className="text-2xl font-bold text-white">{stat.value}</span>
                        </div>
                        <p className="text-sm text-gray-400 ml-[52px]">{stat.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={`relative transition-all duration-1000 delay-500 ${visibleSections.hero ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#BDFE4E]/10 border border-white/10">
                  <img
                    src="https://snow-armadillo-572246.hostingersite.com/wp-content/uploads/2025/08/510758989_122189082764050026_5143633155874674900_n.jpg"
                    alt="EVOxCharge Infrastructure"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#BDFE4E]/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="relative h-px bg-gradient-to-r from-transparent via-[#BDFE4E]/30 to-transparent">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#BDFE4E] rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#BDFE4E]/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#BDFE4E]/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        <div
          ref={aboutRef}
          data-section="about"
          className={`py-20 md:py-32 px-4 md:px-6 transition-all duration-1000 ${visibleSections.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#BDFE4E]/10 border border-white/10 group">
                  <img
                    src="https://snow-armadillo-572246.hostingersite.com/wp-content/uploads/2025/08/508557021_122189082710050026_7720974406097741256_n.jpg"
                    alt="About EVOxCharge"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#BDFE4E]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 bg-[#BDFE4E]/10 text-[#BDFE4E] px-4 py-2 rounded-full text-sm font-semibold border border-[#BDFE4E]/30 mb-6">
                  <TrendingUp size={16} />
                  ABOUT US
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  About <span className="text-[#BDFE4E]">EVOxCharge</span>
                </h2>

                <div className="space-y-4 text-gray-300 leading-relaxed text-justify">
                  <p>
                    EVOxCharge is a leading provider of EV charging solutions, offering end-to-end smart infrastructure and comprehensive services for residential, commercial, and government sectors.
                  </p>
                  <p>
                    Specializing in electric vehicle charging station installation and AC/DC fast chargers, our expertise includes electrical engineering, network management, and full project execution from site assessment to maintenance.
                  </p>
                  <p>
                    As a proud member of the Transnational Diversified Group (TDG), we leverage a strong foundation in logistics and technology to deliver sustainable transportation solutions and drive the future of clean mobility, establishing us as a trusted partner for reliable and high-performance EV charging infrastructure.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-[#BDFE4E]/10 px-4 py-2 rounded-full border border-[#BDFE4E]/20">
                    <div className="w-2 h-2 rounded-full bg-[#BDFE4E] animate-pulse"></div>
                    <span className="text-sm text-gray-300 font-medium">Smart Infrastructure</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#BDFE4E]/10 px-4 py-2 rounded-full border border-[#BDFE4E]/20">
                    <div className="w-2 h-2 rounded-full bg-[#BDFE4E] animate-pulse"></div>
                    <span className="text-sm text-gray-300 font-medium">End-to-End Solutions</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#BDFE4E]/10 px-4 py-2 rounded-full border border-[#BDFE4E]/20">
                    <div className="w-2 h-2 rounded-full bg-[#BDFE4E] animate-pulse"></div>
                    <span className="text-sm text-gray-300 font-medium">TDG Member</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="relative h-px bg-gradient-to-r from-transparent via-[#BDFE4E]/30 to-transparent">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#BDFE4E] rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#BDFE4E]/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#BDFE4E]/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        <div
          ref={sustainabilityRef}
          data-section="sustainability"
          className={`py-20 md:py-32 px-4 md:px-6 transition-all duration-1000 ${visibleSections.sustainability ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-3xl p-8 md:p-12 lg:p-16 border border-[#BDFE4E]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#BDFE4E]/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#BDFE4E]/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="max-w-4xl">
                  <div className="inline-flex items-center gap-2 bg-[#BDFE4E]/10 text-[#BDFE4E] px-4 py-2 rounded-full text-sm font-semibold border border-[#BDFE4E]/30 mb-6">
                    <Leaf size={16} />
                    SUSTAINABILITY
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    Committed to a <span className="text-[#BDFE4E]">Greener Future</span>
                  </h2>

                  <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta nec nibh a dictum. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In interdum ultricies lectus, a efficitur tortor venenatis quis.
                    </p>
                    <p>
                      Phasellus euismod aliquam lacus, quis congue sem rhoncus nec. Sed et eros sit amet tortor placerat volutpat at at ligula. Curabitur pretium pulvinar libero. Nunc mi ante, maximus a maximus sit amet, accumsan nec massa. Aliquam venenatis quam eu congue finibus.
                    </p>
                  </div>

                  <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="group bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-[#BDFE4E]/20 hover:border-[#BDFE4E]/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-12 h-12 rounded-xl bg-[#BDFE4E]/10 flex items-center justify-center mb-4 group-hover:bg-[#BDFE4E]/20 transition-colors">
                        <Leaf size={24} className="text-[#BDFE4E]" />
                      </div>
                      <h3 className="text-white font-bold text-xl mb-2">Clean Energy</h3>
                      <p className="text-gray-400 text-sm">Powering tomorrow with renewable energy solutions</p>
                    </div>

                    <div className="group bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-[#BDFE4E]/20 hover:border-[#BDFE4E]/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-12 h-12 rounded-xl bg-[#BDFE4E]/10 flex items-center justify-center mb-4 group-hover:bg-[#BDFE4E]/20 transition-colors">
                        <Globe size={24} className="text-[#BDFE4E]" />
                      </div>
                      <h3 className="text-white font-bold text-xl mb-2">Carbon Reduction</h3>
                      <p className="text-gray-400 text-sm">Reducing emissions one charge at a time</p>
                    </div>

                    <div className="group bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-[#BDFE4E]/20 hover:border-[#BDFE4E]/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-12 h-12 rounded-xl bg-[#BDFE4E]/10 flex items-center justify-center mb-4 group-hover:bg-[#BDFE4E]/20 transition-colors">
                        <TrendingUp size={24} className="text-[#BDFE4E]" />
                      </div>
                      <h3 className="text-white font-bold text-xl mb-2">Sustainable Growth</h3>
                      <p className="text-gray-400 text-sm">Building infrastructure for future generations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="relative h-px bg-gradient-to-r from-transparent via-[#BDFE4E]/30 to-transparent">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#BDFE4E] rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#BDFE4E]/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#BDFE4E]/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        <div
          ref={careersRef}
          data-section="careers"
          className={`py-20 md:py-32 px-4 md:px-6 transition-all duration-1000 ${visibleSections.careers ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#BDFE4E]/10 text-[#BDFE4E] px-4 py-2 rounded-full text-sm font-semibold border border-[#BDFE4E]/30 mb-6">
                  <Briefcase size={16} />
                  JOIN US
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Careers at <span className="text-[#BDFE4E]">EVOxCharge</span>
                </h2>

                <div className="space-y-4 text-gray-400 leading-relaxed text-lg mb-8">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta nec nibh a dictum. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                  </p>
                </div>

                <button className="group bg-[#BDFE4E] hover:bg-[#a8e03d] text-black font-bold px-8 py-4 rounded-full text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#BDFE4E]/30 cursor-pointer">
                  <span className="flex items-center gap-2">
                    Explore More
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-6 border border-[#BDFE4E]/20">
                    <div className="text-3xl font-bold text-[#BDFE4E] mb-2">100+</div>
                    <div className="text-sm text-gray-400">Team Members</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-6 border border-[#BDFE4E]/20">
                    <div className="text-3xl font-bold text-[#BDFE4E] mb-2">20+</div>
                    <div className="text-sm text-gray-400">Open Positions</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#BDFE4E]/10 border border-white/10 group">
                  <img
                    src="https://snow-armadillo-572246.hostingersite.com/wp-content/uploads/2025/08/475256776_122172019472050026_5058674563401454881_n.jpg"
                    alt="Careers at EVOxCharge"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-[#BDFE4E]/40">
                      <h3 className="text-white font-bold text-xl mb-2">Join Our Mission</h3>
                      <p className="text-gray-300 text-sm">Be part of the clean energy revolution</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#BDFE4E]/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="relative h-px bg-gradient-to-r from-transparent via-[#BDFE4E]/30 to-transparent">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#BDFE4E] rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#BDFE4E]/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#BDFE4E]/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        <div className="py-20 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNCREZFNEUiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to <span className="text-[#BDFE4E]">Power the Future</span> with Us?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already making the transition to sustainable energy
            </p>
            <button className="group bg-gradient-to-r from-[#BDFE4E] to-[#a8e03d] hover:from-[#a8e03d] hover:to-[#BDFE4E] text-black font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#BDFE4E]/40 cursor-pointer">
              <span className="flex items-center gap-3">
                <Zap size={24} />
                Get Started Today
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
