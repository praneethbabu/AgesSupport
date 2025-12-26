import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ConsultationModal from "./components/ConsultationModal";
import ScrollToTop from "./pages/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import NDIS from "./pages/NDIS";
import PrivacyPolicy from "./pages/PrivacyPolicy";

/**
 * App Root Component
 */
function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openConsultation = () => setIsConsultationOpen(true);
  const closeConsultation = () => setIsConsultationOpen(false);

  return (
    <Router>
      {/* 🔹 Scroll to top on every route change */}
      <ScrollToTop />

      <div className="min-h-screen bg-white flex flex-col">

        {/* Fixed Header */}
        <Header onBookConsultation={openConsultation} />

        {/* Main Content */}
        <main className="flex-grow pt-24">
          <Routes>
            <Route
              path="/"
              element={<Home onBookConsultation={openConsultation} />}
            />
            <Route path="/about-us" element={<About />} />
            <Route path="/our-services" element={<Services />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/ndis-info" element={<NDIS />} />
            <Route path="/career" element={<Career />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Consultation Modal */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={closeConsultation}
        />
      </div>
    </Router>
  );
}

export default App;
