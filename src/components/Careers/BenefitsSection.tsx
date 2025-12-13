import { Users, BookOpen, Clock, TrendingUp } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Supportive Work Culture',
      description: 'Join a team that values collaboration, respect, and mutual support',
    },
    {
      icon: BookOpen,
      title: 'Ongoing Training',
      description: 'Access continuous professional development and learning opportunities',
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Work schedules designed to support work-life balance',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear pathways for advancement and professional development',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#003366] text-center mb-12"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Why Work With Us
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2ab5ac] rounded-full mb-4">
                  <Icon size={32} className="text-white" />
                </div>
                <h3
                  className="text-lg font-semibold text-[#003366] mb-2"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-gray-700 leading-relaxed"
                  style={{ fontFamily: 'Cambria, serif' }}
                >
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
