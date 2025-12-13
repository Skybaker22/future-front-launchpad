
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
            Secure Access to
          </h1>
          <h2 className="text-5xl md:text-7xl font-serif italic text-datax-teal mb-8">
            Life Science Data
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
            Empowering life science companies to access sensitive data while minimizing financial risk through innovative federated learning technology.
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
      
      {/* Bento Grid Cards */}
      <div className="container mx-auto px-4 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Stats Card */}
          <div className="glassmorphism rounded-2xl p-6 relative overflow-hidden group hover:border-datax-teal/30 transition-all duration-300">
            <div className="absolute top-4 right-4 w-16 h-16 bg-datax-teal/10 rounded-full blur-xl"></div>
            <span className="text-5xl font-bold text-datax-teal">100%</span>
            <p className="text-gray-400 mt-2">Data stays on-premise</p>
            <div className="mt-4 h-24 flex items-end">
              <div className="w-full h-full bg-gradient-to-t from-datax-teal/20 to-transparent rounded-lg"></div>
            </div>
          </div>
          
          {/* Features List Card */}
          <div className="glassmorphism rounded-2xl p-6 group hover:border-datax-teal/30 transition-all duration-300">
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                <Shield className="w-5 h-5 text-datax-teal" />
                <span className="text-sm">Federated Learning</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                <Key className="w-5 h-5 text-datax-teal" />
                <span className="text-sm">Secure Data Access</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                <Database className="w-5 h-5 text-datax-teal" />
                <span className="text-sm">Decentralized Repository</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                <Zap className="w-5 h-5 text-datax-teal" />
                <span className="text-sm">Regulatory Compliance</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                <CheckCircle className="w-5 h-5 text-datax-teal" />
                <span className="text-sm">Transparent Pricing</span>
              </div>
            </div>
          </div>
          
          {/* Analytics Card */}
          <div className="glassmorphism rounded-2xl p-6 relative overflow-hidden group hover:border-datax-teal/30 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-4 h-4 text-datax-teal" />
              <span className="text-sm text-gray-400">Data Analytics</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">7X</span>
              <span className="text-datax-teal text-sm">faster insights</span>
            </div>
            <div className="mt-6 flex gap-2">
              {[40, 65, 45, 80, 60, 90, 70].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-datax-teal/30 rounded-sm"
                  style={{ height: `${h}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
