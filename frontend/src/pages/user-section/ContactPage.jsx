import React from "react";

import HeroSection from "../../components/user-section/contactPage/HeroSection";
import ServicesSection from "../../components/user-section/contactPage/ServicesSection";
import WhyChooseUs from "../../components/user-section/contactPage/WhyChooseUs";
import HowWeWork from "../../components/user-section/contactPage/HowWeWork";
import DigitalResources from "../../components/user-section/contactPage/DigitalResources";
import ContactForm from "../../components/user-section/contactPage/ContactForm";
import CTASection from "../../components/user-section/contactPage/CTASection";

import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="App">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <HowWeWork />
      <DigitalResources />
      <ContactForm />
      <CTASection />
    </div>
  );
};

export default ContactPage;
