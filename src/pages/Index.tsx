import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TabsSection from '@/components/TabsSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import StepsSection from '@/components/StepsSection';
import ContactSection from '@/components/ContactSection';
import DataPartnersSection from '@/components/DataPartnersSection';
import FAQSection from '@/components/FAQSection';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import dataxPlatformMockup from '@/assets/datax-platform-mockup.png';

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
            {/* Section Header */}
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Complete <span className="font-serif italic text-datax-teal">Data Journey</span>
              </h2>
              
              {/* Visual Chips */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {['Discovery', 'Access', 'Processing'].map((chip) => (
                  <span 
                    key={chip}
                    className="px-4 py-2 rounded-full bg-datax-teal/15 border border-datax-teal/30 text-datax-teal font-medium text-sm"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-300 text-lg">
                An AI-powered research platform with an intelligent agent that helps you 
                find the right datasets — turning complex data searches into simple conversations.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto relative">
              {/* Ambient glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-datax-teal/25 via-datax-cyan/15 to-datax-teal/25 rounded-3xl blur-3xl opacity-70"></div>
              <div className="relative group">
                <img 
                  src={dataxPlatformMockup} 
                  alt="DataX Platform Interface with AI Agent - Healthcare data collaboration and intelligent assistant"
                  className="w-full rounded-2xl shadow-[0_30px_100px_-20px_rgba(0,0,0,0.6),0_0_50px_rgba(45,212,191,0.2)] border border-white/15 transition-all duration-700 ease-out hover:scale-[1.01] hover:shadow-[0_35px_120px_-20px_rgba(0,0,0,0.7),0_0_70px_rgba(45,212,191,0.3)] backdrop-blur-sm"
                  style={{ 
                    imageRendering: 'crisp-edges',
                    filter: 'contrast(1.02) saturate(1.05)'
                  }}
                />
                {/* Glass reflection overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none"></div>
                {/* Bottom fade for depth */}
                <div className="absolute inset-x-0 bottom-0 h-20 rounded-b-2xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
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
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Contact Section - Warm */}
      <ContactSection />
      
      {/* CTA Banner */}
      <CTABanner />
      
      <Footer />
    </div>
  );
};

export default Index;
