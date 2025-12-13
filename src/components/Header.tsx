import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  onBookConsultation: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookConsultation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Aegis Support Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-[17px]">
            <Link to="/" className="hover:text-[#2AB9B0] transition">Home</Link>
            <Link to="/about-us" className="hover:text-[#2AB9B0] transition">About Us</Link>
            <Link to="/our-services" className="hover:text-[#2AB9B0] transition">Services</Link>
            <Link to="/contact-us" className="hover:text-[#2AB9B0] transition">Contact</Link>
            <Link to="/ndis-info" className="hover:text-[#2AB9B0] transition">NDIS Info</Link>
            <Link to="/career" className="hover:text-[#2AB9B0] transition">Career</Link>
            <Link to="/privacypolicy" className="hover:text-[#2AB9B0] transition">Privacy Policy</Link>

            {/* Book Consultation Button */}
            <button
              onClick={onBookConsultation}
              className="ml-4 px-5 py-2 rounded-full text-white font-semibold shadow-lg
                         bg-gradient-to-r from-[#0a74da] to-[#1fae55]
                         hover:opacity-90 transition"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-4 text-lg">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about-us" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/our-services" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link to="/ndis-info" onClick={() => setIsMenuOpen(false)}>NDIS Info</Link>
            <Link to="/career" onClick={() => setIsMenuOpen(false)}>Career</Link>
            <Link to="/privacypolicy" onClick={() => setIsMenuOpen(false)}>Privacy Policy</Link>

            {/* Mobile Book Consultation Button */}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onBookConsultation();
              }}
              className="mt-4 text-center px-4 py-3 rounded-full text-white font-semibold shadow-lg
                         bg-gradient-to-r from-[#0a74da] to-[#1fae55]
                         hover:opacity-90 transition"
            >
              Book Consultation
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
