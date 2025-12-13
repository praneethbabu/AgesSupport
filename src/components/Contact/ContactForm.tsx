import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// ✅ Your working Google Apps Script URL
const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwdPVq1g8_1WFkshIGlgNYpb9LJ2JRTEqYxuTNyWG5zcOn3w9H4ccmIwmxXxZ4kruo7/exec";

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🚀 Submit to Google Sheets + Trigger Email
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors", // required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);

      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      // Hide success screen after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);

    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // ⭐ Success Screen View
  if (submitted) {
    return (
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center bg-white p-12 rounded-lg shadow-lg">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h2 className="text-3xl font-bold text-[#003366] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Thank You
            </h2>
            <p className="text-lg text-gray-700" style={{ fontFamily: 'Cambria, serif' }}>
              Your message has been sent successfully. We will get back to you shortly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#003366] text-center mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Send Us a Message
            </h2>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>

              {/* Name */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-[#003366] font-semibold mb-2">
                  Name *
                </label>
                <input 
                  type="text" id="name" name="name" value={formData.name} 
                  onChange={handleChange} required 
                  className="w-full px-4 py-3 border rounded-lg focus:border-[#2ab5ac]" 
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-[#003366] font-semibold mb-2">
                  Email *
                </label>
                <input 
                  type="email" id="email" name="email" value={formData.email}
                  onChange={handleChange} required 
                  className="w-full px-4 py-3 border rounded-lg focus:border-[#2ab5ac]" 
                />
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label htmlFor="phone" className="block text-[#003366] font-semibold mb-2">
                  Phone
                </label>
                <input 
                  type="tel" id="phone" name="phone" value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:border-[#2ab5ac]"
                />
              </div>

              {/* Message */}
              <div className="mb-8">
                <label htmlFor="message" className="block text-[#003366] font-semibold mb-2">
                  Message *
                </label>
                <textarea 
                  id="message" name="message" value={formData.message}
                  onChange={handleChange} required rows={6}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 border rounded-lg focus:border-[#2ab5ac] resize-y" 
                />
              </div>

              <button 
                type="submit" disabled={loading}
                className="w-full bg-[#2ab5ac] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#249c94] transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
