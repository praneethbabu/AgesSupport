import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import FeaturesSection from '../components/home/FeaturesSection';
import PathwaySection from '../components/home/PathwaySection';
import StatsSection from '../components/home/StatsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';
import '../styles/home.css';

type HomeProps = {
  onBookConsultation: () => void;
};

const Home = ({ onBookConsultation }: HomeProps): JSX.Element => {
  return (
    <>
      <HeroSection onBookConsultation={onBookConsultation} />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <StatsSection />
      <PathwaySection />
      <TestimonialsSection />
      <CTASection onBookConsultation={onBookConsultation} />
    </>
  );
};

export default Home;
