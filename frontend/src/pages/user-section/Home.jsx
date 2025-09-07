import React from "react";
import HeroSection from "../../components/user-section/homePage/HeroSection.jsx";
import InnovationSection from "../../components/user-section/homePage/InnovationSection.jsx";
import EngineeringSection from "../../components/user-section/homePage/EngineeringSection.jsx";
import ModernizeSection from "../../components/user-section/homePage/ModernizeSection.jsx";
import ManageSection from "../../components/user-section/homePage/ManageSection.jsx";
import MissionSection from "../../components/user-section/homePage/MissionSection.jsx";
import IndustryExpertise from "../../components/user-section/homePage/IndustryExpertise.jsx";
import ServicesSection from "../../components/user-section/homePage/ServicesSection.jsx";
import PartnerEcosystem from "../../components/user-section/homePage/PartnerEcosystem.jsx";
import CallToAction from "../../components/user-section/homePage/CallToAction.jsx";
import ContactSection from "../../components/user-section/homePage/ContactSection.jsx";
import Imagine from "../../components/user-section/homePage/Imagine.jsx";

function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
      <InnovationSection />
      <Imagine />
      <EngineeringSection />
      <ModernizeSection />
      <ManageSection />
      <MissionSection />
      <IndustryExpertise />
      <ServicesSection />
      <PartnerEcosystem />
      <CallToAction />
      <ContactSection />
    </div>
  );
}

export default Home;
