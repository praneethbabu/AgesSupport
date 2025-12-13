import { useState } from 'react';
import { X, Upload } from 'lucide-react';

interface Role {
  id: string;
  title: string;
  img: string;
  description: string;
  responsibilities: string[];
}

// <-- Your confirmed Google Apps Script Web App URL -->
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwziB5EVvUe8LqdLs_6E0nccDxEYohv9Po5PtLb-YZmwhG8_oFoh1kLC5yV-YJDoNnk/exec";

const RolesSection = () => {
  const roles: Role[] = [
    {
      id: 'dsw',
      title: 'Disability Support Workers',
      img: 'https://sageeducation.edu.au/wp-content/uploads/2023/11/Disability.png',
      description:
        'Provide compassionate and professional support to individuals with disabilities, helping them achieve their goals and maintain independence in daily living activities.',
      responsibilities: [
        'Assist with personal care and hygiene activities',
        'Support employment and community participation',
        'Help with meal preparation and nutrition',
        'Provide emotional support and companionship',
        'Maintain detailed care records',
        'Collaborate with healthcare professionals',
      ],
    },
    {
      id: 'bsp',
      title: 'Behaviour Support Practitioners',
      img: 'https://static.wixstatic.com/media/2e3c2e_da4268c155fe403288372170f8950b76~mv2.jpeg',
      description:
        'Implement evidence-based behavior support strategies to help individuals develop positive behaviors and manage challenging situations effectively.',
      responsibilities: [
        'Conduct behavioral assessments',
        'Develop personalized behavior support plans',
        'Monitor and document behavioral progress',
        'Train caregivers on support strategies',
        'Collaborate with multidisciplinary teams',
        'Implement positive reinforcement techniques',
      ],
    },
    {
      id: 'ahp',
      title: 'Allied Health Professionals',
      img: 'https://empowercare.me/wp-content/uploads/2025/05/allied-health-1-1024x538.jpg',
      description:
        'Deliver specialized therapeutic and rehabilitative services across various disciplines to enhance individual health and well-being outcomes.',
      responsibilities: [
        'Conduct assessments and evaluations',
        'Develop individualized treatment plans',
        'Provide therapy and rehabilitation services',
        'Monitor client progress and outcomes',
        'Document clinical notes and reports',
        'Communicate with interdisciplinary teams',
      ],
    },
    {
      id: 'admin',
      title: 'Administrative Staff',
      img: 'https://www.abetteranswer.com/hubfs/AdobeStock_379063655.jpg',
      description:
        'Support organizational operations through administrative excellence, ensuring smooth and efficient service delivery across all departments.',
      responsibilities: [
        'Manage scheduling and appointments',
        'Handle financial processing and invoicing',
        'Maintain accurate records and documentation',
        'Process applications and inquiries',
        'Coordinate meetings and events',
        'Provide customer service and support',
      ],
    },
  ];

  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    positionAppliedFor: '',
    resume: null as File | null,
    coverLetter: '',
  });

  // ✅ BASE64 HELPER (NEW)
  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    });

  const handleApplyClick = (role: Role) => {
    setSelectedRole(role);
    setShowApplicationForm(true);
    setFormData({
      ...formData,
      positionAppliedFor: role.title,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      resume: file,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert('Please fill the required fields.');
      return;
    }

    if (!formData.resume) {
      alert('Please upload your resume (PDF / DOC / DOCX).');
      return;
    }

    try {
      setLoading(true);

      // ✅ Convert resume to Base64
      const resumeBase64 = await fileToBase64(formData.resume);

      const payload = new FormData();
      payload.append('firstName', formData.firstName);
      payload.append('lastName', formData.lastName);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('positionAppliedFor', formData.positionAppliedFor);
      payload.append('coverLetter', formData.coverLetter || '');

      // ✅ UPDATED RESUME FIELDS
      payload.append('resumeBase64', resumeBase64);
      payload.append('resumeName', formData.resume.name);
      payload.append('resumeType', formData.resume.type);

      if (selectedRole) {
        payload.append('roleId', selectedRole.id);
      }

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: payload,
      });

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        alert('Application submitted successfully! We will review your application soon.');
        setShowApplicationForm(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          positionAppliedFor: '',
          resume: null,
          coverLetter: '',
        });
      } else {
        alert(result.message || 'Failed to submit application.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred while submitting.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <h2
            className="text-5xl font-bold text-center text-[#003366] mb-16"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Available Roles
          </h2>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roles.map((role) => (
              <div
                key={role.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl
                           transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={role.img}
                    alt={role.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                </div>

                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-[#003366] mb-4"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {role.title}
                  </h3>

                  <button
                    onClick={() => handleApplyClick(role)}
                    className="w-full bg-gradient-to-r from-[#2ab5ac] to-[#1a8c85]
                             text-white font-semibold py-3 px-4 rounded-lg
                             hover:from-[#1a8c85] hover:to-[#0f6560]
                             transition-all duration-300 transform hover:scale-105
                             shadow-md hover:shadow-lg"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showApplicationForm && selectedRole && (
        <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-gradient-to-r from-[#2ab5ac] to-[#1a8c85] p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
                  Application Form
                </h2>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-200"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#003366] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                      {selectedRole.title}
                    </h3>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[#003366] mb-2">Job Description</h4>
                      <p className="text-gray-600 leading-relaxed">{selectedRole.description}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-[#003366] mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {selectedRole.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start text-gray-600">
                            <span className="inline-block w-2 h-2 bg-[#2ab5ac] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#003366] mb-4">Application Details</h4>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-[#003366] mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                                     focus:outline-none focus:ring-2 focus:ring-[#2ab5ac]
                                     focus:border-transparent transition-all duration-200"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#003366] mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                                     focus:outline-none focus:ring-2 focus:ring-[#2ab5ac]
                                     focus:border-transparent transition-all duration-200"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#003366] mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg
                                   focus:outline-none focus:ring-2 focus:ring-[#2ab5ac]
                                   focus:border-transparent transition-all duration-200"
                          placeholder="john.doe@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#003366] mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg
                                   focus:outline-none focus:ring-2 focus:ring-[#2ab5ac]
                                   focus:border-transparent transition-all duration-200"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#003366] mb-2">
                          Position Applied For *
                        </label>
                        <input
                          type="text"
                          name="positionAppliedFor"
                          value={formData.positionAppliedFor}
                          disabled
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg
                                   bg-gray-100 text-gray-600 cursor-not-allowed"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#003366] mb-2">
                          Resume / CV *
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                            required
                            className="hidden"
                            id="resume-upload"
                          />
                          <label
                            htmlFor="resume-upload"
                            className="flex items-center justify-center w-full px-4 py-3
                                     border-2 border-dashed border-[#2ab5ac] rounded-lg
                                     bg-[#E8F6F5] hover:bg-[#d4f3ed] cursor-pointer
                                     transition-all duration-200"
                          >
                            <div className="flex items-center gap-2">
                              <Upload className="w-5 h-5 text-[#2ab5ac]" />
                              <span className="text-sm text-gray-600">
                                {formData.resume ? formData.resume.name : 'Click to upload'}
                              </span>
                            </div>
                          </label>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#003366] mb-2">
                          Cover Letter (Optional)
                        </label>
                        <textarea
                          name="coverLetter"
                          value={formData.coverLetter}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg
                                   focus:outline-none focus:ring-2 focus:ring-[#2ab5ac]
                                   focus:border-transparent transition-all duration-200"
                          placeholder="Tell us why you're interested in this position..."
                        />
                      </div>

                      <div className="flex gap-4 pt-4">
                        <button
                          type="submit"
                          className="flex-1 bg-gradient-to-r from-[#2ab5ac] to-[#1a8c85]
                                   text-white font-semibold py-3 rounded-lg
                                   hover:from-[#1a8c85] hover:to-[#0f6560]
                                   transition-all duration-300 transform hover:scale-105"
                        >
                          {loading ? 'Submitting...' : 'Submit Application'}
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowApplicationForm(false)}
                          className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg
                                   hover:bg-gray-300 transition-all duration-300"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RolesSection;
