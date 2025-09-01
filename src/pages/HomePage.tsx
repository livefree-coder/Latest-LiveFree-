import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesOverview from '../components/ServicesOverview';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <AboutSection />
      <FAQSection />
    </div>
  );
};

export default HomePage;