import React from "react";

const SupportLayoutTest = () => {
  const steps = [1, 2, 3, 4, 5];

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20 space-y-8">
      <section className="bg-red-500/30 border border-red-700 h-[300px] flex items-center justify-center">
        <h1 className="text-white text-2xl font-bold">------------ Hero </h1>
      </section>
{/* How to charge */}

      <section className="bg-yellow-500/30 border border-yellow-700 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-white text-3xl font-bold mb-12">
            How to <span className="text-green-400">Charge</span>
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-10">
            {steps.map((num) => (
              <div key={num} className="flex flex-col items-center space-y-4">

                <div className="relative">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gray-500/50 border-4 border-gray-400 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{num}</span>
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-lg shadow-lg">
                    {num}
                  </div>
                </div>
                <h3 className="text-white font-semibold">Step {num}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* FAQS */}
      <section className="bg-blue-500/30 border border-blue-700 h-[400px] flex items-center justify-center">
        <h2 className="text-white text-2xl font-bold">FAQ</h2>
      </section>

      <section className="bg-gray-500/30 border border-gray-700 h-[300px] flex items-center justify-center">
        <h2 className="text-white text-2xl font-bold">Future</h2>
      </section>
    </div>
  );
};

export default SupportLayoutTest;
