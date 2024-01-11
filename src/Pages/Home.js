import React from "react";
import Banner from "../components/Banner";
import About from "../components/FrontPage/About";
import ServiceSection from "../components/FrontPage/ServiceSection";
import FAQSection from "../components/FrontPage/FAQSection";
import ContactinfoSection from "../components/FrontPage/ContactinfoSection";
import FeedbackSection from "../components/FrontPage/FeedbackSection";
import PricingSection from "../components/FrontPage/PricingSection";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <ServiceSection></ServiceSection>
      <PricingSection></PricingSection>
      <FAQSection></FAQSection>
      <ContactinfoSection></ContactinfoSection>
      <FeedbackSection></FeedbackSection>
    
     
     
    </div>
  );
};

export default Home;
