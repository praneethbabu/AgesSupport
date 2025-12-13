import { Phone, ClipboardList, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const PathwaySection = () => {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Connect",
      description:
        "Reach out to our friendly team to discuss your needs and goals. We’ll answer all your questions and guide you through the process."
    },
    {
      icon: ClipboardList,
      number: "02",
      title: "Plan",
      description:
        "Together, we'll design a personalized support plan that aligns with your NDIS goals and lifestyle preferences."
    },
    {
      icon: Rocket,
      number: "03",
      title: "Start",
      description:
        "Begin your journey with confidence. We’ll support you every step of the way as you work towards independence."
    }
  ];

  return (
    <section className="pathway-section">
      <div className="pathway-container">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="pathway-title"
        >
          Your NDIS Journey With Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="pathway-subtitle"
        >
          Getting started is simple. Follow these steps to begin your path to independence.
        </motion.p>

        <div className="pathway-grid">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="pathway-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="pathway-number">{step.number}</div>

              <div className="pathway-icon-wrapper">
                <step.icon className="pathway-icon" size={40} />
              </div>

              <h3 className="pathway-step-title">{step.title}</h3>
              <p className="pathway-description">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ---------------- CSS INCLUDED IN SAME FILE ---------------- */}
      <style jsx>{`
        .pathway-section {
          padding: 110px 26px;
          background: #ffffff;                 /* ← White Background */
          color: #003366;                       /* Dark navy text for headings */
        }
        .pathway-container {
          max-width: 1200px;
          margin: auto;
          text-align: center;
        }
        .pathway-title {
          font-size: clamp(34px, 5vw, 52px);
          font-weight: 900;
          color: #003366;                      /* Heading color */
        }
        .pathway-subtitle {
          margin-top: 10px;
          font-size: 18px;
          opacity: 0.85;
          max-width: 700px;
          margin-inline: auto;
          color: #444;
        }
        .pathway-grid {
          margin-top: 70px;
          display: grid;
          gap: 36px;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }
        .pathway-card {
          background: #ffffff;
          color: #1a1a1a;
          border-radius: 18px;
          padding: 40px 26px;
          border-top: 6px solid #0ea89a;          /* Green top accent */
          box-shadow: 0 10px 25px rgba(0,0,0,0.10);
          transition: 0.35s ease;
        }
        .pathway-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 18px 40px rgba(0,0,0,0.18);
        }
        .pathway-number {
          width: 60px;
          height: 60px;
          background: #0057a8;                   /* Blue brand */
          border: 4px solid #11afa0;             /* Green border */
          border-radius: 50%;
          font-size: 24px;
          font-weight: 900;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          margin: 0 auto 18px;
        }
        .pathway-icon-wrapper {
          width: 70px;
          height: 70px;
          margin: auto;
          border-radius: 50%;
          background: #11afa0;                   /* Green icon background */
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .pathway-icon {
          color: #fff;
        }
        .pathway-step-title {
          font-size: 20px;
          font-weight: 800;
          color: #003366;
          margin-bottom: 10px;
        }
        .pathway-description {
          font-size: 15px;
          opacity: 0.80;
          line-height: 1.6;
          color: #333;
        }
        @media (max-width: 600px) {
          .pathway-card {
            padding: 28px 20px;
          }
          .pathway-number {
            width: 50px;
            height: 50px;
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default PathwaySection;
