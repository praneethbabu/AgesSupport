const HeroSection = () => {
  return (
    <section className="relative text-white py-20 md:py-32 overflow-hidden">

      {/* ===== Background Image ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/contact_us_2.jpg')",
        }}
      />

      {/* ===== Gradient Overlay ===== */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#003366]/80 to-[#2ab5ac]/70"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Contact Us
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-100 leading-relaxed"
            style={{ fontFamily: 'Cambria, serif' }}
          >
            Get in touch with Aegis Support and let us help you on your NDIS journey.
          </p>
        </div>
      </div>

      {/* ===== Bottom Fade Transition ===== */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;
