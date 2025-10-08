import { useState, useEffect, useRef } from 'react';
import {Check, Zap, ArrowRight, Users, ClipboardCheck, Wrench, Headphones, MonitorSmartphone } from 'lucide-react';
import Commercial from "../assets/commercial.png"
import Sm from "../assets/SmCharge.png"
import Fleet from "../assets/fleet.png"
import Institution from "../assets/institution.png"
import { FaBuilding } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { FaParking } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import { BiSolidInstitution } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";
import { LuPhilippinePeso } from "react-icons/lu";
import { FaUserShield } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { BiAward } from "react-icons/bi";
import { GiFocusedLightning } from "react-icons/gi";


const useCases = [
  {
    title: 'Commercial Real Estate',
    icon: FaBuilding,
    image: Commercial,
    description: 'Transform your properties into EV-ready destinations',
    size: 'large',
    row: 0
  },
  {
    title: 'Workplaces',
    icon: MdOutlineWork,
    image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Attract top talent with workplace charging benefits',
    size: 'medium',
    row: 0
  },
  {
    title: 'Retail and Malls',
    icon: FaBagShopping,
    image: Sm,
    description: 'Keep customers longer while they charge and shop',
    size: 'medium',
    row: 1
  },
  {
    title: 'Commercial Parking',
    icon: FaParking,
    image: 'https://images.pexels.com/photos/753876/pexels-photo-753876.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Monetize parking spaces with EV charging',
    size: 'small',
    row: 1
  },
  {
    title: 'Fuel Retailers',
    icon: BsFillFuelPumpFill,
    image: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Future-proof your business with EV charging',
    size: 'small',
    row: 1
  },
  {
    title: 'Hospitality',
    icon: FaHotel,
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Enhance guest experience with convenient charging',
    size: 'small',
    row: 2
  },
  {
    title: 'Fleets and Logistics',
    icon: FaTruck,
    image: Fleet,
    description: 'Optimize fleet operations with dedicated charging',
    size: 'medium',
    row: 2
  },
  {
    title: 'Institutions',
    icon: BiSolidInstitution,
    image: Institution,
    description: 'Support sustainability goals with EV infrastructure',
    size: 'large',
    row: 3
  }
];

const hostingSiteFeatures = [
  'Public or Semi-Public Access',
  'Parking Slot Allocation',
  'High Visibility & High Traffic',
  'Sufficient Power Supply'
];

const ownershipBenefits = [
  {
    icon: FaUserShield,
    title: 'Full Ownership & Control',
    description: 'Complete control over pricing, operations, and branding'
  },
  {
    icon: LuPhilippinePeso,
    title: 'Revenue Generation',
    description: 'Direct revenue from charging services and increased foot traffic'
  },
  {
    icon: SlGraph,
    title: 'Asset Value',
    description: 'Increase property value with sustainable infrastructure'
  },
  {
    icon: BiAward,
    title: 'Brand Enhancement',
    description: 'Demonstrate commitment to sustainability and innovation'
  }
];

const packageInclusions = [
  'Charger hardware/equipment (AC/DC)',
  'Professional site inspection and installation',
  'Software platform access',
  'Operation and maintenance',
  'Custom branding and setup available'
];

const partnerSteps = [
  {
    title: 'Consultation',
    description: 'We discuss your specific needs, site requirements, and develop a customized charging solution tailored to your business goals.',
    icon: Users
  },
  {
    title: 'Site Inspection',
    description: 'Our technical team conducts a comprehensive assessment of your location, including power infrastructure and optimal placement.',
    icon: ClipboardCheck
  },
  {
    title: 'Installation and Deployment',
    description: 'Professional installation with minimal disruption to your operations. We handle all technical aspects and ensure quality setup.',
    icon: Wrench
  },
  {
    title: 'Maintenance and Support',
    description: '24/7 technical support and regular maintenance to ensure optimal performance and maximum uptime for your charging stations.',
    icon: Headphones
  },
  {
    title: 'EVOx Platform Management',
    description: 'Access our comprehensive management platform with real-time monitoring, analytics, and complete control over your charging infrastructure.',
    icon: MonitorSmartphone
  }
];

