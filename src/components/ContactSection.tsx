
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Mail, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const benefits = [
    'A privacy-preserving collaboration layer enabling compliant, scalable data access',
    'Unlock AI collaborations that accelerate innovation in healthcare',
    'Drive research impact & create new revenue streams',
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-section-dark">
      <div className="absolute inset-0 bg-wave-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="font-serif italic text-datax-teal">Get Started</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience how DataX revolutionizes secure access to life science data for your organization.
            </p>
          </div>
          
          <div className="glassmorphism rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left - Benefits */}
              <div>
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-datax-teal/20 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-datax-teal" />
                      </div>
                      <p className="text-gray-300">{benefit}</p>
                    </div>
                  ))}
                </div>
                
                <div className="glassmorphism rounded-xl p-6 mt-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-datax-teal/20 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-datax-teal" />
                    </div>
                    <div>
                      <p className="font-medium">Contact Us Directly</p>
                      <a href="mailto:info@datax.me" className="text-datax-teal hover:underline">
                        info@datax.me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right - Form */}
              <div>
                <form className="space-y-4">
                  <Input
                    className="glassmorphism border-white/10 bg-transparent h-12 rounded-xl"
                    placeholder="Your name"
                  />
                  <Input
                    className="glassmorphism border-white/10 bg-transparent h-12 rounded-xl"
                    placeholder="Email address"
                    type="email"
                  />
                  <Input
                    className="glassmorphism border-white/10 bg-transparent h-12 rounded-xl"
                    placeholder="Company name"
                  />
                  <Button 
                    className="w-full bg-datax-teal text-datax-navy hover:bg-datax-teal/80 h-12 rounded-xl text-base"
                    type="submit"
                  >
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <p className="text-xs text-center text-gray-500 pt-2">
                    We prioritize your privacy. All information shared is protected by our confidentiality agreement.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
