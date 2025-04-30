
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import HowItWorks from '@/components/HowItWorks';
import ContactSection from '@/components/ContactSection';
import { Database, Shield, LineChart, Lock, Server, Share2 } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-datax-navy text-foreground overflow-x-hidden">
      <Navbar />
      
      <HeroSection />
      
      {/* Features Section */}
      <section id="features" className="py-24 relative overflow-hidden bg-datax-navy">
        {/* Background decorative element */}
        <div className="absolute inset-0 bg-wave-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Key <span className="text-datax-teal">Features</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Our platform offers unique capabilities tailored to life science companies working with sensitive data
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Shield}
              title="Risk Management"
              description="Proprietary algorithms analyze and minimize financial risk exposure when accessing sensitive data."
            />
            <FeatureCard
              icon={Lock}
              title="Secure Access"
              description="End-to-end encrypted pathways for accessing and utilizing sensitive life science data."
            />
            <FeatureCard
              icon={LineChart}
              title="Data Analytics"
              description="Advanced analytics tools that work with encrypted data without compromising security."
            />
            <FeatureCard
              icon={Database}
              title="Centralized Repository"
              description="Single secure source for accessing multiple life science datasets across institutions."
            />
            <FeatureCard
              icon={Server}
              title="Compliance Engine"
              description="Automated regulatory compliance with HIPAA, GDPR, and industry-specific requirements."
            />
            <FeatureCard
              icon={Share2}
              title="Collaborative Tools"
              description="Secure data sharing and collaboration features for cross-team research initiatives."
            />
          </div>
        </div>
      </section>
      
      <HowItWorks />
      
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-datax-navy">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <span className="font-bold text-2xl">
                <span className="text-white">Data</span>
                <span className="text-datax-teal">X</span>
              </span>
            </div>
            
            <p className="text-sm text-gray-500">© 2025 DataX. All rights reserved.</p>
            
            <div className="flex gap-4 mt-6 md:mt-0">
              <p className="text-xs text-gray-500">
                Contact: <a href="mailto:timo.himmelsbach@datax.me" className="text-datax-teal hover:text-datax-teal/80">timo.himmelsbach@datax.me</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
