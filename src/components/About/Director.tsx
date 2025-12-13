import { User } from 'lucide-react';

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

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-[#2AB9B0]/10 animate-fadeInUp">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            <div className="md:col-span-2 bg-gradient-to-br from-[#003366] to-[#2AB9B0] p-12 flex items-center justify-center">
              <div className="w-48 h-64 bg-white/10 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center border-2 border-white/30">
                <User size={80} className="text-white mb-4" strokeWidth={1.5} />
                <p className="text-white/80 text-sm text-center px-4" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
                  Director Photo
                </p>
              </div>
            </div>

            <div className="md:col-span-3 p-12">
              <h3
                className="text-3xl font-bold text-[#003366] mb-3"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Karthik Jella
              </h3>
              <p
                className="text-xl text-[#2AB9B0] font-semibold mb-6"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Founder & Managing Director
              </p>
              <p
                className="text-lg text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Cambria, Georgia, serif' }}
              >
                Karthik brings a strong commitment to participant care, staff training, and maintaining
                NDIS quality standards. Under his leadership, Aegis Support continues to uphold the
                highest levels of safety and service delivery, ensuring that every individual receives
                the support they need to thrive.
              </p>
            </div>
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

export default Director;
