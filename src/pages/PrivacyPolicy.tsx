import Hero from "../components/PrivacyPolicy/Hero";
import IntroText from "../components/PrivacyPolicy/IntroText";
import Section from "../components/PrivacyPolicy/Section";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <IntroText />

          <div className="space-y-8">
            <Section title="Collection of Information">
              <p>
                We collect personal information that is necessary for us to
                provide our services and comply with NDIS requirements. This may
                include names, contact details, NDIS plan information, and
                health-related information relevant to support delivery.
              </p>
            </Section>

            <Section title="Use of Information">
              <p>
                Personal information is used solely for the purpose of providing
                disability support services, maintaining participant records,
                and ensuring compliance with NDIS regulations and quality
                standards.
              </p>
            </Section>

            <Section title="Storage and Security">
              <p>
                All personal information is stored securely in accordance with
                the Australian Privacy Principles. We implement appropriate
                technical and organisational measures to protect against
                unauthorised access, alteration, disclosure, or destruction of
                personal data.
              </p>
            </Section>

            <Section title="Disclosure">
              <p>
                Personal information will only be disclosed to third parties
                with consent, or as required by law. We may share information
                with relevant healthcare professionals or NDIS authorities when
                necessary for service delivery or compliance.
              </p>
            </Section>

            <Section title="Your Rights">
              <p>
                You have the right to access, correct, or update your personal
                information at any time. You may also request that we delete
                your personal information, subject to legal and NDIS
                requirements for record keeping.
              </p>
            </Section>

            <Section title="NDIS Code of Conduct">
              <p>
                As an NDIS service provider, Aegis Support Pty Ltd adheres
                strictly to the NDIS Code of Conduct, including respecting
                privacy, maintaining confidentiality, and acting with integrity
                in all participant interactions.
              </p>
            </Section>

            <Section title="Contact Us">
              <p>
                If you have any questions about our privacy practices or wish to
                access or update your personal information, please contact us
                using the details below:
              </p>

              <div className="bg-gray-100 rounded-lg p-6 mt-4 space-y-3">
                <p>
                  <strong className="text-[#003366]">Email:</strong>{" "}
                  <a
                    href="mailto:aegis.spt@gmail.com"
                    className="text-teal-600 hover:text-teal-700 font-semibold transition-colors"
                  >
                    aegis.spt@gmail.com
                  </a>
                </p>

                <p>
                  <strong className="text-[#003366]">Phone:</strong>{" "}
                  <a
                    href="tel:+61435767872"
                    className="text-teal-600 hover:text-teal-700 font-semibold transition-colors"
                  >
                    +61 435 767 872
                  </a>
                </p>

                <p>
                  <strong className="text-[#003366]">Address:</strong>{" "}
                  Rockhampton, QLD 4700, Australia
                </p>
              </div>
            </Section>

            <Section title="Updates to Privacy Policy" isLast>
              <p>
                This privacy policy may be updated from time to time. Any
                significant changes will be communicated appropriately. The
                last updated date is:{" "}
                {new Date().toLocaleDateString("en-AU", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                .
              </p>
            </Section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
