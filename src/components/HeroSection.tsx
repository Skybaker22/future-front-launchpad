
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center bg-datax-navy">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-wave-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="flex flex-col items-start max-w-3xl">
          <div className="inline-flex items-center space-x-2 glassmorphism py-2 px-4 rounded-full mb-6">
            <span className="w-2 h-2 bg-datax-teal rounded-full animate-pulse"></span>
            <p className="text-sm">Stealth mode - Limited access</p>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Data</span>
            <span className="text-datax-teal">X</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-200">
            Empowering life science companies to access sensitive data while minimizing financial risk
          </h2>
          
          <p className="text-lg text-gray-300 max-w-lg mb-8">
            Our innovative platform provides secure access to critical life science data, enabling breakthrough research while protecting privacy and reducing financial exposure.
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Join the Pilot Study</h3>
            <p className="text-gray-300 mb-4">
              Be among the first to experience how DataX revolutionizes secure access to life science data.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-datax-teal mr-2">•</span>
                Minimize financial risk with a low-barrier entry
              </li>
              <li className="flex items-start">
                <span className="text-datax-teal mr-2">•</span>
                Unlock AI collaborations that accelerate innovation in healthcare
              </li>
              <li className="flex items-start">
                <span className="text-datax-teal mr-2">•</span>
                Drive research impact & create new revenue streams
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-datax-teal text-datax-navy hover:bg-datax-teal/80"
            >
              Join Pilot Study <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-datax-teal/30 hover:bg-datax-teal/10"
            >
              Contact Us
            </Button>
          </div>
          
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
    </div>
  );
};

export default HeroSection;
