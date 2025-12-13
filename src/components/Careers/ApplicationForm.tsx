import { useState, FormEvent } from 'react';
import { Mail } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  resume: string;
  coverLetter: string;
}

const GOOGLE_SHEET_URL = "YOUR_GOOGLE_APPS_SCRIPT_DEPLOYMENT_URL"; 
// Example: "https://script.google.com/macros/s/AKfycbx.../exec"

const ApplicationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    resume: '',
    coverLetter: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✨ Google Sheets Submit Handler
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Submission Failed");

      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        resume: '',
        coverLetter: '',
      });

      setTimeout(() => setSubmitted(false), 5000);

    } catch (err) {
      console.error(err);
      setError("Unable to send! Try again or email us manually.");
    } finally {
      setLoading(false);
    }
  };

  // ⭐ Success UI
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
              Your application was submitted successfully. We will get back to you soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">

          {/* Contact Email Banner */}
          <div className="bg-[#2ab5ac] text-white p-6 rounded-lg text-center mb-8">
            <Mail className="inline-block mr-2 mb-1" size={24} />
            <span style={{ fontFamily: 'Cambria, serif' }} className="text-lg">
              Send your resume directly to
              <a href="mailto:aegis.spt@gmail.com" className="ml-1 font-semibold underline hover:text-gray-100 transition">
                aegis.spt@gmail.com
              </a>
            </span>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#003366] text-center mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Submit Your Application
            </h2>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>

              {/* First + Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-[#003366] font-semibold mb-2">First Name *</label>
                  <input type="text" id="firstName" name="firstName" value={formData.firstName}
                    onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:border-[#2ab5ac]" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-[#003366] font-semibold mb-2">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" value={formData.lastName}
                    onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:border-[#2ab5ac]" />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-[#003366] font-semibold mb-2">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email}
                    onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:border-[#2ab5ac]" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[#003366] font-semibold mb-2">Phone *</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone}
                    onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:border-[#2ab5ac]" />
                </div>
              </div>

              {/* Position */}
              <div className="mb-6">
                <label htmlFor="position" className="block text-[#003366] font-semibold mb-2">Position Applied For *</label>
                <input type="text" name="position" id="position" value={formData.position}
                  onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:border-[#2ab5ac]" />
              </div>

              {/* Resume */}
              <div className="mb-6">
                <label htmlFor="resume" className="block text-[#003366] font-semibold mb-2">Resume/CV</label>
                <textarea id="resume" name="resume" value={formData.resume}
                  onChange={handleChange} rows={4} placeholder="Paste resume text or link"
                  className="w-full px-4 py-3 border rounded-lg focus:border-[#2ab5ac]" />
              </div>

              {/* Cover Letter */}
              <div className="mb-8">
                <label htmlFor="coverLetter" className="block text-[#003366] font-semibold mb-2">Cover Letter</label>
                <textarea id="coverLetter" name="coverLetter" value={formData.coverLetter}
                  onChange={handleChange} rows={6} placeholder="Write why you want to join..."
                  className="w-full px-4 py-3 border rounded-lg focus:border-[#2ab5ac]" />
              </div>

              <button type="submit" disabled={loading}
                className="w-full bg-[#2ab5ac] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#249c94] transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
