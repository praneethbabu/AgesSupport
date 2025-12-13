const Mission = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#E8F6F5] to-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#2AB9B0]/10 animate-fadeInUp">
            <h2
              className="text-3xl font-bold text-[#2AB9B0] mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Mission
            </h2>
            <p
              className="text-lg text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Cambria, Georgia, serif' }}
            >
              To provide reliable and person-centred disability support that enhances independence,
              inclusion, and wellbeing.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#2AB9B0]/10 animate-fadeInUp">
            <h2
              className="text-3xl font-bold text-[#2AB9B0] mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Vision
            </h2>
            <p
              className="text-lg text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Cambria, Georgia, serif' }}
            >
              A world where individuals with disabilities live freely, confidently, and without barriers.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Mission;
