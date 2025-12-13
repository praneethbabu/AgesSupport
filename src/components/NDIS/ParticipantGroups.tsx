const ParticipantGroups = () => {
  const groups = [
    "Autism Spectrum Disorder (ASD)",
    "Intellectual and Physical Disabilities",
    "Acquired Brain Injury",
    "Dementia & Mental Health",
    "Spinal Injury and Ventilator Dependency",
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2
          className="text-4xl font-bold text-center text-[#003366] mb-12"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Participant Groups We Support
        </h2>

        {/* Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#E8F6F5] to-[#F0FBFA] p-8 rounded-xl 
                         border-l-4 border-[#2AB9B0] shadow-md hover:shadow-lg 
                         transition-all duration-300 hover:-translate-y-2 animate-fadeInUp flex items-center gap-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* BIG Gradient Number Before Text */}
              <span
                className="text-4xl font-bold"
                style={{
                  fontFamily: "Georgia, serif",
                  background: "linear-gradient(120deg, #0A74DA, #1FAE55)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {index + 1}
              </span>

              {/* Text */}
              <p
                className="text-lg text-[#003366] font-semibold"
                style={{ fontFamily: "Cambria, Georgia, serif" }}
              >
                {group}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp .8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ParticipantGroups;
