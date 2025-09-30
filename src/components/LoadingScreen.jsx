import { useState, useEffect } from 'react';

export default function LoadingScreen({ onLoadingComplete }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

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
    <div className={`fixed inset-0 z-50 transition-opacity duration-1000 ${!isLoading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Background with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(189,254,78,0.05),transparent_70%)]"></div>

        {/* Grid pattern for depth */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(189,254,78,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(189,254,78,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(500px) rotateX(60deg) scale(2)',
          transformOrigin: 'center center'
        }}></div>
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center perspective-1000">

          {/* 3D X Logo Container */}
          <div className={`relative mb-16 transition-all duration-1000 transform-gpu ${
            isLoading
              ? 'opacity-100 scale-100 translate-y-0 rotate-0'
              : 'opacity-0 scale-50 -translate-y-20 rotate-180'
          }`} style={{ transformStyle: 'preserve-3d' }}>

            {/* Multi-layer glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-64 h-64 bg-[#BDFE4E]/20 rounded-full blur-[100px] animate-pulse-slow"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-48 h-48 bg-[#BDFE4E]/30 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 h-32 bg-[#BDFE4E]/40 rounded-full blur-[40px] animate-pulse-fast" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* 3D Rotating rings - outer */}
            <div className="absolute inset-0 flex items-center justify-center animate-rotate-3d-slow">
              <div className="w-56 h-56 border-[3px] border-[#BDFE4E]/20 rounded-full"
                   style={{
                     transform: 'rotateX(75deg)',
                     boxShadow: '0 0 30px rgba(189,254,78,0.2), inset 0 0 30px rgba(189,254,78,0.1)'
                   }}>
              </div>
            </div>

            {/* 3D Rotating rings - middle */}
            <div className="absolute inset-0 flex items-center justify-center animate-rotate-3d-reverse">
              <div className="w-48 h-48 border-[2px] border-[#BDFE4E]/30 rounded-full"
                   style={{
                     transform: 'rotateY(75deg)',
                     boxShadow: '0 0 25px rgba(189,254,78,0.25)'
                   }}>
              </div>
            </div>

            {/* 3D Rotating rings - inner */}
            <div className="absolute inset-0 flex items-center justify-center animate-rotate-3d-alt">
              <div className="w-40 h-40 border-[2px] border-dashed border-[#BDFE4E]/25 rounded-full"
                   style={{
                     transform: 'rotate(45deg) rotateX(60deg)',
                     boxShadow: '0 0 20px rgba(189,254,78,0.3)'
                   }}>
              </div>
            </div>

            {/* Main 3D X Logo */}
            <div className="relative z-10 animate-float-3d" style={{ transformStyle: 'preserve-3d' }}>
              <svg
                width="180"
                height="180"
                viewBox="0 0 180 180"
                className="relative drop-shadow-[0_0_25px_rgba(189,254,78,0.6)]"
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#9dd64d', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#BDFE4E', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#d4ff7a', stopOpacity: 1 }} />
                  </linearGradient>

                  <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#d4ff7a', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#BDFE4E', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#9dd64d', stopOpacity: 1 }} />
                  </linearGradient>

                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>

                  <filter id="shadow3d">
                    <feDropShadow dx="0" dy="8" stdDeviation="4" floodColor="#BDFE4E" floodOpacity="0.4"/>
                    <feDropShadow dx="0" dy="4" stdDeviation="2" floodColor="#BDFE4E" floodOpacity="0.6"/>
                  </filter>
                </defs>

                {/* Deep shadow layers */}
                <g opacity="0.15" transform="translate(4, 8)">
                  <line x1="40" y1="40" x2="140" y2="140" stroke="#000000" strokeWidth="20" strokeLinecap="round"/>
                  <line x1="140" y1="40" x2="40" y2="140" stroke="#000000" strokeWidth="20" strokeLinecap="round"/>
                </g>

                <g opacity="0.25" transform="translate(2, 4)">
                  <line x1="40" y1="40" x2="140" y2="140" stroke="#BDFE4E" strokeWidth="18" strokeLinecap="round" opacity="0.3"/>
                  <line x1="140" y1="40" x2="40" y2="140" stroke="#BDFE4E" strokeWidth="18" strokeLinecap="round" opacity="0.3"/>
                </g>

                {/* Main X with gradient and filter */}
                <g filter="url(#shadow3d)">
                  <line
                    x1="40" y1="40" x2="140" y2="140"
                    stroke="url(#grad1)"
                    strokeWidth="16"
                    strokeLinecap="round"
                    className="animate-draw-diagonal-1"
                    filter="url(#glow)"
                  />
                  <line
                    x1="140" y1="40" x2="40" y2="140"
                    stroke="url(#grad2)"
                    strokeWidth="16"
                    strokeLinecap="round"
                    className="animate-draw-diagonal-2"
                    filter="url(#glow)"
                  />
                </g>

                {/* Highlight layer for 3D effect */}
                <g opacity="0.9">
                  <line x1="40" y1="40" x2="75" y2="75" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.8"/>
                  <line x1="140" y1="40" x2="105" y2="75" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.8"/>
                </g>

                {/* Center glow point with pulse */}
                <circle cx="90" cy="90" r="10" fill="#BDFE4E" opacity="0.6">
                  <animate attributeName="r" values="10;15;10" dur="1.5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="90" cy="90" r="6" fill="#ffffff" opacity="1">
                  <animate attributeName="opacity" values="1;0.7;1" dur="1.5s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>

            {/* Orbiting particles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1"
                style={{
                  animation: `orbit 3s linear infinite`,
                  animationDelay: `${i * 0.375}s`
                }}
              >
                <div className="w-2 h-2 bg-[#BDFE4E] rounded-full blur-sm shadow-[0_0_10px_rgba(189,254,78,0.8)]"></div>
              </div>
            ))}
          </div>

          {/* Brand name with 3D text effect */}
          <div className={`text-center transition-all duration-700 transform-gpu ${
            isLoading
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-10 scale-75'
          }`}>
            <h1 className="text-5xl font-bold text-[#BDFE4E] tracking-wider mb-3 relative"
                style={{
                  textShadow: `
                    0 0 10px rgba(189,254,78,0.5),
                    0 0 20px rgba(189,254,78,0.3),
                    0 0 30px rgba(189,254,78,0.2),
                    0 4px 8px rgba(0,0,0,0.5)
                  `
                }}>
              <span className="relative inline-block animate-text-glow">
                EVOxCharge
                <span className="absolute inset-0 blur-md opacity-50">EVOxCharge</span>
              </span>
            </h1>
            <p className="text-sm text-gray-400 tracking-[0.3em] uppercase font-light">Powering the Future</p>
          </div>

          {/* Premium progress bar */}
          <div className={`mt-12 w-80 transition-all duration-700 ${
            isLoading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {/* Progress bar container with 3D effect */}
            <div className="relative h-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-full overflow-hidden border border-gray-700/50 shadow-inner">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#BDFE4E]/10 to-transparent"></div>

              {/* Progress fill with metallic effect */}
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#9dd64d] via-[#BDFE4E] to-[#d4ff7a] transition-all duration-300 ease-out rounded-full"
                style={{
                  width: `${progress}%`,
                  boxShadow: `
                    0 0 15px rgba(189,254,78,0.8),
                    0 0 30px rgba(189,254,78,0.4),
                    inset 0 1px 0 rgba(255,255,255,0.4)
                  `
                }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
              </div>

              {/* Progress indicator dot */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#BDFE4E] rounded-full transition-all duration-300 ease-out"
                style={{
                  left: `${progress}%`,
                  transform: `translateX(-50%) translateY(-50%)`,
                  boxShadow: '0 0 15px rgba(189,254,78,0.9), 0 0 30px rgba(189,254,78,0.5)',
                  border: '2px solid rgba(255,255,255,0.5)'
                }}
              ></div>
            </div>

            {/* Animated car with progress percentage */}
            <div className="mt-4 relative h-16">
              {/* Road */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600 to-transparent animate-road-lines"></div>
              </div>

              {/* Animated electric car */}
              <div
                className="absolute bottom-2 transition-all duration-300 ease-out"
                style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
              >
                {/* Car body */}
                <svg width="80" height="40" viewBox="0 0 80 40" className="drop-shadow-[0_4px_8px_rgba(189,254,78,0.4)]">
                  <defs>
                    <linearGradient id="carGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#9dd64d', stopOpacity: 1 }} />
                      <stop offset="50%" style={{ stopColor: '#BDFE4E', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#d4ff7a', stopOpacity: 1 }} />
                    </linearGradient>
                    <filter id="carGlow">
                      <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Car shadow */}
                  <ellipse cx="40" cy="38" rx="30" ry="3" fill="#000000" opacity="0.3"/>

                  {/* Car body */}
                  <g filter="url(#carGlow)">
                    {/* Bottom body */}
                    <rect x="10" y="24" width="60" height="10" rx="2" fill="url(#carGrad)"/>

                    {/* Top body (cabin) */}
                    <path d="M 25 24 L 30 14 L 55 14 L 60 24 Z" fill="url(#carGrad)" opacity="0.9"/>

                    {/* Windows */}
                    <path d="M 32 16 L 35 22 L 48 22 L 52 16 Z" fill="#1a1a1a" opacity="0.6"/>

                    {/* Front detail */}
                    <rect x="66" y="26" width="4" height="6" rx="1" fill="#ffffff" opacity="0.9"/>

                    {/* Lightning bolt (electric symbol) */}
                    <path d="M 42 18 L 40 21 L 41.5 21 L 40 24 L 42 21 L 40.5 21 Z" fill="#BDFE4E" opacity="0.8"/>
                  </g>

                  {/* Wheels */}
                  <g>
                    <circle cx="22" cy="34" r="4" fill="#1a1a1a" stroke="#BDFE4E" strokeWidth="1">
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 22 34"
                        to="360 22 34"
                        dur="0.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle cx="22" cy="34" r="2" fill="#BDFE4E" opacity="0.6"/>

                    <circle cx="58" cy="34" r="4" fill="#1a1a1a" stroke="#BDFE4E" strokeWidth="1">
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 58 34"
                        to="360 58 34"
                        dur="0.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle cx="58" cy="34" r="2" fill="#BDFE4E" opacity="0.6"/>
                  </g>

                  {/* Speed lines */}
                  <g opacity="0.5" className="animate-speed-lines">
                    <line x1="5" y1="20" x2="0" y2="20" stroke="#BDFE4E" strokeWidth="1" strokeLinecap="round"/>
                    <line x1="8" y1="26" x2="2" y2="26" stroke="#BDFE4E" strokeWidth="1" strokeLinecap="round"/>
                    <line x1="6" y1="32" x2="0" y2="32" stroke="#BDFE4E" strokeWidth="1" strokeLinecap="round"/>
                  </g>
                </svg>

                {/* Progress percentage in speech bubble */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <div className="relative bg-[#BDFE4E] text-black px-3 py-1 rounded-lg font-mono font-bold text-sm shadow-lg">
                    {progress}%
                    {/* Speech bubble tail */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#BDFE4E] transform rotate-45"></div>
                  </div>
                </div>

                {/* Electric particles trailing behind */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 w-1 h-1 bg-[#BDFE4E] rounded-full animate-trail-particle"
                    style={{
                      left: `${-8 - i * 6}px`,
                      animationDelay: `${i * 0.15}s`
                    }}
                  ></div>
                ))}
              </div>

              {/* Finish line */}
              <div className="absolute bottom-0 right-0 flex flex-col items-center">
                <div className="w-1 h-8 bg-gradient-to-b from-transparent via-[#BDFE4E]/50 to-[#BDFE4E] rounded-full"></div>
                <div className="text-[#BDFE4E] text-xs mt-1 font-bold">🏁</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles with depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#BDFE4E] animate-float-particle-3d"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2,
              boxShadow: `0 0 ${5 + Math.random() * 10}px rgba(189,254,78,0.6)`
            }}
          ></div>
        ))}
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        @keyframes draw-diagonal-1 {
          from {
            stroke-dasharray: 141;
            stroke-dashoffset: 141;
          }
          to {
            stroke-dasharray: 141;
            stroke-dashoffset: 0;
          }
        }

        @keyframes draw-diagonal-2 {
          from {
            stroke-dasharray: 141;
            stroke-dashoffset: 141;
          }
          to {
            stroke-dasharray: 141;
            stroke-dashoffset: 0;
          }
        }

        .animate-draw-diagonal-1 {
          animation: draw-diagonal-1 1.2s ease-out forwards;
        }

        .animate-draw-diagonal-2 {
          animation: draw-diagonal-2 1.2s ease-out 0.4s forwards;
        }

        @keyframes rotate-3d-slow {
          from { transform: rotateX(75deg) rotateZ(0deg); }
          to { transform: rotateX(75deg) rotateZ(360deg); }
        }

        @keyframes rotate-3d-reverse {
          from { transform: rotateY(75deg) rotateZ(360deg); }
          to { transform: rotateY(75deg) rotateZ(0deg); }
        }

        @keyframes rotate-3d-alt {
          from { transform: rotate(45deg) rotateX(60deg) rotateZ(0deg); }
          to { transform: rotate(45deg) rotateX(60deg) rotateZ(360deg); }
        }

        .animate-rotate-3d-slow {
          animation: rotate-3d-slow 10s linear infinite;
        }

        .animate-rotate-3d-reverse {
          animation: rotate-3d-reverse 7s linear infinite;
        }

        .animate-rotate-3d-alt {
          animation: rotate-3d-alt 5s linear infinite;
        }

        @keyframes float-3d {
          0%, 100% {
            transform: translateY(0) rotateX(0deg) rotateY(0deg);
          }
          25% {
            transform: translateY(-8px) rotateX(5deg) rotateY(5deg);
          }
          50% {
            transform: translateY(0) rotateX(0deg) rotateY(10deg);
          }
          75% {
            transform: translateY(-8px) rotateX(-5deg) rotateY(5deg);
          }
        }

        .animate-float-3d {
          animation: float-3d 4s ease-in-out infinite;
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(90px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(90px) rotate(-360deg);
          }
        }

        @keyframes float-particle-3d {
          0% {
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translate(calc(var(--tw-translate-x, 0) + 50px), -150px) scale(0);
            opacity: 0;
          }
        }

        .animate-float-particle-3d {
          animation: float-particle-3d 6s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @keyframes pulse-fast {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.15); }
        }

        .animate-pulse-fast {
          animation: pulse-fast 1.5s ease-in-out infinite;
        }

        @keyframes text-glow {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.2);
          }
        }

        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }

        @keyframes shine {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(200%);
          }
        }

        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }

        @keyframes road-lines {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-road-lines {
          animation: road-lines 1s linear infinite;
        }

        @keyframes speed-lines {
          0% {
            opacity: 0.5;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-20px);
          }
        }

        .animate-speed-lines {
          animation: speed-lines 0.3s ease-out infinite;
        }

        @keyframes trail-particle {
          0%, 100% {
            opacity: 0;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 1;
            transform: translateY(-4px) scale(1.5);
          }
        }

        .animate-trail-particle {
          animation: trail-particle 0.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
