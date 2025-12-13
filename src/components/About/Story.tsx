const Story = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center text-[#003366] mb-12"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Our Story
        </h2>

        <div className="max-w-4xl mx-auto space-y-6 animate-fadeInUp">
          <p
            className="text-lg text-gray-700 leading-relaxed text-center"
            style={{ fontFamily: 'Cambria, Georgia, serif' }}
          >
            Founded by Karthik Jella, Aegis Support Pty Ltd was created with the vision of delivering
            compassionate, high-quality disability support across Queensland.
          </p>
          <p
            className="text-lg text-gray-700 leading-relaxed text-center"
            style={{ fontFamily: 'Cambria, Georgia, serif' }}
          >
            We believe every person deserves the opportunity to live independently and confidently
            within their community.
          </p>
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

export default Story;
