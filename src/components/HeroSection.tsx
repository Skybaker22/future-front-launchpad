
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Key, Database, Zap, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center bg-datax-navy">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-wave-pattern opacity-10"></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The Data Collaboration Layer
          </h1>
          <h2 className="text-5xl md:text-7xl font-serif italic text-datax-teal mb-8">
            for Healthcare AI
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
            Enabling life science companies to access proprietary healthcare data - securely, compliantly, and at scale.
          </p>
          
          <Button 
            size="lg" 
            className="bg-datax-teal text-datax-navy hover:bg-datax-teal/80 px-8 py-6 text-lg rounded-full"
            asChild
          >
            <a href="#contact">
              Join Us <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          
          <div className="flex items-center space-x-4 pt-12">
            <p className="text-sm text-gray-400">
              Supported by:
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-2 rounded-md">
                <span className="font-bold text-sm">XPLORE</span>
              </div>
              <div className="bg-white/10 p-2 rounded-md">
                <span className="font-bold text-sm">TUM Venture Labs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bento Grid Cards - Data Developer Benefits */}
      <div className="container mx-auto px-4 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Millions of Data Sets Card */}
          <div className="glassmorphism rounded-2xl p-6 relative overflow-hidden group hover:border-datax-teal/30 transition-all duration-300">
            <div className="absolute top-4 right-4 w-16 h-16 bg-datax-teal/10 rounded-full blur-xl"></div>
            <Database className="w-8 h-8 text-datax-teal mb-4" />
            <span className="text-3xl font-bold text-white">Millions</span>
            <p className="text-gray-400 mt-2">of data sets from our global data partners</p>
            <div className="mt-4 h-16 flex items-end gap-1">
              {[30, 50, 40, 70, 55, 85, 60, 90, 75].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-datax-teal/30 rounded-sm"
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Fast Access Card */}
          <div className="glassmorphism rounded-2xl p-6 relative overflow-hidden group hover:border-datax-teal/30 transition-all duration-300">
            <div className="absolute top-4 right-4 w-16 h-16 bg-datax-teal/10 rounded-full blur-xl"></div>
            <Zap className="w-8 h-8 text-datax-teal mb-4" />
            <span className="text-3xl font-bold text-white">Weeks</span>
            <p className="text-gray-400 mt-2">instead of months for data access</p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex-1">
                <div className="text-xs text-gray-500 mb-1">Traditional</div>
                <div className="h-2 bg-gray-600 rounded-full w-full"></div>
              </div>
              <div className="flex-1">
                <div className="text-xs text-datax-teal mb-1">With DataX</div>
                <div className="h-2 bg-datax-teal rounded-full w-1/3"></div>
              </div>
            </div>
          </div>
          
          {/* Compliant & Secure Card */}
          <div className="glassmorphism rounded-2xl p-6 relative overflow-hidden group hover:border-datax-teal/30 transition-all duration-300">
            <div className="absolute top-4 right-4 w-16 h-16 bg-datax-teal/10 rounded-full blur-xl"></div>
            <Shield className="w-8 h-8 text-datax-teal mb-4" />
            <span className="text-3xl font-bold text-white">100%</span>
            <p className="text-gray-400 mt-2">Fully compliant and secure data access</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-datax-teal" />
                <span className="text-xs text-gray-400">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-datax-teal" />
                <span className="text-xs text-gray-400">HIPAA Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
