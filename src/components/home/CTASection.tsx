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

  // 🚀 UPDATED — SEND DATA TO GOOGLE APPS SCRIPT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
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

      // Clear form fields
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
      {/* =============== INLINE CSS FOR BLUE + GREEN NEUMORPHIC STYLE =============== */}
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
            transition: box-shadow 0.2s ease;
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
            box-shadow: 12px 12px 24px rgba(0,0,0,0.25),
                        -12px -12px 24px rgba(255,255,255,1);
          }

          .icon-accent {
            background: linear-gradient(120deg, #0a74da, #1fae55);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>

      {/* =============== COMPONENT START =============== */}
      <section className="py-16 bg-[#f0f6ff]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT – FORM */}
          <div className="p-8 rounded-2xl neu-card">
            <h2 className="text-3xl font-bold mb-3 icon-accent">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form and our team will get back to you shortly.
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
              <h2 className="text-3xl font-bold mb-5 icon-accent">Contact Information</h2>

              <div className="flex items-center gap-3 mb-4">
                <Phone className="icon-accent" />
                <span className="font-semibold text-lg">04 3576 7872</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <Mail className="icon-accent" />
                <span className="font-semibold text-lg">aegis.spt@gmail.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="icon-accent" />
                <span className="font-semibold text-lg">
          Unit 4, 16 Kerr Street, Park Avenue, QLD 4701
                </span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden neu-card p-2">
              <iframe
                width="100%"
                height="260"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d460.25810204033445!2d150.5203370413668!3d-23.35249421656884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bc300e45b864539%3A0x582d7bca778e3678!2s16%20Kerr%20St%2C%20Park%20Avenue%20QLD%204701%2C%20Australia!5e1!3m2!1sen!2sin!4v1765541911944!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
