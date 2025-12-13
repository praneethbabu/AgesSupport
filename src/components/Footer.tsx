import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* ================== NEUMORPHIC INLINE CSS ================== */}
      <style>
        {`
          .footer-bg {
            background: #ffffff;
          }

          .neu-footer-card {
            background: #ffffff;
            padding: 30px;
            border-radius: 20px;
            box-shadow:
              8px 8px 18px rgba(0,0,0,0.15),
              -8px -8px 18px rgba(255,255,255,0.9);
            transition: 0.2s ease;
          }

          .neu-footer-card:hover {
            transform: translateY(-2px);
          }

          .footer-icon {
            background: linear-gradient(120deg, #0a74da, #1fae55);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .neu-icon {
            width: 45px;
            height: 45px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #ffffff;
            box-shadow:
              5px 5px 12px rgba(0,0,0,0.12),
              -5px -5px 12px rgba(255,255,255,1);
            transition: 0.2s ease;
          }

          .neu-icon:hover {
            transform: translateY(-3px);
            box-shadow:
              8px 8px 18px rgba(0,0,0,0.18),
              -8px -8px 18px rgba(255,255,255,1);
          }

          .footer-link {
            color: #4b5563;
            transition: 0.2s;
          }

          .footer-link:hover {
            color: #0a74da;
          }

          .footer-title {
            font-family: Georgia, serif;
            color: #003366;
          }

          .footer-text {
            font-family: Cambria, Georgia, serif;
            color: #4b5563;
          }

          .social-icon {
            font-size: 20px;
            background: linear-gradient(120deg, #0a74da, #1fae55);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>

      {/* ================== FOOTER START ================== */}
      <footer className="footer-bg text-black py-14">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* =========== Brand Info =========== */}
          <div className="neu-footer-card">
            <img src="/logo.png" className="h-12 mb-4" />
            <p className="footer-text leading-relaxed">
              Delivering compassionate, high-quality disability support across Queensland.
            </p>

            <div className="flex space-x-4 mt-6">
              <div className="neu-icon"><FaFacebook className="social-icon" /></div>
              <div className="neu-icon"><FaInstagram className="social-icon" /></div>
              <div className="neu-icon"><FaLinkedin className="social-icon" /></div>
              <div className="neu-icon"><FaWhatsapp className="social-icon" /></div>
              <div className="neu-icon"><FaYoutube className="social-icon" /></div>
            </div>
          </div>

          {/* =========== Quick Links =========== */}
          <div className="neu-footer-card">
            <h4 className="text-xl font-semibold mb-4 footer-title">Quick Links</h4>
            <ul className="space-y-2 footer-text">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about-us" className="footer-link">About Us</Link></li>
              <li><Link to="/our-services" className="footer-link">Services</Link></li>
              <li><Link to="/contact-us" className="footer-link">Contact</Link></li>
              <li><Link to="/career" className="footer-link">Career</Link></li>
              <li><Link to="/ndis-info" className="footer-link">NDIS Info</Link></li>
              <li><Link to="/privacypolicy" className="footer-link">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* =========== Contact Section =========== */}
          <div className="neu-footer-card">
            <h4 className="text-xl font-semibold mb-4 footer-title">Contact Information</h4>

            <ul className="space-y-4 footer-text">

              {/* Address */}
              <li className="flex items-center space-x-4">
                <div className="neu-icon">
                  <MapPin size={20} className="footer-icon" />
                </div>
                <span>Unit 4, 16 Kerr Street, Park Avenue, QLD 4701</span>
              </li>

              {/* Phone */}
              <li className="flex items-center space-x-4">
                <div className="neu-icon">
                  <Phone size={20} className="footer-icon" />
                </div>
                <a href="tel:0435767872" className="footer-link">
                  04 3576 7872
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center space-x-4">
                <div className="neu-icon">
                  <Mail size={20} className="footer-icon" />
                </div>
                <a href="mailto:aegis.spt@gmail.com" className="footer-link">
                  aegis.spt@gmail.com
                </a>
              </li>

              {/* Working Hours */}
              <li className="flex items-center space-x-4">
                <div className="neu-icon">
                  <Clock size={20} className="footer-icon" />
                </div>
                <span>Mon – Fri: 9:00 AM – 5:00 PM</span>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 text-center">
          <p className="footer-text text-sm">
            &copy; {currentYear} Aegis Support Pty Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
