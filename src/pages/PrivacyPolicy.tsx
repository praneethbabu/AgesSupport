import Hero from '../components/PrivacyPolicy/Hero';
import IntroText from '../components/PrivacyPolicy/IntroText';
import Section from '../components/PrivacyPolicy/Section';

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
                We collect personal information that is necessary for us to provide our services and comply with NDIS requirements. This may include names, contact details, NDIS plan information, and health-related information relevant to support delivery.
              </p>
            </Section>

            <Section title="Use of Information">
              <p>
                Personal information is used solely for the purpose of providing disability support services, maintaining participant records, and ensuring compliance with NDIS regulations and quality standards.
              </p>
            </Section>

            <Section title="Storage and Security">
              <p>
                All personal information is stored securely in accordance with Australian Privacy Principles. We implement appropriate technical and organizational measures to protect against unauthorized access, alteration, disclosure, or destruction of personal data.
              </p>
            </Section>

            <Section title="Disclosure">
              <p>
                Personal information will only be disclosed to third parties with consent, or as required by law. We may share information with relevant healthcare professionals or NDIS authorities when necessary for service delivery or compliance.
              </p>
            </Section>

            <Section title="Your Rights">
              <p>
                You have the right to access, correct, or update your personal information at any time. You may also request that we delete your personal information, subject to legal and NDIS requirements for record keeping.
              </p>
            </Section>

            <Section title="NDIS Code of Conduct">
              <p>
                As a registered NDIS provider, Aegis Support Pty Ltd adheres strictly to the NDIS Code of Conduct, which includes respecting privacy, maintaining confidentiality, and acting with integrity in all participant interactions.
              </p>
            </Section>

            <Section title="Contact Us">
              <p>
                If you have any questions about our privacy practices or wish to access or update your personal information, please contact us:
              </p>
              <div className="bg-gray-100 rounded-lg p-6 mt-4 space-y-3">
                <p>
                  <strong className="text-[#003366]">Email:</strong>{' '}
                  <a
                    href="mailto:aegis.spt@gmail.com"
                    className="text-teal-600 hover:text-teal-700 font-semibold transition-colors"
                  >
                    aegis.spt@gmail.com
                  </a>
                </p>
                <p>
                  <strong className="text-[#003366]">Phone:</strong>{' '}
                  <a
                    href="tel:0435767872"
                    className="text-teal-600 hover:text-teal-700 font-semibold transition-colors"
                  >
                    04 3576 7872
                  </a>
                </p>
                <p>
                  <strong className="text-[#003366]">Address:</strong>{' '}
                  Unit 4, 16 Kerr Street, Park Avenue, QLD 4701
                </p>
              </div>
            </Section>

            <Section title="Updates to Privacy Policy" isLast>
              <p>
                This privacy policy may be updated from time to time. We will notify participants of any significant changes. The last updated date is: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}.
              </p>
            </Section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
