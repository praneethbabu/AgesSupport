import { CheckCircle, BookOpen, Pill, AlertCircle } from 'lucide-react';

const RightsSafety = () => {
  const safetyFeatures = [
    {
      icon: CheckCircle,
      title: 'Background Checked',
      description: 'All staff are background checked and vetted',
    },
    {
      icon: BookOpen,
      title: 'Participant Rights',
      description: 'Trained in participant rights and responsibilities',
    },
    {
      icon: Pill,
      title: 'Medication Certified',
      description: 'Medication management and administration certified',
    },
    {
      icon: AlertCircle,
      title: 'Emergency Trained',
      description: 'Emergency response and first aid trained',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center text-[#003366] mb-4"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Your Rights & Safety
        </h2>

        <p
          className="text-center text-lg text-[#2AB9B0] font-semibold mb-12 max-w-2xl mx-auto"
          style={{ fontFamily: 'Cambria, Georgia, serif' }}
        >
          We are fully compliant with the NDIS Quality and Safeguards Commission requirements.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {safetyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#2AB9B0]/10 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <Icon size={48} className="text-[#2AB9B0]" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-xl font-bold text-[#003366] mb-3 text-center"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-gray-700 text-center leading-relaxed"
                  style={{ fontFamily: 'Cambria, Georgia, serif' }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
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

export default RightsSafety;
