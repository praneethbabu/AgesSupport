const AgeGroups = () => {
  const ageRanges = [
    {
      label: "0–6 years",
      img: "https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "#FFB5C2",
    },
    {
      label: "7–16 years",
      img: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "#FFC480",
    },
    {
      label: "17–65 years",
      img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "#A8E6CF",
    },
    {
      label: "Over 65 years",
      img: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "#C5B3E6",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#E8F6F5] to-white relative">
      <div className="container mx-auto px-6">
        <h2
          className="text-5xl font-bold text-center text-[#003366] mb-24"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Age Groups Supported
        </h2>

        <div className="max-w-7xl mx-auto relative">
          <svg
            className="absolute -top-12 left-0 right-0 w-full"
            height="60"
            style={{ pointerEvents: "none" }}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="threadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#8B8680", stopOpacity: 0.6 }} />
                <stop offset="50%" style={{ stopColor: "#A69A94", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#8B8680", stopOpacity: 0.6 }} />
              </linearGradient>
            </defs>
            <path
              d="M 0 30 Q 25 15 50 25 T 100 25 T 150 25 T 200 25 T 250 25 T 300 25 T 350 25 T 400 25"
              stroke="url(#threadGradient)"
              strokeWidth="3"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {ageRanges.map((group, index) => (
              <div
                key={index}
                className="animate-fadeInUp flex justify-center"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative group w-full max-w-xs">
                  <div
                    className="bg-white rounded-lg shadow-2xl p-4 pb-16
                               hover:shadow-3xl cursor-pointer transition-all duration-500"
                    style={{
                      boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                      transform: `rotate(${-2 + index * 1.2}deg)`,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = `rotate(0deg) scale(1.05)`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = `rotate(${-2 + index * 1.2}deg)`;
                    }}
                  >
                    <div className="relative">
                      <div
                        className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10"
                        style={{
                          width: "24px",
                          height: "32px",
                        }}
                      >
                        <svg
                          viewBox="0 0 24 32"
                          className="w-full h-full"
                          style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }}
                        >
                          <defs>
                            <linearGradient id={`clipGradient${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" style={{ stopColor: group.color, stopOpacity: 1 }} />
                              <stop offset="100%" style={{ stopColor: group.color, stopOpacity: 0.8 }} />
                            </linearGradient>
                          </defs>
                          <path
                            d="M 12 0 L 6 8 Q 6 12 8 14 L 12 18 L 16 14 Q 18 12 18 8 Z"
                            fill={`url(#clipGradient${index})`}
                            stroke={group.color}
                            strokeWidth="1"
                          />
                          <circle cx="12" cy="10" r="2" fill="white" />
                        </svg>
                      </div>

                      <div className="absolute -top-4 left-1/4 w-1 h-8 opacity-60 pointer-events-none">
                        <div className="w-full h-full bg-gradient-to-b from-[#8B8680] to-transparent"></div>
                      </div>
                      <div className="absolute -top-4 right-1/4 w-1 h-8 opacity-60 pointer-events-none">
                        <div className="w-full h-full bg-gradient-to-b from-[#8B8680] to-transparent"></div>
                      </div>

                      <div
                        className="w-full h-64 rounded-md overflow-hidden"
                        style={{
                          border: `4px solid ${group.color}`,
                        }}
                      >
                        <img
                          src={group.img}
                          alt={group.label}
                          className="w-full h-full object-cover transform group-hover:scale-110
                                   transition-transform duration-500"
                        />
                      </div>
                    </div>

                    <div
                      className="mt-6 text-center"
                      style={{
                        backgroundColor: group.color,
                        marginLeft: "-1rem",
                        marginRight: "-1rem",
                        marginBottom: "-4rem",
                        padding: "1rem",
                        borderBottomLeftRadius: "0.5rem",
                        borderBottomRightRadius: "0.5rem",
                      }}
                    >
                      <p
                        className="text-2xl font-bold text-[#003366]"
                        style={{
                          fontFamily: "Georgia, serif",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {group.label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default AgeGroups;
