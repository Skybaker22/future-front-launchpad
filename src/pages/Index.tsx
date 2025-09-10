
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import HowItWorks from '@/components/HowItWorks';
import ContactSection from '@/components/ContactSection';
import { Shield, Database, LineChart, HandCoins, Key, ShieldCheck } from 'lucide-react';

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
              icon={HandCoins}
              title="Secure and Transparent Pricing"
              description="Outcome-based pricing model that ensures you pay only for the actual business impact of the data."
            />
            <FeatureCard
              icon={Key}
              title="Secure Access to Datasets"
              description="Compliant access to sensitive datasets via federated learning ('Data visiting') technology."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Complete Transparency"
              description="Full oversight regarding when, by whom, and for what reasons data is accessed."
            />
            <FeatureCard
              icon={Shield}
              title="Regulatory Compliance"
              description="Anonymization and regulatory compliance toolsuit."
            />
            <FeatureCard
              icon={Database}
              title="Decentralized Repository"
              description="Data stays on premises in a decentralized repository (data room) with a trusted execution environment, while providing a single secure access point for multiple life science datasets across institutions."
            />
            <FeatureCard
              icon={LineChart}
              title="Data Analytics"
              description="Advanced analytics tools that work with encrypted data without compromising security."
            />
          </div>
        </div>
      </section>
      
      {/* For Data Providers Section */}
      <section id="data-providers" className="py-24 relative overflow-hidden bg-gradient-to-b from-datax-navy to-datax-navy/95">
        <div className="absolute inset-0 bg-wave-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              For <span className="text-datax-teal">Data Providers</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Unlock the value of your datasets through secure AI partnerships while maintaining full control
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glassmorphism rounded-xl p-6 text-center group hover:border-datax-teal/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-datax-teal/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-datax-teal/30 transition-all duration-300">
                <HandCoins className="w-8 h-8 text-datax-teal" />
              </div>
              <h3 className="text-lg font-bold mb-3">AI Partnership Gateway</h3>
              <p className="text-gray-400 text-sm">Gateway for AI partnerships from EU & worldwide. Double-digit pipeline of AI startups seeking collaborations.</p>
            </div>
            
            <div className="glassmorphism rounded-xl p-6 text-center group hover:border-datax-teal/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-datax-teal/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-datax-teal/30 transition-all duration-300">
                <LineChart className="w-8 h-8 text-datax-teal" />
              </div>
              <h3 className="text-lg font-bold mb-3">Academic Value Creation</h3>
              <p className="text-gray-400 text-sm">Joint research projects, publications in top-tier journals, and new grants & funding opportunities.</p>
            </div>
            
            <div className="glassmorphism rounded-xl p-6 text-center group hover:border-datax-teal/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-datax-teal/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-datax-teal/30 transition-all duration-300">
                <Shield className="w-8 h-8 text-datax-teal" />
              </div>
              <h3 className="text-lg font-bold mb-3">Secure On-Premise Infrastructure</h3>
              <p className="text-gray-400 text-sm">Federated learning technology keeps you in full control. Startups train on anonymized data on-premise, then leave with improved models.</p>
            </div>
            
            <div className="glassmorphism rounded-xl p-6 text-center group hover:border-datax-teal/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-datax-teal/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-datax-teal/30 transition-all duration-300">
                <Database className="w-8 h-8 text-datax-teal" />
              </div>
              <h3 className="text-lg font-bold mb-3">Outcome-Based Revenue</h3>
              <p className="text-gray-400 text-sm">Participate in future generated value - data for equity. We provide technical infrastructure to transparently track value along the data value chain.</p>
            </div>
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
                Contact: <a href="mailto:info@datax.me" className="text-datax-teal hover:text-datax-teal/80">info@datax.me</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
