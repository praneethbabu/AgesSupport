import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  onBookConsultation: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onBookConsultation }) => {
  const backgroundImages = [
    "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/6647034/pexels-photo-6647034.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1920",
  ];

  return (
    <section className="hero-section">
      <div className="hero-background">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="hero-background-image"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">Empowering Lives. Supporting Independence.</h1>
        <p className="hero-subtitle">
          Registered NDIS Provider – Aegis Support Pty Ltd (ABN 80 691 758 479)
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary" onClick={onBookConsultation}>
            Book Consultation
            <ArrowRight className="btn-icon" />
          </button>

          <Link to="/our-services" className="btn btn-secondary">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
