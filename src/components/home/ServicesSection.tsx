const ServicesSection = () => {
  const services = [
    {
      image: 'https://rustingtonconvalescenthome.co.uk/wp-content/uploads/2024/01/The-importance-of-physical-activity-for-older-people.jpg',
      title: 'Assist Personal Activities',
      description: 'Professional support with daily routines and personal care needs'
    },
    {
      image: 'https://www.assistinghands-il-wi.com/wp-content/uploads/2021/11/Age-Appropriate-Chores-for-the-Elderly.jpg',
      title: 'Household Tasks',
      description: 'Comprehensive assistance with cleaning, cooking, and home upkeep'
    },
    {
      image: 'https://bonaventuresenior.com/wp-content/uploads/2024/07/A-Support-Network_-The-Importance-of-Community-for-Senior-Well-being-1024x679.jpg',
      title: 'Community Participation',
      description: 'Facilitating meaningful social interactions and community engagement'
    },
    {
      image: 'https://carehop.ca/wp-content/uploads/senior-artist-painting-on-canvas-at-home-studio-2022-09-27-22-53-05-utc.jpg',
      title: 'Development Life Skills',
      description: 'Building essential skills including communication and budgeting'
    },
    {
      image: 'https://media.istockphoto.com/id/466742793/photo/driver-helping-senior-couple-board-bus-via-wheelchair-ramp.jpg?s=612x612&w=0&k=20&c=xGCrnbvlwykvohf3vO9qFQYjl9p8jIfi3xpMQj4BdSA=',
      title: 'Transport Support',
      description: 'Safe and reliable transportation assistance to appointments and activities'
    },
    {
      image: 'https://yourownway.org.au/wp-content/uploads/restrictive-practices-your-own-way-15.webp',
      title: 'Behaviour Support',
      description: 'Positive behaviour guidance and skill development strategies'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0057A8] to-[#11AFA0]">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center text-white mb-16 drop-shadow-lg">
          Our Core Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-scale duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0057A8] mb-2">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-14">
          <a
            href="/our-services"
            className="px-10 py-4 font-bold bg-white text-[#0057A8] rounded-lg shadow-xl hover:scale-105 hover:text-[#0E9687] transition-all duration-300"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
