import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TabsSection from '@/components/TabsSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import StepsSection from '@/components/StepsSection';
import ContactSection from '@/components/ContactSection';
import DataPartnersSection from '@/components/DataPartnersSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Hero - Dark gradient with globe */}
      <div className="bg-stripe-gradient">
        <HeroSection />
        
        {/* Platform Interface Image with angled transition */}
        <section id="features" className="py-16 pb-40 relative angled-divider-to-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <img 
                src="/lovable-uploads/datax_portal_v2.png" 
                alt="DataX Platform Interface - Patient cohort discovery and data analysis"
                className="w-full rounded-2xl shadow-2xl border border-white/10 transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(45,212,191,0.3)]"
              />
            </div>
          </div>
        </section>
      </div>
      
      {/* Tabs Section - Light background */}
      <TabsSection />
      
      {/* Features Grid - Dark with gradient */}
      <FeaturesGrid />
      
      {/* Data Partners Globe Section */}
      <DataPartnersSection />
      
      {/* Steps Section - Light/Mid background */}
      <StepsSection />
      
      {/* Contact Section - Warm */}
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Index;
