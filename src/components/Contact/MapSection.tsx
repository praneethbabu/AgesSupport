import React from "react";

const MapSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#003366] text-center mb-12"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Find Us
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg mb-6">
            <iframe
              src="https://www.google.com/maps?q=16+Kerr+Street+Park+Avenue+QLD+4701&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aegis Support Location - Unit 4, 16 Kerr Street, Park Avenue, QLD 4701"
            ></iframe>
          </div>

          <p
            className="text-center text-gray-700"
            style={{ fontFamily: "Cambria, serif" }}
          >
            <span className="font-semibold text-[#003366]">Address:</span> Unit 4,
            16 Kerr Street, Park Avenue, QLD 4701
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
