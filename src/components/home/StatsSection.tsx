import { Users, Heart, Clock, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Participants Supported' },
    { icon: Heart, value: '98%', label: 'Satisfaction Rate' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
    { icon: Award, value: '100%', label: 'NDIS Compliant' }
  ];

  return (
    <section className="stats-section">
      <div className="stats-overlay"></div>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <stat.icon className="stat-icon" />
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
