const HowWeHelp = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#E8F6F5] overflow-hidden">
      
      <div className="container mx-auto px-6">

        {/* CENTER HEADING */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center text-[#003366] mb-16"
          style={{ fontFamily: "Georgia, serif" }}
        >
          How We Help
          <span className="block w-24 h-1 mx-auto mt-3 rounded bg-gradient-to-r from-[#0A74DA] to-[#1FAE55]"></span>
        </h2>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fadeInUp">

          {/* LEFT SIDE — IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://tobybarrontherapy.com/wp-content/uploads/2025/07/Women-Holding-Each-Other-Hands-for-Comfort-and-Sympathy.jpg"
              alt="How We Help"
              className="rounded-2xl shadow-xl w-full max-w-md object-cover"
            />
          </div>

          {/* RIGHT SIDE — CONTENT */}
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-[#2AB9B0]/15 hover:shadow-2xl transition-all duration-300">
            <p
              className="text-xl text-gray-700 leading-relaxed"
              style={{ fontFamily: "Cambria, Georgia, serif" }}
            >
              Aegis Support Pty Ltd partners with participants, families, and coordinators
              to provide personalised NDIS services designed around your goals.
              We work with you to understand your needs, support your independence,
              and help you build a meaningful, connected, and fulfilling life.
            </p>
          </div>

        </div>
      </div>

      {/* Fade Animation */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.9s ease-out forwards;
        }
      `}</style>

    </section>
  );
};

export default HowWeHelp;
