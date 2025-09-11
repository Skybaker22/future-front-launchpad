
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-datax-navy">
      {/* Background decorative element */}
      <div className="absolute inset-0 bg-wave-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glassmorphism rounded-2xl p-8 md:p-12 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join the <span className="text-datax-teal">Pilot Study</span>
              </h2>
              <p className="text-gray-400 mb-4">
                Be among the first to experience how DataX revolutionizes secure access to life science data.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-300">
                  <span className="text-datax-teal mr-3 mt-1">•</span>
                  Minimize financial risk with a low-barrier entry
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-datax-teal mr-3 mt-1">•</span>
                  Unlock AI collaborations that accelerate innovation in healthcare
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-datax-teal mr-3 mt-1">•</span>
                  Drive research impact & create new revenue streams
                </li>
              </ul>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full glassmorphism flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-datax-teal" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Contact Us</h4>
                    <p className="text-sm text-datax-teal">info@datax.me</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-4">
                <div>
                  <Input
                    className="glassmorphism border-white/10 bg-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Input
                    className="glassmorphism border-white/10 bg-transparent"
                    placeholder="Email address"
                    type="email"
                  />
                </div>
                <div>
                  <Input
                    className="glassmorphism border-white/10 bg-transparent"
                    placeholder="Company name"
                  />
                </div>
                <Button 
                  className="w-full bg-datax-teal text-datax-navy hover:bg-datax-teal/80"
                >
                  Request Pilot Access <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  We prioritize your privacy. All information shared is protected by our confidentiality agreement.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
