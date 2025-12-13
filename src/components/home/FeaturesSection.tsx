import { Heart, UserCheck, Zap, Shield, Award } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    { icon: Heart, title: 'Compassionate Staff', description: 'Dedicated professionals who genuinely care' },
    { icon: UserCheck, title: 'Participant-First Approach', description: 'Your goals drive our service delivery' },
    { icon: Zap, title: 'Flexible Delivery', description: 'Services adapted to your schedule and needs' },
    { icon: Shield, title: 'NDIS Compliant', description: 'Fully registered and quality assured' },
    { icon: Award, title: 'Reliable & Safe Care', description: 'Trusted support you can depend on' }
  ];

  return (
    <section className="features-section">
      <div className="features-image-wrapper">
        <img
          src="https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Professional care support"
          className="features-image"
        />
      </div>
      <div className="features-content">
        <div className="container">
          <h2 className="section-title">Why Choose Aegis Support</h2>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon-wrapper">
                  <feature.icon className="feature-icon" />
                </div>
                <div className="feature-text">
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
