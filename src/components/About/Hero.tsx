const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">

      {/* ===== Background Image ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://cfyi.co.in/wp-content/uploads/2024/09/Ways-to-Know-When-Elders-in-Family-Need-Old-Age-Care-Support-1000x565.webp')`,
        }}
      ></div>

      {/* ===== Gradient Overlay ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/80 to-[#004080]/80"></div>

      {/* ===== CENTERED BOX ===== */}
      <div className="relative z-20 flex justify-center items-center w-full px-6">
        <div className="text-center bg-white/10 px-10 md:px-16 py-10 rounded-2xl border border-white/20 shadow-xl max-w-3xl animate-fadeIn">
          
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white"
            style={{
              fontFamily: "Georgia, serif",
              textShadow: "0 3px 12px rgba(0,0,0,0.45)",
            }}
          >
            About Us
          </h1>

          <p
            className="text-lg md:text-2xl text-gray-200 leading-relaxed"
            style={{ fontFamily: "Cambria, Georgia, serif" }}
          >
            Building a compassionate future for disability support services.
          </p>

        </div>
      </div>

      {/* ===== Animation ===== */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
