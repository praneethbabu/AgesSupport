const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">

      {/* ===== Background Image ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.wrytin.com/images/wrytup/r/1024/happy-family-k41l7hic.jpeg')`,
        }}
      ></div>

      {/* ===== Gradient Overlay ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/85 to-[#004080]/85"></div>

      {/* ===== MAIN TEXT ===== */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fadeIn">
          <h1
            className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white"
            style={{
              fontFamily: "Georgia, serif",
              textShadow: "0 3px 18px rgba(0, 0, 0, 0.4)",
            }}
          >
            Our Services
          </h1>

          <p
            className="text-2xl text-gray-200"
            style={{ fontFamily: "Cambria, Georgia, serif" }}
          >
            Comprehensive NDIS Support Services
          </p>
        </div>
      </div>

      {/* ===== Animation ===== */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
