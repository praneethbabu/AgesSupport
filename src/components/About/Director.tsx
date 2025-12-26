const Director = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#E8F6F5]">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center text-[#003366] mb-12"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Meet the Director
        </h2>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl
                        hover:shadow-2xl transition-all duration-300
                        hover:-translate-y-1 border border-[#2AB9B0]/10
                        animate-fadeInUp p-12">

          <h3
            className="text-3xl font-bold text-[#003366] mb-3 text-center"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Karthik Jella
          </h3>

          <p
            className="text-xl text-[#2AB9B0] font-semibold mb-6 text-center"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Founder & Managing Director
          </p>

          <p
            className="text-lg text-gray-700 leading-relaxed text-center"
            style={{ fontFamily: 'Cambria, Georgia, serif' }}
          >
            Karthik brings a strong commitment to participant care, staff training,
            and maintaining NDIS quality standards. Under his leadership, Aegis Support
            continues to uphold the highest levels of safety and service delivery,
            ensuring that every individual receives the support they need to thrive.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Director;
