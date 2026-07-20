import { Route, Routes } from "react-router-dom";
import AnalyticsTracker from "./components/AnalyticsTracker.jsx";
import AppPreloader from "./components/AppPreloader.jsx";
import BackToTop from "./components/BackToTop.jsx";
import ContactSection from "./components/ContactSection.jsx";
import ContactPage from "./components/ContactPage.jsx";
import DeliveryProof from "./components/DeliveryProof.jsx";
import FaqSection from "./components/FaqSection.jsx";
// import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import ClientExperienceSection from "./components/ClientExperienceSection.jsx";
import Navbar from "./components/Navbar.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";
import ProjectsPage from "./components/ProjectsPage.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import PricingSection from "./components/PricingSection.jsx";
import ProcessSection from "./components/ProcessSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import WorkedWith from "./components/WorkedWith.jsx";

function Home() {
  return (
    <>
      <Hero />
      <WorkedWith />
      <DeliveryProof />
      <ProjectsSection />
      <ServicesSection />
      <PricingSection />
      <ProcessSection />
      <ClientExperienceSection />
      <FaqSection />
      <ContactSection />
      {/* <Footer /> */}
    </>
  );
}

export default function App() {
  return (
    <div className="site-surface min-h-screen bg-paper">
      <AnalyticsTracker />
      <AppPreloader />
      <div className="app-reveal">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </div>
      <BackToTop />
    </div>
  );
}
