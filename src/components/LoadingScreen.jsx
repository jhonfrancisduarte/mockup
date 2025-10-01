import { useState, useEffect } from 'react';
import Xlogo from '../assets/xlogoo.png'

export default function LoadingScreen({ onLoadingComplete }) {
  const [phase, setPhase] = useState('text');

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setPhase('loading');
    }, 3000);

    const logoTimer = setTimeout(() => {
      setPhase('opening');
    }, 3800);

    const completeTimer = setTimeout(() => {
      onLoadingComplete();
    }, 5100);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(logoTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(189,254,78,0.08),transparent_60%)]"></div>
      </div>

{phase === 'text' && (
  <div className="absolute inset-0 flex items-center justify-center z-100">
    <div className="text-center">
      <h1 className="text-7xl font-bold tracking-wider text-white">
        <span className="inline-block animate-letter-fade" style={{ animationDelay: '0ms' }}>e</span>
        <span className="inline-block animate-letter-fade" style={{ animationDelay: '50ms' }}>v</span>
        <span className="inline-block animate-letter-fade" style={{ animationDelay: '100ms' }}>o</span>
        <span
          className="inline-block animate-letter-fade align-middle"
          style={{ animationDelay: '300ms' }}
        >
          <img
            src={Xlogo}
            className="inline-block h-[110px] w-auto align-middle"
            alt="logo"
          />
        </span>

        <span className="inline-block animate-letter-fade" style={{ animationDelay: '200ms' }}>c</span>
        <span className="inline-block animate-letter-fade" style={{ animationDelay: '300ms' }}>h</span>
        <span className="inline-block animate-letter-fade" style={{ animationDelay: '400ms' }}>a</span>
        <span className="inline-block animate-letter-fade" style={{ animationDelay: '500ms' }}>r</span>
        <span className="inline-block animate-letter-fade" style={{ animationDelay: '600ms' }}>g</span>
        <span className="inline-block animate-letter-fade" style={{ animationDelay: '700ms' }}>e</span>
        <h1>
        <span className="absolute mt-0 ml-5 text-sm inline-block animate-letter-fade" style={{ animationDelay: '700ms' }}>
            Powering the Future
          </span>
        </h1>

      </h1>

      <div className="h-1 bg-gradient-to-r from-transparent via-[#BDFE4E] to-transparent mt-6 animate-line-expand"></div>
    </div>
  </div>
)}


      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
        phase === 'loading' ? 'scale-100 opacity-100' : phase === 'opening' ? 'scale-125 opacity-0' : 'scale-90 opacity-0'
      }`}>
        <div className="relative" style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-48 h-48 bg-[#BDFE4E]/15 rounded-full blur-[80px] animate-pulse-slow"></div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center animate-ring-rotate">
              <div className="w-64 h-64 border-2 border-[#BDFE4E]/20 rounded-full"
                   style={{
                     transform: 'rotateX(70deg)',
                     boxShadow: '0 0 20px rgba(189,254,78,0.2)'
                   }}>
              </div>
            </div>

            <div className="relative z-10" style={{ transformStyle: 'preserve-3d' }}>
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                className="animate-float drop-shadow-[0_0_30px_rgba(189,254,78,0.5)]"
              >
                <defs>
                  <linearGradient id="xGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#BDFE4E', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#d4ff7a', stopOpacity: 1 }} />
                  </linearGradient>

                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                <g opacity="0.2" transform="translate(3, 5)">
                  <line x1="50" y1="50" x2="150" y2="150" stroke="#000000" strokeWidth="22" strokeLinecap="round"/>
                  <line x1="150" y1="50" x2="50" y2="150" stroke="#000000" strokeWidth="22" strokeLinecap="round"/>
                </g>

                <g filter="url(#glow)">
                  <line
                    x1="50" y1="50" x2="150" y2="150"
                    stroke="url(#xGrad)"
                    strokeWidth="18"
                    strokeLinecap="round"
                    className="animate-draw-line"
                  />
                  <line
                    x1="150" y1="50" x2="50" y2="150"
                    stroke="url(#xGrad)"
                    strokeWidth="18"
                    strokeLinecap="round"
                    className="animate-draw-line-delay"
                  />
                </g>

                <g opacity="0.8">
                  <line x1="50" y1="50" x2="85" y2="85" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
                  <line x1="150" y1="50" x2="115" y2="85" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
                </g>

                <circle cx="100" cy="100" r="8" fill="#BDFE4E" opacity="0.8">
                  <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex pointer-events-none">
        <div className={`absolute inset-y-0 left-0 w-1/2 bg-black transition-transform duration-[1200ms] ease-in-out z-50 ${
          phase === 'opening' ? '-translate-x-full' : 'translate-x-0'
        }`} style={{
          boxShadow: phase === 'opening' ? '10px 0 40px rgba(189,254,78,0.4)' : 'none',
          borderRight: phase === 'opening' ? '1px solid rgba(189,254,78,0.3)' : 'none'
        }}>
        </div>
        <div className={`absolute inset-y-0 right-0 w-1/2 bg-black transition-transform duration-[1200ms] ease-in-out z-50 ${
          phase === 'opening' ? 'translate-x-full' : 'translate-x-0'
        }`} style={{
          boxShadow: phase === 'opening' ? '-10px 0 40px rgba(189,254,78,0.4)' : 'none',
          borderLeft: phase === 'opening' ? '1px solid rgba(189,254,78,0.3)' : 'none'
        }}>
        </div>
      </div>

      <style>{`
        @keyframes letter-fade {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-letter-fade {
          animation: letter-fade 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes line-expand {
          0% {
            width: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: 100%;
            opacity: 1;
          }
        }

        .animate-line-expand {
          animation: line-expand 1s ease-out 1s forwards;
          width: 0;
        }

        @keyframes draw-line {
          from {
            stroke-dasharray: 141;
            stroke-dashoffset: 141;
          }
          to {
            stroke-dasharray: 141;
            stroke-dashoffset: 0;
          }
        }

        .animate-draw-line {
          animation: draw-line 1s ease-out forwards;
        }

        .animate-draw-line-delay {
          animation: draw-line 1s ease-out 0.3s forwards;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotateY(0deg);
          }
          50% {
            transform: translateY(-10px) rotateY(5deg);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        @keyframes ring-rotate {
          from {
            transform: rotateX(70deg) rotateZ(0deg);
          }
          to {
            transform: rotateX(70deg) rotateZ(360deg);
          }
        }

        .animate-ring-rotate {
          animation: ring-rotate 8s linear infinite;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.05);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