export default function BusinessSolution() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredPartner, setHoveredPartner] = useState(null);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    useCases: false,
    hosting: false,
    ownership: false,
    partner: false
  });
  const [visibleCardRows, setVisibleCardRows] = useState(new Set());

  const heroRef = useRef(null);
  const useCasesRef = useRef(null);
  const hostingRef = useRef(null);
  const ownershipRef = useRef(null);
  const partnerRef = useRef(null);
  const cardRefs = useRef([]);

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
      { ref: useCasesRef, name: 'useCases' },
      { ref: hostingRef, name: 'hosting' },
      { ref: ownershipRef, name: 'ownership' },
      { ref: partnerRef, name: 'partner' }
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

  useEffect(() => {
    const cardObserverOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const rowIndex = parseInt(entry.target.dataset.row);
          setVisibleCardRows(prev => new Set([...prev, rowIndex]));
        }
      });
    }, cardObserverOptions);

    cardRefs.current.forEach(ref => {
      if (ref) {
        cardObserver.observe(ref);
      }
    });

    return () => {
      cardRefs.current.forEach(ref => {
        if (ref) {
          cardObserver.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#BDFE4E]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-[#BDFE4E]/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-[#BDFE4E]/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 px-4 md:px-6">
        <div
          ref={heroRef}
          data-section="hero"
          className="min-h-screen flex items-center justify-center relative"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(189,254,78,0.1),transparent_60%)]"></div>

            <div className="absolute top-0 left-[15%] w-1 h-screen">
              <div className="absolute w-3 h-48 bg-gradient-to-b from-transparent via-[#BDFE4E] to-transparent opacity-70 shadow-[0_0_15px_rgba(189,254,78,0.8)] animate-[electric-flow_2.5s_ease-in_infinite]"></div>
            </div>
            <div className="absolute top-0 left-[35%] w-1 h-screen">
              <div className="absolute w-2.5 h-40 bg-gradient-to-b from-transparent via-[#BDFE4E] to-transparent opacity-60 shadow-[0_0_12px_rgba(189,254,78,0.7)] animate-[electric-flow_3s_ease-in_infinite_0.5s]"></div>
            </div>
            <div className="absolute top-0 left-[55%] w-1 h-screen">
              <div className="absolute w-3 h-56 bg-gradient-to-b from-transparent via-[#BDFE4E] to-transparent opacity-65 shadow-[0_0_18px_rgba(189,254,78,0.9)] animate-[electric-flow_2.8s_ease-in_infinite_1s]"></div>
            </div>
            <div className="absolute top-0 left-[75%] w-1 h-screen">
              <div className="absolute w-2 h-44 bg-gradient-to-b from-transparent via-[#BDFE4E] to-transparent opacity-55 shadow-[0_0_10px_rgba(189,254,78,0.6)] animate-[electric-flow_3.2s_ease-in_infinite_1.5s]"></div>
            </div>
            <div className="absolute top-0 right-[10%] w-1 h-screen">
              <div className="absolute w-2.5 h-52 bg-gradient-to-b from-transparent via-[#BDFE4E] to-transparent opacity-70 shadow-[0_0_14px_rgba(189,254,78,0.8)] animate-[electric-flow_2.6s_ease-in_infinite_2s]"></div>
            </div>

            <div className="absolute top-[20%] left-0 w-full h-1">
              <div className="absolute w-64 h-2 bg-gradient-to-r from-transparent via-[#BDFE4E] to-transparent opacity-60 shadow-[0_0_12px_rgba(189,254,78,0.8)] animate-[power-wave_3s_ease-in-out_infinite]"></div>
            </div>
            <div className="absolute top-[40%] left-0 w-full h-1">
              <div className="absolute w-56 h-1.5 bg-gradient-to-r from-transparent via-[#BDFE4E] to-transparent opacity-55 shadow-[0_0_10px_rgba(189,254,78,0.7)] animate-[power-wave_3.5s_ease-in-out_infinite_0.8s]"></div>
            </div>
            <div className="absolute top-[60%] left-0 w-full h-1">
              <div className="absolute w-72 h-2 bg-gradient-to-r from-transparent via-[#BDFE4E] to-transparent opacity-65 shadow-[0_0_15px_rgba(189,254,78,0.9)] animate-[power-wave_3.2s_ease-in-out_infinite_1.5s]"></div>
            </div>
            <div className="absolute top-[80%] left-0 w-full h-1">
              <div className="absolute w-48 h-1.5 bg-gradient-to-r from-transparent via-[#BDFE4E] to-transparent opacity-50 shadow-[0_0_8px_rgba(189,254,78,0.6)] animate-[power-wave_3.8s_ease-in-out_infinite_2.2s]"></div>
            </div>

            <div className="absolute top-[15%] left-[20%] w-32 h-32 border border-[#BDFE4E]/40 rounded-full shadow-[0_0_20px_rgba(189,254,78,0.5)] animate-[pulse-ring_2s_ease-out_infinite]"></div>
            <div className="absolute top-[35%] right-[15%] w-40 h-40 border border-[#BDFE4E]/35 rounded-full shadow-[0_0_25px_rgba(189,254,78,0.4)] animate-[pulse-ring_2.5s_ease-out_infinite_0.5s]"></div>
            <div className="absolute bottom-[25%] left-[35%] w-36 h-36 border border-[#BDFE4E]/30 rounded-full shadow-[0_0_18px_rgba(189,254,78,0.3)] animate-[pulse-ring_2.2s_ease-out_infinite_1s]"></div>
            <div className="absolute top-[55%] left-[60%] w-28 h-28 border border-[#BDFE4E]/38 rounded-full shadow-[0_0_22px_rgba(189,254,78,0.45)] animate-[pulse-ring_2.8s_ease-out_infinite_1.5s]"></div>

            <div className="absolute top-[25%] left-[15%] w-4 h-4 bg-[#BDFE4E] rounded-full shadow-[0_0_20px_rgba(189,254,78,1)] animate-[energy-particle_4s_linear_infinite]"></div>
            <div className="absolute top-[45%] left-[25%] w-3 h-3 bg-[#BDFE4E] rounded-full shadow-[0_0_15px_rgba(189,254,78,0.9)] animate-[energy-particle_5s_linear_infinite_0.8s]"></div>
            <div className="absolute top-[65%] right-[30%] w-3.5 h-3.5 bg-[#BDFE4E] rounded-full shadow-[0_0_18px_rgba(189,254,78,1)] animate-[energy-particle_4.5s_linear_infinite_1.5s]"></div>
            <div className="absolute top-[35%] right-[20%] w-3 h-3 bg-[#BDFE4E] rounded-full shadow-[0_0_16px_rgba(189,254,78,0.95)] animate-[energy-particle_5.5s_linear_infinite_2.2s]"></div>
            <div className="absolute bottom-[30%] left-[45%] w-2.5 h-2.5 bg-[#BDFE4E] rounded-full shadow-[0_0_12px_rgba(189,254,78,0.85)] animate-[energy-particle_4.8s_linear_infinite_3s]"></div>
            <div className="absolute top-[50%] left-[70%] w-3 h-3 bg-[#BDFE4E] rounded-full shadow-[0_0_14px_rgba(189,254,78,0.9)] animate-[energy-particle_5.2s_linear_infinite_3.5s]"></div>

            <svg className="absolute inset-0 w-full h-full opacity-50" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#BDFE4E" stopOpacity="0" />
                  <stop offset="50%" stopColor="#BDFE4E" stopOpacity="1" />
                  <stop offset="100%" stopColor="#BDFE4E" stopOpacity="0" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <g filter="url(#glow)">
                <path
                  d="M 18% 15% L 22% 28% L 17% 28% L 23% 45% L 19% 45% L 26% 65%"
                  stroke="url(#lightning-gradient)"
                  strokeWidth="3"
                  fill="none"
                  className="animate-[lightning-flash_5s_ease-in-out_infinite]"
                />
                <path
                  d="M 78% 10% L 74% 23% L 79% 23% L 73% 40% L 77% 40% L 71% 58%"
                  stroke="url(#lightning-gradient)"
                  strokeWidth="3"
                  fill="none"
                  className="animate-[lightning-flash_5s_ease-in-out_infinite_1.5s]"
                />
                <path
                  d="M 52% 8% L 48% 22% L 53% 22% L 47% 38% L 51% 38% L 45% 55%"
                  stroke="url(#lightning-gradient)"
                  strokeWidth="2.5"
                  fill="none"
                  className="animate-[lightning-flash_5s_ease-in-out_infinite_3s]"
                />
              </g>
            </svg>

            <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#BDFE4E" stopOpacity="0" />
                  <stop offset="50%" stopColor="#BDFE4E" stopOpacity="1" />
                  <stop offset="100%" stopColor="#BDFE4E" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="10%" y1="30%" x2="90%" y2="30%" stroke="url(#circuit-gradient)" strokeWidth="1" strokeDasharray="1000" className="animate-[circuit-flow_4s_linear_infinite]" />
              <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="url(#circuit-gradient)" strokeWidth="1" strokeDasharray="1000" className="animate-[circuit-flow_4s_linear_infinite_1s]" />
              <line x1="10%" y1="70%" x2="90%" y2="70%" stroke="url(#circuit-gradient)" strokeWidth="1" strokeDasharray="1000" className="animate-[circuit-flow_4s_linear_infinite_2s]" />
            </svg>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#BDFE4E]/8 rounded-full blur-3xl animate-[power-pulse_3s_ease-in-out_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#BDFE4E]/10 rounded-full blur-2xl animate-[power-pulse_3s_ease-in-out_infinite_0.5s]"></div>
          </div>

          <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className={`inline-flex items-center gap-2 bg-[#314017] text-[#BDFE4E] px-20 py-5 text-sm font-medium border border-[#BDFE4E]/30 mb-6 transition-all duration-700 delay-200 ${visibleSections.hero ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
             {/*  <Zap size={16} className="animate-pulse" /> */}
              FOR BUSINESSES
            </div>

            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight px-4 transition-all duration-1000 delay-300 ${visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Power the EV Future <span className="text-[#BDFE4E]">with Us</span>
            </h1>

            <p className={`text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto px-4 transition-all duration-1000 delay-500 ${visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Future-proof your business by attracting new customers and building brand loyalty
            </p>

            <button className={`group bg-[#BDFE4E] hover:bg-[#a8e03d] text-black font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-700 delay-700 transform hover:scale-105 hover:shadow-xl hover:shadow-[#BDFE4E]/30 cursor-pointer ${visibleSections.hero ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'}`}>
              <span className="flex items-center gap-2 text-sm md:text-base">
                Host a Site
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>

        <div className="py-20 md:py-32">
          <div
            ref={useCasesRef}
            data-section="useCases"
            className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${visibleSections.useCases ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 px-4">
              We tailor EV Charging for your <span className="text-[#BDFE4E]">specific use case</span>
            </h2>
            <div className="w-24 h-1 bg-[#BDFE4E] mx-auto rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto mb-20 md:mb-32 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              const isHovered = hoveredCard === index;
              const isRowVisible = visibleCardRows.has(useCase.row);

              let gridClass = '';
              if (useCase.size === 'large') {
                gridClass = 'md:col-span-2 md:row-span-2';
              } else if (useCase.size === 'medium') {
                gridClass = 'md:col-span-2 md:row-span-1';
              } else {
                gridClass = 'md:col-span-1 md:row-span-1';
              }

              return (
                <div
                  key={index}
                  ref={el => cardRefs.current[index] = el}
                  data-row={useCase.row}
                  className={`group relative ${gridClass} transition-all duration-1000 ease-out ${isRowVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`}
                  style={{ transitionDelay: `${(index % 4) * 150}ms` }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative h-full rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.02] shadow-2xl hover:shadow-[#BDFE4E]/30 border border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#BDFE4E]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20 z-10"></div>

                    <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-xl rounded-2xl p-3 border border-[#BDFE4E]/40 transform transition-all duration-500 group-hover:scale-110 group-hover:bg-[#BDFE4E]/20 group-hover:border-[#BDFE4E]">
                      <Icon size={24} className="text-[#BDFE4E]" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-all duration-500">
                      <div className={`mb-3 transform transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                        <div className="inline-block px-3 py-1 bg-[#BDFE4E]/20 backdrop-blur-sm rounded-full border border-[#BDFE4E]/40">
                          <span className="text-[#BDFE4E] text-xs font-semibold uppercase tracking-wider">Industry Solution</span>
                        </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#BDFE4E] transition-colors">
                        {useCase.title}
                      </h3>

                      <p className={`text-sm md:text-base text-gray-300 leading-relaxed transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'}`}>
                        {useCase.description}
                      </p>

                      <div className={`mt-4 flex items-center gap-2 text-[#BDFE4E] transition-all duration-500 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                        <span className="text-sm font-semibold">Explore solution</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#BDFE4E] via-[#a8e03d] to-[#BDFE4E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-30"></div>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
        </div>

        <div
          ref={hostingRef}
          data-section="hosting"
          className={`bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl md:rounded-3xl p-6 md:p-12 mb-20 md:mb-32 max-w-6xl mx-auto border border-[#BDFE4E]/20 relative overflow-hidden transition-all duration-1000 ${visibleSections.hosting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#BDFE4E]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#BDFE4E]/5 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                Bring EV Charging to <span className="text-[#BDFE4E]">your site</span>
              </h2>
              <p className="text-base md:text-xl text-gray-400">
                End-to-end solution at no cost and no maintenance expenses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
              {hostingSiteFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-black/30 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-[#BDFE4E]/20 hover:border-[#BDFE4E]/50 transition-all duration-300 hover:transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#BDFE4E]/20 flex items-center justify-center group-hover:bg-[#BDFE4E]/30 transition-colors">
                      <Check size={16} className="text-[#BDFE4E] md:w-[18px] md:h-[18px]" />
                    </div>
                    <p className="text-white font-medium leading-relaxed text-sm md:text-base">{feature}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="group bg-gradient-to-r from-[#BDFE4E] to-[#a8e03d] hover:from-[#a8e03d] hover:to-[#BDFE4E] text-black font-bold px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#BDFE4E]/30 cursor-pointer">
                <span className="flex items-center gap-2">
                  Find out if your site qualifies
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform md:w-5 md:h-5" />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          ref={ownershipRef}
          data-section="ownership"
          className={`max-w-7xl mx-auto mb-20 md:mb-32 transition-all duration-1000 ${visibleSections.ownership ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 px-4">
              Own your charging station, <span className="text-[#BDFE4E]">we'll handle the rest</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-4">
              Complete ownership solutions with comprehensive support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10 px-4">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-3xl p-8 md:p-10 border border-[#BDFE4E]/20 relative overflow-hidden group hover:border-[#BDFE4E]/40 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#BDFE4E]/5 rounded-full blur-3xl group-hover:bg-[#BDFE4E]/10 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-[#BDFE4E]/10 text-[#BDFE4E] px-4 py-2 rounded-full text-sm font-semibold border border-[#BDFE4E]/30 mb-6">
                    <GiFocusedLightning size={16} />
                    WHY OWN?
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Benefits of Ownership
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    Take full control of your charging infrastructure and maximize the value for your business
                  </p>
                </div>

                <div className="space-y-6">
                  {ownershipBenefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={index}
                        className="flex gap-4 group/item hover:translate-x-2 transition-transform duration-300"
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#BDFE4E]/10 flex items-center justify-center group-hover/item:bg-[#BDFE4E]/20 transition-colors border border-[#BDFE4E]/20">
                          <Icon size={24} className="text-[#BDFE4E]" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg mb-1">{benefit.title}</h4>
                          <p className="text-gray-400 text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-3xl p-8 md:p-10 border border-[#BDFE4E]/20 relative overflow-hidden group hover:border-[#BDFE4E]/40 transition-all duration-500">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#BDFE4E]/5 rounded-full blur-3xl group-hover:bg-[#BDFE4E]/10 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-[#BDFE4E]/10 text-[#BDFE4E] px-4 py-2 rounded-full text-sm font-semibold border border-[#BDFE4E]/30 mb-6">
                    <Check size={16} />
                    ALL-INCLUSIVE
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Package Inclusions
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mb-8">
                    Everything you need for a successful charging operation
                  </p>
                </div>

                <div className="space-y-4">
                  {packageInclusions.map((inclusion, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#BDFE4E]/20 flex items-center justify-center group-hover/item:bg-[#BDFE4E]/30 transition-colors mt-0.5">
                        <Check size={14} className="text-[#BDFE4E]" />
                      </div>
                      <p className="text-gray-300 font-medium text-sm md:text-base leading-relaxed">{inclusion}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-3 text-[#BDFE4E]">
                    <div className="w-10 h-10 rounded-full bg-[#BDFE4E]/10 flex items-center justify-center">
                      <GiFocusedLightning size={20} />
                    </div>
                    <p className="text-sm font-semibold">Custom solutions available for enterprise needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center px-4">
            <button className="group bg-[#BDFE4E] hover:bg-[#a8e03d] text-black font-bold px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#BDFE4E]/40 cursor-pointer">
              <span className="flex items-center gap-3">
                Start Your Ownership Journey
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </div>
        </div>

        <div
          ref={partnerRef}
          data-section="partner"
          className={`max-w-7xl mx-auto transition-all duration-1000 ${visibleSections.partner ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 px-4">
              How we work?
            </h2>
            <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Discover our design principles behind our service, how we work to enhance the user experience of your charging infrastructure.
            </p>
          </div>

          <div className="px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              {partnerSteps.slice(0, 2).map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={index}
                    className={`group relative transition-all duration-700 ${visibleSections.partner ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                    onMouseEnter={() => setHoveredPartner(index)}
                    onMouseLeave={() => setHoveredPartner(null)}
                  >
                    <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-6 md:p-8 border border-[#BDFE4E]/20 hover:border-[#BDFE4E]/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#BDFE4E]/20 relative overflow-hidden h-full flex flex-col">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#BDFE4E]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                        <Icon size={100} className="text-[#BDFE4E]" />
                      </div>

                      <div className="relative z-10 flex gap-6 items-start">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#BDFE4E]/30 to-[#BDFE4E]/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-[#BDFE4E]/30">
                            <Icon size={32} className="text-[#BDFE4E] md:w-10 md:h-10" />
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#BDFE4E] transition-colors">
                            {step.title}
                          </h3>

                          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                            {step.description}
                          </p>

                          <div className="mt-4 flex items-center gap-2 text-[#BDFE4E] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <span className="text-sm font-semibold">Learn more</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#BDFE4E] via-[#a8e03d] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {partnerSteps.slice(2).map((step, index) => {
                const Icon = step.icon;
                const actualIndex = index + 2;

                return (
                  <div
                    key={actualIndex}
                    className={`group relative transition-all duration-700 ${visibleSections.partner ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${actualIndex * 150}ms` }}
                    onMouseEnter={() => setHoveredPartner(actualIndex)}
                    onMouseLeave={() => setHoveredPartner(null)}
                  >
                    <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-6 md:p-8 border border-[#BDFE4E]/20 hover:border-[#BDFE4E]/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#BDFE4E]/20 relative overflow-hidden h-full flex flex-col">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#BDFE4E]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                        <Icon size={80} className="text-[#BDFE4E]" />
                      </div>

                      <div className="relative z-10 flex-1 flex flex-col">
                        <div className="mb-4 md:mb-6">
                          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#BDFE4E]/30 to-[#BDFE4E]/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-[#BDFE4E]/30">
                            <Icon size={28} className="text-[#BDFE4E] md:w-8 md:h-8" />
                          </div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-[#BDFE4E] transition-colors">
                          {step.title}
                        </h3>

                        <p className="text-sm md:text-base text-gray-400 leading-relaxed flex-1">
                          {step.description}
                        </p>

                        <div className="mt-4 md:mt-6 flex items-center gap-2 text-[#BDFE4E] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <span className="text-sm font-semibold">Learn more</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#BDFE4E] via-[#a8e03d] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#BDFE4E]/5 rounded-full blur-2xl group-hover:bg-[#BDFE4E]/10 transition-all duration-500"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-12 md:mt-16 mb-20">
            <button className="group bg-gradient-to-r from-[#BDFE4E] to-[#a8e03d] hover:from-[#a8e03d] hover:to-[#BDFE4E] text-black font-bold px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#BDFE4E]/40 cursor-pointer">
              <span className="flex items-center gap-2 md:gap-3">
                <GiFocusedLightning size={20} className="md:w-6 md:h-6" />
                Get Started Today
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform md:w-6 md:h-6" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
