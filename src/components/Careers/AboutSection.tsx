const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#003366] mb-6"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Join the Aegis Team
          </h2>
          <p
            className="text-xl text-[#2ab5ac] font-semibold mb-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Are you passionate about making a difference?
          </p>
          <p
            className="text-lg text-gray-700 leading-relaxed"
            style={{ fontFamily: 'Cambria, serif' }}
          >
            Aegis Support is always looking for skilled, caring, and motivated individuals
            to join our growing team. We believe in empowering our staff to provide the
            highest quality support while growing professionally and personally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
