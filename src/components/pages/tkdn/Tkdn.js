import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "./HeroSection";
import Benefit from "./Benefit";
import Navigation from "../../Navbar";
import Desc from "./Desc";
import Definition from "./Definition";
import StatutoryLaws from "./StatutoryLaws";
import ContentAssessment from "./ContentAssessment";
import Provision from "./Provision";
import LCAProcess from "./LCAProcess";
import FAQ from "./FAQ";
import Impartiality from "./Impartiality";
import HandlingProcess from "./HandlingProcess";
import ComplainForm from "./ComplainForm";
import ContactUs from "./ContactUs";

function Tkdn() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navigation />
      <HeroSection />
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <Desc />
      </div>
      <Definition />
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <Benefit />
      </div>
      <StatutoryLaws />
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <ContentAssessment />
      </div>
      <Provision />
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <LCAProcess />
      </div>
      <FAQ />
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <Impartiality />
      </div>
      <HandlingProcess />
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <ComplainForm />
        <ContactUs />
      </div>
    </>
  );
}

export default Tkdn;
