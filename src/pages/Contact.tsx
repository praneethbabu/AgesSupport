import HeroSection from '../components/Contact/HeroSection';
import InfoSection from '../components/Contact/InfoSection';
import ContactForm from '../components/Contact/ContactForm';
import MapSection from '../components/Contact/MapSection';

const Contact = () => {
  return (
    <div className="contact-page">
      <HeroSection />
      <InfoSection />
      <ContactForm />
      <MapSection />
    </div>
  );
};

export default Contact;
