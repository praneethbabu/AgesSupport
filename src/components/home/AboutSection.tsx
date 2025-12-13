import { MapPin, CheckCircle, Users } from 'lucide-react';

const AboutSection = () => {
  const facts = [
    {
      icon: MapPin,
      title: 'Based in Park Avenue, QLD',
      description: 'Proudly serving the Queensland community'
    },
    {
      icon: CheckCircle,
      title: 'Fully Certified NDIS Provider',
      description: 'Compliant with all NDIS standards'
    },
    {
      icon: Users,
      title: 'Supporting All Age Groups',
      description: 'Tailored care for everyone'
    }
  ];

  return (
    <section className="about-section">
      <div className="container">
        <h2 className="section-title">Who We Are</h2>
        <p className="intro-text">
          Aegis Support Pty Ltd is a Queensland-based NDIS provider committed to
          improving lives through compassionate, person-centered care. We believe
          in empowering individuals to achieve their goals and live independently.
        </p>

        <div className="facts-grid">
          {facts.map((fact, index) => (
            <div key={index} className="fact-card">
              <div className="fact-icon-wrapper">
                <fact.icon className="fact-icon" />
              </div>
              <h3 className="fact-title">{fact.title}</h3>
              <p className="fact-description">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
