const ServicesList = () => {
  const services = [
    {
      code: "0107",
      title: "Assist Personal Activities",
      description:
        "Help with personal tasks such as showering, grooming, dressing, and eating.",
    },
    {
      code: "0108",
      title: "Assist Travel & Transport",
      description:
        "Safe, punctual travel to medical appointments, workplaces, and community activities.",
    },
    {
      code: "0120",
      title: "Household Tasks",
      description:
        "Cleaning, washing, meal preparation, and light home maintenance.",
    },
    {
      code: "0115",
      title: "Daily Tasks & Shared Living",
      description:
        "Assistance with shared or independent living environments.",
    },
    {
      code: "0117",
      title: "Development Life Skills",
      description:
        "Support for learning everyday life skills including budgeting, cooking, and communication.",
    },
    {
      code: "0106",
      title: "Assist Life Stage Transition",
      description:
        "Guidance and planning for life changes, such as employment, relocation, or new routines.",
    },
    {
      code: "0125 / 0136",
      title: "Community Participation",
      description:
        "Join social, recreational, and educational activities in your local community.",
    },
    {
      code: "0133",
      title: "Specialised Supported Employment",
      description:
        "Meaningful employment opportunities tailored for participants with disabilities.",
    },
    {
      code: "Module 2A",
      title: "Behaviour Support",
      description:
        "Development and implementation of behaviour support plans.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        {/* CENTERED TITLE */}
        <div className="flex justify-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#003366] relative text-center"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Core NDIS Supports
            <span className="absolute left-1/2 -bottom-3 w-24 h-1 bg-gradient-to-r from-[#0a74da] to-[#1fae55] -translate-x-1/2 rounded"></span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp
              border border-gray-200 hover:border-transparent hover:bg-gradient-to-r hover:from-[#e8f2ff] hover:to-[#e6fff4]"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Accent bar */}
              <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-[#0a74da] to-[#1fae55] rounded-r-xl"></div>

              <div className="pl-4">

                {/* TITLE + CODE */}
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3">
                  <h3
                    className="text-2xl font-bold text-[#003366]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {service.title}
                  </h3>

                  <span
                    className="text-[#1fae55] font-semibold text-lg whitespace-nowrap"
                    style={{ fontFamily: "Cambria, Georgia, serif" }}
                  >
                    ({service.code})
                  </span>
                </div>

                {/* DESCRIPTION */}
                <p
                  className="text-lg text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Cambria, Georgia, serif" }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fade-in animation */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ServicesList;
