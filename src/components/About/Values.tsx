import { Shield, CheckCircle, Heart, Star } from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: Shield,
      title: 'Respect',
      description: 'Every participant deserves dignity and respect in all interactions.',
    },
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'Honesty and transparency guide everything we do.',
    },
    {
      icon: Heart,
      title: 'Empathy',
      description: 'We care from the heart and understand individual needs.',
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Striving for continuous improvement and compliance.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center text-[#003366] mb-12"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Our Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#2AB9B0] animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <Icon size={48} className="text-[#2AB9B0]" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-2xl font-bold text-[#003366] mb-4 text-center"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-gray-700 leading-relaxed text-center"
                  style={{ fontFamily: 'Cambria, Georgia, serif' }}
                >
                  {value.description}
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

export default Values;
