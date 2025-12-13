import { X } from 'lucide-react';
import { useState } from 'react';
import '../styles/modal.css';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  serviceInterest: string;
  message: string;
}

// ✅ Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzR4MqaVDcWZx6wS8TN9XgX0Fk07JqY45FTsuVQju2vBrAShqv6MuT5OolC--p8v5pq/exec";

const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    serviceInterest: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] =
    useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError('');
  };

  // ✅ FIXED SUBMIT HANDLER (NO JSON, NO CORS)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please fill all required fields.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // 🔹 Build FormData (NO preflight)
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('preferredDate', formData.preferredDate);
      payload.append('preferredTime', formData.preferredTime);
      payload.append('serviceInterest', formData.serviceInterest);
      payload.append('message', formData.message);

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: payload,
      });

      const result = await response.json();

      if (result.status === 'success') {
        setSubmitStatus('success');

        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
          setFormData({
            name: '',
            email: '',
            phone: '',
            preferredDate: '',
            preferredTime: '',
            serviceInterest: '',
            message: '',
          });
        }, 2000);
      } else {
        setError(result.message || 'Failed to submit consultation.');
        setSubmitStatus('error');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X />
        </button>

        <h2 className="modal-title">Book a Consultation</h2>
        <p className="modal-subtitle">
          Fill out the form below and our team will contact you within 24 hours.
        </p>

        {submitStatus === 'success' ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Thank You!</h3>
            <p>Your consultation request has been received.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="consultation-form">

            {/* Name */}
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="04XX XXX XXX"
                required
              />
            </div>

            {/* Preferred Date */}
            <div className="form-group">
              <label>Preferred Date</label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Preferred Time */}
            <div className="form-group">
              <label>Preferred Time</label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
              >
                <option value="">Select time</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="01:00 PM">01:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="03:00 PM">03:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
                <option value="05:00 PM">05:00 PM</option>
              </select>
            </div>

            {/* Service Interest */}
            <div className="form-group">
              <label>Service Interest</label>
              <select
                name="serviceInterest"
                value={formData.serviceInterest}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="Assist Personal Activities">Assist Personal Activities</option>
                <option value="Household Tasks">Household Tasks</option>
                <option value="Community Participation">Community Participation</option>
                <option value="Development Life Skills">Development Life Skills</option>
                <option value="Travel & Transport">Travel & Transport</option>
                <option value="Behaviour Support">Behaviour Support</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="form-group">
              <label>Message / Special Requirements</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your needs..."
              />
            </div>

            {error && <p className="form-error">{error}</p>}

            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Book Consultation'}
            </button>

          </form>
        )}
      </div>
    </div>
  );
};

export default ConsultationModal;
