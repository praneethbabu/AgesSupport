import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🚀 SEND DATA TO GOOGLE APPS SCRIPT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyP8MxfCvPQSoIW3Z-7YOIK7OvHOSvUvYsAc5x4VeIADBjh4VjNT764m9jJ65uuhLsR/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      alert("Message sent successfully! We will contact you shortly.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      {/* =============== INLINE CSS =============== */}
      <style>
        {`
          body { background: #f0f6ff; }

          .neu-card {
            background: #f5faff;
            border-radius: 20px;
            box-shadow: 7px 7px 20px rgba(0,0,0,0.12),
                        -7px -7px 20px rgba(255,255,255,0.9);
            transition: 0.2s ease;
          }

          .neu-input {
            background: #ffffff;
            border-radius: 14px;
            padding: 14px 16px;
            width: 100%;
            border: none;
            outline: none;
            font-size: 16px;
            box-shadow: inset 4px 4px 10px rgba(0,0,0,0.08),
                        inset -4px -4px 10px rgba(255,255,255,1);
          }

          .neu-input:focus {
            box-shadow: inset 3px 3px 8px rgba(10,116,218,0.3),
                        inset -3px -3px 8px rgba(255,255,255,1);
          }

          .neu-button {
            width: 100%;
            border: none;
            border-radius: 22px;
            padding: 14px 36px;
            font-weight: 600;
            color: white;
            cursor: pointer;
            background: linear-gradient(90deg, #0a74da, #1fae55);
            box-shadow: 7px 7px 18px rgba(0,0,0,0.2),
                        -7px -7px 18px rgba(255,255,255,0.8);
            transition: 0.2s ease;
          }

          .neu-button:hover {
            transform: translateY(-2px);
          }

          .icon-accent {
            background: linear-gradient(120deg, #0a74da, #1fae55);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>

      {/* =============== COMPONENT =============== */}
      <section className="py-16 bg-[#f0f6ff]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT – FORM */}
          <div className="p-8 rounded-2xl neu-card">
            <h2 className="text-3xl font-bold mb-3 icon-accent">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form and our friendly team will get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="neu-input"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="neu-input"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="neu-input"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="neu-input h-32 resize-none"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button className="neu-button flex items-center justify-center gap-2 py-3">
                Send Message
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

          {/* RIGHT – CONTACT INFO + MAP */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl neu-card">
              <h2 className="text-3xl font-bold mb-5 icon-accent">
                Contact Information
              </h2>

              <div className="flex items-center gap-3 mb-4">
                <Phone className="icon-accent" />
                <a
                  href="tel:+61435767872"
                  className="font-semibold text-lg"
                >
                  +61 435 767 872
                </a>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <Mail className="icon-accent" />
                <a
                  href="mailto:aegis.spt@gmail.com"
                  className="font-semibold text-lg"
                >
                  aegis.spt@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="icon-accent" />
                <span className="font-semibold text-lg">
                  Rockhampton, QLD 4700, Australia
                </span>
              </div>
            </div>

            {/* MAP – ROCKHAMPTON */}
            <div className="rounded-2xl overflow-hidden neu-card p-2">
              <iframe
                width="100%"
                height="260"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                src="https://www.google.com/maps?q=Rockhampton+QLD+4700&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
