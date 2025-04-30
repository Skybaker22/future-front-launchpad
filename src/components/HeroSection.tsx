
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center bg-grid">
      {/* Background decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-futuristic-purple/20 filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-futuristic-cyan/20 filter blur-3xl animate-pulse-glow"></div>
      
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-8">
            <div className="inline-flex items-center space-x-2 glassmorphism py-2 px-4 rounded-full mb-6">
              <span className="w-2 h-2 bg-futuristic-cyan rounded-full animate-pulse"></span>
              <p className="text-sm">Introducing the future of technology</p>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold">
              Revolutionize Your 
              <span className="text-gradient"> Digital Experience</span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-lg">
              We're building the next generation platform that empowers businesses to innovate faster and scale smarter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-futuristic-purple to-futuristic-magenta hover:opacity-90">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5">
                Schedule Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 pt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center">
                    <span className="text-xs font-medium">{i}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="font-bold text-white">1,000+</span> businesses already using our platform
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center animate-float">
            <div className="w-full max-w-lg aspect-square relative">
              <div className="absolute inset-0 glassmorphism rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-futuristic-purple/20 to-futuristic-cyan/20 rounded-xl"></div>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-40 h-40 bg-futuristic-cyan/30 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-futuristic-purple/40 rounded-full"></div>
                  </div>
                </div>
                
                {/* Abstract UI elements */}
                <div className="absolute top-12 left-8 w-20 h-3 glassmorphism rounded-full"></div>
                <div className="absolute top-20 left-12 w-12 h-3 glassmorphism rounded-full"></div>
                <div className="absolute bottom-12 right-8 w-20 h-3 glassmorphism rounded-full"></div>
                <div className="absolute bottom-20 right-12 w-12 h-3 glassmorphism rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
