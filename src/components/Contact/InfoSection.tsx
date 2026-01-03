import { Mail, Phone, MapPin, Clock } from "lucide-react";

const InfoSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Rockhampton, QLD 4700\nAustralia",
      link: null,
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+61 435 767 872",
      link: "tel:+61435767872",
    },
    {
      icon: Mail,
      title: "Email",
      content: "aegis.spt@gmail.com",
      link: "mailto:aegis.spt@gmail.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday – Friday\n9:00 AM – 5:00 PM",
      link: null,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#003366] text-center mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Get In Touch
          </h2>
          <p
            className="text-lg text-gray-700 text-center mb-12 leading-relaxed"
            style={{ fontFamily: "Cambria, serif" }}
          >
            We're here to support you. Reach out to us through any of the options
            below, and our team will respond as soon as possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-[#2ab5ac] rounded-lg mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-[#003366] mb-3"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {item.title}
                  </h3>

                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-[#2ab5ac] hover:text-[#003366] transition-colors font-medium whitespace-pre-line"
                      style={{ fontFamily: "Cambria, serif" }}
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p
                      className="text-gray-700 whitespace-pre-line"
                      style={{ fontFamily: "Cambria, serif" }}
                    >
                      {item.content}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
