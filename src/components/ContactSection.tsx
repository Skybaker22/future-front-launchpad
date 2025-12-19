
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Mail, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const benefits = [
    'A privacy-preserving collaboration layer enabling compliant, scalable data access',
    'Unlock AI collaborations that accelerate innovation in healthcare',
    'Drive research impact & create new revenue streams',
    'Healthcare providers: Monetize your data securely while maintaining full control and patient privacy',
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-section-warm">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              <span className="font-serif italic text-datax-teal">Get Started</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Whether you're a <span className="font-semibold text-gray-800">researcher seeking data</span> or a{" "}
              <span className="font-semibold text-gray-800">healthcare provider</span> looking to create 
              recurring revenue from your data without compromising control and safety — we're here to help.
            </p>
          </div>
          
          <div className="glassmorphism-light rounded-3xl p-8 md:p-12 bg-white/60">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left - Benefits */}
              <div>
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-datax-teal/20 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-datax-teal" />
                      </div>
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white/80 border border-gray-200 rounded-xl p-6 mt-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-datax-teal/20 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-datax-teal" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Contact Us Directly</p>
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
                    className="bg-white border-gray-200 h-12 rounded-xl text-gray-900 placeholder:text-gray-500"
                    placeholder="Your name"
                  />
                  <Input
                    className="bg-white border-gray-200 h-12 rounded-xl text-gray-900 placeholder:text-gray-500"
                    placeholder="Email address"
                    type="email"
                  />
                  <Input
                    className="bg-white border-gray-200 h-12 rounded-xl text-gray-900 placeholder:text-gray-500"
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
