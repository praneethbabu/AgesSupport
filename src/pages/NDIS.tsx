import Hero from '../components/NDIS/Hero';
import Introduction from '../components/NDIS/Introduction';
import HowWeHelp from '../components/NDIS/HowWeHelp';
import ParticipantGroups from '../components/NDIS/ParticipantGroups';
import AgeGroups from '../components/NDIS/AgeGroups';
import RightsSafety from '../components/NDIS/RightsSafety';

const NDIS = () => {
  return (
    <div className="w-full">
      <Hero />
      <Introduction />
      <HowWeHelp />
      <ParticipantGroups />
      <AgeGroups />
      <RightsSafety />
    </div>
  );
};

export default NDIS;
