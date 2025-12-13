const HeroSection = () => {
  return (
    <section className="relative text-white py-20 md:py-32 overflow-hidden">

      {/* ===== Background Image ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/1947499362/photo/happy-group-of-business-people-discussing-strategy-during-team-meeting-at-the-office-desk.jpg?s=612x612&w=0&k=20&c=UXPrlQx09d8EP4_kTdAa-vC2LxD_ppY1tiG7eTPGVbE=')`,
        }}
      ></div>

      {/* ===== Overlay + Gradient ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/80 to-[#2ab5ac]/70"></div>

      {/* ===== TEXT CONTENT ===== */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Careers at Aegis Support
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-100 leading-relaxed"
            style={{ fontFamily: 'Cambria, serif' }}
          >
            Join our team and make a meaningful difference in people's lives every day
          </p>
        </div>
      </div>

      {/* Fade to white bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;
