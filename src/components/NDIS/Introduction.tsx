const Introduction = () => {
  return (
    <section className="py-20 bg-[#F8FCFF] relative overflow-hidden">
      
      {/* Soft background accent blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#2AB9B0]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -right-20 w-72 h-72 bg-[#0A74DA]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#003366] relative inline-block"
            style={{ fontFamily: "Georgia, serif" }}
          >
            What is the NDIS?
            {/* Gradient underline */}
            <span className="block w-24 h-1 mx-auto mt-3 rounded bg-gradient-to-r from-[#0A74DA] to-[#1FAE55]"></span>
          </h2>
        </div>

        {/* CONTENT CARD */}
        <div className="max-w-4xl mx-auto animate-fadeInUp">
          <div
            className="p-10 md:p-12 rounded-3xl shadow-xl bg-white 
                       border border-[#2AB9B0]/20 relative overflow-hidden"
          >
            {/* Subtle decorative corner element */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#E8F6F5] to-transparent rounded-bl-full opacity-40"></div>

            <p
              className="text-xl text-gray-700 leading-relaxed text-center"
              style={{ fontFamily: "Cambria, Georgia, serif" }}
            >
              The National Disability Insurance Scheme (NDIS) supports Australians 
              with permanent and significant disabilities by providing funding for essential 
              services and supports. It allows participants to live independently, build 
              capacity, achieve personal goals, and take part in everyday community life.
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
          animation: fadeInUp 0.9s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Introduction;
