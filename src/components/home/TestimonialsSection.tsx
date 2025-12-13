import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Aegis Support has transformed my daily life. Their staff are professional, caring, and truly understand my needs.",
      author: "Sarah M.",
      role: "NDIS Participant"
    },
    {
      quote: "The team at Aegis made the NDIS process so much easier. They were patient, knowledgeable, and supportive throughout.",
      author: "John D.",
      role: "Family Member"
    },
    {
      quote: "I've gained so much independence thanks to Aegis Support. They believe in my goals and help me achieve them.",
      author: "Emma R.",
      role: "NDIS Participant"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Participants Say</h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <Quote className="testimonial-quote-icon" />
              <p className="testimonial-text">{testimonial.quote}</p>
              <div className="testimonial-author">
                <div className="author-name">{testimonial.author}</div>
                <div className="author-role">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
