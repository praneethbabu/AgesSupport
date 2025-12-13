import { Phone, Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#2AB9B0] to-[#00a89d] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Interested in Our Services?
        </h2>
        <p
          className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Cambria, Georgia, serif' }}
        >
          Contact us today to discuss how we can support you or your loved one on your NDIS journey.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:items-stretch max-w-2xl mx-auto">
          <a
            href="tel:0435767872"
            className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#2AB9B0] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{ fontFamily: 'Cambria, Georgia, serif' }}
          >
            <Phone size={24} />
            <span>04 3576 7872</span>
          </a>

          <a
            href="mailto:info@aegissupport.com.au"
            className="flex-1 flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#2AB9B0] transition-all duration-300"
            style={{ fontFamily: 'Cambria, Georgia, serif' }}
          >
            <Mail size={24} />
            <span>Email Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
