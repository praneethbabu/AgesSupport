import Hero from '../components/Services/Hero';
import ServicesList from '../components/Services/ServicesList';
import CTA from '../components/Services/CTA';

const Services = () => {
  return (
    <div className="w-full">
      <Hero />
      <ServicesList />
      <CTA />
    </div>
  );
};

export default Services;
