const Ecosystem = () => {
  const features = [
    { id: 1, title: "XCharge+ Mobile App" },
    { id: 2, title: "XCharge+ Web Platform" },
    { id: 3, title: "EV Chargers" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20 space-y-8">
      {/* Hero */}
      <section className="container mx-auto px-4">
        <div className="bg-white/5 border border-[#BDFE4E] h-[260px] flex items-center justify-center rounded-lg">
          <h1 className="text-white text-2xl font-semibold">1 -----------</h1>
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
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center font-bold text-sm text-white">
                  {f.id}
                </div>
                <div>
                  <div className="h-4 w-40 bg-white/10 rounded-md"></div>
                  <div className="h-3 w-28 bg-white/6 rounded-md mt-2"></div>
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
            <div className="flex-1 h-28 bg-white/6 border border-gray-800 rounded-md flex items-center justify-center">
              Web Platform
            </div>
            <div className="flex-1 h-28 bg-white/6 border border-gray-800 rounded-md flex items-center justify-center">
         Installation & Support
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 text-white ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-40 bg-white/5 border border-gray-800 rounded-lg flex items-center justify-center">
            FAQ
          </div>
          <div className="h-40 bg-white/5 border border-gray-800 rounded-lg flex items-center justify-center">
            Roadmap
          </div>
          <div className="h-40 bg-white/5 border border-gray-800 rounded-lg flex items-center justify-center">
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
