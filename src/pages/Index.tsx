
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TabsSection from '@/components/TabsSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import StepsSection from '@/components/StepsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-datax-navy text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      
      {/* Platform Interface Image */}
      <section id="features" className="py-16 bg-datax-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <img 
              src="/lovable-uploads/datax_portal_cohort.png" 
              alt="DataX Platform Interface - Patient cohort discovery and data analysis"
              className="w-full rounded-2xl shadow-2xl border border-white/10 transition-transform duration-500 ease-out hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>
      
      <TabsSection />
      <FeaturesGrid />
      <StepsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
