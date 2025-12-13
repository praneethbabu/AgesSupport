import Hero from '../components/About/Hero';
import Story from '../components/About/Story';
import Mission from '../components/About/Mission';
import Values from '../components/About/Values';
import Director from '../components/About/Director';

const About = () => {
  return (
    <div className="w-full">
      <Hero />
      <Story />
      <Mission />
      <Values />
      <Director />
    </div>
  );
};

export default About;
