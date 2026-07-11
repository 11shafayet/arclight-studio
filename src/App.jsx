import { Route, Routes } from "react-router-dom";
import DeliveryProof from "./components/DeliveryProof.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
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
    </>
  );
}

export default function App() {
  return (
    <div className="site-surface min-h-screen bg-paper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}
