import XchargeMobile from '../assets/splash.png'
import WebPlatform from '../assets/webPlatform.png'
import WebPlatform2 from '../assets/webPlatform2.png'
import WebPlatform3 from '../assets/webPlatform3.png'
import WebPlatform4 from '../assets/webPlatform4.png'
import Installation from '../assets/webPlatform.png'

const Ecosystem = () => {
  const features = [
    { id: 1, title: "XCharge+ Mobile App", image: XchargeMobile },
    { id: 2, title: "XCharge+ Web Platform",image: WebPlatform, WebPlatform2, WebPlatform3,WebPlatform4 },
    { id: 3, title: "EV Chargers" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20 space-y-10 mt-20">
      {/* Hero */}
    <section
        className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0A0A0A] py-20 h-full border-b border-gray-800 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#BDFE4E]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#BDFE4E]/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#BDFE4E]/5 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className='text-center mb-12 transition-all duration-1000'>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Start Charging with <span className="text-[#BDFE4E]">EVOxCharge</span> Today
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta nec nibh a dictum.
              Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae;
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-white text-3xl font-bold mb-6">Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.id}
              className="rounded-xl border border-[#BDFE4E] bg-white/3 p-6 flex flex-col gap-4"
            >
                <img src={f.image} className='object-obtain'></img>
              <div className="flex items-center gap-4">
                <div>
                </div>
              </div>

              <div className="flex-1 space-y-3 mt-2">
                <div className="h-12 bg-white/5 rounded-md border border-[#BDFE4E] flex items-center justify-center text-gray-400">
                  {f.title}
                </div>
                <div className="h-10 bg-white/4 rounded-md border border-gray-800 flex items-center justify-center text-gray-400">
                  info
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it connects */}
      <section className="container mx-auto px-4 text-white">
        <h3 className="text-white text-2xl font-semibold mb-6">dasdasdasdasd</h3>

        <div className="bg-white/4 border border-[#BDFE4E] rounded-lg p-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 h-28 bg-white/6 border border-[#BDFE4E] rounded-md flex items-center justify-center">
          Mobile Charger
            </div>
            <div className="flex-1 h-28 bg-white/6 border border-[#BDFE4E] rounded-md flex items-center justify-center">
              Web Platform
            </div>
            <div className="flex-1 h-28 bg-white/6 border border-[#BDFE4E] rounded-md flex items-center justify-center">
         Installation & Support
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 text-white mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-40 bg-white/5 border border-[#BDFE4E] rounded-lg flex items-center justify-center">
            FAQ
          </div>
          <div className="h-40 bg-white/5 border border-[#BDFE4E] rounded-lg flex items-center justify-center">
            Roadmap
          </div>
          <div className="h-40 bg-white/5 border border-[#BDFE4E] rounded-lg flex items-center justify-center">
            Contact / Partners
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4">

      </section>
    </div>
  );
};

export default Ecosystem;
