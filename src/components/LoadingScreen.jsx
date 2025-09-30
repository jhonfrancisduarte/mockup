import { useState, useEffect } from 'react';

export default function LoadingScreen({ onLoadingComplete }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Complete loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 800);
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 transition-transform duration-700 ${!isLoading ? 'translate-y-full' : 'translate-y-0'}`}>
      {/* Left Curtain */}
      <div className={`absolute top-0 left-0 w-1/2 h-full bg-[#0a0a0a] transition-transform duration-700 ${!isLoading ? '-translate-x-full' : 'translate-x-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#BDFE4E]/5"></div>
      </div>

      {/* Right Curtain */}
      <div className={`absolute top-0 right-0 w-1/2 h-full bg-[#0a0a0a] transition-transform duration-700 ${!isLoading ? 'translate-x-full' : 'translate-x-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#BDFE4E]/5"></div>
      </div>

      {/* Center Content - Fixed positioning */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center justify-center">

          {/* 3D X Logo Container */}
          <div className={`relative mb-12 transition-all duration-700 ${isLoading ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-150 rotate-180'}`}>

            {/* Glowing background layers */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-48 h-48 bg-[#BDFE4E]/30 rounded-full blur-3xl animate-pulse"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 h-32 bg-[#BDFE4E]/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* 3D X Logo */}
            <svg
              width="160"
              height="160"
              viewBox="0 0 160 160"
              className="relative z-10"
              style={{ filter: 'drop-shadow(0 0 20px rgba(189, 254, 78, 0.5))' }}
            >
              <defs>
                {/* Gradient for 3D effect */}
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#BDFE4E', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#d4ff7a', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#BDFE4E', stopOpacity: 1 }} />
                </linearGradient>

                <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#BDFE4E', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#d4ff7a', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#BDFE4E', stopOpacity: 1 }} />
                </linearGradient>

                {/* Shadow filter */}
                <filter id="shadow">
                  <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#BDFE4E" floodOpacity="0.6"/>
                </filter>
              </defs>

              {/* Back layer (darker) */}
              <g opacity="0.3">
                <line x1="35" y1="35" x2="125" y2="125" stroke="#0a0a0a" strokeWidth="18" strokeLinecap="round"/>
                <line x1="125" y1="35" x2="35" y2="125" stroke="#0a0a0a" strokeWidth="18" strokeLinecap="round"/>
              </g>

              {/* Middle layer (shadow) */}
              <g opacity="0.5" transform="translate(2, 2)">
                <line x1="35" y1="35" x2="125" y2="125" stroke="#BDFE4E" strokeWidth="16" strokeLinecap="round" opacity="0.4"/>
                <line x1="125" y1="35" x2="35" y2="125" stroke="#BDFE4E" strokeWidth="16" strokeLinecap="round" opacity="0.4"/>
              </g>

              {/* Main X with gradient */}
              <g filter="url(#shadow)">
                <line
                  x1="35" y1="35" x2="125" y2="125"
                  stroke="url(#grad1)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  className="animate-draw-diagonal-1"
                />
                <line
                  x1="125" y1="35" x2="35" y2="125"
                  stroke="url(#grad2)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  className="animate-draw-diagonal-2"
                />
              </g>

              {/* Highlight layer */}
              <g opacity="0.8">
                <line x1="35" y1="35" x2="65" y2="65" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
                <line x1="125" y1="35" x2="95" y2="65" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
              </g>

              {/* Center glow point */}
              <circle cx="80" cy="80" r="8" fill="#BDFE4E" opacity="0.8">
                <animate attributeName="r" values="8;12;8" dur="1.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="80" cy="80" r="4" fill="#ffffff" opacity="1"/>
            </svg>

            {/* Rotating ring */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
              <div className="w-44 h-44 border-2 border-[#BDFE4E]/30 rounded-full"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-reverse">
              <div className="w-36 h-36 border-2 border-dashed border-[#BDFE4E]/20 rounded-full"></div>
            </div>
          </div>

          {/* Brand name - centered below X */}
          <div className={`text-center transition-all duration-500 ${isLoading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-3xl font-bold text-[#BDFE4E] tracking-wider mb-2" style={{ textShadow: '0 0 20px rgba(189, 254, 78, 0.5)' }}>
              XCharge+
            </h1>
            <p className="text-sm text-gray-400 tracking-widest">FIND THE NEAREST PLACE TO CHARGE YOUR EV!</p>
          </div>

          {/* Progress bar - centered below brand */}
          <div className={`mt-8 w-64 transition-all duration-500 ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#BDFE4E] to-[#d4ff7a] transition-all duration-300 ease-out"
                style={{ width: `${progress}%`, boxShadow: '0 0 10px rgba(189, 254, 78, 0.8)' }}
              ></div>
            </div>
            <div className="mt-2 text-center">
              <span className="text-xs text-[#BDFE4E] font-mono">{progress}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#BDFE4E] rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes draw-diagonal-1 {
          from {
            stroke-dasharray: 127;
            stroke-dashoffset: 127;
          }
          to {
            stroke-dasharray: 127;
            stroke-dashoffset: 0;
          }
        }
        @keyframes draw-diagonal-2 {
          from {
            stroke-dasharray: 127;
            stroke-dashoffset: 127;
          }
          to {
            stroke-dasharray: 127;
            stroke-dashoffset: 0;
          }
        }
        .animate-draw-diagonal-1 {
          animation: draw-diagonal-1 1s ease-out forwards;
        }
        .animate-draw-diagonal-2 {
          animation: draw-diagonal-2 1s ease-out 0.3s forwards;
        }
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
          }
        }
        .animate-float-particle {
          animation: float-particle 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
